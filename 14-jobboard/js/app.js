/* ============================================================
   14-jobboard  —  JobConnect BD  ·  Application Logic
   ============================================================ */

/* ---------- State (localStorage wrapper) ---------- */
const State = {
  get(k) { try { return JSON.parse(localStorage.getItem('jb_' + k)); } catch { return null; } },
  set(k, v) { localStorage.setItem('jb_' + k, JSON.stringify(v)); },
  remove(k) { localStorage.removeItem('jb_' + k); }
};

/* ---------- Theme ---------- */
const Theme = {
  init() {
    const saved = State.get('theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
    else if (matchMedia('(prefers-color-scheme:dark)').matches) document.documentElement.setAttribute('data-theme', 'dark');
    this.updateIcon();
  },
  toggle() {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    State.set('theme', next);
    this.updateIcon();
  },
  updateIcon() {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('.theme-icon').forEach(el => {
      el.innerHTML = dark
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    });
  }
};

/* ---------- Auth ---------- */
const Auth = {
  isLoggedIn() { return !!State.get('user'); },
  getUser() { return State.get('user') || JB.currentUser; },
  login(email, pass) {
    if (!email) return;
    State.set('user', JB.currentUser);
    Toast.show('Welcome back, ' + JB.currentUser.name + '!', 'success');
    this.closeModal();
    this.updateUI();
  },
  signup(name, email, pass) {
    if (!name || !email) return;
    const u = { ...JB.currentUser, name, email };
    State.set('user', u);
    Toast.show('Account created! Welcome, ' + name, 'success');
    this.closeModal();
    this.updateUI();
  },
  logout() {
    State.remove('user');
    Toast.show('Logged out successfully', 'info');
    this.updateUI();
  },
  updateUI() {
    const logged = this.isLoggedIn();
    document.querySelectorAll('.auth-login-btn').forEach(b => b.style.display = logged ? 'none' : '');
    document.querySelectorAll('.auth-logout-btn').forEach(b => b.style.display = logged ? '' : 'none');
    document.querySelectorAll('.auth-user-name').forEach(el => el.textContent = logged ? this.getUser().name : '');
  },
  openModal() { document.getElementById('authOverlay')?.classList.add('active'); },
  closeModal() { document.getElementById('authOverlay')?.classList.remove('active'); },
  switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'login'));
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.toggle('active', f.id === 'auth-' + tab));
  }
};

/* ---------- Toast ---------- */
const Toast = {
  show(msg, type = 'info', duration = 3000) {
    let c = document.querySelector('.toast-container');
    if (!c) { c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); }
    const t = document.createElement('div');
    t.className = 'toast toast-' + type;
    t.innerHTML = `<span class="toast-message">${msg}</span><button class="toast-close" onclick="this.parentElement.remove()">✕</button>`;
    c.appendChild(t);
    setTimeout(() => t.remove(), duration);
  }
};

/* ---------- Drawer ---------- */
const Drawer = {
  open() {
    document.getElementById('mobileDrawer')?.classList.add('active');
    document.getElementById('drawerOverlay')?.classList.add('active');
  },
  close() {
    document.getElementById('mobileDrawer')?.classList.remove('active');
    document.getElementById('drawerOverlay')?.classList.remove('active');
  }
};

/* ---------- Helpers ---------- */
const H = {
  $(s, p) { return (p || document).querySelector(s); },
  $$(s, p) { return [...(p || document).querySelectorAll(s)]; },
  qs() { return Object.fromEntries(new URLSearchParams(location.search)); },
  fmt(n) { return n >= 1000 ? (n / 1000).toFixed(n % 1000 ? 1 : 0) + 'K' : String(n); },
  money(n) { return '৳' + Number(n).toLocaleString(); },
  ago(d) {
    const diff = Math.floor((Date.now() - new Date(d)) / 86400000);
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    if (diff < 7) return diff + 'd ago';
    if (diff < 30) return Math.floor(diff / 7) + 'w ago';
    return Math.floor(diff / 30) + 'mo ago';
  },
  stars(r) { return '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(r)); },
  badgeClass(type) {
    const m = { 'Full-time': 'fulltime', 'Part-time': 'parttime', 'Contract': 'contract', 'Remote': 'remote', 'Internship': 'internship' };
    return 'badge badge-' + (m[type] || 'fulltime');
  },
  statusClass(s) { return 'status-badge status-' + s; },
  getCompany(id) { return JB.companies.find(c => c.id === id); }
};

/* ---------- Header Scroll ---------- */
function initHeader() {
  const hdr = H.$('.header');
  if (!hdr) return;
  window.addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 10));
}

/* ---------- Saved Jobs ---------- */
const SavedJobs = {
  get() { return State.get('savedJobs') || [...JB.savedJobs]; },
  has(id) { return this.get().includes(id); },
  toggle(id) {
    let saved = this.get();
    if (saved.includes(id)) saved = saved.filter(s => s !== id);
    else saved.push(id);
    State.set('savedJobs', saved);
    return saved.includes(id);
  }
};

/* ---------- Applications ---------- */
const Applications = {
  get() { return State.get('applications') || [...JB.applications]; },
  add(app) {
    const apps = this.get();
    apps.push(app);
    State.set('applications', apps);
  },
  updateStatus(id, status) {
    const apps = this.get();
    const a = apps.find(x => x.id === id);
    if (a) { a.status = status; State.set('applications', apps); }
  }
};

/* ---------- Employer Applicants (Kanban) ---------- */
const Applicants = {
  get() { return State.get('applicants') || [...JB.applicants]; },
  updateStatus(id, status) {
    const list = this.get();
    const a = list.find(x => x.id === id);
    if (a) { a.status = status; State.set('applicants', list); }
  }
};

/* ============================================================
   PAGE: Homepage
   ============================================================ */
const HomePage = {
  init() {
    this.renderStats();
    this.renderFeatured();
    this.renderCompanies();
    this.renderCategories();
    this.bindHeroSearch();
  },
  renderStats() {
    const el = H.$('#statsGrid');
    if (!el) return;
    const { jobs, companies, hiring, satisfaction } = JB.stats;
    el.innerHTML = [
      { v: H.fmt(jobs) + '+', l: 'Active Jobs' },
      { v: H.fmt(companies) + '+', l: 'Companies' },
      { v: H.fmt(hiring) + '+', l: 'Hiring Now' },
      { v: satisfaction + '%', l: 'Satisfaction' }
    ].map(s => `<div class="stat-card"><div class="stat-value">${s.v}</div><div class="stat-label">${s.l}</div></div>`).join('');
  },
  renderFeatured() {
    const el = H.$('#featuredJobs');
    if (!el) return;
    const featured = JB.jobs.filter(j => j.featured).slice(0, 5);
    el.innerHTML = featured.map(j => JobCard.render(j)).join('');
  },
  renderCompanies() {
    const el = H.$('#topCompanies');
    if (!el) return;
    const top = [...JB.companies].sort((a, b) => b.rating - a.rating).slice(0, 4);
    el.innerHTML = top.map(c => `
      <a href="company.html?id=${c.id}" class="company-card">
        <img src="${c.logo}" alt="${c.name}" class="company-card-logo">
        <div class="company-card-name">${c.name}</div>
        <div class="company-card-industry">${c.industry} · ${c.location}</div>
        <div class="company-card-rating">${H.stars(c.rating)} ${c.rating}</div>
        <div class="company-card-jobs">${c.openJobs} open positions</div>
      </a>
    `).join('');
  },
  renderCategories() {
    const el = H.$('#categoryGrid');
    if (!el) return;
    el.innerHTML = JB.categories.map(c => `
      <a href="search.html?category=${encodeURIComponent(c.name)}" class="category-card">
        <div class="category-icon">${c.icon}</div>
        <div class="category-name">${c.name}</div>
        <div class="category-count">${H.fmt(c.count)} jobs</div>
      </a>
    `).join('');
  },
  bindHeroSearch() {
    const form = H.$('#heroSearch');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const q = H.$('[name="keyword"]', form)?.value || '';
      const loc = H.$('[name="location"]', form)?.value || '';
      const params = new URLSearchParams();
      if (q) params.set('q', q);
      if (loc) params.set('location', loc);
      location.href = 'search.html?' + params;
    });
    H.$$('.popular-tag', form.closest('.hero')).forEach(tag => {
      tag.addEventListener('click', () => {
        location.href = 'search.html?q=' + encodeURIComponent(tag.textContent);
      });
    });
  }
};

