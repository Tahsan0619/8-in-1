/* ============================================================
   09-CMS — SiteCraft Application Logic
   ============================================================ */

/* ---- Icons (inline SVG) ---- */
const Icons = {
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  fileText: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  barChart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
  arrowDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  logOut: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  logIn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  externalLink: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  command: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>',
  type: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',
  bold: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>',
  italic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>',
  underline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/><line x1="4" y1="21" x2="20" y2="21"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  quote: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3z"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  tablet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
  smartphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
  move: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>',
  creditCard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  helpCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  inbox: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  megaphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  columns: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"/></svg>',
  maximize: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>',
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
};

/* ---- State Manager ---- */
const State = {
  prefix: 'cms_',
  get(key, fallback = null) {
    try { return JSON.parse(localStorage.getItem(this.prefix + key)) ?? fallback; }
    catch { return fallback; }
  },
  set(key, value) {
    localStorage.setItem(this.prefix + key, JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem(this.prefix + key);
  }
};

/* ---- Theme System ---- */
const Theme = {
  init() {
    const saved = State.get('theme', 'light');
    document.documentElement.setAttribute('data-theme', saved);
    this.updateIcon(saved);
  },
  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    State.set('theme', next);
    this.updateIcon(next);
  },
  updateIcon(theme) {
    document.querySelectorAll('.theme-icon').forEach(el => {
      el.innerHTML = theme === 'dark' ? Icons.sun : Icons.moon;
    });
    document.querySelectorAll('.theme-label').forEach(el => {
      el.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    });
  }
};

/* ---- Auth System ---- */
const Auth = {
  init() {
    const user = State.get('user', null);
    this.updateUI(user);
  },
  login(email, password) {
    if (!email || !password) { Toast.show('Please fill all fields', 'error'); return false; }
    const user = { ...CMS.currentUser, email };
    State.set('user', user);
    State.set('isLoggedIn', true);
    this.updateUI(user);
    Toast.show('Welcome back, ' + user.name + '!', 'success');
    this.closeModal();
    return true;
  },
  signup(name, email, password) {
    if (!name || !email || !password) { Toast.show('Please fill all fields', 'error'); return false; }
    const user = { ...CMS.currentUser, name, email };
    State.set('user', user);
    State.set('isLoggedIn', true);
    this.updateUI(user);
    Toast.show('Account created! Welcome, ' + name + '!', 'success');
    this.closeModal();
    return true;
  },
  logout() {
    State.remove('user');
    State.set('isLoggedIn', false);
    this.updateUI(null);
    Toast.show('You have been logged out', 'info');
  },
  isLoggedIn() {
    return State.get('isLoggedIn', false);
  },
  getUser() {
    return State.get('user', CMS.currentUser);
  },
  updateUI(user) {
    const nameEls = document.querySelectorAll('.user-name');
    const emailEls = document.querySelectorAll('.user-email');
    const avatarEls = document.querySelectorAll('.user-avatar');
    const loggedIn = this.isLoggedIn();
    const u = user || CMS.currentUser;
    nameEls.forEach(el => el.textContent = loggedIn ? u.name : 'Guest User');
    emailEls.forEach(el => el.textContent = loggedIn ? u.email : 'Sign in to continue');
    avatarEls.forEach(el => el.textContent = loggedIn ? u.name.split(' ').map(n => n[0]).join('') : 'G');
    document.querySelectorAll('.auth-login-btn').forEach(el => el.style.display = loggedIn ? 'none' : '');
    document.querySelectorAll('.auth-logout-btn').forEach(el => el.style.display = loggedIn ? '' : 'none');
  },
  openModal(tab = 'login') {
    const overlay = document.getElementById('authOverlay');
    if (!overlay) return;
    overlay.classList.add('active');
    this.switchTab(tab);
  },
  closeModal() {
    document.getElementById('authOverlay')?.classList.remove('active');
  },
  switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.toggle('active', f.id === 'auth-' + tab));
  }
};

/* ---- Toast Notifications ---- */
const Toast = {
  show(message, type = 'info', duration = 4000) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const iconMap = { success: Icons.check, error: Icons.x, info: Icons.bell };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span class="toast-icon">${iconMap[type] || Icons.bell}</span><span>${message}</span><button class="toast-close" onclick="this.parentElement.remove()">${Icons.x}</button>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), duration);
  }
};

/* ---- Sidebar ---- */
const Sidebar = {
  init() {
    const hamburger = document.querySelector('.hamburger-btn');
    if (hamburger) hamburger.addEventListener('click', () => this.toggle());
    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) overlay.addEventListener('click', () => this.close());
  },
  toggle() {
    document.querySelector('.sidebar')?.classList.toggle('open');
    document.querySelector('.sidebar-overlay')?.classList.toggle('active');
  },
  close() {
    document.querySelector('.sidebar')?.classList.remove('open');
    document.querySelector('.sidebar-overlay')?.classList.remove('active');
  }
};

