const produkData = []; // diisi dari Supabase

let kategoriAktif = 'semua';
let ratingMin = 0;

function renderBintang(rating) {
  var penuh = Math.floor(rating);
  var setengah = rating - penuh >= 0.5 ? 1 : 0;
  var kosong = 5 - penuh - setengah;
  return '<span style="color:#f57f17;font-size:.9rem;letter-spacing:1px">' +
    '★'.repeat(penuh) +
    (setengah ? '½' : '') +
    '<span style="color:#e0e0e0">' + '★'.repeat(kosong) + '</span>' +
  '</span>';
}

function setKategori(kat, el) {
  kategoriAktif = kat;
  document.querySelectorAll('.mp-kategori li').forEach(li => li.classList.remove('aktif'));
  el.classList.add('aktif');
  renderProduk();
}

function setRating(min, el) {
  ratingMin = min;
  document.querySelectorAll('.rating-filter li').forEach(li => li.classList.remove('aktif'));
  el.classList.add('aktif');
  renderProduk();
}

function filterRating(p) {
  if (ratingMin === 5) return Math.round(p.rating) === 5;
  return p.rating >= ratingMin;
}

function updateHargaLabel() {
  const val = parseInt(document.getElementById('maxHarga').value);
  document.getElementById('hargaLabel').textContent = 'Rp ' + val.toLocaleString('id-ID');
}

function renderProduk() {
  const search   = document.getElementById('mpSearch').value.toLowerCase();
  const sort     = document.getElementById('mpSort').value;
  const maxHarga = parseInt(document.getElementById('maxHarga').value);

  let data = [...produkData];
  if (kategoriAktif !== 'semua') data = data.filter(p => p.kategori === kategoriAktif);
  if (search) data = data.filter(p => p.nama.toLowerCase().includes(search) || p.penjual.toLowerCase().includes(search));
  data = data.filter(p => p.harga <= maxHarga && filterRating(p));

  if (sort === 'termurah') data.sort((a,b) => a.harga - b.harga);
  else if (sort === 'termahal') data.sort((a,b) => b.harga - a.harga);
  else if (sort === 'terlaris') data.sort((a,b) => b.terjual - a.terjual);

  document.getElementById('jumlahProduk').textContent = `${data.length} produk ditemukan`;

  const grid = document.getElementById('mpGrid');
  if (!data.length) {
    grid.innerHTML = `<div class="mp-empty"><span>🔍</span><p>Tidak ada produk yang sesuai filter.</p></div>`;
    return;
  }

  grid.innerHTML = data.map(p => `
    <div class="produk-card" onclick="window.location='produk-detail.html?id=${p.id}'">
      <div class="produk-img">
        <img src="${p.img}" alt="${p.nama}" loading="lazy" />
        <span class="produk-badge-kat">${p.kategori}</span>
        ${p.terlaris ? '<span class="produk-badge-terlaris">🔥 Terlaris</span>' : ''}
        <div class="produk-actions" onclick="event.stopPropagation()">
          <button class="btn-edit-produk" onclick="editProduk(${p.id})" title="Edit">✏️</button>
          <button class="btn-hapus-produk" onclick="hapusProduk(${p.id}, '${p.nama}')" title="Hapus">🗑️</button>
        </div>
      </div>
      <div class="produk-body">
        <div class="produk-nama">${p.nama}</div>
        <div class="produk-penjual">🏪 ${p.penjual}</div>
        <div class="produk-rating">${renderBintang(p.rating)} <span style="color:#aaa;font-size:.72rem">(${p.rating})</span></div>
        <div class="produk-harga">Rp ${p.harga.toLocaleString('id-ID')}</div>
        <div class="produk-satuan">${p.satuan}</div>
        <div class="produk-terjual">🛒 ${(p.terjual||0).toLocaleString('id-ID')} terjual</div>
        <button class="btn-beli" onclick="event.stopPropagation(); tambahKeKeranjang(${p.id})">+ Keranjang</button>
      </div>
    </div>
  `).join('');
}

updateHargaLabel();
// renderProduk dipanggil oleh onSupabaseReady setelah data dimuat

// ===== SUPABASE =====
function onSupabaseReady() {
  sbGetProduk().then(function(rows) {
    if (rows && rows.length > 0) {
      rows.forEach(function(p) {
        produkData.push({
          id: p.id,
          kategori: p.kategori,
          nama: p.nama,
          penjual: p.penjual || 'Penjual',
          harga: p.harga,
          satuan: p.satuan || 'per unit',
          rating: p.rating || 5.0,
          terjual: p.terjual || 0,
          terlaris: p.terlaris || false,
          img: p.img || 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop'
        });
      });
    }
    updateHargaLabel();
    renderProduk();
    if (typeof window.hideLoading === 'function') window.hideLoading();
  });
}

// ===== EDIT & HAPUS =====
function hapusProduk(id, nama) {
  if (!confirm('Hapus produk "' + nama + '"?')) return;
  if (window.sb) {
    window.sb.from('produk').delete().eq('id', id).then(function(res) {
      if (res.error) { alert('Gagal hapus: ' + res.error.message); return; }
      // Hapus dari array lokal
      var idx = produkData.findIndex(function(p) { return p.id === id; });
      if (idx > -1) produkData.splice(idx, 1);
      renderProduk();
      tampilToast('🗑️ Produk berhasil dihapus');
    });
  }
}

function editProduk(id) {
  window.location = 'jual-produk.html?edit=' + id;
}

function tampilToast(msg) {
  var t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:#1b5e20;color:white;padding:12px 24px;border-radius:99px;font-size:.9rem;font-weight:700;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,.2)';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(function(){ t.remove(); }, 2500);
}

function cekLoginJual() {
  if (!window.sb) { window.location = 'jual-produk.html'; return; }
  sudahLogin(function(loggedIn) {
    if (loggedIn) { window.location = 'jual-produk.html'; }
    else { window.location = 'login.html?redirect=jual-produk.html'; }
  });
}
