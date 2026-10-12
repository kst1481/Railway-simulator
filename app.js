const stations = [
  { id: "sapporo", name: "Sapporo", japanese: "札幌", region: "Hokkaido", x: 572, y: 91, label: [-21, -17], lines: ["Hokkaido"], mark: "雪", accent: "#d9ad62" },
  { id: "hakodate", name: "Shin-Hakodate", japanese: "新函館北斗", region: "Hokkaido", x: 552, y: 183, label: [-78, 6], lines: ["Hokkaido"], mark: "海", accent: "#d9ad62" },
  { id: "aomori", name: "Shin-Aomori", japanese: "新青森", region: "Tohoku", x: 523, y: 255, label: [-79, -10], lines: ["Tohoku", "Hokkaido"], mark: "森", accent: "#77a2bb" },
  { id: "sendai", name: "Sendai", japanese: "仙台", region: "Tohoku", x: 535, y: 348, label: [12, 4], lines: ["Tohoku"], mark: "杜", accent: "#77a2bb" },
  { id: "tokyo", name: "Tokyo", japanese: "東京", region: "Kanto", x: 503, y: 454, label: [12, -1], lines: ["Tokaido", "Tohoku", "Hokuriku"], mark: "東", accent: "#e77c66" },
  { id: "nagano", name: "Nagano", japanese: "長野", region: "Chubu", x: 419, y: 448, label: [-48, -10], lines: ["Hokuriku"], mark: "山", accent: "#9a87b1" },
  { id: "kanazawa", name: "Kanazawa", japanese: "金沢", region: "Hokuriku", x: 332, y: 429, label: [-53, -11], lines: ["Hokuriku"], mark: "金", accent: "#9a87b1" },
  { id: "nagoya", name: "Nagoya", japanese: "名古屋", region: "Chubu", x: 443, y: 518, label: [12, 3], lines: ["Tokaido"], mark: "喫", accent: "#e77c66" },
  { id: "kyoto", name: "Kyoto", japanese: "京都", region: "Kansai", x: 371, y: 553, label: [-46, -15], lines: ["Tokaido", "Hokuriku"], mark: "京", accent: "#e77c66" },
  { id: "osaka", name: "Osaka", japanese: "新大阪", region: "Kansai", x: 357, y: 585, label: [-47, 12], lines: ["Sanyo"], mark: "食", accent: "#74a28c" },
  { id: "hiroshima", name: "Hiroshima", japanese: "広島", region: "Chugoku", x: 253, y: 584, label: [-58, -12], lines: ["Sanyo"], mark: "鳥", accent: "#74a28c" },
  { id: "hakata", name: "Hakata", japanese: "博多", region: "Kyushu", x: 169, y: 588, label: [-12, -17], lines: ["Sanyo", "Kyushu"], mark: "祭", accent: "#74a28c" },
  { id: "kumamoto", name: "Kumamoto", japanese: "熊本", region: "Kyushu", x: 170, y: 630, label: [-66, 4], lines: ["Kyushu"], mark: "城", accent: "#74a28c" },
  { id: "kagoshima", name: "Kagoshima", japanese: "鹿児島中央", region: "Kyushu", x: 193, y: 666, label: [12, 3], lines: ["Kyushu"], mark: "桜", accent: "#74a28c" },
  { id: "ueno", name: "Ueno", japanese: "上野", region: "Tokyo", x: 515, y: 437, label: [12, -7], lines: ["Tohoku"], mark: "🐼", accent: "#77a2bb" },
];