/* ---- Command Palette ---- */
const CommandPalette = {
  commands: [
    { label: 'Go to Dashboard', icon: 'dashboard', action: () => window.location.href = 'index.html' },
    { label: 'Open Page Builder', icon: 'layout', action: () => window.location.href = 'builder.html' },
    { label: 'Manage Pages', icon: 'file', action: () => window.location.href = 'pages.html' },
    { label: 'Blog Posts', icon: 'fileText', action: () => window.location.href = 'posts.html' },
    { label: 'New Blog Post', icon: 'edit', action: () => window.location.href = 'editor.html' },
    { label: 'Media Library', icon: 'image', action: () => window.location.href = 'media.html' },
    { label: 'SEO Settings', icon: 'globe', action: () => window.location.href = 'seo.html' },
    { label: 'Site Settings', icon: 'settings', action: () => window.location.href = 'settings.html' },
    { label: 'Templates', icon: 'template', action: () => window.location.href = 'templates.html' },
    { label: 'Theme Editor', icon: 'palette', action: () => window.location.href = 'theme.html' },
    { label: 'Toggle Dark Mode', icon: 'moon', action: () => Theme.toggle() },
    { label: 'Publish Site', icon: 'globe', action: () => Toast.show('Site published successfully!', 'success') },
  ],
  init() {
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); this.toggle(); }
      if (e.key === 'Escape') this.close();
    });
  },
  toggle() {
    const overlay = document.getElementById('cmdPalette');
    if (!overlay) return;
    overlay.classList.toggle('active');
    if (overlay.classList.contains('active')) {
      const input = overlay.querySelector('input');
      input.value = '';
      input.focus();
      this.render('');
    }
  },
  close() {
    document.getElementById('cmdPalette')?.classList.remove('active');
  },
  render(query) {
    const results = document.querySelector('.cmd-palette-results');
    if (!results) return;
    const filtered = this.commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()));
    results.innerHTML = filtered.map((cmd, i) => `
      <div class="cmd-palette-item${i === 0 ? ' selected' : ''}" onclick="CommandPalette.execute(${this.commands.indexOf(cmd)})">
        ${Icons[cmd.icon] || ''}<span>${cmd.label}</span>
      </div>`).join('') || '<div style="padding:16px;text-align:center;color:var(--color-text-muted)">No results found</div>';
  },
  execute(index) {
    this.close();
    this.commands[index]?.action();
  }
};

/* ---- Modal ---- */
const Modal = {
  open(id) { document.getElementById(id)?.classList.add('active'); },
  close(id) { document.getElementById(id)?.classList.remove('active'); }
};

