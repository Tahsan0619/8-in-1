/* ============================================
   LEARNHUB — Application Logic
   ============================================ */

(function() {
  'use strict';

  // ── Theme ──
  const Theme = {
    init() {
      const saved = localStorage.getItem('learnhub-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = saved || (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
      this.updateIcon(theme);
      document.querySelector('.theme-toggle')?.addEventListener('click', () => this.toggle());
    },
    toggle() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('learnhub-theme', next);
      this.updateIcon(next);
    },
    updateIcon(theme) {
      const btn = document.querySelector('.theme-toggle');
      if (btn) btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }
  };

  // ── Mobile Menu ──
  const MobileMenu = {
    init() {
      const toggle = document.querySelector('.menu-toggle');
      const menu = document.querySelector('.mobile-menu');
      if (!toggle || !menu) return;
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('open');
        document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
      });
    }
  };

  // ── Header Shadow ──
  const HeaderShadow = {
    init() {
      const header = document.querySelector('.header');
      if (!header) return;
      window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 10);
      });
    }
  };

  // ── Scroll Top ──
  const ScrollTop = {
    init() {
      const btn = document.querySelector('.scroll-top');
      if (!btn) return;
      window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
      });
      btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
  };

  // ── Toast ──
  function showToast(msg, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
  }

  // ── Active Nav ──
  function setActiveNav() {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a, .mobile-menu a').forEach(a => {
      const href = a.getAttribute('href');
      a.classList.toggle('active', href === page || (page === '' && href === 'index.html'));
    });
  }

  // ── Stars HTML ──
  function starsHTML(rating, size = '') {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
  }

  // ── Wishlist ──
  const Wishlist = {
    key: 'learnhub-wishlist',
    get() { return JSON.parse(localStorage.getItem(this.key) || '[]'); },
    toggle(id) {
      const list = this.get();
      const idx = list.indexOf(id);
      if (idx > -1) { list.splice(idx, 1); showToast('Removed from wishlist', 'info'); }
      else { list.push(id); showToast('Added to wishlist!', 'success'); }
      localStorage.setItem(this.key, JSON.stringify(list));
      return idx === -1;
    },
    has(id) { return this.get().includes(id); }
  };

  // ── Enrollment ──
  const Enrollment = {
    key: 'learnhub-enrolled',
    get() { return JSON.parse(localStorage.getItem(this.key) || '[]'); },
    enroll(courseId) {
      const list = this.get();
      if (!list.find(e => e.courseId === courseId)) {
        list.push({ courseId, progress: 0, currentLesson: '', enrollDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) });
        localStorage.setItem(this.key, JSON.stringify(list));
      }
    },
    isEnrolled(courseId) { return this.get().some(e => e.courseId === courseId) || DATA.enrolledCourses.some(e => e.courseId === courseId); }
  };

  // ── Course Card HTML ──
  function courseCardHTML(c) {
    const wished = Wishlist.has(c.id);
    const badgeHTML = c.badge ? `<span class="badge badge-${c.badge.toLowerCase()}">${c.badge}</span>` : '';
    return `
      <div class="course-card" data-id="${c.id}" onclick="window.location='course.html?id=${c.id}'">
        <div class="course-card-thumb">
          <img src="${c.thumbnail}" alt="${c.title}" loading="lazy">
          ${badgeHTML}
          <button class="course-card-wishlist ${wished ? 'active' : ''}" data-wish="${c.id}" onclick="event.stopPropagation()">
            ${wished ? '❤️' : '🤍'}
          </button>
          <div class="preview-overlay"><span>▶ Preview</span></div>
        </div>
        <div class="course-card-body">
          <div class="course-card-meta">
            <span>${DATA.categories.find(cat => cat.id === c.category)?.name || c.category}</span>
            <span class="dot"></span>
            <span>${c.duration}</span>
          </div>
          <div class="course-card-title">${c.title}</div>
          <div class="course-card-instructor">${c.instructor.name}</div>
          <div class="course-card-rating">
            <span class="stars">${starsHTML(c.rating)}</span>
            <span class="rating-num">${c.rating}</span>
            <span class="rating-count">(${c.ratingCount.toLocaleString()})</span>
          </div>
          <div class="course-card-price">
            <span class="current">${c.price === 0 ? 'Free' : '$' + c.price.toFixed(2)}</span>
            ${c.originalPrice > c.price ? `<span class="original">$${c.originalPrice.toFixed(2)}</span>` : ''}
          </div>
        </div>
      </div>`;
  }

  // ── Wishlist Click Handler ──
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-wish]');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const id = btn.dataset.wish;
    const added = Wishlist.toggle(id);
    btn.classList.toggle('active', added);
    btn.innerHTML = added ? '❤️' : '🤍';
  });

  // ── Search Overlay ──
  const SearchOverlay = {
    init() {
      const trigger = document.querySelector('.search-trigger');
      const overlay = document.querySelector('.search-overlay');
      if (!trigger || !overlay) return;
      trigger.addEventListener('click', () => overlay.classList.add('open'));
      overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
      const closeBtn = overlay.querySelector('.close-search');
      if (closeBtn) closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
      document.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); overlay.classList.add('open'); }
        if (e.key === 'Escape') overlay.classList.remove('open');
      });
      const input = overlay.querySelector('input');
      if (input) {
        let timeout;
        input.addEventListener('input', () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => this.search(input.value, overlay), 300);
        });
      }
      overlay.querySelectorAll('.search-recent-tags span').forEach(tag => {
        tag.addEventListener('click', () => { if (input) { input.value = tag.textContent; this.search(tag.textContent, overlay); } });
      });
    },
    search(query, overlay) {
      const results = overlay.querySelector('.search-results');
      if (!results) return;
      if (!query.trim()) { results.innerHTML = ''; return; }
      const q = query.toLowerCase();
      const matches = DATA.courses.filter(c => c.title.toLowerCase().includes(q) || c.category.includes(q) || c.instructor.name.toLowerCase().includes(q));
      results.innerHTML = matches.slice(0, 5).map(c => `
        <a href="course.html?id=${c.id}" class="search-result-item">
          <img src="${c.thumbnail}" alt="">
          <div class="result-info">
            <div class="result-title">${c.title}</div>
            <div class="result-meta">${c.instructor.name} · ${c.price === 0 ? 'Free' : '$' + c.price.toFixed(2)}</div>
          </div>
        </a>`).join('') || '<p style="padding:12px;color:var(--text-muted);font-size:.85rem">No courses found</p>';
    }
  };

  // ═══════════════════════════════════════════
  // HOMEPAGE
  // ═══════════════════════════════════════════
  function initHome() {
    // Stats count-up
    document.querySelectorAll('.stat-num[data-target]').forEach(el => {
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current.toLocaleString() + suffix;
      }, 30);
    });

    // Featured courses carousel
    const track = document.querySelector('.carousel-track');
    if (track) {
      const featured = DATA.courses.slice(0, 6);
      track.innerHTML = featured.map(c => courseCardHTML(c)).join('');
      const prevBtn = document.querySelector('.carousel-btn.prev');
      const nextBtn = document.querySelector('.carousel-btn.next');
      if (prevBtn) prevBtn.addEventListener('click', () => track.scrollBy({ left: -304, behavior: 'smooth' }));
      if (nextBtn) nextBtn.addEventListener('click', () => track.scrollBy({ left: 304, behavior: 'smooth' }));
    }

    // Categories
    const catGrid = document.getElementById('categories-grid');
    if (catGrid) {
      catGrid.innerHTML = DATA.categories.map(c => `
        <a href="courses.html?cat=${c.id}" class="cat-pill">
          <span class="cat-icon">${c.icon}</span>
          <span>${c.name}</span>
          <span class="cat-count">${c.count}</span>
        </a>`).join('');
    }

    // Testimonials
    const testGrid = document.querySelector('.testimonial-grid');
    if (testGrid) {
      testGrid.innerHTML = DATA.testimonials.map(t => `
        <div class="testimonial-card">
          <div class="testimonial-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
          <p class="testimonial-text">"${t.text}"</p>
          <div class="testimonial-author">
            <img src="${t.avatar}" alt="${t.name}">
            <div class="testimonial-author-info">
              <div class="name">${t.name}</div>
              <div class="role">${t.role}</div>
            </div>
          </div>
        </div>`).join('');
    }
  }

  // ═══════════════════════════════════════════
  // COURSES LISTING
  // ═══════════════════════════════════════════
  function initCourses() {
    const grid = document.querySelector('.courses-grid');
    if (!grid) return;

    let filtered = [...DATA.courses];
    const params = new URLSearchParams(location.search);
    const catParam = params.get('cat');

    function render(courses) {
      grid.innerHTML = courses.map(c => courseCardHTML(c)).join('');
      const countEl = document.querySelector('.result-count');
      if (countEl) countEl.innerHTML = `Showing <strong>${courses.length}</strong> courses`;
    }

    // Category pills
    const pills = document.querySelectorAll('.cat-pill[data-cat]');
    pills.forEach(pill => {
      if (pill.dataset.cat === (catParam || 'all')) pill.classList.add('active');
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const cat = pill.dataset.cat;
        filtered = cat === 'all' ? [...DATA.courses] : DATA.courses.filter(c => c.category === cat);
        applyFilters();
      });
    });

    if (catParam) {
      filtered = DATA.courses.filter(c => c.category === catParam);
    }

    // Sidebar filters
    const levelChecks = document.querySelectorAll('.filter-check input[data-level]');
    const ratingFilters = document.querySelectorAll('.filter-rating[data-min]');
    const sortSelect = document.querySelector('.sort-select');
    const priceRange = document.querySelector('input[data-filter="price"]');
    const searchInput = document.querySelector('.courses-search');

    function applyFilters() {
      let result = [...filtered];

      // Level
      const levels = [...document.querySelectorAll('.filter-check input[data-level]:checked')].map(c => c.dataset.level);
      if (levels.length) result = result.filter(c => levels.includes(c.level));

      // Rating
      const activeRating = document.querySelector('.filter-rating.active');
      if (activeRating) {
        const min = parseFloat(activeRating.dataset.min);
        result = result.filter(c => c.rating >= min);
      }

      // Price
      if (priceRange) {
        const maxPrice = parseFloat(priceRange.value);
        result = result.filter(c => c.price <= maxPrice);
      }

      // Search
      if (searchInput && searchInput.value.trim()) {
        const q = searchInput.value.toLowerCase();
        result = result.filter(c => c.title.toLowerCase().includes(q) || c.instructor.name.toLowerCase().includes(q));
      }

      // Sort
      if (sortSelect) {
        const sort = sortSelect.value;
        if (sort === 'popular') result.sort((a, b) => b.students - a.students);
        else if (sort === 'highest') result.sort((a, b) => b.rating - a.rating);
        else if (sort === 'newest') result.sort((a, b) => a.title.localeCompare(b.title));
        else if (sort === 'price-low') result.sort((a, b) => a.price - b.price);
        else if (sort === 'price-high') result.sort((a, b) => b.price - a.price);
      }

      render(result);
    }

    levelChecks.forEach(c => c.addEventListener('change', applyFilters));
    ratingFilters.forEach(r => {
      r.addEventListener('click', () => {
        ratingFilters.forEach(f => f.classList.remove('active'));
        r.classList.toggle('active');
        applyFilters();
      });
    });
    if (sortSelect) sortSelect.addEventListener('change', applyFilters);
    if (priceRange) {
      priceRange.addEventListener('input', () => {
        const label = document.querySelector('.price-value');
        if (label) label.textContent = '$' + priceRange.value;
        applyFilters();
      });
    }
    if (searchInput) searchInput.addEventListener('input', applyFilters);

    const clearBtn = document.querySelector('.filter-clear');
    if (clearBtn) clearBtn.addEventListener('click', () => {
      levelChecks.forEach(c => c.checked = false);
      ratingFilters.forEach(r => r.classList.remove('active'));
      if (priceRange) priceRange.value = priceRange.max;
      if (searchInput) searchInput.value = '';
      pills.forEach(p => p.classList.remove('active'));
      document.querySelector('.cat-pill[data-cat="all"]')?.classList.add('active');
      filtered = [...DATA.courses];
      applyFilters();
    });

    render(filtered);
  }

  // ═══════════════════════════════════════════
  // COURSE DETAIL
  // ═══════════════════════════════════════════
  function initCourseDetail() {
    const params = new URLSearchParams(location.search);
    const courseId = params.get('id');
    const course = DATA.courses.find(c => c.id === courseId);
    if (!course) return;

    // Hero
    const heroEl = document.querySelector('.course-hero');
    if (heroEl) {
      document.querySelector('.course-hero h1').textContent = course.title;
      document.querySelector('.course-subtitle').textContent = course.subtitle;
      document.querySelector('.hero-rating').innerHTML = `<span class="stars">${starsHTML(course.rating)}</span> <strong>${course.rating}</strong> (${course.ratingCount.toLocaleString()} ratings)`;
      document.querySelector('.hero-students').textContent = course.students.toLocaleString() + ' students';
      document.querySelector('.hero-instructor').textContent = 'Created by ' + course.instructor.name;
      document.querySelector('.hero-updated').textContent = 'Last updated ' + course.lastUpdated + ' · ' + course.language;
    }

    // What you'll learn
    const learnGrid = document.querySelector('.learn-grid');
    if (learnGrid) {
      learnGrid.innerHTML = course.whatYoullLearn.map(item => `
        <div class="learn-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
          <span>${item}</span>
        </div>`).join('');
    }

    // Curriculum
    const curriculumEl = document.querySelector('.curriculum-sections');
    if (curriculumEl) {
      const totalLessons = course.curriculum.reduce((a, s) => a + s.lessons.length, 0);
      document.querySelector('.curriculum-summary').textContent = `${course.curriculum.length} sections · ${totalLessons} lectures · ${course.duration} total length`;
      curriculumEl.innerHTML = course.curriculum.map((section, si) => {
        const typeIcons = { video: '▶', quiz: '📝', assignment: '📂', resource: '📎', article: '📄' };
        return `
          <div class="accordion-section">
            <div class="accordion-header" data-idx="${si}">
              <div class="section-title">
                ${section.locked ? '🔒' : ''}<span>${section.title}</span>
              </div>
              <div style="display:flex;align-items:center;gap:16px">
                <span class="section-meta">${section.lessons.length} lessons</span>
                <span class="chevron">▼</span>
              </div>
            </div>
            <div class="accordion-body${si === 0 ? ' open' : ''}" data-idx="${si}">
              ${section.lessons.map(l => `
                <div class="lesson-item${section.locked ? ' locked' : ''}">
                  <div class="lesson-left">
                    <span class="lesson-icon">${typeIcons[l.type] || '▶'}</span>
                    <span>${l.title}</span>
                  </div>
                  <div class="lesson-right">
                    ${l.free ? '<span class="free-tag">FREE</span>' : ''}
                    <span>${l.duration || ''}</span>
                    ${section.locked ? '🔒' : ''}
                  </div>
                </div>`).join('')}
            </div>
          </div>`;
      }).join('');

      // First section open
      document.querySelector('.accordion-header[data-idx="0"]')?.classList.add('open');

      // Toggle accordion
      curriculumEl.addEventListener('click', e => {
        const header = e.target.closest('.accordion-header');
        if (!header) return;
        const idx = header.dataset.idx;
        header.classList.toggle('open');
        const body = document.querySelector(`.accordion-body[data-idx="${idx}"]`);
        body?.classList.toggle('open');
      });
    }

    // Instructor
    const instrCard = document.querySelector('.instructor-card');
    if (instrCard) {
      instrCard.innerHTML = `
        <img src="${course.instructor.avatar}" alt="${course.instructor.name}">
        <div class="instructor-info">
          <h4>${course.instructor.name}</h4>
          <p class="title">${course.instructor.title}</p>
          <div class="instructor-stats">
            <span>⭐ ${course.instructor.rating} Rating</span>
            <span>👥 ${course.instructor.students.toLocaleString()} Students</span>
            <span>📚 ${course.instructor.courses} Courses</span>
          </div>
          <p>${course.instructor.bio}</p>
        </div>`;
    }

    // Requirements
    const reqList = document.querySelector('.requirements ul');
    if (reqList) {
      reqList.innerHTML = course.requirements.map(r => `<li>${r}</li>`).join('');
    }

    // Reviews
    const reviewsSection = document.querySelector('.reviews-section');
    if (reviewsSection) {
      const bigRating = reviewsSection.querySelector('.big-num');
      if (bigRating) bigRating.textContent = course.rating;
      const ratingStars = reviewsSection.querySelector('.reviews-big-rating .stars');
      if (ratingStars) ratingStars.innerHTML = starsHTML(course.rating);
      const totalReviews = reviewsSection.querySelector('.reviews-big-rating .total');
      if (totalReviews) totalReviews.textContent = course.ratingCount.toLocaleString() + ' ratings';

      const bars = reviewsSection.querySelector('.rating-bars');
      if (bars) {
        bars.innerHTML = [5, 4, 3, 2, 1].map(n => `
          <div class="rating-bar-row">
            <div class="stars-label"><span>${n}</span> ★</div>
            <div class="rating-bar-bg"><div class="rating-bar-fill" style="width:${course.ratingDist[n]}%"></div></div>
            <span class="pct">${course.ratingDist[n]}%</span>
          </div>`).join('');
      }

      const reviewList = reviewsSection.querySelector('.review-list');
      if (reviewList) {
        reviewList.innerHTML = course.reviews.map(r => `
          <div class="review-item">
            <div class="review-item-header">
              <img src="${r.avatar}" alt="${r.name}">
              <div>
                <div class="name">${r.name}</div>
                <div class="date">${r.date}</div>
              </div>
            </div>
            <div class="stars">${starsHTML(r.rating)}</div>
            <p>${r.text}</p>
          </div>`).join('');
      }
    }

    // Enroll Sidebar
    const enrollBody = document.querySelector('.enroll-body');
    if (enrollBody) {
      const previewImg = document.querySelector('.enroll-preview img');
      if (previewImg) previewImg.src = course.thumbnail;
      document.querySelector('.enroll-price .current').textContent = course.price === 0 ? 'Free' : '$' + course.price.toFixed(2);
      const origEl = document.querySelector('.enroll-price .original');
      if (origEl) origEl.textContent = '$' + course.originalPrice.toFixed(2);
      const discountEl = document.querySelector('.enroll-discount');
      if (discountEl && course.originalPrice > course.price) {
        const pct = Math.round((1 - course.price / course.originalPrice) * 100);
        discountEl.textContent = `${pct}% off — 2 days left at this price!`;
      }
      const includesList = document.querySelector('.enroll-includes');
      if (includesList && course.includes) {
        const icons = ['📹', '📄', '📝', '🏆', '📱', '♾️'];
        includesList.innerHTML = '<h4>This course includes:</h4>' + course.includes.map((item, i) => `
          <div class="include-item">${icons[i] || '📦'} <span>${item}</span></div>`).join('');
      }

      // Enroll button
      const enrollBtn = document.querySelector('.enroll-btn');
      if (enrollBtn) {
        if (Enrollment.isEnrolled(courseId)) {
          enrollBtn.textContent = 'Continue Learning';
          enrollBtn.addEventListener('click', () => window.location = 'learn.html?id=' + courseId);
        } else {
          enrollBtn.addEventListener('click', () => {
            Enrollment.enroll(courseId);
            showToast('Enrolled successfully! 🎉', 'success');
            enrollBtn.textContent = 'Continue Learning';
            enrollBtn.onclick = () => window.location = 'learn.html?id=' + courseId;
          });
        }
      }

      // Wishlist button
      const wishBtn = document.querySelector('.wish-btn');
      if (wishBtn) {
        const wished = Wishlist.has(courseId);
        wishBtn.innerHTML = (wished ? '❤️' : '🤍') + ' ' + (wished ? 'Wishlisted' : 'Add to Wishlist');
        wishBtn.addEventListener('click', () => {
          const added = Wishlist.toggle(courseId);
          wishBtn.innerHTML = (added ? '❤️' : '🤍') + ' ' + (added ? 'Wishlisted' : 'Add to Wishlist');
        });
      }
    }

    // Preview video modal
    const previewBtn = document.querySelector('.enroll-preview');
    const modal = document.querySelector('.video-modal');
    if (previewBtn && modal) {
      previewBtn.addEventListener('click', () => modal.classList.add('open'));
      modal.querySelector('.close-modal')?.addEventListener('click', () => modal.classList.remove('open'));
      modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
    }
  }

  // ═══════════════════════════════════════════
  // LEARNING PLAYER
  // ═══════════════════════════════════════════
  function initPlayer() {
    const params = new URLSearchParams(location.search);
    const courseId = params.get('id') || 'react-complete';
    const course = DATA.courses.find(c => c.id === courseId);
    if (!course) return;

    const pd = DATA.playerData;
    document.querySelector('.player-course-title').textContent = course.title;

    // Lesson sidebar
    const sidebarEl = document.querySelector('.lesson-sections');
    if (sidebarEl) {
      const completedSet = new Set(pd.completedLessons);
      let totalLessons = 0;
      course.curriculum.forEach(s => totalLessons += s.lessons.length);
      const progressPct = Math.round((completedSet.size / totalLessons) * 100);
      document.querySelector('.player-progress-pct').textContent = progressPct + '%';
      const progressFill = document.querySelector('.player-progress .progress-fill');
      if (progressFill) progressFill.style.width = progressPct + '%';

      sidebarEl.innerHTML = course.curriculum.map((section, si) => `
        <div class="lesson-section">
          <div class="lesson-section-header${si === pd.currentSection ? ' open' : ''}" data-si="${si}">
            <span>${section.locked ? '🔒 ' : ''}${section.title}</span>
            <span class="chevron">▼</span>
          </div>
          <div class="lesson-list${si === pd.currentSection ? ' open' : ''}">
            ${section.lessons.map((l, li) => {
              const key = si + '-' + li;
              const isActive = si === pd.currentSection && li === pd.currentLesson;
              const isCompleted = completedSet.has(key);
              const isLocked = section.locked;
              return `
                <div class="lesson-list-item${isActive ? ' active' : ''}${isCompleted ? ' completed' : ''}${isLocked ? ' locked' : ''}" data-si="${si}" data-li="${li}">
                  <span class="lesson-status">${isCompleted ? '✅' : isActive ? '▶' : isLocked ? '🔒' : '○'}</span>
                  <span class="lesson-name">${l.title}</span>
                  <span class="lesson-dur">${l.duration || ''}</span>
                </div>`;
            }).join('')}
          </div>
        </div>`).join('');

      // Toggle sections
      sidebarEl.addEventListener('click', e => {
        const header = e.target.closest('.lesson-section-header');
        if (header) {
          header.classList.toggle('open');
          header.nextElementSibling?.classList.toggle('open');
        }
        const item = e.target.closest('.lesson-list-item');
        if (item && !item.classList.contains('locked')) {
          document.querySelectorAll('.lesson-list-item').forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          const lessonName = item.querySelector('.lesson-name').textContent;
          document.querySelector('.current-lesson-title').textContent = lessonName;
        }
      });
    }

    // Video controls (simulated)
    const videoContainer = document.querySelector('.video-container');
    const playOverlay = document.querySelector('.video-overlay');
    const playPauseBtn = document.querySelector('.play-pause');
    let isPlaying = false;

    function togglePlay() {
      isPlaying = !isPlaying;
      if (playOverlay) playOverlay.classList.toggle('hidden', isPlaying);
      if (playPauseBtn) playPauseBtn.textContent = isPlaying ? '⏸' : '▶';
    }

    playOverlay?.addEventListener('click', togglePlay);
    playPauseBtn?.addEventListener('click', togglePlay);

    // Speed button
    const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
    let speedIdx = 2;
    const speedBtn = document.querySelector('.speed-btn');
    if (speedBtn) {
      speedBtn.addEventListener('click', () => {
        speedIdx = (speedIdx + 1) % speeds.length;
        speedBtn.textContent = speeds[speedIdx] + 'x';
      });
    }

    // Progress scrubber (simulate)
    const scrubber = document.querySelector('.progress-scrubber');
    const playedBar = document.querySelector('.progress-played');
    if (scrubber && playedBar) {
      let progress = 50;
      playedBar.style.width = progress + '%';
      scrubber.addEventListener('click', e => {
        const rect = scrubber.getBoundingClientRect();
        progress = ((e.clientX - rect.left) / rect.width) * 100;
        playedBar.style.width = progress + '%';
      });
    }

    // Tabs (Notes / Q&A)
    const tabs = document.querySelectorAll('.player-tab');
    const tabContents = document.querySelectorAll('.player-tab-content');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab)?.classList.add('active');
      });
    });

    // Notes
    const notesKey = `learnhub-notes-${courseId}`;
    let notes = JSON.parse(localStorage.getItem(notesKey) || 'null') || pd.notes;
    function renderNotes() {
      const list = document.querySelector('.notes-list');
      if (!list) return;
      list.innerHTML = notes.map((n, i) => `
        <div class="note-item">
          <span class="timestamp" title="Jump to timestamp">${n.timestamp}</span>
          <span class="note-text">${n.text}</span>
          <div class="note-actions">
            <button data-del-note="${i}">Delete</button>
          </div>
        </div>`).join('') || '<p style="color:var(--text-muted);font-size:.85rem;padding:8px">No notes yet. Add your first note below.</p>';
    }
    renderNotes();

    document.querySelector('.add-note-btn')?.addEventListener('click', () => {
      const input = document.querySelector('.note-input');
      if (input && input.value.trim()) {
        const mins = Math.floor(Math.random() * 25);
        const secs = Math.floor(Math.random() * 60);
        notes.push({ timestamp: `${mins}:${secs.toString().padStart(2, '0')}`, text: input.value.trim() });
        localStorage.setItem(notesKey, JSON.stringify(notes));
        input.value = '';
        renderNotes();
        showToast('Note saved!', 'success');
      }
    });

    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-del-note]');
      if (!btn) return;
      notes.splice(parseInt(btn.dataset.delNote), 1);
      localStorage.setItem(notesKey, JSON.stringify(notes));
      renderNotes();
    });

    // Q&A
    const qaList = document.querySelector('.qa-list');
    if (qaList) {
      qaList.innerHTML = pd.qna.map(q => `
        <div class="qa-item">
          <div class="qa-item-header">
            <img src="${q.avatar}" alt="">
            <div>
              <div class="name">${q.name}</div>
              <div class="time">${q.time}</div>
            </div>
          </div>
          <p>${q.text}</p>
          ${q.replies.length ? `
            <div class="qa-replies">
              ${q.replies.map(r => `
                <div class="qa-item">
                  <div class="qa-item-header">
                    <img src="${r.avatar}" alt="">
                    <div>
                      <div class="name">${r.name}</div>
                      <div class="time">${r.time}</div>
                    </div>
                  </div>
                  <p>${r.text}</p>
                </div>`).join('')}
            </div>` : ''}
        </div>`).join('');
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space' || e.key === 'k') { e.preventDefault(); togglePlay(); }
      if (e.key === 'f') videoContainer?.requestFullscreen?.();
    });

    // Mark complete button
    document.querySelector('.mark-complete')?.addEventListener('click', function() {
      this.textContent = '✅ Completed';
      this.disabled = true;
      this.style.opacity = '0.6';
      showToast('Lesson marked as complete!', 'success');
    });
  }

  // ═══════════════════════════════════════════
  // QUIZ
  // ═══════════════════════════════════════════
  function initQuiz() {
    const qd = DATA.quizData;
    let currentQ = 0;
    let answers = new Array(qd.questions.length).fill(-1);
    let submitted = false;
    let timeLeft = qd.timeLimit;
    let timerInterval;

    const timerEl = document.querySelector('.quiz-timer');
    const dotsEl = document.querySelector('.quiz-progress');
    const bodyEl = document.querySelector('.quiz-body');

    function formatTime(s) {
      const m = Math.floor(s / 60);
      const sec = s % 60;
      return m.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0');
    }

    // Timer
    timerInterval = setInterval(() => {
      timeLeft--;
      if (timerEl) {
        timerEl.textContent = '⏱ ' + formatTime(timeLeft);
        timerEl.classList.toggle('warning', timeLeft <= 60);
      }
      if (timeLeft <= 0) { clearInterval(timerInterval); submitQuiz(); }
    }, 1000);

    function renderDots() {
      if (!dotsEl) return;
      dotsEl.innerHTML = qd.questions.map((_, i) => {
        let cls = 'quiz-dot';
        if (i === currentQ) cls += ' current';
        if (answers[i] !== -1) cls += ' answered';
        if (submitted) cls += answers[i] === qd.questions[i].answer ? ' correct' : ' wrong';
        return `<span class="${cls}"></span>`;
      }).join('');
    }

    function renderQuestion() {
      if (!bodyEl) return;
      const q = qd.questions[currentQ];
      bodyEl.innerHTML = `
        <div class="question-card">
          <div class="question-num">Question ${currentQ + 1} of ${qd.questions.length}</div>
          <div class="question-text">${q.q}</div>
          <div class="options">
            ${q.options.map((opt, i) => `
              <div class="option${answers[currentQ] === i ? ' selected' : ''}" data-opt="${i}">
                <span class="radio"></span>
                <span>${opt}</span>
              </div>`).join('')}
          </div>
        </div>
        <div class="quiz-nav">
          <button class="btn btn-secondary prev-q" ${currentQ === 0 ? 'disabled' : ''}>← Previous</button>
          ${currentQ === qd.questions.length - 1
            ? '<button class="btn btn-primary submit-quiz">Submit Quiz</button>'
            : '<button class="btn btn-primary next-q">Next →</button>'}
        </div>`;

      bodyEl.querySelectorAll('.option').forEach(opt => {
        opt.addEventListener('click', () => {
          if (submitted) return;
          answers[currentQ] = parseInt(opt.dataset.opt);
          bodyEl.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');
          renderDots();
        });
      });

      bodyEl.querySelector('.prev-q')?.addEventListener('click', () => { currentQ--; renderQuestion(); renderDots(); });
      bodyEl.querySelector('.next-q')?.addEventListener('click', () => { currentQ++; renderQuestion(); renderDots(); });
      bodyEl.querySelector('.submit-quiz')?.addEventListener('click', () => {
        if (answers.includes(-1)) {
          const unanswered = answers.filter(a => a === -1).length;
          if (!confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) return;
        }
        submitQuiz();
      });
    }

    function submitQuiz() {
      submitted = true;
      clearInterval(timerInterval);
      let score = 0;
      qd.questions.forEach((q, i) => { if (answers[i] === q.answer) score++; });
      const pct = Math.round((score / qd.questions.length) * 100);
      const grade = pct >= 90 ? 'A' : pct >= 80 ? 'B+' : pct >= 70 ? 'B' : pct >= 60 ? 'C' : 'F';
      renderDots();

      if (bodyEl) {
        bodyEl.innerHTML = `
          <div class="quiz-results">
            <div class="score-circle" style="border-color:${pct >= 70 ? 'var(--success)' : 'var(--error)'}">
              <span class="pct" style="color:${pct >= 70 ? 'var(--success)' : 'var(--error)'}">${pct}%</span>
              <span class="label">${score}/${qd.questions.length}</span>
            </div>
            <h2 class="grade">${pct >= 70 ? '🎉 Congratulations!' : '😔 Keep Trying!'}</h2>
            <p class="score-text">You scored ${score} out of ${qd.questions.length} (Grade: ${grade})</p>
            <div class="results-dots">
              ${qd.questions.map((q, i) => `<span class="quiz-dot ${answers[i] === q.answer ? 'correct' : 'wrong'}" title="Q${i + 1}: ${answers[i] === q.answer ? 'Correct' : 'Incorrect'}"></span>`).join('')}
            </div>
            <div class="results-actions">
              <button class="btn btn-secondary review-answers">Review Answers</button>
              ${pct >= 70 ? '<a href="certificate.html" class="btn btn-primary">View Certificate 🏆</a>' : '<button class="btn btn-primary" onclick="location.reload()">Retry Quiz</button>'}
            </div>
          </div>`;

        bodyEl.querySelector('.review-answers')?.addEventListener('click', () => {
          currentQ = 0;
          renderReview();
        });
      }

      // Save result
      const results = JSON.parse(localStorage.getItem('learnhub-quiz-results') || '[]');
      results.push({ quiz: qd.quizTitle, course: qd.courseTitle, score, total: qd.questions.length, grade, date: new Date().toLocaleDateString(), passed: pct >= 70 });
      localStorage.setItem('learnhub-quiz-results', JSON.stringify(results));
    }

    function renderReview() {
      if (!bodyEl) return;
      const q = qd.questions[currentQ];
      const isCorrect = answers[currentQ] === q.answer;
      bodyEl.innerHTML = `
        <div class="question-card">
          <div class="question-num">Review — Question ${currentQ + 1} of ${qd.questions.length}</div>
          <div class="question-text">${q.q}</div>
          <div class="options">
            ${q.options.map((opt, i) => {
              let cls = 'option';
              if (i === q.answer) cls += ' correct';
              else if (i === answers[currentQ] && !isCorrect) cls += ' incorrect';
              return `<div class="${cls}"><span class="radio"></span><span>${opt}</span></div>`;
            }).join('')}
          </div>
        </div>
        <div class="quiz-nav">
          <button class="btn btn-secondary prev-q" ${currentQ === 0 ? 'disabled' : ''}>← Previous</button>
          ${currentQ < qd.questions.length - 1
            ? '<button class="btn btn-primary next-q">Next →</button>'
            : '<button class="btn btn-primary" onclick="location.reload()">Done</button>'}
        </div>`;
      bodyEl.querySelector('.prev-q')?.addEventListener('click', () => { currentQ--; renderReview(); });
      bodyEl.querySelector('.next-q')?.addEventListener('click', () => { currentQ++; renderReview(); });
    }

    renderQuestion();
    renderDots();
  }

  // ═══════════════════════════════════════════
  // STUDENT DASHBOARD
  // ═══════════════════════════════════════════
  function initDashboard() {
    const enrolled = [...DATA.enrolledCourses];
    const stored = Enrollment.get();
    stored.forEach(se => { if (!enrolled.find(e => e.courseId === se.courseId)) enrolled.push(se); });

    // Continue learning
    const continueEl = document.querySelector('.continue-card');
    const inProgress = enrolled.filter(e => e.progress < 100 && e.progress > 0);
    if (continueEl && inProgress.length) {
      const latest = inProgress[0];
      const course = DATA.courses.find(c => c.id === latest.courseId);
      if (course) {
        continueEl.innerHTML = `
          <img src="${course.thumbnail}" alt="">
          <div class="continue-info">
            <h4>${course.title}</h4>
            <p class="lesson">Lesson: ${latest.currentLesson}</p>
            <div class="progress-row">
              <div class="progress-bar" style="flex:1"><div class="progress-fill" style="width:${latest.progress}%"></div></div>
              <span>${latest.progress}%</span>
            </div>
            <a href="learn.html?id=${course.id}" class="btn btn-primary btn-sm">Continue →</a>
          </div>`;
      }
    }

    // My courses
    const grid = document.querySelector('.enrolled-grid');
    if (grid) {
      grid.innerHTML = enrolled.map(e => {
        const course = DATA.courses.find(c => c.id === e.courseId);
        if (!course) return '';
        const isCompleted = e.progress >= 100;
        const colorClass = e.progress < 25 ? 'red' : e.progress < 50 ? 'amber' : e.progress < 75 ? '' : 'green';
        return `
          <div class="enrolled-card">
            <div class="enrolled-card-thumb"><img src="${course.thumbnail}" alt="" loading="lazy"></div>
            <div class="enrolled-card-body">
              <h4>${course.title}</h4>
              <p class="instructor">${course.instructor.name}</p>
              ${isCompleted
                ? '<div class="completed-badge">✅ Completed</div>'
                : `<div class="progress-row"><div class="progress-bar" style="flex:1"><div class="progress-fill ${colorClass}" style="width:${e.progress}%"></div></div><span>${e.progress}%</span></div>`}
              <a href="${isCompleted ? 'certificate.html' : 'learn.html?id=' + course.id}" class="btn btn-sm ${isCompleted ? 'btn-secondary' : 'btn-primary'}">${isCompleted ? '🏆 Certificate' : 'Continue'}</a>
            </div>
          </div>`;
      }).join('');
    }

    // Certificates
    const certGrid = document.querySelector('.cert-grid');
    if (certGrid) {
      certGrid.innerHTML = DATA.certificates.map(cert => `
        <div class="cert-card">
          <div class="trophy">🏆</div>
          <h4>${cert.courseName}</h4>
          <p class="cert-date">Completed ${cert.completedDate}</p>
          <div class="cert-actions">
            <a href="certificate.html?id=${cert.certId}" class="btn btn-sm btn-primary">View</a>
            <button class="btn btn-sm btn-secondary" onclick="window.print()">Download</button>
          </div>
        </div>`).join('');
    }

    // Quiz results
    const quizTable = document.querySelector('.quiz-table tbody');
    if (quizTable) {
      const allResults = [...DATA.quizResults, ...JSON.parse(localStorage.getItem('learnhub-quiz-results') || '[]')];
      quizTable.innerHTML = allResults.map(r => `
        <tr>
          <td>${r.quiz}</td>
          <td>${r.course}</td>
          <td><span class="quiz-score ${r.passed ? 'pass' : 'fail'}">${r.score}/${r.total}</span></td>
          <td>${r.grade}</td>
          <td>${r.date}</td>
        </tr>`).join('');
    }
  }

  // ═══════════════════════════════════════════
  // INSTRUCTOR DASHBOARD
  // ═══════════════════════════════════════════
  function initInstructor() {
    const id = DATA.instructorData;

    // Profile
    const profileImg = document.querySelector('.instructor-sidebar .profile img');
    if (profileImg) profileImg.src = id.avatar;
    const profileName = document.querySelector('.instructor-sidebar .profile h4');
    if (profileName) profileName.textContent = id.name;
    const profileTitle = document.querySelector('.instructor-sidebar .profile p');
    if (profileTitle) profileTitle.textContent = id.title;

    // KPIs
    const kpiGrid = document.querySelector('.kpi-grid');
    if (kpiGrid) {
      kpiGrid.innerHTML = id.kpis.map(k => `
        <div class="kpi-card">
          <div class="kpi-icon ${k.color}">${k.icon}</div>
          <div class="kpi-value">${k.value}</div>
          <div class="kpi-label">${k.label}</div>
          <div class="kpi-trend ${k.direction}">${k.direction === 'up' ? '▲' : '▼'} ${k.trend}</div>
        </div>`).join('');
    }

    // Sidebar tabs
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.instructor-section');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        sections.forEach(s => s.classList.remove('active'));
        document.getElementById(link.dataset.section)?.classList.add('active');
      });
    });

    // My courses table
    const coursesTable = document.querySelector('.my-courses-table tbody');
    if (coursesTable) {
      coursesTable.innerHTML = id.myCourses.map(c => `
        <tr>
          <td><strong>${c.title}</strong></td>
          <td>${c.students.toLocaleString()}</td>
          <td>⭐ ${c.rating}</td>
          <td>$${c.revenue.toLocaleString()}</td>
          <td><span class="badge badge-${c.status === 'Published' ? 'new' : 'bestseller'}" style="padding:4px 10px;border-radius:4px;font-size:.75rem">${c.status}</span></td>
        </tr>`).join('');
    }

    // Revenue chart (Chart.js)
    const revenueCanvas = document.getElementById('revenueChart');
    if (revenueCanvas && typeof Chart !== 'undefined') {
      const ctx = revenueCanvas.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: id.revenueData.labels,
          datasets: [{
            label: 'Revenue ($)',
            data: id.revenueData.values,
            borderColor: '#7C3AED',
            backgroundColor: 'rgba(124,58,237,0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#7C3AED',
            pointRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, ticks: { callback: v => '$' + v.toLocaleString() }, grid: { color: 'rgba(0,0,0,0.05)' } },
            x: { grid: { display: false } }
          }
        }
      });
    }

    // Enrollment chart
    const enrollCanvas = document.getElementById('enrollmentChart');
    if (enrollCanvas && typeof Chart !== 'undefined') {
      new Chart(enrollCanvas.getContext('2d'), {
        type: 'bar',
        data: {
          labels: id.enrollmentData.labels,
          datasets: [{
            label: 'Enrollments',
            data: id.enrollmentData.values,
            backgroundColor: 'rgba(124,58,237,0.7)',
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } },
            x: { grid: { display: false } }
          }
        }
      });
    }

    // Students table
    const studentsTable = document.querySelector('.students-table tbody');
    if (studentsTable) {
      studentsTable.innerHTML = id.recentStudents.map(s => {
        const colorClass = s.progress < 25 ? 'red' : s.progress < 50 ? 'amber' : s.progress < 75 ? '' : 'green';
        return `
          <tr>
            <td><div class="student-cell"><img src="${s.avatar}" alt=""><span>${s.name}</span></div></td>
            <td>${s.course}</td>
            <td><div class="progress-bar sm" style="width:100px"><div class="progress-fill ${colorClass}" style="width:${s.progress}%"></div></div></td>
            <td>${s.progress}%</td>
            <td>${s.date}</td>
          </tr>`;
      }).join('');
    }
  }

  // ═══════════════════════════════════════════
  // CREATE COURSE
  // ═══════════════════════════════════════════
  function initCreateCourse() {
    let step = 0;
    const panels = document.querySelectorAll('.form-panel');
    const steps = document.querySelectorAll('.create-step');
    const connectors = document.querySelectorAll('.step-connector');

    function showStep(idx) {
      step = idx;
      panels.forEach((p, i) => p.classList.toggle('active', i === idx));
      steps.forEach((s, i) => {
        s.classList.remove('active', 'done');
        if (i < idx) s.classList.add('done');
        else if (i === idx) s.classList.add('active');
      });
      connectors.forEach((c, i) => c.classList.toggle('done', i < idx));
    }

    document.querySelectorAll('.next-step').forEach(btn => {
      btn.addEventListener('click', () => {
        if (step < panels.length - 1) showStep(step + 1);
      });
    });
    document.querySelectorAll('.prev-step').forEach(btn => {
      btn.addEventListener('click', () => {
        if (step > 0) showStep(step - 1);
      });
    });

    // Lesson builder
    const lessonsContainer = document.querySelector('.lesson-builder');
    const addLessonBtn = document.querySelector('.add-lesson-btn');
    let lessonCount = 2;
    if (addLessonBtn) {
      addLessonBtn.addEventListener('click', () => {
        lessonCount++;
        const item = document.createElement('div');
        item.className = 'lesson-builder-item';
        item.innerHTML = `
          <span class="drag">⠿</span>
          <input type="text" placeholder="Lesson ${lessonCount} title">
          <select><option>Video</option><option>Article</option><option>Quiz</option></select>
          <span class="remove" onclick="this.parentElement.remove()">✕</span>`;
        lessonsContainer?.insertBefore(item, addLessonBtn);
      });
    }

    // Pricing options
    document.querySelectorAll('.pricing-option').forEach(opt => {
      opt.addEventListener('click', () => {
        document.querySelectorAll('.pricing-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
      });
    });

    // Publish button
    document.querySelector('.publish-btn')?.addEventListener('click', () => {
      showToast('Course published successfully! 🎉', 'success');
      setTimeout(() => window.location = 'instructor.html', 2000);
    });

    showStep(0);
  }

  // ═══════════════════════════════════════════
  // CERTIFICATE
  // ═══════════════════════════════════════════
  function initCertificate() {
    const cert = DATA.certificates[0];
    if (!cert) return;

    document.querySelector('.cert-name').textContent = cert.studentName;
    document.querySelector('.cert-course strong').textContent = cert.courseName;
    document.querySelector('.cert-date').textContent = 'Completed on ' + cert.completedDate;
    document.querySelector('.cert-id').textContent = cert.certId;

    // Confetti
    launchConfetti();

    // Download
    document.querySelector('.download-cert')?.addEventListener('click', () => {
      showToast('Preparing certificate for download...', 'info');
      setTimeout(() => window.print(), 500);
    });

    // Share
    document.querySelector('.share-cert')?.addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({ title: 'My Certificate', text: `I completed ${cert.courseName} on LearnHub!`, url: location.href });
      } else {
        navigator.clipboard?.writeText(location.href);
        showToast('Link copied to clipboard!', 'success');
      }
    });
  }

  function launchConfetti() {
    const canvas = document.querySelector('.confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const pieces = [];
    const colors = ['#7C3AED', '#F59E0B', '#10B981', '#EF4444', '#3B82F6', '#EC4899'];
    for (let i = 0; i < 150; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 5,
        h: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vy: Math.random() * 3 + 2,
        vx: Math.random() * 2 - 1,
        rot: Math.random() * 360,
        vr: Math.random() * 6 - 3
      });
    }
    let frame = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.y += p.vy;
        p.x += p.vx;
        p.rot += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      frame++;
      if (frame < 180) requestAnimationFrame(animate);
      else { ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.remove(); }
    }
    animate();
  }

  // ═══════════════════════════════════════════
  // SCHOOL MODE
  // ═══════════════════════════════════════════
  function initSchool() {
    const sd = DATA.school;

    // Tabs
    const tabs = document.querySelectorAll('.school-tab');
    const contents = document.querySelectorAll('.school-tab-content');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab)?.classList.add('active');
      });
    });

    // Timetable
    const ttBody = document.querySelector('.timetable tbody');
    if (ttBody) {
      ttBody.innerHTML = sd.timetable.map(row => {
        if (row.isBreak) {
          return `<tr><td class="time-col">${row.time}</td><td colspan="5" class="class-break">${row.label || 'Break'}</td></tr>`;
        }
        const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
        return `<tr>
          <td class="time-col">${row.time}</td>
          ${days.map(d => {
            const cell = row[d];
            return `<td><div class="class-cell class-${cell.cls}"><div class="subject">${cell.subject}</div><div class="room">${cell.room}</div></div></td>`;
          }).join('')}
        </tr>`;
      }).join('');
    }

    // Current class
    const currentEl = document.querySelector('.current-class');
    if (currentEl) {
      currentEl.innerHTML = `
        <span class="indicator"></span>
        <div>
          <strong>Current: ${sd.currentClass.subject}</strong> — ${sd.currentClass.room} — ${sd.currentClass.teacher}
        </div>`;
    }

    // Assignments
    const assignList = document.querySelector('.assignment-list');
    if (assignList) {
      assignList.innerHTML = sd.assignments.map(a => `
        <div class="assignment-item">
          <div>
            <span class="subject-badge class-${a.cls}">${a.subject}</span>
            <h4>${a.title}</h4>
            <p class="due ${a.status === 'overdue' ? 'overdue' : ''}">Due: ${a.due}</p>
          </div>
          <span class="status-badge status-${a.status}">${a.status.charAt(0).toUpperCase() + a.status.slice(1)}</span>
          ${a.status === 'pending' ? '<button class="btn btn-sm btn-primary" onclick="this.parentElement.querySelector(\'.status-badge\').className=\'status-badge status-submitted\';this.parentElement.querySelector(\'.status-badge\').textContent=\'Submitted\';this.remove()">Submit</button>' : ''}
        </div>`).join('');
    }

    // Messages
    const msgContacts = document.querySelector('.messages-list');
    const chatHeader = document.querySelector('.chat-header');
    const chatBody = document.querySelector('.chat-body');
    const chatInput = document.querySelector('.chat-input input');
    const chatSend = document.querySelector('.chat-input button');

    function selectContact(contact) {
      msgContacts?.querySelectorAll('.message-contact').forEach(c => c.classList.remove('active'));
      const el = msgContacts?.querySelector(`[data-mid="${contact.id}"]`);
      if (el) { el.classList.add('active'); el.querySelector('.unread-dot')?.remove(); }
      if (chatHeader) chatHeader.textContent = contact.name;
      renderChat(contact);
    }

    function renderChat(contact) {
      if (!chatBody) return;
      chatBody.innerHTML = contact.messages.map(m => `
        <div class="chat-bubble ${m.sent ? 'sent' : 'received'}">
          ${m.text}
          <div class="time">${m.time}</div>
        </div>`).join('');
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    if (msgContacts) {
      msgContacts.innerHTML = sd.messages.map(m => `
        <div class="message-contact${m.id === 1 ? ' active' : ''}" data-mid="${m.id}">
          <img src="${m.avatar}" alt="">
          <div>
            <div class="contact-name">${m.name}</div>
            <div class="contact-preview">${m.preview}</div>
          </div>
          ${m.unread ? '<span class="unread-dot"></span>' : ''}
        </div>`).join('');

      msgContacts.querySelectorAll('.message-contact').forEach(el => {
        el.addEventListener('click', () => {
          const contact = sd.messages.find(m => m.id === parseInt(el.dataset.mid));
          if (contact) selectContact(contact);
        });
      });

      // Default first
      if (sd.messages.length) {
        if (chatHeader) chatHeader.textContent = sd.messages[0].name;
        renderChat(sd.messages[0]);
      }
    }

    if (chatSend && chatInput) {
      function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble sent';
        bubble.innerHTML = `${text}<div class="time">Just now</div>`;
        chatBody?.appendChild(bubble);
        chatBody.scrollTop = chatBody.scrollHeight;
        chatInput.value = '';
      }
      chatSend.addEventListener('click', sendMessage);
      chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });
    }

    // Notice board
    const noticeList = document.querySelector('.notice-list');
    if (noticeList) {
      noticeList.innerHTML = sd.notices.map(n => `
        <div class="notice-item${n.urgent ? ' urgent' : ''}">
          <div class="notice-meta">
            <span class="badge ${n.urgent ? 'badge-hot' : 'badge-new'}">${n.badge}</span>
            <span>${n.date}</span>
          </div>
          <h4>${n.title}</h4>
          <p>${n.text}</p>
        </div>`).join('');
    }
  }

  // ═══════════════════════════════════════════
  // PAGE ROUTER
  // ═══════════════════════════════════════════
  function init() {
    Theme.init();
    MobileMenu.init();
    HeaderShadow.init();
    ScrollTop.init();
    SearchOverlay.init();
    setActiveNav();

    const page = location.pathname.split('/').pop() || 'index.html';
    if (page === 'index.html' || page === '') initHome();
    else if (page === 'courses.html') initCourses();
    else if (page === 'course.html') initCourseDetail();
    else if (page === 'learn.html') initPlayer();
    else if (page === 'quiz.html') initQuiz();
    else if (page === 'dashboard.html') initDashboard();
    else if (page === 'instructor.html') initInstructor();
    else if (page === 'create-course.html') initCreateCourse();
    else if (page === 'certificate.html') initCertificate();
    else if (page === 'school.html') initSchool();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
