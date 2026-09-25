const $ = (id) => document.getElementById(id);
const keys = ['payout','tripMiles','pickupMiles','tripMin','pickupMin','tip','fuelPrice','mpg','wear','floor','taxPct','irs'];
function load() {
  const saved = JSON.parse(localStorage.getItem('faresense_v1') || '{}');
  keys.forEach(k => { if (saved[k] != null && $(k)) $(k).value = saved[k]; });
}
function persist() {
  const o = {};
  keys.forEach(k => { if ($(k)) o[k] = $(k).value; });
  localStorage.setItem('faresense_v1', JSON.stringify(o));
}
function num(id) { return parseFloat($(id).value) || 0; }
function calc() {
  persist();
  const payout = num('payout'), tip = num('tip');
  const tripMi = num('tripMiles'), pickMi = num('pickupMiles');
  const tripMin = num('tripMin'), pickMin = num('pickupMin');
  const mpg = Math.max(num('mpg'), 0.1);
  const costPerMi = (num('fuelPrice') / mpg) + num('wear');
  const totalMi = tripMi + pickMi, totalMin = tripMin + pickMin;
  const gross = payout + tip, vehicleCost = totalMi * costPerMi, net = gross - vehicleCost;
  const hourly = totalMin > 0 ? net / (totalMin / 60) : 0;
  const floor = num('floor'), tax = num('taxPct') / 100;
  const afterTax = net * (1 - tax);
  const perMileGross = totalMi > 0 ? gross / totalMi : 0;
  const perMileNet = totalMi > 0 ? net / totalMi : 0;
  const irsDeduction = totalMi * num('irs');
  $('mGross').textContent = '$' + perMileGross.toFixed(2);
  $('mNet').textContent = '$' + net.toFixed(2);
  $('mHour').textContent = '$' + hourly.toFixed(0);
  const delta = hourly - floor;
  $('mFloor').textContent = (delta >= 0 ? '+' : '') + '$' + delta.toFixed(0);
  const box = $('verdict'); box.className = 'verdict';
  let title, text, cls;
  if (hourly >= floor + 6 && perMileNet >= 0.45) {
    cls = 'take'; title = 'TAKE';
    text = `Net ~$${net.toFixed(2)} after vehicle cost. About $${hourly.toFixed(0)}/hr vs your $${floor}/hr floor. IRS deduction reference: $${irsDeduction.toFixed(2)}. After ${num('taxPct')}% set-aside, ~$${afterTax.toFixed(2)} stays.`;
  } else if (hourly >= floor - 3) {
    cls = 'maybe'; title = 'BORDERLINE';
    text = `Net ~$${net.toFixed(2)} and ~$${hourly.toFixed(0)}/hr. Pickup is ${pickMi.toFixed(1)} mi / ${pickMin} min of unpaid work. Take it only if it repositions you or completes a Quest.`;
  } else {
    cls = 'skip'; title = 'SKIP';
    text = `This offer nets ~$${hourly.toFixed(0)}/hr after ${totalMi.toFixed(1)} total miles. Pickup alone costs $${(pickMi * costPerMi).toFixed(2)} and ${pickMin} minutes. Declining protects your hourly more than staying busy.`;
  }
  box.classList.add(cls);
  $('verdictTitle').textContent = title;
  $('verdictText').textContent = text;
  return { gross, net, totalMi, totalMin, payout };
}
function shiftStore() { return JSON.parse(localStorage.getItem('faresense_shift') || '[]'); }
function renderShift() {
  const rows = shiftStore(); const body = $('shiftBody'); body.innerHTML = '';
  let g = 0, n = 0, m = 0;
  rows.forEach(r => {
    g += r.gross; n += r.net; m += r.totalMin;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${r.time}</td><td>${r.action}</td><td>$${r.payout.toFixed(2)}</td><td>${r.totalMi.toFixed(1)}</td><td>$${r.net.toFixed(2)}</td>`;
    body.appendChild(tr);
  });
  $('sGross').textContent = '$' + g.toFixed(0);
  $('sNet').textContent = '$' + n.toFixed(0);
  $('sMin').textContent = String(Math.round(m));
  $('sHour').textContent = m > 0 ? '$' + (n / (m / 60)).toFixed(0) : '—';
}
function log(action) {
  const c = calc();
  const rows = shiftStore();
  rows.unshift({
    time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
    action, payout: action === 'accepted' ? c.payout : 0,
    gross: action === 'accepted' ? c.gross : 0,
    net: action === 'accepted' ? c.net : 0,
    totalMi: c.totalMi, totalMin: action === 'accepted' ? c.totalMin : 0
  });
  localStorage.setItem('faresense_shift', JSON.stringify(rows));
  renderShift();
}
document.querySelectorAll('nav.tabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('nav.tabs button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    ['offer','shift','vehicle','why'].forEach(t => {
      $('tab-' + t).classList.toggle('hidden', t !== btn.dataset.tab);
    });
  });
});
keys.forEach(k => $(k).addEventListener('input', calc));
$('logTake').addEventListener('click', () => log('accepted'));
$('logSkip').addEventListener('click', () => log('declined'));
$('clearShift').addEventListener('click', () => { localStorage.removeItem('faresense_shift'); renderShift(); });
load(); calc(); renderShift();
