// ===== TAB SWITCH =====
function switchTab(id, el) {
  document.querySelectorAll('.tab-content').forEach(function(t) { t.classList.remove('aktif'); });
  document.querySelectorAll('.sewa-tab').forEach(function(t) { t.classList.remove('aktif'); });
  document.getElementById(id).classList.add('aktif');
  el.classList.add('aktif');
}

// ===== PENDIDIKAN TOGGLE =====
function togglePendidikan() {
  var val = document.getElementById('pendidikanSelect').value;
  var sekolahGroup = document.getElementById('namaSekolahGroup');
  var jurusanGroup = document.getElementById('jurusanGroup');
  var tahunGroup   = document.getElementById('tahunLulusGroup');
  var label        = document.getElementById('namaSekolahLabel');

  if (!val) {
    sekolahGroup.style.display = 'none';
    jurusanGroup.style.display = 'none';
    tahunGroup.style.display   = 'none';
    return;
  }

  sekolahGroup.style.display = 'block';
  tahunGroup.style.display   = 'block';

  if (val === 'sd' || val === 'smp') {
    label.textContent = 'Nama Sekolah';
    document.getElementById('namaSekolahInput').placeholder = 'Contoh: SDN 01 Sukamaju';
    jurusanGroup.style.display = 'none';
  } else if (val === 'sma') {
    label.textContent = 'Nama SMA / SMK';
    document.getElementById('namaSekolahInput').placeholder = 'Contoh: SMAN 1 Bandung';
    jurusanGroup.style.display = 'block';
    document.querySelector('#jurusanGroup input').placeholder = 'Contoh: IPA, IPS, Agribisnis';
  } else {
    label.textContent = 'Nama Perguruan Tinggi';
    document.getElementById('namaSekolahInput').placeholder = 'Contoh: Universitas Gadjah Mada';
    jurusanGroup.style.display = 'block';
    document.querySelector('#jurusanGroup input').placeholder = 'Contoh: Agribisnis, Pertanian, Teknik Pertanian';
  }
}

