/* ========================================
   03-BLOG — "The Inkwell" Core JS
   ======================================== */

/* ── Theme ── */
const Theme = {
  init() {
    const saved = localStorage.getItem('inkwell_theme');
    const prefer = window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', saved || prefer);
  },
  toggle() {
    const curr = document.documentElement.getAttribute('data-theme');
    const next = curr === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('inkwell_theme', next);
  }
};

/* ── Mobile Menu ── */
const MobileMenu = {
  open() {
    document.getElementById('mobileMenu')?.classList.add('open');
    document.getElementById('mobileOverlay')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  },
  close() {
    document.getElementById('mobileMenu')?.classList.remove('open');
    document.getElementById('mobileOverlay')?.classList.remove('open');
    document.body.style.overflow = '';
  }
};

/* ── Search Overlay ── */
const Search = {
  open() {
    document.getElementById('searchOverlay')?.classList.add('open');
    setTimeout(() => document.getElementById('searchInput')?.focus(), 100);
  },
  close() {
    document.getElementById('searchOverlay')?.classList.remove('open');
  },
  query(q) {
    const results = document.getElementById('searchResults');
    if (!results) return;
    if (!q.trim()) { results.innerHTML = ''; return; }
    const matches = BLOG.posts.filter(p =>
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(q.toLowerCase())
    ).slice(0, 5);
    if (!matches.length) {
      results.innerHTML = '<div class="search-no-results">No articles found</div>';
      return;
    }
    results.innerHTML = matches.map(p => {
      const author = BLOG.authors.find(a => a.id === p.author);
      return `<a href="post.html?id=${p.id}" class="search-result-item"><div><h4>${p.title}</h4><div class="meta">${author?.name || ''} · ${p.date} · ${p.readTime}</div></div></a>`;
    }).join('');
  }
};

/* ── Reading Progress ── */
function initReadingProgress() {
  const bar = document.getElementById('readingProgress');
  const article = document.querySelector('.article-body');
  if (!bar || !article) return;
  window.addEventListener('scroll', () => {
    const rect = article.getBoundingClientRect();
    const top = window.scrollY - (article.offsetTop - window.innerHeight * 0.3);
    const height = article.offsetHeight;
    const pct = Math.min(Math.max(top / height * 100, 0), 100);
    bar.style.width = pct + '%';
  });
}

/* ── Table of Contents (scroll spy) ── */
function initTOC() {
  const links = document.querySelectorAll('.toc-list a');
  if (!links.length) return;
  const headings = Array.from(links).map(l => document.getElementById(l.getAttribute('href').slice(1))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.toc-list a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });
  headings.forEach(h => observer.observe(h));
}

/* ── Reactions ── */
function initReactions(postId) {
  const stored = JSON.parse(localStorage.getItem('inkwell_reactions') || '{}');
  document.querySelectorAll('.reaction-btn').forEach(btn => {
    const key = `${postId}_${btn.dataset.reaction}`;
    let count = parseInt(btn.querySelector('.count').textContent) || 0;
    if (stored[key]) { btn.classList.add('reacted'); count += 1; btn.querySelector('.count').textContent = count; }
    btn.addEventListener('click', () => {
      if (stored[key]) return;
      stored[key] = true;
      localStorage.setItem('inkwell_reactions', JSON.stringify(stored));
      btn.classList.add('reacted');
      count += 1;
      btn.querySelector('.count').textContent = count;
      btn.style.transform = 'scale(1.15)';
      setTimeout(() => btn.style.transform = '', 200);
    });
  });
}

