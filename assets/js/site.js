(() => {
  const data = window.UEL_DATA;
  const page = document.body.dataset.page;
  const initial = (name) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('');
  const esc = (value) => String(value ?? '').replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[char]));

  const navItems = [
    ['index.html', 'Home', 'home'],
    ['about.html', 'About', 'about'],
    ['research.html', 'Research', 'research'],
    ['people.html', 'People', 'people'],
    ['work.html', 'Work', 'work'],
    ['press.html', 'Press', 'press'],
    ['join.html', 'Get involved', 'join']
  ];

  // Use transparent, pre-rendered logo files rather than CSS masks. Some browsers
  // rendered the mask layers as transparent, leaving only the animated halo visible.
  // The two image layers keep the official mark legible in both interface themes.
  const nyuMark = (size = 'nav') => `
    <span class="nyu-brand-mark nyu-brand-mark--${size}" aria-hidden="true">
      <span class="nyu-brand-mark__halo"></span>
      <span class="nyu-brand-mark__glyph">
        <img class="theme-logo theme-logo--dark" src="assets/images/uel-mark-dark.png" alt="">
        <img class="theme-logo theme-logo--light" src="assets/images/uel-mark-light.png" alt="">
      </span>
      <span class="nyu-brand-mark__signal nyu-brand-mark__signal--one"></span>
      <span class="nyu-brand-mark__signal nyu-brand-mark__signal--two"></span>
    </span>`;

  const uelWordmark = (size = 'hero') => `
    <span class="uel-wordmark uel-wordmark--${size}" aria-hidden="true">
      <img class="theme-logo theme-logo--dark" src="assets/images/uel-wordmark-dark.png" alt="">
      <img class="theme-logo theme-logo--light" src="assets/images/uel-wordmark-light.png" alt="">
    </span>`;

  const heroVisuals = {
    about: `
      <div class="page-hero-visual visual-about" aria-hidden="true">
        <span class="visual-orbit visual-orbit--one"></span><span class="visual-orbit visual-orbit--two"></span>
        <span class="visual-grid"></span>
        <span class="about-nexus"><i></i><i></i><i></i></span>
        <span class="visual-caption visual-caption--top">PLACE</span><span class="visual-caption visual-caption--right">EQUITY</span><span class="visual-caption visual-caption--bottom">EVIDENCE</span>
      </div>`,
    research: `
      <div class="page-hero-visual visual-research" aria-hidden="true">
        <span class="workflow-rail"></span><span class="workflow-node workflow-node--one"><b>01</b><i>FIELD</i></span><span class="workflow-node workflow-node--two"><b>02</b><i>CLEAN</i></span><span class="workflow-node workflow-node--three"><b>03</b><i>MAP</i></span>
        <span class="workflow-core"><i></i></span>
      </div>`,
    people: `
      <div class="page-hero-visual visual-people" aria-hidden="true">
        <span class="people-thread people-thread--one"></span><span class="people-thread people-thread--two"></span>
        <span class="people-avatar people-avatar--a">PH</span><span class="people-avatar people-avatar--b">GIS</span><span class="people-avatar people-avatar--c">MD</span><span class="people-avatar people-avatar--d">BIO</span><span class="people-avatar people-avatar--e">SW</span>
        <span class="people-hub">TEAM</span>
      </div>`,
    work: `
      <div class="page-hero-visual visual-work" aria-hidden="true">
        <span class="paper-sheet paper-sheet--one"><b>UEL</b><i>2025</i><em></em><em></em><em></em></span>
        <span class="paper-sheet paper-sheet--two"><b>RESEARCH</b><i>NYC</i><em></em><em></em><em></em></span>
        <span class="citation-ring citation-ring--one"></span><span class="citation-ring citation-ring--two"></span>
        <span class="citation-core"><i></i></span>
      </div>`,
    press: `
      <div class="page-hero-visual visual-press" aria-hidden="true">
        <span class="press-wave press-wave--one"></span><span class="press-wave press-wave--two"></span><span class="press-wave press-wave--three"></span>
        <span class="press-card-visual"><b>RESEARCH<br>IN PUBLIC</b><i>NYC · UEL</i></span><span class="press-signal"><i></i><i></i><i></i></span>
      </div>`,
    join: `
      <div class="page-hero-visual visual-join" aria-hidden="true">
        <span class="join-path"></span><span class="join-step join-step--one">ASK</span><span class="join-step join-step--two">LEARN</span><span class="join-step join-step--three">BUILD</span>
        <span class="join-destination"></span>
      </div>`,
    alumni: `
      <div class="page-hero-visual visual-alumni" aria-hidden="true">
        <span class="alumni-arc alumni-arc--one"></span><span class="alumni-arc alumni-arc--two"></span><span class="alumni-arc alumni-arc--three"></span>
        <span class="alumni-point alumni-point--one"></span><span class="alumni-point alumni-point--two"></span><span class="alumni-point alumni-point--three"></span><span class="alumni-point alumni-point--four"></span>
        <span class="alumni-center">NEXT</span>
      </div>`
  };

  const headerMount = document.getElementById('site-header');
  if (headerMount) {
    headerMount.innerHTML = `<header class="site-header"><div class="wrap nav">
      <a href="index.html" class="brand" aria-label="Urban Epidemiology Lab home">${nyuMark('nav')}<span class="brand-copy"><strong>URBAN EPIDEMIOLOGY LAB</strong><small>NYU SCHOOL OF GLOBAL PUBLIC HEALTH</small></span></a>
      <nav class="nav-links" aria-label="Main navigation">${navItems.map(([href, label, key]) => `<a href="${href}" class="${page === key ? 'active' : ''}">${label}</a>`).join('')}</nav>
      <div class="nav-actions"><button class="theme-toggle" type="button" aria-label="Toggle light theme" title="Toggle light theme"><span aria-hidden="true">◐</span></button><button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">☰</button></div>
    </div></header>`;
  }

  const footerMount = document.getElementById('site-footer');
  if (footerMount) {
    footerMount.innerHTML = `<footer class="site-footer"><div class="wrap"><div class="footer-grid"><div><div class="footer-title">${nyuMark('footer')}<strong>URBAN EPIDEMIOLOGY LAB</strong></div><p class="footer-about">Urban health research rooted in harm reduction, health equity, and the lived realities that data alone cannot fully capture.</p></div><div><p class="footer-heading">Explore</p><div class="footer-links"><a href="index.html">Home</a><a href="research.html">Research</a><a href="people.html">People</a><a href="work.html">Publications &amp; presentations</a><a href="press.html">Press</a></div></div><div><p class="footer-heading">Connect</p><div class="footer-links"><a href="join.html">Get involved</a><a href="alumni.html">Alumni</a><a href="mailto:${data.source.email}">${data.source.email}</a><a href="${data.source.x}" target="_blank" rel="noreferrer">X / Twitter</a></div></div></div><div class="footer-bottom"><span>© 2026 Urban Epidemiology Lab · Design concept</span><span>Content structured from the public UEL site · Review before publishing</span></div></div></footer>`;
  }

  // Interior pages intentionally use text-first hero sections now.
  // The animated visual system is reserved for the homepage only.

  const header = document.querySelector('.site-header');
  addEventListener('scroll', () => header?.classList.toggle('scrolled', scrollY > 10), { passive: true });

  const nav = document.querySelector('.nav-links');
  const menu = document.querySelector('.menu-toggle');
  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', open);
    menu.textContent = open ? '×' : '☰';
  });

  const themeBtn = document.querySelector('.theme-toggle');
  if (localStorage.getItem('uel-theme') === 'light') document.body.classList.add('light');
  themeBtn?.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('uel-theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  const avatar = (person, extra = '') => `<div class="avatar ${person.accent || ''} ${extra}">${initial(person.name)}</div>`;
  const dialog = document.getElementById('person-dialog');
  const dialogContent = document.getElementById('dialog-content');
  dialogContent?.classList.add('dialog-content');

  const bioParagraphs = (bio) => (Array.isArray(bio) ? bio : String(bio || '').split(/\n\s*\n|\r?\n/))
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${esc(paragraph)}</p>`).join('');

  const openPerson = (person) => {
    dialogContent.innerHTML = `<article class="profile-sheet">
      <aside class="profile-identity">
        <div class="profile-identity__glow"></div>${avatar(person, 'profile-avatar')}
        <p class="profile-group">${esc(person.group)}</p><h2>${esc(person.name)}</h2><p class="role">${esc(person.role)}</p>
        <div class="tag-row profile-tags">${person.tags.map((tag) => `<span>${esc(tag)}</span>`).join('')}</div>
      </aside>
      <div class="profile-reading"><p class="profile-kicker">Profile</p><h3>${esc(person.name)}</h3><div class="profile-bio">${bioParagraphs(person.bio)}</div><div class="profile-footer-note">Urban Epidemiology Lab · NYU School of Global Public Health</div></div>
    </article>`;
    dialog.showModal();
  };

  document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

  if (page === 'home') {
    document.getElementById('home-team-peek').innerHTML = data.people.slice(0, 3).map((person) => `<a href="people.html" class="peek-card" aria-label="Meet ${esc(person.name)}">${avatar(person)}<strong>${esc(person.name)}</strong><span>${esc(person.group)}</span></a>`).join('');
  }

  if (page === 'people') {
    let filter = 'All';
    const grid = document.getElementById('people-grid');
    const render = () => {
      grid.innerHTML = data.people.filter((person) => filter === 'All' || person.group === filter).map((person) => `<article class="person-card neo-card reveal show" tabindex="0" role="button" aria-label="Open profile for ${esc(person.name)}" data-person="${data.people.indexOf(person)}"><div class="person-top">${avatar(person)}<div><h3>${esc(person.name)}</h3><p class="role">${esc(person.role)}</p></div></div><p class="summary">${esc(person.summary)}</p><div class="tag-row">${person.tags.slice(0, 2).map((tag) => `<span>${esc(tag)}</span>`).join('')}</div><span class="more">Read full profile <b>→</b></span></article>`).join('');
      grid.querySelectorAll('.person-card').forEach((card) => {
        const person = data.people[card.dataset.person];
        card.addEventListener('click', () => openPerson(person));
        card.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openPerson(person); }
        });
      });
    };
    render();
    document.getElementById('people-filters').addEventListener('click', (event) => {
      if (!event.target.matches('button')) return;
      filter = event.target.dataset.filter;
      document.querySelectorAll('#people-filters .filter').forEach((button) => button.classList.toggle('active', button === event.target));
      render();
    });
  }

  if (page === 'alumni') {
    document.getElementById('alumni-grid').innerHTML = data.alumni.map((person) => `<article class="alumni-card neo-card reveal show">${avatar(person)}<h2>${esc(person.name)}</h2><p>${esc(person.summary)}</p></article>`).join('');
  }

  if (page === 'press') {
    let topic = 'All';
    const grid = document.getElementById('press-grid');
    const render = () => {
      grid.innerHTML = data.press.filter((item) => topic === 'All' || item.topic === topic).map((item) => `<article class="press-card neo-card reveal show"><p class="press-topic">${esc(item.topic)} · ${item.year}</p><h3>${esc(item.title)}</h3><p class="press-meta"><span class="outlet">${esc(item.outlet)}</span><br>${esc(item.byline)}</p></article>`).join('');
    };
    render();
    document.getElementById('press-filters').addEventListener('click', (event) => {
      if (!event.target.matches('button')) return;
      topic = event.target.dataset.press;
      document.querySelectorAll('#press-filters .filter').forEach((button) => button.classList.toggle('active', button === event.target));
      render();
    });
  }

  if (page === 'work') {
    let type = 'publications'; let tag = 'All'; let query = '';
    const list = document.getElementById('work-list');
    const count = document.getElementById('work-count');
    const tagBox = document.getElementById('work-tags');
    const getItems = () => type === 'op-ed' ? [{ year: 2022, authors: 'Ompad DC*, Tan A.', title: 'The kids are not all right — copycat cannabis edibles are a hazard to their safety.', venue: 'The Hill [op-ed].', details: 'May 26, 2022.', tag: 'Cannabis' }] : data[type];
    const renderTags = () => {
      const tags = ['All', ...Array.from(new Set(getItems().map((item) => item.tag))).sort()];
      tagBox.innerHTML = tags.map((item) => `<button class="tag-filter ${item === tag ? 'active' : ''}" data-tag="${esc(item)}">${esc(item)}</button>`).join('');
    };
    const render = () => {
      const items = getItems().filter((item) => {
        const haystack = Object.values(item).join(' ').toLowerCase();
        return (tag === 'All' || item.tag === tag) && haystack.includes(query.toLowerCase());
      });
      count.textContent = `${items.length} ${type === 'presentations' ? 'presentation' : 'record'}${items.length === 1 ? '' : 's'} shown`;
      list.innerHTML = items.map((item) => `<article class="work-entry neo-card"><div class="work-year">${item.year}</div><div><h3>${esc(item.title)}</h3><p class="authors">${esc(item.authors)}</p><p class="details"><span class="venue">${esc(item.venue || '')}</span> ${esc(item.details || '')}</p><span class="work-tag">${esc(item.tag)}</span></div></article>`).join('') || '<p class="result-count">No matching records.</p>';
    };
    renderTags(); render();
    document.querySelector('.work-tabs').addEventListener('click', (event) => {
      if (!event.target.matches('button')) return;
      type = event.target.dataset.work; tag = 'All';
      document.querySelectorAll('.work-tabs .filter').forEach((button) => button.classList.toggle('active', button === event.target));
      renderTags(); render();
    });
    tagBox.addEventListener('click', (event) => {
      if (!event.target.matches('button')) return;
      tag = event.target.dataset.tag; renderTags(); render();
    });
    document.getElementById('work-search').addEventListener('input', (event) => { query = event.target.value; render(); });
    const param = new URLSearchParams(location.search).get('tag');
    if (param) { tag = param; renderTags(); render(); }
  }
})();
