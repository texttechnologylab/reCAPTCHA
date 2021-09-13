function addNounButton() {
    // vorher "testText"
    const currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    const checkN = document.createElement("Button");
    checkN.id = "checkN";
    checkN.className = "btn btn-secondary btn-lg btn-block";
    checkN.setAttribute("onclick", "checkInputNouns()");
    checkN.innerHTML = "Verifizieren";
    currentDiv.appendChild(checkN);
    addRefreshButton("checkNoun");
}

function addPropButton() {
    const currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    const checkN = document.createElement("Button");
    checkN.id = "checkTest";
    checkN.className = "btn btn-secondary btn-lg btn-block";
    checkN.setAttribute("onclick", "sendAnnotationRelationHelper()");
    checkN.innerHTML = "Verifizieren";
    currentDiv.appendChild(checkN);
}

function addMultiTokenButton() {
    const currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    const checkN = document.createElement("Button");
    checkN.id = "checkTest";
    checkN.className = "btn btn-secondary btn-lg btn-block";
    checkN.setAttribute("onclick", "sendAnnotationMultiToken()");
    checkN.innerHTML = "Verifizieren";
    currentDiv.appendChild(checkN);
    addRefreshButton("multiToken");

}

function addPropSelect() {
    const currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    const checkProp = document.createElement("select");
    checkProp.id = "propSelection";
    checkProp.className = "btn btn-secondary btn-lg btn-block";
    checkProp.text = "Wähle Relation";
    let options = [["selectButton", "Wähle Relation"],["noun", "Nomenverbindung"], ["verb", "Verbenverbindung"], ["adjective", "Adjektiveverbindung"]];

    for (let i = 0; i < options.length; i++) {
        let option = document.createElement("option");
        option.text = options[i][1];
        option.value = options[i][0];
        checkProp.options[i] = option;
    }
    currentDiv.appendChild(checkProp);
    const sendProp = document.createElement("Button");
    sendProp.innerHTML = "OK";
    sendProp.className = "btn btn-secondary btn-lg btn-block";
    currentDiv.appendChild(sendProp);
    addRefreshButton("propSelection");

    /*
    let nounOption = document.createElement("option");
    nounOption.text = "Nomen Relation";
    nounOption.value = "noun";
    checkProp.options[1] = nounOption;
    //nounOption.innerHTML = "Nomenverbindung";
    //nounOption.id = "Nomen Relation";
    //checkProp.appendChild(nounOption);
    //checkProp.innerHTML = "Wähle Relation";
     */
}

function addVerbButton() {
    const currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    const checkV = document.createElement("Button");
    checkV.id = "checkV";
    checkV.className = "btn btn-secondary btn-lg btn-block";
    checkV.setAttribute("onclick", "checkInputVerbs()");
    checkV.innerHTML = "Verifizieren";
    currentDiv.innerHTML = "";
    currentDiv.appendChild(checkV);
    addRefreshButton("checkVerb");
}

function addAdjectiveButton() {
    const currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    const checkA = document.createElement("Button");
    checkA.id = "checkA";
    checkA.className = "btn btn-secondary btn-lg btn-block";
    checkA.setAttribute("onclick", "checkInputAdjectives()");
    checkA.innerHTML = "Verifizieren";
    currentDiv.appendChild(checkA);
    addRefreshButton("checkAdjective");
}

function addFoodButton() {
    const currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    const buttonCheck = document.createElement("button");
    buttonCheck.id ="checkF";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "checkInputFood()");
    buttonCheck.innerHTML = "Verifizieren";
    currentDiv.appendChild(buttonCheck);
    addRefreshButton("checkFood");
}

// alles auf textArea umändern
function addAnnoFoodButton() {
    const currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    const buttonCheck = document.createElement("button");
    buttonCheck.id = "annoF";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationFood()");
    //buttonCheck.setAttribute("onclick", "changeButtonLight(buttonCheck.id)");
    buttonCheck.innerHTML = "Verifizieren";
    currentDiv.appendChild(buttonCheck);
    addRefreshButton("annoFood");
}

function addAnnoNounsButton() {
    const currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    const buttonCheck = document.createElement("button");
    buttonCheck.id = "annoN";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationNouns()");
    buttonCheck.innerHTML = "Verifizieren";
    currentDiv.appendChild(buttonCheck);
    addRefreshButton("annoNoun");
}

function addAnnoVerbsButton() {
    const currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    const buttonCheck = document.createElement("button");
    buttonCheck.id = "annoV";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationVerbs()");
    buttonCheck.innerHTML = "Verifizieren";
    currentDiv.appendChild(buttonCheck);
    addRefreshButton("annoVerb");
}


function addAnnoAdjectiveButton() {
    const currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    const buttonCheck = document.createElement("button");
    buttonCheck.id = "annoA";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationAdjectives()");
    buttonCheck.innerHTML = "Verifizieren";
    currentDiv.appendChild(buttonCheck);
    addRefreshButton("annoAdjective");
}

