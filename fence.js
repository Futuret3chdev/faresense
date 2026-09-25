const groups = [
  ["cbd", "CBD", "City, Docklands, Carlton"],
  ["north", "Inner north", "Fitzroy through Preston"],
  ["east", "Inner east", "Richmond through Camberwell"],
  ["south", "Inner south", "South Yarra through St Kilda"],
  ["bayside", "Bayside", "Elwood through Mentone"],
  ["west", "Inner west", "Footscray, Yarraville, Williamstown"],
  ["airport", "Airport & west", "Tullamarine, Sunshine, Werribee"],
  ["outerEast", "Outer east", "Box Hill, Doncaster, Ringwood"],
  ["southEast", "South-east", "Clayton through Frankston"],
];

const suburbs = [
  ["melbourne", "Melbourne CBD", "cbd", -37.8136, 144.9631],
  ["docklands", "Docklands", "cbd", -37.815, 144.946],
  ["southbank", "Southbank", "cbd", -37.823, 144.964],
  ["carlton", "Carlton", "cbd", -37.8004, 144.9672],
  ["east-melbourne", "East Melbourne", "cbd", -37.813, 144.985],
  ["north-melbourne", "North Melbourne", "cbd", -37.802, 144.948],
  ["fitzroy", "Fitzroy", "north", -37.798, 144.978],
  ["collingwood", "Collingwood", "north", -37.802, 144.988],
  ["brunswick", "Brunswick", "north", -37.766, 144.96],
  ["coburg", "Coburg", "north", -37.744, 144.964],
  ["northcote", "Northcote", "north", -37.772, 144.998],
  ["thornbury", "Thornbury", "north", -37.758, 144.998],
  ["preston", "Preston", "north", -37.742, 145.007],
  ["reservoir", "Reservoir", "north", -37.716, 145.007],
  ["richmond", "Richmond", "east", -37.823, 144.998],
  ["cremorne", "Cremorne", "east", -37.828, 144.993],
  ["hawthorn", "Hawthorn", "east", -37.822, 145.032],
  ["kew", "Kew", "east", -37.807, 145.031],
  ["camberwell", "Camberwell", "east", -37.83, 145.069],
  ["balwyn", "Balwyn", "east", -37.809, 145.067],
  ["glen-iris", "Glen Iris", "east", -37.859, 145.058],
  ["south-yarra", "South Yarra", "south", -37.838, 144.992],
  ["prahran", "Prahran", "south", -37.851, 144.993],
  ["windsor", "Windsor", "south", -37.854, 144.992],
  ["st-kilda", "St Kilda", "south", -37.864, 144.982],
  ["st-kilda-east", "St Kilda East", "south", -37.863, 145.001],
  ["armadale", "Armadale", "south", -37.855, 145.019],
  ["toorak", "Toorak", "south", -37.841, 145.018],
  ["malvern", "Malvern", "south", -37.862, 145.028],
  ["caulfield", "Caulfield", "south", -37.877, 145.023],
  ["elwood", "Elwood", "bayside", -37.882, 144.986],
  ["elsternwick", "Elsternwick", "bayside", -37.884, 145.001],
  ["brighton", "Brighton", "bayside", -37.906, 144.999],
  ["hampton", "Hampton", "bayside", -37.938, 145.001],
  ["sandringham", "Sandringham", "bayside", -37.953, 145.004],
  ["black-rock", "Black Rock", "bayside", -37.971, 145.017],
  ["cheltenham", "Cheltenham", "bayside", -37.967, 145.054],
  ["mentone", "Mentone", "bayside", -37.982, 145.065],
  ["footscray", "Footscray", "west", -37.8, 144.9],
  ["yarraville", "Yarraville", "west", -37.816, 144.89],
  ["seddon", "Seddon", "west", -37.808, 144.891],
  ["williamstown", "Williamstown", "west", -37.86, 144.898],
  ["newport", "Newport", "west", -37.844, 144.883],
  ["ascot-vale", "Ascot Vale", "west", -37.775, 144.922],
  ["moonee-ponds", "Moonee Ponds", "west", -37.766, 144.922],
  ["essendon", "Essendon", "west", -37.755, 144.916],
  ["airport", "Melbourne Airport", "airport", -37.669, 144.851],
  ["tullamarine", "Tullamarine", "airport", -37.701, 144.882],
  ["keilor", "Keilor", "airport", -37.716, 144.83],
  ["sunshine", "Sunshine", "airport", -37.788, 144.832],
  ["st-albans", "St Albans", "airport", -37.745, 144.8],
  ["deer-park", "Deer Park", "airport", -37.767, 144.77],
  ["werribee", "Werribee", "airport", -37.9, 144.662],
  ["hoppers", "Hoppers Crossing", "airport", -37.883, 144.7],
  ["point-cook", "Point Cook", "airport", -37.915, 144.747],
  ["tarneit", "Tarneit", "airport", -37.836, 144.668],
  ["box-hill", "Box Hill", "outerEast", -37.819, 145.122],
  ["doncaster", "Doncaster", "outerEast", -37.785, 145.124],
  ["heidelberg", "Heidelberg", "outerEast", -37.757, 145.068],
  ["ivanhoe", "Ivanhoe", "outerEast", -37.769, 145.041],
  ["blackburn", "Blackburn", "outerEast", -37.819, 145.151],
  ["ringwood", "Ringwood", "outerEast", -37.815, 145.229],
  ["glen-waverley", "Glen Waverley", "outerEast", -37.88, 145.164],
  ["mount-waverley", "Mount Waverley", "outerEast", -37.877, 145.129],
  ["burwood", "Burwood", "outerEast", -37.85, 145.109],
  ["clayton", "Clayton", "southEast", -37.915, 145.12],
  ["oakleigh", "Oakleigh", "southEast", -37.9, 145.088],
  ["springvale", "Springvale", "southEast", -37.949, 145.153],
  ["noble-park", "Noble Park", "southEast", -37.967, 145.176],
  ["dandenong", "Dandenong", "southEast", -37.987, 145.215],
  ["keysborough", "Keysborough", "southEast", -38.005, 145.174],
  ["cranbourne", "Cranbourne", "southEast", -38.1, 145.283],
  ["narre-warren", "Narre Warren", "southEast", -38.028, 145.304],
  ["mordialloc", "Mordialloc", "southEast", -38.006, 145.087],
  ["chelsea", "Chelsea", "southEast", -38.052, 145.116],
  ["frankston", "Frankston", "southEast", -38.142, 145.123],
].map(([id, name, group, lat, lng]) => ({ id, name, group, lat, lng }));

