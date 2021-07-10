function getLine() {
    var currentDiv = document.getElementById("playArea");
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("id", "line1");
    line.setAttribute("stroke", "red");
    svg.appendChild(line);
    currentDiv.appendChild(svg);
}

function drawline() {
    let line1 = $('#line1');
    let button1 = $('#button1');
    let button2 = $('#button2');

    let pos1 = button1.position();
    let pos2 = button2.position();

    line1
        .attr('x1', pos1.left)
        .attr('y1', pos1.top)
        .attr('x2', pos2.left)
        .attr('y2', pos2.top);
}

function deleteLine() {
    line1 = $('#line1');
    button1 = $('#button1');
    button2 = $('#button2');

    let pos1 = button1.position();
    let pos2 = button2.position();

    line1
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 0)
        .attr('y2', 0);
}

function drawBack() {
    line1 = $('#line1');
    button1 = $('#button1');
    button2 = $('#button2');

    let pos1 = button1.position();
    let pos2 = button2.position();

    line1
        .attr('x1', pos2.left)
        .attr('y1', pos2.top)
        .attr('x2', pos1.left)
        .attr('y2', pos1.top);
}