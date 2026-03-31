/* ============================================================
   11-healthcare  —  MediCare Hospital  ·  Application Logic
   ============================================================ */

/* ---------- State (localStorage wrapper) ---------- */
const State = {
  get(k) { try { return JSON.parse(localStorage.getItem('hc_' + k)); } catch { return null; } },
  set(k, v) { localStorage.setItem('hc_' + k, JSON.stringify(v)); },
  remove(k) { localStorage.removeItem('hc_' + k); }
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
  getUser() { return State.get('user') || HC.currentUser; },
  login(email, pass) {
    if (!email) return;
    State.set('user', HC.currentUser);
    Toast.show('Welcome back, ' + HC.currentUser.name + '!', 'success');
    this.closeModal();
    this.updateUI();
  },
  signup(name, email, pass) {
    if (!name || !email) return;
    const u = { ...HC.currentUser, name, email };
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
  }
};

/* ---------- Stars Helper ---------- */
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '☆';
  return `<span class="stars">${s}</span> <span style="color:var(--text-secondary)">${rating} (${arguments[1] || ''})</span>`;
}

/* ---------- Format BDT ---------- */
function formatBDT(n) {
  if (n >= 10000000) return '৳' + (n / 10000000).toFixed(1) + 'Cr';
  if (n >= 100000) return '৳' + (n / 100000).toFixed(1) + 'L';
  return '৳' + n.toLocaleString('en-IN');
}

/* ---------- Homepage ---------- */
const HomePage = {
  init() {
    this.renderDepartments();
    this.renderDoctors();
    this.renderStats();
    this.renderTestimonials();
    this.renderTips();
  },
  renderDepartments() {
    const c = document.getElementById('deptGrid');
    if (!c) return;
    c.innerHTML = HC.departments.slice(0, 4).map(d => `
      <div class="dept-card" onclick="location.href='departments.html'">
        <div class="dept-card-icon">${d.icon}</div>
        <h3>${d.name}</h3>
        <p>${d.description.substring(0, 80)}...</p>
        <span class="dept-card-count">${d.doctorCount} Doctors</span>
      </div>`).join('');
  },
  renderDoctors() {
    const c = document.getElementById('featuredDoctors');
    if (!c) return;
    c.innerHTML = HC.doctors.filter(d => d.rating >= 4.8).slice(0, 3).map(d => `
      <div class="doctor-card" onclick="location.href='doctor.html?id=${d.id}'">
        <img class="doctor-avatar" src="${d.avatar}" alt="${d.name}">
        <h3>${d.name}</h3>
        <div class="doctor-specialty">${d.specialty}</div>
        <div class="doctor-rating">${renderStars(d.rating, d.reviewCount)}</div>
        <div class="doctor-meta">${d.experience}yr exp · Fee: ৳${d.fee.toLocaleString()}</div>
        <div class="doctor-card-actions">
          <a href="doctor.html?id=${d.id}" class="btn btn-secondary btn-sm">View Profile</a>
          <a href="booking.html?doctor=${d.id}" class="btn btn-primary btn-sm">Book Now</a>
        </div>
      </div>`).join('');
  },
  renderStats() {
    const c = document.getElementById('statsRow');
    if (!c) return;
    const stats = [
      { num: '150+', label: 'Expert Doctors' },
      { num: '50K+', label: 'Happy Patients' },
      { num: '20+', label: 'Departments' },
      { num: '24/7', label: 'Emergency Care' }
    ];
    c.innerHTML = stats.map(s => `<div class="stat-box"><div class="stat-number">${s.num}</div><div class="stat-label">${s.label}</div></div>`).join('');
  },
  renderTestimonials() {
    const track = document.getElementById('testimonialTrack');
    const nav = document.getElementById('testimonialNav');
    if (!track) return;
    track.innerHTML = HC.testimonials.map(t => `
      <div class="testimonial-card"><div class="testimonial-card-inner">
        <img class="testimonial-avatar" src="${t.image}" alt="${t.name}">
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">${t.name}</div>
        <div class="stars" style="margin-top:var(--sp-2)">${'★'.repeat(t.rating)}</div>
      </div></div>`).join('');
    if (nav) {
      nav.innerHTML = HC.testimonials.map((_, i) => `<button class="testimonial-dot${i === 0 ? ' active' : ''}" onclick="HomePage.goSlide(${i})"></button>`).join('');
    }
    this.currentSlide = 0;
    this.autoplay = setInterval(() => this.goSlide((this.currentSlide + 1) % HC.testimonials.length), 8000);
  },
  goSlide(i) {
    this.currentSlide = i;
    const track = document.getElementById('testimonialTrack');
    if (track) track.style.transform = `translateX(-${i * 100}%)`;
    document.querySelectorAll('.testimonial-dot').forEach((d, idx) => d.classList.toggle('active', idx === i));
  },
  renderTips() {
    const c = document.getElementById('tipsGrid');
    if (!c) return;
    c.innerHTML = HC.healthTips.map(t => `
      <div class="tip-card">
        <img src="${t.image}" alt="${t.title}">
        <div class="tip-card-body">
          <h3>${t.title}</h3>
          <p>${t.excerpt}</p>
          <div class="tip-card-meta"><span>${t.readTime}</span><span>${t.date}</span></div>
        </div>
      </div>`).join('');
  }
};

/* ---------- Departments Page ---------- */
const DepartmentsPage = {
  init() {
    const c = document.getElementById('allDepts');
    if (!c) return;
    c.innerHTML = HC.departments.map(d => `
      <div class="dept-card" onclick="location.href='doctors.html?dept=${d.id}'">
        <div class="dept-card-icon">${d.icon}</div>
        <h3>${d.name}</h3>
        <p>${d.description}</p>
        <div style="margin-top:var(--sp-3)">
          <span class="dept-card-count">${d.doctorCount} Doctors</span>
        </div>
        <div style="margin-top:var(--sp-3);font-size:12px;color:var(--text-secondary)">
          <strong>Conditions:</strong> ${d.conditions.join(', ')}
        </div>
      </div>`).join('');
  }
};