/* ============================================================
   COMPONENT: JobCard
   ============================================================ */
const JobCard = {
  render(j) {
    const co = H.getCompany(j.companyId);
    const saved = SavedJobs.has(j.id);
    return `
      <div class="job-card" onclick="location.href='job.html?id=${j.id}'">
        <img src="${co?.logo || ''}" alt="${co?.name}" class="job-card-logo">
        <div class="job-card-body">
          <div class="job-card-company">${co?.name || ''}</div>
          <div class="job-card-title">${j.title}</div>
          <div class="job-card-meta">
            <span>📍 ${j.location}</span>
            <span class="${H.badgeClass(j.type)}">${j.type}</span>
            <span>🎯 ${j.experience}</span>
          </div>
          <div class="job-card-salary">${H.money(j.salaryMin)} - ${H.money(j.salaryMax)}/mo</div>
          <div class="job-card-tags">${j.skills.slice(0, 4).map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
        </div>
        <div class="job-card-actions">
          <div class="job-card-time">${H.ago(j.posted)}</div>
          <button class="btn-save ${saved ? 'saved' : ''}" onclick="event.stopPropagation();JobCard.toggleSave('${j.id}',this)" title="Save job">${saved ? '❤️' : '🤍'}</button>
        </div>
      </div>`;
  },
  toggleSave(id, btn) {
    const now = SavedJobs.toggle(id);
    btn.classList.toggle('saved', now);
    btn.textContent = now ? '❤️' : '🤍';
    Toast.show(now ? 'Job saved!' : 'Job unsaved', now ? 'success' : 'info');
  }
};

/* ============================================================
   PAGE: Job Search
   ============================================================ */
const JobSearch = {
  perPage: 10,
  page: 1,
  init() {
    this.params = H.qs();
    this.page = parseInt(this.params.page) || 1;
    this.bindFilters();
    this.render();
  },
  getFiltered() {
    let jobs = [...JB.jobs];
    const p = this.params;
    if (p.q) { const q = p.q.toLowerCase(); jobs = jobs.filter(j => j.title.toLowerCase().includes(q) || j.skills.some(s => s.toLowerCase().includes(q)) || j.description.toLowerCase().includes(q)); }
    if (p.location) { const loc = p.location.toLowerCase(); jobs = jobs.filter(j => j.location.toLowerCase().includes(loc)); }
    if (p.category) jobs = jobs.filter(j => j.category === p.category);
    if (p.type) { const types = p.type.split(','); jobs = jobs.filter(j => types.includes(j.type)); }
    if (p.level) jobs = jobs.filter(j => j.level === p.level);
    if (p.minSalary) jobs = jobs.filter(j => j.salaryMax >= parseInt(p.minSalary));
    if (p.maxSalary) jobs = jobs.filter(j => j.salaryMin <= parseInt(p.maxSalary));
    if (p.posted) {
      const days = { '24h': 1, '7d': 7, '30d': 30 }[p.posted] || 0;
      if (days) { const since = Date.now() - days * 86400000; jobs = jobs.filter(j => new Date(j.posted) >= since); }
    }
    const sort = p.sort || 'newest';
    if (sort === 'newest') jobs.sort((a, b) => new Date(b.posted) - new Date(a.posted));
    else if (sort === 'salary') jobs.sort((a, b) => b.salaryMax - a.salaryMax);
    return jobs;
  },
  render() {
    const jobs = this.getFiltered();
    const total = jobs.length;
    const start = (this.page - 1) * this.perPage;
    const paged = jobs.slice(start, start + this.perPage);
    const listEl = H.$('#jobList');
    const countEl = H.$('#resultsCount');
    if (countEl) countEl.textContent = total + ' jobs found';
    if (listEl) {
      if (paged.length === 0) listEl.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-text">No jobs match your criteria. Try adjusting your filters.</div></div>';
      else listEl.innerHTML = paged.map(j => JobCard.render(j)).join('');
    }
    this.renderPagination(total);
    if (H.$('[name="keyword"]')) H.$('[name="keyword"]').value = this.params.q || '';
  },
  renderPagination(total) {
    const el = H.$('#pagination');
    if (!el) return;
    const pages = Math.ceil(total / this.perPage);
    if (pages <= 1) { el.innerHTML = ''; return; }
    let html = '';
    if (this.page > 1) html += `<button class="page-btn" data-page="${this.page - 1}">‹ Prev</button>`;
    for (let i = 1; i <= pages; i++) html += `<button class="page-btn ${i === this.page ? 'active' : ''}" data-page="${i}">${i}</button>`;
    if (this.page < pages) html += `<button class="page-btn" data-page="${this.page + 1}">Next ›</button>`;
    el.innerHTML = html;
    el.addEventListener('click', e => {
      const pg = e.target.closest('[data-page]');
      if (pg) { this.page = parseInt(pg.dataset.page); this.render(); window.scrollTo(0, 0); }
    });
  },
  bindFilters() {
    const form = H.$('#filterForm');
    if (!form) return;
    /* Search bar */
    const searchInput = H.$('[name="keyword"]', form.closest('.search-layout') || document);
    if (searchInput) {
      let timer;
      searchInput.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => { this.params.q = searchInput.value; this.page = 1; this.render(); }, 300); });
    }
    /* Checkboxes & radios */
    form.addEventListener('change', () => {
      const types = H.$$('input[name="type"]:checked', form).map(i => i.value);
      this.params.type = types.join(',') || undefined;
      const level = H.$('input[name="level"]:checked', form)?.value || undefined;
      this.params.level = level;
      const posted = H.$('input[name="posted"]:checked', form)?.value || undefined;
      this.params.posted = posted;
      const minSal = H.$('[name="minSalary"]', form)?.value || undefined;
      const maxSal = H.$('[name="maxSalary"]', form)?.value || undefined;
      this.params.minSalary = minSal;
      this.params.maxSalary = maxSal;
      const industry = H.$('[name="industry"]', form)?.value || undefined;
      if (industry && industry !== 'All') this.params.category = industry;
      else delete this.params.category;
      this.page = 1;
      this.render();
    });
    /* Sort */
    const sort = H.$('#sortSelect');
    if (sort) sort.addEventListener('change', () => { this.params.sort = sort.value; this.render(); });
    /* Clear */
    H.$('#clearFilters')?.addEventListener('click', () => {
      this.params = {};
      form.reset();
      if (searchInput) searchInput.value = '';
      this.page = 1;
      this.render();
    });
    /* Prefill from URL */
    if (this.params.q && searchInput) searchInput.value = this.params.q;
    if (this.params.type) this.params.type.split(',').forEach(t => { const cb = H.$(`input[name="type"][value="${t}"]`, form); if (cb) cb.checked = true; });
    if (this.params.level) { const r = H.$(`input[name="level"][value="${this.params.level}"]`, form); if (r) r.checked = true; }
    if (this.params.category) { const sel = H.$('[name="industry"]', form); if (sel) sel.value = this.params.category; }
  }
};

