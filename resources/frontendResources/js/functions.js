var text = "Hallo Test Test";

function addButton(text)
{
    var textSplit = text.split(" ");

    for (let i = 0; i < textSplit.length; ++i) {
        var token = textSplit[i];
        var tokenButton = document.createElement('button');
        tokenButton.id = i;
        var buttonText = document.createTextNode(token);
        tokenButton.appendChild(buttonText);
        var div = document.getElementById("start");
        div.appendChild(tokenButton);
    }
}
function buttonCreator() {
    addButton(text);
}
