
//Prozessablauf, Start Beginnen, Buttons erzeugen

function taskCreator() {
    let currentDiv = document.getElementById("taskArea");
    currentDiv.innerHTML = "";
    let buttonDiv = document.getElementById("playArea");
    buttonDiv.innerHTML = "";

    let firstTaskButton = document.createElement("Button");
    firstTaskButton.id = "firstTaskLight";
    let one = document.createTextNode("Aufgabe 1");
    firstTaskButton.appendChild(one);
    firstTaskButton.setAttribute("onclick", "taskOne()");
    firstTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(firstTaskButton);

    let secondTaskButton = document.createElement("Button");
    secondTaskButton.id = "secondTaskLight";
    let two = document.createTextNode("2");
    secondTaskButton.appendChild(two);
    secondTaskButton.setAttribute("onclick", "taskTwo()");
    secondTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(secondTaskButton);

    let thirdTaskButton = document.createElement("Button");
    thirdTaskButton.id = "thirdTaskLight";
    let three = document.createTextNode("3");
    thirdTaskButton.appendChild(three);
    thirdTaskButton.setAttribute("onclick", "taskThree()");
    thirdTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(thirdTaskButton);

    let fourthTaskButton = document.createElement("Button");
    fourthTaskButton.id = "fourthTaskLight";
    let four = document.createTextNode("4");
    fourthTaskButton.appendChild(four);
    fourthTaskButton.setAttribute("onclick", "taskFour()");
    fourthTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(fourthTaskButton);

    let fifthTaskButton = document.createElement("Button");
    fifthTaskButton.id = "fifthTaskLight";
    let five = document.createTextNode("5");
    fifthTaskButton.appendChild(five);
    fifthTaskButton.setAttribute("onclick", "taskFive()");
    fifthTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(fifthTaskButton);
    addNounButton();

    let sixthTaskButton = document.createElement("Button");
    sixthTaskButton.id = "sixthTaskLight";
    let six = document.createTextNode("6");
    sixthTaskButton.appendChild(six);
    sixthTaskButton.setAttribute("onclick", "taskSix()");
    sixthTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(sixthTaskButton);
    //addAnnoButton();

    let seventhTaskButton = document.createElement("Button");
    seventhTaskButton.id = "seventhTaskLight";
    let seven = document.createTextNode("7");
    seventhTaskButton.appendChild(seven);
    seventhTaskButton.setAttribute("onclick", "taskSeven()");
    seventhTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(seventhTaskButton);

    let eighthTaskButton = document.createElement("Button");
    eighthTaskButton.id = "eighthTaskLight";
    let eight = document.createTextNode("8");
    eighthTaskButton.appendChild(eight);
    eighthTaskButton.setAttribute("onclick", "taskEight()");
    eighthTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(eighthTaskButton);

    let ninthTaskButton = document.createElement("Button");
    ninthTaskButton.id = "ninthTaskLight";
    let nine = document.createTextNode("9");
    ninthTaskButton.appendChild(nine);
    ninthTaskButton.setAttribute("onclick", "taskNine()");
    ninthTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(ninthTaskButton);
}

function taskOne() {
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    //let currentDiv = document.getElementById("taskArea");
    let text = document.createTextNode("Markiere alle Nomen");
    currentdiv.appendChild(text);
    socketAnno('displayTextAsButton');
    addNounButton();
}

function taskTwo() {
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Verben");
    currentdiv.appendChild(text);
    socketAnno('displayTextAsButton');
    addVerbButton();
}

function taskThree() {
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Adjektive");
    currentdiv.appendChild(text);
    socketAnno('displayTextAsButton');
    addAdjectiveButton();
}

function taskFour() {
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Wähle Sentiment");
    currentdiv.appendChild(text);
    socketAnno('loadSentences');
}

function taskFive() {
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Essen");
    currentdiv.appendChild(text);
    socketAnno('displayTextAsButton');
    addFoodButton();
}

function taskSix() {
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Essen");
    currentdiv.appendChild(text);
    socketAnno('displayTextAsButton');
    addAnnoFoodButton();
}

function taskSeven() {
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Nomen");
    currentdiv.appendChild(text);
    socketAnno('displayTextAsButton');
    addAnnoNounsButton();
}

function taskEight() {
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Verben");
    currentDiv.appendChild(text);
    socketAnno('displayTextAsButton');
    addAnnoVerbsButton();
}

function taskNine() {
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Adjektive");
    currentDiv.appendChild(text);
    socketAnno('displayTextAsButton');
    addAnnoAdjectiveButton();
}

//kann weg
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

