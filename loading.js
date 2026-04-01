(function() {
  var overlay = document.createElement('div');
  overlay.id = 'loadingOverlay';

  // Daun jatuh
  var leaves = document.createElement('div');
  leaves.className = 'loading-leaves';
  var emojis = ['🍃','🌿','🌱','🍀','🌾'];
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

  // Konten
  overlay.innerHTML += `
    <div class="loading-spinner-wrap">
      <div class="loading-ring-outer"></div>
      <div class="loading-ring-mid"></div>
      <div class="loading-ring-inner"></div>
      <span class="loading-icon">🌽</span>
    </div>
    <div class="loading-title">Portal Pertanian<br/><span>Indonesia</span></div>
    <div class="loading-dots">
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
    </div>
    <div class="loading-status" id="loadingStatus">Memuat produk...</div>
  `;

  document.body.appendChild(overlay);

  // Status berganti
  var statusList = [
    'Memuat produk...',
    'Menghubungkan database...',
    'Menyiapkan marketplace...',
    'Hampir selesai...'
  ];
  var si = 0;
  var timer = setInterval(function() {
    si = (si + 1) % statusList.length;
    var el = document.getElementById('loadingStatus');
    if (!el) return;
    el.style.animation = 'none';
    el.offsetHeight; // reflow
    el.style.animation = 'fadeStatus .5s ease';
    el.textContent = statusList[si];
  }, 900);

  window.hideLoading = function() {
    clearInterval(timer);
    var el = document.getElementById('loadingStatus');
    if (el) el.textContent = '✅ Siap!';
    setTimeout(function() {
      overlay.classList.add('hide');
      setTimeout(function() { if (overlay.parentNode) overlay.remove(); }, 600);
    }, 400);
  };

  // Fallback max 6 detik
  setTimeout(function() {
    if (document.getElementById('loadingOverlay')) window.hideLoading();
  }, 6000);
})();
