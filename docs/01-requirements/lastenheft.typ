#align(center, text(24pt)[
    *DuoGradus*
])

#align(center, text(17pt)[
    Lastenheft
])

= Präambel
== Projektbeschreibung
DuoGradus ist eine Anwendung, die Nutzer motivieren soll täglich Schritte zu sammeln. Dafür ist die App spielerisch aufgebaut und versucht die Nutzer durch Gamification zu mehr Schritten und weiteren Aktivitäten zu motivieren.
Das Konzept orientiert sich dabei an bereits etablierten Ideen, die sich bereits für das Erlernen von Sprachen etabliert haben und versucht diese auch auf sportliche Aktivitäten zu übertragen.
Durch die Anbindung von externen APIs wird es Nutzern möglich sein ihre bestehenden Gadgets, wie z.B. Fitnesstracker mit dem System zu verbinden.

== Beteiligte Personen
#table(
    columns: (1fr, 1fr),
    inset: 10pt,
    align: horizon,
    [*Person*], [*Rolle*],
    [Dr. Roland Schätzle], [formaler Auftraggeber],
    [Benedict Weis], [Projektmanagement, DevOps],
    [Henry Brink], [Entwicklung Backend],
    [Ingo Neuse], [Entwicklung Backend],
    [Luis Bernhardt], [Entwicklung Frontend],
    [Justin Hubert], [Entwicklung Frontend]
)

= Projektumfang
Das Projekt umfasst die Entwicklung einer Anwendung, bei der eine Minimal-Infrastruktur durch den Auftraggeber vorgegeben ist. Die Gestaltung der Software ist frei, deswegen werden in diesem Lastenheft die vom Team definierten Anforderungen an die Anwendung festgehalten.

== Anforderungen des Auftraggebers
Durch den Auftraggeber wird die folgende Struktur für die Anwendung vorgegeben:
#figure(
    image("images/01_minimal_project_structure.png", width: 50%)
)
Der Auftraggeber stellt zudem weiter Anforderungen an das Projekt:

- Nutzung eines zentralen GitHub-Repositories für das Code-Hosting
- Dokumentation des Projektes innerhalb des Repositories oder über eine weiter Wiki-Plattform
- Statusreports über GitHub-Discussions
- Zeiterfassung
