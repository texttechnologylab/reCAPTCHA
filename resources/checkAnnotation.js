/**
 * Hilfsfunktion
 * Kontrolliert die Eingabe des Users. Vergleicht dafür die Liste der ausgewählten Token des Users mit der Liste
 * der ToolElements aus dem Textannotater. Vergleiche werden durch lemmaBegin vorgenommen.
 * @param toolString
 * @returns {boolean}
 */
function checkInputHelper(toolString){
    toolElements = SOCKETANNO.getToolElementsInstance();
    var entitiesTool = toolElements["org.texttechnologylab.annotation.semaf.isobase.Entity"]
    var numberOfFalse = 0; // Anzahl der falsch ausgewählten Token vom User
    var idFromAllDisplayedTokens = getIdFromAllDisplayedTokens();
    var allLemmaBeginFromTool = [];
    var allLemmaBegin = [];

    // Speichert von jedem Token, dass mit dem bestimmten tool annotiert worden ist den lemmaBegin im Text in eine Liste ein.
    var tool = toolElements[toolString];
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

/*
    Funktionen die Folgen sind alle eine Variantion der Hilfsfunktion "checkInputHelper".
    Der Unterschied liegt nur darin weclche Entity kontrolliert wird.
 */

/**
 * Kontrolliert ob Eingabe von Nomen richtig ist. Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputNouns(){
    if (checkInputHelper(getToolStringNouns()) == false ){
        getRandomTaskFromClassOne();
    }
    else{
        getRandomTaskFromClassTwo();
    }
}

/**
 * Kontrolliert ob Eingabe von Verben richtig ist. Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputVerbs(){
    if (checkInputHelper(getToolStringVerbs()) == false ){
        getRandomTaskFromClassOne();
    }
    else{
        getRandomTaskFromClassTwo();
    }
}

/**
 * Kontrolliert ob Eingabe von Adjektiven richtig ist. Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputAdjectives(){
    if (checkInputHelper(getToolStringAdjectives()) == false ){
        getRandomTaskFromClassOne();
    }
    else{
        getRandomTaskFromClassTwo();
    }
}

/**
 * Kontrolliert ob Eingabe von Food Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputFood(){
    if (checkInputHelper(getToolStringFood()) == false ){
        getRandomTaskFromClassOne();
    }
    else{
        getRandomTaskFromClassTwo();
    }
}

/**
 * Kontrolliert ob Eingabe von Animal_Fauna Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputAnimalFauna(){
    if (checkInputHelper(getToolStringAnimalFauna()) == false ){
        getRandomTaskFromClassOne();
    }
    else{
        getRandomTaskFromClassTwo();
    }
}

/**
 * Kontrolliert ob Eingabe von Plant_Flora Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputPlantFlora(){
    if (checkInputHelper(getToolStringPlantFlora()) == false ){
        getRandomTaskFromClassOne();
    }
    else{
        getRandomTaskFromClassTwo();
    }
}

/**
 * Kontrolliert ob Eingabe von Act_Action_Activity Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputActActionActivity(){
    if (checkInputHelper(getToolStringActActionActivity()) == false ){
        getRandomTaskFromClassOne();
    }
    else{
        getRandomTaskFromClassTwo();
    }
}

/**
 * Kontrolliert ob Eingabe von Location_Place Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputLocationPlace(){
    if (checkInputHelper(getToolStringLocationPlace()) == false ){
        getRandomTaskFromClassOne();
    }
    else{
        getRandomTaskFromClassTwo();
    }
}

/**
 * Kontrolliert ob Eingabe von Human_Being Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputHumanBeing(){
    if (checkInputHelper(getToolStringPersonHumanBeing()) == false ){
        getRandomTaskFromClassOne();
    }
    else{
        getRandomTaskFromClassTwo();
    }
}

/**
 * Kontrolliert ob Eingabe von Event_Happening Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputEventHappening(){
    if (checkInputHelper(getToolStringEventHappening()) == false ){
        getRandomTaskFromClassOne();
    }
    else{
        getRandomTaskFromClassTwo();
    }
}

/**
 * Kontrolliert ob Eingabe von Vehicle Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputVehicle(){
    if (checkInputHelper(getToolStringVehicle()) == false ){
        getRandomTaskFromClassOne();
    }
    else{
        getRandomTaskFromClassTwo();
    }
}



function colorTask(currentTaskNumber, color) {
    let elementId;
    switch(currentTaskNumber) {
        case 1:
            elementId = "firstTaskLight";
            break;
        case 2:
            elementId = "secondTaskLight";
            break;
        case 3:
            elementId = "thirdTaskLight";
            break;
        case 4:
            elementId = "fourthTaskLight";
            break;
        case 5:
            elementId = "fifthTaskLight";
            break;
        case 6:
            elementId = "sixthTaskLight";
            break;
        case 7:
            elementId = "seventhTaskLight";
            break;
        case 8:
            elementId = "eightTaskLight";
            break;
        case 9:
            elementId = "ninthTaskLight";
            break;
    }
    document.getElementById(elementId).style.backgroundColor = color;
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

