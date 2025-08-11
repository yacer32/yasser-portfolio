
(function(){
  const $ = (s,ctx=document)=>ctx.querySelector(s);
  const $$ = (s,ctx=document)=>Array.from(ctx.querySelectorAll(s));

  const langSelect = $('#langSwitcher');
  let current = localStorage.getItem('lang') || 'en';

  function applyDir(lang){
    const isRTL = lang === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }

  function t(path){
    const parts = path.split('.');
    let cur = BIO[current];
    for(const p of parts){ cur = cur?.[p]; }
    return cur ?? path;
  }

  function updateMeta(){
    const meta = document.querySelector('meta[name="description"]');
    if(meta && typeof META !== 'undefined'){
      meta.setAttribute('content', META[current]?.description || meta.getAttribute('content'));
    }
  }

  function translate(){
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if(typeof val === 'string'){ el.innerHTML = val; }
    });

    // About lists
    const inject = (id, arr)=>{ const el = $('#'+id); if(el && BIO[current]?.lists?.[arr]) el.innerHTML = BIO[current].lists[arr].map(x=>`<li>${x}</li>`).join(''); };
    inject('eduList','edu'); inject('expList','exp'); inject('skillsList','skills');

    // Services
    const writeList = (id, arr)=>{ const el=$('#'+id); if(el) el.innerHTML = BIO[current].lists[arr].map(x=>`<li>${x}</li>`).join(''); };
    writeList('designList','design'); writeList('academicList','academic'); writeList('adminList','admin');

    // Portfolio
    const grid=$('#portfolioGrid');
    if(grid){
      grid.innerHTML = PORTFOLIO_ITEMS.map(item => `
        <div class="item" data-cat="${item.cat}" data-animate="fade-up">
          <img src="${item.img}" alt="Portfolio item">
          <div class="overlay">
            <strong>${item.title[current]}</strong>
            <span style="opacity:.8;font-size:.9em">${t('filters.'+item.cat)}</span>
          </div>
          <a href="project.html?id=${item.id}" aria-label="Open case study" style="position:absolute;inset:0"></a>
        </div>
      `).join('');
    }

    document.title = t('site.title');
    const year = $('#year'); if(year) year.textContent = new Date().getFullYear();
    applyStatus();
    updateMeta();
  }

  function setLang(lang){
    if(!['ar','fr','en'].includes(lang)) return;
    current = lang;
    localStorage.setItem('lang', lang);
    langSelect.value = lang;
    applyDir(lang);
    translate();
  }

  // Init language
  langSelect?.addEventListener('change', e=> setLang(e.target.value));
  setLang(current);

  // Menu
  $('#menuToggle')?.addEventListener('click', ()=> $('#nav').classList.toggle('open'));

  // Filters
  $$('.filters .chip').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filters .chip').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.getAttribute('data-filter');
      $$('#portfolioGrid .item').forEach(it => {
        it.style.display = (f==='all' || it.dataset.cat===f) ? '' : 'none';
      });
    });
  });

  // Animations
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(ent=>{ if(ent.isIntersecting){ ent.target.classList.add('in'); io.unobserve(ent.target); } });
  },{threshold:.15});
  $$('[data-animate]').forEach(el=> io.observe(el));

  // Theme toggle
  const themeToggle = $('#themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggle?.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', cur);
    localStorage.setItem('theme', cur);
  });

  // Contact form
  const form = $('#contactForm');
  const CONTACT_METHOD = 'mailto';
  const EMAIL_TO = 'houariyacer8@gmail.com';
  async function handleSubmit(name, email, msg, status){
    // Extend later if needed
  }
  form?.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const name = $('#name').value.trim();
    const email = $('#email').value.trim();
    const msg = $('#message').value.trim();
    const status = $('#formStatus');
    if(!name || !email || !msg){ status.textContent = current==='ar' ? 'رجاءً أكمل الحقول.' : current==='fr' ? 'Veuillez compléter les champs.' : 'Please complete all fields.'; return; }
    if(CONTACT_METHOD === 'mailto'){
      const subject = encodeURIComponent('Portfolio Contact');
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
      window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
      status.textContent = current==='ar' ? 'تم فتح تطبيق البريد.' : current==='fr' ? 'Application e-mail ouverte.' : 'Email app opened.';
      form.reset();
    } else {
      await handleSubmit(name, email, msg, status); form.reset();
    }
  }, { once:true });

  // Availability
  const AVAILABLE = true;
  function applyStatus(){
    const text = AVAILABLE ? (BIO[current]?.status?.online || 'Online') : (BIO[current]?.status?.offline || 'Offline');
    const dot = $('#statusDot'); const textEl = $('#statusText');
    if(dot && textEl){ dot.classList.toggle('online', AVAILABLE); textEl.textContent = text; }
    const dot2 = $('#statusDotSide'); const text2 = $('#statusTextSide');
    if(dot2 && text2){ dot2.classList.toggle('online', AVAILABLE); text2.textContent = text; }
  }

  // Project page
  const isProject = location.pathname.endsWith('project.html');
  if(isProject){
    const params = new URLSearchParams(location.search);
    const id = Number(params.get('id')||'0');
    const container = document.getElementById('projectPage');
    if(container && PORTFOLIO_ITEMS && PORTFOLIO_DETAILS && PORTFOLIO_DETAILS[id]){
      const item = PORTFOLIO_ITEMS.find(x=>x.id===id);
      const det = PORTFOLIO_DETAILS[id];
      container.innerHTML = `
        <section class="page-hero"><div class="container">
          <h1>${item.title[current]}</h1><p>${det.desc[current]}</p>
        </div></section>
        <section class="container split">
          <div class="col">${det.gallery.map(src=>`<img src='${src}' class='illustration' alt='Gallery'>`).join('')}</div>
          <div class="col">
            <div class="card"><h3>${t('portfolio.title')}</h3>
            <p><strong>${t('filters.'+item.cat)} • ${new Date(det.date).toLocaleDateString()}</strong></p>
            <p><strong>${det.role[current]}</strong></p>
            <p>${det.outcome[current]}</p>
            <div class="tags" style="margin-top:10px">${det.tools.map(x=>`<li>${x}</li>`).join('')}</div>
            </div>
            <div class="cta" style="margin-top:14px">
              <a class="btn ghost" href="portfolio.html">${t('nav.portfolio')}</a>
              <a class="btn primary" href="contact.html">${t('nav.contact')}</a>
            </div>
          </div>
        </section>`;
    }
  }
})(); 
