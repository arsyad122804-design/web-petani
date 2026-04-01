// Ambil id dari URL
var params   = new URLSearchParams(window.location.search);
var produkId = parseInt(params.get('id'));
var produk   = null;

// Coba cari dari produkData lokal dulu, kalau kosong load dari Supabase
function initDetail() {
  if (produkData && produkData.length > 0) {
    produk = produkData.find(function(p) { return p.id === produkId; });
    if (produk) { renderDetail(); return; }
  }
  // Tampil loading
  document.getElementById('detailWrapper').innerHTML =
    '<div style="text-align:center;padding:80px;color:#aaa">' +
    '<div style="width:48px;height:48px;border:5px solid #e8f5e9;border-top-color:#2e7d32;border-radius:50%;animation:spin .8s linear infinite;margin:0 auto 16px"></div>' +
    '<p>Memuat produk...</p></div>';

  // Load dari Supabase
  if (window.sb) {
    window.sb.from('produk').select('*').eq('id', produkId).single()
      .then(function(res) {
        if (res.data) {
          produk = res.data;
          renderDetail();
        } else {
          document.getElementById('detailWrapper').innerHTML =
            '<div style="text-align:center;padding:60px;color:#aaa"><span style="font-size:3rem">😕</span><p>Produk tidak ditemukan.</p><a href="marketplace.html" style="color:#2e7d32;font-weight:700">← Kembali ke Marketplace</a></div>';
        }
      });
  }
}

function onSupabaseReady() {
  initDetail();
  // Load ulasan
  sbGetUlasan(produkId).then(function(rows) {
    if (rows && rows.length > 0) {
      ulasanData = rows.map(function(u) {
        return {
          nama: u.nama, avatar: '🧑‍🌾',
          rating: u.rating,
          waktu: new Date(u.created_at).toLocaleDateString('id-ID'),
          komentar: u.komentar,
          verified: u.verified || false
        };
      });
      var list = document.getElementById('ulasanList');
      if (list) list.innerHTML = renderUlasanList();
    }
  });
}

// Satuan berdasarkan kategori
function getSatuan(p) {
  if (p.kategori === 'hasil' || p.kategori === 'bibit') return 'kg';
  if (p.kategori === 'pupuk') return 'kg';
  return 'unit';
}

function setQty(val) {
  document.getElementById('qtyInput').value = val;
  hitungTotal();
}

function hitungTotal() {
  var qty = parseFloat(document.getElementById('qtyInput').value) || 0;
  var total = qty * produk.harga;
  document.getElementById('orderTotal').textContent = 'Rp ' + total.toLocaleString('id-ID');
}

function tambahQty(delta) {
  var input = document.getElementById('qtyInput');
  var val   = parseFloat(input.value) || 0;
  var step  = getSatuan(produk) === 'kg' ? 0.5 : 1;
  val = Math.max(step, val + delta * step);
  input.value = val;
  hitungTotal();
}

function getQty() {
  return parseFloat(document.getElementById('qtyInput').value) || 0;
}

function beliLangsung() {
  var qty = getQty();
  if (qty <= 0) { alert('Masukkan jumlah terlebih dahulu.'); return; }
  if (!cekProfilLengkap()) return;

  cekJarakProduk(produk, function(boleh, jarakKm) {
    if (!boleh) { tampilPesanJauh(jarakKm); return; }
    tambahKeKeranjang(produk.id, qty);
    alert('✅ Pesanan langsung berhasil!\nTim kami akan menghubungi kamu dalam 1x24 jam.');
    keranjang = [];
    updateBadge();
  });
}

function masukKeranjang() {
  var qty = getQty();
  if (qty <= 0) { alert('Masukkan jumlah terlebih dahulu.'); return; }
  if (!cekProfilLengkap()) return;

  cekJarakProduk(produk, function(boleh, jarakKm) {
    if (!boleh) { tampilPesanJauh(jarakKm); return; }
    tambahKeKeranjang(produk.id, qty);
    toggleKeranjang();
  });
}

// Override tambahKeKeranjang untuk support qty custom
function tambahKeKeranjang(id, customQty) {
  // Gunakan produk yang sudah diload (dari Supabase atau lokal)
  var p = produk || (produkData && produkData.find(function(x) { return x.id === id; }));
  if (!p) return;
  var qty = customQty || 1;
  var item = keranjang.find(function(k) { return k.id === id; });
  if (item) {
    item.qty += qty;
  } else {
    keranjang.push({ id: p.id, nama: p.nama, harga: p.harga, img: p.img, qty: qty, satuan: getSatuan(p) });
  }
  updateBadge();
  animasiBadge();
}

