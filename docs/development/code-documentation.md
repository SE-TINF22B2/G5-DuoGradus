# Code Dokumentation

**Code Dokumentation beschreibt, wie der Code genutzt wird. Kommentare beschreiben, wie der Code funktioniert.** Im Regelfall sollte sich auf die Dokumentation fokussiert werden, an manchen Stellen sind aber Kommentare ein sinnvolles Werkzeug. Im Folgenden findet sich eine Guideline wie und wann man Kommentare und Dokumentation in diesem Projekt verfassen sollte.

Wem ein YouTube Video zum "Einlesen" in dieses Thema lieber ist, wird auf <https://youtu.be/Bf7vDBBOBUA> fündig.

## Kommentare

Kommentare können helfen Code verständlicher zu machen. Sie können zudem helfen, wenn man sich neu in eine Codebase einarbeiten will und verstehen will, was die vielen Funktionen tun. Nicht jeder Kommentar ist jedoch sinnvoll oder automatisch gut. Daher findet sich hier eine Guideline, wie Kommentare in diesem Projekt verfasst werden sollten.

### Sprache von Kommentaren

Der Übersichtlichkeit halber sollten Kommentare immer in der Sprache verfasst werden, in der auch der Code verfasst wird. In unserem Fall also Englisch, da auch der Code in Englisch geschrieben wird (siehe [Projekt Guideline](./project-guideline)).

### Unnötige Kommentare

Beim Verfassen von Kommentaren innerhalb von Funktionen sollte sich immer gefragt werden, ob ein Kommentar hier der richtige Weg ist. Betrachte folgendes Beispiel:

```js
// activity 6 represents a walking activity
if (fitbit.activity == 6) {
  return duogradus.entry.walking();
}
```

Hier wurde ein Kommentar verwendet, um eine Konstante zu erklären. Viel besser wäre es die Konstante einfach als solche in einer Variable zu speichern und dann zu verwenden.

```js
const WALKING_ACTIVITY = 6;
if (fitbit.activity == WALKING_ACTIVITY) {
  return duogradus.entry.walking();
}
```

Damit wurde der Kommentar erklärt und der Code erklärt sich sozusagen von selbst. Dieses Beispiel dient nur als Exemplar aber im Allgemeinen sollte man, bevor man einen Kommentar innerhalb einer Methode verfasst, versuchen den Code so zu schreiben, dass er sich selbst erklärt.

## Dokumentation

Code Dokumentation ist im allgemeinen Kommentaren vorzuziehen. Die Dokumentation beschreibt high-level wie der Code genutzt wird bzw. genutzt werden kann. Für dieses Projekt soll [JSDoc](https://jsdoc.app) verwendet werden. Alternativen, die betrachtet wurden, sind [documentation.js](http://documentation.js.org) und [ESDoc](https://esdoc.org). JSDoc wurde gewählt da es der Industriestandard ist und alle Projektmitglieder bereits damit gearbeitet haben.

Auf <https://jsdoc.app> findet sich ein Einstieg in das Dokumentation schreiben mit JSDoc.

Im Folgenden findet sich ein Beispiel:

```js
/**
* Hashes a password using the preferred hash algorithm.
* @param password Plaintext password
* @returns Hashed password
*/
async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
}
```

Bedenke: **Code Dokumentation sagt etwas darüber aus WAS eine Funktion oder Klasse tut, NICHT WIE sie es tut. Das sollte sich durch den Code selbst oder im Notfall durch Kommentare erklären!**

## Nachwort

Im Allgemeinen sollte lieber besserer Code als viel Dokumentation oder Kommentare geschrieben werden. Dokumentation und besonders Kommentare werden schnell ungültig oder sogar falsch, da sie nicht den vielen Strikten Prüfungen unterliegen wie dem Linter oder Compiler o.Ä.
