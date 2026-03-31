/* ============================================================
   13-fitness  —  FitZone Gym  ·  Application Logic
   ============================================================ */

/* ---------- State (localStorage wrapper) ---------- */
const State = {
  get(k) { try { return JSON.parse(localStorage.getItem('ft_' + k)); } catch { return null; } },
  set(k, v) { localStorage.setItem('ft_' + k, JSON.stringify(v)); },
  remove(k) { localStorage.removeItem('ft_' + k); }
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
  getUser() { return State.get('user') || FT.currentUser; },
  login(email, pass) {
    if (!email) return;
    State.set('user', FT.currentUser);
    Toast.show('Welcome back, ' + FT.currentUser.name + '!', 'success');
    this.closeModal();
    this.updateUI();
  },
  signup(name, email, pass) {
    if (!name || !email) return;
    const u = { ...FT.currentUser, name, email };
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
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === path) link.classList.add('active');
    });
  }
};

/* ---------- Helpers ---------- */
function formatPrice(n) { return '৳' + n.toLocaleString('en-IN'); }

function renderStars(rating, count) {
  const full = Math.floor(rating);
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (rating % 1 >= 0.5) s += '☆';
  return `<span class="stars">${s}</span> <span style="color:var(--text-secondary)">${rating}${count != null ? ' (' + count + ')' : ''}</span>`;
}

function getTrainer(id) { return FT.trainers.find(t => t.id === id); }

function getExercise(id) { return FT.exercises.find(e => e.id === id); }

function getClass(id) { return FT.classes.find(c => c.id === id); }

function intensityBadge(level) {
  return `<span class="intensity-badge intensity-badge-${level}"><span>${level.charAt(0).toUpperCase() + level.slice(1)}</span></span>`;
}

function categoryClass(cat) {
  const map = { Yoga: 'yoga', HIIT: 'hiit', Strength: 'strength', Cardio: 'cardio', CrossFit: 'hiit', Boxing: 'boxing', Dance: 'pilates', Spinning: 'cardio' };
  return map[cat] || 'cardio';
}

/* ---------- Counter Animation ---------- */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = current.toLocaleString('en-IN') + suffix;
    }, 25);
  });
}

/* ---------- Intersection Observer for Counters ---------- */
function observeCounters() {
  const section = document.querySelector('.stat-counter-grid');
  if (!section) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounters(); obs.disconnect(); } });
  }, { threshold: 0.3 });
  obs.observe(section);
}

/* ---------- Bookings ---------- */
const Bookings = {
  get() { return State.get('bookings') || []; },
  add(classId, day, time) {
    const cls = getClass(classId);
    if (!cls) return;
    const bookings = this.get();
    const exists = bookings.find(b => b.classId === classId && b.day === day && b.time === time);
    if (exists) { Toast.show('You already booked this slot', 'warning'); return; }
    bookings.push({ classId, className: cls.name, day, time, bookedAt: new Date().toISOString() });
    State.set('bookings', bookings);
    Toast.show(`Booked ${cls.name} on ${day} at ${time}`, 'success');
  },
  cancel(idx) {
    const bookings = this.get();
    const removed = bookings.splice(idx, 1)[0];
    State.set('bookings', bookings);
    if (removed) Toast.show(`Cancelled ${removed.className}`, 'info');
  }
};

/* ============================================================
   PAGE: Homepage
   ============================================================ */
const HomePage = {
  init() {
    this.renderStats();
    this.renderClasses();
    this.renderTrainers();
    this.renderPlans();
    this.renderTransformations();
    observeCounters();
  },

  renderStats() {
    const el = document.getElementById('statsGrid');
    if (!el) return;
    const stats = [
      { value: 847, suffix: '+', label: 'Active Members' },
      { value: 10, suffix: '+', label: 'Expert Trainers' },
      { value: 50, suffix: '+', label: 'Weekly Classes' },
      { value: 24, suffix: '/7', label: 'Open Hours' }
    ];
    el.innerHTML = stats.map(s => `
      <div class="stat-counter">
        <div class="stat-counter-number" data-count="${s.value}" data-suffix="${s.suffix}">0</div>
        <div class="stat-counter-label">${s.label}</div>
      </div>
    `).join('');
  },

  renderClasses() {
    const el = document.getElementById('popularClasses');
    if (!el) return;
    const popular = FT.classes.slice(0, 4);
    el.innerHTML = popular.map(c => {
      const trainer = getTrainer(c.trainerId);
      return `
        <a href="class.html?id=${c.id}" class="class-card">
          <div class="class-card-image">
            <img src="${c.image}" alt="${c.name}">
            <div class="class-card-badges">${intensityBadge(c.intensity)}</div>
            <span class="class-card-duration">${c.duration} min</span>
          </div>
          <div class="class-card-body">
            <h3>${c.name}</h3>
            <div class="class-card-trainer">
              <img src="${trainer?.avatar || ''}" alt="${trainer?.name || ''}">${trainer?.name || ''}
            </div>
            <div class="class-card-meta">
              <span>${renderStars(c.rating, c.reviewCount)}</span>
            </div>
          </div>
          <div class="class-card-footer">
            <span class="class-card-spots ${c.schedule[0]?.spots <= 5 ? 'low' : ''}">${c.schedule[0]?.spots || 0} spots left</span>
            <span class="badge badge-info">${c.category}</span>
          </div>
        </a>`;
    }).join('');
  },

  renderTrainers() {
    const el = document.getElementById('topTrainers');
    if (!el) return;
    el.innerHTML = FT.trainers.slice(0, 4).map(t => `
      <a href="trainer.html?id=${t.id}" class="trainer-card">
        <img src="${t.avatar}" alt="${t.name}" class="trainer-card-avatar">
        <div class="trainer-card-body">
          <h3>${t.name}</h3>
          <div class="trainer-card-specialty">${t.specialty}</div>
          <div class="trainer-card-meta">
            <span class="trainer-card-rating">${renderStars(t.rating)}</span>
            <span class="trainer-card-experience">${t.experience}y exp</span>
          </div>
        </div>
      </a>
    `).join('');
  },

  renderPlans() {
    const el = document.getElementById('membershipPlans');
    if (!el) return;
    el.innerHTML = FT.membershipPlans.map(p => `
      <div class="pricing-card ${p.popular ? 'popular' : ''}">
        ${p.popular ? '<span class="pricing-card-badge">Most Popular</span>' : ''}
        <div class="pricing-card-name">${p.name}</div>
        <div class="pricing-card-price">
          <span class="pricing-card-amount">${formatPrice(p.price)}</span>
          <span class="pricing-card-period">/${p.period}</span>
        </div>
        <ul class="pricing-card-features">
          ${p.features.slice(0, 4).map(f => `<li><span class="check">✓</span> ${f}</li>`).join('')}
        </ul>
        <a href="membership.html" class="btn ${p.popular ? 'btn-primary' : 'btn-secondary'} btn-md w-full">Choose Plan</a>
      </div>
    `).join('');
  },

  renderTransformations() {
    const el = document.getElementById('transformations');
    if (!el) return;
    el.innerHTML = FT.transformations.map(t => `
      <div class="before-after-card">
        <div class="before-after-images">
          <div class="ba-image"><img src="${t.beforeImage}" alt="Before"><span class="ba-label">Before</span></div>
          <div class="ba-image"><img src="${t.afterImage}" alt="After"><span class="ba-label">After</span></div>
        </div>
        <div class="before-after-body">
          <h4>${t.name}</h4>
          <div class="duration">${t.duration} · ${t.weightChange > 0 ? '+' : ''}${t.weightChange} kg</div>
          <p class="testimonial">${t.testimonial}</p>
        </div>
      </div>
    `).join('');
  }
};

