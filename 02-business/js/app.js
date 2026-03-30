/* ============================================================
   02-BUSINESS — CORE APPLICATION JS
   ============================================================ */

/* ── THEME ──────────────────────────────────────────────── */
const Theme = {
  init() {
    const saved = localStorage.getItem('nexgen_theme');
    const prefer = window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
    const theme = saved || prefer;
    document.documentElement.setAttribute('data-theme', theme);
    this.updateIcon(theme);
  },
  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('nexgen_theme', next);
    this.updateIcon(next);
  },
  updateIcon(theme) {
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.innerHTML = theme === 'dark'
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    });
  }
};

/* ── HEADER SCROLL ──────────────────────────────────────── */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  const isHero = document.querySelector('.hero');
  function update() {
    const scrolled = window.scrollY > 50;
    header.classList.toggle('header--transparent', !scrolled && !!isHero);
    header.classList.toggle('header--solid', scrolled || !isHero);
  }
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* ── MOBILE MENU ────────────────────────────────────────── */
const MobileMenu = {
  open() {
    document.getElementById('mobileOverlay')?.classList.add('open');
    document.getElementById('mobileMenu')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  },
  close() {
    document.getElementById('mobileOverlay')?.classList.remove('open');
    document.getElementById('mobileMenu')?.classList.remove('open');
    document.body.style.overflow = '';
  }
};

/* ── SCROLL REVEAL ──────────────────────────────────────── */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(el => observer.observe(el));
}

/* ── STATS COUNTER ──────────────────────────────────────── */
function initStatsCounter() {
  const statEls = document.querySelectorAll('[data-count]');
  if (!statEls.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const step = target / 60;
        const interval = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(interval); }
          el.textContent = Math.floor(current) + suffix;
        }, 33);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  statEls.forEach(el => observer.observe(el));
}

/* ── TESTIMONIAL CAROUSEL ──────────────────────────────── */
function initTestimonials() {
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.testimonial-dot');
  if (!cards.length) return;
  let current = 0;
  let autoTimer;

  function show(idx) {
    cards.forEach((c, i) => c.classList.toggle('active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    current = idx;
  }

  function next() { show((current + 1) % cards.length); }
  function prev() { show((current - 1 + cards.length) % cards.length); }

  document.querySelector('.testimonial-next')?.addEventListener('click', () => { next(); resetAuto(); });
  document.querySelector('.testimonial-prev')?.addEventListener('click', () => { prev(); resetAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { show(i); resetAuto(); }));

  function resetAuto() { clearInterval(autoTimer); autoTimer = setInterval(next, 5000); }
  autoTimer = setInterval(next, 5000);

  const container = document.querySelector('.testimonials');
  container?.addEventListener('mouseenter', () => clearInterval(autoTimer));
  container?.addEventListener('mouseleave', () => { autoTimer = setInterval(next, 5000); });
}

/* ── ACCORDION ──────────────────────────────────────────── */
function initAccordion() {
  document.querySelectorAll('.accordion-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const answer = item.querySelector('.accordion-answer');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.accordion-answer').style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* ── PRICING TOGGLE ─────────────────────────────────────── */
function initPricingToggle() {
  const toggle = document.querySelector('.toggle-switch');
  if (!toggle) return;
  let isYearly = false;

  toggle.addEventListener('click', () => {
    isYearly = !isYearly;
    toggle.classList.toggle('yearly', isYearly);
    document.querySelectorAll('.pricing-toggle span').forEach(s => {
      s.classList.toggle('active', (s.dataset.period === 'yearly') === isYearly);
    });
    document.querySelectorAll('[data-monthly]').forEach(el => {
      const monthly = el.dataset.monthly;
      const yearly = el.dataset.yearly;
      el.textContent = isYearly ? yearly : monthly;
    });
    document.querySelectorAll('[data-period-label]').forEach(el => {
      el.textContent = isYearly ? '/year' : '/month';
    });
  });
}

/* ── BACK TO TOP ────────────────────────────────────────── */
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── TOAST ──────────────────────────────────────────────── */
const Toast = {
  show(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    const icons = { success: '✓', error: '✗', info: 'ℹ' };
    toast.innerHTML = `<span>${icons[type] || 'ℹ'}</span> ${message}`;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
  }
};

/* ── PORTFOLIO FILTER ──────────────────────────────────── */
function initPortfolioFilter() {
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.project-card');
  if (!pills.length) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.dataset.filter;
      cards.forEach(card => {
        const match = cat === 'all' || card.dataset.category === cat;
        card.style.display = match ? '' : 'none';
        if (match) {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity .4s,transform .4s';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          });
        }
      });
    });
  });
}

/* ── CONTACT FORM ──────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // Validate required fields
    form.querySelectorAll('[required]').forEach(input => {
      const group = input.closest('.form-group');
      if (!input.value.trim()) {
        group.classList.add('invalid');
        valid = false;
      } else {
        group.classList.remove('invalid');
      }
    });

    // Email validation
    const emailInput = form.querySelector('[type="email"]');
    if (emailInput && emailInput.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      emailInput.closest('.form-group').classList.add('invalid');
      valid = false;
    }

    if (valid) {
      form.innerHTML = '<div class="form-success"><div class="check-circle">✓</div><h3>Message Sent!</h3><p>We\'ll get back to you within 24 hours.</p></div>';
    }
  });

  // Real-time validation on blur
  form.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('blur', () => {
      const group = input.closest('.form-group');
      if (input.hasAttribute('required') && !input.value.trim()) {
        group.classList.add('invalid');
      } else {
        group.classList.remove('invalid');
      }
    });
  });
}

/* ── BLOG SEARCH & FILTER ──────────────────────────────── */
function initBlogFilter() {
  const pills = document.querySelectorAll('.blog-filter .filter-pill');
  const cards = document.querySelectorAll('.blog-card');
  const searchInput = document.querySelector('.blog-search input');
  if (!pills.length && !searchInput) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.dataset.filter;
      cards.forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.category === cat) ? '' : 'none';
      });
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase();
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }
}

/* ── SET ACTIVE NAV ─────────────────────────────────────── */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.header-nav a, .mobile-menu-nav a').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === path);
  });
}

/* ── INIT ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  initHeader();
  initScrollReveal();
  initStatsCounter();
  initTestimonials();
  initAccordion();
  initPricingToggle();
  initScrollTop();
  initPortfolioFilter();
  initContactForm();
  initBlogFilter();
  setActiveNav();

  // Mobile overlay close
  document.getElementById('mobileOverlay')?.addEventListener('click', MobileMenu.close);
});
