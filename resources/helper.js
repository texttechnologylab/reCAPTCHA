// Speichert die ids aller Token die angeklickt worden sind.
let selectedWordsId = [];

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
        const index = selectedWordsId.indexOf(buttonId);
        if (index > -1) {
           selectedWordsId.splice(index, 1);
        }

    }
    // Falls der Token noch nicht ausgewählt ist
    else {
        button.style.background = selectedColor;
        selectedWordsId.push(buttonId);
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
    foodsLemmaStart = [];

    // Nötige Information
    var foods = toolElementsGlobal[toolString];

    // Speichert von jedem annotierten Token seinen lemmaStart in die Liste
    for (let food in foods) {
        foodsLemmaStart.push(foods[food]["features"]["begin"])
    }
    var foodsLemmaStartOriginalLength = foodsLemmaStart.length;

    // Vergleicht beide Listen miteinander und speichert egebnis in numberOfFalse und numberOfCorrect
    for (let word in selectedWordsId){
        var lemmaStart = selectedWordsId[word].split("lemmaStart")[1];

        var index = foodsLemmaStart.indexOf(parseInt(lemmaStart, 10));
        if (index > -1) {
            foodsLemmaStart.splice(index, 1);
        }
        else {
            numberOfFalse++;
        }

    }
    var numberOfCorrect = foodsLemmaStartOriginalLength - foodsLemmaStart.length;

    // Zum testen
    alert("Number of correct: " + numberOfCorrect + " Number of false: " + numberOfFalse);

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

let task1 = function () {
    var text;
    for (let lemma in lemmas) {
        var word = lemmas[lemma]["features"]["begin"];
        alert(word)
    }
}
