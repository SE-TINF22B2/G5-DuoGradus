# Deployment

Ziel ist es, die Anwendung während der Entwicklung auf einem Test-Server laufen zu lassen. Um die Aufgabe zu vereinfachen, soll die Anwendung mittels "Docker" gestartet werden können.
Um dies zu erreichen gibt es im Backend ein "Dockerfile", welches spezifische Build Anweisungen vorgibt. Dadurch wird ein Dockerimage für das Backend erstellt.
Mithilfe der "docker-compose.yml" im Wurzelverzeichnis der Anwendung kann das ganze Projekt gestartet werden.

**Befehl zum starten der Anwendung**:
```bash
docker compose up -d
```

**Befehl zum "Neubauen" der Anwendung (bei Änderungen des Codes)**:
```bash
docker compose build
```

**Anwendung stoppen**:
```bash
docker compose down
```

**Nutzdaten löschen**:
```bash
docker compose rm
```

> [!NOTE]
> Es existiert zudem der Befehl "docker-compose", welcher ähnlich bedient werden kann. Jedoch ist dieser Befehl deprecated und sollte nicht mehr genutzt werden!