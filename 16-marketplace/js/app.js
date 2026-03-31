/* ============================================================
   16 · BazarBD — Marketplace App
   ============================================================ */
;(function(){
'use strict';

/* ---------- Helpers ---------- */
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const money=n=>'৳'+Number(n).toLocaleString('en-IN');
const pct=(r,g)=>Math.min(Math.round(r/g*100),100);
const stars=n=>'★'.repeat(Math.floor(n))+(n%1>=.5?'½':'')+'☆'.repeat(5-Math.ceil(n));
const ago=d=>{const s=Math.floor((Date.now()-new Date(d))/1e3);if(s<60)return 'just now';if(s<3600)return Math.floor(s/60)+'m ago';if(s<86400)return Math.floor(s/3600)+'h ago';return Math.floor(s/86400)+'d ago';};
const getProduct=id=>MP.products.find(p=>p.id===id);
const getSeller=id=>MP.sellers.find(s=>s.id===id);
const getReviews=pid=>MP.reviews.filter(r=>r.productId===pid);

/* ---------- State ---------- */
const State={
  _p:'mp_',
  get(k,d=null){try{const v=localStorage.getItem(this._p+k);return v?JSON.parse(v):d}catch{return d}},
  set(k,v){localStorage.setItem(this._p+k,JSON.stringify(v))},
  remove(k){localStorage.removeItem(this._p+k)}
};

/* ---------- Cart ---------- */
const Cart={
  _key:'cart',
  get(){return State.get(this._key,[])},
  set(items){State.set(this._key,items);this.updateBadge()},
  add(productId,variant,qty=1){
    const items=this.get();
    const ex=items.find(i=>i.productId===productId&&i.variant===variant);
    if(ex){ex.qty+=qty}else{items.push({productId,variant,qty})}
    this.set(items);Toast.show('Added to cart!','success');
  },
  remove(productId,variant){
    this.set(this.get().filter(i=>!(i.productId===productId&&i.variant===variant)));
  },
  updateQty(productId,variant,qty){
    const items=this.get();
    const it=items.find(i=>i.productId===productId&&i.variant===variant);
    if(it){it.qty=Math.max(1,qty);this.set(items)}
  },
  clear(){this.set([])},
  count(){return this.get().reduce((s,i)=>s+i.qty,0)},
  updateBadge(){
    const b=$('.cart-badge');
    if(b){const c=this.count();b.textContent=c;b.style.display=c?'flex':'none'}
  }
};

/* ---------- Wishlist ---------- */
const Wishlist={
  _key:'wishlist',
  get(){return State.get(this._key,MP.currentUser.wishlist.slice())},
  toggle(pid){
    const list=this.get();
    const i=list.indexOf(pid);
    if(i>=0){list.splice(i,1);Toast.show('Removed from wishlist','info')}
    else{list.push(pid);Toast.show('Added to wishlist ♡','success')}
    State.set(this._key,list);return i<0;
  },
  has(pid){return this.get().includes(pid)}
};

/* ---------- Theme ---------- */
const Theme={
  init(){
    const saved=State.get('theme');
    if(saved)document.documentElement.dataset.theme=saved;
    else if(matchMedia('(prefers-color-scheme:dark)').matches)document.documentElement.dataset.theme='dark';
  },
  toggle(){
    const t=document.documentElement.dataset.theme==='dark'?'light':'dark';
    document.documentElement.dataset.theme=t;State.set('theme',t);
  }
};

/* ---------- Toast ---------- */
const Toast={
  show(msg,type='info'){
    let c=$('.toast-container');
    if(!c){c=document.createElement('div');c.className='toast-container';document.body.appendChild(c)}
    const t=document.createElement('div');t.className='toast '+type;
    t.innerHTML=`<span>${msg}</span><span class="toast-close" onclick="this.parentElement.style.animation='toastOut .2s ease-in forwards';setTimeout(()=>this.parentElement.remove(),200)">&times;</span>`;
    c.appendChild(t);setTimeout(()=>{if(t.parentElement){t.style.animation='toastOut .2s ease-in forwards';setTimeout(()=>t.remove(),200)}},4000);
  }
};

/* ---------- Auth ---------- */
const Auth={
  init(){
    const overlay=$('.auth-overlay');if(!overlay)return;
    const close=$('.auth-close');
    close?.addEventListener('click',()=>overlay.classList.remove('active'));
    overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.classList.remove('active')});
    $$('.auth-tab').forEach(tab=>tab.addEventListener('click',()=>{
      $$('.auth-tab').forEach(t=>t.classList.remove('active'));
      $$('.auth-form').forEach(f=>f.classList.remove('active'));
      tab.classList.add('active');$('#'+tab.dataset.form)?.classList.add('active');
    }));
    $$('.auth-form').forEach(f=>f.addEventListener('submit',e=>{
      e.preventDefault();
      State.set('loggedIn',true);overlay.classList.remove('active');
      Toast.show('Welcome, '+MP.currentUser.name+'!','success');
      setTimeout(()=>location.reload(),500);
    }));
    $$('[data-auth]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();overlay.classList.add('active')}));
  }
};

/* ---------- Drawer ---------- */
const Drawer={
  init(){
    const h=$('.hamburger'),d=$('.drawer'),o=$('.drawer-overlay'),c=$('.drawer-close');
    if(!h||!d)return;
    const toggle=()=>{d.classList.toggle('active');o?.classList.toggle('active')};
    h.addEventListener('click',toggle);c?.addEventListener('click',toggle);o?.addEventListener('click',toggle);
  }
};

/* ---------- Header ---------- */
function initHeader(){
  const h=$('.header');
  if(h)window.addEventListener('scroll',()=>h.classList.toggle('scrolled',scrollY>20),{passive:true});
  $('.theme-toggle')?.addEventListener('click',Theme.toggle);
  Cart.updateBadge();
}

/* ---------- Back to Top ---------- */
function initBackToTop(){
  const b=$('.back-to-top');if(!b)return;
  window.addEventListener('scroll',()=>b.classList.toggle('visible',scrollY>400),{passive:true});
  b.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}

/* ============================================================
   PAGE MODULES
   ============================================================ */

/* ---------- Product Card ---------- */
const ProductCard={
  render(p){
    const seller=getSeller(p.sellerId);
    const disc=p.comparePrice?Math.round((1-p.price/p.comparePrice)*100):0;
    const wished=Wishlist.has(p.id);
    const variant=p.colors?p.colors[0].name:p.sizes?p.sizes[0].name:null;
    return `<div class="product-card">
      <div class="product-card-image">${p.badge?`<span class="product-badge ${p.badge.toLowerCase()}">${p.badge}</span>`:''}
        <button class="product-wishlist ${wished?'active':''}" onclick="event.stopPropagation();window._toggleWish('${p.id}',this)" title="Wishlist">
          <svg viewBox="0 0 24 24" fill="${wished?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </button>📷</div>
      <div class="product-card-body">
        <div class="product-title"><a href="product.html?id=${p.id}">${p.title}</a></div>
        <div class="product-price">
          <span class="price-current">${money(p.price)}</span>
          ${p.comparePrice?`<span class="price-original">${money(p.comparePrice)}</span><span class="price-discount">-${disc}%</span>`:''}
        </div>
        <div class="product-rating"><span class="stars">${stars(p.rating)}</span> ${p.rating} (${p.reviewCount})</div>
        <div class="product-seller">${seller?.name||''} ${seller?.verified?'<span class="verified">✓ Verified</span>':''}</div>
        <div class="product-card-actions">
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();Cart.add('${p.id}','${variant||''}')">🛒 Add</button>
          <a href="product.html?id=${p.id}" class="btn btn-outline btn-sm">View</a>
        </div>
      </div>
    </div>`;
  }
};

/* ---------- Home Page ---------- */
const HomePage={
  init(){
    this.renderCategories();
    this.renderFlashDeals();
    this.renderTopSellers();
    this.renderRecommended();
    this.renderRecent();
    this.startFlashTimer();
  },
  renderCategories(){
    const el=$('#categoryStrip');if(!el)return;
    el.innerHTML=MP.categories.map(c=>`<a href="browse.html?cat=${c.id}" class="category-item"><span class="category-icon">${c.icon}</span><span class="category-name">${c.name}</span></a>`).join('');
  },
  renderFlashDeals(){
    const el=$('#flashScroll');if(!el)return;
    el.innerHTML=MP.flashDeals.map(fd=>{
      const p=getProduct(fd.productId);if(!p)return'';
      return ProductCard.render(p);
    }).join('');
  },
  renderTopSellers(){
    const el=$('#topSellers');if(!el)return;
    el.innerHTML=MP.sellers.filter(s=>s.verified).slice(0,4).map(s=>`<div class="seller-card">
      <div class="seller-avatar">${s.logo}</div>
      <div class="seller-name">${s.name}</div>
      <div class="seller-meta">★${s.rating} · ${s.products.toLocaleString()} products</div>
      <div class="seller-badges">${s.verified?'<span class="badge badge-verified">✓ Verified</span>':''}${s.topRated?'<span class="badge badge-top">🏆 Top Rated</span>':''}</div>
      <a href="store.html?id=${s.id}" class="btn btn-outline btn-sm">Visit Store</a>
    </div>`).join('');
  },
  renderRecommended(){
    const el=$('#recommended');if(!el)return;
    el.innerHTML=MP.products.slice(0,4).map(p=>ProductCard.render(p)).join('');
  },
  renderRecent(){
    const el=$('#recentlyViewed');if(!el)return;
    const ids=State.get('recent',MP.currentUser.recentlyViewed);
    if(!ids.length){el.closest('.section')?.remove();return}
    el.innerHTML=ids.slice(0,4).map(id=>{const p=getProduct(id);return p?ProductCard.render(p):''}).join('');
  },
  startFlashTimer(){
    const el=$('#flashTimer');if(!el)return;
    const end=MP.flashDeals[0]?.endsAt||Date.now()+18000000;
    const tick=()=>{
      const diff=Math.max(0,end-Date.now());
      const h=Math.floor(diff/3600000);const m=Math.floor((diff%3600000)/60000);const s=Math.floor((diff%60000)/1000);
      el.innerHTML=`<span class="flash-unit">${String(h).padStart(2,'0')}</span><span class="flash-sep">:</span><span class="flash-unit">${String(m).padStart(2,'0')}</span><span class="flash-sep">:</span><span class="flash-unit">${String(s).padStart(2,'0')}</span>`;
    };
    tick();setInterval(tick,1000);
  }
};

/* ---------- Browse Page ---------- */
const BrowsePage={
  state:{cat:'',q:'',sort:'relevant',minPrice:0,maxPrice:Infinity,rating:0,verified:false},
  init(){
    const params=new URLSearchParams(location.search);
    this.state.cat=params.get('cat')||'';
    this.state.q=params.get('q')||'';
    this.render();
    this.bind();
  },
  getFiltered(){
    let items=[...MP.products];
    if(this.state.cat)items=items.filter(p=>{const c=MP.categories.find(c=>c.id===this.state.cat);return c&&p.category===c.name});
    if(this.state.q){const q=this.state.q.toLowerCase();items=items.filter(p=>p.title.toLowerCase().includes(q)||p.category.toLowerCase().includes(q))}
    if(this.state.minPrice)items=items.filter(p=>p.price>=this.state.minPrice);
    if(this.state.maxPrice<Infinity)items=items.filter(p=>p.price<=this.state.maxPrice);
    if(this.state.rating)items=items.filter(p=>p.rating>=this.state.rating);
    if(this.state.verified)items=items.filter(p=>{const s=getSeller(p.sellerId);return s?.verified});
    switch(this.state.sort){
      case'price-asc':items.sort((a,b)=>a.price-b.price);break;
      case'price-desc':items.sort((a,b)=>b.price-a.price);break;
      case'rating':items.sort((a,b)=>b.rating-a.rating);break;
      case'newest':items.sort((a,b)=>b.id.localeCompare(a.id));break;
      case'best':items.sort((a,b)=>b.sold-a.sold);break;
    }
    return items;
  },
  render(){
    const grid=$('#browseGrid');const count=$('#browseCount');if(!grid)return;
    const items=this.getFiltered();
    count.textContent=items.length+' product'+(items.length!==1?'s':'');
    grid.innerHTML=items.length?items.map(p=>ProductCard.render(p)).join(''):'<div class="empty-state"><div class="empty-icon">🔍</div><h3>No products found</h3><p>Try adjusting your filters</p></div>';
  },
  bind(){
    $('#browseSort')?.addEventListener('change',e=>{this.state.sort=e.target.value;this.render()});
    $('#filterApply')?.addEventListener('click',()=>{
      const min=$('#filterMin');const max=$('#filterMax');
      if(min)this.state.minPrice=+min.value||0;
      if(max)this.state.maxPrice=+max.value||Infinity;
      this.render();
    });
    $$('.filter-option input[type="checkbox"]').forEach(cb=>cb.addEventListener('change',()=>{
      if(cb.dataset.cat!==undefined){this.state.cat=cb.checked?cb.value:'';this.render()}
      if(cb.dataset.rating!==undefined){this.state.rating=cb.checked?+cb.value:0;this.render()}
      if(cb.dataset.verified!==undefined){this.state.verified=cb.checked;this.render()}
    }));
  }
};

/* ---------- Product Detail ---------- */
const ProductDetail={
  product:null,
  selectedColor:null,
  selectedSize:null,
  qty:1,
  init(){
    const id=new URLSearchParams(location.search).get('id');
    this.product=getProduct(id);
    if(!this.product){$('#main').innerHTML='<div class="section"><div class="container"><div class="empty-state"><h3>Product not found</h3><a href="browse.html" class="btn btn-primary">Browse Products</a></div></div></div>';return}
    // Track recently viewed
    const recent=State.get('recent',MP.currentUser.recentlyViewed.slice());
    if(!recent.includes(id)){recent.unshift(id);if(recent.length>10)recent.pop();State.set('recent',recent)}
    this.selectedColor=this.product.colors?this.product.colors.find(c=>c.stock>0):null;
    this.selectedSize=this.product.sizes?this.product.sizes.find(s=>s.stock>0):null;
    this.render();
    this.bindTabs();
  },
  getStock(){
    if(this.selectedColor)return this.selectedColor.stock;
    if(this.selectedSize)return this.selectedSize.stock;
    return this.product.stock;
  },
  render(){
    const p=this.product;const seller=getSeller(p.sellerId);
    const disc=p.comparePrice?Math.round((1-p.price/p.comparePrice)*100):0;
    const stock=this.getStock();
    const reviews=getReviews(p.id);
    // Breadcrumb
    const bc=$('#breadcrumb');if(bc)bc.innerHTML=`<a href="index.html">Home</a><span class="sep">›</span><a href="browse.html">${p.category}</a><span class="sep">›</span><span class="current">${p.title}</span>`;
    // Gallery
    const gal=$('#gallery');if(gal){
      gal.innerHTML=`<div class="gallery-main">📷</div><div class="gallery-thumbs">${p.images.map((_,i)=>`<div class="gallery-thumb ${i===0?'active':''}" onclick="this.parentElement.querySelectorAll('.gallery-thumb').forEach(t=>t.classList.remove('active'));this.classList.add('active')">📷</div>`).join('')}</div>`;
    }
    // Info
    const info=$('#productInfo');if(info)info.innerHTML=`
      <h1>${p.title}</h1>
      <div class="seller-link">by <a href="store.html?id=${p.sellerId}">${seller?.name}</a> ${seller?.verified?'<span class="verified">✓ Verified</span>':''}</div>
      <div class="detail-rating"><span class="stars">${stars(p.rating)}</span> <strong>${p.rating}</strong> <span class="count">(${p.reviewCount} reviews)</span></div>
      <div class="detail-price"><span class="current">${money(p.price)}</span>${p.comparePrice?`<span class="original">${money(p.comparePrice)}</span><span class="discount">-${disc}%</span>`:''}</div>
      ${p.colors?`<div class="variant-section"><div class="variant-label">Color: ${this.selectedColor?.name||''}</div><div class="color-swatches">${p.colors.map(c=>`<div class="color-swatch ${c.stock===0?'out':''} ${this.selectedColor?.name===c.name?'active':''}" style="background:${c.hex}" title="${c.name} ${c.stock===0?'(Out of Stock)':''}" onclick="window._selectColor('${c.name}')"></div>`).join('')}</div></div>`:''}
      ${p.sizes?`<div class="variant-section"><div class="variant-label">Size</div><div class="size-buttons">${p.sizes.map(s=>`<button class="size-btn ${s.stock===0?'out':''} ${this.selectedSize?.name===s.name?'active':''}" ${s.stock===0?'disabled':''} onclick="window._selectSize('${s.name}')">${s.name}</button>`).join('')}</div></div>`:''}
      <div class="variant-section">
        <div class="variant-label">Quantity</div>
        <div class="qty-selector">
          <button onclick="window._changeQty(-1)" ${this.qty<=1?'disabled':''}>−</button>
          <span>${this.qty}</span>
          <button onclick="window._changeQty(1)" ${this.qty>=stock?'disabled':''}>+</button>
        </div>
        <div class="stock-info ${stock>10?'in':stock>0?'low':'out'}">${stock>10?'In Stock':stock>0?'Only '+stock+' left!':'Out of Stock'}</div>
      </div>
      <div class="detail-actions">
        <button class="btn btn-primary btn-lg" ${stock===0?'disabled':''} onclick="Cart.add('${p.id}','${this.selectedColor?.name||this.selectedSize?.name||''}',${this.qty})">🛒 Add to Cart</button>
        <button class="btn btn-outline btn-lg" ${stock===0?'disabled':''} onclick="Cart.add('${p.id}','${this.selectedColor?.name||this.selectedSize?.name||''}',${this.qty});location.href='checkout.html'">Buy Now</button>
      </div>
      <div class="detail-secondary">
        <button onclick="window._toggleWishDetail('${p.id}')"><svg viewBox="0 0 24 24" fill="${Wishlist.has(p.id)?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> Wishlist</button>
      </div>`;
    // Seller Strip
    const strip=$('#sellerStrip');if(strip&&seller)strip.innerHTML=`
      <div class="seller-strip-avatar">${seller.logo}</div>
      <div class="seller-strip-info"><h3>${seller.name} ${seller.verified?'<span class="badge badge-verified">✓ Verified</span>':''}</h3><p>★${seller.rating} · ${seller.products.toLocaleString()} products · <a href="store.html?id=${seller.id}">Visit Store</a></p></div>
      <div class="seller-strip-meta"><span>📦 Ships from ${seller.location}</span><span>🚚 ${p.shipping.days} days</span><span>↩ ${p.returns}</span></div>`;
    // Tabs: Description
    const descTab=$('#tabDescription');if(descTab)descTab.innerHTML=`<p style="line-height:1.8;color:var(--text-secondary)">${p.description}</p>`;
    // Tabs: Specs
    const specTab=$('#tabSpecs');if(specTab)specTab.innerHTML=`<table class="specs-table">${p.specs.map(([k,v])=>`<tr><td>${k}</td><td>${v}</td></tr>`).join('')}</table>`;
    // Tabs: Reviews
    this.renderReviews(reviews);
    // Related
    this.renderRelated();
  },
  renderReviews(reviews){
    const el=$('#tabReviews');if(!el)return;
    const dist=[5,4,3,2,1].map(s=>{const c=reviews.filter(r=>r.rating===s).length;return{star:s,count:c,pct:reviews.length?Math.round(c/reviews.length*100):0}});
    const avg=reviews.length?(reviews.reduce((s,r)=>s+r.rating,0)/reviews.length).toFixed(1):'0';
    el.innerHTML=`
      <div class="rating-dist">
        <div class="rating-avg"><div class="num">${avg}</div><div class="stars">${stars(+avg)}</div><div class="total">${reviews.length} reviews</div></div>
        <div class="rating-bars">${dist.map(d=>`<div class="rating-bar-row"><span class="label">${d.star}</span><div class="bar"><div class="bar-fill" style="width:${d.pct}%"></div></div><span class="pct">${d.pct}%</span></div>`).join('')}</div>
      </div>
      ${reviews.map(r=>`<div class="review-card">
        <div class="review-header">
          <div class="review-avatar">${r.name[0]}</div>
          <div><div class="review-name">${r.name}</div><div class="review-date">${new Date(r.date).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}</div></div>
          ${r.verified?'<span class="review-verified">✓ Verified Purchase</span>':''}
        </div>
        <div class="review-stars">${stars(r.rating)}</div>
        <div class="review-text">${r.text}</div>
        ${r.photos.length?`<div class="review-photos">${r.photos.map(()=>'<div class="review-photo">📷</div>').join('')}</div>`:''}
        <div class="review-helpful"><button onclick="this.querySelector('span').textContent=+this.querySelector('span').textContent+1">👍 <span>${r.helpful}</span></button><button>👎 <span>${r.unhelpful}</span></button></div>
        ${r.sellerReply?`<div class="seller-reply"><strong>Seller Response:</strong><br>${r.sellerReply}</div>`:''}
      </div>`).join('')}
      <div class="review-form"><h3>Write a Review</h3>
        <div class="star-input" id="starInput">${[1,2,3,4,5].map(i=>`<span data-v="${i}" onclick="window._setRating(${i})">☆</span>`).join('')}</div>
        <div class="form-group"><textarea placeholder="Share your experience..." rows="4" style="width:100%;padding:var(--sp-3);border:1px solid var(--border);border-radius:var(--radius-md);background:var(--surface)"></textarea></div>
        <button class="btn btn-primary" style="margin-top:var(--sp-3)" onclick="Toast.show('Review submitted! Thank you.','success')">Submit Review</button>
      </div>`;
  },
  renderRelated(){
    const el=$('#relatedProducts');if(!el)return;
    const related=MP.products.filter(p=>p.category===this.product.category&&p.id!==this.product.id).slice(0,4);
    el.innerHTML=related.map(p=>ProductCard.render(p)).join('');
  },
  bindTabs(){
    $$('.tab-btn').forEach(btn=>btn.addEventListener('click',()=>{
      $$('.tab-btn').forEach(b=>b.classList.remove('active'));
      $$('.tab-content').forEach(c=>c.classList.remove('active'));
      btn.classList.add('active');$('#'+btn.dataset.tab)?.classList.add('active');
    }));
  }
};

/* ---------- Store Page ---------- */
const StorePage={
  seller:null,
  tab:'all',
  init(){
    const id=new URLSearchParams(location.search).get('id');
    this.seller=getSeller(id);
    if(!this.seller){$('#main').innerHTML='<div class="section"><div class="container"><div class="empty-state"><h3>Store not found</h3><a href="index.html" class="btn btn-primary">Go Home</a></div></div></div>';return}
    this.render();this.bind();
  },
  getProducts(){
    let items=MP.products.filter(p=>p.sellerId===this.seller.id);
    if(this.tab==='sale')items=items.filter(p=>p.comparePrice);
    if(this.tab==='best')items=items.sort((a,b)=>b.sold-a.sold);
    return items;
  },
  render(){
    const s=this.seller;
    const banner=$('#storeBanner');if(banner){
      banner.style.background=s.banner;
      banner.innerHTML=`<div class="store-hero"><div class="store-logo">${s.logo}</div><div class="store-info"><h1>${s.name} ${s.verified?'✓':''}</h1><p>${s.tagline}</p><div class="store-stats"><span>★${s.rating}</span><span>${s.products.toLocaleString()} products</span><span>Since ${s.since}</span><span>${s.followers.toLocaleString()} followers</span></div><div class="store-actions"><button class="btn btn-primary btn-sm" onclick="Toast.show('Following ${s.name}!','success')">Follow</button></div></div></div>`;
    }
    const grid=$('#storeProducts');if(grid)grid.innerHTML=this.getProducts().map(p=>ProductCard.render(p)).join('')||'<div class="empty-state"><p>No products in this category</p></div>';
  },
  bind(){
    $$('.store-tab').forEach(tab=>tab.addEventListener('click',()=>{
      $$('.store-tab').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');this.tab=tab.dataset.tab;this.render();
    }));
  }
};

/* ---------- Cart Page ---------- */
const CartPage={
  init(){this.render()},
  render(){
    const items=Cart.get();const main=$('#cartMain');const summary=$('#orderSummary');
    if(!main)return;
    if(!items.length){
      main.innerHTML='<div class="cart-empty"><div class="cart-empty-icon">🛒</div><h2>Your cart is empty</h2><p>Start adding products you love!</p><a href="browse.html" class="btn btn-primary btn-lg">Continue Shopping</a></div>';
      if(summary)summary.style.display='none';return;
    }
    // Group by seller
    const groups={};
    items.forEach(item=>{
      const p=getProduct(item.productId);if(!p)return;
      if(!groups[p.sellerId])groups[p.sellerId]={seller:getSeller(p.sellerId),items:[]};
      groups[p.sellerId].items.push({...item,product:p});
    });
    let html='';
    let totalItems=0,totalShipping=0,subtotal=0;
    Object.values(groups).forEach(g=>{
      const s=g.seller;
      let vendorSub=0;
      html+=`<div class="vendor-group"><div class="vendor-header">📦 Sold by: ${s.name} ${s.verified?'<span class="verified">✓ Verified</span>':''}</div>`;
      g.items.forEach(item=>{
        const rowTotal=item.product.price*item.qty;vendorSub+=rowTotal;totalItems+=item.qty;
        html+=`<div class="cart-item">
          <div class="cart-item-image">📷</div>
          <div class="cart-item-info">
            <div class="cart-item-title">${item.product.title}</div>
            ${item.variant?`<div class="cart-item-variant">${item.variant}</div>`:''}
            <div class="cart-item-price">${money(item.product.price)} × ${item.qty} = ${money(rowTotal)}</div>
            <div class="cart-item-actions">
              <div class="qty-selector">
                <button onclick="Cart.updateQty('${item.productId}','${item.variant}',${ item.qty-1});CartPage.render()">−</button>
                <span>${item.qty}</span>
                <button onclick="Cart.updateQty('${item.productId}','${item.variant}',${item.qty+1});CartPage.render()">+</button>
              </div>
              <button onclick="Cart.remove('${item.productId}','${item.variant}');CartPage.render()">🗑 Remove</button>
              <button onclick="Wishlist.toggle('${item.productId}')">♡ Save</button>
            </div>
          </div>
        </div>`;
      });
      const shipCost=g.items[0]?.product.shipping.standard||80;
      totalShipping+=shipCost;subtotal+=vendorSub;
      html+=`<div class="vendor-subtotal"><span>Subtotal (${s.name}): ${money(vendorSub)}</span><span>Shipping: ${money(shipCost)}</span></div></div>`;
    });
    main.innerHTML=html;

    // Summary
    if(summary){
      summary.style.display='';
      const discount=State.get('promoDiscount',0);
      const grand=subtotal+totalShipping-discount;
      summary.innerHTML=`<h3>Order Summary</h3>
        <div class="summary-row"><span>Items (${totalItems})</span><span>${money(subtotal)}</span></div>
        <div class="summary-row"><span>Shipping (${Object.keys(groups).length} vendor${Object.keys(groups).length>1?'s':''})</span><span>${money(totalShipping)}</span></div>
        ${discount?`<div class="summary-row discount"><span>Discount</span><span>-${money(discount)}</span></div>`:''}
        <div class="summary-divider"></div>
        <div class="summary-total"><span>Total</span><span>${money(grand)}</span></div>
        <div class="promo-input"><input type="text" id="promoInput" placeholder="Promo code"><button class="btn btn-outline btn-sm" onclick="CartPage.applyPromo()">Apply</button></div>
        <div id="promoMsg"></div>
        <a href="checkout.html" class="btn btn-primary btn-lg" style="width:100%">Proceed to Checkout</a>`;
    }
  },
  applyPromo(){
    const code=$('#promoInput')?.value.trim().toUpperCase();
    const msg=$('#promoMsg');
    const promo=MP.promoCodes.find(p=>p.code===code&&p.active);
    if(!promo){msg.className='promo-msg error';msg.textContent='Invalid promo code';State.set('promoDiscount',0);return}
    const items=Cart.get();const subtotal=items.reduce((s,i)=>{const p=getProduct(i.productId);return s+(p?p.price*i.qty:0)},0);
    if(subtotal<promo.minOrder){msg.className='promo-msg error';msg.textContent=`Min order ${money(promo.minOrder)} required`;return}
    let disc=0;
    if(promo.type==='fixed')disc=promo.discount;
    else if(promo.type==='percent')disc=Math.round(subtotal*promo.discount/100);
    State.set('promoDiscount',disc);State.set('promoCode',code);
    msg.className='promo-msg success';msg.textContent=`${code} applied! You save ${money(disc)}`;
    this.render();
  }
};

/* ---------- Checkout Page ---------- */
const CheckoutPage={
  step:1,
  shipping:{},
  payment:'bkash',
  init(){this.render();this.bind()},
  render(){
    // Step indicator
    $$('.step-circle').forEach((c,i)=>{
      c.classList.remove('active','done');
      if(i+1<this.step)c.classList.add('done');
      if(i+1===this.step)c.classList.add('active');
    });
    $$('.step-line').forEach((l,i)=>{l.classList.toggle('done',i+1<this.step)});
    $$('.checkout-step').forEach(s=>s.classList.remove('active'));
    $(`#step${this.step}`)?.classList.add('active');

    if(this.step===2)this.renderShipping();
    if(this.step===3)this.renderReview();
  },
  renderShipping(){
    const el=$('#shippingOptions');if(!el)return;
    const items=Cart.get();
    const groups={};
    items.forEach(item=>{const p=getProduct(item.productId);if(p){if(!groups[p.sellerId])groups[p.sellerId]={seller:getSeller(p.sellerId),items:[]};groups[p.sellerId].items.push({...item,product:p})}});
    el.innerHTML=Object.values(groups).map(g=>`<div class="shipping-vendor">
      <h3>📦 ${g.seller.name} — ${g.items.length} item${g.items.length>1?'s':''}</h3>
      <label class="shipping-option selected"><input type="radio" name="ship_${g.seller.id}" value="standard" checked> Standard Delivery ${money(g.items[0].product.shipping.standard)} (${g.items[0].product.shipping.days} days)</label>
      <label class="shipping-option"><input type="radio" name="ship_${g.seller.id}" value="express"> Express Delivery ${money(g.items[0].product.shipping.express)} (1-2 days)</label>
    </div>`).join('');
    $$('.shipping-option input').forEach(r=>r.addEventListener('change',e=>{
      const parent=e.target.closest('.shipping-vendor');
      parent.querySelectorAll('.shipping-option').forEach(o=>o.classList.remove('selected'));
      e.target.closest('.shipping-option').classList.add('selected');
    }));
  },
  renderReview(){
    const el=$('#orderReview');if(!el)return;
    const items=Cart.get();
    const groups={};let totalShipping=0,subtotal=0;
    items.forEach(item=>{const p=getProduct(item.productId);if(p){if(!groups[p.sellerId])groups[p.sellerId]={seller:getSeller(p.sellerId),items:[]};groups[p.sellerId].items.push({...item,product:p})}});
    Object.values(groups).forEach(g=>{
      g.items.forEach(i=>subtotal+=i.product.price*i.qty);
      totalShipping+=g.items[0].product.shipping.standard;
    });
    const discount=State.get('promoDiscount',0);
    const total=subtotal+totalShipping-discount;
    el.innerHTML=`
      ${Object.values(groups).map(g=>`<div style="margin-bottom:var(--sp-4)"><strong>📦 ${g.seller.name}</strong>${g.items.map(i=>`<div style="display:flex;justify-content:space-between;padding:var(--sp-2) 0;font-size:.9rem;color:var(--text-secondary)"><span>${i.product.title} × ${i.qty}</span><span>${money(i.product.price*i.qty)}</span></div>`).join('')}</div>`).join('')}
      <div class="summary-divider"></div>
      <div class="summary-row"><span>Subtotal</span><span>${money(subtotal)}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${money(totalShipping)}</span></div>
      ${discount?`<div class="summary-row discount"><span>Discount</span><span>-${money(discount)}</span></div>`:''}
      <div class="summary-divider"></div>
      <div class="summary-total"><span>Total</span><span>${money(total)}</span></div>
      <button class="btn btn-primary btn-lg" style="width:100%;margin-top:var(--sp-4)" onclick="CheckoutPage.placeOrder()">Place Order ${money(total)}</button>`;
  },
  bind(){
    $('#nextStep1')?.addEventListener('click',()=>{this.step=2;this.render()});
    $('#nextStep2')?.addEventListener('click',()=>{this.step=3;this.render()});
    $('#backStep2')?.addEventListener('click',()=>{this.step=1;this.render()});
    $('#backStep3')?.addEventListener('click',()=>{this.step=2;this.render()});
    $$('.payment-method').forEach(m=>m.addEventListener('click',()=>{
      $$('.payment-method').forEach(p=>p.classList.remove('active'));
      m.classList.add('active');this.payment=m.dataset.method;
    }));
  },
  placeOrder(){
    const num='ORD-2026-'+String(Math.floor(Math.random()*9000)+1000);
    const orders=State.get('orders',[]);
    orders.push({number:num,date:new Date().toISOString(),total:0,status:'confirmed',payment:this.payment});
    State.set('orders',orders);
    Cart.clear();State.remove('promoDiscount');State.remove('promoCode');
    const main=$('#main');
    main.innerHTML=`<div class="section"><div class="container"><div class="order-success">
      <div class="success-check">✓</div>
      <h2>Order Placed Successfully!</h2>
      <div class="order-num">${num}</div>
      <p style="color:var(--text-secondary);margin-bottom:var(--sp-6)">Your order has been confirmed. You can track your order below.</p>
      <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap">
        <a href="order.html" class="btn btn-primary btn-lg">Track Order</a>
        <a href="index.html" class="btn btn-outline btn-lg">Continue Shopping</a>
      </div>
    </div></div></div>`;
  }
};

/* ---------- Order Page ---------- */
const OrderPage={
  init(){
    const el=$('#orderContent');if(!el)return;
    const order=MP.orders[0]; // show latest demo order
    if(!order){el.innerHTML='<div class="empty-state"><h3>No orders found</h3><a href="browse.html" class="btn btn-primary">Start Shopping</a></div>';return}
    const statuses=['confirmed','processing','shipped','out for delivery','delivered'];
    el.innerHTML=`
      <div class="order-header">
        <div><h2>Order ${order.number}</h2><p style="color:var(--text-secondary);font-size:.9rem">Placed: ${new Date(order.date).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})} · Payment: ${order.payment}</p></div>
        <div><div style="font-size:1.25rem;font-weight:700">Total: ${money(order.total)}</div></div>
      </div>
      ${order.shipments.map((sh,si)=>{
        const idx=statuses.indexOf(sh.status);
        return `<div class="shipment-card">
          <h3>Shipment ${si+1} of ${order.shipments.length}: ${sh.sellerName}</h3>
          <div class="tracking-timeline">${statuses.slice(0,4).map((st,i)=>`<div class="track-step"><div class="track-dot ${i<idx?'done':''} ${i===idx?'current':''}">${i<idx?'✓':i+1}</div><div>${st}</div></div>${i<3?`<div class="track-line ${i<idx?'done':''}"></div>`:''}`).join('')}</div>
          <div class="shipment-items">${sh.items.map(it=>`<div>${it.title} × ${it.qty} — ${money(it.price*it.qty)}</div>`).join('')}</div>
          <div class="shipment-meta"><span>Tracking: ${sh.tracking}</span><span>Est: ${sh.estimatedDelivery}</span><span>Shipping: ${money(sh.shippingCost)}</span></div>
        </div>`;
      }).join('')}`;
  }
};

/* ---------- Sell Page ---------- */
const SellPage={
  init(){
    const form=$('#sellerForm');if(!form)return;
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const main=form.closest('.section');
      main.innerHTML=`<div class="container"><div class="order-success">
        <div class="success-check">🎉</div>
        <h2>Welcome to BazarBD!</h2>
        <p style="color:var(--text-secondary);margin-bottom:var(--sp-6)">Your seller account has been created. Set up your store and start listing products.</p>
        <a href="dashboard.html" class="btn btn-primary btn-lg">Go to Seller Dashboard</a>
      </div></div>`;
      Toast.show('Seller account created!','success');
    });
    // Testimonials
    const el=$('#testimonials');if(el)el.innerHTML=MP.sellerTestimonials.map(t=>`<div class="testimonial-card"><p>"${t.text}"</p><div class="author">${t.name} — ${t.store}</div><div class="revenue">Revenue: ${t.revenue}</div></div>`).join('');
  }
};

