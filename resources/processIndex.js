const view = "https://authority.hucompute.org/user/316809";
const tool = "proppanel";
const casId = "28490";
const session = "BF21F80432A6F47B5F7F72EEFD9CE121.jvm1";
const SOCKETANNO = webSocketAnno(casId, view, tool, session);


function processRecaptcha(){
    doRandomTaskFromClassOne();
}

/**
 * Ruft eine zufällige Aufgabe der Klasse 1 auf
 */
function doRandomTaskFromClassOne(){
    // Tasks der Klase 1
    const tasksClassOne = [taskCheckNouns, taskCheckVerbs, taskCheckAdjectives, taskCheckFood];
    tasksClassOne[getRandomIntMax(tasksClassOne.length)]();
}

/**
 * Ruft eine zufällige Aufgabe der Klasse 2 auf
*/
function doRandomTaskFromClassTwo() {
    // Tasks der KLasse 2
    const tasksClassTwo = [taskAnnotateAdjectives, taskAnnotateFood, taskAnnotateNouns,
        taskAnnotateVerbs, taskSelectRelation, taskMultiToken];
    tasksClassTwo[getRandomIntMax(tasksClassTwo.length)]();
}