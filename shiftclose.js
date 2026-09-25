const $ = (id) => document.getElementById(id);
function run() {
  const cpm = (() => {
    const o = JSON.parse(localStorage.getItem("faresense_v1") || "{}");
    const mpg = Math.max(parseFloat(o.mpg) || 28, 0.1);
    const fuel = (parseFloat(o.fuelPrice) || 3.89) / mpg;
    const wear = parseFloat(o.wear) || 0.22;
    return fuel + wear;
  })();
  const floor = parseFloat(JSON.parse(localStorage.getItem("faresense_v1") || "{}").floor) || 22;
  const n = (id) => parseFloat($(id).value) || 0;
  const gross = n("gross"), hours = Math.max(n("hours"), 0.1), miles = n("miles");
  const lateG = n("lateGross"), lateMi = n("lateMiles");
  const bonus = n("bonus"), need = n("need"), eachMin = n("eachMin"), eachMi = n("eachMi");
  const shiftNet = gross - miles * cpm;
  const shiftHour = shiftNet / hours;
  const lateNet = lateG - lateMi * cpm;
  const lateHour = lateNet / 1.5;
  const questMin = need * eachMin;
  const questMi = need * eachMi;
  const questNet = bonus - questMi * cpm;
  const questHour = questMin > 0 ? questNet / (questMin / 60) : 0;
  $("nShift").textContent = "$" + shiftNet.toFixed(0);
  $("nHour").textContent = "$" + shiftHour.toFixed(0);
  $("nLate").textContent = "$" + lateHour.toFixed(0);
  $("nQuest").textContent = need ? "$" + questHour.toFixed(0) : "—";
  const box = $("call");
  box.className = "ticket";
  let title, text, cls;
  if (lateHour >= floor && (!need || questHour >= floor - 2)) {
    cls = "go"; title = "One more hour";
    text = "The last 90 minutes still clear about $" + lateHour.toFixed(0) + "/hr after the car. Stay if you have the energy.";
  } else if (need && questHour >= floor && lateHour >= floor - 6) {
    cls = "hold"; title = "Finish the quest, then park";
    text = "The dangling bonus nets about $" + questHour.toFixed(0) + "/hr after " + questMi.toFixed(0) + " extra miles. Do not start a new block after it.";
  } else {
    cls = "stop"; title = "Go home";
    text = "Last 90 minutes: $" + lateHour.toFixed(0) + "/hr. Quest leftover: $" + questHour.toFixed(0) + "/hr. Another hour is likely donating the car.";
  }
  if (shiftHour < floor - 4 && lateHour < floor) {
    cls = "stop"; title = "Go home";
    text = "The whole shift is under your $" + floor + " floor and the late stretch is worse. Protect tomorrow.";
  }
  box.classList.add(cls);
  $("callTitle").textContent = title;
  $("callText").textContent = text;
}
["gross","hours","miles","lateGross","lateMiles","bonus","need","eachMin","eachMi"].forEach((id) => {
  $(id).addEventListener("input", run);
});
run();
