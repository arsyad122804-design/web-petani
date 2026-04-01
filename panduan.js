const tanamanData = [
  {
    id: "padi",
    nama: "Padi",
    emoji: "🌾",
    deskripsi: "Tanaman pangan utama Indonesia, cocok di lahan sawah maupun tadah hujan.",
    pemupukan: [
      { judul: "Pupuk Dasar (Sebelum Tanam)", isi: "Berikan pupuk organik/kompos 2 ton/ha dan pupuk SP-36 sebanyak 100 kg/ha saat pengolahan tanah." },
      { judul: "Pemupukan Pertama (7-10 HST)", isi: "Aplikasikan Urea 100 kg/ha dan NPK 150 kg/ha untuk mendukung pertumbuhan awal." },
      { judul: "Pemupukan Kedua (25-30 HST)", isi: "Tambahkan Urea 50 kg/ha saat fase anakan aktif untuk memperbanyak jumlah anakan." },
      { judul: "Pemupukan Ketiga (40-45 HST)", isi: "Berikan KCl 75 kg/ha untuk memperkuat batang dan meningkatkan kualitas gabah." }
    ],
    caraTanam: [
      { judul: "Persiapan Benih", isi: "Rendam benih padi selama 24 jam, tiriskan dan simpan 2 hari hingga berkecambah. Pilih benih unggul bersertifikat." },
      { judul: "Persemaian", isi: "Semai benih di lahan persemaian selama 20-25 hari. Jaga kelembaban dan beri pupuk daun tipis." },
      { judul: "Pengolahan Lahan", isi: "Bajak sawah sedalam 20-25 cm, beri air, dan ratakan. Biarkan 1 minggu sebelum tanam." },
      { judul: "Penanaman", isi: "Tanam bibit umur 20-25 hari dengan jarak 25x25 cm atau sistem jajar legowo 2:1. Tanam 2-3 bibit per lubang." },
      { judul: "Perawatan", isi: "Jaga ketinggian air 3-5 cm, lakukan penyiangan gulma pada 2 dan 4 MST, serta pengendalian hama rutin." }
    ],
    panen: [
      { judul: "Ciri Siap Panen", isi: "Padi siap panen saat 90-95% gabah sudah menguning, sekitar 110-120 hari setelah tanam." },
      { judul: "Pengeringan Lahan", isi: "Hentikan pengairan 7-10 hari sebelum panen agar lahan kering dan memudahkan pemanenan." },
      { judul: "Cara Panen", isi: "Panen menggunakan sabit atau mesin combine harvester. Potong batang 20 cm dari pangkal." },
      { judul: "Pasca Panen", isi: "Rontokkan gabah segera, jemur hingga kadar air 14%, lalu simpan di tempat kering dan bersih." }
    ]
  },
  {
    id: "terong",
    nama: "Terong",
    emoji: "🍆",
    deskripsi: "Sayuran populer yang mudah ditanam, cocok di dataran rendah hingga menengah.",
    pemupukan: [
      { judul: "Pupuk Dasar", isi: "Campurkan pupuk kandang 20 ton/ha dan NPK 16-16-16 sebanyak 200 kg/ha ke dalam tanah sebelum tanam." },
      { judul: "Pemupukan Susulan 1 (2 MST)", isi: "Berikan Urea 100 kg/ha dan KCl 50 kg/ha untuk mempercepat pertumbuhan vegetatif." },
      { judul: "Pemupukan Susulan 2 (Saat Berbunga)", isi: "Aplikasikan NPK 200 kg/ha dan pupuk daun mengandung boron untuk meningkatkan pembungaan." },
      { judul: "Pemupukan Rutin", isi: "Setiap 2 minggu berikan pupuk cair organik untuk menjaga kesuburan tanah selama masa produksi." }
    ],
    caraTanam: [
      { judul: "Persiapan Benih", isi: "Rendam benih dalam air hangat 50°C selama 30 menit. Semai di tray semai dengan media campuran tanah dan kompos." },
      { judul: "Persemaian", isi: "Semai selama 25-30 hari hingga bibit memiliki 4-5 daun sejati. Siram pagi dan sore hari." },
      { judul: "Persiapan Lahan", isi: "Buat bedengan lebar 100-120 cm, tinggi 30 cm. Pasang mulsa plastik hitam perak untuk menekan gulma." },
      { judul: "Penanaman", isi: "Tanam bibit dengan jarak 60x70 cm. Buat lubang tanam, masukkan bibit, padatkan tanah di sekitar akar." },
      { judul: "Perawatan", isi: "Pasang ajir setinggi 100 cm, ikat batang secara berkala. Pangkas tunas air dan daun tua secara rutin." }
    ],
    panen: [
      { judul: "Ciri Siap Panen", isi: "Terong siap panen saat ukuran sudah optimal (15-20 cm), kulit mengkilap, dan biji belum keras. Sekitar 60-70 HST." },
      { judul: "Cara Panen", isi: "Petik terong beserta tangkainya menggunakan gunting atau pisau tajam. Jangan ditarik agar tidak merusak tanaman." },
      { judul: "Frekuensi Panen", isi: "Panen dilakukan setiap 3-5 hari sekali. Satu tanaman bisa dipanen 15-20 kali selama masa produksi." },
      { judul: "Pasca Panen", isi: "Simpan di tempat sejuk dan teduh. Hindari tumpukan berlebih. Segera pasarkan untuk menjaga kesegaran." }
    ]
  },
  {
    id: "cabai",
    nama: "Cabai",
    emoji: "🌶️",
    deskripsi: "Komoditas bernilai tinggi, butuh perawatan intensif namun menguntungkan.",
    pemupukan: [
      { judul: "Pupuk Dasar", isi: "Berikan pupuk kandang ayam 15 ton/ha, SP-36 150 kg/ha, dan KCl 100 kg/ha sebelum tanam." },
      { judul: "Pemupukan Awal (2 MST)", isi: "Aplikasikan Urea 75 kg/ha dan NPK 100 kg/ha untuk pertumbuhan vegetatif yang optimal." },
      { judul: "Pemupukan Generatif (Saat Berbunga)", isi: "Kurangi nitrogen, tingkatkan kalium dan fosfor. Gunakan NPK formula 12-12-17 sebanyak 200 kg/ha." },
      { judul: "Pupuk Daun", isi: "Semprotkan pupuk daun mengandung Ca dan B setiap 2 minggu untuk mencegah busuk ujung buah." }
    ],
    caraTanam: [
      { judul: "Persiapan Benih", isi: "Gunakan benih hibrida bersertifikat. Rendam dalam larutan fungisida 30 menit, lalu semai di tray." },
      { judul: "Persemaian", isi: "Semai 30-35 hari di tempat teduh. Siram dengan sprayer halus. Bibit siap tanam saat tinggi 15-20 cm." },
      { judul: "Persiapan Lahan", isi: "Buat bedengan, olah tanah dalam, pasang mulsa plastik. Buat lubang tanam diameter 10 cm." },
      { judul: "Penanaman", isi: "Tanam dengan jarak 50x60 cm. Tanam sore hari atau saat mendung untuk mengurangi stres bibit." },
      { judul: "Perawatan", isi: "Pasang ajir, ikat tanaman, pangkas tunas air. Semprot pestisida preventif setiap 7-10 hari." }
    ],
    panen: [
      { judul: "Ciri Siap Panen", isi: "Cabai merah siap panen saat warna sudah merah merata. Cabai hijau dipanen saat ukuran maksimal sebelum memerah." },
      { judul: "Waktu Panen", isi: "Panen pertama sekitar 75-85 HST. Panen berikutnya setiap 3-5 hari sekali tergantung varietas." },
      { judul: "Cara Panen", isi: "Petik cabai beserta tangkainya di pagi hari. Gunakan wadah berlubang agar tidak cepat busuk." },
      { judul: "Pasca Panen", isi: "Sortir cabai berdasarkan ukuran dan kualitas. Simpan di suhu 10-12°C untuk memperpanjang kesegaran." }
    ]
  },
  {
    id: "jagung",
    nama: "Jagung",
    emoji: "🌽",
    deskripsi: "Tanaman serbaguna untuk pangan, pakan ternak, dan bahan industri.",
    pemupukan: [
      { judul: "Pupuk Dasar", isi: "Berikan pupuk kandang 5 ton/ha dan SP-36 100 kg/ha saat pengolahan tanah." },
      { judul: "Pemupukan I (7-10 HST)", isi: "Aplikasikan Urea 150 kg/ha dan KCl 100 kg/ha di samping tanaman, tutup dengan tanah." },
      { judul: "Pemupukan II (28-30 HST)", isi: "Berikan Urea 100 kg/ha saat tanaman mulai membentuk tongkol untuk mendukung pengisian biji." },
      { judul: "Catatan Penting", isi: "Jangan terlambat memupuk. Kekurangan nitrogen pada fase V6 akan menurunkan hasil panen secara signifikan." }
    ],
    caraTanam: [
      { judul: "Persiapan Lahan", isi: "Bajak tanah sedalam 25-30 cm, buat alur tanam dengan jarak antar baris 70-75 cm." },
      { judul: "Penanaman", isi: "Tanam 1-2 biji per lubang dengan jarak dalam baris 20-25 cm. Kedalaman tanam 3-5 cm." },
      { judul: "Penjarangan", isi: "Saat tanaman berumur 10-14 hari, sisakan 1 tanaman terbaik per lubang." },
      { judul: "Pengairan", isi: "Jagung butuh air cukup terutama saat fase berbunga dan pengisian biji. Hindari genangan air." },
      { judul: "Penyiangan", isi: "Lakukan penyiangan gulma pada umur 2 dan 4 MST bersamaan dengan pembumbunan tanah." }
    ],
    panen: [
      { judul: "Ciri Siap Panen", isi: "Jagung siap panen saat rambut tongkol sudah kering dan berwarna coklat, sekitar 95-105 HST." },
      { judul: "Cara Panen", isi: "Patahkan tongkol ke bawah lalu putar. Kupas kelobot di lapangan untuk mempercepat pengeringan." },
      { judul: "Pengeringan", isi: "Jemur tongkol atau pipilan hingga kadar air 14-15% sebelum disimpan atau dijual." },
      { judul: "Penyimpanan", isi: "Simpan jagung pipilan di karung bersih di tempat kering dan berventilasi. Hindari hama gudang." }
    ]
  },
  {
    id: "tomat",
    nama: "Tomat",
    emoji: "🍅",
    deskripsi: "Sayuran buah populer dengan nilai ekonomi tinggi dan permintaan pasar stabil.",
    pemupukan: [
      { judul: "Pupuk Dasar", isi: "Campurkan kompos 20 ton/ha, SP-36 200 kg/ha, dan KCl 150 kg/ha ke dalam bedengan." },
      { judul: "Pemupukan Vegetatif (2-3 MST)", isi: "Berikan Urea 100 kg/ha dan NPK 150 kg/ha untuk mendorong pertumbuhan batang dan daun." },
      { judul: "Pemupukan Generatif", isi: "Saat mulai berbunga, kurangi nitrogen dan tingkatkan kalium. Gunakan NPK 15-15-20." },
      { judul: "Pupuk Kalsium", isi: "Semprotkan kalsium nitrat setiap 2 minggu untuk mencegah blossom end rot (busuk ujung buah)." }
    ],
    caraTanam: [
      { judul: "Persemaian", isi: "Semai benih di tray dengan media steril. Tutup tipis dengan tanah, jaga kelembaban. Siap tanam umur 25-30 hari." },
      { judul: "Persiapan Lahan", isi: "Buat bedengan tinggi 30-40 cm, lebar 100 cm. Pasang mulsa plastik dan buat lubang tanam." },
      { judul: "Penanaman", isi: "Tanam bibit dengan jarak 60x70 cm. Tanam agak dalam agar akar adventif tumbuh dari batang." },
      { judul: "Pemangkasan", isi: "Pangkas tunas air (wiwilan) secara rutin. Pertahankan 1-2 batang utama untuk hasil optimal." },
      { judul: "Pengikatan", isi: "Ikat batang ke ajir setinggi 150-200 cm setiap 15-20 cm pertumbuhan menggunakan tali rafia." }
    ],
    panen: [
      { judul: "Ciri Siap Panen", isi: "Tomat siap panen saat warna berubah dari hijau ke kuning-oranye atau merah tergantung varietas. Sekitar 60-70 HST." },
      { judul: "Cara Panen", isi: "Petik tomat beserta tangkainya di pagi hari. Gunakan keranjang berlapis untuk menghindari memar." },
      { judul: "Grading", isi: "Sortir berdasarkan ukuran (A, B, C) dan tingkat kematangan untuk memaksimalkan nilai jual." },
      { judul: "Penyimpanan", isi: "Simpan di suhu ruang untuk tomat yang belum matang penuh. Hindari tumpukan lebih dari 3 lapis." }
    ]
  },
  {
    id: "singkong",
    nama: "Singkong",
    emoji: "🥔",
    deskripsi: "Tanaman umbi tahan kering, mudah ditanam, dan serbaguna sebagai bahan pangan.",
    pemupukan: [
      { judul: "Pupuk Dasar", isi: "Berikan pupuk kandang 10 ton/ha dan SP-36 100 kg/ha saat pengolahan lahan." },
      { judul: "Pemupukan I (1 BST)", isi: "Aplikasikan Urea 100 kg/ha dan KCl 100 kg/ha di sekitar tanaman untuk pertumbuhan awal." },
      { judul: "Pemupukan II (4 BST)", isi: "Berikan KCl 150 kg/ha untuk mendukung pembentukan dan pembesaran umbi." },
      { judul: "Catatan", isi: "Singkong relatif toleran lahan miskin, namun pemupukan yang tepat bisa meningkatkan hasil 2-3 kali lipat." }
    ],
    caraTanam: [
      { judul: "Pemilihan Bibit", isi: "Gunakan stek batang dari tanaman sehat berumur 8-12 bulan. Panjang stek 20-25 cm dengan 5-7 mata tunas." },
      { judul: "Persiapan Lahan", isi: "Bajak tanah, buat guludan tinggi 30-40 cm dengan jarak antar guludan 80-100 cm." },
      { judul: "Penanaman", isi: "Tanam stek miring 45° atau tegak lurus sedalam 5-10 cm. Jarak tanam 80x100 cm." },
      { judul: "Perawatan", isi: "Lakukan penyiangan 1-2 kali pada awal pertumbuhan. Setelah kanopi menutup, gulma tidak lagi masalah." },
      { judul: "Pengairan", isi: "Singkong tahan kering, namun pengairan pada 2 bulan pertama meningkatkan pertumbuhan signifikan." }
    ],
    panen: [
      { judul: "Waktu Panen", isi: "Singkong dipanen umur 8-12 bulan tergantung varietas. Panen terlambat membuat umbi berkayu." },
      { judul: "Ciri Siap Panen", isi: "Daun mulai menguning dan rontok, batang bawah mulai mengering, dan umbi sudah berukuran besar." },
      { judul: "Cara Panen", isi: "Potong batang 30 cm dari tanah, lalu cabut umbi dengan hati-hati menggunakan cangkul atau garpu tanah." },
      { judul: "Pasca Panen", isi: "Singkong cepat rusak setelah panen. Segera olah atau pasarkan dalam 2-3 hari setelah panen." }
    ]
  },
  {
    id: "bawang",
    nama: "Bawang Merah",
    emoji: "🧅",
    deskripsi: "Komoditas bumbu dapur bernilai tinggi, cocok di dataran rendah hingga menengah.",
    pemupukan: [
      { judul: "Pupuk Dasar", isi: "Berikan pupuk kandang 10 ton/ha, SP-36 150 kg/ha, dan KCl 100 kg/ha sebelum tanam." },
      { judul: "Pemupukan I (10 HST)", isi: "Aplikasikan Urea 100 kg/ha dan ZA 200 kg/ha untuk pertumbuhan daun yang optimal." },
      { judul: "Pemupukan II (25 HST)", isi: "Berikan NPK 200 kg/ha dan KCl 75 kg/ha untuk mendukung pembentukan umbi." },
      { judul: "Pupuk Daun", isi: "Semprotkan pupuk daun mengandung sulfur setiap 10 hari untuk meningkatkan aroma dan kualitas umbi." }
    ],
    caraTanam: [
      { judul: "Persiapan Bibit", isi: "Gunakan umbi bibit ukuran sedang (5-10 g). Jemur 1-2 hari sebelum tanam, potong ujung umbi 1/3 bagian." },
      { judul: "Persiapan Lahan", isi: "Buat bedengan lebar 120 cm, tinggi 25-30 cm. pH tanah ideal 6-7. Pasang mulsa plastik." },
      { judul: "Penanaman", isi: "Tanam umbi dengan jarak 15x20 cm, kedalaman 2/3 umbi masuk tanah. Pastikan ujung potongan menghadap atas." },
      { judul: "Pengairan", isi: "Siram 2 kali sehari pada awal tanam. Kurangi frekuensi saat umbi mulai terbentuk (3 MST)." },
      { judul: "Pengendalian Hama", isi: "Waspadai ulat bawang dan penyakit moler. Semprot insektisida dan fungisida secara bergantian." }
    ],
    panen: [
      { judul: "Ciri Siap Panen", isi: "Bawang siap panen saat 60-70% daun sudah rebah, umur 55-70 HST tergantung varietas." },
      { judul: "Cara Panen", isi: "Cabut tanaman beserta umbinya di pagi hari. Ikat 10-15 tanaman per ikatan untuk penjemuran." },
      { judul: "Penjemuran", isi: "Jemur bawang 7-14 hari hingga kulit luar kering dan berwarna merah mengkilap." },
      { judul: "Penyimpanan", isi: "Simpan di gudang berventilasi baik dengan suhu 25-30°C. Bawang bisa disimpan 3-6 bulan." }
    ]
  },
  {
    id: "kangkung",
    nama: "Kangkung",
    emoji: "🥬",
    deskripsi: "Sayuran hijau cepat panen, tumbuh subur di lahan basah maupun kering.",
    pemupukan: [
      { judul: "Pupuk Dasar", isi: "Campurkan kompos 5 ton/ha dan NPK 100 kg/ha ke dalam tanah sebelum tanam." },
      { judul: "Pemupukan Susulan (2 MST)", isi: "Berikan Urea 50 kg/ha atau pupuk cair organik untuk mempercepat pertumbuhan daun." },
      { judul: "Catatan", isi: "Kangkung tidak butuh banyak pupuk. Pemupukan berlebih justru membuat batang terlalu lunak dan mudah busuk." }
    ],
    caraTanam: [
      { judul: "Persiapan Lahan", isi: "Gemburkan tanah, buat bedengan lebar 100 cm. Untuk kangkung air, siapkan lahan tergenang 5-10 cm." },
      { judul: "Penanaman", isi: "Tanam benih langsung (tugal) dengan jarak 20x20 cm, kedalaman 2-3 cm. Isi 3-5 benih per lubang." },
      { judul: "Pengairan", isi: "Siram setiap hari. Kangkung darat butuh tanah lembab, kangkung air butuh genangan konstan." },
      { judul: "Penyiangan", isi: "Bersihkan gulma pada umur 2 MST. Setelah itu pertumbuhan kangkung sudah cukup cepat menekan gulma." }
    ],
    panen: [
      { judul: "Waktu Panen", isi: "Kangkung siap panen 25-30 hari setelah tanam. Sangat cepat dibanding sayuran lain." },
      { judul: "Cara Panen", isi: "Potong batang 5-10 cm dari pangkal. Sisakan beberapa ruas untuk tumbuh kembali (ratoon)." },
      { judul: "Panen Ulang", isi: "Setelah panen pertama, kangkung bisa dipanen lagi setiap 2 minggu hingga 5-6 kali panen." },
      { judul: "Pasca Panen", isi: "Ikat per 0,5 kg, simpan di tempat sejuk. Kangkung segar bertahan 1-2 hari di suhu ruang." }
    ]
  },
  {
    id: "bayam",
    nama: "Bayam",
    emoji: "🌿",
    deskripsi: "Sayuran bergizi tinggi, mudah ditanam, dan cocok untuk lahan sempit sekalipun.",
    pemupukan: [
      { judul: "Pupuk Dasar", isi: "Berikan kompos 3-5 ton/ha dan NPK 100 kg/ha saat pengolahan tanah." },
      { judul: "Pemupukan Susulan (2 MST)", isi: "Aplikasikan Urea 75 kg/ha untuk mendorong pertumbuhan daun yang lebat dan hijau." },
      { judul: "Pupuk Organik Cair", isi: "Semprotkan POC setiap 7 hari untuk menjaga kesuburan dan warna daun tetap segar." }
    ],
    caraTanam: [
      { judul: "Persiapan Lahan", isi: "Gemburkan tanah sedalam 20 cm, buat bedengan lebar 100-120 cm. Pastikan drainase baik." },
      { judul: "Penanaman", isi: "Sebar benih secara merata atau buat larikan dengan jarak 20 cm. Tutup tipis dengan tanah halus." },
      { judul: "Penjarangan", isi: "Saat tinggi 5 cm, jarangkan tanaman sisakan jarak 10x10 cm. Tanaman yang dicabut bisa langsung dikonsumsi." },
      { judul: "Pengairan", isi: "Siram pagi dan sore. Hindari genangan air karena bisa menyebabkan busuk akar." }
    ],
    panen: [
      { judul: "Waktu Panen", isi: "Bayam siap panen umur 25-30 hari. Panen sebelum tanaman berbunga agar daun tidak pahit." },
      { judul: "Cara Panen", isi: "Cabut seluruh tanaman atau potong batang utama. Pilih daun yang segar dan tidak berlubang." },
      { judul: "Pasca Panen", isi: "Cuci bersih, ikat per 200-250 g. Simpan di tempat sejuk atau kulkas agar tahan 2-3 hari." }
    ]
  },
  {
    id: "semangka",
    nama: "Semangka",
    emoji: "🍉",
    deskripsi: "Buah segar bernilai ekonomi tinggi, cocok di lahan kering dengan sinar matahari penuh.",
    pemupukan: [
      { judul: "Pupuk Dasar", isi: "Berikan pupuk kandang 20 ton/ha, SP-36 200 kg/ha, dan KCl 150 kg/ha sebelum tanam." },
      { judul: "Pemupukan I (1 MST)", isi: "Aplikasikan NPK 16-16-16 sebanyak 150 kg/ha untuk pertumbuhan awal yang kuat." },
      { judul: "Pemupukan II (Saat Berbunga)", isi: "Kurangi nitrogen, tingkatkan kalium dan fosfor. Gunakan NPK 12-12-17 ditambah pupuk daun boron." },
      { judul: "Pemupukan III (Buah Sebesar Telur)", isi: "Berikan KNO3 100 kg/ha untuk memperbesar buah dan meningkatkan kadar gula." }
    ],
    caraTanam: [
      { judul: "Persiapan Benih", isi: "Rendam benih dalam air hangat 2 jam, bungkus kain lembab semalam hingga berkecambah." },
      { judul: "Persiapan Lahan", isi: "Buat bedengan lebar 5-6 m untuk 2 baris tanaman. Pasang mulsa plastik hitam perak." },
      { judul: "Penanaman", isi: "Tanam bibit umur 7-10 hari dengan jarak 150x60 cm. Tanam sore hari untuk mengurangi stres." },
      { judul: "Pemangkasan", isi: "Pertahankan 2-3 cabang utama. Pangkas cabang liar. Pilih 1-2 buah terbaik per tanaman." },
      { judul: "Penyerbukan", isi: "Bantu penyerbukan manual di pagi hari (06.00-09.00) dengan memindahkan serbuk sari bunga jantan ke betina." }
    ],
    panen: [
      { judul: "Ciri Siap Panen", isi: "Sulur terdekat buah sudah kering, suara saat diketuk berat/berdengung, kulit buah kusam. Umur 60-70 HST." },
      { judul: "Cara Panen", isi: "Potong tangkai buah dengan pisau tajam, sisakan 3-5 cm tangkai. Angkat dengan hati-hati." },
      { judul: "Grading", isi: "Sortir berdasarkan ukuran dan kualitas. Semangka grade A (>5 kg) memiliki harga jual tertinggi." },
      { judul: "Penyimpanan", isi: "Simpan di tempat sejuk dan teduh. Semangka utuh tahan 2-3 minggu, setelah dipotong 3-5 hari di kulkas." }
    ]
  },
  {
    id: "mentimun",
    nama: "Mentimun",
    emoji: "🥒",
    deskripsi: "Sayuran buah yang cepat panen dan banyak diminati pasar lokal maupun ekspor.",
    pemupukan: [
      { judul: "Pupuk Dasar", isi: "Berikan kompos 15 ton/ha dan NPK 200 kg/ha saat pengolahan lahan." },
      { judul: "Pemupukan I (1 MST)", isi: "Aplikasikan Urea 75 kg/ha dan KCl 50 kg/ha untuk pertumbuhan vegetatif." },
      { judul: "Pemupukan II (Saat Berbunga)", isi: "Berikan NPK 150 kg/ha dan pupuk daun mengandung kalsium untuk kualitas buah." }
    ],
    caraTanam: [
      { judul: "Persiapan Lahan", isi: "Buat bedengan, pasang mulsa plastik. Siapkan ajir bambu atau tali rambatan setinggi 150 cm." },
      { judul: "Penanaman", isi: "Tanam 2 benih per lubang dengan jarak 50x60 cm. Setelah tumbuh, sisakan 1 tanaman terkuat." },
      { judul: "Perambatan", isi: "Arahkan tanaman ke ajir sejak dini. Ikat batang setiap 20 cm pertumbuhan." },
      { judul: "Pemangkasan", isi: "Pangkas tunas lateral di bawah ruas ke-5. Biarkan cabang di atas ruas ke-5 untuk produksi buah." }
    ],
    panen: [
      { judul: "Waktu Panen", isi: "Mentimun siap panen 35-45 HST. Panen saat buah masih muda untuk kualitas terbaik." },
      { judul: "Cara Panen", isi: "Petik buah beserta tangkainya setiap 2-3 hari sekali. Jangan biarkan buah terlalu tua di pohon." },
      { judul: "Pasca Panen", isi: "Simpan di tempat sejuk. Mentimun segar tahan 5-7 hari di suhu ruang, 2 minggu di kulkas." }
    ]
  },
  {
    id: "kacang",
    nama: "Kacang Panjang",
    emoji: "🫘",
    deskripsi: "Sayuran polong populer, tumbuh merambat dan produktif sepanjang musim.",
    pemupukan: [
      { judul: "Pupuk Dasar", isi: "Berikan kompos 10 ton/ha dan SP-36 100 kg/ha. Kacang panjang bisa mengikat nitrogen sendiri dari udara." },
      { judul: "Pemupukan Susulan (3 MST)", isi: "Berikan KCl 75 kg/ha untuk mendukung pembentukan polong yang panjang dan berisi." },
      { judul: "Catatan", isi: "Hindari pupuk nitrogen berlebih karena akan mendorong pertumbuhan daun dan mengurangi produksi polong." }
    ],
    caraTanam: [
      { judul: "Persiapan Lahan", isi: "Buat bedengan, pasang ajir bambu setinggi 150-200 cm atau buat para-para untuk rambatan." },
      { judul: "Penanaman", isi: "Tanam 2-3 benih per lubang dengan jarak 40x60 cm. Kedalaman tanam 3-4 cm." },
      { judul: "Perambatan", isi: "Arahkan tanaman ke ajir sejak tinggi 20 cm. Ikat longgar agar tidak melukai batang." },
      { judul: "Perawatan", isi: "Lakukan penyiangan gulma pada 2-3 MST. Semprot insektisida untuk mengendalikan kutu daun dan penggerek polong." }
    ],
    panen: [
      { judul: "Waktu Panen", isi: "Kacang panjang siap panen 45-55 HST. Panen saat polong masih muda, lurus, dan berwarna hijau segar." },
      { judul: "Cara Panen", isi: "Petik polong dengan tangan atau gunting. Panen setiap 2-3 hari sekali agar produksi tetap tinggi." },
      { judul: "Masa Produksi", isi: "Satu tanaman bisa berproduksi 2-3 bulan. Total panen bisa mencapai 10-15 ton/ha per musim." }
    ]
  },
  {
    id: "wortel",
    nama: "Wortel",
    emoji: "🥕",
    deskripsi: "Sayuran umbi kaya vitamin A, cocok di dataran tinggi dengan suhu sejuk.",
    pemupukan: [
      { judul: "Pupuk Dasar", isi: "Berikan kompos matang 15 ton/ha dan SP-36 150 kg/ha. Hindari pupuk kandang segar karena membuat umbi bercabang." },
      { judul: "Pemupukan I (3 MST)", isi: "Aplikasikan Urea 100 kg/ha dan KCl 75 kg/ha untuk pertumbuhan daun dan akar." },
      { judul: "Pemupukan II (6 MST)", isi: "Berikan KCl 100 kg/ha untuk memperbesar dan mempermanis umbi wortel." }
    ],
    caraTanam: [
      { judul: "Persiapan Lahan", isi: "Gemburkan tanah sedalam 40-50 cm, buat bedengan lebar 100 cm. Tanah harus gembur dan bebas batu." },
      { judul: "Penanaman", isi: "Buat larikan sedalam 1 cm dengan jarak antar baris 20 cm. Sebar benih tipis, tutup tanah halus." },
      { judul: "Penjarangan", isi: "Saat tinggi 5 cm, jarangkan tanaman dengan jarak 5-7 cm antar tanaman dalam baris." },
      { judul: "Pengairan", isi: "Jaga kelembaban tanah secara konsisten. Kekeringan saat umbi berkembang membuat wortel keras dan pahit." }
    ],
    panen: [
      { judul: "Waktu Panen", isi: "Wortel siap panen umur 90-120 hari tergantung varietas. Panen terlambat membuat umbi berkayu." },
      { judul: "Cara Panen", isi: "Longgarkan tanah di sekitar umbi dengan garpu, lalu cabut batang. Hindari memotong atau melukai umbi." },
      { judul: "Pasca Panen", isi: "Potong daun sisakan 2 cm, cuci bersih, sortir berdasarkan ukuran. Simpan di suhu 0-4°C hingga 3 bulan." }
    ]
  },
  {
    id: "pisang",
    nama: "Pisang",
    emoji: "🍌",
    deskripsi: "Buah tropis paling populer di Indonesia, bisa ditanam di pekarangan hingga kebun luas.",
    pemupukan: [
      { judul: "Pupuk Dasar (Saat Tanam)", isi: "Isi lubang tanam dengan campuran tanah dan kompos 10 kg per lubang ditambah SP-36 100 g." },
      { judul: "Pemupukan Rutin (Tiap 3 Bulan)", isi: "Berikan NPK 16-16-16 sebanyak 200-300 g per tanaman, ditaburkan melingkar di sekitar batang." },
      { judul: "Pemupukan Kalium", isi: "Saat tanaman mulai berbunga, tambahkan KCl 200 g per tanaman untuk memperbesar dan mempermanis buah." },
      { judul: "Pupuk Organik", isi: "Berikan kompos atau pupuk kandang 10-20 kg per tanaman setiap 6 bulan untuk menjaga kesuburan tanah." }
    ],
    caraTanam: [
      { judul: "Pemilihan Bibit", isi: "Gunakan anakan pedang (sword sucker) tinggi 60-90 cm dari induk yang sehat dan produktif." },
      { judul: "Persiapan Lubang Tanam", isi: "Buat lubang 50x50x50 cm, jarak tanam 3x3 m. Isi dengan campuran tanah dan kompos, diamkan 2 minggu." },
      { judul: "Penanaman", isi: "Tanam bibit tegak lurus, padatkan tanah di sekitar akar. Siram hingga basah merata." },
      { judul: "Penjarangan Anakan", isi: "Sisakan 1-2 anakan terbaik per rumpun. Cabut anakan berlebih agar nutrisi terfokus ke tanaman utama." },
      { judul: "Perawatan Tandan", isi: "Bungkus tandan dengan plastik biru untuk melindungi dari hama dan mempercepat pematangan." }
    ],
    panen: [
      { judul: "Waktu Panen", isi: "Pisang dipanen 80-90 hari setelah bunga mekar. Panen saat buah sudah penuh tapi belum menguning." },
      { judul: "Ciri Siap Panen", isi: "Sudut buah sudah membulat, warna kulit dari hijau tua ke hijau muda, getah berkurang." },
      { judul: "Cara Panen", isi: "Potong tandan dengan parang tajam. Angkat dengan hati-hati agar tidak memar. Satu orang menopang tandan." },
      { judul: "Pasca Panen", isi: "Simpan di tempat teduh dan berventilasi. Pisang matang dalam 5-7 hari di suhu ruang." }
    ]
  },
  {
    id: "pepaya",
    nama: "Pepaya",
    emoji: "🍈",
    deskripsi: "Buah tropis cepat berbuah, kaya vitamin C dan enzim papain yang bernilai ekonomi.",
    pemupukan: [
      { judul: "Pupuk Dasar", isi: "Isi lubang tanam dengan kompos 20 kg, SP-36 100 g, dan KCl 50 g per lubang." },
      { judul: "Pemupukan Rutin (Tiap 2 Bulan)", isi: "Berikan NPK 15-15-15 sebanyak 150-200 g per tanaman, ditaburkan melingkar 50 cm dari batang." },
      { judul: "Pemupukan Saat Berbuah", isi: "Tingkatkan dosis KCl menjadi 200 g per tanaman untuk memperbesar dan mempermanis buah." }
    ],
    caraTanam: [
      { judul: "Persiapan Benih", isi: "Keluarkan biji dari buah matang, cuci bersih, jemur 1 hari. Semai di polybag kecil hingga tinggi 20-25 cm." },
      { judul: "Persiapan Lubang", isi: "Buat lubang 60x60x60 cm dengan jarak 2,5x2,5 m. Isi dengan campuran tanah dan kompos." },
      { judul: "Penanaman", isi: "Tanam 2-3 bibit per lubang. Setelah diketahui jenis kelaminnya (saat berbunga), sisakan 1 tanaman betina/hermafrodit." },
      { judul: "Perawatan", isi: "Bersihkan gulma, pangkas daun tua dan sakit. Ikat batang ke ajir jika angin kencang." }
    ],
    panen: [
      { judul: "Waktu Panen", isi: "Pepaya mulai berbuah umur 6-9 bulan setelah tanam. Panen pertama bisa berlanjut hingga 3-4 tahun." },
      { judul: "Ciri Siap Panen", isi: "Muncul garis kuning pada kulit buah (1-2 alur kuning). Untuk pasar jauh, panen saat 1/4 kuning." },
      { judul: "Cara Panen", isi: "Potong tangkai buah dengan pisau tajam. Tangani dengan hati-hati karena kulit mudah terluka." },
      { judul: "Pasca Panen", isi: "Simpan di suhu ruang untuk pematangan. Pepaya matang tahan 3-5 hari, di kulkas hingga 1 minggu." }
    ]
  },
  {
    id: "kedelai",
    nama: "Kedelai",
    emoji: "🫘",
    deskripsi: "Tanaman polong sumber protein nabati utama untuk tahu, tempe, dan kecap.",
    pemupukan: [
      { judul: "Inokulasi Rhizobium", isi: "Sebelum tanam, campur benih dengan bakteri Rhizobium japonicum untuk membantu fiksasi nitrogen." },
      { judul: "Pupuk Dasar", isi: "Berikan SP-36 75 kg/ha dan KCl 100 kg/ha. Urea hanya 50 kg/ha karena kedelai bisa mengikat N sendiri." },
      { judul: "Pemupukan Susulan (4 MST)", isi: "Aplikasikan KCl 50 kg/ha untuk mendukung pengisian biji yang optimal." }
    ],
    caraTanam: [
      { judul: "Persiapan Lahan", isi: "Olah tanah minimal, buat alur tanam dengan jarak antar baris 40 cm. pH tanah ideal 6-6,5." },
      { judul: "Penanaman", isi: "Tanam 2-3 benih per lubang dengan jarak dalam baris 15-20 cm. Kedalaman 3-4 cm." },
      { judul: "Penjarangan", isi: "Saat umur 10 hari, sisakan 2 tanaman terbaik per lubang." },
      { judul: "Pengairan", isi: "Kedelai butuh air cukup terutama saat berbunga dan pengisian polong. Hindari kekeringan di fase ini." }
    ],
    panen: [
      { judul: "Waktu Panen", isi: "Kedelai siap panen umur 75-100 hari. Panen saat 95% polong sudah berwarna kuning kecoklatan." },
      { judul: "Cara Panen", isi: "Cabut seluruh tanaman atau potong batang. Kumpulkan dan jemur 3-5 hari sebelum perontokan." },
      { judul: "Perontokan", isi: "Rontokkan biji dengan cara dipukul atau menggunakan mesin perontok. Tampi untuk memisahkan kotoran." },
      { judul: "Penyimpanan", isi: "Jemur biji hingga kadar air 11-12%. Simpan di karung bersih di tempat kering dan sejuk." }
    ]
  }
];

