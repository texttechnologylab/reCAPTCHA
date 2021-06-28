function checkInputNouns(){
    if (checkInputHelper(toolString) == true) {
        document.getElementById("firstTaskLight").style.backgroundColor = 'lime';
    } else {
        document.getElementById("firstTaskLight").style.backgroundColor = 'red';
    }

}
function checkInputVerbs(){
    if (checkInputHelper(getToolStringVerbs()) == true) {
        document.getElementById("secondTaskLight").style.backgroundColor = 'lime';
    } else {
        document.getElementById("secondTaskLight").style.backgroundColor = 'red';
    }
}
function checkInputAdjectives(){
    if (checkInputHelper(getToolStringAdjectives()) == true) {
        document.getElementById("thirdTaskLight").style.backgroundColor = 'lime';
    } else {
        document.getElementById("thirdTaskLight").style.backgroundColor = 'red';
    }
}

function checkInputFood(){
    if (checkInputHelper(getToolStringFood()) == true) {
        document.getElementById("fifthTaskLight").style.backgroundColor = 'lime';
    } else {
        document.getElementById("fifthTaskLight").style.backgroundColor = 'red';
    }
}

/**
 * Hilsfunktion
 * Kontrolliert die Eingabe des Users. Vergleicht dafür die Liste der ausgewählten Token des Users mit der Liste
 * der ToolElements aus dem Textannotater. Vergleiche werden durch lemmaBegin vorgenommen.
 * @param toolString
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

