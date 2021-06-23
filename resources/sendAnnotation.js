/**
 * Hilfsfunktion: Funktion, die dem Textannotator die Annotationen übersendet.
 * Der parameter ist das Toolelement
 * @param type z.B "org.texttechnologylab.annotation.type.Food"
 */
function sendAnnotationHelper(type){
  //  var type = "org.texttechnologylab.annotation.type.Food";
  //  var selectedTokensId = selectedTokensId; // Globale Variable in Funktion local speichern
    console.log(selectedTokensId);


    // Bleiben fest erstmal
    var casId = "28450";
    var view = "https://authority.hucompute.org/user/316809";
    var tool = "quickpanel";
    var bPrivate = false;
    var batchIdentifier = "_b1_";
    var cmdQueue = [];

    for (let element in selectedTokensId){
        var selectedTokenId = selectedTokensId[element];
        var begin = selectedTokenId.split("lemmaStart")[1];
        var text = document.getElementById(selectedTokenId).innerHTML;
        var end = (parseInt(begin, 10) + text.length).toString();
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

    webSocketGlobal.send(JSON.stringify({
        cmd: 'save_cas',
        data: {casId: casId}
    }));
}

// Für jedes Tool wird eine Funktion geschrieben.

function sendAnnotationFood(){
    sendAnnotationHelper("org.texttechnologylab.annotation.type.Food");
}
function sendAnnotationNouns(){
    sendAnnotationHelper("de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.NN");
}
function sendAnnotationVerbs(){
    sendAnnotationHelper("de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.V");
}
function sendAnnotationAdjectives(){
    sendAnnotationHelper("de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.ADJ");
}

