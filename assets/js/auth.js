const SESSION_KEY = STORAGE_KEYS.session;

function getSession() {
  return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
}

function setSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function login(username, password) {
  const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.users) || '[]');
  const matchedUser = users.find((user) => user.username === username && user.password === password);

  if (!matchedUser) {
    throw new Error('Username atau password salah.');
  }

  const session = {
    userId: matchedUser.id,
    username: matchedUser.username,
    role: matchedUser.role,
    nama: matchedUser.nama
  };

  setSession(session);
  return matchedUser;
}

function logout() {
  clearSession();
  window.location.href = '../index.html';
}

function requireAuth(allowedRoles = []) {
  const session = getSession();

  if (!session) {
    window.location.href = '../index.html';
    return null;
  }

  if (allowedRoles.length && !allowedRoles.includes(session.role)) {
    window.location.href = `../${session.role}/dashboard.html`;
    return null;
  }

  return session;
}

window.getSession = getSession;
window.setSession = setSession;
window.clearSession = clearSession;
window.login = login;
window.logout = logout;
window.requireAuth = requireAuth;
