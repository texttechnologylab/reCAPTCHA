const url = "ws://" +"textannotator.texttechnologylab.org" + "/uima";
const WebSocket = require('ws');
const client = new WebSocket(url);

// Sind erstmal zum testen nötig
let casId = "28450";
let session = "BF21F80432A6F47B5F7F72EEFD9CE121.jvm1";
let view = "https://authority.hucompute.org/user/316809";
let tool = "quickpanel";

function initSocket() {

    client.on('open', function open() {

        function connect() {
            if (client.readyState === client.OPEN) {
                client.send(JSON.stringify({cmd: 'session', data: {session: session}}));
                client.send(JSON.stringify({cmd: 'open_cas', data: {casId: casId}}));
                client.send(JSON.stringify({
                    cmd: 'open_view',
                    data: {casId: casId, view: view, force: true}
                }));
            }
        }
        connect();
    });

    client.on('message', function incoming(msg) {
        var response = JSON.parse(msg);

        //response.cmd gibt an welche Art von Nachricht empfangen worden ist.
        switch (response.cmd) {

            case "session": {
                console.log("Session successfully ");
                break;
            }

            case "open_cas": {
                //   console.log(response.data);
                let cas = response.data.text;
      //          console.log(cas);
                break;
            }

            case "open_view": {
        //        console.log(response.data);

                client.send(JSON.stringify({
                    cmd: 'open_tool',
                    data: {casId: response.data.casId, view: response.data.view, toolName: tool}
                }));

                break;
            }

            case "open_tool": {
                console.log(response);
                break;
            }

            case "msg": {
                //  console.log(response);
                break;
            }
        }


    });

    client.on('error', function error() {
        console.log("Connection Error");
    });

    client.on('close', function close() {
        console.log("Client Closed");
    });

}

initSocket();