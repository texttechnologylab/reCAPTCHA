# reCAPTCHA
Dynamic reCAPTCHA für TextAnnotator

## Allgemeine Info

Das Projekt verfolgt zwei wesentliche Ziele.
Zum einem soll das recaptcha (Websiten) einen Schutz vor automatisierten Zugriff bieten, indem eine Aufgabe
abgefragt wird, die zu Zeit nur einem menschlichen Benutzer lösbar ist und zum anderen soll durch Crowdsourcing
die Annotation von Texten verbessert werden.

Es wird eine vertrauens Aufgabe gestellt, zur Verifizierung, gefolgt von zwei Crouwsourcing Aufgaben.

## Benuztung

Achtung: Funktioniert nur bei HTML5 fähige Browser, da cross-window Communication genutzt wird.

Sie können z.B ein Button erstellen der das reCaptcha öffnet.

```javascript

    const recaptchaURL = "https://vesternesse.hucompute.org/recaptcha/reCAPTCHA";

    // Hier eine Möglichkeit wie das Recaptcha geöffnet werden kann.
    const buttonID = "open"
    document.getElementById(buttonID).addEventListener("click", function(){
       window.open(recaptchaURL); // Das reCaptcha muss irgenwo von ihrer Seite aus geöffnet werden
    }, false);

```

Binden sie in ihrer Seite folgendes Script ein. 
Sobald das reRaptcha gelöst ist erhält ihre Website eine Nachricht.

```javascript

    const recaptchaURL = "https://vesternesse.hucompute.org/recaptcha/reCAPTCHA";

    // Wird aufgerufen, sobald das Recaptcha gelöst ist.
    window.addEventListener("message", function(e) {
        if (e.data == "IWAS"){
            console.log("Recaptcha erfolgreich gelöst");
            // Hier kommt ihr Code für den Fall, dass das reCaptcha erfolgreich gelöst worden ist.
        }

    }, false);

```


### Erklärung der Dateien

websocketAnno.js <br />
In der Datei ist eine einzige Funktion definiert. Sie stellt die Verbindung zum Websocket des Textannotators her. 
In der Funktion werden durch die Verbindung die nötigen Daten aus dem TextAnnotator gespeichert, 
wie z.B die Annotationen des Textes oder die Lemmas der einzelnen Token.
In der Funktion sind weitere Funktionen definiert. Diese haben die Aufgabe den Text, entsprechend der jeweiligen Aufgabe,
auf der Website darzustellen.


processIndex.js <br />
In der Datei wird der Ablauf des recapatcha definiert. Es wird eine Vertrauens Aufgabe gestellt, gefolgt von
zwei Croudsourcing Aufgaben. Mit der variable "TIMESOFANNOTATIONLIMIT" kann man bestimmen wieviele 
Crowdsourcing Aufgaben folgen sollen.
In der Liste "tasksVerification" sind alle Aufgaben der Klasse Vertrauenstest definiert.
In der Liste "tasksCrowdsourcing" sind alle Aufgaben der Klasse Crowdsourcing definiert.

processFinished.js <br />
In der Datei ist eine Funktion accessGranted definiert, Diese wird aufgerufen sobald das reCaptcha
erfolgreich gelöst worden ist.
Sie sorgt dafür, dass eine Nachricht zu

Unterverzeichnis: helper <br />
Darin befinden sich verschiedene Dateien in denen Hilfsfunktionen definiert worden sind.
* drawLine.js <br />
  In der Datei werden die Funktionen definiert zur grafischen Darstellung einer Linie zwischen Token.
  Die Linie wird bei Aufgaben zu Multitoken und zur Auswahl von Relationen genutzt.

* createImages.js <br />
In der Datei befindet sich die Funktion die einen 

* createTasksIndex.js <br />
In der Datei befinden sich Funktionen, die die einzelenen Aufgaben des reCaptcha entsprechen. 
Die einzelnen Funktionen verändern den Text und die Aufgabenbeschreibung der auf der Seite angezeigt
wird.
  
* createButtons.js <br />
....

* helperFunctions.js <br />
  Darin sind jeweils Hilfsfunktionen definiert. 
  Z.B. sind da Funktionen zur Berechnung von Zufallszahlen definiert worden.

* getToolStrings.js <br />
  In der Datei befinden sich die Funktionen, um die Toolstrings der einzelnen Entities des Quickannotators
  zu bekommen.

Unterverzeichnis: annotationFunctions
* sendAnnotation.js: Für Crowdsourcing <br />
  In der Datei sind alle Funktionen definiert, um eine Annotation an den Websocket des Textannotators
  zu schicken und so Texte zu annotieren.
  
* checkAnnotation.js: Für Vertrauenstest <br />
  In der Datei sind alle Funktionen definiert, um eine Annotation vom Benutzer mit Hilfe des Textannotators 
  zu überprüfen.




 