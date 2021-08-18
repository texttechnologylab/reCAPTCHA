/**
 * Hilfsfunktion:
 * Funktion, die dem Textannotator die Annotationen übersendet. Funktioniert nur für Annotationen einzelner Wörter
 * z.B. Token x soll als Essen annotiert werden.
 * Der parameter ist das Toolelement String
 * @param type z.B "org.texttechnologylab.annotation.type.Food"
 */
function sendAnnotationHelper(type){

    // Bleiben fest erstmal
   // const casId = "28490";
    const view = "recaptcha"; // View in der alle Ergebnisse zwischengespeichert werden
    const tool = "quickpanel";
    const bPrivate = false;
    const batchIdentifier = "_b1_";
    let cmdQueue = [];

    const webSocket = SOCKETANNO.getWebSocketInstance();

    // Extrahiert alle Annotierten Token und speichert sie in eine queue
    for (let element in selectedTokensId){
        const selectedTokenId = (selectedTokensId[element]).split("address")[1];
        const begin = fromAddressToLemmaBegin(selectedTokenId);
        const end =  fromAddressToLemmaEnd(selectedTokenId);

        const features = {begin: begin, end: end, metaphor: false, metonym: false ,specific: false};
        cmdQueue.push({cmd: 'create', data: {bid: batchIdentifier, _type: type, features: features}});

    }

    // Schickt dem Socket die Nachricht welche Token annotiert wurden
    const cmd = JSON.stringify({
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

function sendAnnotationNouns(){
    sendAnnotationHelper(getToolStringNouns());
}
function sendAnnotationVerbs(){
    sendAnnotationHelper(getToolStringVerbs());
}
function sendAnnotationAdjectives(){
    sendAnnotationHelper(getToolStringAdjectives());
}
function sendAnnotationFood(){
    sendAnnotationHelper(getToolStringFood());
}
function sendAnnotationAnimalFauna(){
    sendAnnotationHelper(getToolStringAnimalFauna());
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

    const type = "org.texttechnologylab.annotation.semaf.semafsr.SrLink";

    // Bleiben fest erstmal

    const view = "recaptcha";

    const tool = "proppanel";
    const bPrivate = false;
    const batchIdentifier = "_b1_";
    const cmdQueue = [];


    const webSocket = SOCKETANNO.getWebSocketInstance();


    const figureTokenId = parseInt((selectedTokensId[0]).split("address")[1]);
    const groundTokenId = parseInt((selectedTokensId[1]).split("address")[1]);

    const features = {figure: figureTokenId, ground: groundTokenId, rel_type: 'ARG0'};
    cmdQueue.push({cmd: 'create', data: {bid: batchIdentifier, _type: type, features: features}});

    const cmd = JSON.stringify({
        cmd: 'work_batch',
        data: {
            casId: casId, toolName: tool, view: view,
            queue: cmdQueue, options: [{privateSession: bPrivate}]
        }
    });
    webSocket.send(cmd);
    console.log(cmd);

    webSocket.send(JSON.stringify({
        cmd: 'save_cas',
        data: {casId: casId}
    }));

}

