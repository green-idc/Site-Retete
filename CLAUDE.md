# Regulile site-ului de rețete

Site static personal (GitHub Pages), în română: https://green-idc.github.io/Site-Retete/
Fără build. Rețetele stau în `data/recipes.js`, categoriile în lista `CATEGORIES` din `app.js`.

## Cum adaug o rețetă

1. Citesc rețeta din link. Linkurile de Facebook, Instagram sau TikTok nu se pot deschide:
   cer textul descrierii, capturi de ecran sau numele creatorului ca să caut varianta scrisă.
2. Adaug rețeta la **începutul** listei `window.RECIPES`, cu un `id` unic (slug fără diacritice).
3. Rulez `node -e 'global.window={};require("./data/recipes.js")'` ca să verific că fișierul se încarcă.
4. Fac commit direct pe `main`, cu mesaj în română, și dau push.
5. După ~90 de secunde verific pe site-ul live: `.../data/recipes.js?v=<sha>`.
6. Îi spun utilizatorului ce s-a adăugat, macro-urile pe scurt și să dea Ctrl+Shift+R dacă vede varianta veche.

Dacă primesc mai multe rețete deodată, le pun într-un singur commit.

## Cum adaptez conținutul

- **Totul în română**, pași scurți și simpli, fiecare cu `title` și `text`.
- **Cantități în grame**, inclusiv lichidele (ulei, supă, lapte, sosuri). Rămân la bucată doar lucrurile care se numără
  (ou, chiflă, ceapă întreagă, căpățână de usturoi), cu greutatea aproximativă în nume când ajută.
  Pentru „după gust” sau ingrediente opționale fără cantitate folosesc `qty: null`.
- La condimente convertite din lingurițe sau linguri adaug nota „Gramajele pentru condimente sunt aproximative”.
- **Temperaturi în °C**, cu varianta pentru ventilație (de obicei cu 20°C mai puțin).
- **Ingrediente de la noi:** all-purpose flour → făină albă 000. La self-rising flour verific dacă rețeta chiar îl
  folosește; dacă da, îl înlocuiesc cu făină 000 + praf de copt (plicul are 10 g). Cola: doza are 330 ml.
  „Chili powder” american e un amestec, nu chili pur.
- **Fără air fryer.** Convertesc la cuptor și/sau tigaie, cu temperaturi și minute.
- Orice schimbare față de original (timpi convertiți, un pas adăugat, o greutate presupusă) o marchez în `notes`
  drept adaptarea mea.
- Dacă porțiile din original sunt de garnitură, spun în note câte porții ies ca fel principal.
- Câmpul `source` conține numele și linkul rețetei originale, când există.

## Macro pe porție

Fiecare rețetă are `nutrition`: `kcal`, `protein`, `carbs`, `fat`, `fiber` (în grame) și o `note` care spune
ce include porția (de exemplu „fără lipie”, „cu sos”). Le iau de la sursă; dacă lipsesc, le calculez din
ingrediente și scriu asta în notă.

## Categorii

`pui`, `vita`, `porc`, `paine-aluaturi` (Pâine și aluaturi), `crockpot`, `deserturi`, `deserturi-healthy`.

- **Crockpot = doar Crockpot Express** (gătit la presiune). Rețetele de slow cooker clasic nu intră aici:
  le adaptez pentru presiune sau îi spun utilizatorului dinainte că nu se potrivesc.
- O categorie nouă se adaugă în `CATEGORIES` din `app.js` și în lista din `README.md`.

## Design

Nu schimb aspectul fără să mi se ceară. Fundalul rămâne crem (`--bg: #faf7f2`): a fost încercat verde deschis,
iar utilizatorul a preferat originalul.