const routes = [
  { from: "sapporo", to: "hakodate", line: "Hokkaido", color: "#d9ad62", path: "M572 91 Q573 133 552 183" },
  { from: "hakodate", to: "aomori", line: "Hokkaido", color: "#d9ad62", path: "M552 183 Q526 216 523 255" },
  { from: "aomori", to: "sendai", line: "Tohoku", color: "#77a2bb", path: "M523 255 Q528 306 535 348" },
  { from: "sendai", to: "ueno", line: "Tohoku", color: "#77a2bb", path: "M535 348 Q550 390 515 437" },
  { from: "ueno", to: "tokyo", line: "Tohoku", color: "#77a2bb", path: "M515 437 Q510 445 503 454" },
  { from: "tokyo", to: "nagoya", line: "Tokaido", color: "#e77c66", path: "M503 454 Q473 488 443 518" },
  { from: "nagoya", to: "kyoto", line: "Tokaido", color: "#e77c66", path: "M443 518 Q412 543 371 553" },
  { from: "kyoto", to: "osaka", line: "Tokaido", color: "#e77c66", path: "M371 553 Q355 563 357 585" },
  { from: "osaka", to: "hiroshima", line: "Sanyo", color: "#74a28c", path: "M357 585 Q306 568 253 584" },
  { from: "hiroshima", to: "hakata", line: "Sanyo", color: "#74a28c", path: "M253 584 Q211 570 169 588" },
  { from: "hakata", to: "kumamoto", line: "Kyushu", color: "#74a28c", path: "M169 588 Q178 610 170 630" },
  { from: "kumamoto", to: "kagoshima", line: "Kyushu", color: "#74a28c", path: "M170 630 Q178 652 193 666" },
  { from: "tokyo", to: "nagano", line: "Hokuriku", color: "#9a87b1", path: "M503 454 Q467 433 419 448" },
  { from: "nagano", to: "kanazawa", line: "Hokuriku", color: "#9a87b1", path: "M419 448 Q377 430 332 429" },
  { from: "kanazawa", to: "kyoto", line: "Hokuriku", color: "#9a87b1", path: "M332 429 Q331 510 371 553" },
];

const storageKey = "platform9-rail-adventure";
const stationById = new Map(stations.map((station) => [station.id, station]));
const neighbors = new Map(stations.map((station) => [station.id, []]));
routes.forEach((route) => {
  neighbors.get(route.from).push({ stationId: route.to, route });
  neighbors.get(route.to).push({ stationId: route.from, route });
});

const routeLayer = document.querySelector("#route-layer");
const stationLayer = document.querySelector("#station-layer");
const stationDetails = document.querySelector("#station-details");
const connectionsList = document.querySelector("#connections-list");
const stampStrip = document.querySelector("#stamp-strip");
const toast = document.querySelector("#toast");
const resetDialog = document.querySelector("#reset-dialog");
let toastTimeout;
let toastAnnouncementTimer;

function getSavedJourney() {
  const initialJourney = { currentId: "tokyo", visited: ["tokyo"], lastRoute: null };
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return initialJourney;

    const parsed = JSON.parse(saved);
    if (
      !stationById.has(parsed.currentId) ||
      !Array.isArray(parsed.visited) ||
      parsed.visited.some((id) => !stationById.has(id))
    ) {
      throw new Error("Saved journey data is not valid.");
    }

    return {
      currentId: parsed.currentId,
      visited: [...new Set([...parsed.visited, parsed.currentId])],
      lastRoute: routes.find(({ from, to }) =>
        (from === parsed.lastRoute?.from && to === parsed.lastRoute?.to) ||
        (from === parsed.lastRoute?.to && to === parsed.lastRoute?.from),
      ) ?? null,
    };
  } catch (error) {
    const reason = error instanceof Error ? error.message : "Unknown storage error.";
    window.setTimeout(() => showToast(`We couldn't load your saved trip (${reason}) — starting a fresh one.`), 0);
    return initialJourney;
  }
}

const journey = getSavedJourney();
let selectedId = null;

function saveJourney() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({
      currentId: journey.currentId,
      visited: journey.visited,
      lastRoute: journey.lastRoute ? { from: journey.lastRoute.from, to: journey.lastRoute.to } : null,
    }));
    return true;
  } catch {
    return false;
  }
}

