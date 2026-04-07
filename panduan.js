const tanamanData = [
  // PANGAN
  { id:'padi', kategori:'pangan', nama:'Padi', emoji:'🌾', deskripsi:'Tanaman pangan utama Indonesia, ditanam di sawah maupun lahan kering.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 2 ton/ha + SP-36 100 kg/ha saat pengolahan tanah.'},{judul:'Susulan I (10-14 HST)',isi:'Urea 100 kg/ha + NPK 150 kg/ha untuk pertumbuhan vegetatif.'},{judul:'Susulan II (30-35 HST)',isi:'Urea 50 kg/ha + KCl 75 kg/ha untuk pembentukan malai.'}],
    caraTanam:[{judul:'Persiapan Benih',isi:'Rendam benih 24 jam, inkubasi 48 jam hingga berkecambah.'},{judul:'Persemaian',isi:'Semai di lahan persemaian selama 21-25 hari.'},{judul:'Penanaman',isi:'Tanam bibit jarak 25x25 cm, 2-3 bibit per lubang.'},{judul:'Perawatan',isi:'Jaga air 3-5 cm, penyiangan umur 21 dan 42 HST.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'90-95% bulir menguning, sekitar 110-120 HST.'},{judul:'Cara Panen',isi:'Gunakan sabit atau combine harvester, panen pagi hari.'},{judul:'Pascapanen',isi:'Jemur hingga kadar air 14%, simpan di tempat kering.'}]
  },
  { id:'jagung', kategori:'pangan', nama:'Jagung', emoji:'🌽', deskripsi:'Tanaman serealia penting sebagai pangan, pakan ternak, dan bahan industri.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'NPK 15-15-15 sebanyak 200 kg/ha saat tanam.'},{judul:'Susulan I (14-21 HST)',isi:'Urea 150 kg/ha di samping tanaman, tutup tanah.'},{judul:'Susulan II (35-40 HST)',isi:'Urea 100 kg/ha + KCl 50 kg/ha saat pembungaan.'}],
    caraTanam:[{judul:'Persiapan Lahan',isi:'Olah tanah 20-30 cm, pH ideal 5.5-7.0.'},{judul:'Penanaman',isi:'Jarak 75x25 cm, 1-2 benih per lubang, kedalaman 3-5 cm.'},{judul:'Penyiraman',isi:'Siram segera setelah tanam, jaga kelembaban.'},{judul:'Penyiangan',isi:'Siangi umur 14 dan 30 HST, lakukan pembumbunan.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Rambut tongkol kering coklat, biji keras mengkilap, 95-105 HST.'},{judul:'Cara Panen',isi:'Petik tongkol dengan memutar ke bawah.'},{judul:'Pascapanen',isi:'Jemur hingga kadar air 14%, simpan dalam karung bersih.'}]
  },
  { id:'kedelai', kategori:'pangan', nama:'Kedelai', emoji:'🫘', deskripsi:'Sumber protein nabati utama, bahan baku tahu, tempe, dan kecap.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 1-2 ton/ha + SP-36 75 kg/ha + KCl 50 kg/ha.'},{judul:'Inokulasi Rhizobium',isi:'Campur benih dengan bakteri Rhizobium sebelum tanam.'},{judul:'Susulan (21-28 HST)',isi:'Urea 25-50 kg/ha jika tanaman pucat.'}],
    caraTanam:[{judul:'Persiapan Benih',isi:'Rendam 6-8 jam, inokulasi Rhizobium sebelum tanam.'},{judul:'Penanaman',isi:'Jarak 40x15 cm, 2-3 benih per lubang, kedalaman 3-4 cm.'},{judul:'Pengairan',isi:'Jaga kelembaban saat perkecambahan dan pembungaan.'},{judul:'Pengendalian Hama',isi:'Waspadai ulat grayak dan penggerek polong.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'95% polong kuning kecoklatan, daun gugur, 80-90 HST.'},{judul:'Cara Panen',isi:'Cabut tanaman atau potong batang, panen pagi hari.'},{judul:'Pascapanen',isi:'Jemur 3-5 hari, rontokkan biji, kadar air 12-13%.'}]
  },
  { id:'singkong', kategori:'pangan', nama:'Singkong', emoji:'🥔', deskripsi:'Tanaman umbi sumber karbohidrat, tahan kekeringan dan mudah dibudidayakan.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 10-15 ton/ha + SP-36 100 kg/ha + KCl 100 kg/ha.'},{judul:'Susulan I (1-2 BST)',isi:'Urea 100 kg/ha + NPK 150 kg/ha di sekitar tanaman.'},{judul:'Susulan II (4-5 BST)',isi:'KCl 75 kg/ha untuk memperbesar umbi.'}],
    caraTanam:[{judul:'Persiapan Stek',isi:'Batang tua 8-12 bulan, potong 20-25 cm dengan 5-7 ruas.'},{judul:'Penanaman',isi:'Tanam miring 45° atau tegak, kedalaman 5-10 cm, jarak 100x100 cm.'},{judul:'Pembumbunan',isi:'Lakukan umur 2-3 bulan untuk merangsang umbi.'},{judul:'Pengendalian Hama',isi:'Waspadai tungau merah dan kutu putih.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Daun menguning dan gugur, batang mengeras, umur 8-12 bulan.'},{judul:'Cara Panen',isi:'Potong batang 30 cm, cabut umbi dengan cangkul.'},{judul:'Pascapanen',isi:'Segera olah atau jual dalam 2-3 hari setelah panen.'}]
  },
  { id:'ubi_jalar', kategori:'pangan', nama:'Ubi Jalar', emoji:'🍠', deskripsi:'Umbi bergizi tinggi kaya vitamin A dan C, cocok di berbagai kondisi lahan.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 10 ton/ha + SP-36 75 kg/ha + KCl 100 kg/ha.'},{judul:'Susulan I (3-4 Minggu)',isi:'Urea 50 kg/ha + NPK 100 kg/ha di sekitar tanaman.'},{judul:'Susulan II (6-8 Minggu)',isi:'KCl 50 kg/ha untuk mendukung pembesaran umbi.'}],
    caraTanam:[{judul:'Persiapan Stek',isi:'Stek pucuk 25-30 cm dari tanaman induk yang sehat.'},{judul:'Persiapan Lahan',isi:'Buat guludan tinggi 30-40 cm, jarak antar guludan 80-100 cm.'},{judul:'Penanaman',isi:'Benamkan 2/3 stek ke tanah, jarak 25-30 cm dalam baris.'},{judul:'Perawatan',isi:'Balik sulur setiap 2-3 minggu agar tidak berakar di tanah.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Daun menguning, kulit umbi keras, umur 3.5-5 bulan.'},{judul:'Cara Panen',isi:'Cangkul guludan dari samping, kumpulkan umbi hati-hati.'},{judul:'Pascapanen',isi:'Angin-anginkan 1-2 hari, simpan di tempat sejuk dan kering.'}]
  },
  { id:'kacang_tanah', kategori:'pangan', nama:'Kacang Tanah', emoji:'🥜', deskripsi:'Kacang-kacangan kaya protein dan lemak sehat, bahan baku minyak dan olahan pangan.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'SP-36 75 kg/ha + KCl 50 kg/ha + kapur dolomit 500 kg/ha.'},{judul:'Susulan I (14-21 HST)',isi:'Urea 25-50 kg/ha + NPK 100 kg/ha.'},{judul:'Tabur Kapur Saat Berbunga',isi:'Dolomit 250 kg/ha di sekitar tanaman untuk pembentukan polong.'}],
    caraTanam:[{judul:'Persiapan Benih',isi:'Rendam benih 6-8 jam, inokulasi Rhizobium sebelum tanam.'},{judul:'Penanaman',isi:'Jarak 40x15 cm, 1-2 biji per lubang, kedalaman 3-5 cm.'},{judul:'Pengairan',isi:'Siram teratur, hindari genangan dan kekeringan.'},{judul:'Pengendalian Penyakit',isi:'Waspadai layu bakteri dan bercak daun, rotasi tanaman.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Daun menguning, kulit polong keras coklat, 90-100 HST.'},{judul:'Cara Panen',isi:'Cabut tanaman saat tanah lembab agar polong tidak tertinggal.'},{judul:'Pascapanen',isi:'Jemur hingga kadar air 9-10%, simpan di tempat kering.'}]
  },

  // SAYURAN
  { id:'cabai', kategori:'sayuran', nama:'Cabai', emoji:'🌶️', deskripsi:'Komoditas sayuran bernilai ekonomi tinggi, digunakan sebagai bumbu masak.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 20 ton/ha + SP-36 150 kg/ha + KCl 100 kg/ha.'},{judul:'Susulan I (2-3 Minggu)',isi:'NPK 16-16-16 sebanyak 200 kg/ha atau kocor 5 g/liter.'},{judul:'Susulan II (Saat Berbunga)',isi:'KNO3 merah 150 kg/ha + Kalsium Boron untuk pembungaan.'}],
    caraTanam:[{judul:'Persemaian',isi:'Semai di tray, bibit siap tanam umur 25-30 hari.'},{judul:'Persiapan Lahan',isi:'Bedengan lebar 120 cm, pasang mulsa plastik hitam perak.'},{judul:'Penanaman',isi:'Jarak 60x70 cm, tanam sore hari, siram segera.'},{judul:'Pemasangan Ajir',isi:'Pasang ajir 100-120 cm saat umur 2-3 minggu.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Cabai merah saat buah merah penuh, 75-85 HST.'},{judul:'Cara Panen',isi:'Petik beserta tangkai setiap 3-5 hari sekali.'},{judul:'Pascapanen',isi:'Sortir, simpan di tempat sejuk, tahan 5-7 hari.'}]
  },
  { id:'terong', kategori:'sayuran', nama:'Terong', emoji:'🍆', deskripsi:'Sayuran buah yang mudah dibudidayakan, kaya antioksidan dan serat.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 15 ton/ha + SP-36 100 kg/ha + KCl 75 kg/ha.'},{judul:'Susulan I (2 Minggu)',isi:'Kocor NPK 5 g/liter setiap 7-10 hari.'},{judul:'Susulan II (Saat Berbunga)',isi:'KNO3 100 kg/ha + Kalsium Boron untuk kualitas buah.'}],
    caraTanam:[{judul:'Persemaian',isi:'Semai di tray, bibit siap tanam umur 25-30 hari.'},{judul:'Penanaman',isi:'Jarak 70x60 cm di bedengan bermulsa.'},{judul:'Pemangkasan',isi:'Pangkas tunas air, pertahankan 2-3 cabang utama.'},{judul:'Pengendalian Hama',isi:'Waspadai kutu daun, thrips, dan penggerek buah.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Buah ukuran optimal, kulit mengkilap ungu tua merata.'},{judul:'Cara Panen',isi:'Potong tangkai setiap 3-5 hari, 15-20 kali panen.'},{judul:'Pascapanen',isi:'Simpan di tempat sejuk, tahan 5-7 hari.'}]
  },
  { id:'tomat', kategori:'sayuran', nama:'Tomat', emoji:'🍅', deskripsi:'Sayuran buah serbaguna kaya vitamin C dan likopen, bernilai ekonomi tinggi.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 20 ton/ha + SP-36 150 kg/ha + KCl 100 kg/ha.'},{judul:'Susulan I (2-3 Minggu)',isi:'Kocor NPK 16-16-16 sebanyak 5 g/liter setiap minggu.'},{judul:'Susulan II (Saat Berbuah)',isi:'KNO3 merah 150 kg/ha + Kalsium Nitrat 100 kg/ha.'}],
    caraTanam:[{judul:'Persemaian',isi:'Semai di tray, bibit siap tanam umur 25-30 hari.'},{judul:'Penanaman',isi:'Jarak 60x70 cm, pasang ajir segera setelah tanam.'},{judul:'Pemangkasan Tunas Air',isi:'Pangkas wiwilan setiap minggu, pertahankan 1-2 batang.'},{judul:'Pengikatan',isi:'Ikat batang ke ajir setiap 20-25 cm.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Buah merah 70-80%, umur 60-75 HST.'},{judul:'Cara Panen',isi:'Petik beserta tangkai setiap 2-3 hari.'},{judul:'Pascapanen',isi:'Sortir berdasarkan ukuran dan kematangan.'}]
  },
  { id:'bawang_merah', kategori:'sayuran', nama:'Bawang Merah', emoji:'🧅', deskripsi:'Bumbu dapur penting dengan nilai ekonomi tinggi, dibudidayakan secara intensif.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 10-15 ton/ha + SP-36 100 kg/ha + KCl 75 kg/ha.'},{judul:'Susulan I (10-15 HST)',isi:'Urea 100 kg/ha + NPK 150 kg/ha secara larikan.'},{judul:'Susulan II (30-35 HST)',isi:'KCl 75 kg/ha + ZA 50 kg/ha untuk pembesaran umbi.'}],
    caraTanam:[{judul:'Persiapan Bibit',isi:'Umbi bibit 5-10 g, potong ujung 1/3 bagian.'},{judul:'Persiapan Lahan',isi:'Bedengan lebar 120 cm, tinggi 20-30 cm, pH 6.0-7.0.'},{judul:'Penanaman',isi:'Jarak 20x15 cm, benamkan 2/3 umbi ke tanah.'},{judul:'Pengendalian Penyakit',isi:'Semprot fungisida preventif setiap 5-7 hari.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'60-70% daun rebah, umbi penuh merah, umur 60-70 HST.'},{judul:'Cara Panen',isi:'Cabut saat tanah kering, ikat dan jemur 2-3 hari.'},{judul:'Pascapanen',isi:'Jemur 7-14 hari, simpan digantung di tempat berventilasi.'}]
  },
  { id:'kangkung', kategori:'sayuran', nama:'Kangkung', emoji:'🥬', deskripsi:'Sayuran daun yang cepat tumbuh, kaya zat besi dan vitamin.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 10 ton/ha atau pupuk kandang 5 ton/ha.'},{judul:'Susulan (7-10 HST)',isi:'Kocor Urea 5 g/liter atau NPK 5 g/liter setiap minggu.'},{judul:'Pupuk Organik Cair',isi:'Semprotkan POC atau MOL setiap 7 hari.'}],
    caraTanam:[{judul:'Persiapan Lahan',isi:'Bedengan lebar 100-120 cm, untuk kangkung air siapkan lahan tergenang.'},{judul:'Penanaman',isi:'Tugal jarak 20x20 cm, isi 3-5 benih per lubang.'},{judul:'Pengairan',isi:'Siram 2 kali sehari, jaga kelembaban tanah.'},{judul:'Penyiangan',isi:'Siangi gulma secara rutin.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Tinggi 20-25 cm, daun muda segar, umur 25-30 HST.'},{judul:'Cara Panen',isi:'Potong batang 5-10 cm dari tanah, bisa dipanen 3-5 kali.'},{judul:'Pascapanen',isi:'Ikat, cuci bersih, simpan di tempat sejuk.'}]
  },
  { id:'bayam', kategori:'sayuran', nama:'Bayam', emoji:'🥗', deskripsi:'Sayuran daun bergizi tinggi kaya zat besi, kalsium, dan vitamin.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos atau pupuk kandang 10 ton/ha.'},{judul:'Susulan (10 HST)',isi:'Kocor Urea 3-5 g/liter setiap 7 hari.'},{judul:'Pupuk Organik Cair',isi:'Semprotkan POC berbasis nitrogen setiap 5-7 hari.'}],
    caraTanam:[{judul:'Persiapan Lahan',isi:'Bedengan lebar 100 cm, pH 6.0-7.0.'},{judul:'Penanaman',isi:'Sebar benih merata atau jarak 20x20 cm.'},{judul:'Penjarangan',isi:'Jarangkan umur 10-14 hari, sisakan jarak 10-15 cm.'},{judul:'Pengairan',isi:'Siram 2 kali sehari, hindari genangan.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Tinggi 20 cm, daun muda, sebelum berbunga, umur 25-30 HST.'},{judul:'Cara Panen',isi:'Cabut seluruh tanaman atau petik daun tua dari bawah.'},{judul:'Pascapanen',isi:'Cuci bersih, simpan di lemari pendingin, tahan 3-5 hari.'}]
  },
  { id:'wortel', kategori:'sayuran', nama:'Wortel', emoji:'🥕', deskripsi:'Sayuran umbi kaya beta-karoten dan vitamin A, cocok di dataran tinggi.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos matang 15 ton/ha + SP-36 100 kg/ha + KCl 75 kg/ha.'},{judul:'Susulan I (3 Minggu)',isi:'Urea 75 kg/ha + NPK 100 kg/ha secara larikan.'},{judul:'Susulan II (6 Minggu)',isi:'KCl 50 kg/ha untuk pembesaran umbi.'}],
    caraTanam:[{judul:'Persiapan Lahan',isi:'Olah tanah 40-50 cm, gembur bebas batu, ketinggian 1000-1200 mdpl.'},{judul:'Penanaman',isi:'Alur sedalam 1-2 cm, jarak baris 20 cm, sebar benih tipis.'},{judul:'Penjarangan',isi:'Jarangkan saat tinggi 5 cm, sisakan jarak 5-8 cm.'},{judul:'Pembumbunan',isi:'Bumbun umur 4-5 minggu agar umbi tidak terkena matahari.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Diameter umbi 2-3 cm, bahu terlihat di permukaan, 90-120 HST.'},{judul:'Cara Panen',isi:'Cabut atau longgarkan tanah dengan garpu terlebih dahulu.'},{judul:'Pascapanen',isi:'Potong daun sisakan 2-3 cm, cuci, simpan di lemari pendingin.'}]
  },
  { id:'mentimun', kategori:'sayuran', nama:'Mentimun', emoji:'🥒', deskripsi:'Sayuran buah menyegarkan dengan kandungan air tinggi, cepat berbuah.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 15 ton/ha + SP-36 100 kg/ha + KCl 75 kg/ha.'},{judul:'Susulan I (2 Minggu)',isi:'Kocor NPK 16-16-16 sebanyak 5 g/liter setiap minggu.'},{judul:'Susulan II (Saat Berbuah)',isi:'KNO3 100 kg/ha + Kalsium Boron untuk kualitas buah.'}],
    caraTanam:[{judul:'Penanaman',isi:'Jarak 60x50 cm, 2 benih per lubang, kedalaman 3-5 cm.'},{judul:'Pemasangan Lanjaran',isi:'Pasang lanjaran 150-180 cm saat tanaman mulai merambat.'},{judul:'Pemangkasan',isi:'Pangkas tunas lateral hingga ruas ke-5.'},{judul:'Penyerbukan',isi:'Bantu penyerbukan manual jika kurang lebah.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Kulit hijau mengkilap, ukuran optimal, 35-45 HST.'},{judul:'Cara Panen',isi:'Potong tangkai setiap 2-3 hari, 10-15 buah per tanaman.'},{judul:'Pascapanen',isi:'Simpan di tempat sejuk, tahan 5-7 hari.'}]
  },
  { id:'kacang_panjang', kategori:'sayuran', nama:'Kacang Panjang', emoji:'🫛', deskripsi:'Sayuran polong yang mudah ditanam, kaya protein dan serat.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 10 ton/ha + SP-36 75 kg/ha + KCl 50 kg/ha.'},{judul:'Susulan I (2 Minggu)',isi:'NPK 100 kg/ha atau kocor NPK 3 g/liter.'},{judul:'Susulan II (Saat Berbunga)',isi:'KNO3 75 kg/ha + Boron untuk polong panjang dan lurus.'}],
    caraTanam:[{judul:'Penanaman',isi:'Jarak 60x30 cm, 2-3 benih per lubang, kedalaman 3-4 cm.'},{judul:'Pemasangan Lanjaran',isi:'Pasang lanjaran 150-200 cm saat umur 10-14 hari.'},{judul:'Pengairan',isi:'Siram teratur terutama saat pembungaan.'},{judul:'Pengendalian Hama',isi:'Waspadai kutu daun, thrips, dan penggerek polong.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Polong panjang 40-60 cm, muda dan lentur, 45-55 HST.'},{judul:'Cara Panen',isi:'Petik setiap 2-3 hari, jangan biarkan terlalu tua.'},{judul:'Pascapanen',isi:'Ikat dalam ikatan kecil, simpan di tempat sejuk.'}]
  },

  // BUAH
  { id:'semangka', kategori:'buah', nama:'Semangka', emoji:'🍉', deskripsi:'Buah menyegarkan dengan kandungan air tinggi, bernilai ekonomi tinggi.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 20 ton/ha + SP-36 150 kg/ha + KCl 100 kg/ha.'},{judul:'Susulan I (2-3 Minggu)',isi:'Kocor NPK 16-16-16 sebanyak 10 g/liter setiap minggu.'},{judul:'Susulan II (Saat Berbuah)',isi:'KNO3 merah 200 kg/ha + Kalsium Boron untuk kadar gula.'}],
    caraTanam:[{judul:'Persiapan Lahan',isi:'Bedengan lebar 4-5 m, pasang mulsa plastik hitam perak.'},{judul:'Penanaman',isi:'Jarak 150x60 cm, tanam bibit umur 7-10 hari.'},{judul:'Pemangkasan Sulur',isi:'Pertahankan 1 sulur utama dan 1-2 sulur cabang, pilih 1-2 buah.'},{judul:'Penyerbukan',isi:'Penyerbukan manual pagi hari pukul 06.00-09.00.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Sulur dekat buah kering, suara ketukan berat, 60-75 HST.'},{judul:'Cara Panen',isi:'Potong tangkai sisakan 5-10 cm, angkat hati-hati.'},{judul:'Pascapanen',isi:'Simpan di tempat sejuk, tahan 2-3 minggu.'}]
  },
  { id:'pisang', kategori:'buah', nama:'Pisang', emoji:'🍌', deskripsi:'Buah tropis paling populer, kaya kalium dan energi, produktif sepanjang tahun.',
    pemupukan:[{judul:'Pupuk Dasar (Saat Tanam)',isi:'Kompos 20 kg/lubang + SP-36 200 g + KCl 150 g per lubang.'},{judul:'Susulan I (2-3 Bulan)',isi:'Urea 200 g + NPK 300 g per tanaman, melingkar 50 cm dari batang.'},{judul:'Susulan II (5-6 Bulan)',isi:'KCl 200 g + Urea 150 g per tanaman untuk pembentukan tandan.'}],
    caraTanam:[{judul:'Persiapan Bibit',isi:'Anakan pisang sehat umur 3-4 bulan, tinggi 60-100 cm.'},{judul:'Penanaman',isi:'Lubang 60x60x60 cm, jarak 3x3 m, tanam dan padatkan.'},{judul:'Penjarangan Anakan',isi:'Pertahankan 1-2 anakan per rumpun, cabut sisanya.'},{judul:'Perawatan Tandan',isi:'Bungkus tandan dengan plastik biru, potong jantung pisang.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Sudut buah membulat, warna hijau muda kekuningan, 80-120 HST.'},{judul:'Cara Panen',isi:'Potong tandan sisakan 30 cm tangkai, angkat hati-hati.'},{judul:'Pascapanen',isi:'Simpan di tempat sejuk berventilasi, tahan 1-2 minggu.'}]
  },
  { id:'pepaya', kategori:'buah', nama:'Pepaya', emoji:'🍈', deskripsi:'Buah tropis kaya vitamin C dan enzim papain, cepat berbuah dan produktif.',
    pemupukan:[{judul:'Pupuk Dasar (Saat Tanam)',isi:'Kompos 20 kg/lubang + SP-36 150 g + KCl 100 g per lubang.'},{judul:'Susulan I (1-2 Bulan)',isi:'NPK 16-16-16 sebanyak 200 g per tanaman setiap bulan.'},{judul:'Susulan II (Saat Berbuah)',isi:'KCl 150 g per tanaman per bulan untuk pembesaran buah.'}],
    caraTanam:[{judul:'Persemaian',isi:'Semai di polybag, bibit siap tanam umur 30-45 hari.'},{judul:'Penanaman',isi:'Lubang 60x60x60 cm, jarak 2.5x2.5 m, tanam 2-3 bibit per lubang.'},{judul:'Seleksi Jenis Kelamin',isi:'Pertahankan 1 tanaman betina atau hermafrodit per lubang.'},{judul:'Pengendalian Penyakit',isi:'Waspadai PRSV, busuk akar, dan antraknos.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Kulit menunjukkan garis kuning, 9-12 bulan setelah tanam.'},{judul:'Cara Panen',isi:'Potong tangkai dengan pisau tajam, tangani hati-hati.'},{judul:'Pascapanen',isi:'Simpan di tempat sejuk, tahan 5-7 hari.'}]
  },
  { id:'mangga', kategori:'buah', nama:'Mangga', emoji:'🥭', deskripsi:'Raja buah tropis dengan cita rasa manis, bernilai ekonomi tinggi.',
    pemupukan:[{judul:'Pupuk Tanaman Muda',isi:'Kompos 20 kg/pohon + NPK 16-16-16 sebanyak 300 g setiap 3 bulan.'},{judul:'Pupuk Sebelum Berbunga',isi:'KNO3 putih 500 g + SP-36 300 g per pohon, 2 bulan sebelum berbunga.'},{judul:'Pupuk Saat Berbuah',isi:'KCl 400 g + Urea 200 g per pohon saat buah sebesar kelereng.'}],
    caraTanam:[{judul:'Pemilihan Bibit',isi:'Bibit okulasi varietas Harum Manis, Gedong Gincu, atau Arumanis.'},{judul:'Penanaman',isi:'Lubang 100x100x100 cm, jarak 8x8 m, isi campuran tanah dan kompos.'},{judul:'Pemangkasan Bentuk',isi:'Bentuk kerangka pohon ideal dengan 3-4 cabang utama.'},{judul:'Perangsangan Bunga',isi:'Stres air 2-3 bulan, lalu siram KNO3 atau semprot paklobutrazol.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Bahu buah penuh, warna berubah, aroma harum, 3-5 bulan setelah bunga.'},{judul:'Cara Panen',isi:'Petik dengan galah berkeranjang, sisakan tangkai 5-10 cm.'},{judul:'Pascapanen',isi:'Simpan di tempat sejuk, tahan 2-3 minggu.'}]
  },
  { id:'jeruk', kategori:'buah', nama:'Jeruk', emoji:'🍊', deskripsi:'Buah citrus kaya vitamin C, populer sebagai buah segar dan minuman.',
    pemupukan:[{judul:'Pupuk Tanaman Muda',isi:'Kompos 20 kg/pohon + NPK 15-15-15 sebanyak 200 g setiap 3 bulan.'},{judul:'Pupuk Tanaman Produktif',isi:'NPK 16-16-16 sebanyak 500 g + KCl 300 g per pohon per tahun.'},{judul:'Pupuk Saat Berbuah',isi:'KNO3 merah 400 g + Kalsium Boron per pohon untuk kualitas buah.'}],
    caraTanam:[{judul:'Pemilihan Bibit',isi:'Bibit okulasi bebas CVPD, varietas Siam Madu atau Keprok Batu 55.'},{judul:'Penanaman',isi:'Lubang 60x60x60 cm, jarak 5x5 m, pasang ajir.'},{judul:'Pemangkasan',isi:'Pangkas rutin untuk tajuk ideal dan sirkulasi udara baik.'},{judul:'Pengendalian CVPD',isi:'Kendalikan Diaphorina citri dengan insektisida sistemik rutin.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Warna kulit berubah sesuai varietas, buah berat, aroma harum.'},{judul:'Cara Panen',isi:'Petik beserta tangkai pendek menggunakan gunting.'},{judul:'Pascapanen',isi:'Sortir berdasarkan ukuran, simpan di tempat sejuk.'}]
  },
  { id:'jambu', kategori:'buah', nama:'Jambu Biji', emoji:'🍐', deskripsi:'Buah tropis kaya vitamin C, mudah dibudidayakan dan produktif sepanjang tahun.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 15 kg/pohon + NPK 16-16-16 sebanyak 200 g setiap 3 bulan.'},{judul:'Pupuk Tanaman Produktif',isi:'NPK 300 g + KCl 200 g per pohon per tahun.'},{judul:'Pupuk Saat Berbuah',isi:'KNO3 200 g + Kalsium Boron per pohon untuk pembesaran buah.'}],
    caraTanam:[{judul:'Pemilihan Bibit',isi:'Bibit cangkok atau okulasi varietas Bangkok, Crystal, atau Getas Merah.'},{judul:'Penanaman',isi:'Lubang 60x60x60 cm, jarak 4x4 m.'},{judul:'Pemangkasan',isi:'Pangkas rutin untuk tajuk terbuka dan memudahkan perawatan.'},{judul:'Pembungkusan Buah',isi:'Bungkus buah dengan plastik saat sebesar bola pingpong.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Warna kulit hijau muda atau kuning, aroma harum, 3-4 bulan setelah bunga.'},{judul:'Cara Panen',isi:'Petik dengan tangan atau gunting setiap 2-3 hari.'},{judul:'Pascapanen',isi:'Sortir, simpan di tempat sejuk, tahan 3-5 hari.'}]
  },

  // PERKEBUNAN
  { id:'kelapa_sawit', kategori:'perkebunan', nama:'Kelapa Sawit', emoji:'🌴', deskripsi:'Tanaman perkebunan penghasil minyak nabati terbesar, komoditas ekspor utama Indonesia.',
    pemupukan:[{judul:'Pupuk TBM',isi:'NPK 12-12-17-2 sebanyak 500 g/pohon/tahun, ditingkatkan bertahap.'},{judul:'Pupuk TM',isi:'Urea 1-2 kg + SP-36 0.5-1 kg + KCl 1.5-2 kg + Kieserit 0.5 kg per pohon per tahun.'},{judul:'Pupuk Boron',isi:'Boron 50-100 g/pohon/tahun untuk mencegah buah abnormal.'}],
    caraTanam:[{judul:'Persiapan Lahan',isi:'Buat lubang 60x60x60 cm, jarak 9x9 m sistem segitiga sama sisi.'},{judul:'Penanaman',isi:'Tanam bibit umur 12-14 bulan pada awal musim hujan.'},{judul:'Perawatan Awal',isi:'Siangi piringan diameter 2 m, kendalikan gulma di gawangan.'},{judul:'Penunasan',isi:'Pangkas pelepah tua secara teratur, pertahankan 40-48 pelepah aktif.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'5-10 brondolan lepas per tandan, warna buah oranye kemerahan.'},{judul:'Cara Panen',isi:'Potong tandan dengan egrek atau dodos, kumpulkan brondolan.'},{judul:'Pascapanen',isi:'Kirim TBS ke pabrik dalam 24 jam untuk mencegah kenaikan ALB.'}]
  },
  { id:'kopi', kategori:'perkebunan', nama:'Kopi', emoji:'☕', deskripsi:'Tanaman perkebunan penghasil minuman populer dunia, komoditas ekspor unggulan Indonesia.',
    pemupukan:[{judul:'Pupuk Tanaman Muda',isi:'NPK 15-15-15 sebanyak 100-300 g/pohon/tahun, ditingkatkan bertahap.'},{judul:'Pupuk Tanaman Produktif',isi:'Urea 200 g + SP-36 150 g + KCl 200 g per pohon per tahun, 2 kali pemberian.'},{judul:'Pupuk Organik',isi:'Kompos kulit kopi 5-10 kg/pohon/tahun.'}],
    caraTanam:[{judul:'Pemilihan Bibit',isi:'Bibit varietas unggul Robusta (BP 42) atau Arabika (Andungsari).'},{judul:'Penanaman',isi:'Lubang 60x60x60 cm, jarak 2.5x2.5 m, tanam awal musim hujan.'},{judul:'Pemangkasan',isi:'Pangkas bentuk dan produksi untuk kerangka pohon ideal.'},{judul:'Tanaman Penaung',isi:'Tanam lamtoro atau sengon sebagai pohon penaung.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Buah berwarna merah penuh (cherry merah).'},{judul:'Cara Panen',isi:'Petik selektif hanya yang merah, setiap 1-2 minggu.'},{judul:'Pascapanen',isi:'Proses basah atau kering, jemur hingga kadar air 12%.'}]
  },
  { id:'kakao', kategori:'perkebunan', nama:'Kakao', emoji:'🍫', deskripsi:'Tanaman perkebunan bahan baku cokelat, Indonesia produsen kakao terbesar ketiga dunia.',
    pemupukan:[{judul:'Pupuk Tanaman Muda',isi:'NPK 12-12-17 sebanyak 100-200 g/pohon setiap 3 bulan.'},{judul:'Pupuk Tanaman Produktif',isi:'Urea 150 g + SP-36 100 g + KCl 150 g per pohon per tahun.'},{judul:'Pupuk Organik',isi:'Kompos kulit buah kakao 5-10 kg/pohon/tahun.'}],
    caraTanam:[{judul:'Pemilihan Bibit',isi:'Bibit hibrida klon unggul TSH 858, ICS 60, atau Sulawesi 1.'},{judul:'Penanaman',isi:'Lubang 60x60x60 cm, jarak 3x3 m, di bawah naungan 50-70%.'},{judul:'Pemangkasan',isi:'Pangkas bentuk, pemeliharaan, dan sanitasi secara rutin.'},{judul:'Pengendalian PBK',isi:'Panen sering, sanitasi kebun, pembungkusan buah, insektisida.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Warna kulit berubah, alur buah jelas, bunyi berderak saat diketuk.'},{judul:'Cara Panen',isi:'Potong tangkai dengan parang atau gunting, setiap 1-2 minggu.'},{judul:'Pascapanen',isi:'Fermentasi 5-7 hari, jemur hingga kadar air 7-8%.'}]
  },
  { id:'teh', kategori:'perkebunan', nama:'Teh', emoji:'🍵', deskripsi:'Tanaman perkebunan dataran tinggi penghasil minuman teh, komoditas ekspor penting.',
    pemupukan:[{judul:'Pupuk TBM',isi:'NPK 15-15-15 sebanyak 200-400 g/pohon/tahun.'},{judul:'Pupuk TM',isi:'Urea 300 kg/ha + SP-36 150 kg/ha + KCl 200 kg/ha per tahun, 3-4 kali pemberian.'},{judul:'Pupuk Organik',isi:'Kompos atau pupuk kandang 5-10 ton/ha/tahun.'}],
    caraTanam:[{judul:'Pemilihan Bibit',isi:'Bibit stek klon unggul TRI 2025, GMB 7, atau Gambung 7.'},{judul:'Penanaman',isi:'Lubang 45x45x45 cm, jarak 120x75 cm, ketinggian 800-2000 mdpl.'},{judul:'Pembentukan Bidang Petik',isi:'Pemangkasan centering untuk bidang petik rata pada 45-60 cm.'},{judul:'Pemangkasan Produksi',isi:'Pangkas setiap 3-5 tahun untuk meremajakan tanaman.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Pucuk p+2 atau p+3, interval petikan 7-14 hari.'},{judul:'Cara Panen',isi:'Petik pucuk dengan tangan menggunakan teknik petikan halus.'},{judul:'Pascapanen',isi:'Kirim ke pabrik dalam 4-6 jam setelah pemetikan.'}]
  },
  { id:'karet', kategori:'perkebunan', nama:'Karet', emoji:'🌳', deskripsi:'Tanaman perkebunan penghasil lateks untuk industri karet, komoditas ekspor strategis.',
    pemupukan:[{judul:'Pupuk TBM',isi:'NPK 15-15-6-4 sebanyak 150-300 g/pohon/tahun, ditingkatkan bertahap.'},{judul:'Pupuk TM',isi:'Urea 200 kg/ha + SP-36 100 kg/ha + KCl 150 kg/ha + Kieserit 75 kg/ha per tahun.'},{judul:'Pupuk Mikro',isi:'Pupuk mikro Cu, Zn, dan B setiap 2 tahun sekali.'}],
    caraTanam:[{judul:'Pemilihan Bibit',isi:'Bibit okulasi klon unggul PB 260, RRIM 600, atau BPM 24.'},{judul:'Penanaman',isi:'Lubang 60x60x60 cm, jarak 6x3 m, tanam awal musim hujan.'},{judul:'Perawatan Awal',isi:'Siangi piringan dan gawangan, kendalikan gulma.'},{judul:'Persiapan Penyadapan',isi:'Siap disadap saat lilit batang 45 cm pada ketinggian 100 cm.'}],
    panen:[{judul:'Teknik Penyadapan',isi:'Irisan miring 30° dari kiri atas ke kanan bawah, kedalaman 1-1.5 mm.'},{judul:'Sistem Penyadapan',isi:'Sistem S/2 d2 atau S/2 d3, aplikasikan stimulan Ethrel.'},{judul:'Pascapanen',isi:'Kumpulkan lateks setiap pagi, olah menjadi sheet atau lump.'}]
  },

  // OBAT
  { id:'jahe', kategori:'obat', nama:'Jahe', emoji:'🫚', deskripsi:'Tanaman rimpang berkhasiat obat dan bumbu masak, permintaan pasar terus meningkat.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 20 ton/ha + SP-36 100 kg/ha + KCl 75 kg/ha.'},{judul:'Susulan I (2-3 BST)',isi:'Urea 100 kg/ha + NPK 150 kg/ha di sekitar tanaman.'},{judul:'Susulan II (5-6 BST)',isi:'KCl 75 kg/ha + Urea 50 kg/ha untuk pembesaran rimpang.'}],
    caraTanam:[{judul:'Persiapan Bibit',isi:'Rimpang sehat 40-60 g dengan 2-3 mata tunas, jemur 1-2 hari.'},{judul:'Penanaman',isi:'Lubang 5-7 cm, jarak 40x25 cm, mata tunas menghadap atas.'},{judul:'Pembumbunan',isi:'Bumbun setiap 2-3 bulan untuk merangsang rimpang baru.'},{judul:'Pengendalian Penyakit',isi:'Waspadai layu bakteri dan busuk rimpang.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Daun menguning dan mengering, batang semu rebah, umur 8-12 bulan.'},{judul:'Cara Panen',isi:'Cangkul tanah, angkat rimpang hati-hati, bersihkan tanah.'},{judul:'Pascapanen',isi:'Cuci, jemur 1-2 hari, simpan di tempat sejuk dan kering.'}]
  },
  { id:'kunyit', kategori:'obat', nama:'Kunyit', emoji:'🟡', deskripsi:'Rimpang kuning kaya kurkumin, berkhasiat antiinflamasi dan antioksidan kuat.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 15-20 ton/ha + SP-36 75 kg/ha + KCl 50 kg/ha.'},{judul:'Susulan I (2 BST)',isi:'Urea 75 kg/ha + NPK 100 kg/ha di sekitar tanaman.'},{judul:'Susulan II (4-5 BST)',isi:'KCl 50 kg/ha untuk pembesaran rimpang dan kandungan kurkumin.'}],
    caraTanam:[{judul:'Persiapan Bibit',isi:'Rimpang 20-30 g dengan 2-3 mata tunas, angin-anginkan 1-2 hari.'},{judul:'Penanaman',isi:'Lubang 5-7 cm, jarak 40x25 cm, tutup tanah halus.'},{judul:'Pembumbunan',isi:'Bumbun setiap 2-3 bulan, tambahkan mulsa organik.'},{judul:'Pengairan',isi:'Siram teratur, jaga kelembaban tanah.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Daun menguning dan mengering, batang semu rebah, umur 8-12 bulan.'},{judul:'Cara Panen',isi:'Cangkul tanah, angkat rimpang, pisahkan rimpang induk dan anak.'},{judul:'Pascapanen',isi:'Cuci, iris tipis, jemur atau olah menjadi bubuk kunyit.'}]
  },
  { id:'temulawak', kategori:'obat', nama:'Temulawak', emoji:'🌿', deskripsi:'Tanaman obat asli Indonesia, berkhasiat untuk kesehatan hati dan meningkatkan nafsu makan.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 15 ton/ha + SP-36 75 kg/ha.'},{judul:'Susulan (2-3 BST)',isi:'Urea 50 kg/ha + KCl 50 kg/ha di sekitar tanaman.'},{judul:'Pupuk Organik Cair',isi:'Semprotkan POC atau MOL setiap bulan.'}],
    caraTanam:[{judul:'Persiapan Bibit',isi:'Rimpang 30-50 g dengan 2-3 mata tunas, angin-anginkan 1-2 hari.'},{judul:'Penanaman',isi:'Lubang 7-10 cm, jarak 50x40 cm, di tempat teduh parsial.'},{judul:'Naungan',isi:'Tumbuh baik di bawah naungan 30-50%.'},{judul:'Pembumbunan',isi:'Bumbun setiap 2-3 bulan untuk rimpang baru.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Daun menguning dan mengering, umur 10-12 bulan.'},{judul:'Cara Panen',isi:'Cangkul tanah, angkat rimpang hati-hati.'},{judul:'Pascapanen',isi:'Cuci, iris, jemur atau olah menjadi simplisia atau ekstrak.'}]
  },
  { id:'lidah_buaya', kategori:'obat', nama:'Lidah Buaya', emoji:'🌵', deskripsi:'Tanaman sukulen serbaguna untuk kesehatan kulit, rambut, dan pencernaan.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 10 ton/ha + SP-36 50 kg/ha + KCl 50 kg/ha.'},{judul:'Susulan (Setiap 3 Bulan)',isi:'NPK 15-15-15 sebanyak 50-100 g/tanaman.'},{judul:'Pupuk Organik',isi:'Kompos 2-3 kg/tanaman setiap 6 bulan.'}],
    caraTanam:[{judul:'Persiapan Bibit',isi:'Anakan (offset) dengan 4-5 daun dan akar cukup, angin-anginkan 1-2 hari.'},{judul:'Persiapan Lahan',isi:'Drainase sangat baik, campurkan pasir ke tanah.'},{judul:'Penanaman',isi:'Jarak 60x60 cm, leher akar di atas permukaan tanah.'},{judul:'Pengairan',isi:'Siram 1-2 kali seminggu, hindari genangan.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Daun tebal dan panjang 30-50 cm, umur 8-12 bulan.'},{judul:'Cara Panen',isi:'Potong daun dari pangkal, 3-4 daun per tanaman per bulan.'},{judul:'Pascapanen',isi:'Kupas kulit hijau, ambil gel bening untuk digunakan.'}]
  },
  { id:'sambiloto', kategori:'obat', nama:'Sambiloto', emoji:'🌱', deskripsi:'Tanaman obat pahit berkhasiat untuk meningkatkan imunitas dan mengatasi infeksi.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 10 ton/ha + SP-36 50 kg/ha.'},{judul:'Susulan (1 Bulan)',isi:'Urea 50 kg/ha + KCl 50 kg/ha, satu kali pemberian.'},{judul:'Pupuk Organik Cair',isi:'Semprotkan POC setiap 2 minggu.'}],
    caraTanam:[{judul:'Persemaian',isi:'Semai benih di tray, bibit siap tanam umur 3-4 minggu.'},{judul:'Penanaman',isi:'Jarak 30x30 cm, toleran naungan parsial.'},{judul:'Pengairan',isi:'Siram teratur, relatif tahan kekeringan.'},{judul:'Pemangkasan',isi:'Pangkas ujung untuk mendorong cabang lateral lebih banyak.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Umur 3-4 bulan saat mulai berbunga, kandungan andrografolid tertinggi.'},{judul:'Cara Panen',isi:'Potong batang sisakan 15-20 cm, bisa dipanen 2-3 kali.'},{judul:'Pascapanen',isi:'Cuci, rajang, jemur di tempat teduh, simpan dalam wadah kedap udara.'}]
  },

  // HIAS
  { id:'mawar', kategori:'hias', nama:'Mawar', emoji:'🌹', deskripsi:'Ratu bunga hias dengan keindahan dan aroma yang memukau, bernilai ekonomi tinggi.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 20 ton/ha + SP-36 150 kg/ha + KCl 100 kg/ha.'},{judul:'Susulan Rutin',isi:'Kocor NPK 16-16-16 sebanyak 5 g/liter setiap minggu.'},{judul:'Pupuk Saat Berbunga',isi:'KNO3 merah 150 kg/ha + Kalsium Boron untuk bunga lebat.'}],
    caraTanam:[{judul:'Persiapan Bibit',isi:'Stek batang 15-20 cm dengan 3-4 ruas, celupkan dalam hormon perakaran.'},{judul:'Penanaman',isi:'Media tanah:kompos:pasir (1:1:1), jarak 60x60 cm.'},{judul:'Pemangkasan',isi:'Pangkas setelah bunga layu, potong 1/3 panjang cabang.'},{judul:'Pengendalian Hama',isi:'Waspadai kutu daun, tungau merah, dan thrips.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Kuncup membuka 1/4 hingga 1/2 bagian.'},{judul:'Cara Panen',isi:'Potong pagi hari, miring 45°, panjang tangkai 40-60 cm.'},{judul:'Pascapanen',isi:'Masukkan ke air bersih, simpan di 4-8°C, tahan 7-14 hari.'}]
  },
  { id:'anggrek', kategori:'hias', nama:'Anggrek', emoji:'🌸', deskripsi:'Bunga hias eksotis dengan keindahan tak tertandingi, bernilai ekonomi sangat tinggi.',
    pemupukan:[{judul:'Pupuk Vegetatif',isi:'NPK 30-10-10 atau Growmore biru 1-2 g/liter setiap minggu.'},{judul:'Pupuk Generatif',isi:'NPK 10-30-20 atau Growmore merah saat tanaman dewasa.'},{judul:'Pupuk Daun dan Mikro',isi:'Semprotkan pupuk daun Ca, Mg, Fe setiap 2 minggu.'}],
    caraTanam:[{judul:'Media Tanam',isi:'Pakis cacah, arang kayu, atau campuran keduanya.'},{judul:'Penanaman',isi:'Pot berlubang banyak, jangan tanam terlalu dalam.'},{judul:'Pencahayaan',isi:'Cahaya terang tidak langsung, naungan 50-70%.'},{judul:'Pengairan',isi:'Siram 2-3 kali seminggu, biarkan media mengering sedikit.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'2-3 bunga terbawah sudah mekar sempurna.'},{judul:'Cara Panen',isi:'Potong tangkai dengan gunting steril, miring 45°.'},{judul:'Pascapanen',isi:'Simpan di 15-18°C, tahan 2-4 minggu.'}]
  },
  { id:'melati', kategori:'hias', nama:'Melati', emoji:'🤍', deskripsi:'Bunga nasional Indonesia dengan aroma harum khas, digunakan untuk upacara dan parfum.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 15 ton/ha + SP-36 100 kg/ha + KCl 75 kg/ha.'},{judul:'Susulan Rutin',isi:'NPK 16-16-16 sebanyak 100 g/tanaman setiap bulan.'},{judul:'Pupuk Saat Berbunga',isi:'KNO3 100 g/tanaman + Boron untuk bunga lebat.'}],
    caraTanam:[{judul:'Persiapan Bibit',isi:'Stek batang semi-kayu 15-20 cm dengan 3-4 ruas.'},{judul:'Penanaman',isi:'Jarak 100x100 cm, sinar matahari penuh, drainase baik.'},{judul:'Pemangkasan',isi:'Pangkas setelah panen untuk merangsang tunas baru.'},{judul:'Pengairan',isi:'Siram teratur terutama musim kemarau.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Kuncup membesar belum mekar, dipetik sore hari.'},{judul:'Cara Panen',isi:'Petik kuncup satu per satu pukul 15.00-18.00.'},{judul:'Pascapanen',isi:'Simpan di tempat sejuk lembab, tahan 1-2 hari.'}]
  },
  { id:'kamboja', kategori:'hias', nama:'Kamboja', emoji:'🌺', deskripsi:'Tanaman hias tropis dengan bunga harum berwarna-warni, populer sebagai tanaman taman.',
    pemupukan:[{judul:'Pupuk Dasar (Saat Tanam)',isi:'Kompos 5 kg/lubang + SP-36 100 g + KCl 75 g per lubang.'},{judul:'Susulan (Setiap 3 Bulan)',isi:'NPK 15-15-15 sebanyak 100-200 g/tanaman.'},{judul:'Pupuk Saat Berbunga',isi:'KNO3 100 g/tanaman + Boron untuk bunga cerah.'}],
    caraTanam:[{judul:'Persiapan Stek',isi:'Potong batang 30-50 cm, biarkan getah mengering 3-7 hari.'},{judul:'Penanaman',isi:'Media tanah:pasir (1:1), jarak 2x2 m untuk taman.'},{judul:'Pengairan',isi:'Siram 2-3 kali seminggu untuk tanaman muda.'},{judul:'Pemangkasan',isi:'Pangkas untuk membentuk tajuk indah dan merangsang bunga.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Bunga mekar sempurna dengan warna cerah dan aroma harum.'},{judul:'Cara Panen',isi:'Petik bunga satu per satu pagi hari.'},{judul:'Pascapanen',isi:'Tahan 1-2 hari, bisa dikeringkan untuk bunga kering.'}]
  },
  { id:'bougenville', kategori:'hias', nama:'Bougenville', emoji:'💐', deskripsi:'Tanaman hias merambat dengan bunga berwarna-warni yang mencolok, tahan panas.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 5 kg/tanaman + SP-36 100 g + KCl 75 g saat tanam.'},{judul:'Susulan (Setiap 2-3 Bulan)',isi:'NPK 15-15-15 sebanyak 100-150 g/tanaman.'},{judul:'Stres Air untuk Pembungaan',isi:'Kurangi penyiraman 2-3 minggu, lalu beri KNO3 100 g/tanaman.'}],
    caraTanam:[{judul:'Persiapan Bibit',isi:'Stek batang semi-kayu 15-20 cm, celupkan dalam hormon perakaran.'},{judul:'Penanaman',isi:'Pot besar atau lahan, sinar matahari penuh minimal 6 jam.'},{judul:'Pemasangan Rambatan',isi:'Pasang pagar atau teralis, arahkan cabang secara teratur.'},{judul:'Pemangkasan',isi:'Pangkas setelah bunga layu untuk pembungaan berikutnya.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Braktea berwarna cerah dan mekar sempurna.'},{judul:'Cara Panen',isi:'Potong cabang berbunga 20-30 cm, masukkan ke air.'},{judul:'Pascapanen',isi:'Tahan 5-7 hari dalam vas, bisa dikeringkan untuk dekorasi.'}]
  }
