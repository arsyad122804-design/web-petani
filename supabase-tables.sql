-- ===== TABEL PRODUK =====
create table if not exists produk (
  id bigserial primary key,
  nama text not null,
  kategori text not null,
  harga integer not null,
  satuan text,
  deskripsi text,
  stok integer default 0,
  berat text,
  penjual text,
  rating numeric(2,1) default 5.0,
  terjual integer default 0,
  terlaris boolean default false,
  img text,
  user_id uuid references auth.users(id),
  created_at timestamptz default now()
);

-- ===== TABEL TOPIK FORUM =====
create table if not exists topik (
  id bigserial primary key,
  judul text not null,
  isi text not null,
  kategori text,
  penulis text,
  avatar text default '🧑‍🌾',
  likes integer default 0,
  views integer default 0,
  balasan integer default 0,
  pinned boolean default false,
  user_id uuid references auth.users(id),
  created_at timestamptz default now()
);

-- ===== TABEL KOMENTAR =====
create table if not exists komentar (
  id bigserial primary key,
  topik_id bigint references topik(id) on delete cascade,
  nama text not null,
  avatar text default '🧑‍🌾',
  teks text not null,
  likes integer default 0,
  user_id uuid references auth.users(id),
  created_at timestamptz default now()
);

-- ===== TABEL PROFIL =====
create table if not exists profil (
  id bigserial primary key,
  user_id uuid references auth.users(id) unique,
  nama_depan text,
  nama_belakang text,
  jenis_kelamin text,
  tgl_lahir date,
  no_hp text,
  email text,
  bio text,
  foto_url text,
  alamat_lengkap text,
  kecamatan text,
  kota text,
  provinsi text,
  kode_pos text,
  link_maps text,
  jenis_petani text,
  pengalaman text,
  luas_lahan numeric,
  status_lahan text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ===== TABEL TRANSAKSI KEUANGAN =====
create table if not exists transaksi (
  id bigserial primary key,
  user_id uuid references auth.users(id),
  tipe text not null check (tipe in ('modal','panen')),
  tanggal date not null,
  ket text not null,
  kat text,
  jumlah integer not null,
  created_at timestamptz default now()
);

-- ===== TABEL ULASAN PRODUK =====
create table if not exists ulasan (
  id bigserial primary key,
  produk_id bigint references produk(id) on delete cascade,
  user_id uuid references auth.users(id),
  nama text not null,
  rating integer not null check (rating between 1 and 5),
  komentar text not null,
  verified boolean default false,
  created_at timestamptz default now()
);

-- ===== ROW LEVEL SECURITY =====
alter table produk enable row level security;
alter table topik enable row level security;
alter table komentar enable row level security;
alter table profil enable row level security;
alter table transaksi enable row level security;
alter table ulasan enable row level security;

-- Semua bisa baca
create policy "Public read produk" on produk for select using (true);
create policy "Public read topik" on topik for select using (true);
create policy "Public read komentar" on komentar for select using (true);
create policy "Public read ulasan" on ulasan for select using (true);

-- Hanya user sendiri yang bisa insert/update/delete
create policy "User insert produk" on produk for insert with check (auth.uid() = user_id);
create policy "User insert topik" on topik for insert with check (auth.uid() = user_id);
create policy "User insert komentar" on komentar for insert with check (true);
create policy "User insert ulasan" on ulasan for insert with check (true);
create policy "User manage profil" on profil for all using (auth.uid() = user_id);
create policy "User manage transaksi" on transaksi for all using (auth.uid() = user_id);
