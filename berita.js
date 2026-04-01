const beritaData = [
  { id:1,  kategori:"panen",     judul:"Panen Padi Meningkat 20% di Jawa Tengah", isi:"Petani di Jawa Tengah berhasil meningkatkan hasil panen berkat teknologi irigasi modern. Penggunaan varietas unggul dan sistem tanam jajar legowo turut berkontribusi pada peningkatan produktivitas.", tanggal:"31 Mar 2026", penulis:"Redaksi", waktuBaca:"3 menit", img:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=360&fit=crop", featured:true },
  { id:2,  kategori:"harga",     judul:"Harga Cabai Stabil Jelang Lebaran", isi:"Pemerintah memastikan pasokan cabai mencukupi kebutuhan masyarakat menjelang hari raya dengan operasi pasar di 15 kota besar Indonesia.", tanggal:"30 Mar 2026", penulis:"Tim Harga", waktuBaca:"2 menit", img:"https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=600&h=360&fit=crop", featured:false },
  { id:3,  kategori:"teknologi", judul:"Drone Pertanian Mulai Digunakan Petani Milenial", isi:"Penggunaan drone untuk penyemprotan pestisida dan pemantauan lahan semakin meluas. Efisiensi meningkat hingga 60% dibanding cara konvensional.", tanggal:"29 Mar 2026", penulis:"Tim Teknologi", waktuBaca:"4 menit", img:"https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&h=360&fit=crop", featured:false },
  { id:4,  kategori:"kebijakan", judul:"Subsidi Benih Unggul Diperluas ke 20 Provinsi", isi:"Kementerian Pertanian memperluas program subsidi benih unggul bersertifikat untuk meningkatkan produktivitas petani nasional.", tanggal:"28 Mar 2026", penulis:"Tim Kebijakan", waktuBaca:"3 menit", img:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=360&fit=crop", featured:false },
  { id:5,  kategori:"harga",     judul:"Ekspor Komoditas Pertanian Naik 15% Kuartal Ini", isi:"Nilai ekspor produk pertanian Indonesia meningkat signifikan didorong permintaan tinggi dari pasar Asia Tenggara dan Timur Tengah.", tanggal:"27 Mar 2026", penulis:"Tim Ekspor", waktuBaca:"3 menit", img:"https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=360&fit=crop", featured:false },
  { id:6,  kategori:"teknologi", judul:"Pupuk Organik Cair Berbasis Mikroba Jadi Tren Baru", isi:"Inovasi pupuk organik cair berbasis mikroba tanah terbukti meningkatkan hasil panen hingga 30% dibanding pupuk kimia konvensional.", tanggal:"26 Mar 2026", penulis:"Tim Inovasi", waktuBaca:"5 menit", img:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=360&fit=crop", featured:false },
  { id:7,  kategori:"cuaca",     judul:"BMKG: Musim Kemarau 2026 Lebih Panjang dari Biasanya", isi:"BMKG memperingatkan petani untuk menyiapkan cadangan air dan memilih varietas tahan kering menghadapi musim kemarau panjang.", tanggal:"25 Mar 2026", penulis:"Tim Cuaca", waktuBaca:"3 menit", img:"https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&h=360&fit=crop", featured:false },
  { id:8,  kategori:"panen",     judul:"Varietas Padi Baru Tahan Hama Siap Diluncurkan", isi:"Balai Penelitian Tanaman Pangan mengembangkan varietas padi baru yang tahan wereng coklat dan blast dengan produktivitas tinggi.", tanggal:"24 Mar 2026", penulis:"Tim Riset", waktuBaca:"4 menit", img:"https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=600&h=360&fit=crop", featured:false },
  { id:9,  kategori:"kebijakan", judul:"Asuransi Pertanian Kini Bisa Diakses via Aplikasi", isi:"Petani kini bisa mendaftar asuransi usaha tani padi dan palawija langsung dari smartphone tanpa harus datang ke kantor.", tanggal:"23 Mar 2026", penulis:"Tim Digital", waktuBaca:"2 menit", img:"https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=360&fit=crop", featured:false },
  { id:10, kategori:"panen",     judul:"Petani Milenial Sukses Budidaya Hidroponik Skala Besar", isi:"Seorang petani muda di Bandung berhasil mengembangkan usaha hidroponik seluas 2.000 m2 dengan omzet Rp 50 juta per bulan menggunakan teknologi IoT.", tanggal:"22 Mar 2026", penulis:"Tim Inspirasi", waktuBaca:"5 menit", img:"https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=360&fit=crop", featured:false },
  { id:11, kategori:"teknologi", judul:"Aplikasi AI Bantu Petani Deteksi Penyakit Tanaman", isi:"Startup agritech Indonesia meluncurkan aplikasi berbasis AI yang mampu mendeteksi 50 jenis penyakit tanaman hanya dari foto daun.", tanggal:"21 Mar 2026", penulis:"Tim Teknologi", waktuBaca:"4 menit", img:"https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&h=360&fit=crop", featured:false },
  { id:12, kategori:"kebijakan", judul:"Pemerintah Naikkan HPP Gabah Jadi Rp 6.000 per Kg", isi:"HPP gabah kering panen dinaikkan untuk meningkatkan kesejahteraan petani padi di seluruh Indonesia.", tanggal:"20 Mar 2026", penulis:"Tim Kebijakan", waktuBaca:"3 menit", img:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=360&fit=crop", featured:false },
  { id:13, kategori:"harga",     judul:"Harga Bawang Merah Anjlok, Petani Mengeluh", isi:"Harga bawang merah di tingkat petani turun drastis hingga Rp 8.000 per kg akibat panen raya serentak di beberapa sentra produksi.", tanggal:"19 Mar 2026", penulis:"Tim Harga", waktuBaca:"3 menit", img:"https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&h=360&fit=crop", featured:false },
  { id:14, kategori:"panen",     judul:"Panen Jagung Hibrida Capai 12 Ton per Hektar", isi:"Petani di Gorontalo berhasil memanen jagung hibrida dengan produktivitas 12 ton per hektar menggunakan teknologi pemupukan berimbang.", tanggal:"18 Mar 2026", penulis:"Tim Panen", waktuBaca:"3 menit", img:"https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=360&fit=crop", featured:false },
  { id:15, kategori:"cuaca",     judul:"El Nino Diprediksi Pengaruhi Musim Tanam 2026", isi:"BMKG memprediksi fenomena El Nino akan menyebabkan kekeringan di sebagian besar wilayah Indonesia pada pertengahan 2026.", tanggal:"17 Mar 2026", penulis:"Tim Cuaca", waktuBaca:"4 menit", img:"https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&h=360&fit=crop", featured:false },
  { id:16, kategori:"teknologi", judul:"Sistem Irigasi Tetes Hemat Air 70% untuk Cabai", isi:"Teknologi irigasi tetes yang dikembangkan peneliti IPB terbukti menghemat penggunaan air hingga 70% sekaligus meningkatkan kualitas buah cabai.", tanggal:"16 Mar 2026", penulis:"Tim Riset", waktuBaca:"4 menit", img:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=360&fit=crop", featured:false },
  { id:17, kategori:"kebijakan", judul:"Koperasi Tani Digital Dapat Akses Kredit Mudah", isi:"Pemerintah meluncurkan program kredit usaha tani digital dengan bunga 3% per tahun khusus untuk koperasi petani yang terdaftar secara digital.", tanggal:"15 Mar 2026", penulis:"Tim Kebijakan", waktuBaca:"3 menit", img:"https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=360&fit=crop", featured:false },
  { id:18, kategori:"panen",     judul:"Petani Organik Bali Tembus Pasar Ekspor Jepang", isi:"Kelompok tani organik di Tabanan, Bali berhasil mengekspor sayuran organik senilai Rp 2 miliar ke Jepang setelah mendapat sertifikasi internasional.", tanggal:"14 Mar 2026", penulis:"Tim Ekspor", waktuBaca:"5 menit", img:"https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=360&fit=crop", featured:false },
];

let filterAktif = 'semua';

function filterBerita(kategori, btn) {
  filterAktif = kategori;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('aktif'));
  btn.classList.add('aktif');
  renderBerita();
}

function renderBerita() {
  const grid = document.getElementById('beritaGrid');
  const filtered = filterAktif === 'semua'
    ? beritaData
    : beritaData.filter(b => b.kategori === filterAktif);

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state"><span>🔍</span><p>Tidak ada berita untuk kategori ini.</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map((b, i) => `
    <div class="berita-item-card ${b.featured && i === 0 ? 'featured' : ''}">
      <div class="card-img">
        <img src="${b.img}" alt="${b.judul}" loading="lazy" />
        <span class="card-kategori-badge badge-${b.kategori}">${b.kategori}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-tanggal">📅 ${b.tanggal}</span>
          <span class="card-dot">●</span>
          <span class="card-penulis">${b.penulis}</span>
        </div>
        <h3>${b.judul}</h3>
        <p>${b.isi}</p>
        <div class="card-footer">
          <a class="card-baca" href="#">Baca selengkapnya →</a>
          <span class="card-waktu-baca">⏱ ${b.waktuBaca}</span>
        </div>
      </div>
    </div>
  `).join('');
}

renderBerita();
