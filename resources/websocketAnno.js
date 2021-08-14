const webSocketAnno = (function (casId, view, tool){
    const session = "BF21F80432A6F47B5F7F72EEFD9CE121.jvm1"; // Bleibt erstmal fest

    const url = "ws://textannotator.texttechnologylab.org/uima";
    //  const WebSocket = require('ws');
    const webSocket = new WebSocket(url);

    let allAddresses = [];
    let casText;
    let toolElements = null; // Speichert alle gegenwärtige Informationen
    // Speichert die Annotationen des Quickpanel tools aus der gestarteten View
    let toolAnnotationsQuickpanel = null;


    // Falls toolElements noch null ist dann wurde noch keine Connection zum Websocket aufgebaut
    if (toolElements == null){
        startConnection();
    }

    function startConnection() {

        webSocket.onopen = function () {

            if (webSocket.readyState === webSocket.OPEN) {
                webSocket.send(JSON.stringify({cmd: 'session', data: {session: session}}));
                webSocket.send(JSON.stringify({cmd: 'open_cas', data: {casId: casId}}));
            }
        };

        webSocket.onmessage = (msg) => {
            var response = JSON.parse(msg.data);

            //response.cmd gibt an welche Art von Nachricht empfangen worden ist.
            switch (response.cmd) {
                case "session": {
                    break;
                }
                case "open_cas": {
                    casText = response.data.text;

                    webSocket.send(JSON.stringify({
                        cmd: 'open_view',
                        data: {casId: casId, view: view, force: true}
                    }));
                    break;
                }

                case "open_view": {
                    webSocket.send(JSON.stringify({
                        cmd: 'open_tool',
                        data: {casId: response.data.casId, view: response.data.view, toolName: tool}
                    }));
                    break;
                }

                case "open_tool": {
                    console.log("OPEN TOOL", response.data.toolName, response.data.currentView);
                    toolElements = response.data.toolElements;


                    // Da recpatcha view nur für neue Annotationen geöffnet wird
                    if (response.data.currentView != "recaptcha") {
                        toolAnnotationsQuickpanel = response.data.toolElements;


                        webSocket.send(JSON.stringify({
                            cmd: 'close_tool',
                            data: {casId: casId, tool: response.data.toolName, force: true}
                        }));

                        webSocket.send(JSON.stringify({
                            cmd: 'close_view',
                            data: {casId: casId, view: response.data.currentView, force: true}
                        }));

                    }


                    // Sobald alles geladen hat dann kann man die Seite starten
                    $('#startButton').removeAttr('disabled');
                    break;
                }

                case "msg": {
                    console.log(msg);
                    break;
                }
                case "close_view":{
                    console.log("CLOSE VIEW", response.data.view)
                    webSocket.send(JSON.stringify({
                        cmd: 'open_view',
                        data: {casId: casId, view: "recaptcha", force: true}
                    }));

                    break;
                }

            }

        };

        webSocket.onclose = function () {
            console.log('WebSocket Client Closed');
        };

        webSocket.onerror = (error) => {
            console.log("Error");
        };

    }

    function getWebSocketInstance(){
        return webSocket;
    }
    function getToolElementsInstance(){
        return toolElements;
    }
    function getToolAnnotationsQuickpanel(){
        return toolAnnotationsQuickpanel;
    }



    /**
     * Nimmt aus den quickpanel Tool die Lemma Werte jedes Tokens und speichert damit jeden Token
     * des Satzes in eine Liste ein. Mit der Liste gibt sie jeden Tokon als Button aus und die Id jedes Button
     * ist durch seine addresse(id) im "org.texttechnologylab.annotation.semaf.isobase.Entity" Tool gekennzeichnet
     * @param casText
     * @param targetTool
     */
    function displayTextAsButtons(targetTool) {
        var textAsList = [];
        var allLemmaBegin = [];
        var allLemmaEnd = [];

        // Ohne Punkte     let lemmas = toolElements["org.texttechnologylab.annotation.ocr.OCRToken"];
        var lemmas = toolElements["org.texttechnologylab.annotation.semaf.isobase.Entity"];
        for (let address in lemmas) {
            var begin = fromAddressToLemmaBegin(address);
            var end = fromAddressToLemmaEnd(address);

            // Damit Token nicht doppelt vorkommen in verschiedenen Versionen
            //      if (allAddresses.includes(begin)){
            //          continue;
            //      }

            // Tokeneigenschaften sind in gleicher Reiehnfolge in den 3 Listen gepeichert
            allLemmaBegin.push(begin);
            allLemmaEnd.push(end);
            allAddresses.push(address);

        }

        /*
            Falls die Aufgabe ist selber Annotationen zu bestimmen, dann ohne Kriterien einen Satz anzeigen.
            Zeigt einen zufälligen Satz an der mindestens 6 Token beinhaltet
        */
        if (targetTool == "standard") {

            // Satz soll mindestens 6 Token beinhalten
            while (true) {
                var sentences = toolElements["de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Sentence"];

                var keys = Object.keys(sentences);
             //   var randomKey = keys[getRandomIntMax(keys.length)]; // Bestimme zufälligen Satz(key)
                var randomKey = keys[0]; // Bestimme zufälligen Satz(key)


                var start = sentences[randomKey]["features"]["begin"];
                var end = sentences[randomKey]["features"]["end"];

                var startTokenIndex = allLemmaBegin.indexOf(start);
                var endTokenIndex = allLemmaEnd.indexOf(end) + 1;
                var lengthOfSentence = allLemmaEnd.slice(startTokenIndex, endTokenIndex).length;

                for (i = startTokenIndex; i < lengthOfSentence + startTokenIndex; i++) {
                    textAsList.push(casText.slice(allLemmaBegin[i], allLemmaEnd[i]));
                }

                if(textAsList.length >= 6){
                    break;
                }

            }
            // Es wird jedes Token als Button angezeigt
            addToken(textAsList, startTokenIndex);

        }
        // Aufgabe ist ein bestimmten Token zu finden, jenachdem wird bestimmter Textabschnitt angezeigt
        else {
            const NUMBEROFTOKENS = getRandomIntMinMax(10, 20); // Anzahl der Tokens die angezeigt werden
            // Index vom gesuchten Token
            var indexTarget = allLemmaBegin.indexOf(getRandomLemmaStartOfTargetTool(targetTool));
            // Index vom ersten Token des Textes der angezeigt wird
            var startTokenIndex = getRandomIntMinMax(indexTarget - NUMBEROFTOKENS, indexTarget);
            // Bestimme alle Token die angezeigt werden sollen
            for (i = startTokenIndex; i < NUMBEROFTOKENS + startTokenIndex; i++) {
                textAsList.push(casText.slice(allLemmaBegin[i], allLemmaEnd[i]));
            }
            // Es wird jedes Token als Button angezeigt
            addToken(textAsList, startTokenIndex);
        }

        // Für Tests: Token werden je nach toolTarget gefärbt
        colorToken(toolAnnotationsQuickpanel[targetTool], "#A569BD");


        // Alles definierte Hilfsfunktionen, die in "displayTextAsButtons()" genutzt werden

        /**
         * Hilfsfunktion
         * @param textAsList
         */
        function addToken(textAsList, startTokenIndex) {
            // Div in dem die Buttons eingefügt werden
            var currentDiv = document.getElementById("playArea");
            var newDiv = document.createElement("div");
            newDiv.className = "card-body";
            newDiv.innerHTML = "";
            currentDiv.appendChild(newDiv);


            for (i = 0; i < textAsList.length; i++) {
                let word = textAsList[i];

                // Erstelle ein Button mit dem Wort und gib ihm eine id
                var newButton = document.createElement("Button");
                newButton.className = "word-button";
                newButton.id = "address" + allAddresses[startTokenIndex + i];
                newButton.setAttribute("onclick", "tokenClicked(id)");

                // Setzt den Text des Buttons
                var newContent = document.createTextNode(word);
                newButton.appendChild(newContent);

                // füge das neu erstellte Element und seinen Inhalt ins DOM ein
                newDiv.appendChild(newButton);
            }
        }

        /**
         * Hilfsfunktion
         * @param tool
         */
        function colorToken(tool, color) {
            var idFromAllDisplayedTokens = getIdFromAllDisplayedTokens();
            console.log(idFromAllDisplayedTokens);
            for (let element in tool) {
                var begin = tool[element]["features"]["begin"];
                for (let idFromAllDisplayedToken in idFromAllDisplayedTokens) {
                    var id = idFromAllDisplayedTokens[idFromAllDisplayedToken];
                    var beginDisplayedToken = fromAddressToLemmaBegin(id);
                    if (begin == beginDisplayedToken) {
                        document.getElementById("address" + id).style.background = color;
                        //  document.getElementById("address"+id).className = color;
                    }
                }
            }
        }

        /**
         * Hilfsfunktion: Gibt den Index eines Token zurück
         * @param targetTool
         * @returns {*}
         */
        function getRandomLemmaStartOfTargetTool(targetTool) {
            var testListe = [];
            targetTool = toolElements[targetTool];

            // Speichert von jedem Token, dass mit dem bestimmten tool annotiert worden ist den lemmaBegin im Text in eine Liste ein.
            for (let toolKey in targetTool) {
                testListe.push(targetTool[toolKey]["features"]["begin"]);
            }

            var x = getRandomIntMax(testListe.length);
            return testListe[x];
        }
    }

    return{
        displayTextAsButtons: displayTextAsButtons,
        startConnection: startConnection,
        getWebSocketInstance: getWebSocketInstance,
        getToolElementsInstance: getToolElementsInstance,
        getToolAnnotationsQuickpanel: getToolAnnotationsQuickpanel,

    }
});