function renderDetail() {
  if (!produk) {
    document.getElementById('detailWrapper').innerHTML = '<div style="text-align:center;padding:60px;color:#aaa"><span style="font-size:3rem">😕</span><p>Produk tidak ditemukan.</p><a href="marketplace.html" style="color:#2e7d32;font-weight:700">← Kembali</a></div>';
    return;
  }

  // Null-safe semua field
  produk.terjual  = produk.terjual  || 0;
  produk.stok     = produk.stok     || 0;
  produk.rating   = produk.rating   || 5;
  produk.satuan   = produk.satuan   || 'per unit';
  produk.penjual  = produk.penjual  || 'Penjual';
  produk.img      = produk.img      || 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop';
  produk.kategori = produk.kategori || 'hasil';

  var satuan  = getSatuan(produk);
  var stepVal = satuan === 'kg' ? '0.5' : '1';

  document.getElementById('detailWrapper').innerHTML =

    // KOLOM KIRI - gambar + detail specs (sticky)
    '<div class="detail-img-section">' +
      '<div class="detail-img"><img src="' + produk.img + '" alt="' + produk.nama + '" /></div>' +
      '<div class="detail-desc">' +
        '<h4>📋 Detail Produk</h4>' +
        '<p>' + (produk.deskripsi || (produk.nama + ' dari ' + produk.penjual + '. Produk segar langsung dari petani dengan kualitas terjamin.')) + '</p>' +
        '<div class="detail-specs">' +
          '<div class="spec-item"><div class="spec-label">Kategori</div><div class="spec-val">' + produk.kategori + '</div></div>' +
          '<div class="spec-item"><div class="spec-label">Satuan</div><div class="spec-val">' + produk.satuan + '</div></div>' +
          '<div class="spec-item"><div class="spec-label">Stok</div><div class="spec-val">' + (produk.stok || 0) + ' ' + satuan + '</div></div>' +
          '<div class="spec-item"><div class="spec-label">Terjual</div><div class="spec-val">' + (produk.terjual || 0).toLocaleString('id-ID') + ' ' + satuan + '</div></div>' +
          (produk.lokasi ? '<div class="spec-item"><div class="spec-label">Lokasi</div><div class="spec-val">📍 ' + produk.lokasi + '</div></div>' : '') +
          (produk.no_hp  ? '<div class="spec-item"><div class="spec-label">Kontak</div><div class="spec-val">📱 ' + produk.no_hp + '</div></div>' : '') +
        '</div>' +
        (produk.link_maps ? '<a href="' + produk.link_maps + '" target="_blank" style="display:inline-flex;align-items:center;gap:6px;margin-top:12px;color:#2e7d32;font-size:.85rem;font-weight:700;text-decoration:none;background:#e8f5e9;padding:8px 14px;border-radius:10px;border:2px solid #c8e6c9">🗺️ Lihat Lokasi di Maps</a>' : '') +
      '</div>' +
      '<div class="penjual-ulasan">' +
        '<div class="pu-header">' +
          '<div class="pu-avatar">🏪</div>' +
          '<div>' +
            '<div class="pu-nama">' + produk.penjual + '</div>' +
            '<div class="pu-label">Deskripsi Penjual</div>' +
          '</div>' +
          '<span class="pu-badge">✓ Penjual Terverifikasi</span>' +
        '</div>' +
        '<p class="pu-desc">' + (produk.pesan_penjual || ('Produk dari ' + produk.penjual + '. Kualitas terjamin langsung dari petani.')) + '</p>' +
        '<div class="pu-stats">' +
          '<div class="pu-stat"><span class="ps-icon">📦</span><div class="ps-val">' + (produk.terjual||0).toLocaleString('id-ID') + '</div><div class="ps-label">Terjual</div></div>' +
          '<div class="pu-stat"><span class="ps-icon">⭐</span><div class="ps-val">' + (produk.rating||5) + '</div><div class="ps-label">Rating</div></div>' +
          '<div class="pu-stat"><span class="ps-icon">📦</span><div class="ps-val">' + (produk.stok||0) + '</div><div class="ps-label">Stok</div></div>' +
          (produk.no_hp ? '<div class="pu-stat" onclick="window.open(\'https://wa.me/62\'+\'' + (produk.no_hp||'').substring(1) + '\',\'_blank\')" style="cursor:pointer"><span class="ps-icon">💬</span><div class="ps-val" style="font-size:.7rem">WA</div><div class="ps-label">Hubungi</div></div>' : '') +
        '</div>' +
      '</div>' +
    '</div>' +

    // KOLOM KANAN - info + order + ulasan
    '<div class="detail-info-section">' +
      '<div class="detail-nama">' + produk.nama + '</div>' +
      '<div class="detail-meta">' +
        '<div class="detail-penjual">🏪 <strong>' + produk.penjual + '</strong></div>' +
        '<div class="detail-rating">' +
          '<span class="stars">' + '⭐'.repeat(Math.round(produk.rating)) + '</span>' +
          '<span class="rval">(' + produk.rating + ')</span>' +
          '<span class="detail-terjual">• ' + produk.terjual.toLocaleString('id-ID') + ' terjual</span>' +
        '</div>' +
      '</div>' +
      '<div class="detail-harga-box">' +
        '<div class="detail-harga-per">Harga per ' + satuan + '</div>' +
        '<div class="detail-harga">Rp ' + produk.harga.toLocaleString('id-ID') + '</div>' +
        '<div class="detail-harga-sub">per ' + satuan + ' • ' + produk.satuan + '</div>' +
      '</div>' +
      '<div class="detail-order-box">' +
        '<div class="order-section-label">Jumlah Pembelian</div>' +
        '<div class="qty-row">' +
          '<input type="number" id="qtyInput" value="' + stepVal + '" min="' + stepVal + '" step="' + stepVal + '" oninput="hitungTotal()" />' +
          '<span class="qty-unit-badge">' + satuan + '</span>' +
        '</div>' +
        '<div class="qty-chips">' +
          (satuan === 'kg'
            ? '<button class="qty-chip" onclick="setQty(0.5)">0.5 kg</button><button class="qty-chip" onclick="setQty(1)">1 kg</button><button class="qty-chip" onclick="setQty(2)">2 kg</button><button class="qty-chip" onclick="setQty(5)">5 kg</button><button class="qty-chip" onclick="setQty(10)">10 kg</button>'
            : '<button class="qty-chip" onclick="setQty(1)">1</button><button class="qty-chip" onclick="setQty(2)">2</button><button class="qty-chip" onclick="setQty(5)">5</button><button class="qty-chip" onclick="setQty(10)">10</button>'
          ) +
        '</div>' +
        '<div class="order-total-row">' +
          '<span class="otl">Total Harga</span>' +
          '<span class="otv" id="orderTotal">Rp ' + produk.harga.toLocaleString('id-ID') + '</span>' +
        '</div>' +
        '<div class="order-btns">' +
          '<button class="btn-beli-langsung" onclick="beliLangsung()">⚡ Beli Langsung</button>' +
          '<button class="btn-tambah-keranjang" onclick="masukKeranjang()">🛒 Masuk Keranjang</button>' +
        '</div>' +
      '</div>' +
      '<div class="ulasan-section" id="ulasanSection">' +
        renderUlasanHTML() +
      '</div>' +
    '</div>';
}

