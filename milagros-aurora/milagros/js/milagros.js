// MILAGROS — CATALOG DATA & LOGIC (100% STANDALONE)
const milagrosCatalog = [
  {
    id: "M-01",
    name: "Hoodie Heavy 'La Luz que no Supimos Ver'",
    tagline: "Prenda Insignia // Amar y Ser Amado",
    category: "hoodies",
    printfulModel: "Stanley/Stella Cultivator 2.0 (STSU857)",
    printfulSpecs: "DTG Pecho 10\"×12\" + Espalda 12\"×16\" + Bordado Manga 2.5\"×1.2\"",
    frontArtTitle: "Eclipse de Conexión & Hilo Dorado",
    frontArtDesc: "Silueta solitaria mirando la sombra del eclipse, conectada por un fino filamento dorado hacia la estrella que nunca dejó de brillar.",
    quote: "Caminamos ciegos creyendo que el tiempo era eterno. Perdimos lo único que importaba: amar y dejarse amar.",
    cuffMessage: "Ama hoy. Mira hoy.",
    neckMessage: "Dedicado a Milagros. Línea 024 disponible 24/7.",
    price: 74.0,
    material: "400 g/m² Heavy French Terry - 100% Algodón Orgánico",
    artType: "eclipse",
    description: "Inspirada en el dolor de haber perdido a mi madre por esa ignorancia involuntaria que nos distrae de lo único fundamental: amar a tiempo."
  },
  {
    id: "M-02",
    name: "Sudadera Crewneck 'El Abrazo Gravitacional'",
    tagline: "Soporte Emocional & Caída Libre",
    category: "crewnecks",
    printfulModel: "Stanley/Stella Radder (STSU823)",
    printfulSpecs: "DTG Pecho 12\"×16\" + Espalda 12\"×16\" + Bordado Muñeca 2.5\"×1.2\"",
    frontArtTitle: "Manos Cósmicas & Núcleo Frágil",
    frontArtDesc: "Líneas de polvo estelar sosteniendo suavemente un planeta en calma sin apretarlo.",
    quote: "No tienes que ser fuerte hoy. Deja que la gravedad te sostenga un rato mientras pasa el dolor.",
    cuffMessage: "Suelto el peso.",
    neckMessage: "No estás solo en este cuadrante.",
    price: 58.0,
    material: "350 g/m² Cuello Redondo - 85% Algodón orgánico peinado",
    artType: "hands-planet",
    description: "Corte streetwear con hombro caído y cuello acanalado grueso. Diseñada para dar contención y descanso."
  },
  {
    id: "M-03",
    name: "Camiseta Boxy Heavy 'Reloj de Polvo Estelar'",
    tagline: "Pausa & Reconexión",
    category: "tees",
    printfulModel: "Shaka Wear SHMHSS / Stanley/Stella Freestyler",
    printfulSpecs: "DTG Frontal 12\"×16\" + Espalda 12\"×16\" + Bordado Manga 2.5\"×1.2\"",
    frontArtTitle: "Reloj de Arena Cósmico",
    frontArtDesc: "Reloj de arena cósmico donde las partículas flotan ingrávidas sin prisa por caer.",
    quote: "Haberte perdido me enseñó a mirar a los que aún están aquí. El tiempo es el único regalo.",
    cuffMessage: "Inhala paz.",
    neckMessage: "Salud Mental // Milagros.",
    price: 36.0,
    material: "240 g/m² Heavyweight Streetwear Cotton - Cuello grueso 1 pulgada",
    artType: "hourglass",
    description: "Camiseta de estructura pesada y corte cuadrado. La caída rígida streetwear aporta presencia y protección."
  },
  {
    id: "M-04",
    name: "Camiseta Manga Larga 'Gravedad en Calma'",
    tagline: "Anclaje & Respiración",
    category: "longsleeves",
    printfulModel: "Stanley/Stella Shifter (STTU824)",
    printfulSpecs: "DTG Frontal 12\"×16\" + Espalda 12\"×16\" + Bordado Puño Elástico 2.5\"×1.2\"",
    frontArtTitle: "Malla de Espacio-Tiempo",
    frontArtDesc: "Curvatura estelar demostrando que la Tierra cuida nuestros pies aun cuando sentimos caer al vacío.",
    quote: "La noche más oscura del universo también tiene fecha de caducidad. Sostén la respiración.",
    cuffMessage: "Un día a la vez.",
    neckMessage: "Línea 024 Prevención del Suicidio.",
    price: 42.0,
    material: "200 g/m² Algodón Peinado Ringspun - Puños elásticos acanalados 1x1",
    artType: "spacetime",
    description: "Prenda de transición para llevar bajo capas. Los puños ajustados mantienen el micro-lema siempre a la vista."
  },
  {
    id: "M-05",
    name: "Chaqueta Zip Hoodie 'El Filamento de Oro'",
    tagline: "Conexión & Reparación",
    category: "ziphoodies",
    printfulModel: "Stanley/Stella Canyon (STSU858)",
    printfulSpecs: "DTG Frontal Dividido + Espalda 12\"×16\" + Bordado Manga 2.5\"×1.2\"",
    frontArtTitle: "Constelación Dual & Cremallera Metálica",
    frontArtDesc: "Constelación dividida en dos mitades a los lados de la cremallera que se unen al subir el tirador metálico.",
    quote: "Si el dolor te apaga la voz, que tu ropa hable por ti: estás a salvo y hay quien te espera.",
    cuffMessage: "Hay luz adelante.",
    neckMessage: "Refugio Cósmico // Milagros.",
    price: 78.0,
    material: "350 g/m² French Terry - Cremallera metálica YKK y tirador ergonómico",
    artType: "zip-filaments",
    description: "Sudadera versátil de apertura frontal. El bordado en el puño elegido actúa como amuleto táctil al extender el brazo."
  }
];