/* ---------- Find a Doctor Page ---------- */
const DoctorsPage = {
  currentDept: '', currentAvail: '', currentGender: '', currentSearch: '', currentSort: 'rating',

  init() {
    const params = new URLSearchParams(location.search);
    if (params.get('dept')) { this.currentDept = params.get('dept'); }
    this.render();
  },

  filter(type, value) {
    if (type === 'dept') this.currentDept = value;
    if (type === 'avail') this.currentAvail = value;
    if (type === 'gender') this.currentGender = value;
    this.render();
  },

  search(q) {
    this.currentSearch = q.toLowerCase();
    this.render();
  },

  sort(val) {
    this.currentSort = val;
    this.render();
  },

  getFiltered() {
    let docs = [...HC.doctors];
    if (this.currentDept) docs = docs.filter(d => d.departmentId === this.currentDept);
    if (this.currentGender) docs = docs.filter(d => d.gender === this.currentGender);
    if (this.currentSearch) docs = docs.filter(d => d.name.toLowerCase().includes(this.currentSearch) || d.specialty.toLowerCase().includes(this.currentSearch));
    if (this.currentSort === 'rating') docs.sort((a, b) => b.rating - a.rating);
    else if (this.currentSort === 'experience') docs.sort((a, b) => b.experience - a.experience);
    else if (this.currentSort === 'fee-asc') docs.sort((a, b) => a.fee - b.fee);
    else if (this.currentSort === 'name') docs.sort((a, b) => a.name.localeCompare(b.name));
    return docs;
  },

  render() {
    const c = document.getElementById('doctorList');
    if (!c) return;
    const docs = this.getFiltered();
    const countEl = document.getElementById('doctorCount');
    if (countEl) countEl.textContent = `Showing ${docs.length} Doctor${docs.length !== 1 ? 's' : ''}`;

    c.innerHTML = docs.length ? docs.map(d => `
      <div class="doctor-row">
        <img class="doctor-avatar" src="${d.avatar}" alt="${d.name}">
        <div class="doctor-row-info">
          <h3>${d.name}</h3>
          <div class="doctor-specialty">${d.specialty}</div>
          <div class="doctor-rating">${renderStars(d.rating, d.reviewCount)} · ${d.experience}yr exp</div>
          <div class="doctor-meta" style="margin-top:var(--sp-1)">Next: ${d.nextAvailable} · Fee: ৳${d.fee.toLocaleString()}</div>
        </div>
        <div class="doctor-row-actions">
          <a href="doctor.html?id=${d.id}" class="btn btn-secondary btn-sm">View Profile</a>
          <a href="booking.html?doctor=${d.id}" class="btn btn-primary btn-sm">Book Now</a>
        </div>
      </div>`).join('') : '<p class="text-secondary text-center" style="padding:var(--sp-10)">No doctors found matching your criteria.</p>';

    // Update filter highlights
    document.querySelectorAll('[data-dept]').forEach(el => el.classList.toggle('active', el.dataset.dept === this.currentDept));
  }
};

