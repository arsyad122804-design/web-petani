const tanamanList = [
  { id: "padi",    nama: "Padi",         emoji: "🌾" },
  { id: "jagung",  nama: "Jagung",       emoji: "🌽" },
  { id: "cabai",   nama: "Cabai",        emoji: "🌶️" },
  { id: "tomat",   nama: "Tomat",        emoji: "🍅" },
  { id: "terong",  nama: "Terong",       emoji: "🍆" },
  { id: "bawang",  nama: "Bawang Merah", emoji: "🧅" },
  { id: "kangkung",nama: "Kangkung",     emoji: "🥬" },
  { id: "bayam",   nama: "Bayam",        emoji: "🌿" },
  { id: "wortel",  nama: "Wortel",       emoji: "🥕" },
  { id: "semangka",nama: "Semangka",     emoji: "🍉" },
  { id: "mentimun",nama: "Mentimun",     emoji: "🥒" },
  { id: "kacang",  nama: "Kacang Panjang",emoji: "🫘" },
  { id: "singkong",nama: "Singkong",     emoji: "🥔" },
  { id: "pisang",  nama: "Pisang",       emoji: "🍌" },
  { id: "pepaya",  nama: "Pepaya",       emoji: "🍈" },
  { id: "kedelai", nama: "Kedelai",      emoji: "🫘" },
];

let tanamanDipilih = null;

