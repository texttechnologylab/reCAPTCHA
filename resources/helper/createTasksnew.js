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
}

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
}

function taskCheckVerbs() {
    //Check Verben
    selectedTokensId = [];
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Verben (Check)");
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringVerbs());
    addVerbButton();
}

function taskAnnotateVerbs() {
    //Annotiere Verben
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Verben (Anno)");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addAnnoVerbsButton();
}

function taskCheckAdjectives() {
    //Check Adjektive
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Adjektive (Check)");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    //currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringAdjectives());
    addAdjectiveButton();
}

function taskAnnotateAdjectives() {
    //Annotiere Adjektive
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Adjektive (Anno)");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    //currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addAnnoAdjectiveButton();
}

function taskCheckFood() {
    //Check Essen
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Essen (Check)");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    //currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringFood());
    addFoodButton();

}

function taskAnnotateFood() {
    //Annotation Food
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Essen (Anno)");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    //currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addAnnoFoodButton();
}

function taskSelectRelation() {
    //PropAnno
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere zusammenhängende Wörter." + "\n" +
        "Beispiele: Max Mustermann (Namen), Frankfurt am Main (Orte), Goethe Universität (Einrichtungen)");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    //currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    drawLine = true;
    createLine();
    addTestButton();
}

function taskTen() {
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Fauna (Anno)");
    text.className = "task-text";
    let taskDiv = document.getElementById("taskArea");
    taskDiv.innerHTML = "";
    taskDiv.appendChild(text);
    //currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringAnimalFauna());
    addAnnoAnimalFaunaButton();
}