// State
let activeCategory = "all";
let cart = [];
let garmentViews = {};
let selectedArms = {};
let customCuffActive = {}; // id -> boolean
let customCuffTexts = {};  // id -> string

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getActiveCuffMessage(id) {
  const item = milagrosCatalog.find(p => p.id === id);
  if (!item) return "";
  if (customCuffActive[id] && customCuffTexts[id] && customCuffTexts[id].trim() !== "") {
    return customCuffTexts[id].trim();
  }
  return item.cuffMessage;
}

function isCustomCuff(id) {
  return !!(customCuffActive[id] && customCuffTexts[id] && customCuffTexts[id].trim() !== "");
}

// DOM Elements
const productsContainer = document.getElementById("milagros-products");
const cartBadge = document.getElementById("cart-badge");
const cartDrawer = document.getElementById("cart-drawer");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const donationTotal = document.getElementById("donation-total");

// Front Artwork Renderer for Milagros
function renderMilagrosArtwork(item) {
  const accent = "#c4b5fd";
  if (item.artType === "eclipse") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <circle cx="5" cy="-8" r="16" fill="${accent}" opacity="0.2" />
        <circle cx="0" cy="-6" r="15" fill="#0b0c16" stroke="${accent}" stroke-width="1.2" />
        <path d="M12 -18 C16 -12, 18 -6, 17 2" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" fill="none" />
        <path d="M0 9 Q4 22, -4 28" stroke="#fbbf24" stroke-dasharray="2,2" stroke-width="1.2" fill="none" />
        <circle cx="-4" cy="30" r="2.5" fill="${accent}" />
      </g>
    `;
  } else if (item.artType === "hands-planet") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <circle cx="0" cy="-6" r="14" fill="${accent}" opacity="0.15" />
        <circle cx="0" cy="-6" r="10" stroke="${accent}" stroke-width="1.2" />
        <path d="M-18 6 C-14 -12, -2 -18, 0 -18 C2 -18, 14 -12, 18 6" stroke="${accent}" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <path d="M-22 10 C-12 18, 12 18, 22 10" stroke="${accent}" stroke-width="1.2" stroke-linecap="round" fill="none" />
      </g>
    `;
  } else if (item.artType === "hourglass") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <polygon points="-12,-16 12,-16 0,-2 12,12 -12,12 0,-2" stroke="${accent}" stroke-width="1.5" fill="none" />
        <circle cx="0" cy="-7" r="1.5" fill="#fff" />
        <circle cx="2" cy="5" r="1.5" fill="${accent}" />
      </g>
    `;
  } else if (item.artType === "spacetime") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <ellipse cx="0" cy="-6" rx="22" ry="12" stroke="${accent}" stroke-dasharray="3,3" stroke-width="1.2" fill="none" />
        <line x1="-22" y1="-6" x2="22" y2="-6" stroke="${accent}" stroke-width="1" />
        <line x1="0" y1="-18" x2="0" y2="6" stroke="${accent}" stroke-width="1" />
        <circle cx="0" cy="-6" r="5" fill="#fbbf24" />
      </g>
    `;
  } else {
    // zip-filaments
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <circle cx="-14" cy="-8" r="8" stroke="${accent}" stroke-width="1.2" fill="none" />
        <circle cx="14" cy="-8" r="8" stroke="${accent}" stroke-width="1.2" fill="none" />
        <line x1="-14" y1="-8" x2="-2" y2="-8" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round" />
        <line x1="2" y1="-8" x2="14" y2="-8" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round" />
        <circle cx="-14" cy="-8" r="3" fill="#fbbf24" />
        <circle cx="14" cy="-8" r="3" fill="#fbbf24" />
      </g>
    `;
  }
}

// SVG Mockup Generator for 5 Distinct Printful Garments
function generateMilagrosSVG(item, view = 'front', chosenArm = 'left', customPhrase = null) {
  const accent = "#c4b5fd";
  const garmentColor = "#141624";
  const cat = item.category;
  const isFront = view === 'front';
  const isLeftCuff = chosenArm === 'left';

  const effectivePhrase = (customPhrase !== null && customPhrase !== undefined && customPhrase.trim() !== '') 
    ? customPhrase.trim() 
    : getActiveCuffMessage(item.id);
  const displayCuffText = effectivePhrase.length > 14 ? effectivePhrase.substring(0, 13) + '…' : effectivePhrase;

  // Render Garment Silhouette by Category
  let silhouette = '';

  if (cat === 'hoodies') {
    // Heavyweight Pullover Hoodie (Cultivator 2.0)
    silhouette = `
      <path d="M75 60 C85 45, 155 45, 165 60 L210 100 L185 130 L165 110 L165 205 C165 210, 160 215, 155 215 L85 215 C80 215, 75 210, 75 205 L75 110 L55 130 L30 100 Z" fill="${garmentColor}" stroke="rgba(196,181,253,0.22)" stroke-width="1.8" />
      ${isFront ? `
        <path d="M85 55 C85 25, 155 25, 155 55 C145 70, 95 70, 85 55 Z" fill="#1f2334" stroke="rgba(196,181,253,0.2)" />
        <line x1="110" y1="62" x2="108" y2="88" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round" />
        <line x1="130" y1="62" x2="132" y2="88" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round" />
        <path d="M90 155 L150 155 L142 198 L98 198 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(196,181,253,0.15)" />
        ${renderMilagrosArtwork(item)}
      ` : `
        <path d="M85 50 C85 30, 155 30, 155 50 C145 60, 95 60, 85 50 Z" fill="#181a28" stroke="rgba(196,181,253,0.15)" />
      `}
    `;
  } else if (cat === 'crewnecks') {
    // Crewneck Sweatshirt (Radder 350g)
    silhouette = `
      <path d="M75 58 C85 48, 155 48, 165 58 L210 98 L185 128 L165 110 L165 204 C165 208, 160 212, 155 212 L85 212 C80 212, 75 208, 75 204 L75 110 L55 128 L30 98 Z" fill="${garmentColor}" stroke="rgba(196,181,253,0.22)" stroke-width="1.8" />
      <rect x="75" y="200" width="90" height="12" rx="2" fill="#1b1e2e" stroke="rgba(196,181,253,0.18)" />
      ${isFront ? `
        <!-- Ribbed Circular Crewneck Collar & V-notch -->
        <path d="M96 48 C104 60, 136 60, 144 48 C136 55, 104 55, 96 48 Z" fill="#1b1e2e" stroke="rgba(196,181,253,0.3)" />
        <polygon points="116,55 124,55 120,62" fill="none" stroke="rgba(196,181,253,0.35)" />
        ${renderMilagrosArtwork(item)}
      ` : `
        <path d="M96 48 C104 53, 136 53, 144 48" stroke="rgba(196,181,253,0.2)" stroke-width="2" fill="none" />
      `}
    `;
  } else if (cat === 'tees') {
    // Heavyweight Boxy Tee (Freestyler 240g)
    silhouette = `
      <path d="M80 50 C95 40, 145 40, 160 50 L205 85 L180 115 L160 100 L160 210 C160 215, 155 218, 150 218 L90 218 C85 218, 80 215, 80 210 L80 100 L60 115 L35 85 Z" fill="${garmentColor}" stroke="rgba(196,181,253,0.22)" stroke-width="1.8" />
      ${isFront ? `
        <path d="M98 46 C105 58, 135 58, 142 46" stroke="rgba(196,181,253,0.3)" stroke-width="2.5" fill="none" />
        ${renderMilagrosArtwork(item)}
      ` : `
        <path d="M98 46 C105 50, 135 50, 142 46" stroke="rgba(196,181,253,0.2)" stroke-width="2" fill="none" />
      `}
    `;
  } else if (cat === 'longsleeves') {
    // Long Sleeve Tee (Shifter 200g)
    silhouette = `
      <path d="M80 50 C95 42, 145 42, 160 50 L212 95 L188 125 L165 110 L165 210 C165 215, 155 218, 150 218 L90 218 C85 218, 80 215, 80 210 L80 110 L52 125 L28 95 Z" fill="${garmentColor}" stroke="rgba(196,181,253,0.22)" stroke-width="1.8" />
      <rect x="24" y="93" width="10" height="12" rx="2" fill="#1b1e2e" stroke="rgba(196,181,253,0.2)" />
      <rect x="206" y="93" width="10" height="12" rx="2" fill="#1b1e2e" stroke="rgba(196,181,253,0.2)" />
      ${isFront ? `
        <path d="M100 47 C106 57, 134 57, 140 47" stroke="rgba(196,181,253,0.3)" stroke-width="2" fill="none" />
        ${renderMilagrosArtwork(item)}
      ` : `
        <path d="M100 47 C106 51, 134 51, 140 47" stroke="rgba(196,181,253,0.2)" stroke-width="1.8" fill="none" />
      `}
    `;
  } else {
    // Zip Hoodie (Canyon 350g)
    silhouette = `
      <path d="M75 60 C85 45, 155 45, 165 60 L210 100 L185 130 L165 110 L165 205 C165 210, 160 215, 155 215 L85 215 C80 215, 75 210, 75 205 L75 110 L55 130 L30 100 Z" fill="${garmentColor}" stroke="rgba(196,181,253,0.22)" stroke-width="1.8" />
      ${isFront ? `
        <path d="M85 55 C85 25, 155 25, 155 55 C145 70, 95 70, 85 55 Z" fill="#1f2334" stroke="rgba(196,181,253,0.2)" />
        <!-- Full Metallic Zipper -->
        <line x1="120" y1="64" x2="120" y2="215" stroke="#fbbf24" stroke-width="1.8" />
        <rect x="118" y="72" width="4" height="7" rx="1" fill="#fbbf24" />
        <!-- Split Kangaroo Pockets -->
        <path d="M92 160 L116 160 L116 198 L98 198 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(196,181,253,0.15)" />
        <path d="M124 160 L148 160 L142 198 L124 198 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(196,181,253,0.15)" />
        ${renderMilagrosArtwork(item)}
      ` : `
        <path d="M85 50 C85 30, 155 30, 155 50 C145 60, 95 60, 85 50 Z" fill="#181a28" stroke="rgba(196,181,253,0.15)" />
      `}
    `;
  }

  // Back Framed Quote (Legible & Protected below collar)
  const backFramedQuote = `
    <g transform="translate(120, 115)" text-anchor="middle">
      <rect x="-65" y="-38" width="130" height="76" rx="8" fill="rgba(255,255,255,0.02)" stroke="${accent}" stroke-width="0.8" stroke-dasharray="3,3" />
      <circle cx="0" cy="-38" r="3" fill="#fbbf24" />
      <circle cx="0" cy="38" r="3" fill="#fbbf24" />
      <text y="-14" fill="#ffffff" font-size="7.5" font-weight="700" font-family="'Plus Jakarta Sans', sans-serif">
        “${item.quote.substring(0, 32)}
      </text>
      <text y="2" fill="#ffffff" font-size="7.5" font-weight="700" font-family="'Plus Jakarta Sans', sans-serif">
        ${item.quote.substring(32, 68)}
      </text>
      <text y="18" fill="#ffffff" font-size="7.5" font-weight="700" font-family="'Plus Jakarta Sans', sans-serif">
        ${item.quote.substring(68, 105)}...”
      </text>
      <text y="30" fill="${accent}" font-size="5" font-family="'Space Mono', monospace" letter-spacing="1.2">
        ✦ MILAGROS // PRINTFUL POD ✦
      </text>
    </g>
  `;

  // Chosen Arm Cuff Highlight
  const isSleeveLong = cat === 'hoodies' || cat === 'crewnecks' || cat === 'longsleeves' || cat === 'ziphoodies';
  const leftX = isSleeveLong ? 42 : 48;
  const leftY = isSleeveLong ? 115 : 110;
  const rightX = isSleeveLong ? 198 : 192;
  const rightY = isSleeveLong ? 115 : 110;
  const sleeveLabel = isSleeveLong ? (isLeftCuff ? '👈 PUÑO IZQ.' : '👉 PUÑO DER.') : (isLeftCuff ? '👈 MANGA IZQ.' : '👉 MANGA DER.');

  const cuffBadge = isLeftCuff ? `
    <g transform="translate(${leftX}, ${leftY})">
      <circle cx="0" cy="0" r="7" fill="${accent}" opacity="0.3" />
      <circle cx="0" cy="0" r="4" fill="#fbbf24" />
      <rect x="-42" y="8" width="68" height="22" rx="4" fill="#0b0c16" stroke="${accent}" stroke-width="1" />
      <text x="-8" y="17" fill="#c4b5fd" font-size="4.2" font-family="'Space Mono', monospace" font-weight="bold" text-anchor="middle">${sleeveLabel}</text>
      <text x="-8" y="25" fill="#fbbf24" font-size="4.3" font-family="'Space Mono', monospace" font-weight="bold" text-anchor="middle">“${displayCuffText}”</text>
    </g>
  ` : `
    <g transform="translate(${rightX}, ${rightY})">
      <circle cx="0" cy="0" r="7" fill="${accent}" opacity="0.3" />
      <circle cx="0" cy="0" r="4" fill="#fbbf24" />
      <rect x="-26" y="8" width="68" height="22" rx="4" fill="#0b0c16" stroke="${accent}" stroke-width="1" />
      <text x="8" y="17" fill="#c4b5fd" font-size="4.2" font-family="'Space Mono', monospace" font-weight="bold" text-anchor="middle">${sleeveLabel}</text>
      <text x="8" y="25" fill="#fbbf24" font-size="4.3" font-family="'Space Mono', monospace" font-weight="bold" text-anchor="middle">“${displayCuffText}”</text>
    </g>
  `;

  return `
    <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad-m-${item.id}-${view}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.18" />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="120" r="95" fill="url(#grad-m-${item.id}-${view})" />

      ${silhouette}
      ${!isFront ? backFramedQuote : ''}
      ${cuffBadge}

      <text x="215" y="225" fill="rgba(255,255,255,0.35)" font-size="6.5" font-family="'Space Mono', monospace" text-anchor="end">
        ${isFront ? 'VISTA FRONTAL (ARTE)' : 'VISTA ESPALDA (FRASE)'}
      </text>
    </svg>
  `;
}

// Render Milagros Catalog
function renderMilagrosProducts() {
  if (!productsContainer) return;
  const filtered = activeCategory === "all" 
    ? milagrosCatalog 
    : milagrosCatalog.filter(p => p.category === activeCategory);

  productsContainer.innerHTML = filtered.map(item => {
    const currentView = garmentViews[item.id] || 'front';
    const chosenArm = selectedArms[item.id] || 'left';
    const isMemorial = item.id === "M-00";
    const isCustom = customCuffActive[item.id] || false;
    const customText = customCuffTexts[item.id] || "";
    const effectiveCuff = getActiveCuffMessage(item.id);

    return `
      <article class="product-card" style="${isMemorial ? 'border-color: rgba(196,181,253,0.4); box-shadow: 0 0 25px rgba(196,181,253,0.15);' : ''}">
        <span class="product-badge">${isMemorial ? '★ PRENDA INSIGNIA' : item.id + ' // ' + item.category.toUpperCase()}</span>

        <button class="flip-view-btn" onclick="toggleView(event, '${item.id}')">
          🔄 ${currentView === 'front' ? 'Ver Frase Espalda' : 'Ver Arte Frente'}
        </button>

        <div class="product-media" id="product-media-${item.id}" onclick="openMilagrosModal('${item.id}')">
          ${generateMilagrosSVG(item, currentView, chosenArm, effectiveCuff)}
        </div>

        <div class="product-content">
          <span class="product-tagline">${item.tagline}</span>
          <h3 class="product-name" onclick="openMilagrosModal('${item.id}')" style="cursor: pointer;">${item.name}</h3>
          
          <!-- Printful Technical Base Tag -->
          <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(196,181,253,0.08); border: 1px solid rgba(196,181,253,0.25); padding: 4px 8px; border-radius: 4px; font-size: 0.72rem; font-family: 'Space Mono', monospace; color: var(--milagros-lavender); margin-bottom: 8px;">
            <span>🧵 <strong>Printful:</strong> ${item.printfulModel}</span>
          </div>

          <div style="font-size: 0.78rem; color: var(--milagros-muted); margin-bottom: 8px;">
            <strong style="color: #fff;">Arte Frontal:</strong> ${item.frontArtTitle}
          </div>

          <div class="quote-highlight">
            “${item.quote}”
          </div>

          <!-- Arm / Wrist Selector -->
          <div class="wrist-selector-box">
            <div class="wrist-selector-label">📍 Muñeca de Confort / Anclaje:</div>
            <div class="wrist-options">
              <button type="button" onclick="setArm(event, '${item.id}', 'left')" class="wrist-btn ${chosenArm === 'left' ? 'active' : ''}">
                👈 Brazo Izquierdo (Reloj)
              </button>
              <button type="button" onclick="setArm(event, '${item.id}', 'right')" class="wrist-btn ${chosenArm === 'right' ? 'active' : ''}">
                👉 Brazo Derecho (Hábil)
              </button>
            </div>

            <!-- Custom Cuff Phrase Option -->
            <div class="cuff-custom-toggle-wrap">
              <div class="cuff-mode-options">
                <label class="cuff-mode-label ${!isCustom ? 'active' : ''}">
                  <input type="radio" name="cuff-opt-${item.id}" value="preset" ${!isCustom ? 'checked' : ''} onchange="toggleCustomCuff('${item.id}', false)">
                  <span>Frase original: <strong style="color:var(--milagros-gold);">“${item.cuffMessage}”</strong></span>
                </label>
                <label class="cuff-mode-label ${isCustom ? 'active' : ''}">
                  <input type="radio" name="cuff-opt-${item.id}" value="custom" ${isCustom ? 'checked' : ''} onchange="toggleCustomCuff('${item.id}', true)">
                  <span>✍️ Personalizar con tu propia frase</span>
                </label>
              </div>

              ${isCustom ? `
                <div class="cuff-input-container">
                  <input type="text" id="cuff-input-${item.id}" maxlength="22" class="cuff-text-input" 
                         placeholder="Escribe tu microfrase (máx 22 caracteres)" 
                         value="${escapeHtml(customText)}" 
                         oninput="updateCustomCuffText('${item.id}', this.value)">
                  <span id="char-count-${item.id}" class="cuff-char-limit">${customText.length}/22</span>
                </div>
                <span class="cuff-preview-badge">
                  Bordado en hilo dorado: <strong id="preview-text-${item.id}">“${escapeHtml(effectiveCuff)}”</strong>
                </span>
              ` : `
                <span class="cuff-preview-badge">
                  Bordado oficial en hilo dorado: <strong>“${item.cuffMessage}”</strong>
                </span>
              `}
            </div>
          </div>

          <div class="product-footer">
            <div>
              <div class="product-price">${item.price.toFixed(2)} €</div>
              <div style="font-size: 0.72rem; color: var(--milagros-muted);">Algodón Orgánico · POD Ético</div>
            </div>
            <button class="btn-primary" style="padding: 8px 18px; font-size: 0.85rem;" onclick="addToMilagrosCart('${item.id}')">
              + Añadir
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function toggleView(e, id) {
  e.stopPropagation();
  garmentViews[id] = garmentViews[id] === 'back' ? 'front' : 'back';
  renderMilagrosProducts();
}

function setArm(e, id, arm) {
  e.stopPropagation();
  selectedArms[id] = arm;
  renderMilagrosProducts();
}

function toggleCustomCuff(id, isCustom) {
  customCuffActive[id] = isCustom;
  if (isCustom && customCuffTexts[id] === undefined) {
    customCuffTexts[id] = "";
  }
  renderMilagrosProducts();
  if (isCustom) {
    const input = document.getElementById(`cuff-input-${id}`);
    if (input) input.focus();
  }
}

function updateCustomCuffText(id, text) {
  customCuffTexts[id] = text.slice(0, 22);
  const item = milagrosCatalog.find(p => p.id === id);
  if (!item) return;
  const currentView = garmentViews[id] || 'front';
  const chosenArm = selectedArms[id] || 'left';
  const effective = getActiveCuffMessage(id);

  // Smooth real-time update of mockup SVG
  const mediaWrap = document.getElementById(`product-media-${id}`);
  if (mediaWrap) {
    mediaWrap.innerHTML = generateMilagrosSVG(item, currentView, chosenArm, effective);
  }
  // Smooth update of char counter
  const charCounter = document.getElementById(`char-count-${id}`);
  if (charCounter) {
    charCounter.textContent = `${text.length}/22`;
  }
  // Smooth update of preview text
  const previewText = document.getElementById(`preview-text-${id}`);
  if (previewText) {
    previewText.textContent = `“${effective}”`;
  }
}

function filterMilagros(cat) {
  activeCategory = cat;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  const btn = document.getElementById(`filter-${cat}`);
  if (btn) btn.classList.add("active");
  renderMilagrosProducts();
}

// Cart Functions
function addToMilagrosCart(id) {
  const item = milagrosCatalog.find(p => p.id === id);
  if (!item) return;
  const chosenArm = selectedArms[id] || 'left';
  const armLabel = chosenArm === 'left' ? 'Brazo Izquierdo (Reloj)' : 'Brazo Derecho (Hábil)';
  const isCustom = isCustomCuff(id);
  const effectiveCuff = getActiveCuffMessage(id);

  const existing = cart.find(i => i.id === id && i.selectedArm === chosenArm && i.effectiveCuff === effectiveCuff);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      ...item,
      quantity: 1,
      selectedSize: "L",
      selectedArm: chosenArm,
      armLabel: armLabel,
      isCustomCuff: isCustom,
      effectiveCuff: effectiveCuff
    });
  }

  updateMilagrosCartUI();
  openCart();
}

