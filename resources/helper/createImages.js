
function accessEnabled () {
    let currentDiv = document.getElementById("playArea");
    let correctImage = document.createElement("img");
    correctImage.src = "resources/frontendResources/assets/img/grünerhaken.png";
    correctImage.alt = "Verifizierung erfolgreich";
    correctImage.width = "200";
    correctImage.height = "200";
    currentDiv.innerHTML = "";
    currentDiv.appendChild(correctImage);
}
/*
function createToolbar () {
    let currentDiv = document.getElementById("iconsArea");
    currentDiv.innerHTML = "";
    let pickList = document.createElement("select");
    pickList.className = "custom-select";
    currentDiv.appendChild(pickList);
    let options = ["Name", "Ort", "Organisation/Firma/Verein", "Essen", "Bakterium", "Zeit", "Kommunikation", "Beziehung"];

    for (let i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.value = options[i];
        option.text = options[i];
        //option.style.backgroundColor = "#FF6600";
        pickList.appendChild(option);
    }
    currentDiv.appendChild(pickList);
}

 */

function quickAnnoTask() {
    let taskArea = document.getElementById("taskArea");
    taskArea.innerHTML = "";
    taskArea.innerHTML = "Bestimme Entities Essen/Nomen/Verben/Adjektive/Orte/Location frei: \n wähle erst mal ein Wort aus und bestimme es anschließend mithilfe der Toolbar"
    SOCKETANNO.displayTextAsButtons("standard");
    let currentDiv = document.getElementById("iconsArea");
    createToolbar();
}


function createCheckBox() {
    let currentDiv = document.getElementById('iconsArea');
    currentDiv.innerHTML = "";
    let checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    checkBox.name = 'checkProp';
    checkBox.value = 'Person';

    let label = document.createElement('label');
    label.htmlFor = 'Person';
    label.appendChild(document.createTextNode('Personen'));

    let labelTwo = document.createElement('label');
    labelTwo.htmlFor = 'Ort';
    labelTwo.appendChild(document.createTextNode('Ort'));

    let br = document.createElement('br');
    currentDiv.appendChild(checkBox);
    currentDiv.appendChild(label);
    currentDiv.appendChild(br);
    currentDiv.appendChild(labelTwo);
    currentDiv.appendChild(br);
}

function createCheckButtons() {
}