// Data rekomendasi pupuk per tanaman
const dataPupuk = {
  padi: {
    fase: [
      { batas: 14,  label: "Fase Awal (0-14 HST)",      pupuk: [
        { tipe:"organik", nama:"Pupuk Organik/Kompos", icon:"🌱", dosis:"2 ton/ha", cara:"Sebar merata saat olah tanah", waktu:"Sebelum tanam" },
        { tipe:"sp36",    nama:"SP-36",                 icon:"🔵", dosis:"100 kg/ha", cara:"Benamkan ke tanah saat pengolahan", waktu:"Sebelum tanam" },
      ]},
      { batas: 30,  label: "Fase Anakan (15-30 HST)",   pupuk: [
        { tipe:"urea", nama:"Urea",  icon:"⚪", dosis:"100 kg/ha", cara:"Sebar di antara barisan tanaman", waktu:"7-10 HST" },
        { tipe:"npk",  nama:"NPK Phonska", icon:"🟣", dosis:"150 kg/ha", cara:"Sebar merata, tutup dengan tanah tipis", waktu:"7-10 HST" },
      ]},
      { batas: 50,  label: "Fase Anakan Aktif (31-50 HST)", pupuk: [
        { tipe:"urea", nama:"Urea",  icon:"⚪", dosis:"50 kg/ha",  cara:"Sebar sore hari saat tanah lembab", waktu:"25-30 HST" },
      ]},
      { batas: 999, label: "Fase Pengisian Bulir (>50 HST)", pupuk: [
        { tipe:"kcl",  nama:"KCl",   icon:"🟠", dosis:"75 kg/ha",  cara:"Sebar merata di lahan", waktu:"40-45 HST" },
      ]},
    ],
    jadwal: [
      { waktu:"Sebelum Tanam", icon:"🌱", judul:"Pupuk Dasar", isi:"Kompos 2 ton/ha + SP-36 100 kg/ha saat pengolahan tanah." },
      { waktu:"7-10 HST",      icon:"🌿", judul:"Pemupukan I", isi:"Urea 100 kg/ha + NPK 150 kg/ha untuk pertumbuhan awal." },
      { waktu:"25-30 HST",     icon:"🍃", judul:"Pemupukan II", isi:"Urea 50 kg/ha saat fase anakan aktif." },
      { waktu:"40-45 HST",     icon:"🌾", judul:"Pemupukan III", isi:"KCl 75 kg/ha untuk memperkuat batang dan kualitas gabah." },
    ]
  },
  jagung: {
    fase: [
      { batas: 14,  label: "Fase Awal (0-14 HST)", pupuk: [
        { tipe:"organik", nama:"Pupuk Kandang", icon:"🌱", dosis:"5 ton/ha",   cara:"Benamkan saat olah tanah", waktu:"Sebelum tanam" },
        { tipe:"sp36",    nama:"SP-36",          icon:"🔵", dosis:"100 kg/ha", cara:"Campurkan ke tanah dasar", waktu:"Sebelum tanam" },
      ]},
      { batas: 35,  label: "Fase Vegetatif (15-35 HST)", pupuk: [
        { tipe:"urea", nama:"Urea",  icon:"⚪", dosis:"150 kg/ha", cara:"Tugal di samping tanaman, tutup tanah", waktu:"7-10 HST" },
        { tipe:"kcl",  nama:"KCl",   icon:"🟠", dosis:"100 kg/ha", cara:"Sebar merata di alur tanam", waktu:"7-10 HST" },
      ]},
      { batas: 999, label: "Fase Pengisian Biji (>35 HST)", pupuk: [
        { tipe:"urea", nama:"Urea",  icon:"⚪", dosis:"100 kg/ha", cara:"Sebar di sekitar tanaman", waktu:"28-30 HST" },
      ]},
    ],
    jadwal: [
      { waktu:"Sebelum Tanam", icon:"🌱", judul:"Pupuk Dasar", isi:"Pupuk kandang 5 ton/ha + SP-36 100 kg/ha." },
      { waktu:"7-10 HST",      icon:"🌿", judul:"Pemupukan I", isi:"Urea 150 kg/ha + KCl 100 kg/ha, tugal di samping tanaman." },
      { waktu:"28-30 HST",     icon:"🌽", judul:"Pemupukan II", isi:"Urea 100 kg/ha saat mulai membentuk tongkol." },
    ]
  },
  cabai: {
    fase: [
      { batas: 14,  label: "Fase Awal (0-14 HST)", pupuk: [
        { tipe:"organik", nama:"Pupuk Kandang Ayam", icon:"🌱", dosis:"15 ton/ha", cara:"Campurkan ke tanah bedengan", waktu:"Sebelum tanam" },
        { tipe:"sp36",    nama:"SP-36",               icon:"🔵", dosis:"150 kg/ha", cara:"Benamkan ke tanah dasar", waktu:"Sebelum tanam" },
        { tipe:"kcl",     nama:"KCl",                 icon:"🟠", dosis:"100 kg/ha", cara:"Campurkan saat olah tanah", waktu:"Sebelum tanam" },
      ]},
      { batas: 35,  label: "Fase Vegetatif (15-35 HST)", pupuk: [
        { tipe:"urea", nama:"Urea",       icon:"⚪", dosis:"75 kg/ha",  cara:"Kocor atau sebar di sekitar tanaman", waktu:"2 MST" },
        { tipe:"npk",  nama:"NPK 16-16-16",icon:"🟣", dosis:"100 kg/ha", cara:"Sebar melingkar 10 cm dari batang", waktu:"2 MST" },
      ]},
      { batas: 999, label: "Fase Generatif/Berbuah (>35 HST)", pupuk: [
        { tipe:"npk",  nama:"NPK 12-12-17", icon:"🟣", dosis:"200 kg/ha", cara:"Sebar melingkar, siram setelahnya", waktu:"Saat berbunga" },
        { tipe:"za",   nama:"Pupuk Daun Boron", icon:"🔷", dosis:"2 ml/liter", cara:"Semprotkan ke seluruh daun pagi hari", waktu:"Setiap 2 minggu" },
      ]},
    ],
    jadwal: [
      { waktu:"Sebelum Tanam", icon:"🌱", judul:"Pupuk Dasar", isi:"Kandang ayam 15 ton/ha + SP-36 150 kg/ha + KCl 100 kg/ha." },
      { waktu:"2 MST",         icon:"🌿", judul:"Pemupukan I", isi:"Urea 75 kg/ha + NPK 100 kg/ha untuk vegetatif." },
      { waktu:"Saat Berbunga", icon:"🌶️", judul:"Pemupukan II", isi:"NPK 12-12-17 sebanyak 200 kg/ha." },
      { waktu:"Setiap 2 Minggu", icon:"💧", judul:"Pupuk Daun", isi:"Semprotkan pupuk daun boron 2 ml/liter air." },
    ]
  },
  default: {
    fase: [
      { batas: 14,  label: "Fase Awal", pupuk: [
        { tipe:"organik", nama:"Pupuk Kompos", icon:"🌱", dosis:"10 ton/ha", cara:"Campurkan ke tanah saat pengolahan", waktu:"Sebelum tanam" },
        { tipe:"npk",     nama:"NPK 16-16-16", icon:"🟣", dosis:"150 kg/ha", cara:"Sebar merata di bedengan", waktu:"Sebelum tanam" },
      ]},
      { batas: 35,  label: "Fase Vegetatif", pupuk: [
        { tipe:"urea", nama:"Urea",  icon:"⚪", dosis:"100 kg/ha", cara:"Sebar di sekitar tanaman", waktu:"2-3 MST" },
        { tipe:"kcl",  nama:"KCl",   icon:"🟠", dosis:"75 kg/ha",  cara:"Sebar merata, siram setelahnya", waktu:"2-3 MST" },
      ]},
      { batas: 999, label: "Fase Generatif", pupuk: [
        { tipe:"npk",  nama:"NPK 12-12-17", icon:"🟣", dosis:"200 kg/ha", cara:"Sebar melingkar tanaman", waktu:"Saat berbunga" },
        { tipe:"kcl",  nama:"KCl",          icon:"🟠", dosis:"100 kg/ha", cara:"Sebar merata di lahan", waktu:"Saat berbuah" },
      ]},
    ],
    jadwal: [
      { waktu:"Sebelum Tanam", icon:"🌱", judul:"Pupuk Dasar", isi:"Kompos 10 ton/ha + NPK 150 kg/ha saat pengolahan tanah." },
      { waktu:"2-3 MST",       icon:"🌿", judul:"Pemupukan I", isi:"Urea 100 kg/ha + KCl 75 kg/ha untuk pertumbuhan vegetatif." },
      { waktu:"Saat Berbunga", icon:"🌸", judul:"Pemupukan II", isi:"NPK 12-12-17 sebanyak 200 kg/ha untuk fase generatif." },
      { waktu:"Saat Berbuah",  icon:"🍀", judul:"Pemupukan III", isi:"KCl 100 kg/ha untuk memperbesar dan mempermanis hasil." },
    ]
  }
};

