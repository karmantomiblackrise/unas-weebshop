# ElektroPro — villamossági webáruház sablon

Professzionális, villanyszerelési termékekhez és szolgáltatásokhoz tervezett, magyar nyelvű reszponzív webes sablon. Statikus HTML5, egyedi CSS és vanilla JavaScript; nincs szükség buildre vagy telepített függőségekre.

## Indítás

Nyisd meg az `index.html` fájlt böngészőben, vagy futtass egyszerű helyi webszervert a projekt gyökeréből:

```sh
python3 -m http.server 8000
```

Ezután látogasd meg a `http://localhost:8000` címet.

## Tartalom

- `index.html` — főoldal, termékkatalógus, szolgáltatások, referenciák és kapcsolat
- `css/style.css` — önálló, reszponzív stíluslap színpalettával, komponensekkel és mobilnézettel
- `js/main.js` — navigáció, termékszűrés és demó kapcsolatfelvételi űrlap
- `js/components.js` — közös toast értesítés
- `images/` — saját, könnyen cserélhető SVG illusztrációk

## Testreszabás

A márkanév, elérhetőségek, termékek és szövegek közvetlenül az `index.html` fájlban szerkeszthetők. A termékek szűréséhez add meg a kártyán a `data-category` és `data-name` értékeket, a hozzá tartozó szűrőgombon pedig a megfelelő `data-filter` kategóriát. A színpaletta a `css/style.css` fájl elején található CSS-változókkal állítható.

Az űrlap jelenleg csak böngészőoldali bemutató: nem küld adatot szerverre. Éles használathoz csatlakoztass saját űrlapkezelő szolgáltatást, és frissítsd az adatkezelési tájékoztatót. A Google Fonts betűkészletek internetkapcsolat esetén töltődnek be; a rendszer helyi betűtípusra vált, ha nem érhetők el.
