/* ============================================
   10 — Real Estate Platform  ·  Application JS
   ============================================ */

/* ---- Icons (Inline SVG) ---- */
const Icons = {
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
  bath: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z"/><path d="M6 12V5a2 2 0 0 1 2-2h3v2.25"/></svg>',
  area: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 12h18M12 3v18"/></svg>',
  year: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  floor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="2" y1="8" x2="22" y2="8"/><line x1="2" y1="14" x2="22" y2="14"/></svg>',
  parking: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><text x="12" y="16" text-anchor="middle" font-size="12" fill="currentColor" stroke="none" font-weight="700">P</text></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.07 3h3.05a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 11.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,7 12,13 2,7"/></svg>',
  star: '★',
  starEmpty: '☆',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
  eye360: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12 15.3 15.3 0 0 1 12 2z"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  school: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 10l10-7 10 7-10 7z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  hospital: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  trendUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  calculator: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10.01"/><line x1="12" y1="10" x2="12" y2="10.01"/><line x1="16" y1="10" x2="16" y2="10.01"/><line x1="8" y1="14" x2="8" y2="14.01"/><line x1="12" y1="14" x2="12" y2="14.01"/><line x1="16" y1="14" x2="16" y2="14.01"/><line x1="8" y1="18" x2="16" y2="18"/></svg>',
  compare: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="8" height="18" rx="1"/><rect x="14" y="3" width="8" height="18" rx="1"/></svg>',
};

/* ---- State (localStorage) ---- */
const State = {
  prefix: 're_',
  get(k) { try { return JSON.parse(localStorage.getItem(this.prefix + k)); } catch { return null; } },
  set(k, v) { localStorage.setItem(this.prefix + k, JSON.stringify(v)); },
  remove(k) { localStorage.removeItem(this.prefix + k); }
};

/* ---- Theme ---- */
const Theme = {
  init() {
    const saved = State.get('theme') || (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', saved);
    this.updateIcon();
  },
  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    State.set('theme', next);
    this.updateIcon();
  },
  updateIcon() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('.theme-icon').forEach(el => el.innerHTML = isDark ? Icons.sun : Icons.moon);
  }
};

/* ---- Auth ---- */
const Auth = {
  isLoggedIn() { return State.get('isLoggedIn') === true; },
  getUser() { return State.get('user') || RE.currentUser; },
  login(email, pwd) {
    if (email === RE.currentUser.email && pwd === 'password123') {
      State.set('isLoggedIn', true);
      State.set('user', RE.currentUser);
      this.closeModal();
      this.updateUI();
      Toast.show('Welcome back, ' + RE.currentUser.name + '!', 'success');
    } else {
      Toast.show('Invalid credentials. Try the demo account.', 'error');
    }
  },
  signup(name, email, pwd) {
    const user = { ...RE.currentUser, name, email };
    State.set('isLoggedIn', true);
    State.set('user', user);
    this.closeModal();
    this.updateUI();
    Toast.show('Account created! Welcome, ' + name, 'success');
  },
  logout() {
    State.remove('isLoggedIn');
    State.remove('user');
    this.updateUI();
    Toast.show('Logged out successfully', 'info');
  },
  updateUI() {
    const loggedIn = this.isLoggedIn();
    const user = this.getUser();
    document.querySelectorAll('.auth-login-btn').forEach(el => el.style.display = loggedIn ? 'none' : '');
    document.querySelectorAll('.auth-logout-btn').forEach(el => el.style.display = loggedIn ? '' : 'none');
    document.querySelectorAll('.user-name').forEach(el => el.textContent = loggedIn ? user.name : 'Guest');
    document.querySelectorAll('.user-avatar-text').forEach(el => el.textContent = loggedIn ? user.initials : '?');
  },
  openModal() {
    const o = document.getElementById('authOverlay');
    if (o) o.classList.add('active');
  },
  closeModal() {
    const o = document.getElementById('authOverlay');
    if (o) o.classList.remove('active');
  },
  switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.toggle('active', f.id === 'auth-' + tab));
  }
};

/* ---- Toast ---- */
const Toast = {
  show(msg, type = 'info', duration = 4000) {
    let c = document.querySelector('.toast-container');
    if (!c) { c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); }
    const t = document.createElement('div');
    t.className = 'toast toast-' + type;
    t.textContent = msg;
    c.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(100%)'; setTimeout(() => t.remove(), 300); }, duration);
  }
};

/* ---- Mobile Drawer ---- */
const Drawer = {
  init() {
    const overlay = document.querySelector('.mobile-drawer-overlay');
    const drawer = document.querySelector('.mobile-drawer');
    const btn = document.querySelector('.hamburger');
    const close = document.querySelector('.drawer-close');
    if (btn) btn.addEventListener('click', () => { overlay?.classList.add('active'); drawer?.classList.add('active'); });
    if (close) close.addEventListener('click', () => this.close());
    if (overlay) overlay.addEventListener('click', () => this.close());
  },
  close() {
    document.querySelector('.mobile-drawer-overlay')?.classList.remove('active');
    document.querySelector('.mobile-drawer')?.classList.remove('active');
  }
};