/* ---- Page Builder ---- */
const Builder = {
  selectedSection: null,
  deviceMode: 'desktop',

  init() {
    if (!document.querySelector('.builder-layout')) return;
    this.renderSectionPanel();
    this.renderCanvas();
    this.initDragDrop();
  },

  renderSectionPanel() {
    const panel = document.querySelector('.section-list');
    if (!panel) return;
    const query = document.querySelector('.section-search')?.value?.toLowerCase() || '';
    const cat = document.querySelector('.section-category-filter')?.value || 'all';

    let sections = CMS.builderSections;
    if (query) sections = sections.filter(s => s.name.toLowerCase().includes(query));
    if (cat !== 'all') sections = sections.filter(s => s.category === cat);

    panel.innerHTML = sections.map(s => `
      <div class="section-block" draggable="true" data-section-id="${s.id}">
        ${Icons[s.icon] || Icons.layout}
        <div class="section-block-info">
          <div class="section-block-name">${s.name}</div>
          <div class="section-block-desc">${s.description}</div>
        </div>
      </div>`).join('');
  },

  renderCanvas() {
    const canvas = document.querySelector('.canvas-frame');
    if (!canvas) return;
    const sections = State.get('canvasSections', CMS.canvasSections);

    canvas.innerHTML = sections.map((s, i) => {
      const def = CMS.builderSections.find(b => b.id === s.sectionId);
      return `
        <div class="canvas-section" data-index="${i}" draggable="true">
          <div class="canvas-section-toolbar">
            <button onclick="Builder.moveSection(${i},-1)" title="Move up">${Icons.arrowUp}</button>
            <button onclick="Builder.moveSection(${i},1)" title="Move down">${Icons.arrowDown}</button>
            <button onclick="Builder.selectSection(${i})" title="Edit">${Icons.edit}</button>
            <button onclick="Builder.removeSection(${i})" title="Delete">${Icons.trash}</button>
          </div>
          ${this.renderSectionPreview(s)}
        </div>`;
    }).join('') + `
      <div class="canvas-drop-zone" ondragover="Builder.onDragOver(event)" ondragleave="this.classList.remove('over')" ondrop="Builder.onDrop(event)">
        <p>${Icons.plus} Drop a section here or click to add</p>
      </div>`;
  },

  renderSectionPreview(section) {
    const p = section.props || {};
    switch (section.sectionId) {
      case 'sec-hero': return `
        <div class="preview-hero" style="background:linear-gradient(135deg,${p.bgColor || '#6366F1'},${p.bgColor || '#6366F1'}dd)">
          <h2>${p.heading || 'Hero Heading'}</h2>
          <p>${p.subheading || 'Subheading text'}</p>
          <div class="preview-hero-btns">
            <a>${p.cta1 || 'Primary CTA'}</a>
            <a>${p.cta2 || 'Secondary CTA'}</a>
          </div>
        </div>`;
      case 'sec-features': return `
        <div class="preview-features">
          ${(p.items || []).map(item => `
            <div class="preview-feature">
              <div class="feat-icon">${Icons[item.icon] || Icons.star}</div>
              <h4>${item.title}</h4>
              <p>${item.text}</p>
            </div>`).join('')}
        </div>`;
      case 'sec-text': return `
        <div class="preview-text">
          <h3>${p.heading || 'Text Section'}</h3>
          <p>${p.body || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
        </div>`;
      case 'sec-gallery': return `
        <div class="preview-gallery">
          ${(p.images || []).map(img => {
            const media = CMS.media.find(m => m.id === img);
            return `<img src="${media?.url || 'https://via.placeholder.com/400x250'}" alt="${media?.alt || 'Gallery image'}">`;
          }).join('')}
        </div>`;
      case 'sec-testimonials': return `
        <div class="preview-testimonials">
          ${(p.items || []).map(t => `
            <div class="preview-testimonial">
              <p>"${t.text}"</p>
              <div class="author">
                <div class="author-avatar">${t.avatar}</div>
                <div><div class="author-name">${t.name}</div><div class="author-role">${t.role}</div></div>
              </div>
            </div>`).join('')}
        </div>`;
      case 'sec-cta': return `
        <div class="preview-cta">
          <h3>${p.heading || 'Call to Action'}</h3>
          <p>${p.text || 'Description text'}</p>
          <button class="btn btn-primary">${p.buttonText || 'Click Here'}</button>
        </div>`;
      default: return `
        <div style="padding:32px;text-align:center;color:var(--color-text-muted)">
          <p>${section.label || 'Section'}</p>
        </div>`;
    }
  },

  renderPropertyPanel(index) {
    const panel = document.querySelector('.property-panel-body');
    if (!panel) return;
    const sections = State.get('canvasSections', CMS.canvasSections);
    const section = sections[index];
    if (!section) { panel.innerHTML = '<p class="text-muted" style="padding:16px">Select a section to edit</p>'; return; }

    const p = section.props || {};
    let html = `<div class="property-section"><h4>Section: ${section.label}</h4>`;

    switch (section.sectionId) {
      case 'sec-hero':
        html += `
          <div class="form-group"><label class="form-label">Heading</label><input class="form-input" value="${p.heading || ''}" onchange="Builder.updateProp(${index},'heading',this.value)"></div>
          <div class="form-group"><label class="form-label">Subheading</label><input class="form-input" value="${p.subheading || ''}" onchange="Builder.updateProp(${index},'subheading',this.value)"></div>
          <div class="form-group"><label class="form-label">CTA 1</label><input class="form-input" value="${p.cta1 || ''}" onchange="Builder.updateProp(${index},'cta1',this.value)"></div>
          <div class="form-group"><label class="form-label">CTA 2</label><input class="form-input" value="${p.cta2 || ''}" onchange="Builder.updateProp(${index},'cta2',this.value)"></div>
          <div class="form-group"><label class="form-label">Background Color</label><input type="color" value="${p.bgColor || '#6366F1'}" onchange="Builder.updateProp(${index},'bgColor',this.value)"></div>`;
        break;
      case 'sec-text':
        html += `
          <div class="form-group"><label class="form-label">Heading</label><input class="form-input" value="${p.heading || ''}" onchange="Builder.updateProp(${index},'heading',this.value)"></div>
          <div class="form-group"><label class="form-label">Body</label><textarea class="form-input form-textarea" onchange="Builder.updateProp(${index},'body',this.value)">${p.body || ''}</textarea></div>`;
        break;
      case 'sec-cta':
        html += `
          <div class="form-group"><label class="form-label">Heading</label><input class="form-input" value="${p.heading || ''}" onchange="Builder.updateProp(${index},'heading',this.value)"></div>
          <div class="form-group"><label class="form-label">Text</label><input class="form-input" value="${p.text || ''}" onchange="Builder.updateProp(${index},'text',this.value)"></div>
          <div class="form-group"><label class="form-label">Button Text</label><input class="form-input" value="${p.buttonText || ''}" onchange="Builder.updateProp(${index},'buttonText',this.value)"></div>`;
        break;
      default:
        html += '<p class="text-muted">Properties not yet available for this section type.</p>';
    }
    html += '</div>';
    panel.innerHTML = html;
  },

  updateProp(index, key, value) {
    const sections = State.get('canvasSections', CMS.canvasSections);
    if (!sections[index]) return;
    sections[index].props = sections[index].props || {};
    sections[index].props[key] = value;
    State.set('canvasSections', sections);
    this.renderCanvas();
    this.renderPropertyPanel(index);
  },

  selectSection(index) {
    this.selectedSection = index;
    document.querySelectorAll('.canvas-section').forEach((el, i) => el.classList.toggle('selected', i === index));
    this.renderPropertyPanel(index);
  },

  moveSection(index, direction) {
    const sections = State.get('canvasSections', CMS.canvasSections);
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= sections.length) return;
    [sections[index], sections[newIndex]] = [sections[newIndex], sections[index]];
    State.set('canvasSections', sections);
    this.renderCanvas();
    Toast.show('Section moved', 'success');
  },

  removeSection(index) {
    const sections = State.get('canvasSections', CMS.canvasSections);
    sections.splice(index, 1);
    State.set('canvasSections', sections);
    this.renderCanvas();
    this.renderPropertyPanel(-1);
    Toast.show('Section removed', 'info');
  },

  addSection(sectionId) {
    const def = CMS.builderSections.find(s => s.id === sectionId);
    if (!def) return;
    const sections = State.get('canvasSections', CMS.canvasSections);
    sections.push({ instanceId: 'i' + Date.now(), sectionId, label: def.name, props: {} });
    State.set('canvasSections', sections);
    this.renderCanvas();
    Toast.show(def.name + ' added', 'success');
  },

  setDevice(mode) {
    this.deviceMode = mode;
    const frame = document.querySelector('.canvas-frame');
    if (!frame) return;
    frame.classList.remove('tablet', 'mobile');
    if (mode !== 'desktop') frame.classList.add(mode);
    document.querySelectorAll('.device-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.device === mode));
  },

  initDragDrop() {
    document.addEventListener('dragstart', (e) => {
      const block = e.target.closest('.section-block');
      if (block) e.dataTransfer.setData('text/plain', block.dataset.sectionId);
      const canvasSection = e.target.closest('.canvas-section');
      if (canvasSection) { canvasSection.classList.add('dragging'); e.dataTransfer.setData('text/plain', 'move:' + canvasSection.dataset.index); }
    });
    document.addEventListener('dragend', (e) => {
      document.querySelectorAll('.canvas-section').forEach(el => el.classList.remove('dragging'));
      document.querySelectorAll('.canvas-drop-zone').forEach(el => el.classList.remove('over'));
    });
  },

  onDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('over');
  },

  onDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('over');
    const data = e.dataTransfer.getData('text/plain');
    if (data && !data.startsWith('move:')) this.addSection(data);
  }
};

