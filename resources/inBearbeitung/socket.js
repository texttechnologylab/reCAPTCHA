
connect();

function connect(){

    const url = "ws://" +"textannotator.texttechnologylab.org" + "/uima";
    const WebSocket = require('ws');
    const client = new WebSocket(url);


    initSocket();

    function initSocket() {



// Sind erstmal zum testen nötig
        let casId = "28450";
        let session = "BF21F80432A6F47B5F7F72EEFD9CE121.jvm1";
        let view = "https://authority.hucompute.org/user/316809";
        let tool = "quickpanel";

        client.onopen = function () {
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
        };

        client.onmessage = (msg) => {
            var response = JSON.parse(msg.data);

            //response.cmd gibt an welche Art von Nachricht empfangen worden ist.
            switch (response.cmd) {

                case "session": {
                    break;
                }

                case "open_cas": {
                    let casText = response.data.text;
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
                    testFun(toolElements);
                    break;
                }

                case "msg": {
                    //  console.log(response);
                    break;
                }
            }


        };

        client.on('error', function error() {
            console.log("Connection Error");
        });

        client.on('close', function close() {
            console.log("Client Closed");
        });

    }

    function testFun(toolElements){
        var tests = toolElements["org.texttechnologylab.annotation.type.Plant_Flora"];
        var text;
        for (let test in tests) {
            console.log(tests[test]);
        }
    }

}
