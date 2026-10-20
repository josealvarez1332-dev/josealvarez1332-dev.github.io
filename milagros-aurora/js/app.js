// ==========================================================================
// MILAGROS & AURORA — UNIFIED MASTER APPLICATION LOGIC
// Heavyweight Apparel for Deep Space & Mental Health
// ==========================================================================

const unifiedCatalog = [
  // --- CÁPSULA 01: REFUGIO (MILAGROS) ---
  {
    id: "M-01",
    capsule: "refugio",
    capsuleLabel: "Refugio · Milagros",
    name: "Hoodie Heavy 'La Luz que no Supimos Ver'",
    tagline: "Prenda Insignia // Amar y Ser Amado",
    category: "hoodies",
    printfulModel: "Stanley/Stella Cultivator 2.0 (STSU857)",
    printfulSpecs: "DTG Pecho 10\"×12\" + Espalda 12\"×16\" + Bordado Muñeca 2.5\"×1.2\"",
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
    capsule: "refugio",
    capsuleLabel: "Refugio · Milagros",
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
    description: "Corte streetwear con hombro caído y cuello acanalado grueso. Diseñada para dar contención y descanso en los días difíciles."
  },
  {
    id: "M-03",
    capsule: "refugio",
    capsuleLabel: "Refugio · Milagros",
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
    description: "Camiseta de estructura pesada y caída rígida que aporta sensación de protección física y presencia."
  },
  {
    id: "M-04",
    capsule: "refugio",
    capsuleLabel: "Refugio · Milagros",
    name: "Camiseta Manga Larga 'Gravedad en Calma'",
    tagline: "Anclaje & Respiración",
    category: "longsleeves",
    printfulModel: "Stanley/Stella Shifter (STTU824)",
    printfulSpecs: "DTG Frontal 12\"×16\" + Espalda 12\"×16\" + Bordado Puño Elástico 2.5\"×1.2\"",
    frontArtTitle: "Malla de Espacio-Tiempo",
    frontArtDesc: "Curvatura estelar demostrando que la gravedad cuida nuestros pies aun cuando sentimos caer al vacío.",
    quote: "La noche más oscura del universo también tiene fecha de caducidad. Sostén la respiración.",
    cuffMessage: "Un día a la vez.",
    neckMessage: "Línea 024 Prevención del Suicidio.",
    price: 42.0,
    material: "200 g/m² Algodón Peinado Ringspun - Puños elásticos acanalados 1x1",
    artType: "spacetime",
    description: "Prenda de transición para llevar bajo capas. Los puños ajustados mantienen el micro-lema siempre a la vista al extender la mano."
  },
  {
    id: "M-05",
    capsule: "refugio",
    capsuleLabel: "Refugio · Milagros",
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
    description: "Sudadera versátil de apertura frontal. El bordado en el puño elegido actúa como amuleto táctil al mover los brazos."
  },

  // --- CÁPSULA 02: BLINDAJE (AURORA) ---
  {
    id: "A-01",
    capsule: "blindaje",
    capsuleLabel: "Blindaje · Aurora",
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
    capsule: "blindaje",
    capsuleLabel: "Blindaje · Aurora",
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
    capsule: "blindaje",
    capsuleLabel: "Blindaje · Aurora",
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
    capsule: "blindaje",
    capsuleLabel: "Blindaje · Aurora",
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
    capsule: "blindaje",
    capsuleLabel: "Blindaje · Aurora",
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
let activeCapsule = "all";
let activeCategory = "all";
let cart = [];
let garmentViews = {};
let selectedArms = {};
let customCuffActive = {};
let customCuffTexts = {};

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
  const item = unifiedCatalog.find(p => p.id === id);
  if (!item) return "";
  if (customCuffActive[id] && customCuffTexts[id] && customCuffTexts[id].trim() !== "") {
    return customCuffTexts[id].trim();
  }
  return item.cuffMessage;
}

function isCustomCuff(id) {
  return !!(customCuffActive[id] && customCuffTexts[id] && customCuffTexts[id].trim() !== "");
}

// Artwork Renderer (Both Capsules)
function renderFrontArtwork(item) {
  const isRefugio = item.capsule === "refugio";
  const accentColor = isRefugio ? "#c4b5fd" : "#34d399";
  const subAccent = isRefugio ? "#fbbf24" : "#38bdf8";

  // Refugio artworks
  if (item.artType === "eclipse") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <circle cx="5" cy="-8" r="16" fill="${accentColor}" opacity="0.2" />
        <circle cx="0" cy="-6" r="15" fill="#0b0c16" stroke="${accentColor}" stroke-width="1.2" />
        <path d="M12 -18 C16 -12, 18 -6, 17 2" stroke="${subAccent}" stroke-width="2" stroke-linecap="round" fill="none" />
        <path d="M0 9 Q4 22, -4 28" stroke="${subAccent}" stroke-dasharray="2,2" stroke-width="1.2" fill="none" />
        <circle cx="-4" cy="30" r="2.5" fill="${accentColor}" />
      </g>
    `;
  } else if (item.artType === "hands-planet") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <circle cx="0" cy="-6" r="14" fill="${accentColor}" opacity="0.15" />
        <circle cx="0" cy="-6" r="10" stroke="${accentColor}" stroke-width="1.2" />
        <path d="M-18 6 C-14 -12, -2 -18, 0 -18 C2 -18, 14 -12, 18 6" stroke="${accentColor}" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <path d="M-22 10 C-12 18, 12 18, 22 10" stroke="${accentColor}" stroke-width="1.2" stroke-linecap="round" fill="none" />
      </g>
    `;
  } else if (item.artType === "hourglass") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <polygon points="-12,-16 12,-16 0,-2 12,12 -12,12 0,-2" stroke="${accentColor}" stroke-width="1.5" fill="none" />
        <circle cx="0" cy="-7" r="1.5" fill="#fff" />
        <circle cx="2" cy="5" r="1.5" fill="${accentColor}" />
      </g>
    `;
  } else if (item.artType === "spacetime") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <ellipse cx="0" cy="-6" rx="22" ry="12" stroke="${accentColor}" stroke-dasharray="3,3" stroke-width="1.2" fill="none" />
        <line x1="-22" y1="-6" x2="22" y2="-6" stroke="${accentColor}" stroke-width="1" />
        <line x1="0" y1="-18" x2="0" y2="6" stroke="${accentColor}" stroke-width="1" />
        <circle cx="0" cy="-6" r="5" fill="${subAccent}" />
      </g>
    `;
  } else if (item.artType === "zip-filaments") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <circle cx="-14" cy="-8" r="8" stroke="${accentColor}" stroke-width="1.2" fill="none" />
        <circle cx="14" cy="-8" r="8" stroke="${accentColor}" stroke-width="1.2" fill="none" />
        <line x1="-14" y1="-8" x2="-2" y2="-8" stroke="${subAccent}" stroke-width="1.5" stroke-linecap="round" />
        <line x1="2" y1="-8" x2="14" y2="-8" stroke="${subAccent}" stroke-width="1.5" stroke-linecap="round" />
        <circle cx="-14" cy="-8" r="3" fill="${subAccent}" />
        <circle cx="14" cy="-8" r="3" fill="${subAccent}" />
      </g>
    `;
  }
  // Blindaje artworks
  else if (item.artType === "supernova") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <circle cx="0" cy="-6" r="22" stroke="${accentColor}" stroke-dasharray="2,3" stroke-width="0.9" opacity="0.6" />
        <circle cx="0" cy="-6" r="15" stroke="${subAccent}" stroke-dasharray="4,2" stroke-width="1.2" />
        <circle cx="0" cy="-6" r="6" fill="${accentColor}" />
        <circle cx="0" cy="-6" r="2" fill="#ffffff" />
        <line x1="-28" y1="-6" x2="-10" y2="-6" stroke="${accentColor}" stroke-width="1.4" />
        <line x1="10" y1="-6" x2="28" y2="-6" stroke="${accentColor}" stroke-width="1.4" />
        <line x1="0" y1="-30" x2="0" y2="-16" stroke="${accentColor}" stroke-width="1.4" />
        <line x1="0" y1="4" x2="0" y2="18" stroke="${accentColor}" stroke-width="1.4" />
      </g>
    `;
  } else if (item.artType === "geomagnetic") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <ellipse cx="0" cy="-6" rx="24" ry="12" fill="none" stroke="${accentColor}" stroke-width="1.2" stroke-dasharray="3,2" />
        <ellipse cx="0" cy="-6" rx="16" ry="22" fill="none" stroke="${subAccent}" stroke-width="1" />
        <circle cx="0" cy="-6" r="7" fill="#080c10" stroke="${accentColor}" stroke-width="1.5" />
        <circle cx="0" cy="-6" r="3" fill="${accentColor}" />
        <path d="M-28 -18 Q-12 -6, -28 6" stroke="${subAccent}" stroke-width="1.5" fill="none" />
        <path d="M28 -18 Q12 -6, 28 6" stroke="${subAccent}" stroke-width="1.5" fill="none" />
      </g>
    `;
  } else if (item.artType === "meteor") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <polygon points="16,-22 -14,12 -6,14 20,-18" fill="${accentColor}" opacity="0.3" />
        <line x1="22" y1="-26" x2="-12" y2="10" stroke="${accentColor}" stroke-width="2.2" stroke-linecap="round" />
        <circle cx="-12" cy="10" r="6" fill="#080c10" stroke="${subAccent}" stroke-width="1.6" />
        <circle cx="-12" cy="10" r="3" fill="#ffffff" />
      </g>
    `;
  } else if (item.artType === "polar") {
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <path d="M-26 -16 Q-6 -28, 24 -14 Q6 -22, -12 -20 Z" fill="${accentColor}" opacity="0.5" />
        <polygon points="-26,8 -12,-8 0,4 12,-6 26,8" fill="rgba(8,12,16,0.8)" stroke="${subAccent}" stroke-width="1.6" />
        <circle cx="12" cy="-6" r="2.5" fill="#ffffff" />
      </g>
    `;
  } else {
    // fission
    return `
      <g transform="translate(120, 115)" text-anchor="middle">
        <circle cx="-15" cy="-6" r="8" stroke="${accentColor}" stroke-width="1.4" fill="none" />
        <circle cx="15" cy="-6" r="8" stroke="${accentColor}" stroke-width="1.4" fill="none" />
        <circle cx="-15" cy="-6" r="3" fill="${subAccent}" />
        <circle cx="15" cy="-6" r="3" fill="${subAccent}" />
        <line x1="-15" y1="-18" x2="-15" y2="6" stroke="${subAccent}" stroke-width="1" stroke-dasharray="2,2" />
        <line x1="15" y1="-18" x2="15" y2="6" stroke="${subAccent}" stroke-width="1" stroke-dasharray="2,2" />
      </g>
    `;
  }
}

// Unified SVG Mockup Generator
function generateGarmentSVG(item, view = 'front', chosenArm = 'left', customPhrase = null) {
  const isRefugio = item.capsule === "refugio";
  const accent = isRefugio ? "#c4b5fd" : "#34d399";
  const subAccent = isRefugio ? "#fbbf24" : "#38bdf8";
  const garmentColor = isRefugio ? "#121421" : "#080c12";
  const cat = item.category;
  const isFront = view === 'front';
  const isLeftCuff = chosenArm === 'left';

  const effectivePhrase = (customPhrase !== null && customPhrase !== undefined && customPhrase.trim() !== '') 
    ? customPhrase.trim() 
    : getActiveCuffMessage(item.id);
  const displayCuffText = effectivePhrase.length > 14 ? effectivePhrase.substring(0, 13) + '…' : effectivePhrase;

  let silhouette = '';

  if (cat === 'hoodies') {
    // Stanley/Stella Cultivator 2.0 (STSU857)
    silhouette = `
      <path d="M75 60 C85 45, 155 45, 165 60 L210 100 L185 130 L165 110 L165 205 C165 210, 160 215, 155 215 L85 215 C80 215, 75 210, 75 205 L75 110 L55 130 L30 100 Z" fill="${garmentColor}" stroke="${accent}" stroke-opacity="0.3" stroke-width="1.8" />
      ${isFront ? `
        <path d="M85 55 C85 25, 155 25, 155 55 C145 70, 95 70, 85 55 Z" fill="#1b1f2e" stroke="${accent}" stroke-opacity="0.25" />
        <line x1="110" y1="62" x2="108" y2="88" stroke="${subAccent}" stroke-width="1.2" stroke-linecap="round" />
        <line x1="130" y1="62" x2="132" y2="88" stroke="${subAccent}" stroke-width="1.2" stroke-linecap="round" />
        <path d="M90 155 L150 155 L142 198 L98 198 Z" fill="rgba(255,255,255,0.02)" stroke="${accent}" stroke-opacity="0.2" />
        ${renderFrontArtwork(item)}
      ` : `
        <path d="M85 50 C85 30, 155 30, 155 50 C145 60, 95 60, 85 50 Z" fill="#141724" stroke="${accent}" stroke-opacity="0.2" />
      `}
    `;
  } else if (cat === 'crewnecks') {
    // Stanley/Stella Radder (STSU823)
    silhouette = `
      <path d="M75 58 C85 48, 155 48, 165 58 L210 98 L185 128 L165 110 L165 204 C165 208, 160 212, 155 212 L85 212 C80 212, 75 208, 75 204 L75 110 L55 128 L30 98 Z" fill="${garmentColor}" stroke="${accent}" stroke-opacity="0.3" stroke-width="1.8" />
      <rect x="75" y="200" width="90" height="12" rx="2" fill="#151826" stroke="${accent}" stroke-opacity="0.22" />
      ${isFront ? `
        <path d="M96 48 C104 60, 136 60, 144 48 C136 55, 104 55, 96 48 Z" fill="#1b1f2e" stroke="${accent}" stroke-opacity="0.35" />
        <polygon points="116,55 124,55 120,62" fill="none" stroke="${accent}" stroke-opacity="0.4" />
        ${renderFrontArtwork(item)}
      ` : `
        <path d="M96 48 C104 53, 136 53, 144 48" stroke="${accent}" stroke-opacity="0.25" stroke-width="2" fill="none" />
      `}
    `;
  } else if (cat === 'tees') {
    // Shaka Wear / Stanley/Stella Freestyler (240g Boxy)
    silhouette = `
      <path d="M80 50 C95 40, 145 40, 160 50 L205 85 L180 115 L160 100 L160 210 C160 215, 155 218, 150 218 L90 218 C85 218, 80 215, 80 210 L80 100 L60 115 L35 85 Z" fill="${garmentColor}" stroke="${accent}" stroke-opacity="0.3" stroke-width="1.8" />
      ${isFront ? `
        <path d="M98 46 C105 58, 135 58, 142 46" stroke="${accent}" stroke-opacity="0.35" stroke-width="2.5" fill="none" />
        ${renderFrontArtwork(item)}
      ` : `
        <path d="M98 46 C105 50, 135 50, 142 46" stroke="${accent}" stroke-opacity="0.2" stroke-width="2" fill="none" />
      `}
    `;
  } else if (cat === 'longsleeves') {
    // Stanley/Stella Shifter (STTU824)
    silhouette = `
      <path d="M80 50 C95 42, 145 42, 160 50 L212 95 L188 125 L165 110 L165 210 C165 215, 155 218, 150 218 L90 218 C85 218, 80 215, 80 210 L80 110 L52 125 L28 95 Z" fill="${garmentColor}" stroke="${accent}" stroke-opacity="0.3" stroke-width="1.8" />
      <rect x="24" y="93" width="10" height="12" rx="2" fill="#1b1f2e" stroke="${accent}" stroke-opacity="0.25" />
      <rect x="206" y="93" width="10" height="12" rx="2" fill="#1b1f2e" stroke="${accent}" stroke-opacity="0.25" />
      ${isFront ? `
        <path d="M100 47 C106 57, 134 57, 140 47" stroke="${accent}" stroke-opacity="0.35" stroke-width="2" fill="none" />
        ${renderFrontArtwork(item)}
      ` : `
        <path d="M100 47 C106 51, 134 51, 140 47" stroke="${accent}" stroke-opacity="0.2" stroke-width="1.8" fill="none" />
      `}
    `;
  } else {
    // Stanley/Stella Canyon (STSU858) Zip Hoodie
    silhouette = `
      <path d="M75 60 C85 45, 155 45, 165 60 L210 100 L185 130 L165 110 L165 205 C165 210, 160 215, 155 215 L85 215 C80 215, 75 210, 75 205 L75 110 L55 130 L30 100 Z" fill="${garmentColor}" stroke="${accent}" stroke-opacity="0.3" stroke-width="1.8" />
      ${isFront ? `
        <path d="M85 55 C85 25, 155 25, 155 55 C145 70, 95 70, 85 55 Z" fill="#1b1f2e" stroke="${accent}" stroke-opacity="0.25" />
        <line x1="120" y1="64" x2="120" y2="215" stroke="${subAccent}" stroke-width="1.8" />
        <rect x="118" y="72" width="4" height="7" rx="1" fill="${subAccent}" />
        <path d="M92 160 L116 160 L116 198 L98 198 Z" fill="rgba(255,255,255,0.02)" stroke="${accent}" stroke-opacity="0.2" />
        <path d="M124 160 L148 160 L142 198 L124 198 Z" fill="rgba(255,255,255,0.02)" stroke="${accent}" stroke-opacity="0.2" />
        ${renderFrontArtwork(item)}
      ` : `
        <path d="M85 50 C85 30, 155 30, 155 50 C145 60, 95 60, 85 50 Z" fill="#141724" stroke="${accent}" stroke-opacity="0.2" />
      `}
    `;
  }

  // Back Framed Quote (Legible & Protected below collar)
  const backFramedQuote = `
    <g transform="translate(120, 115)" text-anchor="middle">
      <rect x="-65" y="-38" width="130" height="76" rx="6" fill="rgba(255,255,255,0.02)" stroke="${accent}" stroke-width="0.9" stroke-dasharray="3,3" />
      <circle cx="0" cy="-38" r="3" fill="${subAccent}" />
      <circle cx="0" cy="38" r="3" fill="${subAccent}" />
      <text y="-14" fill="#ffffff" font-size="7.2" font-weight="700" font-family="'Space Grotesk', sans-serif">
        “${item.quote.substring(0, 32)}
      </text>
      <text y="2" fill="${accent}" font-size="7.2" font-weight="700" font-family="'Space Grotesk', sans-serif">
        ${item.quote.substring(32, 68)}
      </text>
      <text y="18" fill="#ffffff" font-size="7.2" font-weight="700" font-family="'Space Grotesk', sans-serif">
        ${item.quote.substring(68, 105)}...”
      </text>
      <text y="30" fill="${subAccent}" font-size="5" font-family="'Space Mono', monospace" letter-spacing="1.2">
        ✦ MILAGROS &amp; AURORA // POD ✦
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
      <circle cx="0" cy="0" r="4" fill="${subAccent}" />
      <rect x="-42" y="8" width="68" height="22" rx="3" fill="#07090e" stroke="${accent}" stroke-width="1" />
      <text x="-8" y="17" fill="#fff" font-size="4.2" font-family="'Space Mono', monospace" font-weight="bold" text-anchor="middle">${sleeveLabel}</text>
      <text x="-8" y="25" fill="${subAccent}" font-size="4.3" font-family="'Space Mono', monospace" font-weight="bold" text-anchor="middle">“${displayCuffText}”</text>
    </g>
  ` : `
    <g transform="translate(${rightX}, ${rightY})">
      <circle cx="0" cy="0" r="7" fill="${accent}" opacity="0.3" />
      <circle cx="0" cy="0" r="4" fill="${subAccent}" />
      <rect x="-26" y="8" width="68" height="22" rx="3" fill="#07090e" stroke="${accent}" stroke-width="1" />
      <text x="8" y="17" fill="#fff" font-size="4.2" font-family="'Space Mono', monospace" font-weight="bold" text-anchor="middle">${sleeveLabel}</text>
      <text x="8" y="25" fill="${subAccent}" font-size="4.3" font-family="'Space Mono', monospace" font-weight="bold" text-anchor="middle">“${displayCuffText}”</text>
    </g>
  `;

  return `
    <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad-${item.id}-${view}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.18" />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="120" r="95" fill="url(#grad-${item.id}-${view})" />

      ${silhouette}
      ${!isFront ? backFramedQuote : ''}
      ${cuffBadge}

      <text x="215" y="225" fill="rgba(255,255,255,0.35)" font-size="6.5" font-family="'Space Mono', monospace" text-anchor="end">
        ${isFront ? 'VISTA FRONTAL (ARTE)' : 'VISTA ESPALDA (FRASE)'}
      </text>
    </svg>
  `;
}

// Render Products Grid
function renderCatalog() {
  const container = document.getElementById("catalog-products-grid");
  if (!container) return;

  let filtered = unifiedCatalog;
  if (activeCapsule !== "all") {
    filtered = filtered.filter(p => p.capsule === activeCapsule);
  }
  if (activeCategory !== "all") {
    filtered = filtered.filter(p => p.category === activeCategory);
  }

  const countDisplay = document.getElementById("catalog-item-count");
  if (countDisplay) {
    countDisplay.textContent = `Mostrando ${filtered.length} de 10 prendas curadas`;
  }

  container.innerHTML = filtered.map(item => {
    const currentView = garmentViews[item.id] || 'front';
    const chosenArm = selectedArms[item.id] || 'left';
    const isCustom = customCuffActive[item.id] || false;
    const customText = customCuffTexts[item.id] || "";
    const effectiveCuff = getActiveCuffMessage(item.id);
    const isRefugio = item.capsule === "refugio";

    return `
      <article class="product-card ${isRefugio ? 'card-refugio' : 'card-blindaje'}">
        <div class="product-badge-row">
          <span class="product-capsule-badge ${isRefugio ? 'badge-refugio' : 'badge-blindaje'}">
            ${isRefugio ? '✦ ' : '⚡ '} ${item.capsuleLabel.toUpperCase()} // ${item.id}
          </span>
          <button class="flip-view-btn" onclick="toggleView(event, '${item.id}')">
            🔄 ${currentView === 'front' ? 'Ver Frase Espalda' : 'Ver Arte Frente'}
          </button>
        </div>

        <div class="product-media" id="product-media-${item.id}" onclick="openProductModal('${item.id}')">
          ${generateGarmentSVG(item, currentView, chosenArm, effectiveCuff)}
        </div>

        <div class="product-tagline">${item.tagline}</div>
        <h3 class="product-name" onclick="openProductModal('${item.id}')">${item.name}</h3>

        <div class="printful-spec-pill">
          <span>🧵 <strong>Printful:</strong> ${item.printfulModel}</span>
        </div>

        <div class="product-quote-snippet">
          “${item.quote}”
        </div>

        <!-- Arm & Custom Cuff Configuration -->
        <div class="cuff-configurator-box">
          <div class="cuff-config-header">
            📍 Muñeca / Antebrazo Bordado:
          </div>
          <div class="arm-options-row">
            <button type="button" class="arm-btn ${chosenArm === 'left' ? 'active' : ''}" onclick="setArm(event, '${item.id}', 'left')">
              👈 Brazo Izq. (Reloj)
            </button>
            <button type="button" class="arm-btn ${chosenArm === 'right' ? 'active' : ''}" onclick="setArm(event, '${item.id}', 'right')">
              👉 Brazo Der. (Acción)
            </button>
          </div>

          <div class="cuff-mode-radios">
            <label class="cuff-radio-label">
              <input type="radio" name="cuff-opt-${item.id}" value="preset" ${!isCustom ? 'checked' : ''} onchange="toggleCustomCuff('${item.id}', false)">
              <span>Lema original: <strong style="color:${isRefugio ? 'var(--refugio-gold)' : 'var(--blindaje-emerald)'};">“${item.cuffMessage}”</strong></span>
            </label>
            <label class="cuff-radio-label">
              <input type="radio" name="cuff-opt-${item.id}" value="custom" ${isCustom ? 'checked' : ''} onchange="toggleCustomCuff('${item.id}', true)">
              <span>✍️ Personalizar con tu propia frase</span>
            </label>
          </div>

          ${isCustom ? `
            <div class="cuff-input-wrap">
              <input type="text" id="cuff-input-${item.id}" maxlength="22" class="cuff-text-input"
                     placeholder="Tu microfrase (máx 22 caracteres)"
                     value="${escapeHtml(customText)}"
                     oninput="updateCustomCuffText('${item.id}', this.value)">
              <span id="char-count-${item.id}" class="cuff-char-count">${customText.length}/22</span>
            </div>
            <div class="cuff-live-preview">
              Bordado en hilo satinado: <strong id="preview-text-${item.id}">“${escapeHtml(effectiveCuff)}”</strong>
            </div>
          ` : `
            <div class="cuff-live-preview" style="color:var(--text-dim);">
              Bordado oficial: <strong>“${item.cuffMessage}”</strong>
            </div>
          `}
        </div>

        <div class="product-footer">
          <div>
            <div class="product-price">${item.price.toFixed(2)} €</div>
            <div class="product-price-sub">Heavyweight Organic · POD Ético</div>
          </div>
          <button class="add-cart-btn" onclick="addToCart('${item.id}')">
            + Añadir a la Bolsa
          </button>
        </div>
      </article>
    `;
  }).join("");
}

// Event Handlers
function toggleView(e, id) {
  e.stopPropagation();
  garmentViews[id] = garmentViews[id] === 'back' ? 'front' : 'back';
  renderCatalog();
}

function setArm(e, id, arm) {
  e.stopPropagation();
  selectedArms[id] = arm;
  renderCatalog();
}

function toggleCustomCuff(id, isCustom) {
  customCuffActive[id] = isCustom;
  if (isCustom && customCuffTexts[id] === undefined) {
    customCuffTexts[id] = "";
  }
  renderCatalog();
  if (isCustom) {
    const input = document.getElementById(`cuff-input-${id}`);
    if (input) input.focus();
  }
}

function updateCustomCuffText(id, text) {
  customCuffTexts[id] = text.slice(0, 22);
  const item = unifiedCatalog.find(p => p.id === id);
  if (!item) return;
  const currentView = garmentViews[id] || 'front';
  const chosenArm = selectedArms[id] || 'left';
  const effective = getActiveCuffMessage(id);

  // Real-time update of the preview SVG without redrawing the whole DOM (preserves focus)
  const mediaWrap = document.getElementById(`product-media-${id}`);
  if (mediaWrap) {
    mediaWrap.innerHTML = generateGarmentSVG(item, currentView, chosenArm, effective);
  }
  const charCounter = document.getElementById(`char-count-${id}`);
  if (charCounter) {
    charCounter.textContent = `${text.length}/22`;
  }
  const previewText = document.getElementById(`preview-text-${id}`);
  if (previewText) {
    previewText.textContent = `“${effective}”`;
  }
}

function filterCapsule(capsule) {
  activeCapsule = capsule;
  document.querySelectorAll(".pill-capsule").forEach(b => b.classList.remove("active", "active-refugio", "active-blindaje"));
  const btn = document.getElementById(`capsule-filter-${capsule}`);
  if (btn) {
    if (capsule === 'refugio') btn.classList.add("active-refugio");
    else if (capsule === 'blindaje') btn.classList.add("active-blindaje");
    else btn.classList.add("active");
  }
  renderCatalog();
}

function filterCategory(category) {
  activeCategory = category;
  document.querySelectorAll(".pill-category").forEach(b => b.classList.remove("active"));
  const btn = document.getElementById(`category-filter-${category}`);
  if (btn) btn.classList.add("active");
  renderCatalog();
}

// Cart Functionality
function addToCart(id) {
  const item = unifiedCatalog.find(p => p.id === id);
  if (!item) return;
  const chosenArm = selectedArms[id] || 'left';
  const armLabel = chosenArm === 'left' ? 'Brazo Izquierdo (Reloj)' : 'Brazo Derecho (Acción)';
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

  updateCartUI();
  openCartDrawer();
}

function updateCartUI() {
  const badge = document.getElementById("cart-count-badge");
  const count = cart.reduce((acc, i) => acc + i.quantity, 0);
  if (badge) badge.textContent = count;

  const body = document.getElementById("cart-items-container");
  const subtotalEl = document.getElementById("cart-subtotal-display");
  const donationEl = document.getElementById("cart-donation-display");

  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div style="text-align: center; padding: 50px 10px; color: var(--text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 8px; font-weight:700;">Tu bolsa táctica está vacía.</p>
        <p style="font-size: 0.85rem;">Explora las cápsulas de Refugio o Blindaje para añadir una armadura con significado.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "0.00 €";
    if (donationEl) donationEl.textContent = "0.00 €";
    return;
  }

  let total = 0;
  body.innerHTML = cart.map((item, idx) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    const isRefugio = item.capsule === "refugio";

    return `
      <div style="display: flex; gap: 14px; padding: 14px 0; border-bottom: 1px solid var(--border-subtle); align-items: center;">
        <div style="width: 60px; height: 60px; background: #080a10; border-radius: 4px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          ${generateGarmentSVG(item, 'front', item.selectedArm, item.effectiveCuff)}
        </div>
        <div style="flex-grow: 1;">
          <h4 style="font-size: 0.88rem; font-weight: 700; color: #fff;">${item.name}</h4>
          <div style="font-size: 0.73rem; color: ${isRefugio ? 'var(--refugio-lavender)' : 'var(--blindaje-emerald)'}; font-family: var(--font-tech);">
            📍 ${item.armLabel}
          </div>
          <div style="font-size: 0.72rem; color: var(--refugio-gold); font-family: var(--font-tech);">
            ${item.isCustomCuff ? '✍️ Microfrase Propia:' : '✦ Lema Oficial:'} <strong>“${item.effectiveCuff}”</strong>
          </div>
          <div style="font-size: 0.85rem; font-weight: 800; margin-top: 4px;">
            ${subtotal.toFixed(2)} € <span style="font-size: 0.7rem; color: var(--text-dim); font-weight: 400;">(${item.quantity} × ${item.price.toFixed(2)} €)</span>
          </div>
        </div>
        <button onclick="removeCartItem(${idx})" style="background: none; border: none; color: #ef4444; font-size: 1rem; cursor: pointer; padding: 6px;">
          ✕
        </button>
      </div>
    `;
  }).join("");

  if (subtotalEl) subtotalEl.textContent = `${total.toFixed(2)} €`;
  if (donationEl) donationEl.textContent = `${(total * 0.10).toFixed(2)} €`;
}

function removeCartItem(idx) {
  cart.splice(idx, 1);
  updateCartUI();
}

function openCartDrawer() {
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-drawer-overlay").classList.add("active");
}

function closeCartDrawer() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-drawer-overlay").classList.remove("active");
}

// Unified Checkout & Printful Payload Simulator
function openCheckoutModal() {
  if (cart.length === 0) {
    alert("Tu bolsa está vacía.");
    return;
  }
  closeCartDrawer();
  const total = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
  document.getElementById("checkout-total-val").textContent = `${total.toFixed(2)} €`;
  document.getElementById("checkout-donation-val").textContent = `${(total * 0.10).toFixed(2)} €`;
  document.getElementById("checkout-modal").classList.add("active");
}

function closeCheckoutModal() {
  document.getElementById("checkout-modal").classList.remove("active");
}

function processUnifiedOrder(e) {
  e.preventDefault();
  const name = document.getElementById("cust-name").value;
  const email = document.getElementById("cust-email").value;
  const address = document.getElementById("cust-address").value;
  const city = document.getElementById("cust-city").value;
  const country = document.getElementById("cust-country").value;

  closeCheckoutModal();
  const total = cart.reduce((s, i) => s + (i.price * i.quantity), 0);

  const payload = {
    recipient: {
      name: name,
      email: email,
      address1: address,
      city: city,
      country_code: country
    },
    items: cart.map(c => ({
      item_id: c.id,
      garment_name: c.name,
      capsule: c.capsule,
      printful_base_model: c.printfulModel,
      size: c.selectedSize,
      embroidery_placement: c.selectedArm === 'left' ? 'left_wrist' : 'right_wrist',
      cuff_microquote: c.effectiveCuff,
      cuff_quote_type: c.isCustomCuff ? "custom_client_phrase" : "catalog_standard_phrase",
      neck_tag_label: "MILAGROS & AURORA // 10% DONACIÓN SALUD MENTAL (LÍNEA 024)"
    })),
    packing_slip: {
      brand: "MILAGROS & AURORA",
      message: "Gracias por vestir esta memoria. Para renacer como una aurora, primero necesitas un refugio donde descansar en la oscuridad."
    }
  };

  document.getElementById("order-sim-content").innerHTML = `
    <div style="background: rgba(52, 211, 153, 0.12); border: 1px solid var(--blindaje-emerald); padding: 18px; border-radius: 8px; margin-bottom: 20px;">
      <h3 style="color: var(--blindaje-emerald); font-family: var(--font-display); font-size: 1.15rem; margin-bottom: 6px;">
        ✓ PEDIDO CONFIRMADO &amp; PROTOCOLO DESPACHADO
      </h3>
      <p style="font-size: 0.88rem; color: #e2e8f0; line-height: 1.6;">
        Gracias, <strong>${escapeHtml(name)}</strong>. Tu orden unificada de <strong>MILAGROS &amp; AURORA</strong> ha sido registrada.<br>
        Aporte asignado a la Línea 024 de Prevención del Suicidio y Programas de Apoyo: <strong style="color:var(--refugio-gold);">${(total * 0.10).toFixed(2)} €</strong>
      </p>
    </div>

    <h4 style="font-size: 0.95rem; font-family: var(--font-display); margin-bottom: 8px; color: #fff;">
      Payload Webhook despachado a la API de Printful (Integración Directa sin Shopify):
    </h4>
    <pre style="font-family: var(--font-tech); font-size: 0.74rem; background: #07090e; padding: 14px; border-radius: 6px; border: 1px solid var(--border-glass); color: #34d399; overflow-x: auto; max-height: 320px;">
POST https://api.printful.com/orders
Authorization: Bearer [PRINTFUL_API_KEY]
Content-Type: application/json

${JSON.stringify(payload, null, 2)}
    </pre>
  `;

  document.getElementById("order-success-modal").classList.add("active");
  cart = [];
  updateCartUI();
}

function closeOrderSuccessModal() {
  document.getElementById("order-success-modal").classList.remove("active");
}

// Product Modal Quickview
function openProductModal(id) {
  const item = unifiedCatalog.find(p => p.id === id);
  if (!item) return;
  const chosenArm = selectedArms[id] || 'left';
  const effectiveCuff = getActiveCuffMessage(id);
  const isCustom = isCustomCuff(id);
  const isRefugio = item.capsule === "refugio";

  document.getElementById("quickview-body").innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px; align-items: center;">
      <div style="background: #080a10; border-radius: 8px; padding: 20px; text-align: center; border: 1px solid var(--border-glass);">
        <div style="max-width: 280px; margin: 0 auto;">
          ${generateGarmentSVG(item, 'front', chosenArm, effectiveCuff)}
        </div>
      </div>
      <div>
        <span class="product-capsule-badge ${isRefugio ? 'badge-refugio' : 'badge-blindaje'}" style="margin-bottom: 8px; display: inline-block;">
          ${item.capsuleLabel.toUpperCase()} // ${item.id}
        </span>
        <h2 style="font-family: var(--font-display); font-size: 1.55rem; font-weight: 800; margin: 6px 0 10px; color:#fff;">
          ${item.name}
        </h2>
        
        <!-- Printful Specs Badge in Modal -->
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); padding: 8px 12px; border-radius: 6px; font-size: 0.74rem; font-family: var(--font-tech); color: ${isRefugio ? 'var(--refugio-lavender)' : 'var(--blindaje-emerald)'}; margin-bottom: 12px;">
          <div>🧵 <strong>Modelo Base Printful:</strong> ${item.printfulModel}</div>
          <div style="color: var(--text-muted); margin-top: 3px;">📐 <strong>Lienzos DTG & Bordado:</strong> ${item.printfulSpecs}</div>
        </div>

        <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 14px;">
          ${item.description}
        </p>

        <div class="product-quote-snippet" style="margin-bottom: 14px;">
          “${item.quote}”
          <div style="font-size: 0.72rem; color: var(--refugio-gold); margin-top: 4px; font-family: var(--font-tech);">
            ✦ Microfrase seleccionada (${chosenArm === 'left' ? 'Brazo Izquierdo' : 'Brazo Derecho'}): <strong>“${effectiveCuff}”</strong> ${isCustom ? '(Personalizada)' : ''}
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px; border-top: 1px solid var(--border-subtle); padding-top: 16px;">
          <div class="product-price">${item.price.toFixed(2)} €</div>
          <button class="btn-primary" onclick="addToCart('${item.id}'); closeProductModal();">
            Añadir a la Bolsa
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("product-quickview-modal").classList.add("active");
}

function closeProductModal() {
  document.getElementById("product-quickview-modal").classList.remove("active");
}

// Background Star & Cosmic Emission Canvas Animation
function initCosmosCanvas() {
  const canvas = document.getElementById("cosmos-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let stars = [];
  let t = 0;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.3 + 0.3,
      a: Math.random() * 0.7 + 0.2,
      v: Math.random() * 0.15 + 0.03,
      isAurora: Math.random() > 0.5
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += 0.012;

    // Subtle dual cosmic nebulae in corners
    // Top-left: subtle lavender glow
    const grad1 = ctx.createRadialGradient(0, 0, 50, 0, 0, 600);
    grad1.addColorStop(0, "rgba(196, 181, 253, 0.06)");
    grad1.addColorStop(1, "transparent");
    ctx.fillStyle = grad1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Bottom-right: subtle borealis emerald wave
    const grad2 = ctx.createRadialGradient(canvas.width, canvas.height, 50, canvas.width, canvas.height, 700);
    grad2.addColorStop(0, "rgba(52, 211, 153, 0.05)");
    grad2.addColorStop(1, "transparent");
    ctx.fillStyle = grad2;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Stars floating
    stars.forEach(s => {
      s.y -= s.v;
      if (s.y < 0) {
        s.y = canvas.height;
        s.x = Math.random() * canvas.width;
      }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.isAurora 
        ? `rgba(52, 211, 153, ${s.a * 0.7})` 
        : `rgba(196, 181, 253, ${s.a * 0.7})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }
  animate();
}

// Initializer
window.addEventListener("DOMContentLoaded", () => {
  initCosmosCanvas();
  renderCatalog();
});
