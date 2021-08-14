// Speichert die ids aller Token die angeklickt worden sind.
let selectedTokensId = [];


/**
 * Falls ein Token angegklickt worden ist dann Token färben und die id in Liste speichern.
 * Falls ein angeklickter Token angeklickt wird dann Token wieder standard färben und die id aus
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
        button.style.background = greyColor;


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




/** funktioniert noch nicht
 * Überprüft ob Auswahl passt oder nicht
 * @param selection
 * @param toolString
 */
function checkSentiment(selection, toolString) {
    var result = selection;
    var sentiment = SOCKETANNO.getToolElementsInstance()[toolString];

    //abchecken ob richtig
    if (result == sentiment) {
        alert("Richtig");
    } else {
        alert("Falsch");
    }

}


/**
 * Hilfsunktion um mit der adresse(id) eines Token dem lemmaBegin zu bekommen
 * @param address
 * @returns {number}
 */
function fromAddressToLemmaBegin(address){
    var entitiesTool = SOCKETANNO.getToolElementsInstance()["org.texttechnologylab.annotation.semaf.isobase.Entity"];
    return entitiesTool[address]["features"]["begin"];
}

/**
 * Hilfsunktion um mit der adresse(id) eines Token dem lemmaBegin zu bekommen
 * @param address
 * @returns {number}
 */
function fromAddressToLemmaEnd(address){
    var entitiesTool = SOCKETANNO.getToolElementsInstance()["org.texttechnologylab.annotation.semaf.isobase.Entity"]
    return entitiesTool[address]["features"]["end"];
}

/**
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * Berechnet eine Zufallsahl in range [0-max]
 * @param max
 * @returns {number}
 */
function getRandomIntMax(max) {
    return Math.floor(Math.random() * max);
}

/**
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * Berechnet eine Zufallsahl in range [min-max]
 * @param min
 * @param max
 * @returns {number}
 */
function getRandomIntMinMax(min, max) {
    if (min < 0){
        min = 0
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
