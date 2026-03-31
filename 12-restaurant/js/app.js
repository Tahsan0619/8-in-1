/* ============================================================
   12-restaurant  —  Khadok Kitchen  ·  Application Logic
   ============================================================ */

/* ---------- State (localStorage wrapper) ---------- */
const State = {
  get(k) { try { return JSON.parse(localStorage.getItem('rt_' + k)); } catch { return null; } },
  set(k, v) { localStorage.setItem('rt_' + k, JSON.stringify(v)); },
  remove(k) { localStorage.removeItem('rt_' + k); }
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
  getUser() { return State.get('user') || RT.currentUser; },
  login(email, pass) {
    if (!email) return;
    State.set('user', RT.currentUser);
    Toast.show('Welcome back, ' + RT.currentUser.name + '!', 'success');
    this.closeModal();
    this.updateUI();
  },
  signup(name, email, pass) {
    if (!name || !email) return;
    const u = { ...RT.currentUser, name, email };
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
    t.textContent = msg;
    c.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(100%)'; setTimeout(() => t.remove(), 300); }, duration);
  }
};

/* ---------- Drawer (Mobile) ---------- */
const Drawer = {
  init() {
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.mobile-drawer-overlay');
    const drawer = document.querySelector('.mobile-drawer');
    const close = document.querySelector('.drawer-close');
    if (hamburger) hamburger.onclick = () => { overlay?.classList.add('active'); drawer?.classList.add('active'); };
    [overlay, close].forEach(el => { if (el) el.onclick = () => this.close(); });
  },
  close() {
    document.querySelector('.mobile-drawer-overlay')?.classList.remove('active');
    document.querySelector('.mobile-drawer')?.classList.remove('active');
  }
};

/* ---------- Header Scroll ---------- */
const Header = {
  init() {
    const h = document.querySelector('.header');
    if (h) window.addEventListener('scroll', () => h.classList.toggle('scrolled', window.scrollY > 10), { passive: true });
    // Active nav link
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === path) link.classList.add('active');
    });
  }
};

/* ---------- Format Price (BDT) ---------- */
function formatPrice(n) {
  return '৳' + n.toLocaleString('en-IN');
}

/* ---------- Stars Helper ---------- */
function renderStars(rating, reviewCount) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '☆';
  return `<span class="stars">${s}</span> <span style="color:var(--text-secondary)">${rating}${reviewCount != null ? ' (' + reviewCount + ')' : ''}</span>`;
}

/* ---------- Spice Indicator ---------- */
function renderSpice(level) {
  const labels = ['Mild', 'Medium', 'Spicy', 'Extra Hot'];
  const icons = ['🌶️', '🌶️🌶️', '🌶️🌶️🌶️', '🌶️🌶️🌶️🌶️'];
  if (level === 0) return '<span class="spice-level mild">No Spice</span>';
  return `<span class="spice-level">${icons[level - 1] || '🌶️'} ${labels[level] || 'Spicy'}</span>`;
}

