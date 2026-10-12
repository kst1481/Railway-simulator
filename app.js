const lineCatalog = [
  { id: "yamanote", name: "JR Yamanote", color: "#80bd8a", tag: "JR" },
  { id: "chuo", name: "JR Chuo", color: "#e97b62", tag: "JR" },
  { id: "ginza", name: "Ginza Line", color: "#e1ae62", tag: "METRO" },
  { id: "marunouchi", name: "Marunouchi", color: "#dc796f", tag: "METRO" },
];

const stations = [
  { id: "tokyo", name: "Tokyo", jp: "東京", x: 201, y: 326, lines: ["yamanote", "chuo", "marunouchi"] },
  { id: "yurakucho", name: "Yurakucho", jp: "有楽町", x: 226, y: 350, lines: ["yamanote"] },
  { id: "shimbashi", name: "Shimbashi", jp: "新橋", x: 246, y: 376, lines: ["yamanote", "ginza"] },
  { id: "hamamatsucho", name: "Hamamatsucho", jp: "浜松町", x: 245, y: 404, lines: ["yamanote"] },
  { id: "shinagawa", name: "Shinagawa", jp: "品川", x: 229, y: 438, lines: ["yamanote"] },
  { id: "shibuya", name: "Shibuya", jp: "渋谷", x: 142, y: 402, lines: ["yamanote", "ginza"] },
  { id: "shinjuku", name: "Shinjuku", jp: "新宿", x: 139, y: 328, lines: ["yamanote", "chuo", "marunouchi"] },
  { id: "ikebukuro", name: "Ikebukuro", jp: "池袋", x: 143, y: 238, lines: ["yamanote", "marunouchi"] },
  { id: "nippori", name: "Nippori", jp: "日暮里", x: 220, y: 194, lines: ["yamanote"] },
  { id: "ueno", name: "Ueno", jp: "上野", x: 232, y: 222, lines: ["yamanote", "ginza"] },
  { id: "akihabara", name: "Akihabara", jp: "秋葉原", x: 222, y: 266, lines: ["yamanote"] },
  { id: "kanda", name: "Kanda", jp: "神田", x: 208, y: 297, lines: ["yamanote", "chuo"] },
  { id: "ochanomizu", name: "Ochanomizu", jp: "御茶ノ水", x: 177, y: 280, lines: ["chuo"] },
  { id: "ginza", name: "Ginza", jp: "銀座", x: 254, y: 334, lines: ["ginza", "marunouchi"] },
  { id: "omotesando", name: "Omotesando", jp: "表参道", x: 108, y: 373, lines: ["ginza"] },
  { id: "akasaka", name: "Akasaka-mitsuke", jp: "赤坂見附", x: 132, y: 348, lines: ["ginza", "marunouchi"] },
];

const routes = [
  { id: "yamanote-tokyo-yurakucho", from: "tokyo", to: "yurakucho", line: "yamanote", bend: [219, 327] },
  { id: "yamanote-yurakucho-shimbashi", from: "yurakucho", to: "shimbashi", line: "yamanote" },
  { id: "yamanote-shimbashi-hamamatsucho", from: "shimbashi", to: "hamamatsucho", line: "yamanote" },
  { id: "yamanote-hamamatsucho-shinagawa", from: "hamamatsucho", to: "shinagawa", line: "yamanote", bend: [233, 424] },
  { id: "yamanote-shinagawa-shibuya", from: "shinagawa", to: "shibuya", line: "yamanote", bend: [188, 440] },
  { id: "yamanote-shibuya-shinjuku", from: "shibuya", to: "shinjuku", line: "yamanote", bend: [134, 366] },
  { id: "yamanote-shinjuku-ikebukuro", from: "shinjuku", to: "ikebukuro", line: "yamanote", bend: [127, 282] },
  { id: "yamanote-ikebukuro-nippori", from: "ikebukuro", to: "nippori", line: "yamanote", bend: [171, 201] },
  { id: "yamanote-nippori-ueno", from: "nippori", to: "ueno", line: "yamanote" },
  { id: "yamanote-ueno-akihabara", from: "ueno", to: "akihabara", line: "yamanote" },
  { id: "yamanote-akihabara-kanda", from: "akihabara", to: "kanda", line: "yamanote" },
  { id: "yamanote-kanda-tokyo", from: "kanda", to: "tokyo", line: "yamanote" },
  { id: "chuo-tokyo-kanda", from: "tokyo", to: "kanda", line: "chuo", bend: [211, 318] },
  { id: "chuo-kanda-ochanomizu", from: "kanda", to: "ochanomizu", line: "chuo" },
  { id: "chuo-ochanomizu-shinjuku", from: "ochanomizu", to: "shinjuku", line: "chuo", bend: [143, 296] },
  { id: "ginza-ueno-ginza", from: "ueno", to: "ginza", line: "ginza", bend: [260, 276] },
  { id: "ginza-ginza-shimbashi", from: "ginza", to: "shimbashi", line: "ginza" },
  { id: "ginza-ginza-akasaka", from: "ginza", to: "akasaka", line: "ginza", bend: [185, 332] },
  { id: "ginza-akasaka-omotesando", from: "akasaka", to: "omotesando", line: "ginza" },
  { id: "ginza-omotesando-shibuya", from: "omotesando", to: "shibuya", line: "ginza", bend: [98, 389] },
  { id: "marunouchi-tokyo-ginza", from: "tokyo", to: "ginza", line: "marunouchi", bend: [239, 325] },
  { id: "marunouchi-ginza-akasaka", from: "ginza", to: "akasaka", line: "marunouchi", bend: [191, 324] },
  { id: "marunouchi-akasaka-shinjuku", from: "akasaka", to: "shinjuku", line: "marunouchi", bend: [125, 337] },
  { id: "marunouchi-shinjuku-ikebukuro", from: "shinjuku", to: "ikebukuro", line: "marunouchi", bend: [151, 285] },
];

