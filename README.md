# Rețetele mele

Un site simplu, static, pentru rețetele mele adunate și adaptate.
Nu are nevoie de build sau de server: e doar HTML, CSS și JavaScript.

## Structură

```
index.html        pagina principală
style.css         aspectul
app.js            categorii + navigare + afișare rețete
data/recipes.js   toate rețetele
```

## Cum adaug o rețetă

Deschide `data/recipes.js`, copiază o rețetă existentă și modifică-i câmpurile.

- `id` – unic, fără spații și diacritice (ex. `ciorba-de-perisoare`)
- `category` – una dintre: `pui`, `vita`, `porc`, `deserturi`, `deserturi-healthy`
- `servings` – numărul de porții pentru care sunt cantitățile; site-ul le scalează automat
- `ingredients` – grupate (ex. „Compoziție”, „Glazură”); `qty: null` pentru „după gust”

Pentru o categorie nouă, adaugă-o în lista `CATEGORIES` de la începutul lui `app.js`.

## Publicare pe GitHub Pages

1. Urcă fișierele în repo (în rădăcină).
2. Pe GitHub: **Settings → Pages → Branch: `main` / root → Save**.
3. După un minut, site-ul apare la `https://<utilizator>.github.io/<repo>/`.

## Local

Deschide direct `index.html` în browser – merge și fără server.
