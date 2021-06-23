/**
 * Hilsfunktion
 * Kontrolliert die Eingabe des Users. Vergleicht die Liste der ausgewählten Token und vergleicht sie mit der Liste
 * der ToolElements aus dem Textannotater. Vergleiche werden durch lemmaStart vorgenommen.
 * @param toolString
 */
function checkInput(toolString){
    var numberOfFalse = 0;
    allLemmaStart = [];

    // Nötige Information
    var tool = toolElementsGlobal[toolString];

    // Speichert von jedem annotierten Token seinen lemmaStart in die Liste
    for (let toolKey in tool) {
        allLemmaStart.push(tool[toolKey]["features"]["begin"])
    }
    var allLemmaStartOriginalLength = allLemmaStart.length;

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
        alert("Alles Korrekt ausgewählt");
    }
}

function checkInputNouns(){
    var toolString = "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.NN";
    checkInput(toolString);
}
function checkInputVerbs(){
    var toolString = "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.V";
    checkInput(toolString);
}
function checkInputAdjectives(){
    var toolString = "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.ADJ";
    checkInput(toolString);
}
function checkInputFood(){
    var toolString = "org.texttechnologylab.annotation.type.Food";
    checkInput(toolString);
}