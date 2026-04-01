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
          'display:none;position:absolute;top:100%;right:0;background:white;' +
          'border-radius:14px;box-shadow:0 8px 32px rgba(0,0,0,.2);min-width:200px;' +
          'overflow:hidden;z-index:999;border:2px solid #e8f5e9;';
        dropdown.innerHTML =
          '<div style="padding:14px 16px;background:#f9fbe7;border-bottom:1px solid #e8f5e9">' +
            '<div style="font-size:.82rem;font-weight:800;color:#1b5e20">👤 ' + nama + '</div>' +
            '<div style="font-size:.72rem;color:#aaa">' + (res.data.user.email || '') + '</div>' +
          '</div>' +
          '<a href="akun.html" style="display:flex;align-items:center;gap:10px;padding:12px 16px;color:#333;text-decoration:none;font-size:.88rem;font-weight:600;transition:.15s" onmouseover="this.style.background=\'#f9fbe7\'" onmouseout="this.style.background=\'\'">⚙️ Pengaturan Akun</a>' +
          '<a href="akun.html#sec-produk" style="display:flex;align-items:center;gap:10px;padding:12px 16px;color:#333;text-decoration:none;font-size:.88rem;font-weight:600;transition:.15s" onmouseover="this.style.background=\'#f9fbe7\'" onmouseout="this.style.background=\'\'">📦 Produk Saya</a>' +
          '<a href="keuangan.html" style="display:flex;align-items:center;gap:10px;padding:12px 16px;color:#333;text-decoration:none;font-size:.88rem;font-weight:600;transition:.15s" onmouseover="this.style.background=\'#f9fbe7\'" onmouseout="this.style.background=\'\'">📒 Catatan Keuangan</a>' +
          '<a href="jual-produk.html" style="display:flex;align-items:center;gap:10px;padding:12px 16px;color:#333;text-decoration:none;font-size:.88rem;font-weight:600;transition:.15s" onmouseover="this.style.background=\'#f9fbe7\'" onmouseout="this.style.background=\'\'">🛒 Jual Produk</a>' +
          '<div style="border-top:1px solid #f0f0f0">' +
            '<button onclick="doLogout()" style="display:flex;align-items:center;gap:10px;padding:12px 16px;color:#e53935;background:none;border:none;width:100%;text-align:left;font-size:.88rem;font-weight:700;cursor:pointer;transition:.15s" onmouseover="this.style.background=\'#ffebee\'" onmouseout="this.style.background=\'\'">🚪 Keluar</button>' +
          '</div>';

        akunLink.appendChild(dropdown);

        // Toggle dropdown
        akunLink.addEventListener('click', function(e) {
          e.preventDefault();
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
