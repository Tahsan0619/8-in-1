/* ===== 15-NONPROFIT — HopeBridge App ===== */
(() => {
  /* ── Helpers ── */
  const $ = (s, p = document) => p.querySelector(s);
  const $$ = (s, p = document) => [...p.querySelectorAll(s)];
  const money = n => '৳' + Number(n).toLocaleString('en-BD');
  const ago = d => {
    const s = Math.floor((Date.now() - new Date(d)) / 1000);
    if (s < 60) return 'just now';
    if (s < 3600) return Math.floor(s / 60) + 'm ago';
    if (s < 86400) return Math.floor(s / 3600) + 'h ago';
    return Math.floor(s / 86400) + 'd ago';
  };
  const pct = (r, g) => Math.min(Math.round((r / g) * 100), 100);
  const getCampaign = id => NP.campaigns.find(c => c.id === id);

  /* ── State ── */
  const State = {
    _p: 'np_',
    get(k, d = null) { try { return JSON.parse(localStorage.getItem(this._p + k)) ?? d; } catch { return d; } },
    set(k, v) { localStorage.setItem(this._p + k, JSON.stringify(v)); }
  };

  /* ── Theme ── */
  const Theme = {
    init() {
      const saved = State.get('theme') || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', saved);
    },
    toggle() {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      State.set('theme', next);
    }
  };

  /* ── Toast ── */
  const Toast = {
    show(msg, type = 'success') {
      let c = $('.toast-container');
      if (!c) { c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); }
      const t = document.createElement('div');
      t.className = `toast ${type}`;
      t.innerHTML = `<span>${msg}</span><button class="toast-close" onclick="this.parentElement.remove()">&times;</button>`;
      c.appendChild(t);
      setTimeout(() => { t.style.animation = 'toastOut 0.2s ease-in forwards'; setTimeout(() => t.remove(), 200); }, 4000);
    }
  };

  /* ── Auth ── */
  const Auth = {
    init() {
      const overlay = $('.auth-overlay');
      if (!overlay) return;
      $$('[data-auth]').forEach(b => b.addEventListener('click', () => overlay.classList.add('active')));
      $('.auth-close', overlay)?.addEventListener('click', () => overlay.classList.remove('active'));
      overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('active'); });
      $$('.auth-tab', overlay).forEach(tab => tab.addEventListener('click', () => {
        $$('.auth-tab', overlay).forEach(t => t.classList.remove('active'));
        $$('.auth-form', overlay).forEach(f => f.classList.remove('active'));
        tab.classList.add('active');
        $(`#auth-${tab.dataset.tab}`, overlay)?.classList.add('active');
      }));
      $('#auth-login', overlay)?.addEventListener('submit', e => {
        e.preventDefault(); overlay.classList.remove('active');
        Toast.show(`Welcome back, ${NP.currentUser.name}!`);
      });
      $('#auth-signup', overlay)?.addEventListener('submit', e => {
        e.preventDefault(); overlay.classList.remove('active');
        Toast.show('Account created successfully!');
      });
    }
  };

  /* ── Drawer ── */
  const Drawer = {
    init() {
      const btn = $('.hamburger'), overlay = $('.drawer-overlay'), drawer = $('.drawer');
      if (!btn || !drawer) return;
      const toggle = () => { overlay?.classList.toggle('active'); drawer.classList.toggle('active'); };
      btn.addEventListener('click', toggle);
      overlay?.addEventListener('click', toggle);
      $('.drawer-close', drawer)?.addEventListener('click', toggle);
    }
  };

  /* ── Header scroll ── */
  const initHeader = () => {
    const h = $('.header');
    if (!h) return;
    window.addEventListener('scroll', () => h.classList.toggle('scrolled', scrollY > 10));
    $('.theme-toggle')?.addEventListener('click', Theme.toggle);
  };

  /* ── Back to Top ── */
  const initBackToTop = () => {
    const btn = $('.back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('visible', scrollY > 400));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  };

  /* ── Newsletter ── */
  const initNewsletter = () => {
    $$('.newsletter-form').forEach(f => f.addEventListener('submit', e => {
      e.preventDefault();
      const input = $('input', f);
      if (input?.value) { Toast.show('Subscribed successfully!'); input.value = ''; }
    }));
  };

  /* ── Count-Up Animation ── */
  const countUp = (el, target, duration = 2000) => {
    let start = 0;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const val = Math.floor(p * target);
      el.textContent = target >= 1000000 ? money(val) : val.toLocaleString('en-BD') + (el.dataset.suffix || '');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const observeCounters = () => {
    const els = $$('[data-count]');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          countUp(e.target, parseInt(e.target.dataset.count));
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    els.forEach(el => obs.observe(el));
  };

  /* ══════════════════════════════════════
     PAGE MODULES
  ══════════════════════════════════════ */

  /* ── Homepage ── */
  const HomePage = {
    init() {
      this.renderStats();
      this.renderCampaigns();
      this.renderStory();
      this.renderEvents();
    },
    renderStats() {
      const el = $('#impactStats');
      if (!el) return;
      const s = NP.stats;
      el.innerHTML = [
        { val: s.totalRaised, label: 'Total Raised', suffix: '' },
        { val: s.livesChanged, label: 'Lives Changed', suffix: '+' },
        { val: s.projectsCompleted, label: 'Projects Completed', suffix: '+' },
        { val: s.activeVolunteers, label: 'Volunteers', suffix: '+' }
      ].map(i => `<div class="stat-card"><div class="stat-number" data-count="${i.val}" data-suffix="${i.suffix}">0</div><div class="stat-label">${i.label}</div></div>`).join('');
    },
    renderCampaigns() {
      const el = $('#activeCampaigns');
      if (!el) return;
      el.innerHTML = NP.campaigns.filter(c => c.featured).map(c => CampaignCard.render(c)).join('');
    },
    renderStory() {
      const el = $('#featuredStory');
      if (!el) return;
      const s = NP.stories.find(st => st.featured);
      if (!s) return;
      el.innerHTML = `<div class="story-featured">
        <img src="${s.image}" alt="${s.title}">
        <div class="story-featured-content">
          <p class="story-quote">${s.quote}</p>
          <p class="story-author">— ${s.beneficiary}, <span class="story-location">${s.location}</span></p>
          <a href="stories.html" class="btn btn-outline" style="margin-top:var(--sp-6);width:fit-content;">Read Full Story</a>
        </div>
      </div>`;
    },
    renderEvents() {
      const el = $('#upcomingEvents');
      if (!el) return;
      el.innerHTML = NP.events.filter(e => e.status === 'upcoming').slice(0, 2).map(e => EventCard.render(e)).join('');
    }
  };

  /* ── Campaign Card ── */
  const CampaignCard = {
    render(c) {
      const p = pct(c.raised, c.goal);
      const urgent = c.daysLeft <= 10 && c.status === 'active';
      const isComplete = c.status === 'completed';
      let badge = `<span class="campaign-card-badge">${NP.categories.find(cat => cat.id === c.category)?.icon || ''} ${NP.categories.find(cat => cat.id === c.category)?.label || ''}</span>`;
      if (urgent) badge = `<span class="campaign-card-badge urgent">⏰ Ending Soon</span>`;
      if (isComplete) badge = `<span class="campaign-card-badge completed">✓ Funded</span>`;
      return `<div class="campaign-card">
        <div class="campaign-card-image"><img src="${c.image}" alt="${c.title}">${badge}</div>
        <div class="campaign-card-body">
          <h3 class="campaign-card-title"><a href="campaign.html?id=${c.id}">${c.title}</a></h3>
          <p class="campaign-card-desc">${c.description}</p>
          <div class="progress-bar"><div class="progress-fill${urgent ? ' urgent' : ''}" style="width:${p}%"></div></div>
          <div class="progress-stats"><span><strong>${money(c.raised)}</strong> of ${money(c.goal)}</span><strong>${p}%</strong></div>
          <div class="campaign-card-footer">
            <div class="campaign-card-meta"><span>👥 ${c.donors} donors</span><span>📅 ${c.daysLeft > 0 ? c.daysLeft + ' days left' : 'Ended'}</span></div>
            <a href="donate.html?campaign=${c.id}" class="btn btn-donate btn-sm">❤ Donate</a>
          </div>
        </div>
      </div>`;
    }
  };

  /* ── Event Card ── */
  const EventCard = {
    render(e) {
      const d = new Date(e.date);
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      const isPast = e.status === 'past';
      return `<div class="event-card${isPast ? ' past' : ''}" data-event="${e.id}">
        <div class="event-card-image">
          <img src="${e.image}" alt="${e.title}">
          <div class="event-date-badge"><div class="month">${months[d.getMonth()]}</div><div class="day">${d.getDate()}</div></div>
          ${isPast ? '<span class="event-status-badge past">Completed</span>' : ''}
        </div>
        <div class="event-card-body">
          <h3 class="event-card-title">${e.title}</h3>
          <div class="event-card-info">
            <span>📅 ${d.toLocaleDateString('en-BD', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span>📍 ${e.location}</span>
            <span>🎟 ${e.type}</span>
          </div>
          <p class="event-card-desc">${e.description}</p>
          ${e.goal ? `<div class="progress-bar" style="margin-bottom:var(--sp-2)"><div class="progress-fill" style="width:${pct(e.raised, e.goal)}%"></div></div><div class="progress-stats"><span><strong>${money(e.raised)}</strong> of ${money(e.goal)}</span><strong>${pct(e.raised, e.goal)}%</strong></div>` : ''}
          ${!isPast ? `<div class="event-countdown" data-countdown="${e.date}"></div><div style="display:flex;gap:var(--sp-3);margin-top:var(--sp-4)"><button class="btn btn-primary" onclick="window._regEvent='${e.id}';document.querySelector('.modal-overlay').classList.add('active')">Register</button></div>` : ''}
        </div>
      </div>`;
    }
  };

  /* ── Causes Page ── */
  const CausesPage = {
    init() {
      this.filter = 'all';
      this.sort = 'newest';
      this.search = '';
      this.render();
      this.bind();
    },
    getFiltered() {
      let list = [...NP.campaigns];
      if (this.filter !== 'all') list = list.filter(c => c.category === this.filter);
      if (this.search) {
        const q = this.search.toLowerCase();
        list = list.filter(c => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q));
      }
      switch (this.sort) {
        case 'most-funded': list.sort((a, b) => pct(b.raised, b.goal) - pct(a.raised, a.goal)); break;
        case 'ending-soon': list.sort((a, b) => a.daysLeft - b.daysLeft); break;
        case 'most-donors': list.sort((a, b) => b.donors - a.donors); break;
        default: list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }
      return list;
    },
    render() {
      const el = $('#causesGrid');
      if (!el) return;
      const list = this.getFiltered();
      el.innerHTML = list.length ? list.map(c => CampaignCard.render(c)).join('')
        : '<div class="empty-state"><div class="empty-icon">🔍</div><p>No campaigns found</p></div>';
    },
    bind() {
      $$('.filter-btn[data-cat]').forEach(b => b.addEventListener('click', () => {
        $$('.filter-btn[data-cat]').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        this.filter = b.dataset.cat;
        this.render();
      }));
      const sortEl = $('#causesSort');
      sortEl?.addEventListener('change', () => { this.sort = sortEl.value; this.render(); });
      const searchEl = $('#causesSearch');
      searchEl?.addEventListener('input', () => { this.search = searchEl.value; this.render(); });
    }
  };

  /* ── Campaign Detail ── */
  const CampaignDetail = {
    init() {
      const id = new URLSearchParams(location.search).get('id');
      this.campaign = getCampaign(id);
      if (!this.campaign) return;
      this.renderHeader();
      this.renderStory();
      this.renderTiers();
      this.renderUpdates();
      this.renderPanel();
      this.renderDonors();
      this.bindShare();
    },
    renderHeader() {
      const c = this.campaign;
      const el = $('#campaignHeader');
      if (!el) return;
      el.innerHTML = `<div class="campaign-hero-img"><img src="${c.image}" alt="${c.title}"></div>
        <h1 class="campaign-detail-title">${c.title}</h1>`;
    },
    renderStory() {
      const el = $('#campaignStory');
      if (!el) return;
      el.innerHTML = `<p>${this.campaign.description}</p>`;
    },
    renderTiers() {
      const el = $('#impactTiers');
      if (!el) return;
      el.innerHTML = '<h3>How Your Donation Helps</h3>' +
        this.campaign.impactTiers.map(t => `<div class="impact-tier"><span class="impact-tier-amount">${money(t.amount)}</span><span class="impact-tier-desc">→ ${t.desc}</span></div>`).join('');
    },
    renderUpdates() {
      const el = $('#campaignUpdates');
      if (!el) return;
      el.innerHTML = '<h3 style="margin-bottom:var(--sp-6)">Campaign Updates</h3><div class="campaign-timeline">' +
        this.campaign.updates.map(u => `<div class="timeline-entry"><div class="timeline-date">📅 ${new Date(u.date).toLocaleDateString('en-BD', { month: 'short', day: 'numeric', year: 'numeric' })}</div><div class="timeline-title">${u.title}</div><div class="timeline-text">${u.text}</div></div>`).join('') + '</div>';
    },
    renderPanel() {
      const c = this.campaign, el = $('#donatePanel');
      if (!el) return;
      const p = pct(c.raised, c.goal);
      const urgent = c.daysLeft <= 10 && c.status === 'active';
      el.innerHTML = `<div class="donate-panel-raised">${money(c.raised)} raised</div>
        <div class="donate-panel-goal">of ${money(c.goal)} goal</div>
        <div class="progress-bar"><div class="progress-fill${urgent ? ' urgent' : ''}" style="width:${p}%"></div></div>
        <div class="donate-panel-stats"><span><strong>${p}%</strong> funded</span><span><strong>${c.donors}</strong> donors</span><span><strong>${c.daysLeft > 0 ? c.daysLeft + ' days' : 'Ended'}</strong></span></div>
        ${c.status === 'active' ? `<a href="donate.html?campaign=${c.id}" class="btn btn-donate btn-lg" style="width:100%;justify-content:center;">❤ Donate Now</a>` : '<div class="btn btn-primary btn-lg" style="width:100%;justify-content:center;opacity:0.6;pointer-events:none;">✓ Successfully Funded</div>'}
        <div class="share-widget"><button class="share-btn" data-share="copy" title="Copy Link">🔗</button><button class="share-btn" data-share="facebook" title="Share on Facebook">📘</button><button class="share-btn" data-share="twitter" title="Share on Twitter">🐦</button><button class="share-btn" data-share="whatsapp" title="Share on WhatsApp">💬</button></div>
        <div class="donor-list" id="recentDonors"></div>`;
    },
    renderDonors() {
      const el = $('#recentDonors');
      if (!el) return;
      const donors = NP.donations.filter(d => d.campaignId === this.campaign.id).slice(0, 5);
      el.innerHTML = `<h4>Recent Donors</h4>` + donors.map(d => {
        const initials = d.anonymous ? '?' : d.name.split(' ').map(w => w[0]).join('');
        return `<div class="donor-item"><div class="donor-avatar">${initials}</div><div><div class="donor-name">${d.anonymous ? 'Anonymous' : d.name}</div><div class="donor-meta">${money(d.amount)} • ${ago(d.date)}</div></div></div>`;
      }).join('');
    },
    bindShare() {
      document.addEventListener('click', e => {
        const btn = e.target.closest('[data-share]');
        if (!btn) return;
        const url = location.href, title = this.campaign?.title || NP.site.name;
        switch (btn.dataset.share) {
          case 'copy': navigator.clipboard?.writeText(url).then(() => Toast.show('Link copied!')); break;
          case 'facebook': window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,'_blank','width=600,height=400'); break;
          case 'twitter': window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,'_blank','width=600,height=400'); break;
          case 'whatsapp': window.open(`https://wa.me/?text=${encodeURIComponent(title+' '+url)}`,'_blank'); break;
        }
      });
    }
  };

  /* ── Donate Page ── */
  const DonatePage = {
    step: 1,
    amount: 0,
    frequency: 'onetime',
    campaign: null,
    payment: '',
    init() {
      const cid = new URLSearchParams(location.search).get('campaign');
      this.campaign = getCampaign(cid) || NP.campaigns[0];
      const sel = $('#campaignSelect');
      if (sel) {
        sel.innerHTML = NP.campaigns.filter(c => c.status === 'active').map(c => `<option value="${c.id}"${c.id === this.campaign.id ? ' selected' : ''}>${c.title}</option>`).join('');
        sel.addEventListener('change', () => { this.campaign = getCampaign(sel.value); });
      }
      this.renderAmounts();
      this.bindSteps();
      this.bindAmounts();
      this.bindPayment();
      this.bindForm();
    },
    renderAmounts() {
      const el = $('#amountGrid');
      if (!el) return;
      const tiers = this.campaign?.impactTiers || [];
      el.innerHTML = NP.donationAmounts.map(a => {
        const tier = tiers.find(t => t.amount === a);
        return `<button class="amount-btn" data-amount="${a}">৳${a.toLocaleString()}${tier ? `<span class="amount-impact">${tier.desc}</span>` : ''}</button>`;
      }).join('');
    },
    bindAmounts() {
      document.addEventListener('click', e => {
        const btn = e.target.closest('.amount-btn');
        if (!btn) return;
        $$('.amount-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.amount = parseInt(btn.dataset.amount);
        const custom = $('#customAmount');
        if (custom) custom.value = '';
      });
      const custom = $('#customAmount');
      custom?.addEventListener('input', () => {
        $$('.amount-btn').forEach(b => b.classList.remove('active'));
        this.amount = parseInt(custom.value) || 0;
      });
      document.querySelectorAll('input[name="frequency"]')?.forEach(r => {
        r.addEventListener('change', () => { this.frequency = r.value; });
      });
    },
    bindPayment() {
      document.addEventListener('click', e => {
        const btn = e.target.closest('.payment-method');
        if (!btn) return;
        $$('.payment-method').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.payment = btn.dataset.method;
      });
    },
    bindSteps() {
      document.addEventListener('click', e => {
        if (e.target.closest('.btn-next')) {
          if (this.step === 1 && this.amount < 100) { Toast.show('Minimum donation is ৳100', 'error'); return; }
          if (this.step === 2) {
            const name = $('#donorName')?.value, email = $('#donorEmail')?.value;
            if (!name || !email) { Toast.show('Please fill in required fields', 'error'); return; }
          }
          if (this.step === 3) {
            if (!this.payment) { Toast.show('Please select a payment method', 'error'); return; }
            this.complete(); return;
          }
          this.step++;
          this.showStep();
        }
        if (e.target.closest('.btn-prev')) { this.step--; this.showStep(); }
      });
    },
    showStep() {
      $$('.donate-step').forEach(s => s.classList.remove('active'));
      $(`.donate-step[data-step="${this.step}"]`)?.classList.add('active');
      $$('.step-circle').forEach((c, i) => {
        c.classList.remove('active', 'done');
        if (i + 1 === this.step) c.classList.add('active');
        if (i + 1 < this.step) c.classList.add('done');
      });
      $$('.step-line').forEach((l, i) => l.classList.toggle('active', i + 1 < this.step));
      if (this.step === 3) this.renderSummary();
    },
    renderSummary() {
      const el = $('#donationSummary');
      if (!el) return;
      el.innerHTML = `<h3>Donation Summary</h3>
        <div class="summary-row"><span>Campaign</span><span>${this.campaign?.title || 'General Fund'}</span></div>
        <div class="summary-row"><span>Amount</span><span>${money(this.amount)}</span></div>
        <div class="summary-row"><span>Frequency</span><span>${this.frequency === 'monthly' ? 'Monthly' : 'One-time'}</span></div>
        <div class="summary-row"><span>Payment</span><span>${this.payment}</span></div>
        <div class="summary-row total"><span>Total</span><span>${money(this.amount)}</span></div>`;
    },
    complete() {
      const receipt = 'DON-2026-' + String(Math.floor(Math.random() * 9000) + 1000);
      const donation = {
        id: 'd' + Date.now(),
        campaignId: this.campaign?.id,
        userId: NP.currentUser.id,
        name: $('#donorName')?.value || NP.currentUser.name,
        amount: this.amount,
        anonymous: $('#donorAnon')?.checked || false,
        dedication: $('#donorDedication')?.value || '',
        date: new Date().toISOString(),
        receipt
      };
      const userDonations = State.get('donations', []);
      userDonations.push(donation);
      State.set('donations', userDonations);

      $$('.donate-step').forEach(s => s.classList.remove('active'));
      $('.step-indicator').style.display = 'none';
      const success = $('.donate-success');
      if (success) {
        success.classList.add('active');
        $('#successAmount').textContent = money(this.amount);
        $('#successCampaign').textContent = this.campaign?.title || 'General Fund';
        $('#successReceipt').textContent = receipt;
      }
      this.showConfetti();
    },
    showConfetti() {
      const c = $('.confetti-container');
      if (!c) return;
      c.classList.add('active');
      const colors = ['#059669','#F59E0B','#EF4444','#3B82F6','#8B5CF6','#EC4899'];
      for (let i = 0; i < 60; i++) {
        const p = document.createElement('div');
        p.className = 'confetti';
        p.style.cssText = `left:${Math.random()*100}%;background:${colors[i%colors.length]};animation-delay:${Math.random()*2}s;animation-duration:${2+Math.random()*2}s;width:${6+Math.random()*8}px;height:${6+Math.random()*8}px;border-radius:${Math.random()>0.5?'50%':'2px'};`;
        c.appendChild(p);
      }
      setTimeout(() => { c.classList.remove('active'); c.innerHTML = ''; }, 4000);
    },
    bindForm() {}
  };

  /* ── Impact Page ── */
  const ImpactPage = {
    init() {
      this.renderStats();
      this.renderCategories();
      this.renderTable();
      this.initCharts();
    },
    renderStats() {
      const el = $('#impactCounters');
      if (!el) return;
      const s = NP.stats;
      el.innerHTML = [
        { val: s.totalRaised, label: 'Total Raised', suffix: '' },
        { val: s.livesChanged, label: 'Lives Changed', suffix: '+' },
        { val: s.projectsCompleted, label: 'Projects Completed', suffix: '+' },
        { val: s.regionsServed, label: 'Regions Served', suffix: '' }
      ].map(i => `<div class="stat-card"><div class="stat-number" data-count="${i.val}" data-suffix="${i.suffix}">0</div><div class="stat-label">${i.label}</div></div>`).join('');
    },
    renderCategories() {
      const el = $('#impactCategories');
      if (!el) return;
      el.innerHTML = NP.impactByCategory.map(c => `<div class="impact-cat-card"><div class="impact-cat-icon">${c.icon}</div><div class="impact-cat-title">${c.category}</div><div class="impact-cat-stat">${c.projects} projects • ${c.peopleHelped.toLocaleString()} helped</div></div>`).join('');
    },
    renderTable() {
      const el = $('#transparencyTable');
      if (!el) return;
      const totals = NP.fundAllocation.reduce((a, c) => ({ r: a.r + c.received, s: a.s + c.spent }), { r: 0, s: 0 });
      el.innerHTML = `<table class="transparency-table"><thead><tr><th>Category</th><th>Received</th><th>Spent</th><th>Remaining</th><th>Usage</th></tr></thead><tbody>` +
        NP.fundAllocation.map(c => `<tr><td>${c.category}</td><td>${money(c.received)}</td><td>${money(c.spent)}</td><td>${money(c.received - c.spent)}</td><td><div class="ratio-bar"><div class="ratio-fill" style="width:${Math.round(c.spent/c.received*100)}%"></div></div></td></tr>`).join('') +
        `<tr class="total-row"><td>Total</td><td>${money(totals.r)}</td><td>${money(totals.s)}</td><td>${money(totals.r - totals.s)}</td><td></td></tr></tbody></table>`;
    },
    initCharts() {
      if (typeof Chart === 'undefined') return;
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const textColor = isDark ? '#94A3B8' : '#6B7280';

      // Donut Chart
      const donutCtx = document.getElementById('allocationChart')?.getContext('2d');
      if (donutCtx) {
        new Chart(donutCtx, {
          type: 'doughnut',
          data: {
            labels: NP.fundAllocation.map(c => c.category),
            datasets: [{ data: NP.fundAllocation.map(c => c.percentage), backgroundColor: NP.fundAllocation.map(c => c.color), borderWidth: 0 }]
          },
          options: { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: textColor, padding: 16 } } }, cutout: '65%' }
        });
      }

      // Line Chart
      const lineCtx = document.getElementById('trendChart')?.getContext('2d');
      if (lineCtx) {
        new Chart(lineCtx, {
          type: 'line',
          data: {
            labels: NP.donationTrend.map(d => d.month),
            datasets: [{
              label: 'Donations (৳)',
              data: NP.donationTrend.map(d => d.amount),
              borderColor: isDark ? '#34D399' : '#059669',
              backgroundColor: isDark ? 'rgba(52,211,153,0.1)' : 'rgba(5,150,105,0.1)',
              fill: true, tension: 0.4, pointRadius: 4
            }]
          },
          options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
              x: { ticks: { color: textColor }, grid: { color: isDark ? '#334155' : '#F3F4F6' } },
              y: { ticks: { color: textColor, callback: v => '৳' + (v/1000) + 'K' }, grid: { color: isDark ? '#334155' : '#F3F4F6' } }
            }
          }
        });
      }
    }
  };

  /* ── Volunteer Page ── */
  const VolunteerPage = {
    filter: 'All',
    init() {
      this.render();
      this.bindFilters();
      this.bindForm();
    },
    render() {
      const el = $('#volunteerList');
      if (!el) return;
      let list = NP.volunteers;
      if (this.filter !== 'All') list = list.filter(v => v.type === this.filter);
      el.innerHTML = list.map(v => {
        const icon = v.type === 'Field Work' ? '🌿' : v.type === 'Events' ? '🎉' : v.type === 'Admin' ? '📋' : '💻';
        return `<div class="volunteer-card">
          <div class="volunteer-icon">${icon}</div>
          <div>
            <div class="volunteer-card-title">${v.title} ${v.urgent ? '<span class="badge-urgent">Urgent</span>' : ''} ${v.remote ? '<span class="badge-remote">Remote</span>' : ''}</div>
            <div class="volunteer-card-info"><span>📍 ${v.location}</span><span>🕐 ${v.hours}</span><span>📅 ${v.duration}</span><span>👥 ${v.spots} spots</span></div>
            <div class="skill-tags">${v.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
          </div>
          <div class="volunteer-card-actions"><button class="btn btn-primary btn-sm" onclick="document.getElementById('volForm').scrollIntoView({behavior:'smooth'})">Apply</button></div>
        </div>`;
      }).join('');
    },
    bindFilters() {
      $$('.filter-btn[data-vol]').forEach(b => b.addEventListener('click', () => {
        $$('.filter-btn[data-vol]').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        this.filter = b.dataset.vol;
        this.render();
      }));
    },
    bindForm() {
      $('#volForm')?.addEventListener('submit', e => {
        e.preventDefault();
        Toast.show('Application submitted! We\'ll contact you within 3 business days.');
        e.target.reset();
      });
    }
  };

  /* ── Events Page ── */
  const EventsPage = {
    tab: 'upcoming',
    init() {
      this.render();
      this.bindTabs();
      this.startCountdowns();
      this.bindRegistration();
    },
    render() {
      const el = $('#eventsList');
      if (!el) return;
      const list = NP.events.filter(e => this.tab === 'upcoming' ? e.status === 'upcoming' : e.status === 'past');
      el.innerHTML = list.length ? list.map(e => EventCard.render(e)).join('')
        : '<div class="empty-state"><div class="empty-icon">📅</div><p>No events found</p></div>';
      this.startCountdowns();
    },
    bindTabs() {
      $$('.filter-btn[data-tab]').forEach(b => b.addEventListener('click', () => {
        $$('.filter-btn[data-tab]').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        this.tab = b.dataset.tab;
        this.render();
      }));
    },
    startCountdowns() {
      $$('[data-countdown]').forEach(el => {
        const target = new Date(el.dataset.countdown);
        const update = () => {
          const diff = target - Date.now();
          if (diff <= 0) { el.innerHTML = '<strong style="color:var(--color-primary)">Event Started!</strong>'; return; }
          const d = Math.floor(diff / 86400000), h = Math.floor((diff % 86400000) / 3600000),
                m = Math.floor((diff % 3600000) / 60000), s = Math.floor((diff % 60000) / 1000);
          el.innerHTML = [
            { n: d, l: 'Days' }, { n: h, l: 'Hours' }, { n: m, l: 'Mins' }, { n: s, l: 'Secs' }
          ].map(u => `<div class="countdown-unit"><div class="number">${u.n}</div><div class="label">${u.l}</div></div>`).join('');
        };
        update();
        setInterval(update, 1000);
      });
    },
    bindRegistration() {
      const modal = $('.modal-overlay');
      if (!modal) return;
      modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });
      $('.modal-close', modal)?.addEventListener('click', () => modal.classList.remove('active'));
      document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('active'); });
      $('#regForm')?.addEventListener('submit', e => {
        e.preventDefault();
        const content = $('.modal-content', modal);
        if (content) content.innerHTML = `<div class="reg-success"><div class="success-icon">🎉</div><h3>Registration Confirmed!</h3><p style="color:var(--color-text-secondary);margin-top:var(--sp-4)">You're registered. Check your email for details.</p><button class="btn btn-primary" style="margin-top:var(--sp-6)" onclick="document.querySelector('.modal-overlay').classList.remove('active')">Close</button></div>`;
        Toast.show('Registered successfully!');
      });
    }
  };

  /* ── Stories Page ── */
  const StoriesPage = {
    init() {
      const el = $('#storiesList');
      if (!el) return;
      const featured = NP.stories.find(s => s.featured);
      const others = NP.stories.filter(s => !s.featured);
      let html = '';
      if (featured) {
        html += `<div class="story-featured"><img src="${featured.image}" alt="${featured.title}"><div class="story-featured-content"><h2 style="font-family:var(--font-heading);margin-bottom:var(--sp-4)">${featured.title}</h2><p class="story-quote">${featured.quote}</p><p class="story-author">— ${featured.beneficiary}, <span class="story-location">${featured.location}</span></p><p style="color:var(--color-text-secondary);margin-top:var(--sp-4);font-size:0.9375rem;line-height:1.7">${featured.body}</p>${featured.campaignId ? `<a href="campaign.html?id=${featured.campaignId}" class="btn btn-primary" style="margin-top:var(--sp-6);width:fit-content">View Campaign</a>` : ''}</div></div>`;
      }
      html += '<div class="story-grid">' + others.map(s => `<div class="story-card"><img src="${s.image}" alt="${s.title}"><div class="story-card-body"><h3 class="story-card-title">${s.title}</h3><p class="story-card-excerpt">${s.quote}</p><p style="font-size:0.8125rem;color:var(--color-text-secondary);margin-bottom:var(--sp-3)">— ${s.beneficiary}, ${s.location}</p><p style="font-size:0.875rem;color:var(--color-text-secondary);line-height:1.6;margin-bottom:var(--sp-4)">${s.body.slice(0,150)}...</p>${s.campaignId ? `<a href="campaign.html?id=${s.campaignId}" class="btn btn-outline btn-sm">Related Campaign</a>` : ''}</div></div>`).join('') + '</div>';
      el.innerHTML = html;
    }
  };

  /* ── About Page ── */
  const AboutPage = {
    init() {
      this.renderTeam();
      this.renderTimeline();
      this.renderPartners();
    },
    renderTeam() {
      const el = $('#teamGrid');
      if (!el) return;
      el.innerHTML = NP.team.map(m => `<div class="team-card"><img src="${m.avatar}" alt="${m.name}"><div class="team-card-name">${m.name}</div><div class="team-card-role">${m.role}</div><p class="team-card-bio">${m.bio}</p></div>`).join('');
    },
    renderTimeline() {
      const el = $('#orgTimeline');
      if (!el) return;
      el.innerHTML = NP.timeline.map(t => `<div class="org-timeline-entry"><div class="org-timeline-year">${t.year}</div><div class="org-timeline-title">${t.title}</div><div class="org-timeline-text">${t.text}</div></div>`).join('');
    },
    renderPartners() {
      const el = $('#partnersGrid');
      if (!el) return;
      el.innerHTML = NP.partners.map(p => `<div class="partner-logo">${p}</div>`).join('');
    }
  };

  /* ── Admin Dashboard ── */
  const AdminDash = {
    section: 'overview',
    init() {
      this.bindNav();
      this.renderOverview();
    },
    bindNav() {
      $$('.admin-nav-item').forEach(btn => btn.addEventListener('click', () => {
        $$('.admin-nav-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.section = btn.dataset.section;
        $$('.admin-section').forEach(s => s.classList.remove('active'));
        $(`#admin-${this.section}`)?.classList.add('active');
        if (this.section === 'overview') this.renderOverview();
        if (this.section === 'campaigns') this.renderCampaigns();
        if (this.section === 'donations') this.renderDonations();
        if (this.section === 'volunteers') this.renderVolunteers();
        if (this.section === 'events') this.renderEvents();
      }));
    },
    renderOverview() {
      const el = $('#adminStats');
      if (!el) return;
      const s = NP.stats;
      el.innerHTML = [
        { label: 'Total Raised', val: money(s.totalRaised) },
        { label: 'This Month', val: money(s.thisMonth) },
        { label: 'Active Campaigns', val: s.activeCampaigns },
        { label: 'Active Volunteers', val: s.activeVolunteers }
      ].map(i => `<div class="admin-stat-card"><div class="admin-stat-label">${i.label}</div><div class="admin-stat-value">${i.val}</div></div>`).join('');

      this.renderDonationChart();
      this.renderRecentDonations();
      this.renderCampaignStatus();
    },
    renderDonationChart() {
      if (typeof Chart === 'undefined') return;
      const ctx = document.getElementById('adminTrendChart')?.getContext('2d');
      if (!ctx) return;
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: NP.adminDonationTrend.map(d => d.day),
          datasets: [{
            label: 'Donations (৳)',
            data: NP.adminDonationTrend.map(d => d.amount),
            borderColor: isDark ? '#34D399' : '#059669',
            backgroundColor: isDark ? 'rgba(52,211,153,0.1)' : 'rgba(5,150,105,0.1)',
            fill: true, tension: 0.4, pointRadius: 3
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: isDark ? '#94A3B8' : '#6B7280' }, grid: { color: isDark ? '#334155' : '#F3F4F6' } },
            y: { ticks: { color: isDark ? '#94A3B8' : '#6B7280', callback: v => '৳' + (v/1000) + 'K' }, grid: { color: isDark ? '#334155' : '#F3F4F6' } }
          }
        }
      });
    },
    renderRecentDonations() {
      const el = $('#recentDonationsTable');
      if (!el) return;
      el.innerHTML = `<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Donor</th><th>Amount</th><th>Campaign</th><th>Time</th></tr></thead><tbody>` +
        NP.donations.slice(0, 8).map(d => {
          const camp = getCampaign(d.campaignId);
          return `<tr><td>${d.anonymous ? 'Anonymous' : d.name}</td><td><strong>${money(d.amount)}</strong></td><td>${camp?.title || 'General'}</td><td>${ago(d.date)}</td></tr>`;
        }).join('') + '</tbody></table></div>';
    },
    renderCampaignStatus() {
      const el = $('#campaignStatusTable');
      if (!el) return;
      el.innerHTML = `<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Campaign</th><th>Progress</th><th>Raised</th><th>Status</th><th>Actions</th></tr></thead><tbody>` +
        NP.campaigns.map(c => {
          const p = pct(c.raised, c.goal);
          return `<tr><td>${c.title}</td><td><div class="progress-bar" style="width:120px;display:inline-block"><div class="progress-fill" style="width:${p}%"></div></div> ${p}%</td><td>${money(c.raised)}</td><td><span class="status-badge ${c.status}">${c.status}</span></td><td><div class="admin-actions"><button onclick="Toast.show('Campaign updated')">Edit</button><button onclick="Toast.show('Status toggled')">${c.status === 'active' ? 'Pause' : 'Activate'}</button></div></td></tr>`;
        }).join('') + '</tbody></table></div>';
    },
    renderCampaigns() {
      this.renderCampaignStatus();
    },
    renderDonations() {
      const el = $('#admin-donations');
      if (!el) return;
      const content = el.querySelector('.admin-content') || el;
      const tableHtml = `<h2>All Donations</h2><div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Receipt</th><th>Donor</th><th>Amount</th><th>Campaign</th><th>Date</th></tr></thead><tbody>` +
        NP.donations.map(d => {
          const camp = getCampaign(d.campaignId);
          return `<tr><td><code>${d.receipt}</code></td><td>${d.anonymous ? 'Anonymous' : d.name}</td><td><strong>${money(d.amount)}</strong></td><td>${camp?.title || 'General'}</td><td>${new Date(d.date).toLocaleDateString()}</td></tr>`;
        }).join('') + '</tbody></table></div>';
      if (el.querySelector('.admin-content')) el.querySelector('.admin-content').innerHTML = tableHtml;
      else { const wrap = el.querySelector('h2'); if (wrap) wrap.insertAdjacentHTML('afterend', tableHtml.replace(/<h2>.*?<\/h2>/, '')); }
    },
    renderVolunteers() {},
    renderEvents() {}
  };

  /* ══════════════════════════════════════
     INIT
  ══════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', () => {
    Theme.init();
    initHeader();
    Auth.init();
    Drawer.init();
    initBackToTop();
    initNewsletter();

    const page = document.body.dataset.page;
    switch (page) {
      case 'home': HomePage.init(); break;
      case 'causes': CausesPage.init(); break;
      case 'campaign': CampaignDetail.init(); break;
      case 'donate': DonatePage.init(); break;
      case 'impact': ImpactPage.init(); break;
      case 'volunteer': VolunteerPage.init(); break;
      case 'events': EventsPage.init(); break;
      case 'stories': StoriesPage.init(); break;
      case 'about': AboutPage.init(); break;
      case 'admin': AdminDash.init(); break;
    }

    observeCounters();
  });

  // Expose Toast for inline onclick
  window.Toast = Toast;
})();