/* ---- Header Scroll ---- */
const Header = {
  init() {
    const header = document.querySelector('.header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }
};

/* ---- Format Currency ---- */
function formatBDT(amount) {
  if (amount >= 10000000) return '৳' + (amount / 10000000).toFixed(2) + ' Cr';
  if (amount >= 100000) return '৳' + (amount / 100000).toFixed(1) + ' L';
  return '৳' + amount.toLocaleString('en-BD');
}

function formatPrice(property) {
  if (property.status === 'For Rent') return formatBDT(property.price) + '/mo';
  return formatBDT(property.price);
}

/* ---- Property Cards ---- */
const PropertyCards = {
  render(containerId, properties, viewMode = 'grid') {
    const c = document.getElementById(containerId);
    if (!c) return;
    if (!properties.length) { c.innerHTML = '<div class="empty-state">' + Icons.home + '<h3>No properties found</h3><p class="text-muted">Try adjusting your filters</p></div>'; return; }
    c.className = viewMode === 'list' ? '' : 'property-grid';
    c.innerHTML = properties.map(p => viewMode === 'list' ? this.listCard(p) : this.gridCard(p)).join('');
  },
  gridCard(p) {
    const saved = this.isSaved(p.id);
    return `<div class="property-card card-hover" onclick="navigateProperty('${p.id}')">
      <div class="property-card-img">
        <img src="${p.images[0]}" alt="${p.title}" loading="lazy">
        ${p.badge ? `<span class="property-badge badge-${p.badge.toLowerCase()}">${p.badge}</span>` : ''}
        <button class="wishlist-btn ${saved ? 'active' : ''}" onclick="event.stopPropagation();toggleSave('${p.id}')" aria-label="Save">${Icons.heart}</button>
      </div>
      <div class="property-card-body">
        <div class="property-price">${formatPrice(p)}</div>
        <div class="property-title">${p.title}</div>
        <div class="property-location">${Icons.mapPin} ${p.location.area}, ${p.location.address.split(',').pop().trim()}</div>
        <div class="property-specs">
          ${p.beds ? `<span class="property-spec">${Icons.bed} ${p.beds} Bed${p.beds > 1 ? 's' : ''}</span>` : ''}
          ${p.baths ? `<span class="property-spec">${Icons.bath} ${p.baths} Bath</span>` : ''}
          <span class="property-spec">${Icons.area} ${p.area.toLocaleString()} sqft</span>
        </div>
      </div>
    </div>`;
  },
  listCard(p) {
    const saved = this.isSaved(p.id);
    return `<div class="property-card-list" style="margin-bottom:var(--sp-4)" onclick="navigateProperty('${p.id}')">
      <div class="property-card-img" style="position:relative">
        <img src="${p.images[0]}" alt="${p.title}" loading="lazy">
        ${p.badge ? `<span class="property-badge badge-${p.badge.toLowerCase()}">${p.badge}</span>` : ''}
        <button class="wishlist-btn ${saved ? 'active' : ''}" onclick="event.stopPropagation();toggleSave('${p.id}')" aria-label="Save">${Icons.heart}</button>
      </div>
      <div class="property-card-body">
        <div class="property-price">${formatPrice(p)}</div>
        <div class="property-title">${p.title}</div>
        <div class="property-location">${Icons.mapPin} ${p.location.address}</div>
        <p class="text-secondary" style="font-size:13px;margin-bottom:var(--sp-3);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${p.description}</p>
        <div class="property-specs">
          ${p.beds ? `<span class="property-spec">${Icons.bed} ${p.beds} Beds</span>` : ''}
          ${p.baths ? `<span class="property-spec">${Icons.bath} ${p.baths} Bath</span>` : ''}
          <span class="property-spec">${Icons.area} ${p.area.toLocaleString()} sqft</span>
          ${p.yearBuilt ? `<span class="property-spec">${Icons.year} ${p.yearBuilt}</span>` : ''}
        </div>
      </div>
    </div>`;
  },
  isSaved(id) {
    const saved = State.get('saved') || RE.currentUser.savedProperties;
    return saved.includes(id);
  }
};

function navigateProperty(id) {
  window.location.href = 'property.html?id=' + id;
}

function toggleSave(id) {
  let saved = State.get('saved') || [...RE.currentUser.savedProperties];
  if (saved.includes(id)) {
    saved = saved.filter(s => s !== id);
    Toast.show('Removed from favorites', 'info');
  } else {
    saved.push(id);
    Toast.show('Saved to favorites!', 'success');
  }
  State.set('saved', saved);
  // Re-render wishlists on current page
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const onclick = btn.getAttribute('onclick');
    if (!onclick) return;
    const match = onclick.match(/toggleSave\('(\w+)'\)/);
    if (match) btn.classList.toggle('active', saved.includes(match[1]));
  });
}