const stationById = new Map(stations.map((station) => [station.id, station]));
const lineById = new Map(lineCatalog.map((line) => [line.id, line]));
const routeById = new Map(routes.map((route) => [route.id, route]));
const adjacency = new Map(stations.map((station) => [station.id, []]));
routes.forEach((route) => {
  adjacency.get(route.from).push({ stationId: route.to, route });
  adjacency.get(route.to).push({ stationId: route.from, route });
});

const player = { stationId: "tokyo", visited: new Set(["tokyo"]), snacks: 0, mood: "A ticket, a little time, and nowhere in particular." };
const closures = new Map();
const closureTimers = new Map();
const eventLog = document.querySelector("#event-log");
const toast = document.querySelector("#toast");
let selectedDestination = null;
let toastTimer;
let incidentTimer;

function makeSvg(name, attributes = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function tokyoParts(date = new Date()) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date).reduce((parts, part) => {
    if (part.type !== "literal") parts[part.type] = Number(part.value);
    return parts;
  }, {});
}

function formatLogTime(date = new Date()) {
  const parts = tokyoParts(date);
  return `${String(parts.hour).padStart(2, "0")}:${String(parts.minute).padStart(2, "0")}`;
}

function updateClock() {
  const now = new Date();
  const parts = tokyoParts(now);
  const hours = parts.hour % 12;
  const hourDegrees = hours * 30 + parts.minute * 0.5;
  const minuteDegrees = parts.minute * 6 + parts.second * 0.1;
  const secondDegrees = parts.second * 6;
  document.querySelector("#hour-hand").style.transform = `rotate(${hourDegrees}deg)`;
  document.querySelector("#minute-hand").style.transform = `rotate(${minuteDegrees}deg)`;
  document.querySelector("#second-hand").style.transform = `rotate(${secondDegrees}deg)`;
  document.querySelector("#digital-time").textContent = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).format(now);
  document.querySelector("#clock-date").textContent = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Tokyo",
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(now).toUpperCase();
}

function makeClockTicks() {
  const group = document.querySelector("#clock-ticks");
  for (let tick = 0; tick < 60; tick += 1) {
    const angle = tick * 6 * Math.PI / 180;
    const major = tick % 5 === 0;
    const inner = major ? 69 : 75;
    const outer = 79;
    group.append(makeSvg("line", {
      x1: 100 + Math.sin(angle) * inner,
      y1: 100 - Math.cos(angle) * inner,
      x2: 100 + Math.sin(angle) * outer,
      y2: 100 - Math.cos(angle) * outer,
      class: `clock-tick${major ? " is-major" : ""}`,
    }));
  }
}

function routePath(route) {
  const from = stationById.get(route.from);
  const to = stationById.get(route.to);
  return route.bend
    ? `M${from.x} ${from.y} Q${route.bend[0]} ${route.bend[1]} ${to.x} ${to.y}`
    : `M${from.x} ${from.y} L${to.x} ${to.y}`;
}

function isRouteOpen(route) {
  const expiresAt = closures.get(route.id);
  if (!expiresAt) return true;
  if (expiresAt <= Date.now()) {
    closures.delete(route.id);
    return true;
  }
  return false;
}