/* ---------- Doctor Profile Page ---------- */
const DoctorProfile = {
  doctor: null,
  init() {
    const id = new URLSearchParams(location.search).get('id');
    this.doctor = HC.doctors.find(d => d.id === id);
    if (!this.doctor) { document.getElementById('doctorProfileContent').innerHTML = '<p class="text-center" style="padding:var(--sp-10)">Doctor not found.</p>'; return; }
    this.renderHeader();
    this.switchTab('about');
  },
  renderHeader() {
    const d = this.doctor;
    const c = document.getElementById('profileHeaderContent');
    if (!c) return;
    c.innerHTML = `
      <div class="profile-header">
        <img class="doctor-avatar" src="${d.avatar}" alt="${d.name}">
        <div class="profile-header-info">
          <h1>${d.name}, ${d.credentials}</h1>
          <div class="doctor-specialty" style="font-size:15px;margin:var(--sp-2) 0">Senior Consultant — ${d.specialty}</div>
          <div class="doctor-rating" style="margin-bottom:var(--sp-2)">${renderStars(d.rating, d.reviewCount)} · ${d.experience} years experience</div>
          <div style="font-size:14px;color:var(--text-secondary)">🏥 ${HC.site.name} · Gulshan, Dhaka</div>
          <div style="font-size:15px;font-weight:600;margin-top:var(--sp-3)">Consultation Fee: ৳${d.fee.toLocaleString()}</div>
        </div>
        <div class="profile-header-actions">
          <a href="booking.html?doctor=${d.id}" class="btn btn-primary btn-lg">📅 Book Appointment</a>
        </div>
      </div>`;
    document.title = `HomeScout — ${d.name}`;
  },
  switchTab(tab) {
    document.querySelectorAll('.profile-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    const c = document.getElementById('profileTabContent');
    if (!c) return;
    const d = this.doctor;
    if (tab === 'about') {
      c.innerHTML = `
        <h3 style="margin-bottom:var(--sp-4)">About</h3>
        <p style="line-height:1.8;margin-bottom:var(--sp-6)">${d.bio}</p>
        <h4 style="margin-bottom:var(--sp-3)">Languages</h4>
        <div style="display:flex;gap:var(--sp-2);margin-bottom:var(--sp-6)">${d.languages.map(l => `<span class="badge badge-info">${l}</span>`).join('')}</div>
        <h4 style="margin-bottom:var(--sp-3)">Specializations</h4>
        <p class="text-secondary">${d.specialty} — ${HC.departments.find(dep => dep.id === d.departmentId)?.conditions.join(', ')}</p>`;
    } else if (tab === 'schedule') {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      c.innerHTML = `
        <h3 style="margin-bottom:var(--sp-4)">Weekly Schedule</h3>
        <table class="schedule-table">
          <thead><tr>${days.map(dy => `<th>${dy}</th>`).join('')}</tr></thead>
          <tbody><tr>${days.map(dy => {
            const slots = d.schedule[dy];
            return `<td>${slots ? slots.join('<br>') : '<span class="schedule-off">OFF</span>'}</td>`;
          }).join('')}</tr></tbody>
        </table>`;
    } else if (tab === 'reviews') {
      const reviews = HC.reviews.filter(r => r.doctorId === d.id);
      c.innerHTML = `
        <h3 style="margin-bottom:var(--sp-4)">Reviews (${reviews.length})</h3>
        ${reviews.map(r => `
          <div style="background:var(--bg-surface-alt);border-radius:var(--radius-md);padding:var(--sp-5);margin-bottom:var(--sp-4)">
            <div style="display:flex;justify-content:space-between;margin-bottom:var(--sp-2)">
              <strong>${r.author}</strong>
              <span class="text-secondary" style="font-size:13px">${r.date}</span>
            </div>
            <div class="stars" style="margin-bottom:var(--sp-2)">${'★'.repeat(r.rating)}</div>
            <p style="font-size:14px;color:var(--text-secondary)">${r.text}</p>
            ${r.verified ? '<span class="badge badge-confirmed" style="margin-top:var(--sp-2)">Verified Patient</span>' : ''}
          </div>`).join('')}`;
    } else if (tab === 'qualifications') {
      c.innerHTML = `
        <h3 style="margin-bottom:var(--sp-4)">Education & Qualifications</h3>
        <div class="timeline">${d.education.map(e => `
          <div class="timeline-item">
            <div class="timeline-dot appointment">🎓</div>
            <div class="timeline-date">${e.year}</div>
            <div class="timeline-content">
              <strong>${e.degree}</strong>
              <p class="text-secondary" style="font-size:14px">${e.institution}</p>
            </div>
          </div>`).join('')}</div>`;
    }
  }
};

/* ---------- Booking Wizard ---------- */
const BookingWizard = {
  step: 1,
  selectedDoctor: null,
  selectedDate: null,
  selectedTime: null,
  calendarMonth: new Date().getMonth(),
  calendarYear: new Date().getFullYear(),

  init() {
    const params = new URLSearchParams(location.search);
    const docId = params.get('doctor');
    if (docId) {
      this.selectedDoctor = HC.doctors.find(d => d.id === docId);
      if (this.selectedDoctor) this.step = 2;
    }
    this.render();
  },

  goStep(n) {
    if (n > this.step + 1) return;
    this.step = n;
    this.render();
  },

  nextStep() { this.goStep(this.step + 1); },
  prevStep() { if (this.step > 1) this.goStep(this.step - 1); },

  render() {
    // Update stepper
    document.querySelectorAll('.wizard-step').forEach((s, i) => {
      s.classList.remove('active', 'completed');
      if (i + 1 === this.step) s.classList.add('active');
      else if (i + 1 < this.step) s.classList.add('completed');
    });
    document.querySelectorAll('.wizard-line').forEach((l, i) => {
      l.classList.toggle('completed', i + 1 < this.step);
    });

    const c = document.getElementById('wizardContent');
    if (!c) return;

    if (this.step === 1) this.renderStep1(c);
    else if (this.step === 2) this.renderStep2(c);
    else if (this.step === 3) this.renderStep3(c);
    else if (this.step === 4) this.renderStep4(c);
  },

  renderStep1(c) {
    c.innerHTML = `
      <h3 style="margin-bottom:var(--sp-6)">Step 1: Select Doctor</h3>
      <div class="form-group">
        <label class="form-label">Department</label>
        <select class="form-input" id="wizDept" onchange="BookingWizard.filterDoctors()">
          <option value="">All Departments</option>
          ${HC.departments.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
        </select>
      </div>
      <div id="wizDoctorList" class="doctor-grid" style="margin-top:var(--sp-4)"></div>`;
    this.filterDoctors();
  },

  filterDoctors() {
    const dept = document.getElementById('wizDept')?.value;
    const docs = dept ? HC.doctors.filter(d => d.departmentId === dept) : HC.doctors;
    const c = document.getElementById('wizDoctorList');
    if (!c) return;
    c.innerHTML = docs.map(d => `
      <div class="doctor-card${this.selectedDoctor?.id === d.id ? ' selected' : ''}" onclick="BookingWizard.selectDoctor('${d.id}')" style="${this.selectedDoctor?.id === d.id ? 'border-color:var(--primary);background:var(--primary-light)' : ''}">
        <img class="doctor-avatar" src="${d.avatar}" alt="${d.name}">
        <h3>${d.name}</h3>
        <div class="doctor-specialty">${d.specialty}</div>
        <div class="doctor-rating">${renderStars(d.rating, d.reviewCount)}</div>
        <div class="doctor-meta">Fee: ৳${d.fee.toLocaleString()}</div>
      </div>`).join('');
  },

  selectDoctor(id) {
    this.selectedDoctor = HC.doctors.find(d => d.id === id);
    this.selectedDate = null;
    this.selectedTime = null;
    this.nextStep();
  },

  renderStep2(c) {
    c.innerHTML = `
      <h3 style="margin-bottom:var(--sp-6)">Step 2: Select Date & Time</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-8)">
        <div>
          <div class="calendar" id="bookingCalendar"></div>
        </div>
        <div>
          <h4 style="margin-bottom:var(--sp-4)" id="slotsTitle">Select a date first</h4>
          <div class="time-slots" id="bookingSlots"></div>
        </div>
      </div>
      <div style="margin-top:var(--sp-6);display:flex;gap:var(--sp-3)">
        <button class="btn btn-ghost btn-md" onclick="BookingWizard.prevStep()">← Back</button>
        <button class="btn btn-primary btn-md" onclick="BookingWizard.nextStep()" id="step2Next" disabled>Next →</button>
      </div>`;
    this.renderCalendar();
  },

  renderCalendar() {
    const cal = document.getElementById('bookingCalendar');
    if (!cal) return;
    const year = this.calendarYear;
    const month = this.calendarMonth;
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date(); today.setHours(0,0,0,0);

    let html = `
      <div class="calendar-header">
        <button onclick="BookingWizard.changeMonth(-1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><polyline points="15 18 9 12 15 6"/></svg></button>
        <h3>${monthNames[month]} ${year}</h3>
        <button onclick="BookingWizard.changeMonth(1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><polyline points="9 18 15 12 9 6"/></svg></button>
      </div>
      <div class="calendar-weekdays"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div>
      <div class="calendar-days">`;

    for (let i = 0; i < firstDay; i++) html += '<div class="calendar-day empty"></div>';
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const isPast = date < today;
      const isToday = date.getTime() === today.getTime();
      const isSelected = this.selectedDate && date.toISOString().slice(0,10) === this.selectedDate;
      const cls = ['calendar-day'];
      if (isPast) cls.push('disabled');
      if (isToday) cls.push('today');
      if (isSelected) cls.push('selected');
      html += `<div class="${cls.join(' ')}" ${!isPast ? `onclick="BookingWizard.selectDate('${date.toISOString().slice(0,10)}')"` : ''}>${d}</div>`;
    }
    html += '</div>';
    cal.innerHTML = html;
  },

  changeMonth(dir) {
    this.calendarMonth += dir;
    if (this.calendarMonth > 11) { this.calendarMonth = 0; this.calendarYear++; }
    if (this.calendarMonth < 0) { this.calendarMonth = 11; this.calendarYear--; }
    this.renderCalendar();
  },

  selectDate(dateStr) {
    this.selectedDate = dateStr;
    this.selectedTime = null;
    this.renderCalendar();
    this.renderTimeSlots();
  },

  renderTimeSlots() {
    const c = document.getElementById('bookingSlots');
    const title = document.getElementById('slotsTitle');
    if (!c || !this.selectedDoctor || !this.selectedDate) return;
    const slots = HC.generateTimeSlots(this.selectedDoctor.schedule, this.selectedDate);
    title.textContent = slots.length ? `Available Slots (${this.selectedDate})` : 'No slots available on this date';

    // Simulate some booked slots
    const bookedSlots = ['10:30', '14:00', '16:30'];
    c.innerHTML = slots.map(s => {
      const booked = bookedSlots.includes(s);
      return `<div class="time-slot${booked ? ' booked' : ''}${this.selectedTime === s ? ' selected' : ''}" ${!booked ? `onclick="BookingWizard.selectTime('${s}')"` : ''}>${s}</div>`;
    }).join('');
  },

  selectTime(time) {
    this.selectedTime = time;
    this.renderTimeSlots();
    const btn = document.getElementById('step2Next');
    if (btn) btn.disabled = false;
  },

  renderStep3(c) {
    if (!this.selectedTime) { this.step = 2; this.render(); return; }
    const user = Auth.getUser();
    c.innerHTML = `
      <h3 style="margin-bottom:var(--sp-6)">Step 3: Patient Information</h3>
      <div style="max-width:500px">
        <div class="form-group"><label class="form-label">Full Name *</label><input class="form-input" id="patName" value="${user.name}"></div>
        <div class="form-group"><label class="form-label">Phone *</label><input class="form-input" id="patPhone" value="${user.phone}" placeholder="01XXXXXXXXX"></div>
        <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="patEmail" value="${user.email}"></div>
        <div class="form-group"><label class="form-label">Symptoms / Notes</label><textarea class="form-textarea" id="patSymptoms" rows="4" placeholder="Briefly describe your symptoms or reason for visit..."></textarea></div>
        <div style="display:flex;gap:var(--sp-3)">
          <button class="btn btn-ghost btn-md" onclick="BookingWizard.prevStep()">← Back</button>
          <button class="btn btn-primary btn-md" onclick="BookingWizard.validateStep3()">Next →</button>
        </div>
      </div>`;
  },

  validateStep3() {
    const name = document.getElementById('patName')?.value.trim();
    const phone = document.getElementById('patPhone')?.value.trim();
    if (!name || !phone) { Toast.show('Please fill in required fields', 'error'); return; }
    if (!/^01\d{9}$/.test(phone)) { Toast.show('Please enter a valid BD phone number (01XXXXXXXXX)', 'error'); return; }
    this.patientInfo = { name, phone, email: document.getElementById('patEmail')?.value, symptoms: document.getElementById('patSymptoms')?.value };
    this.nextStep();
  },

  renderStep4(c) {
    const d = this.selectedDoctor;
    c.innerHTML = `
      <h3 style="margin-bottom:var(--sp-6)">Step 4: Confirm & Pay</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-8)">
        <div>
          <div class="booking-summary">
            <h4 style="margin-bottom:var(--sp-4)">Booking Summary</h4>
            <div class="summary-row"><span class="summary-label">Doctor</span><span class="summary-value">${d.name}</span></div>
            <div class="summary-row"><span class="summary-label">Department</span><span class="summary-value">${d.specialty}</span></div>
            <div class="summary-row"><span class="summary-label">Date</span><span class="summary-value">${this.selectedDate}</span></div>
            <div class="summary-row"><span class="summary-label">Time</span><span class="summary-value">${this.selectedTime}</span></div>
            <div class="summary-row"><span class="summary-label">Patient</span><span class="summary-value">${this.patientInfo.name}</span></div>
            <div class="summary-row" style="font-size:16px"><span class="summary-label">Consultation Fee</span><span class="summary-value" style="color:var(--primary)">৳${d.fee.toLocaleString()}</span></div>
          </div>
        </div>
        <div>
          <h4 style="margin-bottom:var(--sp-4)">Payment Method</h4>
          <div class="payment-methods">
            <label class="payment-option selected"><input type="radio" name="payment" value="bkash" checked onchange="this.closest('.payment-methods').querySelectorAll('.payment-option').forEach(p=>p.classList.remove('selected'));this.closest('.payment-option').classList.add('selected')"> bKash</label>
            <label class="payment-option"><input type="radio" name="payment" value="nagad" onchange="this.closest('.payment-methods').querySelectorAll('.payment-option').forEach(p=>p.classList.remove('selected'));this.closest('.payment-option').classList.add('selected')"> Nagad</label>
            <label class="payment-option"><input type="radio" name="payment" value="card" onchange="this.closest('.payment-methods').querySelectorAll('.payment-option').forEach(p=>p.classList.remove('selected'));this.closest('.payment-option').classList.add('selected')"> Credit/Debit Card</label>
            <label class="payment-option"><input type="radio" name="payment" value="counter" onchange="this.closest('.payment-methods').querySelectorAll('.payment-option').forEach(p=>p.classList.remove('selected'));this.closest('.payment-option').classList.add('selected')"> Pay at Counter</label>
          </div>
        </div>
      </div>
      <div style="margin-top:var(--sp-6);display:flex;gap:var(--sp-3)">
        <button class="btn btn-ghost btn-md" onclick="BookingWizard.prevStep()">← Back</button>
        <button class="btn btn-primary btn-lg" onclick="BookingWizard.confirmBooking()">✓ Confirm Booking</button>
      </div>`;
  },

  confirmBooking() {
    const apptId = 'a' + Date.now();
    const appt = {
      id: apptId, doctorId: this.selectedDoctor.id, patientId: 'u1',
      date: this.selectedDate, time: this.selectedTime,
      status: 'confirmed', symptoms: this.patientInfo?.symptoms || '', notes: '', prescription: null
    };
    const appts = State.get('appointments') || [];
    appts.push(appt);
    State.set('appointments', appts);

    const c = document.getElementById('wizardContent');
    c.innerHTML = `
      <div class="text-center" style="padding:var(--sp-10)">
        <div style="font-size:64px;margin-bottom:var(--sp-4)">✅</div>
        <h2 style="color:var(--secondary);margin-bottom:var(--sp-4)">Appointment Confirmed!</h2>
        <p class="text-secondary" style="margin-bottom:var(--sp-2)">Confirmation #: ${apptId.toUpperCase()}</p>
        <p style="margin-bottom:var(--sp-6)">${this.selectedDoctor.name} · ${this.selectedDate} at ${this.selectedTime}</p>
        <div style="display:flex;gap:var(--sp-3);justify-content:center">
          <a href="patient-dashboard.html" class="btn btn-primary btn-md">Go to Dashboard</a>
          <a href="index.html" class="btn btn-secondary btn-md">Back to Home</a>
        </div>
      </div>`;
    Toast.show('Appointment booked successfully!', 'success');
  }
};