/* ---- Listings Page ---- */
const Listings = {
  currentFilters: { type: 'All', minPrice: '', maxPrice: '', beds: 'Any', status: 'All' },
  currentSort: 'newest',
  currentView: 'grid',
  currentPage: 1,
  perPage: 6,

  init() {
    this.render();
  },

  getFiltered() {
    let list = [...RE.properties];
    const f = this.currentFilters;
    if (f.type !== 'All') list = list.filter(p => p.type === f.type);
    if (f.status !== 'All') list = list.filter(p => p.status === f.status);
    if (f.beds && f.beds !== 'Any') {
      const b = parseInt(f.beds);
      if (b === 5) list = list.filter(p => p.beds >= 5);
      else list = list.filter(p => p.beds === b);
    }
    if (f.minPrice) list = list.filter(p => p.price >= parseInt(f.minPrice));
    if (f.maxPrice) list = list.filter(p => p.price <= parseInt(f.maxPrice));
    // Sort
    if (this.currentSort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (this.currentSort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (this.currentSort === 'area') list.sort((a, b) => b.area - a.area);
    else list.sort((a, b) => new Date(b.listed) - new Date(a.listed));
    return list;
  },

  render() {
    const list = this.getFiltered();
    const totalPages = Math.ceil(list.length / this.perPage);
    const page = list.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);

    // Count
    const countEl = document.getElementById('resultsCount');
    if (countEl) countEl.textContent = list.length + ' properties found';

    // Cards
    PropertyCards.render('listingsContainer', page, this.currentView);

    // Pagination
    const pagEl = document.getElementById('pagination');
    if (pagEl && totalPages > 1) {
      let html = `<button onclick="Listings.goPage(${Math.max(1, this.currentPage - 1)})">${Icons.chevronLeft}</button>`;
      for (let i = 1; i <= totalPages; i++) {
        html += `<button class="${i === this.currentPage ? 'active' : ''}" onclick="Listings.goPage(${i})">${i}</button>`;
      }
      html += `<button onclick="Listings.goPage(${Math.min(totalPages, this.currentPage + 1)})">${Icons.chevronRight}</button>`;
      pagEl.innerHTML = html;
    } else if (pagEl) { pagEl.innerHTML = ''; }
  },

  setFilter(key, value) {
    this.currentFilters[key] = value;
    this.currentPage = 1;
    this.render();
  },

  setSort(value) {
    this.currentSort = value;
    this.render();
  },

  setView(view) {
    this.currentView = view;
    document.querySelectorAll('.view-toggle button').forEach(b => b.classList.toggle('active', b.dataset.view === view));
    this.render();
  },

  goPage(n) {
    this.currentPage = n;
    this.render();
    document.getElementById('listingsContainer')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/* ---- Property Detail ---- */
const PropertyDetail = {
  property: null,
  currentImageIndex: 0,

  init() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || 'p1';
    this.property = RE.properties.find(p => p.id === id) || RE.properties[0];
    this.renderGallery();
    this.renderInfo();
    this.renderSidebar();
    this.renderSimilar();
  },

  renderGallery() {
    const g = document.getElementById('detailGallery');
    if (!g || !this.property) return;
    const imgs = this.property.images;
    let html = `<div class="detail-gallery-main" onclick="PropertyDetail.openLightbox(0)"><img src="${imgs[0]}" alt=""></div>`;
    for (let i = 1; i < Math.min(5, imgs.length); i++) {
      html += `<div class="detail-gallery-thumb" onclick="PropertyDetail.openLightbox(${i})"><img src="${imgs[i] || imgs[0]}" alt="">`;
      if (i === 4 && imgs.length > 5) html += `<div class="detail-gallery-more">+${imgs.length - 4} More</div>`;
      html += '</div>';
    }
    // Fill empty slots with first image
    for (let i = imgs.length; i < 5; i++) {
      html += `<div class="detail-gallery-thumb" onclick="PropertyDetail.openLightbox(0)"><img src="${imgs[0]}" alt=""></div>`;
    }
    g.innerHTML = html;
  },

  renderInfo() {
    const el = document.getElementById('detailMain');
    if (!el || !this.property) return;
    const p = this.property;
    el.innerHTML = `
      <div class="detail-title">${p.title}</div>
      <div class="detail-location">${Icons.mapPin} ${p.location.address}</div>
      <div class="detail-price-row">
        <span class="detail-price">${formatPrice(p)}</span>
        ${p.pricePerSqft ? `<span class="detail-price-sqft">৳${p.pricePerSqft.toLocaleString()}/sqft</span>` : ''}
        <span class="badge badge-info">${p.status}</span>
      </div>
      <div class="spec-grid">
        ${p.beds ? `<div class="spec-item">${Icons.bed}<div><div class="spec-value">${p.beds}</div><div class="spec-label">Bedrooms</div></div></div>` : ''}
        ${p.baths ? `<div class="spec-item">${Icons.bath}<div><div class="spec-value">${p.baths}</div><div class="spec-label">Bathrooms</div></div></div>` : ''}
        <div class="spec-item">${Icons.area}<div><div class="spec-value">${p.area.toLocaleString()}</div><div class="spec-label">Sq Ft</div></div></div>
        ${p.yearBuilt ? `<div class="spec-item">${Icons.year}<div><div class="spec-value">${p.yearBuilt}</div><div class="spec-label">Year Built</div></div></div>` : ''}
        ${p.floor ? `<div class="spec-item">${Icons.floor}<div><div class="spec-value">${p.floor}/${p.totalFloors}</div><div class="spec-label">Floor</div></div></div>` : ''}
        ${p.parking ? `<div class="spec-item">${Icons.parking}<div><div class="spec-value">Yes</div><div class="spec-label">Parking</div></div></div>` : ''}
      </div>
      <div class="detail-section">
        <h2>Description</h2>
        <p style="color:var(--text-secondary);line-height:1.8">${p.description}</p>
      </div>
      <div class="detail-section">
        <h2>Amenities</h2>
        <div class="amenity-grid">${p.amenities.map(a => `<span class="amenity-tag">${Icons.check} ${a}</span>`).join('')}</div>
      </div>
      <div class="detail-section">
        <h2>Specifications</h2>
        <table class="specs-table">
          <tr><td>Property Type</td><td>${p.type}</td></tr>
          <tr><td>Condition</td><td>${p.condition}</td></tr>
          <tr><td>Furnishing</td><td>${p.furnishing}</td></tr>
          <tr><td>Facing</td><td>${p.facing}</td></tr>
          ${p.floor ? `<tr><td>Floor</td><td>${p.floor} of ${p.totalFloors}</td></tr>` : ''}
          <tr><td>Area</td><td>${p.area.toLocaleString()} sqft</td></tr>
        </table>
      </div>
      <div class="detail-section">
        <h2>Location</h2>
        <div class="map-container" style="height:300px;border-radius:var(--radius-lg);border:1px solid var(--border-color)">${Icons.map}<span>Map: ${p.location.address}</span><span class="text-muted" style="font-size:12px">Lat: ${p.location.lat}, Lng: ${p.location.lng}</span></div>
      </div>
    `;
  },

  renderSidebar() {
    const el = document.getElementById('detailSidebar');
    if (!el || !this.property) return;
    const p = this.property;
    const agent = RE.agents.find(a => a.id === p.agentId);
    const stars = agent ? Icons.star.repeat(Math.floor(agent.rating)) + (agent.rating % 1 >= 0.5 ? Icons.starEmpty : '') : '';
    el.innerHTML = `
      <div class="agent-sidebar-card">
        <div class="agent-info">
          <img src="${agent?.photo}" alt="${agent?.name}" style="width:56px;height:56px;border-radius:50%;object-fit:cover">
          <div>
            <div style="font-weight:600">${agent?.name}</div>
            <div style="font-size:13px;color:var(--text-secondary)">${agent?.title}</div>
            <div style="font-size:13px;color:#F59E0B">${stars} <span style="color:var(--text-muted)">(${agent?.reviewCount})</span></div>
          </div>
        </div>
        <div class="agent-contact-btns">
          <button class="btn btn-primary btn-md" onclick="Toast.show('Calling ${agent?.name}...','info')">${Icons.phone} Call</button>
          <button class="btn btn-secondary btn-md" onclick="Toast.show('Opening email...','info')">${Icons.mail} Email</button>
        </div>
        <button class="btn btn-primary w-full btn-md" onclick="Toast.show('Viewing request sent!','success')">Schedule Viewing</button>
      </div>
      <div class="mortgage-mini">
        <h3>Mortgage Estimate</h3>
        <div class="form-group">
          <label class="form-label">Down Payment</label>
          <input type="range" min="5" max="50" value="20" class="form-range" id="mortDown" oninput="PropertyDetail.calcMortgage()">
          <span class="text-muted" style="font-size:12px"><span id="mortDownPct">20</span>% = <span id="mortDownAmt">${formatBDT(p.price * 0.2)}</span></span>
        </div>
        <div class="form-group">
          <label class="form-label">Interest Rate</label>
          <input type="range" min="5" max="15" value="8.5" step="0.25" class="form-range" id="mortRate" oninput="PropertyDetail.calcMortgage()">
          <span class="text-muted" style="font-size:12px"><span id="mortRatePct">8.5</span>%</span>
        </div>
        <div class="form-group">
          <label class="form-label">Term</label>
          <select class="form-select" id="mortTerm" onchange="PropertyDetail.calcMortgage()">
            <option value="10">10 years</option>
            <option value="15">15 years</option>
            <option value="20" selected>20 years</option>
            <option value="25">25 years</option>
            <option value="30">30 years</option>
          </select>
        </div>
        <div class="mortgage-result">
          <div class="label">Monthly Payment</div>
          <div class="amount" id="mortMonthly">—</div>
        </div>
        <a href="mortgage.html" class="btn btn-ghost w-full btn-sm" style="margin-top:var(--sp-3)">See Full Breakdown →</a>
      </div>
    `;
    this.calcMortgage();
  },

  calcMortgage() {
    if (!this.property) return;
    const price = this.property.price;
    const down = parseInt(document.getElementById('mortDown')?.value || 20);
    const rate = parseFloat(document.getElementById('mortRate')?.value || 8.5);
    const term = parseInt(document.getElementById('mortTerm')?.value || 20);
    const downAmt = price * down / 100;
    const loan = price - downAmt;
    const monthlyRate = rate / 100 / 12;
    const months = term * 12;
    const monthly = loan * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);

    const pctEl = document.getElementById('mortDownPct');
    const amtEl = document.getElementById('mortDownAmt');
    const rateEl = document.getElementById('mortRatePct');
    const monthlyEl = document.getElementById('mortMonthly');
    if (pctEl) pctEl.textContent = down;
    if (amtEl) amtEl.textContent = formatBDT(downAmt);
    if (rateEl) rateEl.textContent = rate;
    if (monthlyEl) monthlyEl.textContent = formatBDT(Math.round(monthly));
  },

  renderSimilar() {
    const c = document.getElementById('similarProperties');
    if (!c || !this.property) return;
    const similar = RE.properties.filter(p => p.id !== this.property.id && p.location.area === this.property.location.area).slice(0, 4);
    if (!similar.length) {
      const fallback = RE.properties.filter(p => p.id !== this.property.id).slice(0, 4);
      PropertyCards.render('similarProperties', fallback);
    } else {
      PropertyCards.render('similarProperties', similar);
    }
  },

  openLightbox(index) {
    this.currentImageIndex = index;
    const overlay = document.getElementById('lightboxOverlay');
    const img = document.getElementById('lightboxImg');
    if (!overlay || !img) return;
    img.src = this.property.images[index] || this.property.images[0];
    overlay.classList.add('active');
  },

  closeLightbox() {
    document.getElementById('lightboxOverlay')?.classList.remove('active');
  },

  prevImage() {
    if (!this.property) return;
    this.currentImageIndex = (this.currentImageIndex - 1 + this.property.images.length) % this.property.images.length;
    document.getElementById('lightboxImg').src = this.property.images[this.currentImageIndex];
  },

  nextImage() {
    if (!this.property) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.property.images.length;
    document.getElementById('lightboxImg').src = this.property.images[this.currentImageIndex];
  }
};

/* ---- Virtual Tour ---- */
const VirtualTour = {
  currentRoom: 0,
  open() {
    const overlay = document.getElementById('tourOverlay');
    if (overlay) { overlay.classList.add('active'); this.renderRooms(); }
  },
  close() {
    document.getElementById('tourOverlay')?.classList.remove('active');
  },
  renderRooms() {
    const p = PropertyDetail.property;
    if (!p) return;
    const c = document.getElementById('tourRooms');
    if (c) {
      c.innerHTML = p.tourRooms.map((r, i) => `<button class="tour-room-btn ${i === this.currentRoom ? 'active' : ''}" onclick="VirtualTour.selectRoom(${i})">${r}</button>`).join('');
    }
    this.updateView();
  },
  selectRoom(i) {
    this.currentRoom = i;
    document.querySelectorAll('.tour-room-btn').forEach((b, idx) => b.classList.toggle('active', idx === i));
    this.updateView();
  },
  updateView() {
    const p = PropertyDetail.property;
    if (!p) return;
    const img = document.getElementById('tourImage');
    if (img) img.src = p.images[this.currentRoom % p.images.length] || p.images[0];
  }
};

/* ---- Mortgage Calculator (Full Page) ---- */
const MortgageCalc = {
  init() {
    this.calculate();
  },
  calculate() {
    const price = parseInt(document.getElementById('calcPrice')?.value || 8500000);
    const downPct = parseInt(document.getElementById('calcDown')?.value || 20);
    const rate = parseFloat(document.getElementById('calcRate')?.value || 8.5);
    const term = parseInt(document.getElementById('calcTerm')?.value || 20);

    const downAmt = price * downPct / 100;
    const loan = price - downAmt;
    const monthlyRate = rate / 100 / 12;
    const months = term * 12;
    const monthly = loan * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPaid = monthly * months;
    const totalInterest = totalPaid - loan;

    // Update displays
    const dp = document.getElementById('calcDownPctLabel'); if (dp) dp.textContent = downPct + '%';
    const da = document.getElementById('calcDownAmtLabel'); if (da) da.textContent = formatBDT(downAmt);
    const rl = document.getElementById('calcRateLabel'); if (rl) rl.textContent = rate + '%';
    const ml = document.getElementById('calcMonthly'); if (ml) ml.textContent = formatBDT(Math.round(monthly));
    const tl = document.getElementById('calcTotalLoan'); if (tl) tl.textContent = formatBDT(loan);
    const ti = document.getElementById('calcTotalInterest'); if (ti) ti.textContent = formatBDT(Math.round(totalInterest));
    const tc = document.getElementById('calcTotalCost'); if (tc) tc.textContent = formatBDT(Math.round(totalPaid));

    this.drawChart(loan, totalInterest);
    this.renderAmortization(loan, monthlyRate, monthly, months);
  },

  drawChart(principal, interest) {
    const canvas = document.getElementById('mortgageChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = 280;
    const h = canvas.height = 280;
    const cx = w / 2, cy = h / 2, r = 100;
    ctx.clearRect(0, 0, w, h);
    const total = principal + interest;
    const pAngle = (principal / total) * 2 * Math.PI;
    // Principal
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + pAngle); ctx.fillStyle = '#0F766E'; ctx.fill();
    // Interest
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, -Math.PI / 2 + pAngle, -Math.PI / 2 + 2 * Math.PI); ctx.fillStyle = '#F59E0B'; ctx.fill();
    // Center hole
    ctx.beginPath(); ctx.arc(cx, cy, 60, 0, 2 * Math.PI); ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-surface').trim() || '#fff'; ctx.fill();
    // Labels
    ctx.font = '600 13px Inter'; ctx.textAlign = 'center';
    ctx.fillStyle = '#0F766E'; ctx.fillText('Principal', cx, cy - 8);
    ctx.fillStyle = '#F59E0B'; ctx.fillText('Interest', cx, cy + 18);
  },

  renderAmortization(loan, monthlyRate, monthly, months) {
    const tbody = document.getElementById('amortTable');
    if (!tbody) return;
    let balance = loan;
    let html = '';
    for (let yr = 1; yr <= months / 12; yr++) {
      let yearPrincipal = 0, yearInterest = 0;
      for (let m = 0; m < 12; m++) {
        const intPay = balance * monthlyRate;
        const prinPay = monthly - intPay;
        yearPrincipal += prinPay;
        yearInterest += intPay;
        balance -= prinPay;
      }
      html += `<tr><td>${yr}</td><td>${formatBDT(Math.round(monthly * 12))}</td><td>${formatBDT(Math.round(yearPrincipal))}</td><td>${formatBDT(Math.round(yearInterest))}</td><td>${formatBDT(Math.max(0, Math.round(balance)))}</td></tr>`;
    }
    tbody.innerHTML = html;
  }
};

