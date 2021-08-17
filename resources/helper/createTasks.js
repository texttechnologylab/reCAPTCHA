function taskCheckNouns() {
    selectedTokensId = [];
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Nomen");
    currentdiv.appendChild(text);
    //let taskDiv = document.getElementById("taskArea");
    //taskDiv.innerHTML = "";
    //taskDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringNouns());
    addNounButton();
}

function taskAnnotateNouns() {
    //Annotiere Nomen
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Nomen (Anno)");
    //let taskDiv = document.getElementById("taskArea");
    //taskDiv.innerHTML = "";
    //taskDiv.appendChild(text);
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
    //let taskDiv = document.getElementById("taskArea");
    //taskDiv.innerHTML = "";
    //taskDiv.appendChild(text);
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
    //let taskDiv = document.getElementById("taskArea");
    //taskDiv.innerHTML = "";
    //taskDiv.appendChild(text);
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
    //let taskDiv = document.getElementById("taskArea");
    //taskDiv.innerHTML = "";
    //taskDiv.appendChild(text);
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
    //let taskDiv = document.getElementById("taskArea");
    //taskDiv.innerHTML = "";
    //taskDiv.appendChild(text);
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
    //let taskDiv = document.getElementById("taskArea");
    //taskDiv.innerHTML = "";
    //taskDiv.appendChild(text);
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
    //let taskDiv = document.getElementById("taskArea");
    //taskDiv.innerHTML = "";
    //taskDiv.appendChild(text);
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    addAnnoFoodButton();
}

function taskSelectRelation() {
    //PropAnno
    drawLine = true;
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere genau zwei Wörter");
    //let taskDiv = document.getElementById("taskArea");
    //taskDiv.innerHTML = "";
    //taskDiv.appendChild(text);
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    createLine();

    addTestButton();
}

function taskTen() {
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Fauna (Anno)");
    //let taskDiv = document.getElementById("taskArea");
    //taskDiv.innerHTML = "";
    //taskDiv.appendChild(text);
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringAnimalFauna());
    addAnnoAnimalFaunaButton();
}