// ===== SUBMIT =====
function submitForm(tipe) {
  if (tipe === 'petani') {
    var nama = document.querySelector('#sec-daftar-petani #namaDepan, input[placeholder*="Nama lengkap"]');
    // Kumpulkan data dari form
    var inputs = document.querySelectorAll('#daftar-petani input, #daftar-petani select, #daftar-petani textarea');
    var data = {};
    inputs.forEach(function(el) { if (el.id) data[el.id] = el.value; });

    var keahlian = [];
    document.querySelectorAll('#daftar-petani input[type=checkbox]:checked').forEach(function(cb) {
      keahlian.push(cb.parentElement.textContent.trim());
    });

    var petaniBaru = {
      nama: data['namaLengkap'] || data['nama'] || 'Petani',
      lokasi: (data['kota'] || '') + (data['provinsi'] ? ', ' + data['provinsi'] : ''),
      provinsi: data['provinsi'] || '',
      pengalaman: data['pengalaman'] || '',
      pendidikan: data['pendidikanSelect'] || '',
      keahlian: keahlian,
      upah: parseInt(data['upah']) || 0,
      no_hp: data['noHp'] || data['hp'] || '',
      deskripsi: data['deskripsi'] || ''
    };

    if (window.sb) {
      window.sb.from('sewa_petani').insert([petaniBaru]).then(function(res) {
        if (res.error) { alert('Gagal: ' + res.error.message); return; }
        alert('✅ Pendaftaran petani berhasil! Data kamu sudah tampil di halaman Sewa Petani.');
        // Reload data
        onSupabaseReady && onSupabaseReady();
        // Pindah ke tab sewa petani
        switchTab('sewa-petani', document.querySelector('[onclick*="sewa-petani"]'));
      });
    } else {
      alert('✅ Pendaftaran petani berhasil dikirim!');
    }

  } else {
    var inputs2 = document.querySelectorAll('#daftar-lahan input, #daftar-lahan select, #daftar-lahan textarea');
    var data2 = {};
    inputs2.forEach(function(el) { if (el.id) data2[el.id] = el.value; });

    var cocokArr = [];
    document.querySelectorAll('#daftar-lahan .checkbox-grid input[type=checkbox]:checked').forEach(function(cb) {
      cocokArr.push(cb.parentElement.textContent.trim());
    });

    var lahanBaru = {
      nama: data2['namaLahan'] || data2['nama'] || 'Lahan',
      lokasi: (data2['kotaLahan'] || '') + (data2['provinsiLahan'] ? ', ' + data2['provinsiLahan'] : ''),
      provinsi: data2['provinsiLahan'] || '',
      luas: data2['luasLahan'] || '',
      jenis: data2['jenisLahan'] || 'Sawah',
      air: data2['sumberAir'] || '',
      harga: parseInt(data2['hargaSewa']) || 0,
      fasilitas: Array.from(document.querySelectorAll('#daftar-lahan .checkbox-grid:last-of-type input:checked')).map(function(cb){ return cb.parentElement.textContent.trim(); }).join(', '),
      cocok: cocokArr.join(', '),
      link_maps: data2['linkMaps'] || '',
      no_hp: data2['noHpLahan'] || data2['hp'] || '',
      deskripsi: data2['deskripsiLahan'] || ''
    };

    if (window.sb) {
      window.sb.from('sewa_lahan').insert([lahanBaru]).then(function(res) {
        if (res.error) { alert('Gagal: ' + res.error.message); return; }
        alert('✅ Lahan berhasil didaftarkan! Data kamu sudah tampil di halaman Sewa Tanah.');
        onSupabaseReady && onSupabaseReady();
        switchTab('sewa-tanah', document.querySelector('[onclick*="sewa-tanah"]'));
      });
    } else {
      alert('✅ Lahan berhasil didaftarkan!');
    }
  }
}

// ===== DATA LAHAN =====
var lahanData = []; // diisi dari Supabase

// ===== DATA PETANI =====
var petaniData = []; // diisi dari Supabase

