/**
 * Stellt eine Verbindung zum Websocket des Textannotators auf.
 * Beinhaltet Funktionen zum einzigen des Textes und Datenstrukturen, die Informationen zu Annotaionen beinhalten.
 * toolElements: Speichert immer alle aktuellen Informationen des Textes.
 * toolAnnotationsQuickpanel: Speichert Informationen zu bereits bestehende Annotationen aus der gestarteten View
 * @type {function(*=, *=, *=): {getWebSocketInstance: function(): WebSocket, getToolElementsInstance: function(): null, displayTextAsButtons: displayTextAsButtons, getToolAnnotationsQuickpanel: function(): null}}
 */


const webSocketAnno = (function (casId, view, tool, session){


    //wss für https, so funktioniert aber lokal nicht
    const url = "ws://textannotator.texttechnologylab.org/uima";
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
            const response = JSON.parse(msg.data);

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
                    console.log("Case: Open Tool")
                    toolElements = response.data.toolElements;

                    //  recpatcha view wird nur für neue Annotationen geöffnet.
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


                    // Sobald alles geladen hat kann man die Seite starten.
                    $('#startButton').removeAttr('disabled');
                    break;
                }

                case "msg": {
                    console.log(msg);
                    break;
                }
                case "close_view":{
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
     * @param targetTool
     */
    function displayTextAsButtons(targetTool) {
        let textAsList = [];
        let allLemmaBegin = [];
        let allLemmaEnd = [];

     //  let lemmas = toolElements["org.texttechnologylab.annotation.ocr.OCRToken"]; Ohne Punkte
       const lemmas = toolElements["org.texttechnologylab.annotation.semaf.isobase.Entity"];

        for (let address in lemmas) {
            const begin = fromAddressToLemmaBegin(address);
            const end = fromAddressToLemmaEnd(address);

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
            let startTokenIndex = 0;

            // Satz soll mindestens 6 Token beinhalten
            while (true) {
                const sentences = toolElements["de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Sentence"];

                const keys = Object.keys(sentences);
                const randomKey = keys[getRandomIntMax(keys.length)]; // Bestimme zufälligen Satz(key)
            //    var randomKey = keys[0]; // Erster Satz


                const start = sentences[randomKey]["features"]["begin"];
                const end = sentences[randomKey]["features"]["end"];

                startTokenIndex = allLemmaBegin.indexOf(start);
                const endTokenIndex = allLemmaEnd.indexOf(end) + 1;
                const lengthOfSentence = allLemmaEnd.slice(startTokenIndex, endTokenIndex).length;

                for (let i = startTokenIndex; i < lengthOfSentence + startTokenIndex; i++) {
                    textAsList.push(casText.slice(allLemmaBegin[i], allLemmaEnd[i]));
                }

                if(textAsList.length >= 6){
                    break;
                }

            }
            // Es wird jedes Token als Button angezeigt
            addToken(textAsList, startTokenIndex);

        }
        /*   Der Text wird ausgehend von einem bestimmten Token angezeigt, jenachdem nach welchem Entity (targetTool) gesucht wird
             Es wird mit der Liste gearbeitet, die alle lemmaStart beinhaltet.
         */
        else {

            const NUMBEROFTOKENS = getRandomIntMinMax(10, 20); // Anzahl der Tokens die angezeigt werden
            // Index vom gesuchten Token
            const indexTarget = allLemmaBegin.indexOf(getRandomLemmaStartOfTargetTool(targetTool));
            // Index vom ersten Token des Textes der angezeigt wird
            const startTokenIndex = getRandomIntMinMax(indexTarget - NUMBEROFTOKENS, indexTarget);
            // Bestimme alle Token die angezeigt werden sollen
            for (let i = startTokenIndex; i < NUMBEROFTOKENS + startTokenIndex + 1; i++) {
                textAsList.push(casText.slice(allLemmaBegin[i], allLemmaEnd[i]));
            }
            // Es wird jedes Token als Button angezeigt
            addToken(textAsList, startTokenIndex);

            // Färbt ein Token: Adjektiv oder Verb für PropAnno Aufgabe
            colorToken(toolAnnotationsQuickpanel[targetTool], "#A569BD");
        }




        // Alles definierte Hilfsfunktionen, die in "displayTextAsButtons()" genutzt werden

        /**
         * Hilfsfunktion
         * @param textAsList
         */
        function addToken(textAsList, startTokenIndex) {
            // Div in dem die Buttons eingefügt werden
            const currentDiv = document.getElementById("playArea");
            const newDiv = document.createElement("div");
            newDiv.className = "buttonsArea";
            newDiv.innerHTML = "";
            currentDiv.appendChild(newDiv);


            for (let i = 0; i < textAsList.length; i++) {
                const word = textAsList[i];

                // Erstelle ein Button mit dem Wort und gib ihm eine id
                const newButton = document.createElement("Button");
                newButton.className = "word-button";
                newButton.id = "address" + allAddresses[startTokenIndex + i];
                newButton.setAttribute("onclick", "tokenClicked(id)");

                // Setzt den Text des Buttons
                const newContent = document.createTextNode(word);
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
            const idFromAllDisplayedTokens = getIdFromAllDisplayedTokens();
            for (let element in tool) {
                const begin = tool[element]["features"]["begin"];
                for (let idFromAllDisplayedToken in idFromAllDisplayedTokens) {
                    const id = idFromAllDisplayedTokens[idFromAllDisplayedToken];
                    const beginDisplayedToken = fromAddressToLemmaBegin(id);
                    if (begin == beginDisplayedToken) {
                        document.getElementById("address" + id).style.background = color;
                        return;
                        //  document.getElementById("address"+id).className = color;
                    }
                }

            }
        }

        /**
         * Hilfsfunktion: Gibt den Index eines Token zurück
         * @param targetTool
         * @returns {number} lemmaStart vom Token
         */
        function getRandomLemmaStartOfTargetTool(targetTool) {
            let tokensTargetTool = []; // Speichert alle Token die mit targetTool annotiert worden sind
            targetTool = toolAnnotationsQuickpanel[targetTool];

            // Speichert von jedem Token, dass mit dem bestimmten tool annotiert worden ist den lemmaBegin im Text in eine Liste ein.
            for (let toolKey in targetTool) {
                tokensTargetTool.push(targetTool[toolKey]["features"]["begin"]);
            }

            // Gibt den lemmaStart eines zufälliges Token aus der Liste zurück.
            return tokensTargetTool[getRandomIntMax(tokensTargetTool.length)];
        }
    }

    return{
        displayTextAsButtons: displayTextAsButtons,
        getWebSocketInstance: getWebSocketInstance,
        getToolElementsInstance: getToolElementsInstance,
        getToolAnnotationsQuickpanel: getToolAnnotationsQuickpanel,

    }
});
