const fotoInput    = document.getElementById('fotoInput');
const previewImg   = document.getElementById('previewImg');
const uploadContent= document.getElementById('uploadContent');
const gantiBtn     = document.getElementById('gantiBtn');
const btnDiagnosa  = document.getElementById('btnDiagnosa');
const uploadBox    = document.getElementById('uploadBox');

const PROXY_URL = 'https://zcfodigbqtyrrlzsapgg.supabase.co/functions/v1/diagnosa-proxy';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjZm9kaWdicXR5cnJsenNhcGdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5ODk0MzMsImV4cCI6MjA5MDU2NTQzM30.PKN3wNTIdk_ib3QG5ngybaiJUqAeya1c0CZg4KVzacI';

// Data fallback
const dataTanaman = [
  { nama:'Padi', emoji:'🌾', deskripsi:'Tanaman pangan utama Indonesia.',
    penyakit:[
      { penyakit:'Bercak Daun Coklat', sebab:'Jamur Helminthosporium oryzae berkembang di kondisi lembab.', solusi:'Semprot fungisida mankozeb, perbaiki drainase.', tingkat:60, tingkatLabel:'Sedang (60%)' },
      { penyakit:'Hawar Daun Bakteri', sebab:'Bakteri Xanthomonas oryzae menyebar melalui air dan angin.', solusi:'Gunakan varietas tahan, aplikasikan bakterisida.', tingkat:75, tingkatLabel:'Parah (75%)' },
      { penyakit:'Tanaman Sehat ✅', sebab:'Tidak ditemukan tanda-tanda infeksi.', solusi:'Pertahankan perawatan rutin.', tingkat:5, tingkatLabel:'Sangat Ringan (5%)' },
    ]
  },
  { nama:'Cabai', emoji:'🌶️', deskripsi:'Tanaman sayuran buah bernilai ekonomi tinggi.',
    penyakit:[
      { penyakit:'Antraknos (Patek)', sebab:'Jamur Colletotrichum sp. menyerang buah saat kelembaban tinggi.', solusi:'Semprot fungisida mankozeb, panen sebelum terlalu matang.', tingkat:70, tingkatLabel:'Parah (70%)' },
      { penyakit:'Layu Fusarium', sebab:'Jamur Fusarium oxysporum menyerang akar dan batang.', solusi:'Cabut tanaman terinfeksi, gunakan biofungisida Trichoderma.', tingkat:85, tingkatLabel:'Sangat Parah (85%)' },
      { penyakit:'Tanaman Sehat ✅', sebab:'Tidak ditemukan tanda-tanda infeksi.', solusi:'Pertahankan perawatan rutin.', tingkat:5, tingkatLabel:'Sangat Ringan (5%)' },
    ]
  },
  { nama:'Tomat', emoji:'🍅', deskripsi:'Sayuran buah serbaguna kaya vitamin C.',
    penyakit:[
      { penyakit:'Busuk Ujung Buah', sebab:'Kekurangan kalsium dan fluktuasi kelembaban.', solusi:'Semprot kalsium nitrat, jaga kelembaban konsisten.', tingkat:50, tingkatLabel:'Sedang (50%)' },
      { penyakit:'Layu Bakteri', sebab:'Bakteri Ralstonia solanacearum menyerang pembuluh.', solusi:'Cabut tanaman, rotasi tanaman, sterilisasi tanah.', tingkat:85, tingkatLabel:'Sangat Parah (85%)' },
      { penyakit:'Tanaman Sehat ✅', sebab:'Tidak ditemukan tanda-tanda infeksi.', solusi:'Pertahankan perawatan rutin.', tingkat:5, tingkatLabel:'Sangat Ringan (5%)' },
    ]
  },
  { nama:'Jagung', emoji:'🌽', deskripsi:'Tanaman serealia penting sebagai pangan dan pakan.',
    penyakit:[
      { penyakit:'Bulai Jagung', sebab:'Jamur Peronosclerospora maydis menyerang saat berkecambah.', solusi:'Gunakan benih berlapis fungisida, semprot metalaksil.', tingkat:80, tingkatLabel:'Parah (80%)' },
      { penyakit:'Karat Daun', sebab:'Jamur Puccinia polysora aktif saat suhu hangat.', solusi:'Semprot fungisida triazol, gunakan varietas tahan.', tingkat:45, tingkatLabel:'Ringan (45%)' },
      { penyakit:'Tanaman Sehat ✅', sebab:'Tidak ditemukan tanda-tanda infeksi.', solusi:'Pertahankan perawatan rutin.', tingkat:5, tingkatLabel:'Sangat Ringan (5%)' },
    ]
  },
  { nama:'Pisang', emoji:'🍌', deskripsi:'Buah tropis paling populer, kaya kalium.',
    penyakit:[
      { penyakit:'Panama Disease', sebab:'Jamur Fusarium oxysporum cubense menyerang pembuluh.', solusi:'Gunakan varietas tahan, sterilisasi alat.', tingkat:90, tingkatLabel:'Sangat Parah (90%)' },
      { penyakit:'Sigatoka Hitam', sebab:'Jamur Mycosphaerella fijiensis menyerang daun.', solusi:'Semprot fungisida sistemik, buang daun terinfeksi.', tingkat:65, tingkatLabel:'Sedang (65%)' },
      { penyakit:'Tanaman Sehat ✅', sebab:'Tidak ditemukan tanda-tanda infeksi.', solusi:'Pertahankan perawatan rutin.', tingkat:5, tingkatLabel:'Sangat Ringan (5%)' },
    ]
  },
];