/* ---------- Cart ---------- */
const Cart = {
  getItems() { return State.get('cart') || []; },

  addItem(dishId, size, addOns, spice, qty, specialInstructions) {
    const dish = RT.dishes.find(d => d.id === dishId);
    if (!dish) return;
    qty = qty || 1;
    size = size || 0;
    spice = spice || 'medium';
    addOns = addOns || [];
    specialInstructions = specialInstructions || '';

    const sizeObj = dish.sizes[size] || dish.sizes[0];
    const addOnObjs = addOns.map(a => dish.addOns.find(ao => ao.name === a)).filter(Boolean);
    const addOnTotal = addOnObjs.reduce((s, a) => s + a.price, 0);
    const unitPrice = sizeObj.price + addOnTotal;

    const item = {
      dishId: dish.id,
      name: dish.name,
      size: size,
      sizeName: sizeObj.name,
      addOns: addOns,
      spice: spice,
      qty: qty,
      price: unitPrice,
      specialInstructions: specialInstructions
    };

    const items = this.getItems();
    // Check for duplicate (same dish, size, addOns, spice)
    const existingIdx = items.findIndex(it =>
      it.dishId === item.dishId &&
      it.size === item.size &&
      it.spice === item.spice &&
      JSON.stringify(it.addOns) === JSON.stringify(item.addOns)
    );
    if (existingIdx > -1) {
      items[existingIdx].qty += qty;
    } else {
      items.push(item);
    }
    State.set('cart', items);
    this.updateBadge();
    Toast.show(`${dish.name} added to cart`, 'success');
  },

  removeItem(index) {
    const items = this.getItems();
    items.splice(index, 1);
    State.set('cart', items);
    this.updateBadge();
    this.renderCart();
  },

  updateQty(index, qty) {
    const items = this.getItems();
    if (qty <= 0) { this.removeItem(index); return; }
    items[index].qty = qty;
    State.set('cart', items);
    this.updateBadge();
    this.renderCart();
  },

  clear() {
    State.remove('cart');
    this.updateBadge();
  },

  getTotal() {
    return this.getItems().reduce((s, it) => s + it.price * it.qty, 0);
  },

  getCount() {
    return this.getItems().reduce((s, it) => s + it.qty, 0);
  },

  applyPromo(code) {
    if (!code) return { valid: false, message: 'Please enter a promo code' };
    const promo = RT.promoCodes.find(p => p.code.toUpperCase() === code.toUpperCase());
    if (!promo) return { valid: false, message: 'Invalid promo code' };
    const subtotal = this.getTotal();
    if (subtotal < promo.minOrder) return { valid: false, message: `Minimum order ${formatPrice(promo.minOrder)} required` };
    const discount = promo.type === 'percent' ? Math.round(subtotal * promo.discount / 100) : promo.discount;
    return { valid: true, discount, description: promo.description, message: `${promo.description} — You save ${formatPrice(discount)}!` };
  },

  updateBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = this.getCount();
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
      badge.classList.add('bounce');
      setTimeout(() => badge.classList.remove('bounce'), 300);
    });
  },

  renderCart() {
    const body = document.getElementById('cartBody');
    const totalEl = document.getElementById('cartTotal');
    const subtotalEl = document.getElementById('cartSubtotal');
    const countEl = document.getElementById('cartCount');
    if (!body) return;

    const items = this.getItems();
    if (!items.length) {
      body.innerHTML = `
        <div class="empty-state" style="padding:var(--sp-10);text-align:center">
          <div style="font-size:48px;margin-bottom:var(--sp-4)">🛒</div>
          <h3 style="margin-bottom:var(--sp-2)">Your cart is empty</h3>
          <p class="text-secondary" style="margin-bottom:var(--sp-4)">Add delicious dishes from our menu</p>
          <a href="menu.html" class="btn btn-primary btn-md">Browse Menu</a>
        </div>`;
      if (totalEl) totalEl.textContent = formatPrice(0);
      if (subtotalEl) subtotalEl.textContent = formatPrice(0);
      if (countEl) countEl.textContent = '0 items';
      return;
    }

    body.innerHTML = items.map((item, i) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta text-secondary" style="font-size:12px">
            ${item.sizeName}${item.addOns.length ? ' · ' + item.addOns.join(', ') : ''}${item.spice ? ' · ' + item.spice : ''}
          </div>
          ${item.specialInstructions ? `<div class="text-secondary" style="font-size:11px;font-style:italic;margin-top:2px">Note: ${item.specialInstructions}</div>` : ''}
          <div class="cart-item-price" style="font-size:13px;margin-top:var(--sp-1)">${formatPrice(item.price)} each</div>
        </div>
        <div class="cart-item-actions">
          <div class="cart-item-qty">
            <button onclick="Cart.updateQty(${i}, ${item.qty - 1})">−</button>
            <span style="min-width:20px;text-align:center">${item.qty}</span>
            <button onclick="Cart.updateQty(${i}, ${item.qty + 1})">+</button>
          </div>
          <div style="font-weight:600;min-width:70px;text-align:right">${formatPrice(item.price * item.qty)}</div>
          <button class="btn btn-ghost btn-sm" onclick="Cart.removeItem(${i})" title="Remove" style="color:var(--error);padding:var(--sp-1)">✕</button>
        </div>
      </div>`).join('');

    const subtotal = this.getTotal();
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (totalEl) totalEl.textContent = formatPrice(subtotal);
    if (countEl) countEl.textContent = `${this.getCount()} item${this.getCount() !== 1 ? 's' : ''}`;
  }
};

/* ---------- Homepage ---------- */
const HomePage = {
  init() {
    this.renderCategories();
    this.renderFeatured();
    this.renderChefPicks();
    this.renderTestimonials();
    this.renderStats();
  },

  renderCategories() {
    const c = document.getElementById('categoryGrid');
    if (!c) return;
    c.innerHTML = RT.categories.map(cat => `
      <a class="category-card" href="menu.html?cat=${cat.id}">
        <div class="category-icon">${cat.icon}</div>
        <h3>${cat.name}</h3>
        <span class="category-count">${cat.count} items</span>
      </a>`).join('');
  },

  renderFeatured() {
    const c = document.getElementById('featuredGrid');
    if (!c) return;
    const featured = RT.dishes.filter(d => d.isNew || d.chefPick).slice(0, 4);
    c.innerHTML = featured.map(d => this.dishCard(d)).join('');
  },

  renderChefPicks() {
    const c = document.getElementById('chefPicksGrid');
    if (!c) return;
    const picks = RT.dishes.filter(d => d.chefPick).slice(0, 3);
    c.innerHTML = picks.map(d => `
      <div class="chef-pick-card" onclick="location.href='dish.html?id=${d.id}'">
        <img src="${d.image}" alt="${d.name}" loading="lazy">
        <div class="chef-pick-overlay">
          <span class="badge badge-chef">Chef's Pick</span>
          <h3>${d.name}</h3>
          <p>${d.description.substring(0, 60)}...</p>
          <div class="chef-pick-price">${formatPrice(d.price)}</div>
        </div>
      </div>`).join('');
  },

  renderTestimonials() {
    const track = document.getElementById('testimonialTrack');
    const nav = document.getElementById('testimonialNav');
    if (!track) return;
    track.innerHTML = RT.reviews.slice(0, 4).map(r => `
      <div class="testimonial-card"><div class="testimonial-card-inner">
        <p class="testimonial-text">"${r.text}"</p>
        <div class="testimonial-author">${r.author}</div>
        <div class="text-secondary" style="font-size:13px">${r.dish}</div>
        <div class="stars" style="margin-top:var(--sp-2)">${'★'.repeat(r.rating)}</div>
      </div></div>`).join('');
    if (nav) {
      nav.innerHTML = RT.reviews.slice(0, 4).map((_, i) => `<button class="testimonial-dot${i === 0 ? ' active' : ''}" onclick="HomePage.goSlide(${i})"></button>`).join('');
    }
    this.currentSlide = 0;
    this.autoplay = setInterval(() => this.goSlide((this.currentSlide + 1) % Math.min(RT.reviews.length, 4)), 8000);
  },

  goSlide(i) {
    this.currentSlide = i;
    const track = document.getElementById('testimonialTrack');
    if (track) track.style.transform = `translateX(-${i * 100}%)`;
    document.querySelectorAll('.testimonial-dot').forEach((d, idx) => d.classList.toggle('active', idx === i));
  },

  renderStats() {
    const c = document.getElementById('statsRow');
    if (!c) return;
    const stats = [
      { num: RT.dishes.length + '+', label: 'Menu Items' },
      { num: '10K+', label: 'Happy Customers' },
      { num: RT.categories.length, label: 'Categories' },
      { num: 'Since ' + RT.site.est, label: 'Serving Joy' }
    ];
    c.innerHTML = stats.map(s => `<div class="stat-box"><div class="stat-number">${s.num}</div><div class="stat-label">${s.label}</div></div>`).join('');
  },

  dishCard(d) {
    return `
      <div class="dish-card" onclick="location.href='dish.html?id=${d.id}'">
        <div class="dish-card-img">
          <img src="${d.image}" alt="${d.name}" loading="lazy">
          ${d.isNew ? '<span class="badge badge-new">New</span>' : ''}
          ${d.chefPick ? '<span class="badge badge-chef">Chef\'s Pick</span>' : ''}
        </div>
        <div class="dish-card-body">
          <h3 class="dish-card-name">${d.name}</h3>
          <div class="dish-card-category text-secondary">${RT.categories.find(c => c.id === d.category)?.name || ''}</div>
          <div class="dish-card-rating">${renderStars(d.rating, d.reviewCount)}</div>
          <div class="dish-card-footer">
            <span class="dish-card-price">${formatPrice(d.price)}</span>
            <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();Cart.addItem('${d.id}',0,[],null,1,'')">+ Add</button>
          </div>
        </div>
      </div>`;
  }
};

/* ---------- Menu Page ---------- */
const Menu = {
  currentCategory: '',
  currentDietary: '',
  currentSearch: '',
  currentSort: 'popular',

  init() {
    const params = new URLSearchParams(location.search);
    if (params.get('cat')) this.currentCategory = params.get('cat');
    this.renderCategoryTabs();
    this.renderDishes();
  },

  renderCategoryTabs() {
    const c = document.getElementById('categoryTabs');
    if (!c) return;
    c.innerHTML = `<button class="cat-tab${!this.currentCategory ? ' active' : ''}" data-cat="" onclick="Menu.filterByCategory('')">All</button>` +
      RT.categories.map(cat => `<button class="cat-tab${this.currentCategory === cat.id ? ' active' : ''}" data-cat="${cat.id}" onclick="Menu.filterByCategory('${cat.id}')">${cat.icon} ${cat.name}</button>`).join('');
  },

  filterByCategory(catId) {
    this.currentCategory = catId;
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === catId));
    this.renderDishes();
  },

  filterByDietary(type) {
    this.currentDietary = this.currentDietary === type ? '' : type;
    document.querySelectorAll('.dietary-tab').forEach(t => t.classList.toggle('active', t.dataset.diet === this.currentDietary));
    this.renderDishes();
  },

  search(query) {
    this.currentSearch = query.toLowerCase().trim();
    this.renderDishes();
  },

  sort(val) {
    this.currentSort = val;
    this.renderDishes();
  },

  getFiltered() {
    let dishes = [...RT.dishes];
    if (this.currentCategory) dishes = dishes.filter(d => d.category === this.currentCategory);
    if (this.currentDietary === 'vegetarian') dishes = dishes.filter(d => d.vegetarian);
    if (this.currentDietary === 'spicy') dishes = dishes.filter(d => d.spicy >= 2);
    if (this.currentDietary === 'chef') dishes = dishes.filter(d => d.chefPick);
    if (this.currentSearch) dishes = dishes.filter(d => d.name.toLowerCase().includes(this.currentSearch) || d.description.toLowerCase().includes(this.currentSearch));
    if (this.currentSort === 'popular') dishes.sort((a, b) => b.rating - a.rating);
    else if (this.currentSort === 'price-asc') dishes.sort((a, b) => a.price - b.price);
    else if (this.currentSort === 'price-desc') dishes.sort((a, b) => b.price - a.price);
    else if (this.currentSort === 'name') dishes.sort((a, b) => a.name.localeCompare(b.name));
    return dishes;
  },

  renderDishes(filtered) {
    const c = document.getElementById('menuGrid');
    if (!c) return;
    const dishes = filtered || this.getFiltered();
    const countEl = document.getElementById('dishCount');
    if (countEl) countEl.textContent = `Showing ${dishes.length} dish${dishes.length !== 1 ? 'es' : ''}`;

    if (!dishes.length) {
      c.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1;text-align:center;padding:var(--sp-10)">
          <div style="font-size:48px;margin-bottom:var(--sp-4)">🍽️</div>
          <h3 style="margin-bottom:var(--sp-2)">No dishes found</h3>
          <p class="text-secondary" style="margin-bottom:var(--sp-4)">Try a different category or search term</p>
          <button class="btn btn-secondary btn-md" onclick="Menu.filterByCategory('');Menu.search('');">Show All</button>
        </div>`;
      return;
    }

    c.innerHTML = dishes.map(d => `
      <div class="dish-card">
        <div class="dish-card-img" onclick="location.href='dish.html?id=${d.id}'" style="cursor:pointer">
          <img src="${d.image}" alt="${d.name}" loading="lazy">
          ${d.isNew ? '<span class="badge badge-new">New</span>' : ''}
          ${d.chefPick ? '<span class="badge badge-chef">Chef\'s Pick</span>' : ''}
          ${d.vegetarian ? '<span class="badge badge-veg">Veg</span>' : ''}
        </div>
        <div class="dish-card-body">
          <h3 class="dish-card-name"><a href="dish.html?id=${d.id}">${d.name}</a></h3>
          <div class="dish-card-desc text-secondary" style="font-size:13px;margin:var(--sp-1) 0">${d.description.substring(0, 70)}...</div>
          <div class="dish-card-meta" style="display:flex;align-items:center;gap:var(--sp-2);margin:var(--sp-2) 0">
            ${renderStars(d.rating, d.reviewCount)}
            ${renderSpice(d.spicy)}
          </div>
          <div class="dish-card-footer" style="display:flex;justify-content:space-between;align-items:center;margin-top:var(--sp-3)">
            <span class="dish-card-price" style="font-weight:700;font-size:16px;color:var(--primary)">${formatPrice(d.price)}</span>
            <button class="btn btn-primary btn-sm" onclick="Cart.addItem('${d.id}',0,[],null,1,'')">+ Add</button>
          </div>
        </div>
      </div>`).join('');
  }
};

