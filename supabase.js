// ===== SUPABASE CONFIG =====
const SUPABASE_URL = 'https://zcfodigbqtyrrlzsapgg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjZm9kaWdicXR5cnJsenNhcGdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5ODk0MzMsImV4cCI6MjA5MDU2NTQzM30.PKN3wNTIdk_ib3QG5ngybaiJUqAeya1c0CZg4KVzacI';

(function loadSupabase() {
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
  s.onload = function() {
    window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log('✅ Supabase connected');
    if (typeof onSupabaseReady === 'function') onSupabaseReady();
  };
  document.head.appendChild(s);
})();

// ===== AUTH =====
async function sbSignUp(email, password) {
  const { data, error } = await window.sb.auth.signUp({ email, password });
  return { data, error };
}
async function sbSignIn(email, password) {
  const { data, error } = await window.sb.auth.signInWithPassword({ email, password });
  return { data, error };
}
async function sbSignOut() {
  await window.sb.auth.signOut();
}
async function sbGetUser() {
  const { data } = await window.sb.auth.getUser();
  return data?.user || null;
}

// ===== PRODUK =====
async function sbGetProduk() {
  const { data } = await window.sb.from('produk').select('*').order('created_at', { ascending: false });
  return data || [];
}
async function sbTambahProduk(p) {
  const user = await sbGetUser();
  const { data, error } = await window.sb.from('produk').insert([{ ...p, user_id: user?.id || null }]).select();
  return { data, error };
}
async function sbHapusProduk(id) {
  const { error } = await window.sb.from('produk').delete().eq('id', id);
  return error;
}

// ===== TOPIK FORUM =====
async function sbGetTopik() {
  const { data } = await window.sb.from('topik').select('*').order('created_at', { ascending: false });
  return data || [];
}
async function sbTambahTopik(t) {
  const user = await sbGetUser();
  const { data, error } = await window.sb.from('topik').insert([{ ...t, user_id: user?.id }]).select();
  return { data, error };
}
async function sbUpdateTopik(id, updates) {
  const { error } = await window.sb.from('topik').update(updates).eq('id', id);
  return error;
}

// ===== KOMENTAR =====
async function sbGetKomentar(topikId) {
  const { data } = await window.sb.from('komentar').select('*').eq('topik_id', topikId).order('created_at', { ascending: true });
  return data || [];
}
async function sbTambahKomentar(k) {
  const { data, error } = await window.sb.from('komentar').insert([k]).select();
  return { data, error };
}
async function sbUpdateKomentar(id, updates) {
  const { error } = await window.sb.from('komentar').update(updates).eq('id', id);
  return error;
}

// ===== PROFIL =====
async function sbGetProfil() {
  const user = await sbGetUser();
  if (!user) return null;
  const { data } = await window.sb.from('profil').select('*').eq('user_id', user.id).single();
  return data;
}
async function sbSimpanProfil(p) {
  const user = await sbGetUser();
  if (!user) return;
  const { data, error } = await window.sb.from('profil').upsert([{ ...p, user_id: user.id, updated_at: new Date().toISOString() }], { onConflict: 'user_id' }).select();
  return { data, error };
}

// ===== TRANSAKSI KEUANGAN =====
async function sbGetTransaksi() {
  const user = await sbGetUser();
  if (!user) return [];
  const { data } = await window.sb.from('transaksi').select('*').eq('user_id', user.id).order('created_at', { ascending: false });
  return data || [];
}
async function sbTambahTransaksi(t) {
  const user = await sbGetUser();
  if (!user) return;
  const { data, error } = await window.sb.from('transaksi').insert([{ ...t, user_id: user.id }]).select();
  return { data, error };
}
async function sbHapusTransaksi(id) {
  const { error } = await window.sb.from('transaksi').delete().eq('id', id);
  return error;
}

// ===== ULASAN =====
async function sbGetUlasan(produkId) {
  const { data } = await window.sb.from('ulasan').select('*').eq('produk_id', produkId).order('created_at', { ascending: false });
  return data || [];
}
async function sbTambahUlasan(u) {
  const { data, error } = await window.sb.from('ulasan').insert([u]).select();
  return { data, error };
}

// ===== CEK LOGIN =====
function cekLogin(redirectUrl) {
  if (!window.sb) return true; // Kalau Supabase belum load, izinkan dulu
  window.sb.auth.getUser().then(function(res) {
    if (!res.data?.user) {
      var current = encodeURIComponent(window.location.href.split('/').pop());
      window.location.href = 'login.html?redirect=' + (redirectUrl || current);
    }
  });
}

function sudahLogin(callback) {
  if (!window.sb) { callback(false); return; }
  window.sb.auth.getUser().then(function(res) {
    callback(!!res.data?.user, res.data?.user);
  });
}
