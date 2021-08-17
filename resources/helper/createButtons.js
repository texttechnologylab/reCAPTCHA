function addNounButton() {
    // vorher "testText"
    let currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    let checkN = document.createElement("Button");
    checkN.id = "checkN";
    checkN.className = "btn btn-secondary btn-lg btn-block";
    checkN.setAttribute("onclick", "checkInputNouns()");
    checkN.innerHTML = "Verifizieren";
    currentDiv.appendChild(checkN);
    addRefreshButton();
}

function addTestButton() {
    let currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    let checkN = document.createElement("Button");
    checkN.id = "checkTest";
    checkN.className = "btn btn-secondary btn-lg btn-block";
    checkN.setAttribute("onclick", "sendAnnotationRelationHelper()");
    checkN.innerHTML = "Verifizieren";
    currentDiv.appendChild(checkN);
    addRefreshButton();
}

function addPropSelect() {
    let currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    let checkProp = document.createElement("select");
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
    let sendProp = document.createElement("Button");
    sendProp.innerHTML = "OK";
    sendProp.className = "btn btn-secondary btn-lg btn-block";
    currentDiv.appendChild(sendProp);
    addRefreshButton();

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
    let currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    let checkV = document.createElement("Button");
    checkV.id = "checkV";
    checkV.className = "btn btn-secondary btn-lg btn-block";
    checkV.setAttribute("onclick", "checkInputVerbs()");
    checkV.innerHTML = "Verifizieren";
    currentDiv.innerHTML = "";
    currentDiv.appendChild(checkV);
    addRefreshButton();
}

function addAdjectiveButton() {
    let currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    let checkA = document.createElement("Button");
    checkA.id = "checkA";
    checkA.className = "btn btn-secondary btn-lg btn-block";
    checkA.setAttribute("onclick", "checkInputAdjectives()");
    checkA.innerHTML = "Verifizieren";
    currentDiv.appendChild(checkA);
    addRefreshButton();
}

function addFoodButton() {
    let currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    var buttonCheck = document.createElement("button");
    buttonCheck.id ="checkF";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "checkInputFood()");
    buttonCheck.innerHTML = "Verifizieren";
    currentDiv.appendChild(buttonCheck);
    addRefreshButton();
}

// alles auf textArea umändern
function addAnnoFoodButton() {
    let currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    var buttonCheck = document.createElement("button");
    buttonCheck.id = "annoF";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationFood()");
    //buttonCheck.setAttribute("onclick", "changeButtonLight(buttonCheck.id)");
    buttonCheck.innerHTML = "Verifizieren";
    currentDiv.appendChild(buttonCheck);
    addRefreshButton();
}

function addAnnoNounsButton() {
    let currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    var buttonCheck = document.createElement("button");
    buttonCheck.id = "annoN";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationNouns()");
    buttonCheck.innerHTML = "Verifizieren";
    currentDiv.appendChild(buttonCheck);
    addRefreshButton();
}

function addAnnoVerbsButton() {
    let currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    var buttonCheck = document.createElement("button");
    buttonCheck.id = "annoV";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationVerbs()");
    //buttonCheck.setAttribute("onclick", "changeButtonLight(buttonCheck.id)");
    buttonCheck.innerHTML = "Verifizieren";
    currentDiv.appendChild(buttonCheck);
    addRefreshButton();
}


function addAnnoAdjectiveButton() {
    let currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    var buttonCheck = document.createElement("button");
    buttonCheck.id = "annoA";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationAdjectives()");
    buttonCheck.innerHTML = "Verifizieren";
    currentDiv.appendChild(buttonCheck);
    addRefreshButton();
}

function addAnnoAnimalFaunaButton() {
    let currentDiv = document.getElementById("iconsArea");
    currentDiv.innerText = "";
    var buttonCheck = document.createElement("button");
    buttonCheck.id = "annoA";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationAnimalFauna()");
    buttonCheck.innerHTML = "Verifizieren";
    currentDiv.appendChild(buttonCheck);
    addRefreshButton();
}

function addRefreshButton() {
    let currentDiv = document.getElementById("iconsArea");
    let button = document.createElement("button");
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