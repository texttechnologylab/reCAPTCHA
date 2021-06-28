/**
 * Hilfsfunktion:
 * Funktion, die dem Textannotator die Annotationen übersendet. Funktioniert nur für Annotationen einzelner Wörter
 * z.B. Token x soll als Essen annotiert werden.
 * Der parameter ist das Toolelement
 * @param type z.B "org.texttechnologylab.annotation.type.Food"
 */
function sendAnnotationHelper(type){
    //  var type = "org.texttechnologylab.annotation.type.Food";
    //  var selectedTokensId = selectedTokensId; // Globale Variable in Funktion local speichern

    // Bleiben fest erstmal
    var casId = "28450";
    var view = "https://authority.hucompute.org/user/316809";
    var tool = "quickpanel";
    var bPrivate = false;
    var batchIdentifier = "_b1_";
    var cmdQueue = [];

    for (let element in selectedTokensId){
        var selectedTokenId = (selectedTokensId[element]).split("address")[1];
        var begin = fromAddressToLemmaBegin(selectedTokenId);
        var end =  fromAddressToLemmaEnd(selectedTokenId);

        var features = {begin: begin, end: end, metaphor: false, metonym: false ,specific: false};
        cmdQueue.push({cmd: 'create', data: {bid: batchIdentifier, _type: type, features: features}});


    }

    var cmd = JSON.stringify({
        cmd: 'work_batch',
        data: {
            casId: casId, toolName: tool, view: view,
            queue: cmdQueue, options: [{privateSession: bPrivate}]
        }
    });
    webSocketGlobal.send(cmd);
    console.log(cmd);

    webSocketGlobal.send(JSON.stringify({
        cmd: 'save_cas',
        data: {casId: casId}
    }));
}

// Für jedes Tool wird eine Funktion geschrieben.

function sendAnnotationFood(){
    sendAnnotationHelper(getToolStringFood());
}
function sendAnnotationNouns(){
    sendAnnotationHelper(getToolStringNouns());
}
function sendAnnotationVerbs(){
    sendAnnotationHelper(getToolStringVerbs());
}
function sendAnnotationAdjectives(){
    sendAnnotationHelper(getToolStringAdjectives());
}


function sendAnnotationRelationHelper(){

    if (selectedTokensId.length != 2){
        alert("Wähle genau 2 Wörter aus");
        return;
    }

    var type = "org.texttechnologylab.annotation.semaf.semafsr.SrLink";

    // Bleiben fest erstmal
    var casId = "28450";
    var view = "https://authority.hucompute.org/user/316809";
    var tool = "proppanel";
    var bPrivate = false;
    var batchIdentifier = "_b1_";
    var cmdQueue = [];

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
    webSocketGlobal.send(cmd);

    webSocketGlobal.send(JSON.stringify({
        cmd: 'save_cas',
        data: {casId: casId}
    }));

}