/* ---- Agents Page ---- */
const AgentDirectory = {
  currentFilter: 'All',
  currentSearch: '',

  init() { this.render(); },

  render() {
    const c = document.getElementById('agentGrid');
    if (!c) return;
    let agents = [...RE.agents];
    if (this.currentFilter !== 'All') agents = agents.filter(a => a.specializations.includes(this.currentFilter));
    if (this.currentSearch) {
      const s = this.currentSearch.toLowerCase();
      agents = agents.filter(a => a.name.toLowerCase().includes(s) || a.areas.join(' ').toLowerCase().includes(s));
    }
    c.innerHTML = agents.map(a => `
      <div class="agent-card" onclick="window.location.href='agent.html?id=${a.id}'">
        <img src="${a.photo}" alt="${a.name}" class="agent-avatar">
        <div class="agent-name">${a.name}</div>
        <div class="agent-title">${a.title}</div>
        <div class="agent-rating">${Icons.star.repeat(Math.floor(a.rating))} ${a.rating} <span class="text-muted">(${a.reviewCount})</span></div>
        <div class="agent-spec-tags">${a.specializations.map(s => `<span class="spec-tag">${s}</span>`).join('')}</div>
        <div class="agent-meta">${a.areas.join(', ')} · ${a.experience} yrs exp</div>
        <div style="display:flex;gap:var(--sp-2)">
          <button class="btn btn-primary btn-sm" style="flex:1" onclick="event.stopPropagation();window.location.href='agent.html?id=${a.id}'">View Profile</button>
          <button class="btn btn-secondary btn-sm" style="flex:1" onclick="event.stopPropagation();Toast.show('Contacting ${a.name}...','info')">Contact</button>
        </div>
      </div>
    `).join('');
  },

  filter(val) {
    this.currentFilter = val;
    document.querySelectorAll('.filter-pill').forEach(p => p.classList.toggle('active', p.dataset.filter === val));
    this.render();
  },

  search(val) {
    this.currentSearch = val;
    this.render();
  }
};

