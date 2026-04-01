const fotoInput = document.getElementById('fotoInput');
const previewImg = document.getElementById('previewImg');
const uploadContent = document.getElementById('uploadContent');
const gantiBtn = document.getElementById('gantiBtn');
const btnDiagnosa = document.getElementById('btnDiagnosa');
const uploadBox = document.getElementById('uploadBox');

// Data simulasi diagnosa
const hasilData = [
  {
    penyakit: "Bercak Daun (Leaf Spot)",
    sebab: "Jamur Cercospora sp. yang berkembang di kondisi lembab dan kurang sinar matahari.",
    solusi: "Semprot fungisida berbahan mankozeb, pangkas daun yang terinfeksi, dan pastikan sirkulasi udara baik.",
    tingkat: 65,
    tingkatLabel: "Sedang (65%)"
  },
  {
    penyakit: "Hawar Daun (Leaf Blight)",
    sebab: "Bakteri Xanthomonas oryzae yang menyebar melalui air hujan dan angin.",
    solusi: "Gunakan varietas tahan penyakit, aplikasikan bakterisida, dan hindari pengairan berlebih.",
    tingkat: 80,
    tingkatLabel: "Parah (80%)"
  },
  {
    penyakit: "Karat Daun (Leaf Rust)",
    sebab: "Jamur Puccinia sp. yang aktif saat suhu hangat dan kelembaban tinggi.",
    solusi: "Aplikasikan fungisida triazol, rotasi tanaman, dan musnahkan sisa tanaman terinfeksi.",
    tingkat: 45,
    tingkatLabel: "Ringan (45%)"
  },
  {
    penyakit: "Tanaman Sehat ✅",
    sebab: "Tidak ditemukan tanda-tanda infeksi penyakit pada daun.",
    solusi: "Pertahankan perawatan rutin: penyiraman teratur, pemupukan sesuai jadwal, dan monitoring berkala.",
    tingkat: 5,
    tingkatLabel: "Sangat Ringan (5%)"
  }
];

// Preview foto
fotoInput.addEventListener('change', function () {
  const file = this.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    previewImg.src = e.target.result;
    previewImg.hidden = false;
    uploadContent.hidden = true;
    gantiBtn.hidden = false;
    btnDiagnosa.disabled = false;
  };
  reader.readAsDataURL(file);
});

// Drag & drop
uploadBox.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadBox.classList.add('dragover');
});

uploadBox.addEventListener('dragleave', () => {
  uploadBox.classList.remove('dragover');
});

uploadBox.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadBox.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    fotoInput.files = e.dataTransfer.files;
    fotoInput.dispatchEvent(new Event('change'));
  }
});

function gantiPhoto() {
  previewImg.hidden = true;
  uploadContent.hidden = false;
  gantiBtn.hidden = true;
  btnDiagnosa.disabled = true;
  fotoInput.value = '';
  document.getElementById('hasilWrapper').hidden = true;
}

function diagnosa() {
  const loading = document.getElementById('loading');
  const hasilWrapper = document.getElementById('hasilWrapper');

  btnDiagnosa.hidden = true;
  loading.hidden = false;
  hasilWrapper.hidden = true;

  setTimeout(() => {
    loading.hidden = true;

    // Pilih hasil acak dari data simulasi
    const hasil = hasilData[Math.floor(Math.random() * hasilData.length)];

    document.getElementById('hasilPenyakit').textContent = hasil.penyakit;
    document.getElementById('hasilSebab').textContent = hasil.sebab;
    document.getElementById('hasilSolusi').textContent = hasil.solusi;
    document.getElementById('hasilTingkat').textContent = hasil.tingkatLabel;

    hasilWrapper.hidden = false;

    // Animasi progress bar
    setTimeout(() => {
      document.getElementById('progressFill').style.width = hasil.tingkat + '%';
      // Warna sesuai tingkat
      const fill = document.getElementById('progressFill');
      if (hasil.tingkat >= 70) fill.style.background = '#e53935';
      else if (hasil.tingkat >= 40) fill.style.background = '#fb8c00';
      else fill.style.background = '#43a047';
    }, 100);

  }, 2500);
}

function ulang() {
  gantiPhoto();
  document.getElementById('btnDiagnosa').hidden = false;
}
