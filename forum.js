let topikData = []; // diisi dari Supabase

let filterAktif = 'semua';

function filterForum(kategori, el) {
  filterAktif = kategori;
  document.querySelectorAll('.kategori-forum li').forEach(li => li.classList.remove('aktif'));
  el.classList.add('aktif');
  renderForum();
}

function renderForum() {
  const search = document.getElementById('searchForum').value.toLowerCase();
  const sort   = document.getElementById('sortForum').value;

  let data = filterAktif === 'semua' ? [...topikData] : topikData.filter(t => t.kategori === filterAktif);
  if (search) data = data.filter(t => t.judul.toLowerCase().includes(search) || t.isi.toLowerCase().includes(search));
  if (sort === 'populer') data.sort((a,b) => b.views - a.views);

  const list = document.getElementById('forumList');
  if (!data.length) {
    list.innerHTML = `<div style="text-align:center;padding:60px;color:#bbb;background:white;border-radius:16px;"><span style="font-size:3rem;display:block;margin-bottom:12px">🔍</span>Tidak ada topik ditemukan.</div>`;
    return;
  }

  list.innerHTML = data.map(t => `
    <div class="topik-card ${t.pinned ? 'pinned' : ''}" onclick="window.location='topik-detail.html?id=${t.id}'" style="cursor:pointer">
      <div class="topik-avatar">${t.avatar}</div>
      <div class="topik-body">
        <div class="topik-meta">
          <span class="topik-kategori-badge">${t.kategori}</span>
          ${t.pinned ? '<span class="topik-pin">📌 Disematkan</span>' : ''}
          <span class="topik-waktu">${t.waktu}</span>
        </div>
        <h3>${t.judul}</h3>
        <p>${t.isi}</p>
        <div class="topik-stats">
          <span>💬 ${t.balasan} balasan</span>
          <span>👁️ ${t.views} dilihat</span>
          <span>❤️ ${t.likes} suka</span>
          <span>✍️ ${t.penulis}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleModal(open) {
  if (open) {
    if (window.sb) {
      window.sb.auth.getUser().then(function(res) {
        if (!res.data || !res.data.user) {
          tampilPopupLogin();
          return;
        }
        var profil = JSON.parse(localStorage.getItem('akunProfil') || '{}');
        var alamat = JSON.parse(localStorage.getItem('akunAlamat') || '{}');
        if (!profil.namaDepan || !alamat.kota) {
          tampilPesanAkun();
          return;
        }
        document.getElementById('modalOverlay').classList.add('open');
        document.getElementById('modalTopik').classList.add('open');
      });
    } else {
      document.getElementById('modalOverlay').classList.add('open');
      document.getElementById('modalTopik').classList.add('open');
    }
  } else {
    document.getElementById('modalOverlay').classList.remove('open');
    document.getElementById('modalTopik').classList.remove('open');
  }
}

function tampilPopupLogin() {
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px)';
  overlay.innerHTML =
    '<div style="background:white;border-radius:24px;padding:40px 36px;max-width:400px;width:90%;text-align:center;box-shadow:0 24px 64px rgba(0,0,0,.25);animation:popIn .3s ease">' +
      '<div style="font-size:3.5rem;margin-bottom:14px">🌾</div>' +
      '<h3 style="font-size:1.3rem;font-weight:900;color:#1b5e20;margin-bottom:8px">Login Dulu Yuk!</h3>' +
      '<p style="font-size:.9rem;color:#666;line-height:1.7;margin-bottom:24px">Untuk membuat topik diskusi, kamu perlu login terlebih dahulu. Bergabunglah dengan komunitas petani Indonesia!</p>' +
      '<div style="display:flex;flex-direction:column;gap:10px">' +
        '<button onclick="window.location=\'login.html?redirect=forum.html\'" style="background:linear-gradient(135deg,#2e7d32,#43a047);color:white;border:none;padding:14px;border-radius:12px;font-size:.95rem;font-weight:800;cursor:pointer;box-shadow:0 4px 14px rgba(46,125,50,.3)">🚀 Login Sekarang</button>' +
        '<button onclick="this.closest(\'div\').parentElement.parentElement.remove()" style="background:#f5f5f5;color:#555;border:none;padding:12px;border-radius:12px;font-size:.88rem;font-weight:700;cursor:pointer">Nanti Saja</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) overlay.remove();
  });
}

function tampilPesanAkun() {
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)';
  overlay.innerHTML =
    '<div style="background:white;border-radius:24px;padding:36px;max-width:420px;width:90%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.3)">' +
      '<div style="font-size:3.5rem;margin-bottom:14px">👤</div>' +
      '<h3 style="font-size:1.2rem;font-weight:800;color:#2e7d32;margin-bottom:8px">Login Dulu!</h3>' +
      '<p style="font-size:.9rem;color:#555;line-height:1.7;margin-bottom:20px">Kamu harus mengisi profil akun terlebih dahulu sebelum bisa membuat topik di forum.</p>' +
      '<div style="display:flex;gap:10px;justify-content:center">' +
        '<button onclick="this.closest(\'div\').parentElement.remove()" style="background:#f5f5f5;color:#555;border:none;padding:12px 22px;border-radius:99px;font-size:.88rem;font-weight:700;cursor:pointer">Nanti</button>' +
        '<button onclick="window.location=\'akun.html\'" style="background:linear-gradient(135deg,#2e7d32,#43a047);color:white;border:none;padding:12px 26px;border-radius:99px;font-size:.88rem;font-weight:800;cursor:pointer">Isi Profil →</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);
}

function submitTopik() {
  const judul = document.getElementById('inputJudul').value.trim();
  const isi   = document.getElementById('inputIsi').value.trim();
  const kat   = document.getElementById('inputKategori').value;
  if (!judul || !isi) return alert('Judul dan isi tidak boleh kosong.');

  const profil = JSON.parse(localStorage.getItem('akunProfil') || '{}');
  const nama = profil.namaDepan ? (profil.namaDepan + ' ' + (profil.namaBelakang||'')).trim() : 'Anonim';

  topikData.unshift({
    id: Date.now(), kategori: kat, judul, isi,
    penulis: nama, avatar: '🧑‍🌾', waktu: 'Baru saja',
    balasan: 0, views: 1, likes: 0, pinned: false
  });

  // Simpan ke Supabase jika tersedia
  if (window.sb) {
    sbTambahTopik({ judul, isi, kategori: kat, penulis: nama, avatar: '🧑‍🌾', likes: 0, views: 1, balasan: 0, pinned: false });
  }

  document.getElementById('inputJudul').value = '';
  document.getElementById('inputIsi').value = '';
  toggleModal(false);
  filterAktif = 'semua';
  document.querySelectorAll('.kategori-forum li').forEach((li,i) => li.classList.toggle('aktif', i===0));
  renderForum();
}

renderForum();

// ===== SUPABASE =====
function onSupabaseReady() {
  // Cek login untuk petani aktif
  window.sb.auth.getUser().then(function(res) {
    if (res.data && res.data.user) {
      renderPetaniAktif();
    }
  });

  // Load topik dari Supabase
  sbGetTopik().then(function(rows) {
    topikData = (rows || []).map(function(t) {
      return Object.assign({}, t, {
        waktu: new Date(t.created_at).toLocaleDateString('id-ID'),
        avatar: t.avatar || '🧑‍🌾'
      });
    });
    renderForum();
    updateBadgeKategori();
  });
}

function updateBadgeKategori() {
  var total = topikData.length;
  var map = {
    badgeSemua:   total,
    badgeTanaman: topikData.filter(function(t){ return t.kategori === 'tanaman'; }).length,
    badgeHama:    topikData.filter(function(t){ return t.kategori === 'hama'; }).length,
    badgePupuk:   topikData.filter(function(t){ return t.kategori === 'pupuk'; }).length,
    badgePasar:   topikData.filter(function(t){ return t.kategori === 'pasar'; }).length,
    badgeAlat:    topikData.filter(function(t){ return t.kategori === 'alat'; }).length,
  };
  Object.keys(map).forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.textContent = map[id];
  });
}

function renderPetaniAktif() {
  // Hitung penulis paling aktif dari topikData
  var hitungPenulis = {};
  topikData.forEach(function(t) {
    if (!t.penulis) return;
    hitungPenulis[t.penulis] = (hitungPenulis[t.penulis] || 0) + (t.balasan || 0) + 1;
  });

  var sorted = Object.keys(hitungPenulis)
    .map(function(nama) { return { nama: nama, skor: hitungPenulis[nama] }; })
    .sort(function(a, b) { return b.skor - a.skor; })
    .slice(0, 5);

  var box = document.getElementById('petaniAktifBox');
  if (!box) return;

  if (!sorted.length) {
    box.innerHTML = '<p style="font-size:.8rem;color:#bbb;text-align:center;padding:12px">Belum ada aktivitas.</p>';
    return;
  }

  box.innerHTML = '<ul class="petani-aktif">' +
    sorted.map(function(p) {
      return '<li><span class="avatar">🧑‍🌾</span><div><strong>' + p.nama + '</strong><small>' + p.skor + ' aktivitas</small></div></li>';
    }).join('') +
  '</ul>';
}
