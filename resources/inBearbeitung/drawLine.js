function createLine() {
    var currentDiv = document.getElementById("playArea");
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    svg.setAttribute("width", "1200");
    svg.setAttribute("height", "1200");
    svg.classList.add("overlay-svg");

    line.setAttribute("id", "line");
    line.style.stroke = "#000000";
    line.style.strokeWidth = "3";



    svg.appendChild(line);
    currentDiv.appendChild(svg);
}

function drawlinePos(el1, el2) {
    let line = $('#line');

    let simplePos1 = el1.position();
    let simplePos2 = el2.position();

    let pos1 = getPosition(el1)
    let pos2 = getPosition(el2)


    // Falls sie auf verschiedenen y- Ebenen sind
    if(simplePos1.top != simplePos2.top){
        if (simplePos1.top < simplePos2.top){
            line
                .attr('x1', pos1.posDown[0])
                .attr('y1', pos1.posDown[1])
                .attr('x2', pos2.posTop[0])
                .attr('y2', pos2.posTop[1]);
        }
        else{
            line
                .attr('x1', pos1.posTop[0])
                .attr('y1', pos1.posTop[1])
                .attr('x2', pos2.posDown[0])
                .attr('y2', pos2.posDown[1]);

        }


    }
    // Falls sie auf gleiche y-Ebene sind
    else if (simplePos1.left < simplePos2.left){
        line
            .attr('x1', pos1.posRight[0])
            .attr('y1', pos1.posRight[1])
            .attr('x2', pos2.posLeft[0])
            .attr('y2', pos2.posLeft[1]);
    }
    else{
        line
            .attr('x1', pos1.posLeft[0])
            .attr('y1', pos1.posLeft[1])
            .attr('x2', pos2.posRight[0])
            .attr('y2', pos2.posRight[1]);
    }



}

/**
 * Berechnet von einem gegebenen Element die Positionen der vier mittleren Punkte die
 * links, rechts, oben und unten sind.
 * @param element: ajax-Object
 * @returns {{posRight: *[], posTop: *[], posLeft: *[], posDown: *[]}}; [x-koordinate, y-koordinate]
 */
function getPosition(element){
    let style = getComputedStyle(element[0]); // element[0] ist das dom-Object

    let marginLeft = parseInt(style.marginLeft);
    let marginTop = parseInt(style.marginTop);
    let position = element.position();

    let posTop = [position.left + marginLeft + element[0].offsetWidth*0.5, position.top + marginTop];
    let posDown = [position.left + marginLeft + element[0].offsetWidth*0.5, position.top + marginTop + element[0].offsetHeight];

    let posLeft = [position.left + marginLeft, position.top + marginTop + element[0].offsetHeight*0.5];
    let posRight = [position.left + marginLeft + element[0].offsetWidth , position.top + marginTop + element[0].offsetHeight*0.5];

    return {posDown: posDown, posLeft: posLeft, posRight: posRight, posTop: posTop};
}



function deleteLine() {
    let line = $('#line');

    line
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 0)
        .attr('y2', 0);
}
