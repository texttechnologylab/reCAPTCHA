const view = "https://authority.hucompute.org/user/316809";
const tool = "quickpanel";
const casId = "28490";
const session = "BF21F80432A6F47B5F7F72EEFD9CE121.jvm1";
const SOCKETANNO = webSocketAnno(casId, view, tool, session);

// Hilfsvariable, um zu bestimmmen wie oft eine Crowdsourcing Aufgabe erledigt werden soll.
let TIMESOFANNOTATION = 1;
let TIMESOFANNOTATIONLIMIT = 2; // Anzahl an Crowdsourcing Aufgaben die bearbeitet werden


function processRecaptcha(){
    doRandomTaskForVerification();
}

/**
 * Ruft eine zufällige Aufgabe der Klasse 1 auf
 */
function doRandomTaskForVerification(){
    // Tasks der Klase Vertrauenstest
    const tasksVerification = [
        taskCheckNouns, taskCheckVerbs, taskCheckAdjectives, taskCheckFood
    ];

    tasksVerification[getRandomIntMax(tasksVerification.length)]();
}

/**
 * Ruft eine zufällige Aufgabe der Klasse 2 auf
*/
function doRandomTaskForCrowdsourcing() {
    // Tasks der KLasse Crowdsourcing
    const tasksCrowdsourcing = [
        taskSelectAdjectiveRelation, taskSelectVerbRelation, taskSelectRelation, taskMultiToken,
        taskQuickAnno
    ];

    tasksCrowdsourcing[getRandomIntMax(tasksCrowdsourcing.length)]();
}