,
  // TAMBAHAN PANGAN
  { id:'sorgum', kategori:'pangan', nama:'Sorgum', emoji:'🌾', deskripsi:'Tanaman serealia tahan kekeringan, alternatif pangan dan pakan ternak.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'NPK 15-15-15 sebanyak 150 kg/ha + kompos 5 ton/ha.'},{judul:'Susulan I (14-21 HST)',isi:'Urea 100 kg/ha di samping tanaman.'},{judul:'Susulan II (35-40 HST)',isi:'Urea 75 kg/ha + KCl 50 kg/ha saat pembungaan.'}],
    caraTanam:[{judul:'Penanaman',isi:'Jarak 70x20 cm, 2-3 benih per lubang, kedalaman 3-5 cm.'},{judul:'Penjarangan',isi:'Sisakan 1-2 tanaman terkuat per lubang umur 10-14 HST.'},{judul:'Pengairan',isi:'Tahan kekeringan, siram saat fase kritis berbunga.'},{judul:'Pengendalian Hama',isi:'Waspadai burung saat biji mulai masak.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Malai sudah mengering, biji keras, umur 90-110 HST.'},{judul:'Cara Panen',isi:'Potong malai, jemur 3-5 hari, rontokkan biji.'},{judul:'Pascapanen',isi:'Jemur hingga kadar air 12-14%, simpan di tempat kering.'}]
  },
  { id:'gandum', kategori:'pangan', nama:'Gandum', emoji:'🌾', deskripsi:'Tanaman serealia dataran tinggi, bahan baku tepung terigu.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'NPK 15-15-15 sebanyak 200 kg/ha + kompos 10 ton/ha.'},{judul:'Susulan I (21-28 HST)',isi:'Urea 100 kg/ha untuk pertumbuhan vegetatif.'},{judul:'Susulan II (45-50 HST)',isi:'Urea 75 kg/ha saat pembentukan malai.'}],
    caraTanam:[{judul:'Persiapan Lahan',isi:'Olah tanah di ketinggian 1000-3000 mdpl, pH 6.0-7.0.'},{judul:'Penanaman',isi:'Sebar benih 100-120 kg/ha atau jarak 20x10 cm.'},{judul:'Pengairan',isi:'Siram saat perkecambahan dan pembungaan.'},{judul:'Pengendalian Penyakit',isi:'Waspadai karat daun dan embun tepung.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Malai menguning, biji keras, umur 90-120 HST.'},{judul:'Cara Panen',isi:'Potong batang, jemur, rontokkan biji.'},{judul:'Pascapanen',isi:'Jemur hingga kadar air 12%, simpan di tempat kering.'}]
  },
  // TAMBAHAN SAYURAN
  { id:'brokoli', kategori:'sayuran', nama:'Brokoli', emoji:'🥦', deskripsi:'Sayuran crucifer kaya vitamin C dan antioksidan, cocok di dataran tinggi.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 20 ton/ha + SP-36 150 kg/ha + KCl 100 kg/ha.'},{judul:'Susulan I (2-3 Minggu)',isi:'Urea 100 kg/ha + NPK 150 kg/ha.'},{judul:'Susulan II (Saat Membentuk Krop)',isi:'KNO3 100 kg/ha + Boron untuk krop yang padat.'}],
    caraTanam:[{judul:'Persemaian',isi:'Semai di tray, bibit siap tanam umur 25-30 hari.'},{judul:'Penanaman',isi:'Jarak 60x50 cm di dataran tinggi 700-2000 mdpl.'},{judul:'Pengairan',isi:'Siram teratur, brokoli butuh kelembaban tinggi.'},{judul:'Pengendalian Hama',isi:'Waspadai ulat daun kubis dan kutu daun.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Krop padat hijau tua, sebelum bunga mekar, umur 60-80 HST.'},{judul:'Cara Panen',isi:'Potong krop beserta 10-15 cm tangkai.'},{judul:'Pascapanen',isi:'Simpan di lemari pendingin, tahan 1-2 minggu.'}]
  },
  { id:'kubis', kategori:'sayuran', nama:'Kubis', emoji:'🥬', deskripsi:'Sayuran krop populer kaya vitamin K dan C, mudah dibudidayakan.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 20 ton/ha + SP-36 150 kg/ha + KCl 100 kg/ha.'},{judul:'Susulan I (2-3 Minggu)',isi:'Urea 100 kg/ha + NPK 150 kg/ha.'},{judul:'Susulan II (Saat Membentuk Krop)',isi:'KNO3 100 kg/ha untuk krop yang padat dan berat.'}],
    caraTanam:[{judul:'Persemaian',isi:'Semai di tray, bibit siap tanam umur 25-30 hari.'},{judul:'Penanaman',isi:'Jarak 60x50 cm, cocok di dataran menengah-tinggi.'},{judul:'Pengairan',isi:'Siram teratur, jaga kelembaban tanah.'},{judul:'Pengendalian Hama',isi:'Waspadai ulat daun kubis dan busuk hitam.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Krop padat dan keras saat ditekan, umur 60-90 HST.'},{judul:'Cara Panen',isi:'Potong pangkal krop dengan pisau tajam.'},{judul:'Pascapanen',isi:'Simpan di tempat sejuk, tahan 2-4 minggu.'}]
  },
  { id:'selada', kategori:'sayuran', nama:'Selada', emoji:'🥗', deskripsi:'Sayuran daun segar untuk salad, cepat panen dan cocok untuk hidroponik.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 10 ton/ha + NPK 100 kg/ha.'},{judul:'Susulan (7-10 HST)',isi:'Kocor NPK 3 g/liter setiap minggu.'},{judul:'Pupuk Organik Cair',isi:'Semprotkan POC setiap 5-7 hari.'}],
    caraTanam:[{judul:'Persemaian',isi:'Semai di tray, bibit siap tanam umur 14-21 hari.'},{judul:'Penanaman',isi:'Jarak 25x25 cm atau 30x20 cm.'},{judul:'Pengairan',isi:'Siram 2 kali sehari, jaga kelembaban.'},{judul:'Pengendalian Hama',isi:'Waspadai ulat dan siput.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Daun sudah penuh dan segar, umur 30-45 HST.'},{judul:'Cara Panen',isi:'Cabut seluruh tanaman atau petik daun luar.'},{judul:'Pascapanen',isi:'Cuci bersih, simpan di lemari pendingin.'}]
  },
  { id:'buncis', kategori:'sayuran', nama:'Buncis', emoji:'🫘', deskripsi:'Sayuran polong bergizi tinggi, kaya protein dan serat.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 10 ton/ha + SP-36 75 kg/ha + KCl 50 kg/ha.'},{judul:'Susulan I (2 Minggu)',isi:'NPK 100 kg/ha atau kocor NPK 3 g/liter.'},{judul:'Susulan II (Saat Berbunga)',isi:'KNO3 75 kg/ha + Boron untuk polong berkualitas.'}],
    caraTanam:[{judul:'Penanaman',isi:'Jarak 40x20 cm, 2 benih per lubang, kedalaman 3-4 cm.'},{judul:'Pemasangan Lanjaran',isi:'Pasang lanjaran 100-150 cm untuk buncis merambat.'},{judul:'Pengairan',isi:'Siram teratur terutama saat pembungaan.'},{judul:'Pengendalian Hama',isi:'Waspadai kutu daun dan penggerek polong.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Polong muda lurus dan renyah, 45-55 HST.'},{judul:'Cara Panen',isi:'Petik setiap 2-3 hari sekali.'},{judul:'Pascapanen',isi:'Simpan di lemari pendingin, tahan 5-7 hari.'}]
  },
  { id:'labu_siam', kategori:'sayuran', nama:'Labu Siam', emoji:'🥦', deskripsi:'Sayuran buah yang mudah tumbuh, kaya air dan serat.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 15 ton/ha + NPK 150 kg/ha.'},{judul:'Susulan I (2-3 Minggu)',isi:'Urea 75 kg/ha + KCl 50 kg/ha.'},{judul:'Susulan II (Saat Berbuah)',isi:'NPK 100 kg/ha untuk produksi buah yang optimal.'}],
    caraTanam:[{judul:'Penanaman',isi:'Tanam buah langsung sebagai bibit, jarak 2x2 m.'},{judul:'Pemasangan Rambatan',isi:'Pasang para-para atau teralis untuk rambatan.'},{judul:'Pemangkasan',isi:'Pangkas cabang berlebih untuk sirkulasi udara.'},{judul:'Pengairan',isi:'Siram teratur, labu siam butuh air cukup.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Buah muda ukuran 10-15 cm, kulit masih halus.'},{judul:'Cara Panen',isi:'Petik setiap 3-5 hari sekali.'},{judul:'Pascapanen',isi:'Simpan di tempat sejuk, tahan 1-2 minggu.'}]
  },
  // TAMBAHAN BUAH
  { id:'rambutan', kategori:'buah', nama:'Rambutan', emoji:'🍈', deskripsi:'Buah tropis berbulu khas Indonesia, manis dan menyegarkan.',
    pemupukan:[{judul:'Pupuk Tanaman Muda',isi:'Kompos 20 kg/pohon + NPK 200 g setiap 3 bulan.'},{judul:'Pupuk Sebelum Berbunga',isi:'KNO3 putih 400 g + SP-36 200 g per pohon.'},{judul:'Pupuk Saat Berbuah',isi:'KCl 300 g + Urea 150 g per pohon.'}],
    caraTanam:[{judul:'Pemilihan Bibit',isi:'Bibit okulasi atau cangkok dari varietas Rapiah atau Lebak Bulus.'},{judul:'Penanaman',isi:'Lubang 60x60x60 cm, jarak 8x8 m.'},{judul:'Pemangkasan',isi:'Bentuk tajuk ideal dengan 3-4 cabang utama.'},{judul:'Perangsangan Bunga',isi:'Stres air 2-3 bulan untuk merangsang pembungaan.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Rambut buah berwarna merah atau kuning cerah, 3-4 bulan setelah bunga.'},{judul:'Cara Panen',isi:'Petik tandan buah, tangani hati-hati.'},{judul:'Pascapanen',isi:'Simpan di tempat sejuk, tahan 5-7 hari.'}]
  },
  { id:'durian', kategori:'buah', nama:'Durian', emoji:'🍈', deskripsi:'Raja buah dengan aroma khas dan rasa manis legit, bernilai ekonomi sangat tinggi.',
    pemupukan:[{judul:'Pupuk Tanaman Muda',isi:'Kompos 30 kg/pohon + NPK 300 g setiap 3 bulan.'},{judul:'Pupuk Sebelum Berbunga',isi:'KNO3 putih 600 g + SP-36 400 g per pohon.'},{judul:'Pupuk Saat Berbuah',isi:'KCl 500 g + Urea 200 g per pohon.'}],
    caraTanam:[{judul:'Pemilihan Bibit',isi:'Bibit okulasi varietas Monthong, Musang King, atau D24.'},{judul:'Penanaman',isi:'Lubang 100x100x100 cm, jarak 10x10 m.'},{judul:'Pemangkasan',isi:'Bentuk tajuk piramida dengan 3-4 cabang utama.'},{judul:'Pengendalian Hama',isi:'Waspadai penggerek batang dan busuk akar.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Aroma harum kuat, tangkai buah mulai mengering, 3-4 bulan setelah bunga.'},{judul:'Cara Panen',isi:'Biarkan jatuh sendiri atau potong tangkai saat matang.'},{judul:'Pascapanen',isi:'Simpan di tempat sejuk, konsumsi dalam 3-5 hari setelah matang.'}]
  },
  { id:'nanas', kategori:'buah', nama:'Nanas', emoji:'🍍', deskripsi:'Buah tropis kaya vitamin C dan enzim bromelain, produktif sepanjang tahun.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 10 ton/ha + NPK 15-15-15 sebanyak 200 kg/ha.'},{judul:'Susulan I (2-3 BST)',isi:'Urea 150 kg/ha + KCl 100 kg/ha.'},{judul:'Susulan II (Saat Berbuah)',isi:'KNO3 150 kg/ha untuk pembesaran buah.'}],
    caraTanam:[{judul:'Persiapan Bibit',isi:'Gunakan mahkota, tunas batang, atau ratun dari tanaman induk.'},{judul:'Penanaman',isi:'Jarak 60x30 cm atau 90x30 cm, tanam tegak.'},{judul:'Perangsangan Bunga',isi:'Semprot Ethrel atau asap karbit untuk menyeragamkan pembungaan.'},{judul:'Pengairan',isi:'Nanas tahan kekeringan, siram saat musim kemarau panjang.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Warna kulit berubah kuning 1/3 bagian, aroma harum, 12-15 BST.'},{judul:'Cara Panen',isi:'Potong tangkai buah dengan pisau tajam.'},{judul:'Pascapanen',isi:'Simpan di tempat sejuk, tahan 1-2 minggu.'}]
  },
  // TAMBAHAN PERKEBUNAN
  { id:'vanili', kategori:'perkebunan', nama:'Vanili', emoji:'🌿', deskripsi:'Tanaman rempah penghasil vanillin, komoditas ekspor bernilai sangat tinggi.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 10 kg/tanaman + NPK 100 g saat tanam.'},{judul:'Susulan Rutin',isi:'NPK 15-15-15 sebanyak 50-100 g/tanaman setiap 3 bulan.'},{judul:'Pupuk Organik',isi:'Siram POC setiap bulan untuk pertumbuhan optimal.'}],
    caraTanam:[{judul:'Pemilihan Bibit',isi:'Stek batang 3-5 ruas dari tanaman induk yang sehat.'},{judul:'Penanaman',isi:'Tanam di bawah pohon penaung, jarak 2x2 m.'},{judul:'Penyerbukan Manual',isi:'Lakukan penyerbukan manual setiap pagi saat bunga mekar.'},{judul:'Pemangkasan',isi:'Pangkas ujung sulur untuk merangsang cabang lateral.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Buah berwarna hijau kekuningan, ujung mulai menguning, 8-9 bulan setelah bunga.'},{judul:'Cara Panen',isi:'Petik buah satu per satu saat matang optimal.'},{judul:'Pascapanen',isi:'Proses curing: blanching, sweating, drying selama 3-6 bulan.'}]
  },
  { id:'lada', kategori:'perkebunan', nama:'Lada', emoji:'🌶️', deskripsi:'Raja rempah dunia, komoditas ekspor strategis Indonesia.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 5 kg/tanaman + NPK 100 g saat tanam.'},{judul:'Susulan Rutin',isi:'NPK 15-15-15 sebanyak 100-200 g/tanaman setiap 3 bulan.'},{judul:'Pupuk Organik',isi:'Kompos 5 kg/tanaman setiap tahun.'}],
    caraTanam:[{judul:'Pemilihan Bibit',isi:'Stek batang dari tanaman induk produktif, 2-3 ruas.'},{judul:'Penanaman',isi:'Tanam di dekat tiang panjatan (tajar), jarak 2.5x2.5 m.'},{judul:'Pemangkasan',isi:'Pangkas cabang cacing dan cabang berlebih.'},{judul:'Pengendalian Penyakit',isi:'Waspadai busuk pangkal batang (Phytophthora).'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Lada hitam: panen saat 1-2 buah per tandan mulai merah. Lada putih: panen saat buah merah penuh.'},{judul:'Cara Panen',isi:'Petik tandan buah, pisahkan dari tangkai.'},{judul:'Pascapanen',isi:'Rebus dan jemur untuk lada hitam, rendam dan kupas untuk lada putih.'}]
  },
  // TAMBAHAN OBAT
  { id:'sirih', kategori:'obat', nama:'Sirih', emoji:'🌿', deskripsi:'Tanaman merambat berkhasiat antiseptik, digunakan dalam tradisi dan pengobatan.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 5 kg/tanaman + NPK 50 g saat tanam.'},{judul:'Susulan Rutin',isi:'NPK 15-15-15 sebanyak 50 g/tanaman setiap 2 bulan.'},{judul:'Pupuk Organik Cair',isi:'Siram POC setiap 2 minggu.'}],
    caraTanam:[{judul:'Persiapan Bibit',isi:'Stek batang 3-4 ruas dari tanaman induk yang sehat.'},{judul:'Penanaman',isi:'Tanam di dekat tiang rambatan, jarak 1x1 m.'},{judul:'Pengairan',isi:'Siram teratur, sirih butuh kelembaban tinggi.'},{judul:'Pemangkasan',isi:'Pangkas daun tua dan cabang berlebih.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Daun sudah tua dan berwarna hijau tua mengkilap.'},{judul:'Cara Panen',isi:'Petik daun satu per satu dari bagian bawah.'},{judul:'Pascapanen',isi:'Simpan di tempat sejuk, tahan 3-5 hari.'}]
  },
  { id:'pegagan', kategori:'obat', nama:'Pegagan', emoji:'🌿', deskripsi:'Tanaman obat penutup tanah berkhasiat meningkatkan fungsi otak dan penyembuhan luka.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 10 ton/ha + NPK 100 kg/ha.'},{judul:'Susulan (Setiap Bulan)',isi:'Kocor NPK 2 g/liter setiap bulan.'},{judul:'Pupuk Organik Cair',isi:'Semprotkan POC setiap 2 minggu.'}],
    caraTanam:[{judul:'Persiapan Bibit',isi:'Pisahkan stolon (sulur) dari tanaman induk.'},{judul:'Penanaman',isi:'Tanam stolon dengan jarak 20x20 cm.'},{judul:'Pengairan',isi:'Siram 2 kali sehari, pegagan butuh kelembaban tinggi.'},{judul:'Perawatan',isi:'Siangi gulma secara rutin.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Tanaman sudah menutupi lahan, umur 2-3 bulan.'},{judul:'Cara Panen',isi:'Potong seluruh bagian atas tanah, sisakan 5 cm.'},{judul:'Pascapanen',isi:'Cuci, jemur di tempat teduh, simpan dalam wadah kedap udara.'}]
  },
  { id:'kayu_manis', kategori:'obat', nama:'Kayu Manis', emoji:'🌳', deskripsi:'Tanaman rempah obat penghasil kulit kayu aromatik, komoditas ekspor penting.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 10 kg/pohon + NPK 200 g saat tanam.'},{judul:'Susulan Rutin',isi:'NPK 15-15-15 sebanyak 200-300 g/pohon setiap 6 bulan.'},{judul:'Pupuk Organik',isi:'Kompos 10 kg/pohon setiap tahun.'}],
    caraTanam:[{judul:'Pemilihan Bibit',isi:'Bibit dari biji atau stek batang, umur 6-12 bulan.'},{judul:'Penanaman',isi:'Lubang 60x60x60 cm, jarak 3x3 m, cocok di dataran tinggi.'},{judul:'Pemangkasan',isi:'Pangkas untuk membentuk batang yang lurus dan tinggi.'},{judul:'Perawatan',isi:'Siangi gulma, kendalikan hama dan penyakit.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Batang berdiameter 5-10 cm, umur 5-7 tahun.'},{judul:'Cara Panen',isi:'Kupas kulit batang, gulung dan jemur hingga kering.'},{judul:'Pascapanen',isi:'Sortir berdasarkan kualitas, simpan di tempat kering.'}]
  },
  // TAMBAHAN HIAS
  { id:'krisan', kategori:'hias', nama:'Krisan', emoji:'🌼', deskripsi:'Bunga hias populer dengan beragam warna, permintaan pasar sangat tinggi.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 20 ton/ha + SP-36 150 kg/ha + KCl 100 kg/ha.'},{judul:'Susulan Rutin',isi:'Kocor NPK 16-16-16 sebanyak 3 g/liter setiap minggu.'},{judul:'Pupuk Saat Berbunga',isi:'KNO3 merah 100 kg/ha + Boron untuk bunga lebat.'}],
    caraTanam:[{judul:'Persiapan Bibit',isi:'Stek pucuk 5-8 cm dari tanaman induk bebas penyakit.'},{judul:'Penanaman',isi:'Jarak 15x15 cm di bedengan bermulsa.'},{judul:'Pengaturan Cahaya',isi:'Tambahkan cahaya buatan untuk mengatur pembungaan.'},{judul:'Pengendalian Hama',isi:'Waspadai thrips, kutu daun, dan penyakit karat.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'2-3 bunga terluar sudah mekar sempurna.'},{judul:'Cara Panen',isi:'Potong tangkai pagi hari, panjang 60-80 cm.'},{judul:'Pascapanen',isi:'Masukkan ke air bersih, simpan di 4-8°C, tahan 10-14 hari.'}]
  },
  { id:'heliconia', kategori:'hias', nama:'Heliconia', emoji:'🌺', deskripsi:'Tanaman hias tropis dengan bunga eksotis berwarna cerah, populer untuk dekorasi.',
    pemupukan:[{judul:'Pupuk Dasar',isi:'Kompos 10 kg/tanaman + NPK 200 g saat tanam.'},{judul:'Susulan Rutin',isi:'NPK 15-15-15 sebanyak 200 g/tanaman setiap 3 bulan.'},{judul:'Pupuk Organik',isi:'Kompos 5 kg/tanaman setiap 6 bulan.'}],
    caraTanam:[{judul:'Persiapan Bibit',isi:'Pisahkan rimpang dari tanaman induk dengan 2-3 mata tunas.'},{judul:'Penanaman',isi:'Lubang 40x40x40 cm, jarak 1.5x1.5 m.'},{judul:'Pengairan',isi:'Siram teratur, heliconia butuh kelembaban tinggi.'},{judul:'Pemangkasan',isi:'Pangkas batang tua setelah berbunga.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Bunga sudah mekar sempurna dengan warna cerah.'},{judul:'Cara Panen',isi:'Potong tangkai bunga pagi hari, panjang 60-100 cm.'},{judul:'Pascapanen',isi:'Masukkan ke air bersih, simpan di 15-18°C, tahan 2-3 minggu.'}]
  },
  { id:'anthurium', kategori:'hias', nama:'Anthurium', emoji:'🌸', deskripsi:'Tanaman hias daun dan bunga eksotis, populer sebagai tanaman indoor.',
    pemupukan:[{judul:'Pupuk Vegetatif',isi:'NPK 20-20-20 sebanyak 2 g/liter setiap 2 minggu.'},{judul:'Pupuk Generatif',isi:'NPK 10-30-20 saat tanaman mulai berbunga.'},{judul:'Pupuk Mikro',isi:'Semprotkan Ca, Mg, Fe setiap bulan.'}],
    caraTanam:[{judul:'Media Tanam',isi:'Campuran pakis, arang, dan perlit (2:1:1).'},{judul:'Penanaman',isi:'Pot berlubang, jangan tanam terlalu dalam.'},{judul:'Pencahayaan',isi:'Cahaya terang tidak langsung, naungan 60-70%.'},{judul:'Pengairan',isi:'Siram 2-3 kali seminggu, jaga kelembaban.'}],
    panen:[{judul:'Ciri Siap Panen',isi:'Spadix (tongkol) sudah berwarna cerah dan tegak.'},{judul:'Cara Panen',isi:'Potong tangkai bunga dengan gunting steril.'},{judul:'Pascapanen',isi:'Masukkan ke air bersih, simpan di 15-18°C, tahan 2-4 minggu.'}]
  }
];

