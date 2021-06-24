
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
    let two = document.createTextNode("Aufgabe 2");
    secondTaskButton.appendChild(two);
    secondTaskButton.setAttribute("onclick", "taskTwo()");
    secondTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(secondTaskButton);

    let thirdTaskButton = document.createElement("Button");
    thirdTaskButton.id = "thirdTaskLight";
    let three = document.createTextNode("Aufgabe 3");
    thirdTaskButton.appendChild(three);
    thirdTaskButton.setAttribute("onclick", "taskThree()");
    thirdTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(thirdTaskButton);

    let fourthTaskButton = document.createElement("Button");
    fourthTaskButton.id = "fourthTaskLight";
    let four = document.createTextNode("Aufgabe 4");
    fourthTaskButton.appendChild(four);
    fourthTaskButton.setAttribute("onclick", "taskFour()");
    fourthTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(fourthTaskButton);

    let fifthTaskButton = document.createElement("Button");
    fifthTaskButton.id = "fifthTaskLight";
    let five = document.createTextNode("Aufgabe 5");
    fifthTaskButton.appendChild(five);
    fifthTaskButton.setAttribute("onclick", "taskFive()");
    fifthTaskButton.style.backgroundColor = 'red';
    currentDiv.appendChild(fifthTaskButton);
    addNounButton();
}

function taskOne() {
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    addNounButton();
}

function taskTwo() {
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    socketAnno('displayTextAsButton');
    addVerbButton();
}

function taskThree() {
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    socketAnno('displayTextAsButton');
    addAdjectiveButton();
}

function taskFour() {
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    socketAnno('loadSentences');
}

function taskFive() {
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    socketAnno('displayTextAsButton');
    addFoodButton();
}

function addFoodButton() {
    let currentDiv = document.getElementById("testText");
    var buttonCheck = document.createElement("button");
    buttonCheck.setAttribute("onclick", "checkInputFood()");
    buttonCheck.innerHTML = "Check Food";
    currentDiv.appendChild(buttonCheck);
}

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

