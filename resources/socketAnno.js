function socketAnno() {
    let lemmaStartList = [];
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
                    //  alert('WebSocket Client Connected');

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
                    displayText(casId, casText, toolElements);


                    for (let tool in toolElements) {
                        console.log(tool);
                    }


                    break;
                }

                case "msg": {
                    //  console.log(response);
                    break;
                }
            }

        };

        client.onclose = function () {
            console.log('WebSocket Client Closed');
        };

        client.onerror = (error) => {
            alert("Error");
        };

    }

    function task1(casId, toolElements) {
        let text;
        let lemmas = toolElements["de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Lemma"];
        for (let lemma in lemmas) {
            var word = lemmas[lemma]["features"]["begin"];

            //  text = text + " " + word;
            console.log(word)
        }
        // console.log(text);
    }

    /**
     * Nimmt aus den quickpanel Tool die Lemma Werte jedes Tokens und speichert damit jeden Token
     * des Satzes in eine Liste ein.
     * @param casId
     * @param casText
     * @param toolElements
     */
    function displayText(casId, casText, toolElements) {
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
        addButton(textAsList);
        // Die Button bekommen Färbungen je nach Annotations
        colorButton(toolElements["de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.ADJ"], "#35EB4D");
        colorButton(toolElements["de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.NN"], "#167DFB");
        colorButton(toolElements["de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.V"], "#E9311B");



        /**
         * Hilfsfunktion
         * @param tool
         */
        function colorButton(tool, color) {
            for (let element in tool) {
                var start = tool[element]["features"]["begin"];
                document.getElementById("lemmaStart"+start).style.background=color;

            }

        }
        /**
         * Hilfsfunktion
         * @param textAsList
         */
        function addButton(textAsList) {

            // let textAsList = text.split(" ");

            for (i = 0; i < textAsList.length; i++) {
                let word = textAsList[i];

                var currentDiv = document.getElementById("text");
                // Erstelle ein Button mit dem Wort und gib ihm eine id
                var newButton = document.createElement("Button");
                newButton.id = "lemmaStart" + lemmaStartList[i];

                var newContent = document.createTextNode(word);
                newButton.appendChild(newContent); // fügt den Text zum Button hinzu

                // füge das neu erstellte Element und seinen Inhalt ins DOM ein
                document.body.appendChild(newButton, currentDiv);
            }
        }

    }

    var text1 = "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.ADJ";
    var text2 = "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_VERB";
    var text3 = "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.V";
    var text4 = "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.ADJ";

}