let tanamanAktif = null;
let tabAktif = 'pemupukan';

function renderKategori(data) {
  const ul = document.getElementById('kategoriUl');
  ul.innerHTML = (data || tanamanData).map(t => `
    <li onclick="pilihTanaman('${t.id}')" id="li-${t.id}">
      <span>${t.emoji}</span> ${t.nama}
    </li>
  `).join('');
}

function filterKategori(kat, el) {
  document.querySelectorAll('.fk-btn').forEach(b => b.classList.remove('aktif'));
  el.classList.add('aktif');
  const filtered = tanamanData.filter(t => t.kategori === kat);
  renderKategori(filtered);
  tanamanAktif = null;
  const konten = document.getElementById('panduanKonten');
  if (konten) konten.innerHTML = '<div class="panduan-placeholder"><span>' + (filtered[0] ? filtered[0].emoji : '🌾') + '</span><p>Pilih tanaman di sebelah kiri untuk melihat panduan lengkapnya.</p></div>';
}

function pilihTanaman(id) {
  tanamanAktif = tanamanData.find(t => t.id === id);
  tabAktif = 'pemupukan';
  document.querySelectorAll('.kategori-list ul li').forEach(li => li.classList.remove('aktif'));
  const liEl = document.getElementById('li-' + id);
  if (liEl) liEl.classList.add('aktif');
  renderKonten();
  const konten = document.getElementById('panduanKonten');
  if (konten && window.innerWidth <= 768) {
    setTimeout(() => konten.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }
}

function pilihTab(tab) {
  tabAktif = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('aktif'));
  document.querySelectorAll('.tab-konten').forEach(c => c.classList.remove('aktif'));
  document.getElementById('tab-btn-' + tab).classList.add('aktif');
  document.getElementById('tab-' + tab).classList.add('aktif');
}

