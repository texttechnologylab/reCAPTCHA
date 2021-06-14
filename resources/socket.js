
connect();

function connect(){

    const url = "ws://" +"textannotator.texttechnologylab.org" + "/uima";
   // const WebSocket = require('ws');
    const client = new WebSocket(url);


    initSocket();

    function initSocket() {



// Sind erstmal zum testen nötig
        let casId = "28450";
        let session = "BF21F80432A6F47B5F7F72EEFD9CE121.jvm1";
        let view = "https://authority.hucompute.org/user/316809";
        let tool = "quickpanel";

        alert("Nein");
        client.onopen( function open() {
            alert("Session successfully ");


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
                    alert("Session successfully ");
                    break;
                }

                case "open_cas": {
                    let casText = response.data.text;
               //   runWebsite(casText);
                    console.log(casText);
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
                 // runWebsite(response.data.toolElements);
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

    function runWebsite(text) {

        // Serves files from the resources directory
        app.use("/resources", express.static(__dirname + '/resources'));

        // serve the homepage
        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html');
         // res.send(text);
        })

        app.get('/s', (req, res) => {
            res.sendFile(__dirname + '/index.html');
          //  res.send(text);
        })

        // start the express web server listening on 8080
        app.listen(808, () => {
            console.log('listening on 808');
        });



    }

    function addButton(text)
    {
        let textAsList = text.split(" ");

        for (i = 0; i < textAsList.length; i++) {
            let word = textAsList[i];

            // Erstelle ein Button mit dem Wort und gib ihm eine id
            var newButton = document.createElement("Button");
            newButton.id = "word" + i;

            var newContent = document.createTextNode(word);
            newButton.appendChild(newContent); // fügt den Text zum Button hinzu

            // füge das neu erstellte Element und seinen Inhalt ins DOM ein
            var currentDiv = document.getElementById("buttonHolder");
            document.body.appendChild(newButton, currentDiv);
        }
    }



}
