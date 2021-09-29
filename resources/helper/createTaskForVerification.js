//Jede Funktion entspricht einer Aufgabe vom reCaptcha.


function taskCheckNouns() {
    selectedTokensId = [];
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Nomen");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringNouns());
    addNounButton();
    addRefreshButton("checkNoun");
}


function taskCheckVerbs() {
    //Check Verben
    selectedTokensId = [];
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Verben");
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringVerbs());
    addVerbButton();
    addRefreshButton("checkVerb");
}

function taskCheckAdjectives() {
    //Check Adjektive
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Adjektive");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringAdjectives());
    addAdjectiveButton();
    addRefreshButton("checkAdjective");
}


function taskCheckFood() {
    //Check Essen
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Essen");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringFood());
    addFoodButton();
    addRefreshButton("checkFood");

}