function openConnections(stationId = player.stationId) {
  const connections = new Map();
  adjacency.get(stationId).forEach(({ stationId: nextId, route }) => {
    const candidate = { station: stationById.get(nextId), route, open: isRouteOpen(route) };
    const existing = connections.get(nextId);
    if (!existing || (!existing.open && candidate.open)) connections.set(nextId, candidate);
  });
  return [...connections.values()];
}

function addLog(type, title, detail) {
  const entry = document.createElement("div");
  entry.className = `log-entry is-${type}`;
  const time = document.createElement("span");
  time.className = "log-time";
  time.textContent = formatLogTime();
  const marker = document.createElement("span");
  marker.className = "log-marker";
  const copy = document.createElement("p");
  const heading = document.createElement("strong");
  heading.textContent = title;
  copy.append(heading, document.createElement("br"), document.createTextNode(detail));
  entry.append(time, marker, copy);

  const empty = eventLog.querySelector(".log-empty");
  empty?.remove();
  eventLog.prepend(entry);
  while (eventLog.children.length > 35) eventLog.lastElementChild.remove();
  updateLogCount();
}

function updateLogCount() {
  const count = eventLog.querySelectorAll(".log-entry").length;
  document.querySelector("#log-entry-count").textContent = `${String(count).padStart(2, "0")} ${count === 1 ? "ENTRY" : "ENTRIES"}`;
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3400);
}

function renderLegend() {
  const container = document.querySelector("#line-legend");
  container.replaceChildren();
  lineCatalog.forEach((line) => {
    const item = document.createElement("div");
    item.className = "legend-item";
    const swatch = document.createElement("span");
    swatch.className = "legend-line";
    swatch.style.backgroundColor = line.color;
    const label = document.createElement("span");
    label.textContent = line.name;
    const tag = document.createElement("small");
    tag.textContent = line.tag;
    item.append(swatch, label, tag);
    container.append(item);
  });
}

function renderRoutes() {
  const layer = document.querySelector("#network-routes");
  layer.replaceChildren();
  routes.forEach((route) => {
    const line = lineById.get(route.line);
    const routeElement = makeSvg("path", {
      d: routePath(route),
      class: `rail-route${route.line === stationById.get(player.stationId).lines[0] ? " is-current-line" : ""}${isRouteOpen(route) ? "" : " is-closed"}`,
      stroke: line.color,
      "data-route-id": route.id,
    });
    const title = makeSvg("title");
    title.textContent = `${line.name}: ${stationById.get(route.from).name} to ${stationById.get(route.to).name}${isRouteOpen(route) ? "" : " (temporarily closed)"}`;
    routeElement.append(title);
    layer.append(routeElement);
  });
}

function selectDestination(stationId) {
  const connection = openConnections().find(({ station, open }) => station.id === stationId && open);
  if (!connection) {
    const closed = openConnections().some(({ station, open }) => station.id === stationId && !open);
    showToast(closed ? "That connection is temporarily closed. Try another line or wait for the signal." : "Choose a station connected to your current stop.");
    return;
  }
  selectedDestination = selectedDestination === stationId ? null : stationId;
  render();
}

function renderStations() {
  const layer = document.querySelector("#network-stations");
  layer.replaceChildren();
  const connections = openConnections();
  const reachable = new Set(connections.filter(({ open }) => open).map(({ station }) => station.id));
  const blocked = new Set(connections.filter(({ open }) => !open).map(({ station }) => station.id));

  stations.forEach((station) => {
    const current = station.id === player.stationId;
    const selected = station.id === selectedDestination;
    const group = makeSvg("g", {
      class: `station-node${current ? " is-current" : ""}${reachable.has(station.id) ? " is-reachable" : ""}${blocked.has(station.id) ? " is-closed" : ""}${selected ? " is-selected" : ""}`,
      transform: `translate(${station.x} ${station.y})`,
      tabindex: "0",
      role: "button",
      "aria-pressed": selected ? "true" : "false",
      "aria-label": `${station.name}, ${station.jp}${current ? ", your location" : reachable.has(station.id) ? ", reachable" : blocked.has(station.id) ? ", connection closed" : ""}`,
      "data-station-id": station.id,
    });
    group.append(makeSvg("circle", { cx: 0, cy: 0, r: 14, class: "station-hit" }));
    group.append(makeSvg("circle", { cx: 0, cy: 0, r: current ? 10 : 8, class: "station-halo" }));
    group.append(makeSvg("circle", { cx: 0, cy: 0, r: current ? 4.5 : 3.6, class: "station-core" }));
    const label = makeSvg("text", {
      x: station.x < 170 ? -11 : 10,
      y: station.id === "tokyo" ? -11 : 3,
      "text-anchor": station.x < 170 ? "end" : "start",
      class: "station-label",
    });
    label.textContent = station.name;
    group.append(label);
    group.addEventListener("click", () => selectDestination(station.id));
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectDestination(station.id);
      }
    });
    layer.append(group);
  });
}