/* ---- Pages Manager ---- */
const Pages = {
  init() {
    if (!document.querySelector('.pages-table')) return;
    this.render();
  },
  render(filter = 'all') {
    const tbody = document.querySelector('.pages-table tbody');
    if (!tbody) return;
    let pages = [...CMS.pages];
    if (filter !== 'all') pages = pages.filter(p => p.status === filter);
    const search = document.querySelector('.page-search')?.value?.toLowerCase() || '';
    if (search) pages = pages.filter(p => p.title.toLowerCase().includes(search));

    tbody.innerHTML = pages.map(p => `
      <tr>
        <td><a href="builder.html" class="font-semibold text-accent">${p.title}</a></td>
        <td class="font-mono text-muted" style="font-size:13px">${p.slug}</td>
        <td><span class="badge badge-${p.status}">${p.status}</span></td>
        <td class="text-muted">${p.template}</td>
        <td class="text-muted">${p.updatedAt}</td>
        <td>
          <div class="flex gap-1">
            <button class="btn btn-ghost btn-icon sm" title="Edit" onclick="window.location.href='builder.html'">${Icons.edit}</button>
            <button class="btn btn-ghost btn-icon sm" title="Duplicate" onclick="Pages.duplicate('${p.id}')">${Icons.copy}</button>
            <button class="btn btn-ghost btn-icon sm" title="View" onclick="Toast.show('Preview opened','info')">${Icons.eye}</button>
          </div>
        </td>
      </tr>`).join('');
  },
  duplicate(id) {
    Toast.show('Page duplicated!', 'success');
  },
  filterByStatus(status) {
    document.querySelectorAll('.page-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.status === status));
    this.render(status);
  }
};

/* ---- Blog Posts Manager ---- */
const Posts = {
  init() {
    if (!document.querySelector('.posts-grid')) return;
    this.render();
  },
  render(filter = 'all') {
    const grid = document.querySelector('.posts-grid');
    if (!grid) return;
    let posts = [...CMS.posts];
    if (filter !== 'all') posts = posts.filter(p => p.status === filter);
    const search = document.querySelector('.post-search')?.value?.toLowerCase() || '';
    if (search) posts = posts.filter(p => p.title.toLowerCase().includes(search));

    grid.innerHTML = posts.map(p => `
      <div class="card">
        <img src="${p.image}" alt="${p.title}" style="width:100%;aspect-ratio:2/1;object-fit:cover">
        <div class="card-body">
          <div class="flex-between" style="margin-bottom:8px">
            <span class="badge badge-${p.status}">${p.status}</span>
            ${p.featured ? '<span class="badge badge-pro">Featured</span>' : ''}
          </div>
          <h3 style="font-size:16px;font-weight:600;margin-bottom:4px;line-height:1.3">${p.title}</h3>
          <p class="text-muted line-clamp-2" style="font-size:13px;margin-bottom:12px">${p.excerpt}</p>
          <div class="flex-between text-muted" style="font-size:12px">
            <span>${p.category} · ${p.readTime}</span>
            <span>${p.publishedAt || 'Not published'}</span>
          </div>
          <div class="flex gap-2" style="margin-top:12px">
            <a href="editor.html" class="btn btn-secondary btn-sm">${Icons.edit} Edit</a>
            <button class="btn btn-ghost btn-sm" onclick="Toast.show('Preview opened','info')">${Icons.eye} Preview</button>
          </div>
        </div>
      </div>`).join('');
  },
  filterByStatus(status) {
    document.querySelectorAll('.post-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.status === status));
    this.render(status);
  }
};

/* ---- Post Editor ---- */
const Editor = {
  init() {
    if (!document.querySelector('.editor-layout')) return;
    this.initToolbar();
  },
  initToolbar() {
    document.querySelectorAll('.editor-toolbar button[data-cmd]').forEach(btn => {
      btn.addEventListener('click', () => {
        const cmd = btn.dataset.cmd;
        document.execCommand(cmd, false, null);
        btn.classList.toggle('active');
      });
    });
  },
  savePost() {
    const title = document.querySelector('.editor-title-input')?.value;
    if (!title) { Toast.show('Please enter a title', 'error'); return; }
    Toast.show('Post saved as draft!', 'success');
  },
  publishPost() {
    const title = document.querySelector('.editor-title-input')?.value;
    if (!title) { Toast.show('Please enter a title', 'error'); return; }
    Toast.show('Post published!', 'success');
  }
};

/* ---- Media Library ---- */
const Media = {
  selectedMedia: null,
  init() {
    if (!document.querySelector('.media-grid')) return;
    this.render();
    this.initDropZone();
  },
  render(folder = 'all') {
    const grid = document.querySelector('.media-grid');
    if (!grid) return;
    let media = [...CMS.media];
    if (folder !== 'all') media = media.filter(m => m.folder === folder);
    const search = document.querySelector('.media-search')?.value?.toLowerCase() || '';
    if (search) media = media.filter(m => m.name.toLowerCase().includes(search));

    grid.innerHTML = media.map(m => `
      <div class="media-card${this.selectedMedia === m.id ? ' selected' : ''}" onclick="Media.select('${m.id}')">
        <img src="${m.url}" alt="${m.alt}" loading="lazy">
        <div class="check">${Icons.check}</div>
        <div class="media-card-info">
          <div class="media-card-name">${m.name}</div>
          <div class="media-card-meta">${m.size} · ${m.dimensions}</div>
        </div>
      </div>`).join('');
  },
  select(id) {
    this.selectedMedia = this.selectedMedia === id ? null : id;
    this.render();
    this.renderDetail(id);
  },
  renderDetail(id) {
    const panel = document.querySelector('.media-detail');
    if (!panel) return;
    const m = CMS.media.find(x => x.id === id);
    if (!m) { panel.innerHTML = '<p class="text-muted" style="padding:16px">Select a file to view details</p>'; return; }
    panel.innerHTML = `
      <img src="${m.url}" alt="${m.alt}">
      <div class="media-detail-row"><span class="media-detail-label">Name</span><span>${m.name}</span></div>
      <div class="media-detail-row"><span class="media-detail-label">Type</span><span>${m.type}</span></div>
      <div class="media-detail-row"><span class="media-detail-label">Size</span><span>${m.size}</span></div>
      <div class="media-detail-row"><span class="media-detail-label">Dimensions</span><span>${m.dimensions}</span></div>
      <div class="media-detail-row"><span class="media-detail-label">Uploaded</span><span>${m.uploadedAt}</span></div>
      <div class="form-group" style="margin-top:16px">
        <label class="form-label">Alt Text</label>
        <input class="form-input" value="${m.alt}" onchange="Toast.show('Alt text updated','success')">
      </div>
      <div class="flex gap-2" style="margin-top:12px">
        <button class="btn btn-secondary btn-sm" onclick="Toast.show('Link copied!','success')">${Icons.copy} Copy URL</button>
        <button class="btn btn-ghost btn-sm" onclick="Toast.show('File deleted','info')">${Icons.trash} Delete</button>
      </div>`;
  },
  filterByFolder(folder) {
    document.querySelectorAll('.media-folder-btn').forEach(b => b.classList.toggle('active', b.dataset.folder === folder));
    this.render(folder);
  },
  initDropZone() {
    const zone = document.querySelector('.media-drop-zone');
    if (!zone) return;
    zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('dragover'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
    zone.addEventListener('drop', (e) => { e.preventDefault(); zone.classList.remove('dragover'); Toast.show('Files uploaded successfully!', 'success'); });
    zone.addEventListener('click', () => Toast.show('File browser would open here', 'info'));
  }
};

/* ---- SEO Manager ---- */
const SEO = {
  currentPage: null,
  init() {
    if (!document.querySelector('.seo-page-list')) return;
    this.renderPageList();
    this.selectPage('p1');
  },
  renderPageList() {
    const list = document.querySelector('.seo-page-list');
    if (!list) return;
    list.innerHTML = CMS.seoPages.map(s => {
      const page = CMS.pages.find(p => p.id === s.pageId);
      return `
        <div class="sidebar-link${this.currentPage === s.pageId ? ' active' : ''}" onclick="SEO.selectPage('${s.pageId}')">
          ${Icons.file}
          <span>${page?.title || 'Unknown'}</span>
          <span class="badge badge-${s.score >= 80 ? 'published' : s.score >= 50 ? 'scheduled' : 'draft'}" style="margin-left:auto;font-size:11px">${s.score}</span>
        </div>`;
    }).join('');
  },
  selectPage(pageId) {
    this.currentPage = pageId;
    this.renderPageList();
    this.renderDetail(pageId);
  },
  renderDetail(pageId) {
    const detail = document.querySelector('.seo-detail');
    if (!detail) return;
    const seo = CMS.seoPages.find(s => s.pageId === pageId);
    if (!seo) return;

    const circ = 2 * Math.PI * 52;
    const offset = circ - (seo.score / 100) * circ;
    const scoreColor = seo.score >= 80 ? 'var(--color-success)' : seo.score >= 50 ? 'var(--color-warning)' : 'var(--color-error)';

    detail.innerHTML = `
      <div class="seo-score">
        <div class="seo-score-ring">
          <svg viewBox="0 0 120 120"><circle class="bg" cx="60" cy="60" r="52"/><circle class="fill" cx="60" cy="60" r="52" style="stroke:${scoreColor};stroke-dasharray:${circ};stroke-dashoffset:${offset}"/></svg>
        </div>
        <div style="text-align:center"><div class="seo-score-value" style="color:${scoreColor}">${seo.score}</div><div class="seo-score-label">SEO Score</div></div>
      </div>
      <h3 style="font-size:16px;margin-bottom:16px">Meta Settings</h3>
      <div class="form-group"><label class="form-label">Title Tag</label><input class="form-input" value="${seo.title}" onchange="Toast.show('Title updated','success')"><div class="form-hint">${seo.title.length}/60 characters</div></div>
      <div class="form-group"><label class="form-label">Meta Description</label><textarea class="form-input form-textarea" rows="3" onchange="Toast.show('Description updated','success')">${seo.metaDescription}</textarea><div class="form-hint">${seo.metaDescription.length}/160 characters</div></div>
      <div class="form-group"><label class="form-label">Canonical URL</label><input class="form-input" value="${seo.canonical}"></div>
      <div class="form-check"><input type="checkbox" ${seo.indexable ? 'checked' : ''}><span>Allow search engine indexing</span></div>
      <h3 style="font-size:16px;margin:24px 0 16px">Google Preview</h3>
      <div class="meta-preview">
        <div class="meta-preview-title">${seo.ogTitle || seo.title}</div>
        <div class="meta-preview-url">${seo.canonical || 'https://www.tahsan.dev'}</div>
        <div class="meta-preview-desc">${seo.metaDescription || 'No description set'}</div>
      </div>
      <h3 style="font-size:16px;margin:24px 0 16px">SEO Checklist</h3>
      <ul class="seo-checklist">
        ${CMS.seoChecklist.map(c => `
          <li class="seo-check-item">
            <span class="seo-check-icon ${c.passed ? 'pass' : 'fail'}">${c.passed ? Icons.check : Icons.x}</span>
            <span>${c.check}</span>
          </li>`).join('')}
      </ul>`;
  }
};

/* ---- Templates ---- */
const Templates = {
  init() {
    if (!document.querySelector('.template-grid')) return;
    this.render();
  },
  render(category = 'all') {
    const grid = document.querySelector('.template-grid');
    if (!grid) return;
    let templates = [...CMS.templates];
    if (category !== 'all') templates = templates.filter(t => t.category === category);

    grid.innerHTML = templates.map(t => `
      <div class="template-card" onclick="Templates.use('${t.id}')">
        <img src="${t.preview}" alt="${t.name}" loading="lazy">
        <div class="template-card-body">
          <div class="template-card-name">${t.name}</div>
          <div class="template-card-desc">${t.description}</div>
          <div class="template-card-meta">
            <span>${t.sections} sections</span>
            ${t.popular ? '<span class="popular-badge">Popular</span>' : ''}
          </div>
        </div>
      </div>`).join('');
  },
  filterByCategory(category) {
    document.querySelectorAll('.template-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.category === category));
    this.render(category);
  },
  use(id) {
    Toast.show('Template applied! Redirecting to builder...', 'success');
    setTimeout(() => window.location.href = 'builder.html', 1500);
  }
};

/* ---- Theme Editor ---- */
const ThemeEditor = {
  settings: null,
  init() {
    if (!document.querySelector('.theme-layout')) return;
    this.settings = State.get('themeSettings', { ...CMS.themeSettings });
    this.renderPresets();
    this.updatePreview();
  },
  selectPreset(index) {
    const preset = CMS.themeSettings.presets[index];
    if (!preset) return;
    this.settings.colors.primary = preset.primary;
    this.settings.colors.secondary = preset.secondary;
    State.set('themeSettings', this.settings);
    document.querySelectorAll('.preset-btn').forEach((b, i) => b.classList.toggle('active', i === index));
    this.updateColorInputs();
    this.updatePreview();
    Toast.show('Preset "' + preset.name + '" applied', 'success');
  },
  renderPresets() {
    const grid = document.querySelector('.preset-grid');
    if (!grid) return;
    grid.innerHTML = CMS.themeSettings.presets.map((p, i) => `
      <button class="preset-btn${i === 0 ? ' active' : ''}" onclick="ThemeEditor.selectPreset(${i})">
        <div class="swatch">
          <span style="background:${p.primary}"></span>
          <span style="background:${p.secondary}"></span>
        </div>
        <span>${p.name}</span>
      </button>`).join('');
  },
  updateColor(key, value) {
    this.settings.colors[key] = value;
    State.set('themeSettings', this.settings);
    this.updatePreview();
  },
  updateTypography(key, value) {
    this.settings.typography[key] = value;
    State.set('themeSettings', this.settings);
    this.updatePreview();
  },
  updateSpacing(key, value) {
    this.settings.spacing[key] = parseInt(value);
    State.set('themeSettings', this.settings);
    this.updatePreview();
    const label = document.querySelector(`[data-range="${key}"]`);
    if (label) label.textContent = value + 'px';
  },
  updateColorInputs() {
    document.querySelectorAll('[data-color-key]').forEach(input => {
      const key = input.dataset.colorKey;
      if (this.settings.colors[key]) {
        input.value = this.settings.colors[key];
        const hex = input.closest('.color-picker-item')?.querySelector('.hex');
        if (hex) hex.textContent = this.settings.colors[key];
      }
    });
  },
  updatePreview() {
    const frame = document.querySelector('.theme-preview-frame');
    if (!frame) return;
    const c = this.settings.colors;
    const t = this.settings.typography;
    const s = this.settings.spacing;
    frame.innerHTML = `
      <div style="font-family:${t.bodyFont},sans-serif;font-size:${t.baseSize}px;line-height:${t.lineHeight};color:${c.text}">
        <div style="background:linear-gradient(135deg,${c.primary},${c.secondary});color:#fff;padding:${s.sectionPadding/2}px;border-radius:${s.borderRadius}px;text-align:center;margin-bottom:24px">
          <h1 style="font-family:${t.headingFont},sans-serif;font-weight:${t.headingWeight};font-size:28px;margin-bottom:8px">Welcome to My Site</h1>
          <p style="opacity:.85;margin-bottom:16px">Your beautiful website starts here</p>
          <button style="background:#fff;color:${c.primary};border:none;padding:${s.buttonPadding};border-radius:${s.borderRadius}px;font-weight:600;cursor:pointer">Get Started</button>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:24px">
          <div style="padding:${s.cardPadding}px;border:1px solid ${c.border};border-radius:${s.borderRadius}px;text-align:center">
            <div style="width:32px;height:32px;border-radius:8px;background:${c.primary}20;color:${c.primary};display:flex;align-items:center;justify-content:center;margin:0 auto 12px">${Icons.code}</div>
            <h3 style="font-size:15px;font-weight:600;margin-bottom:4px">Feature One</h3>
            <p style="font-size:13px;color:${c.textMuted}">Description text here</p>
          </div>
          <div style="padding:${s.cardPadding}px;border:1px solid ${c.border};border-radius:${s.borderRadius}px;text-align:center">
            <div style="width:32px;height:32px;border-radius:8px;background:${c.secondary}20;color:${c.secondary};display:flex;align-items:center;justify-content:center;margin:0 auto 12px">${Icons.palette}</div>
            <h3 style="font-size:15px;font-weight:600;margin-bottom:4px">Feature Two</h3>
            <p style="font-size:13px;color:${c.textMuted}">Description text here</p>
          </div>
          <div style="padding:${s.cardPadding}px;border:1px solid ${c.border};border-radius:${s.borderRadius}px;text-align:center">
            <div style="width:32px;height:32px;border-radius:8px;background:${c.primary}20;color:${c.primary};display:flex;align-items:center;justify-content:center;margin:0 auto 12px">${Icons.rocket}</div>
            <h3 style="font-size:15px;font-weight:600;margin-bottom:4px">Feature Three</h3>
            <p style="font-size:13px;color:${c.textMuted}">Description text here</p>
          </div>
        </div>
        <div style="background:${c.surface};padding:32px;border-radius:${s.borderRadius}px;text-align:center">
          <h2 style="font-family:${t.headingFont},sans-serif;font-size:22px;font-weight:${t.headingWeight};margin-bottom:8px">Ready to Start?</h2>
          <p style="color:${c.textMuted};margin-bottom:16px">Join hundreds of happy customers</p>
          <button style="background:${c.primary};color:#fff;border:none;padding:${s.buttonPadding};border-radius:${s.borderRadius}px;font-weight:600;cursor:pointer">Contact Us</button>
        </div>
      </div>`;
  },
  exportTheme() {
    const json = JSON.stringify(this.settings, null, 2);
    navigator.clipboard?.writeText(json);
    Toast.show('Theme JSON copied to clipboard!', 'success');
  },
  resetTheme() {
    this.settings = { ...CMS.themeSettings };
    State.set('themeSettings', this.settings);
    this.updateColorInputs();
    this.renderPresets();
    this.updatePreview();
    Toast.show('Theme reset to defaults', 'info');
  }
};

/* ---- Site Settings ---- */
const SiteSettings = {
  init() {
    if (!document.querySelector('.settings-form')) return;
  },
  saveGeneral() {
    Toast.show('General settings saved!', 'success');
  },
  saveDomain() {
    Toast.show('Domain settings saved!', 'success');
  },
  saveAnalytics() {
    Toast.show('Analytics settings saved!', 'success');
  },
  saveCode() {
    Toast.show('Custom code saved!', 'success');
  },
  publishSite() {
    Toast.show('Site published successfully! 🚀', 'success');
  }
};

/* ---- Dashboard Charts ---- */
const DashboardCharts = {
  init() {
    const canvas = document.getElementById('trafficChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const data = CMS.dashboardStats.trafficByDay;
    const maxVal = Math.max(...data.map(d => d.views));
    const w = canvas.width = canvas.parentElement.offsetWidth;
    const h = canvas.height = 200;
    const pad = { top: 20, right: 20, bottom: 40, left: 50 };
    const chartW = w - pad.left - pad.right;
    const chartH = h - pad.top - pad.bottom;

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#A1A1AA' : '#71717A';
    const lineColor = isDark ? '#27272A' : '#E4E4E7';
    const accentColor = isDark ? '#818CF8' : '#6366F1';

    ctx.clearRect(0, 0, w, h);

    // Grid lines
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = pad.top + (chartH / 4) * i;
      ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
      ctx.fillStyle = textColor; ctx.font = '11px Inter'; ctx.textAlign = 'right';
      ctx.fillText(Math.round(maxVal - (maxVal / 4) * i), pad.left - 8, y + 4);
    }

    // Bars
    const barW = chartW / data.length * 0.6;
    const gap = chartW / data.length;
    data.forEach((d, i) => {
      const x = pad.left + gap * i + (gap - barW) / 2;
      const barH = (d.views / maxVal) * chartH;
      const y = pad.top + chartH - barH;

      ctx.fillStyle = accentColor + '30';
      ctx.beginPath();
      ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]);
      ctx.fill();

      ctx.fillStyle = accentColor;
      ctx.beginPath();
      ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]);
      ctx.globalAlpha = 0.8;
      ctx.fill();
      ctx.globalAlpha = 1;

      ctx.fillStyle = textColor; ctx.font = '11px Inter'; ctx.textAlign = 'center';
      ctx.fillText(d.day, pad.left + gap * i + gap / 2, h - pad.bottom + 20);
    });
  }
};

/* ---- Global Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  Auth.init();
  Sidebar.init();
  CommandPalette.init();
  DashboardCharts.init();
  Builder.init();
  Pages.init();
  Posts.init();
  Editor.init();
  Media.init();
  SEO.init();
  Templates.init();
  ThemeEditor.init();
  SiteSettings.init();
});
