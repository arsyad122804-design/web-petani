// Hamburger toggle
function toggleNav() {
  document.getElementById('mainNav').classList.toggle('open');
}

// Set active link berdasarkan halaman saat ini
(function() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('aktif');
  });
})();

// ===== PWA SERVICE WORKER =====
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(function(){});
}

// ===== INSTALL PROMPT =====
var deferredPrompt = null;

window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  deferredPrompt = e;
  var btn = document.getElementById('btnInstall');
  if (btn) btn.style.display = 'flex';
});

function installApp() {
  if (!deferredPrompt) {
    alert('Untuk install:\n📱 HP: Buka menu browser → "Tambahkan ke layar utama"\n💻 Laptop: Klik ikon install di address bar browser');
    return;
  }
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(function(result) {
    deferredPrompt = null;
    var btn = document.getElementById('btnInstall');
    if (btn) btn.style.display = 'none';
  });
}

window.addEventListener('appinstalled', function() {
  var btn = document.getElementById('btnInstall');
  if (btn) btn.style.display = 'none';
});

// ===== CEK STATUS LOGIN DI NAVBAR =====
setTimeout(function() {
  if (!window.sb) return;
  window.sb.auth.getUser().then(function(res) {
    var loginLink = document.getElementById('navLogin');
    var akunLink  = document.getElementById('navAkun');
    if (!loginLink) return;

    if (res.data && res.data.user) {
      // Sudah login — sembunyikan Login, tampilkan Akun + dropdown
      loginLink.style.display = 'none';
      if (akunLink) akunLink.style.display = 'flex';

      var profil = JSON.parse(localStorage.getItem('akunProfil') || '{}');
      var nama   = profil.namaDepan || res.data.user.email.split('@')[0];

      // Buat dropdown akun
      if (akunLink) {
        akunLink.innerHTML =
          '<span style="display:flex;align-items:center;gap:6px">👤 ' + nama + ' ▾</span>';
        akunLink.style.position = 'relative';
        akunLink.style.cursor   = 'pointer';
        akunLink.href = '#';

        var dropdown = document.createElement('div');
        dropdown.id  = 'akunDropdown';
        dropdown.style.cssText =
          'display:none;position:absolute;top:calc(100% + 8px);right:0;background:white;' +
          'border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.2);min-width:220px;' +
          'overflow:hidden;z-index:9999;border:2px solid #e8f5e9;';

        var items = [
          { href:'akun.html',         icon:'⚙️', label:'Pengaturan Akun' },
          { href:'produk-saya.html',  icon:'📦', label:'Produk Saya' },
          { href:'keuangan.html',     icon:'📒', label:'Catatan Keuangan' },
          { href:'jual-produk.html',  icon:'🛒', label:'Jual Produk' },
        ];

        var html =
          '<div style="padding:14px 16px;background:linear-gradient(135deg,#1b5e20,#2e7d32);border-bottom:1px solid #e8f5e9">' +
            '<div style="font-size:.85rem;font-weight:800;color:white">👤 ' + nama + '</div>' +
            '<div style="font-size:.72rem;color:rgba(255,255,255,.7)">' + (res.data.user.email || '') + '</div>' +
          '</div>';

        items.forEach(function(item) {
          html += '<a href="' + item.href + '" class="dd-item">' + item.icon + ' ' + item.label + '</a>';
        });

        html +=
          '<div style="border-top:2px solid #f0f0f0;padding:6px">' +
            '<button onclick="doLogout()" class="dd-item dd-logout">🚪 Keluar</button>' +
          '</div>';

        dropdown.innerHTML = html;

        // CSS untuk item dropdown
        var ddStyle = document.createElement('style');
        ddStyle.textContent =
          '.dd-item{display:flex;align-items:center;gap:10px;padding:12px 16px;color:#333;text-decoration:none;font-size:.88rem;font-weight:600;cursor:pointer;width:100%;background:none;border:none;text-align:left;transition:background .15s;}' +
          '.dd-item:hover{background:#f9fbe7;color:#1b5e20;}' +
          '.dd-logout{color:#e53935!important;}' +
          '.dd-logout:hover{background:#ffebee!important;}';
        if (!document.getElementById('ddStyle')) {
          ddStyle.id = 'ddStyle';
          document.head.appendChild(ddStyle);
        }

        akunLink.appendChild(dropdown);

        // Toggle dropdown — stop propagation supaya link di dalam bisa diklik
        akunLink.addEventListener('click', function(e) {
          if (e.target.closest('.dd-item')) return; // biarkan link diklik
          e.preventDefault();
          e.stopPropagation();
          var d = document.getElementById('akunDropdown');
          d.style.display = d.style.display === 'none' ? 'block' : 'none';
        });

        // Tutup saat klik luar
        document.addEventListener('click', function(e) {
          if (!akunLink.contains(e.target)) {
            var d = document.getElementById('akunDropdown');
            if (d) d.style.display = 'none';
          }
        });
      }
    } else {
      // Belum login — sembunyikan Akun, tampilkan Login
      if (akunLink) akunLink.style.display = 'none';
      if (loginLink) loginLink.style.display = 'flex';
    }
  });
}, 1200);

function doLogout() {
  if (window.sb) {
    window.sb.auth.signOut().then(function() {
      localStorage.removeItem('akunProfil');
      localStorage.removeItem('akunAlamat');
      window.location.href = 'home.html';
    });
  }
}

