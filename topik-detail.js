var params  = new URLSearchParams(window.location.search);
var topikId = parseInt(params.get('id'));
var topik   = topikData.find(function(t){ return t.id === topikId; });

// Tambah views
if (topik) {
  topik.views = (topik.views || 0) + 1;
}

// Komentar per topik (localStorage)
function getKomentar() {
  return JSON.parse(localStorage.getItem('komentar_' + topikId) || '[]');
}
function simpanKomentar(list) {
  localStorage.setItem('komentar_' + topikId, JSON.stringify(list));
}

// Like topik
function getLikedTopik() {
  return JSON.parse(localStorage.getItem('likedTopik') || '[]');
}
function toggleLikeTopik() {
  var liked = getLikedTopik();
  var idx   = liked.indexOf(topikId);
  if (idx >= 0) {
    liked.splice(idx, 1);
    topik.likes = Math.max(0, (topik.likes||0) - 1);
  } else {
    liked.push(topikId);
    topik.likes = (topik.likes||0) + 1;
  }
  localStorage.setItem('likedTopik', JSON.stringify(liked));
  renderTopik();
}

// Like komentar
function getLikedKm() {
  return JSON.parse(localStorage.getItem('likedKm_' + topikId) || '[]');
}
function toggleLikeKm(kmId) {
  var liked = getLikedKm();
  var list  = getKomentar();
  var km    = list.find(function(k){ return k.id === kmId; });
  if (!km) return;
  var idx = liked.indexOf(kmId);
  if (idx >= 0) { liked.splice(idx,1); km.likes = Math.max(0,(km.likes||0)-1); }
  else          { liked.push(kmId);    km.likes = (km.likes||0)+1; }
  localStorage.setItem('likedKm_' + topikId, JSON.stringify(liked));
  simpanKomentar(list);
  renderKomentar();
}

// ===== SUPABASE INTEGRATION =====
function onSupabaseReady() {
  // Load topik dari Supabase
  if (topik) {
    sbGetKomentar(topikId).then(function(rows) {
      if (rows && rows.length > 0) {
        var stored = [];
        rows.forEach(function(k) {
          stored.push({
            id: k.id,
            nama: k.nama,
            avatar: k.avatar || '🧑‍🌾',
            waktu: new Date(k.created_at).toLocaleDateString('id-ID'),
            teks: k.teks,
            likes: k.likes || 0
          });
        });
        localStorage.setItem('komentar_' + topikId, JSON.stringify(stored));
        renderKomentar();
      }
    });
  }
}

function kirimKomentar() {
  var nama = document.getElementById('kmNama').value.trim();
  var teks = document.getElementById('kmTeks').value.trim();
  if (!nama) { alert('Masukkan nama kamu.'); return; }
  if (!teks) { alert('Tulis komentarmu dulu.'); return; }

  var list = getKomentar();
  var newKm = { id: Date.now(), nama, avatar:'🧑‍🌾', waktu:'Baru saja', teks, likes:0 };
  list.push(newKm);
  simpanKomentar(list);
  topik.balasan = (topik.balasan||0) + 1;

  // Simpan ke Supabase
  if (window.sb) {
    sbTambahKomentar({ topik_id: topikId, nama, avatar:'🧑‍🌾', teks, likes:0 });
    sbUpdateTopik(topikId, { balasan: topik.balasan });
  }

  document.getElementById('kmNama').value = '';
  document.getElementById('kmTeks').value = '';
  renderKomentar();
  renderTopik();
}

function renderTopik() {
  if (!topik) {
    document.getElementById('tdWrapper').innerHTML = '<div style="text-align:center;padding:60px;color:#aaa"><span style="font-size:3rem">😕</span><p>Topik tidak ditemukan.</p></div>';
    return;
  }
  var liked   = getLikedTopik().includes(topikId);
  var kmList  = getKomentar();

  document.getElementById('tdWrapper').innerHTML =
    '<div class="td-topik">' +
      '<div class="td-topik-header">' +
        '<div class="td-avatar">' + topik.avatar + '</div>' +
        '<div class="td-meta">' +
          '<div class="td-penulis">' + topik.penulis + '</div>' +
          '<div class="td-waktu">' + topik.waktu + '</div>' +
        '</div>' +
        '<span class="td-kat-badge">' + topik.kategori + '</span>' +
      '</div>' +
      '<div class="td-judul">' + topik.judul + '</div>' +
      '<div class="td-isi">' + topik.isi + '</div>' +
      '<div class="td-stats">' +
        '<span class="td-stat">💬 ' + (topik.balasan||0) + ' balasan</span>' +
        '<span class="td-stat">👁️ ' + (topik.views||0) + ' dilihat</span>' +
        '<span class="td-stat">❤️ ' + (topik.likes||0) + ' suka</span>' +
        '<button class="btn-like ' + (liked?'liked':'') + '" onclick="toggleLikeTopik()">' +
          (liked ? '❤️ Disukai' : '🤍 Suka') +
        '</button>' +
      '</div>' +
    '</div>' +
    '<div class="td-komentar-section" id="komentarSection"></div>';

  renderKomentar();
}

function renderKomentar() {
  var list  = getKomentar();
  var liked = getLikedKm();
  var sec   = document.getElementById('komentarSection');
  if (!sec) return;

  sec.innerHTML =
    '<div class="td-komentar-header">' +
      '<h3>💬 Komentar</h3>' +
      '<span class="td-komentar-count">' + list.length + ' komentar</span>' +
    '</div>' +

    '<div class="komentar-list">' +
      (list.length ? list.map(function(k) {
        var isLiked = liked.includes(k.id);
        return '<div class="komentar-item">' +
          '<div class="km-avatar">' + k.avatar + '</div>' +
          '<div class="km-body">' +
            '<div class="km-top">' +
              '<span class="km-nama">' + k.nama + '</span>' +
              '<span class="km-waktu">' + k.waktu + '</span>' +
            '</div>' +
            '<div class="km-teks">' + k.teks + '</div>' +
            '<div class="km-actions">' +
              '<button class="btn-like-km ' + (isLiked?'liked':'') + '" onclick="toggleLikeKm(' + k.id + ')">' +
                (isLiked?'❤️':'🤍') + ' ' + (k.likes||0) +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>';
      }).join('') : '<div class="kosong-komentar"><span>💬</span><p>Belum ada komentar. Jadilah yang pertama!</p></div>') +
    '</div>' +

    '<div class="form-komentar">' +
      '<h4>✏️ Tulis Komentar</h4>' +
      '<input type="text" id="kmNama" placeholder="Nama kamu" />' +
      '<textarea id="kmTeks" rows="3" placeholder="Tulis komentarmu..."></textarea>' +
      '<button class="btn-kirim-km" onclick="kirimKomentar()">🚀 Kirim Komentar</button>' +
    '</div>';
}

renderTopik();
