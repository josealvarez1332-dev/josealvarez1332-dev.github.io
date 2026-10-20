// AURORA — CATALOG DATA & LOGIC (100% STANDALONE)
const auroraCatalog = [
  {
    id: "A-01",
    name: "Hoodie Heavy 'El Ojo de la Supernova'",
    tagline: "Prenda Insignia // Resiliencia & Supernova",
    category: "hoodies",
    printfulModel: "Stanley/Stella Cultivator 2.0 (STSU857)",
    printfulSpecs: "DTG Pecho 10\"×12\" + Espalda 12\"×16\" + Bordado Antebrazo 2.5\"×1.2\"",
    frontArtTitle: "Onda de Choque & Núcleo Denso",
    frontArtDesc: "Círculo brutalista de dispersión de energía tras el colapso gravitacional con retícula técnica y retención del núcleo.",
    quote: "El colapso no fue el final. Fue la prueba de que el núcleo estaba intacto.",
    cuffMessage: "STATUS: INQUEBRANTABLE",
    neckMessage: "Aurora Unit 01 // Sobreviviente Polar.",
    price: 74.0,
    material: "400 g/m² Heavy Organic Fleece - Capucha doble capa reforzada",
    artType: "supernova",
    description: "Dedicado a mi abuela Aurora, quien vio partir a toda su familia pero se mantuvo erguida como una roca ante el dolor más desgarrador."
  },
  {
    id: "A-02",
    name: "Sudadera Crewneck 'El Escudo Geomagnético'",
    tagline: "Defensa Vectorial & Atmósfera",
    category: "crewnecks",
    printfulModel: "Stanley/Stella Radder (STSU823)",
    printfulSpecs: "DTG Pecho 12\"×16\" + Espalda 12\"×16\" + Bordado Muñeca 2.5\"×1.2\"",
    frontArtTitle: "Campo Magnético Polar",
    frontArtDesc: "Líneas de fuerza geomagnéticas desviando la radiación solar y blindando el interior terrestre del vacío.",
    quote: "La tormenta puede golpear la atmósfera exterior, pero la estructura jamás se quiebra.",
    cuffMessage: "IMPACTO ABSORBIDO",
    neckMessage: "Aurora Defense Unit // 350 GSM.",
    price: 58.0,
    material: "350 g/m² French Terry Peinado - Ribete elástico 1x1 con V-notch",
    artType: "geomagnetic",
    description: "Corte relajado de caída limpia con cuello acanalado reforzado. La armadura para los días de reconstrucción silenciosa."
  },
  {
    id: "A-03",
    name: "Camiseta Boxy Heavy 'El Bólido Atmosférico'",
    tagline: "Cicatrices & Fricción Pura",
    category: "tees",
    printfulModel: "Shaka Wear SHMHSS / Stanley/Stella Freestyler",
    printfulSpecs: "DTG Frontal 12\"×16\" + Espalda 12\"×16\" + Bordado Manga 2.5\"×1.2\"",
    frontArtTitle: "Bólido Atmosférico Incandescente",
    frontArtDesc: "Meteorito atravesando la ionosfera a hipervelocidad: la fricción como prueba de supervivencia y forja.",
    quote: "Golpeados por la fricción. Afilados por el impacto. Hechos de roca que no se rinde.",
    cuffMessage: "CICATRIZ // FUERZA",
    neckMessage: "Aurora Heavyweight // 240 GSM.",
    price: 36.0,
    material: "240 g/m² Heavyweight Boxy Fit - Cuello de 1 pulgada sin costura",
    artType: "meteor",
    description: "Corte boxy urbano de peso contundente. Estructura densa inspirada en la resistencia a la fricción y al desgaste de la vida."
  },
  {
    id: "A-04",
    name: "Camiseta Manga Larga 'El Horizonte Polar 78°N'",
    tagline: "Superación de la Noche Polar",
    category: "longsleeves",
    printfulModel: "Stanley/Stella Shifter (STTU824)",
    printfulSpecs: "DTG Frontal 12\"×16\" + Espalda 12\"×16\" + Bordado Puño 2.5\"×1.2\"",
    frontArtTitle: "Cordillera Ártica & Emisión Boreal",
    frontArtDesc: "Relieve topográfico a 78°N cortado por un haz de luz de aurora boreal esmeralda sobre la noche polar.",
    quote: "Soportaste tres meses de noche polar absoluta. El sol vuelve a levantarse sobre ti.",
    cuffMessage: "AMANECER GANADO",
    neckMessage: "Aurora Arctic Division // 78°N.",
    price: 42.0,
    material: "200 g/m² Algodón Peinado Ringspun - Mangas con puño elástico acanalado 1x1",
    artType: "polar",
    description: "Manga larga táctica con puños ajustados que mantienen el sello de resistencia en contacto permanente con el pulso."
  },
  {
    id: "A-05",
    name: "Chaqueta Zip Hoodie 'Armadura de Fisión'",
    tagline: "Reacción en Cadena & Resistencia",
    category: "ziphoodies",
    printfulModel: "Stanley/Stella Canyon (STSU858)",
    printfulSpecs: "DTG Pecho Dividido + Espalda 12\"×16\" + Bordado Antebrazo 2.5\"×1.2\"",
    frontArtTitle: "Vectores de Fisión & Cremallera Táctica",
    frontArtDesc: "Diagrama vectorial de liberación de energía atómica a ambos lados de la cremallera metálica central.",
    quote: "Dividieron mi entorno, pero liberaron una energía interior que nadie podrá volver a extinguir.",
    cuffMessage: "NÚCLEO ACTIVO",
    neckMessage: "Aurora Tactical Zip // Heavy Fleece.",
    price: 78.0,
    material: "350 g/m² French Terry - Cremallera frontal metálica YKK y bolsillos de parche",
    artType: "fission",
    description: "Chaqueta zip brutalista con cremallera central metálica y capucha estructurada. Diseñada para abrirse o blindarse según la necesidad."
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
  const item = auroraCatalog.find(p => p.id === id);
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
const productsContainer = document.getElementById("aurora-products");
const cartBadge = document.getElementById("cart-badge");
const cartDrawer = document.getElementById("cart-drawer");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const donationTotal = document.getElementById("donation-total");

// Front Artwork Renderer for Aurora
function renderAuroraArtwork(item) {
  const green = "#34d399";
  const cyan = "#38bdf8";

  if (item.artType === "supernova") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <circle cx="0" cy="-6" r="22" stroke="${green}" stroke-dasharray="2,3" stroke-width="0.9" opacity="0.6" />
        <circle cx="0" cy="-6" r="15" stroke="${cyan}" stroke-dasharray="4,2" stroke-width="1.2" />
        <circle cx="0" cy="-6" r="6" fill="${green}" />
        <circle cx="0" cy="-6" r="2" fill="#ffffff" />
        <line x1="-28" y1="-6" x2="-10" y2="-6" stroke="${green}" stroke-width="1.4" />
        <line x1="10" y1="-6" x2="28" y2="-6" stroke="${green}" stroke-width="1.4" />
        <line x1="0" y1="-30" x2="0" y2="-16" stroke="${green}" stroke-width="1.4" />
        <line x1="0" y1="4" x2="0" y2="18" stroke="${green}" stroke-width="1.4" />
        <rect x="-18" y="-24" width="36" height="36" fill="none" stroke="rgba(56,189,248,0.25)" stroke-width="0.8" />
      </g>
    `;
  } else if (item.artType === "geomagnetic") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <ellipse cx="0" cy="-6" rx="24" ry="12" fill="none" stroke="${green}" stroke-width="1.2" stroke-dasharray="3,2" />
        <ellipse cx="0" cy="-6" rx="16" ry="22" fill="none" stroke="${cyan}" stroke-width="1" />
        <circle cx="0" cy="-6" r="7" fill="#080c10" stroke="${green}" stroke-width="1.5" />
        <circle cx="0" cy="-6" r="3" fill="${green}" />
        <path d="M-28 -18 Q-12 -6, -28 6" stroke="${cyan}" stroke-width="1.5" fill="none" />
        <path d="M28 -18 Q12 -6, 28 6" stroke="${cyan}" stroke-width="1.5" fill="none" />
      </g>
    `;
  } else if (item.artType === "meteor") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <polygon points="16,-22 -14,12 -6,14 20,-18" fill="${green}" opacity="0.3" />
        <line x1="22" y1="-26" x2="-12" y2="10" stroke="${green}" stroke-width="2.2" stroke-linecap="round" />
        <circle cx="-12" cy="10" r="6" fill="#080c10" stroke="${cyan}" stroke-width="1.6" />
        <circle cx="-12" cy="10" r="3" fill="#ffffff" />
        <line x1="-18" y1="16" x2="-26" y2="22" stroke="${cyan}" stroke-width="1.2" stroke-dasharray="2,2" />
      </g>
    `;
  } else if (item.artType === "polar") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <path d="M-26 -16 Q-6 -28, 24 -14 Q6 -22, -12 -20 Z" fill="${green}" opacity="0.5" />
        <polygon points="-26,8 -12,-8 0,4 12,-6 26,8" fill="rgba(8,12,16,0.8)" stroke="${cyan}" stroke-width="1.6" />
        <circle cx="12" cy="-6" r="2.5" fill="#ffffff" />
        <line x1="-28" y1="8" x2="28" y2="8" stroke="${green}" stroke-width="1" />
      </g>
    `;
  } else {
    // fission (dual vectors for zip hoodie)
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <circle cx="-15" cy="-6" r="8" stroke="${green}" stroke-width="1.4" fill="none" />
        <circle cx="15" cy="-6" r="8" stroke="${green}" stroke-width="1.4" fill="none" />
        <circle cx="-15" cy="-6" r="3" fill="${cyan}" />
        <circle cx="15" cy="-6" r="3" fill="${cyan}" />
        <line x1="-15" y1="-18" x2="-15" y2="6" stroke="${cyan}" stroke-width="1" stroke-dasharray="2,2" />
        <line x1="15" y1="-18" x2="15" y2="6" stroke="${cyan}" stroke-width="1" stroke-dasharray="2,2" />
        <path d="M-7 -6 L-1 -6 M1 -6 L7 -6" stroke="${green}" stroke-width="1.8" />
      </g>
    `;
  }
}

// SVG Mockup Generator for 5 Distinct Printful Garments
function generateAuroraSVG(item, view = 'front', chosenArm = 'left', customPhrase = null) {
  const green = "#34d399";
  const cyan = "#38bdf8";
  const garmentColor = "#080c10";
  const cat = item.category;
  const isFront = view === 'front';
  const isLeftCuff = chosenArm === 'left';

  const effectivePhrase = (customPhrase !== null && customPhrase !== undefined && customPhrase.trim() !== '') 
    ? customPhrase.trim() 
    : getActiveCuffMessage(item.id);
  const displayCuffText = effectivePhrase.length > 14 ? effectivePhrase.substring(0, 13) + '…' : effectivePhrase;

  // Garment Silhouette by Category
  let silhouette = '';

  if (cat === 'hoodies') {
    // Stanley/Stella Cultivator 2.0 (STSU857)
    silhouette = `
      <path d="M75 60 C85 45, 155 45, 165 60 L210 100 L185 130 L165 110 L165 205 C165 210, 160 215, 155 215 L85 215 C80 215, 75 210, 75 205 L75 110 L55 130 L30 100 Z" fill="${garmentColor}" stroke="rgba(52,211,153,0.3)" stroke-width="1.8" />
      ${isFront ? `
        <!-- Hood Interior & Drawstrings -->
        <path d="M85 55 C85 25, 155 25, 155 55 C145 70, 95 70, 85 55 Z" fill="#0f141a" stroke="rgba(52,211,153,0.25)" />
        <line x1="110" y1="62" x2="108" y2="88" stroke="${green}" stroke-width="1.2" stroke-linecap="round" />
        <line x1="130" y1="62" x2="132" y2="88" stroke="${green}" stroke-width="1.2" stroke-linecap="round" />
        <!-- Kangaroo Pocket -->
        <path d="M90 155 L150 155 L142 198 L98 198 Z" fill="rgba(52,211,153,0.03)" stroke="rgba(52,211,153,0.2)" />
        ${renderAuroraArtwork(item)}
      ` : `
        <path d="M85 50 C85 30, 155 30, 155 50 C145 60, 95 60, 85 50 Z" fill="#0c1015" stroke="rgba(52,211,153,0.2)" />
      `}
    `;
  } else if (cat === 'crewnecks') {
    // Stanley/Stella Radder (STSU823)
    silhouette = `
      <path d="M75 58 C85 48, 155 48, 165 58 L210 98 L185 128 L165 110 L165 204 C165 208, 160 212, 155 212 L85 212 C80 212, 75 208, 75 204 L75 110 L55 128 L30 98 Z" fill="${garmentColor}" stroke="rgba(52,211,153,0.3)" stroke-width="1.8" />
      <rect x="75" y="200" width="90" height="12" rx="2" fill="#0c1015" stroke="rgba(52,211,153,0.25)" />
      ${isFront ? `
        <!-- Ribbed Circular Crewneck Collar & V-notch -->
        <path d="M96 48 C104 60, 136 60, 144 48 C136 55, 104 55, 96 48 Z" fill="#0f141a" stroke="rgba(52,211,153,0.35)" />
        <polygon points="116,55 124,55 120,62" fill="none" stroke="rgba(52,211,153,0.4)" />
        ${renderAuroraArtwork(item)}
      ` : `
        <path d="M96 48 C104 53, 136 53, 144 48" stroke="rgba(52,211,153,0.25)" stroke-width="2" fill="none" />
      `}
    `;
  } else if (cat === 'tees') {
    // Shaka Wear SHMHSS / Stanley/Stella Freestyler (240g Boxy Tee)
    silhouette = `
      <path d="M80 50 C95 40, 145 40, 160 50 L205 85 L180 115 L160 100 L160 210 C160 215, 155 218, 150 218 L90 218 C85 218, 80 215, 80 210 L80 100 L60 115 L35 85 Z" fill="${garmentColor}" stroke="rgba(52,211,153,0.3)" stroke-width="1.8" />
      ${isFront ? `
        <path d="M98 46 C105 58, 135 58, 142 46" stroke="rgba(52,211,153,0.35)" stroke-width="2.5" fill="none" />
        ${renderAuroraArtwork(item)}
      ` : `
        <path d="M98 46 C105 50, 135 50, 142 46" stroke="rgba(52,211,153,0.2)" stroke-width="2" fill="none" />
      `}
    `;
  } else if (cat === 'longsleeves') {
    // Stanley/Stella Shifter (STTU824)
    silhouette = `
      <path d="M80 50 C95 42, 145 42, 160 50 L212 95 L188 125 L165 110 L165 210 C165 215, 155 218, 150 218 L90 218 C85 218, 80 215, 80 210 L80 110 L52 125 L28 95 Z" fill="${garmentColor}" stroke="rgba(52,211,153,0.3)" stroke-width="1.8" />
      <rect x="24" y="93" width="10" height="12" rx="2" fill="#0f141a" stroke="rgba(52,211,153,0.25)" />
      <rect x="206" y="93" width="10" height="12" rx="2" fill="#0f141a" stroke="rgba(52,211,153,0.25)" />
      ${isFront ? `
        <path d="M100 47 C106 57, 134 57, 140 47" stroke="rgba(52,211,153,0.35)" stroke-width="2" fill="none" />
        ${renderAuroraArtwork(item)}
      ` : `
        <path d="M100 47 C106 51, 134 51, 140 47" stroke="rgba(52,211,153,0.2)" stroke-width="1.8" fill="none" />
      `}
    `;
  } else {
    // Stanley/Stella Canyon (STSU858) Zip Hoodie
    silhouette = `
      <path d="M75 60 C85 45, 155 45, 165 60 L210 100 L185 130 L165 110 L165 205 C165 210, 160 215, 155 215 L85 215 C80 215, 75 210, 75 205 L75 110 L55 130 L30 100 Z" fill="${garmentColor}" stroke="rgba(52,211,153,0.3)" stroke-width="1.8" />
      ${isFront ? `
        <path d="M85 55 C85 25, 155 25, 155 55 C145 70, 95 70, 85 55 Z" fill="#0f141a" stroke="rgba(52,211,153,0.25)" />
        <!-- Full Metallic Zipper & Emerald Puller -->
        <line x1="120" y1="64" x2="120" y2="215" stroke="${green}" stroke-width="1.8" />
        <rect x="118" y="72" width="4" height="7" rx="1" fill="${cyan}" />
        <!-- Split Kangaroo Pockets -->
        <path d="M92 160 L116 160 L116 198 L98 198 Z" fill="rgba(52,211,153,0.03)" stroke="rgba(52,211,153,0.2)" />
        <path d="M124 160 L148 160 L142 198 L124 198 Z" fill="rgba(52,211,153,0.03)" stroke="rgba(52,211,153,0.2)" />
        ${renderAuroraArtwork(item)}
      ` : `
        <path d="M85 50 C85 30, 155 30, 155 50 C145 60, 95 60, 85 50 Z" fill="#0c1015" stroke="rgba(52,211,153,0.2)" />
      `}
    `;
  }

  // Back Framed Quote (Legible & Protected below collar)
  const backFramedQuote = `
    <g transform="translate(120, 115)" text-anchor="middle">
      <rect x="-65" y="-38" width="130" height="76" rx="4" fill="rgba(52,211,153,0.03)" stroke="${green}" stroke-width="1" stroke-dasharray="4,2" />
      <text y="-14" fill="#ffffff" font-size="7.2" font-weight="700" font-family="'Space Grotesk', sans-serif">
        “${item.quote.substring(0, 32)}
      </text>
      <text y="2" fill="${green}" font-size="7.2" font-weight="700" font-family="'Space Grotesk', sans-serif">
        ${item.quote.substring(32, 68)}
      </text>
      <text y="18" fill="#ffffff" font-size="7.2" font-weight="700" font-family="'Space Grotesk', sans-serif">
        ${item.quote.substring(68, 105)}...”
      </text>
      <text y="30" fill="${cyan}" font-size="5" font-family="'Space Mono', monospace" letter-spacing="1.2">
        ✦ AURORA // PRINTFUL POD ✦
      </text>
    </g>
  `;

  // Chosen Arm Cuff Highlight
  const isSleeveLong = cat === 'hoodies' || cat === 'crewnecks' || cat === 'longsleeves' || cat === 'ziphoodies';
  const leftX = isSleeveLong ? 42 : 48;
  const leftY = isSleeveLong ? 115 : 110;
  const rightX = isSleeveLong ? 198 : 192;
  const rightY = isSleeveLong ? 115 : 110;
  const sleeveLabel = isSleeveLong ? (isLeftCuff ? '👈 ANTEB. IZQ.' : '👉 ANTEB. DER.') : (isLeftCuff ? '👈 MANGA IZQ.' : '👉 MANGA DER.');

  const cuffBadge = isLeftCuff ? `
    <g transform="translate(${leftX}, ${leftY})">
      <circle cx="0" cy="0" r="7" fill="${green}" opacity="0.3" />
      <circle cx="0" cy="0" r="4" fill="${green}" />
      <rect x="-42" y="8" width="68" height="22" rx="2" fill="#05070a" stroke="${green}" stroke-width="1" />
      <text x="-8" y="17" fill="#fff" font-size="4.2" font-family="'Space Mono', monospace" font-weight="bold" text-anchor="middle">${sleeveLabel}</text>
      <text x="-8" y="25" fill="${green}" font-size="4.3" font-family="'Space Mono', monospace" font-weight="bold" text-anchor="middle">“${displayCuffText}”</text>
    </g>
  ` : `
    <g transform="translate(${rightX}, ${rightY})">
      <circle cx="0" cy="0" r="7" fill="${green}" opacity="0.3" />
      <circle cx="0" cy="0" r="4" fill="${green}" />
      <rect x="-26" y="8" width="68" height="22" rx="2" fill="#05070a" stroke="${green}" stroke-width="1" />
      <text x="8" y="17" fill="#fff" font-size="4.2" font-family="'Space Mono', monospace" font-weight="bold" text-anchor="middle">${sleeveLabel}</text>
      <text x="8" y="25" fill="${green}" font-size="4.3" font-family="'Space Mono', monospace" font-weight="bold" text-anchor="middle">“${displayCuffText}”</text>
    </g>
  `;

  return `
    <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad-a-${item.id}-${view}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${green}" stop-opacity="0.18" />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="120" r="95" fill="url(#grad-a-${item.id}-${view})" />

      ${silhouette}
      ${!isFront ? backFramedQuote : ''}
      ${cuffBadge}

      <text x="215" y="225" fill="rgba(255,255,255,0.35)" font-size="6.5" font-family="'Space Mono', monospace" text-anchor="end">
        ${isFront ? 'VISTA FRONTAL (IMPACTO)' : 'VISTA ESPALDA (FRASE)'}
      </text>
    </svg>
  `;
}

// Render Aurora Catalog
function renderAuroraProducts() {
  if (!productsContainer) return;
  const filtered = activeCategory === "all" 
    ? auroraCatalog 
    : auroraCatalog.filter(p => p.category === activeCategory);

  productsContainer.innerHTML = filtered.map(item => {
    const currentView = garmentViews[item.id] || 'front';
    const chosenArm = selectedArms[item.id] || 'left';
    const isHero = item.id === "A-01";
    const isCustom = customCuffActive[item.id] || false;
    const customText = customCuffTexts[item.id] || "";
    const effectiveCuff = getActiveCuffMessage(item.id);

    return `
      <article class="product-card" style="${isHero ? 'border-color: rgba(52,211,153,0.5); box-shadow: 0 0 25px rgba(52,211,153,0.2);' : ''}">
        <span class="product-badge">${isHero ? '★ INSIGNIA RESILIENCIA' : item.id + ' // ' + item.category.toUpperCase()}</span>

        <button class="flip-view-btn" onclick="toggleView(event, '${item.id}')">
          🔄 ${currentView === 'front' ? 'Ver Frase Espalda' : 'Ver Arte Frente'}
        </button>

        <div class="product-media" id="product-media-${item.id}" onclick="openAuroraModal('${item.id}')">
          ${generateAuroraSVG(item, currentView, chosenArm, effectiveCuff)}
        </div>

        <div class="product-content">
          <span class="product-tagline">${item.tagline}</span>
          <h3 class="product-name" onclick="openAuroraModal('${item.id}')" style="cursor: pointer;">${item.name}</h3>
          
          <!-- Printful Technical Base Tag -->
          <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(52,211,153,0.08); border: 1px solid rgba(52,211,153,0.25); padding: 4px 8px; border-radius: 4px; font-size: 0.72rem; font-family: var(--font-tech); color: var(--aurora-green); margin-bottom: 8px;">
            <span>🧵 <strong>Printful:</strong> ${item.printfulModel}</span>
          </div>

          <div style="font-size: 0.78rem; color: var(--aurora-muted); margin-bottom: 8px;">
            <strong style="color: #fff;">Arte Frontal:</strong> ${item.frontArtTitle}
          </div>

          <div class="quote-highlight">
            “${item.quote}”
          </div>

          <!-- Arm / Wrist Selector -->
          <div class="arm-selector-box">
            <div class="arm-selector-label">📍 Antebrazo Operativo:</div>
            <div class="arm-options">
              <button type="button" onclick="setArm(event, '${item.id}', 'left')" class="arm-btn ${chosenArm === 'left' ? 'active' : ''}">
                👈 Antebrazo Izquierdo
              </button>
              <button type="button" onclick="setArm(event, '${item.id}', 'right')" class="arm-btn ${chosenArm === 'right' ? 'active' : ''}">
                👉 Antebrazo Derecho
              </button>
            </div>

            <!-- Custom Cuff Phrase Option -->
            <div class="cuff-custom-toggle-wrap">
              <div class="cuff-mode-options">
                <label class="cuff-mode-label ${!isCustom ? 'active' : ''}">
                  <input type="radio" name="cuff-opt-${item.id}" value="preset" ${!isCustom ? 'checked' : ''} onchange="toggleCustomCuff('${item.id}', false)">
                  <span>Sello original: <strong style="color:var(--aurora-green);">“${item.cuffMessage}”</strong></span>
                </label>
                <label class="cuff-mode-label ${isCustom ? 'active' : ''}">
                  <input type="radio" name="cuff-opt-${item.id}" value="custom" ${isCustom ? 'checked' : ''} onchange="toggleCustomCuff('${item.id}', true)">
                  <span>✍️ Personalizar lema de antebrazo</span>
                </label>
              </div>

              ${isCustom ? `
                <div class="cuff-input-container">
                  <input type="text" id="cuff-input-${item.id}" maxlength="22" class="cuff-text-input" 
                         placeholder="Ingresa tu lema (máx 22 caracteres)" 
                         value="${escapeHtml(customText)}" 
                         oninput="updateCustomCuffText('${item.id}', this.value)">
                  <span id="char-count-${item.id}" class="cuff-char-limit">${customText.length}/22</span>
                </div>
                <span class="cuff-preview-badge">
                  Sello técnico bordado: <strong id="preview-text-${item.id}">“${escapeHtml(effectiveCuff)}”</strong>
                </span>
              ` : `
                <span class="cuff-preview-badge">
                  Sello oficial de resistencia: <strong>“${item.cuffMessage}”</strong>
                </span>
              `}
            </div>
          </div>

          <div class="product-footer">
            <div>
              <div class="product-price">${item.price.toFixed(2)} €</div>
              <div style="font-size: 0.72rem; color: var(--aurora-muted);">Streetwear Técnico · POD Directo</div>
            </div>
            <button class="btn-tech-primary" style="padding: 8px 18px; font-size: 0.8rem;" onclick="addToAuroraCart('${item.id}')">
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
  renderAuroraProducts();
}

function setArm(e, id, arm) {
  e.stopPropagation();
  selectedArms[id] = arm;
  renderAuroraProducts();
}

function toggleCustomCuff(id, isCustom) {
  customCuffActive[id] = isCustom;
  if (isCustom && customCuffTexts[id] === undefined) {
    customCuffTexts[id] = "";
  }
  renderAuroraProducts();
  if (isCustom) {
    const input = document.getElementById(`cuff-input-${id}`);
    if (input) input.focus();
  }
}

function updateCustomCuffText(id, text) {
  customCuffTexts[id] = text.slice(0, 22);
  const item = auroraCatalog.find(p => p.id === id);
  if (!item) return;
  const currentView = garmentViews[id] || 'front';
  const chosenArm = selectedArms[id] || 'left';
  const effective = getActiveCuffMessage(id);

  // Smooth real-time update of mockup SVG
  const mediaWrap = document.getElementById(`product-media-${id}`);
  if (mediaWrap) {
    mediaWrap.innerHTML = generateAuroraSVG(item, currentView, chosenArm, effective);
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

function filterAurora(cat) {
  activeCategory = cat;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  const btn = document.getElementById(`filter-${cat}`);
  if (btn) btn.classList.add("active");
  renderAuroraProducts();
}

// Cart Functions
function addToAuroraCart(id) {
  const item = auroraCatalog.find(p => p.id === id);
  if (!item) return;
  const chosenArm = selectedArms[id] || 'left';
  const armLabel = chosenArm === 'left' ? 'Antebrazo Izquierdo' : 'Antebrazo Derecho';
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

  updateAuroraCartUI();
  openCart();
}

function updateAuroraCartUI() {
  const count = cart.reduce((acc, i) => acc + i.quantity, 0);
  if (cartBadge) cartBadge.textContent = count;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--aurora-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 8px;">Bolsa táctica vacía.</p>
        <p style="font-size: 0.85rem;">Selecciona una armadura streetwear de Aurora.</p>
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
      <div style="display: flex; gap: 14px; padding: 14px 0; border-bottom: 1px solid rgba(52,211,153,0.15);">
        <div style="width: 60px; height: 60px; background: #080c10; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
          ${generateAuroraSVG(item, 'front', item.selectedArm, item.effectiveCuff)}
        </div>
        <div style="flex-grow: 1;">
          <h4 style="font-size: 0.88rem; font-weight: 800; font-family: var(--font-brutal);">${item.name}</h4>
          <div style="font-size: 0.75rem; color: var(--aurora-green); font-family: var(--font-tech);">📍 ${item.armLabel}</div>
          <div style="font-size: 0.73rem; color: #38bdf8; font-family: var(--font-tech);">
            ${item.isCustomCuff ? '✍️ Lema Personalizado:' : '✦ Sello Catálogo:'} <strong>“${item.effectiveCuff}”</strong>
          </div>
          <div style="font-size: 0.85rem; font-weight: 900; margin-top: 4px; font-family: var(--font-tech);">${subtotal.toFixed(2)} €</div>
        </div>
        <div>
          <button onclick="removeAuroraItemByIndex(${idx})" style="background:none; border:none; color:#ef4444; cursor:pointer;">✕</button>
        </div>
      </div>
    `;
  }).join("");

  cartTotal.textContent = `${total.toFixed(2)} €`;
  donationTotal.textContent = `${(total * 0.10).toFixed(2)} €`;
}

function removeAuroraItemByIndex(index) {
  cart.splice(index, 1);
  updateAuroraCartUI();
}

function toggleCart() { cartDrawer.classList.toggle("open"); }
function openCart() { cartDrawer.classList.add("open"); }
function closeCart() { cartDrawer.classList.remove("open"); }

// Direct Checkout (Without Shopify)
function openAuroraCheckout() {
  if (cart.length === 0) { alert("Tu bolsa está vacía."); return; }
  closeCart();
  const total = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
  document.getElementById("checkout-amount-display").textContent = `${total.toFixed(2)} €`;
  document.getElementById("checkout-donation-display").textContent = `${(total * 0.10).toFixed(2)} €`;
  openModal("custom-checkout-modal");
}

function processAuroraOrder(e) {
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
      <div style="background: rgba(52,211,153,0.12); border: 1px solid var(--aurora-green); padding: 16px; border-radius: 6px; margin-bottom: 20px;">
        <h4 style="color: var(--aurora-green); font-size: 1.1rem; margin-bottom: 4px; font-family: var(--font-brutal);">✓ PROTOCOLO DESPACHADO · AURORA</h4>
        <p style="font-size: 0.88rem; color: #e2e8f0;">
          Gracias, <strong>${name}</strong>. Orden registrada con bordado en el antebrazo seleccionado.<br>
          Donación asignada a programas de salud mental y duelo: <strong>${(total * 0.10).toFixed(2)} €</strong>
        </p>
      </div>

      <h4 style="font-size: 0.95rem; margin-bottom: 10px; color: #fff;">Payload Webhook despachado a la API de Printful:</h4>
      <pre style="font-family: monospace; font-size: 0.75rem; background: #05070a; padding: 14px; border-radius: 4px; border: 1px solid var(--aurora-border); color: #86efac; overflow-x: auto;">
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
    inside_label: "Resiliencia // Aurora Unit"
  })), null, 2)},
  "packing_slip": { "message": "En honor a la fuerza de Aurora. El amanecer te pertenece." }
}
      </pre>
    </div>
  `;

  openModal("checkout-sim-modal");
  cart = [];
  updateAuroraCartUI();
}

// Modal Helpers
function openModal(id) { document.getElementById(id).classList.add("active"); }
function closeModal(id) { document.getElementById(id).classList.remove("active"); }

function openAuroraModal(id) {
  const item = auroraCatalog.find(p => p.id === id);
  if (!item) return;
  const chosenArm = selectedArms[id] || 'left';
  const effectiveCuff = getActiveCuffMessage(id);
  const isCustom = isCustomCuff(id);

  document.getElementById("product-modal-body").innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; align-items: center;">
      <div style="background: #080c10; border-radius: 6px; padding: 20px; text-align: center; border: 1px solid var(--aurora-border);">
        <div id="modal-svg-wrap">${generateAuroraSVG(item, 'front', chosenArm, effectiveCuff)}</div>
      </div>
      <div>
        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--aurora-green); font-family: var(--font-tech); font-weight: 700;">
          AURORA UNIT // ${item.id}
        </span>
        <h2 style="font-family: var(--font-brutal); font-size: 1.7rem; font-weight: 900; margin: 6px 0 10px;">${item.name}</h2>
        
        <!-- Printful Specs Badge in Modal -->
        <div style="background: rgba(52,211,153,0.08); border: 1px solid rgba(52,211,153,0.25); padding: 8px 12px; border-radius: 4px; font-size: 0.76rem; font-family: var(--font-tech); color: var(--aurora-green); margin-bottom: 12px;">
          <div>🧵 <strong>Base Printful:</strong> ${item.printfulModel}</div>
          <div style="color: #94a3b8; margin-top: 3px;">📐 <strong>Lienzos DTG & Bordado:</strong> ${item.printfulSpecs}</div>
        </div>

        <p style="color: var(--aurora-muted); font-size: 0.9rem; margin-bottom: 14px;">${item.description}</p>
        
        <div class="quote-highlight">
          “${item.quote}”
          <div style="font-size: 0.74rem; color: var(--aurora-cyan); margin-top: 4px; font-family: var(--font-tech);">
            ✦ Sello antebrazo (${chosenArm === 'left' ? 'Antebrazo Izquierdo' : 'Antebrazo Derecho'}): <strong>“${effectiveCuff}”</strong> ${isCustom ? '(Personalizado)' : ''}
          </div>
        </div>

        <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center;">
          <div class="product-price">${item.price.toFixed(2)} €</div>
          <button class="btn-tech-primary" onclick="addToAuroraCart('${item.id}'); closeModal('product-modal');">
            Añadir a la Bolsa
          </button>
        </div>
      </div>
    </div>
  `;
  openModal("product-modal");
}

// Aurora Wave Canvas Animation
function initAuroraCanvas() {
  const canvas = document.getElementById("aurora-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let t = 0;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += 0.015;

    // Green Borealis Emission Waves
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, "rgba(5, 46, 22, 0.08)");
    grad.addColorStop(0.5, "rgba(6, 78, 59, 0.04)");
    grad.addColorStop(1, "rgba(5, 7, 10, 0.98)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(0, canvas.height * 0.4);
    for (let x = 0; x < canvas.width; x += 15) {
      const y = Math.sin(x * 0.003 + t) * 60 + Math.cos(x * 0.006 - t) * 30 + (canvas.height * 0.35);
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(52, 211, 153, 0.15)";
    ctx.lineWidth = 40;
    ctx.filter = "blur(18px)";
    ctx.stroke();
    ctx.filter = "none";

    requestAnimationFrame(animate);
  }
  animate();
}

window.addEventListener("DOMContentLoaded", () => {
  initAuroraCanvas();
  renderAuroraProducts();
});