/* ---------- Dish Detail Page ---------- */
const DishDetail = {
  dish: null,
  selectedSize: 0,
  selectedAddOns: [],
  selectedSpice: 'medium',
  qty: 1,
  specialInstructions: '',

  init() {
    const id = new URLSearchParams(location.search).get('id');
    this.loadDish(id);
  },

  loadDish(id) {
    this.dish = RT.dishes.find(d => d.id === id);
    if (!this.dish) {
      const c = document.getElementById('dishDetailContent');
      if (c) c.innerHTML = `
        <div class="empty-state" style="text-align:center;padding:var(--sp-10)">
          <div style="font-size:48px;margin-bottom:var(--sp-4)">🍽️</div>
          <h3 style="margin-bottom:var(--sp-2)">Dish not found</h3>
          <a href="menu.html" class="btn btn-primary btn-md">Browse Menu</a>
        </div>`;
      return;
    }
    this.selectedSize = 0;
    this.selectedAddOns = [];
    this.selectedSpice = 'medium';
    this.qty = 1;
    this.specialInstructions = '';
    this.renderDetail();
    this.renderRelated();
  },

  renderDetail() {
    const c = document.getElementById('dishDetailContent');
    if (!c || !this.dish) return;
    const d = this.dish;
    document.title = `Khadok Kitchen — ${d.name}`;

    c.innerHTML = `
      <div class="dish-detail">
        <div class="dish-detail-image">
          <img src="${d.image}" alt="${d.name}">
          ${d.isNew ? '<span class="badge badge-new" style="position:absolute;top:var(--sp-3);left:var(--sp-3)">New</span>' : ''}
          ${d.chefPick ? '<span class="badge badge-chef" style="position:absolute;top:var(--sp-3);right:var(--sp-3)">Chef\'s Pick</span>' : ''}
        </div>
        <div class="dish-detail-info">
          <div class="dish-detail-category text-secondary">${RT.categories.find(cat => cat.id === d.category)?.name || ''}</div>
          <h1 class="dish-detail-name">${d.name}</h1>
          <div class="dish-detail-rating" style="margin:var(--sp-2) 0">${renderStars(d.rating, d.reviewCount)} ${renderSpice(d.spicy)}</div>
          <p class="dish-detail-desc" style="line-height:1.8;margin:var(--sp-4) 0;color:var(--text-secondary)">${d.description}</p>

          <div class="dish-option-group" style="margin-bottom:var(--sp-4)">
            <h4 style="margin-bottom:var(--sp-3)">Size</h4>
            <div class="size-options" style="display:flex;gap:var(--sp-2);flex-wrap:wrap">
              ${d.sizes.map((s, i) => `
                <button class="size-btn${i === this.selectedSize ? ' active' : ''}" onclick="DishDetail.handleSizeChange(${i})">
                  ${s.name} — ${formatPrice(s.price)}
                </button>`).join('')}
            </div>
          </div>

          ${d.addOns.length ? `
          <div class="dish-option-group" style="margin-bottom:var(--sp-4)">
            <h4 style="margin-bottom:var(--sp-3)">Add-ons</h4>
            <div class="addon-options" style="display:flex;flex-direction:column;gap:var(--sp-2)">
              ${d.addOns.map(a => `
                <label class="addon-option${this.selectedAddOns.includes(a.name) ? ' selected' : ''}">
                  <input type="checkbox" ${this.selectedAddOns.includes(a.name) ? 'checked' : ''} onchange="DishDetail.handleAddOnToggle('${a.name}')">
                  <span>${a.name}</span>
                  <span class="addon-price">+ ${formatPrice(a.price)}</span>
                </label>`).join('')}
            </div>
          </div>` : ''}

          <div class="dish-option-group" style="margin-bottom:var(--sp-4)">
            <h4 style="margin-bottom:var(--sp-3)">Spice Level</h4>
            <div class="spice-options" style="display:flex;gap:var(--sp-2);flex-wrap:wrap">
              ${['mild', 'medium', 'spicy', 'extra-hot'].map(s => `
                <button class="spice-btn${this.selectedSpice === s ? ' active' : ''}" onclick="DishDetail.handleSpiceChange('${s}')">
                  ${s === 'mild' ? '🌶️ Mild' : s === 'medium' ? '🌶️🌶️ Medium' : s === 'spicy' ? '🌶️🌶️🌶️ Spicy' : '🌶️🌶️🌶️🌶️ Extra Hot'}
                </button>`).join('')}
            </div>
          </div>

          <div class="dish-option-group" style="margin-bottom:var(--sp-4)">
            <h4 style="margin-bottom:var(--sp-3)">Special Instructions</h4>
            <textarea class="form-textarea" id="dishInstructions" rows="2" placeholder="Any special requests? E.g., less oil, no onion..." onchange="DishDetail.specialInstructions=this.value">${this.specialInstructions}</textarea>
          </div>

          <div class="dish-option-group" style="margin-bottom:var(--sp-4)">
            <h4 style="margin-bottom:var(--sp-3)">Quantity</h4>
            <div class="qty-control" style="display:flex;align-items:center;gap:var(--sp-3)">
              <button class="btn btn-secondary btn-sm" onclick="DishDetail.handleQtyChange(-1)">−</button>
              <span style="font-size:18px;font-weight:600;min-width:30px;text-align:center" id="dishQty">${this.qty}</span>
              <button class="btn btn-secondary btn-sm" onclick="DishDetail.handleQtyChange(1)">+</button>
            </div>
          </div>

          <div class="dish-detail-total" style="display:flex;justify-content:space-between;align-items:center;padding:var(--sp-4) 0;border-top:1px solid var(--border);margin-top:var(--sp-4)">
            <div>
              <div class="text-secondary" style="font-size:13px">Total Price</div>
              <div style="font-size:24px;font-weight:700;color:var(--primary)" id="dishTotalPrice">${formatPrice(this.calcTotal())}</div>
            </div>
            <button class="btn btn-primary btn-lg" onclick="DishDetail.addToCart()">🛒 Add to Cart</button>
          </div>
        </div>
      </div>`;
  },

  calcTotal() {
    if (!this.dish) return 0;
    const sizePrice = this.dish.sizes[this.selectedSize]?.price || this.dish.price;
    const addOnTotal = this.selectedAddOns.reduce((s, name) => {
      const a = this.dish.addOns.find(ao => ao.name === name);
      return s + (a ? a.price : 0);
    }, 0);
    return (sizePrice + addOnTotal) * this.qty;
  },

  updatePrice() {
    const el = document.getElementById('dishTotalPrice');
    if (el) el.textContent = formatPrice(this.calcTotal());
  },

  handleSizeChange(index) {
    this.selectedSize = index;
    this.renderDetail();
  },

  handleAddOnToggle(name) {
    const idx = this.selectedAddOns.indexOf(name);
    if (idx > -1) this.selectedAddOns.splice(idx, 1);
    else this.selectedAddOns.push(name);
    this.updatePrice();
    // Update checkboxes visually
    document.querySelectorAll('.addon-option').forEach(el => {
      const cb = el.querySelector('input[type="checkbox"]');
      el.classList.toggle('selected', cb?.checked);
    });
  },

  handleSpiceChange(level) {
    this.selectedSpice = level;
    document.querySelectorAll('.spice-btn').forEach(b => b.classList.toggle('active', b.textContent.toLowerCase().includes(level.replace('-', ' '))));
  },

  handleQtyChange(delta) {
    this.qty = Math.max(1, this.qty + delta);
    const el = document.getElementById('dishQty');
    if (el) el.textContent = this.qty;
    this.updatePrice();
  },

  addToCart() {
    if (!this.dish) return;
    this.specialInstructions = document.getElementById('dishInstructions')?.value || '';
    Cart.addItem(this.dish.id, this.selectedSize, [...this.selectedAddOns], this.selectedSpice, this.qty, this.specialInstructions);
  },

  renderRelated() {
    const c = document.getElementById('relatedDishes');
    if (!c || !this.dish) return;
    const related = RT.dishes.filter(d => d.category === this.dish.category && d.id !== this.dish.id).slice(0, 4);
    if (!related.length) { c.closest('.related-section')?.remove(); return; }
    c.innerHTML = related.map(d => `
      <div class="dish-card" onclick="location.href='dish.html?id=${d.id}'">
        <div class="dish-card-img">
          <img src="${d.image}" alt="${d.name}" loading="lazy">
        </div>
        <div class="dish-card-body">
          <h3 class="dish-card-name">${d.name}</h3>
          <div class="dish-card-rating">${renderStars(d.rating)}</div>
          <div class="dish-card-footer" style="display:flex;justify-content:space-between;align-items:center;margin-top:var(--sp-2)">
            <span class="dish-card-price">${formatPrice(d.price)}</span>
            <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();Cart.addItem('${d.id}',0,[],null,1,'')">+ Add</button>
          </div>
        </div>
      </div>`).join('');
  }
};

