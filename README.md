# reCAPTCHA
Dynamisches reCaptcha für den TextAnnotator des TTLabs

## Allgemeine Info

Das reCaptcha schützt Webseiten vor automatisierten Zugriffen, indem Aufgaben vorgegeben werden.
Diese sind für einen menschlichen Nutzer mit Deutschkenntnissen lösbar. Ein Bot sollte hingegen keine Chance haben.
Gleichzeitig trägt das Lösen der Aufgaben zur Verbesserung des TextAnnotators bei.

Zu Beginn wird eine zufällige Vertrauensaufgabe aus dem Aufgabensatz gestellt. Erst nach erfolgreichem Lösen der
Aufgaben werden dem Besucher die Annotationsaufgaben freigeschaltet. Davon werden zwei Zufällige 
vorgegeben. 
Nach erfolgreicher Absolvierung erhält der Nutzer eine Bestätigung und gelangt auf die Wunschwebseite.

## Anleitung

Achtung:  <br /> 
Funktioniert nur bei HTML5 fähigen Browsern, da cross-window-communication angewendet wird.

Sie können beispielsweise ein Button mit der id="open" auf Ihrer Webseite erstellen,  <br />
wobei sich nach dem Klicken das reCaptcha öffnet.
```javascript

    const recaptchaURL = "https://vesternesse.hucompute.org/recaptcha/reCAPTCHA";

    // Hier eine Möglichkeit wie das Recaptcha geöffnet werden kann.
    const buttonID = "open"
    document.getElementById(buttonID).addEventListener("click", function(){
       window.open(recaptchaURL); // Das reCaptcha muss von ihrer Seite aus geöffnet werden
    }, false);

```

Binden sie in ihrer Seite folgendes Script ein.  <br />
Sobald das reCaptcha gelöst ist, erhält ihre Website eine Nachricht.

```javascript

    const recaptchaURL = "https://vesternesse.hucompute.org/recaptcha/reCAPTCHA";

    // Reagiert auf erfolgreiches Captcha
    window.addEventListener("message", function(e) {
        if (e.data == "solved"){
            console.log("Recaptcha erfolgreich gelöst");
            // Hier kommt Ihr Code hin
        }

    }, false);

```


### Erklärung der Dateien

websocketAnno.js <br />
In der Datei ist eine einzige Funktion definiert. Sie stellt die Verbindung zum Websocket des Textannotators her. 
In der Funktion werden durch die Verbindung die nötigen Daten aus dem TextAnnotator gespeichert, 
wie z.B. die Annotationen des Textes oder die Lemmas der einzelnen Token.
In der Funktion sind weitere Funktionen definiert. Diese haben die Aufgabe den Text, entsprechend der jeweiligen Aufgabe,
auf der Website darzustellen.


processIndex.js <br />
In der Datei wird der Ablauf des recapatcha definiert. Es wird eine Vertrauens Aufgabe gestellt, gefolgt von
zwei Croudsourcing Aufgaben. Die Funktion "processRecaptcha()" die sich in der Datei befindet
kann als main Funktion angesehen werden. Sie ist der Einstieg in das Programm.
Mit der variable "TIMESOFANNOTATIONLIMIT" kann man bestimmen wieviele 
Crowdsourcing Aufgaben folgen sollen.
In der Liste "tasksVerification" sind alle Aufgaben der Klasse Vertrauenstest definiert.
In der Liste "tasksCrowdsourcing" sind alle Aufgaben der Klasse Crowdsourcing definiert.


processFinished.js <br />
In der Datei ist eine Funktion accessGranted definiert, Diese wird aufgerufen sobald das reCaptcha
erfolgreich gelöst worden ist.
Sie sorgt dafür, dass eine Nachricht zur Seite geschickt wird, die das reCaptcha aufgerufen hat und vermittelt ihr, dass
das reCaptcha vom User erfolgreich gelöst worden ist.


Unterverzeichnis: helper <br />
Darin befinden sich verschiedene Dateien in denen Hilfsfunktionen definiert worden sind.
* drawLine.js <br />
  In der Datei werden die Funktionen definiert zur grafischen Darstellung einer Linie zwischen Token.
  Die Linie wird bei Aufgaben zu Multitoken und zur Auswahl von Relationen genutzt.

* createTaskForCrowdsourcing.js <br />
In der Datei befinden sich Funktionen, die den einzelenen Crowdsourcing Aufgaben des reCaptcha entsprechen. 
Die einzelnen Funktionen verändern den Text und die Aufgabenbeschreibung der dem User angezeigt wird.

* createTaskForVerification.js <br />
  In der Datei befinden sich Funktionen, die den einzelenen Kontroll Aufgaben des reCaptcha entsprechen.
  Die einzelnen Funktionen verändern den Text und die Aufgabenbeschreibung der dem User angezeigt wird.
  
* createButtons.js <br />
  Darin sind Funktionen definiert, um hauptsächlich Buttons in HTML zu erzeugen, die jeweils beim klicken
  des Buttons eine Funktion aufrufen.

* helperFunctions.js <br />
  Darin sind jeweils Hilfsfunktionen definiert. 
  z.B. sind Funktionen zur Berechnung von Zufallszahlen implementiert.

* getToolStrings.js <br />
  In der Datei befinden sich die Funktionen, um die types der einzelnen Entities des Quickannotators
  zu bekommen.


Unterverzeichnis: annotationFunctions
Entweder um Eingabe des Benutzers zu überprüfen oder an den Textannotator zu schicken.

* sendAnnotation.js: Für Crowdsourcing <br />
  In der Datei sind alle Funktionen definiert, um eine Annotation an den Websocket des Textannotators
  zu schicken und so Texte zu annotieren.
  
* checkAnnotation.js: Für Vertrauenstest <br />
  In der Datei sind alle Funktionen definiert, um eine Annotation vom Benutzer mit Hilfe des Textannotators 
  zu überprüfen.
  
  



 