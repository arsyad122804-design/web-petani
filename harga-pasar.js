const kotaData = [
  {
    id:"jakarta", nama:"Jakarta", emoji:"🏙️", provinsi:"DKI Jakarta",
    mapsQ:"Pasar+Induk+Kramat+Jati+Jakarta",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966!2d106.87!3d-6.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTYnMTIuMCJTIDEwNsKwNTInMTIuMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Induk Kramat Jati", alamat:"Jl. Raya Bogor, Kramat Jati", link:"https://maps.google.com/?q=Pasar+Induk+Kramat+Jati+Jakarta" },
      { nama:"Pasar Senen", alamat:"Jl. Senen Raya, Jakarta Pusat", link:"https://maps.google.com/?q=Pasar+Senen+Jakarta" },
      { nama:"Pasar Minggu", alamat:"Jl. Raya Pasar Minggu, Jakarta Selatan", link:"https://maps.google.com/?q=Pasar+Minggu+Jakarta" },
    ]
  },
  {
    id:"surabaya", nama:"Surabaya", emoji:"🌊", provinsi:"Jawa Timur",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957!2d112.74!3d-7.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTUnMDAuMCJTIDExMsKwNDQnMjQuMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Wonokromo", alamat:"Jl. Wonokromo, Surabaya Selatan", link:"https://maps.google.com/?q=Pasar+Wonokromo+Surabaya" },
      { nama:"Pasar Keputran", alamat:"Jl. Keputran, Surabaya Pusat", link:"https://maps.google.com/?q=Pasar+Keputran+Surabaya" },
      { nama:"Pasar Pabean", alamat:"Jl. Pabean, Surabaya Utara", link:"https://maps.google.com/?q=Pasar+Pabean+Surabaya" },
    ]
  },
  {
    id:"bandung", nama:"Bandung", emoji:"🌸", provinsi:"Jawa Barat",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960!2d107.61!3d-6.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMTIuMCJTIDEwN8KwMzYnMzYuMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Induk Gedebage", alamat:"Jl. Soekarno Hatta, Bandung", link:"https://maps.google.com/?q=Pasar+Induk+Gedebage+Bandung" },
      { nama:"Pasar Kosambi", alamat:"Jl. Ahmad Yani, Bandung", link:"https://maps.google.com/?q=Pasar+Kosambi+Bandung" },
      { nama:"Pasar Caringin", alamat:"Jl. Caringin, Bandung Selatan", link:"https://maps.google.com/?q=Pasar+Caringin+Bandung" },
    ]
  },
  {
    id:"yogyakarta", nama:"Yogyakarta", emoji:"🏛️", provinsi:"DIY",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953!2d110.36!3d-7.80!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDgnMDAuMCJTIDExMMKwMjEnMzYuMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Beringharjo", alamat:"Jl. Pabringan, Yogyakarta", link:"https://maps.google.com/?q=Pasar+Beringharjo+Yogyakarta" },
      { nama:"Pasar Kranggan", alamat:"Jl. Poncowinatan, Yogyakarta", link:"https://maps.google.com/?q=Pasar+Kranggan+Yogyakarta" },
      { nama:"Pasar Demangan", alamat:"Jl. Demangan Baru, Yogyakarta", link:"https://maps.google.com/?q=Pasar+Demangan+Yogyakarta" },
    ]
  },
  {
    id:"medan", nama:"Medan", emoji:"🌴", provinsi:"Sumatera Utara",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982!2d98.67!3d3.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzUnMjQuMCJOIDk4sKw0MCcxMi4wIkU!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Induk Lau Cih", alamat:"Jl. Lau Cih, Medan Tuntungan", link:"https://maps.google.com/?q=Pasar+Induk+Lau+Cih+Medan" },
      { nama:"Pasar Petisah", alamat:"Jl. Kota Baru, Medan Petisah", link:"https://maps.google.com/?q=Pasar+Petisah+Medan" },
      { nama:"Pasar Sei Sikambing", alamat:"Jl. Gatot Subroto, Medan", link:"https://maps.google.com/?q=Pasar+Sei+Sikambing+Medan" },
    ]
  },
  {
    id:"semarang", nama:"Semarang", emoji:"⚓", provinsi:"Jawa Tengah",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960!2d110.41!3d-6.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTknMjQuMCJTIDExMMKwMjQnMzYuMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Johar", alamat:"Jl. KH. Agus Salim, Semarang", link:"https://maps.google.com/?q=Pasar+Johar+Semarang" },
      { nama:"Pasar Bulu", alamat:"Jl. MT. Haryono, Semarang", link:"https://maps.google.com/?q=Pasar+Bulu+Semarang" },
      { nama:"Pasar Kobong", alamat:"Jl. Pengapon, Semarang Utara", link:"https://maps.google.com/?q=Pasar+Kobong+Semarang" },
    ]
  },
  {
    id:"makassar", nama:"Makassar", emoji:"🌅", provinsi:"Sulawesi Selatan",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973!2d119.42!3d-5.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDgnMjQuMCJTIDExOcKwMjUnMTIuMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Terong", alamat:"Jl. Terong, Makassar", link:"https://maps.google.com/?q=Pasar+Terong+Makassar" },
      { nama:"Pasar Sentral", alamat:"Jl. Chairil Anwar, Makassar", link:"https://maps.google.com/?q=Pasar+Sentral+Makassar" },
      { nama:"Pasar Pa'baeng-baeng", alamat:"Jl. Sultan Alauddin, Makassar", link:"https://maps.google.com/?q=Pasar+Pabaeng+Makassar" },
    ]
  },
  {
    id:"denpasar", nama:"Denpasar", emoji:"🌺", provinsi:"Bali",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944!2d115.21!3d-8.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzknMDAuMCJTIDExNcKwMTInMzYuMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Badung", alamat:"Jl. Gajah Mada, Denpasar", link:"https://maps.google.com/?q=Pasar+Badung+Denpasar" },
      { nama:"Pasar Kumbasari", alamat:"Jl. Gajah Mada, Denpasar", link:"https://maps.google.com/?q=Pasar+Kumbasari+Denpasar" },
      { nama:"Pasar Kreneng", alamat:"Jl. Kamboja, Denpasar", link:"https://maps.google.com/?q=Pasar+Kreneng+Denpasar" },
    ]
  },
  {
    id:"palembang", nama:"Palembang", emoji:"🌉", provinsi:"Sumatera Selatan",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984!2d104.75!3d-2.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTknMjQuMCJTIDEwNMKwNDUnMDAuMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Induk Jakabaring", alamat:"Jl. Jakabaring, Palembang", link:"https://maps.google.com/?q=Pasar+Jakabaring+Palembang" },
      { nama:"Pasar 16 Ilir", alamat:"Jl. Sudirman, Palembang", link:"https://maps.google.com/?q=Pasar+16+Ilir+Palembang" },
    ]
  },
  {
    id:"pekanbaru", nama:"Pekanbaru", emoji:"🛢️", provinsi:"Riau",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989!2d101.45!3d0.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMzAnMzYuMCJOIDEwMcKwMjcnMDAuMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Induk Agro", alamat:"Jl. Soekarno Hatta, Pekanbaru", link:"https://maps.google.com/?q=Pasar+Induk+Agro+Pekanbaru" },
      { nama:"Pasar Cik Puan", alamat:"Jl. Tuanku Tambusai, Pekanbaru", link:"https://maps.google.com/?q=Pasar+Cik+Puan+Pekanbaru" },
    ]
  },
  {
    id:"balikpapan", nama:"Balikpapan", emoji:"⛽", provinsi:"Kalimantan Timur",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966!2d116.83!3d-1.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnMTIuMCJTIDExNsKwNDknNTYuMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Klandasan", alamat:"Jl. Jend. Sudirman, Balikpapan", link:"https://maps.google.com/?q=Pasar+Klandasan+Balikpapan" },
      { nama:"Pasar Sepinggan", alamat:"Jl. Mulawarman, Balikpapan", link:"https://maps.google.com/?q=Pasar+Sepinggan+Balikpapan" },
    ]
  },
  {
    id:"manado", nama:"Manado", emoji:"🌊", provinsi:"Sulawesi Utara",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989!2d124.84!3d1.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjgnNDguMCJOIDEyNMKwNTAnMjQuMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Bersehati", alamat:"Jl. Hasanuddin, Manado", link:"https://maps.google.com/?q=Pasar+Bersehati+Manado" },
      { nama:"Pasar Pinasungkulan", alamat:"Jl. Wolter Monginsidi, Manado", link:"https://maps.google.com/?q=Pasar+Pinasungkulan+Manado" },
    ]
  },
  {
    id:"pontianak", nama:"Pontianak", emoji:"🌐", provinsi:"Kalimantan Barat",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989!2d109.33!3d-0.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMCcwNy4yIlMgMTA5wrAxOSc0OC4wIkU!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Flamboyan", alamat:"Jl. Gajahmada, Pontianak", link:"https://maps.google.com/?q=Pasar+Flamboyan+Pontianak" },
      { nama:"Pasar Mawar", alamat:"Jl. Pahlawan, Pontianak", link:"https://maps.google.com/?q=Pasar+Mawar+Pontianak" },
    ]
  },
  {
    id:"padang", nama:"Padang", emoji:"🏔️", provinsi:"Sumatera Barat",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988!2d100.35!3d-0.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDAnMTIuMCJTIDEwMMKwMjEnMDAuMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Raya Padang", alamat:"Jl. Pasar Raya, Padang", link:"https://maps.google.com/?q=Pasar+Raya+Padang" },
      { nama:"Pasar Lubuk Buaya", alamat:"Jl. Hamka, Padang", link:"https://maps.google.com/?q=Pasar+Lubuk+Buaya+Padang" },
    ]
  },
  {
    id:"malang", nama:"Malang", emoji:"🍎", provinsi:"Jawa Timur",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951!2d112.63!3d-7.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTgnNDguMCJTIDExMsKwMzcnNDguMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Besar Malang", alamat:"Jl. Pasar Besar, Malang", link:"https://maps.google.com/?q=Pasar+Besar+Malang" },
      { nama:"Pasar Blimbing", alamat:"Jl. Laksda Adi Sucipto, Malang", link:"https://maps.google.com/?q=Pasar+Blimbing+Malang" },
    ]
  },
  {
    id:"solo", nama:"Solo", emoji:"🎭", provinsi:"Jawa Tengah",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955!2d110.83!3d-7.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzQnMTIuMCJTIDExMMKwNDknNDguMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Gede Solo", alamat:"Jl. Jend. Urip Sumoharjo, Solo", link:"https://maps.google.com/?q=Pasar+Gede+Solo" },
      { nama:"Pasar Legi", alamat:"Jl. Sabang, Solo", link:"https://maps.google.com/?q=Pasar+Legi+Solo" },
    ]
  },
  {
    id:"bogor", nama:"Bogor", emoji:"🌧️", provinsi:"Jawa Barat",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962!2d106.80!3d-6.60!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Bogor", alamat:"Jl. Dewi Sartika, Bogor", link:"https://maps.google.com/?q=Pasar+Bogor" },
      { nama:"Pasar Anyar", alamat:"Jl. Merdeka, Bogor", link:"https://maps.google.com/?q=Pasar+Anyar+Bogor" },
    ]
  },
  {
    id:"mataram", nama:"Mataram", emoji:"🏝️", provinsi:"NTB",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951!2d116.11!3d-8.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzQnNDguMCJTIDExNsKwMDYnMzYuMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Cakranegara", alamat:"Jl. AA Gde Ngurah, Mataram", link:"https://maps.google.com/?q=Pasar+Cakranegara+Mataram" },
      { nama:"Pasar Kebon Roek", alamat:"Jl. Kebon Roek, Mataram", link:"https://maps.google.com/?q=Pasar+Kebon+Roek+Mataram" },
    ]
  },
  {
    id:"jayapura", nama:"Jayapura", emoji:"🦜", provinsi:"Papua",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989!2d140.72!3d-2.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMzEnNDguMCJTIDE0MMKwNDMnMTIuMCJF!5e0!3m2!1sid!2sid!4v1",
    pasar:[
      { nama:"Pasar Hamadi", alamat:"Jl. Hamadi, Jayapura", link:"https://maps.google.com/?q=Pasar+Hamadi+Jayapura" },
      { nama:"Pasar Youtefa", alamat:"Jl. Abepura, Jayapura", link:"https://maps.google.com/?q=Pasar+Youtefa+Jayapura" },
    ]
  },
  // ===== SUMATERA =====
  { id:"bandaaceh",   nama:"Banda Aceh",      emoji:"🕌", provinsi:"Aceh",             mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3986!2d95.32!3d5.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Aceh",alamat:"Jl. Diponegoro, Banda Aceh",link:"https://maps.google.com/?q=Pasar+Aceh+Banda+Aceh"}] },
  { id:"lhokseumawe", nama:"Lhokseumawe",     emoji:"🌊", provinsi:"Aceh",             mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3984!2d97.07!3d5.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Inpres Lhokseumawe",alamat:"Jl. Merdeka, Lhokseumawe",link:"https://maps.google.com/?q=Pasar+Lhokseumawe"}] },
  { id:"binjai",      nama:"Binjai",           emoji:"🌿", provinsi:"Sumatera Utara",   mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3982!2d98.48!3d3.60!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Tavip",alamat:"Jl. Jend. Sudirman, Binjai",link:"https://maps.google.com/?q=Pasar+Tavip+Binjai"}] },
  { id:"pematangsiantar",nama:"P. Siantar",   emoji:"🏔️", provinsi:"Sumatera Utara",   mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3975!2d99.07!3d2.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Horas",alamat:"Jl. Sutomo, Pematangsiantar",link:"https://maps.google.com/?q=Pasar+Horas+Pematangsiantar"}] },
  { id:"bukittinggi",  nama:"Bukittinggi",     emoji:"🏰", provinsi:"Sumatera Barat",   mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3984!2d100.37!3d-0.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Atas Bukittinggi",alamat:"Jl. Minangkabau, Bukittinggi",link:"https://maps.google.com/?q=Pasar+Atas+Bukittinggi"}] },
  { id:"jambi",        nama:"Jambi",           emoji:"🌴", provinsi:"Jambi",             mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3984!2d103.61!3d-1.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Angso Duo",alamat:"Jl. Dr. Sutomo, Jambi",link:"https://maps.google.com/?q=Pasar+Angso+Duo+Jambi"}] },
  { id:"bengkulu",     nama:"Bengkulu",        emoji:"🌺", provinsi:"Bengkulu",          mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3984!2d102.26!3d-3.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Minggu Bengkulu",alamat:"Jl. S. Parman, Bengkulu",link:"https://maps.google.com/?q=Pasar+Bengkulu"}] },
  { id:"pangkalpinang",nama:"Pangkalpinang",   emoji:"⛏️", provinsi:"Bangka Belitung",   mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3984!2d106.11!3d-2.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Pagi Pangkalpinang",alamat:"Jl. Masjid Jamik, Pangkalpinang",link:"https://maps.google.com/?q=Pasar+Pangkalpinang"}] },
  { id:"batam",        nama:"Batam",           emoji:"🚢", provinsi:"Kepulauan Riau",    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3984!2d104.03!3d1.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Induk Jodoh",alamat:"Jl. Teuku Umar, Batam",link:"https://maps.google.com/?q=Pasar+Jodoh+Batam"}] },
  { id:"tanjungpinang",nama:"Tanjungpinang",   emoji:"⚓", provinsi:"Kepulauan Riau",    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3984!2d104.45!3d0.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Baru Tanjungpinang",alamat:"Jl. Merdeka, Tanjungpinang",link:"https://maps.google.com/?q=Pasar+Tanjungpinang"}] },
  // ===== JAWA =====
  { id:"depok",        nama:"Depok",           emoji:"🏘️", provinsi:"Jawa Barat",        mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3964!2d106.82!3d-6.40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Depok Jaya",alamat:"Jl. Margonda Raya, Depok",link:"https://maps.google.com/?q=Pasar+Depok+Jaya"}] },
  { id:"tangerang",    nama:"Tangerang",       emoji:"✈️", provinsi:"Banten",            mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3965!2d106.63!3d-6.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Anyar Tangerang",alamat:"Jl. Daan Mogot, Tangerang",link:"https://maps.google.com/?q=Pasar+Anyar+Tangerang"}] },
  { id:"bekasi",       nama:"Bekasi",          emoji:"🏙️", provinsi:"Jawa Barat",        mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3965!2d107.00!3d-6.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Baru Bekasi",alamat:"Jl. Ir. H. Juanda, Bekasi",link:"https://maps.google.com/?q=Pasar+Baru+Bekasi"}] },
  { id:"cirebon",      nama:"Cirebon",         emoji:"🦐", provinsi:"Jawa Barat",        mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3963!2d108.56!3d-6.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Kanoman",alamat:"Jl. Kanoman, Cirebon",link:"https://maps.google.com/?q=Pasar+Kanoman+Cirebon"}] },
  { id:"tasikmalaya",  nama:"Tasikmalaya",     emoji:"🎋", provinsi:"Jawa Barat",        mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3958!2d108.22!3d-7.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Cikurubuk",alamat:"Jl. RE Martadinata, Tasikmalaya",link:"https://maps.google.com/?q=Pasar+Cikurubuk+Tasikmalaya"}] },
  { id:"magelang",     nama:"Magelang",        emoji:"🏯", provinsi:"Jawa Tengah",       mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3955!2d110.22!3d-7.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Rejowinangun",alamat:"Jl. Tentara Pelajar, Magelang",link:"https://maps.google.com/?q=Pasar+Rejowinangun+Magelang"}] },
  { id:"pekalongan",   nama:"Pekalongan",      emoji:"🎨", provinsi:"Jawa Tengah",       mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3960!2d109.68!3d-6.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Banjarsari",alamat:"Jl. Banjarsari, Pekalongan",link:"https://maps.google.com/?q=Pasar+Banjarsari+Pekalongan"}] },
  { id:"tegal",        nama:"Tegal",           emoji:"🌊", provinsi:"Jawa Tengah",       mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3960!2d109.13!3d-6.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Pagi Tegal",alamat:"Jl. Kolonel Sugiono, Tegal",link:"https://maps.google.com/?q=Pasar+Pagi+Tegal"}] },
  { id:"kediri",       nama:"Kediri",          emoji:"🏺", provinsi:"Jawa Timur",        mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3953!2d112.01!3d-7.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Pahing Kediri",alamat:"Jl. Dhoho, Kediri",link:"https://maps.google.com/?q=Pasar+Pahing+Kediri"}] },
  { id:"madiun",       nama:"Madiun",          emoji:"🚂", provinsi:"Jawa Timur",        mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3953!2d111.52!3d-7.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Besar Madiun",alamat:"Jl. Pahlawan, Madiun",link:"https://maps.google.com/?q=Pasar+Besar+Madiun"}] },
  { id:"blitar",       nama:"Blitar",          emoji:"🦅", provinsi:"Jawa Timur",        mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3953!2d112.16!3d-8.10!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Legi Blitar",alamat:"Jl. Mastrip, Blitar",link:"https://maps.google.com/?q=Pasar+Legi+Blitar"}] },
  { id:"mojokerto",    nama:"Mojokerto",       emoji:"🏛️", provinsi:"Jawa Timur",        mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3957!2d112.43!3d-7.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Tanjung Anyar",alamat:"Jl. Gajah Mada, Mojokerto",link:"https://maps.google.com/?q=Pasar+Tanjung+Anyar+Mojokerto"}] },
  { id:"batu",         nama:"Batu",            emoji:"🍎", provinsi:"Jawa Timur",        mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3951!2d122.52!3d-7.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Batu",alamat:"Jl. Dewi Sartika, Batu",link:"https://maps.google.com/?q=Pasar+Batu+Malang"}] },
  // ===== KALIMANTAN =====
  { id:"samarinda",    nama:"Samarinda",       emoji:"🌳", provinsi:"Kalimantan Timur",  mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d117.14!3d-0.50!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Pagi Samarinda",alamat:"Jl. Gajah Mada, Samarinda",link:"https://maps.google.com/?q=Pasar+Pagi+Samarinda"}] },
  { id:"tarakan",      nama:"Tarakan",         emoji:"🐟", provinsi:"Kalimantan Utara",  mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d117.63!3d3.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Beringin",alamat:"Jl. Yos Sudarso, Tarakan",link:"https://maps.google.com/?q=Pasar+Beringin+Tarakan"}] },
  { id:"palangkaraya", nama:"Palangkaraya",    emoji:"🌿", provinsi:"Kalimantan Tengah", mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d113.92!3d-2.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Kahayan",alamat:"Jl. Yos Sudarso, Palangkaraya",link:"https://maps.google.com/?q=Pasar+Kahayan+Palangkaraya"}] },
  { id:"banjarmasin",  nama:"Banjarmasin",     emoji:"🚤", provinsi:"Kalimantan Selatan",mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d114.59!3d-3.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Terapung",alamat:"Sungai Barito, Banjarmasin",link:"https://maps.google.com/?q=Pasar+Terapung+Banjarmasin"}] },
  { id:"singkawang",   nama:"Singkawang",      emoji:"🏮", provinsi:"Kalimantan Barat",  mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d108.99!3d0.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Hongkong",alamat:"Jl. Diponegoro, Singkawang",link:"https://maps.google.com/?q=Pasar+Singkawang"}] },
  // ===== SULAWESI =====
  { id:"palu",         nama:"Palu",            emoji:"🌊", provinsi:"Sulawesi Tengah",   mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d119.87!3d-0.90!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Masomba",alamat:"Jl. Sis Aljufri, Palu",link:"https://maps.google.com/?q=Pasar+Masomba+Palu"}] },
  { id:"kendari",      nama:"Kendari",         emoji:"⚓", provinsi:"Sulawesi Tenggara", mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d122.52!3d-3.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Baru Kendari",alamat:"Jl. Saosao, Kendari",link:"https://maps.google.com/?q=Pasar+Baru+Kendari"}] },
  { id:"gorontalo",    nama:"Gorontalo",       emoji:"🌽", provinsi:"Gorontalo",         mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d123.06!3d0.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Sentral Gorontalo",alamat:"Jl. Agus Salim, Gorontalo",link:"https://maps.google.com/?q=Pasar+Sentral+Gorontalo"}] },
  { id:"palopo",       nama:"Palopo",          emoji:"🌾", provinsi:"Sulawesi Selatan",  mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d120.20!3d-3.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Sentral Palopo",alamat:"Jl. Andi Djemma, Palopo",link:"https://maps.google.com/?q=Pasar+Sentral+Palopo"}] },
  { id:"parepare",     nama:"Parepare",        emoji:"🚢", provinsi:"Sulawesi Selatan",  mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d119.63!3d-4.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Sentral Parepare",alamat:"Jl. Bau Massepe, Parepare",link:"https://maps.google.com/?q=Pasar+Sentral+Parepare"}] },
  // ===== NTB, NTT, MALUKU, PAPUA =====
  { id:"bima",         nama:"Bima",            emoji:"🐎", provinsi:"NTB",               mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d118.72!3d-8.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Raya Bima",alamat:"Jl. Soekarno Hatta, Bima",link:"https://maps.google.com/?q=Pasar+Raya+Bima"}] },
  { id:"kupang",       nama:"Kupang",          emoji:"🌅", provinsi:"NTT",               mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d123.61!3d-10.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Inpres Naikoten",alamat:"Jl. Timor Raya, Kupang",link:"https://maps.google.com/?q=Pasar+Naikoten+Kupang"}] },
  { id:"ternate",      nama:"Ternate",         emoji:"🌋", provinsi:"Maluku Utara",      mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d127.38!3d0.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Gamalama",alamat:"Jl. Pasar, Ternate",link:"https://maps.google.com/?q=Pasar+Gamalama+Ternate"}] },
  { id:"ambon",        nama:"Ambon",           emoji:"🐚", provinsi:"Maluku",            mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d128.18!3d-3.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Mardika",alamat:"Jl. Yos Sudarso, Ambon",link:"https://maps.google.com/?q=Pasar+Mardika+Ambon"}] },
  { id:"sorong",       nama:"Sorong",          emoji:"🦜", provinsi:"Papua Barat",       mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d131.26!3d-0.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Remu",alamat:"Jl. Basuki Rahmat, Sorong",link:"https://maps.google.com/?q=Pasar+Remu+Sorong"}] },
  { id:"jayapura",     nama:"Jayapura",        emoji:"🦅", provinsi:"Papua",             mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966!2d140.72!3d-2.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1", pasar:[{nama:"Pasar Hamadi",alamat:"Jl. Hamadi, Jayapura",link:"https://maps.google.com/?q=Pasar+Hamadi+Jayapura"},{nama:"Pasar Youtefa",alamat:"Jl. Abepura, Jayapura",link:"https://maps.google.com/?q=Pasar+Youtefa+Jayapura"}] },
];

const hargaData = {
  sayur: [
    { nama:"🥬 Kangkung",      harga:4000,  ubah:+200,  trend:"naik"   },
    { nama:"🌿 Bayam",         harga:5000,  ubah:0,     trend:"stabil" },
    { nama:"🥦 Brokoli",       harga:18000, ubah:-1000, trend:"turun"  },
    { nama:"🌶️ Cabai Merah",   harga:35000, ubah:+2000, trend:"naik"   },
    { nama:"🧅 Bawang Merah",  harga:28000, ubah:-500,  trend:"turun"  },
    { nama:"🧄 Bawang Putih",  harga:32000, ubah:0,     trend:"stabil" },
    { nama:"🥕 Wortel",        harga:12000, ubah:+500,  trend:"naik"   },
    { nama:"🍅 Tomat",         harga:8000,  ubah:-1000, trend:"turun"  },
    { nama:"🥒 Mentimun",      harga:6000,  ubah:0,     trend:"stabil" },
    { nama:"🍆 Terong",        harga:7000,  ubah:+300,  trend:"naik"   },
  ],
  buah: [
    { nama:"🍌 Pisang Cavendish", harga:12000, ubah:+500,  trend:"naik"   },
    { nama:"🍉 Semangka",         harga:6000,  ubah:-500,  trend:"turun"  },
    { nama:"🍊 Jeruk Siam",       harga:18000, ubah:0,     trend:"stabil" },
    { nama:"🥭 Mangga Harum Manis",harga:22000, ubah:+2000, trend:"naik"   },
    { nama:"🍍 Nanas",            harga:8000,  ubah:-1000, trend:"turun"  },
    { nama:"🍈 Pepaya",           harga:5000,  ubah:0,     trend:"stabil" },
    { nama:"🍇 Anggur Lokal",     harga:35000, ubah:+3000, trend:"naik"   },
    { nama:"🥝 Jambu Biji",       harga:10000, ubah:-500,  trend:"turun"  },
  ],
  panen: [
    { nama:"🌾 Beras Medium",   harga:12000, ubah:+200,  trend:"naik"   },
    { nama:"🌾 Beras Premium",  harga:15000, ubah:0,     trend:"stabil" },
    { nama:"🌽 Jagung Pipilan", harga:5500,  ubah:+100,  trend:"naik"   },
    { nama:"🫘 Kedelai",        harga:9000,  ubah:-500,  trend:"turun"  },
    { nama:"🥜 Kacang Tanah",   harga:18000, ubah:0,     trend:"stabil" },
    { nama:"🌿 Singkong",       harga:3000,  ubah:+200,  trend:"naik"   },
    { nama:"🍠 Ubi Jalar",      harga:6000,  ubah:-300,  trend:"turun"  },
  ]
};

// Variasi harga per kota (multiplier)
const kotaMultiplier = {
  jakarta:1.15, surabaya:1.05, bandung:1.08, yogyakarta:1.0,
  medan:1.1, semarang:1.03, makassar:1.12, denpasar:1.2,
  palembang:1.02, pekanbaru:1.08, balikpapan:1.18, manado:1.14,
  pontianak:1.1, samarinda:1.16, padang:1.04, malang:1.02,
  solo:1.01, bogor:1.06, mataram:1.13, jayapura:1.35,
  bandaaceh:1.06, lhokseumawe:1.07, binjai:1.04, pematangsiantar:1.05,
  bukittinggi:1.05, jambi:1.03, bengkulu:1.04, pangkalpinang:1.08,
  batam:1.12, tanjungpinang:1.1, depok:1.09, tangerang:1.1,
  bekasi:1.08, cirebon:1.04, tasikmalaya:1.03, magelang:1.02,
  pekalongan:1.03, tegal:1.03, kediri:1.02, madiun:1.01,
  blitar:1.01, mojokerto:1.03, batu:1.04, tarakan:1.2,
  palangkaraya:1.12, banjarmasin:1.08, singkawang:1.1, samarinda:1.16,
  palu:1.1, kendari:1.12, gorontalo:1.1, palopo:1.08,
  parepare:1.07, bima:1.1, kupang:1.15, ternate:1.25,
  ambon:1.22, sorong:1.3
};

let kotaAktif = null;
let tabAktif = 'sayur';
let sliderPos = 0;
const perView = 6;

function init() {
  const now = new Date();
  document.getElementById('hpTanggal').textContent =
    '📅 ' + now.toLocaleDateString('id-ID', { weekday:'long', year:'numeric', month:'long', day:'numeric' });

  const grid = document.getElementById('kotaGrid');
  grid.innerHTML = kotaData.map(k => `
    <div class="kota-card" id="kota-${k.id}" onclick="pilihKota('${k.id}')">
      <span class="kota-emoji">${k.emoji}</span>
      <div class="kota-nama">${k.nama}</div>
      <div class="kota-pasar">${k.pasar.length} pasar</div>
    </div>
  `).join('');
}

function slideKota(dir) {
  const outer = document.querySelector('.kota-track-outer');
  const card  = document.querySelector('.kota-card');
  if (!outer || !card) return;
  const cardW = card.offsetWidth + 12;
  const maxPos = Math.max(0, kotaData.length - perView);
  sliderPos = Math.max(0, Math.min(sliderPos + dir, maxPos));
  document.getElementById('kotaGrid').style.transform = `translateX(-${sliderPos * cardW}px)`;
}

window.addEventListener('resize', () => {
  sliderPos = 0;
  document.getElementById('kotaGrid').style.transform = 'translateX(0)';
});

function pilihKota(id) {
  kotaAktif = kotaData.find(k => k.id === id);
  document.querySelectorAll('.kota-card').forEach(c => c.classList.remove('aktif'));
  document.getElementById('kota-' + id).classList.add('aktif');

  // Header kota
  document.getElementById('hpKotaHeader').innerHTML = `
    <span class="kh-emoji">${kotaAktif.emoji}</span>
    <div>
      <h3>${kotaAktif.nama}</h3>
      <p>${kotaAktif.provinsi} &nbsp;•&nbsp; Update: ${new Date().toLocaleTimeString('id-ID', {hour:'2-digit',minute:'2-digit'})} WIB</p>
    </div>
  `;

  // Maps
  document.getElementById('mapsContainer').innerHTML =
    `<iframe src="${kotaAktif.mapsEmbed}" allowfullscreen loading="lazy"></iframe>`;

  // Pasar list
  document.getElementById('pasarList').innerHTML = kotaAktif.pasar.map(p => `
    <a class="pasar-item" href="${p.link}" target="_blank">
      <span class="pi-icon">🏪</span>
      <div>
        <div class="pi-nama">${p.nama}</div>
        <div class="pi-alamat">${p.alamat}</div>
      </div>
      <span class="pi-arrow">Buka Maps →</span>
    </a>
  `).join('');

  document.getElementById('hpContent').style.display = 'block';
  document.getElementById('hpPlaceholder').style.display = 'none';

  renderTabel();
  document.getElementById('hpContent').scrollIntoView({ behavior:'smooth', block:'start' });
}

function switchKomoditas(tab, el) {
  tabAktif = tab;
  document.querySelectorAll('.hp-tab').forEach(b => b.classList.remove('aktif'));
  el.classList.add('aktif');
  renderTabel();
}

function renderTabel() {
  if (!kotaAktif) return;
  const mult = kotaMultiplier[kotaAktif.id] || 1;
  const data = hargaData[tabAktif];
  const tbody = document.getElementById('hpTabelBody');

  tbody.innerHTML = data.map(item => {
    const harga = Math.round(item.harga * mult / 100) * 100;
    const ubah  = Math.round(item.ubah * mult / 100) * 100;
    const ubahText = ubah > 0 ? `▲ +${ubah.toLocaleString('id-ID')}` : ubah < 0 ? `▼ ${ubah.toLocaleString('id-ID')}` : '— Stabil';
    return `
      <tr>
        <td>${item.nama}</td>
        <td class="harga-val">Rp ${harga.toLocaleString('id-ID')}</td>
        <td class="${item.trend}">${ubahText}</td>
        <td>
          <div class="trend-bar">
            <div class="trend-dot ${item.trend}"></div>
            <span style="font-size:0.78rem;color:#aaa">${item.trend}</span>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

init();