function renderDestinations() {
  const container = document.querySelector("#destinations");
  container.replaceChildren();
  openConnections().forEach(({ station, route, open }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `destination-button${selectedDestination === station.id ? " is-selected" : ""}${open ? "" : " is-blocked"}`;
    button.style.setProperty("--route-color", lineById.get(route.line).color);
    button.disabled = !open;
    button.setAttribute("aria-label", `${station.name}, ${lineById.get(route.line).name}${open ? "" : ", temporarily closed"}`);
    const dot = document.createElement("i");
    dot.className = "destination-dot";
    const name = document.createElement("span");
    name.textContent = station.name;
    button.append(dot, name);
    button.addEventListener("click", () => selectDestination(station.id));
    container.append(button);
  });

  const rideButton = document.querySelector("#ride-action");
  const rideLabel = document.querySelector("#ride-label");
  const rideDetail = document.querySelector("#ride-detail");
  const selected = openConnections().find(({ station }) => station.id === selectedDestination);
  rideButton.disabled = !selected;
  rideLabel.textContent = selected ? `Ride to ${selected.station.name}` : "Choose your next stop";
  rideDetail.textContent = selected ? `${lineById.get(selected.route.line).name} · direct connection` : "Tap a connected station on the map";
}

function renderPlayer() {
  const station = stationById.get(player.stationId);
  const primaryLine = lineCatalog.find((line) => station.lines.includes(line.id));
  document.querySelector("#player-title").innerHTML = `${station.name} <span lang="ja">${station.jp}</span>`;
  document.querySelector("#station-overline").textContent = `${primaryLine.name.toUpperCase()} · PLATFORM ${1 + station.name.length % 6}`;
  document.querySelector("#station-caption").textContent = station.id === "tokyo"
    ? "The city hums around you. Where to next?"
    : `${station.name} has a rhythm all its own. Take a breath, then wander on.`;
  document.querySelector("#player-status").textContent = player.mood;
  document.querySelector("#visited-count").textContent = `${String(player.visited.size).padStart(2, "0")} ${player.visited.size === 1 ? "STATION" : "STATIONS"} VISITED`;
}

function render() {
  renderRoutes();
  renderStations();
  renderDestinations();
  renderPlayer();
}

function rideToSelectedStation() {
  if (!selectedDestination) return;
  const connection = openConnections().find(({ station, open }) => station.id === selectedDestination && open);
  if (!connection) {
    selectedDestination = null;
    render();
    showToast("That route changed. Pick another open connection.");
    return;
  }

  const origin = stationById.get(player.stationId);
  const line = lineById.get(connection.route.line);
  const destination = connection.station;
  player.stationId = destination.id;
  player.visited.add(destination.id);
  player.mood = `Just arrived from ${origin.name}. The city keeps unfolding.`;
  selectedDestination = null;
  render();
  addLog("action", `Rode the ${line.name}.`, `${origin.name} → ${destination.name}. A short ride through the city.`);
  showToast(`Next stop, ${destination.name}. The city keeps unfolding.`);
}

function lookAround() {
  const observations = [
    "A distant station melody drifts through the evening air.",
    "A train slips past, windows glowing like little lanterns.",
    "Someone has left a tiny paper crane on the bench.",
    "The platform lights make the rails shine like ribbons.",
    "You catch the warm smell of roasted tea from somewhere nearby.",
  ];
  player.mood = observations[Math.floor(Math.random() * observations.length)];
  document.querySelector("#player-status").textContent = player.mood;
  addLog("action", "Looked around the platform.", player.mood);
}

function findSnack() {
  const snacks = ["warm melonpan", "a little onigiri", "yuzu soda", "sweet red-bean taiyaki", "a tiny cup of matcha"];
  const snack = snacks[Math.floor(Math.random() * snacks.length)];
  player.snacks += 1;
  player.mood = `Enjoying ${snack}. A perfect little platform pause.`;
  document.querySelector("#player-status").textContent = player.mood;
  addLog("action", `Found ${snack}.`, "A konbini detour well spent. The journey can wait a moment.");
  showToast(`You found ${snack}. A perfect little platform pause.`);
}

function availableConnections(stationId = player.stationId) {
  return openConnections(stationId).filter(({ open }) => open);
}

