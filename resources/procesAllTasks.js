const view = "https://authority.hucompute.org/user/316809";
const tool = "proppanel";
const casId = "28490";
const session = "BF21F80432A6F47B5F7F72EEFD9CE121.jvm1";
const SOCKETANNO = webSocketAnno(casId, view, tool, session);

function taskCreator() {
    let currentDiv = document.getElementById("taskArea");
    currentDiv.innerHTML = "";
    let buttonDiv = document.getElementById("playArea");
    buttonDiv.innerHTML = "";

    //Check Nomen
    let firstTaskButton = document.createElement("Button");
    firstTaskButton.id = "firstTaskLight";
    let one = document.createTextNode("Aufgabe 1");
    firstTaskButton.appendChild(one);
    firstTaskButton.setAttribute("onclick", "taskCheckNouns()");
    firstTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(firstTaskButton);


    let secondTaskButton = document.createElement("Button");
    secondTaskButton.id = "secondTaskLight";
    let two = document.createTextNode("2");
    secondTaskButton.appendChild(two);
    secondTaskButton.setAttribute("onclick", "taskAnnotateNouns()");
    secondTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(secondTaskButton);

    let thirdTaskButton = document.createElement("Button");
    thirdTaskButton.id = "thirdTaskLight";
    let three = document.createTextNode("3");
    thirdTaskButton.appendChild(three);
    thirdTaskButton.setAttribute("onclick", "taskCheckVerbs()");
    thirdTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(thirdTaskButton);

    let fourthTaskButton = document.createElement("Button");
    fourthTaskButton.id = "fourthTaskLight";
    let four = document.createTextNode("4");
    fourthTaskButton.appendChild(four);
    fourthTaskButton.setAttribute("onclick", "taskAnnotateVerbs()");
    fourthTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(fourthTaskButton);

    let fifthTaskButton = document.createElement("Button");
    fifthTaskButton.id = "fifthTaskLight";
    let five = document.createTextNode("5");
    fifthTaskButton.appendChild(five);
    fifthTaskButton.setAttribute("onclick", "taskCheckFood()");
    fifthTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(fifthTaskButton);

    let sixthTaskButton = document.createElement("Button");
    sixthTaskButton.id = "sixthTaskLight";
    let six = document.createTextNode("6");
    sixthTaskButton.appendChild(six);
    sixthTaskButton.setAttribute("onclick", "taskAnnotateFood()");
    sixthTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(sixthTaskButton);
    //addAnnoButton();

    let seventhTaskButton = document.createElement("Button");
    seventhTaskButton.id = "seventhTaskLight";
    let seven = document.createTextNode("7");
    seventhTaskButton.appendChild(seven);
    seventhTaskButton.setAttribute("onclick", "taskSelectRelation");
    seventhTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(seventhTaskButton);


    let eighthTaskButton = document.createElement("Button");
    eighthTaskButton.id = "eighthTaskLight";
    let eight = document.createTextNode("8");
    eighthTaskButton.appendChild(eight);
    eighthTaskButton.setAttribute("onclick", "taskMultiToken()");
    eighthTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(eighthTaskButton);

/*
      let ninthTaskButton = document.createElement("Button");
      ninthTaskButton.id = "ninthTaskLight";
      let nine = document.createTextNode("9");
      ninthTaskButton.appendChild(nine);
      ninthTaskButton.setAttribute("onclick", "taskNine()");
      ninthTaskButton.style.backgroundColor = 'red';
      currentDiv.appendChild(ninthTaskButton);

      let tenTaskButton = document.createElement("Button");
      tenTaskButton.id = "tenTaskLight";
      let ten = document.createTextNode("10");
      tenTaskButton.appendChild(ten);
      tenTaskButton.setAttribute("onclick", "taskTen()");
      tenTaskButton.style.backgroundColor = 'red';
      currentDiv.appendChild(tenTaskButton);


       */
}
/*
function taskOne() {
    //Check Nomen
    selectedTokensId = [];
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    //let currentDiv = document.getElementById("taskArea");
    let text = document.createTextNode("Markiere alle Nomen (Check)");
    currentdiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringNouns());
    addNounButton();
}

function taskTwo() {
    //Annotiere Nomen
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Nomen (Anno)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringNouns());
    addAnnoNounsButton();
}

function taskThree() {
    //Check Verben
    selectedTokensId = [];
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Verben (Check)");
    currentdiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringVerbs());
    addVerbButton();
}

function taskFour() {
    //Annotiere Verben
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Verben (Anno)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringVerbs());
    addAnnoVerbsButton();
}

function taskFive() {
    //Check Adjektive
    selectedTokensId = [];
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Adjektive (Check)");
    currentdiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringAdjectives());
    addAdjectiveButton();
}

function taskSix() {
    //Annotiere Adjektive
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Adjektive (Anno)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringAdjectives());
    addAnnoAdjectiveButton();
}

function taskSeven() {
    //Check Essen
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Essen (Check)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringFood());
    addFoodButton();
}

function taskEight() {
    //Annotation Food
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Essen (Anno)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringFood());
    addAnnoFoodButton();
}

function taskNine() {
    //PropAnno
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere genau zwei Wörter");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons("standard");
    // side bar erzeugen
    addTestButton();
  //  addPropSelect();
}

function taskTen() {
    //Sentiment bestimmen
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Fauna (Anno)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringAnimalFauna());
    addAnnoAnimalFaunaButton();
}


 */