function createSvgElement(name, attributes = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function renderRoutes() {
  routeLayer.replaceChildren();
  const currentNeighbors = new Set(neighbors.get(journey.currentId).map(({ stationId }) => stationId));

  routes.forEach((route) => {
    const isLastRide = route === journey.lastRoute;
    const isOption = currentNeighbors.has(route.from) || currentNeighbors.has(route.to);
    const path = createSvgElement("path", {
      d: route.path,
      class: `route-line${isLastRide ? " is-last-ride" : ""}${isOption ? " is-option" : ""}`,
      stroke: route.color,
    });
    routeLayer.append(path);

    if (isLastRide) {
      const endpoint = stationById.get(route.to === journey.currentId ? route.from : route.to);
      routeLayer.append(createSvgElement("circle", {
        cx: endpoint.x,
        cy: endpoint.y,
        r: 4,
        class: "route-endpoint",
      }));
    }
  });
}

function selectStation(id) {
  if (id === journey.currentId) {
    selectedId = null;
    render();
    return;
  }
  if (!neighbors.get(journey.currentId).some(({ stationId }) => stationId === id)) {
    showToast("That station is a little farther along. Ride to a connected stop first.");
    return;
  }
  selectedId = id;
  render();
}

function renderStations() {
  stationLayer.replaceChildren();
  const currentNeighbors = new Set(neighbors.get(journey.currentId).map(({ stationId }) => stationId));

  stations.forEach((station) => {
    const isCurrent = station.id === journey.currentId;
    const isReachable = currentNeighbors.has(station.id);
    const isSelected = station.id === selectedId;
    const classes = [
      "station-node",
      isCurrent && "is-current",
      journey.visited.includes(station.id) && "is-visited",
      isReachable && "is-reachable",
      isSelected && "is-selected",
    ].filter(Boolean).join(" ");
    const node = createSvgElement("g", {
      class: classes,
      transform: `translate(${station.x} ${station.y})`,
      tabindex: "0",
      role: "button",
      "aria-label": `${station.name}, ${station.region}${isCurrent ? ", your current station" : isReachable ? ", connected by train" : ""}`,
      "aria-pressed": isSelected ? "true" : "false",
      "data-station-id": station.id,
    });
    node.append(createSvgElement("circle", { cx: 0, cy: 0, r: 15, class: "node-hit" }));
    node.append(createSvgElement("circle", { cx: 0, cy: 0, r: isCurrent ? 11 : 9, class: "node-halo" }));
    node.append(createSvgElement("circle", { cx: 0, cy: 0, r: isCurrent ? 5 : 4, class: "node-core" }));
    const label = createSvgElement("text", {
      x: station.label[0],
      y: station.label[1],
      class: "station-label",
    });
    label.textContent = station.name;
    node.append(label);

    const japanese = createSvgElement("text", {
      x: station.label[0],
      y: station.label[1] + 10,
      class: "station-label-jp",
    });
    japanese.textContent = station.japanese;
    node.append(japanese);
    node.addEventListener("click", () => selectStation(station.id));
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectStation(station.id);
      }
    });
    stationLayer.append(node);
  });
}

function renderDetails() {
  const station = stationById.get(selectedId ?? journey.currentId);
  const wasVisited = journey.visited.includes(station.id);
  const stationIndex = stations.findIndex(({ id }) => id === station.id) + 1;
  const selectedConnection = neighbors.get(journey.currentId).find(({ stationId }) => stationId === station.id);
  document.querySelector("#panel-kicker").textContent = station.id === journey.currentId ? "YOUR STATION" : "NEXT STATION";
  document.querySelector("#station-number").textContent = `${String(stationIndex).padStart(2, "0")} / ${stations.length}`;
  stationDetails.innerHTML = `
    <div class="station-region"><span class="region-pin">${station.region === "Hokkaido" ? "✳" : "⌁"}</span>${station.region} · ${station.lines.join(" & ")}</div>
    <h2 class="station-name">${station.name}</h2>
    <p class="station-japanese" lang="ja">${station.japanese}</p>
    <span class="stamp-status${wasVisited ? "" : " is-new"}">
      <svg viewBox="0 0 14 14" aria-hidden="true"><path d="${wasVisited ? "m3 7 2.4 2.4L11 4" : "M7 2.5v9M2.5 7h9"}" /></svg>
      ${wasVisited ? "Stamp collected" : "New stamp waiting"}
    </span>
    ${selectedConnection ? `<button class="selected-ride-action" id="selected-ride" type="button">Ride to ${station.name}<span aria-hidden="true">→</span></button>` : ""}
  `;
  if (selectedConnection) {
    stationDetails.querySelector("#selected-ride").addEventListener("click", () => travelTo(station.id, selectedConnection.route));
  }
}

