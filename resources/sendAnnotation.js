/**
 * Hilfsfunktion:
 * Funktion, die dem Textannotator die Annotationen übersendet. Funktioniert nur für Annotationen einzelner Wörter
 * z.B. Token x soll als Essen annotiert werden.
 * Der parameter ist das Toolelement String
 * @param type z.B "org.texttechnologylab.annotation.type.Food"
 */
function sendAnnotationHelper(type){

    // Bleiben fest erstmal
    var casId = "28490";
    var view = "recaptcha"; // View in der alle Ergebnisse zwischengespeichert werden
    var tool = "quickpanel";
    var bPrivate = false;
    var batchIdentifier = "_b1_";
    var cmdQueue = [];

    var webSocket = SOCKETANNO.getWebSocketInstance();

    // Extrahiert alle Annotierten Token und speichert sie in eine queue
    for (let element in selectedTokensId){
        var selectedTokenId = (selectedTokensId[element]).split("address")[1];
        var begin = fromAddressToLemmaBegin(selectedTokenId);
        var end =  fromAddressToLemmaEnd(selectedTokenId);

        var features = {begin: begin, end: end, metaphor: false, metonym: false ,specific: false};
        cmdQueue.push({cmd: 'create', data: {bid: batchIdentifier, _type: type, features: features}});

    }

    // Schickt dem Socket die Nachricht welche Token annotiert wurden
    var cmd = JSON.stringify({
        cmd: 'work_batch',
        data: {
            casId: casId, toolName: tool, view: view,
            queue: cmdQueue, options: [{privateSession: bPrivate}]
        }
    });
    webSocket.send(cmd);

    // Speichert die Annotationen
    webSocket.send(JSON.stringify({
        cmd: 'save_cas',
        data: {casId: casId}
    }));
}

//------! Für jedes Tool wird eine Funktion geschrieben.

function sendAnnotationFood(){
    sendAnnotationHelper(getToolStringFood());
}
function sendAnnotationNouns(){
    sendAnnotationHelper(getToolStringNouns());
    colorTask(currentTaskNumber, 'lime');
}
function sendAnnotationVerbs(){
    sendAnnotationHelper(getToolStringVerbs());
    colorTask(currentTaskNumber, 'lime');
}
function sendAnnotationAdjectives(){
    sendAnnotationHelper(getToolStringAdjectives());
    colorTask(currentTaskNumber, 'lime');
}
function sendAnnotationAnimalFauna(){
    sendAnnotationHelper(getToolStringAnimalFauna());
    colorTask(currentTaskNumber, 'lime');
}


/**
 * Funktion für Annotation mit  PropAnnotator:
 * Noch in Bearbeitung welche Beziehung dargestellt werden soll.
 */
function sendAnnotationRelationHelper(){


    // PropAnnotator bildet Relation zwischen genau 2 Wörter
    if (selectedTokensId.length != 2){
        alert("Wähle genau 2 Wörter aus");
        return;
    }

    var type = "org.texttechnologylab.annotation.semaf.semafsr.SrLink";

    // Bleiben fest erstmal
    var casId = "28490";
    var view = "recaptcha";
    var tool = "proppanel";
    var bPrivate = false;
    var batchIdentifier = "_b1_";
    var cmdQueue = [];


    var webSocket = SOCKETANNO.getWebSocketInstance();


    var figureTokenId = parseInt((selectedTokensId[0]).split("address")[1]);
    var groundTokenId = parseInt((selectedTokensId[1]).split("address")[1]);

    var features = {figure: figureTokenId, ground: groundTokenId, rel_type: 'ARG0'};
    cmdQueue.push({cmd: 'create', data: {bid: batchIdentifier, _type: type, features: features}});

    var cmd = JSON.stringify({
        cmd: 'work_batch',
        data: {
            casId: casId, toolName: tool, view: view,
            queue: cmdQueue, options: [{privateSession: bPrivate}]
        }
    });
    webSocket.send(cmd);

    webSocket.send(JSON.stringify({
        cmd: 'save_cas',
        data: {casId: casId}
    }));

}