// ===== RENDER =====
function renderLahan() {
  var grid = document.getElementById('lahanGrid');
  if (!lahanData.length) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:#aaa;background:white;border-radius:16px"><span style="font-size:3rem;display:block;margin-bottom:12px">🌾</span><p>Belum ada lahan tersedia.</p><p style="font-size:.85rem;margin-top:8px">Jadilah yang pertama mendaftarkan lahan!</p></div>';
    return;
  }
  grid.innerHTML = lahanData.map(function(l) {
    return '<div class="lahan-card">' +
      '<div class="lahan-maps">' +
        '<iframe src="' + l.maps + '" allowfullscreen loading="lazy"></iframe>' +
        '<span class="lahan-badge">' + l.jenis + '</span>' +
        '<span class="lahan-badge-harga">' + l.harga + '</span>' +
      '</div>' +
      '<div class="lahan-body">' +
        '<div class="lahan-nama">' + l.nama + '</div>' +
        '<div class="lahan-lokasi">📍 ' + l.lokasi + '</div>' +
        '<div class="lahan-tags">' +
          l.cocok.split(',').map(function(c){ return '<span class="lahan-tag">' + c.trim() + '</span>'; }).join('') +
          '<span class="lahan-tag">💧 ' + l.air + '</span>' +
        '</div>' +
        '<div class="lahan-info">' +
          '<div class="li-box"><div class="li-label">Luas</div><div class="li-val">' + l.luas + '</div></div>' +
          '<div class="li-box"><div class="li-label">Jenis</div><div class="li-val">' + l.jenis + '</div></div>' +
          '<div class="li-box"><div class="li-label">Fasilitas</div><div class="li-val">' + l.fasilitas + '</div></div>' +
          '<div class="li-box"><div class="li-label">Sumber Air</div><div class="li-val">' + l.air + '</div></div>' +
        '</div>' +
        '<div class="lahan-actions">' +
          '<button class="btn-wa" onclick="window.open(\'https://wa.me/62' + l.hp.substring(1) + '\',\'_blank\')">💬 Hubungi Pemilik</button>' +
          '<a class="btn-maps" href="' + l.mapsLink + '" target="_blank" title="Buka Maps">🗺️</a>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function renderPetani() {
  var grid = document.getElementById('petaniGrid');
  if (!petaniData.length) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:#aaa;background:white;border-radius:16px"><span style="font-size:3rem;display:block;margin-bottom:12px">👨‍🌾</span><p>Belum ada petani terdaftar.</p><p style="font-size:.85rem;margin-top:8px">Jadilah yang pertama mendaftar sebagai petani!</p></div>';
    return;
  }
  grid.innerHTML = petaniData.map(function(p) {
    return '<div class="petani-card">' +
      '<div class="petani-top">' +
        '<div class="petani-avatar">' + p.avatar + '</div>' +
        '<div>' +
          '<div class="petani-nama">' + p.nama + '</div>' +
          '<div class="petani-lokasi">📍 ' + p.lokasi + '</div>' +
          '<div class="petani-rating">' + p.rating + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="petani-tags">' + p.keahlian.map(function(k){ return '<span class="petani-tag">🌱 ' + k + '</span>'; }).join('') + '</div>' +
      '<div class="petani-stats">' +
        '<div class="ps-box"><div class="ps-label">Pengalaman</div><div class="ps-val">' + p.pengalaman + '</div></div>' +
        '<div class="ps-box"><div class="ps-label">Pendidikan</div><div class="ps-val">' + p.pendidikan + '</div></div>' +
      '</div>' +
      '<div class="petani-upah"><span class="pu-label">Upah per hari</span><span class="pu-val">' + p.upah + '</span></div>' +
      '<button class="btn-wa" onclick="window.open(\'https://wa.me/62' + p.hp.substring(1) + '\',\'_blank\')">💬 Hubungi via WhatsApp</button>' +
    '</div>';
  }).join('');
}

renderLahan();
renderPetani();

// ===== SUPABASE =====
function onSupabaseReady() {
  // Load lahan
  window.sb.from('sewa_lahan').select('*').order('created_at', { ascending: false })
    .then(function(res) {
      lahanData = (res.data || []).map(function(l) {
        return {
          nama: l.nama, lokasi: l.lokasi, luas: l.luas,
          jenis: l.jenis, air: l.air,
          harga: 'Rp ' + (l.harga||0).toLocaleString('id-ID') + ' / tahun',
          fasilitas: l.fasilitas || '-', cocok: l.cocok || '-',
          maps: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15865!2d107.6!3d-6.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1',
          mapsLink: l.link_maps || ('https://maps.google.com/?q=' + encodeURIComponent(l.lokasi||'')),
          hp: l.no_hp || ''
        };
      });
      renderLahan();
    });

  // Load petani
  window.sb.from('sewa_petani').select('*').order('created_at', { ascending: false })
    .then(function(res) {
      petaniData = (res.data || []).map(function(p) {
        var keahlian = Array.isArray(p.keahlian) ? p.keahlian : (p.keahlian ? p.keahlian.split(',') : []);
        return {
          nama: p.nama, avatar: p.avatar || '🧑‍🌾',
          lokasi: p.lokasi || p.provinsi || '-',
          rating: '⭐'.repeat(Math.round(p.rating||5)) + ' (' + (p.rating||5) + ')',
          pengalaman: p.pengalaman || '-',
          keahlian: keahlian,
          upah: 'Rp ' + (p.upah||0).toLocaleString('id-ID') + '/hari',
          pendidikan: p.pendidikan || '-',
          hp: p.no_hp || ''
        };
      });
      renderPetani();
    });
}