// ===== DATA ULASAN =====
var ulasanData = []; // diisi dari Supabase

var ratingUser = 0;

function renderUlasanHTML() {
  var total = ulasanData.length;
  var avg   = total > 0 ? (ulasanData.reduce(function(s,u){ return s+u.rating; },0) / total).toFixed(1) : '0.0';
  var dist  = [5,4,3,2,1].map(function(r){
    var cnt = ulasanData.filter(function(u){ return u.rating===r; }).length;
    return { r:r, cnt:cnt, pct: total > 0 ? Math.round(cnt/total*100) : 0 };
  });

  return '<div class="ulasan-header">' +
    '<h3>⭐ Ulasan Pembeli</h3>' +
  '</div>' +

  '<div class="ulasan-layout">' +
    // Ringkasan rating
    '<div class="rating-summary">' +
      '<div class="rs-big">' +
        '<div class="rs-angka">' + (total > 0 ? avg : '—') + '</div>' +
        '<div class="rs-stars">' + (total > 0 ? renderStars(parseFloat(avg)) : '☆☆☆☆☆') + '</div>' +
        '<div class="rs-total">' + (total > 0 ? total + ' ulasan' : 'Belum ada ulasan') + '</div>' +
      '</div>' +
      '<div class="rs-bars">' +
        dist.map(function(d){
          return '<div class="rs-bar-row">' +
            '<span class="rs-bar-label">' + d.r + ' ⭐</span>' +
            '<div class="rs-bar-track"><div class="rs-bar-fill" style="width:' + d.pct + '%"></div></div>' +
            '<span class="rs-bar-pct">' + d.pct + '%</span>' +
          '</div>';
        }).join('') +
      '</div>' +
    '</div>' +

    // Form tulis ulasan
    '<div class="tulis-ulasan">' +
      '<h4>✏️ Tulis Ulasanmu</h4>' +
      '<div class="star-picker" id="starPicker">' +
        [1,2,3,4,5].map(function(i){
          return '<span class="star-pick" data-val="' + i + '" onclick="pilihRating(' + i + ')">☆</span>';
        }).join('') +
      '</div>' +
      '<div class="rating-label" id="ratingLabel">Pilih rating</div>' +
      '<input type="text" id="namaInput" placeholder="Nama kamu" class="ulasan-input" />' +
      '<textarea id="komentarInput" rows="3" placeholder="Ceritakan pengalamanmu dengan produk ini..." class="ulasan-input"></textarea>' +
      '<button class="btn-kirim-ulasan" onclick="kirimUlasan()">🚀 Kirim Ulasan</button>' +
    '</div>' +
  '</div>' +

  // List ulasan
  '<div class="ulasan-list" id="ulasanList">' +
    renderUlasanList() +
  '</div>';
}

