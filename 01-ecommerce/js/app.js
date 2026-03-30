// ============================================
//  E-COMMERCE — Core Application Logic
//  Cart, Wishlist, Theme, Search, UI Interactions
// ============================================

// --- State Management (localStorage) ---
const State = {
  get(key, fallback = null) {
    try { return JSON.parse(localStorage.getItem(`flavr_${key}`)) || fallback; }
    catch { return fallback; }
  },
  set(key, value) {
    localStorage.setItem(`flavr_${key}`, JSON.stringify(value));
  }
};

// --- Theme ---
const Theme = {
  init() {
    const saved = State.get('theme', 'light');
    document.documentElement.setAttribute('data-theme', saved);
    this.updateIcons(saved);
  },
  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    State.set('theme', next);
    this.updateIcons(next);
  },
  updateIcons(theme) {
    document.querySelectorAll('.theme-icon').forEach(el => {
      el.innerHTML = theme === 'dark' ? Icons.sun : Icons.moon;
    });
    document.querySelectorAll('.theme-label').forEach(el => {
      el.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    });
  }
};

// --- Icons (Inline SVG) ---
const Icons = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  heartFill: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m15 18-6-6 6-6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 18 6-6-6-6"/></svg>`,
  chevronUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m18 15-6-6-6 6"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  starHalf: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><defs><linearGradient id="half"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#half)"/></svg>`,
  starEmpty: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  package: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
  list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  zoomIn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
};

// --- Stars HTML ---
function starsHTML(rating, size = 14) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) html += `<svg style="width:${size}px;height:${size}px" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    else if (i - 0.5 <= rating) html += `<svg style="width:${size}px;height:${size}px" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><defs><linearGradient id="hg${i}"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#hg${i})"/></svg>`;
    else html += `<svg style="width:${size}px;height:${size}px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  }
  return html;
}

// --- Cart ---
const Cart = {
  items: State.get('cart', []),
  
  add(productId, qty = 1, color = null, size = null) {
    const product = STORE.products.find(p => p.id === productId);
    if (!product) return;
    const existing = this.items.find(i => i.id === productId && i.color === color && i.size === size);
    if (existing) {
      existing.qty = Math.min(existing.qty + qty, product.stock);
    } else {
      this.items.push({
        id: productId, name: product.name, price: product.price,
        image: product.images[0], qty, color: color || product.colors[0]?.name,
        size: size || product.sizes[0], stock: product.stock
      });
    }
    this.save();
    this.updateUI();
    Toast.show(`${product.name} added to cart`, 'success');
  },

  remove(index) {
    const item = this.items[index];
    this.items.splice(index, 1);
    this.save();
    this.updateUI();
    this.renderDrawer();
    Toast.show(`${item.name} removed`, 'info', 'Undo', () => {
      this.items.splice(index, 0, item);
      this.save();
      this.updateUI();
      this.renderDrawer();
    });
  },

  updateQty(index, qty) {
    if (qty < 1) return;
    this.items[index].qty = Math.min(qty, this.items[index].stock);
    this.save();
    this.updateUI();
    this.renderDrawer();
  },

  getSubtotal() { return this.items.reduce((sum, i) => sum + i.price * i.qty, 0); },
  getCount() { return this.items.reduce((sum, i) => sum + i.qty, 0); },

  applyCoupon(code) {
    const coupon = STORE.coupons.find(c => c.code === code.toUpperCase() && c.active);
    if (!coupon) return { success: false, message: 'Invalid coupon code' };
    const subtotal = this.getSubtotal();
    if (subtotal < coupon.minOrder) return { success: false, message: `Minimum order ${STORE.currency}${coupon.minOrder}` };
    State.set('coupon', coupon);
    return { success: true, coupon };
  },

  removeCoupon() { localStorage.removeItem('flavr_coupon'); },

  getDiscount() {
    const coupon = State.get('coupon');
    if (!coupon) return 0;
    return coupon.type === 'percent' ? Math.round(this.getSubtotal() * coupon.discount / 100) : coupon.discount;
  },

  getTotal() { return Math.max(0, this.getSubtotal() - this.getDiscount()); },

  save() { State.set('cart', this.items); },

  updateUI() {
    document.querySelectorAll('.cart-badge').forEach(el => {
      const count = this.getCount();
      el.textContent = count > 0 ? count : '';
    });
  },

  renderDrawer() {
    const body = document.querySelector('.cart-drawer-body');
    const footer = document.querySelector('.cart-drawer-footer');
    const couponSection = document.querySelector('.cart-coupon');
    if (!body) return;

    if (this.items.length === 0) {
      body.innerHTML = `<div class="cart-empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        <p>Your cart is empty</p>
        <a href="shop.html" class="btn btn--primary btn--md">Start Shopping</a>
      </div>`;
      if (footer) footer.style.display = 'none';
      if (couponSection) couponSection.style.display = 'none';
      return;
    }

    if (footer) footer.style.display = '';
    if (couponSection) couponSection.style.display = '';

    body.innerHTML = this.items.map((item, i) => `
      <div class="cart-item">
        <div class="cart-item-img"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-variant">${item.color || ''} ${item.size && item.size !== 'One Size' ? ' / ' + item.size : ''}</div>
          <div class="cart-item-bottom">
            <div class="cart-item-price">${STORE.currency}${(item.price * item.qty).toLocaleString()}</div>
            <div class="cart-item-actions">
              <div class="qty-stepper">
                <button onclick="Cart.updateQty(${i}, ${item.qty - 1})">&minus;</button>
                <span class="qty-value">${item.qty}</span>
                <button onclick="Cart.updateQty(${i}, ${item.qty + 1})">+</button>
              </div>
              <button class="cart-remove-btn" onclick="Cart.remove(${i})">${Icons.trash}</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Update footer totals
    if (footer) {
      const coupon = State.get('coupon');
      const discount = this.getDiscount();
      footer.innerHTML = `
        <div class="cart-summary-row"><span>Subtotal</span><span>${STORE.currency}${this.getSubtotal().toLocaleString()}</span></div>
        ${discount > 0 ? `<div class="cart-summary-row discount"><span>Discount (${coupon.code})</span><span>-${STORE.currency}${discount.toLocaleString()}</span></div>` : ''}
        <div class="cart-summary-row"><span>Shipping</span><span>Free</span></div>
        <div class="cart-summary-row total"><span>Total</span><span>${STORE.currency}${this.getTotal().toLocaleString()}</span></div>
        <a href="checkout.html" class="btn btn--accent btn--lg btn--full">Checkout</a>
        <a href="shop.html" class="btn btn--ghost btn--md btn--full" style="margin-top:8px">Continue Shopping</a>
      `;
    }

    // Coupon
    if (couponSection) {
      const coupon = State.get('coupon');
      couponSection.innerHTML = coupon
        ? `<div class="coupon-applied"><span>🎉 ${coupon.code} applied (-${coupon.type === 'percent' ? coupon.discount + '%' : STORE.currency + coupon.discount})</span><button onclick="Cart.removeCoupon(); Cart.renderDrawer();">${Icons.x}</button></div>`
        : `<div class="cart-coupon-form"><input type="text" id="couponInput" placeholder="Coupon code"><button class="btn btn--secondary btn--sm" onclick="handleCoupon()">Apply</button></div>`;
    }
  },

  open() {
    document.querySelector('.cart-drawer')?.classList.add('open');
    document.querySelector('.drawer-overlay')?.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.renderDrawer();
  },

  close() {
    document.querySelector('.cart-drawer')?.classList.remove('open');
    document.querySelector('.drawer-overlay')?.classList.remove('active');
    document.body.style.overflow = '';
  }
};

