const appRoot = document.body;

function createIcon(iconName, classes = 'w-4 h-4') {
  const icon = document.createElement('i');
  icon.setAttribute('data-lucide', iconName);
  icon.className = classes;
  return icon;
}

function buildSidebar(role, currentPage) {
  const links = {
    admin: [
      { label: 'Dashboard', href: 'dashboard.html', icon: 'layout-dashboard' },
      { label: 'Data Siswa', href: 'siswa.html', icon: 'users' },
      { label: 'Data Petugas', href: 'petugas.html', icon: 'user-cog' },
      { label: 'Data User', href: 'users.html', icon: 'shield-user' },
      { label: 'Data Laptop', href: 'laptop.html', icon: 'laptop' },
      { label: 'Data Peminjaman', href: 'peminjaman.html', icon: 'clipboard-list' },
      { label: 'Data Pengembalian', href: 'pengembalian.html', icon: 'package-check' },
      { label: 'Laporan', href: 'laporan.html', icon: 'file-text' },
      { label: 'Pengaturan', href: 'pengaturan.html', icon: 'settings' }
    ],
    petugas: [
      { label: 'Dashboard', href: 'dashboard.html', icon: 'layout-dashboard' },
      { label: 'Data Laptop', href: 'laptop.html', icon: 'laptop' },
      { label: 'Permintaan Peminjaman', href: 'peminjaman.html', icon: 'clipboard-list' },
      { label: 'Pengembalian', href: 'pengembalian.html', icon: 'package-check' },
      { label: 'Peminjaman Aktif', href: 'aktif.html', icon: 'clock3' },
      { label: 'Riwayat', href: 'riwayat.html', icon: 'history' }
    ],
    siswa: [
      { label: 'Dashboard', href: 'dashboard.html', icon: 'layout-dashboard' },
      { label: 'Laptop', href: 'laptop.html', icon: 'laptop' },
      { label: 'Ajukan Peminjaman', href: 'peminjaman.html', icon: 'clipboard-plus' },
      { label: 'Status Peminjaman', href: 'status.html', icon: 'circle-check-big' },
      { label: 'Peminjaman Aktif', href: 'aktif.html', icon: 'clock3' },
      { label: 'Riwayat', href: 'riwayat.html', icon: 'history' }
    ]
  };

  const items = links[role] || [];

  return `
    <aside class="sidebar desktop-sidebar fixed inset-y-0 left-0 hidden md:flex flex-col p-4">
      <div class="flex items-center gap-3 px-3 py-4 border-b border-slate-700">
        <img src="../assets/images/laptop-school-mark.svg" alt="Logo Laptop School" class="h-10 w-10 shrink-0" />
        <div>
          <h1 class="text-lg font-bold text-white">Laptop School</h1>
          <p class="text-xs text-slate-400">Management System</p>
        </div>
      </div>
      <nav class="mt-6 space-y-1">
        ${items.map(item => `
          <a href="${item.href}" class="sidebar-link ${currentPage === item.href ? 'active' : ''} flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300">
            <i data-lucide="${item.icon}" class="w-4 h-4"></i>
            <span>${item.label}</span>
          </a>
        `).join('')}
      </nav>
      <div class="mt-auto rounded-2xl bg-slate-800/80 border border-slate-700 p-3">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs text-slate-400">Login sebagai</p>
            <p class="text-sm font-semibold text-white">${role.toUpperCase()}</p>
          </div>
          <button onclick="logout()" class="p-2 rounded-lg bg-red-500/10 text-red-300 hover:bg-red-500/20">
            <i data-lucide="log-out" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </aside>

    <div class="mobile-sidebar mobile-drawer fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-slate-900 p-4 shadow-2xl md:hidden">
      <div class="flex items-center justify-between border-b border-slate-700 pb-4">
        <div class="flex items-center gap-3">
          <img src="../assets/images/laptop-school-mark.svg" alt="Logo Laptop School" class="h-10 w-10 shrink-0" />
          <div>
            <h1 class="text-base font-bold text-white">Laptop School</h1>
          </div>
        </div>
        <button id="closeDrawer" class="p-2 rounded-lg bg-slate-800 text-slate-300">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>
      <nav class="mt-6 space-y-1">
        ${items.map(item => `
          <a href="${item.href}" class="sidebar-link ${currentPage === item.href ? 'active' : ''} flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300">
            <i data-lucide="${item.icon}" class="w-4 h-4"></i>
            <span>${item.label}</span>
          </a>
        `).join('')}
      </nav>
      <div class="mt-auto pt-6 border-t border-slate-700">
        <button onclick="logout()" class="w-full flex items-center justify-center gap-2 rounded-xl bg-red-500/10 px-3 py-2 text-sm font-medium text-red-300">
          <i data-lucide="log-out" class="w-4 h-4"></i>
          Logout
        </button>
      </div>
    </div>
  `;
}