/* ── Comments ── */
function renderComments(postId) {
  const section = document.getElementById('commentsContainer');
  if (!section) return;
  const comments = BLOG.comments.filter(c => c.postId === postId);
  document.getElementById('commentCount').textContent = comments.length;
  section.innerHTML = comments.map(c => commentHTML(c)).join('');
}
function commentHTML(c) {
  const replies = (c.replies || []).map(r => `
    <div class="comment">
      <div class="comment-head"><img src="${r.avatar}" alt="${r.name}" width="32" height="32"><strong>${r.name}</strong><time>${r.time}</time></div>
      <div class="comment-text">${r.text}</div>
      <div class="comment-actions"><button onclick="Toast.show('Reply feature demo','info')">Reply</button></div>
    </div>
  `).join('');
  return `
    <div class="comment">
      <div class="comment-head"><img src="${c.avatar}" alt="${c.name}" width="32" height="32"><strong>${c.name}</strong><time>${c.time}</time></div>
      <div class="comment-text">${c.text}</div>
      <div class="comment-actions"><button>♡ ${c.likes}</button><button onclick="Toast.show('Reply feature demo','info')">Reply</button></div>
      ${replies ? `<div class="comment-replies">${replies}</div>` : ''}
    </div>`;
}

/* ── Newsletter Popup ── */
function initNewsletterPopup() {
  if (sessionStorage.getItem('inkwell_nl_dismissed')) return;
  const handler = (e) => {
    if (e.clientY < 5) {
      document.getElementById('nlPopup')?.classList.add('open');
      document.removeEventListener('mouseout', handler);
    }
  };
  setTimeout(() => document.addEventListener('mouseout', handler), 10000);
}
function dismissNewsletter() {
  document.getElementById('nlPopup')?.classList.remove('open');
  sessionStorage.setItem('inkwell_nl_dismissed', '1');
}

/* ── Audio Player ── */
const AudioPlayer = {
  play(ep) {
    const player = document.getElementById('audioPlayer');
    if (!player) return;
    player.classList.add('visible');
    player.querySelector('.ap-info h4').textContent = ep.title;
    player.querySelector('.ap-info span').textContent = `EP ${ep.number}`;
    player.querySelector('.ap-progress .time').textContent = `0:00 / ${ep.duration}`;
    document.body.style.paddingBottom = '76px';
  },
  close() {
    const player = document.getElementById('audioPlayer');
    if (!player) return;
    player.classList.remove('visible');
    document.body.style.paddingBottom = '';
  }
};

/* ── Toast ── */
const Toast = {
  show(msg, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) { container = document.createElement('div'); container.className = 'toast-container'; document.body.appendChild(container); }
    const t = document.createElement('div');
    t.className = `toast toast--${type}`;
    t.textContent = msg;
    container.appendChild(t);
    setTimeout(() => { t.remove(); }, 3000);
  }
};

/* ── Scroll Top ── */
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 500));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Reading Mode ── */
function toggleReadingMode() {
  document.body.classList.toggle('reading-mode');
}

/* ── Category Color Helper ── */
function getCatClass(catSlug) {
  const cat = BLOG.categories.find(c => c.slug === catSlug);
  return cat ? `cat-badge--${cat.color}` : 'cat-badge--tech';
}
function getCatName(catSlug) {
  const cat = BLOG.categories.find(c => c.slug === catSlug);
  return cat ? cat.name : catSlug;
}

/* ── Helpers ── */
function getAuthor(id) { return BLOG.authors.find(a => a.id === id); }

/* ── Render Post Cards ── */
function postCardHTML(p) {
  const author = getAuthor(p.author);
  return `<article class="post-card" data-category="${p.category}">
    <a href="post.html?id=${p.id}" class="post-card-image"><img src="${p.image}" alt="${p.title}" loading="lazy"></a>
    <div class="post-card-body">
      <span class="cat-badge ${getCatClass(p.category)}">${getCatName(p.category)}</span>
      <h3><a href="post.html?id=${p.id}">${p.title}</a></h3>
      <p class="excerpt">${p.excerpt}</p>
      <div class="post-meta"><img src="${author?.avatar || ''}" alt="${author?.name || ''}">${author?.name || ''}<span class="dot"></span>${p.date}<span class="dot"></span>${p.readTime}</div>
    </div>
  </article>`;
}

/* ── Set Active Nav ── */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.header-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  setActiveNav();
  initScrollTop();
  document.getElementById('mobileOverlay')?.addEventListener('click', MobileMenu.close);
  // Search overlay keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { Search.close(); MobileMenu.close(); }
  });
});
