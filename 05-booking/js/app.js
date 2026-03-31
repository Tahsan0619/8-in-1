/* ===== BookIt — app.js ===== */
(function(){
'use strict';

/* ---------- THEME ---------- */
const getTheme = () => localStorage.getItem('bookit-theme') || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
function applyTheme(t){document.documentElement.setAttribute('data-theme',t);localStorage.setItem('bookit-theme',t);const i=document.querySelector('.theme-btn');if(i)i.innerHTML=t==='dark'?sun():moon()}
const moon=()=>'<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>';
const sun=()=>'<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
applyTheme(getTheme());

/* ---------- MOBILE MENU ---------- */
function initMobileMenu(){
  const toggle=document.querySelector('.menu-toggle');
  const menu=document.querySelector('.mobile-menu');
  const overlay=document.querySelector('.mobile-overlay');
  const close=document.querySelector('.mobile-menu-close');
  if(!toggle||!menu)return;
  const open=()=>{menu.classList.add('open');overlay.classList.add('open');document.body.style.overflow='hidden'};
  const shut=()=>{menu.classList.remove('open');overlay.classList.remove('open');document.body.style.overflow=''};
  toggle.addEventListener('click',open);
  if(close)close.addEventListener('click',shut);
  if(overlay)overlay.addEventListener('click',shut);
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',shut));
}

/* ---------- HEADER SHADOW ---------- */
function initHeaderShadow(){
  const h=document.querySelector('.header');
  if(!h)return;
  window.addEventListener('scroll',()=>h.classList.toggle('shadow',scrollY>10));
}

/* ---------- SCROLL TOP ---------- */
function initScrollTop(){
  const btn=document.querySelector('.scroll-top');
  if(!btn)return;
  window.addEventListener('scroll',()=>btn.classList.toggle('visible',scrollY>400));
  btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}

/* ---------- TOAST ---------- */
function showToast(msg,type='success'){
  let t=document.querySelector('.toast');
  if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}
  t.textContent=msg;t.className='toast '+type;
  requestAnimationFrame(()=>t.classList.add('show'));
  setTimeout(()=>t.classList.remove('show'),3000);
}

/* ---------- SET ACTIVE NAV ---------- */
function setActiveNav(){
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.header-nav a, .mobile-menu-nav a').forEach(a=>{
    const href=a.getAttribute('href');
    a.classList.toggle('active',href===path);
  });
}

/* ---------- STARS HTML ---------- */
function starsHTML(rating,max=5){
  let s='';
  for(let i=1;i<=max;i++){
    s+=i<=Math.floor(rating)?'<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>':'<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  }
  return s;
}

/* ---------- HEART ICON ---------- */
const heartEmpty='<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
const heartFull='<svg width="18" height="18" fill="currentColor" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';

/* ---------- WISHLIST ---------- */
function getWishlist(){return JSON.parse(localStorage.getItem('bookit-wishlist')||'[]')}
function toggleWishlist(id){
  let wl=getWishlist();
  if(wl.includes(id))wl=wl.filter(i=>i!==id);
  else wl.push(id);
  localStorage.setItem('bookit-wishlist',JSON.stringify(wl));
  return wl.includes(id);
}
function isWished(id){return getWishlist().includes(id)}

/* ---------- SERVICE CARD HTML ---------- */
function serviceCardHTML(s){
  const wished=isWished(s.id);
  return `<div class="service-card" data-cat="${s.category}">
    <a href="service.html?id=${s.id}" class="service-card-img">
      <img src="${s.image}" alt="${s.name}" loading="lazy">
    </a>
    <button class="service-card-heart ${wished?'liked':''}" data-id="${s.id}" aria-label="Wishlist">${wished?heartFull:heartEmpty}</button>
    <div class="service-card-body">
      <h3><a href="service.html?id=${s.id}">${s.name}</a></h3>
      <div class="service-card-provider">${s.provider.name}</div>
      <div class="service-card-meta">
        <span class="stars">${starsHTML(s.rating)}</span>
        <span>${s.rating} (${s.reviews})</span>
      </div>
      <div class="service-card-footer">
        <span class="service-price">৳${s.pricing[0].price.toLocaleString()} <span>/ ${s.pricing[0].duration}</span></span>
        <span class="service-distance">${s.distance}</span>
      </div>
    </div>
  </div>`;
}

/* ---------- HEART CLICK ---------- */
document.addEventListener('click',e=>{
  const btn=e.target.closest('.service-card-heart');
  if(!btn)return;
  e.preventDefault();
  const id=btn.dataset.id;
  const liked=toggleWishlist(id);
  btn.classList.toggle('liked',liked);
  btn.innerHTML=liked?heartFull:heartEmpty;
  showToast(liked?'Added to wishlist':'Removed from wishlist');
});

/* ---------- HOMEPAGE ---------- */
function initHome(){
  const grid=document.querySelector('.featured-grid');
  if(!grid)return;
  const featured=DATA.services.filter((_,i)=>i<4);
  grid.innerHTML=featured.map(s=>serviceCardHTML(s)).join('');

  // Categories
  const cg=document.querySelector('.cat-grid');
  if(cg)cg.innerHTML=DATA.categories.map(c=>`<a href="services.html?cat=${c.id}" class="cat-card"><div class="cat-icon">${c.icon}</div><h4>${c.name}</h4><span>${c.count} services</span></a>`).join('');

  // How it works
  const steps=document.querySelector('.steps');
  if(steps)steps.innerHTML=DATA.howItWorks.map(s=>`<div class="step"><div class="step-icon">${s.step}</div><h3>${s.title}</h3><p>${s.desc}</p></div>`).join('');

  // Testimonials
  initTestimonials();
}

/* ---------- TESTIMONIAL CAROUSEL ---------- */
function initTestimonials(){
  const wrap=document.querySelector('.testimonial-carousel');
  if(!wrap)return;
  const slides=DATA.testimonials;
  let cur=0;
  wrap.innerHTML=slides.map((t,i)=>`<div class="testimonial-slide ${i===0?'active':''}">
    <div class="stars">${starsHTML(t.stars)}</div>
    <blockquote>"${t.text}"</blockquote>
    <div class="testimonial-author">
      <img src="${t.photo}" alt="${t.name}">
      <div class="testimonial-author-info"><h4>${t.name}</h4><span>${t.role}</span></div>
    </div>
  </div>`).join('')+`<div class="carousel-dots">${slides.map((_,i)=>`<button class="carousel-dot ${i===0?'active':''}" data-i="${i}"></button>`).join('')}</div>`;

  const allSlides=wrap.querySelectorAll('.testimonial-slide');
  const dots=wrap.querySelectorAll('.carousel-dot');
  function go(n){
    allSlides[cur].classList.remove('active');dots[cur].classList.remove('active');
    cur=n;
    allSlides[cur].classList.add('active');dots[cur].classList.add('active');
  }
  dots.forEach(d=>d.addEventListener('click',()=>go(+d.dataset.i)));
  setInterval(()=>go((cur+1)%slides.length),5000);
}

/* ---------- SERVICE LISTING ---------- */
function initServiceListing(){
  const grid=document.querySelector('.listing-grid');
  if(!grid)return;
  const params=new URLSearchParams(location.search);
  const cat=params.get('cat');
  let services=DATA.services;
  if(cat)services=services.filter(s=>s.category===cat);
  grid.innerHTML=services.map(s=>serviceCardHTML(s)).join('');

  // Result count
  const rb=document.querySelector('.result-count');
  if(rb)rb.textContent=`${services.length} services found`;

  // Filter pills
  document.querySelectorAll('.filter-pill').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter-pill').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const c=btn.dataset.cat;
      const filtered=c==='all'?DATA.services:DATA.services.filter(s=>s.category===c);
      grid.innerHTML=filtered.map(s=>serviceCardHTML(s)).join('');
      if(rb)rb.textContent=`${filtered.length} services found`;
    });
  });

  // Map
  initMap(services);
}

