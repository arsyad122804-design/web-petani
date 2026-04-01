// ===== DATA PROVINSI =====
var provinsi = [
  {id:"aceh",nama:"Aceh",emoji:"🕌",pulau:"Sumatera",musim:"Hujan",suhu:27,hujan:220,kelembaban:82,angin:"Tenggara 15 km/h"},
  {id:"sumut",nama:"Sumatera Utara",emoji:"🏔️",pulau:"Sumatera",musim:"Hujan",suhu:28,hujan:200,kelembaban:80,angin:"Barat 12 km/h"},
  {id:"sumbar",nama:"Sumatera Barat",emoji:"🌋",pulau:"Sumatera",musim:"Hujan",suhu:26,hujan:240,kelembaban:84,angin:"Barat 10 km/h"},
  {id:"riau",nama:"Riau",emoji:"🛢️",pulau:"Sumatera",musim:"Kemarau",suhu:31,hujan:80,kelembaban:72,angin:"Timur 18 km/h"},
  {id:"kepri",nama:"Kepulauan Riau",emoji:"🚢",pulau:"Sumatera",musim:"Kemarau",suhu:30,hujan:90,kelembaban:74,angin:"Timur 20 km/h"},
  {id:"jambi",nama:"Jambi",emoji:"🌴",pulau:"Sumatera",musim:"Hujan",suhu:29,hujan:180,kelembaban:78,angin:"Barat 11 km/h"},
  {id:"sumsel",nama:"Sumatera Selatan",emoji:"🌉",pulau:"Sumatera",musim:"Hujan",suhu:29,hujan:190,kelembaban:79,angin:"Barat 13 km/h"},
  {id:"babel",nama:"Bangka Belitung",emoji:"⛏️",pulau:"Sumatera",musim:"Kemarau",suhu:30,hujan:70,kelembaban:73,angin:"Timur 16 km/h"},
  {id:"bengkulu",nama:"Bengkulu",emoji:"🌺",pulau:"Sumatera",musim:"Hujan",suhu:27,hujan:210,kelembaban:83,angin:"Barat 9 km/h"},
  {id:"lampung",nama:"Lampung",emoji:"🐘",pulau:"Sumatera",musim:"Hujan",suhu:28,hujan:170,kelembaban:77,angin:"Barat 14 km/h"},
  {id:"banten",nama:"Banten",emoji:"🏭",pulau:"Jawa",musim:"Kemarau",suhu:32,hujan:60,kelembaban:68,angin:"Timur 22 km/h"},
  {id:"dki",nama:"DKI Jakarta",emoji:"🏙️",pulau:"Jawa",musim:"Kemarau",suhu:33,hujan:50,kelembaban:65,angin:"Timur 24 km/h"},
  {id:"jabar",nama:"Jawa Barat",emoji:"🌸",pulau:"Jawa",musim:"Kemarau",suhu:29,hujan:65,kelembaban:70,angin:"Timur 18 km/h"},
  {id:"jateng",nama:"Jawa Tengah",emoji:"🏯",pulau:"Jawa",musim:"Kemarau",suhu:30,hujan:55,kelembaban:67,angin:"Timur 20 km/h"},
  {id:"diy",nama:"DI Yogyakarta",emoji:"🎭",pulau:"Jawa",musim:"Kemarau",suhu:29,hujan:60,kelembaban:68,angin:"Timur 17 km/h"},
  {id:"jatim",nama:"Jawa Timur",emoji:"🌋",pulau:"Jawa",musim:"Kemarau",suhu:31,hujan:45,kelembaban:64,angin:"Timur 22 km/h"},
  {id:"bali",nama:"Bali",emoji:"🌺",pulau:"Bali",musim:"Kemarau",suhu:30,hujan:40,kelembaban:66,angin:"Timur 19 km/h"},
  {id:"ntb",nama:"Nusa Tenggara Barat",emoji:"🐎",pulau:"Nusa Tenggara",musim:"Kemarau",suhu:32,hujan:30,kelembaban:60,angin:"Timur 25 km/h"},
  {id:"ntt",nama:"Nusa Tenggara Timur",emoji:"🌅",pulau:"Nusa Tenggara",musim:"Kemarau",suhu:33,hujan:20,kelembaban:55,angin:"Timur 28 km/h"},
  {id:"kalbar",nama:"Kalimantan Barat",emoji:"🌿",pulau:"Kalimantan",musim:"Hujan",suhu:28,hujan:230,kelembaban:85,angin:"Barat 8 km/h"},
  {id:"kalteng",nama:"Kalimantan Tengah",emoji:"🦧",pulau:"Kalimantan",musim:"Hujan",suhu:29,hujan:200,kelembaban:82,angin:"Barat 10 km/h"},
  {id:"kalsel",nama:"Kalimantan Selatan",emoji:"🚤",pulau:"Kalimantan",musim:"Hujan",suhu:29,hujan:185,kelembaban:80,angin:"Barat 12 km/h"},
  {id:"kaltim",nama:"Kalimantan Timur",emoji:"🌳",pulau:"Kalimantan",musim:"Hujan",suhu:28,hujan:195,kelembaban:81,angin:"Barat 11 km/h"},
  {id:"kaltara",nama:"Kalimantan Utara",emoji:"🐟",pulau:"Kalimantan",musim:"Hujan",suhu:27,hujan:210,kelembaban:83,angin:"Barat 9 km/h"},
  {id:"sulut",nama:"Sulawesi Utara",emoji:"🌊",pulau:"Sulawesi",musim:"Hujan",suhu:27,hujan:220,kelembaban:84,angin:"Barat 10 km/h"},
  {id:"gorontalo",nama:"Gorontalo",emoji:"🌽",pulau:"Sulawesi",musim:"Kemarau",suhu:30,hujan:75,kelembaban:71,angin:"Timur 16 km/h"},
  {id:"sulteng",nama:"Sulawesi Tengah",emoji:"🌊",pulau:"Sulawesi",musim:"Hujan",suhu:28,hujan:190,kelembaban:79,angin:"Barat 13 km/h"},
  {id:"sulbar",nama:"Sulawesi Barat",emoji:"🌾",pulau:"Sulawesi",musim:"Hujan",suhu:28,hujan:200,kelembaban:80,angin:"Barat 11 km/h"},
  {id:"sulsel",nama:"Sulawesi Selatan",emoji:"🌅",pulau:"Sulawesi",musim:"Kemarau",suhu:31,hujan:55,kelembaban:66,angin:"Timur 21 km/h"},
  {id:"sultra",nama:"Sulawesi Tenggara",emoji:"⚓",pulau:"Sulawesi",musim:"Kemarau",suhu:30,hujan:65,kelembaban:68,angin:"Timur 18 km/h"},
  {id:"maluku",nama:"Maluku",emoji:"🐚",pulau:"Maluku",musim:"Hujan",suhu:28,hujan:215,kelembaban:83,angin:"Barat 12 km/h"},
  {id:"malut",nama:"Maluku Utara",emoji:"🌋",pulau:"Maluku",musim:"Hujan",suhu:27,hujan:225,kelembaban:85,angin:"Barat 10 km/h"},
  {id:"papua",nama:"Papua",emoji:"🦜",pulau:"Papua",musim:"Hujan",suhu:26,hujan:280,kelembaban:88,angin:"Barat 8 km/h"},
  {id:"papuabarat",nama:"Papua Barat",emoji:"🦅",pulau:"Papua",musim:"Hujan",suhu:27,hujan:260,kelembaban:86,angin:"Barat 9 km/h"},
  {id:"papuasel",nama:"Papua Selatan",emoji:"🌿",pulau:"Papua",musim:"Hujan",suhu:27,hujan:250,kelembaban:85,angin:"Barat 10 km/h"},
  {id:"papuateng",nama:"Papua Tengah",emoji:"🏔️",pulau:"Papua",musim:"Hujan",suhu:24,hujan:290,kelembaban:89,angin:"Barat 7 km/h"},
  {id:"papuapeg",nama:"Papua Pegunungan",emoji:"⛰️",pulau:"Papua",musim:"Hujan",suhu:20,hujan:310,kelembaban:90,angin:"Barat 6 km/h"},
  {id:"papuabd",nama:"Papua Barat Daya",emoji:"🌊",pulau:"Papua",musim:"Hujan",suhu:28,hujan:245,kelembaban:84,angin:"Barat 11 km/h"}
];

