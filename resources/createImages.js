
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