/* ---------- LEAFLET MAP ---------- */
function initMap(services){
  const mapEl=document.getElementById('map');
  if(!mapEl||typeof L==='undefined')return;
  const map=L.map('map').setView([23.7808,90.4065],13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(map);
  services.forEach(s=>{
    if(!s.location)return;
    const marker=L.marker([s.location.lat,s.location.lng]).addTo(map);
    marker.bindPopup(`<strong>${s.name}</strong><br>${s.location.address}<br><a href="service.html?id=${s.id}">View Details →</a>`);
  });
}

/* ---------- SERVICE DETAIL ---------- */
function initServiceDetail(){
  const main=document.querySelector('.detail-main');
  if(!main)return;
  const params=new URLSearchParams(location.search);
  const id=params.get('id');
  const s=DATA.services.find(sv=>sv.id===id);
  if(!s){main.innerHTML='<h2>Service not found</h2>';return}

  // Gallery
  const gal=document.querySelector('.detail-gallery');
  if(gal)gal.innerHTML=s.images.map(img=>`<img src="${img}" alt="${s.name}" loading="lazy">`).join('');

  // Main info
  main.innerHTML=`
    <span class="detail-badge">${s.badge}</span>
    <h1>${s.name}</h1>
    <div class="service-card-meta" style="margin-bottom:12px">
      <span class="stars">${starsHTML(s.rating)}</span>
      <span>${s.rating} (${s.reviews} reviews)</span>
      <span>📍 ${s.location.address}</span>
    </div>
    <p>${s.desc}</p>
    <ul class="detail-features">${s.features.map(f=>`<li><svg width="16" height="16" fill="none" stroke="var(--color-success)" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>${f}</li>`).join('')}</ul>
    <h3 style="margin-bottom:12px">Select Service</h3>
    <div class="pricing-list" id="pricingList">${s.pricing.map((p,i)=>`<div class="pricing-item ${i===0?'selected':''}" data-id="${p.id}" data-price="${p.price}"><div class="pricing-item-info"><h4>${p.name}</h4><span>${p.duration}</span></div><span class="pricing-item-price">${p.price===0?'Free':'৳'+p.price.toLocaleString()}</span></div>`).join('')}</div>
    ${s.addons.length?`<h4 style="margin:16px 0 8px">Add-ons</h4>${s.addons.map(a=>`<label style="display:flex;gap:8px;align-items:center;margin-bottom:6px;font-size:14px;cursor:pointer"><input type="checkbox" class="addon-check" data-price="${a.price}"> ${a.name} (+৳${a.price})</label>`).join('')}`:''}
    <h3 style="margin:24px 0 12px">Pick a Date</h3>
    <div class="calendar" id="serviceCalendar"></div>
    <h3 style="margin:24px 0 12px">Pick a Time</h3>
    <div id="timeSlots"></div>
    <div style="margin-top:24px">
      <a href="#" class="btn-primary btn-book" id="bookBtn">Book Now — ৳<span id="totalPrice">${s.pricing[0].price.toLocaleString()}</span></a>
    </div>
    <h3 style="margin:40px 0 12px">Reviews</h3>
    <div class="review-summary">
      <div class="review-avg"><div class="big-num">${s.rating}</div><div class="stars" style="justify-content:center;margin:4px 0">${starsHTML(s.rating)}</div><div style="font-size:13px;color:var(--color-text-muted)">${s.reviews} reviews</div></div>
      <div class="review-bars">${[5,4,3,2,1].map(n=>{const cnt=s.ratingDist[n];const pct=Math.round(cnt/s.reviews*100);return`<div class="review-bar-row"><span>${n}★</span><div class="review-bar-track"><div class="review-bar-fill" style="width:${pct}%"></div></div><span>${cnt}</span></div>`}).join('')}</div>
    </div>
    <div class="review-list">${s.reviewList.map(r=>`<div class="review-item"><img src="${r.photo}" alt="${r.name}"><div class="review-item-body"><h4>${r.name}</h4><div class="stars" style="margin-bottom:2px">${starsHTML(r.stars)}</div><div class="review-date">${r.date}</div><p>${r.text}</p></div></div>`).join('')}</div>
  `;

  // Provider sidebar
  const prov=document.querySelector('.provider-sidebar');
  if(prov)prov.innerHTML=`<div class="provider-card"><img src="${s.provider.photo}" alt="${s.provider.name}"><h4>${s.provider.name}</h4><div class="provider-since">${s.provider.since}</div><div class="stars" style="justify-content:center;margin:4px 0">${starsHTML(s.rating)}</div><p style="font-size:13px;color:var(--color-text-secondary);margin-top:8px">${s.provider.response}</p><a href="#" class="btn-secondary" style="margin-top:12px;width:100%;justify-content:center">Contact Provider</a></div>`;

  // Pricing selection
  let selectedPrice=s.pricing[0].price;
  let selectedPriceId=s.pricing[0].id;
  let selectedDate=null;
  let selectedSlot=null;

  document.querySelector('#pricingList').addEventListener('click',e=>{
    const item=e.target.closest('.pricing-item');
    if(!item)return;
    document.querySelectorAll('.pricing-item').forEach(p=>p.classList.remove('selected'));
    item.classList.add('selected');
    selectedPrice=+item.dataset.price;
    selectedPriceId=item.dataset.id;
    updateTotal();
  });

  document.querySelectorAll('.addon-check').forEach(cb=>{
    cb.addEventListener('change',updateTotal);
  });

  function updateTotal(){
    let total=selectedPrice;
    document.querySelectorAll('.addon-check:checked').forEach(cb=>total+=+cb.dataset.price);
    document.getElementById('totalPrice').textContent=total.toLocaleString();
  }

  // Calendar
  initCalendar('serviceCalendar',s.availableDates,function(day){
    selectedDate=day;
    renderSlots(s);
  });

  // Time slots
  function renderSlots(svc){
    const c=document.getElementById('timeSlots');
    if(!c)return;
    let html='';
    ['morning','afternoon','evening'].forEach(period=>{
      const slots=svc.slots[period];
      if(!slots||!slots.length)return;
      html+=`<div class="slot-group"><h4>${period}</h4><div class="slot-grid">${slots.map(sl=>{
        const booked=svc.bookedSlots.includes(sl);
        return`<button class="slot-btn ${booked?'':'available'}" ${booked?'disabled':''} data-time="${sl}">${sl}</button>`;
      }).join('')}</div></div>`;
    });
    c.innerHTML=html;
    c.querySelectorAll('.slot-btn.available').forEach(btn=>{
      btn.addEventListener('click',()=>{
        c.querySelectorAll('.slot-btn').forEach(b=>b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedSlot=btn.dataset.time;
      });
    });
  }
  renderSlots(s);

  // Book button
  document.getElementById('bookBtn').addEventListener('click',e=>{
    e.preventDefault();
    if(!selectedDate){showToast('Please select a date','error');return}
    if(!selectedSlot){showToast('Please select a time slot','error');return}
    // Store booking data in session
    const bookingData={serviceId:s.id,serviceName:s.name,providerName:s.provider.name,image:s.image,option:s.pricing.find(p=>p.id===selectedPriceId)?.name||s.pricing[0].name,price:selectedPrice,date:selectedDate,slot:selectedSlot,addons:[]};
    document.querySelectorAll('.addon-check:checked').forEach(cb=>{
      const label=cb.parentElement.textContent.trim().split('(')[0].trim();
      bookingData.addons.push({name:label,price:+cb.dataset.price});
      bookingData.price+=+cb.dataset.price;
    });
    sessionStorage.setItem('bookit-pending',JSON.stringify(bookingData));
    location.href='booking.html';
  });
}

/* ---------- CALENDAR WIDGET ---------- */
function initCalendar(containerId,availableDates,onSelect){
  const c=document.getElementById(containerId);
  if(!c)return;
  const now=new Date();
  let month=now.getMonth();
  let year=now.getFullYear();

  function render(){
    const first=new Date(year,month,1);
    const last=new Date(year,month+1,0);
    const startDay=first.getDay();
    const daysInMonth=last.getDate();
    const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];

    let html=`<div class="calendar-header">
      <button onclick="return false" class="cal-prev"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>
      <h4>${monthNames[month]} ${year}</h4>
      <button onclick="return false" class="cal-next"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></button>
    </div>
    <div class="calendar-days"><span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span></div>
    <div class="cal-grid">`;

    for(let i=0;i<startDay;i++)html+='<span></span>';
    for(let d=1;d<=daysInMonth;d++){
      const isToday=d===now.getDate()&&month===now.getMonth()&&year===now.getFullYear();
      const hasSlots=availableDates.includes(d);
      const past=new Date(year,month,d)<new Date(now.getFullYear(),now.getMonth(),now.getDate());
      html+=`<button class="cal-day ${isToday?'today':''} ${hasSlots&&!past?'has-slots':''}" data-day="${d}" ${!hasSlots||past?'disabled':''}>${d}</button>`;
    }
    html+='</div>';
    c.innerHTML=html;

    c.querySelector('.cal-prev').addEventListener('click',()=>{month--;if(month<0){month=11;year--}render()});
    c.querySelector('.cal-next').addEventListener('click',()=>{month++;if(month>11){month=0;year++}render()});
    c.querySelectorAll('.cal-day:not(:disabled)').forEach(btn=>{
      btn.addEventListener('click',()=>{
        c.querySelectorAll('.cal-day').forEach(b=>b.classList.remove('selected'));
        btn.classList.add('selected');
        const dayNum=+btn.dataset.day;
        const dateStr=`${monthNames[month]} ${dayNum}, ${year}`;
        if(onSelect)onSelect(dateStr);
      });
    });
  }
  render();
}

/* ---------- BOOKING FLOW ---------- */
function initBookingFlow(){
  const stepper=document.querySelector('.stepper');
  if(!stepper)return;
  const pending=JSON.parse(sessionStorage.getItem('bookit-pending')||'null');
  if(!pending){document.querySelector('.booking-content').innerHTML='<div style="text-align:center;padding:60px 0"><h2>No booking in progress</h2><p>Select a service first.</p><a href="index.html" class="btn-primary" style="margin-top:16px">Browse Services</a></div>';return}

  let step=1;
  const steps=document.querySelectorAll('.step-item');
  const lines=document.querySelectorAll('.step-line');
  const panels=document.querySelectorAll('.booking-step');

  // Fill summary
  const sumImg=document.querySelector('.booking-summary img');
  if(sumImg)sumImg.src=pending.image;
  const sumName=document.querySelector('.booking-summary h3');
  if(sumName)sumName.textContent=pending.serviceName;
  const sumProv=document.querySelector('.summary-provider');
  if(sumProv)sumProv.textContent=pending.providerName;

  function updateSummary(){
    const rows=document.getElementById('summaryRows');
    if(!rows)return;
    let html=`<div class="summary-row"><span>${pending.option}</span><span>৳${pending.price.toLocaleString()}</span></div>`;
    if(pending.addons)pending.addons.forEach(a=>html+=`<div class="summary-row"><span>${a.name}</span><span>+৳${a.price}</span></div>`);
    html+=`<div class="summary-row"><span>Date</span><span>${pending.date||'—'}</span></div>`;
    html+=`<div class="summary-row"><span>Time</span><span>${pending.slot||'—'}</span></div>`;
    let total=pending.price;
    html+=`<div class="summary-row summary-total"><span>Total</span><span>৳${total.toLocaleString()}</span></div>`;
    rows.innerHTML=html;
  }
  updateSummary();

  function goToStep(n){
    step=n;
    steps.forEach((s,i)=>{
      s.classList.remove('active','done');
      if(i+1<n)s.classList.add('done');
      if(i+1===n)s.classList.add('active');
    });
    lines.forEach((l,i)=>l.classList.toggle('done',i<n-1));
    panels.forEach((p,i)=>{p.style.display=i+1===n?'block':'none'});
    window.scrollTo({top:0,behavior:'smooth'});
  }

  // Step 1 — pre-fill date & time
  const s1date=document.getElementById('s1Date');
  const s1time=document.getElementById('s1Time');
  if(s1date)s1date.textContent=pending.date;
  if(s1time)s1time.textContent=pending.slot;

  // Navigation
  document.querySelectorAll('.next-step').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.preventDefault();
      if(step===2){
        // Validate form
        const name=document.getElementById('bkName');
        const email=document.getElementById('bkEmail');
        const phone=document.getElementById('bkPhone');
        let valid=true;
        [name,email,phone].forEach(f=>{if(!f||!f.value.trim()){f.parentElement.classList.add('error');valid=false}else{f.parentElement.classList.remove('error')}});
        if(!valid)return;
        pending.customerName=name.value;pending.customerEmail=email.value;pending.customerPhone=phone.value;
        pending.notes=document.getElementById('bkNotes')?.value||'';
      }
      if(step===3){
        // Payment — just proceed
        finishBooking();
        return;
      }
      goToStep(step+1);
    });
  });
  document.querySelectorAll('.prev-step').forEach(btn=>{
    btn.addEventListener('click',e=>{e.preventDefault();goToStep(step-1)});
  });

  function finishBooking(){
    const bookingId='BK-'+Date.now().toString(36).toUpperCase();
    pending.id=bookingId;
    pending.status='confirmed';
    // Save
    const all=JSON.parse(localStorage.getItem('bookit-bookings')||'[]');
    all.unshift(pending);
    localStorage.setItem('bookit-bookings',JSON.stringify(all));
    sessionStorage.removeItem('bookit-pending');
    // Show confirmation
    goToStep(4);
    const conf=document.querySelector('.confirm-box');
    if(conf){
      conf.querySelector('.confirm-id').textContent=bookingId;
      const details=conf.querySelector('.confirm-details');
      if(details)details.innerHTML=`
        <div class="confirm-row"><span>Service</span><span>${pending.serviceName}</span></div>
        <div class="confirm-row"><span>Option</span><span>${pending.option}</span></div>
        <div class="confirm-row"><span>Date</span><span>${pending.date}</span></div>
        <div class="confirm-row"><span>Time</span><span>${pending.slot}</span></div>
        <div class="confirm-row"><span>Total</span><span>৳${pending.price.toLocaleString()}</span></div>`;
      const sms=conf.querySelector('.sms-bubble');
      if(sms)sms.textContent=`BookIt: Your booking ${bookingId} is confirmed! ${pending.serviceName} on ${pending.date} at ${pending.slot}. Total: ৳${pending.price.toLocaleString()}. Thank you!`;
    }
  }
  goToStep(1);
}

