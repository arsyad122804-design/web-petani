function switchLoginTab(tab) {
  document.getElementById('formMasuk').style.display  = tab === 'masuk'  ? 'block' : 'none';
  document.getElementById('formDaftar').style.display = tab === 'daftar' ? 'block' : 'none';
  document.getElementById('tabMasuk').classList.toggle('aktif',  tab === 'masuk');
  document.getElementById('tabDaftar').classList.toggle('aktif', tab === 'daftar');
}

function togglePass(id, btn) {
  var input = document.getElementById(id);
  if (input.type === 'password') { input.type = 'text'; btn.textContent = '🙈'; }
  else { input.type = 'password'; btn.textContent = '👁️'; }
}

function showError(id, msg) {
  document.getElementById(id).textContent = msg;
}

async function doLogin() {
  var email = document.getElementById('loginEmail').value.trim();
  var pass  = document.getElementById('loginPass').value;
  showError('loginError', '');
  if (!email || !pass) { showError('loginError', 'Email dan password wajib diisi.'); return; }

  var btn = document.querySelector('#formMasuk .btn-login');
  btn.textContent = '⏳ Memproses...'; btn.disabled = true;

  var res = await sbSignIn(email, pass);
  btn.textContent = '🚀 Masuk'; btn.disabled = false;

  if (res.error) {
    showError('loginError', '❌ ' + (res.error.message === 'Invalid login credentials' ? 'Email atau password salah.' : res.error.message));
    return;
  }

  // Simpan nama dari profil
  var profil = await sbGetProfil();
  if (profil) localStorage.setItem('akunProfil', JSON.stringify({ namaDepan: profil.nama_depan, namaBelakang: profil.nama_belakang, email: profil.email, noHp: profil.no_hp }));

  // Redirect ke halaman sebelumnya atau marketplace
  var redirect = new URLSearchParams(window.location.search).get('redirect') || 'marketplace.html';
  window.location.href = redirect;
}

async function doRegister() {
  var nama  = document.getElementById('regNama').value.trim();
  var email = document.getElementById('regEmail').value.trim();
  var pass  = document.getElementById('regPass').value;
  showError('regError', '');

  if (!nama)  { showError('regError', 'Nama wajib diisi.'); return; }
  if (!email) { showError('regError', 'Email wajib diisi.'); return; }
  if (pass.length < 6) { showError('regError', 'Password minimal 6 karakter.'); return; }

  var btn = document.querySelector('#formDaftar .btn-login');
  btn.textContent = '⏳ Mendaftar...'; btn.disabled = true;

  var res = await sbSignUp(email, pass);
  btn.textContent = '✅ Buat Akun'; btn.disabled = false;

  if (res.error) { showError('regError', '❌ ' + res.error.message); return; }

  // Simpan nama ke profil
  if (res.data?.user) {
    var parts = nama.split(' ');
    await sbSimpanProfil({ nama_depan: parts[0], nama_belakang: parts.slice(1).join(' '), email });
  }

  alert('✅ Akun berhasil dibuat! Silakan masuk.');
  switchLoginTab('masuk');
  document.getElementById('loginEmail').value = email;
}

// Cek sudah login
function onSupabaseReady() {
  sbGetUser().then(function(user) {
    if (user) {
      var redirect = new URLSearchParams(window.location.search).get('redirect') || 'marketplace.html';
      window.location.href = redirect;
    }
  });
}

async function loginGoogle() {
  if (!window.sb) { alert('Koneksi belum siap, coba lagi.'); return; }
  var redirect = new URLSearchParams(window.location.search).get('redirect') || 'home.html';
  var { error } = await window.sb.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin + '/' + redirect }
  });
  if (error) alert('Gagal login Google: ' + error.message);
}

async function loginFacebook() {
  if (!window.sb) { alert('Koneksi belum siap, coba lagi.'); return; }
  var redirect = new URLSearchParams(window.location.search).get('redirect') || 'home.html';
  var { error } = await window.sb.auth.signInWithOAuth({
    provider: 'facebook',
    options: { redirectTo: window.location.origin + '/' + redirect }
  });
  if (error) alert('Gagal login Facebook: ' + error.message);
}
