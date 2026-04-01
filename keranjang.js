var keranjang = [];

function toggleKeranjang() {
  var panel   = document.getElementById('keranjangPanel');
  var overlay = document.getElementById('keranjangOverlay');
  var isOpen  = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
  if (!isOpen) renderKeranjang();
}

function tambahKeKeranjang(id) {
  var produk = produkData.find(function(p) { return p.id === id; });
  if (!produk) return;

  // Cek login dulu
  if (window.sudahLogin) {
    sudahLogin(function(loggedIn) {
      if (!loggedIn) {
        tampilPesanLogin();
        return;
      }
      // Cek profil lengkap
      if (!cekProfilLengkap()) return;
      cekJarakProduk(produk, function(boleh, jarakKm) {
        if (!boleh) { tampilPesanJauh(jarakKm); return; }
        _tambahKeranjang(produk);
      });
    });
  } else {
    if (!cekProfilLengkap()) return;
    cekJarakProduk(produk, function(boleh, jarakKm) {
      if (!boleh) { tampilPesanJauh(jarakKm); return; }
      _tambahKeranjang(produk);
    });
  }
}

function _tambahKeranjang(produk) {
  var item = keranjang.find(function(k) { return k.id === produk.id; });
  if (item) { item.qty++; }
  else { keranjang.push({ id: produk.id, nama: produk.nama, harga: produk.harga, img: produk.img, qty: 1 }); }
  updateBadge();
  animasiBadge();
}

function tampilPesanLogin() {
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)';
  overlay.innerHTML =
    '<div style="background:white;border-radius:24px;padding:36px;max-width:400px;width:90%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.3)">' +
      '<div style="font-size:3.5rem;margin-bottom:14px">🔐</div>' +
      '<h3 style="font-size:1.2rem;font-weight:800;color:#2e7d32;margin-bottom:8px">Login Dulu!</h3>' +
      '<p style="font-size:.9rem;color:#555;line-height:1.7;margin-bottom:20px">Kamu harus login untuk bisa membeli produk.</p>' +
      '<div style="display:flex;gap:10px;justify-content:center">' +
        '<button onclick="this.closest(\'div\').parentElement.remove()" style="background:#f5f5f5;color:#555;border:none;padding:12px 22px;border-radius:99px;font-size:.88rem;font-weight:700;cursor:pointer">Nanti</button>' +
        '<button onclick="window.location=\'login.html?redirect=marketplace.html\'" style="background:linear-gradient(135deg,#2e7d32,#43a047);color:white;border:none;padding:12px 26px;border-radius:99px;font-size:.88rem;font-weight:800;cursor:pointer">Login Sekarang →</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);
}

function updateBadge() {
  var total = keranjang.reduce(function(s, k) { return s + k.qty; }, 0);
  document.getElementById('keranjangBadge').textContent = total;
}

function animasiBadge() {
  var badge = document.getElementById('keranjangBadge');
  badge.style.animation = 'none';
  badge.offsetHeight;
  badge.style.animation = 'pop 0.3s ease';
}

function ubahQty(id, delta) {
  var item = keranjang.find(function(k) { return k.id === id; });
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    keranjang = keranjang.filter(function(k) { return k.id !== id; });
  }
  updateBadge();
  renderKeranjang();
}

function hapusItem(id) {
  keranjang = keranjang.filter(function(k) { return k.id !== id; });
  updateBadge();
  renderKeranjang();
}

function kosongkanKeranjang() {
  if (!keranjang.length) return;
  if (!confirm('Kosongkan semua keranjang?')) return;
  keranjang = [];
  updateBadge();
  renderKeranjang();
}

function checkout() {
  if (!keranjang.length) return;
  alert('✅ Pesanan berhasil dibuat!\nTim kami akan menghubungi kamu dalam 1x24 jam untuk konfirmasi pembayaran.');
  keranjang = [];
  updateBadge();
  renderKeranjang();
  toggleKeranjang();
}

function rp(n) { return 'Rp ' + n.toLocaleString('id-ID'); }