/* ============================================================
   PAGE: Classes (Schedule)
   ============================================================ */
const ClassSchedule = {
  view: 'grid',
  category: 'All',
  intensity: 'All',

  init() {
    this.renderCategoryTabs();
    this.renderViewToggle();
    this.render();
    document.getElementById('intensityFilter')?.addEventListener('change', e => {
      this.intensity = e.target.value;
      this.render();
    });
  },

  renderCategoryTabs() {
    const el = document.getElementById('categoryTabs');
    if (!el) return;
    const categories = ['All', ...new Set(FT.classes.map(c => c.category))];
    el.innerHTML = categories.map(c =>
      `<button class="cat-tab ${c === this.category ? 'active' : ''}" onclick="ClassSchedule.setCategory('${c}')">${c}</button>`
    ).join('');
  },

  renderViewToggle() {
    const el = document.getElementById('viewToggle');
    if (!el) return;
    el.innerHTML = `
      <button class="view-toggle-btn ${this.view === 'grid' ? 'active' : ''}" onclick="ClassSchedule.setView('grid')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg> Grid
      </button>
      <button class="view-toggle-btn ${this.view === 'calendar' ? 'active' : ''}" onclick="ClassSchedule.setView('calendar')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Calendar
      </button>
      <button class="view-toggle-btn ${this.view === 'list' ? 'active' : ''}" onclick="ClassSchedule.setView('list')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> List
      </button>`;
  },

  setCategory(c) {
    this.category = c;
    this.renderCategoryTabs();
    this.render();
  },

  setView(v) {
    this.view = v;
    this.renderViewToggle();
    this.render();
  },

  getFiltered() {
    return FT.classes.filter(c => {
      if (this.category !== 'All' && c.category !== this.category) return false;
      if (this.intensity !== 'All' && c.intensity !== this.intensity.toLowerCase()) return false;
      return true;
    });
  },

  render() {
    const el = document.getElementById('classesContent');
    if (!el) return;
    const filtered = this.getFiltered();

    if (this.view === 'grid') {
      el.innerHTML = `<div class="class-grid">${filtered.map(c => this.renderCard(c)).join('')}</div>`;
    } else if (this.view === 'calendar') {
      el.innerHTML = this.renderCalendar(filtered);
    } else {
      el.innerHTML = `<div class="exercise-list">${filtered.map(c => this.renderListItem(c)).join('')}</div>`;
    }

    const countEl = document.getElementById('classCount');
    if (countEl) countEl.textContent = `${filtered.length} classes`;
  },

  renderCard(c) {
    const trainer = getTrainer(c.trainerId);
    return `
      <a href="class.html?id=${c.id}" class="class-card">
        <div class="class-card-image">
          <img src="${c.image}" alt="${c.name}">
          <div class="class-card-badges">${intensityBadge(c.intensity)}</div>
          <span class="class-card-duration">${c.duration} min</span>
        </div>
        <div class="class-card-body">
          <h3>${c.name}</h3>
          <div class="class-card-trainer">
            <img src="${trainer?.avatar || ''}" alt="${trainer?.name || ''}">${trainer?.name || ''}
          </div>
          <div class="class-card-meta">
            <span>${renderStars(c.rating, c.reviewCount)}</span>
          </div>
        </div>
        <div class="class-card-footer">
          <span class="class-card-spots ${c.schedule[0]?.spots <= 5 ? 'low' : ''}">${c.schedule[0]?.spots || 0} spots left</span>
          <span class="badge badge-info">${c.category}</span>
        </div>
      </a>`;
  },

  renderListItem(c) {
    const trainer = getTrainer(c.trainerId);
    const schedText = c.schedule.map(s => `${s.day} ${s.time}`).join(', ');
    return `
      <a href="class.html?id=${c.id}" class="exercise-card" style="text-decoration:none;color:inherit;cursor:pointer">
        <div class="exercise-card-number" style="background:var(--primary-light);color:var(--primary)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
        </div>
        <div class="exercise-card-info">
          <h4>${c.name}</h4>
          <span class="muscle-group">${trainer?.name || ''} · ${schedText}</span>
        </div>
        <div class="exercise-card-details">
          ${intensityBadge(c.intensity)}
          <span class="sets-reps">${c.duration} min</span>
          <span>${renderStars(c.rating)}</span>
        </div>
      </a>`;
  },

  renderCalendar(classes) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let grid = days.map(d => {
      const blocks = [];
      classes.forEach(c => {
        c.schedule.forEach(s => {
          if (s.day === d) {
            blocks.push(`<div class="class-calendar-block ${categoryClass(c.category)}" onclick="location.href='class.html?id=${c.id}'" title="${c.name}">
              <div class="class-calendar-block-time">${s.time}</div>
              ${c.name}
            </div>`);
          }
        });
      });
      blocks.sort((a, b) => a.localeCompare(b));
      return `<div class="class-calendar-day">
        <div class="class-calendar-day-header">${d}</div>
        ${blocks.join('')}
      </div>`;
    }).join('');

    return `<div class="class-calendar">
      <div class="class-calendar-header">
        <h3>Weekly Schedule</h3>
      </div>
      <div class="class-calendar-grid">${grid}</div>
    </div>`;
  }
};

/* ============================================================
   PAGE: Class Detail
   ============================================================ */
const ClassDetail = {
  init() {
    const id = new URLSearchParams(location.search).get('id');
    const cls = getClass(id);
    if (!cls) return;
    const trainer = getTrainer(cls.trainerId);

    document.getElementById('className').textContent = cls.name;
    document.getElementById('classCategory').textContent = cls.category;
    document.getElementById('classDuration').textContent = cls.duration + ' min';
    document.getElementById('classIntensity').innerHTML = intensityBadge(cls.intensity);
    document.getElementById('classRating').innerHTML = renderStars(cls.rating, cls.reviewCount);
    document.getElementById('classImage').src = cls.image;
    document.getElementById('classImage').alt = cls.name;
    document.getElementById('classDescription').textContent = cls.description;

    if (cls.equipment?.length) {
      document.getElementById('classEquipment').innerHTML = cls.equipment.map(e => `<span class="badge badge-info">${e}</span>`).join(' ');
    }

    const scheduleEl = document.getElementById('classSchedule');
    if (scheduleEl) {
      scheduleEl.innerHTML = cls.schedule.map((s, i) => {
        const pct = Math.round((1 - s.spots / s.maxSpots) * 100);
        return `<div class="exercise-card">
          <div class="exercise-card-number">${s.day}</div>
          <div class="exercise-card-info">
            <h4>${s.time}</h4>
            <div style="width:100%;height:6px;background:var(--border);border-radius:var(--radius-full);margin-top:4px;overflow:hidden">
              <div style="height:100%;width:${pct}%;background:${s.spots <= 5 ? 'var(--danger)' : 'var(--primary)'};border-radius:var(--radius-full)"></div>
            </div>
            <span class="muscle-group ${s.spots <= 5 ? 'text-danger' : ''}">${s.spots}/${s.maxSpots} spots left</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="Bookings.add('${cls.id}','${s.day}','${s.time}');this.textContent='Booked ✓';this.disabled=true">Book</button>
        </div>`;
      }).join('');
    }

    if (trainer) {
      document.getElementById('trainerCard').innerHTML = `
        <a href="trainer.html?id=${trainer.id}" style="display:flex;align-items:center;gap:var(--sp-4);text-decoration:none;color:inherit">
          <img src="${trainer.avatar}" alt="${trainer.name}" style="width:56px;height:56px;border-radius:var(--radius-full);object-fit:cover">
          <div>
            <h4>${trainer.name}</h4>
            <div class="text-secondary text-sm">${trainer.specialty} · ${trainer.experience}y exp</div>
            <div>${renderStars(trainer.rating, trainer.reviewCount)}</div>
          </div>
        </a>`;
    }

    // Related reviews
    const reviews = FT.reviews.filter(r => r.trainerId === cls.trainerId).slice(0, 3);
    const revEl = document.getElementById('classReviews');
    if (revEl && reviews.length) {
      revEl.innerHTML = reviews.map(r => `
        <div class="review-card">
          <div class="review-card-header">
            <div class="review-avatar">${r.userName.charAt(0)}</div>
            <div><div class="review-author">${r.userName}</div><div class="review-date">${r.date}</div></div>
          </div>
          <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
          <div class="review-text">${r.comment}</div>
        </div>
      `).join('');
    }
  }
};

