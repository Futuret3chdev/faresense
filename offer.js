const $ = (id) => document.getElementById(id);
const offerKeys = ["payout", "tripMiles", "pickupMiles", "tripMin", "pickupMin", "tip"];
function calc() {
  Desk.saveVehicle();
  const payout = Desk.num("payout"), tip = Desk.num("tip");
  const tripMi = Desk.num("tripMiles"), pickMi = Desk.num("pickupMiles");
  const tripMin = Desk.num("tripMin"), pickMin = Desk.num("pickupMin");
  const cpm = Desk.costPerMile();
  const totalMi = tripMi + pickMi, totalMin = tripMin + pickMin;
  const gross = payout + tip, net = gross - totalMi * cpm;
  const hourly = totalMin > 0 ? net / (totalMin / 60) : 0;
  const floor = Desk.floor();
  const perMi = totalMi > 0 ? gross / totalMi : 0;
  const perNet = totalMi > 0 ? net / totalMi : 0;
  $("mGross").textContent = "$" + perMi.toFixed(2);
  $("mNet").textContent = "$" + net.toFixed(2);
  $("mHour").textContent = "$" + hourly.toFixed(0);
  const d = hourly - floor;
  $("mFloor").textContent = (d >= 0 ? "+" : "") + "$" + d.toFixed(0);
  const box = $("verdict");
  box.className = "ticket";
  let title, text, cls;
  if (hourly >= floor + 6 && perNet >= 0.45) {
    cls = "go"; title = "Take it";
    text = "Net $" + net.toFixed(2) + " after the car. About $" + hourly.toFixed(0) + "/hr against a $" + floor + " floor.";
  } else if (hourly >= floor - 3) {
    cls = "hold"; title = "Borderline";
    text = "Pickup is " + pickMi.toFixed(1) + " mi / " + pickMin + " min unpaid. Take it only if it puts you somewhere better.";
  } else {
    cls = "stop"; title = "Skip it";
    text = "About $" + hourly.toFixed(0) + "/hr after " + totalMi.toFixed(1) + " total miles. Pickup alone costs $" + (pickMi * cpm).toFixed(2) + ".";
  }
  box.classList.add(cls);
  $("verdictTitle").textContent = title;
  $("verdictText").textContent = text;
  return { gross, net, totalMi, totalMin, payout };
}
function rows() { return JSON.parse(localStorage.getItem("faresense_shift") || "[]"); }
function renderShift() {
  const body = $("shiftBody"); if (!body) return;
  body.innerHTML = "";
  let g = 0, n = 0, m = 0;
  rows().forEach((r) => {
    g += r.gross; n += r.net; m += r.totalMin;
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${r.time}</td><td>${r.action}</td><td>$${r.payout.toFixed(2)}</td><td>${r.totalMi.toFixed(1)}</td><td>$${r.net.toFixed(2)}</td>`;
    body.appendChild(tr);
  });
  $("sGross").textContent = "$" + g.toFixed(0);
  $("sNet").textContent = "$" + n.toFixed(0);
  $("sMin").textContent = String(Math.round(m));
  $("sHour").textContent = m > 0 ? "$" + (n / (m / 60)).toFixed(0) : "—";
}
function log(action) {
  const c = calc();
  const list = rows();
  list.unshift({
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    action, payout: action === "accepted" ? c.payout : 0,
    gross: action === "accepted" ? c.gross : 0,
    net: action === "accepted" ? c.net : 0,
    totalMi: c.totalMi, totalMin: action === "accepted" ? c.totalMin : 0,
  });
  localStorage.setItem("faresense_shift", JSON.stringify(list));
  renderShift();
}
document.querySelectorAll(".dock button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".dock button").forEach((b) => b.classList.remove("on"));
    btn.classList.add("on");
    ["offer", "shift", "vehicle", "why"].forEach((t) => {
      $("tab-" + t).classList.toggle("hidden", t !== btn.dataset.tab);
    });
  });
});
[...offerKeys, ...Desk.keys].forEach((k) => { const el = $(k); if (el) el.addEventListener("input", calc); });
if ($("logTake")) $("logTake").onclick = () => log("accepted");
if ($("logSkip")) $("logSkip").onclick = () => log("declined");
if ($("clearShift")) $("clearShift").onclick = () => { localStorage.removeItem("faresense_shift"); renderShift(); };
Desk.loadVehicle();
calc();
renderShift();
