const STORAGE_KEYS = {
  users: 'users',
  siswa: 'siswa',
  petugas: 'petugas',
  laptops: 'laptops',
  peminjaman: 'peminjaman',
  pengembalian: 'pengembalian',
  session: 'session'
};

const defaultUsers = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin', nama: 'Admin Utama', status: 'Aktif' },
  { id: 2, username: 'petugas', password: 'petugas123', role: 'petugas', nama: 'Petugas Lab', status: 'Aktif' },
  { id: 3, username: 'siswa', password: 'siswa123', role: 'siswa', nama: 'Siswa Demo', status: 'Aktif' }
];

const defaultSiswa = [
  { id: 1, nis: '2024001', nama: 'Aldo Pratama', kelas: 'XII RPL 1', jurusan: 'RPL', username: 'aldo', status: 'Aktif' },
  { id: 2, nis: '2024002', nama: 'Bunga Melati', kelas: 'XII TKJ 2', jurusan: 'TKJ', username: 'bunga', status: 'Aktif' },
  { id: 3, nis: '2024003', nama: 'Candra Wijaya', kelas: 'XI TBSM 1', jurusan: 'TBSM', username: 'candra', status: 'Aktif' },
  { id: 4, nis: '2024004', nama: 'Dewi Salsabila', kelas: 'XI RPL 2', jurusan: 'RPL', username: 'dewi', status: 'Aktif' },
  { id: 5, nis: '2024005', nama: 'Evan Dirga', kelas: 'XII DKV 1', jurusan: 'DKV', username: 'evan', status: 'Aktif' }
];

const defaultPetugas = [
  { id: 1, nip: '1987001', nama: 'Rina Permata', username: 'petugas', status: 'Aktif' },
  { id: 2, nip: '1987002', nama: 'Dimas Ardi', username: 'dimas', status: 'Aktif' }
];

const defaultLaptops = [
  { id: 1, kode: 'LP-001', nama: 'Laptop 01', merk: 'Dell', model: 'Latitude 3420', processor: 'Intel Core i5', ram: '8 GB', storage: '256 GB SSD', status: 'Tersedia', kondisi: 'Baik', lokasi: 'Lab RPL' },
  { id: 2, kode: 'LP-002', nama: 'Laptop 02', merk: 'Lenovo', model: 'ThinkBook 14', processor: 'Intel Core i5', ram: '16 GB', storage: '512 GB SSD', status: 'Tersedia', kondisi: 'Baik', lokasi: 'Lab RPL' },
  { id: 3, kode: 'LP-003', nama: 'Laptop 03', merk: 'Acer', model: 'Aspire 5', processor: 'AMD Ryzen 5', ram: '8 GB', storage: '512 GB SSD', status: 'Dipinjam', kondisi: 'Baik', lokasi: 'Lab TKJ' },
  { id: 4, kode: 'LP-004', nama: 'Laptop 04', merk: 'HP', model: 'Pavilion 14', processor: 'Intel Core i7', ram: '16 GB', storage: '512 GB SSD', status: 'Maintenance', kondisi: 'Perlu servis', lokasi: 'Lab TKJ' },
  { id: 5, kode: 'LP-005', nama: 'Laptop 05', merk: 'Asus', model: 'Vivobook 15', processor: 'Intel Core i5', ram: '8 GB', storage: '512 GB SSD', status: 'Tersedia', kondisi: 'Baik', lokasi: 'Lab DKV' },
  { id: 6, kode: 'LP-006', nama: 'Laptop 06', merk: 'Dell', model: 'Inspiron 15', processor: 'Intel Core i7', ram: '16 GB', storage: '1 TB SSD', status: 'Rusak', kondisi: 'Keyboard tidak berfungsi', lokasi: 'Lab TBSM' },
  { id: 7, kode: 'LP-007', nama: 'Laptop 07', merk: 'Lenovo', model: 'IdeaPad 5', processor: 'AMD Ryzen 7', ram: '16 GB', storage: '512 GB SSD', status: 'Tersedia', kondisi: 'Baik', lokasi: 'Lab RPL' },
  { id: 8, kode: 'LP-008', nama: 'Laptop 08', merk: 'HP', model: 'EliteBook 840', processor: 'Intel Core i5', ram: '8 GB', storage: '256 GB SSD', status: 'Dipinjam', kondisi: 'Baik', lokasi: 'Lab TBSM' },
  { id: 9, kode: 'LP-009', nama: 'Laptop 09', merk: 'Acer', model: 'Nitro 5', processor: 'Intel Core i7', ram: '16 GB', storage: '1 TB SSD', status: 'Tersedia', kondisi: 'Baik', lokasi: 'Lab DKV' },
  { id: 10, kode: 'LP-010', nama: 'Laptop 10', merk: 'MSI', model: 'Modern 14', processor: 'Intel Core i5', ram: '8 GB', storage: '512 GB SSD', status: 'Maintenance', kondisi: 'Perlu pengecekan layar', lokasi: 'Lab RPL' }
];