const BOUNDS = { west: 144.6, east: 145.4, north: -37.6, south: -38.18 };
const KEY = "faresense_fence_v1";

const presets = {
  inner: { startId: "richmond", radiusKm: 10, off: ["airport", "outerEast", "southEast"] },
  south: { startId: "brighton", radiusKm: 14, off: ["north", "west", "airport", "outerEast", "southEast"] },
  open: { startId: "richmond", radiusKm: 40, off: [] },
};

function byId(id) {
  return suburbs.find((s) => s.id === id) || suburbs[0];
}
function kmBetween(a, b) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}
function project(lat, lng) {
  return {
    x: ((lng - BOUNDS.west) / (BOUNDS.east - BOUNDS.west)) * 100,
    y: ((BOUNDS.north - lat) / (BOUNDS.north - BOUNDS.south)) * 100,
  };
}
function ellipse(km) {
  const mid = (((BOUNDS.north + BOUNDS.south) / 2) * Math.PI) / 180;
  const widthKm = (BOUNDS.east - BOUNDS.west) * 111.32 * Math.cos(mid);
  const heightKm = (BOUNDS.north - BOUNDS.south) * 110.574;
  return { rx: (km / widthKm) * 100, ry: (km / heightKm) * 100 };
}
function defaultFence() {
  return { startId: "richmond", radiusKm: 10, dropId: "werribee", groups: Object.fromEntries(groups.map(([id]) => [id, !["airport", "outerEast", "southEast"].includes(id)])) };
}
function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "null");
    const base = defaultFence();
    if (!raw || !suburbs.some((s) => s.id === raw.startId)) return base;
    groups.forEach(([id]) => {
      if (typeof raw.groups?.[id] === "boolean") base.groups[id] = raw.groups[id];
    });
    const radius = Number(raw.radiusKm);
    base.startId = raw.startId;
    base.radiusKm = Number.isFinite(radius) ? Math.min(40, Math.max(4, radius)) : 10;
    if (suburbs.some((s) => s.id === raw.dropId)) base.dropId = raw.dropId;
    return base;
  } catch {
    return defaultFence();
  }
}

const state = load();
const $ = (id) => document.getElementById(id);

function rows() {
  const start = byId(state.startId);
  return suburbs.map((suburb) => {
    const km = kmBetween(start, suburb);
    const on = state.groups[suburb.group] !== false;
    return { suburb, km, in: suburb.id === start.id || (on && km <= state.radiusKm + 0.05) };
  });
}
function assess() {
  const list = rows();
  const drop = list.find((r) => r.suburb.id === state.dropId) || list[0];
  if (drop.in) return { drop, backKm: 0, via: drop.suburb.name };
  let backKm = drop.km;
  let via = byId(state.startId).name;
  list.filter((r) => r.in).forEach((r) => {
    const km = kmBetween(drop.suburb, r.suburb);
    if (km < backKm) {
      backKm = km;
      via = r.suburb.name;
    }
  });
  return { drop, backKm, via };
}

