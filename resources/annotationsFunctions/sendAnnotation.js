// Hilfsvariable, um zu bestimmmen wie oft eine Crowdsourcing Aufgaben erledigt werden sollen.
let TIMESOFANNOTATION = 1;
let TIMESOFANNOTATIONLIMIT = 2; // Anzahl an Crowdsourcing Aufgaben die bearbeitet werden

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

    closeRecaptcha();

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

    drawLine = false;
    closeRecaptcha();

}

/**
 * Funktion für Annotation von Multitoken.
 */
function sendAnnotationMultiToken(){

    const webSocket = SOCKETANNO.getWebSocketInstance();
    const tool = "quickpanel";
    const bPrivate = false;
    const view = "recaptcha";
    const quickTreeTool = SOCKETANNO.getToolElementsInstance()["org.texttechnologylab.annotation.type.QuickTreeNode"];


    /* Berechnet den Lemma Anfang und Ende des Multitokens, sowie die Adressen aller ausgewählten Token und speichert
       sie jeweils in eine Liste */
    let selectedTokensAdress = [];
    let allAllemas = [];

    for (let element in selectedTokensId){
        const selectedTokenId = (selectedTokensId[element]).split("address")[1];
        const begin = fromAddressToLemmaBegin(selectedTokenId);
        const end = fromAddressToLemmaEnd(selectedTokenId);

        allAllemas.push(begin);
        allAllemas.push(end);


        for(let addr in quickTreeTool){
            if (quickTreeTool[addr]["features"]["children"] == "null" && quickTreeTool[addr]["features"]["begin"] == begin){
                selectedTokensAdress.push(addr);
            }
        }
    }


    let cmdQueue = [];
    let batchNumber = 0;
    const batchIdentifier = "_b" + batchNumber.toString() + "_";
    const type = 'org.texttechnologylab.annotation.type.QuickTreeNode';
    // Beginn, und Ende von Lemma sowie alle Adressen der Tokens werden benötigt.
    const features = {begin: Math.min.apply(Math,allAllemas),end:  Math.max.apply(Math, allAllemas), children:  selectedTokensAdress};

    cmdQueue.push({cmd: 'create', data: {bid: batchIdentifier, features: features, _type: type}});

    // Bestimme die Kinderknoten
    for (let addr in selectedTokensAdress){
        batchNumber++;
        cmdQueue.push({cmd: "edit", data: {addr: selectedTokensAdress[addr].toString(), bid: "_b"+batchNumber.toString()+"_", features: {parent: "_b0_"}}});
    }


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

    closeRecaptcha();
    drawLine = false;
}



/**
 * Wichtig: Muss nach jeder Aufgabe zur Crowdsourcing aufgerufen werden
 * Überprüft, ob die Anzahl der Aufgaben erreicht worden sind, falls ja dann Recpatcha schließen
 */
function closeRecaptcha(){
    if (TIMESOFANNOTATION >= TIMESOFANNOTATIONLIMIT){
        accessEnabled();
        setTimeout(closeWindow, 5000);
    }
    else {
        TIMESOFANNOTATION++;
        doRandomTaskFromClassTwo();
    }
}

function closeWindow() {
    window.close();
}

