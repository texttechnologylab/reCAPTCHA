//Jede Funktion entspricht einer Aufgabe vom reCaptcha.


function taskSelectRelation() {
    //PropAnno
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Relationen zwischen Wörtern");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard", true);
    drawLine = true;
    addPropButton();
    addRefreshButton("propSelection");
}

function taskSelectAdjectiveRelation() {
    drawLine = true;
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Worauf beziehen sich markierte Adjektive? Verbinden Sie (1 mal)");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringAdjectives(), true);
    addPropButton();
    addRefreshButton("selectAdjectiveRelation");
}

function taskSelectVerbRelation() {
    drawLine = true;
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Auf welche Nomen beziehen sich markierte Verben? Verbinde");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringVerbs(), true);
    addPropButton();
    addRefreshButton("selectVerbRelation");
}

function taskMultiToken() {
    drawLine = true;
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere zusammenhängende Wörter." + "\n" +
        "Beispiele: Max Mustermann, Frankfurt am Main , Goethe Universität (Multitoken)");
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addMultiTokenButton();
    addRefreshButton("multiToken");
}

function taskQuickAnno() {
    selectedTokensId = [];
    let selectedToolbar;
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Bestimme Entities Essen/Orte/Location frei: \n wähle erst ein Wort aus und bestimme dann mithilfe der Toolbar. \n" +
        "Klicke verifizieren, wenn du fertig bist");
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addQuickAnnoButton();
    addRefreshButton("quickAnno");
    createToolbar();

    document.querySelector("#selectToolbar").onchange = function () {
        const value = document.querySelector("#selectToolbar").value;
        let valueId = "";
        switch(value) {
            case "Verben":
                valueId = getToolStringVerbs();
                break;
            case "Adjektive":
                valueId = getToolStringAdjectives();
                break;
            case "Name/Person":
                valueId = getToolStringPersonHumanBeing();
                break;
            case "Orte":
                valueId = getToolStringLocationPlace();
                break;
            case "Organisation/Firma/Verein":
                valueId = getToolStringAdjectives();
                break;
            case "Essen":
                valueId = getToolStringFood();
                break;
            case "Tiere":
                valueId = getToolStringAnimalFauna();
                break;
            case "Fahrzeuge":
                valueId =  getToolStringVehicle();
                break;
            case "Pflanzen":
                valueId = getToolStringPlantFlora();
                break;
        }
        selectedToolbar = valueId;
        selectedToolbar.option = "---";
    }

    document.querySelector("#annoQuick").onclick = function () {
        sendAnnotationHelper(selectedToolbar);
    }
}



/*
function taskAnnotateNouns() {
    //Annotiere Nomen
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Nomen (Anno)");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addAnnoNounsButton();
    addRefreshButton("annoNoun");
}

function taskAnnotateVerbs() {
    //Annotiere Verben
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Verben");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addAnnoVerbsButton();
    addRefreshButton("annoVerb");
}

function taskAnnotateAdjectives() {
    //Annotiere Adjektive
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Adjektive");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addAnnoAdjectiveButton();
    addRefreshButton("annoAdjective");
}

function taskAnnotateFood() {
    //Annotation Food
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Essen");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addAnnoFoodButton();
    addRefreshButton("annoFood");
}

 */