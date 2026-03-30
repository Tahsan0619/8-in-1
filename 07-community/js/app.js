/* =============================================
   COMMUNITY PLATFORM — APPLICATION LOGIC
   Page routing, interactions, localStorage
   ============================================= */

(function () {
  'use strict';

  // ========== THEME ==========
  const savedTheme = localStorage.getItem('community-theme') || 'light';
  if (savedTheme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

  function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
    localStorage.setItem('community-theme', isDark ? 'light' : 'dark');
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = isDark ? '🌙' : '☀️';
  }

  // ========== BOOKMARKS (localStorage) ==========
  function getBookmarks() {
    return JSON.parse(localStorage.getItem('community-bookmarks') || '[]');
  }
  function toggleBookmark(type, id) {
    const bm = getBookmarks();
    const key = type + ':' + id;
    const idx = bm.indexOf(key);
    if (idx > -1) bm.splice(idx, 1); else bm.push(key);
    localStorage.setItem('community-bookmarks', JSON.stringify(bm));
    showToast(idx > -1 ? 'Bookmark removed' : 'Bookmarked!', 'success');
    return idx === -1;
  }
  function isBookmarked(type, id) {
    return getBookmarks().includes(type + ':' + id);
  }

  // ========== VOTES (localStorage) ==========
  function getVotes() { return JSON.parse(localStorage.getItem('community-votes') || '{}'); }
  function setVote(id, dir) {
    const votes = getVotes();
    votes[id] = dir;
    localStorage.setItem('community-votes', JSON.stringify(votes));
  }

  // ========== TOAST ==========
  function showToast(msg, type) {
    let container = document.querySelector('.toast-container');
    if (!container) { container = document.createElement('div'); container.className = 'toast-container'; document.body.appendChild(container); }
    const toast = document.createElement('div');
    toast.className = 'toast toast-' + (type || 'info');
    toast.textContent = msg;
    container.prepend(toast);
    if (container.children.length > 3) container.lastChild.remove();
    setTimeout(() => toast.remove(), 4000);
  }

  // ========== HEADER SCROLL ==========
  window.addEventListener('scroll', function () {
    const h = document.querySelector('.header');
    if (h) h.classList.toggle('scrolled', window.scrollY > 10);
    const st = document.querySelector('.scroll-top');
    if (st) st.classList.toggle('visible', window.scrollY > 400);
  });

  // ========== MOBILE MENU ==========
  function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.mobile-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', () => { toggle.classList.toggle('active'); menu.classList.toggle('active'); });
    }
  }

  // ========== SEARCH OVERLAY ==========
  function initSearch() {
    const overlay = document.querySelector('.search-overlay');
    if (!overlay) return;
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); overlay.classList.add('active'); const inp = overlay.querySelector('input'); if (inp) inp.focus(); }
      if (e.key === 'Escape') overlay.classList.remove('active');
    });
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('active'); });
    const closeBtn = overlay.querySelector('.close-search');
    if (closeBtn) closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
    const searchInput = overlay.querySelector('input');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        const q = e.target.value.toLowerCase().trim();
        const resultsContainer = overlay.querySelector('.search-results-body');
        if (!resultsContainer) return;
        if (!q) { resultsContainer.innerHTML = renderRecentSearches(); return; }
        resultsContainer.innerHTML = renderSearchResults(q);
      });
    }
  }

  function renderRecentSearches() {
    return '<div class="search-results-group"><h5>Recent</h5><div class="search-recent-tags">' +
      CommunityData.trendingTopics.slice(0, 4).map(t => '<span class="tag">' + t.tag + '</span>').join('') + '</div></div>';
  }

  function renderSearchResults(q) {
    let html = '';
    const jobs = CommunityData.jobs.filter(j => j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q)).slice(0, 3);
    const threads = CommunityData.threads.filter(t => t.title.toLowerCase().includes(q)).slice(0, 3);
    const listings = CommunityData.listings.filter(l => l.name.toLowerCase().includes(q)).slice(0, 3);
    if (jobs.length) {
      html += '<div class="search-results-group"><h5>Jobs</h5>' + jobs.map(j =>
        '<a class="search-result-item" href="job.html?id=' + j.id + '">💼 ' + j.title + ' — ' + j.company + '</a>').join('') + '</div>';
    }
    if (threads.length) {
      html += '<div class="search-results-group"><h5>Forum</h5>' + threads.map(t =>
        '<a class="search-result-item" href="thread.html?id=' + t.id + '">💬 ' + t.title + '</a>').join('') + '</div>';
    }
    if (listings.length) {
      html += '<div class="search-results-group"><h5>Directory</h5>' + listings.map(l =>
        '<a class="search-result-item" href="listing.html?id=' + l.id + '">📍 ' + l.name + '</a>').join('') + '</div>';
    }
    if (!html) html = '<div class="search-results-group"><p style="font-size:14px;color:var(--text-secondary)">No results found</p></div>';
    return html;
  }

  // ========== NOTIFICATION DROPDOWN ==========
  function initNotifications() {
    const btn = document.querySelector('.notif-btn');
    const drop = document.querySelector('.notif-dropdown');
    if (!btn || !drop) return;
    btn.addEventListener('click', e => { e.stopPropagation(); drop.classList.toggle('active'); });
    document.addEventListener('click', () => drop.classList.remove('active'));
    drop.addEventListener('click', e => e.stopPropagation());
    renderNotifications(drop);
  }

  function renderNotifications(drop) {
    const list = drop.querySelector('.notif-list');
    if (!list) return;
    list.innerHTML = CommunityData.notifications.map(n => {
      const user = n.from === 'system' ? { avatar: '', name: 'System' } : getUser(n.from);
      return '<a href="' + n.link + '" class="notif-item' + (n.read ? '' : ' unread') + '">' +
        (user.avatar ? '<img class="avatar avatar-sm" src="' + user.avatar + '" alt="">' : '<span>🔔</span>') +
        '<div><div>' + n.message + '</div><span class="notif-time">' + n.time + '</span></div></a>';
    }).join('');
  }

  // ========== SIDEBAR NAV ACTIVE ==========
  function setActiveNav() {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.sidebar-nav a, .nav a, .bottom-nav-item').forEach(a => {
      const href = a.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) a.classList.add('active');
      else a.classList.remove('active');
    });
  }

  // ========== RENDER HELPERS ==========
  function userBadge(user) {
    return '<span class="rep-badge ' + getRepClass(user.level) + '">' + user.level + ' · ' + user.reputation + '</span>';
  }

  function moduleIcon(type) {
    const icons = { job: '💼', thread: '💬', event: '🎤', review: '⭐', listing: '📍', feed: '📢' };
    return icons[type] || '📝';
  }

  // ========== PAGE: INDEX (FEED) ==========
  function initHomePage() {
    const feedContainer = document.getElementById('feed-list');
    const tabsContainer = document.querySelector('.feed-tabs');
    if (!feedContainer) return;

    let activeTab = 'all';

    if (tabsContainer) {
      tabsContainer.addEventListener('click', e => {
        const tab = e.target.closest('.feed-tab');
        if (!tab) return;
        tabsContainer.querySelectorAll('.feed-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeTab = tab.dataset.tab;
        renderFeed();
      });
    }

    function renderFeed() {
      let items = CommunityData.feedItems;
      if (activeTab !== 'all') items = items.filter(i => i.type === activeTab);
      feedContainer.innerHTML = items.map(item => {
        const user = getUser(item.author);
        return '<div class="card feed-card" data-module="' + (item.type === 'thread' ? 'forum' : item.type === 'job' ? 'jobs' : item.type === 'review' ? 'reviews' : item.type === 'event' ? 'events' : 'feed') + '">' +
          '<div class="feed-card-header"><img class="avatar" src="' + user.avatar + '" alt=""><div class="feed-card-meta"><span class="username">' + user.name + '</span> ' + userBadge(user) + '<br><span>' + timeAgo(item.createdAt) + ' · ' + moduleIcon(item.type) + '</span></div></div>' +
          '<div class="feed-card-body">' + escapeHTML(item.text) + '</div>' +
          '<div class="feed-card-actions">' +
          '<button onclick="App.likeFeedItem(\'' + item.id + '\', this)">❤️ <span>' + item.likes + '</span></button>' +
          '<button>💬 ' + item.comments + '</button>' +
          '<button class="' + (isBookmarked('feed', item.id) ? 'active' : '') + '" onclick="App.bookmarkFeed(\'' + item.id + '\', this)">🔖</button>' +
          '</div></div>';
      }).join('');
    }

    renderFeed();

    // Right sidebar widgets
    renderTrending();
    renderLeaderboard();
    renderCommunityStats();
    renderUpcomingEvents();
  }

  function renderTrending() {
    const el = document.getElementById('trending-list');
    if (!el) return;
    el.innerHTML = CommunityData.trendingTopics.map(t =>
      '<div class="trending-tag"><span class="trending-tag-hash">' + t.tag + '</span><span class="text-muted" style="margin-left:auto">' + t.count + ' posts</span></div>'
    ).join('');
  }

  function renderLeaderboard() {
    const el = document.getElementById('leaderboard-list');
    if (!el) return;
    el.innerHTML = CommunityData.leaderboard.map((item, i) => {
      const user = getUser(item.userId);
      return '<div class="leaderboard-item"><span class="leaderboard-rank">' + (i + 1) + '</span>' +
        '<img class="avatar avatar-sm" src="' + user.avatar + '" alt="">' +
        '<span style="font-size:14px;font-weight:500">' + user.name + '</span>' +
        '<span class="leaderboard-score">' + item.score.toLocaleString() + '</span></div>';
    }).join('');
  }

  function renderCommunityStats() {
    const el = document.getElementById('community-stats');
    if (!el) return;
    const s = CommunityData.communityStats;
    el.innerHTML = [
      ['Members', s.members.toLocaleString()],
      ['Total Posts', s.posts.toLocaleString()],
      ['Active Jobs', s.jobs],
      ['Events', s.events]
    ].map(([k, v]) => '<div class="community-stat"><span>' + k + '</span><span class="community-stat-val">' + v + '</span></div>').join('');
  }

  function renderUpcomingEvents() {
    const el = document.getElementById('upcoming-events');
    if (!el) return;
    el.innerHTML = CommunityData.events.slice(0, 3).map(ev => {
      const d = new Date(ev.date);
      return '<a href="event.html?id=' + ev.id + '" class="widget-item"><div class="date-badge" style="position:static;padding:2px 6px"><span class="date-badge-month">' + d.toLocaleString('en', { month: 'short' }).toUpperCase() + '</span><span class="date-badge-day" style="font-size:16px">' + d.getDate() + '</span></div><div style="font-size:13px;font-weight:500">' + ev.title + '</div></a>';
    }).join('');
  }

  // ========== PAGE: JOBS ==========
  function initJobsPage() {
    const listEl = document.getElementById('jobs-list');
    if (!listEl) return;
    let filteredJobs = [...CommunityData.jobs];
    let searchQuery = '';
    let typeFilter = 'All';
    let remoteFilter = false;

    const searchInput = document.getElementById('job-search');
    if (searchInput) searchInput.addEventListener('input', e => { searchQuery = e.target.value.toLowerCase(); renderJobs(); });

    const typeSelect = document.getElementById('job-type-filter');
    if (typeSelect) typeSelect.addEventListener('change', e => { typeFilter = e.target.value; renderJobs(); });

    const remoteCheck = document.getElementById('remote-only');
    if (remoteCheck) remoteCheck.addEventListener('change', e => { remoteFilter = e.target.checked; renderJobs(); });

    function renderJobs() {
      let jobs = CommunityData.jobs;
      if (searchQuery) jobs = jobs.filter(j => j.title.toLowerCase().includes(searchQuery) || j.company.toLowerCase().includes(searchQuery) || j.tags.some(t => t.toLowerCase().includes(searchQuery)));
      if (typeFilter !== 'All') jobs = jobs.filter(j => j.type === typeFilter);
      if (remoteFilter) jobs = jobs.filter(j => j.remote);

      listEl.innerHTML = jobs.length ? jobs.map(j => {
        const badgeClass = j.type === 'Full-time' ? 'badge-fulltime' : j.type === 'Part-time' ? 'badge-parttime' : j.type === 'Contract' ? 'badge-contract' : 'badge-fulltime';
        return '<div class="job-card">' +
          '<img class="job-logo" src="' + j.companyLogo + '" alt="' + escapeHTML(j.company) + '">' +
          '<div class="job-info"><div class="job-title"><a href="job.html?id=' + j.id + '">' + escapeHTML(j.title) + '</a></div>' +
          '<div class="job-company">' + escapeHTML(j.company) + '</div>' +
          '<div class="job-details"><span>📍 ' + j.location + '</span><span class="job-salary">' + j.salary + '</span><span>👤 ' + j.applicants + ' applicants</span></div>' +
          '<div class="job-badges">' + (j.remote ? '<span class="badge-remote">Remote</span>' : '') + '<span class="' + badgeClass + '">' + j.type + '</span>' + (j.urgent ? '<span class="badge-urgent">Urgent</span>' : '') + '</div></div>' +
          '<div class="job-actions"><button class="btn btn-sm btn-outline" onclick="App.bookmarkJob(\'' + j.id + '\',this)">🔖</button><a href="job.html?id=' + j.id + '" class="btn btn-sm btn-jobs">View</a></div></div>';
      }).join('') : '<p class="text-muted text-center" style="padding:40px">No jobs match your filters.</p>';
    }

    renderJobs();
  }

  // ========== PAGE: JOB DETAIL ==========
  function initJobDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('id');
    const job = CommunityData.jobs.find(j => j.id === jobId);
    if (!job) { document.querySelector('.main-content').innerHTML = '<p class="text-muted text-center" style="padding:60px">Job not found.</p>'; return; }

    const poster = getUser(job.postedBy);
    document.getElementById('job-detail-content').innerHTML =
      '<div class="job-hero"><div class="job-hero-top"><img class="job-hero-logo" src="' + job.companyLogo + '" alt=""><div class="job-hero-info"><h1>' + escapeHTML(job.title) + '</h1>' +
      '<div class="job-company">' + escapeHTML(job.company) + '</div>' +
      '<div class="job-details" style="margin-top:8px"><span>📍 ' + job.location + '</span><span class="job-salary">' + job.salary + '</span><span>' + job.type + '</span></div>' +
      '<div class="job-badges" style="margin-top:8px">' + (job.remote ? '<span class="badge-remote">Remote</span>' : '') + (job.urgent ? '<span class="badge-urgent">Urgent</span>' : '') + '</div></div></div>' +
      '<div style="display:flex;gap:8px;margin-top:16px"><button class="btn btn-primary" onclick="App.applyJob(\'' + job.id + '\')">Apply Now</button><button class="btn btn-outline" onclick="App.bookmarkJob(\'' + job.id + '\',this)">🔖 Save</button></div></div>' +
      '<h2 class="mb-16">About this role</h2><p style="line-height:1.7;margin-bottom:24px">' + escapeHTML(job.description) + '</p>' +
      '<h3 class="mb-16">Requirements</h3><ul style="list-style:disc;padding-left:20px;margin-bottom:24px">' + job.requirements.map(r => '<li style="margin-bottom:8px">' + escapeHTML(r) + '</li>').join('') + '</ul>' +
      '<h3 class="mb-16">Benefits & Perks</h3><div class="benefits-grid">' + job.benefits.map(b => '<div class="benefit-item">✅ ' + escapeHTML(b) + '</div>').join('') + '</div>';

    const sidebarEl = document.getElementById('job-company-sidebar');
    if (sidebarEl) {
      sidebarEl.innerHTML = '<h3>' + escapeHTML(job.company) + '</h3>' +
        '<div class="company-detail">🏢 ' + job.companyInfo.size + ' employees</div>' +
        '<div class="company-detail">📅 Founded ' + job.companyInfo.founded + '</div>' +
        '<div class="company-detail">🌐 ' + job.companyInfo.website + '</div>' +
        '<p style="font-size:14px;color:var(--text-secondary);margin-top:12px">' + escapeHTML(job.companyInfo.about) + '</p>' +
        '<div style="margin-top:16px"><div class="company-detail">👤 Posted by</div><div style="display:flex;align-items:center;gap:8px;margin-top:6px"><img class="avatar avatar-sm" src="' + poster.avatar + '" alt=""><span style="font-size:14px;font-weight:500">' + poster.name + '</span></div></div>';
    }
  }

  // ========== PAGE: FORUM ==========
  function initForumPage() {
    const listEl = document.getElementById('forum-list');
    if (!listEl) return;
    let category = 'All';

    const tabsEl = document.querySelector('.feed-tabs');
    if (tabsEl) {
      tabsEl.addEventListener('click', e => {
        const tab = e.target.closest('.feed-tab');
        if (!tab) return;
        tabsEl.querySelectorAll('.feed-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        category = tab.dataset.tab;
        render();
      });
    }

    function render() {
      let threads = CommunityData.threads;
      if (category !== 'All') threads = threads.filter(t => t.tags.some(tag => tag.toLowerCase() === category.toLowerCase()));

      listEl.innerHTML = threads.map(t => {
        const author = getUser(t.author);
        const votes = getVotes();
        const myVote = votes[t.id] || 0;
        return '<div class="thread-card">' +
          '<div class="vote-group"><button class="vote-btn' + (myVote === 1 ? ' upvoted' : '') + '" onclick="App.voteThread(\'' + t.id + '\',1,this)">▲</button>' +
          '<span class="vote-score">' + t.votes + '</span>' +
          '<button class="vote-btn' + (myVote === -1 ? ' downvoted' : '') + '" onclick="App.voteThread(\'' + t.id + '\',-1,this)">▼</button></div>' +
          '<div class="thread-content"><div class="thread-title"><a href="thread.html?id=' + t.id + '">' + escapeHTML(t.title) + '</a></div>' +
          '<div class="thread-meta"><span><img class="avatar avatar-xs" src="' + author.avatar + '" alt="" style="vertical-align:middle"> ' + author.name + '</span>' +
          '<span>💬 ' + t.answers + ' answers</span><span>👁 ' + t.views + '</span>' +
          (t.solved ? '<span class="has-accepted">✓ Solved</span>' : '') +
          '<span>' + timeAgo(t.createdAt) + '</span></div>' +
          '<div class="tags" style="margin-top:8px">' + t.tags.map(tag => '<span class="tag">' + tag + '</span>').join('') + '</div></div></div>';
      }).join('');
    }

    render();
  }

  // ========== PAGE: THREAD DETAIL ==========
  function initThreadDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const threadId = urlParams.get('id');
    const thread = CommunityData.threads.find(t => t.id === threadId);
    if (!thread) { document.querySelector('.main-content').innerHTML = '<p class="text-muted text-center" style="padding:60px">Thread not found.</p>'; return; }

    const author = getUser(thread.author);
    const contentEl = document.getElementById('thread-detail-content');
    if (!contentEl) return;

    let html = '<div class="question-block"><div class="vote-group"><button class="vote-btn" onclick="App.voteThread(\'' + thread.id + '\',1,this)">▲</button><span class="vote-score">' + thread.votes + '</span><button class="vote-btn" onclick="App.voteThread(\'' + thread.id + '\',-1,this)">▼</button></div>' +
      '<div class="question-body"><h1>' + escapeHTML(thread.title) + '</h1>' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><img class="avatar avatar-sm" src="' + author.avatar + '" alt=""><span style="font-weight:500">' + author.name + '</span>' + userBadge(author) + '<span class="text-muted"> · ' + timeAgo(thread.createdAt) + '</span></div>' +
      '<div class="question-text">' + formatBody(thread.body) + '</div>' +
      '<div class="tags">' + thread.tags.map(tag => '<span class="tag">' + tag + '</span>').join('') + '</div></div></div>';

    if (thread.answersList && thread.answersList.length) {
      html += '<div class="answers-section"><h2>' + thread.answersList.length + ' Answer' + (thread.answersList.length > 1 ? 's' : '') + '</h2>';
      thread.answersList.forEach(a => {
        const aAuthor = getUser(a.author);
        html += '<div class="answer-block' + (a.accepted ? ' answer-accepted' : '') + '">' +
          '<div class="vote-group"><button class="vote-btn" onclick="App.voteAnswer(\'' + a.id + '\',1,this)">▲</button><span class="vote-score">' + a.votes + '</span><button class="vote-btn" onclick="App.voteAnswer(\'' + a.id + '\',-1,this)">▼</button></div>' +
          '<div class="answer-body">' + (a.accepted ? '<div class="accepted-badge">✓ Accepted Answer</div>' : '') +
          '<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><img class="avatar avatar-sm" src="' + aAuthor.avatar + '" alt=""><span style="font-weight:500">' + aAuthor.name + '</span>' + userBadge(aAuthor) + '<span class="text-muted"> · ' + timeAgo(a.createdAt) + '</span></div>' +
          '<div class="question-text">' + formatBody(a.body) + '</div>';
        if (a.comments && a.comments.length) {
          html += '<div class="answer-comments">';
          a.comments.forEach(c => {
            const cAuthor = getUser(c.author);
            html += '<div class="comment-item"><img class="avatar avatar-xs" src="' + cAuthor.avatar + '" alt="" style="vertical-align:middle"> <strong>' + cAuthor.name + '</strong>: ' + escapeHTML(c.body) + ' <span class="text-muted">· ' + timeAgo(c.createdAt) + '</span></div>';
          });
          html += '</div>';
        }
        html += '</div></div>';
      });
      html += '</div>';
    }

    html += '<div class="answer-editor" style="margin-top:40px"><h3 class="mb-16">Your Answer</h3>' +
      '<div class="editor-toolbar"><button title="Bold"><b>B</b></button><button title="Italic"><i>I</i></button><button title="Code">&lt;/&gt;</button><button title="Link">🔗</button><button title="List">☰</button></div>' +
      '<textarea class="editor-textarea" placeholder="Write your answer here... Markdown supported."></textarea>' +
      '<div style="display:flex;justify-content:flex-end;margin-top:12px"><button class="btn btn-primary" onclick="App.submitAnswer(\'' + thread.id + '\')">Post Answer</button></div></div>';

    contentEl.innerHTML = html;
  }

  // ========== PAGE: DIRECTORY ==========
  function initDirectoryPage() {
    const gridEl = document.getElementById('directory-grid');
    if (!gridEl) return;
    let category = 'All';
    let view = 'grid';

    const catTabs = document.querySelector('.feed-tabs');
    if (catTabs) {
      catTabs.addEventListener('click', e => {
        const tab = e.target.closest('.feed-tab');
        if (!tab) return;
        catTabs.querySelectorAll('.feed-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        category = tab.dataset.tab;
        render();
      });
    }

    const viewToggles = document.querySelectorAll('.view-toggle');
    viewToggles.forEach(btn => btn.addEventListener('click', () => {
      viewToggles.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      view = btn.dataset.view;
      render();
    }));

    function render() {
      let listings = CommunityData.listings;
      if (category !== 'All') listings = listings.filter(l => l.category === category);
      gridEl.className = view === 'list' ? '' : 'directory-grid';
      gridEl.innerHTML = listings.map(l =>
        '<div class="listing-card' + (view === 'list' ? ' job-card' : '') + '">' +
        (view !== 'list' ? '<div class="listing-thumb"><img src="' + l.image + '" alt="' + escapeHTML(l.name) + '"></div>' : '') +
        '<div class="listing-body"><h4><a href="listing.html?id=' + l.id + '">' + escapeHTML(l.name) + '</a></h4>' +
        '<div class="listing-rating"><span class="stars">' + starsHTML(Math.round(l.rating)) + '</span> ' + l.rating + ' (' + l.reviewCount + ')</div>' +
        '<div style="font-size:13px;color:var(--text-secondary)">' + l.category + ' · ' + l.priceRange + '</div>' +
        '<span class="' + (l.isOpen ? 'listing-status-open' : 'listing-status-closed') + '">' + (l.isOpen ? '● Open Now' : '● Closed') + '</span></div></div>'
      ).join('');
    }

    render();
    initDirectoryMap();
  }

  function initDirectoryMap() {
    const mapEl = document.getElementById('directory-map');
    if (!mapEl || typeof L === 'undefined') return;
    const map = L.map('directory-map').setView([23.78, 90.40], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map);
    CommunityData.listings.forEach(l => {
      L.marker([l.lat, l.lng]).addTo(map).bindPopup('<strong>' + escapeHTML(l.name) + '</strong><br>' + l.category + '<br>' + starsHTML(Math.round(l.rating)) + ' ' + l.rating);
    });
  }

  // ========== PAGE: LISTING DETAIL ==========
  function initListingDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const listing = CommunityData.listings.find(l => l.id === id);
    if (!listing) { document.querySelector('.main-content').innerHTML = '<p class="text-muted text-center" style="padding:60px">Listing not found.</p>'; return; }

    const contentEl = document.getElementById('listing-detail-content');
    if (!contentEl) return;

    const reviews = CommunityData.reviews.filter(r => r.listingId === id);
    const owner = getUser(listing.owner);
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const today = days[new Date().getDay()];

    contentEl.innerHTML =
      '<div class="listing-gallery"><img src="' + (listing.images[0] || listing.image) + '" alt=""><div class="listing-gallery-secondary">' + (listing.images.length > 1 ? '<img src="' + listing.images[1] + '" alt="">' : '') + '<div style="background:var(--bg-tertiary);display:flex;align-items:center;justify-content:center;font-size:14px;color:var(--text-secondary)">' + listing.images.length + ' photos</div></div></div>' +
      '<h1>' + escapeHTML(listing.name) + '</h1><div class="listing-rating" style="margin:8px 0 16px"><span class="stars" style="font-size:18px">' + starsHTML(Math.round(listing.rating)) + '</span> <strong>' + listing.rating + '</strong> (' + listing.reviewCount + ' reviews) · ' + listing.category + ' · ' + listing.priceRange + ' · <span class="' + (listing.isOpen ? 'listing-status-open' : 'listing-status-closed') + '">' + (listing.isOpen ? '● Open' : '● Closed') + '</span></div>' +
      '<p style="line-height:1.7;margin-bottom:24px">' + escapeHTML(listing.description) + '</p>' +
      '<h3 class="mb-16">Amenities</h3><div class="amenities-grid">' + listing.amenities.map(a => '<div class="amenity">✓ ' + a + '</div>').join('') + '</div>' +
      '<h3 class="mb-16" style="margin-top:24px">Hours</h3><table class="hours-table">' + Object.entries(listing.hours).map(([day, hrs]) => '<tr' + (day === today ? ' class="today"' : '') + '><td style="text-transform:capitalize;width:100px">' + day + '</td><td>' + hrs + '</td></tr>').join('') + '</table>' +
      '<h3 class="mb-16" style="margin-top:32px">Reviews (' + reviews.length + ')</h3>' + reviews.map(r => {
        const rAuthor = getUser(r.author);
        return '<div class="review-card"><div class="review-header"><img class="avatar" src="' + rAuthor.avatar + '" alt=""><div><strong>' + rAuthor.name + '</strong> ' + userBadge(rAuthor) + '<br><span class="text-muted" style="font-size:13px">' + r.createdAt + '</span></div></div>' +
          '<div class="review-stars">' + starsHTML(r.rating) + '</div><div class="review-title">' + escapeHTML(r.title) + '</div><div class="review-body">' + escapeHTML(r.body) + '</div>' +
          (r.ownerResponse ? '<div class="owner-response"><strong>Owner Response</strong> · ' + r.ownerResponse.date + '<br>' + escapeHTML(r.ownerResponse.body) + '</div>' : '') + '</div>';
      }).join('');

    const sidebarEl = document.getElementById('listing-sidebar');
    if (sidebarEl) {
      sidebarEl.innerHTML = '<h3>Contact</h3><div class="company-detail">📍 ' + listing.address + '</div><div class="company-detail">📞 ' + listing.phone + '</div><div class="company-detail">🌐 ' + listing.website + '</div>' +
        '<div style="margin-top:16px"><strong>Owner</strong><div style="display:flex;align-items:center;gap:8px;margin-top:8px"><img class="avatar avatar-sm" src="' + owner.avatar + '" alt=""><span style="font-size:14px">' + owner.name + '</span></div></div>' +
        '<button class="btn btn-primary" style="width:100%;margin-top:16px" onclick="App.showToast(\'Message sent!\',\'success\')">Contact Owner</button>';
    }
  }

  // ========== PAGE: EVENTS ==========
  function initEventsPage() {
    const gridEl = document.getElementById('events-grid');
    if (!gridEl) return;

    gridEl.innerHTML = CommunityData.events.map(ev => {
      const d = new Date(ev.date);
      return '<div class="event-card"><div class="event-thumb"><img src="' + ev.image + '" alt="' + escapeHTML(ev.title) + '"><div class="date-badge"><span class="date-badge-month">' + d.toLocaleString('en', { month: 'short' }).toUpperCase() + '</span><span class="date-badge-day">' + d.getDate() + '</span></div></div>' +
        '<div class="event-body"><h3><a href="event.html?id=' + ev.id + '">' + escapeHTML(ev.title) + '</a></h3>' +
        '<div class="event-meta"><span>📅 ' + d.toLocaleDateString('en', { weekday: 'long', month: 'long', day: 'numeric' }) + '</span><span>🕐 ' + ev.time + '</span><span>📍 ' + ev.location + '</span></div>' +
        '<div class="event-actions"><a href="event.html?id=' + ev.id + '" class="btn btn-sm btn-events">View</a><button class="btn btn-sm btn-outline" onclick="App.rsvpEvent(\'' + ev.id + '\',this)">RSVP</button></div></div></div>';
    }).join('');
  }

  // ========== PAGE: EVENT DETAIL ==========
  function initEventDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const ev = CommunityData.events.find(e => e.id === id);
    if (!ev) { document.querySelector('.main-content').innerHTML = '<p class="text-muted text-center" style="padding:60px">Event not found.</p>'; return; }

    const d = new Date(ev.date);
    const organizer = getUser(ev.organizer);

    document.getElementById('event-hero').innerHTML =
      '<img src="' + ev.image + '" alt=""><div class="event-hero-overlay"></div><div class="event-hero-content"><span class="tag" style="background:rgba(255,255,255,0.2);color:#fff;margin-bottom:8px;display:inline-block">' + ev.category + '</span><h1>' + escapeHTML(ev.title) + '</h1><div style="display:flex;gap:20px;margin-top:8px;font-size:14px"><span>📅 ' + d.toLocaleDateString('en', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) + '</span><span>🕐 ' + ev.time + '</span><span>📍 ' + ev.location + '</span></div></div>';

    document.getElementById('event-detail-content').innerHTML =
      '<h2 class="mb-16">About</h2><p style="line-height:1.7;margin-bottom:32px">' + escapeHTML(ev.description) + '</p>' +
      '<h2 class="mb-16">Schedule</h2>' + ev.schedule.map(s => '<div class="schedule-item"><span class="schedule-time">' + s.time + '</span><div class="schedule-info"><h4>' + s.title + '</h4>' + (s.speaker ? '<p>' + s.speaker + '</p>' : '') + '</div></div>').join('') +
      (ev.speakers.length ? '<h2 class="mb-16" style="margin-top:32px">Speakers</h2><div class="speakers-grid">' + ev.speakers.map(s => '<div class="speaker-card"><img src="' + s.avatar + '" alt=""><h4>' + s.name + '</h4><p class="text-muted" style="font-size:13px">' + s.role + '</p></div>').join('') + '</div>' : '') +
      '<div class="tags" style="margin-top:32px">' + ev.tags.map(t => '<span class="tag tag-events">' + t + '</span>').join('') + '</div>';

    const ticketEl = document.getElementById('event-ticket-sidebar');
    if (ticketEl) {
      const ticketTypes = Object.entries(ev.tickets);
      ticketEl.innerHTML = '<h3 class="mb-16">Tickets</h3>' + ticketTypes.map(([type, price]) =>
        '<div class="ticket-tier" onclick="this.classList.toggle(\'selected\')"><div><strong style="text-transform:capitalize">' + type + '</strong></div><div class="ticket-price">' + (price === 0 ? 'Free' : '$' + price) + '</div></div>'
      ).join('') +
        '<button class="btn btn-events" style="width:100%;margin-top:16px" onclick="App.rsvpEvent(\'' + ev.id + '\',this)">Register Now</button>' +
        '<div style="margin-top:16px;font-size:13px;color:var(--text-secondary)"><strong>' + ev.attendees + '</strong> / ' + ev.maxAttendees + ' registered</div>' +
        '<div style="margin-top:16px"><strong style="font-size:13px">Organizer</strong><div style="display:flex;align-items:center;gap:8px;margin-top:8px"><img class="avatar avatar-sm" src="' + organizer.avatar + '" alt=""><span style="font-size:14px">' + organizer.name + '</span></div></div>';
    }
  }

  // ========== PAGE: REVIEWS ==========
  function initReviewsPage() {
    const listEl = document.getElementById('reviews-list');
    if (!listEl) return;
    let sortBy = 'newest';

    const sortSelect = document.getElementById('review-sort');
    if (sortSelect) sortSelect.addEventListener('change', e => { sortBy = e.target.value; render(); });

    function render() {
      let reviews = [...CommunityData.reviews];
      if (sortBy === 'highest') reviews.sort((a, b) => b.rating - a.rating);
      else if (sortBy === 'lowest') reviews.sort((a, b) => a.rating - b.rating);
      else if (sortBy === 'helpful') reviews.sort((a, b) => b.helpful - a.helpful);

      listEl.innerHTML = reviews.map(r => {
        const author = getUser(r.author);
        return '<div class="review-card"><div class="review-header"><img class="avatar" src="' + author.avatar + '" alt=""><div><strong>' + author.name + '</strong> ' + userBadge(author) + '<br><span class="text-muted" style="font-size:13px">' + r.createdAt + '</span></div><a href="listing.html?id=' + r.listingId + '" class="tag" style="margin-left:auto">' + r.listingName + '</a></div>' +
          '<div class="review-stars">' + starsHTML(r.rating) + '</div><div class="review-title">' + escapeHTML(r.title) + '</div><div class="review-body">' + escapeHTML(r.body) + '</div>' +
          '<div class="review-helpful"><button onclick="App.helpfulReview(\'' + r.id + '\',this)">👍 Helpful (' + r.helpful + ')</button></div>' +
          (r.ownerResponse ? '<div class="owner-response"><strong>Owner Response</strong> · ' + r.ownerResponse.date + '<br>' + escapeHTML(r.ownerResponse.body) + '</div>' : '') + '</div>';
      }).join('');
    }

    render();
  }

  // ========== PAGE: PROFILE ==========
  function initProfilePage() {
    const user = CommunityData.currentUser;
    const profileEl = document.getElementById('profile-content');
    if (!profileEl) return;

    // Heatmap
    let heatCells = '';
    for (let i = 0; i < 364; i++) {
      const lvl = Math.random() < 0.3 ? 0 : Math.random() < 0.5 ? 1 : Math.random() < 0.7 ? 2 : Math.random() < 0.85 ? 3 : 4;
      heatCells += '<div class="heatmap-cell l' + lvl + '"></div>';
    }

    // Activity tab content
    const myThreads = CommunityData.threads.filter(t => t.author === user.id);
    const myReviews = CommunityData.reviews.filter(r => r.author === user.id);

    profileEl.innerHTML =
      '<div class="profile-tabs"><button class="profile-tab active" data-tab="activity">Activity</button><button class="profile-tab" data-tab="threads">Threads (' + myThreads.length + ')</button><button class="profile-tab" data-tab="reviews">Reviews (' + myReviews.length + ')</button><button class="profile-tab" data-tab="bookmarks">Bookmarks</button></div>' +
      '<div id="profile-tab-content"></div>';

    const tabContent = document.getElementById('profile-tab-content');
    const tabs = profileEl.querySelectorAll('.profile-tab');

    function showTab(tab) {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const name = tab.dataset.tab;
      if (name === 'activity') {
        tabContent.innerHTML = '<div class="contribution-graph"><h4 class="mb-8">Contribution Activity</h4><div class="heatmap-grid">' + heatCells + '</div></div>' +
          '<h4 class="mb-16" style="margin-top:24px">Badges</h4><div class="badges-grid">' + user.badges.map(b => '<span class="badge-item">🏆 ' + b + '</span>').join('') + '</div>';
      } else if (name === 'threads') {
        tabContent.innerHTML = myThreads.map(t =>
          '<div class="thread-card"><div class="thread-content"><div class="thread-title"><a href="thread.html?id=' + t.id + '">' + escapeHTML(t.title) + '</a></div>' +
          '<div class="thread-meta"><span>💬 ' + t.answers + '</span><span>▲ ' + t.votes + '</span><span>' + timeAgo(t.createdAt) + '</span>' + (t.solved ? '<span class="has-accepted">✓ Solved</span>' : '') + '</div></div></div>'
        ).join('') || '<p class="text-muted">No threads yet.</p>';
      } else if (name === 'reviews') {
        tabContent.innerHTML = myReviews.map(r =>
          '<div class="review-card"><div class="review-stars">' + starsHTML(r.rating) + '</div><div class="review-title"><a href="listing.html?id=' + r.listingId + '">' + escapeHTML(r.title) + '</a></div><div class="review-body">' + escapeHTML(r.body) + '</div></div>'
        ).join('') || '<p class="text-muted">No reviews yet.</p>';
      } else if (name === 'bookmarks') {
        const bm = getBookmarks();
        tabContent.innerHTML = bm.length ? '<p style="font-size:14px">You have ' + bm.length + ' bookmarked items.</p>' : '<p class="text-muted">No bookmarks yet. Save items by clicking the 🔖 icon.</p>';
      }
    }

    tabs.forEach(t => t.addEventListener('click', () => showTab(t)));
    showTab(tabs[0]);
  }

  // ========== PAGE: SETTINGS ==========
  function initSettingsPage() {
    const navBtns = document.querySelectorAll('.settings-nav button');
    const sections = document.querySelectorAll('.settings-section');
    if (!navBtns.length) return;

    navBtns.forEach(btn => btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.section);
      if (target) target.classList.add('active');
    }));

    // Toggle switches
    document.querySelectorAll('.toggle-switch').forEach(sw => {
      sw.addEventListener('click', () => { sw.classList.toggle('active'); showToast('Setting updated', 'success'); });
    });

    // Theme radio
    document.querySelectorAll('input[name="theme"]').forEach(radio => {
      radio.addEventListener('change', e => {
        if (e.target.value === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
        else if (e.target.value === 'light') document.documentElement.setAttribute('data-theme', '');
        else { const pref = window.matchMedia('(prefers-color-scheme: dark)').matches; document.documentElement.setAttribute('data-theme', pref ? 'dark' : ''); }
        localStorage.setItem('community-theme', e.target.value);
        showToast('Theme updated', 'success');
      });
    });

    // Save profile form
    const profileForm = document.getElementById('profile-form');
    if (profileForm) profileForm.addEventListener('submit', e => { e.preventDefault(); showToast('Profile saved!', 'success'); });
  }

  // ========== UTILITY ==========
  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function formatBody(text) {
    return escapeHTML(text)
      .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code style="background:var(--bg-tertiary);padding:2px 5px;border-radius:3px;font-family:var(--font-mono);font-size:13px">$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  // ========== PAGE ROUTER ==========
  function getPage() {
    const path = location.pathname.split('/').pop() || 'index.html';
    return path.replace('.html', '');
  }

  // ========== INIT ==========
  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initSearch();
    initNotifications();
    setActiveNav();

    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
      themeBtn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
      themeBtn.addEventListener('click', toggleTheme);
    }

    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    const page = getPage();
    switch (page) {
      case 'index': initHomePage(); break;
      case 'jobs': initJobsPage(); break;
      case 'job': initJobDetailPage(); break;
      case 'forum': initForumPage(); break;
      case 'thread': initThreadDetailPage(); break;
      case 'directory': initDirectoryPage(); break;
      case 'listing': initListingDetailPage(); break;
      case 'events': initEventsPage(); break;
      case 'event': initEventDetailPage(); break;
      case 'reviews': initReviewsPage(); break;
      case 'profile': initProfilePage(); break;
      case 'settings': initSettingsPage(); break;
    }
  });

  // ========== PUBLIC API ==========
  window.App = {
    toggleTheme,
    showToast,

    likeFeedItem(id, btn) {
      const span = btn.querySelector('span');
      const current = parseInt(span.textContent);
      const liked = btn.classList.toggle('active');
      span.textContent = liked ? current + 1 : current - 1;
    },

    bookmarkFeed(id, btn) {
      const added = toggleBookmark('feed', id);
      btn.classList.toggle('active', added);
    },

    bookmarkJob(id, btn) {
      const added = toggleBookmark('job', id);
      if (btn) btn.textContent = added ? '✓ Saved' : '🔖';
    },

    voteThread(id, dir, btn) {
      const group = btn.closest('.vote-group');
      const scoreEl = group.querySelector('.vote-score');
      const current = parseInt(scoreEl.textContent);
      const votes = getVotes();
      const prev = votes[id] || 0;

      if (prev === dir) { setVote(id, 0); scoreEl.textContent = current - dir; btn.classList.remove(dir === 1 ? 'upvoted' : 'downvoted'); }
      else { setVote(id, dir); scoreEl.textContent = current + dir - prev; group.querySelectorAll('.vote-btn').forEach(b => b.classList.remove('upvoted', 'downvoted')); btn.classList.add(dir === 1 ? 'upvoted' : 'downvoted'); }
      scoreEl.classList.add('pulse');
      setTimeout(() => scoreEl.classList.remove('pulse'), 300);
    },

    voteAnswer(id, dir, btn) { this.voteThread(id, dir, btn); },

    submitAnswer(threadId) {
      const textarea = document.querySelector('.editor-textarea');
      if (!textarea || !textarea.value.trim()) { showToast('Please write an answer', 'warning'); return; }
      showToast('Answer posted successfully!', 'success');
      textarea.value = '';
    },

    applyJob(jobId) { showToast('Application submitted! 🎉', 'success'); },

    rsvpEvent(eventId, btn) {
      if (btn) btn.textContent = '✓ Registered';
      showToast('RSVP confirmed! 🎉', 'success');
    },

    helpfulReview(id, btn) {
      const match = btn.textContent.match(/\((\d+)\)/);
      if (match) {
        const count = parseInt(match[1]) + 1;
        btn.textContent = '👍 Helpful (' + count + ')';
        btn.style.color = 'var(--accent)';
      }
    }
  };
})();
