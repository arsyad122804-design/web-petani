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
