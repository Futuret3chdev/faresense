const Desk = {
  keys: ["fuelPrice", "mpg", "wear", "floor", "taxPct", "irs"],
  loadVehicle() {
    const saved = JSON.parse(localStorage.getItem("faresense_v1") || "{}");
    this.keys.forEach((k) => {
      const el = document.getElementById(k);
      if (el && saved[k] != null) el.value = saved[k];
    });
  },
  saveVehicle() {
    const o = JSON.parse(localStorage.getItem("faresense_v1") || "{}");
    this.keys.forEach((k) => {
      const el = document.getElementById(k);
      if (el) o[k] = el.value;
    });
    localStorage.setItem("faresense_v1", JSON.stringify(o));
    return o;
  },
  num(id) {
    const el = document.getElementById(id);
    return parseFloat(el && el.value) || 0;
  },
  costPerMile() {
    this.saveVehicle();
    const mpg = Math.max(this.num("mpg") || this.saved("mpg") || 28, 0.1);
    const fuel = (this.num("fuelPrice") || this.saved("fuelPrice") || 3.89) / mpg;
    const wear = this.num("wear") || this.saved("wear") || 0.22;
    return fuel + wear;
  },
  saved(k) {
    const o = JSON.parse(localStorage.getItem("faresense_v1") || "{}");
    return parseFloat(o[k]) || 0;
  },
  floor() {
    return this.num("floor") || this.saved("floor") || 22;
  },
};
window.Desk = Desk;