const defaultPeminjaman = [
  {
    id: 1,
    kode: 'PJ-2026001',
    siswaId: 1,
    laptopId: 3,
    tanggalPengajuan: '2026-09-10',
    tanggalPinjam: '2026-09-11',
    tanggalRencanaKembali: '2026-09-15',
    tanggalDikembalikan: '',
    keperluan: 'Mengerjakan project akhir semester',
    status: 'Disetujui',
    catatan: 'Laptop dipinjam untuk kebutuhan tugas besar.',
    petugasId: 1
  },
  {
    id: 2,
    kode: 'PJ-2026002',
    siswaId: 2,
    laptopId: 8,
    tanggalPengajuan: '2026-09-12',
    tanggalPinjam: '2026-09-13',
    tanggalRencanaKembali: '2026-09-18',
    tanggalDikembalikan: '',
    keperluan: 'Practice exam dan tugas coding',
    status: 'Dipinjam',
    catatan: 'Sudah diterima petugas.',
    petugasId: 1
  },
  {
    id: 3,
    kode: 'PJ-2026003',
    siswaId: 3,
    laptopId: 5,
    tanggalPengajuan: '2026-09-14',
    tanggalPinjam: '',
    tanggalRencanaKembali: '',
    tanggalDikembalikan: '',
    keperluan: 'Presentasi produk',
    status: 'Menunggu',
    catatan: 'Menunggu persetujuan petugas.',
    petugasId: null
  },
  {
    id: 4,
    kode: 'PJ-2026004',
    siswaId: 4,
    laptopId: 2,
    tanggalPengajuan: '2026-09-09',
    tanggalPinjam: '2026-09-09',
    tanggalRencanaKembali: '2026-09-12',
    tanggalDikembalikan: '2026-09-12',
    keperluan: 'Ujian praktik',
    status: 'Dikembalikan',
    catatan: 'Laptop dikembalikan sesuai jadwal.',
    petugasId: 2
  },
  {
    id: 5,
    kode: 'PJ-2026005',
    siswaId: 5,
    laptopId: 1,
    tanggalPengajuan: '2026-09-11',
    tanggalPinjam: '',
    tanggalRencanaKembali: '',
    tanggalDikembalikan: '',
    keperluan: 'Belajar desain grafis',
    status: 'Ditolak',
    catatan: 'Laptop tidak tersedia di jadwal yang diminta.',
    petugasId: 2
  }
];

const defaultPengembalian = [
  {
    id: 1,
    peminjamanId: 4,
    kondisi: 'Baik',
    catatan: 'Laptop kembali dengan kondisi baik.',
    tanggal: '2026-09-12',
    petugasId: 2
  }
];

function getLocalStorageData(key, fallback) {
  const stored = localStorage.getItem(key);

  if (!stored) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }

  try {
    const parsed = JSON.parse(stored);
    return parsed;
  } catch (error) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
}

function ensureSeedData() {
  if (!localStorage.getItem(STORAGE_KEYS.users)) {
    localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(defaultUsers));
  }

  if (!localStorage.getItem(STORAGE_KEYS.siswa)) {
    localStorage.setItem(STORAGE_KEYS.siswa, JSON.stringify(defaultSiswa));
  }

  if (!localStorage.getItem(STORAGE_KEYS.petugas)) {
    localStorage.setItem(STORAGE_KEYS.petugas, JSON.stringify(defaultPetugas));
  }

  if (!localStorage.getItem(STORAGE_KEYS.laptops)) {
    localStorage.setItem(STORAGE_KEYS.laptops, JSON.stringify(defaultLaptops));
  }

  if (!localStorage.getItem(STORAGE_KEYS.peminjaman)) {
    localStorage.setItem(STORAGE_KEYS.peminjaman, JSON.stringify(defaultPeminjaman));
  }

  if (!localStorage.getItem(STORAGE_KEYS.pengembalian)) {
    localStorage.setItem(STORAGE_KEYS.pengembalian, JSON.stringify(defaultPengembalian));
  }

  if (!localStorage.getItem(STORAGE_KEYS.session)) {
    localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(null));
  }
}

ensureSeedData();

const appData = {
  users: getLocalStorageData(STORAGE_KEYS.users, defaultUsers),
  siswa: getLocalStorageData(STORAGE_KEYS.siswa, defaultSiswa),
  petugas: getLocalStorageData(STORAGE_KEYS.petugas, defaultPetugas),
  laptops: getLocalStorageData(STORAGE_KEYS.laptops, defaultLaptops),
  peminjaman: getLocalStorageData(STORAGE_KEYS.peminjaman, defaultPeminjaman),
  pengembalian: getLocalStorageData(STORAGE_KEYS.pengembalian, defaultPengembalian),
  session: getLocalStorageData(STORAGE_KEYS.session, null)
};

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

window.appData = appData;
window.STORAGE_KEYS = STORAGE_KEYS;
window.saveData = saveData;
