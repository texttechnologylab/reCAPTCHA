const view = "https://authority.hucompute.org/user/316809";
const tool = "proppanel";
const casId = "28490"
const SOCKETANNO = webSocketAnno(casId, view, tool);


function processRecaptcha(){
    getRandomTaskFromClassOne();
}

/**
 * Ruft eine zufällige Aufgabe der Klasse 1 auf
 */
function getRandomTaskFromClassOne(){
    const tasksClassOne = [taskCheckNouns, taskCheckVerbs, taskCheckAdjectives, taskCheckFood];
    tasksClassOne[getRandomIntMax(tasksClassOne.length)]();
}

/**
 * Ruft eine zufällige Aufgabe der Klasse 2 auf
 */
function getRandomTaskFromClassTwo() {
    const tasksClassTwo = [taskAnnotateAdjectives, taskAnnotateFood, taskAnnotateNouns,
        taskAnnotateVerbs, taskSelectRelation];
    tasksClassTwo[getRandomIntMax(tasksClassTwo.length)]();

}