/* ---------- DASHBOARD ---------- */
function initDashboard(){
  const tabs=document.querySelector('.dash-tabs');
  if(!tabs)return;
  const stored=JSON.parse(localStorage.getItem('bookit-bookings')||'[]');
  const all=[...DATA.userBookings,...stored];
  let current='upcoming';

  function renderBookings(){
    const list=document.getElementById('bookingList');
    if(!list)return;
    const filtered=current==='upcoming'?all.filter(b=>b.status==='confirmed'):current==='past'?all.filter(b=>b.status==='completed'):all.filter(b=>b.status==='cancelled');
    if(!filtered.length){list.innerHTML=`<div style="text-align:center;padding:40px;color:var(--color-text-muted)"><p>No ${current} bookings</p></div>`;return}
    list.innerHTML=filtered.map(b=>`<div class="booking-card">
      <img src="${b.image}" alt="${b.service||b.serviceName}">
      <div class="booking-card-body">
        <h3>${b.service||b.serviceName}</h3>
        <div class="booking-meta">${b.option} • ${b.date} at ${b.time||b.slot}</div>
      </div>
      <span class="status-badge status-${b.status}">${b.status}</span>
      ${b.status==='confirmed'?`<div class="booking-actions"><button class="btn-ghost cancel-btn" data-id="${b.id}">Cancel</button><button class="btn-ghost reschedule-btn" data-id="${b.id}">Reschedule</button></div>`:''}
    </div>`).join('');
  }

  tabs.querySelectorAll('.dash-tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      tabs.querySelectorAll('.dash-tab').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      current=tab.dataset.tab;
      renderBookings();
    });
  });

  document.addEventListener('click',e=>{
    if(e.target.closest('.cancel-btn')){
      const id=e.target.closest('.cancel-btn').dataset.id;
      const bk=all.find(b=>b.id===id);
      if(bk){bk.status='cancelled';showToast('Booking cancelled');renderBookings()}
    }
    if(e.target.closest('.reschedule-btn')){
      const id=e.target.closest('.reschedule-btn').dataset.id;
      const bk=all.find(b=>b.id===id);
      if(!bk)return;
      const overlay=document.createElement('div');
      overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:9999;backdrop-filter:blur(4px)';
      const tomorrow=new Date();tomorrow.setDate(tomorrow.getDate()+1);
      const minDate=tomorrow.toISOString().split('T')[0];
      overlay.innerHTML=`<div style="background:var(--color-surface);border-radius:16px;padding:24px;width:90%;max-width:400px;box-shadow:0 20px 60px rgba(0,0,0,.25)">
        <h3 style="margin:0 0 16px">Reschedule Booking</h3>
        <p style="font-size:.9rem;color:var(--color-text-secondary);margin-bottom:16px">Current: ${bk.date} at ${bk.time}</p>
        <label style="display:block;font-size:.85rem;font-weight:600;margin-bottom:4px">New Date</label>
        <input type="date" id="rescheduleDate" min="${minDate}" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--color-border);background:var(--color-surface);font-size:.9rem;margin-bottom:12px">
        <label style="display:block;font-size:.85rem;font-weight:600;margin-bottom:4px">New Time</label>
        <select id="rescheduleTime" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--color-border);background:var(--color-surface);font-size:.9rem;margin-bottom:16px">
          <option>09:00 AM</option><option>10:00 AM</option><option>11:00 AM</option><option>12:00 PM</option><option>02:00 PM</option><option>03:00 PM</option><option>04:00 PM</option><option>05:00 PM</option>
        </select>
        <div style="display:flex;gap:8px;justify-content:flex-end">
          <button class="btn-ghost" id="rescheduleCancel">Cancel</button>
          <button class="btn-primary" id="rescheduleConfirm">Reschedule</button>
        </div>
      </div>`;
      document.body.appendChild(overlay);
      overlay.addEventListener('click',ev=>{if(ev.target===overlay)overlay.remove()});
      overlay.querySelector('#rescheduleCancel').addEventListener('click',()=>overlay.remove());
      overlay.querySelector('#rescheduleConfirm').addEventListener('click',()=>{
        const newDate=overlay.querySelector('#rescheduleDate').value;
        const newTime=overlay.querySelector('#rescheduleTime').value;
        if(!newDate){showToast('Please select a date','error');return}
        bk.date=newDate;bk.time=newTime;
        overlay.remove();
        showToast('Booking rescheduled to '+newDate+' at '+newTime,'success');
        renderBookings();
      });
    }
  });

  renderBookings();

  // Notifications
  const notifList=document.getElementById('notifList');
  if(notifList){
    notifList.innerHTML=DATA.notifications.map(n=>`<div class="notif-item ${n.unread?'unread':''}">
      <div class="notif-icon">${n.icon}</div>
      <div class="notif-body"><h4>${n.title}</h4><p style="font-size:13px;color:var(--color-text-secondary);margin:2px 0">${n.body}</p><span>${n.time}</span></div>
    </div>`).join('');
  }
}

