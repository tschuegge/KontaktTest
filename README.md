KontaktTest
===========

Für dieses Projekt sollen Unittests geschrieben werden.

Anforderungen Kontaktanzeige
----------------------------
1. Die `KontaktComponent` stellt einen Kontakt dar
2. Der `KontaktComponent` kann der darzustellende Kontakt über das Attribute `kontakt` als String im folgenden Format übergeben werden: `[vorname],[nachname],[ort]` (bspw: `Peter,Muster,Musterstadt`)
3. Falls der `kontakt`-String im falschen Format übergeben wurde, wird eine Fehlermeldung angezeigt
4. Leerzeichen vor oder hinter einem Wert (Vorname, Nachname oder Ort) werden entfernt
5. Beim Anzeigen eines neuen Kontakts wird jedesmal eine eindeutige ID zugewiesen und angezeigt

Anforderungen UniqueIdGenerator
-------------------------------
Der UniqueIdGenerator ist eine eingekaufte Bibliothek, welche direkt in das Projekt eingebunden wurde
1. Der UniqueIdGenerator besitzt eine statische Methode (`generateId(prefix: string)`) bei der optional ein Präfix mitgegeben werden kann, der der generierten ID vorangestellt wird
2. Die generierten ID's bestehen nur als Gross- und Kleinbuchstaben und Ziffern und sind immer 8 Zeichen lang (ohne Präfix)

Aufgabe
-------
Alle Anforderungen müssen getestet werden.
