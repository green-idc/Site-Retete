/*
  Rețetele site-ului.
  Pentru o rețetă nouă, copiază un obiect existent, schimbă "id" (unic, fără spații)
  și pune "category" pe una dintre: pui, vita, porc, deserturi, deserturi-healthy.
  Cantitățile (qty) se scalează automat când schimbi numărul de porții.
  Dacă un ingredient nu are cantitate (ex. „după gust”), lasă qty: null.
*/
window.RECIPES = [
  {
    id: "burgeri-pui-crocanti",
    category: "pui",
    title: "Burgeri crocanți din carne tocată de pui",
    description: "Chiftele suculente cu crustă de panko și parmezan, coapte la cuptor, nu prăjite.",
    servings: 5,
    servingsLabel: "burgeri",
    prepMin: 20,
    cookMin: 20,
    tags: ["la cuptor", "se poate congela"],
    source: {
      name: "Simple Home Edit",
      url: "https://simplehomeedit.com/recipe/crispy-minced-ground-chicken-burgers/"
    },
    ingredients: [
      {
        group: "Chiftele",
        items: [
          { qty: 500, unit: "g", name: "carne tocată de pui (sau curcan)" },
          { qty: 30, unit: "g", name: "pesmet panko" },
          { qty: 25, unit: "g", name: "parmezan ras fin" },
          { qty: 1, unit: "", name: "ou (~50 g)" },
          { qty: 20, unit: "g", name: "ceapă rasă fin (cam ¼ de ceapă mică)" },
          { qty: 5, unit: "g", name: "sos Worcestershire" },
          { qty: 3, unit: "g", name: "usturoi granulat" },
          { qty: 2, unit: "g", name: "sare" },
          { qty: 1, unit: "g", name: "piper negru proaspăt măcinat" }
        ]
      },
      {
        group: "Crustă",
        items: [
          { qty: 45, unit: "g", name: "pesmet panko" },
          { qty: 25, unit: "g", name: "parmezan ras fin" },
          { qty: 2.5, unit: "g", name: "boia dulce" },
          { qty: 1.5, unit: "g", name: "usturoi granulat" },
          { qty: 1, unit: "g", name: "sare" },
          { qty: 13, unit: "g", name: "ulei de măsline spray (aprox.)" }
        ]
      },
      {
        group: "Pentru servire",
        items: [
          { qty: 5, unit: "", name: "chifle brioșă (~50 g fiecare)" },
          { qty: 60, unit: "g", name: "maioneză" },
          { qty: 120, unit: "g", name: "salată romană, tăiată fin" }
        ]
      }
    ],
    steps: [
      { title: "Încinge cuptorul", text: "Pornește cuptorul la 240°C (sau 220°C cu ventilație) și lasă-l să se încălzească bine, cam 20 de minute." },
      { title: "Compoziția", text: "Pune toate ingredientele pentru chiftele într-un bol și amestecă ușor cu mâna doar până se omogenizează. Nu frământa mult, altfel chiftelele ies tari." },
      { title: "Formează chiftelele", text: "Împarte compoziția în 5 porții egale și modelează chiftele de ~1,5 cm grosime, puțin mai late decât chiflele. E normal să fie moale și lipicioasă; udă-ți ușor mâinile dacă e nevoie." },
      { title: "Crusta", text: "Pe o foaie mare de hârtie de copt amestecă pesmetul, parmezanul, boiaua, usturoiul și sarea pentru crustă." },
      { title: "Tăvălește chiftelele", text: "Apasă fiecare chiftea în amestec, apoi ridică marginile hârtiei ca să aduci pesmetul peste ele și apasă până sunt acoperite complet." },
      { title: "Coace", text: "Unge generos cu ulei o tavă de metal, fără hârtie. Așază chiftelele, dă-le cu ulei și deasupra, apoi coace 18–20 de minute, până sunt aurii și pătrunse. Nu le întoarce. Pentru culoare în plus, 1–2 minute la grill la final." },
      { title: "Prăjește chiflele", text: "Pune chiflele tăiate, cu fața în sus, în cuptor la aceeași temperatură, 2–3 minute, până se rumenesc." },
      { title: "Asamblează", text: "Unge chiflele cu maioneză, pune salata, apoi chifteaua. Acoperă cu capacul și servește imediat." }
    ],
    notes: [
      "Gramajele pentru condimente sunt aproximative (convertite din lingurițe).",
      "Air fryer: 200°C, 10–12 min, întoarse la jumătate.",
      "Tigaie: 2–3 linguri ulei, foc mediu, ~5 min pe o parte și 4–5 min pe cealaltă.",
      "Chiftelele crude se pot pregăti cu 24 h înainte (frigider) sau congela până la 2 luni.",
      "Variantă picantă: ½–1 linguriță fulgi de chili în crustă."
    ]
  }
];
