# Backend

Diese Seite enthält Informationen über den grundlegenden Aufbau des Backends, sowie einige "Guidelines", die die Entwicklung erleichtern sollen. Zudem ist die verwendete Technologie hier genauer beschrieben.

## Technologie

### Framework

Die Entwicklung des Backends erfolgt mithilfe des Frameworks "NestJS". Die Entscheidung auf dieses Framework ist durch einen Vergleich etablierter Backend-Frameworks für NodeJS gefallen. Da NodeJS bereits von den Entwicklern verwendet wurde, war die Wahl der Umgebung bereits entschieden. NestJS bot die größtmögliche Flexibilität - aus Sicht der Entwickler.

### ORM

Eine Anforderung an ein gutes Software-Design ist die Kapselung verschiedener Aufgaben in einzelne Komponenten. Dabei sollten Komponenten möglichst nur einem Zweck dienen, sowie jeweils in ihrem Zweck beschränkt sein. Dadurch sollen Komponenten möglichst austauschbar bleiben.

Um dieses Prinzip für die Datenbank umzusetzen, soll die Anwendung nicht direkt auf die Datenbank zugreifen, sondern stattdessen auf eine Zwischen-Komponente setzen. Die Eigen-Entwicklung einer solchen Komponente ist nicht sinnvoll, da es bereits viele Software-Bibliotheken gibt, die eine derartige Funktionalität bereitstellen. ORMs sind eine Methode auf Datenbanksysteme zuzugreifen.

Innerhalb des Projekts wird `TypeORM` verwendet, da dieses bereits eine gute Integration in NestJS bietet.

#### Konfiguration

TypeORM bietet zwei Ansätze für den Datenzugriff: Entweder über das "Data Mapper pattern", welches Repositories verwendet, oder das "Active Record" pattern, welches ohne Repositories auskommt.
Beide haben ähnliche Prinzipien, der einzige Unterschied ist das bei Repositories eine zusätzliche Klasse den Zugriff regelt. Da diese im Normalfall an eine Entität gebunden ist, bietet diese in diesem Fall keine bekannten Vorteile.
Zunächst wird der "Active Record" Weg gewählt.
