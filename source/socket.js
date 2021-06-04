const url = "ws://" +"textannotator.texttechnologylab.org" + "/uima";
var W3CWebSocket = require('websocket').w3cwebsocket;
var client = new W3CWebSocket(url);

let session = "BF21F80432A6F47B5F7F72EEFD9CE121.jvm1";


client.onopen = function() {
    console.log('WebSocket Client Connected');

    function sendMessage() {
        if (client.readyState === client.OPEN) {
            client.send(JSON.stringify({cmd: 'session', data: {session: session}}));
        //    client.send(JSON.stringify({cmd: 'open_cas', data: {casId: 22466}}));

        }
    }
    sendMessage();
};

client.onmessage = function(e) {
    if (typeof e.data === 'string') {
        console.log("Received: " + e.data);
    }
};

client.onerror = function() {
    console.log('Connection Error');
};

client.onclose = function() {
    console.log('Client Closed');
};

//sleep(10000)


function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
    client.close();
}