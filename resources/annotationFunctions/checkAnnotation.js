/**
 * Hilfsfunktion
 * Kontrolliert die Eingabe des Users. Vergleicht dafür die Liste der ausgewählten Token des Users mit der Liste
 * der ToolElements aus dem Textannotater. Vergleiche werden durch lemmaBegin vorgenommen.
 * @param toolString
 * @returns {boolean}
 */
function checkInputHelper(toolString){
    const toolAnnotationsInstance = SOCKETANNO.getToolAnnotationsQuickpanel();
    let toolElements = SOCKETANNO.getToolElementsInstance();
    let entitiesTool = toolAnnotationsInstance["org.texttechnologylab.annotation.semaf.isobase.Entity"]
    let numberOfFalse = 0; // Anzahl der falsch ausgewählten Token vom User
    const idFromAllDisplayedTokens = getIdFromAllDisplayedTokens();
    let allLemmaBeginFromTool = [];
    let allLemmaBegin = [];

    // Speichert von jedem Token, dass mit dem bestimmten tool annotiert worden ist den lemmaBegin im Text in eine Liste ein.
    const tool = toolAnnotationsInstance[toolString];
    for (let toolKey in tool) {
        allLemmaBeginFromTool.push(tool[toolKey]["features"]["begin"])
    }

    // Berechnet: allLemmaBegin = allLemmaBeginFromTool *UND-Operator* idFromAllDisplayedTokens
    for (let element in idFromAllDisplayedTokens){
        let displayedTokenLemmaBegin =  entitiesTool[idFromAllDisplayedTokens[element]]["features"]["begin"];
        if (allLemmaBeginFromTool.includes(displayedTokenLemmaBegin)){
            allLemmaBegin.push(displayedTokenLemmaBegin);
        }
    }
    const allLemmaBeginOriginalLength = allLemmaBegin.length; // Originalanzahl wird gespeichert

    // Vergleicht beide Listen miteinander und speichert das Ergebnis in numberOfFalse und numberOfCorrect
    for (let word in selectedTokensId){
        const adress = selectedTokensId[word].split("address")[1];
        const lemmaBegin = fromAddressToLemmaBegin(adress);

        const index = allLemmaBegin.indexOf(lemmaBegin);
        if (index > -1) {
            allLemmaBegin.splice(index, 1);
        }
        else {
            numberOfFalse++;
        }

    }

    const numberOfCorrect = allLemmaBeginOriginalLength - allLemmaBegin.length; // Anzahl der richtig ausgewählten

    const percentageCorrect = numberOfCorrect / allLemmaBeginOriginalLength * 100;


    /*  Die Aufgabe wird als gelöst gewertet, wenn mehr als 75% der Token richtig ausgewählt sind und höchstens
        ein falsches Token ausgewählt wird.
    */
    if(numberOfFalse <= 1 && percentageCorrect >= 75){
        doRandomTaskForCrowdsourcing(); // Wenn die Aufgabe als richtig gewertet wird, kommt eine Crowdsourcing-Aufgabe.
    } else {
        doRandomTaskForVerification(); // Wenn die Aufgabe nicht als richtig gewertet wird, kommt eine weitere Vertrauensaufgabe.
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
    checkInputHelper(getToolStringNouns());
}

/**
 * Kontrolliert ob Eingabe von Verben richtig ist. Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputVerbs(){
    checkInputHelper(getToolStringVerbs());
}

/**
 * Kontrolliert ob Eingabe von Adjektiven richtig ist. Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputAdjectives(){
    checkInputHelper(getToolStringAdjectives());
}

/**
 * Kontrolliert ob Eingabe von Food Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputFood(){
    checkInputHelper(getToolStringFood());
}

/**
 * Kontrolliert ob Eingabe von Animal_Fauna Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputAnimalFauna(){
    checkInputHelper(getToolStringAnimalFauna());
}

/**
 * Kontrolliert ob Eingabe von Plant_Flora Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputPlantFlora(){
    checkInputHelper(getToolStringPlantFlora());
}

/**
 * Kontrolliert ob Eingabe von Act_Action_Activity Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputActActionActivity(){
    checkInputHelper(getToolStringActActionActivity());
}

/**
 * Kontrolliert ob Eingabe von Location_Place Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputLocationPlace(){
    checkInputHelper(getToolStringLocationPlace());
}

/**
 * Kontrolliert ob Eingabe von Human_Being Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputHumanBeing(){
    checkInputHelper(getToolStringPersonHumanBeing());
}

/**
 * Kontrolliert ob Eingabe von Event_Happening Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputEventHappening(){
    checkInputHelper(getToolStringEventHappening());
}

/**
 * Kontrolliert ob Eingabe von Vehicle Entitys richtig ist.
 * Je nachdem wird die nächste Aufgabe angezeigt
 */
function checkInputVehicle(){
    checkInputHelper(getToolStringVehicle());
}




/**
 * Speichert alle ids von den Token die auf der Seite angezeigt werden in eine Liste und gibt diese zurück
 * @returns {string[]}
 */
function getIdFromAllDisplayedTokens(){
    let idFromAllDisplayedTokensWithAddress = [];
    let idFromAllDisplayedTokens = [];

    let childDivs = document.getElementById('playArea').getElementsByTagName('button');
    for (let i = 0; i < childDivs.length; i++) {
        idFromAllDisplayedTokensWithAddress.push(childDivs[i].id);
    }

    for (let element in idFromAllDisplayedTokensWithAddress){
        if ((idFromAllDisplayedTokensWithAddress[element]).includes("address")){
            idFromAllDisplayedTokens.push((idFromAllDisplayedTokensWithAddress[element]).split("address")[1]);
        }
    }

    return idFromAllDisplayedTokens;
}

