/**
 * Erstellet ein svg Objekt mit einer Linie und definiert die Eigenschaften des svg Objekts.
 * @param number ist die i-te Linie
 */
function createLine(number) {
    const currentDiv = document.getElementById("playArea");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    svg.setAttribute("width", "1200");
    svg.setAttribute("height", "1200");
    svg.classList.add("overlay-svg");

    line.setAttribute("id", "line" + number.toString());
    line.style.stroke = "#000000";
    line.style.strokeWidth = "3";

    svg.appendChild(line);
    currentDiv.appendChild(svg);
}

/**
 * Zeichnet eine Linie zwischen den Postitionen von den Elementen el1 und el2
 * @param number ist die i-te Linie
 * @param el1
 * @param el2
 */
function drawlinePos(number, el1, el2) {
    const line = $('#line' + number.toString());

    const simplePos1 = el1.position();
    const simplePos2 = el2.position();

    const pos1 = getPosition(el1)
    const pos2 = getPosition(el2)


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
    const style = getComputedStyle(element[0]); // element[0] ist das dom-Object

    const marginLeft = parseInt(style.marginLeft);
    const marginTop = parseInt(style.marginTop);
    const position = element.position();

    const posTop = [position.left + marginLeft + element[0].offsetWidth*0.5, position.top + marginTop];
    const posDown = [position.left + marginLeft + element[0].offsetWidth*0.5, position.top + marginTop + element[0].offsetHeight];

    const posLeft = [position.left + marginLeft, position.top + marginTop + element[0].offsetHeight*0.5];
    const posRight = [position.left + marginLeft + element[0].offsetWidth , position.top + marginTop + element[0].offsetHeight*0.5];

    return {posDown: posDown, posLeft: posLeft, posRight: posRight, posTop: posTop};
}


/**
 * Setzt alle Linien auf 0 und sie sind somit nicht mehr sichtbar.
 */
function deleteLine() {
    for(let i=0; i < selectedTokensId.length; i++) {
        const line = $('#line'+ i.toString());

        line
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', 0)
            .attr('y2', 0);
    }
}