/* ---- Agent Profile ---- */
const AgentProfile = {
  agent: null,
  currentTab: 'listings',

  init() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || 'ag1';
    this.agent = RE.agents.find(a => a.id === id) || RE.agents[0];
    this.renderHeader();
    this.switchTab('listings');
  },

  renderHeader() {
    const el = document.getElementById('agentProfileHeader');
    if (!el || !this.agent) return;
    const a = this.agent;
    el.innerHTML = `
      <div class="profile-cover"></div>
      <div class="profile-header">
        <img src="${a.photo}" alt="${a.name}" class="profile-avatar">
        <div class="profile-info">
          <h1 style="font-size:26px;margin-bottom:var(--sp-1)">${a.name}</h1>
          <div class="text-secondary">${a.title}</div>
          <div style="margin-top:var(--sp-2);color:#F59E0B">${Icons.star.repeat(Math.floor(a.rating))} ${a.rating} <span class="text-muted">(${a.reviewCount} reviews)</span></div>
          <div class="profile-stats">
            <div class="profile-stat"><div class="val">${a.activeListings}</div><div class="lbl">Active Listings</div></div>
            <div class="profile-stat"><div class="val">${a.totalSold}</div><div class="lbl">Total Sold</div></div>
            <div class="profile-stat"><div class="val">${a.experience} yrs</div><div class="lbl">Experience</div></div>
            <div class="profile-stat"><div class="val">${a.responseTime}</div><div class="lbl">Response Time</div></div>
          </div>
        </div>
      </div>
    `;
  },

  switchTab(tab) {
    this.currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    const content = document.getElementById('agentTabContent');
    if (!content || !this.agent) return;

    if (tab === 'listings') {
      const props = RE.properties.filter(p => p.agentId === this.agent.id);
      content.innerHTML = '<div id="agentListings"></div>';
      PropertyCards.render('agentListings', props);
    } else if (tab === 'reviews') {
      content.innerHTML = this.agent.reviews.map(r => `
        <div class="review-card">
          <div class="review-header">
            <div><span class="review-user">${r.user}</span> <span class="review-date text-muted" style="margin-left:var(--sp-2)">${r.date}</span></div>
            <div class="review-stars">${Icons.star.repeat(r.rating)}${Icons.starEmpty.repeat(5 - r.rating)}</div>
          </div>
          <p class="review-text">${r.text}</p>
        </div>
      `).join('');
    } else if (tab === 'about') {
      content.innerHTML = `
        <div style="max-width:700px">
          <h3 style="margin-bottom:var(--sp-4)">About ${this.agent.name}</h3>
          <p style="color:var(--text-secondary);line-height:1.8;margin-bottom:var(--sp-6)">${this.agent.bio}</p>
          <h3 style="margin-bottom:var(--sp-3)">Contact Information</h3>
          <div style="display:flex;flex-direction:column;gap:var(--sp-2)">
            <div class="flex items-center gap-3">${Icons.phone} <span>${this.agent.phone}</span></div>
            <div class="flex items-center gap-3">${Icons.mail} <span>${this.agent.email}</span></div>
            <div class="flex items-center gap-3">${Icons.mapPin} <span>${this.agent.areas.join(', ')}, Dhaka</span></div>
          </div>
          <h3 style="margin:var(--sp-6) 0 var(--sp-3)">Specializations</h3>
          <div class="agent-spec-tags" style="justify-content:flex-start">${this.agent.specializations.map(s => `<span class="spec-tag">${s}</span>`).join('')}</div>
        </div>
      `;
    }
  }
};

