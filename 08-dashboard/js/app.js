/* ── 08-dashboard App Logic ── */
(function () {
  'use strict';

  /* ── THEME ── */
  function getTheme() { return localStorage.getItem('dash-theme') || 'dark'; }
  function applyTheme(t) {
    if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('dash-theme', t);
    updateThemeIcon();
  }
  function toggleTheme() { applyTheme(getTheme() === 'dark' ? 'light' : 'dark'); }
  function updateThemeIcon() {
    document.querySelectorAll('.theme-toggle-btn').forEach(b => {
      b.textContent = getTheme() === 'dark' ? '☀️' : '🌙';
    });
  }
  applyTheme(getTheme());

  /* ── TOAST ── */
  function showToast(msg, type = 'info') {
    let c = document.querySelector('.toast-container');
    if (!c) { c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); }
    const icons = { success: '✓', error: '✗', warning: '⚠', info: 'ℹ' };
    const t = document.createElement('div');
    t.className = 'toast ' + type;
    t.innerHTML = '<span class="toast-icon">' + (icons[type] || 'ℹ') + '</span><span class="toast-msg">' + escapeHTML(msg) + '</span><button class="toast-close" onclick="this.parentElement.remove()">✕</button>';
    c.appendChild(t);
    if (c.children.length > 3) c.firstChild.remove();
    setTimeout(() => { t.style.animation = 'toastOut .2s forwards'; setTimeout(() => t.remove(), 200); }, 5000);
  }

  /* ── SIDEBAR ── */
  function initSidebar() {
    const sb = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (!sb) return;
    const colBtn = sb.querySelector('.sidebar-collapse-btn');
    if (colBtn) colBtn.addEventListener('click', () => {
      sb.classList.toggle('collapsed');
      localStorage.setItem('dash-sidebar', sb.classList.contains('collapsed') ? 'collapsed' : 'expanded');
    });
    if (localStorage.getItem('dash-sidebar') === 'collapsed' && window.innerWidth > 1024) sb.classList.add('collapsed');

    const hamburger = document.querySelector('.header-hamburger');
    if (hamburger) hamburger.addEventListener('click', () => {
      sb.classList.toggle('mobile-open');
      if (overlay) overlay.classList.toggle('active');
    });
    if (overlay) overlay.addEventListener('click', () => {
      sb.classList.remove('mobile-open');
      overlay.classList.remove('active');
    });

    // tooltip on collapsed hover
    sb.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        if (sb.classList.contains('collapsed') && window.innerWidth > 1024) {
          item.setAttribute('title', item.textContent.trim());
        }
      });
    });

    // set active nav
    const page = location.pathname.split('/').pop() || 'index.html';
    sb.querySelectorAll('.nav-item').forEach(a => {
      const href = a.getAttribute('href');
      if (href === page) a.classList.add('active');
      else a.classList.remove('active');
    });
  }

  /* ── COMMAND PALETTE ── */
  function initCommandPalette() {
    const overlay = document.querySelector('.cmd-overlay');
    if (!overlay) return;
    const input = overlay.querySelector('.cmd-input input');
    const results = overlay.querySelector('.cmd-results');

    function open() { overlay.classList.add('active'); input.value = ''; renderCommands(''); input.focus(); }
    function close() { overlay.classList.remove('active'); }

    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); overlay.classList.contains('active') ? close() : open(); }
      if (e.key === 'Escape' && overlay.classList.contains('active')) close();
    });
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    const searchBtn = document.querySelector('.header-search');
    if (searchBtn) searchBtn.addEventListener('click', open);

    input.addEventListener('input', () => renderCommands(input.value.toLowerCase()));

    function renderCommands(q) {
      let html = '';
      DashboardData.commands.forEach(group => {
        const filtered = group.items.filter(i => i.label.toLowerCase().includes(q));
        if (!filtered.length) return;
        html += '<div class="cmd-group"><div class="cmd-group-label">' + group.group + '</div>';
        filtered.forEach(i => {
          html += '<div class="cmd-item" data-action="' + i.action + '" data-href="' + (i.href || '') + '" data-msg="' + (i.msg || '') + '">';
          html += '<span>' + i.icon + '</span><span>' + escapeHTML(i.label) + '</span>';
          if (i.shortcut) html += '<span class="cmd-shortcut">' + i.shortcut + '</span>';
          html += '</div>';
        });
        html += '</div>';
      });
      if (!html) html = '<div style="padding:20px;text-align:center;color:var(--text-tertiary)">No results</div>';
      results.innerHTML = html;
      results.querySelectorAll('.cmd-item').forEach(el => {
        el.addEventListener('click', () => {
          const action = el.dataset.action;
          if (action === 'nav') window.location.href = el.dataset.href;
          else if (action === 'toast') { showToast(el.dataset.msg, 'info'); close(); }
          else if (action === 'theme') { toggleTheme(); close(); }
        });
      });
    }
  }

  /* ── HEADER NOTIFICATIONS ── */
  function initHeaderNotifs() {
    const bell = document.querySelector('.header-notif-btn');
    if (!bell) return;
    const dropdown = bell.querySelector('.notif-mini-dropdown');
    bell.querySelector('button').addEventListener('click', e => {
      e.stopPropagation(); dropdown.classList.toggle('active');
    });
    document.addEventListener('click', () => dropdown.classList.remove('active'));
    dropdown.addEventListener('click', e => e.stopPropagation());

    const unread = DashboardData.notifications.filter(n => !n.read);
    const badge = bell.querySelector('.badge');
    if (badge && !unread.length) badge.style.display = 'none';

    const list = dropdown.querySelector('.notif-mini-list');
    if (list) {
      list.innerHTML = DashboardData.notifications.slice(0, 5).map(n =>
        '<div class="notif-mini-item' + (n.read ? '' : ' unread') + '">' +
        '<span>' + n.icon + '</span><div><div class="n-title">' + escapeHTML(n.title) + '</div><div class="n-time">' + n.time + '</div></div></div>'
      ).join('');
    }
  }

  /* ── KPI SPARKLINES ── */
  function renderSparkline(canvas, data, color) {
    if (!canvas || !window.Chart) return;
    new Chart(canvas, {
      type: 'line',
      data: { labels: data.map((_, i) => i), datasets: [{ data, borderColor: color || '#3B82F6', borderWidth: 1.5, fill: true, backgroundColor: (color || '#3B82F6') + '20', tension: 0.4, pointRadius: 0 }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: false } }, scales: { x: { display: false }, y: { display: false } }, animation: { duration: 600 } }
    });
  }

  /* ── COUNT-UP ANIMATION ── */
  function countUp(el, target, prefix, suffix, duration) {
    prefix = prefix || ''; suffix = suffix || '';
    const isFloat = String(target).includes('.');
    let start = 0; const startTime = performance.now();
    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration || 800), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (target - start) * eased;
      el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.round(current).toLocaleString()) + (suffix || '');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ── PAGE: OVERVIEW DASHBOARD ── */
  function initOverview() {
    // KPI cards
    document.querySelectorAll('.kpi-card').forEach(card => {
      const kpi = DashboardData.kpis.find(k => k.id === card.dataset.kpi);
      if (!kpi) return;
      const valEl = card.querySelector('.kpi-value');
      if (valEl) countUp(valEl, kpi.value, kpi.prefix || '', kpi.suffix || '', 800);
      const canvas = card.querySelector('.kpi-sparkline canvas');
      if (canvas) renderSparkline(canvas, kpi.sparkline, kpi.change >= 0 ? '#22C55E' : '#EF4444');
    });

    // Revenue Chart
    const revCtx = document.getElementById('revenueChart');
    if (revCtx && window.Chart) {
      const d = DashboardData.revenueChart;
      new Chart(revCtx, {
        type: 'line',
        data: {
          labels: d.labels,
          datasets: [
            { label: 'Revenue', data: d.revenue, borderColor: '#3B82F6', backgroundColor: 'rgba(59,130,246,0.1)', fill: true, tension: 0.4 },
            { label: 'Expenses', data: d.expenses, borderColor: '#EF4444', backgroundColor: 'rgba(239,68,68,0.05)', fill: true, tension: 0.4 },
            { label: 'Profit', data: d.profit, borderColor: '#22C55E', backgroundColor: 'rgba(34,197,94,0.05)', fill: true, tension: 0.4 }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: true, position: 'bottom', labels: { usePointStyle: true, padding: 20, color: '#A1A1AA', font: { size: 12 } } }, tooltip: { mode: 'index', intersect: false, callbacks: { label: ctx => ctx.dataset.label + ': $' + ctx.raw.toLocaleString() } } },
          scales: { x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#71717A', font: { size: 11 } } }, y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#71717A', font: { size: 11 }, callback: v => '$' + (v / 1000) + 'K' } } },
          animation: { duration: 600 }
        }
      });
    }

    // Time range buttons
    document.querySelectorAll('.time-range').forEach(group => {
      group.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          group.querySelectorAll('button').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          showToast('Chart updated to ' + btn.textContent + ' range', 'info');
        });
      });
    });

    // Activity distribution doughnut
    const distCtx = document.getElementById('activityDist');
    if (distCtx && window.Chart) {
      const d = DashboardData.activityDist;
      new Chart(distCtx, {
        type: 'doughnut',
        data: { labels: d.labels, datasets: [{ data: d.data, backgroundColor: d.colors, borderWidth: 0 }] },
        options: {
          responsive: true, maintainAspectRatio: false, cutout: '70%',
          plugins: {
            legend: { display: true, position: 'bottom', labels: { usePointStyle: true, padding: 12, color: '#A1A1AA', font: { size: 11 } } },
            tooltip: { callbacks: { label: ctx => ctx.label + ': ' + ctx.raw + '%' } }
          }
        }
      });
    }

    // Recent activity feed
    const feedEl = document.getElementById('activityFeed');
    if (feedEl) {
      feedEl.innerHTML = DashboardData.recentActivity.map(a =>
        '<div class="activity-item"><div class="a-icon">' + a.icon + '</div><div class="a-content"><div class="a-title">' + escapeHTML(a.title) + '</div><div class="a-desc">' + escapeHTML(a.desc) + '</div></div><div class="a-time">' + a.time + '</div></div>'
      ).join('');
    }

    // Top performers
    const perfEl = document.getElementById('topPerformers');
    if (perfEl) {
      perfEl.innerHTML = '<table class="mini-table"><thead><tr><th>#</th><th>Product</th><th style="text-align:right">Revenue</th></tr></thead><tbody>' +
        DashboardData.topPerformers.map(p =>
          '<tr><td class="rank">' + p.rank + '</td><td>' + escapeHTML(p.name) + '</td><td class="metric">' + p.metric + ' <span style="color:var(--success);font-size:11px">' + p.change + '</span></td></tr>'
        ).join('') + '</tbody></table>';
    }
  }

  /* ── PAGE: DATA TABLES ── */
  function initTables() {
    const wrap = document.getElementById('dataTableBody');
    if (!wrap) return;
    let records = [...DashboardData.records];
    let sortCol = null, sortDir = 'asc';
    let selectedIds = new Set();
    let searchQuery = '';
    let filterStatus = '';
    let filterCategory = '';
    let currentPage = 1;
    const perPage = 10;

    function filtered() {
      return records.filter(r => {
        if (searchQuery && !(r.name.toLowerCase().includes(searchQuery) || r.email.toLowerCase().includes(searchQuery) || r.company.toLowerCase().includes(searchQuery))) return false;
        if (filterStatus && r.status !== filterStatus) return false;
        if (filterCategory && r.category !== filterCategory) return false;
        return true;
      });
    }
    function sorted(arr) {
      if (!sortCol) return arr;
      return [...arr].sort((a, b) => {
        let va = a[sortCol], vb = b[sortCol];
        if (typeof va === 'string') { va = va.toLowerCase(); vb = vb.toLowerCase(); }
        if (va < vb) return sortDir === 'asc' ? -1 : 1;
        if (va > vb) return sortDir === 'asc' ? 1 : -1;
        return 0;
      });
    }

    function render() {
      const f = sorted(filtered());
      const totalPages = Math.ceil(f.length / perPage) || 1;
      if (currentPage > totalPages) currentPage = totalPages;
      const start = (currentPage - 1) * perPage;
      const page = f.slice(start, start + perPage);

      wrap.innerHTML = page.map(r =>
        '<tr class="' + (selectedIds.has(r.id) ? 'selected' : '') + '" data-id="' + r.id + '">' +
        '<td class="row-check"><input type="checkbox" ' + (selectedIds.has(r.id) ? 'checked' : '') + '></td>' +
        '<td class="cell-mono">' + r.id + '</td>' +
        '<td><div class="cell-user"><div class="av" style="background:var(--accent-muted);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600">' + r.name.split(' ').map(w => w[0]).join('') + '</div><div><div class="name">' + escapeHTML(r.name) + '</div><div class="email">' + escapeHTML(r.email) + '</div></div></div></td>' +
        '<td>' + escapeHTML(r.company) + '</td>' +
        '<td><span class="status ' + r.status + '"><span class="dot"></span>' + r.status.charAt(0).toUpperCase() + r.status.slice(1) + '</span></td>' +
        '<td>' + escapeHTML(r.category) + '</td>' +
        '<td class="cell-mono">' + formatCurrency(r.revenue) + '</td>' +
        '<td class="text-muted text-sm">' + r.lastActive + '</td>' +
        '<td><div class="row-actions"><button class="btn btn-ghost btn-sm" onclick="App.editRecord(\'' + r.id + '\')">✏️</button><button class="btn btn-ghost btn-sm" onclick="App.deleteRecord(\'' + r.id + '\')">🗑️</button></div></td>' +
        '</tr>'
      ).join('');

      // Checkbox handlers
      wrap.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', () => {
          const id = cb.closest('tr').dataset.id;
          if (cb.checked) selectedIds.add(id); else selectedIds.delete(id);
          render();
        });
      });

      // Select all
      const selectAll = document.getElementById('selectAll');
      if (selectAll) {
        selectAll.checked = page.length > 0 && page.every(r => selectedIds.has(r.id));
        selectAll.onchange = () => {
          page.forEach(r => { if (selectAll.checked) selectedIds.add(r.id); else selectedIds.delete(r.id); });
          render();
        };
      }

      // Bulk bar
      const bulk = document.getElementById('bulkBar');
      if (bulk) bulk.style.display = selectedIds.size > 0 ? 'flex' : 'none';
      const bulkCount = document.getElementById('bulkCount');
      if (bulkCount) bulkCount.textContent = selectedIds.size;

      // Pagination
      const pagInfo = document.getElementById('pagInfo');
      if (pagInfo) pagInfo.textContent = 'Showing ' + (f.length ? start + 1 : 0) + '-' + Math.min(start + perPage, f.length) + ' of ' + f.length;
      const pagPages = document.getElementById('pagPages');
      if (pagPages) {
        let phtml = '<button ' + (currentPage <= 1 ? 'disabled' : '') + ' onclick="App.tableSetPage(' + (currentPage - 1) + ')">←</button>';
        for (let i = 1; i <= totalPages; i++) {
          if (totalPages > 7 && i > 3 && i < totalPages - 1 && Math.abs(i - currentPage) > 1) {
            if (i === 4 || i === totalPages - 2) phtml += '<button disabled>…</button>';
            continue;
          }
          phtml += '<button class="' + (i === currentPage ? 'active' : '') + '" onclick="App.tableSetPage(' + i + ')">' + i + '</button>';
        }
        phtml += '<button ' + (currentPage >= totalPages ? 'disabled' : '') + ' onclick="App.tableSetPage(' + (currentPage + 1) + ')">→</button>';
        pagPages.innerHTML = phtml;
      }

      // Active filters chips
      const chips = document.getElementById('activeFilters');
      if (chips) {
        let ch = '';
        if (filterStatus) ch += '<span class="filter-chip">Status: ' + filterStatus + ' <button onclick="App.tableFilterStatus(\'\')">✕</button></span>';
        if (filterCategory) ch += '<span class="filter-chip">Category: ' + filterCategory + ' <button onclick="App.tableFilterCategory(\'\')">✕</button></span>';
        if (ch) ch += '<button class="btn btn-ghost btn-sm" onclick="App.tableClearFilters()">Clear all</button>';
        chips.innerHTML = ch;
      }

      // Sort headers
      document.querySelectorAll('.data-table th[data-col]').forEach(th => {
        th.classList.toggle('sorted', th.dataset.col === sortCol);
        const icon = th.querySelector('.sort-icon');
        if (icon) icon.textContent = th.dataset.col === sortCol ? (sortDir === 'asc' ? '↑' : '↓') : '↕';
      });
    }

    // Sort column clicks
    document.querySelectorAll('.data-table th[data-col]').forEach(th => {
      th.addEventListener('click', () => {
        const col = th.dataset.col;
        if (sortCol === col) { sortDir = sortDir === 'asc' ? 'desc' : 'asc'; }
        else { sortCol = col; sortDir = 'asc'; }
        render();
      });
    });

    // Search
    const searchInput = document.getElementById('tableSearch');
    if (searchInput) {
      let timeout;
      searchInput.addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => { searchQuery = searchInput.value.toLowerCase(); currentPage = 1; render(); }, 300);
      });
    }

    window._tableRender = render;
    window._tableState = { get selectedIds() { return selectedIds; }, setFilterStatus(v) { filterStatus = v; currentPage = 1; render(); }, setFilterCategory(v) { filterCategory = v; currentPage = 1; render(); }, clearFilters() { filterStatus = ''; filterCategory = ''; searchQuery = ''; if (searchInput) searchInput.value = ''; currentPage = 1; render(); }, setPage(p) { currentPage = p; render(); }, deleteSelected() { records = records.filter(r => !selectedIds.has(r.id)); selectedIds.clear(); render(); showToast('Records deleted', 'success'); }, exportData(format) {
      const data = sorted(filtered());
      let content, type, ext;
      if (format === 'json') { content = JSON.stringify(data, null, 2); type = 'application/json'; ext = 'json'; }
      else { content = 'ID,Name,Email,Company,Status,Category,Revenue\n' + data.map(r => [r.id, r.name, r.email, r.company, r.status, r.category, r.revenue].join(',')).join('\n'); type = 'text/csv'; ext = 'csv'; }
      const blob = new Blob([content], { type }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'records.' + ext; a.click(); URL.revokeObjectURL(a.href);
      showToast('Exported ' + data.length + ' records as ' + ext.toUpperCase(), 'success');
    }};

    render();
  }

  /* ── PAGE: CONTACTS ── */
  function initContacts() {
    const tbody = document.getElementById('contactsBody');
    if (!tbody) return;

    function render() {
      tbody.innerHTML = DashboardData.contacts.map(c =>
        '<tr data-id="' + c.id + '" onclick="App.openContact(\'' + c.id + '\')" style="cursor:pointer">' +
        '<td><div class="cell-user"><div class="av" style="background:var(--accent-muted);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600">' + c.avatar + '</div><div><div class="name">' + escapeHTML(c.name) + '</div><div class="email">' + escapeHTML(c.email) + '</div></div></div></td>' +
        '<td>' + escapeHTML(c.company) + '</td>' +
        '<td><span class="status ' + c.status + '"><span class="dot"></span>' + c.status.charAt(0).toUpperCase() + c.status.slice(1) + '</span></td>' +
        '<td class="text-muted text-sm">' + c.lastContact + '</td>' +
        '<td class="cell-mono">' + formatCurrency(c.value) + '</td>' +
        '<td>' + c.tags.map(t => '<span class="filter-chip" style="font-size:11px">' + t + '</span>').join(' ') + '</td>' +
        '</tr>'
      ).join('');
    }
    render();
  }

  function openContactPanel(id) {
    const c = DashboardData.contacts.find(x => x.id === id);
    if (!c) return;
    const overlay = document.querySelector('.slide-overlay');
    const panel = document.querySelector('.slide-panel');
    if (!overlay || !panel) return;

    panel.querySelector('.slide-panel-body').innerHTML =
      '<div style="text-align:center;margin-bottom:24px"><div class="av" style="width:56px;height:56px;border-radius:50%;background:var(--accent-muted);color:var(--accent);display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:12px">' + c.avatar + '</div><h3>' + escapeHTML(c.name) + '</h3><p class="text-muted text-sm">' + escapeHTML(c.role) + ' at ' + escapeHTML(c.company) + '</p></div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px"><div class="card" style="padding:12px"><div class="text-muted text-sm">Email</div><div style="font-size:13px">' + escapeHTML(c.email) + '</div></div><div class="card" style="padding:12px"><div class="text-muted text-sm">Phone</div><div style="font-size:13px">' + c.phone + '</div></div></div>' +
      '<div style="display:flex;gap:8px;margin-bottom:24px"><button class="btn btn-primary btn-sm" onclick="App.editContact(\'' + c.id + '\')">Edit</button><button class="btn btn-danger btn-sm" onclick="App.deleteContact(\'' + c.id + '\')">Delete</button></div>' +
      '<div class="slide-panel-section"><h4>Activity Timeline</h4>' + c.activity.map(a => '<div class="timeline-item"><div class="t-icon">' + ({ email: '✉️', call: '📞', meeting: '🤝', note: '📝' }[a.type] || '📌') + '</div><div class="t-text"><div>' + escapeHTML(a.desc) + '</div><div class="t-time">' + a.time + '</div></div></div>').join('') + '</div>' +
      '<div class="slide-panel-section"><h4>Deal Value</h4><div style="font-family:var(--font-mono);font-size:20px;font-weight:700;color:var(--accent)">' + formatCurrency(c.value) + '</div></div>';

    const titleEl = panel.querySelector('.slide-panel-header h3');
    if (titleEl) titleEl.textContent = 'Contact Detail';
    overlay.classList.add('active');
    panel.classList.add('active');
  }

  function closePanel() {
    document.querySelector('.slide-overlay')?.classList.remove('active');
    document.querySelector('.slide-panel')?.classList.remove('active');
  }

  /* ── PAGE: PIPELINE ── */
  function initPipeline() {
    const kanban = document.querySelector('.kanban');
    if (!kanban) return;
    const stages = ['lead', 'qualified', 'proposal', 'negotiation', 'won', 'lost'];

    function renderKanban() {
      kanban.querySelectorAll('.kanban-col').forEach(col => {
        const stage = col.dataset.stage;
        const deals = DashboardData.deals.filter(d => d.stage === stage);
        const colTitle = col.querySelector('.col-count');
        const colValue = col.querySelector('.kanban-col-value');
        if (colTitle) colTitle.textContent = deals.length;
        if (colValue) colValue.textContent = formatCurrency(deals.reduce((s, d) => s + d.value, 0));

        const cards = col.querySelector('.kanban-cards');
        cards.innerHTML = deals.map(d =>
          '<div class="kanban-card" draggable="true" data-deal="' + d.id + '">' +
          '<div class="kanban-card-title">' + escapeHTML(d.company) + '</div>' +
          '<div class="kanban-card-value">' + formatCurrency(d.value) + '</div>' +
          '<div class="kanban-card-meta"><span><span class="av" style="width:20px;height:20px;border-radius:50%;background:var(--accent-muted);color:var(--accent);display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:600;vertical-align:middle">' + d.ownerAv + '</span> ' + d.ownerName.split(' ')[0] + '</span><span><span class="priority-dot ' + d.priority + '"></span> ' + d.daysInStage + 'd</span></div>' +
          '</div>'
        ).join('');

        // Drag and Drop
        cards.querySelectorAll('.kanban-card').forEach(card => {
          card.addEventListener('dragstart', e => { e.dataTransfer.setData('text/plain', card.dataset.deal); card.classList.add('dragging'); });
          card.addEventListener('dragend', () => card.classList.remove('dragging'));
        });
        cards.addEventListener('dragover', e => { e.preventDefault(); cards.classList.add('drop-zone-active'); });
        cards.addEventListener('dragleave', () => cards.classList.remove('drop-zone-active'));
        cards.addEventListener('drop', e => {
          e.preventDefault(); cards.classList.remove('drop-zone-active');
          const dealId = e.dataTransfer.getData('text/plain');
          const deal = DashboardData.deals.find(d => d.id === dealId);
          if (deal && deal.stage !== stage) {
            deal.stage = stage;
            deal.daysInStage = 0;
            renderKanban();
            showToast(deal.company + ' moved to ' + stage.charAt(0).toUpperCase() + stage.slice(1), 'success');
          }
        });
      });
    }
    renderKanban();
  }

  /* ── PAGE: ANALYTICS ── */
  function initAnalytics() {
    // Analytics KPIs
    document.querySelectorAll('.analytics-kpi').forEach(card => {
      const kpi = DashboardData.analytics.kpis.find(k => k.label === card.dataset.label);
      if (!kpi) return;
      const valEl = card.querySelector('.kpi-value');
      if (valEl) valEl.textContent = kpi.value + kpi.suffix;
    });

    // Visitors chart
    const visitCtx = document.getElementById('visitorsChart');
    if (visitCtx && window.Chart) {
      const t = DashboardData.analytics.traffic;
      new Chart(visitCtx, {
        type: 'line',
        data: {
          labels: t.labels,
          datasets: [
            { label: 'Total', data: t.total, borderColor: '#3B82F6', backgroundColor: 'rgba(59,130,246,0.1)', fill: true, tension: 0.4 },
            { label: 'Unique', data: t.unique, borderColor: '#8B5CF6', backgroundColor: 'rgba(139,92,246,0.1)', fill: true, tension: 0.4 }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, color: '#A1A1AA', font: { size: 12 } } } },
          scales: { x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#71717A' } }, y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#71717A' } } }
        }
      });
    }

    // Source breakdown bar chart
    const srcCtx = document.getElementById('sourcesChart');
    if (srcCtx && window.Chart) {
      const s = DashboardData.analytics.sources;
      new Chart(srcCtx, {
        type: 'bar',
        data: {
          labels: s.map(x => x.name),
          datasets: [{ data: s.map(x => x.value), backgroundColor: s.map(x => x.color), borderRadius: 4 }]
        },
        options: {
          indexAxis: 'y', responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ctx.raw + '%' } } },
          scales: { x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#71717A', callback: v => v + '%' } }, y: { grid: { display: false }, ticks: { color: '#A1A1AA', font: { size: 12 } } } }
        }
      });
    }

    // Funnel
    const funnelEl = document.getElementById('funnelChart');
    if (funnelEl) {
      const f = DashboardData.analytics.funnel;
      const maxW = 100;
      funnelEl.innerHTML = f.map((s, i) => {
        const w = Math.max(30, (s.count / f[0].count) * maxW);
        const conv = i > 0 ? ((s.count / f[i - 1].count) * 100).toFixed(1) + '% conversion' : '';
        return (i > 0 ? '<div class="funnel-rate">↓ ' + conv + '</div>' : '') +
          '<div class="funnel-stage" style="background:' + s.color + ';width:' + w + '%">' + s.stage + ': ' + s.count.toLocaleString() + '</div>';
      }).join('');
    }

    // Top pages table
    const tpBody = document.getElementById('topPagesBody');
    if (tpBody) {
      tpBody.innerHTML = DashboardData.analytics.topPages.map(p =>
        '<tr><td class="cell-mono">' + p.page + '</td><td>' + p.views.toLocaleString() + '</td><td>' + p.unique.toLocaleString() + '</td><td>' + p.avgTime + '</td><td>' + p.bounce + '</td></tr>'
      ).join('');
    }
  }

  /* ── PAGE: FINANCE ── */
  function initFinance() {
    const s = DashboardData.finance.summary;
    const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    setVal('finRevenue', formatCurrency(s.revenue));
    setVal('finExpenses', formatCurrency(s.expenses));
    setVal('finNet', formatCurrency(s.netIncome));
    setVal('finMargin', s.margin + '%');
    setVal('finMRR', formatCurrency(s.mrr));
    setVal('finARR', formatCurrency(s.arr));
    setVal('finOutstanding', formatCurrency(s.outstanding));

    // Revenue vs Expenses chart
    const revExpCtx = document.getElementById('revExpChart');
    if (revExpCtx && window.Chart) {
      const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      new Chart(revExpCtx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            { label: 'Revenue', data: DashboardData.finance.monthlyRevenue, backgroundColor: '#3B82F6', borderRadius: 4 },
            { label: 'Expenses', data: DashboardData.finance.monthlyExpenses, backgroundColor: '#EF4444', borderRadius: 4 }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, color: '#A1A1AA' } } },
          scales: { x: { grid: { display: false }, ticks: { color: '#71717A' } }, y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#71717A', callback: v => '$' + (v / 1000) + 'K' } } }
        }
      });
    }
  }

  /* ── PAGE: INVOICES ── */
  function initInvoices() {
    const tbody = document.getElementById('invoicesBody');
    if (!tbody) return;

    function render(filter) {
      const inv = filter ? DashboardData.invoices.filter(i => i.status === filter) : DashboardData.invoices;
      tbody.innerHTML = inv.map(i =>
        '<tr onclick="App.viewInvoice(\'' + i.id + '\')" style="cursor:pointer">' +
        '<td class="cell-mono" style="font-weight:600">' + i.id + '</td>' +
        '<td>' + escapeHTML(i.client) + '</td>' +
        '<td class="cell-mono">' + formatCurrency(i.amount) + '</td>' +
        '<td><span class="status ' + i.status + '"><span class="dot"></span>' + i.status.charAt(0).toUpperCase() + i.status.slice(1) + '</span></td>' +
        '<td class="text-muted text-sm">' + i.issued + '</td>' +
        '<td class="text-muted text-sm">' + i.due + '</td>' +
        '</tr>'
      ).join('');
    }

    // Status filter tabs
    document.querySelectorAll('.invoice-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.invoice-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render(btn.dataset.status || '');
      });
    });

    render();
  }

  function viewInvoice(id) {
    const inv = DashboardData.invoices.find(i => i.id === id);
    if (!inv) return;
    const overlay = document.querySelector('.slide-overlay');
    const panel = document.querySelector('.slide-panel');
    if (!overlay || !panel) return;

    const subtotal = inv.items.reduce((s, i) => s + i.qty * i.rate, 0);
    const taxAmt = subtotal * (inv.tax / 100);
    const discAmt = subtotal * (inv.discount / 100);
    const total = subtotal + taxAmt - discAmt;

    panel.querySelector('.slide-panel-header h3').textContent = inv.id;
    panel.querySelector('.slide-panel-body').innerHTML =
      '<div style="display:flex;justify-content:space-between;margin-bottom:24px;flex-wrap:wrap;gap:12px"><div><div style="font-weight:700;font-size:16px">NexGen Labs</div><div class="text-muted text-sm">123 Tech Street, Dhaka, BD</div></div><div style="text-align:right"><div class="cell-mono" style="font-size:18px;font-weight:700">' + inv.id + '</div><div><span class="status ' + inv.status + '"><span class="dot"></span>' + inv.status.charAt(0).toUpperCase() + inv.status.slice(1) + '</span></div><div class="text-muted text-sm" style="margin-top:4px">Issued: ' + inv.issued + '</div><div class="text-muted text-sm">Due: ' + inv.due + '</div></div></div>' +
      '<div style="padding:12px;background:var(--bg-tertiary);border-radius:var(--radius-sm);margin-bottom:24px"><div class="text-muted text-sm" style="font-weight:600;margin-bottom:4px">BILL TO</div><div style="font-weight:500">' + escapeHTML(inv.clientContact) + '</div><div class="text-muted text-sm">' + escapeHTML(inv.client) + '</div><div class="text-muted text-sm">' + escapeHTML(inv.clientAddr) + '</div></div>' +
      '<table class="invoice-table"><thead><tr><th>Item</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>' +
      inv.items.map(item => '<tr><td>' + escapeHTML(item.desc) + '</td><td>' + item.qty + '</td><td>' + formatCurrency(item.rate) + '</td><td>' + formatCurrency(item.qty * item.rate) + '</td></tr>').join('') +
      '</tbody></table>' +
      '<div class="invoice-totals"><div class="total-row"><span class="label">Subtotal</span><span class="val">' + formatCurrency(subtotal) + '</span></div>' +
      (inv.tax ? '<div class="total-row"><span class="label">Tax (' + inv.tax + '%)</span><span class="val">' + formatCurrency(taxAmt) + '</span></div>' : '') +
      (inv.discount ? '<div class="total-row"><span class="label">Discount (' + inv.discount + '%)</span><span class="val">-' + formatCurrency(discAmt) + '</span></div>' : '') +
      '<div class="total-row grand-total"><span class="label">Total</span><span class="val">' + formatCurrency(total) + '</span></div></div>' +
      (inv.notes ? '<div class="invoice-notes">' + escapeHTML(inv.notes) + '</div>' : '') +
      (inv.payments.length ? '<div style="margin-top:24px"><h4 style="font-size:13px;font-weight:600;margin-bottom:8px">Payment History</h4>' + inv.payments.map(p => '<div class="timeline-item"><div class="t-icon">💰</div><div class="t-text"><div>' + formatCurrency(p.amount) + ' via ' + p.method + '</div><div class="t-time">' + p.date + '</div></div></div>').join('') + '</div>' : '<div style="margin-top:24px" class="text-muted text-sm">No payments recorded.</div>') +
      '<div style="margin-top:24px;display:flex;gap:8px"><button class="btn btn-primary btn-sm" onclick="App.showToast(\'Invoice sent!\',\'success\')">Send</button><button class="btn btn-secondary btn-sm" onclick="App.showToast(\'PDF downloaded\',\'info\')">Download PDF</button>' + (inv.status !== 'paid' ? '<button class="btn btn-secondary btn-sm" onclick="App.markPaid(\'' + inv.id + '\')">Mark Paid</button>' : '') + '</div>';

    overlay.classList.add('active');
    panel.classList.add('active');
  }

  function markPaid(id) {
    const inv = DashboardData.invoices.find(i => i.id === id);
    if (inv) {
      inv.status = 'paid';
      inv.payments.push({ date: new Date().toISOString().slice(0, 10), amount: inv.amount, method: 'Manual' });
      closePanel();
      showToast(id + ' marked as paid', 'success');
      initInvoices();
    }
  }

  /* ── PAGE: SETTINGS ── */
  function initSettings() {
    // Nav
    document.querySelectorAll('.settings-nav button').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.settings-nav button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.settings-section').forEach(s => s.classList.remove('active'));
        const target = document.getElementById(btn.dataset.section);
        if (target) target.classList.add('active');
      });
    });

    // Toggle switches
    document.querySelectorAll('.toggle-switch').forEach(sw => {
      sw.addEventListener('click', () => { sw.classList.toggle('active'); showToast('Setting updated', 'success'); });
    });

    // Theme radios
    document.querySelectorAll('input[name="theme"]').forEach(r => {
      r.checked = r.value === getTheme();
      r.addEventListener('change', () => { if (r.checked) applyTheme(r.value); });
    });

    // Profile form
    const form = document.getElementById('profileForm');
    if (form) form.addEventListener('submit', e => { e.preventDefault(); showToast('Profile saved', 'success'); });
  }

  /* ── PAGE: NOTIFICATIONS ── */
  function initNotifications() {
    const list = document.getElementById('notifList');
    if (!list) return;

    function render() {
      const today = DashboardData.notifications.filter(n => n.time.includes('hour') || n.time.includes('min'));
      const earlier = DashboardData.notifications.filter(n => !n.time.includes('hour') && !n.time.includes('min'));

      let html = '';
      if (today.length) {
        html += '<div class="notif-group"><div class="notif-group-label">Today</div>';
        html += today.map(n => notifItemHTML(n)).join('');
        html += '</div>';
      }
      if (earlier.length) {
        html += '<div class="notif-group"><div class="notif-group-label">Earlier</div>';
        html += earlier.map(n => notifItemHTML(n)).join('');
        html += '</div>';
      }
      list.innerHTML = html;

      list.querySelectorAll('.notif-item').forEach(el => {
        el.addEventListener('click', () => {
          const n = DashboardData.notifications.find(x => x.id === el.dataset.id);
          if (n) { n.read = true; render(); }
        });
      });
    }

    function notifItemHTML(n) {
      return '<div class="notif-item' + (n.read ? '' : ' unread') + '" data-id="' + n.id + '"><div class="n-icon">' + n.icon + '</div><div class="n-content"><div class="n-title">' + escapeHTML(n.title) + '</div><div class="n-desc">' + escapeHTML(n.desc) + '</div></div><div class="n-time">' + n.time + '</div></div>';
    }

    const markAllBtn = document.getElementById('markAllRead');
    if (markAllBtn) markAllBtn.addEventListener('click', () => {
      DashboardData.notifications.forEach(n => n.read = true);
      render();
      showToast('All notifications marked as read', 'success');
    });

    render();
  }

  /* ── PAGE: TEAM ── */
  function initTeam() {
    const tbody = document.getElementById('teamBody');
    if (!tbody) return;

    function render() {
      tbody.innerHTML = DashboardData.team.map(m =>
        '<tr>' +
        '<td><div class="cell-user"><div class="av" style="background:var(--accent-muted);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600">' + m.avatar + '</div><div><div class="name">' + escapeHTML(m.name) + '</div><div class="email">' + escapeHTML(m.email) + '</div></div></div></td>' +
        '<td><span class="role-badge ' + m.role + '">' + m.role + '</span></td>' +
        '<td>' + escapeHTML(m.department) + '</td>' +
        '<td><span class="status ' + m.status + '"><span class="dot"></span>' + m.status.charAt(0).toUpperCase() + m.status.slice(1) + '</span></td>' +
        '<td class="text-muted text-sm">' + m.lastActive + '</td>' +
        '<td><div class="row-actions" style="opacity:1"><button class="btn btn-ghost btn-sm" onclick="App.showToast(\'Edit member: ' + escapeHTML(m.name) + '\',\'info\')">✏️</button>' + (m.role !== 'owner' ? '<button class="btn btn-ghost btn-sm" onclick="App.removeMember(\'' + m.id + '\')">🗑️</button>' : '') + '</div></td>' +
        '</tr>'
      ).join('');
    }

    window._teamRender = render;
    render();
  }

  /* ── INIT ── */
  function init() {
    initSidebar();
    initCommandPalette();
    initHeaderNotifs();

    // Close panel handlers
    document.querySelectorAll('.slide-overlay').forEach(o => o.addEventListener('click', closePanel));
    document.querySelectorAll('.slide-panel .close-btn').forEach(b => b.addEventListener('click', closePanel));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

    // Theme toggle buttons
    document.querySelectorAll('.theme-toggle-btn').forEach(b => b.addEventListener('click', toggleTheme));
    updateThemeIcon();

    // Page-specific init
    const page = location.pathname.split('/').pop() || 'index.html';
    const pageMap = {
      'index.html': initOverview, 'tables.html': initTables, 'contacts.html': initContacts,
      'pipeline.html': initPipeline, 'analytics.html': initAnalytics, 'finance.html': initFinance,
      'invoices.html': initInvoices, 'settings.html': initSettings, 'notifications.html': initNotifications,
      'team.html': initTeam
    };
    if (pageMap[page]) pageMap[page]();
  }

  document.addEventListener('DOMContentLoaded', init);

  /* ── MODAL HELPER ── */
  function openModal(title, bodyHTML, onClose) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;z-index:9999;backdrop-filter:blur(4px);animation:fadeIn .15s';
    overlay.innerHTML = '<div class="modal-panel" style="background:var(--bg-primary);border:1px solid var(--border);border-radius:12px;width:90%;max-width:520px;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.35);animation:slideUp .2s ease"><div style="display:flex;justify-content:space-between;align-items:center;padding:20px 20px 0"><h3 style="margin:0;font-size:1.1rem">' + escapeHTML(title) + '</h3><button class="modal-close-btn" style="background:none;border:none;font-size:1.4rem;cursor:pointer;color:var(--text-secondary);padding:4px 8px;border-radius:6px">&times;</button></div><div class="modal-body" style="padding:20px">' + bodyHTML + '</div></div>';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) { overlay.remove(); if (onClose) onClose(); } });
    overlay.querySelector('.modal-close-btn').addEventListener('click', () => { overlay.remove(); if (onClose) onClose(); });
    return overlay;
  }

  function formGroupHTML(label, inputHTML) {
    return '<div style="margin-bottom:14px"><label style="display:block;font-size:.85rem;font-weight:600;margin-bottom:4px;color:var(--text-secondary)">' + label + '</label>' + inputHTML + '</div>';
  }

  function inputStyle() { return 'width:100%;padding:10px 12px;border-radius:8px;border:1px solid var(--border);background:var(--bg-secondary);color:var(--text-primary);font-size:.9rem;box-sizing:border-box;'; }

  /* ── Add Record Modal ── */
  function addRecordModal() {
    const body =
      formGroupHTML('Name', '<input type="text" id="mr-name" style="' + inputStyle() + '" required>') +
      '<div style="display:flex;gap:12px">' +
        '<div style="flex:1">' + formGroupHTML('Email', '<input type="email" id="mr-email" style="' + inputStyle() + '" required>') + '</div>' +
        '<div style="flex:1">' + formGroupHTML('Company', '<input type="text" id="mr-company" style="' + inputStyle() + '" required>') + '</div>' +
      '</div>' +
      '<div style="display:flex;gap:12px">' +
        '<div style="flex:1">' + formGroupHTML('Category', '<select id="mr-category" style="' + inputStyle() + '"><option>Enterprise</option><option>Pro</option><option>Team</option><option>Starter</option></select>') + '</div>' +
        '<div style="flex:1">' + formGroupHTML('Status', '<select id="mr-status" style="' + inputStyle() + '"><option value="active">Active</option><option value="pending">Pending</option><option value="inactive">Inactive</option></select>') + '</div>' +
      '</div>' +
      formGroupHTML('Revenue ($)', '<input type="number" id="mr-revenue" value="0" min="0" style="' + inputStyle() + '">') +
      '<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:8px"><button class="btn btn-secondary" id="mr-cancel">Cancel</button><button class="btn btn-primary" id="mr-save">Add Record</button></div>';

    const m = openModal('Add New Record', body);
    m.querySelector('#mr-cancel').onclick = () => m.remove();
    m.querySelector('#mr-save').onclick = () => {
      const name = m.querySelector('#mr-name').value.trim();
      const email = m.querySelector('#mr-email').value.trim();
      if (!name || !email) { showToast('Name and email are required', 'error'); return; }
      const id = 'REC-' + String(DashboardData.records.length + 1).padStart(3, '0');
      DashboardData.records.unshift({ id, name, email, company: m.querySelector('#mr-company').value.trim() || '—', status: m.querySelector('#mr-status').value, category: m.querySelector('#mr-category').value, revenue: parseInt(m.querySelector('#mr-revenue').value) || 0, joined: new Date().toISOString().slice(0, 10), lastActive: 'Just now' });
      m.remove();
      showToast('Record ' + id + ' created', 'success');
      if (window._tableRender) window._tableRender();
    };
  }

  /* ── Add Deal Modal ── */
  function addDealModal(stage) {
    stage = stage || 'lead';
    const body =
      formGroupHTML('Deal Name', '<input type="text" id="md-name" style="' + inputStyle() + '" required>') +
      '<div style="display:flex;gap:12px">' +
        '<div style="flex:1">' + formGroupHTML('Company', '<input type="text" id="md-company" style="' + inputStyle() + '" required>') + '</div>' +
        '<div style="flex:1">' + formGroupHTML('Value ($)', '<input type="number" id="md-value" value="10000" min="0" style="' + inputStyle() + '">') + '</div>' +
      '</div>' +
      '<div style="display:flex;gap:12px">' +
        '<div style="flex:1">' + formGroupHTML('Stage', '<select id="md-stage" style="' + inputStyle() + '"><option value="lead"' + (stage === 'lead' ? ' selected' : '') + '>Lead</option><option value="qualified"' + (stage === 'qualified' ? ' selected' : '') + '>Qualified</option><option value="proposal"' + (stage === 'proposal' ? ' selected' : '') + '>Proposal</option><option value="negotiation"' + (stage === 'negotiation' ? ' selected' : '') + '>Negotiation</option></select>') + '</div>' +
        '<div style="flex:1">' + formGroupHTML('Priority', '<select id="md-priority" style="' + inputStyle() + '"><option value="low">Low</option><option value="medium" selected>Medium</option><option value="high">High</option><option value="critical">Critical</option></select>') + '</div>' +
      '</div>' +
      formGroupHTML('Expected Close Date', '<input type="date" id="md-close" style="' + inputStyle() + '">') +
      '<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:8px"><button class="btn btn-secondary" id="md-cancel">Cancel</button><button class="btn btn-primary" id="md-save">Add Deal</button></div>';

    const m = openModal('New Deal', body);
    m.querySelector('#md-cancel').onclick = () => m.remove();
    m.querySelector('#md-save').onclick = () => {
      const name = m.querySelector('#md-name').value.trim();
      const company = m.querySelector('#md-company').value.trim();
      if (!name || !company) { showToast('Name and company are required', 'error'); return; }
      const id = 'd' + (DashboardData.deals.length + 1);
      DashboardData.deals.push({ id, name, company, value: parseInt(m.querySelector('#md-value').value) || 0, stage: m.querySelector('#md-stage').value, probability: 20, ownerName: 'You', ownerAv: 'TA', daysInStage: 0, priority: m.querySelector('#md-priority').value, closeDate: m.querySelector('#md-close').value || '' });
      m.remove();
      showToast('Deal "' + name + '" created', 'success');
      initPipeline();
    };
  }

  /* ── Add Contact Modal ── */
  function addContactModal() {
    const body =
      '<div style="display:flex;gap:12px">' +
        '<div style="flex:1">' + formGroupHTML('Full Name', '<input type="text" id="mc-name" style="' + inputStyle() + '" required>') + '</div>' +
        '<div style="flex:1">' + formGroupHTML('Email', '<input type="email" id="mc-email" style="' + inputStyle() + '" required>') + '</div>' +
      '</div>' +
      '<div style="display:flex;gap:12px">' +
        '<div style="flex:1">' + formGroupHTML('Phone', '<input type="tel" id="mc-phone" style="' + inputStyle() + '">') + '</div>' +
        '<div style="flex:1">' + formGroupHTML('Company', '<input type="text" id="mc-company" style="' + inputStyle() + '">') + '</div>' +
      '</div>' +
      '<div style="display:flex;gap:12px">' +
        '<div style="flex:1">' + formGroupHTML('Role', '<input type="text" id="mc-role" style="' + inputStyle() + '">') + '</div>' +
        '<div style="flex:1">' + formGroupHTML('Status', '<select id="mc-status" style="' + inputStyle() + '"><option value="active">Active</option><option value="pending">Pending</option><option value="inactive">Inactive</option></select>') + '</div>' +
      '</div>' +
      formGroupHTML('Deal Value ($)', '<input type="number" id="mc-value" value="0" min="0" style="' + inputStyle() + '">') +
      '<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:8px"><button class="btn btn-secondary" id="mc-cancel">Cancel</button><button class="btn btn-primary" id="mc-save">Add Contact</button></div>';

    const m = openModal('Add Contact', body);
    m.querySelector('#mc-cancel').onclick = () => m.remove();
    m.querySelector('#mc-save').onclick = () => {
      const name = m.querySelector('#mc-name').value.trim();
      const email = m.querySelector('#mc-email').value.trim();
      if (!name || !email) { showToast('Name and email are required', 'error'); return; }
      const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
      DashboardData.contacts.push({ id: 'c' + (DashboardData.contacts.length + 1), name, email, phone: m.querySelector('#mc-phone').value || '', company: m.querySelector('#mc-company').value || '', role: m.querySelector('#mc-role').value || '', status: m.querySelector('#mc-status').value, value: parseInt(m.querySelector('#mc-value').value) || 0, tags: [], lastContact: 'Just now', avatar: initials, activity: [] });
      m.remove();
      showToast('Contact added', 'success');
      initContacts();
    };
  }

  /* ── Import CSV Modal ── */
  function importCSVModal() {
    const body =
      '<div style="border:2px dashed var(--border);border-radius:12px;padding:40px 20px;text-align:center;margin-bottom:16px" id="csv-drop">' +
        '<div style="font-size:2rem;margin-bottom:8px">📂</div>' +
        '<p style="margin:0 0 8px;font-weight:600">Drop CSV file here or click to browse</p>' +
        '<p style="font-size:.85rem;color:var(--text-secondary);margin:0">Supports .csv files up to 5MB</p>' +
        '<input type="file" accept=".csv" style="display:none" id="csv-file">' +
      '</div>' +
      '<div id="csv-preview" style="display:none;margin-bottom:16px"><div style="font-weight:600;margin-bottom:8px">Preview</div><div id="csv-preview-content" style="max-height:200px;overflow:auto;border:1px solid var(--border);border-radius:8px;font-size:.8rem"></div></div>' +
      '<div style="display:flex;gap:8px;justify-content:flex-end"><button class="btn btn-secondary" id="csv-cancel">Cancel</button><button class="btn btn-primary" id="csv-import" disabled>Import</button></div>';

    const m = openModal('Import Contacts from CSV', body);
    const dropZone = m.querySelector('#csv-drop');
    const fileInput = m.querySelector('#csv-file');
    const importBtn = m.querySelector('#csv-import');
    let parsedRows = [];

    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.style.borderColor = 'var(--accent)'; });
    dropZone.addEventListener('dragleave', () => { dropZone.style.borderColor = ''; });
    dropZone.addEventListener('drop', e => { e.preventDefault(); dropZone.style.borderColor = ''; if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); });
    fileInput.addEventListener('change', () => { if (fileInput.files[0]) handleFile(fileInput.files[0]); });

    function handleFile(file) {
      if (!file.name.endsWith('.csv')) { showToast('Please select a CSV file', 'error'); return; }
      const reader = new FileReader();
      reader.onload = ev => {
        const lines = ev.target.result.split('\n').filter(l => l.trim());
        if (lines.length < 2) { showToast('CSV must have a header row and data', 'error'); return; }
        const headers = lines[0].split(',').map(h => h.trim());
        parsedRows = lines.slice(1).map(line => { const vals = line.split(','); const obj = {}; headers.forEach((h, i) => obj[h.toLowerCase()] = (vals[i] || '').trim()); return obj; });
        dropZone.innerHTML = '<div style="color:var(--accent);font-weight:600">✅ ' + file.name + ' (' + parsedRows.length + ' rows)</div>';
        const preview = m.querySelector('#csv-preview');
        preview.style.display = 'block';
        m.querySelector('#csv-preview-content').innerHTML = '<table style="width:100%;border-collapse:collapse"><thead><tr>' + headers.map(h => '<th style="padding:4px 8px;border-bottom:1px solid var(--border);text-align:left">' + h + '</th>').join('') + '</tr></thead><tbody>' + parsedRows.slice(0, 5).map(r => '<tr>' + headers.map(h => '<td style="padding:4px 8px;border-bottom:1px solid var(--border)">' + (r[h.toLowerCase()] || '') + '</td>').join('') + '</tr>').join('') + '</tbody></table>';
        importBtn.disabled = false;
      };
      reader.readAsText(file);
    }

    m.querySelector('#csv-cancel').onclick = () => m.remove();
    importBtn.onclick = () => {
      let count = 0;
      parsedRows.forEach(r => {
        if (r.name && r.email) {
          const initials = r.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
          DashboardData.contacts.push({ id: 'c' + (DashboardData.contacts.length + 1), name: r.name, email: r.email, phone: r.phone || '', company: r.company || '', role: r.role || '', status: 'active', value: parseInt(r.value) || 0, tags: [], lastContact: 'Imported', avatar: initials, activity: [] });
          count++;
        }
      });
      m.remove();
      showToast(count + ' contacts imported', 'success');
      initContacts();
    };
  }

  /* ── New Invoice Modal ── */
  function newInvoiceModal() {
    let items = [{ desc: '', qty: 1, rate: 0 }];
    function renderItems() {
      return items.map((item, i) =>
        '<div style="display:flex;gap:8px;margin-bottom:8px;align-items:center">' +
          '<input type="text" placeholder="Description" value="' + (item.desc || '') + '" data-idx="' + i + '" data-field="desc" style="flex:2;' + inputStyle() + '">' +
          '<input type="number" placeholder="Qty" value="' + item.qty + '" min="1" data-idx="' + i + '" data-field="qty" style="width:70px;' + inputStyle() + '">' +
          '<input type="number" placeholder="Rate" value="' + item.rate + '" min="0" data-idx="' + i + '" data-field="rate" style="width:100px;' + inputStyle() + '">' +
          '<span style="width:80px;text-align:right;font-weight:600">$' + (item.qty * item.rate).toLocaleString() + '</span>' +
          (items.length > 1 ? '<button style="background:none;border:none;cursor:pointer;font-size:1.1rem;color:var(--text-secondary)" data-remove="' + i + '">&times;</button>' : '<span style="width:24px"></span>') +
        '</div>'
      ).join('');
    }

    function getTotal() { return items.reduce((s, i) => s + i.qty * i.rate, 0); }

    function renderBody() {
      return formGroupHTML('Client Name', '<input type="text" id="mi-client" style="' + inputStyle() + '" required>') +
        '<div style="display:flex;gap:12px">' +
          '<div style="flex:1">' + formGroupHTML('Issue Date', '<input type="date" id="mi-issued" value="' + new Date().toISOString().slice(0, 10) + '" style="' + inputStyle() + '">') + '</div>' +
          '<div style="flex:1">' + formGroupHTML('Due Date', '<input type="date" id="mi-due" style="' + inputStyle() + '">') + '</div>' +
        '</div>' +
        '<div style="margin-bottom:14px"><label style="display:block;font-size:.85rem;font-weight:600;margin-bottom:8px;color:var(--text-secondary)">Line Items</label>' +
        '<div id="mi-items">' + renderItems() + '</div>' +
        '<button class="btn btn-secondary btn-sm" id="mi-add-item" style="margin-top:4px">+ Add Item</button></div>' +
        '<div style="text-align:right;font-size:1.05rem;font-weight:700;margin-bottom:16px">Total: $<span id="mi-total">' + getTotal().toLocaleString() + '</span></div>' +
        '<div style="display:flex;gap:8px;justify-content:flex-end"><button class="btn btn-secondary" id="mi-cancel">Cancel</button><button class="btn btn-primary" id="mi-save">Create Invoice</button></div>';
    }

    const m = openModal('New Invoice', renderBody());

    function bindItemEvents() {
      m.querySelectorAll('#mi-items input').forEach(inp => {
        inp.addEventListener('input', () => {
          const idx = parseInt(inp.dataset.idx);
          const field = inp.dataset.field;
          if (field === 'desc') items[idx].desc = inp.value;
          else if (field === 'qty') items[idx].qty = parseInt(inp.value) || 0;
          else if (field === 'rate') items[idx].rate = parseInt(inp.value) || 0;
          m.querySelector('#mi-total').textContent = getTotal().toLocaleString();
          m.querySelectorAll('#mi-items > div').forEach((row, ri) => {
            const spans = row.querySelectorAll('span');
            if (spans.length) spans[spans.length - 1].textContent = '$' + (items[ri].qty * items[ri].rate).toLocaleString();
          });
        });
      });
      m.querySelectorAll('[data-remove]').forEach(btn => {
        btn.addEventListener('click', () => {
          items.splice(parseInt(btn.dataset.remove), 1);
          m.querySelector('#mi-items').innerHTML = renderItems();
          m.querySelector('#mi-total').textContent = getTotal().toLocaleString();
          bindItemEvents();
        });
      });
    }
    bindItemEvents();

    m.querySelector('#mi-add-item').addEventListener('click', () => {
      items.push({ desc: '', qty: 1, rate: 0 });
      m.querySelector('#mi-items').innerHTML = renderItems();
      bindItemEvents();
    });

    m.querySelector('#mi-cancel').onclick = () => m.remove();
    m.querySelector('#mi-save').onclick = () => {
      const client = m.querySelector('#mi-client').value.trim();
      if (!client) { showToast('Client name is required', 'error'); return; }
      if (!items.some(i => i.desc.trim())) { showToast('Add at least one line item', 'error'); return; }
      const id = 'INV-' + String(DashboardData.invoices.length + 1).padStart(4, '0');
      const total = getTotal();
      DashboardData.invoices.push({ id, client, clientContact: client, clientAddr: '', amount: total, status: 'draft', issued: m.querySelector('#mi-issued').value, due: m.querySelector('#mi-due').value || '', items: items.filter(i => i.desc.trim()), tax: 0, discount: 0, notes: '', payments: [] });
      m.remove();
      showToast('Invoice ' + id + ' created', 'success');
      initInvoices();
    };
  }

  /* ── Invite Member Modal ── */
  function inviteMemberModal() {
    const body =
      formGroupHTML('Email Address', '<input type="email" id="mm-email" style="' + inputStyle() + '" placeholder="colleague@company.com" required>') +
      '<div style="display:flex;gap:12px">' +
        '<div style="flex:1">' + formGroupHTML('Full Name', '<input type="text" id="mm-name" style="' + inputStyle() + '" required>') + '</div>' +
        '<div style="flex:1">' + formGroupHTML('Role', '<select id="mm-role" style="' + inputStyle() + '"><option value="member">Member</option><option value="editor">Editor</option><option value="admin">Admin</option></select>') + '</div>' +
      '</div>' +
      formGroupHTML('Department', '<input type="text" id="mm-dept" style="' + inputStyle() + '" placeholder="e.g. Engineering">') +
      '<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:8px"><button class="btn btn-secondary" id="mm-cancel">Cancel</button><button class="btn btn-primary" id="mm-save">Send Invite</button></div>';

    const m = openModal('Invite Team Member', body);
    m.querySelector('#mm-cancel').onclick = () => m.remove();
    m.querySelector('#mm-save').onclick = () => {
      const email = m.querySelector('#mm-email').value.trim();
      const name = m.querySelector('#mm-name').value.trim();
      if (!email || !name) { showToast('Name and email are required', 'error'); return; }
      const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
      DashboardData.team.push({ id: 'm' + (DashboardData.team.length + 1), name, email, role: m.querySelector('#mm-role').value, department: m.querySelector('#mm-dept').value || 'General', status: 'active', lastActive: 'Invited', avatar: initials });
      m.remove();
      showToast('Invite sent to ' + email, 'success');
      if (window._teamRender) window._teamRender();
    };
  }

  /* ── PUBLIC API ── */
  window.App = {
    toggleTheme, showToast,
    openContact: openContactPanel, closePanel,
    viewInvoice, markPaid,
    addRecord: addRecordModal,
    addDeal: addDealModal,
    addContact: addContactModal,
    editContact: id => {
      const c = DashboardData.contacts.find(x => x.id === id);
      if (!c) return;
      const body =
        '<div style="display:flex;gap:12px"><div style="flex:1">' + formGroupHTML('Name', '<input type="text" id="ec-name" value="' + escapeHTML(c.name) + '" style="' + inputStyle() + '">') + '</div><div style="flex:1">' + formGroupHTML('Email', '<input type="email" id="ec-email" value="' + escapeHTML(c.email) + '" style="' + inputStyle() + '">') + '</div></div>' +
        '<div style="display:flex;gap:12px"><div style="flex:1">' + formGroupHTML('Phone', '<input type="tel" id="ec-phone" value="' + (c.phone || '') + '" style="' + inputStyle() + '">') + '</div><div style="flex:1">' + formGroupHTML('Company', '<input type="text" id="ec-company" value="' + escapeHTML(c.company) + '" style="' + inputStyle() + '">') + '</div></div>' +
        formGroupHTML('Role', '<input type="text" id="ec-role" value="' + escapeHTML(c.role) + '" style="' + inputStyle() + '">') +
        '<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:8px"><button class="btn btn-secondary" id="ec-cancel">Cancel</button><button class="btn btn-primary" id="ec-save">Save</button></div>';
      const m = openModal('Edit Contact', body);
      m.querySelector('#ec-cancel').onclick = () => m.remove();
      m.querySelector('#ec-save').onclick = () => {
        c.name = m.querySelector('#ec-name').value.trim() || c.name;
        c.email = m.querySelector('#ec-email').value.trim() || c.email;
        c.phone = m.querySelector('#ec-phone').value;
        c.company = m.querySelector('#ec-company').value;
        c.role = m.querySelector('#ec-role').value;
        c.avatar = c.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
        m.remove();
        closePanel();
        showToast('Contact updated', 'success');
        initContacts();
      };
    },
    deleteContact: id => {
      if (!confirm('Delete this contact?')) return;
      const i = DashboardData.contacts.findIndex(c => c.id === id);
      if (i > -1) {
        DashboardData.contacts.splice(i, 1);
        closePanel();
        showToast('Contact deleted', 'success');
        initContacts();
      }
    },
    importCSV: importCSVModal,
    newInvoice: newInvoiceModal,
    inviteMember: inviteMemberModal,
    editRecord: id => showToast('Editing ' + id, 'info'),
    deleteRecord: id => { if (confirm('Delete ' + id + '?')) { const i = DashboardData.records.findIndex(r => r.id === id); if (i > -1) { DashboardData.records.splice(i, 1); if (window._tableRender) window._tableRender(); showToast(id + ' deleted', 'success'); } } },
    tableSetPage: p => { if (window._tableState) window._tableState.setPage(p); },
    tableFilterStatus: v => { if (window._tableState) window._tableState.setFilterStatus(v); },
    tableFilterCategory: v => { if (window._tableState) window._tableState.setFilterCategory(v); },
    tableClearFilters: () => { if (window._tableState) window._tableState.clearFilters(); },
    tableDeleteSelected: () => { if (window._tableState && confirm('Delete selected records?')) window._tableState.deleteSelected(); },
    tableExport: format => { if (window._tableState) window._tableState.exportData(format); },
    removeMember: id => { if (confirm('Remove team member?')) { const i = DashboardData.team.findIndex(m => m.id === id); if (i > -1) { DashboardData.team.splice(i, 1); if (window._teamRender) window._teamRender(); showToast('Member removed', 'success'); } } }
  };
})();