function triggerIncident() {
  const now = Date.now();
  [...closures].forEach(([routeId, expiresAt]) => {
    if (expiresAt <= now) {
      closures.delete(routeId);
      const route = routeById.get(routeId);
      const line = lineById.get(route.line);
      addLog("action", `${line.name} connection restored.`, `Service is back between ${stationById.get(route.from).name} and ${stationById.get(route.to).name}.`);
    }
  });

  const incidentType = Math.random();
  if (incidentType < 0.64) {
    const candidates = routes.filter((route) => isRouteOpen(route));
    if (!candidates.length) return;
    const route = candidates[Math.floor(Math.random() * candidates.length)];
    const line = lineById.get(route.line);
    const duration = 28 + Math.floor(Math.random() * 18);
    const expiresAt = now + duration * 1000;
    closures.set(route.id, expiresAt);
    const currentAffected = player.stationId === route.from || player.stationId === route.to;
    if (selectedDestination && [route.from, route.to].includes(player.stationId) &&
      [route.from, route.to].includes(selectedDestination)) {
      selectedDestination = null;
    }
    render();
    addLog("incident", "A signal check is underway.", `${line.name} is paused between ${stationById.get(route.from).name} and ${stationById.get(route.to).name}. ${currentAffected ? "Choose another open connection or wait a little." : `Expected to clear in about ${duration} seconds.`}`);
    showToast(`${line.name} has a brief signal check. The map shows the closed connection.`);
    const timer = window.setTimeout(() => {
      if (closures.get(route.id) !== expiresAt) return;
      closures.delete(route.id);
      closureTimers.delete(route.id);
      render();
      addLog("action", `${line.name} connection restored.`, `Service is back between ${stationById.get(route.from).name} and ${stationById.get(route.to).name}.`);
    }, duration * 1000);
    closureTimers.set(route.id, timer);
    return;
  }

  const options = availableConnections();
  if (!options.length) {
    addLog("incident", "Platform reassignment.", "A station announcement shifts your train to the nearest available platform. Your location stays put while services recover.");
    showToast("A platform change was announced, but all nearby routes are paused.");
    return;
  }
  const previous = stationById.get(player.stationId);
  const connection = options[Math.floor(Math.random() * options.length)];
  player.stationId = connection.station.id;
  player.visited.add(player.stationId);
  player.mood = "A last-minute platform change brought you somewhere new.";
  selectedDestination = null;
  render();
  addLog("incident", "Platform change — please mind the gap.", `A service reassignment carries you from ${previous.name} to ${connection.station.name}. It wasn't on the plan, but it's part of the story.`);
  showToast(`Surprise stop: ${connection.station.name}. The railway has other ideas.`);
}

function scheduleIncident() {
  const delay = 18000 + Math.floor(Math.random() * 14000);
  incidentTimer = window.setTimeout(() => {
    if (Math.random() < 0.56) triggerIncident();
    scheduleIncident();
  }, delay);
}

function renderInitialClock() {
  makeClockTicks();
  updateClock();
  window.setInterval(updateClock, 1000);
}

document.querySelector("#ride-action").addEventListener("click", rideToSelectedStation);
document.querySelector("#look-action").addEventListener("click", lookAround);
document.querySelector("#snack-action").addEventListener("click", findSnack);
document.querySelector("#clear-log").addEventListener("click", () => {
  eventLog.replaceChildren();
  const empty = document.createElement("p");
  empty.className = "log-empty";
  empty.textContent = "A fresh page. Your next little moment will appear here.";
  eventLog.append(empty);
  addLog("action", "Journey log cleared.", "Your current location and adventure continue.");
  updateLogCount();
});
document.querySelector("#restart-button").addEventListener("click", () => {
  window.clearTimeout(incidentTimer);
  closureTimers.forEach((timer) => window.clearTimeout(timer));
  closureTimers.clear();
  closures.clear();
  player.stationId = "tokyo";
  player.visited = new Set(["tokyo"]);
  player.snacks = 0;
  player.mood = "A ticket, a little time, and nowhere in particular.";
  selectedDestination = null;
  eventLog.replaceChildren();
  render();
  addLog("action", "A fresh day in Tokyo.", "You find yourself at Tokyo Station, platform 9. The city is waiting.");
  showToast("A fresh day in Tokyo. Platform 9 is ready when you are.");
  scheduleIncident();
});

renderLegend();
renderInitialClock();
render();
const welcomeTime = eventLog.querySelector(".welcome-entry .log-time");
if (welcomeTime) welcomeTime.textContent = formatLogTime();
updateLogCount();
scheduleIncident();