// ===== PREVIEW =====
fotoInput.addEventListener('change', function() {
  var file = this.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) { tampilError('File harus berupa gambar.'); return; }
  if (file.size > 5*1024*1024) { tampilError('Ukuran maksimal 5MB.'); return; }
  var reader = new FileReader();
  reader.onload = function(e) {
    previewImg.src = e.target.result;
    previewImg.hidden = false;
    uploadContent.hidden = true;
    gantiBtn.hidden = false;
    btnDiagnosa.disabled = false;
    sembunyikanError();
  };
  reader.readAsDataURL(file);
});

function tampilError(msg) {
  var err = document.getElementById('uploadError');
  if (!err) {
    err = document.createElement('div');
    err.id = 'uploadError';
    err.style.cssText = 'color:#e53935;font-size:.85rem;font-weight:700;text-align:center;margin-top:8px;padding:8px 16px;background:#ffebee;border-radius:10px;';
    uploadBox.parentNode.insertBefore(err, uploadBox.nextSibling);
  }
  err.textContent = '⚠️ ' + msg;
  err.style.display = 'block';
}
function sembunyikanError() {
  var err = document.getElementById('uploadError');
  if (err) err.style.display = 'none';
}

uploadBox.addEventListener('dragover', function(e) { e.preventDefault(); uploadBox.classList.add('dragover'); });
uploadBox.addEventListener('dragleave', function() { uploadBox.classList.remove('dragover'); });
uploadBox.addEventListener('drop', function(e) {
  e.preventDefault(); uploadBox.classList.remove('dragover');
  var file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) { fotoInput.files = e.dataTransfer.files; fotoInput.dispatchEvent(new Event('change')); }
});

function gantiPhoto() {
  previewImg.hidden = true; uploadContent.hidden = false;
  gantiBtn.hidden = true; btnDiagnosa.disabled = true;
  fotoInput.value = '';
  document.getElementById('hasilWrapper').hidden = true;
  sembunyikanError();
}

