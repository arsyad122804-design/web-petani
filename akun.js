// ===== SWITCH SECTION =====
function switchSection(id, el) {
  document.querySelectorAll('.akun-section').forEach(function(s){ s.classList.remove('aktif'); });
  document.querySelectorAll('.akun-nav-item').forEach(function(b){ b.classList.remove('aktif'); });
  document.getElementById('sec-' + id).classList.add('aktif');
  el.classList.add('aktif');
}

// ===== GANTI FOTO =====
function gantiPhoto(input) {
  var file = input.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    var img = document.getElementById('fotoImg');
    var emoji = document.getElementById('fotoEmoji');
    img.src = e.target.result;
    img.style.display = 'block';
    emoji.style.display = 'none';
    localStorage.setItem('akunFoto', e.target.result);
  };
  reader.readAsDataURL(file);
}

// ===== TOAST =====
function showToast(msg) {
  var t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(function(){ t.classList.add('show'); }, 10);
  setTimeout(function(){ t.classList.remove('show'); setTimeout(function(){ t.remove(); }, 300); }, 2500);
}

// ===== UPDATE SIDEBAR =====
function updateSidebar() {
  var nd = document.getElementById('namaDepan').value;
  var nb = document.getElementById('namaBelakang').value;
  var kota = document.getElementById('kota').value;
  var prov = document.getElementById('provinsi').value;
  if (nd || nb) document.getElementById('sidebarNama').textContent = (nd + ' ' + nb).trim();
  if (kota || prov) document.getElementById('sidebarLokasi').textContent = '📍 ' + [kota, prov].filter(Boolean).join(', ');
}

// ===== SIMPAN =====
function simpanProfil() {
  var data = {
    namaDepan: document.getElementById('namaDepan').value,
    namaBelakang: document.getElementById('namaBelakang').value,
    jenisKelamin: document.getElementById('jenisKelamin').value,
    tglLahir: document.getElementById('tglLahir').value,
    noHp: document.getElementById('noHp').value,
    email: document.getElementById('email').value,
    bio: document.getElementById('bio').value,
  };
  localStorage.setItem('akunProfil', JSON.stringify(data));
  updateSidebar();
  showToast('✅ Data pribadi berhasil disimpan!');
}

function simpanAlamat() {
  var data = {
    alamatLengkap: document.getElementById('alamatLengkap').value,
    kecamatan: document.getElementById('kecamatan').value,
    kota: document.getElementById('kota').value,
    provinsi: document.getElementById('provinsi').value,
    kodePos: document.getElementById('kodePos').value,
    linkMaps: document.getElementById('linkMaps').value,
  };
  localStorage.setItem('akunAlamat', JSON.stringify(data));
  updateSidebar();
  showToast('✅ Alamat berhasil disimpan!');
}

function simpanPertanian() {
  showToast('✅ Info pertanian berhasil disimpan!');
}

function gantiPassword() {
  var p1 = document.getElementById('passBaru').value;
  var p2 = document.getElementById('passKonfirm').value;
  if (!p1) { showToast('⚠️ Masukkan password baru.'); return; }
  if (p1.length < 8) { showToast('⚠️ Password minimal 8 karakter.'); return; }
  if (p1 !== p2) { showToast('⚠️ Konfirmasi password tidak cocok.'); return; }
  showToast('✅ Password berhasil diubah!');
  document.getElementById('passBaru').value = '';
  document.getElementById('passKonfirm').value = '';
}

// ===== PASSWORD STRENGTH =====
document.getElementById('passBaru').addEventListener('input', function() {
  var val = this.value;
  var el  = document.getElementById('passStrength');
  if (!val) { el.textContent = ''; return; }
  var strength = 0;
  if (val.length >= 8) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;
  var labels = ['','🔴 Sangat Lemah','🟠 Lemah','🟡 Cukup','🟢 Kuat'];
  var colors = ['','#e53935','#f57f17','#f9a825','#2e7d32'];
  el.textContent = labels[strength];
  el.style.color = colors[strength];
});