/* ---------- Seller Dashboard ---------- */
const SellerDash={
  seller:null,
  init(){
    this.seller=MP.sellers[0]; // TechBD
    this.bindNav();
    this.renderOverview();
  },
  bindNav(){
    $$('.dash-nav a').forEach(link=>link.addEventListener('click',e=>{
      e.preventDefault();
      $$('.dash-nav a').forEach(l=>l.classList.remove('active'));
      $$('.dash-section').forEach(s=>s.classList.remove('active'));
      link.classList.add('active');
      const sec=$('#'+link.dataset.section);sec?.classList.add('active');
      if(link.dataset.section==='dash-orders')this.renderOrders();
      if(link.dataset.section==='dash-products')this.renderProducts();
      if(link.dataset.section==='dash-reviews')this.renderReviews();
      if(link.dataset.section==='dash-analytics')this.renderAnalytics();
      if(link.dataset.section==='dash-earnings')this.renderEarnings();
    }));
  },
  renderOverview(){
    const s=this.seller;
    const stats=$('#dashStats');if(stats)stats.innerHTML=`
      <div class="stat-card"><div class="stat-label">Revenue</div><div class="stat-value">${money(s.revenue)}</div><div class="stat-trend up">↑ 12% vs last month</div></div>
      <div class="stat-card"><div class="stat-label">Orders</div><div class="stat-value">${s.orders}</div><div class="stat-trend up">↑ 8% vs last month</div></div>
      <div class="stat-card"><div class="stat-label">Products</div><div class="stat-value">${s.products.toLocaleString()}</div><div class="stat-trend up">↑ 24 new</div></div>
      <div class="stat-card"><div class="stat-label">Rating</div><div class="stat-value">★ ${s.rating}</div><div class="stat-trend up">${s.reviews.toLocaleString()} reviews</div></div>`;
    // Revenue chart
    this.renderChart();
    // Recent orders
    const tbl=$('#dashRecentOrders');if(tbl)tbl.innerHTML=`<table class="data-table"><thead><tr><th>Order</th><th>Customer</th><th>Total</th><th>Status</th><th>Date</th></tr></thead><tbody>
      ${MP.orders.flatMap(o=>o.shipments.filter(sh=>sh.sellerId===s.id).map(sh=>`<tr><td>${o.number}</td><td>${o.address.name}</td><td>${money(sh.items.reduce((t,i)=>t+i.price*i.qty,0))}</td><td><span class="status-badge status-${sh.status}">${sh.status}</span></td><td>${ago(o.date)}</td></tr>`)).join('')}
    </tbody></table>`;
    // Low stock
    const low=$('#lowStock');if(low){
      const lowItems=MP.products.filter(p=>p.sellerId===s.id&&p.stock<10);
      low.innerHTML=lowItems.length?lowItems.map(p=>`<div class="low-stock">⚠ ${p.title} (${p.stock} left)</div>`).join(''):'<p style="color:var(--text-muted);font-size:.85rem">No low stock alerts</p>';
    }
  },
  renderChart(){
    if(typeof Chart==='undefined')return;
    const ctx=$('#revenueChart');if(!ctx)return;
    const isDark=document.documentElement.dataset.theme==='dark';
    new Chart(ctx,{type:'line',data:{
      labels:MP.sellerRevenue30d.map(d=>d.day),
      datasets:[{label:'Revenue',data:MP.sellerRevenue30d.map(d=>d.amount),borderColor:isDark?'#FB923C':'#F97316',backgroundColor:isDark?'rgba(251,146,60,.1)':'rgba(249,115,22,.1)',fill:true,tension:.4}]
    },options:{responsive:true,plugins:{legend:{display:false}},scales:{y:{ticks:{callback:v=>money(v)},grid:{color:isDark?'#334155':'#E5E7EB'}},x:{grid:{display:false}}}}});
  },
  renderOrders(){
    const el=$('#dashOrdersList');if(!el)return;
    el.innerHTML=`<table class="data-table"><thead><tr><th>Order</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th><th>Action</th></tr></thead><tbody>
      ${MP.orders.flatMap(o=>o.shipments.filter(sh=>sh.sellerId===this.seller.id).map(sh=>`<tr><td>${o.number}</td><td>${o.address.name}</td><td>${sh.items.length}</td><td>${money(sh.items.reduce((t,i)=>t+i.price*i.qty,0))}</td><td><span class="status-badge status-${sh.status}">${sh.status}</span></td><td><select class="btn btn-sm btn-ghost" onchange="Toast.show('Status updated to '+this.value,'success')"><option ${sh.status==='processing'?'selected':''}>processing</option><option ${sh.status==='shipped'?'selected':''}>shipped</option><option ${sh.status==='delivered'?'selected':''}>delivered</option></select></td></tr>`)).join('')}
    </tbody></table>`;
  },
  renderProducts(){
    const el=$('#dashProductsList');if(!el)return;
    const products=MP.products.filter(p=>p.sellerId===this.seller.id);
    el.innerHTML=`<button class="btn btn-primary btn-sm" style="margin-bottom:var(--sp-4)" onclick="Toast.show('Add product form would open here','info')">+ Add Product</button>
    <table class="data-table"><thead><tr><th>Product</th><th>Price</th><th>Stock</th><th>Sold</th><th>Status</th><th>Actions</th></tr></thead><tbody>
      ${products.map(p=>`<tr><td>${p.title}</td><td>${money(p.price)}</td><td>${p.stock<10?`<span class="low-stock">${p.stock} ⚠</span>`:p.stock}</td><td>${p.sold}</td><td><span class="status-badge status-active">Active</span></td><td><button class="btn btn-ghost btn-sm" onclick="Toast.show('Edit form','info')">Edit</button></td></tr>`).join('')}
    </tbody></table>`;
  },
  renderReviews(){
    const el=$('#dashReviewsList');if(!el)return;
    const reviews=MP.reviews.filter(r=>{const p=getProduct(r.productId);return p&&p.sellerId===this.seller.id});
    el.innerHTML=reviews.map(r=>{const p=getProduct(r.productId);return`<div class="review-card">
      <div class="review-header"><div class="review-avatar">${r.name[0]}</div><div><div class="review-name">${r.name}</div><div class="review-date">${r.date} · ${p?.title||''}</div></div></div>
      <div class="review-stars">${stars(r.rating)}</div>
      <div class="review-text">${r.text}</div>
      ${r.sellerReply?`<div class="seller-reply"><strong>Your Reply:</strong> ${r.sellerReply}</div>`:`<button class="btn btn-ghost btn-sm" onclick="Toast.show('Reply form would open','info')">Reply</button>`}
    </div>`}).join('');
  },
  renderAnalytics(){
    if(typeof Chart==='undefined')return;
    const ctx=$('#analyticsChart');if(!ctx)return;
    const isDark=document.documentElement.dataset.theme==='dark';
    new Chart(ctx,{type:'bar',data:{
      labels:MP.sellerRevenue30d.slice(-7).map(d=>d.day),
      datasets:[{label:'Daily Revenue',data:MP.sellerRevenue30d.slice(-7).map(d=>d.amount),backgroundColor:isDark?'rgba(251,146,60,.6)':'rgba(249,115,22,.6)',borderRadius:6}]
    },options:{responsive:true,plugins:{legend:{display:false}},scales:{y:{ticks:{callback:v=>money(v)},grid:{color:isDark?'#334155':'#E5E7EB'}},x:{grid:{display:false}}}}});
  },
  renderEarnings(){
    const el=$('#dashEarnings');if(!el)return;
    const s=this.seller;const commission=Math.round(s.revenue*0.08);
    el.innerHTML=`<div class="stat-cards">
      <div class="stat-card"><div class="stat-label">Total Revenue</div><div class="stat-value">${money(s.revenue)}</div></div>
      <div class="stat-card"><div class="stat-label">Commission (8%)</div><div class="stat-value">${money(commission)}</div></div>
      <div class="stat-card"><div class="stat-label">Net Earnings</div><div class="stat-value">${money(s.revenue-commission)}</div></div>
      <div class="stat-card"><div class="stat-label">Pending Payout</div><div class="stat-value">${money(Math.round(s.revenue*0.15))}</div></div>
    </div>`;
  }
};