function renderKeranjang() {
  var body   = document.getElementById('keranjangBody');
  var footer = document.getElementById('keranjangFooter');

  if (!keranjang.length) {
    body.innerHTML = '<div class="keranjang-empty"><span>🛒</span><p>Keranjangmu masih kosong.<br>Yuk tambahkan produk!</p></div>';
    footer.innerHTML = '';
    return;
  }

  body.innerHTML = keranjang.map(function(k) {
    return '<div class="keranjang-item">' +
      '<div class="ki-img"><img src="' + k.img + '" alt="' + k.nama + '" /></div>' +
      '<div class="ki-info">' +
        '<div class="ki-nama">' + k.nama + '</div>' +
        '<div class="ki-harga">' + rp(k.harga) + ' / satuan</div>' +
      '</div>' +
      '<div class="ki-qty">' +
        '<button onclick="ubahQty(' + k.id + ', -1)">−</button>' +
        '<span>' + k.qty + '</span>' +
        '<button onclick="ubahQty(' + k.id + ', 1)">+</button>' +
      '</div>' +
      '<button class="ki-hapus" onclick="hapusItem(' + k.id + ')">🗑️</button>' +
    '</div>';
  }).join('');

  var subtotal = keranjang.reduce(function(s, k) { return s + k.harga * k.qty; }, 0);
  var ongkir   = 15000;
  var total    = subtotal + ongkir;

  footer.innerHTML =
    '<div class="kf-subtotal"><span class="kf-label">Subtotal (' + keranjang.reduce(function(s,k){return s+k.qty;},0) + ' item)</span><span class="kf-val">' + rp(subtotal) + '</span></div>' +
    '<div class="kf-subtotal"><span class="kf-label">Ongkos Kirim</span><span class="kf-val">' + rp(ongkir) + '</span></div>' +
    '<div class="kf-total"><span class="kf-label">Total</span><span class="kf-val">' + rp(total) + '</span></div>' +
    '<button class="btn-checkout" onclick="checkout()">✅ Beli Sekarang</button>' +
    '<button class="btn-kosongkan" onclick="kosongkanKeranjang()">🗑️ Kosongkan Keranjang</button>';
}

// ===== CEK PROFIL LENGKAP =====
function cekProfilLengkap() {
  var profil = JSON.parse(localStorage.getItem('akunProfil') || '{}');
  var alamat = JSON.parse(localStorage.getItem('akunAlamat') || '{}');

  var kurang = [];
  if (!profil.namaDepan)    kurang.push('Nama Depan');
  if (!profil.namaBelakang) kurang.push('Nama Belakang');
  if (!profil.jenisKelamin) kurang.push('Jenis Kelamin');
  if (!profil.tglLahir)     kurang.push('Tanggal Lahir');
  if (!profil.noHp)         kurang.push('No. HP');
  if (!profil.email)        kurang.push('Email');
  if (!alamat.alamatLengkap)kurang.push('Alamat Lengkap');
  if (!alamat.kecamatan)    kurang.push('Kecamatan');
  if (!alamat.kota)         kurang.push('Kota/Kabupaten');
  if (!alamat.provinsi)     kurang.push('Provinsi');
  if (!alamat.kodePos)      kurang.push('Kode Pos');

  if (kurang.length > 0) {
    tampilPesanProfil(kurang);
    return false;
  }
  return true;
}

function tampilPesanProfil(kurang) {
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)';
  overlay.innerHTML =
    '<div style="background:white;border-radius:24px;padding:36px;max-width:440px;width:90%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.3)">' +
      '<div style="font-size:3.5rem;margin-bottom:14px">👤</div>' +
      '<h3 style="font-size:1.2rem;font-weight:800;color:#2e7d32;margin-bottom:8px">Lengkapi Profil Dulu!</h3>' +
      '<p style="font-size:.88rem;color:#555;margin-bottom:14px;line-height:1.6">Kamu harus mengisi semua data profil sebelum bisa berbelanja.</p>' +
      '<div style="background:#fff3e0;border-radius:12px;padding:14px;margin-bottom:20px;text-align:left">' +
        '<div style="font-size:.75rem;font-weight:800;color:#f57f17;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">⚠️ Belum diisi:</div>' +
        kurang.map(function(k){ return '<div style="font-size:.82rem;color:#555;padding:3px 0">• ' + k + '</div>'; }).join('') +
      '</div>' +
      '<div style="display:flex;gap:10px;justify-content:center">' +
        '<button onclick="this.closest(\'div\').parentElement.remove()" style="background:#f5f5f5;color:#555;border:none;padding:12px 22px;border-radius:99px;font-size:.88rem;font-weight:700;cursor:pointer">Nanti</button>' +
        '<button onclick="window.location=\'akun.html\'" style="background:linear-gradient(135deg,#2e7d32,#43a047);color:white;border:none;padding:12px 26px;border-radius:99px;font-size:.88rem;font-weight:800;cursor:pointer">Isi Profil →</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);
}

// ===== CEK JARAK BERDASARKAN ALAMAT PROFIL =====
var kategoriSegar = ['hasil'];

// Koordinat kota-kota Indonesia
var koordinatKota = {
  'jakarta':{'lat':-6.21,'lng':106.85},'surabaya':{'lat':-7.25,'lng':112.75},
  'bandung':{'lat':-6.92,'lng':107.61},'medan':{'lat':3.59,'lng':98.67},
  'semarang':{'lat':-6.99,'lng':110.42},'makassar':{'lat':-5.14,'lng':119.43},
  'palembang':{'lat':-2.99,'lng':104.75},'tangerang':{'lat':-6.18,'lng':106.63},
  'depok':{'lat':-6.40,'lng':106.82},'bekasi':{'lat':-6.24,'lng':107.00},
  'bogor':{'lat':-6.60,'lng':106.80},'malang':{'lat':-7.98,'lng':112.63},
  'yogyakarta':{'lat':-7.80,'lng':110.36},'solo':{'lat':-7.57,'lng':110.83},
  'karawang':{'lat':-6.32,'lng':107.30},'brebes':{'lat':-6.87,'lng':109.04},
  'klaten':{'lat':-7.71,'lng':110.60},'lampung':{'lat':-5.45,'lng':105.26},
  'denpasar':{'lat':-8.65,'lng':115.21},'pekanbaru':{'lat':0.51,'lng':101.45},
  'balikpapan':{'lat':-1.27,'lng':116.83},'manado':{'lat':1.48,'lng':124.84},
  'pontianak':{'lat':-0.02,'lng':109.33},'padang':{'lat':-0.95,'lng':100.35},
  'batu':{'lat':-7.87,'lng':122.52},'lembang':{'lat':-6.81,'lng':107.62},
  'berastagi':{'lat':3.19,'lng':98.51}
};

