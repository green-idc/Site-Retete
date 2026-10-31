/*
  Rețetele site-ului.
  Pentru o rețetă nouă, copiază un obiect existent, schimbă "id" (unic, fără spații)
  și pune "category" pe una dintre: pui, vita, porc, paine-aluaturi, crockpot, deserturi, deserturi-healthy.
  Cantitățile (qty) se scalează automat când schimbi numărul de porții.
  Dacă un ingredient nu are cantitate (ex. „după gust”), lasă qty: null.
  "nutrition" = valori pe o porție (kcal, proteine, carbohidrați, grăsimi, fibre în grame).
*/
window.RECIPES = [
  {
    id: "burrito-vita",
    category: "vita",
    title: "Burrito cu carne tocată de vită",
    description: "Lipii mari umplute cu carne de vită condimentată cu boia și chimion, orez, fasole, porumb, legume și cașcaval, rumenite apoi în tigaie.",
    servings: 5,
    servingsLabel: "burritos",
    prepMin: 10,
    cookMin: 20,
    tags: ["în tigaie", "fel complet", "se poate congela"],
    source: {
      name: "The Cooking Foodie",
      url: "https://thecookingfoodie.com/recipe/best-beef-burrito-recipe/"
    },
    ingredients: [
      {
        group: "Carne",
        items: [
          { qty: 27, unit: "g", name: "ulei" },
          { qty: 110, unit: "g", name: "ceapă, tocată (1 ceapă)" },
          { qty: 10, unit: "g", name: "usturoi, tocat (2 căței)" },
          { qty: 450, unit: "g", name: "carne tocată de vită (ideal 20% grăsime)" },
          { qty: 2.5, unit: "g", name: "boia dulce" },
          { qty: 1, unit: "g", name: "oregano uscat" },
          { qty: 2, unit: "g", name: "chimion" },
          { qty: 1, unit: "g", name: "fulgi de chili (opțional)" },
          { qty: 4, unit: "g", name: "sare (sau după gust)" },
          { qty: 1, unit: "g", name: "piper (sau după gust)" },
          { qty: 32, unit: "g", name: "pastă de tomate" },
          { qty: 60, unit: "g", name: "supă de vită sau apă" }
        ]
      },
      {
        group: "Pentru asamblare",
        items: [
          { qty: 5, unit: "", name: "lipii tortilla mari (pentru burrito)" },
          { qty: 150, unit: "g", name: "orez fiert (cam 30 g pe burrito)" },
          { qty: 240, unit: "g", name: "fasole roșie sau neagră din conservă, scursă" },
          { qty: 150, unit: "g", name: "porumb dulce, scurs" },
          { qty: 75, unit: "g", name: "salată verde, tocată" },
          { qty: 150, unit: "g", name: "roșii, tăiate cubulețe" },
          { qty: 100, unit: "g", name: "cheddar sau alt cașcaval, ras" },
          { qty: null, unit: "", name: "salsa și smântână (opțional)" }
        ]
      }
    ],
    steps: [
      { title: "Călește ceapa", text: "Încinge uleiul într-o tigaie mare pe foc mediu și călește ceapa 5–6 minute, până se rumenește." },
      { title: "Usturoiul și carnea", text: "Adaugă usturoiul și mai călește 1 minut. Dă focul mare, pune carnea și rumenește-o cam 5 minute, sfărâmând-o cu lingura. Dacă lasă multă grăsime, scurge o parte." },
      { title: "Condimentează", text: "Pune boiaua, oregano, chimionul, fulgii de chili, sarea și piperul. Amestecă pasta de tomate, apoi toarnă supa sau apa și mai gătește 3–4 minute, până se îngroașă puțin. Ia tigaia de pe foc." },
      { title: "Încălzește lipiile", text: "Încălzește lipiile câteva secunde în tigaie sau la microunde, ca să se ruleze fără să se rupă." },
      { title: "Umple și rulează", text: "Pe fiecare lipie pune întâi orezul și fasolea, apoi 3–4 linguri de carne, porumb, salată, roșii și cașcaval. Nu le umple prea tare. Pliază marginile laterale spre interior și rulează strâns." },
      { title: "Rumenește", text: "Încinge o tigaie curată, fără ulei, pe foc mare. Rumenește fiecare burrito 1–2 minute pe fiecare parte, începând cu partea cu îmbinarea în jos, ca să se lipească. Servește cald, cu salsa sau smântână." }
    ],
    nutrition: {
      kcal: 715, protein: 33, carbs: 65, fat: 36, fiber: 7,
      note: "Un burrito complet: lipie, carne, orez, fasole, porumb, legume și 20 g cașcaval, fără salsa și smântână. Calculat de mine; sursa dădea 465 kcal și 19 g carbohidrați, ceea ce nu poate include lipia."
    },
    notes: [
      "Rețeta originală nu dă cantități pentru fasole, porumb, salată, roșii și cașcaval. Cantitățile sunt ale mele, socotite pentru 5 burritos (adaptarea mea).",
      "Sarea și piperul sunt „după gust” în original. Am pus 4 g sare, cam 1% din carne, ca punct de plecare.",
      "Timpul de 1–2 minute pe fiecare parte la rumenire e adaptarea mea; rețeta spune doar „până se rumenesc”.",
      "Variantă mai ușoară: carne tocată de curcan sau de pui și lipii integrale.",
      "Pentru mai iute, adaugă ardei jalapeño tocat sau sos iute în carne.",
      "Carnea gătită se păstrează 2 zile la frigider. Burritos asamblate, nerumenite, se pot congela 2 luni, învelite strâns în folie, dar fără salată și roșii, care nu se congelează bine.",
      "Gramajele pentru condimente sunt aproximative (convertite din lingurițe)."
    ]
  },
  {
    id: "brownies-branza-cottage",
    category: "deserturi-healthy",
    title: "Brownies cu brânză cottage",
    description: "Brownies umede și ciocolatoase, îndulcite cu banane și sirop de arțar, cu brânză cottage în loc de unt. Aproximativ 100 kcal bucata.",
    servings: 16,
    servingsLabel: "pătrate",
    prepMin: 5,
    cookMin: 24,
    tags: ["la cuptor", "fără unt", "tavă 20 × 20 cm"],
    source: {
      name: "The Cooking Foodie",
      url: "https://thecookingfoodie.com/recipe/cottage-cheese-brownies/"
    },
    ingredients: [
      {
        group: "Compoziție",
        items: [
          { qty: 225, unit: "g", name: "brânză cottage (ideal 4% grăsime)" },
          { qty: 105, unit: "g", name: "sirop de arțar (sau alt îndulcitor lichid)" },
          { qty: 200, unit: "g", name: "banane foarte coapte (2 banane medii)" },
          { qty: 70, unit: "g", name: "ciocolată neagră 70%" },
          { qty: 2, unit: "", name: "ouă mari" },
          { qty: 50, unit: "g", name: "făină albă 000" },
          { qty: 30, unit: "g", name: "cacao neîndulcită" },
          { qty: 2, unit: "g", name: "praf de copt" },
          { qty: 1.5, unit: "g", name: "sare" },
          { qty: 40, unit: "g", name: "nuci, tocate grosier (opțional)" }
        ]
      }
    ],
    steps: [
      { title: "Încinge cuptorul", text: "Pornește cuptorul la 180°C și tapetează o tavă pătrată de 20 × 20 cm cu hârtie de copt." },
      { title: "Mixează baza", text: "Pune brânza cottage, siropul de arțar și bananele în blender și mixează până devine o cremă complet fină. Mut-o într-un bol mare." },
      { title: "Topește ciocolata", text: "Topește ciocolata ușor, la microunde sau pe baie de aburi. Las-o să se răcească puțin, apoi amestec-o în cremă." },
      { title: "Ouăle și ingredientele uscate", text: "Adaugă ouăle și amestecă. Pune făina, cacaua, praful de copt și sarea și amestecă doar până se omogenizează, fără să insiști." },
      { title: "Toarnă în tavă", text: "Încorporează nucile, dacă le folosești, și toarnă compoziția în tavă." },
      { title: "Coace", text: "Coace 20–24 de minute, până marginile se întăresc și mijlocul e încă puțin moale. O scobitoare înfiptă la mijloc trebuie să iasă cu firimituri umede, nu cu aluat crud." },
      { title: "Lasă la răcit", text: "Lasă brownies să se răcească complet în tavă înainte să le tai în 16 pătrate. Pe măsură ce se răcesc devin mai dense și mai ciocolatoase." }
    ],
    nutrition: {
      kcal: 101, protein: 3, carbs: 12, fat: 5, fiber: 2,
      note: "Un pătrat din 16, cu nuci. Valorile sunt ale sursei; calculul meu din ingrediente iese foarte apropiat (cam 110 kcal și 4 g proteine)."
    },
    notes: [
      "Sursa nu spune dacă temperatura de 180°C e pentru ventilație sau nu. Am considerat-o pentru cuptor fără ventilație (adaptarea mea).",
      "Gustul depinde mult de ciocolată. Cu ciocolată cu lapte sau semidulce ies mai dulci.",
      "Pentru mai dulci, adaugă 25–50 g zahăr sau un îndulcitor fără calorii (stevia, eritritol).",
      "Bananele trebuie să fie foarte coapte. Le poți înlocui cu 120 g piure de mere, dar gustul se schimbă puțin.",
      "Pentru mai multe proteine, înlocuiește 15–20 g de făină cu pudră proteică de ciocolată sau vanilie.",
      "Merge și cu făină de ovăz sau integrală. Dacă folosești un amestec fără gluten, lasă compoziția să stea 30 de minute înainte de copt.",
      "Păstrare: 1 zi la temperatura camerei, 5 zile la frigider (scoate-le cu 10–15 minute înainte de servire) sau 2 luni la congelator, tăiate bucăți.",
      "Gramajele pentru praf de copt și sare sunt aproximative (convertite din lingurițe)."
    ]
  },
  {
    id: "crispy-pui-panko-cuptor",
    category: "pui",
    title: "Crispy de pui crocant la cuptor",
    description: "Fâșii de piept de pui date printr-un aluat rapid cu muștar și maioneză, apoi prin panko prăjit în prealabil, ca să iasă aurii și crocante fără prăjire în ulei.",
    servings: 3,
    servingsLabel: "porții",
    prepMin: 15,
    cookMin: 20,
    tags: ["la cuptor", "fără prăjire", "bogat în proteine"],
    source: {
      name: "RecipeTin Eats",
      url: "https://www.recipetineats.com/truly-golden-crunchy-baked-chicken-tenders-less-mess/"
    },
    ingredients: [
      {
        group: "Crustă",
        items: [
          { qty: 75, unit: "g", name: "pesmet panko" },
          { qty: 10, unit: "g", name: "ulei spray (aprox., pentru panko și pui)" }
        ]
      },
      {
        group: "Aluat",
        items: [
          { qty: 1, unit: "", name: "ou" },
          { qty: 15, unit: "g", name: "maioneză" },
          { qty: 22, unit: "g", name: "muștar Dijon (sau alt muștar)" },
          { qty: 16, unit: "g", name: "făină albă 000" },
          { qty: 3, unit: "g", name: "sare" },
          { qty: null, unit: "", name: "piper negru, după gust" }
        ]
      },
      {
        group: "Pui",
        items: [
          { qty: 500, unit: "g", name: "file de piept de pui (sau piept tăiat fâșii de 1,5 cm grosime)" }
        ]
      },
      {
        group: "Sos de miere cu muștar (opțional)",
        items: [
          { qty: 75, unit: "g", name: "maioneză" },
          { qty: 30, unit: "g", name: "muștar Dijon" },
          { qty: 42, unit: "g", name: "miere" },
          { qty: 7, unit: "g", name: "zeamă de lămâie" },
          { qty: null, unit: "", name: "sare și piper, după gust" }
        ]
      }
    ],
    steps: [
      { title: "Încinge cuptorul", text: "Pornește cuptorul la 200°C." },
      { title: "Prăjește pesmetul", text: "Întinde panko pe o tavă și dă-l ușor cu ulei spray, ținând sprayul de sus, ca să nu împrăștii pesmetul. Coace 3–5 minute, până se rumenește ușor, apoi mută-l într-un bol." },
      { title: "Opțional: grătarul", text: "Pentru o coacere mai uniformă, pune un grătar de metal peste tava în care vei coace puiul." },
      { title: "Aluatul", text: "Bate cu o furculiță oul, făina, maioneza, muștarul, sarea și piperul. Pune fâșiile de pui și amestecă până se acoperă toate." },
      { title: "Pane puiul", text: "Ia fiecare fâșie cu un clește, apas-o în panko și presară pesmet și deasupra. Așaz-o pe tavă." },
      { title: "Coace", text: "Dă bucățile ușor cu ulei spray și, dacă vrei, cu un praf de sare. Coace 15 minute (până la 20 pentru bucăți foarte mari). Nu le ține mai mult, altfel se usucă." },
      { title: "Sosul și servirea", text: "Amestecă ingredientele pentru sosul de miere cu muștar. Servește puiul imediat, cu sosul alături și puțin pătrunjel, dacă vrei." }
    ],
    nutrition: {
      kcal: 416, protein: 42, carbs: 29, fat: 12, fiber: 1,
      note: "O porție din 3, fără sos. Sosul de miere cu muștar adaugă cam 230 kcal pe porție."
    },
    notes: [
      "Panko (pesmet japonez) e mai grosier decât pesmetul obișnuit și iese mult mai crocant. Îl găsești la raionul asiatic.",
      "Rețeta dă panko doar în căni. L-am convertit la 75 g (adaptarea mea).",
      "Se poate pregăti dinainte: puiul trecut prin aluat ține 2 zile la frigider, iar panko prăjit se păstrează separat. Pane-l doar înainte de copt. Puiul crud nu se congelează bine.",
      "Reîncălzire: 3–5 minute în cuptor la 200°C.",
      "Gramajele pentru sare, muștar, făină și maioneză sunt aproximative (convertite din linguri și lingurițe)."
    ]
  },
  {
    id: "chow-mein-pui",
    category: "pui",
    title: "Chow mein cu pui în 20 de minute",
    description: "Tăiței cu ou sotați în wok cu pulpă de pui, ciuperci, varză, morcovi și germeni de soia, într-un sos de soia, sos de stridii și ulei de susan.",
    servings: 3,
    servingsLabel: "porții",
    prepMin: 10,
    cookMin: 10,
    tags: ["în wok sau tigaie", "rapid", "fel complet"],
    source: {
      name: "YouTube",
      url: "https://www.youtube.com/watch?v=YXSOWDWu4IA&list=PLkQnGWYAO9uEUBTJX5gExX1ufoRo8wu7k&index=25"
    },
    ingredients: [
      {
        group: "Sos chow mein",
        items: [
          { qty: 45, unit: "g", name: "sos de soia închis (dark) sau deschis (light)" },
          { qty: 60, unit: "g", name: "sos de stridii" },
          { qty: 18, unit: "g", name: "ulei de susan" },
          { qty: 40, unit: "g", name: "vin de orez Shaoxing" },
          { qty: 12, unit: "g", name: "zahăr" },
          { qty: null, unit: "", name: "piper alb măcinat, după gust" }
        ]
      },
      {
        group: "Pui, legume și tăiței",
        items: [
          { qty: 46, unit: "g", name: "ulei de arahide (36 g pentru pui, 10 g pentru legume)" },
          { qty: 350, unit: "g", name: "pulpe de pui dezosate, fără piele, tăiate fâșii subțiri" },
          { qty: 100, unit: "g", name: "ciuperci (champignon albe sau brune), feliate subțire" },
          { qty: 150, unit: "g", name: "varză albă, tăiată fideluță" },
          { qty: 150, unit: "g", name: "morcovi, tăiați bețișoare subțiri (2 morcovi)" },
          { qty: 20, unit: "g", name: "usturoi, tocat grosier (4 căței)" },
          { qty: 75, unit: "g", name: "ceapă verde, tăiată grosier (4–5 fire)" },
          { qty: 250, unit: "g", name: "germeni de soia (opțional)" },
          { qty: 350, unit: "g", name: "tăiței proaspeți cu ou (sau uscați, vezi notele)" }
        ]
      }
    ],
    steps: [
      { title: "Fă sosul", text: "Amestecă într-un bol sosul de soia, sosul de stridii, uleiul de susan, vinul Shaoxing, zahărul și piperul alb. Lasă deoparte." },
      { title: "Fierbe tăițeii", text: "Fierbe tăițeii în apă clocotită cu 1 minut mai puțin decât scrie pe ambalaj, apoi scurge-i într-o strecurătoare." },
      { title: "Rumenește puiul", text: "Încinge wokul pe foc mare cu 36 g de ulei de arahide. Pune puiul și prăjește-l 2–3 minute, până se pătrunde complet. Scoate-l deoparte." },
      { title: "Ciupercile și varza", text: "Pune wokul înapoi pe foc mare cu restul de ulei. Adaugă ciupercile și varza și sotează 1–2 minute, până se înmoaie." },
      { title: "Restul legumelor", text: "Adaugă morcovii și sotează 2 minute. Pune usturoiul și ceapa verde pentru încă 1 minut, apoi germenii de soia pentru încă un minut." },
      { title: "Combină", text: "Pune înapoi puiul, adaugă tăițeii scurși și sosul. Amestecă totul în wok până se îmbracă uniform în sos." },
      { title: "Servește", text: "Ia wokul de pe foc și servește imediat, ornat după preferință." }
    ],
    nutrition: {
      kcal: 790, protein: 39, carbs: 89, fat: 29, fiber: 7,
      note: "O porție din 3, fel complet, cu germeni de soia. Calculat de mine din ingrediente."
    },
    notes: [
      "Rețeta nu spune câte porții ies. Am considerat 3 porții de fel principal (adaptarea mea). Dacă împarți în 4, ai cam 595 kcal și 29 g proteine pe porție.",
      "Dacă folosești tăiței uscați, pune cam 250 g, nu 350 g: tăițeii uscați cresc la fiert (adaptarea mea).",
      "Cantitățile de sos sunt preluate în grame și ml din rețeta originală, nu din linguri.",
      "Sosul de soia închis dă o culoare mai intensă. Sosul de stridii, vinul Shaoxing și germenii de soia le găsești la raionul asiatic sau la magazinele asiatice.",
      "Pregătește toate legumele dinainte: în wok totul merge foarte repede."
    ]
  },
  {
    id: "vita-broccoli-wok",
    category: "vita",
    title: "Vită cu broccoli în wok",
    description: "Fâșii subțiri de vită marinate și rumenite rapid în wok, cu broccoli și un sos lucios de soia, sos de stridii și vin Shaoxing.",
    servings: 3,
    servingsLabel: "porții",
    prepMin: 25,
    cookMin: 10,
    tags: ["în wok sau tigaie", "rapid", "bogat în proteine"],
    source: {
      name: "YouTube",
      url: "https://www.youtube.com/watch?v=BKutdsvJqEo&list=PLkQnGWYAO9uEUBTJX5gExX1ufoRo8wu7k&index=61"
    },
    ingredients: [
      {
        group: "Vită și marinadă",
        items: [
          { qty: 450, unit: "g", name: "fleică de vită (flank), tăiată felii subțiri, perpendicular pe fibră" },
          { qty: 1.5, unit: "g", name: "bicarbonat de sodiu" },
          { qty: 45, unit: "g", name: "vin de orez Shaoxing" },
          { qty: 6, unit: "g", name: "sos de soia deschis (light)" },
          { qty: 6, unit: "g", name: "sos de stridii" },
          { qty: 3, unit: "g", name: "sare" },
          { qty: 2, unit: "g", name: "zahăr" },
          { qty: 8, unit: "g", name: "amidon de porumb (Maizena)" },
          { qty: 13, unit: "g", name: "ulei neutru" }
        ]
      },
      {
        group: "Sos",
        items: [
          { qty: 80, unit: "g", name: "supă de vită" },
          { qty: 27, unit: "g", name: "sos de soia deschis (light)" },
          { qty: 6, unit: "g", name: "sos de soia închis (dark)" },
          { qty: 18, unit: "g", name: "sos de stridii" },
          { qty: 5, unit: "g", name: "ulei de susan" },
          { qty: 12, unit: "g", name: "zahăr" },
          { qty: 0.5, unit: "g", name: "piper alb" }
        ]
      },
      {
        group: "Pentru wok",
        items: [
          { qty: 65, unit: "g", name: "ulei neutru (40 g pentru vită, 25 g pentru arome)" },
          { qty: 15, unit: "g", name: "usturoi, tocat (3 căței)" },
          { qty: 5, unit: "g", name: "ghimbir proaspăt, tocat" },
          { qty: 400, unit: "g", name: "broccoli (1 căpățână), separat în buchețele" },
          { qty: 30, unit: "g", name: "vin de orez Shaoxing" },
          { qty: 12, unit: "g", name: "amidon de porumb (Maizena)" },
          { qty: 45, unit: "g", name: "apă (pentru amidon)" },
          { qty: null, unit: "", name: "semințe de susan" }
        ]
      },
      {
        group: "Pentru servire",
        items: [
          { qty: null, unit: "", name: "orez fierbinte" }
        ]
      }
    ],
    steps: [
      { title: "Marinează vita", text: "Taie vita felii subțiri, perpendicular pe fibră. Amestec-o cu toate ingredientele pentru marinadă și las-o cât pregătești restul, cam 15 minute." },
      { title: "Pregătește restul", text: "Amestecă ingredientele pentru sos într-un bol. Toacă usturoiul și ghimbirul. Desparte broccoli în buchețele și opărește-l 45 de secunde în apă clocotită cu sare, apoi scurge-l." },
      { title: "Rumenește vita", text: "Încinge wokul foarte tare, pune 40 g de ulei și întinde vita într-un singur strat. Las-o 1–2 minute fără să amesteci, ca să se rumenească bine, apoi amestecă. În total, 3–4 minute. Scoate vita deoparte." },
      { title: "Usturoiul și ghimbirul", text: "Pune restul de ulei în wok. Călește usturoiul și ghimbirul câteva secunde, apoi stinge cu vinul Shaoxing." },
      { title: "Combină", text: "Pune înapoi vita, adaugă broccoli și sosul și sotează 2–3 minute." },
      { title: "Leagă sosul", text: "Amestecă amidonul cu apa și toarnă-l în wok. Amestecă până sosul se îngroașă și devine lucios." },
      { title: "Servește", text: "Presară semințe de susan și servește cu orez fierbinte." }
    ],
    nutrition: {
      kcal: 600, protein: 37, carbs: 24, fat: 38, fiber: 3,
      note: "O porție din 3, fără orez. Calculat de mine din ingrediente. Aproape 230 kcal pe porție vin din ulei; dacă pui doar jumătate din uleiul pentru wok, scazi cam 100 kcal."
    },
    notes: [
      "Rețeta nu spune câte porții ies. Am considerat 3 porții la 450 g de vită, servită cu orez (adaptarea mea).",
      "Fleica (flank) e cea mai potrivită. Merg și antricotul sau mușchiul, tăiate la fel de subțire.",
      "Bicarbonatul din marinadă face carnea foarte fragedă, nu sări peste el.",
      "Sosul de soia deschis dă sare, cel închis dă culoare. Le găsești la raionul asiatic sau la magazinele asiatice, la fel ca vinul Shaoxing și sosul de stridii.",
      "Dacă nu găsești vin Shaoxing, merge sherry sec sau un vin alb sec.",
      "Gramajele pentru sosuri și condimente sunt aproximative (convertite din linguri și lingurițe)."
    ]
  },
  {
    id: "wraps-fajita-pui",
    category: "pui",
    title: "Wraps fajita cu pui, bogate în proteine",
    description: "Fâșii de piept de pui condimentate, cu ardei și ceapă, în lipii light, cu sos verde de avocado, iaurt și coriandru. Rapid, pentru prânz sau cină.",
    servings: 4,
    servingsLabel: "wraps",
    prepMin: 15,
    cookMin: 15,
    tags: ["în tigaie", "rapid", "bogat în proteine"],
    source: {
      name: "YouTube",
      url: "https://www.youtube.com/watch?v=GwpbU-TF0fI&list=PLkQnGWYAO9uEUBTJX5gExX1ufoRo8wu7k&index=19"
    },
    ingredients: [
      {
        group: "Pui",
        items: [
          { qty: 600, unit: "g", name: "piept de pui, tăiat fâșii" },
          { qty: 2.5, unit: "g", name: "boia dulce" },
          { qty: 0.5, unit: "g", name: "pătrunjel uscat" },
          { qty: 2, unit: "g", name: "chimion" },
          { qty: 3, unit: "g", name: "usturoi granulat" },
          { qty: 2.5, unit: "g", name: "condiment chili (amestec, nu chili pur)" },
          { qty: 4, unit: "g", name: "sare" },
          { qty: 1, unit: "g", name: "piper" },
          { qty: 30, unit: "g", name: "zeamă de lime (1 lime)" }
        ]
      },
      {
        group: "Legume",
        items: [
          { qty: 300, unit: "g", name: "ardei gras colorați, tăiați fâșii (2 ardei)" },
          { qty: 150, unit: "g", name: "ceapă, tăiată fâșii (1 ceapă)" },
          { qty: 10, unit: "g", name: "ulei de măsline" }
        ]
      },
      {
        group: "Sos de avocado cu lime",
        items: [
          { qty: 100, unit: "g", name: "avocado" },
          { qty: 175, unit: "g", name: "iaurt 0% grăsime (150–200 g, ex. Milbona)" },
          { qty: 10, unit: "g", name: "coriandru proaspăt (o mână)" },
          { qty: null, unit: "", name: "sare, piper și usturoi granulat, după gust" },
          { qty: null, unit: "", name: "zeamă de lime, după gust" }
        ]
      },
      {
        group: "Pentru servire",
        items: [
          { qty: 4, unit: "", name: "lipii tortilla light (ex. Mission)" }
        ]
      }
    ],
    steps: [
      { title: "Marinează puiul", text: "Taie pieptul în fâșii subțiri și amestecă-l cu toate condimentele și zeama de lime, până se acoperă bine. Lasă-l cât pregătești sosul și legumele." },
      { title: "Fă sosul", text: "Mixează avocado, iaurtul, coriandrul, sarea, piperul, usturoiul granulat și zeama de lime până devine un sos fin." },
      { title: "Gătește puiul", text: "Încinge uleiul într-o tigaie pe foc mare. Gătește puiul 4–5 minute pe fiecare parte, până se rumenește și se pătrunde, apoi scoate-l deoparte." },
      { title: "Legumele", text: "În aceeași tigaie, călește ardeii și ceapa cam 5 minute, până se înmoaie ușor." },
      { title: "Combină", text: "Pune puiul înapoi în tigaie și amestecă-l cu legumele." },
      { title: "Asamblează", text: "Încălzește lipiile, pune umplutura, toarnă sosul verde deasupra, rulează și servește." }
    ],
    nutrition: {
      kcal: 384, protein: 40, carbs: 24, fat: 14, fiber: 5,
      note: "Un wrap întreg, cu lipie light și sos. Valorile sunt ale autorului; fibrele le-am estimat eu."
    },
    notes: [
      "Autorul scrie „3 wraps”, dar și „100 g pui gătit pe wrap”. Din 600 g pui crud ies cam 450 g gătit, adică 4 wraps. Macro-urile lui se potrivesc cu 4, așa că am pus 4 (adaptarea mea). Dacă faci 3, fiecare are cam 520 kcal și 57 g proteine.",
      "Ardeii, ceapa și uleiul apar în pașii autorului, dar nu și în lista de ingrediente. Cantitățile sunt ale mele.",
      "Pentru sos am urmat lista de ingrediente (avocado, iaurt 0%, coriandru), nu varianta din pași, care pomenea și smântână.",
      "Sosul de avocado se poate face în cantitate mai mare și se păstrează 1–2 zile la frigider, acoperit bine.",
      "Gramajele pentru condimente sunt aproximative (convertite din lingurițe)."
    ]
  },
  {
    id: "cordon-bleu-pui",
    category: "pui",
    title: "Cordon bleu de pui la cuptor",
    description: "Rulouri de piept de pui umplute cu șuncă și cașcaval, date prin unt și fulgi de porumb, coapte la cuptor și servite cu sos de maioneză cu muștar.",
    servings: 8,
    servingsLabel: "rulouri",
    prepMin: 15,
    cookMin: 30,
    tags: ["la cuptor", "răcire min. 30 min", "se poate congela"],
    source: {
      name: "Tastes Better From Scratch",
      url: "https://tastesbetterfromscratch.com/chicken-cordon-bleu/"
    },
    ingredients: [
      {
        group: "Rulouri",
        items: [
          { qty: 900, unit: "g", name: "piept de pui dezosat, fără piele (4 piepți)" },
          { qty: 120, unit: "g", name: "șuncă presată, feliată subțire (8 felii)" },
          { qty: 225, unit: "g", name: "Emmentaler sau alt cașcaval, ras sau feliat" },
          { qty: null, unit: "", name: "sare și piper, după gust" }
        ]
      },
      {
        group: "Crustă",
        items: [
          { qty: 85, unit: "g", name: "fulgi de porumb neîndulciți (cornflakes), sfărâmați fin" },
          { qty: 85, unit: "g", name: "unt, topit" }
        ]
      },
      {
        group: "Sos",
        items: [
          { qty: 220, unit: "g", name: "maioneză" },
          { qty: 7, unit: "g", name: "muștar (sau după gust)" }
        ]
      }
    ],
    steps: [
      { title: "Bate carnea", text: "Șterge pieptul de pui cu prosoape de hârtie. Taie fiecare piept în două pe orizontală, ca să ai 8 felii. Pune feliile între două bucăți de folie alimentară și bate-le cu ciocanul de carne sau cu sucitorul până sunt subțiri și uniforme, fără să le rupi." },
      { title: "Umple și rulează", text: "Pune pe fiecare felie o felie de șuncă și o mână de cașcaval. Rulează strâns, împingând marginile spre interior." },
      { title: "Strânge în folie", text: "Așază fiecare rulou pe o bucată nouă de folie alimentară, înfășoară-l strâns și răsucește capetele ca la o bomboană. Așa rămâne închis fără scobitori. Ține rulourile la frigider minimum 30 de minute (până la o zi)." },
      { title: "Pregătește crusta", text: "Încinge cuptorul la 200°C. Sfărâmă fulgii de porumb fin, în robot sau într-o pungă cu sucitorul, și pune-i într-o farfurie adâncă. Pune untul topit în altă farfurie." },
      { title: "Pane rulourile", text: "Scoate rulourile din folie și condimentează-le cu sare și piper. Dă fiecare prin unt, apoi prin fulgi, apăsând ușor ca să se lipească. Așază-le pe o tavă unsă ușor." },
      { title: "Coace", text: "Coace pe raftul din mijloc 25–30 de minute, până când puiul are 71–74°C în interior (măsoară în carne, nu în umplutură)." },
      { title: "Sosul și servirea", text: "Amestecă maioneza cu muștarul și potrivește după gust. Pune sosul peste rulouri și servește." }
    ],
    nutrition: {
      kcal: 560, protein: 37, carbs: 9, fat: 40, fiber: 0,
      note: "Un rulou cu sos. Fără sos: cam 375 kcal. Calculat de mine din ingrediente; sursa dădea 513 kcal și doar 24 g proteine, prea puțin pentru cantitatea de pui."
    },
    notes: [
      "Un rulou e jumătate de piept. Ca fel principal consistent, socotește 2 rulouri de persoană (4 porții).",
      "Variantă mai simplă: taie un buzunar în pieptul întreg și umple-l cu șuncă și cașcaval, fără să mai bați carnea.",
      "În loc de fulgi de porumb merg pesmet, panko sau biscuiți sărați sfărâmați.",
      "Se pregătește din ziua de dinainte: oprește-te după pasul 3 și ține rulourile la frigider până la o zi.",
      "Rulourile crude, în folie, se pot congela până la 3 luni. Dezgheață-le peste noapte la frigider, apoi continuă de la pasul 4."
    ]
  },
  {
    id: "doner-kebab-casa",
    category: "vita",
    title: "Doner kebab făcut în casă",
    description: "Carne tocată condimentată, întinsă subțire, rulată și coaptă la cuptor, apoi tăiată felii fine pentru lipii, ca la kebabul de la colț.",
    servings: 5,
    servingsLabel: "porții",
    prepMin: 10,
    cookMin: 25,
    tags: ["la cuptor", "fel principal"],
    source: {
      name: "The Cooking Foodie",
      url: "https://thecookingfoodie.com/recipe/homemade-doner-kebab/"
    },
    ingredients: [
      {
        group: "Carne",
        items: [
          { qty: 1000, unit: "g", name: "carne tocată de vită (minim 20% grăsime), de miel sau amestec" },
          { qty: 150, unit: "g", name: "ceapă, rasă (1 ceapă)" },
          { qty: 15, unit: "g", name: "usturoi, ras (3 căței)" },
          { qty: 60, unit: "g", name: "iaurt simplu" },
          { qty: 27, unit: "g", name: "ulei de măsline" },
          { qty: 35, unit: "g", name: "pastă de tomate (sau sos BBQ)" },
          { qty: 12, unit: "g", name: "sare" },
          { qty: 2, unit: "g", name: "piper" },
          { qty: 4, unit: "g", name: "chimion" },
          { qty: 7, unit: "g", name: "boia dulce" },
          { qty: 2, unit: "g", name: "oregano uscat" },
          { qty: 1, unit: "g", name: "piper cayenne sau chili pur (opțional)" }
        ]
      },
      {
        group: "Pentru servire",
        items: [
          { qty: null, unit: "", name: "lipii pita calde sau tortilla mare" },
          { qty: null, unit: "", name: "salată verde sau varză, tăiată fâșii" },
          { qty: null, unit: "", name: "roșii și ceapă roșie, feliate" },
          { qty: null, unit: "", name: "castraveți murați" },
          { qty: null, unit: "", name: "sos tzatziki sau tahini (opțional)" },
          { qty: null, unit: "", name: "pătrunjel proaspăt (opțional)" }
        ]
      }
    ],
    steps: [
      { title: "Compoziția", text: "Pune într-un bol mare carnea, ceapa, usturoiul, iaurtul, pasta de tomate, sarea, piperul, boiaua, chimionul, oregano, cayenne și uleiul. Amestecă cu mâna până devine lipicioasă și se leagă bine." },
      { title: "Întinde foi subțiri", text: "Împarte compoziția în 5 părți egale. Pune o parte între două foi de hârtie de copt și întinde-o cu sucitorul într-un dreptunghi foarte subțire și uniform, scoțând bulele de aer." },
      { title: "Rulează", text: "Scoate foaia de hârtie de deasupra. Cu ajutorul celei de dedesubt, rulează carnea strâns pe latura lungă, ca pe o ruladă. Lasă ruloul în hârtie și răsucește capetele. Repetă cu restul." },
      { title: "Coace", text: "Încinge cuptorul la 200°C. Pune rulourile, în hârtie, într-o tavă și coace-le 20–25 de minute, până se pătrund și se rumenesc ușor. Nu le lăsa mai mult, altfel carnea se fărâmițează." },
      { title: "Taie felii", text: "Lasă-le să se odihnească 5 minute, apoi taie-le în felii foarte subțiri și destramă-le puțin cu două furculițe." },
      { title: "Asamblează", text: "Umple lipiile calde cu carne, roșii, salată, ceapă, castraveți murați și sosul preferat. Servește imediat." }
    ],
    nutrition: {
      kcal: 544, protein: 36, carbs: 6, fat: 41, fiber: 2,
      note: "O porție de carne, fără lipie, legume și sos."
    },
    notes: [
      "Sarea e „după gust” în rețeta originală. Am pus 12 g, cam 1,2% din carne, ca punct de plecare (adaptarea mea).",
      "Carnea trebuie să aibă minim 20% grăsime, ideal 25–30%. Dacă e slabă, mai pune 1–2 linguri de ulei de măsline.",
      "Pentru felii mai curate, ține rulourile coapte o oră la frigider înainte să le tai.",
      "Pentru margini crocante, pune feliile 1–2 minute la grill înainte de servire.",
      "Foile întinse se pot pregăti cu o zi înainte, ținute învelite la frigider.",
      "Resturile se păstrează 4 zile la frigider. Se reîncălzesc mai bine în tigaie fierbinte decât la microunde.",
      "Gramajele pentru condimente sunt aproximative (convertite din lingurițe și linguri)."
    ]
  },
  {
    id: "kung-pao-pui",
    category: "pui",
    title: "Pui Kung Pao",
    description: "Pui chinezesc sotat în wok cu ardei, ardei iuți uscați, ghimbir, usturoi și caju, într-un sos lucios de soia și miere. Gata în 30 de minute.",
    servings: 4,
    servingsLabel: "porții",
    prepMin: 15,
    cookMin: 15,
    tags: ["în wok sau tigaie", "rapid", "iute"],
    source: {
      name: "Downshiftology",
      url: "https://downshiftology.com/recipes/kung-pao-chicken/"
    },
    ingredients: [
      {
        group: "Pui",
        items: [
          { qty: 680, unit: "g", name: "piept de pui dezosat, tăiat bucăți mici" },
          { qty: 15, unit: "g", name: "sos de soia (tamari)" },
          { qty: 15, unit: "g", name: "vin de orez Shaoxing sau vin alb sec" },
          { qty: 3, unit: "g", name: "amidon de porumb (Maizena)" }
        ]
      },
      {
        group: "Sos Kung Pao",
        items: [
          { qty: 50, unit: "g", name: "sos de soia (tamari)" },
          { qty: 30, unit: "g", name: "apă" },
          { qty: 15, unit: "g", name: "vin de orez Shaoxing sau vin alb sec" },
          { qty: 15, unit: "g", name: "oțet de orez" },
          { qty: 21, unit: "g", name: "miere" },
          { qty: 5, unit: "g", name: "ulei de susan prăjit" },
          { qty: 5, unit: "g", name: "amidon de porumb (Maizena)" }
        ]
      },
      {
        group: "Pentru sotat",
        items: [
          { qty: 40, unit: "g", name: "ulei (avocado sau floarea-soarelui)" },
          { qty: 150, unit: "g", name: "ardei gras roșu, tăiat bucăți (1 ardei)" },
          { qty: 8, unit: "", name: "ardei iuți uscați, întregi" },
          { qty: 20, unit: "g", name: "usturoi, tocat (4 căței)" },
          { qty: 6, unit: "g", name: "ghimbir proaspăt, ras" },
          { qty: 2, unit: "g", name: "piper de Sichuan măcinat" },
          { qty: 60, unit: "g", name: "ceapă verde, tăiată (4 fire)" },
          { qty: 70, unit: "g", name: "caju crud sau arahide" }
        ]
      },
      {
        group: "Pentru servire (opțional)",
        items: [
          { qty: null, unit: "", name: "orez fiert" }
        ]
      }
    ],
    steps: [
      { title: "Marinează puiul", text: "Amestecă sosul de soia, vinul și amidonul pentru pui, toarnă peste bucățile de pui și amestecă. Lasă deoparte cât pregătești restul." },
      { title: "Fă sosul", text: "Într-un bol mic, amestecă toate ingredientele pentru sos până se dizolvă amidonul. Lasă deoparte." },
      { title: "Prăjește nucile", text: "Încinge wokul sau o tigaie mare pe foc mediu-mare, fără ulei. Prăjește caju sau arahidele cam 1 minut, amestecând continuu, până se rumenesc ușor. Scoate-le într-un bol." },
      { title: "Gătește puiul", text: "Pune 2/3 din ulei în wok, pe foc mediu-mare. Sotează puiul 3–4 minute, până se pătrunde și se rumenește ușor. Scoate-l deoparte." },
      { title: "Legumele și aromele", text: "Pune restul de ulei, dacă e nevoie. Sotează ardeiul gras, ardeii iuți uscați, usturoiul, ghimbirul și piperul de Sichuan 3–4 minute, pe foc mediu-mare." },
      { title: "Combină", text: "Amestecă din nou sosul și toarnă-l în wok. Adaugă puiul și ceapa verde și sotează 1–2 minute, până sosul se îngroașă și devine lucios. Stinge focul, adaugă nucile și amestecă." },
      { title: "Servește", text: "Servește simplu sau peste orez." }
    ],
    nutrition: {
      kcal: 473, protein: 44, carbs: 17, fat: 24, fiber: 2,
      note: "O porție fără orez, cu caju. Calculat de mine din ingrediente; sursa dădea 363 kcal și doar 19 g proteine, prea puțin pentru 170 g de piept de pui pe porție."
    },
    notes: [
      "Ardeii iuți uscați se lasă întregi și nu se mănâncă. Pentru mai iute, taie 2–3 în două înainte de sotat.",
      "Piperul de Sichuan se găsește la magazinele asiatice. Dacă nu ai, sau nu ai ardei iuți uscați, folosește fulgi de chili, sambal oelek sau cayenne.",
      "Rețeta originală folosește sherry sec sau vin Shaoxing. Am pus vin alb sec ca alternativă de la noi (adaptarea mea).",
      "Merge și cu pulpe de pui dezosate (mai fragede), cu arahide în loc de caju sau cu zahăr în loc de miere.",
      "Se păstrează 3–4 zile la frigider sau 3 luni la congelator.",
      "Gramajele pentru condimente și sosuri sunt aproximative (convertite din linguri și lingurițe)."
    ]
  },
  {
    id: "costite-porc-bere-crockpot",
    category: "crockpot",
    title: "Costițe de porc în bere la Crockpot Express",
    description: "Costițe marinate cu zahăr brun și condimente, gătite la presiune în bere brună, apoi glazurate cu sos BBQ la cuptor. Cu morcovi caramelizați alături.",
    servings: 4,
    servingsLabel: "porții",
    prepMin: 15,
    cookMin: 45,
    tags: ["la presiune", "Manual / High 25 min", "marinare min. 2 h"],
    source: {
      name: "Teo's Kitchen",
      url: "https://teoskitchen.ro/2019/11/costite-de-porc-in-bere-la-multicooker-crock-pot-express-cu-gatire-sub-presiune.html"
    },
    ingredients: [
      {
        group: "Costițe",
        items: [
          { qty: 1500, unit: "g", name: "costiță (scăricică) de porc proaspătă" },
          { qty: 50, unit: "g", name: "zahăr brun" },
          { qty: 30, unit: "g", name: "condimente pentru porc (amestec)" },
          { qty: 250, unit: "g", name: "bere brună" },
          { qty: 170, unit: "g", name: "sos barbeque" }
        ]
      },
      {
        group: "Morcovi caramelizați",
        items: [
          { qty: 500, unit: "g", name: "morcovi baby congelați (sau morcovi tăiați rondele)" },
          { qty: 80, unit: "g", name: "unt" },
          { qty: 60, unit: "g", name: "zahăr brun" },
          { qty: 1, unit: "g", name: "scorțișoară măcinată" },
          { qty: 120, unit: "g", name: "apă" },
          { qty: null, unit: "", name: "sare și piper, după gust" }
        ]
      }
    ],
    steps: [
      { title: "Marinează costițele", text: "Spală costițele și șterge-le foarte bine cu prosoape de hârtie. Amestecă zahărul brun cu condimentele și freacă bine carnea cu amestecul. Lasă la marinat minimum 2 ore, ideal peste noapte, la frigider." },
      { title: "Gătește la presiune", text: "Pune costițele în vasul aparatului și toarnă berea peste ele. Închide capacul și supapa, alege MANUAL, presiune HIGH, 25 de minute." },
      { title: "Eliberează presiunea", text: "La final, lasă presiunea să scadă singură 5 minute, fără să atingi aparatul. Apoi deschide supapa cu grijă, cu un clește, ca să iasă restul aburului." },
      { title: "Glazurează la cuptor", text: "Încinge cuptorul la 200°C. Pune costițele pe o tavă cu hârtie de copt și unge-le generos cu sosul barbeque, cu o pensulă. Coace 10–12 minute, până sosul face o crustă lucioasă și lipicioasă." },
      { title: "Morcovii", text: "Cât stau costițele în cuptor, golește vasul aparatului și pune în el toate ingredientele pentru morcovi. Închide capacul și supapa, alege MANUAL, presiune HIGH, 4 minute." },
      { title: "Servește", text: "La final, eliberează presiunea imediat, cu grijă, folosind un clește sau o mănușă. Servește morcovii lângă costițe." }
    ],
    nutrition: {
      kcal: 1050, protein: 43, carbs: 60, fat: 71, fiber: 4,
      note: "O porție de costițe (cam 375 g crude, cu os) cu morcovi caramelizați. Doar costițele: cam 800 kcal. Calculat de mine din ingrediente; variază mult după cât de grasă e carnea."
    },
    notes: [
      "Rețeta originală nu spune câte porții ies. Am considerat 4 porții la 1,5 kg de costiță cu os (adaptarea mea).",
      "Merge și cu costiță afumată, cu același timp de gătire. Atunci pune mai puține condimente, pentru că e deja sărată.",
      "Poți folosi orice sos barbeque, din comerț sau făcut în casă.",
      "Morcovii baby congelați se clătesc sub jet de apă rece înainte să-i pui în aparat.",
      "Gramajele pentru zahăr și condimente sunt aproximative (convertite din linguri)."
    ]
  },
  {
    id: "aluat-pizza-casa",
    category: "paine-aluaturi",
    title: "Aluat de pizza făcut în casă",
    description: "Aluat simplu cu drojdie uscată și ulei de măsline, pentru 2 blaturi mari de 35 cm. Iese și mai bun dacă stă o noapte la frigider.",
    servings: 2,
    servingsLabel: "blaturi",
    prepMin: 20,
    cookMin: 12,
    tags: ["la cuptor", "dospire 2 h", "se poate face din ziua de dinainte"],
    source: {
      name: "Teo's Kitchen",
      url: "https://teoskitchen.ro/2017/01/aluat-de-pizza-facut-casa.html"
    },
    ingredients: [
      {
        group: "Aluat",
        items: [
          { qty: 350, unit: "g", name: "făină albă 000" },
          { qty: 7, unit: "g", name: "drojdie uscată (1 plic)" },
          { qty: 240, unit: "g", name: "apă călduță" },
          { qty: 6, unit: "g", name: "sare" },
          { qty: 8, unit: "g", name: "zahăr" },
          { qty: 26, unit: "g", name: "ulei de măsline (plus puțin pentru bol)" }
        ]
      },
      {
        group: "Pentru întindere și copt",
        items: [
          { qty: null, unit: "", name: "făină pentru masa de lucru" },
          { qty: null, unit: "", name: "mălai pentru tavă" },
          { qty: null, unit: "", name: "sos de roșii și toppingurile preferate" }
        ]
      }
    ],
    steps: [
      { title: "Activează drojdia", text: "Dizolvă drojdia și zahărul în apa călduță și lasă 10–15 minute. Trebuie să facă spumă; dacă nu face, drojdia nu e bună și o iei de la capăt." },
      { title: "Frământă", text: "Într-un bol (sau în bolul mixerului), amestecă scurt făina, sarea și uleiul, apoi adaugă apa cu drojdie. Frământă până aluatul devine neted, elastic și se desprinde de pe pereții bolului, cam 8–10 minute. E normal să fie puțin lipicios." },
      { title: "Lasă la dospit", text: "Pune aluatul într-un bol curat, uns cu puțin ulei de măsline, acoperă-l și lasă-l la cald 2 ore, până își dublează volumul. Un loc bun e cuptorul stins, doar cu becul aprins." },
      { title: "Opțional: o noapte la frigider", text: "Pentru un blat mai gustos, ține aluatul dospit peste noapte la frigider, acoperit. Îl poți folosi și imediat." },
      { title: "Întinde blaturile", text: "Împarte aluatul în 2 bile egale (sau 3, pentru blaturi mai subțiri). Întinde fiecare bilă pe masa înfăinată și așaz-o într-o tavă presărată cu mălai, cu marginile puțin mai groase." },
      { title: "Adaugă toppingul", text: "Încinge cuptorul la 220°C. Întinde sosul pe blat și pune toppingurile preferate." },
      { title: "Coace", text: "Coace în cuptorul bine încins până blatul se rumenește uniform și marginile sunt aurii. Autoarea indică 4–5 minute, dar la un cuptor de casă durează de obicei 10–12 minute, așa că urmărește-l." }
    ],
    nutrition: {
      kcal: 780, protein: 20, carbs: 138, fat: 15, fiber: 5,
      note: "Un blat întreg de 35 cm, doar aluatul, fără sos și topping (o pizza ajunge de obicei pentru 2 persoane). Calculat de mine din ingrediente."
    },
    notes: [
      "Timpul de coacere de 10–12 minute și timpul de frământare sunt adaptarea mea: rețeta originală spune 4–5 minute la 220°C și nu dă timp de frământare.",
      "Aluatul ține bine 2–4 zile la frigider, acoperit.",
      "Drojdia uscată se poate pune și direct în făină, fără să o activezi înainte.",
      "Poți înlocui o parte din făină cu griș sau făină neagră.",
      "Toppingul autoarei: mozzarella, gorgonzola, măsline kalamata, iar după coacere prosciutto și rucola.",
      "Gramajele pentru sare, zahăr și ulei sunt aproximative (convertite din lingurițe și linguri)."
    ]
  },
  {
    id: "painici-naan",
    category: "paine-aluaturi",
    title: "Pâinici naan făcute în casă",
    description: "Lipii pufoase cu iaurt grecesc, coapte în tigaie și unse cu ulei de măsline cu usturoi și pătrunjel.",
    servings: 5,
    servingsLabel: "bucăți",
    prepMin: 15,
    cookMin: 15,
    tags: ["în tigaie", "dospire 30 min"],
    source: {
      name: "Teo's Kitchen",
      url: "https://teoskitchen.ro/2021/10/painici-naan-facute-in-casa.html"
    },
    ingredients: [
      {
        group: "Aluat",
        items: [
          { qty: 250, unit: "g", name: "făină albă 650" },
          { qty: 125, unit: "g", name: "iaurt grecesc" },
          { qty: 60, unit: "g", name: "apă călduță" },
          { qty: 10, unit: "g", name: "ulei" },
          { qty: 7, unit: "g", name: "drojdie uscată (1 plic)" },
          { qty: 6, unit: "g", name: "sare" },
          { qty: 4, unit: "g", name: "zahăr" }
        ]
      },
      {
        group: "Ulei cu usturoi",
        items: [
          { qty: 13, unit: "g", name: "ulei de măsline (plus puțin pentru masa de lucru)" },
          { qty: 15, unit: "g", name: "pătrunjel (½ legătură)" },
          { qty: 15, unit: "g", name: "usturoi (3–4 căței)" }
        ]
      }
    ],
    steps: [
      { title: "Fă aluatul", text: "Pune toate ingredientele pentru aluat în robotul de bucătărie și mixează până obții un aluat omogen. Dacă nu ai robot, frământă-l cu mâna cam 5 minute." },
      { title: "Lasă la dospit", text: "Mută aluatul într-un bol curat, acoperă-l și lasă-l să dospească 30 de minute." },
      { title: "Întinde lipiile", text: "Împarte aluatul în 5 bucăți egale. Pe masa unsă cu puțin ulei de măsline, întinde fiecare bucată până are 2–3 mm grosime." },
      { title: "Coace în tigaie", text: "Încinge o tigaie antiaderentă pe foc mediu, fără ulei. Coace fiecare lipie 1–2 minute pe o parte, până face bule, apoi întoarce-o și mai coace 1–2 minute, până se rumenește cât îți place." },
      { title: "Uleiul cu usturoi", text: "Mixează pătrunjelul și usturoiul cu uleiul de măsline până devine un sos. Le poți și toca mărunt cu cuțitul și amesteca apoi cu uleiul." },
      { title: "Unge și servește", text: "Unge lipiile cât sunt fierbinți cu uleiul aromatizat și servește-le calde." }
    ],
    nutrition: {
      kcal: 250, protein: 8, carbs: 39, fat: 6, fiber: 2,
      note: "O lipie, cu ulei de usturoi. Calculat de mine din ingrediente."
    },
    notes: [
      "Timpul de 1–2 minute pe fiecare parte și varianta frământată cu mâna sunt adaptarea mea: rețeta originală spune doar „până se rumenesc”.",
      "Rețeta originală spune „1 pliculeț drojdie”, fără să zică ce fel. Am pus drojdie uscată de 7 g.",
      "Iaurtul face naanul mai pufos decât pita: în loc de un singur buzunar, face multe bule.",
      "Merge și cu făină fără gluten, dar aluatul se lucrează mai greu.",
      "Se păstrează 1–2 zile în pungi cu fermoar, după ce s-au răcit complet.",
      "Gramajele pentru sare și zahăr sunt aproximative (convertite din lingurițe)."
    ]
  },
  {
    id: "souvlaki-pui-grecesc",
    category: "pui",
    title: "Souvlaki grecesc de pui cu tzatziki",
    description: "Frigărui de piept de pui marinate în ulei de măsline, lămâie, usturoi și oregano, făcute pe tigaia grill sau la grătar, cu sos tzatziki.",
    servings: 4,
    servingsLabel: "porții",
    prepMin: 30,
    cookMin: 10,
    tags: ["tigaie grill sau grătar", "marinare min. 30 min", "bogat în proteine"],
    source: {
      name: "Downshiftology",
      url: "https://downshiftology.com/recipes/greek-chicken-souvlaki/"
    },
    ingredients: [
      {
        group: "Pui și marinadă",
        items: [
          { qty: 700, unit: "g", name: "piept de pui dezosat, fără piele (4 piepți medii), tăiat cuburi de ~4 cm" },
          { qty: 70, unit: "g", name: "ulei de măsline" },
          { qty: 30, unit: "g", name: "zeamă de lămâie" },
          { qty: 15, unit: "g", name: "usturoi, tocat (3 căței)" },
          { qty: 2, unit: "g", name: "oregano uscat" },
          { qty: 0.5, unit: "g", name: "pătrunjel uscat" },
          { qty: 4, unit: "g", name: "sare" },
          { qty: 1, unit: "g", name: "piper negru proaspăt măcinat" }
        ]
      },
      {
        group: "Sos tzatziki",
        items: [
          { qty: 150, unit: "g", name: "castravete, curățat și ras (½ castravete mediu)" },
          { qty: 180, unit: "g", name: "iaurt grecesc" },
          { qty: 4, unit: "g", name: "mărar proaspăt, tocat" },
          { qty: 5, unit: "g", name: "usturoi, tocat (1 cățel)" },
          { qty: 13, unit: "g", name: "ulei de măsline extravirgin" },
          { qty: 8, unit: "g", name: "zeamă de lămâie" },
          { qty: 1.5, unit: "g", name: "sare" }
        ]
      },
      {
        group: "Pentru servire (opțional)",
        items: [
          { qty: null, unit: "", name: "lipii pita" },
          { qty: null, unit: "", name: "castraveți și roșii feliate sau salată grecească" },
          { qty: null, unit: "", name: "6 frigărui lungi (~30 cm), de metal sau lemn" }
        ]
      }
    ],
    steps: [
      { title: "Marinează puiul", text: "Într-un bol mare, amestecă puiul cu uleiul, zeama de lămâie, usturoiul, oregano, pătrunjelul, sarea și piperul. Acoperă și ține la frigider minimum 30 de minute, maximum 24 de ore." },
      { title: "Fă sosul tzatziki", text: "Stoarce bine castravetele ras printr-o sită fină sau un tifon, ca să iasă apa. Amestecă-l cu iaurtul, mărarul, usturoiul, uleiul, zeama de lămâie și sarea. Gustă și potrivește, apoi ține-l la rece până servești." },
      { title: "Pune pe frigărui", text: "Înșiră puiul pe frigărui, cam 8–9 bucăți pe o frigăruie lungă, ca să iasă 6 frigărui. Dacă folosești frigărui de lemn, ține-le înainte 30 de minute în apă, ca să nu ardă." },
      { title: "Încinge tigaia grill", text: "Încinge tigaia grill sau grătarul la foc mediu-mare și unge-l ușor cu ulei." },
      { title: "Gătește", text: "Gătește frigăruile 3–4 minute pe fiecare parte, întorcându-le de 3–4 ori, în total 10–12 minute, până puiul e auriu și pătruns (75°C în interior)." },
      { title: "Servește", text: "Servește frigăruile cu sos tzatziki, în pita sau alături de legume proaspete." }
    ],
    nutrition: {
      kcal: 421, protein: 40, carbs: 5, fat: 27, fiber: 1,
      note: "Puiul cu porția de tzatziki, fără pita. Doar puiul: 362 kcal, 36 g proteine. Valorile sunt preluate de la autoare, pentru pui și tzatziki separat."
    },
    notes: [
      "Variantă la cuptor (adaptarea mea): 220°C, frigăruile pe o tavă cu hârtie de copt, 15–18 minute, întoarse la jumătate. La final, 2–3 minute la grill pentru culoare.",
      "Nu marina mai mult de 24 de ore: zeama de lămâie face carnea moale și fărâmicioasă.",
      "Rețeta originală nu dă greutatea puiului (spune „4 piepți”). Am pus 700 g, care se potrivesc cu valorile nutriționale ale autoarei.",
      "Sosul tzatziki e jumătate din rețeta autoarei, cât pentru 4 porții. Se păstrează 4 zile la frigider.",
      "Gramajele pentru condimente sunt aproximative (convertite din lingurițe și linguri).",
      "Puiul gătit se păstrează 3–5 zile la frigider sau 3 luni la congelator. La reîncălzire, adaugă o lingură de apă ca să nu se usuce."
    ]
  },
  {
    id: "risotto-ciuperci-crockpot",
    category: "crockpot",
    title: "Risotto cu ciuperci la Crockpot Express",
    description: "Risotto cremos cu ciuperci și parmezan, gata în aproximativ 25 de minute la presiune, fără amestecat continuu.",
    servings: 8,
    servingsLabel: "porții",
    prepMin: 10,
    cookMin: 22,
    tags: ["la presiune", "program Rice/Risotto 12 min", "garnitură"],
    source: {
      name: "Simple and Seasonal",
      url: "https://simpleandseasonal.com/crockpot-express-mushroom-risotto/"
    },
    ingredients: [
      {
        group: "Risotto",
        items: [
          { qty: 15, unit: "g", name: "ulei de măsline" },
          { qty: 75, unit: "g", name: "ceapă, tocată (½ ceapă medie)" },
          { qty: 10, unit: "g", name: "usturoi, tocat (2–3 căței)" },
          { qty: 450, unit: "g", name: "ciuperci brune (champignon brun), feliate" },
          { qty: 400, unit: "g", name: "orez arborio" },
          { qty: 950, unit: "g", name: "supă de pui" },
          { qty: 90, unit: "g", name: "parmezan ras" }
        ]
      },
      {
        group: "Pentru servire",
        items: [
          { qty: null, unit: "", name: "pătrunjel proaspăt, tocat" }
        ]
      }
    ],
    steps: [
      { title: "Încinge uleiul", text: "Scoate capacul. Selectează Brown/Saute, pune uleiul și lasă-l să se încălzească 1–2 minute." },
      { title: "Călește ceapa și usturoiul", text: "Adaugă ceapa și usturoiul și călește-le 1 minut." },
      { title: "Adaugă ciupercile", text: "Pune ciupercile și gătește-le aproximativ 5 minute, amestecând des, până se înmoaie." },
      { title: "Orezul și supa", text: "Apasă Start/Stop ca să oprești funcția de sote. Adaugă orezul și supa și amestecă bine, ca să nu rămână orez lipit de fund." },
      { title: "Gătește la presiune", text: "Pune și blochează capacul, închide supapa și selectează programul Rice/Risotto, 12 minute. Apasă Start/Stop." },
      { title: "Eliberează presiunea", text: "La final, lasă presiunea să scadă singură 5 minute, apoi deschide supapa ca să iasă restul aburului." },
      { title: "Servește", text: "Deschide capacul, adaugă parmezanul și amestecă până devine cremos. Presară pătrunjel și servește cald." }
    ],
    nutrition: {
      kcal: 255, protein: 9, carbs: 43, fat: 4, fiber: 2,
      note: "O porție de garnitură (o cană, cam 250 ml), cu parmezan."
    },
    notes: [
      "Cele 8 porții sunt de garnitură. Ca fel principal ies 4–5 porții, sau adaugă pui gătit, cum sugerează autoarea.",
      "Dacă aparatul tău nu are program Rice/Risotto, folosește presiune mare 6–7 minute (adaptarea mea, nu e în rețeta originală).",
      "La jumătate de rețetă timpul rămâne același, doar că aparatul ajunge mai repede la presiune.",
      "Supa din comerț sau din cuburi e deja sărată, iar parmezanul la fel, așa că gustă înainte să mai adaugi sare.",
      "Se păstrează 3–4 zile la frigider. La reîncălzire adaugă un strop de apă sau supă, pentru că se îngroașă."
    ]
  },
  {
    id: "pulled-chicken-presiune",
    category: "crockpot",
    title: "Pulled chicken cu sos BBQ la presiune",
    description: "Piept de pui fiert la presiune cu cola, ardei și ceapă, apoi destrămat și amestecat cu sos BBQ. Bun în chifle sau la meal prep.",
    servings: 8,
    servingsLabel: "porții",
    prepMin: 10,
    cookMin: 25,
    tags: ["la presiune", "presiune mare 15 min", "meal prep"],
    source: {
      name: "Dear Crissy",
      url: "https://dearcrissy.com/pressure-cooker-pulled-chicken/"
    },
    ingredients: [
      {
        group: "Pui",
        items: [
          { qty: 1000, unit: "g", name: "piept de pui dezosat, fără piele (cam 3 piepți mari)" },
          { qty: 150, unit: "g", name: "ceapă, tăiată cubulețe (1 ceapă)" },
          { qty: 10, unit: "g", name: "usturoi, tocat (2 căței)" },
          { qty: 300, unit: "g", name: "ardei gras verde, tăiat cubulețe (2 ardei)" },
          { qty: 330, unit: "g", name: "cola (1 doză)" },
          { qty: 50, unit: "g", name: "zahăr" },
          { qty: 2.5, unit: "g", name: "condiment chili (amestec, nu chili pur)" },
          { qty: 3, unit: "g", name: "sare" }
        ]
      },
      {
        group: "Sos",
        items: [
          { qty: 510, unit: "g", name: "sos BBQ" }
        ]
      },
      {
        group: "Pentru servire",
        items: [
          { qty: null, unit: "", name: "chifle moi pentru burger" }
        ]
      }
    ],
    steps: [
      { title: "Pune totul în vas", text: "Pune în vasul aparatului puiul, condimentul chili, zahărul, sarea, ceapa, usturoiul și ardeiul, apoi toarnă cola." },
      { title: "Gătește la presiune", text: "Pune și blochează capacul, închide supapa și gătește la presiune mare (High) 15 minute." },
      { title: "Eliberează presiunea", text: "Când sună, deschide supapa ca să iasă aburul (eliberare rapidă), apoi scoate capacul." },
      { title: "Scurge și destramă", text: "Scoate cu grijă vasul interior (e fierbinte) și scurge lichidul. Pune puiul pe un platou și destramă-l cu două furculițe." },
      { title: "Adaugă sosul BBQ", text: "Pune puiul înapoi în vas, adaugă sosul BBQ și amestecă bine. Dacă s-a răcit cât l-ai destrămat, încălzește-l 2–3 minute pe funcția Saute/Brown." },
      { title: "Servește", text: "Servește cald, în chifle sau alături de legume la abur, cartofi copți sau orez." }
    ],
    nutrition: {
      kcal: 324, protein: 31, carbs: 39, fat: 4, fiber: 1,
      note: "O porție din 8, fără chiflă. Conține 33 g zahăr pe porție, mai ales din cola și sosul BBQ."
    },
    notes: [
      "Dacă folosești chili pur, pune doar jumătate, e mult mai iute decât amestecul american „chili powder”.",
      "Ca să reduci zahărul, poți sări peste cei 50 g de zahăr (cam 25 kcal mai puțin pe porție) sau poți folosi cola zero.",
      "Pentru variantă picantă, adaugă un ardei iute tocat odată cu ceilalți ardei.",
      "Merge și cu pulpe dezosate, rămân și mai suculente.",
      "Bun pentru meal prep: se păstrează 3–4 zile la frigider sau până la 3 luni la congelator."
    ]
  },
  {
    id: "pui-miere-usturoi",
    category: "pui",
    title: "Pui cu sos de miere și usturoi",
    description: "Bucăți crocante de pulpă de pui, trase prin sos lipicios de miere, soia și usturoi. Gata în aproximativ 30 de minute, la cuptor sau în tigaie.",
    servings: 3,
    servingsLabel: "porții",
    prepMin: 10,
    cookMin: 20,
    tags: ["cuptor sau tigaie", "rapid", "bogat în proteine"],
    ingredients: [
      {
        group: "Pui",
        items: [
          { qty: 900, unit: "g", name: "pulpe de pui dezosate, fără piele, tăiate cuburi de ~2,5 cm" },
          { qty: 8, unit: "g", name: "amidon de porumb (Maizena)" },
          { qty: 3, unit: "g", name: "usturoi granulat" },
          { qty: 2.5, unit: "g", name: "boia dulce" },
          { qty: 3, unit: "g", name: "sare (sau după gust)" },
          { qty: 1, unit: "g", name: "piper (sau după gust)" },
          { qty: 10, unit: "g", name: "ulei spray (la cuptor) sau 20 g ulei (la tigaie)" }
        ]
      },
      {
        group: "Sos de miere și usturoi",
        items: [
          { qty: 85, unit: "g", name: "miere" },
          { qty: 50, unit: "g", name: "sos de soia cu conținut redus de sare" },
          { qty: 20, unit: "g", name: "usturoi proaspăt, tocat (4 căței)" },
          { qty: 15, unit: "g", name: "oțet de orez" },
          { qty: 5, unit: "g", name: "ulei de susan" },
          { qty: 3, unit: "g", name: "amidon de porumb (Maizena)" },
          { qty: 60, unit: "g", name: "apă" },
          { qty: 1, unit: "g", name: "fulgi de chili (opțional)" }
        ]
      },
      {
        group: "Pentru servire",
        items: [
          { qty: null, unit: "", name: "orez jasmin" },
          { qty: null, unit: "", name: "ceapă verde, tăiată rondele" },
          { qty: null, unit: "", name: "semințe de susan" }
        ]
      }
    ],
    steps: [
      { title: "Pregătește puiul", text: "Pune cuburile de pui într-un bol, presară amidonul, usturoiul granulat, boiaua, sarea și piperul, apoi amestecă până se acoperă toate bucățile uniform." },
      { title: "Gătește puiul", text: "La cuptor: încinge cuptorul la 220°C. Întinde puiul într-un singur strat pe o tavă cu hârtie de copt, dă-l cu ulei spray și coace 20–22 de minute, întorcând bucățile la jumătate. La final, 2–3 minute la grill pentru crustă. În tigaie: încinge uleiul pe foc mediu-mare și prăjește puiul în 2 tranșe, 7–8 minute fiecare, întorcând des, până e auriu și pătruns. Nu aglomera tigaia, altfel puiul fierbe în loc să se rumenească." },
      { title: "Fă sosul", text: "Cât se gătește puiul, amestecă într-o crăticioară toate ingredientele pentru sos, până se dizolvă amidonul. Fierbe la foc mic 2–3 minute, amestecând, până se îngroașă și devine lucios." },
      { title: "Combină", text: "Pune puiul fierbinte într-un bol mare, toarnă jumătate din sos și amestecă până se îmbracă bine. Păstrează restul de sos pentru servire." },
      { title: "Servește", text: "Servește cu orez jasmin, toarnă deasupra sosul rămas și presară ceapă verde și semințe de susan." }
    ],
    nutrition: {
      kcal: 442, protein: 59, carbs: 15, fat: 13,
      note: "O porție de pui cu sos, fără orez. Varianta în tigaie adaugă cam 60 kcal pe porție."
    },
    notes: [
      "Rețeta originală era pentru air fryer (200°C, 13–15 minute). Timpii pentru cuptor și tigaie sunt adaptați.",
      "Am adăugat fierberea sosului: amidonul și usturoiul crud au nevoie de 2–3 minute pe foc ca sosul să se lege.",
      "Puiul e gata când are 75°C în interior sau nu mai e roz la mijloc.",
      "Gramajele pentru condimente sunt aproximative (convertite din lingurițe și linguri).",
      "Valorile nutriționale vin de la autorul rețetei originale."
    ]
  },
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
      { title: "Încinge cuptorul", text: "Pornește cuptorul la 190°C și tapetează o tavă cu hârtie de copt." },
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
      { title: "Încinge cuptorul", text: "Pornește cuptorul la 240°C. Tapetează o tavă mare cu hârtie de copt." },
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
      "Reîncălzire: la microunde sau 8–10 min în cuptor la 200°C.",
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
      { title: "Încinge cuptorul", text: "Pornește cuptorul la 240°C și lasă-l să se încălzească bine, cam 20 de minute." },
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
