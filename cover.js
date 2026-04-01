// ===== TYPEWRITER BERURUTAN =====
var typeEl  = document.getElementById('typeText');
var descEl  = document.getElementById('typeDesc');
var curMain = document.getElementById('cursorMain');
var curDesc = document.getElementById('cursorDesc');

// Urutan: ketik judul besar → ketik subtitle → ketik deskripsi
var steps = [
  { el: typeEl,  text: 'Portal Pertanian',   speed: 80,  pause: 400 },
  { el: typeEl,  text: '\nIndonesia',         speed: 90,  pause: 600, append: true, cls: 'cover-title-sub' },
  { el: descEl,  text: 'Platform digital untuk petani Indonesia — berita, harga pasar, panduan bertani, diagnosa tanaman, dan komunitas dalam satu tempat.', speed: 22, pause: 0 }
];

var stepIdx = 0;

function runStep(idx) {
  if (idx >= steps.length) return;
  var s = steps[idx];

  // Pindah kursor
  if (s.el === descEl) {
    curMain.style.display = 'none';
    curDesc.style.display = 'inline';
  }

  var i = 0;
  if (!s.append) s.el.innerHTML = '';

  function type() {
    if (i < s.text.length) {
      var ch = s.text[i];
      if (ch === '\n') {
        // Baris baru dengan span gradient
        s.el.innerHTML += '<br/><span class="cover-title-sub">';
      } else {
        // Kalau sudah ada span terbuka, tambah ke dalamnya
        var spans = s.el.querySelectorAll('.cover-title-sub');
        if (spans.length > 0) {
          spans[spans.length-1].textContent += ch;
        } else {
          s.el.innerHTML += ch;
        }
      }
      i++;
      setTimeout(type, s.speed);
    } else {
      setTimeout(function(){ runStep(idx + 1); }, s.pause);
    }
  }
  type();
}

setTimeout(function(){ runStep(0); }, 600);

// ===== DAUN JATUH =====
var emojis = ['🍃','🌿','🌱','🍀','🌾','🌻','🌽'];
var leavesEl = document.getElementById('leaves');

for (var i = 0; i < 18; i++) {
  (function(i) {
    var leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.animationDuration = (6 + Math.random() * 8) + 's';
    leaf.style.animationDelay = (Math.random() * 8) + 's';
    leaf.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
    leavesEl.appendChild(leaf);
  })(i);
}

// ===== PROGRESS AUTO =====
var progress = 0;
var fill = document.getElementById('progressFill');
var autoTimer = setInterval(function() {
  progress += 0.5;
  fill.style.width = progress + '%';
  if (progress >= 100) {
    clearInterval(autoTimer);
    setTimeout(masukHome, 300);
  }
}, 50); // 10 detik total

// ===== MASUK HOME =====
function masukHome() {
  clearInterval(autoTimer);
  fill.style.width = '100%';
  document.getElementById('coverPage').classList.add('fade-out');
  setTimeout(function() {
    window.location.href = 'home.html';
  }, 600);
}