function addAnnoAnimalFaunaButton() {
    const currentDiv = document.getElementById("iconsArea");
    currentDiv.innerText = "";
    const buttonCheck = document.createElement("button");
    buttonCheck.id = "annoA";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationAnimalFauna()");
    buttonCheck.innerHTML = "Verifizieren";
    currentDiv.appendChild(buttonCheck);
    addRefreshButton("annoAnimalFauna");
}

function addRefreshButton(task) {
    let taskFunk = "";
    switch(task){
        case "checkNoun":
            taskFunk = "taskCheckNouns()";
            break;
        case "checkVerb":
            taskFunk = "taskCheckVerbs()";
            break;
        case "checkAdjective":
            taskFunk = "taskCheckAdjectives()";
            break;
        case "checkFood":
            taskFunk = "taskCheckFood()";
            break;
        case "annoFood":
            taskFunk = "taskAnnotateFood()";
            break;
        case "annoNoun":
            taskFunk = "taskAnnotateNouns()";
            break;
        case "annoVerb":
            taskFunk = "taskAnnotateVerbs()";
            break;
        case "annoAdjective":
            taskFunk = "taskAnnotateAdjectives()";
            break;
        case "propSelection":
            taskFunk = "taskSelectRelation()";
            break;
        case "multiToken":
            taskFunk = "taskMultiToken()";
            break;
    }
    let currentDiv = document.getElementById("iconsArea");
    let button = document.createElement("button");
    button.setAttribute("onclick", taskFunk);
    button.id = "refreshButton";
    let icon = document.createElement("i");
    icon.className = "fas fa-sync-alt";
    icon.id = "refreshIcon";
    button.appendChild(icon);
    currentDiv.appendChild(button);


}

function addInfoButton() {
    let currentDiv = document.getElementById("iconsArea");
    let button = document.createElement("button");
    let icon = document.createElement("i");
    icon.className = "fas fa-info-circle";
    icon.id = "infoButton";
    button.appendChild(icon);
    currentDiv.appendChild(button);
}

/* Button Toolbar
function quickToolbar() {
    let currentDiv = document.getElementById("iconsArea");
    let newDiv = document.createElement("div");
    newDiv.id = "quickToolbar";
    let firstLine = document.createElement("p");
    firstLine.className = "toolbar-buttons-line";
    let secLine = document.createElement("p");

    let optionOne = document.createElement("button");
    optionOne.setAttribute("onclick", "quickAnnotate('animals')");
    optionOne.innerText = "Tier/Fauna";
    optionOne.className = "toolbar-buttons";


    let optionTwo = document.createElement("button");
    optionTwo.setAttribute("onclick", "quickAnnotate('flowers')");
    optionTwo.innerText = "Pflanze";
    optionTwo.className = "toolbar-buttons";

    let optionThree = document.createElement("button");
    optionThree.setAttribute("onclick", "quickAnnotate('food')");
    optionThree.innerText = "Emotionen";
    optionThree.className = "toolbar-buttons";

    let optionFour = document.createElement("button");
    optionFour.setAttribute("onclick", "quickAnnotate('emotions')");
    optionFour.innerText = "Essen";
    optionFour.className = "tool-buttons";

    let optionFive = document.createElement("button");
    optionFive.setAttribute("onclick", "quickAnnotate('amount')");
    optionFive.innerText = "Anzahl/Menge";
    optionFive.className = "tool-buttons";

    let optionSix = document.createElement("button");
    optionSix.setAttribute("onclick", "quickAnnotate('persons')");
    optionSix.innerText = "Person";
    optionSix.className = "tool-buttons";

    let optionSeven = document.createElement("button");
    optionSeven.setAttribute("onclick", "quickAnnotate('time')");
    optionSeven.innerText = "Time";
    optionSeven.className = "tool-buttons";

    let optionEight = document.createElement("button");
    optionEight.setAttribute("onclick", "quickAnnotate('locations')");
    optionEight.innerText = "Ort";
    optionEight.className = "tool-buttons";


   mit Schleife
    let options = [optionOne, optionTwo, optionThree, optionFour, optionFive, optionSix, optionSeven, optionEight];

    for (let i = 1; i <= 8; i++) {
        options[i].className = "toolbar-buttons";
        options[i].innerText = "...";
        if (i < 5) {
            firstLine.appendChild(options[i]);
        } else{
            secLine.appendChild(options[i]);
        }
    }

    newDiv.appendChild(optionOne);
    newDiv.appendChild(optionTwo);
    newDiv.appendChild(optionThree);
    newDiv.appendChild(optionFour);
    newDiv.appendChild(optionFive);
    newDiv.appendChild(optionOne);
    newDiv.appendChild(optionTwo);
    newDiv.appendChild(optionThree);
    newDiv.appendChild(optionFour);
    newDiv.appendChild(optionFive);
    newDiv.appendChild(optionSix);
    newDiv.appendChild(optionSeven);
    newDiv.appendChild(optionEight);
}
*/

