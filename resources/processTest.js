var view = "https://authority.hucompute.org/user/316809";
const SOCKETANNO = websocketAnno(view);


function processRecaptcha(){
    taskCheckNouns();
}


function taskCheckNouns() {
    selectedTokensId = [];
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    //let currentDiv = document.getElementById("taskArea");
    let text = document.createTextNode("Markiere alle Nomen");
    currentdiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringNouns());
    addNounButton();
}


function taskCheckAdjectivés() {
    selectedTokensId = [];
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Adjektive");
    currentdiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringAdjectives());
    addAdjectiveButton();
}


function taskSelectRelation() {
    drawLine = true;
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Klicke 2 Token die in Beziehung zueinander stehen");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addTestButton();
}



function checkInputNouns(){
    if (checkInputHelper(getToolStringNouns()) == true) {
        taskCheckAdjectivés();
    }

}

function checkInputAdjectives(){
    if (checkInputHelper(getToolStringAdjectives()) == true) {
        taskSelectRelation();
    }
}

function checkInputFood(){
    if (checkInputHelper(getToolStringFood()) == true) {
    }
}

/**
 *  * Hilfsfunktion
 * Kontrolliert die Eingabe des Users. Vergleicht dafür die Liste der ausgewählten Token des Users mit der Liste
 * der ToolElements aus dem Textannotater. Vergleiche werden durch lemmaBegin vorgenommen.
 * @param toolString
 * @returns {boolean}
 */
function checkInputHelper(toolString){
    var entitiesTool = toolElementsGlobal["org.texttechnologylab.annotation.semaf.isobase.Entity"]
    var numberOfFalse = 0; // Anzahl der falsch ausgewählten Token vom User
    var idFromAllDisplayedTokens = getIdFromAllDisplayedTokens();
    var allLemmaBeginFromTool = [];
    var allLemmaBegin = [];

    // Speichert von jedem Token, dass mit dem bestimmten tool annotiert worden ist den lemmaBegin im Text in eine Liste ein.
    var tool = toolElementsGlobal[toolString];
    for (let toolKey in tool) {
        allLemmaBeginFromTool.push(tool[toolKey]["features"]["begin"])
    }

    // Berechnet: allLemmaBegin = allLemmaBeginFromTool *UND-Operator* idFromAllDisplayedTokens
    for (let element in idFromAllDisplayedTokens){
        var displayedTokenLemmaBegin =  entitiesTool[idFromAllDisplayedTokens[element]]["features"]["begin"];
        if (allLemmaBeginFromTool.includes(displayedTokenLemmaBegin)){
            allLemmaBegin.push(displayedTokenLemmaBegin);
        }
    }
    var allLemmaBeginOriginalLength = allLemmaBegin.length; // Originalgröße wird gespeichert

    // Vergleicht beide Listen miteinander und speichert das Ergebnis in numberOfFalse und numberOfCorrect
    for (let word in selectedTokensId){
        var adress = selectedTokensId[word].split("address")[1];
        var lemmaBegin = fromAddressToLemmaBegin(adress);

        var index = allLemmaBegin.indexOf(lemmaBegin);
        if (index > -1) {
            allLemmaBegin.splice(index, 1);
        }
        else {
            numberOfFalse++;
        }

    }

    var numberOfCorrect = allLemmaBeginOriginalLength - allLemmaBegin.length; // Anzahl der richtig ausgewählten

    // Zum testen
    alert("Anzahl der korrekt Augewählten: " + numberOfCorrect + "\r\nAnzahl der falsch Augewählten: " + numberOfFalse);
    if(numberOfFalse == 0 && allLemmaBegin.length == 0){
        alert("Alles korrekt ausgewählt");
        return true;
    } else {
        return false;
    }
}


/**
 * Speichert alle ids von den Token die auf der Seite angezeigt werden in eine Liste und gibt diese zurück
 * @returns {string[]}
 */
function getIdFromAllDisplayedTokens(){
    var idFromAllDisplayedTokensWithAddress = [];
    var idFromAllDisplayedTokens = [];

    var childDivs = document.getElementById('playArea').getElementsByTagName('button');
    for (var i = 0; i < childDivs.length; i++) {
        idFromAllDisplayedTokensWithAddress.push(childDivs[i].id);
    }

    for (let element in idFromAllDisplayedTokensWithAddress){
        if ((idFromAllDisplayedTokensWithAddress[element]).includes("address")){
            idFromAllDisplayedTokens.push((idFromAllDisplayedTokensWithAddress[element]).split("address")[1]);
        }
    }
    return idFromAllDisplayedTokens;
}

