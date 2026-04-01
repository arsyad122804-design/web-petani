let transaksi = []; // diisi dari Supabase
let filterAktif = 'semua';

// Set default tanggal hari ini
window.addEventListener('DOMContentLoaded', () => {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('modalTanggal').value = today;
  document.getElementById('panenTanggal').value = today;
  renderSemua();
});

// Auto hitung total panen
['panenBerat','panenHarga'].forEach(id => {
  document.getElementById(id).addEventListener('input', hitungAutoTotal);
});

function hitungAutoTotal() {
  const berat = parseFloat(document.getElementById('panenBerat').value) || 0;
  const harga = parseFloat(document.getElementById('panenHarga').value) || 0;
  const total = berat * harga;
  document.getElementById('autoTotal').textContent = 'Rp ' + total.toLocaleString('id-ID');
}

function switchTab(tab) {
  document.getElementById('formModal').style.display = tab === 'modal' ? 'flex' : 'none';
  document.getElementById('formPanen').style.display = tab === 'panen' ? 'flex' : 'none';
  document.getElementById('tabModal').classList.toggle('aktif', tab === 'modal');
  document.getElementById('tabPanen').classList.toggle('aktif', tab === 'panen');
}

function tambahModal() {
  const tanggal = document.getElementById('modalTanggal').value;
  const ket     = document.getElementById('modalKet').value.trim();
  const kat     = document.getElementById('modalKat').value;
  const jumlah  = parseFloat(document.getElementById('modalJumlah').value);

  if (!tanggal || !ket || !jumlah || jumlah <= 0) return alert('Lengkapi semua field dengan benar.');

  transaksi.unshift({ id: Date.now(), tipe:'modal', tanggal, ket, kat, jumlah });
  simpan();
  document.getElementById('modalKet').value = '';
  document.getElementById('modalJumlah').value = '';
  renderSemua();
}

function tambahPanen() {
  const tanggal    = document.getElementById('panenTanggal').value;
  const komoditas  = document.getElementById('panenKomoditas').value.trim();
  const berat      = parseFloat(document.getElementById('panenBerat').value);
  const harga      = parseFloat(document.getElementById('panenHarga').value);

  if (!tanggal || !komoditas || !berat || !harga) return alert('Lengkapi semua field dengan benar.');

  const jumlah = berat * harga;
  transaksi.unshift({ id: Date.now(), tipe:'panen', tanggal, ket: komoditas, kat: `${berat} kg × Rp ${harga.toLocaleString('id-ID')}`, jumlah });
  simpan();
  document.getElementById('panenKomoditas').value = '';
  document.getElementById('panenBerat').value = '';
  document.getElementById('panenHarga').value = '';
  document.getElementById('autoTotal').textContent = 'Rp 0';
  renderSemua();
}

function hapusRow(id) {
  transaksi = transaksi.filter(t => t.id !== id);
  simpan();
  renderSemua();
}

function hapusSemua() {
  if (!transaksi.length) return;
  if (!confirm('Hapus semua transaksi?')) return;
  transaksi = [];
  simpan();
  renderSemua();
}

function filterTabel(f, el) {
  filterAktif = f;
  document.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('aktif'));
  el.classList.add('aktif');
  renderTabel();
}

function simpan() {
  localStorage.setItem('keuanganTani', JSON.stringify(transaksi));
}

function rp(n) { return 'Rp ' + n.toLocaleString('id-ID'); }

function renderSemua() {
  renderSummary();
  renderTabel();
}

function renderSummary() {
  const totalM = transaksi.filter(t => t.tipe === 'modal').reduce((s,t) => s + t.jumlah, 0);
  const totalP = transaksi.filter(t => t.tipe === 'panen').reduce((s,t) => s + t.jumlah, 0);
  const selisih = totalP - totalM;
  const roi = totalM > 0 ? ((selisih / totalM) * 100).toFixed(1) : 0;

  document.getElementById('totalModal').textContent = rp(totalM);
  document.getElementById('totalPanen').textContent = rp(totalP);
  document.getElementById('totalHasil').textContent = (selisih >= 0 ? '+' : '') + rp(selisih);
  document.getElementById('totalROI').textContent = (roi >= 0 ? '+' : '') + roi + '%';

  const hasilCard = document.getElementById('hasilCard');
  const hasilIcon = document.getElementById('hasilIcon');
  hasilCard.classList.remove('untung','rugi');
  if (selisih > 0) { hasilCard.classList.add('untung'); hasilIcon.textContent = '🤑'; }
  else if (selisih < 0) { hasilCard.classList.add('rugi'); hasilIcon.textContent = '😟'; }
  else { hasilIcon.textContent = '📊'; }

  document.getElementById('totalHasil').style.color = selisih >= 0 ? '#2e7d32' : '#ef5350';
  document.getElementById('totalROI').style.color = roi >= 0 ? '#f57f17' : '#ef5350';
}

function renderTabel() {
  const data = filterAktif === 'semua' ? transaksi : transaksi.filter(t => t.tipe === filterAktif);
  const tbody = document.getElementById('tabelBody');
  const empty = document.getElementById('emptyTabel');

  if (!data.length) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  tbody.innerHTML = data.map(t => `
    <tr>
      <td>${t.tanggal}</td>
      <td>${t.ket}</td>
      <td><span class="badge-kat">${t.kat}</span></td>
      <td><span class="badge-tipe ${t.tipe}">${t.tipe === 'modal' ? '💸 Modal' : '🌾 Panen'}</span></td>
      <td class="jumlah-${t.tipe}">${t.tipe === 'modal' ? '-' : '+'} ${rp(t.jumlah)}</td>
      <td><button class="btn-hapus-row" onclick="hapusRow(${t.id})">🗑️</button></td>
    </tr>
  `).join('');
}

// ===== SUPABASE =====
function onSupabaseReady() {
  sbGetTransaksi().then(function(rows) {
    if (rows && rows.length > 0) {
      transaksi = rows.map(function(t) {
        return { id: t.id, tipe: t.tipe, tanggal: t.tanggal, ket: t.ket, kat: t.kat, jumlah: t.jumlah };
      });
      renderSemua();
    }
  });
}
