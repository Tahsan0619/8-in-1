/* ===== THEME ===== */
const Theme = {
  init() {
    const saved = localStorage.getItem('portfolio_theme');
    const prefer = window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', saved || prefer);
  },
  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio_theme', next);
  }
};
Theme.init();

/* ===== MOBILE MENU ===== */
const MobileMenu = {
  open() {
    document.getElementById('mobileMenu').classList.add('open');
    document.getElementById('mobileOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  },
  close() {
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('mobileOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
};

/* ===== CUSTOM CURSOR ===== */
const Cursor = {
  dot: null, ring: null, mx: 0, my: 0, cx: 0, cy: 0,
  init() {
    if (window.matchMedia('(pointer:coarse)').matches) return;
    this.dot = document.querySelector('.cursor-dot');
    this.ring = document.querySelector('.cursor-ring');
    if (!this.dot || !this.ring) return;
    document.addEventListener('mousemove', e => { this.mx = e.clientX; this.my = e.clientY; this.dot.style.left = this.mx + 'px'; this.dot.style.top = this.my + 'px'; });
    this.animate();
    document.querySelectorAll('a,button,.project-card,.masonry-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add(el.closest('.project-card,.masonry-item') ? 'cursor-view' : 'cursor-hover');
      });
      el.addEventListener('mouseleave', () => { document.body.classList.remove('cursor-hover','cursor-view'); });
    });
  },
  animate() {
    this.cx += (this.mx - this.cx) * 0.15;
    this.cy += (this.my - this.cy) * 0.15;
    if (this.ring) { this.ring.style.left = this.cx + 'px'; this.ring.style.top = this.cy + 'px'; }
    requestAnimationFrame(() => this.animate());
  }
};

/* ===== HEADER SCROLL ===== */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  const isTransparent = header.classList.contains('transparent');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) { header.classList.add('solid'); if (isTransparent) header.classList.remove('transparent'); }
    else { header.classList.remove('solid'); if (isTransparent) header.classList.add('transparent'); }
  });
}

/* ===== TYPEWRITER ===== */
const Typewriter = {
  el: null, strings: [], current: 0, charIndex: 0, isDeleting: false, delay: 80,
  init(selector, strings) {
    this.el = document.querySelector(selector);
    if (!this.el) return;
    this.strings = strings;
    this.type();
  },
  type() {
    const full = this.strings[this.current];
    if (this.isDeleting) {
      this.charIndex--;
      this.delay = 40;
    } else {
      this.charIndex++;
      this.delay = 80;
    }
    this.el.innerHTML = full.substring(0, this.charIndex) + '<span class="cursor-blink"></span>';
    if (!this.isDeleting && this.charIndex === full.length) {
      this.delay = 2500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.current = (this.current + 1) % this.strings.length;
      this.delay = 400;
    }
    setTimeout(() => this.type(), this.delay);
  }
};

/* ===== SCROLL REVEAL ===== */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(el => observer.observe(el));
}

/* ===== SKILL BARS ANIMATION ===== */
function initSkillBars() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => { bar.style.width = bar.dataset.level + '%'; });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skill-bars').forEach(el => observer.observe(el));
}

/* ===== PROJECT FILTER ===== */
function initProjectFilter() {
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.project-grid .project-card');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.dataset.cat;
      cards.forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
          card.classList.remove('hidden');
          card.style.position = '';
        } else {
          card.classList.add('hidden');
          card.style.position = 'absolute';
        }
      });
    });
  });
}

/* ===== LIGHTBOX ===== */
const Lightbox = {
  images: [], current: 0,
  open(images, index) {
    this.images = images;
    this.current = index;
    const lb = document.getElementById('lightbox');
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    this.update();
  },
  close() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  },
  prev() { this.current = (this.current - 1 + this.images.length) % this.images.length; this.update(); },
  next() { this.current = (this.current + 1) % this.images.length; this.update(); },
  update() {
    document.getElementById('lightboxImg').src = this.images[this.current];
    document.getElementById('lightboxCounter').textContent = `${this.current + 1} / ${this.images.length}`;
  }
};