/* ============================================================
   PAGE: Job Detail
   ============================================================ */
const JobDetail = {
  init() {
    const id = H.qs().id;
    this.job = JB.jobs.find(j => j.id === id);
    if (!this.job) { H.$('#jobDetailContent').innerHTML = '<div class="empty-state"><div class="empty-state-icon">😕</div><div class="empty-state-text">Job not found.</div></div>'; return; }
    this.company = H.getCompany(this.job.companyId);
    this.renderHeader();
    this.renderContent();
    this.renderSidebar();
    this.renderSimilar();
  },
  renderHeader() {
    const el = H.$('#jobHeader');
    if (!el) return;
    const j = this.job, co = this.company;
    el.innerHTML = `
      <div class="breadcrumb"><a href="index.html">Home</a> <span>/</span> <a href="search.html">Jobs</a> <span>/</span> <span>${j.title}</span></div>
      <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem">
        <img src="${co?.logo || ''}" alt="${co?.name}" style="width:56px;height:56px;border-radius:var(--radius-md)">
        <div>
          <div class="job-detail-title">${j.title}</div>
          <div style="color:var(--text-secondary)"><a href="company.html?id=${co?.id}" style="color:var(--primary);font-weight:600">${co?.name}</a> · ${j.location} · ${H.ago(j.posted)}</div>
        </div>
      </div>
      <div class="flex gap-2 flex-wrap">
        <span class="${H.badgeClass(j.type)}">${j.type}</span>
        <span class="badge badge-fulltime">${j.level}</span>
        <span class="badge badge-remote">${j.experience}</span>
      </div>`;
  },
  renderContent() {
    const el = H.$('#jobContent');
    if (!el) return;
    const j = this.job, co = this.company;
    el.innerHTML = `
      <div class="job-detail-section"><h3>Job Description</h3><p style="line-height:1.7;color:var(--text-secondary)">${j.description}</p></div>
      <div class="job-detail-section"><h3>Requirements</h3><ul>${j.requirements.map(r => `<li>${r}</li>`).join('')}</ul></div>
      <div class="job-detail-section"><h3>Benefits</h3><ul>${j.benefits.map(b => `<li>${b}</li>`).join('')}</ul></div>
      <div class="job-detail-section"><h3>About ${co?.name}</h3><p style="line-height:1.7;color:var(--text-secondary)">${co?.description || ''}</p></div>`;
  },
  renderSidebar() {
    const el = H.$('#applySidebar');
    if (!el) return;
    const j = this.job, co = this.company;
    const saved = SavedJobs.has(j.id);
    el.innerHTML = `
      <div class="apply-salary">${H.money(j.salaryMin)} - ${H.money(j.salaryMax)}<span style="font-size:.875rem;font-weight:400;color:var(--text-secondary)">/month</span></div>
      <button class="btn btn-primary btn-lg w-full mb-4" onclick="JobDetail.openApply()">Apply Now</button>
      <button class="btn btn-secondary btn-lg w-full mb-4" onclick="JobCard.toggleSave('${j.id}',this);this.textContent=SavedJobs.has('${j.id}')?'❤️ Saved':'🤍 Save Job'">${saved ? '❤️ Saved' : '🤍 Save Job'}</button>
      <div class="apply-facts">
        <div class="apply-fact"><span class="apply-fact-label">Type</span><span class="apply-fact-value">${j.type}</span></div>
        <div class="apply-fact"><span class="apply-fact-label">Level</span><span class="apply-fact-value">${j.level}</span></div>
        <div class="apply-fact"><span class="apply-fact-label">Experience</span><span class="apply-fact-value">${j.experience}</span></div>
        <div class="apply-fact"><span class="apply-fact-label">Vacancies</span><span class="apply-fact-value">${j.vacancies}</span></div>
        <div class="apply-fact"><span class="apply-fact-label">Deadline</span><span class="apply-fact-value">${j.deadline}</span></div>
      </div>
      <div class="mt-4"><div style="font-weight:600;font-size:.875rem;margin-bottom:.5rem">Skills</div><div class="flex flex-wrap gap-2">${j.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div></div>
      <div class="card mt-4" style="padding:1rem">
        <div style="display:flex;align-items:center;gap:.75rem">
          <img src="${co?.logo || ''}" alt="${co?.name}" style="width:40px;height:40px;border-radius:var(--radius-md)">
          <div><div style="font-weight:600;font-size:.875rem">${co?.name}</div><div style="font-size:.75rem;color:var(--text-muted)">${H.stars(co?.rating || 0)} ${co?.rating}</div></div>
        </div>
        <a href="company.html?id=${co?.id}" class="btn btn-ghost btn-sm w-full mt-4" style="justify-content:center">View Company →</a>
      </div>`;
  },
  renderSimilar() {
    const el = H.$('#similarJobs');
    if (!el) return;
    const similar = JB.jobs.filter(j => j.id !== this.job.id && j.category === this.job.category).slice(0, 3);
    if (similar.length === 0) { el.closest('.section')?.remove(); return; }
    el.innerHTML = similar.map(j => JobCard.render(j)).join('');
  },
  openApply() {
    if (!Auth.isLoggedIn()) { Auth.openModal(); Toast.show('Please login to apply', 'warning'); return; }
    H.$('#applyModal')?.classList.add('active');
  },
  closeApply() { H.$('#applyModal')?.classList.remove('active'); },
  submitApplication(form) {
    const id = this.job.id;
    const existing = Applications.get().find(a => a.jobId === id);
    if (existing) { Toast.show('You already applied to this job', 'warning'); this.closeApply(); return; }
    const app = {
      id: 'app' + Date.now(),
      jobId: id,
      companyId: this.job.companyId,
      status: 'applied',
      appliedDate: new Date().toISOString().split('T')[0],
      notes: ''
    };
    Applications.add(app);
    Toast.show('Application submitted successfully! 🎉', 'success');
    this.closeApply();
    form.reset();
  }
};

/* ============================================================
   PAGE: Companies Directory
   ============================================================ */
const Companies = {
  init() {
    this.render();
    this.bindSearch();
  },
  render(filter = {}) {
    const el = H.$('#companyGrid');
    if (!el) return;
    let list = [...JB.companies];
    if (filter.q) { const q = filter.q.toLowerCase(); list = list.filter(c => c.name.toLowerCase().includes(q)); }
    if (filter.industry && filter.industry !== 'All') list = list.filter(c => c.industry === filter.industry);
    const sort = filter.sort || 'rating';
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    else if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === 'jobs') list.sort((a, b) => b.openJobs - a.openJobs);
    if (list.length === 0) { el.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🏢</div><div class="empty-state-text">No companies found.</div></div>'; return; }
    el.innerHTML = list.map(c => `
      <a href="company.html?id=${c.id}" class="company-card">
        <img src="${c.logo}" alt="${c.name}" class="company-card-logo">
        <div class="company-card-name">${c.name}</div>
        <div class="company-card-industry">${c.industry} · ${c.location}</div>
        <div class="company-card-rating">${H.stars(c.rating)} ${c.rating}</div>
        <div class="company-card-jobs">${c.openJobs} open positions</div>
      </a>
    `).join('');
    const cnt = H.$('#companyCount');
    if (cnt) cnt.textContent = list.length + ' companies';
  },
  bindSearch() {
    const search = H.$('#companySearch');
    const industry = H.$('#industryFilter');
    const sort = H.$('#companySort');
    const getFilter = () => ({ q: search?.value, industry: industry?.value, sort: sort?.value });
    search?.addEventListener('input', () => this.render(getFilter()));
    industry?.addEventListener('change', () => this.render(getFilter()));
    sort?.addEventListener('change', () => this.render(getFilter()));
  }
};

