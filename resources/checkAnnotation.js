function checkInputNouns(){
    var toolString = "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.NN";
    //checkInputHelper(toolString);
    if (checkInputHelper(toolString) == true) {
        document.getElementById("firstTaskLight").style.backgroundColor = 'lime';
    } else {
        document.getElementById("firstTaskLight").style.backgroundColor = 'red';
    }

}
function checkInputVerbs(){
    var toolString = "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.V";
    //checkInputHelper(toolString);
    if (checkInputHelper(toolString) == true) {
        document.getElementById("secondTaskLight").style.backgroundColor = 'lime';
    } else {
        document.getElementById("secondTaskLight").style.backgroundColor = 'red';
    }
}
function checkInputAdjectives(){
    var toolString = "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.ADJ";
    if (checkInputHelper(toolString) == true) {
        document.getElementById("thirdTaskLight").style.backgroundColor = 'lime';
    } else {
        document.getElementById("thirdTaskLight").style.backgroundColor = 'red';
    }
}

function checkInputFood(){
    var toolString = "org.texttechnologylab.annotation.type.Food";
    if (checkInputHelper(toolString) == true) {
        document.getElementById("fifthTaskLight").style.backgroundColor = 'lime';
    } else {
        document.getElementById("fifthTaskLight").style.backgroundColor = 'red';
    }
}

/**
 * Hilsfunktion
 * Kontrolliert die Eingabe des Users. Vergleicht dafür die Liste der ausgewählten Token des Users mit der Liste
 * der ToolElements aus dem Textannotater. Vergleiche werden durch lemmaStart vorgenommen.
 * @param toolString
 */
function checkInputHelper(toolString){
    var numberOfFalse = 0;
    var allLemmaStartFromTool = [];
    var allLemmaStartDisplayedTokens = getAllLemmaStartDisplayedTokens();
    var allLemmaStart = [];

    // Nötige Information über die Token sind in tool gespeichert
    var tool = toolElementsGlobal[toolString];

    // Speichert von jedem annotierten Token seinen lemmaStart in die Liste
    for (let toolKey in tool) {
        allLemmaStartFromTool.push(tool[toolKey]["features"]["begin"])
    }

    // allLemmaStart = allLemmaStartFromTool *UND-Operator* allLemmaStartDisplayedTokens
    for (let element in allLemmaStartDisplayedTokens){
        var displayedTokenLemmaStart = allLemmaStartDisplayedTokens[element];
        if (allLemmaStartFromTool.includes(displayedTokenLemmaStart)){
            allLemmaStart.push(displayedTokenLemmaStart);
        }
    }


    var allLemmaStartOriginalLength = allLemmaStart.length; // Originalgröße wird gespeichert

    // Vergleicht beide Listen miteinander und speichert egebnis in numberOfFalse und numberOfCorrect
    for (let word in selectedTokensId){
        var lemmaStart = selectedTokensId[word].split("lemmaStart")[1];

        var index = allLemmaStart.indexOf(parseInt(lemmaStart, 10));
        if (index > -1) {
            allLemmaStart.splice(index, 1);
        }
        else {
            numberOfFalse++;
        }

    }

    var numberOfCorrect = allLemmaStartOriginalLength - allLemmaStart.length;

    // Zum testen
    alert("Anzahl der korrekt Augewählten: " + numberOfCorrect + "\r\nAnzahl der falsch Augewählten: " + numberOfFalse);
    if(numberOfFalse == 0 && allLemmaStart.length == 0){
        let correct = true;
        alert("Alles korrekt ausgewählt");
        return correct;
    } else {
        let correct = false;
        return correct;
    }
}


/**
 * Speichert alle ids von den Token die auf der Seite angezeigt werden in eine Liste und gibt diese zurück
 * @returns {number[]}
 */
function getAllLemmaStartDisplayedTokens(){
    var displayedTokensId = [];
    var allLemmaStartDisplayedTokens = [];

    var childDivs = document.getElementById('playArea').getElementsByTagName('button');
    for (var i = 0; i < childDivs.length; i++) {
        displayedTokensId.push(childDivs[i].id);
    }

    for (let element in displayedTokensId){
        if ((displayedTokensId[element]).includes("lemmaStart")){
            allLemmaStartDisplayedTokens.push(parseInt((displayedTokensId[element]).split("lemmaStart")[1]), 10);
        }
    }
    return allLemmaStartDisplayedTokens;
}

