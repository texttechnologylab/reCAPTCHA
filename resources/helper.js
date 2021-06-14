// Speichert die ids aller Token die angeklickt worden sind.
let selectedButtonId = [];

/**
 * Falls ein Token angegklickt worden ist dann Token färben und die id in Liste speichern.
 * Falls ein angeklickter Token angegklickt wird dann Token wieder standarf Färben und die id aus
 * der Liste entfernen.
 * @param buttonId
 */
function tokenClicked(buttonId) {
    var selectedColor = "#EBCA35";
    var selectedColorRGB = "rgb(235, 202, 53)";
    var button = document.getElementById(buttonId);

    if (button.style.background == selectedColorRGB){
        button.style.background = "#e9ecef"; // Standard Button Farbe
        // Element mit value aus Array entfernen: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
        const index = selectedButtonId.indexOf(buttonId);
        if (index > -1) {
           selectedButtonId.splice(index, 1);
        }

    }
    // Falls Button noch nicht ausgewählt
    else {
        button.style.background = selectedColor;
        selectedButtonId.push(buttonId);
    }

}
function alertSelectedButton(){
    alert(selectedButtonId);
}
