# 🖥️ Frontend
Dieses Angular Projekt wurde mit der [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8 erzeugt. 

### 🚀 Projekt starten
---
Um das Frontend Lokal anzeigen zu lassen, führe `ng serve` in der Kommandozeile aus. Navigiere in deinem Browser zu  `http://localhost:4200/` um die Webseite anzuzeigen. Werden dabei Änderungen vorgenommen aktualisiert sich die Seite  automatisch.

### 🛠️ Projekt Setup
---
Um die notwendigen Abhängigkeiten zu installieren, führe `npm install` in der Kommandozeile aus

### 🛡️Unit Tests starten
---
Zum Ausführen der Unit Tests, führe `ng test` in der Kommandozeile aus. Dabei werden die Test im Terminal angezeigt. Um sich die Tests im Browser übersichtlicher anzeigen zu lassen navigiere zu `http://localhost:9876/`. 

### 🖊️ Frontend bearbeiten
---
#### Schritte zum Bearbeiten des Frontends:

1. Erstelle eine neue Feature-Branche:
    ```
    git checkout -b feature/NeuesFeature
    ```
    
2. Führe die gewünschten Änderungen durch (z.B. Erzeugen einer neuen Komponente):
    ```
    ng generate component name
	```
	
3. Committe die Änderungen:
    ```
    git add .
    git commit -m "Füge neue Komponente hinzu"
	```
	
4. Push die Feature-Branche:
    ```
    git push origin feature/NeuesFeature
    ```
    
5. Erstelle einen Pull Request, um die Änderungen in den Main-Branch zu mergen. 
6. Nach der Überprüfung und dem Merge des Pull Requests, lösche die Feature-Branche
    ```
    git branch -d feature/NeuesFeature
    git push origin --delete feature/NeuesFeature
    ```

### ❓ Support
---
Bei Fragen oder Problemen, erstelle bitte ein Issue im [GitHub Repository](https://github.com/SE-TINF22B2/G5-DuoGradus) oder kontaktiere das Frontend-Entwicklerteam: @Jstn2004, @wwwLuis
