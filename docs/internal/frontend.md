Auf dieser Seite wird die Struktur des Frontends, die verwendeten Technologien sowie die festgelegten Richtlinien erläutert.

# Aufbau
Das Frontend folgt dem Atomic Design-Prinzip, das die Website-Komponenten in verschiedene Ebenen unterteilt:

**Atome:**
- Diese bilden die kleinsten Bausteine der Webseite.
- Beispiele sind Labels, Formulare und Buttons.

**Moleküle:**
- Sie bestehen aus einfachen Verbindungen von Atomen.
- Ein Beispiel wäre ein Eingabefeld mit Label und Button.

**Organismen:**
- Hier werden Gruppen von verbundenen Molekülen zusammengefasst.
- Beispiele sind der Footer, Header und Filter.

**Templates:**
- Organismen werden zu einem Layout zusammengestellt.
- Dabei wird die Struktur und das Zusammenspiel der Inhalte definiert.
- Platzhalter werden verwendet, um Inhalte einzufügen.

**Seiten:**
- Dies ist die höchste Detailstufe und spiegelt das Endprodukt wider.
- Die Seite wird mit realen Inhalten gefüllt.

Zusätzlich sollten separate Ordner für Services, Pipes usw. sowie für die E2E-Tests angelegt werden.

# Technolgien
Für die Entwicklung des Frontends wurde die Auswahl zwischen zwei Frameworks in Betracht gezogen: React und Angular. Obwohl React während einer Vorlesung behandelt wurde, konnten keine weiteren Erfahrungen damit gesammelt werden . Im Gegensatz dazu wurde Angular während der praktischen Phase intensiver verwendet, was zu einem besseren Verständnis dieses Frameworks führte. Daher wurde Angular als das Framework für das Projekt ausgewählt.

# Richtlinine
## Branches
Das Frontend wird eine Hauptbranch namens `dev/frontend` haben. Für die Entwicklung jedes Features wird eine eigene Feature-Branch erstellt, die nur solange existiert, wie an dem jeweiligen Feature gearbeitet wird. Dabei folgen wir der Konvention, die Feature-Branches nach dem Schema `feature/<Feature-Name>` zu benennen.

## Commit
Für jeden Commit sollte ein prägnantes Präfix verwendet werden, das den Typ des Commits angibt:
- `feat`: Ein neues Feature wurde hinzugefügt.
- `fix`: Ein Fehler wurde behoben.
- `docs`: Änderungen in der Dokumentation.
- `style`: Änderungen im Code-Stil, z. B. Leerzeichen, Formatierung.
- `refactor`: Code-Refactoring, keine funktionalen Änderungen.
- `test`: Hinzufügen oder Ändern von Tests.
- `chore`: Sonstige Änderungen, die nicht direkt mit dem Code zusammenhängen.

