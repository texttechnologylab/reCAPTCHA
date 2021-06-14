function startConnection() {
    const url = "ws://" +"textannotator.texttechnologylab.org" + "/uima";
   // const WebSocket = require('ws');
    const client = new WebSocket(url);

    let casId = "28450";
    let session = "BF21F80432A6F47B5F7F72EEFD9CE121.jvm1";
    let view = "https://authority.hucompute.org/user/316809";
    let tool = "quickpanel";


    client.onopen = function () {
        alert('WebSocket Client Connected');

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
                let casText = response.data.text;
                displayText(casText);

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
                task2(casId, toolElements);

                /*
                for (let tool in toolElements) {
                    console.log(tool);
                }
                 */
                break;
            }

            case "msg": {
                //  console.log(response);
                break;
            }
        }

    };

    client.onclose = function() {
    console.log('WebSocket Client Closed');
};

    client.onerror = (error) =>{
        alert("Error");
    };

}

function task1(casId, toolElements){
    let text;
    let lemmas = toolElements["de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Lemma"];
    for (let lemma in lemmas) {
        var word = lemmas[lemma]["features"]["begin"];

        //  text = text + " " + word;
        console.log(word)
    }
   // console.log(text);
}

function task2(casId, toolElements){
    let text;
    let lemmas = toolElements["de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.NN"];
    for (let lemma in lemmas) {
        var noun = lemmas[lemma]["features"];

    }
}

function displayText(text){
    document.getElementById("button").innerHTML = text;
}