let tanamanAktif = null;
let tabAktif = 'pemupukan';

function renderKategori() {
  const ul = document.getElementById('kategoriUl');
  ul.innerHTML = tanamanData.map(t => `
    <li onclick="pilihTanaman('${t.id}')" id="li-${t.id}">
      <span>${t.emoji}</span> ${t.nama}
    </li>
  `).join('');
}

function pilihTanaman(id) {
  tanamanAktif = tanamanData.find(t => t.id === id);
  tabAktif = 'pemupukan';

  // Update aktif sidebar
  document.querySelectorAll('.kategori-list ul li').forEach(li => li.classList.remove('aktif'));
  document.getElementById('li-' + id).classList.add('aktif');

  renderKonten();
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
      <div>
        <h2>${t.nama}</h2>
        <p>${t.deskripsi}</p>
      </div>
    </div>

    <div class="tab-nav">
      <button class="tab-btn aktif" id="tab-btn-pemupukan" onclick="pilihTab('pemupukan')">🌿 Pemupukan</button>
      <button class="tab-btn" id="tab-btn-caraTanam" onclick="pilihTab('caraTanam')">🌱 Cara Tanam</button>
      <button class="tab-btn" id="tab-btn-panen" onclick="pilihTab('panen')">🌾 Panen</button>
    </div>

    <div class="tab-konten aktif" id="tab-pemupukan">
      <div class="info-box">💡 Pemupukan yang tepat waktu dan dosis yang sesuai adalah kunci hasil panen maksimal.</div>
      <div class="step-list">
        ${t.pemupukan.map((s, i) => `
          <div class="step-item">
            <div class="step-num">${i + 1}</div>
            <div>
              <h4>${s.judul}</h4>
              <p>${s.isi}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="tab-konten" id="tab-caraTanam">
      <div class="info-box">🌱 Ikuti langkah-langkah berikut untuk hasil tanam yang optimal dari awal hingga siap panen.</div>
      <div class="step-list">
        ${t.caraTanam.map((s, i) => `
          <div class="step-item">
            <div class="step-num">${i + 1}</div>
            <div>
              <h4>${s.judul}</h4>
              <p>${s.isi}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="tab-konten" id="tab-panen">
      <div class="info-box">🌾 Panen di waktu yang tepat dan penanganan pasca panen yang baik menentukan kualitas dan nilai jual.</div>
      <div class="step-list">
        ${t.panen.map((s, i) => `
          <div class="step-item">
            <div class="step-num">${i + 1}</div>
            <div>
              <h4>${s.judul}</h4>
              <p>${s.isi}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

renderKategori();
