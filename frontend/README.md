# 🖥️Frontend DuoGradus

|                  |                        |
| ---------------- | ---------------------- |
| **Sprache**          | **Typescript, HTML, SCSS** |
| **Framework**        | **Angular**                |
| **Version**          | **17.0.8.**                |
| **Packetverwaltung** | **npm**                    |
### Voraussetzungen
---
- NodeJS mit dem Node Package Manager (npm) ist installiert
- Angular CLI (`npm install -g @angular/cli`)

### 🛠️ Projekt Setup
---
Um die notwendigen Abhängigkeiten zu installieren, führe `npm install` in der Kommandozeile aus

### 🚀 Projekt starten
---
Um das Frontend Lokal anzeigen zu lassen, führe `ng serve` in der Kommandozeile aus. Navigiere in deinem Browser zu  `http://localhost:4200/` um die Webseite anzuzeigen. Werden dabei Änderungen vorgenommen aktualisiert sich die Seite  automatisch.

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

### Frontend Struktur
---
Die Struktur des Frontends entspricht der typischen Angular Anwendung (siehe [Doku](https://v17.angular.io/guide/file-structure))

Übersicht Verzeichnis Frontend: 
```
frontend
└── src
    ├── app                            
    |   |              
    │   ├── components                  - Komponenten der Seite
    │   │   ├── atoms
    │   │   ├── organisms
	|   |   └── pages
    │   │ 
    │   ├── pipes                           
    │   │   ├── timer
    │   │   ├── user-filter
    │   │   └── ...
	|   |                                
    │   ├── services                    
    │   │   ├── event.service.ts
    │   │   ├── loader.service.ts
    │   │   └── ...
    |   |-- styles                     - Globale Design Regeln
	|   |  
    │   ├── app.component.ts
    │   ├── app.module.ts
    │   ├── app-routing.ts             - Routing Konfiguration
    │   ├── authenticated.guard.ts     - AuthGuard
    │   └── route-transition-animation.ts   - Animationsregeln
    └── assets                         - Statische Assets 
    
```

### LoaderService
---
Um den Loader ein- und ausblenden zu können, wurde ein LoaderService implementiert. Dieser stellt für beide Aufgaben jeweils eine Methode bereit, die beim abrufen der Daten aufgerufen werden können. 

#### Anwendungsbeispiel: 
---
`loader.service.ts

```ts
 public isLoading = new BehaviorSubject<boolean>(false);
  constructor() {}
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }
```

`mainpage.component.ts`

```ts
constructor(private LoaderService: LoaderService) { }
  ngOnInit(): void {
    this.LoaderService.show();
    //Simulate a html request
    setTimeout(() => {
      this.LoaderService.hide();
    }, 500);

  }
```

`app.component.ts`

```ts
...
<app-loader *ngIf="isLoading" ></app-loader>
...
```

### ❓Support
---
Bei Fragen oder Problemen, erstelle bitte ein Issue im [GitHub Repository](https://github.com/SE-TINF22B2/G5-DuoGradus) oder kontaktiere das Frontend-Entwicklerteam: @Jstn2004, @www.Luis








 








---
