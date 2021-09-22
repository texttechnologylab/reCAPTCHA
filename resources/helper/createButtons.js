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
}

function addAnnoFoodButton() {
    const currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    const buttonCheck = document.createElement("button");
    buttonCheck.id = "annoF";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationFood()");
    buttonCheck.innerHTML = "Verifizieren";
    currentDiv.appendChild(buttonCheck);
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
        case "selectAdjectiveRelation":
            taskFunk = "taskSelectAdjectiveRelation()";
            break;
        case "selectVerbRelation":
            taskFunk = "taskVerbRelation()";
            break;
        case "quickAnno":
            taskFunk = "quickAnno()";
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

function createToolbar() {
    //let selectedToolbar = [];
    let currentDiv = document.getElementById("toolbarArea");
    currentDiv.innerHTML = "";
    let pickList = document.createElement("select");
    pickList.className = "custom-select";
    pickList.id = "selectToolbar";
    currentDiv.appendChild(pickList);
    let options = [
        ["---", "optionEmpty"], ["Verben", getToolStringVerbs()], ["Adjektive", getToolStringAdjectives()],
        ["Orte", getToolStringLocationPlace()],
        ["Essen", getToolStringFood()], ["Tiere", getToolStringAnimalFauna()], ["Fahrzeuge", getToolStringVehicle()],
        ["Pflanzen", getToolStringPlantFlora()]
    ];

    for (let i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.value = options[i][0];
        option.text = options[i][0];
        option.id = options[i][1];
        //option.style.backgroundColor = "#FF6600";
        pickList.appendChild(option);
    }
}

function addQuickAnnoButton() {
    let selectedToolbar = [];
    let iconsArea = document.getElementById("iconsArea");
    iconsArea.innerHTML = "";

    let buttonAppend = document.createElement("button");
    buttonAppend.id = "annoQuick";
    buttonAppend.className = "btn btn-secondary btn-lg btn-block";
    buttonAppend.innerHTML = "Auswählen";
    iconsArea.appendChild(buttonAppend);


let buttonCheck = document.createElement("button");
    buttonCheck.id = "annoQuickVerification";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "closeRecaptchaIfFinished()");
    buttonCheck.innerHTML = "Verifizieren";
    iconsArea.appendChild(buttonCheck);
}