/* ---- Favorites ---- */
const Favorites = {
  init() {
    this.renderProperties();
    this.renderSearches();
  },

  renderProperties() {
    const c = document.getElementById('favProperties');
    if (!c) return;
    const saved = State.get('saved') || RE.currentUser.savedProperties;
    const props = RE.properties.filter(p => saved.includes(p.id));
    if (!props.length) {
      c.innerHTML = `<div class="empty-state">${Icons.heart}<h3>No saved properties yet</h3><p class="text-muted">Start browsing and save properties you love</p><a href="listings.html" class="btn btn-primary btn-md" style="margin-top:var(--sp-4)">Browse Properties</a></div>`;
      return;
    }
    PropertyCards.render('favProperties', props);
  },

  renderSearches() {
    const c = document.getElementById('savedSearches');
    if (!c) return;
    const searches = RE.currentUser.savedSearches;
    c.innerHTML = searches.map(s => `
      <div class="card" style="padding:var(--sp-4);margin-bottom:var(--sp-3)">
        <div class="flex justify-between items-center">
          <div>
            <div style="font-weight:600">${s.label}</div>
            <div class="text-muted" style="font-size:13px">${s.matches} matches</div>
          </div>
          <div class="flex gap-2">
            <button class="btn btn-ghost btn-sm" onclick="Toast.show('Alerts ${s.alerts ? 'disabled' : 'enabled'}','info')">${s.alerts ? '🔔' : '🔕'}</button>
            <button class="btn btn-secondary btn-sm" onclick="window.location.href='listings.html'">View</button>
          </div>
        </div>
      </div>
    `).join('');
  }
};

/* ---- Compare ---- */
const Compare = {
  init() { this.render(); },

  getCompareList() { return State.get('compare') || RE.currentUser.compareList; },

  render() {
    const c = document.getElementById('compareGrid');
    if (!c) return;
    const ids = this.getCompareList();
    const props = ids.map(id => RE.properties.find(p => p.id === id)).filter(Boolean);
    let html = '';

    props.forEach(p => {
      html += `<div class="compare-slot">
        <div class="compare-img"><img src="${p.images[0]}" alt="${p.title}"></div>
        <div class="compare-body">
          <div style="font-weight:600;margin-bottom:var(--sp-1)">${p.title}</div>
          <div class="text-price" style="font-size:20px;margin-bottom:var(--sp-3)">${formatPrice(p)}</div>
          <div class="compare-row"><span class="compare-label">Type</span><span class="compare-value">${p.type}</span></div>
          <div class="compare-row"><span class="compare-label">Bedrooms</span><span class="compare-value">${p.beds || '—'}</span></div>
          <div class="compare-row"><span class="compare-label">Bathrooms</span><span class="compare-value">${p.baths || '—'}</span></div>
          <div class="compare-row"><span class="compare-label">Area</span><span class="compare-value">${p.area.toLocaleString()} sqft</span></div>
          <div class="compare-row"><span class="compare-label">Floor</span><span class="compare-value">${p.floor ? p.floor + '/' + p.totalFloors : '—'}</span></div>
          <div class="compare-row"><span class="compare-label">Year Built</span><span class="compare-value">${p.yearBuilt || '—'}</span></div>
          <div class="compare-row"><span class="compare-label">Parking</span><span class="compare-value">${p.parking ? '✅' : '❌'}</span></div>
          <div class="compare-row"><span class="compare-label">Elevator</span><span class="compare-value">${p.elevator ? '✅' : '❌'}</span></div>
          <div class="compare-row"><span class="compare-label">Price/sqft</span><span class="compare-value">${p.pricePerSqft ? '৳' + p.pricePerSqft.toLocaleString() : '—'}</span></div>
          <div style="padding:var(--sp-3)"><button class="btn btn-ghost btn-sm w-full" onclick="Compare.remove('${p.id}')">Remove</button></div>
        </div>
      </div>`;
    });

    // Empty slot
    for (let i = props.length; i < 3; i++) {
      html += `<div class="compare-slot compare-slot-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        <span>Add a property</span>
        <span class="text-muted" style="font-size:12px">Search or browse to compare</span>
      </div>`;
    }
    c.innerHTML = html;
  },

  remove(id) {
    let list = this.getCompareList().filter(i => i !== id);
    State.set('compare', list);
    this.render();
    Toast.show('Property removed from comparison', 'info');
  },

  clearAll() {
    State.set('compare', []);
    this.render();
    Toast.show('Comparison cleared', 'info');
  }
};

