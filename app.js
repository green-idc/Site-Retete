// Categoriile site-ului. Pentru o categorie nouă, adaugă un obiect aici.
const CATEGORIES = [
  { id: "pui", name: "Pui", emoji: "🍗", blurb: "Rețete cu carne de pui" },
  { id: "vita", name: "Vită", emoji: "🥩", blurb: "Rețete cu carne de vită" },
  { id: "porc", name: "Porc", emoji: "🥓", blurb: "Rețete cu carne de porc" },
  { id: "deserturi", name: "Deserturi", emoji: "🍰", blurb: "Dulciuri clasice" },
  { id: "deserturi-healthy", name: "Deserturi healthy", emoji: "🍓", blurb: "Dulciuri mai ușoare" }
];

const RECIPES = window.RECIPES || [];
const app = document.getElementById("app");

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const countLabel = (n) => (n === 1 ? "1 rețetă" : `${n} rețete`);

function formatQty(n) {
  if (n == null) return "";
  if (n >= 10) return String(Math.round(n));
  return String(Math.round(n * 10) / 10).replace(".", ",");
}

/* ---------- Pagini ---------- */

function renderHome() {
  document.title = "Rețetele mele";
  app.innerHTML = `
    <section class="hero">
      <h1>Ce gătim azi?</h1>
      <p>${countLabel(RECIPES.length)} în colecție</p>
    </section>
    <input class="search" id="search" type="search" placeholder="Caută o rețetă…" aria-label="Caută o rețetă">
    <div id="results"></div>
  `;

  const results = document.getElementById("results");
  const search = document.getElementById("search");

  const showCategories = () => {
    results.innerHTML = `<div class="grid">${CATEGORIES.map((c) => {
      const n = RECIPES.filter((r) => r.category === c.id).length;
      return `
        <a class="card" href="#/categorie/${c.id}">
          <span class="emoji">${c.emoji}</span>
          <h2>${esc(c.name)}</h2>
          <p>${countLabel(n)}</p>
        </a>`;
    }).join("")}</div>`;
  };

  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    if (!q) return showCategories();
    const found = RECIPES.filter((r) =>
      [r.title, r.description, ...(r.tags || [])].join(" ").toLowerCase().includes(q)
    );
    results.innerHTML = found.length
      ? `<div class="grid">${found.map(recipeCard).join("")}</div>`
      : `<div class="empty">Nicio rețetă găsită.</div>`;
  });

  showCategories();
}

function recipeCard(r) {
  const total = (r.prepMin || 0) + (r.cookMin || 0);
  return `
    <a class="card" href="#/reteta/${r.id}">
      <h3>${esc(r.title)}</h3>
      <p>${esc(r.description)}</p>
      ${total ? `<p style="margin-top:8px">⏱ ${total} min</p>` : ""}
    </a>`;
}

function renderCategory(id) {
  const cat = CATEGORIES.find((c) => c.id === id);
  if (!cat) return renderNotFound();
  document.title = `${cat.name} · Rețetele mele`;
  const list = RECIPES.filter((r) => r.category === id);

  app.innerHTML = `
    <nav class="crumbs"><a href="#/">← Toate categoriile</a></nav>
    <h1>${cat.emoji} ${esc(cat.name)}</h1>
    <p style="color:var(--muted)">${esc(cat.blurb)} · ${countLabel(list.length)}</p>
    ${list.length
      ? `<div class="grid">${list.map(recipeCard).join("")}</div>`
      : `<div class="empty">Încă nu sunt rețete aici.</div>`}
  `;
  window.scrollTo(0, 0);
}

function renderRecipe(id) {
  const r = RECIPES.find((x) => x.id === id);
  if (!r) return renderNotFound();
  const cat = CATEGORIES.find((c) => c.id === r.category);
  document.title = `${r.title} · Rețetele mele`;

  let servings = r.servings || 1;

  app.innerHTML = `
    <nav class="crumbs">
      <a href="#/">Acasă</a> /
      ${cat ? `<a href="#/categorie/${cat.id}">${esc(cat.name)}</a>` : ""}
    </nav>

    <header class="recipe-head">
      <h1>${esc(r.title)}</h1>
      <p class="desc">${esc(r.description)}</p>
      <div class="meta">
        ${r.prepMin ? `<span class="pill">Pregătire ${r.prepMin} min</span>` : ""}
        ${r.cookMin ? `<span class="pill">Gătire ${r.cookMin} min</span>` : ""}
        ${(r.tags || []).map((t) => `<span class="pill">${esc(t)}</span>`).join("")}
      </div>
    </header>

    <div class="recipe-body">
      <aside class="panel ingredients">
        <h2>Ingrediente</h2>
        <div class="servings">
          <button type="button" id="minus" aria-label="Mai puține porții">−</button>
          <strong id="count"></strong>
          <span>${esc(r.servingsLabel || "porții")}</span>
          <button type="button" id="plus" aria-label="Mai multe porții">+</button>
        </div>
        <div id="ing-list"></div>
      </aside>

      <section>
        <div class="panel">
          <h2>Mod de preparare</h2>
          <ol class="steps">
            ${r.steps.map((s) => `<li><strong>${esc(s.title)}</strong>${esc(s.text)}</li>`).join("")}
          </ol>
        </div>

        ${r.notes?.length ? `
          <div class="panel notes" style="margin-top:24px">
            <h2>Note</h2>
            <ul>${r.notes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>
          </div>` : ""}

        ${r.source ? `
          <p class="source">Sursă: <a href="${esc(r.source.url)}" target="_blank" rel="noopener">${esc(r.source.name)}</a></p>` : ""}
      </section>
    </div>
  `;

  const drawIngredients = () => {
    const factor = servings / (r.servings || 1);
    document.getElementById("count").textContent = servings;
    document.getElementById("ing-list").innerHTML = r.ingredients.map((g) => `
      <div class="ing-group">
        ${g.group ? `<h3>${esc(g.group)}</h3>` : ""}
        <ul>${g.items.map((i) => `
          <li><label>
            <input type="checkbox">
            <span>${i.qty != null ? `<span class="qty">${formatQty(i.qty * factor)}${i.unit ? " " + esc(i.unit) : ""}</span> ` : ""}${esc(i.name)}</span>
          </label></li>`).join("")}
        </ul>
      </div>`).join("");
  };

  document.getElementById("minus").onclick = () => { if (servings > 1) { servings--; drawIngredients(); } };
  document.getElementById("plus").onclick = () => { servings++; drawIngredients(); };

  drawIngredients();
  window.scrollTo(0, 0);
}

function renderNotFound() {
  document.title = "Nu am găsit · Rețetele mele";
  app.innerHTML = `
    <nav class="crumbs"><a href="#/">← Acasă</a></nav>
    <div class="empty">Pagina nu există.</div>`;
}

/* ---------- Router ---------- */

function route() {
  const [, page, id] = location.hash.replace(/^#/, "").split("/");
  if (page === "categorie" && id) return renderCategory(id);
  if (page === "reteta" && id) return renderRecipe(id);
  renderHome();
}

window.addEventListener("hashchange", route);
route();
