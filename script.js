// ===== STATS BAR DARI SUPABASE =====
function loadStats() {
  if (!window.sb) return;

  // Berita = dari beritaData (statis)
  var beritaCount = typeof beritaData !== 'undefined' ? beritaData.length : 18;
  var el = document.getElementById('statBerita');
  if (el) el.textContent = beritaCount + '+';

  // Topik forum dari Supabase
  window.sb.from('topik').select('id', { count: 'exact', head: true })
    .then(function(res) {
      var el = document.getElementById('statTopik');
      if (el) el.textContent = (res.count || 0);
    });

  // Produk dari Supabase
  window.sb.from('produk').select('id', { count: 'exact', head: true })
    .then(function(res) {
      var count = res.count || 0;
      var el = document.getElementById('statProduk');
      if (el) el.textContent = count;
      // Update juga hero stats
      var hero = document.getElementById('heroProdukNum');
      if (hero) hero.textContent = count > 0 ? count + '+' : '0';
    });
}

// Panggil setelah Supabase siap
var _origOnReady = window.onSupabaseReady;
window.onSupabaseReady = function() {
  if (typeof _origOnReady === 'function') _origOnReady();
  loadStats();
};

// ===== STACK CARDS HERO =====
var stackPhotos = [
  { img:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=760&h=560&fit=crop', label:'🌾 Sawah Padi Indonesia' },
  { img:'https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=760&h=560&fit=crop', label:'🌱 Musim Tanam Tiba' },
  { img:'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=760&h=560&fit=crop', label:'🌿 Kebun Sayuran Segar' },
  { img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=760&h=560&fit=crop', label:'🌻 Pertanian Organik' },
  { img:'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=760&h=560&fit=crop', label:'🚜 Teknologi Pertanian' },
  { img:'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=760&h=560&fit=crop', label:'🥬 Panen Sayuran' },
  { img:'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=760&h=560&fit=crop', label:'🌽 Kebun Jagung' },
];

var stackIndex = 0;
var isDragging = false;
var startX = 0, startY = 0, currentX = 0;
var activeCard = null;

function buildStack() {
  var container = document.getElementById('stackContainer');
  if (!container) return;
  container.innerHTML = '';

  // Tampilkan 3 kartu teratas
  for (var i = Math.min(2, stackPhotos.length - 1); i >= 0; i--) {
    var idx = (stackIndex + i) % stackPhotos.length;
    var card = document.createElement('div');
    card.className = 'stack-card';
    card.dataset.pos = i;

    // Posisi tumpukan
    var scale = 1 - i * 0.06;
    var translateY = i * -10;
    var rotate = (i % 2 === 0 ? 1 : -1) * i * 2;
    card.style.transform = 'translateY(' + translateY + 'px) scale(' + scale + ') rotate(' + rotate + 'deg)';
    card.style.zIndex = 10 - i;

    card.innerHTML =
      '<img src="' + stackPhotos[idx].img + '" alt="foto pertanian" />' +
      (i === 0 ? '<div class="stack-card-badge">🌱 <span>' + stackPhotos[idx].label + '</span></div>' : '');

    // Drag events hanya untuk kartu teratas
    if (i === 0) {
      card.addEventListener('mousedown', onDragStart);
      card.addEventListener('touchstart', onDragStart, { passive: true });
    }

    container.appendChild(card);
  }
}

function onDragStart(e) {
  isDragging = true;
  activeCard = e.currentTarget;
  startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  startY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
  activeCard.style.transition = 'none';

  document.addEventListener('mousemove', onDragMove);
  document.addEventListener('mouseup', onDragEnd);
  document.addEventListener('touchmove', onDragMove, { passive: true });
  document.addEventListener('touchend', onDragEnd);
}

function onDragMove(e) {
  if (!isDragging || !activeCard) return;
  var x = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
  var y = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
  currentX = x - startX;
  var currentY = y - startY;
  var rotate = currentX * 0.1;
  activeCard.style.transform = 'translateX(' + currentX + 'px) translateY(' + currentY + 'px) rotate(' + rotate + 'deg)';
}

function onDragEnd(e) {
  if (!isDragging || !activeCard) return;
  isDragging = false;
  activeCard.style.transition = '';

  document.removeEventListener('mousemove', onDragMove);
  document.removeEventListener('mouseup', onDragEnd);
  document.removeEventListener('touchmove', onDragMove);
  document.removeEventListener('touchend', onDragEnd);

  if (Math.abs(currentX) > 80) {
    // Lempar kartu
    activeCard.classList.add(currentX > 0 ? 'flying-right' : 'flying-left');
    setTimeout(function() {
      stackIndex = (stackIndex + 1) % stackPhotos.length;
      buildStack();
    }, 380);
  } else {
    // Kembalikan ke posisi
    activeCard.style.transform = 'translateY(0px) scale(1) rotate(0deg)';
  }
  currentX = 0;
  activeCard = null;
}

buildStack();

// ===== SLIDER FITUR =====
let currentFitur = 0;
const totalFitur = 6;
const totalPagesFitur = 2;

function initFiturDots() {
  const dots = document.getElementById('fiturDots');
  if (!dots) return;
  dots.innerHTML = '';
  for (let i = 0; i < totalPagesFitur; i++) {
    const d = document.createElement('div');
    d.className = 'fitur-dot' + (i === 0 ? ' aktif' : '');
    d.onclick = () => goToFitur(i);
    dots.appendChild(d);
  }
}

function goToFitur(index) {
  currentFitur = (index + totalPagesFitur) % totalPagesFitur;
  const cards = document.querySelectorAll('.fitur-card');
  if (!cards.length) return;
  const outer = document.querySelector('.fitur-track-outer');
  if (!outer) return;
  document.getElementById('fiturTrack').style.transform = `translateX(-${currentFitur * outer.offsetWidth}px)`;
  document.querySelectorAll('.fitur-dot').forEach((d, i) => d.classList.toggle('aktif', i === currentFitur));
}

function slideFitur(dir) { goToFitur(currentFitur + dir); }

setInterval(() => goToFitur(currentFitur + 1), 3500);
window.addEventListener('resize', () => goToFitur(currentFitur));
initFiturDots();

// ===== SLIDER BERITA =====
let currentSlide = 0;
const totalBerita = 6;

function getPerPage() {
  return window.innerWidth <= 768 ? 1 : 3;
}

function getTotalPages() {
  return Math.ceil(totalBerita / getPerPage());
}

function initDots() {
  const dots = document.getElementById('sliderDots');
  if (!dots) return;
  const pages = getTotalPages();
  dots.innerHTML = '';
  for (let i = 0; i < pages; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' aktif' : '');
    d.onclick = () => goToSlide(i);
    dots.appendChild(d);
  }
}

function goToSlide(index) {
  const pages = getTotalPages();
  currentSlide = (index + pages) % pages;
  const outer = document.querySelector('.slider-track-outer');
  if (!outer) return;
  const offset = currentSlide * outer.offsetWidth;
  document.getElementById('sliderTrack').style.transform = `translateX(-${offset}px)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('aktif', i === currentSlide));
}

function slideBerita(dir) {
  goToSlide(currentSlide + dir);
}

setInterval(() => goToSlide(currentSlide + 1), 4000);
window.addEventListener('resize', () => { currentSlide = 0; initDots(); goToSlide(0); });
initDots();

// ===== HARGA =====
const hargaData = [
  { nama: "Beras", harga: 12000, perubahan: 200 },
  { nama: "Cabai Merah", harga: 35000, perubahan: -1000 },
  { nama: "Bawang Merah", harga: 28000, perubahan: 0 },
  { nama: "Jagung", harga: 5500, perubahan: 100 },
  { nama: "Kedelai", harga: 9000, perubahan: -500 },
];

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function renderHarga() {
  const tbody = document.querySelector(".harga table tbody");
  if (!tbody) return;

  tbody.innerHTML = hargaData.map(item => {
    let perubahanClass = "stabil";
    let perubahanText = "— Stabil";

    if (item.perubahan > 0) {
      perubahanClass = "naik";
      perubahanText = `▲ +${item.perubahan.toLocaleString("id-ID")}`;
    } else if (item.perubahan < 0) {
      perubahanClass = "turun";
      perubahanText = `▼ ${item.perubahan.toLocaleString("id-ID")}`;
    }

    return `
      <tr>
        <td>${item.nama}</td>
        <td>${formatRupiah(item.harga)}</td>
        <td class="${perubahanClass}">${perubahanText}</td>
      </tr>
    `;
  }).join("");
}

renderHarga();