/* ---- Neighborhood ---- */
const Neighborhood = {
  current: null,

  init() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || 'n1';
    this.current = RE.neighborhoods.find(n => n.id === id) || RE.neighborhoods[0];
    this.render();
  },

  render() {
    const el = document.getElementById('neighborhoodContent');
    if (!el || !this.current) return;
    const n = this.current;
    const scoreKeys = Object.keys(n.scores);
    const emojis = { schools: '🏫', transit: '🚇', dining: '🍽️', safety: '🛡️', shopping: '🛒', healthcare: '🏥' };

    el.innerHTML = `
      <div class="neighborhood-hero" style="margin-bottom:var(--sp-8);padding:var(--sp-8);border-radius:var(--radius-lg)">
        <h1 style="margin-bottom:var(--sp-2)">${n.name}</h1>
        <p class="text-secondary" style="max-width:600px;margin-bottom:var(--sp-4)">${n.description}</p>
        <div class="flex gap-4 items-center" style="margin-bottom:var(--sp-4)">
          <span class="text-price" style="font-size:22px">${formatBDT(n.avgPrice)} avg</span>
          <span class="badge ${n.priceChange > 0 ? 'badge-success' : 'badge-error'}">↑ ${n.priceChange}% YoY</span>
        </div>
        <div class="highlight-tags">${n.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}</div>
      </div>

      <h2 style="margin-bottom:var(--sp-4)">Area Scores</h2>
      <div class="score-grid" style="margin-bottom:var(--sp-8)">
        ${scoreKeys.map(k => `
          <div class="score-item">
            <div style="font-size:28px">${emojis[k] || ''}</div>
            <div class="score-info">
              <div class="score-label">${k.charAt(0).toUpperCase() + k.slice(1)}</div>
              <div class="score-value">${n.scores[k]} / 10</div>
            </div>
          </div>
        `).join('')}
      </div>

      <h2 style="margin-bottom:var(--sp-4)">Nearby Amenities</h2>
      <div class="nearby-grid" style="margin-bottom:var(--sp-8)">
        <div class="nearby-card">
          <h4>${Icons.school} Schools</h4>
          <ul>${n.nearby.schools.map(s => `<li>• ${s}</li>`).join('')}</ul>
        </div>
        <div class="nearby-card">
          <h4>${Icons.hospital} Healthcare</h4>
          <ul>${n.nearby.hospitals.map(s => `<li>• ${s}</li>`).join('')}</ul>
        </div>
        <div class="nearby-card">
          <h4>${Icons.cart} Markets & Dining</h4>
          <ul>${n.nearby.markets.map(s => `<li>• ${s}</li>`).join('')}</ul>
        </div>
      </div>

      <h2 style="margin-bottom:var(--sp-4)">Properties in ${n.name}</h2>
      <div id="neighborhoodProperties"></div>
    `;

    const areaProps = RE.properties.filter(p => p.location.area === n.name);
    PropertyCards.render('neighborhoodProperties', areaProps.length ? areaProps : RE.properties.slice(0, 3));
  }
};