/*
function quickToolbar() {
    let currentDiv = document.getElementById("iconsArea");
    let newDiv = document.createElement("div");
    newDiv.id = "quickToolbar";

    let optionOne = document.createElement("button");
    optionOne.setAttribute("onclick", "quickAnnotate('animals')");
    optionOne.innerText = "Tier/Fauna";
    optionOne.className = "toolbar-buttons";

    let optionTwo = document.createElement("button");
    optionTwo.setAttribute("onclick", "quickAnnotate('flowers')");
    optionTwo.innerText = "Pflanze";
    optionTwo.className = "toolbar-buttons";

    let optionThree = document.createElement("button");
    optionThree.setAttribute("onclick", "quickAnnotate('food')");
    optionThree.innerText = "Emotionen";
    optionThree.className = "toolbar-buttons";

    let optionFour = document.createElement("button");
    optionFour.setAttribute("onclick", "quickAnnotate('emotions')");
    optionFour.innerText = "Essen";
    optionFour.className = "tool-buttons";

    let optionFive = document.createElement("button");
    optionFive.setAttribute("onclick", "quickAnnotate('amount')");
    optionFive.innerText = "Anzahl/Menge";
    optionFive.className = "tool-buttons";

    let optionSix = document.createElement("button");
    optionSix.setAttribute("onclick", "quickAnnotate('persons')");
    optionSix.innerText = "Person";
    optionSix.className = "tool-buttons";

    let optionSeven = document.createElement("button");
    optionSeven.setAttribute("onclick", "quickAnnotate('time')");
    optionSeven.innerText = "Time";
    optionSeven.className = "tool-buttons";

    let optionEight = document.createElement("button");
    optionEight.setAttribute("onclick", "quickAnnotate('locations')");
    optionEight.innerText = "Ort";
    optionEight.className = "tool-buttons";



    let options = [optionOne, optionTwo, optionThree, optionFour, optionFive, optionSix, optionSeven, optionEight];

    for (let i = 1; i <= 8; i++) {
        options[i].className = "toolbar-buttons";
        options[i].innerText = "...";
        if (i < 5) {
            firstLine.appendChild(options[i]);
        } else{
            secLine.appendChild(options[i]);
        }
    }


    newDiv.appendChild(optionOne);
    newDiv.appendChild(optionTwo);
    newDiv.appendChild(optionThree);
    newDiv.appendChild(optionFour);

    newDiv.appendChild(optionFive);
    newDiv.appendChild(optionSix);
    newDiv.appendChild(optionSeven);
    newDiv.appendChild(optionEight);


    newDiv.appendChild(optionOne);
    newDiv.appendChild(optionTwo);
    newDiv.appendChild(optionThree);
    newDiv.appendChild(optionFour);
    newDiv.appendChild(optionFive);
    newDiv.appendChild(optionOne);
    newDiv.appendChild(optionTwo);
    newDiv.appendChild(optionThree);
    newDiv.appendChild(optionFour);
    newDiv.appendChild(optionFive);
    newDiv.appendChild(optionSix);
    newDiv.appendChild(optionSeven);
    newDiv.appendChild(optionEight);

    currentDiv.appendChild(newDiv);
}
*/

function createToolbar() {
    //let selectedToolbar = [];
    let currentDiv = document.getElementById("toolbarArea");
    currentDiv.innerHTML = "";
    let pickList = document.createElement("select");
    pickList.className = "custom-select";
    pickList.id = "selectToolbar";
    currentDiv.appendChild(pickList);
    let options = [["---", "optionEmpty"],["Name", "optionName"], ["Ort", "optionLocation"], ["Organisation/Firma/Verein", "optionOrga"], ["Essen", "optionFood"], ["Bakterium", "optionBacteria"], ["Zeit", "optionTime"], ["Kommunikation", "optionCommunication"], ["Beziehung", "optionRelation"]];

    for (let i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.value = options[i][0];
        option.text = options[i][0];
        option.id = options[i][1];
        //option.style.backgroundColor = "#FF6600";
        pickList.appendChild(option);
    }
    /*
    document.querySelector("#selectToolbar").onchange = function () {
        selectedToolbar.push(document.querySelector("#selectToolbar").value);
    }
     */
}

function addQuickAnnoButton() {
    let selectedToolbar = [];
    let iconsArea = document.getElementById("iconsArea");
    iconsArea.innerHTML = "";
    let buttonCheck = document.createElement("button");
    buttonCheck.id = "annoQuick";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    //buttonCheck.setAttribute("onclick", "");
    buttonCheck.innerHTML = "Verifizieren";
    iconsArea.appendChild(buttonCheck);
}