/* ============================================================
   PAGE: Company Profile
   ============================================================ */
const CompanyProfile = {
  init() {
    const id = H.qs().id;
    this.company = JB.companies.find(c => c.id === id);
    if (!this.company) { H.$('#companyContent').innerHTML = '<div class="empty-state"><div class="empty-state-icon">🏢</div><div class="empty-state-text">Company not found.</div></div>'; return; }
    this.renderHeader();
    this.renderTabs();
  },
  renderHeader() {
    const el = H.$('#companyHeader');
    if (!el) return;
    const c = this.company;
    el.innerHTML = `
      <img src="${c.logo}" alt="${c.name}" class="company-header-logo">
      <div class="company-header-info">
        <div class="company-header-name">${c.name}</div>
        <div class="company-header-meta">${c.industry} · ${c.location} · ${c.employees} employees · Est. ${c.founded}</div>
        <div class="company-header-rating"><span style="color:var(--warning)">${H.stars(c.rating)}</span> <strong>${c.rating}</strong> <span style="color:var(--text-muted)">(${c.reviewCount} reviews)</span></div>
      </div>
      <a href="${c.website}" target="_blank" class="btn btn-secondary btn-md">Visit Website</a>`;
  },
  renderTabs() {
    const btns = H.$$('.tab-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        H.$$('.tab-content').forEach(tc => tc.classList.remove('active'));
        H.$('#tab-' + btn.dataset.tab)?.classList.add('active');
      });
    });
    this.renderAbout();
    this.renderJobs();
    this.renderReviews();
    this.renderBenefits();
  },
  renderAbout() {
    const el = H.$('#tab-about');
    if (!el) return;
    const c = this.company;
    el.innerHTML = `
      <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">About ${c.name}</h3>
      <p style="color:var(--text-secondary);line-height:1.7;margin-bottom:1.5rem">${c.description}</p>
      <h4 style="font-weight:600;margin-bottom:.75rem">Our Mission</h4>
      <p style="color:var(--text-secondary);line-height:1.7;margin-bottom:1.5rem">${c.mission}</p>
      <h4 style="font-weight:600;margin-bottom:.75rem">Tech Stack</h4>
      <div class="flex flex-wrap gap-2">${c.techStack.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>`;
  },
  renderJobs() {
    const el = H.$('#tab-jobs');
    if (!el) return;
    const jobs = JB.jobs.filter(j => j.companyId === this.company.id);
    if (jobs.length === 0) { el.innerHTML = '<div class="empty-state"><div class="empty-state-icon">💼</div><div class="empty-state-text">No open positions right now.</div></div>'; return; }
    el.innerHTML = `<h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Open Positions (${jobs.length})</h3><div class="job-list">${jobs.map(j => JobCard.render(j)).join('')}</div>`;
  },
  renderReviews() {
    const el = H.$('#tab-reviews');
    if (!el) return;
    const reviews = JB.companyReviews[this.company.id] || [];
    const c = this.company;
    const rb = c.ratingBreakdown;
    el.innerHTML = `
      <div class="grid-2 mb-6">
        <div class="card" style="text-align:center">
          <div style="font-size:3rem;font-weight:800;color:var(--primary)">${c.rating}</div>
          <div style="color:var(--warning);margin:.5rem 0">${H.stars(c.rating)}</div>
          <div style="color:var(--text-muted);font-size:.85rem">${c.reviewCount} reviews</div>
        </div>
        <div class="card">
          ${Object.entries(rb).map(([k, v]) => `
            <div class="rating-bar">
              <span class="rating-bar-label">${k.charAt(0).toUpperCase() + k.slice(1).replace(/([A-Z])/g, ' $1')}</span>
              <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${v / 5 * 100}%"></div></div>
              <span class="rating-bar-value">${v}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Employee Reviews</h3>
      ${reviews.map(r => `
        <div class="review-card">
          <div class="review-header"><span class="review-role">${r.role}</span><span class="review-date">${r.date}</span></div>
          <div class="review-stars">${H.stars(r.rating)}</div>
          <div class="review-section"><strong>Pros</strong><p>${r.pros}</p></div>
          <div class="review-section"><strong>Cons</strong><p>${r.cons}</p></div>
        </div>
      `).join('')}`;
  },
  renderBenefits() {
    const el = H.$('#tab-benefits');
    if (!el) return;
    el.innerHTML = `
      <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Benefits & Perks</h3>
      <div class="benefit-grid">${this.company.benefits.map(b => `<div class="benefit-badge">${b}</div>`).join('')}</div>`;
  }
};

/* ============================================================
   PAGE: Candidate Dashboard
   ============================================================ */
const CandidateDash = {
  section: 'overview',
  init() {
    this.bindNav();
    this.show('overview');
  },
  bindNav() {
    H.$$('.dashboard-nav-item').forEach(btn => {
      btn.addEventListener('click', () => this.show(btn.dataset.section));
    });
  },
  show(section) {
    this.section = section;
    H.$$('.dashboard-nav-item').forEach(b => b.classList.toggle('active', b.dataset.section === section));
    H.$$('.dash-section').forEach(s => s.classList.toggle('active', s.id === 'dash-' + section));
    if (section === 'overview') this.renderOverview();
    if (section === 'applications') this.renderApplications();
    if (section === 'saved') this.renderSaved();
    if (section === 'resume') this.renderResume();
    if (section === 'profile') this.renderProfile();
    if (section === 'settings') this.renderSettings();
  },
  renderOverview() {
    const el = H.$('#dash-overview');
    if (!el) return;
    const apps = Applications.get();
    const saved = SavedJobs.get();
    const user = Auth.getUser();
    const interviews = apps.filter(a => a.status === 'interview').length;
    el.innerHTML = `
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.5rem">Welcome back, ${user.name}! 👋</h2>
      <div class="stats-grid mb-6">
        <div class="stat-card"><div class="stat-value">${apps.length}</div><div class="stat-label">Applications</div></div>
        <div class="stat-card"><div class="stat-value">${interviews}</div><div class="stat-label">Interviews</div></div>
        <div class="stat-card"><div class="stat-value">${saved.length}</div><div class="stat-label">Saved Jobs</div></div>
        <div class="stat-card"><div class="stat-value">${user.profileViews || 0}</div><div class="stat-label">Profile Views</div></div>
      </div>
      <div class="progress-bar-container">
        <div class="progress-info"><span>Profile Completion</span><span>${user.profileCompletion}%</span></div>
        <div class="progress-bar"><div class="progress-bar-fill" style="width:${user.profileCompletion}%"></div></div>
        ${user.incompleteItems ? `<div style="margin-top:.5rem;font-size:.8rem;color:var(--text-muted)">Missing: ${user.incompleteItems.join(', ')}</div>` : ''}
      </div>
      <h3 style="font-size:1.125rem;font-weight:600;margin:2rem 0 1rem">Application Pipeline</h3>
      ${this.renderPipeline(apps)}
      <h3 style="font-size:1.125rem;font-weight:600;margin:2rem 0 1rem">Recent Applications</h3>
      <div class="job-list">${apps.slice(0, 5).map(a => this.renderAppCard(a)).join('')}</div>`;
  },
  renderPipeline(apps) {
    const stages = ['applied', 'screening', 'interview', 'offer', 'hired'];
    const labels = ['Applied', 'Screening', 'Interview', 'Offer', 'Hired'];
    return `<div class="pipeline">${stages.map((s, i) => {
      const count = apps.filter(a => a.status === s).length;
      return `<div class="pipeline-stage ${count > 0 ? 'filled' : ''}"><div class="pipeline-stage-count">${count}</div><div class="pipeline-stage-label">${labels[i]}</div></div>`;
    }).join('')}</div>`;
  },
  renderAppCard(a) {
    const job = JB.jobs.find(j => j.id === a.jobId);
    const co = H.getCompany(a.companyId);
    if (!job) return '';
    return `
      <div class="app-card">
        <img src="${co?.logo || ''}" alt="${co?.name}" class="app-card-logo">
        <div class="app-card-info">
          <div class="app-card-title">${job.title}</div>
          <div class="app-card-company">${co?.name || ''}</div>
        </div>
        <div class="app-card-actions">
          <span class="${H.statusClass(a.status)}">${a.status.charAt(0).toUpperCase() + a.status.slice(1)}</span>
          <span class="app-card-date">${a.appliedDate}</span>
        </div>
      </div>`;
  },
  renderApplications(filter) {
    const el = H.$('#dash-applications');
    if (!el) return;
    const apps = Applications.get();
    const statuses = ['all', 'applied', 'screening', 'interview', 'offer', 'hired', 'rejected'];
    const filtered = filter && filter !== 'all' ? apps.filter(a => a.status === filter) : apps;
    el.innerHTML = `
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.5rem">My Applications</h2>
      <div class="tabs mb-4">${statuses.map(s => `<button class="tab-btn ${(!filter || filter === 'all') && s === 'all' || filter === s ? 'active' : ''}" onclick="CandidateDash.renderApplications('${s}')">${s.charAt(0).toUpperCase() + s.slice(1)} (${s === 'all' ? apps.length : apps.filter(a => a.status === s).length})</button>`).join('')}</div>
      <div class="job-list">${filtered.length > 0 ? filtered.map(a => this.renderAppCard(a)).join('') : '<div class="empty-state"><div class="empty-state-icon">📋</div><div class="empty-state-text">No applications in this category.</div></div>'}</div>`;
  },
  renderSaved() {
    const el = H.$('#dash-saved');
    if (!el) return;
    const ids = SavedJobs.get();
    const jobs = ids.map(id => JB.jobs.find(j => j.id === id)).filter(Boolean);
    el.innerHTML = `
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.5rem">Saved Jobs (${jobs.length})</h2>
      ${jobs.length > 0 ? `<div class="job-list">${jobs.map(j => JobCard.render(j)).join('')}</div>` : '<div class="empty-state"><div class="empty-state-icon">🤍</div><div class="empty-state-text">No saved jobs yet. Browse jobs and click the heart icon to save.</div></div>'}`;
  },
  renderResume() {
    const el = H.$('#dash-resume');
    if (!el) return;
    const resume = State.get('resume');
    el.innerHTML = `
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.5rem">Resume / CV</h2>
      <div class="upload-zone" id="resumeZone">
        <div class="upload-zone-icon">📄</div>
        <div class="upload-zone-text">${resume ? 'Replace your resume' : 'Drag & drop your resume here'}</div>
        <div class="upload-zone-hint">PDF or DOC, max 5MB</div>
        <input type="file" accept=".pdf,.doc,.docx" style="display:none" id="resumeInput">
      </div>
      ${resume ? `<div class="file-preview"><span class="file-preview-icon">📎</span><span class="file-preview-name">${resume.name}</span><span class="file-preview-size">${resume.date}</span></div>` : ''}`;
    H.$('#resumeZone')?.addEventListener('click', () => H.$('#resumeInput')?.click());
    H.$('#resumeInput')?.addEventListener('change', e => {
      const file = e.target.files[0];
      if (file) {
        State.set('resume', { name: file.name, date: new Date().toLocaleDateString() });
        Toast.show('Resume uploaded!', 'success');
        this.renderResume();
      }
    });
  },
  renderProfile() {
    const el = H.$('#dash-profile');
    if (!el) return;
    const user = Auth.getUser();
    el.innerHTML = `
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.5rem">Edit Profile</h2>
      <form id="profileForm" class="card p-6">
        <div class="grid-2">
          <div class="form-group"><label class="form-label">Full Name</label><input class="form-input" name="name" value="${user.name}"></div>
          <div class="form-group"><label class="form-label">Email</label><input class="form-input" name="email" type="email" value="${user.email}"></div>
          <div class="form-group"><label class="form-label">Phone</label><input class="form-input" name="phone" value="${user.phone}"></div>
          <div class="form-group"><label class="form-label">Location</label><input class="form-input" name="location" value="${user.location}"></div>
        </div>
        <div class="form-group"><label class="form-label">Bio</label><textarea class="form-textarea" name="bio">${user.bio}</textarea></div>
        <div class="form-group"><label class="form-label">Skills</label><div class="tag-input-container" id="skillTags">${user.skills.map(s => `<span class="tag-item">${s}<button type="button" class="tag-remove" onclick="this.parentElement.remove()">✕</button></span>`).join('')}<input placeholder="Add skill & press Enter" id="skillInput"></div></div>
        <button type="submit" class="btn btn-primary btn-md mt-4">Save Changes</button>
      </form>`;
    H.$('#skillInput')?.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const val = e.target.value.trim();
        if (val) {
          const span = document.createElement('span');
          span.className = 'tag-item';
          span.innerHTML = val + '<button type="button" class="tag-remove" onclick="this.parentElement.remove()">✕</button>';
          e.target.parentElement.insertBefore(span, e.target);
          e.target.value = '';
        }
      }
    });
    H.$('#profileForm')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const updated = { ...user, name: fd.get('name'), email: fd.get('email'), phone: fd.get('phone'), location: fd.get('location'), bio: fd.get('bio') };
      updated.skills = H.$$('#skillTags .tag-item').map(t => t.textContent.replace('✕', '').trim());
      State.set('user', updated);
      Toast.show('Profile updated!', 'success');
    });
  },
  renderSettings() {
    const el = H.$('#dash-settings');
    if (!el) return;
    el.innerHTML = `
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.5rem">Settings</h2>
      <div class="card p-6">
        <div class="form-group"><label class="form-label">Email Notifications</label><label class="filter-option"><input type="checkbox" checked> Job recommendations</label><label class="filter-option"><input type="checkbox" checked> Application updates</label><label class="filter-option"><input type="checkbox"> Weekly newsletter</label></div>
        <div class="form-group mt-6"><label class="form-label">Privacy</label><label class="filter-option"><input type="checkbox" checked> Make profile visible to employers</label><label class="filter-option"><input type="checkbox"> Show salary expectations</label></div>
        <button class="btn btn-primary btn-md mt-4" onclick="Toast.show('Settings saved!','success')">Save Settings</button>
      </div>
      <div class="card p-6 mt-6">
        <h3 style="font-weight:600;color:var(--danger);margin-bottom:1rem">Danger Zone</h3>
        <button class="btn btn-danger btn-md" onclick="if(confirm('Delete account? This cannot be undone.')){State.remove('user');State.remove('applications');State.remove('savedJobs');Toast.show('Account deleted','info');setTimeout(()=>location.href='index.html',1000)}">Delete Account</button>
      </div>`;
  }
};

/* ============================================================
   PAGE: Employer Dashboard
   ============================================================ */
const EmployerDash = {
  section: 'overview',
  init() {
    this.bindNav();
    this.show('overview');
  },
  bindNav() {
    H.$$('.dashboard-nav-item').forEach(btn => {
      btn.addEventListener('click', () => this.show(btn.dataset.section));
    });
  },
  show(section) {
    this.section = section;
    H.$$('.dashboard-nav-item').forEach(b => b.classList.toggle('active', b.dataset.section === section));
    H.$$('.dash-section').forEach(s => s.classList.toggle('active', s.id === 'edash-' + section));
    if (section === 'overview') this.renderOverview();
    if (section === 'jobs') this.renderJobs();
    if (section === 'applicants') this.renderKanban();
    if (section === 'analytics') this.renderAnalytics();
    if (section === 'company') this.renderCompanyEdit();
    if (section === 'settings') this.renderSettings();
  },
  renderOverview() {
    const el = H.$('#edash-overview');
    if (!el) return;
    const emp = JB.employer;
    const co = H.getCompany(emp.companyId);
    const empJobs = JB.jobs.filter(j => j.companyId === emp.companyId);
    const allApplicants = Applicants.get();
    el.innerHTML = `
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.5rem">Employer Dashboard</h2>
      <div class="stats-grid mb-6" style="grid-template-columns:repeat(3,1fr)">
        <div class="stat-card"><div class="stat-value">${empJobs.length}</div><div class="stat-label">Active Jobs</div></div>
        <div class="stat-card"><div class="stat-value">${allApplicants.length}</div><div class="stat-label">Total Applicants</div></div>
        <div class="stat-card"><div class="stat-value">${allApplicants.filter(a => new Date(a.date) > Date.now() - 30 * 86400000).length}</div><div class="stat-label">This Month</div></div>
      </div>
      <h3 style="font-size:1.125rem;font-weight:600;margin:2rem 0 1rem">Recent Applicants</h3>
      <div class="job-list">${allApplicants.slice(0, 5).map(a => `
        <div class="app-card">
          <div style="width:40px;height:40px;border-radius:var(--radius-full);background:var(--primary-light);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--primary);font-size:.85rem">${a.name.split(' ').map(n => n[0]).join('')}</div>
          <div class="app-card-info"><div class="app-card-title">${a.name}</div><div class="app-card-company">${a.role}</div></div>
          <div class="app-card-actions"><span class="${H.statusClass(a.status)}">${a.status.charAt(0).toUpperCase() + a.status.slice(1)}</span><span class="app-card-date">${a.date}</span></div>
        </div>
      `).join('')}</div>`;
  },
  renderJobs() {
    const el = H.$('#edash-jobs');
    if (!el) return;
    const empJobs = JB.jobs.filter(j => j.companyId === JB.employer.companyId);
    const applicants = Applicants.get();
    el.innerHTML = `
      <div class="section-header"><h2 style="font-size:1.5rem;font-weight:700">Posted Jobs</h2><a href="post-job.html" class="btn btn-primary btn-md">+ Post New Job</a></div>
      <table class="data-table">
        <thead><tr><th>Job Title</th><th>Posted</th><th>Applications</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${empJobs.map(j => `
          <tr>
            <td style="font-weight:600">${j.title}</td>
            <td>${j.posted}</td>
            <td>${applicants.filter(a => a.jobId === j.id).length}</td>
            <td><span class="status-badge status-active">Active</span></td>
            <td class="table-actions">
              <a href="job.html?id=${j.id}" class="btn btn-ghost btn-sm">View</a>
              <button class="btn btn-ghost btn-sm" onclick="Toast.show('Edit mode coming soon','info')">Edit</button>
            </td>
          </tr>
        `).join('')}</tbody>
      </table>`;
  },
  renderKanban() {
    const el = H.$('#edash-applicants');
    if (!el) return;
    const applicants = Applicants.get();
    const columns = [
      { id: 'new', label: 'New', color: '#64748B' },
      { id: 'screening', label: 'Screening', color: '#0891B2' },
      { id: 'interview', label: 'Interview', color: '#D97706' },
      { id: 'offer', label: 'Offer', color: '#16A34A' },
      { id: 'hired', label: 'Hired', color: '#2563EB' }
    ];
    el.innerHTML = `
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.5rem">Applicant Tracking</h2>
      <div class="kanban">${columns.map(col => {
        const items = applicants.filter(a => a.status === col.id);
        return `
          <div class="kanban-column" data-status="${col.id}" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="EmployerDash.dropCard(event,this)">
            <div class="kanban-header"><span>${col.label}</span><span class="kanban-count">${items.length}</span></div>
            <div class="kanban-cards">${items.map(a => `
              <div class="kanban-card" draggable="true" data-id="${a.id}" ondragstart="event.dataTransfer.setData('text/plain','${a.id}');this.classList.add('dragging')" ondragend="this.classList.remove('dragging')">
                <div class="kanban-card-name">${a.name}</div>
                <div class="kanban-card-role">${a.role}</div>
                <div class="kanban-card-date">Applied: ${a.date}</div>
                <div class="kanban-card-resume">📎 ${a.resume}</div>
              </div>
            `).join('')}</div>
          </div>`;
      }).join('')}</div>`;
  },
  dropCard(e, col) {
    e.preventDefault();
    col.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    const newStatus = col.dataset.status;
    Applicants.updateStatus(id, newStatus);
    Toast.show('Applicant moved to ' + newStatus, 'success');
    this.renderKanban();
  },
  renderAnalytics() {
    const el = H.$('#edash-analytics');
    if (!el) return;
    el.innerHTML = `
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.5rem">Analytics</h2>
      <div class="grid-2">
        <div class="card p-6"><h3 style="font-weight:600;margin-bottom:1rem">Applications Over Time</h3><div class="chart-container"><canvas id="appsChart" height="200"></canvas></div></div>
        <div class="card p-6"><h3 style="font-weight:600;margin-bottom:1rem">Applications by Job</h3><div class="chart-container"><canvas id="jobsChart" height="200"></canvas></div></div>
      </div>`;
    setTimeout(() => {
      this.drawAppsChart();
      this.drawJobsChart();
    }, 100);
  },
  drawAppsChart() {
    const canvas = H.$('#appsChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = canvas.parentElement.offsetWidth;
    const h = canvas.height = 200;
    const data = [3, 5, 2, 7, 4, 6, 8, 5, 9, 6, 4, 7];
    const max = Math.max(...data);
    const pad = { t: 20, r: 20, b: 30, l: 40 };
    const cw = w - pad.l - pad.r;
    const ch = h - pad.t - pad.b;
    ctx.strokeStyle = '#2563EB';
    ctx.lineWidth = 2;
    ctx.beginPath();
    data.forEach((v, i) => {
      const x = pad.l + (i / (data.length - 1)) * cw;
      const y = pad.t + ch - (v / max) * ch;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.fillStyle = 'rgba(37,99,235,.1)';
    ctx.lineTo(pad.l + cw, pad.t + ch);
    ctx.lineTo(pad.l, pad.t + ch);
    ctx.fill();
    ctx.fillStyle = '#64748B';
    ctx.font = '11px Inter, sans-serif';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    data.forEach((_, i) => {
      const x = pad.l + (i / (data.length - 1)) * cw;
      ctx.fillText(months[i], x - 10, h - 10);
    });
  },
  drawJobsChart() {
    const canvas = H.$('#jobsChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = canvas.parentElement.offsetWidth;
    const h = canvas.height = 200;
    const empJobs = JB.jobs.filter(j => j.companyId === JB.employer.companyId);
    const applicants = Applicants.get();
    const data = empJobs.map(j => ({ label: j.title.split(' ').slice(0, 2).join(' '), count: applicants.filter(a => a.jobId === j.id).length }));
    const max = Math.max(...data.map(d => d.count), 1);
    const barW = Math.min(40, (w - 80) / data.length - 10);
    const pad = { t: 20, b: 60, l: 40, r: 20 };
    const ch = h - pad.t - pad.b;
    data.forEach((d, i) => {
      const x = pad.l + i * (barW + 10) + 5;
      const bh = (d.count / max) * ch;
      ctx.fillStyle = '#2563EB';
      ctx.fillRect(x, pad.t + ch - bh, barW, bh);
      ctx.fillStyle = '#64748B';
      ctx.font = '10px Inter, sans-serif';
      ctx.save();
      ctx.translate(x + barW / 2, h - 5);
      ctx.rotate(-Math.PI / 4);
      ctx.fillText(d.label, 0, 0);
      ctx.restore();
      ctx.fillStyle = '#2563EB';
      ctx.fillText(d.count, x + barW / 2 - 3, pad.t + ch - bh - 5);
    });
  },
  renderCompanyEdit() {
    const el = H.$('#edash-company');
    if (!el) return;
    const co = H.getCompany(JB.employer.companyId) || {};
    el.innerHTML = `
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.5rem">Company Profile</h2>
      <form class="card p-6" onsubmit="event.preventDefault();Toast.show('Company profile updated!','success')">
        <div class="grid-2">
          <div class="form-group"><label class="form-label">Company Name</label><input class="form-input" value="${co.name || ''}"></div>
          <div class="form-group"><label class="form-label">Industry</label><input class="form-input" value="${co.industry || ''}"></div>
          <div class="form-group"><label class="form-label">Location</label><input class="form-input" value="${co.location || ''}"></div>
          <div class="form-group"><label class="form-label">Website</label><input class="form-input" value="${co.website || ''}"></div>
        </div>
        <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea">${co.description || ''}</textarea></div>
        <div class="form-group"><label class="form-label">Mission</label><textarea class="form-textarea">${co.mission || ''}</textarea></div>
        <button type="submit" class="btn btn-primary btn-md mt-4">Save Changes</button>
      </form>`;
  },
  renderSettings() {
    const el = H.$('#edash-settings');
    if (!el) return;
    el.innerHTML = `
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.5rem">Settings</h2>
      <div class="card p-6">
        <div class="form-group"><label class="form-label">Email Notifications</label><label class="filter-option"><input type="checkbox" checked> New applications</label><label class="filter-option"><input type="checkbox" checked> Interview reminders</label></div>
        <button class="btn btn-primary btn-md mt-4" onclick="Toast.show('Settings saved!','success')">Save</button>
      </div>`;
  }
};

/* ============================================================
   PAGE: Post a Job
   ============================================================ */
const PostJob = {
  skills: [],
  requirements: [],
  benefits: [],
  init() {
    this.bindForm();
    this.bindTagInput();
    this.bindListInputs();
    this.updatePreview();
  },
  bindForm() {
    const form = H.$('#postJobForm');
    if (!form) return;
    form.addEventListener('input', () => this.updatePreview());
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!Auth.isLoggedIn()) { Auth.openModal(); return; }
      Toast.show('Job published successfully! 🎉', 'success');
      setTimeout(() => location.href = 'employer.html', 1500);
    });
  },
  bindTagInput() {
    const input = H.$('#skillTagInput');
    if (!input) return;
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const val = input.value.trim();
        if (val && !this.skills.includes(val)) {
          this.skills.push(val);
          this.renderSkillTags();
          input.value = '';
          this.updatePreview();
        }
      }
    });
  },
  renderSkillTags() {
    const container = H.$('#skillTagList');
    if (!container) return;
    container.innerHTML = this.skills.map(s => `<span class="tag-item">${s}<button type="button" class="tag-remove" onclick="PostJob.removeSkill('${s}')">✕</button></span>`).join('');
  },
  removeSkill(s) {
    this.skills = this.skills.filter(x => x !== s);
    this.renderSkillTags();
    this.updatePreview();
  },
  bindListInputs() {
    H.$('#addReqBtn')?.addEventListener('click', () => {
      const input = H.$('#reqInput');
      if (input?.value.trim()) { this.requirements.push(input.value.trim()); input.value = ''; this.renderList('requirements'); this.updatePreview(); }
    });
    H.$('#addBenBtn')?.addEventListener('click', () => {
      const input = H.$('#benInput');
      if (input?.value.trim()) { this.benefits.push(input.value.trim()); input.value = ''; this.renderList('benefits'); this.updatePreview(); }
    });
  },
  renderList(type) {
    const el = H.$('#' + type + 'List');
    if (!el) return;
    const list = this[type];
    el.innerHTML = list.map((item, i) => `<div class="list-item"><span>${item}</span><button type="button" class="list-item-remove" onclick="PostJob.removeListItem('${type}',${i})">✕</button></div>`).join('');
  },
  removeListItem(type, i) {
    this[type].splice(i, 1);
    this.renderList(type);
    this.updatePreview();
  },
  updatePreview() {
    const el = H.$('#jobPreview');
    if (!el) return;
    const f = H.$('#postJobForm');
    if (!f) return;
    const fd = new FormData(f);
    el.innerHTML = `
      <div class="job-preview-badge">Preview</div>
      <h3 style="font-weight:700;font-size:1.125rem;margin-bottom:.5rem">${fd.get('title') || 'Job Title'}</h3>
      <div style="font-size:.85rem;color:var(--text-secondary);margin-bottom:.75rem">${fd.get('location') || 'Location'} · ${fd.get('type') || 'Full-time'} · ${fd.get('level') || 'Mid'}</div>
      ${fd.get('salaryMin') && fd.get('salaryMax') ? `<div style="font-weight:700;color:var(--primary);margin-bottom:.75rem">${H.money(fd.get('salaryMin'))} - ${H.money(fd.get('salaryMax'))}/mo</div>` : ''}
      <div style="font-size:.85rem;color:var(--text-secondary);margin-bottom:1rem">${(fd.get('description') || 'Add a description...').substring(0, 150)}...</div>
      ${this.skills.length ? `<div class="flex flex-wrap gap-2 mb-4">${this.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>` : ''}
      ${this.requirements.length ? `<div style="margin-bottom:1rem"><strong style="font-size:.85rem">Requirements</strong><ul style="padding-left:1.25rem;margin-top:.5rem">${this.requirements.map(r => `<li style="font-size:.8rem;color:var(--text-secondary);list-style:disc;margin-bottom:.25rem">${r}</li>`).join('')}</ul></div>` : ''}
      ${this.benefits.length ? `<div><strong style="font-size:.85rem">Benefits</strong><ul style="padding-left:1.25rem;margin-top:.5rem">${this.benefits.map(b => `<li style="font-size:.8rem;color:var(--text-secondary);list-style:disc;margin-bottom:.25rem">${b}</li>`).join('')}</ul></div>` : ''}`;
  }
};

/* ============================================================
   PAGE: Salary Insights
   ============================================================ */
const SalaryInsights = {
  init() {
    this.currentRole = JB.salaryData.roles[0];
    this.renderExplorer();
    this.renderTopPaying();
    this.bindFilters();
    this.update();
  },
  bindFilters() {
    H.$('#roleSelect')?.addEventListener('change', e => {
      this.currentRole = JB.salaryData.roles.find(r => r.id === e.target.value) || JB.salaryData.roles[0];
      this.update();
    });
  },
  update() {
    this.renderDisplay();
    this.renderGauge();
    this.drawExperienceChart();
    this.drawTrendChart();
  },
  renderExplorer() {
    const el = H.$('#roleSelect');
    if (!el) return;
    el.innerHTML = JB.salaryData.roles.map(r => `<option value="${r.id}">${r.title}</option>`).join('');
  },
  renderDisplay() {
    const el = H.$('#salaryDisplay');
    if (!el) return;
    const r = this.currentRole;
    el.innerHTML = `
      <div class="salary-avg">${H.money(r.avg)}</div>
      <div class="salary-range-text">Range: ${H.money(r.min)} — ${H.money(r.max)} /month</div>`;
  },
  renderGauge() {
    const el = H.$('#salaryGauge');
    if (!el) return;
    const r = this.currentRole;
    const pct = ((r.avg - r.min) / (r.max - r.min)) * 100;
    el.innerHTML = `
      <div class="salary-gauge"><div class="salary-gauge-marker" style="left:${pct}%"></div></div>
      <div class="salary-gauge-labels"><span>${H.money(r.min)}</span><span>${H.money(r.max)}</span></div>`;
  },
  drawExperienceChart() {
    const canvas = H.$('#expChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = canvas.parentElement.offsetWidth;
    const h = canvas.height = 220;
    ctx.clearRect(0, 0, w, h);
    const r = this.currentRole;
    const entries = Object.entries(r.byExperience);
    const max = Math.max(...entries.map(e => e[1]));
    const pad = { t: 20, b: 40, l: 100, r: 60 };
    const ch = h - pad.t - pad.b;
    const barH = Math.min(30, ch / entries.length - 10);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    entries.forEach(([label, val], i) => {
      const y = pad.t + i * (barH + 15);
      const bw = (val / max) * (w - pad.l - pad.r);
      ctx.fillStyle = '#2563EB';
      ctx.fillRect(pad.l, y, bw, barH);
      ctx.fillStyle = isDark ? '#CBD5E1' : '#475569';
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(label.charAt(0).toUpperCase() + label.slice(1), pad.l - 10, y + barH / 2 + 4);
      ctx.textAlign = 'left';
      ctx.fillStyle = '#2563EB';
      ctx.fillText(H.money(val), pad.l + bw + 8, y + barH / 2 + 4);
    });
  },
  drawTrendChart() {
    const canvas = H.$('#trendChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = canvas.parentElement.offsetWidth;
    const h = canvas.height = 220;
    ctx.clearRect(0, 0, w, h);
    const data = this.currentRole.trend;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const pad = { t: 20, r: 20, b: 30, l: 60 };
    const cw = w - pad.l - pad.r;
    const ch = h - pad.t - pad.b;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    ctx.strokeStyle = '#7C3AED';
    ctx.lineWidth = 2;
    ctx.beginPath();
    data.forEach((v, i) => {
      const x = pad.l + (i / (data.length - 1)) * cw;
      const y = pad.t + ch - ((v - min) / (max - min || 1)) * ch;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.fillStyle = 'rgba(124,58,237,.08)';
    ctx.lineTo(pad.l + cw, pad.t + ch);
    ctx.lineTo(pad.l, pad.t + ch);
    ctx.fill();
    ctx.fillStyle = isDark ? '#94A3B8' : '#64748B';
    ctx.font = '11px Inter, sans-serif';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    data.forEach((_, i) => {
      if (i % 2 === 0) {
        const x = pad.l + (i / (data.length - 1)) * cw;
        ctx.fillText(months[i], x - 10, h - 8);
      }
    });
  },
  renderTopPaying() {
    const el = H.$('#topPayingTable');
    if (!el) return;
    el.innerHTML = `
      <table class="data-table">
        <thead><tr><th>Company</th><th>Avg. Salary</th><th>Industry</th></tr></thead>
        <tbody>${JB.salaryData.topPaying.map(c => `
          <tr><td style="font-weight:600">${c.company}</td><td style="color:var(--primary);font-weight:600">${H.money(c.avgSalary)}/mo</td><td>${c.industry}</td></tr>
        `).join('')}</tbody>
      </table>`;
  }
};

/* ============================================================
   PAGE: Resources
   ============================================================ */
const Resources = {
  current: 'All',
  init() {
    this.render();
    this.bindFilters();
  },
  render() {
    const el = H.$('#resourceGrid');
    if (!el) return;
    let items = [...JB.resources];
    if (this.current !== 'All') items = items.filter(r => r.category === this.current);
    el.innerHTML = items.map(r => `
      <div class="resource-card" onclick="Toast.show('Full article view coming soon!','info')">
        <img src="${r.image}" alt="${r.title}" class="resource-card-img">
        <div class="resource-card-body">
          <div class="resource-card-category">${r.category}</div>
          <div class="resource-card-title">${r.title}</div>
          <div class="resource-card-excerpt">${r.excerpt}</div>
          <div class="resource-card-meta"><span>${r.readTime} read</span><span>${r.date}</span></div>
        </div>
      </div>
    `).join('');
  },
  bindFilters() {
    H.$$('.resource-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        H.$$('.resource-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.current = btn.dataset.category;
        this.render();
      });
    });
  }
};

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  initHeader();
  Auth.updateUI();

  /* Auth modal bindings */
  document.querySelectorAll('.auth-login-btn').forEach(b => b.addEventListener('click', () => Auth.openModal()));
  document.querySelectorAll('.auth-logout-btn').forEach(b => b.addEventListener('click', () => Auth.logout()));
  document.querySelector('.auth-close')?.addEventListener('click', () => Auth.closeModal());
  document.querySelectorAll('.auth-tab').forEach(t => t.addEventListener('click', () => Auth.switchTab(t.dataset.tab)));
  document.getElementById('loginForm')?.addEventListener('submit', e => { e.preventDefault(); Auth.login(e.target.email.value, e.target.password.value); });
  document.getElementById('signupForm')?.addEventListener('submit', e => { e.preventDefault(); Auth.signup(e.target.name.value, e.target.email.value, e.target.password.value); });

  /* Drawer */
  document.querySelector('.hamburger')?.addEventListener('click', Drawer.open);
  document.getElementById('drawerOverlay')?.addEventListener('click', Drawer.close);
  document.querySelector('.drawer-close')?.addEventListener('click', Drawer.close);

  /* Page routing */
  const page = document.body.dataset.page;
  if (page === 'home') HomePage.init();
  if (page === 'search') JobSearch.init();
  if (page === 'job') JobDetail.init();
  if (page === 'companies') Companies.init();
  if (page === 'company') CompanyProfile.init();
  if (page === 'candidate') CandidateDash.init();
  if (page === 'employer') EmployerDash.init();
  if (page === 'post-job') PostJob.init();
  if (page === 'salary') SalaryInsights.init();
  if (page === 'resources') Resources.init();
});