/* ---- Agent Dashboard ---- */
const Dashboard = {
  init() {
    this.renderStats();
    this.renderLeads();
    this.renderListings();
    this.renderChart();
  },

  renderStats() {
    const s = RE.dashboardStats;
    const cards = document.querySelectorAll('.dash-card .dash-value');
    if (cards.length >= 4) {
      cards[0].textContent = s.activeListings;
      cards[1].textContent = s.totalViews.toLocaleString();
      cards[2].textContent = s.leadsThisMonth;
      cards[3].textContent = s.avgResponseTime;
    }
  },

  renderLeads() {
    const tbody = document.getElementById('leadsTable');
    if (!tbody) return;
    tbody.innerHTML = RE.leads.map(l => `
      <tr>
        <td style="font-weight:500">${l.name}</td>
        <td>${l.property}</td>
        <td>${l.date}</td>
        <td><span class="lead-status lead-${l.status.toLowerCase()}">${l.status}</span></td>
        <td>${l.source}</td>
        <td><button class="btn btn-ghost btn-sm" onclick="Toast.show('Opening conversation with ${l.name}','info')">Reply</button></td>
      </tr>
    `).join('');
  },

  renderListings() {
    const tbody = document.getElementById('dashListings');
    if (!tbody) return;
    tbody.innerHTML = RE.listingPerformance.map(l => `
      <tr>
        <td style="font-weight:500">${l.title}</td>
        <td><span class="badge ${l.status === 'Active' ? 'badge-success' : 'badge-warning'}">${l.status}</span></td>
        <td>${l.views.toLocaleString()}</td>
        <td>${l.saves}</td>
        <td>${l.inquiries}</td>
      </tr>
    `).join('');
  },

  renderChart() {
    const canvas = document.getElementById('dashChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const data = RE.dashboardStats.viewsTrend;
    const labels = RE.dashboardStats.months;
    const w = canvas.width = canvas.parentElement.offsetWidth;
    const h = canvas.height = 250;
    const pad = { top: 20, right: 20, bottom: 40, left: 50 };
    const cw = w - pad.left - pad.right;
    const ch = h - pad.top - pad.bottom;
    const max = Math.max(...data) * 1.1;

    ctx.clearRect(0, 0, w, h);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#94A3B8' : '#64748B';
    const gridColor = isDark ? '#334155' : '#E2E8F0';

    // Grid
    for (let i = 0; i <= 4; i++) {
      const y = pad.top + (ch / 4) * i;
      ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y);
      ctx.strokeStyle = gridColor; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = textColor; ctx.font = '12px Inter'; ctx.textAlign = 'right';
      ctx.fillText(Math.round(max - (max / 4) * i), pad.left - 8, y + 4);
    }

    // Bars
    const barW = cw / data.length * 0.6;
    const gap = cw / data.length;
    data.forEach((v, i) => {
      const x = pad.left + gap * i + (gap - barW) / 2;
      const barH = (v / max) * ch;
      const y = pad.top + ch - barH;
      const gradient = ctx.createLinearGradient(x, y, x, pad.top + ch);
      gradient.addColorStop(0, '#0F766E');
      gradient.addColorStop(1, 'rgba(15,118,110,0.3)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]);
      ctx.fill();
      // Label
      ctx.fillStyle = textColor; ctx.font = '11px Inter'; ctx.textAlign = 'center';
      ctx.fillText(labels[i], pad.left + gap * i + gap / 2, h - 10);
    });
  }
};

/* ---- Homepage Charts ---- */
const HomeCharts = {
  renderPriceTrend() {
    const canvas = document.getElementById('priceTrendChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const data = RE.marketTrends.avgPrice;
    const labels = RE.marketTrends.months;
    const w = canvas.width = canvas.parentElement.offsetWidth;
    const h = canvas.height = 250;
    const pad = { top: 20, right: 20, bottom: 40, left: 60 };
    const cw = w - pad.left - pad.right;
    const ch = h - pad.top - pad.bottom;
    const max = Math.max(...data) * 1.05;
    const min = Math.min(...data) * 0.95;

    ctx.clearRect(0, 0, w, h);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#94A3B8' : '#64748B';

    // Grid
    for (let i = 0; i <= 4; i++) {
      const y = pad.top + (ch / 4) * i;
      ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y);
      ctx.strokeStyle = isDark ? '#334155' : '#E2E8F0'; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = textColor; ctx.font = '11px Inter'; ctx.textAlign = 'right';
      const val = max - ((max - min) / 4) * i;
      ctx.fillText('৳' + Math.round(val / 1000) + 'K', pad.left - 8, y + 4);
    }

    // Line
    ctx.beginPath();
    data.forEach((v, i) => {
      const x = pad.left + (cw / (data.length - 1)) * i;
      const y = pad.top + ((max - v) / (max - min)) * ch;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#0F766E'; ctx.lineWidth = 2.5; ctx.stroke();

    // Fill under
    const lastX = pad.left + cw;
    const lastY = pad.top + ((max - data[data.length - 1]) / (max - min)) * ch;
    ctx.lineTo(lastX, pad.top + ch); ctx.lineTo(pad.left, pad.top + ch); ctx.closePath();
    const gradient = ctx.createLinearGradient(0, pad.top, 0, pad.top + ch);
    gradient.addColorStop(0, 'rgba(15,118,110,0.15)');
    gradient.addColorStop(1, 'rgba(15,118,110,0)');
    ctx.fillStyle = gradient; ctx.fill();

    // Dots
    data.forEach((v, i) => {
      const x = pad.left + (cw / (data.length - 1)) * i;
      const y = pad.top + ((max - v) / (max - min)) * ch;
      ctx.beginPath(); ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = '#0F766E'; ctx.fill();
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
    });

    // X labels
    labels.forEach((l, i) => {
      const x = pad.left + (cw / (data.length - 1)) * i;
      ctx.fillStyle = textColor; ctx.font = '11px Inter'; ctx.textAlign = 'center';
      ctx.fillText(l, x, h - 10);
    });
  },

  renderTypeChart() {
    const canvas = document.getElementById('typeChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = 250;
    const h = canvas.height = 250;
    const cx = w / 2, cy = h / 2, r = 90;
    const data = RE.propertyTypeBreakdown;
    const colors = ['#0F766E', '#1E40AF', '#F59E0B', '#DC2626'];

    ctx.clearRect(0, 0, w, h);
    let startAngle = -Math.PI / 2;
    data.forEach((d, i) => {
      const sliceAngle = (d.pct / 100) * 2 * Math.PI;
      ctx.beginPath(); ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, startAngle, startAngle + sliceAngle);
      ctx.fillStyle = colors[i]; ctx.fill();
      startAngle += sliceAngle;
    });
    // Center hole
    ctx.beginPath(); ctx.arc(cx, cy, 55, 0, 2 * Math.PI);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-surface').trim() || '#fff'; ctx.fill();
    // Center text
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim() || '#1A202C';
    ctx.font = '700 18px Plus Jakarta Sans,Inter,sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('1,235', cx, cy + 6);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-muted').trim() || '#94A3B8';
    ctx.font = '12px Inter'; ctx.fillText('Total', cx, cy - 12);
  }
};

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  Auth.updateUI();
  Header.init();
  Drawer.init();

  // Page-specific init
  if (document.getElementById('featuredListings')) {
    // Homepage
    PropertyCards.render('featuredListings', RE.properties.filter(p => p.badge === 'Featured' || p.badge === 'Hot').slice(0, 4));
    HomeCharts.renderPriceTrend();
    HomeCharts.renderTypeChart();
    // Render agents
    const agentRow = document.getElementById('topAgents');
    if (agentRow) {
      agentRow.innerHTML = RE.agents.slice(0, 4).map(a => `
        <div class="agent-card" onclick="window.location.href='agent.html?id=${a.id}'">
          <img src="${a.photo}" alt="${a.name}" class="agent-avatar">
          <div class="agent-name">${a.name}</div>
          <div class="agent-title">${a.title}</div>
          <div class="agent-rating">${Icons.star.repeat(Math.floor(a.rating))} ${a.rating}</div>
          <div class="agent-meta">${a.activeListings} listings · ${a.experience} yrs</div>
        </div>
      `).join('');
    }
  }

  if (document.getElementById('listingsContainer')) Listings.init();
  if (document.getElementById('detailGallery')) PropertyDetail.init();
  if (document.getElementById('agentGrid')) AgentDirectory.init();
  if (document.getElementById('agentProfileHeader')) AgentProfile.init();
  if (document.getElementById('calcPrice')) MortgageCalc.init();
  if (document.getElementById('favProperties')) Favorites.init();
  if (document.getElementById('compareGrid')) Compare.init();
  if (document.getElementById('neighborhoodContent')) Neighborhood.init();
  if (document.getElementById('dashChart')) Dashboard.init();
});
