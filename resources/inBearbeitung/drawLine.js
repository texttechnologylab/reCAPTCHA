function createLine() {
    var currentDiv = document.getElementById("playArea");
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    svg.setAttribute("width", "800");
    svg.setAttribute("height", "400");
    svg.classList.add("overlay-svg");

    line.setAttribute("id", "line");
    line.style.stroke = "#000000";
    line.style.strokeWidth = "3";



    svg.appendChild(line);
    currentDiv.appendChild(svg);
}

function drawlinePos(el1, el2) {
    let line = $('#line');


    // Das erste Element soll immer das Element sein, dass am weitesten links ist.
    if (el1.position().left < el2.position().left){
        var element1 = el1;
        var element2 = el2;
    }
    else{
        var element1 = el2;
        var element2 = el1;
    }

    var pos1 = getPosition(element1)
    var pos2 = getPosition(element2)


    //------------------HIER: ALg. der entscheidet, wann welche Position genommen hat

    line
        .attr('x1', pos1.posRight[0])
        .attr('y1', pos1.posRight[1])
        .attr('x2', pos2.posLeft[0])
        .attr('y2', pos2.posLeft[1]);

}

/**
 * Berechnet von einem gegebenen Element die Positionen links, rechts, oben sowie unten.
 * @param element
 * @returns {{posRight: *[], posTop: *[], posLeft: *[], posDown: *[]}}; [x-koordinate, y-koordinate]
 */
function getPosition(element){
    let style = getComputedStyle(element[0]);

    let marginLeft = parseInt(style.marginLeft);
    let marginTop = parseInt(style.marginTop);
    let position = element.position();

    let posTop = [position.left + marginLeft + element.height(), position.top + marginTop];
    let posDown = [position.left + marginLeft + element.height(), position.top + marginTop + element.height()];

    let posLeft = [position.left + marginLeft, position.top + marginTop + element.height()/2];
    let posRight = [position.left + marginLeft + element.width() , position.top + marginTop + element.height()/2];

    return {posDown: posDown, posLeft: posLeft, posRight: posRight, posTop: posTop};
}



function deleteLine() {
    line = $('#line');

    line
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 0)
        .attr('y2', 0);
}
