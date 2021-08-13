function addNounButton() {
    // vorher "testText"
    let currentDiv = document.getElementById("confirmation");
    currentDiv.innerHTML = "";
    let checkN = document.createElement("Button");
    checkN.id = "checkN";
    checkN.className = "btn btn-secondary btn-lg btn-block";
    checkN.setAttribute("onclick", "checkInputNouns()");
    checkN.innerHTML = "Check Nomen";
    currentDiv.appendChild(checkN);
}

function addTestButton() {
    let currentDiv = document.getElementById("confirmation");
    currentDiv.innerHTML = "";
    let checkN = document.createElement("Button");
    checkN.id = "checkTest";
    checkN.className = "btn btn-secondary btn-lg btn-block";
    checkN.setAttribute("onclick", "sendAnnotationRelationHelper()");
    checkN.innerHTML = "Annotiere Relationen";
    currentDiv.appendChild(checkN);
}

function addPropSelect() {
    let currentDiv = document.getElementById("confirmation");
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
    let currentDiv = document.getElementById("confirmation");
    currentDiv.innerHTML = "";
    let checkV = document.createElement("Button");
    checkV.id = "checkV";
    checkV.className = "btn btn-secondary btn-lg btn-block";
    checkV.setAttribute("onclick", "checkInputVerbs()");
    checkV.innerHTML = "Check Verben";
    currentDiv.innerHTML = "";
    currentDiv.appendChild(checkV);
}

function addAdjectiveButton() {
    let currentDiv = document.getElementById("confirmation");
    currentDiv.innerHTML = "";
    let checkA = document.createElement("Button");
    checkA.id = "checkA";
    checkA.className = "btn btn-secondary btn-lg btn-block";
    checkA.setAttribute("onclick", "checkInputAdjectives()");
    checkA.innerHTML = "Check Adjektive";
    currentDiv.appendChild(checkA);
}

function addFoodButton() {
    let currentDiv = document.getElementById("confirmation");
    currentDiv.innerHTML = "";
    var buttonCheck = document.createElement("button");
    buttonCheck.id ="checkF";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "checkInputFood()");
    buttonCheck.innerHTML = "Check Food";
    currentDiv.appendChild(buttonCheck);
}

// alles auf textArea umändern
function addAnnoFoodButton() {
    let currentDiv = document.getElementById("confirmation");
    currentDiv.innerHTML = "";
    var buttonCheck = document.createElement("button");
    buttonCheck.id = "annoF";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationFood()");
    //buttonCheck.setAttribute("onclick", "changeButtonLight(buttonCheck.id)");
    buttonCheck.innerHTML = "Annotiere Food";
    currentDiv.appendChild(buttonCheck);
}

function addAnnoNounsButton() {
    let currentDiv = document.getElementById("confirmation");
    currentDiv.innerHTML = "";
    var buttonCheck = document.createElement("button");
    buttonCheck.id = "annoN";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationNouns()");
    buttonCheck.innerHTML = "Annotiere Nomen";
    currentDiv.appendChild(buttonCheck);
}

function addAnnoVerbsButton() {
    let currentDiv = document.getElementById("confirmation");
    currentDiv.innerHTML = "";
    var buttonCheck = document.createElement("button");
    buttonCheck.id = "annoV";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationVerbs()");
    //buttonCheck.setAttribute("onclick", "changeButtonLight(buttonCheck.id)");
    buttonCheck.innerHTML = "Annotiere Verben";
    currentDiv.appendChild(buttonCheck);
}


function addAnnoAdjectiveButton() {
    let currentDiv = document.getElementById("confirmation");
    currentDiv.innerHTML = "";
    var buttonCheck = document.createElement("button");
    buttonCheck.id = "annoA";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationAdjectives()");
    buttonCheck.innerHTML = "Annotiere Adjektive";
    currentDiv.appendChild(buttonCheck);
}

function addAnnoAnimalFaunaButton() {
    let currentDiv = document.getElementById("confirmation");
    currentDiv.innerText = "";
    var buttonCheck = document.createElement("button");
    buttonCheck.id = "annoA";
    buttonCheck.className = "btn btn-secondary btn-lg btn-block";
    buttonCheck.setAttribute("onclick", "sendAnnotationAnimalFauna()");
    buttonCheck.innerHTML = "Annotiere Fauna";
    currentDiv.appendChild(buttonCheck);
}

function addRefreshButton() {
    let currentDiv = document.getElementById("taskArea");
    let refreshButton = document.createElement("i");
    refreshButton.className = "fas fa-sync-alt";
    //refreshButton.setAttribute("onclick", );
}