/* ---------- Patient Dashboard ---------- */
const PatientDashboard = {
  currentSection: 'overview',

  init() {
    this.renderSidebar();
    this.switchSection('overview');
  },

  renderSidebar() {
    const links = document.querySelectorAll('.sidebar-link[data-section]');
    links.forEach(l => l.addEventListener('click', () => this.switchSection(l.dataset.section)));
  },

  switchSection(section) {
    this.currentSection = section;
    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.toggle('active', l.dataset.section === section));
    const c = document.getElementById('dashContent');
    if (!c) return;

    if (section === 'overview') this.renderOverview(c);
    else if (section === 'appointments') this.renderAppointments(c);
    else if (section === 'prescriptions') this.renderPrescriptions(c);
    else if (section === 'labs') this.renderLabs(c);
    else if (section === 'vaccinations') this.renderVaccinations(c);
    else if (section === 'profile') this.renderProfile(c);
  },

  renderOverview(c) {
    const user = Auth.getUser();
    const upcoming = HC.appointments.filter(a => a.status === 'confirmed' || a.status === 'pending');
    const recentRx = HC.prescriptions.slice(0, 1);
    const recentLabs = HC.labResults.slice(0, 2);

    c.innerHTML = `
      <h2 style="margin-bottom:var(--sp-6)">Welcome, ${user.name}</h2>
      <h3 style="margin-bottom:var(--sp-4)">Upcoming Appointments</h3>
      <div style="display:flex;flex-direction:column;gap:var(--sp-4);margin-bottom:var(--sp-8)">
        ${upcoming.map(a => {
          const doc = HC.doctors.find(d => d.id === a.doctorId);
          return `<div class="appt-card">
            <img class="doctor-avatar" src="${doc.avatar}" alt="${doc.name}" style="width:48px;height:48px">
            <div class="appt-card-info">
              <strong>${doc.name}</strong> · ${doc.specialty}
              <div class="text-secondary" style="font-size:13px;margin-top:var(--sp-1)">${a.date} at ${a.time}</div>
            </div>
            <span class="badge badge-${a.status}">${a.status}</span>
            <div class="appt-card-actions">
              <button class="btn btn-ghost btn-sm" onclick="PatientDashboard.cancelAppt('${a.id}')">Cancel</button>
              <a href="appointment.html?id=${a.id}" class="btn btn-secondary btn-sm">View</a>
            </div>
          </div>`;
        }).join('')}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-6)">
        <div>
          <h3 style="margin-bottom:var(--sp-4)">Recent Prescriptions</h3>
          ${recentRx.map(rx => {
            const doc = HC.doctors.find(d => d.id === rx.doctorId);
            return rx.medicines.map(m => `
              <div class="rx-card" style="margin-bottom:var(--sp-3)">
                <div><strong>${m.name} ${m.dosage}</strong><div class="text-secondary" style="font-size:13px">${m.frequency} · Dr. ${doc.name.replace('Dr. ','')}</div></div>
                <span class="badge badge-${m.status}">${m.status}</span>
              </div>`).join('');
          }).join('')}
        </div>
        <div>
          <h3 style="margin-bottom:var(--sp-4)">Recent Lab Results</h3>
          ${recentLabs.map(l => `
            <div class="lab-card" style="margin-bottom:var(--sp-3)">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <strong>${l.testName}</strong>
                <span class="badge badge-${l.status}">${l.status}</span>
              </div>
              <div class="text-secondary" style="font-size:13px;margin-top:var(--sp-1)">${l.date}</div>
            </div>`).join('')}
        </div>
      </div>`;
  },

  renderAppointments(c) {
    const all = HC.appointments;
    c.innerHTML = `
      <h2 style="margin-bottom:var(--sp-6)">Appointments</h2>
      <div class="tabs" style="margin-bottom:var(--sp-6)">
        <button class="tab active" onclick="PatientDashboard.filterAppts('all',this)">All</button>
        <button class="tab" onclick="PatientDashboard.filterAppts('upcoming',this)">Upcoming</button>
        <button class="tab" onclick="PatientDashboard.filterAppts('completed',this)">Past</button>
        <button class="tab" onclick="PatientDashboard.filterAppts('cancelled',this)">Cancelled</button>
      </div>
      <div id="apptList">${this.renderApptList(all)}</div>`;
  },

  filterAppts(filter, btn) {
    if (btn) { btn.closest('.tabs').querySelectorAll('.tab').forEach(t=>t.classList.remove('active')); btn.classList.add('active'); }
    let appts = HC.appointments;
    if (filter === 'upcoming') appts = appts.filter(a => a.status === 'confirmed' || a.status === 'pending');
    else if (filter === 'completed') appts = appts.filter(a => a.status === 'completed');
    else if (filter === 'cancelled') appts = appts.filter(a => a.status === 'cancelled');
    document.getElementById('apptList').innerHTML = this.renderApptList(appts);
  },

  renderApptList(appts) {
    return appts.map(a => {
      const doc = HC.doctors.find(d => d.id === a.doctorId);
      return `<div class="appt-card" style="margin-bottom:var(--sp-4)">
        <img class="doctor-avatar" src="${doc.avatar}" alt="${doc.name}" style="width:48px;height:48px">
        <div class="appt-card-info">
          <strong>${doc.name}</strong> · ${doc.specialty}
          <div class="text-secondary" style="font-size:13px">${a.date} at ${a.time}</div>
          ${a.symptoms ? `<div class="text-secondary" style="font-size:12px;margin-top:var(--sp-1)">Symptoms: ${a.symptoms}</div>` : ''}
        </div>
        <span class="badge badge-${a.status}">${a.status}</span>
      </div>`;
    }).join('') || '<p class="text-secondary">No appointments found.</p>';
  },

  cancelAppt(id) {
    if (!confirm('Are you sure you want to cancel this appointment?')) return;
    const a = HC.appointments.find(ap => ap.id === id);
    if (a) { a.status = 'cancelled'; Toast.show('Appointment cancelled', 'info'); this.switchSection('overview'); }
  },

  renderPrescriptions(c) {
    c.innerHTML = `
      <h2 style="margin-bottom:var(--sp-6)">Prescriptions</h2>
      ${HC.prescriptions.map(rx => {
        const doc = HC.doctors.find(d => d.id === rx.doctorId);
        return `<div class="card card-no-hover" style="margin-bottom:var(--sp-4)">
          <div class="card-header" style="display:flex;justify-content:space-between">
            <strong>Prescribed by ${doc.name}</strong><span class="text-secondary">${rx.date}</span>
          </div>
          <div class="card-body">
            <table class="data-table">
              <thead><tr><th>Medicine</th><th>Dosage</th><th>Frequency</th><th>Duration</th><th>Status</th></tr></thead>
              <tbody>${rx.medicines.map(m => `
                <tr><td>${m.name}</td><td>${m.dosage}</td><td>${m.frequency}</td><td>${m.duration}</td><td><span class="badge badge-${m.status}">${m.status}</span></td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>`;
      }).join('')}`;
  },

  renderLabs(c) {
    c.innerHTML = `
      <h2 style="margin-bottom:var(--sp-6)">Lab Results</h2>
      ${HC.labResults.map(l => `
        <div class="card card-no-hover" style="margin-bottom:var(--sp-4);cursor:pointer" onclick="PatientDashboard.showLabDetail('${l.id}')">
          <div class="card-body" style="display:flex;justify-content:space-between;align-items:center">
            <div>
              <strong>${l.testName}</strong>
              <div class="text-secondary" style="font-size:13px">${l.date} · Ordered by ${HC.doctors.find(d=>d.id===l.orderedBy)?.name}</div>
            </div>
            <span class="badge badge-${l.status}">${l.status}</span>
          </div>
        </div>`).join('')}
      <div id="labDetailModal"></div>`;
  },

  showLabDetail(id) {
    const lab = HC.labResults.find(l => l.id === id);
    if (!lab) return;
    const modal = document.getElementById('labDetailModal');
    modal.innerHTML = `
      <div class="modal-overlay active" onclick="if(event.target===this)this.classList.remove('active')">
        <div class="modal">
          <div class="modal-header"><h3>${lab.testName}</h3><button class="btn btn-icon btn-ghost" onclick="this.closest('.modal-overlay').classList.remove('active')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>
          <div class="modal-body">
            <p class="text-secondary" style="margin-bottom:var(--sp-4)">Date: ${lab.date} · Status: <span class="badge badge-${lab.status}">${lab.status}</span></p>
            <table class="data-table">
              <thead><tr><th>Parameter</th><th>Value</th><th>Unit</th><th>Reference</th><th>Status</th></tr></thead>
              <tbody>${lab.results.map(r => `
                <tr><td>${r.parameter}</td><td><strong>${r.value}</strong></td><td>${r.unit}</td><td>${r.range}</td><td><span class="badge badge-${r.status === 'high' ? 'critical' : 'normal'}">${r.status}</span></td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;
  },

  renderVaccinations(c) {
    c.innerHTML = `
      <h2 style="margin-bottom:var(--sp-6)">Vaccination Records</h2>
      <table class="data-table">
        <thead><tr><th>Vaccine</th><th>Date Given</th><th>Doctor</th><th>Dose</th><th>Next Due</th><th>Status</th></tr></thead>
        <tbody>${HC.vaccinations.map(v => `
          <tr><td><strong>${v.name}</strong></td><td>${v.date}</td><td>${v.doctor}</td><td>${v.dose}</td><td>${v.nextDue || '—'}</td><td><span class="badge badge-${v.status}">${v.status}</span></td></tr>`).join('')}
        </tbody>
      </table>`;
  },

  renderProfile(c) {
    const u = Auth.getUser();
    c.innerHTML = `
      <h2 style="margin-bottom:var(--sp-6)">My Profile</h2>
      <div style="max-width:500px">
        <div class="form-group"><label class="form-label">Full Name</label><input class="form-input" id="profName" value="${u.name}"></div>
        <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="profEmail" value="${u.email}"></div>
        <div class="form-group"><label class="form-label">Phone</label><input class="form-input" id="profPhone" value="${u.phone}"></div>
        <div class="form-group"><label class="form-label">Date of Birth</label><input class="form-input" id="profDob" value="${u.dob}" type="date"></div>
        <div class="form-group"><label class="form-label">Blood Group</label><input class="form-input" id="profBlood" value="${u.bloodGroup}"></div>
        <div class="form-group"><label class="form-label">Allergies</label><input class="form-input" id="profAllergies" value="${u.allergies.join(', ')}"></div>
        <h4 style="margin:var(--sp-6) 0 var(--sp-4)">Emergency Contact</h4>
        <div class="form-group"><label class="form-label">Name</label><input class="form-input" value="${u.emergencyContact.name}"></div>
        <div class="form-group"><label class="form-label">Phone</label><input class="form-input" value="${u.emergencyContact.phone}"></div>
        <div class="form-group"><label class="form-label">Relation</label><input class="form-input" value="${u.emergencyContact.relation}"></div>
        <button class="btn btn-primary btn-md" onclick="Toast.show('Profile updated successfully','success')">Save Changes</button>
      </div>`;
  }
};

/* ---------- Appointment Detail ---------- */
const AppointmentDetail = {
  init() {
    const id = new URLSearchParams(location.search).get('id');
    const appt = HC.appointments.find(a => a.id === id);
    if (!appt) { document.getElementById('apptDetail').innerHTML = '<p class="text-center" style="padding:var(--sp-10)">Appointment not found.</p>'; return; }
    const doc = HC.doctors.find(d => d.id === appt.doctorId);
    const rx = appt.prescription ? HC.prescriptions.find(r => r.id === appt.prescription) : null;
    const c = document.getElementById('apptDetail');
    c.innerHTML = `
      <div class="card card-no-hover" style="margin-bottom:var(--sp-6)">
        <div class="card-body" style="display:flex;gap:var(--sp-6);align-items:flex-start">
          <img class="doctor-avatar" src="${doc.avatar}" alt="${doc.name}" style="width:80px;height:80px">
          <div style="flex:1">
            <h3>${doc.name}</h3>
            <div class="text-secondary">${doc.specialty} · ${HC.site.name}</div>
            <div style="margin-top:var(--sp-3);display:flex;gap:var(--sp-4)">
              <div><span class="text-secondary">Date:</span> <strong>${appt.date}</strong></div>
              <div><span class="text-secondary">Time:</span> <strong>${appt.time}</strong></div>
              <span class="badge badge-${appt.status}">${appt.status}</span>
            </div>
            ${appt.symptoms ? `<div style="margin-top:var(--sp-3)"><span class="text-secondary">Symptoms:</span> ${appt.symptoms}</div>` : ''}
            ${appt.notes ? `<div style="margin-top:var(--sp-3)"><span class="text-secondary">Doctor Notes:</span> ${appt.notes}</div>` : ''}
          </div>
        </div>
      </div>
      ${rx ? `
        <div class="card card-no-hover">
          <div class="card-header"><h3>Prescription</h3></div>
          <div class="card-body">
            <table class="data-table">
              <thead><tr><th>Medicine</th><th>Dosage</th><th>Frequency</th><th>Duration</th><th>Status</th></tr></thead>
              <tbody>${rx.medicines.map(m => `<tr><td>${m.name}</td><td>${m.dosage}</td><td>${m.frequency}</td><td>${m.duration}</td><td><span class="badge badge-${m.status}">${m.status}</span></td></tr>`).join('')}</tbody>
            </table>
          </div>
        </div>` : ''}`;
  }
};

/* ---------- Pharmacy ---------- */
const Pharmacy = {
  currentCategory: '', currentSearch: '', cart: [],

  init() {
    this.cart = State.get('cart') || [];
    this.render();
    this.updateCartBadge();
  },

  filter(cat) {
    this.currentCategory = cat;
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
    this.render();
  },

  search(q) {
    this.currentSearch = q.toLowerCase();
    this.render();
  },

  render() {
    let meds = [...HC.medicines];
    if (this.currentCategory) meds = meds.filter(m => m.category === this.currentCategory);
    if (this.currentSearch) meds = meds.filter(m => m.name.toLowerCase().includes(this.currentSearch) || m.generic.toLowerCase().includes(this.currentSearch));

    const c = document.getElementById('medicineGrid');
    if (!c) return;
    c.innerHTML = meds.map(m => `
      <div class="medicine-card">
        <div class="medicine-icon">💊</div>
        ${m.requiresRx ? '<span class="badge badge-rx" style="align-self:flex-start">Rx</span>' : ''}
        <div class="medicine-name">${m.name}</div>
        <div class="medicine-generic">${m.generic}</div>
        <div class="medicine-strength">${m.strength} · ${m.form}</div>
        <div class="medicine-price">৳${m.price}/${m.priceUnit}</div>
        <div class="medicine-card-footer">
          <input type="number" class="form-input" style="width:60px;height:32px;padding:0 var(--sp-2);text-align:center" value="1" min="1" max="100" id="qty-${m.id}">
          <button class="btn btn-primary btn-sm" style="flex:1" onclick="Pharmacy.addToCart('${m.id}')">Add to Cart</button>
        </div>
      </div>`).join('');
  },

  addToCart(id) {
    const med = HC.medicines.find(m => m.id === id);
    if (!med) return;
    const qty = parseInt(document.getElementById('qty-' + id)?.value) || 1;
    const existing = this.cart.find(c => c.id === id);
    if (existing) existing.qty += qty;
    else this.cart.push({ id, name: med.name, strength: med.strength, price: med.price, priceUnit: med.priceUnit, qty });
    State.set('cart', this.cart);
    this.updateCartBadge();
    Toast.show(`${med.name} added to cart`, 'success');
  },

  updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
      const count = this.cart.reduce((s, c) => s + c.qty, 0);
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  },

  openCart() {
    document.querySelector('.cart-overlay')?.classList.add('active');
    document.querySelector('.cart-drawer')?.classList.add('active');
    this.renderCart();
  },

  closeCart() {
    document.querySelector('.cart-overlay')?.classList.remove('active');
    document.querySelector('.cart-drawer')?.classList.remove('active');
  },

  renderCart() {
    const body = document.getElementById('cartBody');
    const total = document.getElementById('cartTotal');
    if (!body) return;
    if (!this.cart.length) {
      body.innerHTML = '<p class="text-secondary text-center" style="padding:var(--sp-10)">Your cart is empty</p>';
      if (total) total.textContent = '৳0';
      return;
    }
    body.innerHTML = this.cart.map(item => `
      <div class="cart-item">
        <div>
          <div style="font-weight:600;font-size:14px">${item.name} ${item.strength}</div>
          <div class="text-secondary" style="font-size:12px">৳${item.price}/${item.priceUnit}</div>
        </div>
        <div class="cart-item-qty">
          <button onclick="Pharmacy.updateQty('${item.id}',-1)">−</button>
          <span style="min-width:20px;text-align:center">${item.qty}</span>
          <button onclick="Pharmacy.updateQty('${item.id}',1)">+</button>
        </div>
        <div style="font-weight:600;min-width:60px;text-align:right">৳${item.price * item.qty}</div>
      </div>`).join('');
    const sum = this.cart.reduce((s, c) => s + c.price * c.qty, 0);
    if (total) total.textContent = '৳' + sum.toLocaleString();
  },

  updateQty(id, delta) {
    const item = this.cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) this.cart = this.cart.filter(c => c.id !== id);
    State.set('cart', this.cart);
    this.updateCartBadge();
    this.renderCart();
  },

  checkout() {
    if (!this.cart.length) return;
    const orderId = 'ORD-' + Date.now();
    this.cart = [];
    State.set('cart', this.cart);
    this.updateCartBadge();
    this.closeCart();
    Toast.show(`Order ${orderId} placed successfully!`, 'success');
  }
};

/* ---------- Health Records ---------- */
const HealthRecords = {
  currentFilter: 'all',

  init() { this.render(); },

  filter(type, btn) {
    this.currentFilter = type;
    if (btn) { btn.closest('.tabs').querySelectorAll('.tab').forEach(t => t.classList.remove('active')); btn.classList.add('active'); }
    this.render();
  },

  render() {
    const c = document.getElementById('timelineContent');
    if (!c) return;

    let events = [];
    // Appointments
    if (this.currentFilter === 'all' || this.currentFilter === 'appointments') {
      HC.appointments.forEach(a => {
        const doc = HC.doctors.find(d => d.id === a.doctorId);
        events.push({ date: a.date, type: 'appointment', icon: '📅', title: `${doc.name} — ${doc.specialty}`, desc: `${a.status} · ${a.symptoms || 'Regular visit'}` });
      });
    }
    // Labs
    if (this.currentFilter === 'all' || this.currentFilter === 'labs') {
      HC.labResults.forEach(l => events.push({ date: l.date, type: 'lab', icon: '🔬', title: l.testName, desc: `Status: ${l.status}` }));
    }
    // Prescriptions
    if (this.currentFilter === 'all' || this.currentFilter === 'prescriptions') {
      HC.prescriptions.forEach(rx => {
        const doc = HC.doctors.find(d => d.id === rx.doctorId);
        events.push({ date: rx.date, type: 'prescription', icon: '💊', title: `Prescription by ${doc.name}`, desc: rx.medicines.map(m => m.name).join(', ') });
      });
    }
    // Vaccinations
    if (this.currentFilter === 'all' || this.currentFilter === 'vaccinations') {
      HC.vaccinations.forEach(v => events.push({ date: v.date, type: 'vaccination', icon: '💉', title: v.name, desc: `Dose: ${v.dose} · Dr. ${v.doctor.replace('Dr. ','')}` }));
    }

    events.sort((a, b) => new Date(b.date) - new Date(a.date));
    c.innerHTML = events.length ? `<div class="timeline">${events.map(e => `
      <div class="timeline-item">
        <div class="timeline-dot ${e.type}">${e.icon}</div>
        <div class="timeline-date">${e.date}</div>
        <div class="timeline-content">
          <strong>${e.title}</strong>
          <p class="text-secondary" style="font-size:13px;margin-top:var(--sp-1)">${e.desc}</p>
        </div>
      </div>`).join('')}</div>` : '<p class="text-secondary text-center" style="padding:var(--sp-10)">No records found.</p>';
  }
};

/* ---------- Admin Dashboard ---------- */
const AdminDashboard = {
  init() {
    this.renderStats();
    this.renderAppointmentChart();
    this.renderDeptChart();
    this.renderTodayTable();
  },

  renderStats() {
    const c = document.getElementById('adminStats');
    if (!c) return;
    const s = HC.adminStats;
    c.innerHTML = `
      <div class="stat-card"><div class="stat-card-label">Today's Appointments</div><div class="stat-card-value">${s.todayAppointments}</div><span class="stat-card-change up">+${s.appointmentChange}% ↑</span></div>
      <div class="stat-card"><div class="stat-card-label">Active Doctors</div><div class="stat-card-value">${s.activeDoctors}</div></div>
      <div class="stat-card"><div class="stat-card-label">Monthly Revenue</div><div class="stat-card-value">${formatBDT(s.monthlyRevenue)}</div><span class="stat-card-change up">+${s.revenueChange}% ↑</span></div>
      <div class="stat-card"><div class="stat-card-label">Bed Occupancy</div><div class="stat-card-value">${s.bedOccupancy}%</div>
        <div style="background:var(--border);border-radius:4px;height:6px;margin-top:var(--sp-2);overflow:hidden"><div style="background:var(--primary);height:100%;width:${s.bedOccupancy}%;border-radius:4px"></div></div>
        <div class="text-secondary" style="font-size:12px;margin-top:var(--sp-1)">${s.occupiedBeds}/${s.totalBeds} beds</div>
      </div>`;
  },

  renderAppointmentChart() {
    const canvas = document.getElementById('apptChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const data = HC.weeklyAppointments;
    const maxVal = Math.max(...data.map(d => d.count));
    const w = canvas.width = canvas.parentElement.clientWidth;
    const h = canvas.height = 220;
    const barW = (w - 80) / data.length;
    const padding = 40;

    ctx.clearRect(0, 0, w, h);
    data.forEach((d, i) => {
      const barH = (d.count / maxVal) * (h - padding * 2);
      const x = padding + i * barW + barW * 0.2;
      const y = h - padding - barH;
      const grad = ctx.createLinearGradient(x, y, x, h - padding);
      grad.addColorStop(0, '#0284C7');
      grad.addColorStop(1, '#38BDF8');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x, y, barW * 0.6, barH, [4, 4, 0, 0]);
      ctx.fill();
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim();
      ctx.font = '12px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(d.day, x + barW * 0.3, h - 10);
      ctx.fillText(d.count, x + barW * 0.3, y - 8);
    });
  },

  renderDeptChart() {
    const canvas = document.getElementById('deptChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const data = HC.departmentLoad;
    const total = data.reduce((s, d) => s + d.patients, 0);
    const w = canvas.width = 200; const h = canvas.height = 200;
    const cx = w / 2; const cy = h / 2; const r = 80; const ir = 50;

    let angle = -Math.PI / 2;
    data.forEach(d => {
      const slice = (d.patients / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(cx, cy, r, angle, angle + slice);
      ctx.arc(cx, cy, ir, angle + slice, angle, true);
      ctx.closePath();
      ctx.fillStyle = d.color;
      ctx.fill();
      angle += slice;
    });

    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text').trim();
    ctx.font = 'bold 18px Plus Jakarta Sans';
    ctx.textAlign = 'center';
    ctx.fillText(total, cx, cy + 6);
    ctx.font = '11px Inter';
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim();
    ctx.fillText('patients', cx, cy + 22);

    const legend = document.getElementById('deptLegend');
    if (legend) {
      legend.innerHTML = data.map(d => `<div style="display:flex;align-items:center;gap:var(--sp-2);font-size:13px"><span style="width:12px;height:12px;background:${d.color};border-radius:2px;flex-shrink:0"></span>${d.name} (${d.patients})</div>`).join('');
    }
  },

  renderTodayTable() {
    const tbody = document.getElementById('todayBody');
    if (!tbody) return;
    tbody.innerHTML = HC.todaySchedule.map(s => {
      const doc = HC.doctors.find(d => d.id === s.doctorId);
      return `<tr>
        <td>${s.patient}</td>
        <td>${doc?.name || '—'}</td>
        <td>${doc?.specialty || '—'}</td>
        <td>${s.time}</td>
        <td><span class="badge badge-${s.status}">${s.status}</span></td>
        <td><button class="btn btn-ghost btn-sm" onclick="Toast.show('Action taken','info')">View</button></td>
      </tr>`;
    }).join('');
  }
};

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  Auth.updateUI();
  Drawer.init();
  Header.init();

  // Page-specific init
  if (document.getElementById('deptGrid')) HomePage.init();
  if (document.getElementById('allDepts')) DepartmentsPage.init();
  if (document.getElementById('doctorList')) DoctorsPage.init();
  if (document.getElementById('doctorProfileContent')) DoctorProfile.init();
  if (document.getElementById('wizardContent')) BookingWizard.init();
  if (document.getElementById('dashContent')) PatientDashboard.init();
  if (document.getElementById('apptDetail')) AppointmentDetail.init();
  if (document.getElementById('medicineGrid')) Pharmacy.init();
  if (document.getElementById('timelineContent')) HealthRecords.init();
  if (document.getElementById('adminStats')) AdminDashboard.init();
});
