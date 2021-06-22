// Speichert die ids aller Token die angeklickt worden sind.
let selectedTokensId = [];

let sentenceCounterGlobal = 0;
let allSentencesGlobal = [];

/**
 * Falls ein Token angegklickt worden ist dann Token färben und die id in Liste speichern.
 * Falls ein angeklickter Token angegklickt wird dann Token wieder standarf Färben und die id aus
 * der Liste entfernen.
 * @param buttonId
 */
function tokenClicked(buttonId) {
    var greyColor = "#e9ecef"; // Standard Button Farbe
    var selectedColor = "#EBCA35";
    var selectedColorRGB = "rgb(235, 202, 53)";
    var button = document.getElementById(buttonId);

    // Falls der Token schon ausgewählt ist

    if (button.style.background == selectedColorRGB) {
        // Färb Token wieder zurück. In classname ist Farbe gespeichert
        if (button.classList.contains(button.className)){
           button.style.background = button.className;
        }
        else {
            button.style.background = greyColor;

        }

        // Element mit value aus Array entfernen: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
        const index = selectedTokensId.indexOf(buttonId);
        if (index > -1) {
           selectedTokensId.splice(index, 1);
        }

    }
    // Falls der Token noch nicht ausgewählt ist
    else {
        button.style.background = selectedColor;
        selectedTokensId.push(buttonId);
    }

}

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

function checkSentiment(selection, toolString) {
    var result = selection;
    var sentiment = toolElementsGlobal[toolString];

    //abchecken ob richtig
    if (result == sentiment) {
        alert("Richtig");
    } else {
        alert("Falsch");
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

//
function checkInputSentiment(selection) {
    //var toolString = "org.texttechnologylab.annotation.type.Sentiment";
    //checkSentiment(toolString, selection);
    saveSentiment(selection);
}

function saveSentiment(selection) {
    var sentiment = selection
    return sentiment;
}

function displaySentence(){
    if (sentenceCounterGlobal == 0) {
        socketAnno('loadSentences');
    }
    else{
        document.getElementById("sentenceHolder").innerHTML = allSentencesGlobal[sentenceCounterGlobal];
        sentenceCounterGlobal++;
    }

}
