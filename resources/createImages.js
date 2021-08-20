
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



function createToolbar () {
    /*
    let currentDiv = document.getElementById("iconArea");
    let pickList = document.createElement("select");
    let optionOne = document.createElement("option");
    let options = ["Name", "Ort", "Organisation/Firma/Verein/..."]

    for (let i = 0; i < options.length; i++) {
        pickList.options[i] =
    }
     */

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