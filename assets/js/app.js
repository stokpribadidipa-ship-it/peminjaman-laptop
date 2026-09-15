const { users, siswa, petugas, laptops, peminjaman, pengembalian } = window.appData;

function getNextId(collection) {
  return collection.length ? Math.max(...collection.map((item) => Number(item.id || 0))) + 1 : 1;
}

function getCurrentDate() {
  return new Date().toISOString().slice(0, 10);
}

function filterBySearch(list, searchTerm, fields) {
  if (!searchTerm) return list;
  const query = searchTerm.toLowerCase();
  return list.filter((item) => fields.some((field) => String(item[field] || '').toLowerCase().includes(query)));
}

function calculateDashboardStats() {
  const laptops = JSON.parse(localStorage.getItem(STORAGE_KEYS.laptops) || '[]');
  const peminjamanList = JSON.parse(localStorage.getItem(STORAGE_KEYS.peminjaman) || '[]');
  const siswaList = JSON.parse(localStorage.getItem(STORAGE_KEYS.siswa) || '[]');

  const totalLaptop = laptops.length;
  const tersedia = laptops.filter((laptop) => laptop.status === 'Tersedia').length;
  const dipinjam = laptops.filter((laptop) => laptop.status === 'Dipinjam').length;
  const maintenance = laptops.filter((laptop) => laptop.status === 'Maintenance').length;
  const totalSiswa = siswaList.length;
  const totalPeminjaman = peminjamanList.length;
  const menunggu = peminjamanList.filter((item) => item.status === 'Menunggu').length;
  const selesai = peminjamanList.filter((item) => item.status === 'Dikembalikan').length;

  return { totalLaptop, tersedia, dipinjam, maintenance, totalSiswa, totalPeminjaman, menunggu, selesai };
}

function buildStatCard(title, value, icon, color = 'blue', hint = '') {
  return `
    <div class="card rounded-2xl p-4">
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="text-sm text-slate-500">${title}</p>
          <h3 class="mt-2 text-2xl font-bold text-slate-800">${value}</h3>
          <p class="mt-2 text-xs text-slate-500">${hint}</p>
        </div>
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-${color}-100 text-${color}-600">
          <i data-lucide="${icon}" class="w-5 h-5"></i>
        </div>
      </div>
    </div>
  `;
}

function getLaptopById(laptopId) {
  const laptops = JSON.parse(localStorage.getItem(STORAGE_KEYS.laptops) || '[]');
  return laptops.find((laptop) => Number(laptop.id) === Number(laptopId));
}

function getSiswaById(siswaId) {
  const siswaList = JSON.parse(localStorage.getItem(STORAGE_KEYS.siswa) || '[]');
  return siswaList.find((item) => Number(item.id) === Number(siswaId));
}

function getPetugasById(petugasId) {
  const petugasList = JSON.parse(localStorage.getItem(STORAGE_KEYS.petugas) || '[]');
  return petugasList.find((item) => Number(item.id) === Number(petugasId));
}

function getUserByUsername(username) {
  const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.users) || '[]');
  return users.find((item) => item.username === username);
}

function ensureLaptopStatusConsistency() {
  const laptops = JSON.parse(localStorage.getItem(STORAGE_KEYS.laptops) || '[]');
  const peminjamanList = JSON.parse(localStorage.getItem(STORAGE_KEYS.peminjaman) || '[]');

  laptops.forEach((laptop) => {
    const active = peminjamanList.find((item) => Number(item.laptopId) === Number(laptop.id) && ['Disetujui', 'Dipinjam'].includes(item.status));
    if (active) {
      laptop.status = 'Dipinjam';
    } else if (laptop.status === 'Dipinjam') {
      laptop.status = 'Tersedia';
    }
  });

  localStorage.setItem(STORAGE_KEYS.laptops, JSON.stringify(laptops));
}

window.getNextId = getNextId;
window.getCurrentDate = getCurrentDate;
window.filterBySearch = filterBySearch;
window.calculateDashboardStats = calculateDashboardStats;
window.buildStatCard = buildStatCard;
window.getLaptopById = getLaptopById;
window.getSiswaById = getSiswaById;
window.getPetugasById = getPetugasById;
window.getUserByUsername = getUserByUsername;
window.ensureLaptopStatusConsistency = ensureLaptopStatusConsistency;