function renderStars(val) {
  var s = '';
  for (var i=1; i<=5; i++) {
    s += i <= Math.round(val) ? '⭐' : '☆';
  }
  return s;
}

function renderUlasanList() {
  if (!ulasanData.length) {
    return '<div class="kosong-ulasan"><span>💬</span><p>Belum ada ulasan. Jadilah yang pertama memberi ulasan!</p></div>';
  }
  return ulasanData.map(function(u) {
    return '<div class="ulasan-item">' +
      '<div class="ui-top">' +
        '<div class="ui-avatar">' + u.avatar + '</div>' +
        '<div class="ui-meta">' +
          '<div class="ui-nama">' + u.nama + (u.verified ? ' <span class="ui-verified">✓ Terverifikasi</span>' : '') + '</div>' +
          '<div class="ui-waktu">' + u.waktu + '</div>' +
        '</div>' +
        '<div class="ui-stars">' + '⭐'.repeat(u.rating) + '☆'.repeat(5-u.rating) + '</div>' +
      '</div>' +
      '<p class="ui-komentar">' + u.komentar + '</p>' +
    '</div>';
  }).join('');
}

// CSS untuk kosong ulasan
var styleKosong = document.createElement('style');
styleKosong.textContent = '.kosong-ulasan{text-align:center;padding:32px;color:#ccc;}.kosong-ulasan span{font-size:2.5rem;display:block;margin-bottom:8px;}.kosong-ulasan p{font-size:.9rem;}';
document.head.appendChild(styleKosong);

function pilihRating(val) {
  ratingUser = val;
  var labels = ['','Sangat Buruk','Buruk','Cukup','Bagus','Sangat Bagus!'];
  document.getElementById('ratingLabel').textContent = labels[val] + ' (' + val + '/5)';
  document.querySelectorAll('.star-pick').forEach(function(s, i) {
    s.textContent = i < val ? '⭐' : '☆';
    s.classList.toggle('aktif', i < val);
  });
}

function kirimUlasan() {
  var nama     = document.getElementById('namaInput').value.trim();
  var komentar = document.getElementById('komentarInput').value.trim();
  if (!ratingUser) { alert('Pilih rating terlebih dahulu.'); return; }
  if (!nama)       { alert('Masukkan nama kamu.'); return; }
  if (!komentar)   { alert('Tulis komentar terlebih dahulu.'); return; }

  ulasanData.unshift({ nama, avatar:'🧑‍🌾', rating:ratingUser, waktu:'Baru saja', komentar, verified:false });

  // Simpan ke Supabase
  if (window.sb && produkId) {
    sbTambahUlasan({ produk_id: produkId, nama, rating: ratingUser, komentar, verified: false });
  }

  document.getElementById('ulasanList').innerHTML = renderUlasanList();
  document.getElementById('namaInput').value = '';
  document.getElementById('komentarInput').value = '';
  ratingUser = 0;
  pilihRating(0);
  document.getElementById('ratingLabel').textContent = 'Pilih rating';
  alert('✅ Ulasan berhasil dikirim! Terima kasih.');
}

// Load ulasan dari Supabase
function onSupabaseReady() {
  if (produkId && window.sb) {
    sbGetUlasan(produkId).then(function(rows) {
      if (rows && rows.length > 0) {
        ulasanData = rows.map(function(u) {
          return {
            nama: u.nama, avatar: '🧑‍🌾',
            rating: u.rating,
            waktu: new Date(u.created_at).toLocaleDateString('id-ID'),
            komentar: u.komentar,
            verified: u.verified || false
          };
        });
        document.getElementById('ulasanList').innerHTML = renderUlasanList();
      }
    });
  }
}

// Kalau Supabase belum load, coba init langsung (fallback)
if (typeof window.sb !== 'undefined') {
  initDetail();
} else {
  // Tunggu onSupabaseReady dipanggil oleh supabase.js
  setTimeout(function() {
    if (!produk) initDetail();
  }, 3000);
}
