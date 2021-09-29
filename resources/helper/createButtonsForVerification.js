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