function getKoordUserDariProfil() {
  var alamat = JSON.parse(localStorage.getItem('akunAlamat') || '{}');
  var kota = (alamat.kota || '').toLowerCase().trim();
  var prov = (alamat.provinsi || '').toLowerCase().trim();

  // Cari di koordinat kota
  for (var k in koordinatKota) {
    if (kota.includes(k) || k.includes(kota.split(' ')[0])) {
      return koordinatKota[k];
    }
  }
  // Fallback ke provinsi
  var provMap = {
    'jawa barat':{'lat':-6.92,'lng':107.61},'jawa tengah':{'lat':-7.15,'lng':110.14},
    'jawa timur':{'lat':-7.25,'lng':112.75},'dki jakarta':{'lat':-6.21,'lng':106.85},
    'banten':{'lat':-6.18,'lng':106.63},'sumatera utara':{'lat':3.59,'lng':98.67},
    'sumatera selatan':{'lat':-2.99,'lng':104.75},'lampung':{'lat':-5.45,'lng':105.26},
    'bali':{'lat':-8.65,'lng':115.21},'sulawesi selatan':{'lat':-5.14,'lng':119.43},
    'kalimantan timur':{'lat':-1.27,'lng':116.83},'di yogyakarta':{'lat':-7.80,'lng':110.36},
  };
  for (var p in provMap) {
    if (prov.includes(p) || p.includes(prov)) return provMap[p];
  }
  return null;
}

function hitungJarak(lat1, lng1, lat2, lng2) {
  var R = 6371;
  var dLat = (lat2-lat1)*Math.PI/180;
  var dLng = (lng2-lng1)*Math.PI/180;
  var a = Math.sin(dLat/2)*Math.sin(dLat/2)+
          Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*
          Math.sin(dLng/2)*Math.sin(dLng/2);
  return Math.round(R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)));
}

function cekJarakProduk(produk, callback) {
  if (!kategoriSegar.includes(produk.kategori)) { callback(true); return; }

  var userCoord = getKoordUserDariProfil();
  if (!userCoord) { callback(true); return; }

  var koordinatPenjual = {
    'Pak Budi - Jawa Tengah':  {'lat':-7.15,'lng':110.14},
    'Bu Sari - Jawa Timur':    {'lat':-7.25,'lng':112.75},
    'Pak Hendra - Brebes':     {'lat':-6.87,'lng':109.04},
    'Bu Dewi - Malang':        {'lat':-7.98,'lng':112.63},
    'Petani Lampung':          {'lat':-5.45,'lng':105.26},
    'Distributor Resmi':       {'lat':-6.21,'lng':106.85},
  };

  var penjualCoord = koordinatPenjual[produk.penjual];
  if (!penjualCoord) { callback(true); return; }

  var jarak = hitungJarak(userCoord.lat, userCoord.lng, penjualCoord.lat, penjualCoord.lng);
  callback(jarak <= 150, jarak);
}

function tampilPesanJauh(jarakKm) {
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)';

  overlay.innerHTML =
    '<div style="background:white;border-radius:24px;padding:36px;max-width:420px;width:90%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.3)">' +
      '<div style="font-size:4rem;margin-bottom:16px">🚫</div>' +
      '<h3 style="font-size:1.3rem;font-weight:800;color:#e53935;margin-bottom:10px">Kamu Terlalu Jauh!</h3>' +
      '<p style="font-size:.92rem;color:#555;line-height:1.7;margin-bottom:8px">Produk segar ini hanya bisa dibeli oleh pembeli dalam radius <strong>150 km</strong> dari penjual.</p>' +
      '<p style="font-size:.85rem;color:#aaa;margin-bottom:24px">Jarak kamu dari penjual: <strong style="color:#e53935">' + (jarakKm || '?') + ' km</strong></p>' +
      '<p style="font-size:.82rem;color:#888;background:#f9fbe7;border-radius:10px;padding:12px;margin-bottom:20px">💡 Kamu tetap bisa membeli <strong>bibit, pupuk, alat pertanian, dan pestisida</strong> dari mana saja.</p>' +
      '<button onclick="this.closest(\'div\').parentElement.remove()" style="background:linear-gradient(135deg,#2e7d32,#43a047);color:white;border:none;padding:12px 32px;border-radius:99px;font-size:.95rem;font-weight:800;cursor:pointer">Mengerti</button>' +
    '</div>';

  document.body.appendChild(overlay);
}
