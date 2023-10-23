#set heading(numbering: "1.")
#set page(
    numbering: "1"
)

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

#pagebreak()

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

#pagebreak()
== Anforderungen an das Produkt
=== Integration mit Drittanbietern zur Datenerhebung [PM-1]
#table(
    columns: (1fr, 2fr),
    align: horizon,
    inset: 7pt,
    stroke: 1pt,
    [*Priorität*], [10],
    [*Komponenten*], [Backend],
)
Das Produkt soll Schritt- und eventuell Aktivitätsdaten von externen Anbietern erfassen. Diese Anforderung ergibt sich aus der Grundfunktionalität der Anwendung, sowie der Anforderung des Auftraggebers.
Folgende Anbieter werden für die Implementierung herangezogen:

+ Fitbit
+ Google Health
+ Samsung Fit

Mindestens erforderlich ist die Integration eines einzigen Anbieters, aufgrund der vergleichsweise simplen Schnittstelle wird Fitbit für eine erste Implementierung empfohlen.

=== Aufgaben und Ziele [PM-2]
#table(
    columns: (1fr, 2fr),
    align: horizon,
    inset: 7pt,
    stroke: 1pt,
    [*Priorität*], [9],
    [*Komponenten*], [Backend, Frontend],
)
Kernfunktionalität der Anwendung sind "Ziele", die der Benutzer durch seine Aktivitäten erreichen kann. Die Art der Ziele ist dabei abhängig von den implementierten Integrationen. Mindestens verfügbar sein sollen Schrittziele, bei denen folgende Parameter erforderlich sind:

+ Anzahl von Schritten
+ Startzeit
+ Endzeit
+ Punkte
+ Dauer (beispielsweise: "100 Schritte innerhalb von 4 Minuten erreichen.")

Zudem sollen Ziele sinnvolle Namen erhalten.

Weitere optionale Felder sind:
+ Wetter

Falls möglich, sollen neben Schrittzielen zusätzlich Aktivitätsziele definiert werden.

=== Tageszielpunkte [PM-3]
#table(
    columns: (1fr, 2fr),
    align: horizon,
    inset: 7pt,
    stroke: 1pt,
    [*Priorität*], [8],
    [*Komponenten*], [Backend, Frontend],
)
Damit der Nutzer die App regelmäßig verwendet soll der Nutzer für jeden Tag an dem er die App verwendet einen Punkt erhalten. Nutzt er die App an einem Tag nicht (bzw. erfüllt seine Mindest-Anzahl an Schritten nicht) werden die Punkte auf 0 zurückgesetzt.

Gegen Abend soll der Nutzer eine Benachrichtigung erhalten, falls er bisher noch keinen Punkt erreicht hat. Diese soll den Nutzer passiv-aggressiv an seine Schritte erinnern.

Optional: Nachrichten mithilfe generativer AI erstellen.