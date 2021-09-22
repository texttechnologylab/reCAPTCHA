/**
 * Wenn das recaptcha Erfolgreihc gelöst worden ist wird dies ausgeführt.
 * Der User bekommt eine graphische Bestätigung und das reCaptcha Fenster schließt.
 * Unser reCaptcha schickt der Website von der das reCaptcha geöffnet wurde eine Nachricht und
 * so weiß diese, dass das reCaptcha erfolgreich gelöst worden ist.
 */
function accessGranted(){
    /*  Sendet die Nachricht, dass das reCpatcha erfolgreich gelöst worden ist
           an die Website wo das reCaptcha aufgerufen worden ist.  */
    const mainPageURL = window.opener.location.href;
    var message = "solved";
    window.opener.postMessage(message, mainPageURL); //sending the message

    let currentDiv = document.getElementById("playArea");
    let correctImage = document.createElement("img");
    correctImage.src = "resources/frontendResources/assets/img/grünerhaken.png";
    correctImage.alt = "Verifizierung erfolgreich";
    correctImage.width = "200";
    correctImage.height = "200";
    currentDiv.innerHTML = "";
    currentDiv.appendChild(correctImage);

    setTimeout(closeWindow, 3000);
}



function closeWindow() {
    window.close();
}