/* ============================================================
   PAGE: Trainers Directory
   ============================================================ */
const TrainerDirectory = {
  search: '',
  specialty: 'All',
  sort: 'rating',

  init() {
    document.getElementById('trainerSearch')?.addEventListener('input', e => { this.search = e.target.value.toLowerCase(); this.render(); });
    document.getElementById('specialtyFilter')?.addEventListener('change', e => { this.specialty = e.target.value; this.render(); });
    document.getElementById('trainerSort')?.addEventListener('change', e => { this.sort = e.target.value; this.render(); });
    this.render();
  },

  render() {
    const el = document.getElementById('trainerGrid');
    if (!el) return;
    let trainers = [...FT.trainers];
    if (this.search) trainers = trainers.filter(t => t.name.toLowerCase().includes(this.search) || t.specialty.toLowerCase().includes(this.search));
    if (this.specialty !== 'All') trainers = trainers.filter(t => t.specialty.includes(this.specialty));
    if (this.sort === 'rating') trainers.sort((a, b) => b.rating - a.rating);
    else if (this.sort === 'experience') trainers.sort((a, b) => b.experience - a.experience);
    else if (this.sort === 'name') trainers.sort((a, b) => a.name.localeCompare(b.name));

    el.innerHTML = trainers.map(t => `
      <a href="trainer.html?id=${t.id}" class="trainer-card">
        <img src="${t.avatar}" alt="${t.name}" class="trainer-card-avatar">
        <div class="trainer-card-body">
          <h3>${t.name}</h3>
          <div class="trainer-card-specialty">${t.specialty}</div>
          <div class="trainer-card-meta">
            <span class="trainer-card-rating">${renderStars(t.rating)}</span>
            <span class="trainer-card-experience">${t.experience}y exp</span>
          </div>
        </div>
      </a>
    `).join('');
  }
};

/* ============================================================
   PAGE: Trainer Profile
   ============================================================ */
