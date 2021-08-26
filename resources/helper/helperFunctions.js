// Speichert die ids aller Token die angeklickt worden sind.
let selectedTokensId = [];
let drawLine = false;


/**
 * Falls ein Token angegklickt worden ist dann Token färben und die id in Liste speichern.
 * Falls ein angeklickter Token angeklickt wird dann Token wieder standard färben und die id aus
 * der Liste entfernen.
 * @param buttonId
 */
function tokenClicked(buttonId) {

    const greyColor = "#e9ecef"; // Standard Button Farbe
    const selectedColor = "#EBCA35";
    const selectedColorRGB = "rgb(235, 202, 53)";
    const button = document.getElementById(buttonId);

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


    // Bestimme ob Linie gezeichnet wird
    if (drawLine == true && selectedTokensId.length >= 2){
        deleteLine();
        for (let i=0; i < selectedTokensId.length; i++){
            createLine(i);
            drawlinePos(i ,$("#"+selectedTokensId[i]), $("#"+selectedTokensId[i+1]));

        }
    }
    else{
        deleteLine();
    }

}


/**
 * Hilfsunktion um mit der adresse(id) eines Token dem lemmaBegin zu bekommen
 * @param address
 * @returns {number}
 */
function fromAddressToLemmaBegin(address){
    const entitiesTool = SOCKETANNO.getToolElementsInstance()["org.texttechnologylab.annotation.semaf.isobase.Entity"];
    return entitiesTool[address]["features"]["begin"];
}

/**
 * Hilfsunktion um mit der adresse(id) eines Token dem lemmaBegin zu bekommen
 * @param address
 * @returns {number}
 */
function fromAddressToLemmaEnd(address){
    const entitiesTool = SOCKETANNO.getToolElementsInstance()["org.texttechnologylab.annotation.semaf.isobase.Entity"]
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