function buildTopbar(title, subtitle, role) {
  const session = getSession();
  return `
    <header class="sticky top-0 z-20 border-b border-slate-200/80 bg-white/85 shadow-sm shadow-slate-900/5 backdrop-blur-sm">
      <div class="flex items-center justify-between gap-3 px-4 py-3 md:px-6">
        <div class="flex items-center gap-3">
          <button id="openDrawer" class="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm">
            <i data-lucide="menu" class="w-5 h-5"></i>
          </button>
          <div>
            <p class="text-xs uppercase tracking-[0.16em] font-semibold text-slate-500">${role.toUpperCase()} · ${subtitle}</p>
            <h2 class="text-xl font-bold text-slate-800">${title}</h2>
          </div>
        </div>
        <div class="topbar-actions flex items-center gap-3">
          <div class="hidden sm:flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            <i data-lucide="search" class="w-4 h-4 text-slate-500"></i>
            <input id="globalSearchInput" type="text" placeholder="Cari data..." class="bg-transparent text-sm outline-none w-32 lg:w-48">
          </div>
          <div class="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs">
              ${session?.nama?.charAt(0) || 'U'}
            </div>
            <div class="hidden sm:block">
              <p class="text-sm font-semibold text-slate-800">${session?.nama || 'User'}</p>
              <p class="text-xs text-slate-500">${subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderPageShell({ role, title, subtitle, currentPage, content, extraActions = '' }) {
  const session = getSession();
  const body = document.body;
  body.className = 'app-shell';

  document.body.innerHTML = `
    ${buildSidebar(role, currentPage)}
    <div class="content-area md:ml-[280px] min-h-screen">
      ${buildTopbar(title, subtitle, role)}
      <main class="p-4 md:p-6">
        ${extraActions}
        ${content}
      </main>
    </div>
    <div id="mobileOverlay" class="fixed inset-0 z-30 hidden bg-slate-900/55 md:hidden"></div>
    <div id="toastStack" class="toast-stack"></div>
  `;

  const overlay = document.getElementById('mobileOverlay');
  const drawer = document.querySelector('.mobile-sidebar');
  const openDrawerBtn = document.getElementById('openDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawer');

  if (openDrawerBtn) {
    openDrawerBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      overlay.classList.remove('hidden');
    });
  }

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      overlay.classList.add('hidden');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      drawer.classList.remove('open');
      overlay.classList.add('hidden');
    });
  }

  const globalSearch = document.getElementById('globalSearchInput');
  const pageSearch = document.getElementById('searchInput');
  if (globalSearch && pageSearch) {
    globalSearch.value = pageSearch.value;
    globalSearch.addEventListener('input', () => {
      pageSearch.value = globalSearch.value;
      pageSearch.dispatchEvent(new Event('input', { bubbles: true }));
    });
  } else if (globalSearch) {
    globalSearch.closest('div').classList.add('hidden');
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && drawer?.classList.contains('open')) {
      drawer.classList.remove('open');
      overlay?.classList.add('hidden');
    }
  });

  document.querySelectorAll('.table-wrap tbody').forEach((tbody) => {
    const updateEmptyState = () => {
      const dataRows = Array.from(tbody.children).filter((row) => !row.classList.contains('empty-state'));
      const existingState = tbody.querySelector('.empty-state');
      if (dataRows.length || existingState) return;

      const columnCount = tbody.closest('table')?.querySelectorAll('thead th').length || 1;
      tbody.innerHTML = `<tr class="empty-state"><td colspan="${columnCount}" class="empty-state-cell"><div class="flex flex-col items-center gap-2"><i data-lucide="search-x" class="h-6 w-6 text-slate-400"></i><span class="text-sm font-medium">Data tidak ditemukan</span><span class="text-xs">Ubah kata kunci pencarian atau coba lagi nanti.</span></div></td></tr>`;
      lucide.createIcons();
    };

    const observer = new MutationObserver(() => {
      updateEmptyState();
      if (tbody.querySelector('[data-lucide]')) lucide.createIcons();
    });
    observer.observe(tbody, { childList: true });
    updateEmptyState();
  });

  if (document.querySelector('.sidebar-link')) {
    document.querySelectorAll('.sidebar-link').forEach((link) => {
      link.addEventListener('click', (event) => {
        if (link.getAttribute('href') === currentPage) {
          event.preventDefault();
        }
      });
    });
  }

  lucide.createIcons();
}

function getStatusClass(status) {
  const mapping = {
    Tersedia: 'status-available',
    Dipinjam: 'status-borrowed',
    Maintenance: 'status-maintenance',
    Rusak: 'status-damaged',
    Menunggu: 'status-pending',
    Disetujui: 'status-borrowed',
    Ditolak: 'status-rejected',
    Dikembalikan: 'status-returned',
    Aktif: 'status-available',
    Nonaktif: 'status-inactive'
  };

  return mapping[status] || 'status-available';
}

function getStatusBadge(status) {
  const icons = {
    Aktif: 'circle-check',
    Nonaktif: 'circle-off',
    Tersedia: 'circle-check',
    Dipinjam: 'laptop',
    Maintenance: 'wrench',
    Rusak: 'triangle-alert',
    Menunggu: 'clock3',
    Disetujui: 'circle-check-big',
    Ditolak: 'circle-x',
    Dikembalikan: 'package-check'
  };
  return `<span class="badge ${getStatusClass(status)}"><i data-lucide="${icons[status] || 'circle'}" class="h-3.5 w-3.5"></i>${status}</span>`;
}

function createTableActionButton(label, colorClass, onClick) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = `px-3 py-1.5 rounded-lg text-xs font-semibold ${colorClass}`;
  btn.textContent = label;
  btn.onclick = onClick;
  return btn;
}

function showToast(message, type = 'success') {
  const stack = document.getElementById('toastStack');
  if (!stack) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="mt-0.5">
        <i data-lucide="${type === 'success' ? 'check-circle-2' : type === 'error' ? 'x-circle' : 'alert-circle'}" class="w-5 h-5"></i>
      </div>
      <div class="flex-1">
        <p class="text-sm font-semibold text-slate-800">${message}</p>
      </div>
    </div>
  `;

  stack.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.remove();
  }, 2600);
}

function formatDate(dateString) {
  if (!dateString) return '-';
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

function getRoleName(role) {
  const map = { admin: 'Admin', petugas: 'Petugas', siswa: 'Siswa' };
  return map[role] || role;
}

window.createIcon = createIcon;
window.buildSidebar = buildSidebar;
window.buildTopbar = buildTopbar;
window.renderPageShell = renderPageShell;
window.getStatusClass = getStatusClass;
window.getStatusBadge = getStatusBadge;
window.createTableActionButton = createTableActionButton;
window.showToast = showToast;
window.formatDate = formatDate;
window.getRoleName = getRoleName;
