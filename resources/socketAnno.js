let toolElementsGlobal;
let webSocketGlobal;

//socketAnno("s");
function socketAnno(task) {
    const url = "ws://" + "textannotator.texttechnologylab.org" + "/uima";
  //  const WebSocket = require('ws');
    const webSocket = new WebSocket(url);

    let casId = "28450";
    let session = "BF21F80432A6F47B5F7F72EEFD9CE121.jvm1";
    let view = "https://authority.hucompute.org/user/316809";
    let tool = "quickpanel";

    let lemmaStartList = [];
    let selectedButton = [];
    let casText;

    startConnection();
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
                    //   alert("Session successfully");
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
                    let toolElements = response.data.toolElements;
                    toolElementsGlobal = toolElements;
                    webSocketGlobal = webSocket;

                    // Bestimmung der Angezeige
                    if (task == "displayTextAsButton") {
                        displayTextAsButtons(casId, casText, toolElements);
                    }
                    else if (task == "loadSentences"){
                        loadSentences(casId, casText, toolElements);
                        createSentimentButtons();
                    }

                    break;
                }

                case "msg": {
                    //console.log(response);
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


    function loadSentences(casId, casText, toolElements){
        var sentences = toolElements["de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Sentence"];
        for (let sentence in sentences) {
            var start = sentences[sentence]["features"]["begin"];
            var end = sentences[sentence]["features"]["end"];
            var textSentence = casText.slice(start, end);

            // Ersten Satz anzeigen.
            if (sentenceCounterGlobal == 0){
                document.getElementById("playArea").innerHTML = textSentence
                sentenceCounterGlobal++;
            }
            //  text = text + " " + word;
            allSentencesGlobal.push(textSentence);
        }
    }

    /**
     * Nimmt aus den quickpanel Tool die Lemma Werte jedes Tokens und speichert damit jeden Token
     * des Satzes in eine Liste ein. Mit der Liste gibt sie jeden Tokon als Button aus und die Id jedes Button
     * ist durch sein lemmaStart gekennzeichnet
     * @param casId
     * @param casText
     * @param toolElements
     */
    function displayTextAsButtons(casId, casText, toolElements) {
        let textAsList = [];
        let lemmas = toolElements["org.texttechnologylab.annotation.ocr.OCRToken"];
        var i = 0;
        const NUMBEROFTOKENS = 1000;
        for (let lemma in lemmas) {
            var start = lemmas[lemma]["features"]["begin"];
            var end = lemmas[lemma]["features"]["end"];

            // Damit Token nicht doppelt vorkommen in verschiedenen Versionen
            if (lemmaStartList.includes(start)){
                continue;
            }

            lemmaStartList.push(start);
            textAsList.push(casText.slice(start, end));

            if (i == NUMBEROFTOKENS){
                break;
            }

            i++;

        }
        // Es wird jedes Token als Button angezeigt
        addToken(textAsList);

        // Die Button bekommen Färbungen je nach Annotations
        colorToken(toolElements["de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.ADJ"], "#35EB4D");
        colorToken(toolElements["de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.NN"], "#167DFB");
        colorToken(toolElements["de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.V"], "#E9311B");
        colorToken(toolElements["org.texttechnologylab.annotation.type.Food"], "#A569BD");

        //addInputButtons();


        /**
         * Hilfsfunktion
         * @param textAsList
         */
        function addToken(textAsList) {
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
                newButton.id = "lemmaStart" + lemmaStartList[i];
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
            for (let element in tool) {
                var start = tool[element]["features"]["begin"];
                if (document.getElementById("lemmaStart"+start) == null){
                   continue;
                }

                document.getElementById("lemmaStart"+start).style.background=color;
                document.getElementById("lemmaStart"+start).className = color;

            }

        }

    }

}


//Function to check the right sentiment
function createSentimentButtons() {
    let positiveButton = document.createElement('button');
    positiveButton.id = "posButton";
    let posText = document.createTextNode('😀' + '\n' + "positiv"); //\u263A
    positiveButton.appendChild(posText);
    positiveButton.addEventListener("click", function () {
        checkInputSentiment("pos")
    }, false);

    let negativeButton = document.createElement('button');
    negativeButton.id = "negButton";
    //Farbe und Bild hinzufügen
    let negText = document.createTextNode('🙁' + " " + "negativ"); //\u2639'
    negativeButton.appendChild(negText);
    negativeButton.addEventListener("click", function () {
        checkInputSentiment("neg")
    }, false);

    let neutralButton = document.createElement('button');
    neutralButton.id = "neutButton";
    let neutText = document.createTextNode('😐' + " " + "neutral")
    neutralButton.append(neutText);
    neutralButton.addEventListener("click", function () {
        checkInputSentiment("neutral")
    }, false);

    let nosentButton = document.createElement('button');
    nosentButton.id = "nosentButton";
    let nosentText = document.createTextNode("Kein Sentiment");
    nosentButton.append(nosentText);
    nosentButton.addEventListener("click", function () {
        checkInputSentiment("keinSentiment");
    })

    let currentdiv = document.getElementById("testText");
    currentdiv.innerHTML = "";
    currentdiv.appendChild(positiveButton);
    document.getElementById("posButton").style.backgroundColor = 'lime';
    currentdiv.appendChild(negativeButton);
    document.getElementById("negButton").style.backgroundColor = 'red';
    currentdiv.appendChild(neutralButton);
    document.getElementById("neutButton").style.backgroundColor = 'grey';
}