// ===== PAGE TRANSITION LOADING =====
(function() {
  var emojis = ['🍃','🌿','🌱','🍀','🌾'];
  var ptTimer = null;

  function buatOverlay() {
    // Pastikan loading.css sudah ada
    if (!document.querySelector('link[href="loading.css"]')) {
      var link = document.createElement('link');
      link.rel = 'stylesheet'; link.href = 'loading.css';
      document.head.appendChild(link);
    }

    var overlay = document.createElement('div');
    overlay.id = 'pageTransition';
    overlay.className = ''; // pakai class loading.css
    overlay.style.cssText =
      'position:fixed;inset:0;z-index:99999;' +
      'background:linear-gradient(135deg,#0a2e0a 0%,#1b5e20 40%,#2e7d32 70%,#43a047 100%);' +
      'display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;' +
      'opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s ease;pointer-events:none;overflow:hidden;';

    // Daun jatuh
    var leaves = document.createElement('div');
    leaves.className = 'loading-leaves';
    for (var i = 0; i < 12; i++) {
      var leaf = document.createElement('span');
      leaf.className = 'loading-leaf';
      leaf.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      leaf.style.left = Math.random() * 100 + 'vw';
      leaf.style.animationDuration = (6 + Math.random() * 7) + 's';
      leaf.style.animationDelay    = (Math.random() * 5) + 's';
      leaf.style.fontSize = (.8 + Math.random() * 1) + 'rem';
      leaves.appendChild(leaf);
    }
    overlay.appendChild(leaves);

    overlay.innerHTML +=
      '<div class="loading-spinner-wrap">' +
        '<div class="loading-ring-outer"></div>' +
        '<div class="loading-ring-mid"></div>' +
        '<div class="loading-ring-inner"></div>' +
        '<span class="loading-icon">🌽</span>' +
      '</div>' +
      '<div class="loading-title">Portal Pertanian<br/><span>Indonesia</span></div>' +
      '<div class="loading-dots">' +
        '<div class="loading-dot"></div>' +
        '<div class="loading-dot"></div>' +
        '<div class="loading-dot"></div>' +
      '</div>' +
      '<div class="loading-status" id="ptStatus">Memuat...</div>';

    document.body.appendChild(overlay);
    return overlay;
  }

  var overlay = buatOverlay();

  var statusSets = {
    'home.html':        ['Memuat Beranda...','Menyiapkan konten...','Hampir selesai...'],
    'berita.html':      ['Memuat Berita...','Mengambil artikel...','Hampir selesai...'],
    'forum.html':       ['Memuat Forum...','Mengambil topik...','Hampir selesai...'],
    'marketplace.html': ['Memuat Marketplace...','Menghubungkan database...','Menyiapkan produk...','Hampir selesai...'],
    'keuangan.html':    ['Memuat Keuangan...','Mengambil data...','Hampir selesai...'],
    'akun.html':        ['Memuat Profil...','Mengambil data akun...','Hampir selesai...'],
    'diagnosa.html':    ['Memuat Diagnosa...','Menyiapkan AI...','Hampir selesai...'],
    'panduan.html':     ['Memuat Panduan...','Mengambil data tanaman...','Hampir selesai...'],
    'pupuk.html':       ['Memuat Rekomendasi Pupuk...','Menyiapkan data...','Hampir selesai...'],
    'harga-pasar.html': ['Memuat Harga Pasar...','Mengambil data harga...','Hampir selesai...'],
    'cuaca.html':       ['Memuat Info Cuaca...','Mengambil data provinsi...','Hampir selesai...'],
    'sewa.html':        ['Memuat Sewa Tanah & Petani...','Mengambil data...','Hampir selesai...'],
    'jual-produk.html': ['Memuat Form Jual Produk...','Menyiapkan form...','Hampir selesai...'],
    'produk-saya.html': ['Memuat Produk Saya...','Mengambil data produk...','Hampir selesai...'],
    'login.html':       ['Menuju Halaman Login...','Menyiapkan autentikasi...','Hampir selesai...'],
  };

  function showTransition(page) {
    var list = statusSets[page] || ['Memuat...','Menyiapkan...','Hampir selesai...'];
    var si = 0;
    var el = document.getElementById('ptStatus');
    if (el) el.textContent = list[0];

    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
    overlay.style.pointerEvents = 'all';

    clearInterval(ptTimer);
    ptTimer = setInterval(function() {
      si = (si + 1) % list.length;
      var el2 = document.getElementById('ptStatus');
      if (!el2) return;
      el2.style.animation = 'none';
      el2.offsetHeight;
      el2.style.animation = 'fadeStatus .5s ease';
      el2.textContent = list[si];
    }, 700);
  }

  function hideTransition() {
    clearInterval(ptTimer);
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    overlay.style.pointerEvents = 'none';
  }

  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
    if (link.target === '_blank') return;
    if (link.closest('#akunDropdown')) return;
    if (e.target.closest('button')) return; // semua button tidak trigger loading
    var page = href.split('/').pop().split('?')[0];
    showTransition(page);
    e.preventDefault();
    setTimeout(function() {
      var el2 = document.getElementById('ptStatus');
      if (el2) el2.textContent = '✅ Siap!';
      setTimeout(function() {
        window.location.href = href;
      }, 400);
    }, 1800);
  });

  window.addEventListener('pageshow', hideTransition);
  window.addEventListener('load', function() { setTimeout(hideTransition, 400); });
})();