/* ---------- Checkout Page ---------- */
const Checkout = {
  deliveryType: 'delivery',
  promoResult: null,

  init() {
    this.renderSummary();
    this.renderForm();
  },

  renderSummary() {
    const c = document.getElementById('checkoutSummary');
    if (!c) return;
    const items = Cart.getItems();
    if (!items.length) {
      c.innerHTML = `
        <div class="empty-state" style="text-align:center;padding:var(--sp-10)">
          <div style="font-size:48px;margin-bottom:var(--sp-4)">🛒</div>
          <h3 style="margin-bottom:var(--sp-2)">Cart is empty</h3>
          <p class="text-secondary" style="margin-bottom:var(--sp-4)">Nothing to checkout</p>
          <a href="menu.html" class="btn btn-primary btn-md">Browse Menu</a>
        </div>`;
      return;
    }

    const subtotal = Cart.getTotal();
    const deliveryFee = this.deliveryType === 'delivery' ? 60 : 0;
    const discount = this.promoResult?.valid ? this.promoResult.discount : 0;
    const total = subtotal + deliveryFee - discount;

    c.innerHTML = `
      <h3 style="margin-bottom:var(--sp-4)">Order Summary (${Cart.getCount()} items)</h3>
      <div class="checkout-items" style="margin-bottom:var(--sp-4)">
        ${items.map((item, i) => `
          <div class="checkout-item" style="display:flex;justify-content:space-between;padding:var(--sp-2) 0;border-bottom:1px solid var(--border)">
            <div>
              <div style="font-weight:500">${item.name} × ${item.qty}</div>
              <div class="text-secondary" style="font-size:12px">${item.sizeName}${item.addOns.length ? ' + ' + item.addOns.join(', ') : ''}</div>
            </div>
            <div style="font-weight:600">${formatPrice(item.price * item.qty)}</div>
          </div>`).join('')}
      </div>
      <div class="checkout-promo" style="margin-bottom:var(--sp-4)">
        <div style="display:flex;gap:var(--sp-2)">
          <input class="form-input" id="promoInput" placeholder="Promo code" style="flex:1">
          <button class="btn btn-secondary btn-sm" onclick="Checkout.handlePromo()">Apply</button>
        </div>
        <div id="promoMsg" style="font-size:13px;margin-top:var(--sp-2)"></div>
      </div>
      <div class="checkout-totals" style="border-top:2px solid var(--border);padding-top:var(--sp-4)">
        <div class="summary-row" style="display:flex;justify-content:space-between;margin-bottom:var(--sp-2)"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
        <div class="summary-row" style="display:flex;justify-content:space-between;margin-bottom:var(--sp-2)"><span>Delivery Fee</span><span>${this.deliveryType === 'delivery' ? formatPrice(60) : 'Free (Pickup)'}</span></div>
        ${discount ? `<div class="summary-row" style="display:flex;justify-content:space-between;margin-bottom:var(--sp-2);color:var(--success)"><span>Discount</span><span>-${formatPrice(discount)}</span></div>` : ''}
        <div class="summary-row" style="display:flex;justify-content:space-between;font-size:18px;font-weight:700;margin-top:var(--sp-3);padding-top:var(--sp-3);border-top:1px solid var(--border)"><span>Total</span><span style="color:var(--primary)">${formatPrice(total)}</span></div>
      </div>`;
  },

  renderForm() {
    const c = document.getElementById('checkoutForm');
    if (!c) return;
    const user = Auth.getUser();
    c.innerHTML = `
      <h3 style="margin-bottom:var(--sp-4)">Delivery Details</h3>
      <div class="delivery-toggle" style="display:flex;gap:var(--sp-2);margin-bottom:var(--sp-6)">
        <button class="btn ${this.deliveryType === 'delivery' ? 'btn-primary' : 'btn-secondary'} btn-md" onclick="Checkout.handleDeliveryToggle('delivery')">🚚 Delivery</button>
        <button class="btn ${this.deliveryType === 'pickup' ? 'btn-primary' : 'btn-secondary'} btn-md" onclick="Checkout.handleDeliveryToggle('pickup')">🏪 Pickup</button>
      </div>
      <div class="form-group"><label class="form-label">Full Name *</label><input class="form-input" id="chkName" value="${user.name}"></div>
      <div class="form-group"><label class="form-label">Phone *</label><input class="form-input" id="chkPhone" value="${user.phone}" placeholder="01XXXXXXXXX"></div>
      <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="chkEmail" value="${user.email}"></div>
      ${this.deliveryType === 'delivery' ? `<div class="form-group"><label class="form-label">Delivery Address *</label><textarea class="form-textarea" id="chkAddress" rows="3" placeholder="Full address including house, road, area...">${user.address}</textarea></div>` : `<div class="text-secondary" style="margin-bottom:var(--sp-4);padding:var(--sp-4);background:var(--bg-surface-alt);border-radius:var(--radius-md)">📍 Pickup from: ${RT.site.address}<br>⏰ ${RT.site.hours}</div>`}
      <div class="form-group"><label class="form-label">Special Instructions</label><textarea class="form-textarea" id="chkNotes" rows="2" placeholder="Any special delivery instructions..."></textarea></div>

      <h4 style="margin:var(--sp-6) 0 var(--sp-4)">Payment Method</h4>
      <div class="payment-methods">
        <label class="payment-option selected"><input type="radio" name="payment" value="bkash" checked onchange="Checkout.selectPayment(this)"> bKash</label>
        <label class="payment-option"><input type="radio" name="payment" value="nagad" onchange="Checkout.selectPayment(this)"> Nagad</label>
        <label class="payment-option"><input type="radio" name="payment" value="card" onchange="Checkout.selectPayment(this)"> Credit/Debit Card</label>
        <label class="payment-option"><input type="radio" name="payment" value="cod" onchange="Checkout.selectPayment(this)"> Cash on Delivery</label>
      </div>

      <button class="btn btn-primary btn-lg" style="width:100%;margin-top:var(--sp-6)" onclick="Checkout.placeOrder()">✓ Place Order</button>`;
  },

  selectPayment(input) {
    input.closest('.payment-methods').querySelectorAll('.payment-option').forEach(p => p.classList.remove('selected'));
    input.closest('.payment-option').classList.add('selected');
  },

  handleDeliveryToggle(type) {
    this.deliveryType = type;
    this.renderSummary();
    this.renderForm();
  },

  handlePromo() {
    const code = document.getElementById('promoInput')?.value;
    this.promoResult = Cart.applyPromo(code);
    const msgEl = document.getElementById('promoMsg');
    if (msgEl) {
      msgEl.textContent = this.promoResult.message;
      msgEl.style.color = this.promoResult.valid ? 'var(--success)' : 'var(--error)';
    }
    this.renderSummary();
  },

  validateForm() {
    const name = document.getElementById('chkName')?.value.trim();
    const phone = document.getElementById('chkPhone')?.value.trim();
    const address = document.getElementById('chkAddress')?.value.trim();
    if (!name) { Toast.show('Please enter your name', 'error'); return false; }
    if (!phone || !/^01\d{9}$/.test(phone)) { Toast.show('Please enter a valid BD phone number (01XXXXXXXXX)', 'error'); return false; }
    if (this.deliveryType === 'delivery' && !address) { Toast.show('Please enter your delivery address', 'error'); return false; }
    return true;
  },

  placeOrder() {
    if (!Cart.getItems().length) { Toast.show('Your cart is empty', 'error'); return; }
    if (!this.validateForm()) return;

    const items = Cart.getItems();
    const subtotal = Cart.getTotal();
    const deliveryFee = this.deliveryType === 'delivery' ? 60 : 0;
    const discount = this.promoResult?.valid ? this.promoResult.discount : 0;
    const total = subtotal + deliveryFee - discount;

    const orderId = 'ORD-2026-' + String(Math.floor(Math.random() * 9000) + 1000);
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    const estMinutes = this.deliveryType === 'delivery' ? 45 : 25;
    const est = new Date(now.getTime() + estMinutes * 60000);
    const estStr = est.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

    const order = {
      id: orderId,
      userId: 'u1',
      items: items,
      subtotal,
      deliveryFee,
      discount,
      total,
      promoCode: this.promoResult?.valid ? document.getElementById('promoInput')?.value : null,
      status: 'placed',
      delivery: {
        type: this.deliveryType,
        name: document.getElementById('chkName')?.value,
        phone: document.getElementById('chkPhone')?.value,
        address: this.deliveryType === 'delivery' ? document.getElementById('chkAddress')?.value : '',
        estimatedTime: estStr
      },
      timeline: [
        { status: 'placed', time: timeStr, done: true },
        { status: 'confirmed', time: null, done: false },
        { status: 'preparing', time: null, done: false },
        { status: 'ready', time: null, done: false },
        { status: this.deliveryType === 'delivery' ? 'delivery' : 'pickup', time: null, done: false },
        { status: 'delivered', time: null, done: false }
      ],
      date: now.toISOString().slice(0, 10),
      notes: document.getElementById('chkNotes')?.value || ''
    };

    const orders = State.get('orders') || [];
    orders.unshift(order);
    State.set('orders', orders);
    Cart.clear();

    // Show confirmation
    const main = document.getElementById('checkoutMain') || document.querySelector('.checkout-page');
    if (main) {
      main.innerHTML = `
        <div class="text-center" style="padding:var(--sp-10)">
          <div style="font-size:64px;margin-bottom:var(--sp-4)">✅</div>
          <h2 style="color:var(--success);margin-bottom:var(--sp-4)">Order Placed Successfully!</h2>
          <p class="text-secondary" style="margin-bottom:var(--sp-2)">Order #: <strong>${orderId}</strong></p>
          <p style="margin-bottom:var(--sp-2)">Estimated ${this.deliveryType === 'delivery' ? 'delivery' : 'pickup'}: <strong>${estStr}</strong></p>
          <p class="text-secondary" style="margin-bottom:var(--sp-6)">Total: <strong>${formatPrice(total)}</strong></p>
          <div style="display:flex;gap:var(--sp-3);justify-content:center">
            <a href="tracking.html?id=${orderId}" class="btn btn-primary btn-md">Track Order</a>
            <a href="menu.html" class="btn btn-secondary btn-md">Order More</a>
          </div>
        </div>`;
    }
    Toast.show('Order placed successfully!', 'success');
  }
};