// ===== REKOMENDASI =====
var rekData = {
  kemarau:[
    {emoji:"🌾",nama:"Padi Gogo",waktu:"Tanam awal kemarau",status:"sangat-baik",badge:"✅ Sangat Baik"},
    {emoji:"🌽",nama:"Jagung",waktu:"Bulan 1-2 kemarau",status:"sangat-baik",badge:"✅ Sangat Baik"},
    {emoji:"🫘",nama:"Kedelai",waktu:"Awal kemarau",status:"sangat-baik",badge:"✅ Sangat Baik"},
    {emoji:"🥜",nama:"Kacang Tanah",waktu:"Sepanjang kemarau",status:"sangat-baik",badge:"✅ Sangat Baik"},
    {emoji:"🌶️",nama:"Cabai",waktu:"Awal kemarau",status:"baik",badge:"👍 Baik"},
    {emoji:"🍅",nama:"Tomat",waktu:"Awal kemarau",status:"baik",badge:"👍 Baik"},
    {emoji:"🧅",nama:"Bawang Merah",waktu:"Pertengahan kemarau",status:"baik",badge:"👍 Baik"},
    {emoji:"🥒",nama:"Mentimun",waktu:"Awal kemarau",status:"baik",badge:"👍 Baik"},
    {emoji:"🥬",nama:"Kangkung",waktu:"Perlu irigasi rutin",status:"cukup",badge:"⚠️ Cukup"},
    {emoji:"🌿",nama:"Bayam",waktu:"Perlu irigasi rutin",status:"cukup",badge:"⚠️ Cukup"},
    {emoji:"🌾",nama:"Padi Sawah",waktu:"Butuh irigasi intensif",status:"tidak",badge:"❌ Tidak Disarankan"},
    {emoji:"🥦",nama:"Brokoli",waktu:"Tidak cocok suhu panas",status:"tidak",badge:"❌ Tidak Disarankan"}
  ],
  hujan:[
    {emoji:"🌾",nama:"Padi Sawah",waktu:"Awal musim hujan",status:"sangat-baik",badge:"✅ Sangat Baik"},
    {emoji:"🥬",nama:"Kangkung",waktu:"Sepanjang musim",status:"sangat-baik",badge:"✅ Sangat Baik"},
    {emoji:"🌿",nama:"Bayam",waktu:"Sepanjang musim",status:"sangat-baik",badge:"✅ Sangat Baik"},
    {emoji:"🥦",nama:"Brokoli",waktu:"Awal musim hujan",status:"sangat-baik",badge:"✅ Sangat Baik"},
    {emoji:"🥕",nama:"Wortel",waktu:"Awal musim hujan",status:"baik",badge:"👍 Baik"},
    {emoji:"🍆",nama:"Terong",waktu:"Awal musim hujan",status:"baik",badge:"👍 Baik"},
    {emoji:"🌽",nama:"Jagung",waktu:"Awal musim hujan",status:"baik",badge:"👍 Baik"},
    {emoji:"🍌",nama:"Pisang",waktu:"Sepanjang musim",status:"baik",badge:"👍 Baik"},
    {emoji:"🌶️",nama:"Cabai",waktu:"Waspadai penyakit jamur",status:"cukup",badge:"⚠️ Cukup"},
    {emoji:"🧅",nama:"Bawang Merah",waktu:"Rentan busuk umbi",status:"cukup",badge:"⚠️ Cukup"},
    {emoji:"🫘",nama:"Kedelai",waktu:"Rentan busuk akar",status:"tidak",badge:"❌ Tidak Disarankan"},
    {emoji:"🥜",nama:"Kacang Tanah",waktu:"Rentan penyakit daun",status:"tidak",badge:"❌ Tidak Disarankan"}
  ]
};