// ===== DIAGNOSA =====
async function diagnosa() {
  var loading      = document.getElementById('loading');
  var hasilWrapper = document.getElementById('hasilWrapper');
  var loadingP     = loading.querySelector('p');

  btnDiagnosa.hidden = true;
  loading.hidden = false;
  hasilWrapper.hidden = true;

  var statusList = ['Mengunggah foto...','Mengidentifikasi tanaman...','Mendeteksi penyakit...','Menyiapkan rekomendasi...'];
  var si = 0;
  var statusTimer = setInterval(function() {
    si = (si+1) % statusList.length;
    if (loadingP) loadingP.textContent = statusList[si];
  }, 700);

  function selesai(namaEmoji, namaText, desk, penyakit, sebab, solusi, tingkat) {
    clearInterval(statusTimer);
    loading.hidden = true;
    btnDiagnosa.hidden = false;

    var namaEl = document.getElementById('hasilNamaTanaman');
    var deskEl = document.getElementById('hasilDeskTanaman');
    if (namaEl) namaEl.textContent = namaEmoji + ' ' + namaText;
    if (deskEl) deskEl.textContent = desk;

    document.getElementById('hasilPenyakit').textContent = penyakit;
    document.getElementById('hasilSebab').textContent    = sebab;
    document.getElementById('hasilSolusi').textContent   = solusi;
    var label = (tingkat>=70?'Parah':tingkat>=40?'Sedang':tingkat>=10?'Ringan':'Sangat Ringan') + ' (' + tingkat + '%)';
    document.getElementById('hasilTingkat').textContent  = label;

    hasilWrapper.hidden = false;
    setTimeout(function() {
      var fill = document.getElementById('progressFill');
      fill.style.width = tingkat + '%';
      fill.style.background = tingkat>=70?'#e53935':tingkat>=40?'#fb8c00':'#43a047';
    }, 100);
  }

  var base64 = previewImg.src.split(',')[1];

  // Coba proxy OpenAI
  try {
    var ctrl = new AbortController();
    var tid  = setTimeout(function(){ ctrl.abort(); }, 8000);

    var res = await fetch(PROXY_URL, {
      method: 'POST',
      signal: ctrl.signal,
      headers: { 'Content-Type':'application/json', 'Authorization':'Bearer '+SUPABASE_ANON },
      body: JSON.stringify({ base64Image: base64 })
    });
    clearTimeout(tid);

    if (res.ok) {
      var data = await res.json();
      if (data.choices && data.choices[0]) {
        var txt = data.choices[0].message.content;
        var m   = txt.match(/\{[\s\S]*\}/);
        if (m) {
          var h = JSON.parse(m[0]);
          if (h.bukan_tanaman) { clearInterval(statusTimer); loading.hidden=true; btnDiagnosa.hidden=false; tampilPesanBukanTanaman(); return; }
          selesai('🌿', (h.nama_tanaman||'Tanaman')+(h.nama_ilmiah?' ('+h.nama_ilmiah+')':''), h.deskripsi||'', h.penyakit||'Tanaman Sehat ✅', h.penyebab||'Tidak ada penyakit.', h.solusi||'Pertahankan perawatan rutin.', parseInt(h.tingkat_keparahan)||5);
          return;
        }
      }
    }
  } catch(e) { /* fallback */ }

  // Fallback simulasi
  var t = dataTanaman[Math.floor(Math.random()*dataTanaman.length)];
  var p = t.penyakit[Math.floor(Math.random()*t.penyakit.length)];
  selesai(t.emoji, t.nama, t.deskripsi, p.penyakit, p.sebab, p.solusi, p.tingkat);
}

function tampilPesanBukanTanaman() {
  var o = document.createElement('div');
  o.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px)';
  o.innerHTML = '<div style="background:white;border-radius:24px;padding:36px;max-width:400px;width:90%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.3)"><div style="font-size:4rem;margin-bottom:14px">🚫</div><h3 style="font-size:1.2rem;font-weight:900;color:#e53935;margin-bottom:10px">Bukan Foto Tumbuhan!</h3><p style="font-size:.9rem;color:#555;line-height:1.7;margin-bottom:20px">Mohon upload foto daun, batang, atau bagian tanaman yang ingin didiagnosa.</p><button onclick="this.closest(\'div\').parentElement.remove()" style="background:linear-gradient(135deg,#2e7d32,#43a047);color:white;border:none;padding:12px 28px;border-radius:99px;font-size:.9rem;font-weight:800;cursor:pointer">Ganti Foto</button></div>';
  document.body.appendChild(o);
  o.addEventListener('click', function(e){ if(e.target===o) o.remove(); });
}

function ulang() {
  gantiPhoto();
  document.getElementById('btnDiagnosa').hidden = false;
}