/* ---------- Order Tracking Page ---------- */
const OrderTracking = {
  order: null,
  progressTimer: null,

  init() {
    const id = new URLSearchParams(location.search).get('id');
    this.loadOrder(id);
  },

  loadOrder(id) {
    // Check localStorage first, then fallback to mock data
    const savedOrders = State.get('orders') || [];
    this.order = savedOrders.find(o => o.id === id) || RT.orders.find(o => o.id === id);

    const c = document.getElementById('trackingContent');
    if (!c) return;

    if (!this.order) {
      c.innerHTML = `
        <div class="empty-state" style="text-align:center;padding:var(--sp-10)">
          <div style="font-size:48px;margin-bottom:var(--sp-4)">📦</div>
          <h3 style="margin-bottom:var(--sp-2)">Order not found</h3>
          <p class="text-secondary" style="margin-bottom:var(--sp-4)">Please check your order ID</p>
          <a href="index.html" class="btn btn-primary btn-md">Go Home</a>
        </div>`;
      return;
    }
    this.renderTimeline();
    this.simulateProgress();
  },

  renderTimeline() {
    const c = document.getElementById('trackingContent');
    if (!c || !this.order) return;
    const o = this.order;

    const statusLabels = {
      placed: '📝 Order Placed',
      confirmed: '✅ Confirmed',
      preparing: '👨‍🍳 Preparing',
      ready: '📦 Ready',
      delivery: '🚚 Out for Delivery',
      pickup: '🏪 Ready for Pickup',
      delivered: '🎉 Delivered'
    };

    c.innerHTML = `
      <div class="tracking-header" style="margin-bottom:var(--sp-8)">
        <h2>Order ${o.id}</h2>
        <div class="text-secondary" style="margin-top:var(--sp-2)">Placed on ${o.date} · ${o.delivery.type === 'delivery' ? 'Delivery' : 'Pickup'}</div>
        <div style="margin-top:var(--sp-2)">Estimated: <strong>${o.delivery.estimatedTime}</strong></div>
      </div>

      <div class="tracking-timeline" style="margin-bottom:var(--sp-8)">
        ${o.timeline.map((step, i) => `
          <div class="tracking-step${step.done ? ' completed' : ''}${!step.done && (i === 0 || o.timeline[i - 1].done) ? ' current' : ''}">
            <div class="tracking-dot${step.done ? ' done' : ''}${!step.done && (i === 0 || o.timeline[i - 1].done) ? ' pulse' : ''}"></div>
            ${i < o.timeline.length - 1 ? `<div class="tracking-line${step.done ? ' done' : ''}"></div>` : ''}
            <div class="tracking-label">
              <strong>${statusLabels[step.status] || step.status}</strong>
              ${step.time ? `<div class="text-secondary" style="font-size:13px">${step.time}</div>` : ''}
            </div>
          </div>`).join('')}
      </div>

      <div class="tracking-details" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-6)">
        <div class="card card-no-hover">
          <div class="card-header"><h3>Order Items</h3></div>
          <div class="card-body">
            ${o.items.map(item => `
              <div style="display:flex;justify-content:space-between;padding:var(--sp-2) 0;border-bottom:1px solid var(--border)">
                <div>
                  <div style="font-weight:500">${item.name} × ${item.qty}</div>
                  <div class="text-secondary" style="font-size:12px">${item.size}${item.addOns?.length ? ' + ' + item.addOns.join(', ') : ''}</div>
                </div>
                <div style="font-weight:600">${formatPrice(item.price * item.qty)}</div>
              </div>`).join('')}
            <div style="margin-top:var(--sp-4);padding-top:var(--sp-3);border-top:2px solid var(--border)">
              <div style="display:flex;justify-content:space-between;margin-bottom:var(--sp-1)"><span>Subtotal</span><span>${formatPrice(o.subtotal)}</span></div>
              <div style="display:flex;justify-content:space-between;margin-bottom:var(--sp-1)"><span>Delivery Fee</span><span>${formatPrice(o.deliveryFee)}</span></div>
              ${o.discount ? `<div style="display:flex;justify-content:space-between;margin-bottom:var(--sp-1);color:var(--success)"><span>Discount</span><span>-${formatPrice(o.discount)}</span></div>` : ''}
              <div style="display:flex;justify-content:space-between;font-weight:700;font-size:16px;margin-top:var(--sp-2)"><span>Total</span><span style="color:var(--primary)">${formatPrice(o.total)}</span></div>
            </div>
          </div>
        </div>
        <div class="card card-no-hover">
          <div class="card-header"><h3>${o.delivery.type === 'delivery' ? 'Delivery' : 'Pickup'} Details</h3></div>
          <div class="card-body">
            <div style="margin-bottom:var(--sp-3)"><span class="text-secondary">Name:</span> ${o.delivery.name}</div>
            <div style="margin-bottom:var(--sp-3)"><span class="text-secondary">Phone:</span> ${o.delivery.phone}</div>
            ${o.delivery.address ? `<div style="margin-bottom:var(--sp-3)"><span class="text-secondary">Address:</span> ${o.delivery.address}</div>` : ''}
            ${o.promoCode ? `<div style="margin-bottom:var(--sp-3)"><span class="text-secondary">Promo:</span> <span class="badge badge-info">${o.promoCode}</span></div>` : ''}
          </div>
        </div>
      </div>`;
  },

  simulateProgress() {
    if (!this.order || this.order.status === 'delivered') return;
    const o = this.order;
    let currentIdx = o.timeline.findIndex(s => !s.done);
    if (currentIdx < 0) return;

    this.progressTimer = setInterval(() => {
      if (currentIdx >= o.timeline.length) { clearInterval(this.progressTimer); return; }
      const now = new Date();
      o.timeline[currentIdx].done = true;
      o.timeline[currentIdx].time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
      o.status = o.timeline[currentIdx].status;
      currentIdx++;
      this.renderTimeline();
      if (currentIdx >= o.timeline.length) {
        clearInterval(this.progressTimer);
        Toast.show('Your order has been delivered! 🎉', 'success');
      }
    }, 8000);
  }
};

/* ---------- Reservation Page ---------- */
const Reservation = {
  selectedTable: null,
  selectedDate: '',
  selectedTime: '',
  guests: 2,

  init() {
    this.renderFloorPlan();
    this.renderForm();
  },

  renderFloorPlan() {
    const c = document.getElementById('floorPlan');
    if (!c) return;
    c.innerHTML = `
      <div class="floor-plan-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--sp-4)">
        <h3>Select a Table</h3>
        <div class="floor-legend" style="display:flex;gap:var(--sp-4);font-size:13px">
          <span><span class="legend-dot table-available"></span> Available</span>
          <span><span class="legend-dot table-booked"></span> Booked</span>
          <span><span class="legend-dot table-selected"></span> Selected</span>
        </div>
      </div>
      <div class="floor-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--sp-4)">
        ${RT.tables.map(t => {
          const isSelected = this.selectedTable === t.id;
          const isBooked = t.status === 'booked';
          const cls = isBooked ? 'table-booked' : isSelected ? 'table-selected' : 'table-available';
          return `
            <div class="table-card ${cls}" ${!isBooked ? `onclick="Reservation.selectTable('${t.id}')"` : ''} style="cursor:${isBooked ? 'not-allowed' : 'pointer'}">
              <div class="table-number" style="font-size:20px;font-weight:700">T${t.number}</div>
              <div class="table-info text-secondary" style="font-size:13px">${t.capacity} seats · ${t.location}</div>
              <div class="table-status" style="font-size:12px;margin-top:var(--sp-1)">${isBooked ? '🔴 Booked' : isSelected ? '🟢 Selected' : '⚪ Available'}</div>
            </div>`;
        }).join('')}
      </div>`;
  },

  selectTable(id) {
    const table = RT.tables.find(t => t.id === id);
    if (!table || table.status === 'booked') return;
    this.selectedTable = this.selectedTable === id ? null : id;
    this.renderFloorPlan();
  },

  renderForm() {
    const c = document.getElementById('reservationForm');
    if (!c) return;
    const user = Auth.getUser();
    c.innerHTML = `
      <h3 style="margin-bottom:var(--sp-4)">Reservation Details</h3>
      <div class="form-group"><label class="form-label">Name *</label><input class="form-input" id="resName" value="${user.name}"></div>
      <div class="form-group"><label class="form-label">Phone *</label><input class="form-input" id="resPhone" value="${user.phone}" placeholder="01XXXXXXXXX"></div>
      <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="resEmail" value="${user.email}"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-4)">
        <div class="form-group"><label class="form-label">Date *</label><input class="form-input" id="resDate" type="date" min="${new Date().toISOString().slice(0, 10)}" onchange="Reservation.selectedDate=this.value"></div>
        <div class="form-group"><label class="form-label">Time *</label>
          <select class="form-input" id="resTime" onchange="Reservation.selectedTime=this.value">
            <option value="">Select time</option>
            <option value="11:00 AM">11:00 AM</option><option value="11:30 AM">11:30 AM</option>
            <option value="12:00 PM">12:00 PM</option><option value="12:30 PM">12:30 PM</option>
            <option value="1:00 PM">1:00 PM</option><option value="1:30 PM">1:30 PM</option>
            <option value="2:00 PM">2:00 PM</option><option value="6:00 PM">6:00 PM</option>
            <option value="6:30 PM">6:30 PM</option><option value="7:00 PM">7:00 PM</option>
            <option value="7:30 PM">7:30 PM</option><option value="8:00 PM">8:00 PM</option>
            <option value="8:30 PM">8:30 PM</option><option value="9:00 PM">9:00 PM</option>
            <option value="9:30 PM">9:30 PM</option><option value="10:00 PM">10:00 PM</option>
          </select>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-4)">
        <div class="form-group"><label class="form-label">Guests *</label>
          <select class="form-input" id="resGuests" onchange="Reservation.guests=parseInt(this.value)">
            ${[1,2,3,4,5,6,7,8].map(n => `<option value="${n}"${n === this.guests ? ' selected' : ''}>${n} guest${n > 1 ? 's' : ''}</option>`).join('')}
          </select>
        </div>
        <div class="form-group"><label class="form-label">Occasion</label>
          <select class="form-input" id="resOccasion">
            <option value="dinner">Dinner</option><option value="lunch">Lunch</option>
            <option value="birthday">Birthday</option><option value="anniversary">Anniversary</option>
            <option value="business">Business</option><option value="other">Other</option>
          </select>
        </div>
      </div>
      <div class="form-group"><label class="form-label">Special Requests</label><textarea class="form-textarea" id="resRequests" rows="3" placeholder="Any dietary requirements, seating preferences..."></textarea></div>
      <button class="btn btn-primary btn-lg" style="width:100%" onclick="Reservation.submitReservation()">📅 Reserve Table</button>`;
  },

  checkAvailability() {
    if (!this.selectedTable) { Toast.show('Please select a table', 'error'); return false; }
    const table = RT.tables.find(t => t.id === this.selectedTable);
    if (!table || table.status === 'booked') { Toast.show('Selected table is not available', 'error'); return false; }
    if (this.guests > table.capacity) { Toast.show(`Table ${table.number} seats only ${table.capacity} guests`, 'error'); return false; }
    return true;
  },

  submitReservation() {
    const name = document.getElementById('resName')?.value.trim();
    const phone = document.getElementById('resPhone')?.value.trim();
    const date = document.getElementById('resDate')?.value;
    const time = document.getElementById('resTime')?.value;

    if (!name) { Toast.show('Please enter your name', 'error'); return; }
    if (!phone || !/^01\d{9}$/.test(phone)) { Toast.show('Please enter a valid BD phone number', 'error'); return; }
    if (!date) { Toast.show('Please select a date', 'error'); return; }
    if (!time) { Toast.show('Please select a time', 'error'); return; }
    if (!this.checkAvailability()) return;

    const reservation = {
      id: 'res' + Date.now(),
      userId: 'u1',
      date,
      time,
      guests: this.guests,
      tableId: this.selectedTable,
      occasion: document.getElementById('resOccasion')?.value || 'dinner',
      name,
      phone,
      email: document.getElementById('resEmail')?.value || '',
      specialRequests: document.getElementById('resRequests')?.value || '',
      status: 'confirmed'
    };

    const reservations = State.get('reservations') || [];
    reservations.push(reservation);
    State.set('reservations', reservations);

    const table = RT.tables.find(t => t.id === this.selectedTable);
    // Show confirmation
    const main = document.getElementById('reservationMain') || document.querySelector('.reservation-page');
    if (main) {
      main.innerHTML = `
        <div class="text-center" style="padding:var(--sp-10)">
          <div style="font-size:64px;margin-bottom:var(--sp-4)">🎉</div>
          <h2 style="color:var(--success);margin-bottom:var(--sp-4)">Table Reserved!</h2>
          <p style="margin-bottom:var(--sp-2)"><strong>Table ${table.number}</strong> · ${table.capacity} seats · ${table.location}</p>
          <p style="margin-bottom:var(--sp-2)">${date} at ${time} · ${this.guests} guest${this.guests > 1 ? 's' : ''}</p>
          <p class="text-secondary" style="margin-bottom:var(--sp-6)">Reservation ID: ${reservation.id}</p>
          <div style="display:flex;gap:var(--sp-3);justify-content:center">
            <a href="menu.html" class="btn btn-primary btn-md">View Menu</a>
            <a href="index.html" class="btn btn-secondary btn-md">Back to Home</a>
          </div>
        </div>`;
    }
    Toast.show('Reservation confirmed!', 'success');
  }
};