// ===== TIPS =====
var tipsData = {
  kemarau:[
    {icon:"💧",teks:"Pastikan sistem irigasi berfungsi baik. Tanaman butuh air 2x lebih banyak di musim kemarau."},
    {icon:"🌅",teks:"Siram tanaman pagi (06.00-08.00) atau sore (16.00-18.00) untuk mengurangi penguapan."},
    {icon:"🌿",teks:"Gunakan mulsa plastik atau jerami untuk menjaga kelembaban tanah dan menekan gulma."},
    {icon:"☀️",teks:"Pilih varietas tahan kering seperti padi gogo, jagung hibrida, dan kedelai toleran kekeringan."}
  ],
  hujan:[
    {icon:"🌧️",teks:"Pastikan drainase lahan baik agar tidak terjadi genangan yang bisa membusukkan akar."},
    {icon:"🍄",teks:"Waspadai serangan jamur dan bakteri. Semprot fungisida preventif setiap 7-10 hari."},
    {icon:"🌱",teks:"Manfaatkan musim hujan untuk menanam padi sawah, sayuran hijau, dan tanaman butuh banyak air."},
    {icon:"⚡",teks:"Hindari pemupukan saat hujan deras karena pupuk akan terbawa air dan tidak terserap tanaman."}
  ]
};

