#set heading(numbering: "1.")
#set page(
    numbering: "1"
)

#align(center, text(24pt)[
    *DuoGradus*
])

#align(center, text(17pt)[
    Anforderungen
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

=== Aufgaben, Ziele und Abzeichen [PM-2]
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

Für bestimmte Aktivitäten soll ein Nutzer zudem Abzeichen / Erfolge sammeln können. Denkbar wäre hier beispielsweise ein Abzeichen "Nicht aus Zucker" für eine Aktivität im Regen.

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

Gegen Abend soll der Nutzer eine Benachrichtigung erhalten, falls er bisher noch keinen Punkt erreicht hat. Diese soll den Nutzer passiv-aggressiv an seine Schritte erinnern (siehe [PM-5])

Optional: Nachrichten mithilfe generativer AI erstellen.

Benachrichtiungen z.B. über E-Mail

=== Rangliste [PM-4]
#table(
    columns: (1fr, 2fr),
    align: horizon,
    inset: 7pt,
    stroke: 1pt,
    [*Priorität*], [7],
    [*Komponenten*], [Backend, Frontend],
)
Die Anwendung bietet Nutzern die Möglichkeit sich in einer Rangliste zu vergleichen. Dabei gibt es eine globale Rangliste und eine private Rangliste, in der sich Nutzer mit Freunden vergleichen können.

Für die private Rangliste müssen Nutzer Freundschaftsanfragen an Nutzer senden können und ihre Freundesliste verwalten können.

=== Erinnerungen [PM-5]
#table(
    columns: (1fr, 2fr),
    align: horizon,
    inset: 7pt,
    stroke: 1pt,
    [*Priorität*], [7],
    [*Komponenten*], [Backend],
)
Die Anwendung soll dem Nutzer automatisiert Benachrichtungen senden, falls er bis zu einer bestimmten Tageszeit seine Ziele noch nicht erreicht hat.

=== Schnittstelle für Wetter-Daten [PM-6]
#table(
    columns: (1fr, 2fr),
    align: horizon,
    inset: 7pt,
    stroke: 1pt,
    [*Priorität*], [5],
    [*Komponenten*], [Backend, Frontend],
)
Die Anwendung soll es Nutzern ermöglichen ihren (Haupt-)Standort festzulegen und sich dann mit den Wetter-Daten des jeweiligen Standorts verknüpfen lassen.
Die Wetter-Daten sollen für personalisierte Aufgaben verwendet werden (z.B. "Mache 2.000 Schritte im Regen") oder dem Nutzer ein Bonus-Abzeichen geben.

=== Integration eines Shops [PM-7]
#table(
    columns: (1fr, 2fr),
    align: horizon,
    inset: 7pt,
    stroke: 1pt,
    [*Priorität*], [2],
    [*Komponenten*], [Backend, Frontend],
)
Die Anwendung soll dem Nutzer die Möglichkeit bieten in Aktivitäten gesammelte Punkte für virtuelle Gegenstände auszugeben. Denkbar wäre z.B. ein spezielles Design der Anwendung oder eine Wiederherstellung verlorengeganer Tagespunkte. 

== Kalorienverbrauch [PM-8]
Die Anwendung soll, falls durch die Drittanbieter [PM-1] bereitgestellt, dem Nutzer seine aktuell verbrannten Kalorien anzeigen.

Diese Daten können zudem für Aufgaben oder Erfolge verwendet werden.