const url = "ws://" +"textannotator.texttechnologylab.org" + "/uima";
var W3CWebSocket = require('websocket').w3cwebsocket;
var client = new W3CWebSocket(url);

let session = "BF21F80432A6F47B5F7F72EEFD9CE121.jvm1";

function initSocket() {

    client.onopen = function () {
        console.log('WebSocket Client Connected');

        function connect() {
            if (client.readyState === client.OPEN) {
                client.send(JSON.stringify({cmd: 'session', data: {session: session}}));
                client.send(JSON.stringify({cmd: 'open_cas', data: {casId: "28450"}}));
                client.send(JSON.stringify({
                    cmd: 'open_view',
                    data: {casId: "28450", "view": "soko", "force": true}
                }));

            }
        }

        connect();
    };

    client.onmessage = function (msg) {
        var response = JSON.parse(msg.data);

        //response.cmd gibt an welche Art von Nachricht empfangen worden ist.
        switch (response.cmd) {
            case "session": {
                console.log("Session successfully ");
                break;
            }
            case "open_cas": {
                //    console.log(response.data);
                break;
            }
            case "open_view": {
                console.log(response);
                break;
            }
            case "open_tool": {
                console.log(response);
                break;
            }
        }

    };

    client.onerror = function () {
        console.log('Connection Error');
    };

    client.onclose = function () {
        console.log('Client Closed');
    };

}

initSocket();



function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
    client.close();
}