/* ---------- Admin Panel ---------- */
const AdminPanel={
  init(){this.bindNav();this.renderOverview()},
  bindNav(){
    $$('.dash-nav a').forEach(link=>link.addEventListener('click',e=>{
      e.preventDefault();
      $$('.dash-nav a').forEach(l=>l.classList.remove('active'));
      $$('.dash-section').forEach(s=>s.classList.remove('active'));
      link.classList.add('active');
      const sec=$('#'+link.dataset.section);sec?.classList.add('active');
      if(link.dataset.section==='admin-sellers')this.renderSellers();
      if(link.dataset.section==='admin-products')this.renderAllProducts();
      if(link.dataset.section==='admin-orders')this.renderAllOrders();
    }));
  },
  renderOverview(){
    const stats=$('#adminStats');if(stats)stats.innerHTML=`
      <div class="stat-card"><div class="stat-label">Total Revenue</div><div class="stat-value">${money(MP.stats.platformRevenue)}</div></div>
      <div class="stat-card"><div class="stat-label">Active Sellers</div><div class="stat-value">${MP.stats.totalSellers.toLocaleString()}</div></div>
      <div class="stat-card"><div class="stat-label">Products</div><div class="stat-value">${MP.stats.totalProducts.toLocaleString()}</div></div>
      <div class="stat-card"><div class="stat-label">Orders</div><div class="stat-value">${MP.stats.totalOrders.toLocaleString()}</div></div>
      <div class="stat-card"><div class="stat-label">Active Users</div><div class="stat-value">${MP.stats.activeUsers.toLocaleString()}</div></div>`;
    this.renderAdminChart();
    this.renderTopSellers();
  },
  renderAdminChart(){
    if(typeof Chart==='undefined')return;
    const ctx=$('#adminChart');if(!ctx)return;
    const isDark=document.documentElement.dataset.theme==='dark';
    new Chart(ctx,{type:'line',data:{
      labels:MP.platformRevenue30d.map(d=>d.day),
      datasets:[{label:'Platform Revenue',data:MP.platformRevenue30d.map(d=>d.amount),borderColor:isDark?'#FB923C':'#F97316',backgroundColor:isDark?'rgba(251,146,60,.1)':'rgba(249,115,22,.1)',fill:true,tension:.4}]
    },options:{responsive:true,plugins:{legend:{display:false}},scales:{y:{ticks:{callback:v=>money(v)},grid:{color:isDark?'#334155':'#E5E7EB'}},x:{grid:{display:false}}}}});
  },
  renderTopSellers(){
    const el=$('#adminTopSellers');if(!el)return;
    el.innerHTML=`<table class="data-table"><thead><tr><th>Seller</th><th>Products</th><th>Revenue</th><th>Rating</th><th>Status</th></tr></thead><tbody>
      ${MP.sellers.map(s=>`<tr><td>${s.name}</td><td>${s.products.toLocaleString()}</td><td>${money(s.revenue)}</td><td>★${s.rating}</td><td><span class="status-badge ${s.verified?'status-active':'status-pending'}">${s.verified?'Verified':'Pending'}</span></td></tr>`).join('')}
    </tbody></table>`;
  },
  renderSellers(){
    const el=$('#adminSellersList');if(!el)return;
    el.innerHTML=`<table class="data-table"><thead><tr><th>Seller</th><th>Category</th><th>Products</th><th>Revenue</th><th>Rating</th><th>Status</th><th>Action</th></tr></thead><tbody>
      ${MP.sellers.map(s=>`<tr><td>${s.name}</td><td>${s.category}</td><td>${s.products.toLocaleString()}</td><td>${money(s.revenue)}</td><td>★${s.rating}</td><td><span class="status-badge ${s.verified?'status-active':'status-pending'}">${s.verified?'Active':'Pending'}</span></td><td><button class="btn btn-ghost btn-sm" onclick="Toast.show('Seller details','info')">View</button></td></tr>`).join('')}
    </tbody></table>`;
  },
  renderAllProducts(){
    const el=$('#adminProductsList');if(!el)return;
    el.innerHTML=`<table class="data-table"><thead><tr><th>Product</th><th>Seller</th><th>Price</th><th>Stock</th><th>Rating</th><th>Status</th></tr></thead><tbody>
      ${MP.products.map(p=>{const s=getSeller(p.sellerId);return`<tr><td>${p.title}</td><td>${s?.name||''}</td><td>${money(p.price)}</td><td>${p.stock<10?`<span class="low-stock">${p.stock} ⚠</span>`:p.stock}</td><td>★${p.rating}</td><td><span class="status-badge status-active">Active</span></td></tr>`}).join('')}
    </tbody></table>`;
  },
  renderAllOrders(){
    const el=$('#adminOrdersList');if(!el)return;
    el.innerHTML=`<table class="data-table"><thead><tr><th>Order</th><th>Customer</th><th>Sellers</th><th>Total</th><th>Status</th><th>Date</th></tr></thead><tbody>
      ${MP.orders.map(o=>`<tr><td>${o.number}</td><td>${o.address.name}</td><td>${o.shipments.map(s=>s.sellerName).join(', ')}</td><td>${money(o.total)}</td><td><span class="status-badge status-${o.status}">${o.status}</span></td><td>${new Date(o.date).toLocaleDateString()}</td></tr>`).join('')}
    </tbody></table>`;
  }
};