// ===== RENDER GRID =====
function initProvGrid() {
  var grid = document.getElementById('provAllGrid');
  if (!grid) return;
  grid.innerHTML = provinsi.map(function(p) {
    return '<button class="prov-btn" data-nama="' + p.nama + '" onclick="pilihProvinsi(\'' + p.id + '\')">' +
      '<span class="pb-emoji">' + p.emoji + '</span>' +
      '<span class="pb-info">' +
        '<span class="pb-nama">' + p.nama + '</span>' +
        '<span class="pb-pulau">' + p.pulau + '</span>' +
      '</span>' +
    '</button>';
  }).join('');
}

// ===== FILTER =====
function filterGrid() {
  var q = document.getElementById('searchInput').value.toLowerCase().trim();
  var btns = document.querySelectorAll('.prov-btn');
  btns.forEach(function(btn) {
    var nama = btn.dataset.nama.toLowerCase();
    btn.style.display = (q && !nama.includes(q)) ? 'none' : 'flex';
  });
}

// ===== PILIH PROVINSI =====
function pilihProvinsi(id) {
  var p = null;
  for (var i = 0; i < provinsi.length; i++) {
    if (provinsi[i].id === id) { p = provinsi[i]; break; }
  }
  if (!p) { alert('Provinsi tidak ditemukan'); return; }

  var isHujan = p.musim === 'Hujan';
  var key = isHujan ? 'hujan' : 'kemarau';
  var bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
  var bln = new Date().getMonth();

  // Header
  document.getElementById('provHeader').innerHTML =
    '<span class="ph-emoji">' + p.emoji + '</span>' +
    '<div class="ph-info">' +
      '<h3>' + p.nama + '</h3>' +
      '<p>' + p.pulau + ' &nbsp;•&nbsp; Angin: ' + p.angin + '</p>' +
    '</div>' +
    '<div class="ph-musim ' + key + '">' +
      '<div class="ml">Musim Saat Ini</div>' +
      '<div class="mv">' + (isHujan ? '🌧️' : '☀️') + ' ' + p.musim + '</div>' +
    '</div>';

  // Cuaca cards
  document.getElementById('cuacaGrid').innerHTML =
    '<div class="cc"><span class="cc-icon">🌡️</span><div class="cc-label">Suhu</div><div class="cc-val">' + p.suhu + '°C</div><div class="cc-sub">Rata-rata harian</div></div>' +
    '<div class="cc"><span class="cc-icon">' + (isHujan ? '🌧️' : '☀️') + '</span><div class="cc-label">Prediksi Hujan</div><div class="cc-val">' + p.hujan + ' mm</div><div class="cc-sub">Per bulan</div></div>' +
    '<div class="cc"><span class="cc-icon">💧</span><div class="cc-label">Kelembaban</div><div class="cc-val">' + p.kelembaban + '%</div><div class="cc-sub">Relatif</div></div>' +
    '<div class="cc"><span class="cc-icon">🌬️</span><div class="cc-label">Angin</div><div class="cc-val">' + p.angin.split(' ')[1] + '</div><div class="cc-sub">' + p.angin.split(' ')[0] + '</div></div>' +
    '<div class="cc"><span class="cc-icon">' + (p.hujan > 150 ? '🌩️' : '⛅') + '</span><div class="cc-label">Kondisi</div><div class="cc-val">' + (p.hujan > 150 ? 'Berawan' : 'Cerah') + '</div><div class="cc-sub">Hari ini</div></div>';

  // Rekomendasi
  document.getElementById('rekMusim').textContent = 'Musim ' + p.musim + ' • ' + new Date().toLocaleDateString('id-ID', {month:'long', year:'numeric'});
  document.getElementById('rekGrid').innerHTML = rekData[key].map(function(r) {
    return '<div class="rek-card ' + r.status + '">' +
      '<span class="rk-emoji">' + r.emoji + '</span>' +
      '<div class="rk-nama">' + r.nama + '</div>' +
      '<div class="rk-waktu">' + r.waktu + '</div>' +
      '<span class="rk-badge">' + r.badge + '</span>' +
    '</div>';
  }).join('');

  // Kalender
  var kalTanam = isHujan ?
    [[0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,0,1,1]] :
    [[1,1,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,0,0,0,0,0,0,0,0],[0,1,1,1,0,0,0,0,0,0,0,0],[0,0,1,1,1,0,0,0,0,0,0,0]];
  var kalPanen = isHujan ?
    [[0,0,1,1,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[0,0,1,1,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0,0,0,0,0]] :
    [[0,0,0,1,1,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,0,0]];
  var kalNama = isHujan ? ["Padi Sawah","Kangkung","Bayam","Brokoli","Wortel","Terong"] : ["Padi Gogo","Jagung","Kedelai","Cabai","Tomat","Bawang Merah"];

  var rows = kalNama.map(function(t, ti) {
    var cells = bulan.map(function(b, bi) {
      var t2 = kalTanam[ti][bi], p2 = kalPanen[ti][bi];
      if (t2 && p2) return '<td><span class="kal-dot-t">T+P</span></td>';
      if (t2) return '<td><span class="kal-dot-t">T</span></td>';
      if (p2) return '<td><span class="kal-dot-p">P</span></td>';
      return '<td><span class="kal-dot-k">-</span></td>';
    }).join('');
    return '<tr><td>' + t + '</td>' + cells + '</tr>';
  }).join('');

  var headers = bulan.map(function(b, i) {
    return '<th style="' + (i === bln ? 'color:#2e7d32;font-weight:900' : '') + '">' + b + '</th>';
  }).join('');

  document.getElementById('kalScroll').innerHTML =
    '<table class="kal-table"><thead><tr><th>Tanaman</th>' + headers + '</tr></thead><tbody>' + rows + '</tbody></table>';

  // Tips
  document.getElementById('tipsWrapper').innerHTML =
    '<h3>💡 Tips Bertani Musim ' + p.musim + '</h3>' +
    '<div class="tips-list">' +
    tipsData[key].map(function(t) {
      return '<div class="tip-item"><span class="tip-icon">' + t.icon + '</span><p>' + t.teks + '</p></div>';
    }).join('') + '</div>';

  // Tampilkan hasil
  document.getElementById('cuacaPlaceholder').style.display = 'none';
  document.getElementById('cuacaContent').style.display = 'block';
  document.getElementById('cuacaContent').scrollIntoView({behavior:'smooth', block:'start'});
}

function gantiProvinsi() {
  document.getElementById('cuacaContent').style.display = 'none';
  document.getElementById('cuacaPlaceholder').style.display = 'block';
  document.getElementById('searchInput').value = '';
  filterGrid();
  window.scrollTo({top:0, behavior:'smooth'});
}

// Init
initProvGrid();