function handleCoupon() {
  const input = document.getElementById('couponInput');
  if (!input) return;
  const result = Cart.applyCoupon(input.value.trim());
  if (result.success) {
    Toast.show('Coupon applied!', 'success');
    Cart.renderDrawer();
  } else {
    Toast.show(result.message, 'error');
  }
}

// --- Wishlist ---
const Wishlist = {
  items: State.get('wishlist', []),

  toggle(productId) {
    const idx = this.items.indexOf(productId);
    if (idx > -1) {
      this.items.splice(idx, 1);
      Toast.show('Removed from wishlist', 'info');
    } else {
      this.items.push(productId);
      Toast.show('Added to wishlist', 'success');
    }
    State.set('wishlist', this.items);
    this.updateUI();
  },

  has(productId) { return this.items.includes(productId); },

  updateUI() {
    document.querySelectorAll('[data-wishlist]').forEach(btn => {
      const id = parseInt(btn.dataset.wishlist);
      btn.classList.toggle('active', this.has(id));
      btn.innerHTML = this.has(id) ? Icons.heartFill : Icons.heart;
    });
  }
};

// --- Toast Notifications ---
const Toast = {
  show(message, type = 'info', actionText = null, actionFn = null) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const iconMap = {
      success: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
      error: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
      info: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
      warning: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    };
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
      ${iconMap[type] || iconMap.info}
      <span class="toast-message">${message}</span>
      ${actionText ? `<button class="btn btn--sm btn--ghost toast-action">${actionText}</button>` : ''}
      <button class="toast-close" onclick="this.parentElement.remove()">${Icons.x}</button>
      <div class="toast-progress"></div>
    `;
    container.appendChild(toast);
    if (actionText && actionFn) {
      toast.querySelector('.toast-action').addEventListener('click', () => { actionFn(); toast.remove(); });
    }
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
  }
};

// --- Search ---
const Search = {
  init() {
    const input = document.getElementById('searchInput');
    const dropdown = document.getElementById('searchDropdown');
    if (!input || !dropdown) return;

    let timeout;
    input.addEventListener('input', () => {
      clearTimeout(timeout);
      const q = input.value.trim().toLowerCase();
      timeout = setTimeout(() => {
        if (q.length < 2) { dropdown.classList.remove('active'); return; }
        const results = STORE.products.filter(p =>
          p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.subcategory.toLowerCase().includes(q)
        ).slice(0, 6);
        if (results.length === 0) {
          dropdown.innerHTML = `<div class="search-item" style="justify-content:center;color:var(--color-text-muted);padding:24px">No results found</div>`;
        } else {
          dropdown.innerHTML = results.map(p => `
            <a href="product.html?id=${p.id}" class="search-item">
              <img src="${p.images[0]}" alt="${p.name}">
              <div class="search-item-info">
                <div class="search-item-name">${p.name}</div>
                <div class="search-item-price">${STORE.currency}${p.price.toLocaleString()}</div>
              </div>
            </a>
          `).join('');
        }
        dropdown.classList.add('active');
      }, 300);
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-search')) dropdown.classList.remove('active');
    });
  }
};

// --- Mobile Drawer ---
const MobileDrawer = {
  open() {
    document.querySelector('.mobile-drawer')?.classList.add('open');
    document.querySelector('.drawer-overlay')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  },
  close() {
    document.querySelector('.mobile-drawer')?.classList.remove('open');
    document.querySelector('.drawer-overlay')?.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// --- Header Scroll ---
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    header.classList.toggle('scrolled', current > 10);
    lastScroll = current;
  }, { passive: true });
}

// --- Scroll To Top ---
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// --- Hero Slider ---
function initHeroSlider() {
  const slider = document.querySelector('.hero-slider');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.querySelector('.hero-arrow--prev');
  const nextBtn = document.querySelector('.hero-arrow--next');
  if (!slider || dots.length === 0) return;

  let current = 0;
  const total = dots.length;
  let interval;

  function goTo(idx) {
    current = ((idx % total) + total) % total;
    slider.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() { interval = setInterval(next, 5000); }
  function stopAuto() { clearInterval(interval); }

  dots.forEach((d, i) => d.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); }));
  if (prevBtn) prevBtn.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { stopAuto(); next(); startAuto(); });

  startAuto();
}

// --- Countdown Timer ---
function initCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;

  function update() {
    const diff = STORE.flashSaleEnd - Date.now();
    if (diff <= 0) { el.innerHTML = '<span style="color:var(--color-error)">Sale Ended</span>'; return; }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.innerHTML = `
      <div class="countdown-item"><span class="num">${String(h).padStart(2, '0')}</span><span class="label">Hrs</span></div>
      <div class="countdown-item"><span class="num">${String(m).padStart(2, '0')}</span><span class="label">Min</span></div>
      <div class="countdown-item"><span class="num">${String(s).padStart(2, '0')}</span><span class="label">Sec</span></div>
    `;
  }
  update();
  setInterval(update, 1000);
}

// --- Product Card HTML ---
function productCardHTML(product) {
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
  return `
    <div class="product-card">
      <div class="product-card-img">
        ${product.badge ? `<span class="product-badge product-badge--${product.badge}">${product.badge === 'sale' ? `-${discount}%` : product.badge}</span>` : ''}
        <button class="product-wishlist-btn ${Wishlist.has(product.id) ? 'active' : ''}" data-wishlist="${product.id}" onclick="event.preventDefault(); Wishlist.toggle(${product.id})">
          ${Wishlist.has(product.id) ? Icons.heartFill : Icons.heart}
        </button>
        <a href="product.html?id=${product.id}"><img src="${product.images[0]}" alt="${product.name}" loading="lazy"></a>
      </div>
      <div class="product-card-body">
        <div class="product-card-category">${product.subcategory}</div>
        <h3 class="product-card-title"><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <div class="product-card-rating">
          <div class="stars" style="color:#F59E0B">${starsHTML(product.rating)}</div>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-card-footer">
          <div class="product-price">
            <span class="price-current">${STORE.currency}${product.price.toLocaleString()}</span>
            ${product.originalPrice ? `<span class="price-original">${STORE.currency}${product.originalPrice.toLocaleString()}</span>` : ''}
          </div>
          <button class="btn-add-cart" onclick="event.preventDefault(); Cart.add(${product.id})" title="Add to cart">
            ${Icons.plus}
          </button>
        </div>
      </div>
    </div>
  `;
}

// --- Auth Modal ---
const AuthModal = {
  open(tab = 'login') {
    const overlay = document.getElementById('authModal');
    if (!overlay) return;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.switchTab(tab);
  },
  close() {
    document.getElementById('authModal')?.classList.remove('active');
    document.body.style.overflow = '';
  },
  switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    document.querySelectorAll('.auth-form').forEach(f => f.style.display = f.id === `${tab}Form` ? 'block' : 'none');
  }
};

// --- Lightbox ---
const Lightbox = {
  open(src) {
    let lb = document.querySelector('.lightbox');
    if (!lb) {
      lb = document.createElement('div');
      lb.className = 'lightbox';
      lb.innerHTML = `<button class="lightbox-close">${Icons.x}</button><img src="" alt="Zoom">`;
      lb.querySelector('.lightbox-close').addEventListener('click', () => this.close());
      lb.addEventListener('click', (e) => { if (e.target === lb) this.close(); });
      document.body.appendChild(lb);
    }
    lb.querySelector('img').src = src;
    requestAnimationFrame(() => lb.classList.add('active'));
    document.body.style.overflow = 'hidden';
  },
  close() {
    const lb = document.querySelector('.lightbox');
    if (lb) { lb.classList.remove('active'); document.body.style.overflow = ''; }
  }
};

// --- Confetti ---
function launchConfetti() {
  const colors = ['#E63946', '#F59E0B', '#059669', '#3B82F6', '#8B5CF6', '#EC4899'];
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.cssText = `
      left: ${Math.random() * 100}vw;
      top: -10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${Math.random() * 8 + 5}px;
      height: ${Math.random() * 8 + 5}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      animation-duration: ${Math.random() * 2 + 2}s;
      animation-delay: ${Math.random() * 0.5}s;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4000);
  }
}

// --- Format Currency ---
function formatPrice(amount) {
  return `${STORE.currency}${amount.toLocaleString()}`;
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  Cart.updateUI();
  Wishlist.updateUI();
  Search.init();
  initHeaderScroll();
  initScrollTop();
  initHeroSlider();
  initCountdown();

  // Drawer overlay click
  document.querySelectorAll('.drawer-overlay').forEach(el => {
    el.addEventListener('click', () => { Cart.close(); MobileDrawer.close(); });
  });
});