function options(selected) {
  return groups
    .map(([id, name]) => {
      const opts = suburbs
        .filter((s) => s.group === id)
        .map((s) => `<option value="${s.id}"${s.id === selected ? " selected" : ""}>${s.name}</option>`)
        .join("");
      return `<optgroup label="${name}">${opts}</optgroup>`;
    })
    .join("");
}

function render() {
  localStorage.setItem(KEY, JSON.stringify(state));
  const list = rows();
  const inside = list.filter((r) => r.in);
  const outside = list.filter((r) => !r.in);
  const start = byId(state.startId);
  const drop = assess();
  const off = groups.filter(([id]) => !state.groups[id]).map(([, name]) => name);
  const open = inside.length > list.length * 0.8;
  const call = $("call");
  call.className = "ticket " + (open ? "hold" : "go");
  $("callTitle").textContent = start.name + " · " + state.radiusKm + " km";
  $("callText").textContent = open
    ? inside.length + " suburbs are in. That is the shift Uber already gives you."
    : inside.length + " suburbs stay in. " + outside.length + " are a deadhead." + (off.length ? " Off: " + off.join(", ") + "." : "");
  $("nIn").textContent = String(inside.length);
  $("nOut").textContent = String(outside.length);
  $("nBack").textContent = drop.drop.in ? "In" : drop.backKm.toFixed(0) + " km";
  $("nFrom").textContent = drop.drop.km.toFixed(0) + " km";
  $("radiusLabel").textContent = state.radiusKm + " km";
  $("radius").value = state.radiusKm;
  $("dropLine").textContent = drop.drop.in
    ? drop.drop.suburb.name + " is inside the fence, " + drop.drop.km.toFixed(0) + " km from " + start.name + ". No empty ride home."
    : drop.drop.suburb.name + " is " + drop.drop.km.toFixed(0) + " km from " + start.name + ". Getting back to " + drop.via + " is " + drop.backKm.toFixed(0) + " km, about " + Math.max(1, Math.round(drop.backKm * 2.2)) + " minutes, before you are somewhere you still work.";

  const pt = project(start.lat, start.lng);
  const ring = ellipse(state.radiusKm);
  const dots = list
    .map((r) => {
      const p = project(r.suburb.lat, r.suburb.lng);
      const hot = r.suburb.id === state.dropId;
      const fill = hot ? "#ffb020" : r.in ? "#c6f25a" : "#3a3428";
      const rad = hot || r.suburb.id === start.id ? 1.7 : 1.05;
      return `<circle cx="${p.x.toFixed(2)}" cy="${p.y.toFixed(2)}" r="${rad}" fill="${fill}"/>`;
    })
    .join("");
  $("map").innerHTML =
    `<rect width="100" height="100" rx="4" fill="#14120f"/>` +
    `<ellipse cx="${pt.x.toFixed(2)}" cy="${pt.y.toFixed(2)}" rx="${ring.rx.toFixed(2)}" ry="${ring.ry.toFixed(2)}" fill="none" stroke="#ffb020" stroke-width="0.6" stroke-dasharray="1.4 1.1"/>` +
    dots;

  $("groups").innerHTML = groups
    .map(([id, name, hint]) => {
      const count = list.filter((r) => r.suburb.group === id && r.in).length;
      const total = list.filter((r) => r.suburb.group === id).length;
      const on = state.groups[id];
      return `<button type="button" class="group-btn${on ? " on" : ""}" data-group="${id}"><b>${name}</b><span>${on ? count + " of " + total + " in" : "Off"} · ${hint}</span></button>`;
    })
    .join("");
  $("inside").innerHTML = inside.map((r) => `<span class="chip">${r.suburb.name}</span>`).join("");
  document.querySelectorAll(".preset").forEach((btn) => {
    const p = presets[btn.dataset.preset];
    const sameStart = p.startId === state.startId && p.radiusKm === state.radiusKm;
    const sameGroups = groups.every(([id]) => state.groups[id] === !p.off.includes(id));
    btn.classList.toggle("on", sameStart && sameGroups);
  });
}

function fillSelects() {
  $("start").innerHTML = options(state.startId);
  $("drop").innerHTML = options(state.dropId);
}

$("start").addEventListener("change", (e) => {
  state.startId = e.target.value;
  render();
});
$("drop").addEventListener("change", (e) => {
  state.dropId = e.target.value;
  render();
});
$("radius").addEventListener("input", (e) => {
  state.radiusKm = Number(e.target.value);
  render();
});
$("groups").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-group]");
  if (!btn) return;
  state.groups[btn.dataset.group] = !state.groups[btn.dataset.group];
  render();
});
document.querySelectorAll(".preset").forEach((btn) => {
  btn.addEventListener("click", () => {
    const p = presets[btn.dataset.preset];
    state.startId = p.startId;
    state.radiusKm = p.radiusKm;
    groups.forEach(([id]) => {
      state.groups[id] = !p.off.includes(id);
    });
    fillSelects();
    render();
  });
});

fillSelects();
render();