// ===== RENDER TANAMAN =====
function renderTanaman() {
  const grid = document.getElementById('tanamanGrid');
  grid.innerHTML = tanamanList.map(t => `
    <div class="tanaman-item" id="ti-${t.id}" onclick="pilihTanaman('${t.id}')">
      <span class="t-emoji">${t.emoji}</span>
      <span class="t-nama">${t.nama}</span>
    </div>
  `).join('');
}

function pilihTanaman(id) {
  tanamanDipilih = tanamanList.find(t => t.id === id);
  document.querySelectorAll('.tanaman-item').forEach(el => el.classList.remove('aktif'));
  document.getElementById('ti-' + id).classList.add('aktif');
  document.getElementById('stepUmur').style.display = 'block';
  document.getElementById('stepUmur').scrollIntoView({ behavior: 'smooth', block: 'center' });
  document.getElementById('hasilSection').style.display = 'none';
  document.getElementById('umurInput').value = '';
}

// ===== KONVERSI UMUR KE HST =====
function toHST(nilai, satuan) {
  if (satuan === 'mst') return nilai * 7;
  if (satuan === 'bst') return nilai * 30;
  return nilai;
}

// ===== CARI REKOMENDASI =====
function cariRekomendasi() {
  const umur = parseInt(document.getElementById('umurInput').value);
  const satuan = document.getElementById('satuanUmur').value;
  if (!tanamanDipilih) return alert('Pilih tanaman terlebih dahulu.');
  if (!umur || umur < 1) return alert('Masukkan umur tanaman yang valid.');

  const hst = toHST(umur, satuan);
  const satuanLabel = { hst: 'HST', mst: 'MST', bst: 'BST' }[satuan];
  const data = dataPupuk[tanamanDipilih.id] || dataPupuk.default;

  // Cari fase yang sesuai
  const fase = data.fase.find(f => hst <= f.batas) || data.fase[data.fase.length - 1];

  // Render info tanaman
  document.getElementById('hasilTanamanInfo').innerHTML = `
    <span class="info-emoji">${tanamanDipilih.emoji}</span>
    <div>
      <h3>${tanamanDipilih.nama}</h3>
      <p>Umur: ${umur} ${satuanLabel} (${hst} HST) &nbsp;|&nbsp; ${fase.label}</p>
    </div>
  `;

  // Render kartu pupuk
  document.getElementById('rekomendasiGrid').innerHTML = fase.pupuk.map(p => `
    <div class="pupuk-card ${p.tipe}">
      <span class="pupuk-card-icon">${p.icon}</span>
      <div class="pupuk-card-nama">${p.nama}</div>
      <div class="pupuk-card-detail">
        <div class="detail-row"><span class="d-label">Dosis</span><span class="d-val">${p.dosis}</span></div>
        <div class="detail-row"><span class="d-label">Waktu</span><span class="d-val">${p.waktu}</span></div>
        <div class="detail-row"><span class="d-label">Cara</span><span class="d-val" style="font-size:0.8rem;text-align:right;max-width:60%">${p.cara}</span></div>
      </div>
      <span class="pupuk-badge">${p.tipe.toUpperCase()}</span>
    </div>
  `).join('');

  // Render jadwal timeline
  document.getElementById('jadwalTimeline').innerHTML = data.jadwal.map(j => `
    <div class="timeline-item">
      <div class="timeline-dot">${j.icon}</div>
      <div class="timeline-content">
        <span class="timeline-waktu">${j.waktu}</span>
        <h4>${j.judul}</h4>
        <p>${j.isi}</p>
      </div>
    </div>
  `).join('');

  document.getElementById('hasilSection').style.display = 'block';
  document.getElementById('hasilSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function ulangPilih() {
  tanamanDipilih = null;
  document.querySelectorAll('.tanaman-item').forEach(el => el.classList.remove('aktif'));
  document.getElementById('stepUmur').style.display = 'none';
  document.getElementById('hasilSection').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

renderTanaman();