/* ---------- Global helpers for onclick ---------- */
window._toggleWish=(pid,el)=>{
  const active=Wishlist.toggle(pid);
  el.classList.toggle('active',active);
  const svg=el.querySelector('svg');
  if(svg)svg.setAttribute('fill',active?'currentColor':'none');
};
window._toggleWishDetail=(pid)=>{Wishlist.toggle(pid);ProductDetail.render()};
window._selectColor=(name)=>{
  const c=ProductDetail.product.colors.find(c=>c.name===name);
  if(c&&c.stock>0){ProductDetail.selectedColor=c;ProductDetail.qty=1;ProductDetail.render()}
};
window._selectSize=(name)=>{
  const s=ProductDetail.product.sizes.find(s=>s.name===name);
  if(s&&s.stock>0){ProductDetail.selectedSize=s;ProductDetail.qty=1;ProductDetail.render()}
};
window._changeQty=(d)=>{
  ProductDetail.qty=Math.max(1,Math.min(ProductDetail.qty+d,ProductDetail.getStock()));
  ProductDetail.render();
};
window._setRating=(v)=>{
  $$('#starInput span').forEach((s,i)=>{s.textContent=i<v?'★':'☆';s.classList.toggle('filled',i<v)});
};

// Expose for inline event handlers
window.Cart=Cart;window.Wishlist=Wishlist;window.Toast=Toast;
window.CartPage=CartPage;window.CheckoutPage=CheckoutPage;

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded',()=>{
  Theme.init();initHeader();Auth.init();Drawer.init();initBackToTop();
  const page=document.body.dataset.page;
  switch(page){
    case'home':HomePage.init();break;
    case'browse':BrowsePage.init();break;
    case'product':ProductDetail.init();break;
    case'store':StorePage.init();break;
    case'cart':CartPage.init();break;
    case'checkout':CheckoutPage.init();break;
    case'order':OrderPage.init();break;
    case'sell':SellPage.init();break;
    case'dashboard':SellerDash.init();break;
    case'admin':AdminPanel.init();break;
  }
});

})();