function renderConnections() {
  const connections = neighbors.get(journey.currentId);
  document.querySelector("#connection-origin").textContent = `FROM ${stationById.get(journey.currentId).name.toUpperCase()}`;
  document.querySelector("#connection-count").textContent = String(connections.length).padStart(2, "0");
  document.querySelector("#no-connections").hidden = connections.length !== 0;
  connectionsList.hidden = connections.length === 0;
  connectionsList.replaceChildren();

  connections.forEach(({ stationId, route }) => {
    const station = stationById.get(stationId);
    const isVisited = journey.visited.includes(stationId);
    const card = document.createElement("div");
    card.className = "connection-card";
    const icon = document.createElement("span");
    icon.className = "connection-icon";
    icon.textContent = route.line === "Hokkaido" ? "❄" : route.line === "Tokaido" ? "↗" : "⌁";
    icon.setAttribute("aria-hidden", "true");
    const info = document.createElement("span");
    info.className = "connection-info";
    const name = document.createElement("strong");
    name.textContent = station.name;
    const detail = document.createElement("small");
    detail.textContent = `${route.line} line · ${isVisited ? "been here" : "new stamp"}`;
    info.append(name, detail);
    const rideButton = document.createElement("button");
    rideButton.className = "ride-button";
    rideButton.type = "button";
    rideButton.setAttribute("aria-label", `Ride to ${station.name} on the ${route.line} line`);
    rideButton.innerHTML = 'Ride <span aria-hidden="true">→</span>';
    rideButton.addEventListener("click", () => travelTo(stationId, route));
    card.append(icon, info, rideButton);
    connectionsList.append(card);
  });
}

function renderStamps() {
  const foundCount = journey.visited.length;
  document.querySelector("#station-count").textContent = String(foundCount).padStart(2, "0");
  document.querySelector("#station-total").textContent = String(stations.length - foundCount).padStart(2, "0");
  document.querySelector("#stamp-count").textContent = `${foundCount} / ${stations.length} COLLECTED`;
  document.querySelector("#stamp-subtitle").textContent = foundCount === 1 ? "— your adventure begins" : "— each one a little memory";
  stampStrip.classList.toggle("is-empty", foundCount === 0);
  stampStrip.replaceChildren();

  stations.forEach((station) => {
    const isFound = journey.visited.includes(station.id);
    const card = document.createElement("div");
    card.className = `stamp-card${isFound ? " is-found" : ""}${station.id === journey.currentId ? " is-current" : ""}`;
    card.setAttribute("aria-label", `${station.name}: ${isFound ? "stamp collected" : "not yet discovered"}`);
    const symbol = document.createElement("span");
    symbol.className = "stamp-symbol";
    symbol.textContent = isFound ? station.mark : "·";
    const label = document.createElement("small");
    label.textContent = station.name;
    card.append(symbol, label);
    stampStrip.append(card);
  });
}

function render() {
  renderRoutes();
  renderStations();
  renderDetails();
  renderConnections();
  renderStamps();
}

function showToast(message) {
  window.clearTimeout(toastTimeout);
  window.clearTimeout(toastAnnouncementTimer);
  toast.classList.remove("is-visible");
  toastAnnouncementTimer = window.setTimeout(() => {
    toast.textContent = message;
    toast.classList.add("is-visible");
  }, 30);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 4200);
}

function travelTo(stationId, route) {
  journey.currentId = stationId;
  journey.lastRoute = route;
  selectedId = null;
  const discovered = !journey.visited.includes(stationId);
  if (discovered) journey.visited.push(stationId);
  render();
  const saved = saveJourney();
  const station = stationById.get(stationId);
  showToast(discovered
    ? `All aboard! ${station.name} — your new station stamp is collected.${saved ? "" : " Your trip couldn't be saved and may be lost when you close this tab."}`
    : `All aboard! Welcome back to ${station.name}.${saved ? "" : " Your trip couldn't be saved and may be lost when you close this tab."}`);
}

document.querySelector("#reset-trip").addEventListener("click", () => resetDialog.showModal());
document.querySelector("#cancel-reset").addEventListener("click", () => resetDialog.close());
document.querySelector("#confirm-reset").addEventListener("click", () => {
  journey.currentId = "tokyo";
  journey.visited = ["tokyo"];
  journey.lastRoute = null;
  selectedId = null;
  render();
  resetDialog.close();
  const saved = saveJourney();
  showToast(`Fresh ticket, fresh tracks. Tokyo is ready when you are.${saved ? "" : " This reset couldn't be saved and may not persist."}`);
});
resetDialog.addEventListener("click", (event) => {
  if (event.target === resetDialog) resetDialog.close();
});

render();