function updateMilagrosCartUI() {
  const count = cart.reduce((acc, i) => acc + i.quantity, 0);
  if (cartBadge) cartBadge.textContent = count;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--milagros-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 8px;">Tu bolsa de refugio está vacía.</p>
        <p style="font-size: 0.85rem;">Explora las prendas de Milagros y elige en qué muñeca llevar tu frase.</p>
      </div>
    `;
    cartTotal.textContent = "0.00 €";
    donationTotal.textContent = "0.00 €";
    return;
  }

  let total = 0;
  cartItems.innerHTML = cart.map((item, idx) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    return `
      <div style="display: flex; gap: 14px; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
        <div style="width: 60px; height: 60px; background: #0f111c; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
          ${generateMilagrosSVG(item, 'front', item.selectedArm, item.effectiveCuff)}
        </div>
        <div style="flex-grow: 1;">
          <h4 style="font-size: 0.88rem; font-weight: 700;">${item.name}</h4>
          <div style="font-size: 0.75rem; color: var(--milagros-lavender);">📍 ${item.armLabel}</div>
          <div style="font-size: 0.73rem; color: #fbbf24;">
            ${item.isCustomCuff ? '✍️ Frase Personal:' : '✦ Frase Catálogo:'} <strong>“${item.effectiveCuff}”</strong>
          </div>
          <div style="font-size: 0.85rem; font-weight: 700; margin-top: 4px;">${subtotal.toFixed(2)} €</div>
        </div>
        <div>
          <button onclick="removeMilagrosItemByIndex(${idx})" style="background:none; border:none; color:#ef4444; cursor:pointer;">✕</button>
        </div>
      </div>
    `;
  }).join("");

  cartTotal.textContent = `${total.toFixed(2)} €`;
  donationTotal.textContent = `${(total * 0.10).toFixed(2)} €`;
}

function removeMilagrosItemByIndex(index) {
  cart.splice(index, 1);
  updateMilagrosCartUI();
}

function toggleCart() { cartDrawer.classList.toggle("open"); }
function openCart() { cartDrawer.classList.add("open"); }
function closeCart() { cartDrawer.classList.remove("open"); }

// Direct Checkout (Without Shopify)
function openMilagrosCheckout() {
  if (cart.length === 0) { alert("Tu bolsa está vacía."); return; }
  closeCart();
  const total = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
  document.getElementById("checkout-amount-display").textContent = `${total.toFixed(2)} €`;
  document.getElementById("checkout-donation-display").textContent = `${(total * 0.10).toFixed(2)} €`;
  openModal("custom-checkout-modal");
}

function processMilagrosOrder(e) {
  e.preventDefault();
  const name = document.getElementById("cust-name").value;
  const email = document.getElementById("cust-email").value;
  const address = document.getElementById("cust-address").value;
  const city = document.getElementById("cust-city").value;
  const country = document.getElementById("cust-country").value;

  closeModal("custom-checkout-modal");
  const total = cart.reduce((s, i) => s + (i.price * i.quantity), 0);

  document.getElementById("checkout-sim-details").innerHTML = `
    <div style="line-height: 1.7;">
      <div style="background: rgba(196,181,253,0.12); border: 1px solid var(--milagros-lavender); padding: 16px; border-radius: 12px; margin-bottom: 20px;">
        <h4 style="color: var(--milagros-lavender); font-size: 1.1rem; margin-bottom: 4px;">✓ Pedido Confirmado · Milagros</h4>
        <p style="font-size: 0.88rem; color: #e2e8f0;">
          Gracias, <strong>${name}</strong>. Hemos registrado tu pedido con el bordado en tu muñeca elegida.<br>
          Donación asignada a la Línea 024 de Prevención del Suicidio: <strong>${(total * 0.10).toFixed(2)} €</strong>
        </p>
      </div>

      <h4 style="font-size: 0.95rem; margin-bottom: 10px; color: #fff;">Payload Webhook despachado a la API de Printful:</h4>
      <pre style="font-family: monospace; font-size: 0.75rem; background: #0b0d14; padding: 14px; border-radius: 8px; border: 1px solid var(--milagros-border); color: #c4b5fd; overflow-x: auto;">
POST https://api.printful.com/orders
Authorization: Bearer [PRINTFUL_API_KEY]
{
  "recipient": { "name": "${name}", "address1": "${address}", "city": "${city}", "country_code": "${country}" },
  "items": ${JSON.stringify(cart.map(c => ({
    id: c.id,
    name: c.name,
    printful_model: c.printfulModel,
    size: c.selectedSize,
    sleeve_placement: c.selectedArm === 'left' ? 'left_wrist' : 'right_wrist',
    cuff_quote: c.effectiveCuff,
    cuff_quote_type: c.isCustomCuff ? "custom_client_phrase" : "catalog_standard_phrase",
    inside_label: "024 Prevención del Suicidio // Milagros"
  })), null, 2)},
  "packing_slip": { "message": "Gracias por sostener la memoria de Milagros. Lo esencial es amar y ser amado." }
}
      </pre>
    </div>
  `;

  openModal("checkout-sim-modal");
  cart = [];
  updateMilagrosCartUI();
}

// Modal Helpers
function openModal(id) { document.getElementById(id).classList.add("active"); }
function closeModal(id) { document.getElementById(id).classList.remove("active"); }

function openMilagrosModal(id) {
  const item = milagrosCatalog.find(p => p.id === id);
  if (!item) return;
  const chosenArm = selectedArms[id] || 'left';
  const effectiveCuff = getActiveCuffMessage(id);
  const isCustom = isCustomCuff(id);

  document.getElementById("product-modal-body").innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; align-items: center;">
      <div style="background: #0f111e; border-radius: 16px; padding: 20px; text-align: center;">
        <div id="modal-svg-wrap">${generateMilagrosSVG(item, 'front', chosenArm, effectiveCuff)}</div>
      </div>
      <div>
        <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--milagros-lavender); font-weight: 700;">
          MILAGROS // ${item.id}
        </span>
        <h2 style="font-family: var(--font-serif); font-size: 1.6rem; font-weight: 700; margin: 6px 0 10px;">${item.name}</h2>
        
        <!-- Printful Specs Badge in Modal -->
        <div style="background: rgba(196,181,253,0.08); border: 1px solid rgba(196,181,253,0.25); padding: 8px 12px; border-radius: 6px; font-size: 0.76rem; font-family: 'Space Mono', monospace; color: var(--milagros-lavender); margin-bottom: 12px;">
          <div>🧵 <strong>Base Printful:</strong> ${item.printfulModel}</div>
          <div style="color: #cbd5e1; margin-top: 3px;">📐 <strong>Lienzos DTG & Bordado:</strong> ${item.printfulSpecs}</div>
        </div>

        <p style="color: var(--milagros-muted); font-size: 0.9rem; margin-bottom: 14px;">${item.description}</p>
        
        <div class="quote-highlight">
          “${item.quote}”
          <div style="font-size: 0.74rem; color: var(--milagros-gold); margin-top: 4px;">
            ✦ Microfrase seleccionada (${chosenArm === 'left' ? 'Puño Izquierdo' : 'Puño Derecho'}): <strong>“${effectiveCuff}”</strong> ${isCustom ? '(Personalizada)' : ''}
          </div>
        </div>

        <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center;">
          <div class="product-price">${item.price.toFixed(2)} €</div>
          <button class="btn-primary" onclick="addToMilagrosCart('${item.id}'); closeModal('product-modal');">
            Añadir a la Bolsa
          </button>
        </div>
      </div>
    </div>
  `;
  openModal("product-modal");
}

// Subtle Milagros Star Canvas
function initMilagrosCanvas() {
  const canvas = document.getElementById("milagros-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  for (let i = 0; i < 140; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      a: Math.random() * 0.7 + 0.2,
      v: Math.random() * 0.12 + 0.03
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.y -= s.v;
      if (s.y < 0) { s.y = canvas.height; s.x = Math.random() * canvas.width; }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(196, 181, 253, ${s.a})`;
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

window.addEventListener("DOMContentLoaded", () => {
  initMilagrosCanvas();
  renderMilagrosProducts();
});