/* ===== BEFORE / AFTER SLIDER ===== */
function initBeforeAfter() {
  document.querySelectorAll('.ba-slider').forEach(slider => {
    const before = slider.querySelector('.ba-before');
    const handle = slider.querySelector('.ba-handle');
    let dragging = false;
    const move = (x) => {
      const rect = slider.getBoundingClientRect();
      let pct = ((x - rect.left) / rect.width) * 100;
      pct = Math.max(5, Math.min(95, pct));
      before.style.width = pct + '%';
      handle.style.left = pct + '%';
    };
    slider.addEventListener('mousedown', () => dragging = true);
    document.addEventListener('mouseup', () => dragging = false);
    document.addEventListener('mousemove', e => { if (dragging) move(e.clientX); });
    slider.addEventListener('touchstart', () => dragging = true, { passive: true });
    document.addEventListener('touchend', () => dragging = false);
    document.addEventListener('touchmove', e => { if (dragging) move(e.touches[0].clientX); }, { passive: true });
    slider.addEventListener('click', e => move(e.clientX));
  });
}

/* ===== CONTACT FORM ===== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(input => {
      const group = input.closest('.form-group');
      if (!input.value.trim()) { group.classList.add('error'); valid = false; }
      else { group.classList.remove('error'); }
    });
    const emailInput = form.querySelector('[type="email"]');
    if (emailInput && emailInput.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      emailInput.closest('.form-group').classList.add('error'); valid = false;
    }
    if (valid) {
      form.style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
    }
  });
}

/* ===== CALENDAR ===== */
function initCalendar() {
  const grid = document.getElementById('calGrid');
  if (!grid) return;
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const avail = (PORTFOLIO.calendarSlots || []).map(s => s.day);
  let html = '';
  for (let i = 0; i < firstDay; i++) html += '<button class="cal-day" disabled></button>';
  for (let d = 1; d <= daysInMonth; d++) {
    const isAvail = avail.includes(d);
    const past = d < now.getDate();
    html += `<button class="cal-day ${past ? 'unavailable' : (isAvail ? 'available' : 'unavailable')}" ${past || !isAvail ? 'disabled' : ''} onclick="selectDay(this,${d})">${d}</button>`;
  }
  grid.innerHTML = html;
  const monthLabel = document.getElementById('calMonth');
  if (monthLabel) monthLabel.textContent = now.toLocaleString('en', { month: 'long', year: 'numeric' });
}
function selectDay(btn, day) {
  document.querySelectorAll('.cal-day.selected').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  showToast(`Selected ${btn.textContent} — booking confirmed!`, 'success');
}

/* ===== SCROLL TO TOP ===== */
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => { btn.classList.toggle('visible', window.scrollY > 500); });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ===== TOAST ===== */
function showToast(msg, type = 'success') {
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 3000);
}

/* ===== SET ACTIVE NAV ===== */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.header-nav a, .mobile-menu-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === 'index.html' && href === 'index.html')) a.classList.add('active');
  });
}

/* ===== PROJECT CARD HTML ===== */
function projectCardHTML(p) {
  const tags = p.tech.slice(0, 4).map(t => `<span class="project-tag">${t}</span>`).join('');
  return `<a href="project.html?id=${p.id}" class="project-card" data-cat="${p.category}">
    <div class="project-card-img"><img src="${p.image}" alt="${p.title}" loading="lazy"><div class="project-card-overlay"><span>View Project →</span></div></div>
    <div class="project-card-body"><h3>${p.title}</h3><div class="project-tags">${tags}</div></div>
  </a>`;
}

/* ===== KEYBOARD EVENTS ===== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    Lightbox.close();
    MobileMenu.close();
  }
  if (document.getElementById('lightbox')?.classList.contains('open')) {
    if (e.key === 'ArrowLeft') Lightbox.prev();
    if (e.key === 'ArrowRight') Lightbox.next();
  }
});

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  Cursor.init();
  initScrollReveal();
  initScrollTop();
  setActiveNav();
});
