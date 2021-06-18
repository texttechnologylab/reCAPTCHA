let toolElementsGlobal;
//socketAnno("s");
function socketAnno(task) {
    let lemmaStartList = [];
    let selectedButton = [];
    let casText;


    startConnection();

    function startConnection() {
        const url = "ws://" + "textannotator.texttechnologylab.org" + "/uima";
      //  const WebSocket = require('ws');
        const client = new WebSocket(url);

        let casId = "28450";
        let session = "BF21F80432A6F47B5F7F72EEFD9CE121.jvm1";
        let view = "https://authority.hucompute.org/user/316809";
        let tool = "quickpanel";


        client.onopen = function () {

            if (client.readyState === client.OPEN) {
                client.send(JSON.stringify({cmd: 'session', data: {session: session}}));
                client.send(JSON.stringify({cmd: 'open_cas', data: {casId: casId}}));

            }
        };

        client.onmessage = (msg) => {
            var response = JSON.parse(msg.data);

            //response.cmd gibt an welche Art von Nachricht empfangen worden ist.
            switch (response.cmd) {
                case "session": {
                    //   alert("Session successfully");
                    break;
                }
                case "open_cas": {
                    casText = response.data.text;

                    client.send(JSON.stringify({
                        cmd: 'open_view',
                        data: {casId: casId, view: view, force: true}
                    }));
                    break;
                }

                case "open_view": {
                    client.send(JSON.stringify({
                        cmd: 'open_tool',
                        data: {casId: response.data.casId, view: response.data.view, toolName: tool}
                    }));
                    break;
                }

                case "open_tool": {
                    let toolElements = response.data.toolElements;
                    toolElementsGlobal = toolElements;
                    // Bestimm was angezigt wird
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

        client.onclose = function () {
            console.log('WebSocket Client Closed');
        };

        client.onerror = (error) => {
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
                document.getElementById("sentenceHolder").innerHTML = textSentence
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
        // let lemmas = toolElements["de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.NN"];
        let lemmas = toolElements["org.texttechnologylab.annotation.ocr.OCRToken"];
        let i = 0;
        for (let lemma in lemmas) {
            var start = lemmas[lemma]["features"]["begin"];
            var end = lemmas[lemma]["features"]["end"];

            lemmaStartList.push(start);
            textAsList.push(casText.slice(start, end));

        }
        // Es wird jedes Token als Button angezeigt
        addToken(textAsList);
        // Die Button bekommen Färbungen je nach Annotations
        colorToken(toolElements["de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.ADJ"], "#35EB4D");
        colorToken(toolElements["de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.NN"], "#167DFB");
        colorToken(toolElements["de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.V"], "#E9311B");
        colorToken(toolElements["org.texttechnologylab.annotation.type.Food"], "#A569BD");


        /**
         * Hilfsfunktion
         * @param textAsList
         */
        function addToken(textAsList) {
            // Div in dem die Buttons eingefügt werden
            var currentDiv = document.getElementById("sentenceHolder");
            currentDiv.innerHTML = "";

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
                currentDiv.appendChild(newButton);
            }
        }

        /**
         * Hilfsfunktion
         * @param tool
         */
        function colorToken(tool, color) {
            for (let element in tool) {
                var start = tool[element]["features"]["begin"];
                document.getElementById("lemmaStart"+start).style.background=color;
                document.getElementById("lemmaStart"+start).className = color;

            }

        }

    }

    var text1 = "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.ADJ";
    var text2 = "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_VERB";
    var text3 = "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.V";
    var text4 = "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.ADJ";

}

function alertSelectedButton(buttonId){
    alert(buttonId);
}

    //Function to check the right sentiment
    function createSentimentButtons() {
        //var sent = "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.Sentiment"
        //window.alert(sent);
        let positiveButton = document.createElement('button');
        positiveButton.id = "posButton";
        let posText = document.createTextNode('\u263A' + '\n' + "positiv");
        positiveButton.appendChild(posText);
        positiveButton.addEventListener("click", function () {
            checkInputSentiment("pos")
        }, false);


        let negativeButton = document.createElement('button');
        negativeButton.id = "negButton";
        //Farbe und Bild hinzufügen
        let negText = document.createTextNode('\u2639' + " " + "negativ");
        negativeButton.appendChild(negText);
        negativeButton.addEventListener("click", function () {
            checkInputSentiment("neg")
        }, false);

        let neutralButton = document.createElement('button');
        neutralButton.id = "neutButton";
        let neutText = document.createTextNode('\u2639' + " " + "neutral")
        neutralButton.append(neutText);
        neutralButton.addEventListener("click", function () {
            checkInputSentiment("neutral")
        }, false);

        let currentdiv = document.getElementById("sentimentButtonHolder");
        currentdiv.innerHTML = "";
        currentdiv.appendChild(positiveButton);
        document.getElementById("posButton").style.backgroundColor = 'lime';
        currentdiv.appendChild(negativeButton);
        document.getElementById("negButton").style.backgroundColor = 'red';
        currentdiv.appendChild(neutralButton);
        document.getElementById("neutButton").style.backgroundColor = 'grey';
    }
