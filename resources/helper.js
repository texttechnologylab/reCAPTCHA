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
