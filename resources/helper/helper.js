// Speichert die ids aller Token die angeklickt worden sind.
let selectedTokensId = [];

let sentenceCounterGlobal = 0;
let allSentencesGlobal = [];

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

/** KANN WEG
 * Fügt die zwei Buttons hinzu um Tokens selber zu annotieren oder Tokens auszuwählen zur Überprüfung
 */
function addInputButtons(){
    let currentDiv = document.getElementById("testText");
    var newDiv = document.createElement("div");
    newDiv.className = "card-body";

    var buttonCheck = document.createElement("button");
    var buttonAnnotation = document.createElement("button");

    buttonCheck.setAttribute("onclick", "checkInputFood()");
    buttonCheck.innerHTML = "Kontrolliere Essen";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";

    buttonAnnotation.setAttribute("onclick", "sendAnnotationFood()");
    buttonAnnotation.innerHTML = "Annotiere Essen";
    buttonAnnotation.className = "btn btn-secondary btn-lg btn-block";
    buttonAnnotation.role

    newDiv.appendChild(buttonAnnotation);
    newDiv.appendChild(buttonCheck);
    currentDiv.appendChild(newDiv);
}

function addNounButton() {
    let currentDiv = document.getElementById("testText");
    let checkN = document.createElement("Button");
    checkN.id = "checkN";
    checkN.className = "btn btn-secondary btn-lg btn-block";
    checkN.setAttribute("onclick", "checkInputNouns()");
    checkN.innerHTML = "Check Nomen";
    currentDiv.appendChild(checkN);
}

function addTestButton() {
    let currentDiv = document.getElementById("testText");
    let checkN = document.createElement("Button");
    checkN.id = "checkTest";
    checkN.className = "btn btn-secondary btn-lg btn-block";
    checkN.setAttribute("onclick", "sendAnnotationRelationHelper()");
    checkN.innerHTML = "Annotiere Relationen";
    currentDiv.appendChild(checkN);
}

function addVerbButton() {
    let currentDiv = document.getElementById("testText");
    let checkV = document.createElement("Button");
    checkV.id = "checkV";
    checkV.className = "btn btn-secondary btn-lg btn-block";
    checkV.setAttribute("onclick", "checkInputVerbs()");
    checkV.innerHTML = "Check Verben";
    currentDiv.innerHTML = "";
    currentDiv.appendChild(checkV);
}

function addAdjectiveButton() {
    let currentDiv = document.getElementById("testText");
    let checkA = document.createElement("Button");
    checkA.id = "checkA";
    checkA.className = "btn btn-secondary btn-lg btn-block";
    checkA.setAttribute("onclick", "checkInputAdjectives()");
    checkA.innerHTML = "Check Adjektive";
    currentDiv.appendChild(checkA);
}

function addFoodButton() {
    let currentDiv = document.getElementById("testText");
    var buttonCheck = document.createElement("button");
    buttonCheck.id ="checkF";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "checkInputFood()");
    buttonCheck.innerHTML = "Check Food";
    currentDiv.appendChild(buttonCheck);
}

function addAnnoFoodButton() {
    let currentDiv = document.getElementById("testText");
    var buttonCheck = document.createElement("button");
    buttonCheck.id = "annoF";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationFood()");
    //buttonCheck.setAttribute("onclick", "changeButtonLight(buttonCheck.id)");
    buttonCheck.innerHTML = "Annotiere Food";
    currentDiv.appendChild(buttonCheck);
}

function addAnnoNounsButton() {
    let currentDiv = document.getElementById("testText");
    var buttonCheck = document.createElement("button");
    buttonCheck.id = "annoN";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationNouns()");
    buttonCheck.innerHTML = "Annotiere Nomen";
    currentDiv.appendChild(buttonCheck);
}

function addAnnoVerbsButton() {
    let currentDiv = document.getElementById("testText");
    var buttonCheck = document.createElement("button");
    buttonCheck.id = "annoV";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationVerbs()");
    //buttonCheck.setAttribute("onclick", "changeButtonLight(buttonCheck.id)");
    buttonCheck.innerHTML = "Annotiere Verben";
    currentDiv.appendChild(buttonCheck);
}

function addAnnoAdjectiveButton() {
    let currentDiv = document.getElementById("testText");
    var buttonCheck = document.createElement("button");
    buttonCheck.id = "annoA";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationAdjectives()");
    buttonCheck.innerHTML = "Annotiere Adjektive";
    currentDiv.appendChild(buttonCheck);
}

/** funktioniert noch nicht
 * Überprüft ob Auswahl passt oder nicht
 * @param selection
 * @param toolString
 */
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


//
function checkInputSentiment(selection) {
    saveSentiment(selection);
}

function saveSentiment(selection) {
    var sentiment = selection
    return sentiment;
}

function displaySentence(){
    if (sentenceCounterGlobal == 0) {
        websocketAnno('loadSentences');
    }
    else{
        document.getElementById("sentenceHolder").innerHTML = allSentencesGlobal[sentenceCounterGlobal];
        sentenceCounterGlobal++;
    }

}

function changeButtonLight() {

    document.getElementById("seventhTaskLight").style.backgroundColor = 'lime';
}

/**
 * Hilfsunktion um mit der adresse(id) eines Token dem lemmaBegin zu bekommen
 * @param address
 * @returns {number}
 */
function fromAddressToLemmaBegin(address){
     var entitiesTool = toolElementsGlobal["org.texttechnologylab.annotation.semaf.isobase.Entity"];
     return entitiesTool[address]["features"]["begin"];
}

/**
 * Hilfsunktion um mit der adresse(id) eines Token dem lemmaBegin zu bekommen
 * @param address
 * @returns {number}
 */
function fromAddressToLemmaEnd(address){
    var entitiesTool = toolElementsGlobal["org.texttechnologylab.annotation.semaf.isobase.Entity"]
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