/* ---------- PROVIDER DASHBOARD ---------- */
function initProvider(){
  const kpi=document.querySelector('.kpi-grid');
  if(!kpi)return;
  const d=DATA.providerData;
  kpi.innerHTML=`
    <div class="kpi-card"><div class="kpi-label">Today's Bookings</div><div class="kpi-value">${d.kpis.todayBookings}</div><div class="kpi-trend">↑ 2 from yesterday</div></div>
    <div class="kpi-card"><div class="kpi-label">This Week Revenue</div><div class="kpi-value">৳${d.kpis.weekRevenue.toLocaleString()}</div><div class="kpi-trend">↑ 12% vs last week</div></div>
    <div class="kpi-card"><div class="kpi-label">Total Clients</div><div class="kpi-value">${d.kpis.totalClients}</div><div class="kpi-trend">+8 this month</div></div>
    <div class="kpi-card"><div class="kpi-label">Avg Rating</div><div class="kpi-value">${d.kpis.avgRating}</div><div class="kpi-trend" style="display:inline-flex;gap:2px">${starsHTML(d.kpis.avgRating)}</div></div>`;

  // Today's timeline
  const timeline=document.getElementById('providerTimeline');
  if(timeline){
    timeline.innerHTML=d.todaySchedule.map(s=>{
      const statusColors={completed:'var(--color-success)','in-progress':'var(--color-accent)',upcoming:'var(--color-text-muted)'};
      return`<div class="booking-card">
        <div style="width:80px;flex-shrink:0;text-align:center"><strong style="font-size:14px">${s.time}</strong><br><span style="font-size:11px;color:var(--color-text-muted)">${s.duration}</span></div>
        <div class="booking-card-body"><h3>${s.client}</h3><div class="booking-meta">${s.service}</div></div>
        <span class="status-badge" style="background:${statusColors[s.status]}20;color:${statusColors[s.status]}">${s.status}</span>
      </div>`;
    }).join('');
  }

  // Availability
  const avail=document.getElementById('providerAvail');
  if(avail){
    avail.innerHTML=Object.entries(d.weekAvailability).map(([day,v])=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:12px;border:1px solid var(--color-border);border-radius:var(--radius-md);margin-bottom:8px">
      <strong style="width:40px">${day}</strong>
      ${v.active?`<span style="font-size:13px">${v.start} — ${v.end}</span><span style="font-size:12px;color:var(--color-success)">Active</span>`:`<span style="font-size:13px;color:var(--color-text-muted)">Day Off</span><span style="font-size:12px;color:var(--color-text-muted)">Inactive</span>`}
    </div>`).join('');
  }

  // Earnings chart (simple bar chart)
  const chart=document.getElementById('earningsChart');
  if(chart){
    const max=Math.max(...d.earningsChart);
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    chart.innerHTML=`<div style="display:flex;align-items:flex-end;gap:8px;height:200px;padding:16px 0">${d.earningsChart.map((v,i)=>`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><div style="width:100%;background:var(--color-accent);border-radius:4px 4px 0 0;height:${(v/max)*160}px;transition:height .3s"></div><span style="font-size:10px;color:var(--color-text-muted)">${months[i]}</span></div>`).join('')}</div>`;
  }
}

/* ---------- RESTAURANT ---------- */
function initRestaurant(){
  const menuGrid=document.getElementById('menuGrid');
  if(!menuGrid)return;
  const r=DATA.restaurants[0];
  let cart=JSON.parse(sessionStorage.getItem('bookit-cart')||'{}');
  let mode='delivery';
  let activeCategory='starters';

  // Delivery/Dine-in toggle
  document.querySelectorAll('.menu-toggle-bar button').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.menu-toggle-bar button').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      mode=btn.dataset.mode;
      document.getElementById('tableSection').style.display=mode==='dine-in'?'block':'none';
    });
  });

  // Category tabs
  document.querySelectorAll('.menu-tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.menu-tab').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory=tab.dataset.cat;
      renderMenu();
    });
  });

  function renderMenu(){
    const items=r.menu[activeCategory]||[];
    menuGrid.innerHTML=items.map(item=>{
      const qty=cart[item.id]||0;
      return`<div class="menu-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="menu-item-body">
          <h4>${item.name} ${item.popular?'<span style="color:var(--color-warning);font-size:11px">★ Popular</span>':''}</h4>
          <p>${item.desc}</p>
          <div class="menu-item-footer">
            <span class="menu-price">৳${item.price}</span>
            ${qty>0?`<div class="qty-stepper"><button class="qty-minus" data-id="${item.id}">−</button><span>${qty}</span><button class="qty-plus" data-id="${item.id}">+</button></div>`:`<button class="add-btn" data-id="${item.id}">Add</button>`}
          </div>
        </div>
      </div>`;
    }).join('');
  }

  menuGrid.addEventListener('click',e=>{
    const addBtn=e.target.closest('.add-btn');
    const plus=e.target.closest('.qty-plus');
    const minus=e.target.closest('.qty-minus');
    if(addBtn){cart[addBtn.dataset.id]=1;renderMenu();renderCart()}
    if(plus){cart[plus.dataset.id]=(cart[plus.dataset.id]||0)+1;renderMenu();renderCart()}
    if(minus){cart[minus.dataset.id]--;if(cart[minus.dataset.id]<=0)delete cart[minus.dataset.id];renderMenu();renderCart()}
    sessionStorage.setItem('bookit-cart',JSON.stringify(cart));
  });

  function renderCart(){
    const sidebar=document.getElementById('orderSidebar');
    if(!sidebar)return;
    const allItems=Object.values(r.menu).flat();
    const cartItems=Object.entries(cart).map(([id,qty])=>{const item=allItems.find(i=>i.id===id);return item?{...item,qty}:null}).filter(Boolean);
    const subtotal=cartItems.reduce((s,i)=>s+i.price*i.qty,0);
    const delivery=mode==='delivery'?r.deliveryFee:0;
    const total=subtotal+delivery;

    if(!cartItems.length){sidebar.innerHTML='<h3>Your Order</h3><p style="color:var(--color-text-muted);font-size:14px;text-align:center;padding:24px 0">Your cart is empty</p>';return}

    sidebar.innerHTML=`<h3>Your Order (${cartItems.reduce((s,i)=>s+i.qty,0)})</h3>
      ${cartItems.map(i=>`<div class="order-item"><span>${i.name} × ${i.qty}</span><span>৳${(i.price*i.qty).toLocaleString()}</span></div>`).join('')}
      ${mode==='delivery'?`<div class="order-item"><span>Delivery Fee</span><span>৳${delivery}</span></div>`:''}
      <div class="order-total"><span>Total</span><span>৳${total.toLocaleString()}</span></div>
      <button class="btn-primary" style="width:100%;justify-content:center;margin-top:16px" id="placeOrder">${mode==='delivery'?'Place Order':'Confirm Reservation & Order'}</button>`;
    document.getElementById('placeOrder').addEventListener('click',()=>{
      sessionStorage.removeItem('bookit-cart');cart={};
      showToast('Order placed successfully!');
      renderMenu();renderCart();
    });
  }
  renderMenu();
  renderCart();

  // Table reservation
  const tableGrid=document.getElementById('tableGrid');
  if(tableGrid){
    tableGrid.innerHTML=r.tables.map(t=>`<div class="list-card" style="cursor:${t.available?'pointer':'default'};opacity:${t.available?1:.5}">
      <div style="width:48px;height:48px;background:var(--color-accent-light);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px">🪑</div>
      <div class="list-card-body"><h3>Table for ${t.seats}</h3><span style="font-size:13px;color:${t.available?'var(--color-success)':'var(--color-error)'}">${t.available?'Available':'Occupied'}</span></div>
    </div>`).join('');
  }
}

/* ---------- CLINIC ---------- */
function initClinic(){
  const docGrid=document.getElementById('doctorGrid');
  if(!docGrid)return;
  let activeSpec='all';
  let selectedDoctor=null;

  function renderDoctors(){
    const filtered=activeSpec==='all'?DATA.doctors:DATA.doctors.filter(d=>d.specialty.toLowerCase().includes(activeSpec));
    docGrid.innerHTML=filtered.map(d=>`<div class="doctor-card" data-id="${d.id}">
      <img src="${d.image}" alt="${d.name}">
      <div class="doctor-card-body">
        <h3>${d.name}</h3>
        <span class="doctor-spec">${d.specialty}</span>
        <div class="doctor-card-meta">
          <span>${d.experience} exp.</span>
          <span>৳${d.fee.toLocaleString()}</span>
          <span class="stars" style="font-size:12px">${starsHTML(d.rating)} ${d.rating}</span>
        </div>
        <p style="font-size:13px;color:var(--color-text-secondary);margin-bottom:8px">${d.qualifications}</p>
        <div style="display:flex;gap:8px;align-items:center">
          <span style="font-size:12px;color:var(--color-success)">● Next: ${d.nextSlot}</span>
          <a href="#doctorDetail" class="btn-primary" style="padding:8px 16px;font-size:13px;margin-left:auto" data-doc="${d.id}">Book Now</a>
        </div>
      </div>
    </div>`).join('');
  }

  // Filters
  document.querySelectorAll('.clinic-filter').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.clinic-filter').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      activeSpec=btn.dataset.spec;
      renderDoctors();
    });
  });

  renderDoctors();

  // Doctor detail
  docGrid.addEventListener('click',e=>{
    const btn=e.target.closest('[data-doc]');
    if(!btn)return;
    e.preventDefault();
    selectedDoctor=DATA.doctors.find(d=>d.id===btn.dataset.doc);
    renderDoctorDetail();
  });

  function renderDoctorDetail(){
    const detail=document.getElementById('doctorDetail');
    if(!detail||!selectedDoctor)return;
    detail.style.display='block';
    const d=selectedDoctor;
    detail.innerHTML=`<div class="doctor-profile">
      <div class="doctor-profile-card">
        <img src="${d.image}" alt="${d.name}">
        <h3>${d.name}</h3>
        <span class="doctor-spec">${d.specialty}</span>
        <div class="stars" style="justify-content:center;margin:8px 0">${starsHTML(d.rating)}</div>
        <p style="font-size:14px;color:var(--color-text-secondary);margin:12px 0">${d.bio}</p>
        <div style="text-align:left;margin-top:16px">
          <p style="font-size:13px;margin-bottom:4px"><strong>Qualifications:</strong> ${d.qualifications}</p>
          <p style="font-size:13px;margin-bottom:4px"><strong>Experience:</strong> ${d.experience}</p>
          <p style="font-size:13px;margin-bottom:4px"><strong>Languages:</strong> ${d.languages.join(', ')}</p>
          <p style="font-size:13px"><strong>Consultation Fee:</strong> ৳${d.fee.toLocaleString()}</p>
        </div>
      </div>
      <div>
        <h3 style="margin-bottom:16px">Available Slots</h3>
        <div class="doctor-slots">${Object.entries(d.slots).map(([day,slots])=>`<div class="day-col">
          <h4>${day}</h4>
          ${slots.length?slots.map(sl=>`<button class="slot-btn ${d.bookedSlots.includes(sl)?'':'available'}" ${d.bookedSlots.includes(sl)?'disabled':''} data-time="${sl}" data-day="${day}" style="width:100%;margin-bottom:4px">${sl}</button>`).join(''):'<span style="font-size:11px;color:var(--color-text-muted)">—</span>'}
        </div>`).join('')}</div>
        <div style="margin-top:24px">
          <a href="#" class="btn-primary btn-book" id="bookDoctor" style="width:100%;justify-content:center">Book Appointment — ৳${d.fee.toLocaleString()}</a>
        </div>
        <h3 style="margin:32px 0 12px">Patient Reviews</h3>
        ${d.reviewList.map(r=>`<div class="review-item" style="border-bottom:1px solid var(--color-border-light);padding:12px 0">
          <div><h4 style="font-size:14px;font-weight:600">${r.name}</h4><div class="stars" style="margin:2px 0">${starsHTML(r.stars)}</div><p style="font-size:14px;margin-top:4px">${r.text}</p></div>
        </div>`).join('')}
      </div>
    </div>`;

    let selDay=null,selTime=null;
    detail.querySelectorAll('.slot-btn.available').forEach(btn=>{
      btn.addEventListener('click',()=>{
        detail.querySelectorAll('.slot-btn').forEach(b=>b.classList.remove('selected'));
        btn.classList.add('selected');
        selDay=btn.dataset.day;selTime=btn.dataset.time;
      });
    });

    detail.querySelector('#bookDoctor').addEventListener('click',e=>{
      e.preventDefault();
      if(!selDay||!selTime){showToast('Please select a time slot','error');return}
      const bookingData={serviceId:d.id,serviceName:d.name+' — '+d.specialty,providerName:d.name,image:d.image,option:'Consultation',price:d.fee,date:selDay,slot:selTime,addons:[]};
      sessionStorage.setItem('bookit-pending',JSON.stringify(bookingData));
      location.href='booking.html';
    });

    detail.scrollIntoView({behavior:'smooth',block:'start'});
  }
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded',()=>{
  applyTheme(getTheme());
  initMobileMenu();
  initHeaderShadow();
  initScrollTop();
  setActiveNav();

  // Theme toggle
  document.querySelectorAll('.theme-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{const t=getTheme()==='dark'?'light':'dark';applyTheme(t)});
  });

  // Page routing
  const page=location.pathname.split('/').pop()||'index.html';
  if(page==='index.html'||page==='')initHome();
  else if(page==='services.html')initServiceListing();
  else if(page==='service.html')initServiceDetail();
  else if(page==='booking.html')initBookingFlow();
  else if(page==='dashboard.html')initDashboard();
  else if(page==='provider.html')initProvider();
  else if(page==='restaurant.html')initRestaurant();
  else if(page==='clinic.html')initClinic();
});
})();
