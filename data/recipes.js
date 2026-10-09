/*
  Rețetele site-ului.
  Pentru o rețetă nouă, copiază un obiect existent, schimbă "id" (unic, fără spații)
  și pune "category" pe una dintre: pui, vita, porc, paine-aluaturi, deserturi, deserturi-healthy.
  Cantitățile (qty) se scalează automat când schimbi numărul de porții.
  Dacă un ingredient nu are cantitate (ex. „după gust”), lasă qty: null.
  "nutrition" = valori pe o porție (kcal, proteine, carbohidrați, grăsimi, fibre în grame).
*/
window.RECIPES = [
  {
    id: "bageli-iaurt-grecesc",
    category: "paine-aluaturi",
    title: "Bageli cu iaurt grecesc",
    description: "Bageli moi și pufoși din doar 3 ingrediente de bază, fără drojdie și fără dospire, cu mai multe proteine decât cei clasici.",
    servings: 8,
    servingsLabel: "bageli",
    prepMin: 15,
    cookMin: 25,
    tags: ["la cuptor", "fără drojdie", "se poate congela"],
    source: {
      name: "Lindsay Pleskot",
      url: "https://www.lindsaypleskot.com/greek-yogurt-bagels/"
    },
    ingredients: [
      {
        group: "Aluat",
        items: [
          { qty: 250, unit: "g", name: "făină albă (tip 000 sau 650)" },
          { qty: 16, unit: "g", name: "praf de copt (cam 1½ plic de 10 g)" },
          { qty: 8, unit: "g", name: "sare" },
          { qty: 480, unit: "g", name: "iaurt grecesc 2% grăsime" }
        ]
      },
      {
        group: "Pentru deasupra",
        items: [
          { qty: 1, unit: "", name: "ou bătut" },
          { qty: null, unit: "", name: "semințe de susan, condiment „everything bagel” sau zahăr cu scorțișoară (opțional)" }
        ]
      }
    ],
    steps: [
      { title: "Încinge cuptorul", text: "Pornește cuptorul la 190°C (sau 170°C cu ventilație) și tapetează o tavă cu hârtie de copt." },
      { title: "Amestecă ingredientele uscate", text: "Într-un bol mare, amestecă făina, praful de copt și sarea." },
      { title: "Adaugă iaurtul", text: "Pune iaurtul și amestecă cu o lingură până se formează un aluat zdrențuit." },
      { title: "Frământă", text: "Frământă aluatul direct în bol 2–3 minute, până devine neted și elastic. E normal să fie ușor lipicios; nu adăuga multă făină în plus." },
      { title: "Formează bagelii", text: "Împarte aluatul în 8 bucăți egale (cam 95 g fiecare). Rulează fiecare bucată într-un cârnăcior, unește capetele ca să formezi un inel și așază bagelii în tavă." },
      { title: "Unge și presară", text: "Unge bagelii cu oul bătut și presară deasupra ce topping vrei." },
      { title: "Coace", text: "Coace 22–25 de minute, până se umflă și se rumenesc." },
      { title: "Lasă la răcit", text: "Lasă-i să se răcească 10–15 minute înainte să-i tai, altfel se fărâmițează." }
    ],
    nutrition: {
      kcal: 168, protein: 10, carbs: 27, fat: 2, fiber: 1,
      note: "Un bagel simplu, fără topping."
    },
    notes: [
      "Rețeta originală folosește făină obișnuită + praf de copt, nu self-rising flour, deci făina 000 de la noi merge perfect.",
      "Folosește neapărat iaurt grecesc (strecurat, gros). Iaurtul obișnuit are prea mult lichid și aluatul iese prea moale.",
      "Gramajele pentru praf de copt și sare sunt aproximative (convertite din linguri și lingurițe).",
      "Nu sări peste ou: le dă culoarea aurie, ca de brutărie.",
      "Păstrare: 1–2 zile la temperatura camerei într-o cutie închisă, încă 3–4 zile la frigider sau până la o lună la congelator.",
      "Reîncălzire: 10–15 secunde la microunde sau tăiați în două și prăjiți la toaster."
    ]
  },
  {
    id: "kebab-pui-la-cuptor",
    category: "pui",
    title: "Kebab suculent de pui la cuptor",
    description: "Carne tocată de pui condimentată, coaptă într-o singură tavă și tăiată fâșii, cu sos de iaurt cu usturoi și salată de roșii.",
    servings: 6,
    servingsLabel: "porții",
    prepMin: 10,
    cookMin: 25,
    tags: ["la cuptor", "o singură tavă", "se poate congela"],
    source: {
      name: "Simple Home Edit",
      url: "https://simplehomeedit.com/recipe/juicy-oven-baked-chicken-kebabs/"
    },
    ingredients: [
      {
        group: "Kebab",
        items: [
          { qty: 1000, unit: "g", name: "carne tocată de pui" },
          { qty: 150, unit: "g", name: "ceapă rasă (1 ceapă medie)" },
          { qty: 15, unit: "g", name: "usturoi proaspăt, tocat fin (3–4 căței)" },
          { qty: 35, unit: "g", name: "pastă de tomate" },
          { qty: 7, unit: "g", name: "boia dulce" },
          { qty: 4, unit: "g", name: "chimion măcinat" },
          { qty: 2.5, unit: "g", name: "ceapă granulată" },
          { qty: 3, unit: "g", name: "usturoi granulat" },
          { qty: 1, unit: "g", name: "oregano uscat" },
          { qty: 6, unit: "g", name: "sare" },
          { qty: 1, unit: "g", name: "piper negru proaspăt măcinat" },
          { qty: 8, unit: "g", name: "coriandru sau pătrunjel, tocat fin" },
          { qty: 10, unit: "g", name: "ulei de măsline spray (aprox.)" }
        ]
      },
      {
        group: "Sos de iaurt cu usturoi",
        items: [
          { qty: 125, unit: "g", name: "iaurt grecesc simplu" },
          { qty: 125, unit: "g", name: "maioneză" },
          { qty: 5, unit: "g", name: "usturoi, tocat fin (1 cățel)" },
          { qty: 15, unit: "g", name: "zeamă de lămâie" },
          { qty: 13, unit: "g", name: "ulei de măsline" },
          { qty: 1.5, unit: "g", name: "sare" }
        ]
      },
      {
        group: "Salată de roșii și ceapă",
        items: [
          { qty: 200, unit: "g", name: "roșii cherry, tăiate în sferturi" },
          { qty: 30, unit: "g", name: "ceapă roșie, feliată foarte subțire (¼ de ceapă)" },
          { qty: 8, unit: "g", name: "pătrunjel, tocat fin" },
          { qty: 1.5, unit: "g", name: "sumac" },
          { qty: 13, unit: "g", name: "ulei de măsline" },
          { qty: 15, unit: "g", name: "zeamă de lămâie" },
          { qty: null, unit: "", name: "un praf de sare" }
        ]
      },
      {
        group: "Pentru servire",
        items: [
          { qty: null, unit: "", name: "lipii sau pita" },
          { qty: null, unit: "", name: "hummus (opțional)" },
          { qty: null, unit: "", name: "felii de lămâie (opțional)" }
        ]
      }
    ],
    steps: [
      { title: "Încinge cuptorul", text: "Pornește cuptorul la 240°C (sau 220°C cu ventilație). Tapetează o tavă mare cu hârtie de copt." },
      { title: "Compoziția", text: "Pune toate ingredientele pentru kebab, în afară de ulei, într-un bol mare. Amestecă doar până se omogenizează, fără să frămânți mult." },
      { title: "Întinde în tavă", text: "Răstoarnă compoziția în tavă și întinde-o într-un dreptunghi de aproximativ 28 × 20 cm, gros de 1,5–2 cm. Netezește suprafața cu mâinile ude sau cu dosul unei linguri." },
      { title: "Crestează și unge", text: "Cu un cuțit sau o spatulă, crestează compoziția în fâșii lungi, ca de kebab, fără să tai până la fund. Dă-o ușor cu ulei de măsline." },
      { title: "Coace", text: "Coace pe raftul de sus 22–25 de minute, până se rumenește, iar marginile devin crocante. Verifică de la minutul 18. Dacă se strânge mult lichid, scurge-l cu grijă la jumătatea timpului. Opțional, 1–2 minute la grill la final pentru culoare." },
      { title: "Sosul", text: "Amestecă bine toate ingredientele pentru sosul de iaurt cu usturoi." },
      { title: "Salata", text: "Într-un alt bol, amestecă ingredientele pentru salata de roșii și ceapă." },
      { title: "Servește", text: "Taie kebabul pe liniile crestate. Servește-l în lipii, cu hummus (dacă vrei), sos de iaurt și salată de roșii, plus felii de lămâie alături." }
    ],
    nutrition: {
      kcal: 466, protein: 35, carbs: 12, fat: 31, fiber: 3,
      note: "Kebab cu sos de iaurt și salată, fără lipie și hummus."
    },
    notes: [
      "Gramajele pentru condimente sunt aproximative (convertite din lingurițe și linguri).",
      "Ca să fie mai simplu, poți sări peste salată și hummus: kebabul cu sosul de iaurt în lipie e suficient.",
      "Compoziția crudă se ține 24 h la frigider sau 3 luni la congelator (dezghețată peste noapte în frigider, nu se coace direct din congelator).",
      "Kebabul copt se poate congela până la 3 luni. Sosul de iaurt se păstrează 3 zile la frigider; salata e mai bună proaspătă.",
      "Reîncălzire: la microunde sau 8–10 min în cuptor la 200°C (180°C cu ventilație).",
      "Merge și ca chiftele lungi (kofta) pe grătar sau mai mici la air fryer; timpul depinde de mărime."
    ]
  },
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
    nutrition: {
      kcal: 504, protein: 30, carbs: 39, fat: 25, fiber: 3,
      note: "Un burger complet: chiflă, maioneză, salată și chifteaua."
    },
    notes: [
      "Gramajele pentru condimente sunt aproximative (convertite din lingurițe).",
      "Air fryer: 200°C, 10–12 min, întoarse la jumătate.",
      "Tigaie: 2–3 linguri ulei, foc mediu, ~5 min pe o parte și 4–5 min pe cealaltă.",
      "Chiftelele crude se pot pregăti cu 24 h înainte (frigider) sau congela până la 2 luni.",
      "Variantă picantă: ½–1 linguriță fulgi de chili în crustă."
    ]
  }
];
