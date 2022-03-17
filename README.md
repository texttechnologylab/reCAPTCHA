# reCAPTCHA
Dynamisches reCaptcha für den TextAnnotator des TTLabs

# Allgemeine Info

Inspiriert von Luis von Ahn seine Idee haben wir ein reCaptcha entwickelt, dass auf beliebigen Webseiten eingebaut werden kann und eine
Crowdsourcing Lösung für die Annotation von Texten bietet.

Es ist so aufgebaut, dass zuerst Kontrollaufgaben gestellt werden deren Lösungen bereits bekannt sind und nach erfolgreichem lösen werden Aufgaben gestellt, die
zum Crowdsourcing beitragen sollen. \
So können zum einem Webseiten vor automatisierten Zugriff geschützt werden und gleichzeitig Daten zur Verbessserung des Textannotators gesammelt werden.

Für mehr Informationen siehe Dokumentation.pdf

# Einige Aufgabenstellungen 

##### Beispiel einer Aufgabe bei der Nomen ausgewählt werden sollen

<div>
<img width="554" alt="image" src="https://user-images.githubusercontent.com/49447893/158685427-21ef36a5-7c87-46ac-9719-f67031f01dc7.png">
</div>

##### Beispiel einer Aufgabe bei der Relationen bestimmt werden soll mit dazugehöriger Lösung

<div>
    <img width="549" alt="image" src="https://user-images.githubusercontent.com/49447893/158684897-f6b5644b-26e7-4d80-85f2-fb92f325eec9.png">   
    <img width="550" alt="image" src="https://user-images.githubusercontent.com/49447893/158684973-42d33c2f-b175-4f19-b817-68be8f42ffc8.png">
</div>

##### Anderes Beispiel mit dazugehöriger Lösung

<div>
    <img width="552" alt="image" src="https://user-images.githubusercontent.com/49447893/158685168-6027c711-f79f-47be-a116-5eaa01863b9f.png">
    <img width="552" alt="image" src="https://user-images.githubusercontent.com/49447893/158685222-649e805c-6365-4257-98eb-1b7a5872fba7.png">
</div>




# Anleitung

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

# Autoren

- Robin Bayval
- Vedat Yildiz



# Cite
Wenn Sie das Projekt verwenden, zitieren Sie es bitte auf folgende Weise:

G. Abrami, M. Stoeckel, and A. Mehler, “TextAnnotator: A UIMA Based Tool for the Simultaneous and Collaborative Annotation of Texts,” in Proceedings of The 12th Language Resources and Evaluation Conference, Marseille, France, 2020, pp. 891-900. 
[PDF](http://www.lrec-conf.org/proceedings/lrec2020/pdf/2020.lrec-1.112.pdf)

R. Bayval, V. Yildiz, G. Abrami and A. Mehler, "Dynamic reCaptcha for TextAnnotator", Practical course in winter semester 2021, Frankfurt, Germany, 2021


# BibTeX
```

@InProceedings{Abrami:Stoeckel:Mehler:2020,
  author    = {Abrami, Giuseppe  and  Stoeckel, Manuel  and  Mehler, Alexander},
  title     = {TextAnnotator: A UIMA Based Tool for the Simultaneous and Collaborative Annotation of Texts},
  booktitle = {Proceedings of The 12th Language Resources and Evaluation Conference},
  month     = {May},
  year      = {2020},
  address   = {Marseille, France},
  publisher = {European Language Resources Association},
  pages     = {891--900},
  ISBN = "979-10-95546-34-4"
}



@Misc{Bayval:Yildiz:Abrami:Mehler:2021,
  author    = {Bayval, Robin, and Yildiz, Vedat and Abrami, Giuseppe  and  Mehler, Alexander},
  title     = {Dynamic reCaptcha for TextAnnotator},
  year      = 2021,
  note      = {Practical course in winter semester 2021}
}

```
