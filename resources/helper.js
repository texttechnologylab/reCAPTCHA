let beispielText = "Sowohl Freisprechanlage als auch Handy beeinflussten den Fahrstil und zeigten keinen\n" +
    "Unterschied im Grad der Ablenkung. «Das stellt besonders die Auflagen in Frage, die das\n" +
    "Telefonieren mit Handys verbieten, es aber über Freisprechanlage erlauben.» Verglichen\n" +
    "mit konzentrierten Fahrern steuerten die telefonierenden Insassen ihr Gefährt in der Simulation etwas langsamer, bremsten später und benötigen mehr Zeit führ die Anfahrt danach."
addButton(beispielText);
connect();

function addButton(text)
{

    let textAsList = text.split(" ");

    for (i = 0; i < textAsList.length; i++) {
        let word = textAsList[i];

        // Erstelle ein Button mit dem Wort und gib ihm eine id
        var newButton = document.createElement("Button");
        newButton.id = "word" + i;

        var newContent = document.createTextNode(word);
        newButton.appendChild(newContent); // fügt den Text zum Button hinzu

        // füge das neu erstellte Element und seinen Inhalt ins DOM ein
        var currentDiv = document.getElementById("buttonHolder");
        document.body.appendChild(newButton, currentDiv);
    }
}

function plus(){
    console.log(10);
}
