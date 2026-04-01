var fotoBase64 = null;
var editId = null;

// Cek mode edit
var editParams = new URLSearchParams(window.location.search);
editId = editParams.get('edit');

if (editId) {
  document.querySelector('.jp-hero h2').textContent = '✏️ Edit Produk';
  document.querySelector('.btn-publish').textContent = '💾 Simpan Perubahan';
}

function onSupabaseReady() {
  if (!editId) return;
  window.sb.from('produk').select('*').eq('id', editId).single().then(function(res) {
    if (!res.data) { alert('Produk tidak ditemukan.'); return; }
    var p = res.data;
    document.getElementById('jpNama').value      = p.nama || '';
    document.getElementById('jpKategori').value  = p.kategori || 'hasil';
    document.getElementById('jpSatuan').value    = p.satuan || 'per kg';
    document.getElementById('jpHarga').value     = p.harga || '';
    document.getElementById('jpStok').value      = p.stok || '';
    document.getElementById('jpDeskripsi').value = p.deskripsi || '';
    document.getElementById('jpPesan').value     = p.pesan_penjual || '';
    document.getElementById('jpHp').value        = p.no_hp || '';
    document.getElementById('jpMaps').value      = p.link_maps || '';

    // Pisah penjual & kota
    var parts = (p.penjual || '').split(' - ');
    document.getElementById('jpPenjual').value = parts[0] || '';
    document.getElementById('jpKota').value    = parts[1] || '';

    // Provinsi dari lokasi
    if (p.lokasi) {
      var lok = p.lokasi.split(', ');
      document.getElementById('jpProvinsi').value = lok[1] || '';
    }

    // Foto
    if (p.img) {
      fotoBase64 = p.img;
      document.getElementById('jpFotoPreview').src = p.img;
      document.getElementById('jpFotoPreview').style.display = 'block';
      document.getElementById('jpFotoPlaceholder').style.display = 'none';
      document.getElementById('prevImg').src = p.img;
    }

    updatePreview();
  });
}

// Preview realtime
document.getElementById('jpNama').addEventListener('input', updatePreview);
document.getElementById('jpKategori').addEventListener('change', updatePreview);
document.getElementById('jpSatuan').addEventListener('change', updatePreview);
document.getElementById('jpPenjual').addEventListener('input', updatePreview);

function updatePreview() {
  var nama    = document.getElementById('jpNama').value || 'Nama Produk';
  var harga   = parseInt(document.getElementById('jpHarga').value) || 0;
  var satuan  = document.getElementById('jpSatuan').value;
  var penjual = document.getElementById('jpPenjual').value || 'Nama Penjual';
  var kat     = document.getElementById('jpKategori').value;
  var kota    = document.getElementById('jpKota').value;

  document.getElementById('prevNama').textContent    = nama;
  document.getElementById('prevHarga').textContent   = 'Rp ' + harga.toLocaleString('id-ID');
  document.getElementById('prevSatuan').textContent  = satuan;
  document.getElementById('prevPenjual').textContent = '🏪 ' + penjual + (kota ? ' - ' + kota : '');
  document.getElementById('prevKat').textContent     = kat;
}

function previewFoto(input) {
  var file = input.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    fotoBase64 = e.target.result;
    document.getElementById('jpFotoPlaceholder').style.display = 'none';
    var img = document.getElementById('jpFotoPreview');
    img.src = fotoBase64;
    img.style.display = 'block';
    document.getElementById('prevImg').src = fotoBase64;
  };
  reader.readAsDataURL(file);
}

function publishProduk() {
  var nama    = document.getElementById('jpNama').value.trim();
  var kat     = document.getElementById('jpKategori').value;
  var harga   = parseInt(document.getElementById('jpHarga').value);
  var satuan  = document.getElementById('jpSatuan').value;
  var stok    = parseInt(document.getElementById('jpStok').value) || 0;
  var deskripsi = document.getElementById('jpDeskripsi').value.trim();
  var penjual = document.getElementById('jpPenjual').value.trim();
  var kota    = document.getElementById('jpKota').value.trim();
  var provinsi= document.getElementById('jpProvinsi').value;
  var hp      = document.getElementById('jpHp').value.trim();
  var maps    = document.getElementById('jpMaps').value.trim();
  var pesan   = document.getElementById('jpPesan').value.trim();

  if (!nama)    { alert('Nama produk wajib diisi.'); return; }
  if (!harga)   { alert('Harga wajib diisi.'); return; }
  if (!penjual) { alert('Nama penjual wajib diisi.'); return; }
  if (!provinsi){ alert('Pilih provinsi terlebih dahulu.'); return; }

  var produkBaru = {
    nama, kategori: kat, harga, satuan, stok, deskripsi,
    penjual: penjual + (kota ? ' - ' + kota : ''),
    lokasi: kota + (provinsi ? ', ' + provinsi : ''),
    no_hp: hp,
    link_maps: maps,
    pesan_penjual: pesan,
    img: fotoBase64 || 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
    rating: 5.0, terjual: 0, terlaris: false, status: 'aktif'
  };

  // Simpan ke Supabase
  if (window.sb) {
    if (editId) {
      // Mode edit — update
      window.sb.from('produk').update(produkBaru).eq('id', editId).then(function(res) {
        if (res.error) { alert('Gagal update: ' + res.error.message); return; }
        document.getElementById('successOverlay').style.display = 'flex';
        document.querySelector('.success-modal h3').textContent = '✅ Produk Berhasil Diperbarui!';
      });
    } else {
      // Mode tambah baru
      sbTambahProduk(produkBaru).then(function(result) {
        if (result && result.error) { alert('Gagal menyimpan: ' + result.error.message); return; }
        document.getElementById('successOverlay').style.display = 'flex';
      });
    }
  } else {
    document.getElementById('successOverlay').style.display = 'flex';
  }
}

function tambahLagi() {
  document.getElementById('successOverlay').style.display = 'none';
  // Reset form
  ['jpNama','jpHarga','jpStok','jpDeskripsi','jpPenjual','jpKota','jpHp','jpMaps','jpPesan'].forEach(function(id){
    document.getElementById(id).value = '';
  });
  document.getElementById('jpProvinsi').value = '';
  document.getElementById('jpFotoPreview').style.display = 'none';
  document.getElementById('jpFotoPlaceholder').style.display = 'block';
  document.getElementById('prevImg').src = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop';
  fotoBase64 = null;
  updatePreview();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
