# Unsere API

## Hintergrund

Für die Kommunikation zwischen Frontend und Backend muss eine Schnittstelle definiert werden, die genau regelt wie die Daten übertragen werden müssen. Die Schnittstelle soll dabei der Frontend-Anwendung Zugriff auf alle Daten liefern, die für die Umsetzung der Funktionen notwendig sind.

### Art der Schnittstelle

Für APIs gibt es verschiedene, sich stark unterscheidende Standards und Protokolle. Im Falle von DuoGradus ist eine direkte Anforderung an unsere Schnittstelle, dass sie über das HTTP-Protokoll angesprochen werden kann, da die Client-Anwendung als Web-Anwendung zur Verfügung gestellt werden soll.

Es gibt verschiedene Standards für Web-APIs, die relevantesten sind

* REST (Beispiele: FitBit API, diverse Google-APIs)
* GraphQL (Beispiele: neue Facebook-API, GitHub API)
* (XML/JSON)-RPC (Beispiel: Web Untis)
* SOAP (Beispiel: <kasapi.kasserver.com>)

Bei näherer Betrachtung fallen SOAP und RPC für unsere Fälle raus, da beide in moderneren Anwendungen vermehrt durch REST und GraphQL abgelöst wurden und die Unterstützung durch Frameworks und Bibliotheken deutlich geringer ist. Zudem hat das SOAP-Protokoll einen deutlichen Overhead, RPC-ähnliche Schnittstellen sind vielen Entwicklern unbekannt und deswegen ebenfalls unhandlich zu nutzen.

#### Gegenüberstellung REST und GraphQL

<table>
  <thead>
    <tr>
      <th>REST</th>
      <th>GraphQL</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Sehr großer Marktanteil, die meisten APIs sind eine Form von REST-APIs. Dadurch hohe Unterstützung in den meisten Frameworks.</td>
      <td>Neue Technologie, bisher wenige APIs (allerdings von größeren Firmen), weniger Tools und Bibliotheken</td>
    </tr>
    <tr>
      <td colspan="2">Strikte Trennung nach Objekten mit Attributen (analog zum ER-Schema umsetzbar)</td>
    </tr>
    <tr>
      <td colspan="2">Daten werden JSON-formatiert übertragen</td>
    </tr>
    <tr>
      <td>Strikte Definition, APIs liefern (im normalen REST-Standard) immer die gleichen Felder zurück</td>
      <td>Die Client-Anwendung bestimmt wie und welche Daten zurückgegeben werden.</td>
    </tr>   
  </tbody>
</table>

Es gibt Protokolle die auf dem REST-Protokoll aufbauen und dieses um weitere Funktionen erweitern. Das bekannteste Protokoll ist "OData", welches hauptsächlich von Microsoft und SAP eingesetzt wird. Dieses Protokoll erweitert das REST-Protokoll um Filtermöglichkeiten und gibt dem Client die Möglichkeit zu bestimmen welche Daten zurückgegeben werden sollen. Das Protokoll ist eher auf Business-Anwendungen ausgelegt und wird nur limitiert von Bibliotheken und Frameworks unterstützt.

## API Spezifikation

Unsere aktuelle API Spezifikation findet sich <a href="/api/client.html">hier</a>.
