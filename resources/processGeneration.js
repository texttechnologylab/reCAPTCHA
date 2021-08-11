var view = "https://authority.hucompute.org/user/316809";
var tool = "proppanel";
var casId = "28490"
const SOCKETANNO = webSocketAnno(casId, view, tool);


//Sicherungsaufgaben
function taskOne() {
    //Check Nomen
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Nomen (Check)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringNouns());
    addSendButton("checkNouns");
    // addNounButton();
}

function taskTwo() {
    //Check Verben
    //Check Verben
    selectedTokensId = [];
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Verben (Check)");
    currentdiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringVerbs());
    addSendButton("checkVerbs");
    // addVerbButton();
}

function taskThree() {
    //Check Adjektive
    selectedTokensId = [];
    let currentdiv = document.getElementById("playArea");
    currentdiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Adjektive (Check)");
    currentdiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringAdjectives());
    addSendButton("checkAdjectives");
    // addAdjectiveButton();
}

function taskFour() {
    //Check Essen
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Essen (Check)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringFood());
    addSendButton("checkFoods");
    // addFoodButton();
}


//Annotationsaufgaben

function taskFive() {
    //Annotiere Nomen
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Nomen (Anno)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringNouns());
    addSendButton("annoNouns");
}

function taskSix() {
    //Annotiere Verben
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Verben (Anno)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringVerbs());
    addSendButton("annoVerbs");
}

function taskSeven() {
    //Annotiere Adjektive
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere alle Adjektive (Anno)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringAdjectives());
    addSendButton("annoAdjectives");
}

function taskEight() {
    //Annotation Food
    selectedTokensId = [];
    let currentDiv = document.getElementById("playArea");
    currentDiv.innerHTML = "";
    let otherDiv = document.getElementById("testText");
    otherDiv.innerHTML = "";
    let text = document.createTextNode("Markiere Essen (Anno)");
    currentDiv.appendChild(text);
    SOCKETANNO.displayTextAsButtons(getToolStringFood());
    addSendButton("annoFood");
}


function chooseTasks() {

    let taskOne;
    let taskTwo;
    let taskThree;
    let taskFour;

    // max-min und min
    taskOne = Math.floor((Math.random() * 4) + 1);
    taskTwo = Math.floor((Math.random() * 4) + 1);

    while (taskTwo == taskOne) {
        taskTwo = Math.floor((Math.random() * 4) + 1);
    }

    // 8 - 5
    taskThree = Math.floor((Math.random() * 3) + 5);
    taskFour = Math.floor((Math.random() * 3) + 5);

    while (taskFour == taskThree) {
        taskFour = Math.floor((Math.random() * 3) + 5);
    }

    let taskList = [taskOne, taskTwo, taskThree, taskFour];
    // let taskList = [1, 2, 3, 4];
    return taskList;
}

function taskGenerator(taskList) {

    let currentDiv = document.getElementById("taskArea");
    currentDiv.innerHTML = "";
    let buttonDiv = document.getElementById("playArea");
    buttonDiv.innerHTML = "";

    for (let i = 0; i < taskList.length; i++) {
        taskElection(i, taskList[i]);
    }

}

function taskElection(taskButtonNumber, taskNumber) {

    let currentDiv = document.getElementById("taskArea");
    let task = "";

    switch (taskButtonNumber + 1) {
        case 1:
            let firstTaskButton = document.createElement("Button");
            firstTaskButton.id = "firstTaskLight";
            window.alert(firstTaskButton.id);
            let one = document.createTextNode("Aufgabe 1");
            firstTaskButton.appendChild(one);

            firstTaskButton.addEventListener("click", function () {
                callTask(taskNumber);
                currentTaskNumber = 1;
            });
            firstTaskButton.style.backgroundColor = 'red';
            currentDiv.appendChild(firstTaskButton);
            break;
        case 2:
            let secondTaskButton = document.createElement("Button");
            secondTaskButton.id = "secondTaskLight";
            let two = document.createTextNode("2");
            secondTaskButton.appendChild(two);

            secondTaskButton.addEventListener("click", function(){
                callTask(taskNumber);
                currentTaskNumber = 2;
            });
            secondTaskButton.style.backgroundColor = 'red';
            currentDiv.appendChild(secondTaskButton);
            break;
        case 3:
            let thirdTaskButton = document.createElement("Button");
            thirdTaskButton.id = "thirdTaskLight";
            let three = document.createTextNode("3");
            thirdTaskButton.appendChild(three);

            thirdTaskButton.addEventListener("click", function (){
                callTask(taskNumber);
                currentTaskNumber = 3;
            });
            thirdTaskButton.style.backgroundColor = 'red';
            currentDiv.appendChild(thirdTaskButton);
            break;
        case 4:
            let fourthTaskButton = document.createElement("Button");
            fourthTaskButton.id = "fourthTaskLight";
            let four = document.createTextNode("4");
            fourthTaskButton.appendChild(four);

            fourthTaskButton.addEventListener("click", function() {
                callTask(taskNumber);
                currentTaskNumber = 4;
            });
            fourthTaskButton.style.backgroundColor = 'red';
            currentDiv.appendChild(fourthTaskButton);
            break;
        case 5:
            let fifthTaskButton = document.createElement("Button");
            fifthTaskButton.id = "fifthTaskLight";
            let five = document.createTextNode("5");
            fifthTaskButton.appendChild(five);

            fifthTaskButton.addEventListener("click", function() {
                callTask(taskNumber);
                currentTaskNumber = 5;
            });
            fifthTaskButton.style.backgroundColor = 'red';
            currentDiv.appendChild(fifthTaskButton);
            break;
        case 6:
            let sixthTaskButton = document.createElement("Button");
            sixthTaskButton.id = "sixthTaskLight";
            let six = document.createTextNode("6");
            sixthTaskButton.appendChild(six);

            sixthTaskButton.addEventListener("click", function() {
                callTask(taskNumber);
                currentTaskNumber = 6;
            });
            sixthTaskButton.style.backgroundColor = 'red';
            currentDiv.appendChild(sixthTaskButton);
            break;
        case 7:
            let seventhTaskButton = document.createElement("Button");
            seventhTaskButton.id = "seventhTaskLight";
            let seven = document.createTextNode("7");
            seventhTaskButton.appendChild(seven);

            seventhTaskButton.addEventListener("click", function() {
                callTask(taskNumber);
                currentTaskNumber = 7;
            });
            seventhTaskButton.style.backgroundColor = 'red';
            currentDiv.appendChild(seventhTaskButton);
            break;
        case 8:
            let eighthTaskButton = document.createElement("Button");
            eighthTaskButton.id = "eighthTaskLight";
            let eight = document.createTextNode("8");
            eighthTaskButton.appendChild(eight);

            eighthTaskButton.addEventListener("click", function () {
                callTask(taskNumber);
                currentTaskNumber = 8;
            });
            eighthTaskButton.style.backgroundColor = 'red';
            currentDiv.appendChild(eighthTaskButton);
            break;
    }
}


function callTask(taskNumber) {
    switch (taskNumber) {
        case 1:
            taskOne()
            break;
        case 2:
            taskTwo()
            break;
        case 3:
            taskThree();
            break;
        case 4:
            taskFour();
            break;
        case 5:
            taskFive();
            break;
        case 6:
            taskSix();
            break;
        case 7:
            taskSeven();
            break;
        case 8:
            taskEight();
            break;

    }
}