// ===== LOAD DATA =====
function loadData() {
  var profil = JSON.parse(localStorage.getItem('akunProfil') || '{}');
  var alamat = JSON.parse(localStorage.getItem('akunAlamat') || '{}');
  var foto   = localStorage.getItem('akunFoto');

  if (profil.namaDepan) document.getElementById('namaDepan').value = profil.namaDepan;
  if (profil.namaBelakang) document.getElementById('namaBelakang').value = profil.namaBelakang;
  if (profil.jenisKelamin) document.getElementById('jenisKelamin').value = profil.jenisKelamin;
  if (profil.tglLahir) document.getElementById('tglLahir').value = profil.tglLahir;
  if (profil.noHp) document.getElementById('noHp').value = profil.noHp;
  if (profil.email) document.getElementById('email').value = profil.email;
  if (profil.bio) document.getElementById('bio').value = profil.bio;

  if (alamat.alamatLengkap) document.getElementById('alamatLengkap').value = alamat.alamatLengkap;
  if (alamat.kecamatan) document.getElementById('kecamatan').value = alamat.kecamatan;
  if (alamat.kota) document.getElementById('kota').value = alamat.kota;
  if (alamat.provinsi) document.getElementById('provinsi').value = alamat.provinsi;
  if (alamat.kodePos) document.getElementById('kodePos').value = alamat.kodePos;
  if (alamat.linkMaps) document.getElementById('linkMaps').value = alamat.linkMaps;

  if (foto) {
    document.getElementById('fotoImg').src = foto;
    document.getElementById('fotoImg').style.display = 'block';
    document.getElementById('fotoEmoji').style.display = 'none';
  }

  updateSidebar();
}

loadData();

// ===== ISI DATA CONTOH =====
function isiContoh() {
  var profil = {
    namaDepan: "Budi",
    namaBelakang: "Santoso",
    jenisKelamin: "Laki-laki",
    tglLahir: "1990-05-15",
    noHp: "081234567890",
    email: "budi.santoso@email.com",
    bio: "Petani padi dan jagung dari Jawa Tengah. Sudah bertani selama 15 tahun."
  };
  var alamat = {
    alamatLengkap: "Jl. Raya Pertanian No. 12, RT 03/RW 05",
    kecamatan: "Karanganyar",
    kota: "Karanganyar",
    provinsi: "Jawa Tengah",
    kodePos: "57716",
    linkMaps: "https://maps.google.com/?q=Karanganyar+Jawa+Tengah"
  };
  localStorage.setItem('akunProfil', JSON.stringify(profil));
  localStorage.setItem('akunAlamat', JSON.stringify(alamat));
  loadData();
  showToast('✅ Data contoh berhasil diisi!');
}

// ===== PRODUK SAYA =====
var produkSaya = []; // diisi dari Supabase

var kategoriEmoji = {
  hasil:'🌾', bibit:'🌱', pupuk:'🌿', alat:'🔧', pestisida:'🧪'
};

function toggleFormProduk() {
  var form = document.getElementById('formProdukBaru');
  form.style.display = form.style.display === 'none' ? 'flex' : 'none';
}

function simpanProdukBaru() {
  var nama     = document.getElementById('pNama').value.trim();
  var kategori = document.getElementById('pKategori').value;
  var harga    = parseInt(document.getElementById('pHarga').value);
  var satuan   = document.getElementById('pSatuan').value;
  var deskripsi= document.getElementById('pDeskripsi').value.trim();
  var stok     = document.getElementById('pStok').value;
  var berat    = document.getElementById('pBerat').value.trim();

  if (!nama || !harga) { showToast('⚠️ Nama dan harga wajib diisi.'); return; }

  var item = { id: Date.now(), nama, kategori, harga, satuan, deskripsi, stok, berat, terjual: 0 };
  produkSaya.unshift(item);
  localStorage.setItem('produkSaya', JSON.stringify(produkSaya));

  // Simpan ke Supabase
  if (window.sb) {
    sbTambahProduk({ nama, kategori, harga, satuan, deskripsi, stok: parseInt(stok)||0, berat, terjual: 0, rating: 5.0 });
  }

  ['pNama','pHarga','pDeskripsi','pStok','pBerat'].forEach(function(id){ document.getElementById(id).value = ''; });
  toggleFormProduk();
  renderProdukSaya();
  showToast('✅ Produk berhasil ditambahkan!');
}

