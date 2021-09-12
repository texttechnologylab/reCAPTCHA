function taskCheckNouns() {
    selectedTokensId = [];
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Nomen");
    currentdiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringNouns());
    addNounButton();
}

function taskAnnotateNouns() {
    //Annotiere Nomen
    selectedTokensId = [];
    let currentDiv = document.getElementById("taskArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Nomen (Anno)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addAnnoNounsButton();
}

function taskCheckVerbs() {
    //Check Verben
    selectedTokensId = [];
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Verben (Check)");
    currentdiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringVerbs());
    addVerbButton();
}

function taskAnnotateVerbs() {
    //Annotiere Verben
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Verben (Anno)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addAnnoVerbsButton();
}

function taskCheckAdjectives() {
    //Check Adjektive
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Adjektive (Check)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringAdjectives());
    addAdjectiveButton();
}

function taskAnnotateAdjectives() {
    //Annotiere Adjektive
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Adjektive (Anno)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addAnnoAdjectiveButton();
}

function taskCheckFood() {
    //Check Essen
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Essen (Check)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringFood());
    addFoodButton();

}

function taskAnnotateFood() {
    //Annotation Food
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Essen (Anno)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addAnnoFoodButton();
}

/*
function taskSelectRelation() {
    //PropAnno
    drawLine = true;
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Relationen zwischen Wörtern");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addTestButton();
    propToolbar();
}
 */

function taskSelectVerbRelation() {
    drawLine = true;
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Auf welche Nomen beziehen sich markierte Verben? Verbinde");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringVerbs());
    addPropButton();
}

function taskSelectAdjectiveRelation() {
    drawLine = true;
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Worauf beziehen sich markierte Adjektive? Verbinden Sie (1 mal)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringAdjectives());
    addPropButton();
}


function taskMultiToken() {
    drawLine = true;
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere zusammenhängende Wörter." + "\n" +
        "Beispiele: Max Mustermann, Frankfurt am Main , Goethe Universität");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addMultiTokenButton();
}

function taskVerbToNoun() {
    drawLine = true;
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    SOCKETANNO.displayTextAsButtons(getToolStringNouns());
}

/*
function quickAnno() {
    selectedTokensId = [];
    let currentDiv = document.getElementById("taskArea");
    currentDiv.innerHTML = "";
    currentDiv.innerHTML = "Bestimme Entities Essen/Orte/Location/... frei: \n wähle erst mal ein Wort aus und bestimme es anschließend mithilfe der Toolbar";
    SOCKETANNO.displayTextAsButtons("standard");
    let playDiv = document.getElementById("playArea");
    // klickt Wort an dann erscheinen Entities oder ist schon direkt da mit spezifischer Farbe und bleibt dann so
}

 */