function renderKonten() {
  const t = tanamanAktif;
  const konten = document.getElementById('panduanKonten');
  konten.innerHTML = `
    <div class="tanaman-header">
      <span class="tanaman-emoji">${t.emoji}</span>
      <div><h2>${t.nama}</h2><p>${t.deskripsi}</p></div>
    </div>
    <div class="tab-nav">
      <button class="tab-btn aktif" id="tab-btn-pemupukan" onclick="pilihTab('pemupukan')">🌿 Pemupukan</button>
      <button class="tab-btn" id="tab-btn-caraTanam" onclick="pilihTab('caraTanam')">🌱 Cara Tanam</button>
      <button class="tab-btn" id="tab-btn-panen" onclick="pilihTab('panen')">🌾 Panen</button>
    </div>
    <div class="tab-konten aktif" id="tab-pemupukan">
      <div class="info-box">💡 Pemupukan yang tepat waktu dan dosis yang sesuai adalah kunci hasil panen maksimal.</div>
      <div class="step-list">${t.pemupukan.map((s,i)=>`<div class="step-item"><div class="step-num">${i+1}</div><div><h4>${s.judul}</h4><p>${s.isi}</p></div></div>`).join('')}</div>
    </div>
    <div class="tab-konten" id="tab-caraTanam">
      <div class="info-box">🌱 Ikuti langkah-langkah berikut untuk hasil tanam yang optimal.</div>
      <div class="step-list">${t.caraTanam.map((s,i)=>`<div class="step-item"><div class="step-num">${i+1}</div><div><h4>${s.judul}</h4><p>${s.isi}</p></div></div>`).join('')}</div>
    </div>
    <div class="tab-konten" id="tab-panen">
      <div class="info-box">🌾 Panen di waktu yang tepat menentukan kualitas dan nilai jual.</div>
      <div class="step-list">${t.panen.map((s,i)=>`<div class="step-item"><div class="step-num">${i+1}</div><div><h4>${s.judul}</h4><p>${s.isi}</p></div></div>`).join('')}</div>
    </div>
  `;
}

window.addEventListener('load', function() {
  const wrap = document.getElementById('filterKatWrap');
  if (!wrap) return;
  wrap.addEventListener('click', function(e) {
    const btn = e.target.closest('.fk-btn');
    if (!btn) return;
    e.stopPropagation();
    e.preventDefault();
    filterKategori(btn.dataset.kat, btn);
  });
  const btnPangan = wrap.querySelector('[data-kat="pangan"]');
  if (btnPangan) filterKategori('pangan', btnPangan);
});