const TrainerProfile = {
  init() {
    const id = new URLSearchParams(location.search).get('id');
    const trainer = FT.trainers.find(t => t.id === id);
    if (!trainer) return;

    document.getElementById('trainerAvatar').src = trainer.avatar;
    document.getElementById('trainerName').textContent = trainer.name;
    document.getElementById('trainerSpecialty').textContent = trainer.specialty;
    document.getElementById('trainerRating').textContent = trainer.rating;
    document.getElementById('trainerReviews').textContent = trainer.reviewCount + ' reviews';
    document.getElementById('trainerExperience').textContent = trainer.experience + ' years';

    // Tabs
    document.querySelectorAll('.trainer-profile-tab').forEach(tab => {
      tab.onclick = () => {
        document.querySelectorAll('.trainer-profile-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.trainer-tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('tab-' + tab.dataset.tab)?.classList.add('active');
      };
    });

    // About
    document.getElementById('trainerBio').textContent = trainer.bio;
    document.getElementById('trainerSpecialties').innerHTML = trainer.specialties.map(s => `<span class="badge badge-info">${s}</span>`).join(' ');
    document.getElementById('trainerSchedule').innerHTML = Object.entries(trainer.schedule).map(([day, time]) =>
      `<div class="exercise-card"><div class="exercise-card-number">${day.substring(0, 3)}</div><div class="exercise-card-info"><h4>${time}</h4></div></div>`
    ).join('');

    // Classes
    const trainerClasses = FT.classes.filter(c => c.trainerId === trainer.id);
    document.getElementById('trainerClasses').innerHTML = trainerClasses.map(c => `
      <a href="class.html?id=${c.id}" class="class-card" style="max-width:320px">
        <div class="class-card-image"><img src="${c.image}" alt="${c.name}">
          <div class="class-card-badges">${intensityBadge(c.intensity)}</div>
          <span class="class-card-duration">${c.duration} min</span>
        </div>
        <div class="class-card-body">
          <h3>${c.name}</h3>
          <div class="class-card-meta"><span>${renderStars(c.rating, c.reviewCount)}</span></div>
        </div>
      </a>
    `).join('');

    // Reviews
    const reviews = FT.reviews.filter(r => r.trainerId === trainer.id);
    document.getElementById('trainerReviewsList').innerHTML = reviews.map(r => `
      <div class="review-card">
        <div class="review-card-header">
          <div class="review-avatar">${r.userName.charAt(0)}</div>
          <div><div class="review-author">${r.userName}</div><div class="review-date">${r.date}</div></div>
        </div>
        <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
        <div class="review-text">${r.comment}</div>
      </div>
    `).join('');

    // Certifications
    document.getElementById('trainerCerts').innerHTML = trainer.certifications.map(c =>
      `<div class="exercise-card"><div class="exercise-card-number" style="background:var(--success-light);color:var(--success)">✓</div><div class="exercise-card-info"><h4>${c}</h4></div></div>`
    ).join('');

    // Book Session
    document.getElementById('bookSessionBtn')?.addEventListener('click', () => {
      document.getElementById('bookSessionModal')?.classList.add('active');
    });
    document.getElementById('closeBookModal')?.addEventListener('click', () => {
      document.getElementById('bookSessionModal')?.classList.remove('active');
    });
    document.getElementById('bookSessionForm')?.addEventListener('submit', e => {
      e.preventDefault();
      Toast.show(`Session booked with ${trainer.name}!`, 'success');
      document.getElementById('bookSessionModal')?.classList.remove('active');
    });
  }
};

/* ============================================================
   PAGE: Membership
   ============================================================ */
const Membership = {
  yearly: false,

  init() {
    this.renderPlans();
    this.renderComparison();
    this.renderFAQ();
    document.getElementById('billingToggle')?.addEventListener('click', () => {
      this.yearly = !this.yearly;
      this.renderPlans();
      const btn = document.getElementById('billingToggle');
      btn.classList.toggle('yearly', this.yearly);
      document.getElementById('labelMonthly')?.classList.toggle('active', !this.yearly);
      document.getElementById('labelYearly')?.classList.toggle('active', this.yearly);
    });
    document.getElementById('signupFormEl')?.addEventListener('submit', e => {
      e.preventDefault();
      Toast.show('Membership signup successful! Welcome to FitZone.', 'success');
    });
  },

  renderPlans() {
    const el = document.getElementById('pricingGrid');
    if (!el) return;
    el.innerHTML = FT.membershipPlans.map(p => {
      const price = this.yearly ? p.yearlyPrice : p.price;
      const period = this.yearly ? 'year' : 'month';
      return `
        <div class="pricing-card ${p.popular ? 'popular' : ''}">
          ${p.popular ? '<span class="pricing-card-badge">Most Popular</span>' : ''}
          <div class="pricing-card-name">${p.name}</div>
          <div class="pricing-card-price">
            <span class="pricing-card-amount">${formatPrice(price)}</span>
            <span class="pricing-card-period">/${period}</span>
          </div>
          ${this.yearly ? `<div class="text-success text-sm font-semibold mb-4">Save 20% with yearly billing</div>` : ''}
          <ul class="pricing-card-features">
            ${p.features.map(f => `<li><span class="check">✓</span> ${f}</li>`).join('')}
          </ul>
          <button class="btn ${p.popular ? 'btn-primary' : 'btn-secondary'} btn-md w-full" onclick="document.getElementById('signupSection')?.scrollIntoView({behavior:'smooth'})">Choose ${p.name}</button>
        </div>`;
    }).join('');
  },

  renderComparison() {
    const el = document.getElementById('comparisonTable');
    if (!el) return;
    const features = [
      ['Gym Floor Access', 'Limited', '24/7', '24/7'],
      ['Group Classes', '2/week', 'Unlimited', 'Unlimited'],
      ['Personal Workout Plan', '✗', '✓', '✓'],
      ['Body Composition Scan', '✗', 'Monthly', 'Monthly'],
      ['Nutrition Guidance', '✗', '✓', '✓'],
      ['Sauna & Steam Room', '✗', '✓', '✓'],
      ['PT Sessions', '✗', '✗', '4/month'],
      ['Priority Booking', '✗', '✗', '✓'],
      ['Recovery Zone', '✗', '✗', '✓'],
      ['Dedicated Locker', '✗', '✗', '✓']
    ];
    el.innerHTML = `
      <table class="feature-comparison">
        <thead><tr><th>Feature</th><th>Basic</th><th>Pro</th><th>Elite</th></tr></thead>
        <tbody>${features.map(f => `
          <tr>
            <td>${f[0]}</td>
            ${f.slice(1).map(v => `<td>${v === '✓' ? '<span class="check-icon">✓</span>' : v === '✗' ? '<span class="cross-icon">✗</span>' : v}</td>`).join('')}
          </tr>
        `).join('')}</tbody>
      </table>`;
  },

  renderFAQ() {
    const el = document.getElementById('faqList');
    if (!el) return;
    const faqs = [
      { q: 'Can I freeze my membership?', a: 'Yes, you can freeze your membership for up to 30 days per year at no extra cost. Contact the front desk or use your dashboard.' },
      { q: 'Is there a joining fee?', a: 'No joining fee! The monthly or yearly price is all you pay. We occasionally run promotions with discounted first months.' },
      { q: 'Can I switch plans?', a: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect from your next billing cycle.' },
      { q: 'What is the cancellation policy?', a: 'Monthly plans can be cancelled anytime with 7 days notice. Yearly plans can be cancelled with a 30-day notice and prorated refund.' },
      { q: 'Do you offer corporate discounts?', a: 'Yes! We offer 15-25% discounts for groups of 10+ from the same organisation. Contact us for a custom quote.' },
      { q: 'Are there student discounts?', a: 'Students get 20% off any plan with a valid student ID. This applies to both monthly and yearly billing.' }
    ];
    el.innerHTML = faqs.map((f, i) => `
      <div class="faq-item ${i === 0 ? 'active' : ''}">
        <button class="faq-question" onclick="this.parentElement.classList.toggle('active')">
          ${f.q}
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="faq-answer"><div class="faq-answer-inner">${f.a}</div></div>
      </div>
    `).join('');
  }
};

/* ============================================================
   PAGE: BMI Calculator
   ============================================================ */
const BMICalculator = {
  init() {
    document.getElementById('bmiForm')?.addEventListener('submit', e => {
      e.preventDefault();
      this.calculate();
    });
    this.renderHistory();
  },

  calculate() {
    const weight = parseFloat(document.getElementById('bmiWeight')?.value);
    const height = parseFloat(document.getElementById('bmiHeight')?.value) / 100;
    const age = parseInt(document.getElementById('bmiAge')?.value) || 25;
    const gender = document.getElementById('bmiGender')?.value || 'male';

    if (!weight || !height || height <= 0) { Toast.show('Please enter valid values', 'warning'); return; }

    const bmi = weight / (height * height);
    let category, catClass;
    if (bmi < 18.5) { category = 'Underweight'; catClass = 'underweight'; }
    else if (bmi < 25) { category = 'Normal'; catClass = 'normal'; }
    else if (bmi < 30) { category = 'Overweight'; catClass = 'overweight'; }
    else { category = 'Obese'; catClass = 'obese'; }

    document.getElementById('bmiValue').textContent = bmi.toFixed(1);
    const catEl = document.getElementById('bmiCategory');
    catEl.textContent = category;
    catEl.className = 'bmi-result-category ' + catClass;

    // Gauge marker position (BMI 15-40 range)
    const pct = Math.min(100, Math.max(0, ((bmi - 15) / 25) * 100));
    const marker = document.getElementById('bmiMarker');
    if (marker) marker.style.left = pct + '%';

    // Body stats
    const bmr = gender === 'male'
      ? 88.362 + (13.397 * weight) + (4.799 * height * 100) - (5.677 * age)
      : 447.593 + (9.247 * weight) + (3.098 * height * 100) - (4.330 * age);
    const bodyFat = gender === 'male'
      ? (1.20 * bmi) + (0.23 * age) - 16.2
      : (1.20 * bmi) + (0.23 * age) - 5.4;

    document.getElementById('bmrValue').textContent = Math.round(bmr) + ' kcal';
    document.getElementById('bodyFatValue').textContent = Math.max(0, bodyFat).toFixed(1) + '%';
    document.getElementById('idealWeight').textContent = (22 * height * height).toFixed(1) + ' kg';
    document.getElementById('waterIntake').textContent = (weight * 0.033).toFixed(1) + ' L';

    // Calorie table
    const levels = [
      { name: 'Sedentary', factor: 1.2 },
      { name: 'Light Exercise', factor: 1.375 },
      { name: 'Moderate Exercise', factor: 1.55 },
      { name: 'Heavy Exercise', factor: 1.725 },
      { name: 'Athlete', factor: 1.9 }
    ];
    const tableEl = document.getElementById('calorieTableBody');
    if (tableEl) {
      tableEl.innerHTML = levels.map(l => {
        const cal = Math.round(bmr * l.factor);
        return `<tr><td>${l.name}</td><td>${cal} kcal</td><td>${cal - 500} kcal</td><td>${cal + 500} kcal</td></tr>`;
      }).join('');
    }

    document.getElementById('bmiResultSection')?.classList.remove('hidden');

    // Save to history
    const history = State.get('bmiHistory') || [];
    history.push({ date: new Date().toISOString().split('T')[0], weight, bmi: parseFloat(bmi.toFixed(1)) });
    State.set('bmiHistory', history);
    this.renderHistory();
  },

  renderHistory() {
    const el = document.getElementById('bmiChart');
    if (!el) return;
    const history = State.get('bmiHistory') || FT.bmiHistory;
    if (!history.length) { el.innerHTML = '<p class="text-secondary">No history yet</p>'; return; }

    const canvas = el.querySelector('canvas') || document.createElement('canvas');
    canvas.width = el.clientWidth || 600;
    canvas.height = 200;
    if (!el.querySelector('canvas')) el.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const w = canvas.width, h = canvas.height;
    const pad = { top: 20, right: 20, bottom: 30, left: 40 };
    const pw = w - pad.left - pad.right, ph = h - pad.top - pad.bottom;

    const bmis = history.map(e => e.bmi);
    const minB = Math.floor(Math.min(...bmis)) - 1;
    const maxB = Math.ceil(Math.max(...bmis)) + 1;

    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border').trim() || '#E2E8F0';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = pad.top + (ph / 4) * i;
      ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#64748B';
      ctx.font = '11px Inter';
      ctx.textAlign = 'right';
      ctx.fillText((maxB - ((maxB - minB) / 4) * i).toFixed(1), pad.left - 6, y + 4);
    }

    // Plot
    ctx.beginPath();
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#7C3AED';
    ctx.lineWidth = 2.5;
    history.forEach((entry, i) => {
      const x = pad.left + (pw / Math.max(1, history.length - 1)) * i;
      const y = pad.top + ph - ((entry.bmi - minB) / (maxB - minB)) * ph;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Dots + labels
    history.forEach((entry, i) => {
      const x = pad.left + (pw / Math.max(1, history.length - 1)) * i;
      const y = pad.top + ph - ((entry.bmi - minB) / (maxB - minB)) * ph;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#7C3AED';
      ctx.fill();
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#64748B';
      ctx.textAlign = 'center';
      ctx.font = '10px Inter';
      ctx.fillText(entry.date.substring(5), x, h - 8);
    });
  }
};

/* ============================================================
   PAGE: Workout Planner
   ============================================================ */
const WorkoutPlanner = {
  activePlan: 'wp1',
  timerInterval: null,
  timerSeconds: 0,
  timerTarget: 0,

  init() {
    this.renderPlanList();
    this.renderExercises();
    document.getElementById('addExerciseBtn')?.addEventListener('click', () => this.openExerciseModal());
    document.getElementById('closeExerciseModal')?.addEventListener('click', () => this.closeExerciseModal());
    document.getElementById('startWorkout')?.addEventListener('click', () => this.startWorkout());
  },

  renderPlanList() {
    const el = document.getElementById('planList');
    if (!el) return;
    el.innerHTML = FT.workoutPlans.map(p => {
      const icons = { Strength: '💪', Conditioning: '🏃' };
      return `<div class="workout-plan-item ${p.id === this.activePlan ? 'active' : ''}" onclick="WorkoutPlanner.selectPlan('${p.id}')">
        <div class="workout-plan-item-icon">${icons[p.category] || '🏋️'}</div>
        <div><strong>${p.name}</strong><div class="text-xs text-secondary">${p.duration} min · ${p.difficulty}</div></div>
      </div>`;
    }).join('');
  },

  selectPlan(id) {
    this.activePlan = id;
    this.renderPlanList();
    this.renderExercises();
  },

  renderExercises() {
    const el = document.getElementById('exerciseList');
    if (!el) return;
    const plan = FT.workoutPlans.find(p => p.id === this.activePlan);
    if (!plan) return;

    document.getElementById('planTitle').textContent = plan.name;
    document.getElementById('planDesc').textContent = plan.description;

    el.innerHTML = plan.exercises.map((pe, i) => {
      const ex = getExercise(pe.exerciseId);
      if (!ex) return '';
      return `
        <div class="exercise-card" id="ex-${i}">
          <div class="exercise-card-number">${i + 1}</div>
          <div class="exercise-card-info">
            <h4>${ex.name}</h4>
            <span class="muscle-group">${ex.muscleGroup} · ${ex.equipment}</span>
          </div>
          <div class="exercise-card-details">
            <span class="sets-reps">${pe.sets} × ${pe.reps}</span>
            ${pe.weight ? `<span class="weight">${pe.weight} kg</span>` : ''}
            <span>${pe.rest}s rest</span>
          </div>
          <div class="exercise-card-actions">
            <button class="btn btn-ghost btn-icon btn-sm" onclick="WorkoutPlanner.markComplete(${i})" title="Mark complete">✓</button>
          </div>
        </div>`;
    }).join('');
  },

  markComplete(idx) {
    const card = document.getElementById('ex-' + idx);
    if (card) card.classList.toggle('completed');
  },

  openExerciseModal() {
    document.getElementById('exerciseModal')?.classList.add('active');
    this.renderExerciseLibrary();
  },

  closeExerciseModal() {
    document.getElementById('exerciseModal')?.classList.remove('active');
  },

  renderExerciseLibrary() {
    const el = document.getElementById('exerciseLibrary');
    if (!el) return;
    const groups = [...new Set(FT.exercises.map(e => e.muscleGroup))];
    el.innerHTML = groups.map(g => `
      <h4 class="mt-4 mb-2">${g}</h4>
      ${FT.exercises.filter(e => e.muscleGroup === g).map(e => `
        <div class="exercise-card" style="cursor:pointer" onclick="WorkoutPlanner.addExercise('${e.id}')">
          <div class="exercise-card-number" style="font-size:16px">+</div>
          <div class="exercise-card-info">
            <h4>${e.name}</h4>
            <span class="muscle-group">${e.equipment}</span>
          </div>
        </div>
      `).join('')}
    `).join('');
  },

  addExercise(exId) {
    Toast.show('Exercise added to plan', 'success');
    this.closeExerciseModal();
  },

  startWorkout() {
    const plan = FT.workoutPlans.find(p => p.id === this.activePlan);
    if (!plan) return;
    const timerSection = document.getElementById('workoutTimerSection');
    if (!timerSection) return;
    timerSection.classList.remove('hidden');
    this.timerSeconds = 0;
    this.timerTarget = plan.duration * 60;
    document.getElementById('timerDisplay').textContent = '00:00';
    document.getElementById('timerLabel').textContent = plan.name + ' — In Progress';
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      const m = Math.floor(this.timerSeconds / 60).toString().padStart(2, '0');
      const s = (this.timerSeconds % 60).toString().padStart(2, '0');
      document.getElementById('timerDisplay').textContent = m + ':' + s;
      const pct = Math.min(100, (this.timerSeconds / this.timerTarget) * 100);
      document.getElementById('timerProgress').style.width = pct + '%';
    }, 1000);
  },

  stopWorkout() {
    clearInterval(this.timerInterval);
    const plan = FT.workoutPlans.find(p => p.id === this.activePlan);
    Toast.show(`Workout complete! ${Math.floor(this.timerSeconds / 60)} min ${plan?.name || ''}`, 'success');
    document.getElementById('timerLabel').textContent = 'Workout Complete!';
  },

  resetTimer() {
    clearInterval(this.timerInterval);
    this.timerSeconds = 0;
    document.getElementById('timerDisplay').textContent = '00:00';
    document.getElementById('timerProgress').style.width = '0%';
    document.getElementById('timerLabel').textContent = 'Ready';
  }
};

/* ============================================================
   PAGE: Member Dashboard
   ============================================================ */
const MemberDashboard = {
  activeSection: 'overview',

  init() {
    this.renderSidebar();
    this.renderOverview();
  },

  renderSidebar() {
    const links = [
      { id: 'overview', icon: '📊', label: 'Overview' },
      { id: 'classes', icon: '🗓️', label: 'My Classes' },
      { id: 'workouts', icon: '🏋️', label: 'Workouts' },
      { id: 'progress', icon: '📈', label: 'Progress' },
      { id: 'goals', icon: '🎯', label: 'Goals' },
      { id: 'achievements', icon: '🏆', label: 'Achievements' },
      { id: 'profile', icon: '👤', label: 'Profile' }
    ];
    const el = document.getElementById('dashSidebar');
    if (!el) return;
    el.innerHTML = links.map(l =>
      `<button class="sidebar-link ${l.id === this.activeSection ? 'active' : ''}" onclick="MemberDashboard.switchSection('${l.id}')">
        <span class="icon">${l.icon}</span><span class="label">${l.label}</span>
      </button>`
    ).join('');
  },

  switchSection(id) {
    this.activeSection = id;
    this.renderSidebar();
    const main = document.getElementById('dashMain');
    if (!main) return;
    switch (id) {
      case 'overview': this.renderOverview(); break;
      case 'classes': this.renderClasses(); break;
      case 'workouts': this.renderWorkouts(); break;
      case 'progress': this.renderProgress(); break;
      case 'goals': this.renderGoals(); break;
      case 'achievements': this.renderAchievements(); break;
      case 'profile': this.renderProfile(); break;
    }
  },

  renderOverview() {
    const main = document.getElementById('dashMain');
    if (!main) return;
    const user = FT.currentUser;
    const bookings = Bookings.get();

    main.innerHTML = `
      <h2 class="mb-6">Welcome back, ${user.name}!</h2>

      <div class="streak-counter mb-8">
        <div class="streak-counter-fire">🔥</div>
        <div class="streak-counter-value">${user.streak}</div>
        <div class="streak-counter-label">Day Streak</div>
        <div class="streak-counter-sub">Keep it going! Your best: ${user.streak + 3} days</div>
      </div>

      <div class="stats-grid mb-8">
        <div class="stat-card">
          <div class="stat-card-header"><span class="stat-card-label">Total Workouts</span><div class="stat-card-icon streak">🏋️</div></div>
          <div class="stat-card-value">${user.totalWorkouts}</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-header"><span class="stat-card-label">Current BMI</span><div class="stat-card-icon members">⚖️</div></div>
          <div class="stat-card-value">${user.bmi}</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-header"><span class="stat-card-label">This Week</span><div class="stat-card-icon classes">📅</div></div>
          <div class="stat-card-value">${FT.workoutLog.filter(w => { const d = new Date(w.date); const now = new Date(); return d >= new Date(now.setDate(now.getDate() - 7)); }).length}</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-header"><span class="stat-card-label">Calories Burned</span><div class="stat-card-icon revenue">🔥</div></div>
          <div class="stat-card-value">${FT.workoutLog.reduce((s, w) => s + w.caloriesBurned, 0).toLocaleString('en-IN')}</div>
        </div>
      </div>

      <div class="grid-2 gap-6 mb-8">
        <div class="progress-chart-container">
          <h3>Weekly Activity</h3>
          <canvas id="weeklyChart"></canvas>
        </div>
        <div>
          <h3 class="mb-4">Upcoming Classes</h3>
          ${bookings.length ? bookings.slice(0, 3).map((b, i) => `
            <div class="exercise-card mb-2">
              <div class="exercise-card-number" style="background:var(--primary-light);color:var(--primary)">📅</div>
              <div class="exercise-card-info"><h4>${b.className}</h4><span class="muscle-group">${b.day} at ${b.time}</span></div>
              <button class="btn btn-ghost btn-sm" onclick="Bookings.cancel(${i});MemberDashboard.renderOverview()">Cancel</button>
            </div>
          `).join('') : '<p class="text-secondary">No upcoming classes. <a href="classes.html" style="color:var(--primary)">Browse classes</a></p>'}
        </div>
      </div>

      <h3 class="mb-4">Recent Workouts</h3>
      <div class="exercise-list">
        ${FT.workoutLog.slice(0, 4).map(w => `
          <div class="exercise-card">
            <div class="exercise-card-number" style="background:var(--success-light);color:var(--success)">✓</div>
            <div class="exercise-card-info"><h4>${w.planName}</h4><span class="muscle-group">${w.date} · ${w.duration} min</span></div>
            <div class="exercise-card-details"><span class="weight">${w.caloriesBurned} kcal</span></div>
          </div>
        `).join('')}
      </div>
    `;

    this.drawWeeklyChart();
  },

  drawWeeklyChart() {
    const canvas = document.getElementById('weeklyChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.clientWidth - 48;
    canvas.height = 200;
    const w = canvas.width, h = canvas.height;
    const pad = { top: 10, right: 10, bottom: 30, left: 10 };

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const data = [1, 0, 1, 1, 1, 0, 1]; // simplified activity
    const barW = (w - pad.left - pad.right) / 7 - 12;
    const maxVal = Math.max(...data, 1);

    ctx.clearRect(0, 0, w, h);
    days.forEach((d, i) => {
      const x = pad.left + i * ((w - pad.left - pad.right) / 7) + 6;
      const barH = (data[i] / maxVal) * (h - pad.top - pad.bottom - 10);
      const y = h - pad.bottom - barH;

      ctx.fillStyle = data[i] > 0
        ? (getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#7C3AED')
        : (getComputedStyle(document.documentElement).getPropertyValue('--border').trim() || '#E2E8F0');
      ctx.beginPath();
      ctx.roundRect(x, y, barW, barH || 4, 4);
      ctx.fill();

      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#64748B';
      ctx.font = '11px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(d, x + barW / 2, h - 8);
    });
  },

  renderClasses() {
    const main = document.getElementById('dashMain');
    if (!main) return;
    const bookings = Bookings.get();
    main.innerHTML = `
      <h2 class="mb-6">My Booked Classes</h2>
      ${bookings.length ? `<div class="exercise-list">${bookings.map((b, i) => `
        <div class="exercise-card">
          <div class="exercise-card-number" style="background:var(--primary-light);color:var(--primary)">📅</div>
          <div class="exercise-card-info"><h4>${b.className}</h4><span class="muscle-group">${b.day} at ${b.time}</span></div>
          <button class="btn btn-danger btn-sm" onclick="Bookings.cancel(${i});MemberDashboard.renderClasses()">Cancel</button>
        </div>
      `).join('')}</div>` : '<div class="empty-state"><div class="empty-state-icon">📅</div><h3>No classes booked</h3><p>Browse our schedule to find your perfect class.</p><a href="classes.html" class="btn btn-primary btn-md">Browse Classes</a></div>'}
    `;
  },

  renderWorkouts() {
    const main = document.getElementById('dashMain');
    if (!main) return;
    main.innerHTML = `
      <h2 class="mb-6">Workout History</h2>
      <div class="exercise-list">
        ${FT.workoutLog.map(w => `
          <div class="exercise-card">
            <div class="exercise-card-number" style="background:var(--success-light);color:var(--success)">✓</div>
            <div class="exercise-card-info">
              <h4>${w.planName}</h4>
              <span class="muscle-group">${w.date} · ${w.exercises.length} exercises</span>
            </div>
            <div class="exercise-card-details">
              <span>${w.duration} min</span>
              <span class="weight">${w.caloriesBurned} kcal</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderProgress() {
    const main = document.getElementById('dashMain');
    if (!main) return;
    main.innerHTML = `
      <h2 class="mb-6">Progress Tracking</h2>
      <div class="progress-chart-container mb-8">
        <h3>BMI History</h3>
        <div id="progressBmiChart"></div>
      </div>
      <div class="progress-chart-container">
        <h3>Weight History</h3>
        <div id="progressWeightChart"></div>
      </div>
    `;
    this.drawProgressChart('progressBmiChart', FT.bmiHistory.map(e => ({ label: e.date.substring(5), value: e.bmi })), 'BMI');
    this.drawProgressChart('progressWeightChart', FT.bmiHistory.map(e => ({ label: e.date.substring(5), value: e.weight })), 'kg');
  },

  drawProgressChart(containerId, data, unit) {
    const container = document.getElementById(containerId);
    if (!container || !data.length) return;
    const canvas = document.createElement('canvas');
    canvas.width = container.clientWidth || 500;
    canvas.height = 200;
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const pad = { top: 20, right: 20, bottom: 30, left: 45 };
    const pw = w - pad.left - pad.right, ph = h - pad.top - pad.bottom;

    const vals = data.map(d => d.value);
    const minV = Math.floor(Math.min(...vals)) - 1;
    const maxV = Math.ceil(Math.max(...vals)) + 1;

    for (let i = 0; i <= 4; i++) {
      const y = pad.top + (ph / 4) * i;
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border').trim() || '#E2E8F0';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#64748B';
      ctx.font = '11px Inter';
      ctx.textAlign = 'right';
      ctx.fillText((maxV - ((maxV - minV) / 4) * i).toFixed(1), pad.left - 6, y + 4);
    }

    ctx.beginPath();
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#7C3AED';
    ctx.lineWidth = 2.5;
    data.forEach((d, i) => {
      const x = pad.left + (pw / Math.max(1, data.length - 1)) * i;
      const y = pad.top + ph - ((d.value - minV) / (maxV - minV)) * ph;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();

    data.forEach((d, i) => {
      const x = pad.left + (pw / Math.max(1, data.length - 1)) * i;
      const y = pad.top + ph - ((d.value - minV) / (maxV - minV)) * ph;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#7C3AED';
      ctx.fill();
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#64748B';
      ctx.textAlign = 'center';
      ctx.font = '10px Inter';
      ctx.fillText(d.label, x, h - 8);
    });
  },

  renderGoals() {
    const main = document.getElementById('dashMain');
    if (!main) return;
    const colors = ['violet', 'cyan', 'green', 'orange'];
    main.innerHTML = `
      <h2 class="mb-6">My Goals</h2>
      <div class="goal-grid">
        ${FT.goals.map((g, i) => `
          <div class="goal-card">
            <div class="goal-card-header">
              <span class="goal-card-title">${g.title}</span>
              <span class="goal-card-value">${g.current}/${g.target} ${g.unit}</span>
            </div>
            <div class="goal-card-progress">
              <div class="goal-card-progress-bar ${colors[i % colors.length]}" style="width:${g.progress}%"></div>
            </div>
            <div class="flex justify-between items-center">
              <span class="goal-card-percentage">${g.progress}%</span>
              <span class="text-xs text-secondary">Deadline: ${g.deadline}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderAchievements() {
    const main = document.getElementById('dashMain');
    if (!main) return;
    main.innerHTML = `
      <h2 class="mb-6">Achievements</h2>
      <div class="achievement-grid">
        ${FT.achievements.map(a => {
          const unlocked = !!a.unlockedDate;
          return `
            <div class="achievement-badge ${unlocked ? 'unlocked' : 'locked'}">
              <div class="achievement-badge-icon">${a.icon}</div>
              <div class="achievement-badge-name">${a.title}</div>
              <div class="achievement-badge-desc">${a.description}</div>
              ${unlocked ? `<div class="achievement-badge-date">Unlocked ${a.unlockedDate}</div>` : `<div class="achievement-badge-date">${a.requirement}</div>`}
            </div>`;
        }).join('')}
      </div>
    `;
  },

  renderProfile() {
    const main = document.getElementById('dashMain');
    if (!main) return;
    const user = Auth.getUser();
    main.innerHTML = `
      <h2 class="mb-6">Profile</h2>
      <div class="card card-no-hover" style="max-width:560px;padding:var(--sp-8)">
        <div class="flex items-center gap-4 mb-6">
          <div class="review-avatar" style="width:64px;height:64px;font-size:24px">${user.name.charAt(0)}</div>
          <div>
            <h3>${user.name}</h3>
            <span class="badge badge-new">${user.plan} Member</span>
          </div>
        </div>
        <form onsubmit="event.preventDefault();Toast.show('Profile updated','success')">
          <div class="form-group"><label class="form-label">Name</label><input class="form-input" value="${user.name}"></div>
          <div class="form-group"><label class="form-label">Email</label><input class="form-input" type="email" value="${user.email}"></div>
          <div class="form-group"><label class="form-label">Phone</label><input class="form-input" value="${user.phone || ''}"></div>
          <button class="btn btn-primary btn-md">Save Changes</button>
        </form>
      </div>
    `;
  }
};

/* ============================================================
   PAGE: Admin Dashboard
   ============================================================ */
const AdminDashboard = {
  activeSection: 'overview',

  init() {
    this.renderSidebar();
    this.renderOverview();
  },

  renderSidebar() {
    const links = [
      { id: 'overview', icon: '📊', label: 'Dashboard' },
      { id: 'classes', icon: '🗓️', label: 'Classes' },
      { id: 'trainers', icon: '👥', label: 'Trainers' },
      { id: 'members', icon: '🏃', label: 'Members' }
    ];
    const el = document.getElementById('adminSidebar');
    if (!el) return;
    el.innerHTML = links.map(l =>
      `<button class="sidebar-link ${l.id === this.activeSection ? 'active' : ''}" onclick="AdminDashboard.switchSection('${l.id}')">
        <span class="icon">${l.icon}</span><span class="label">${l.label}</span>
      </button>`
    ).join('');
  },

  switchSection(id) {
    this.activeSection = id;
    this.renderSidebar();
    switch (id) {
      case 'overview': this.renderOverview(); break;
      case 'classes': this.renderClasses(); break;
      case 'trainers': this.renderTrainers(); break;
      case 'members': this.renderMembers(); break;
    }
  },

  renderOverview() {
    const main = document.getElementById('adminMain');
    if (!main) return;
    const s = FT.adminStats;
    main.innerHTML = `
      <h2 class="mb-6">Dashboard Overview</h2>
      <div class="stats-grid mb-8">
        <div class="stat-card">
          <div class="stat-card-header"><span class="stat-card-label">Active Members</span><div class="stat-card-icon members">🏃</div></div>
          <div class="stat-card-value">${s.activeMembers}</div>
          <div class="stat-card-change up">↑ ${s.newSignupsThisMonth} new this month</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-header"><span class="stat-card-label">Today's Check-ins</span><div class="stat-card-icon classes">📋</div></div>
          <div class="stat-card-value">${s.todayCheckIns}</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-header"><span class="stat-card-label">Monthly Revenue</span><div class="stat-card-icon revenue">💰</div></div>
          <div class="stat-card-value">${formatPrice(s.monthlyRevenue)}</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-header"><span class="stat-card-label">Trainer Utilisation</span><div class="stat-card-icon streak">🎯</div></div>
          <div class="stat-card-value">${s.trainerUtilisation}%</div>
        </div>
      </div>

      <div class="grid-2 gap-6 mb-8">
        <div class="card card-no-hover p-6">
          <h3 class="mb-4">Membership Distribution</h3>
          <div class="exercise-list">
            <div class="exercise-card"><div class="exercise-card-number" style="background:var(--primary-light);color:var(--primary)">B</div><div class="exercise-card-info"><h4>Basic</h4><span class="muscle-group">${s.membershipDistribution.basic} members</span></div><span class="font-semibold">${Math.round(s.membershipDistribution.basic / s.activeMembers * 100)}%</span></div>
            <div class="exercise-card"><div class="exercise-card-number" style="background:var(--secondary-light);color:var(--secondary)">P</div><div class="exercise-card-info"><h4>Pro</h4><span class="muscle-group">${s.membershipDistribution.pro} members</span></div><span class="font-semibold">${Math.round(s.membershipDistribution.pro / s.activeMembers * 100)}%</span></div>
            <div class="exercise-card"><div class="exercise-card-number" style="background:var(--streak-light);color:var(--streak)">E</div><div class="exercise-card-info"><h4>Elite</h4><span class="muscle-group">${s.membershipDistribution.elite} members</span></div><span class="font-semibold">${Math.round(s.membershipDistribution.elite / s.activeMembers * 100)}%</span></div>
          </div>
        </div>
        <div class="card card-no-hover p-6">
          <h3 class="mb-4">Quick Stats</h3>
          <div class="exercise-list">
            <div class="exercise-card"><div class="exercise-card-info"><h4>Class Attendance (This Week)</h4></div><span class="font-semibold">${s.classAttendance.thisWeek}</span><span class="stat-card-change up">↑ ${s.classAttendance.change}%</span></div>
            <div class="exercise-card"><div class="exercise-card-info"><h4>Equipment Status</h4></div><span class="font-semibold">${s.equipmentStatus.operational}/${s.equipmentStatus.total}</span><span class="badge badge-pending">${s.equipmentStatus.maintenance} maintenance</span></div>
            <div class="exercise-card"><div class="exercise-card-info"><h4>Churn Rate</h4></div><span class="font-semibold">${s.churnRate}%</span></div>
          </div>
        </div>
      </div>
    `;
  },

  renderClasses() {
    const main = document.getElementById('adminMain');
    if (!main) return;
    main.innerHTML = `
      <h2 class="mb-6">Class Management</h2>
      <div class="table-responsive">
        <table class="data-table">
          <thead><tr><th>Class</th><th>Category</th><th>Trainer</th><th>Duration</th><th>Intensity</th><th>Rating</th></tr></thead>
          <tbody>${FT.classes.map(c => {
            const tr = getTrainer(c.trainerId);
            return `<tr><td><strong>${c.name}</strong></td><td><span class="badge badge-info">${c.category}</span></td><td>${tr?.name || ''}</td><td>${c.duration} min</td><td>${intensityBadge(c.intensity)}</td><td>${renderStars(c.rating)}</td></tr>`;
          }).join('')}</tbody>
        </table>
      </div>
    `;
  },

  renderTrainers() {
    const main = document.getElementById('adminMain');
    if (!main) return;
    main.innerHTML = `
      <h2 class="mb-6">Trainer Management</h2>
      <div class="table-responsive">
        <table class="data-table">
          <thead><tr><th>Trainer</th><th>Specialty</th><th>Experience</th><th>Rating</th><th>Reviews</th><th>Classes</th></tr></thead>
          <tbody>${FT.trainers.map(t => `
            <tr>
              <td><div class="flex items-center gap-3"><img src="${t.avatar}" style="width:32px;height:32px;border-radius:50%"><strong>${t.name}</strong></div></td>
              <td>${t.specialty}</td><td>${t.experience}y</td><td>${renderStars(t.rating)}</td><td>${t.reviewCount}</td><td>${t.classIds.length}</td>
            </tr>
          `).join('')}</tbody>
        </table>
      </div>
    `;
  },

  renderMembers() {
    const main = document.getElementById('adminMain');
    if (!main) return;
    const members = [
      { name: 'Tahsan Islam', plan: 'Pro', joined: '2024-06-15', status: 'Active', workouts: 48 },
      { name: 'Arif Hoque', plan: 'Elite', joined: '2024-01-10', status: 'Active', workouts: 156 },
      { name: 'Nadia Sultana', plan: 'Pro', joined: '2024-03-22', status: 'Active', workouts: 89 },
      { name: 'Tanvir Ahmed', plan: 'Elite', joined: '2023-08-05', status: 'Active', workouts: 201 },
      { name: 'Sabina Akter', plan: 'Basic', joined: '2025-01-14', status: 'Active', workouts: 24 },
      { name: 'Rashed Karim', plan: 'Pro', joined: '2024-09-01', status: 'Active', workouts: 67 }
    ];
    main.innerHTML = `
      <h2 class="mb-6">Member Management</h2>
      <div class="table-responsive">
        <table class="data-table">
          <thead><tr><th>Member</th><th>Plan</th><th>Joined</th><th>Status</th><th>Workouts</th></tr></thead>
          <tbody>${members.map(m => `
            <tr>
              <td><strong>${m.name}</strong></td>
              <td><span class="badge ${m.plan === 'Elite' ? 'badge-new' : m.plan === 'Pro' ? 'badge-info' : 'badge-pending'}">${m.plan}</span></td>
              <td>${m.joined}</td>
              <td><span class="badge badge-active">${m.status}</span></td>
              <td>${m.workouts}</td>
            </tr>
          `).join('')}</tbody>
        </table>
      </div>
    `;
  }
};

/* ============================================================
   Global Init
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  Auth.updateUI();
  Drawer.init();
  Header.init();

  const page = document.body.dataset.page;
  switch (page) {
    case 'home': HomePage.init(); break;
    case 'classes': ClassSchedule.init(); break;
    case 'class-detail': ClassDetail.init(); break;
    case 'trainers': TrainerDirectory.init(); break;
    case 'trainer': TrainerProfile.init(); break;
    case 'membership': Membership.init(); break;
    case 'bmi': BMICalculator.init(); break;
    case 'planner': WorkoutPlanner.init(); break;
    case 'dashboard': MemberDashboard.init(); break;
    case 'admin': AdminDashboard.init(); break;
  }
});