/* ---------- Gallery Page ---------- */
const Gallery = {
  currentCategory: 'all',
  lightboxIndex: -1,

  init() {
    this.renderGallery();
    this.bindKeys();
  },

  filterByCategory(cat) {
    this.currentCategory = cat;
    document.querySelectorAll('.gallery-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
    this.renderGallery();
  },

  getFiltered() {
    if (this.currentCategory === 'all') return RT.gallery;
    return RT.gallery.filter(g => g.category === this.currentCategory);
  },

  renderGallery() {
    const c = document.getElementById('galleryGrid');
    if (!c) return;
    const items = this.getFiltered();
    if (!items.length) {
      c.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1;text-align:center;padding:var(--sp-10)">
          <div style="font-size:48px;margin-bottom:var(--sp-4)">📷</div>
          <h3>No photos in this category</h3>
          <button class="btn btn-secondary btn-md" style="margin-top:var(--sp-4)" onclick="Gallery.filterByCategory('all')">Show All</button>
        </div>`;
      return;
    }
    c.innerHTML = items.map((g, i) => `
      <div class="gallery-item" onclick="Gallery.openLightbox(${i})" style="cursor:pointer">
        <img src="${g.src}" alt="${g.caption}" loading="lazy">
        <div class="gallery-caption">${g.caption}</div>
      </div>`).join('');
  },

  openLightbox(index) {
    const items = this.getFiltered();
    if (index < 0 || index >= items.length) return;
    this.lightboxIndex = index;
    const item = items[index];

    let lb = document.getElementById('lightbox');
    if (!lb) {
      lb = document.createElement('div');
      lb.id = 'lightbox';
      document.body.appendChild(lb);
    }
    lb.className = 'lightbox active';
    lb.innerHTML = `
      <div class="lightbox-overlay" onclick="Gallery.closeLightbox()"></div>
      <div class="lightbox-content">
        <button class="lightbox-close" onclick="Gallery.closeLightbox()">✕</button>
        <button class="lightbox-nav prev" onclick="Gallery.navigate(-1)">‹</button>
        <img src="${item.src}" alt="${item.caption}">
        <div class="lightbox-caption">${item.caption} <span class="text-secondary">(${index + 1}/${items.length})</span></div>
        <button class="lightbox-nav next" onclick="Gallery.navigate(1)">›</button>
      </div>`;
  },

  closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('active');
    this.lightboxIndex = -1;
  },

  navigate(dir) {
    const items = this.getFiltered();
    let next = this.lightboxIndex + dir;
    if (next < 0) next = items.length - 1;
    if (next >= items.length) next = 0;
    this.openLightbox(next);
  },

  bindKeys() {
    document.addEventListener('keydown', e => {
      if (this.lightboxIndex < 0) return;
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowLeft') this.navigate(-1);
      if (e.key === 'ArrowRight') this.navigate(1);
    });
  }
};

/* ---------- Reviews Page ---------- */
const Reviews = {
  currentFilter: 0,
  userRating: 0,

  init() {
    this.renderStats();
    this.renderReviews();
    this.renderForm();
  },

  renderStats() {
    const c = document.getElementById('reviewStats');
    if (!c) return;
    const all = RT.reviews;
    const avg = all.reduce((s, r) => s + r.rating, 0) / all.length;
    const dist = [5, 4, 3, 2, 1].map(s => ({ stars: s, count: all.filter(r => r.rating === s).length }));

    c.innerHTML = `
      <div class="review-stats-summary" style="display:flex;gap:var(--sp-8);align-items:center;margin-bottom:var(--sp-6)">
        <div style="text-align:center">
          <div style="font-size:48px;font-weight:700;color:var(--primary)">${avg.toFixed(1)}</div>
          <div class="stars" style="font-size:20px">${'★'.repeat(Math.round(avg))}</div>
          <div class="text-secondary">${all.length} reviews</div>
        </div>
        <div style="flex:1">
          ${dist.map(d => `
            <div style="display:flex;align-items:center;gap:var(--sp-2);margin-bottom:var(--sp-1)">
              <span style="min-width:20px;font-size:13px">${d.stars}★</span>
              <div style="flex:1;height:8px;background:var(--border);border-radius:4px;overflow:hidden">
                <div style="height:100%;width:${all.length ? (d.count / all.length * 100) : 0}%;background:var(--primary);border-radius:4px"></div>
              </div>
              <span style="min-width:20px;font-size:13px;color:var(--text-secondary)">${d.count}</span>
            </div>`).join('')}
        </div>
      </div>`;
  },

  filterByRating(stars) {
    this.currentFilter = this.currentFilter === stars ? 0 : stars;
    document.querySelectorAll('.rating-filter-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.rating) === this.currentFilter));
    this.renderReviews();
  },

  renderReviews() {
    const c = document.getElementById('reviewList');
    if (!c) return;
    let reviews = [...RT.reviews];
    if (this.currentFilter) reviews = reviews.filter(r => r.rating === this.currentFilter);

    if (!reviews.length) {
      c.innerHTML = '<p class="text-secondary text-center" style="padding:var(--sp-6)">No reviews with this rating.</p>';
      return;
    }

    c.innerHTML = reviews.map(r => `
      <div class="review-card" style="background:var(--bg-surface-alt);border-radius:var(--radius-md);padding:var(--sp-5);margin-bottom:var(--sp-4)">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:var(--sp-2)">
          <div>
            <strong>${r.author}</strong>
            ${r.verified ? '<span class="badge badge-confirmed" style="font-size:11px;margin-left:var(--sp-2)">Verified</span>' : ''}
          </div>
          <span class="text-secondary" style="font-size:13px">${r.date}</span>
        </div>
        <div class="stars" style="margin-bottom:var(--sp-2)">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
        <p style="font-size:14px;color:var(--text-secondary);line-height:1.7">${r.text}</p>
        <div class="text-secondary" style="font-size:12px;margin-top:var(--sp-2)">🍽️ ${r.dish}</div>
      </div>`).join('');
  },

  renderForm() {
    const c = document.getElementById('reviewForm');
    if (!c) return;
    c.innerHTML = `
      <h3 style="margin-bottom:var(--sp-4)">Write a Review</h3>
      <div class="form-group">
        <label class="form-label">Your Rating</label>
        <div class="star-input" id="starInput" style="font-size:24px;cursor:pointer">
          ${[1,2,3,4,5].map(i => `<span class="star-btn" data-rating="${i}" onclick="Reviews.setRating(${i})" onmouseover="Reviews.hoverRating(${i})" onmouseout="Reviews.hoverRating(0)">${i <= this.userRating ? '★' : '☆'}</span>`).join('')}
        </div>
      </div>
      <div class="form-group"><label class="form-label">Dish Ordered</label>
        <select class="form-input" id="reviewDish">
          <option value="">Select a dish</option>
          ${RT.dishes.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
        </select>
      </div>
      <div class="form-group"><label class="form-label">Your Review</label><textarea class="form-textarea" id="reviewText" rows="4" placeholder="Share your experience..."></textarea></div>
      <div class="form-group"><label class="form-label">Your Name</label><input class="form-input" id="reviewName" value="${Auth.getUser().name}"></div>
      <button class="btn btn-primary btn-md" onclick="Reviews.submitReview()">Submit Review</button>`;
  },

  setRating(stars) {
    this.userRating = stars;
    document.querySelectorAll('#starInput .star-btn').forEach((s, i) => s.textContent = i < stars ? '★' : '☆');
  },

  hoverRating(stars) {
    document.querySelectorAll('#starInput .star-btn').forEach((s, i) => {
      if (stars > 0) s.textContent = i < stars ? '★' : '☆';
      else s.textContent = i < this.userRating ? '★' : '☆';
    });
  },

  submitReview() {
    const rating = this.userRating;
    const text = document.getElementById('reviewText')?.value.trim();
    const name = document.getElementById('reviewName')?.value.trim();
    const dishId = document.getElementById('reviewDish')?.value;

    if (!rating) { Toast.show('Please select a rating', 'error'); return; }
    if (!text) { Toast.show('Please write a review', 'error'); return; }
    if (!name) { Toast.show('Please enter your name', 'error'); return; }

    const dish = RT.dishes.find(d => d.id === dishId);
    const review = {
      id: 'rv' + Date.now(),
      dishId: dishId || null,
      author: name,
      date: new Date().toISOString().slice(0, 10),
      rating,
      text,
      dish: dish?.name || 'General',
      verified: Auth.isLoggedIn()
    };

    RT.reviews.unshift(review);
    this.userRating = 0;
    Toast.show('Review submitted! Thank you 🙏', 'success');
    this.renderStats();
    this.renderReviews();
    this.renderForm();
  }
};

/* ---------- Admin Page ---------- */
const Admin = {
  currentSection: 'dashboard',

  init() {
    this.renderSidebar();
    this.switchSection('dashboard');
  },

  renderSidebar() {
    const links = document.querySelectorAll('.sidebar-link[data-section]');
    links.forEach(l => l.addEventListener('click', () => this.switchSection(l.dataset.section)));
  },

  switchSection(section) {
    this.currentSection = section;
    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.toggle('active', l.dataset.section === section));
    const c = document.getElementById('adminContent');
    if (!c) return;
    if (section === 'dashboard') this.renderDashboard(c);
    else if (section === 'orders') this.renderOrders(c);
    else if (section === 'menu') this.renderMenu(c);
    else if (section === 'reservations') this.renderReservations(c);
  },

  renderDashboard(c) {
    const s = RT.adminStats;
    c.innerHTML = `
      <h2 style="margin-bottom:var(--sp-6)">Dashboard</h2>
      <div class="admin-stats" style="display:grid;grid-template-columns:repeat(4,1fr);gap:var(--sp-4);margin-bottom:var(--sp-8)">
        <div class="stat-card"><div class="stat-card-label">Today's Orders</div><div class="stat-card-value">${s.todayOrders}</div></div>
        <div class="stat-card"><div class="stat-card-label">Active Orders</div><div class="stat-card-value">${s.activeOrders}</div></div>
        <div class="stat-card"><div class="stat-card-label">Today's Revenue</div><div class="stat-card-value">${formatPrice(s.todayRevenue)}</div></div>
        <div class="stat-card"><div class="stat-card-label">Pending Reservations</div><div class="stat-card-value">${s.pendingReservations}</div></div>
      </div>

      <div style="display:grid;grid-template-columns:2fr 1fr;gap:var(--sp-6);margin-bottom:var(--sp-8)">
        <div class="card card-no-hover">
          <div class="card-header"><h3>Weekly Revenue</h3></div>
          <div class="card-body"><canvas id="revenueChart"></canvas></div>
        </div>
        <div class="card card-no-hover">
          <div class="card-header"><h3>Popular Dishes</h3></div>
          <div class="card-body">
            ${s.popularDishes.map((id, i) => {
              const dish = RT.dishes.find(d => d.id === id);
              if (!dish) return '';
              return `<div style="display:flex;align-items:center;gap:var(--sp-3);padding:var(--sp-2) 0;${i < s.popularDishes.length - 1 ? 'border-bottom:1px solid var(--border)' : ''}">
                <span style="font-weight:700;color:var(--text-secondary);min-width:20px">#${i + 1}</span>
                <div style="flex:1"><div style="font-weight:500">${dish.name}</div><div class="text-secondary" style="font-size:12px">${renderStars(dish.rating)}</div></div>
                <span style="font-weight:600">${formatPrice(dish.price)}</span>
              </div>`;
            }).join('')}
          </div>
        </div>
      </div>

      <div class="card card-no-hover">
        <div class="card-header"><h3>Recent Orders</h3></div>
        <div class="card-body">
          <table class="data-table">
            <thead><tr><th>Order ID</th><th>Items</th><th>Total</th><th>Type</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>${RT.orders.map(o => `
              <tr>
                <td><strong>${o.id}</strong></td>
                <td>${o.items.map(it => it.name).join(', ')}</td>
                <td>${formatPrice(o.total)}</td>
                <td>${o.delivery.type}</td>
                <td><span class="badge badge-${o.status}">${o.status}</span></td>
                <td><button class="btn btn-ghost btn-sm" onclick="Toast.show('Order details viewed','info')">View</button></td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>`;

    this.renderRevenueChart();
  },

  renderRevenueChart() {
    const canvas = document.getElementById('revenueChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const data = RT.adminStats.weeklyRevenue;
    const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const maxVal = Math.max(...data);
    const w = canvas.width = canvas.parentElement.clientWidth;
    const h = canvas.height = 220;
    const barW = (w - 80) / data.length;
    const padding = 40;

    ctx.clearRect(0, 0, w, h);
    data.forEach((val, i) => {
      const barH = (val / maxVal) * (h - padding * 2);
      const x = padding + i * barW + barW * 0.2;
      const y = h - padding - barH;
      const grad = ctx.createLinearGradient(x, y, x, h - padding);
      grad.addColorStop(0, '#C2410C');
      grad.addColorStop(1, '#FB923C');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x, y, barW * 0.6, barH, [4, 4, 0, 0]);
      ctx.fill();
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#888';
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(days[i], x + barW * 0.3, h - 10);
      ctx.fillText(formatPrice(val), x + barW * 0.3, y - 8);
    });
  },

  renderOrders(c) {
    const allOrders = [...RT.orders, ...(State.get('orders') || [])];
    // Deduplicate by id
    const seen = new Set();
    const orders = allOrders.filter(o => { if (seen.has(o.id)) return false; seen.add(o.id); return true; });

    c.innerHTML = `
      <h2 style="margin-bottom:var(--sp-6)">Orders Management</h2>
      <div class="tabs" style="margin-bottom:var(--sp-6)">
        <button class="tab active" onclick="Admin.filterOrders('all',this)">All</button>
        <button class="tab" onclick="Admin.filterOrders('placed',this)">New</button>
        <button class="tab" onclick="Admin.filterOrders('preparing',this)">Preparing</button>
        <button class="tab" onclick="Admin.filterOrders('ready',this)">Ready</button>
        <button class="tab" onclick="Admin.filterOrders('delivered',this)">Delivered</button>
      </div>
      <div id="adminOrderList">${this.renderOrderList(orders)}</div>`;
  },

  filterOrders(filter, btn) {
    if (btn) { btn.closest('.tabs').querySelectorAll('.tab').forEach(t => t.classList.remove('active')); btn.classList.add('active'); }
    const allOrders = [...RT.orders, ...(State.get('orders') || [])];
    const seen = new Set();
    let orders = allOrders.filter(o => { if (seen.has(o.id)) return false; seen.add(o.id); return true; });
    if (filter !== 'all') orders = orders.filter(o => o.status === filter);
    document.getElementById('adminOrderList').innerHTML = this.renderOrderList(orders);
  },

  renderOrderList(orders) {
    if (!orders.length) return '<p class="text-secondary text-center" style="padding:var(--sp-6)">No orders found.</p>';
    return `<table class="data-table">
      <thead><tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Total</th><th>Type</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${orders.map(o => `
        <tr>
          <td><strong>${o.id}</strong></td>
          <td>${o.delivery.name}</td>
          <td>${o.items.map(it => `${it.name} ×${it.qty}`).join(', ')}</td>
          <td>${formatPrice(o.total)}</td>
          <td>${o.delivery.type}</td>
          <td><span class="badge badge-${o.status}">${o.status}</span></td>
          <td>
            <select class="form-input" style="height:32px;font-size:12px;padding:0 var(--sp-2);min-width:100px" onchange="Admin.updateOrderStatus('${o.id}',this.value)">
              <option value="placed" ${o.status === 'placed' ? 'selected' : ''}>Placed</option>
              <option value="confirmed" ${o.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
              <option value="preparing" ${o.status === 'preparing' ? 'selected' : ''}>Preparing</option>
              <option value="ready" ${o.status === 'ready' ? 'selected' : ''}>Ready</option>
              <option value="delivery" ${o.status === 'delivery' ? 'selected' : ''}>Delivery</option>
              <option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>Delivered</option>
            </select>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>`;
  },

  updateOrderStatus(orderId, newStatus) {
    // Update in RT.orders
    const order = RT.orders.find(o => o.id === orderId);
    if (order) order.status = newStatus;
    // Update in localStorage
    const saved = State.get('orders') || [];
    const savedOrder = saved.find(o => o.id === orderId);
    if (savedOrder) { savedOrder.status = newStatus; State.set('orders', saved); }
    Toast.show(`Order ${orderId} updated to ${newStatus}`, 'success');
  },

  renderMenu(c) {
    c.innerHTML = `
      <h2 style="margin-bottom:var(--sp-6)">Menu Items</h2>
      <div class="tabs" style="margin-bottom:var(--sp-6)">
        <button class="tab active" onclick="Admin.filterMenu('all',this)">All (${RT.dishes.length})</button>
        ${RT.categories.map(cat => `<button class="tab" onclick="Admin.filterMenu('${cat.id}',this)">${cat.icon} ${cat.name}</button>`).join('')}
      </div>
      <div id="adminMenuList">${this.renderMenuList(RT.dishes)}</div>`;
  },

  filterMenu(cat, btn) {
    if (btn) { btn.closest('.tabs').querySelectorAll('.tab').forEach(t => t.classList.remove('active')); btn.classList.add('active'); }
    const dishes = cat === 'all' ? RT.dishes : RT.dishes.filter(d => d.category === cat);
    document.getElementById('adminMenuList').innerHTML = this.renderMenuList(dishes);
  },

  renderMenuList(dishes) {
    return `<table class="data-table">
      <thead><tr><th>Image</th><th>Name</th><th>Category</th><th>Price</th><th>Rating</th><th>Tags</th></tr></thead>
      <tbody>${dishes.map(d => `
        <tr>
          <td><img src="${d.image}" alt="${d.name}" style="width:48px;height:48px;border-radius:var(--radius-sm);object-fit:cover"></td>
          <td><strong>${d.name}</strong></td>
          <td>${RT.categories.find(c => c.id === d.category)?.name || ''}</td>
          <td>${formatPrice(d.price)}</td>
          <td>${renderStars(d.rating)}</td>
          <td>
            ${d.chefPick ? '<span class="badge badge-chef" style="font-size:11px">Chef\'s Pick</span>' : ''}
            ${d.isNew ? '<span class="badge badge-new" style="font-size:11px">New</span>' : ''}
            ${d.vegetarian ? '<span class="badge badge-veg" style="font-size:11px">Veg</span>' : ''}
          </td>
        </tr>`).join('')}
      </tbody>
    </table>`;
  },

  renderReservations(c) {
    const allRes = [...RT.reservations, ...(State.get('reservations') || [])];
    const seen = new Set();
    const reservations = allRes.filter(r => { if (seen.has(r.id)) return false; seen.add(r.id); return true; });

    c.innerHTML = `
      <h2 style="margin-bottom:var(--sp-6)">Reservations</h2>
      ${reservations.length ? `
        <table class="data-table">
          <thead><tr><th>ID</th><th>Name</th><th>Date</th><th>Time</th><th>Guests</th><th>Table</th><th>Occasion</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>${reservations.map(r => {
            const table = RT.tables.find(t => t.id === r.tableId);
            return `<tr>
              <td><strong>${r.id}</strong></td>
              <td>${r.name}</td>
              <td>${r.date}</td>
              <td>${r.time}</td>
              <td>${r.guests}</td>
              <td>T${table?.number || '—'} (${table?.capacity || '—'} seats)</td>
              <td>${r.occasion}</td>
              <td><span class="badge badge-${r.status}">${r.status}</span></td>
              <td>
                <select class="form-input" style="height:32px;font-size:12px;padding:0 var(--sp-2)" onchange="Admin.updateResStatus('${r.id}',this.value)">
                  <option value="pending" ${r.status === 'pending' ? 'selected' : ''}>Pending</option>
                  <option value="confirmed" ${r.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                  <option value="cancelled" ${r.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                  <option value="completed" ${r.status === 'completed' ? 'selected' : ''}>Completed</option>
                </select>
              </td>
            </tr>`;
          }).join('')}
          </tbody>
        </table>` : '<p class="text-secondary text-center" style="padding:var(--sp-6)">No reservations found.</p>'}`;
  },

  updateResStatus(resId, newStatus) {
    const res = RT.reservations.find(r => r.id === resId);
    if (res) res.status = newStatus;
    const saved = State.get('reservations') || [];
    const savedRes = saved.find(r => r.id === resId);
    if (savedRes) { savedRes.status = newStatus; State.set('reservations', saved); }
    Toast.show(`Reservation ${resId} updated to ${newStatus}`, 'success');
  }
};

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  Auth.updateUI();
  Drawer.init();
  Header.init();
  Cart.updateBadge();

  // Page-specific init
  const path = location.pathname.split('/').pop() || 'index.html';

  if (path === 'index.html' || path === '') {
    if (document.getElementById('categoryGrid') || document.getElementById('featuredGrid')) HomePage.init();
  }
  if (path === 'menu.html' && document.getElementById('menuGrid')) Menu.init();
  if (path === 'dish.html' && document.getElementById('dishDetailContent')) DishDetail.init();
  if (path === 'cart.html' && document.getElementById('cartBody')) Cart.renderCart();
  if (path === 'checkout.html' && (document.getElementById('checkoutSummary') || document.getElementById('checkoutForm'))) Checkout.init();
  if (path === 'tracking.html' && document.getElementById('trackingContent')) OrderTracking.init();
  if (path === 'reservation.html' && (document.getElementById('floorPlan') || document.getElementById('reservationForm'))) Reservation.init();
  if (path === 'gallery.html' && document.getElementById('galleryGrid')) Gallery.init();
  if (path === 'reviews.html' && (document.getElementById('reviewStats') || document.getElementById('reviewList'))) Reviews.init();
  if (path === 'admin.html' && document.getElementById('adminContent')) Admin.init();

  // Auth modal wiring
  document.querySelectorAll('.auth-login-btn').forEach(b => b.addEventListener('click', () => Auth.openModal()));
  document.querySelectorAll('.auth-logout-btn').forEach(b => b.addEventListener('click', () => Auth.logout()));
  document.querySelectorAll('.auth-tab').forEach(t => t.addEventListener('click', () => Auth.switchTab(t.dataset.tab)));

  const loginForm = document.getElementById('auth-login');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = loginForm.querySelector('[name="email"]')?.value;
      const pass = loginForm.querySelector('[name="password"]')?.value;
      Auth.login(email, pass);
    });
    // Pre-fill demo credentials
    const emailInput = loginForm.querySelector('[name="email"]');
    const passInput = loginForm.querySelector('[name="password"]');
    if (emailInput && !emailInput.value) emailInput.value = 'tahsan@khadok.bd';
    if (passInput && !passInput.value) passInput.value = 'demo123';
  }

  const signupForm = document.getElementById('auth-signup');
  if (signupForm) {
    signupForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = signupForm.querySelector('[name="name"]')?.value;
      const email = signupForm.querySelector('[name="email"]')?.value;
      const pass = signupForm.querySelector('[name="password"]')?.value;
      Auth.signup(name, email, pass);
    });
  }

  // Auth overlay close on backdrop click
  const authOverlay = document.getElementById('authOverlay');
  if (authOverlay) authOverlay.addEventListener('click', e => { if (e.target === authOverlay) Auth.closeModal(); });

  // Theme toggle buttons
  document.querySelectorAll('.theme-toggle').forEach(b => b.addEventListener('click', () => Theme.toggle()));

  // Cart page promo
  const promoBtnCart = document.getElementById('applyPromoBtn');
  if (promoBtnCart) {
    promoBtnCart.addEventListener('click', () => {
      const code = document.getElementById('promoInputCart')?.value;
      const result = Cart.applyPromo(code);
      const msgEl = document.getElementById('promoMsgCart');
      if (msgEl) { msgEl.textContent = result.message; msgEl.style.color = result.valid ? 'var(--success)' : 'var(--error)'; }
    });
  }

  // Cart clear button
  const clearCartBtn = document.getElementById('clearCartBtn');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      Cart.clear();
      Cart.renderCart();
      Toast.show('Cart cleared', 'info');
    });
  }
});
