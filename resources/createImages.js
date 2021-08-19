
function accessEnabled () {
    let currentDiv = document.getElementById("playArea");
    let correctImage = document.createElement("img");
    correctImage.setAttribute('src', 'resources/frontendResources/assets/img/grünerhaken.png');
    currentDiv.innerHTML = "";
    currentDiv.appendChild(correctImage);

}