function hapusProdukSaya(id) {
  if (!confirm('Hapus produk ini?')) return;
  produkSaya = produkSaya.filter(function(p){ return p.id !== id; });
  localStorage.setItem('produkSaya', JSON.stringify(produkSaya));
  renderProdukSaya();
  showToast('🗑️ Produk dihapus.');
}

function renderProdukSaya() {
  var list = document.getElementById('listProdukSaya');
  if (!list) return;

  document.getElementById('jumlahProdukSaya').textContent = produkSaya.length + ' produk';

  if (!produkSaya.length) {
    list.innerHTML = '<div class="produk-kosong"><span>📦</span><p>Belum ada produk. Klik "+ Tambah Produk" untuk mulai berjualan.</p></div>';
    return;
  }

  list.innerHTML = produkSaya.map(function(p) {
    return '<div class="produk-item">' +
      '<div class="pi-icon">' + (kategoriEmoji[p.kategori] || '📦') + '</div>' +
      '<div class="pi-info">' +
        '<div class="pi-nama">' + p.nama + '</div>' +
        '<div class="pi-meta">' +
          '<span>' + p.kategori + '</span>' +
          '<span>' + p.satuan + '</span>' +
          (p.stok ? '<span>Stok: ' + p.stok + '</span>' : '') +
          '<span>Terjual: ' + p.terjual + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="pi-harga">Rp ' + p.harga.toLocaleString('id-ID') + '</div>' +
      '<div class="pi-actions">' +
        '<button class="btn-hapus-produk" onclick="hapusProdukSaya(' + p.id + ')">🗑️ Hapus</button>' +
      '</div>' +
    '</div>';
  }).join('');
}

renderProdukSaya();

// ===== SUPABASE =====
function onSupabaseReady() {
  // Load profil
  sbGetProfil().then(function(p) {
    if (!p) return;
    var map = {
      namaDepan: p.nama_depan, namaBelakang: p.nama_belakang,
      jenisKelamin: p.jenis_kelamin, noHp: p.no_hp,
      email: p.email, bio: p.bio,
      alamatLengkap: p.alamat_lengkap, kecamatan: p.kecamatan,
      kota: p.kota, provinsi: p.provinsi, kodePos: p.kode_pos,
      linkMaps: p.link_maps
    };
    Object.keys(map).forEach(function(id) {
      var el = document.getElementById(id);
      if (el && map[id]) el.value = map[id];
    });
    if (p.foto_url) {
      document.getElementById('fotoImg').src = p.foto_url;
      document.getElementById('fotoImg').style.display = 'block';
      document.getElementById('fotoEmoji').style.display = 'none';
    }
    updateSidebar();
  });

  // Load produk saya dari Supabase
  sbGetProduk().then(function(rows) {
    produkSaya = (rows || []).map(function(p) {
      return { id: p.id, nama: p.nama, kategori: p.kategori, harga: p.harga, satuan: p.satuan, stok: p.stok, terjual: p.terjual || 0 };
    });
    renderProdukSaya();
  });
}

// Override simpan profil ke Supabase
var _simpanProfil = simpanProfil;
simpanProfil = function() {
  _simpanProfil();
  if (window.sb) {
    sbSimpanProfil({
      nama_depan: document.getElementById('namaDepan').value,
      nama_belakang: document.getElementById('namaBelakang').value,
      jenis_kelamin: document.getElementById('jenisKelamin').value,
      tgl_lahir: document.getElementById('tglLahir').value || null,
      no_hp: document.getElementById('noHp').value,
      email: document.getElementById('email').value,
      bio: document.getElementById('bio').value,
    });
  }
};

var _simpanAlamat = simpanAlamat;
simpanAlamat = function() {
  _simpanAlamat();
  if (window.sb) {
    sbSimpanProfil({
      alamat_lengkap: document.getElementById('alamatLengkap').value,
      kecamatan: document.getElementById('kecamatan').value,
      kota: document.getElementById('kota').value,
      provinsi: document.getElementById('provinsi').value,
      kode_pos: document.getElementById('kodePos').value,
      link_maps: document.getElementById('linkMaps').value,
    });
  }
};
