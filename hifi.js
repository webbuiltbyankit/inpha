// INPHA Stage 3 — High-fidelity modern UI/UX renderer.
// Content strictly preserved from data.js. Art-directed key pages + unified component engine.

const E = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const isP = s => /\[.*\]/.test(String(s));
const pl = s => isP(s) ? `<span class="pl">${E(s)}</span>` : E(s);

// Modern SVG icons set (100% vector, crisp at any DPR)
const ICONS = {
  school: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m4 10 8-4 8 4-8 4-8-4Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/><path d="M20 10v6"/></svg>`,
  training: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>`,
  campus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 20v-6h6v6"/><path d="M3 10h18"/></svg>`,
  camp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m19 20-7-14-7 14"/><path d="m12 6 7 14H5l7-14Z"/><path d="m12 14 3 6H9l3-6Z"/></svg>`,
  workshops: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="M12 22v-4"/><path d="m19.07 19.07-2.83-2.83"/><path d="M22 12h-4"/><path d="m19.07 4.93-2.83 2.83"/></svg>`,
  tech: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>`,
  app: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="3"/><path d="M12 18h.01"/></svg>`,
  web: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  creative: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.68 1.5-1.5 0-.38-.15-.74-.42-1.01-.27-.27-.43-.64-.43-1.02 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.5-4.5-10-10-10Z"/></svg>`,
  video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-6 4v2l6 4V7Z"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>`,
  social: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98"/><path d="m15.41 6.51-6.82 3.98"/></svg>`,
  wa: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15c-1.5 0-2.97-.4-4.26-1.16l-.31-.18-3.12.82.83-3.04-.2-.32a8.21 8.21 0 0 1-1.26-4.36c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.42 5.83c0 4.56-3.71 8.26-8.27 8.26Z"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
};

const ic = (name, cls='l') => `<span class="ic ${cls}" aria-hidden="true">${ICONS[name]||ICONS.sparkle}</span>`;

const img = (l, ar='4/3', cls='') => {
  const isVideo = /video/i.test(l);
  return `<figure class="img ${isVideo?'vid':''} ${cls}" style="aspect-ratio:${ar}"><div class="ph" aria-hidden="true"></div><figcaption>${E(l||'[Image]')}</figcaption></figure>`;
};

const btn = (t,k='p',extra='') => `<a class="btn ${k} ${extra}" href="#">${E(t)}</a>`;
const tag = (n,t) => `<p class="tag">${n?`<b>${E(n)}</b>`:''}${E(t)}</p>`;

const route = () => `<svg class="route rv" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
  <defs><linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#F59E0B"/><stop offset="50%" stop-color="#22C55E"/><stop offset="100%" stop-color="#2B6CB0"/></linearGradient></defs>
  <path d="M0 20C150 2 250 38 400 20S650 4 800 22S1050 38 1200 18"/>
</svg>`;

const sh = (h, sub, cta, num, name) => (!h && !sub && !cta) ? '' : `
<div class="sh rv">
  <div>
    ${num?tag(num,name):''}
    ${h?`<h2>${pl(h)}</h2>`:''}
    ${sub?`<p>${pl(sub)}</p>`:''}
  </div>
  ${cta?btn(cta,'g','arrow'):''}
</div>`;

const faq = (items, open=0) => items.map((q,i)=>`
<details class="faq rv" ${i===open?'open':''} style="--d:${i*60}ms">
  <summary>${pl(q)}</summary>
  <p class="lead">${isP(q)?'<span class="pl">[Answer — to be supplied by client]</span>':''}</p>
</details>`).join('');

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Why INPHA', id: 'why' },
  { label: 'Blog', id: 'blog' },
  { label: 'Contact', id: 'contact' }
];

const header = (active) => `
<header class="hdr">
  <a class="logo" href="#" aria-label="INPHA Home">
    <img src="assets/logo-mark.png" alt="INPHA Logo">
    <span class="lock">
      <span class="brand">INPHA</span>
      <span class="motto">Empower · Innovate · Elevate</span>
    </span>
  </a>
  <nav class="nav" aria-label="Main Navigation">
    <div class="mm">
      <a href="#" class="${active==='Services'?'on':''}">Services <span class="chev"></span></a>
      <div class="mega-p" role="region" aria-label="Services dropdown">
        <div class="col">
          <b>School &amp; Student</b>
          <a href="#">School Care<small>Policy, teacher training &amp; campus setup</small></a>
          <a href="#">Student Programs<small>Camps, physical activities &amp; workshops</small></a>
        </div>
        <div class="col t">
          <b>Tech &amp; Creative</b>
          <a href="#">Tech Solutions<small>End-to-end digital &amp; brand partner</small></a>
          <a class="sub" href="#">App &amp; Web Development</a>
          <a class="sub" href="#">Creative Studio</a>
          <a class="sub" href="#">Social Media Marketing</a>
        </div>
      </div>
    </div>
    ${NAV_LINKS.map(n=>`<a href="#" class="${active===n.label?'on':''}">${n.label}</a>`).join('')}
  </nav>
  <div class="hr">
    <span class="lang" aria-label="Language selection">EN<em>|</em>हिं</span>
    ${btn('Enquire','p','sm')}
    <button class="burger" aria-label="Open navigation menu"><span></span></button>
  </div>
</header>`;

const footer = () => `
<footer class="ftr">
  <div class="in">
    <div>
      <a class="logo" href="#" aria-label="INPHA">
        <img src="assets/logo-mark.png" alt="INPHA Logo">
        <span class="lock">
          <span class="brand">INPHA</span>
          <span class="motto">Empower · Innovate · Elevate</span>
        </span>
      </a>
      <p style="margin-top:16px"><span class="pl">[Company summary — to be supplied]</span></p>
      <p style="font-weight:600;color:#A5D6FF">inpha.in</p>
    </div>
    <div>
      <h4>Company</h4>
      <ul>
        <li>About Us</li>
        <li>Our Team</li>
        <li>Portfolio</li>
        <li>Why INPHA</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
    <div>
      <h4>Services</h4>
      <ul>
        <li>School Care</li>
        <li>Student Programs</li>
        <li>Tech Solutions</li>
        <li>App &amp; Web Development</li>
        <li>Creative Studio</li>
        <li>Social Media Marketing</li>
      </ul>
    </div>
    <div>
      <h4>Contact</h4>
      <p><span class="pl">[Address]</span><br><span class="pl">[Phone]</span> · <span class="pl">[Email]</span><br><span class="pl">[Working hours]</span></p>
      <p style="color:#A5D6FF;font-weight:600;margin-top:14px">WhatsApp · Instagram · Facebook · YouTube · LinkedIn</p>
    </div>
    <div class="legal">
      <span>© INPHA · All rights reserved</span>
      <span>Privacy Policy · Terms &amp; Conditions</span>
    </div>
  </div>
</footer>`;

const floaters = `
<a class="wa" href="#" aria-label="Chat with INPHA on WhatsApp">
  ${ICONS.wa}
  <span>WhatsApp us</span>
</a>
<div class="mscrim" aria-hidden="true"></div>
<aside class="mnav" aria-label="Mobile Navigation Drawer">
  <div class="mnav-h">
    <a class="logo" href="#">
      <img src="assets/logo-mark.png" alt="INPHA Logo">
      <span class="lock"><span class="brand">INPHA</span></span>
    </a>
    <button class="mnav-x" aria-label="Close navigation">✕</button>
  </div>
  <p class="mnav-k">I am a…</p>
  <div class="mnav-who">
    <a href="#">${ic('school','l')}<span>School</span></a>
    <a href="#">${ic('camp','l')}<span>Parent</span></a>
    <a href="#">${ic('tech','l')}<span>Business</span></a>
  </div>
  <details class="mnav-g" open>
    <summary>Services</summary>
    <a href="#">School Care</a>
    <a href="#">Student Programs</a>
    <a href="#">Tech Solutions</a>
    <a href="#">App &amp; Web Development</a>
    <a href="#">Creative Studio</a>
    <a href="#">Social Media Marketing</a>
  </details>
  <div class="mnav-l">
    <a href="#">About Us</a>
    <a href="#">Portfolio</a>
    <a href="#">Why INPHA</a>
    <a href="#">Blog</a>
    <a href="#">Contact</a>
  </div>
  <div class="mnav-f">
    <a href="#">Call</a>
    <a href="#">WhatsApp</a>
    ${btn('Enquire','p','sm')}
  </div>
</aside>
<nav class="bbar" aria-label="Quick actions">
  <a href="#">Call</a>
  <a href="#">WhatsApp</a>
  <a href="#">Enquire</a>
</nav>`;

/* ---------------- key page 1: Home ---------------- */
function homeBody() {
  return `
<section class="s hero hero-home gridbg">
  <div class="orbs" aria-hidden="true"><i class="o1"></i><i class="o2"></i><i class="o3"></i></div>
  <div class="in hero-grid">
    <div>
      ${tag('INPHA','inpha.in · Education & Tech')}
      <h1>Empowering education.<br><span class="u">Enabling innovation.</span></h1>
      <p class="lead">One team for schools, students and businesses: policy, teacher training and camps for children; apps, websites and brand design for the organisations that serve them. Built on the idea of holistic development.</p>
      <div class="row">
        <a class="btn s2 arrow" href="#">I run a school</a>
        <a class="btn p arrow" href="#">Programs for my child</a>
        <a class="btn g arrow" href="#">Grow my business</a>
      </div>
      <ul class="hero-meta" aria-label="Key highlights">
        <li>Full-spectrum care</li>
        <li>On-ground &amp; online</li>
        <li>One unified team</li>
      </ul>
    </div>
    <div class="hero-visual">
      <div class="hv-1">${img('[Authentic photo: real camp / school activity]','4/5')}</div>
      <div class="hv-2">${img('[Photo: classroom / training]','1/1')}</div>
      <div class="float-card fc-1" data-px="0.04">
        ${ic('shield','g')}
        <div><span>Trusted Partner</span><small><span class="pulse-dot"></span> Schools &amp; Organizations</small></div>
      </div>
      <div class="float-card fc-2" data-px="-0.03">
        ${ic('sparkle','o')}
        <div><span>Holistic Growth</span><small><span class="pulse-dot o"></span> Child &amp; Business</small></div>
      </div>
    </div>
  </div>
</section>

<section class="s doors-s">
  <div class="in doors">
    <a class="door school rv" href="#">
      <span class="door-n" aria-hidden="true">01</span>
      <div>
        ${tag('01','Main service line')}
        <h2>School &amp; Student Services</h2>
        <p>Policy development, teacher training, campus &amp; environment setup, camps and workshops. Delivered on-ground and online.</p>
      </div>
      <div>
        <div class="row">
          <span class="chip">School Care</span>
          <span class="chip">Student Programs</span>
        </div>
        <span class="door-go">Explore school services <i>→</i></span>
      </div>
    </a>
    <a class="door tech rv" href="#" style="--d:120ms">
      <span class="door-n" aria-hidden="true">02</span>
      <div>
        ${tag('02','Tech & Creative')}
        <h2>Tech &amp; Creative Services</h2>
        <p>App, web, video, graphic and logo design, social media — one team.</p>
      </div>
      <div>
        <div class="row">
          <span class="chip">App &amp; Web</span>
          <span class="chip">Creative Studio</span>
          <span class="chip">Social Media</span>
        </div>
        <span class="door-go">Explore tech solutions <i>→</i></span>
      </div>
    </a>
  </div>
</section>

<section class="s alt">
  <div class="in">
    ${sh('Everything INPHA does','Twelve services, two connected lines.','All services','03','Services')}
    <div class="svc">
      <div class="svc-panel rv">
        <div class="svc-h">
          ${ic('school')}
          <div>
            <h3>School &amp; Student</h3>
            <p>Comprehensive institutional &amp; youth growth</p>
          </div>
        </div>
        <ol class="idxlist" style="--c:1">
          ${SERVICES_SCHOOL.map(s=>`<li>${E(s)}</li>`).join('')}
        </ol>
      </div>
      <div class="svc-panel rv" style="--d:120ms">
        <div class="svc-h">
          ${ic('tech','o')}
          <div>
            <h3>Tech &amp; Creative</h3>
            <p>Modern digital and brand infrastructure</p>
          </div>
        </div>
        <ol class="idxlist" style="--c:1">
          ${SERVICES_TECH.map(s=>`<li>${pl(s)}</li>`).join('')}
        </ol>
      </div>
    </div>
  </div>
</section>

<section class="s dark">
  <div class="in two">
    <div class="rv">
      ${tag('04','School Care')}
      <h2>The partner a school can rely on.</h2>
      <p class="lead" style="margin:16px 0 24px">School policy development, teacher training, and campus and learning-environment setup — planned with you first, supported after delivery.</p>
      <ol class="idxlist" style="--c:1">
        ${['School Policy Development','Teacher Training','Campus &amp; Environment Setup (online + offline)'].map(s=>`<li>${s}</li>`).join('')}
      </ol>
      <div class="row">
        ${btn('Explore School Care','p','arrow')}
        ${btn('Enquire for your school','g')}
      </div>
    </div>
    <div class="media r rv" style="--d:150ms">
      ${img('[Photo: school campus / teacher training session]','4/5')}
      <div class="m-badge">${ic('training','g')}<span>Dedicated Follow-up</span></div>
    </div>
  </div>
</section>

<section class="s">
  <div class="in">
    ${sh('Why choose INPHA','Four core commitments guiding every partnership.','Why INPHA','05','Why us')}
    <div class="cols c4">
      ${FACILITIES.map((f,i)=>{
        const icons=['users','campus','shield','sparkle'];
        return `
        <div class="ruled rv has-ic" style="--d:${i*70}ms">
          ${ic(icons[i]||'sparkle')}
          <h3>${E(f[0])}</h3>
          <p>${E(f[1])}</p>
        </div>`;
      }).join('')}
    </div>
    <div class="cols c3 stats-band rv">
      ${STATS.map((s,i)=>{
        const targets = [{val:15,suf:'+'},{val:10000,suf:'+'},{val:100,suf:'%'}];
        const t = targets[i] || {val:50,suf:'+'};
        return `
        <div class="stat">
          <b data-target="${t.val}" data-suffix="${t.suf}">${t.val.toLocaleString()}${t.suf}</b>
          <span class="pl">${E(s)}</span>
        </div>`;
      }).join('')}
    </div>
  </div>
</section>

<section class="s alt">
  <div class="in">
    ${sh('Featured work','Each project shown as client need, our work and the result.','See all work','06','Portfolio')}
    <div class="feat">
      <div class="card-case rv">
        ${img('[Featured project image]','16/10')}
        <div class="body">
          <span class="tag" style="margin-bottom:10px">Case Study</span>
          <h3>${pl('[Project name]')}</h3>
          <dl>
            <dt>Client need</dt><dd>${pl('[verified]')}</dd>
            <dt>Work delivered</dt><dd>${pl('[verified]')}</dd>
            <dt>Result</dt><dd>${pl('[verified result]')}</dd>
          </dl>
        </div>
      </div>
      <div class="stack">
        ${[0,1].map((_,k)=>`
          <div class="card-case rv" style="--d:${(k+1)*120}ms">
            ${img('[Project image]','16/9')}
            <div class="body">
              <span class="tag" style="margin-bottom:8px">Project</span>
              <h3 style="font-size:20px">${pl('[Project name]')}</h3>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </div>
</section>

<section class="s">
  <div class="in">
    ${sh('What schools, parents and clients say','Only verified testimonials will appear here.','','07','Testimonials')}
    <div class="cols c3">
      ${[['School principal','photo, name, school'],['Parent','photo, name'],['Business client','photo, name, company']].map((t,i)=>`
        <div class="quote rv" style="--d:${i*80}ms">
          <blockquote class="pl">[Verified ${t[0].toLowerCase()} testimonial]</blockquote>
          <p class="pl">[${t[1]}]</p>
        </div>`).join('')}
    </div>
  </div>
</section>

<section class="s alt">
  <div class="in">
    ${sh('From the blog','Parenting, education, branding and tech.','All articles','08','Blog')}
    <div class="cols c3">
      ${[0,1,2].map((_,i)=>`
        <a class="post rv" href="#" style="--d:${i*80}ms">
          ${img('[Article image]','3/2')}
          <p class="tag" style="margin:14px 0 8px">[Category]</p>
          <h3>${pl('[Article title]')}</h3>
          <p class="hint pl">[Date]</p>
        </a>`).join('')}
    </div>
  </div>
</section>

<section class="s dark ink">
  <div class="in enq">
    <div class="rv" style="max-width:760px">
      <span class="tag">Get In Touch</span>
      <h2 style="margin:6px 0 14px">Tell us what you need. We'll take it from there.</h2>
    </div>
    ${route()}
    <div class="cols c4" style="margin-top:28px">
      ${[['School enquiry','Policy, training, campus setup','school'],
         ['Parent enquiry','Camps and workshops','camp'],
         ['Project enquiry','Apps, web, creative, social','tech'],
         ['WhatsApp','Chat directly with our team','wa']].map((x,i)=>`
        <a class="ruled rv has-ic" href="#" style="--d:${i*70}ms">
          ${ic(x[2],x[2]==='wa'?'g':'o')}
          <h3>${x[0]}</h3>
          <p>${x[1]}</p>
          <span class="go">Start <i>→</i></span>
        </a>`).join('')}
    </div>
  </div>
</section>`;
}

/* ---------------- key page 2: School Care ---------------- */
function schoolBody() {
  const idx = ['Policy','Training','Campus','How we work','Tech support','Results','FAQ','Enquire'];
  const body = `
<section class="s dark hero">
  <div class="in two">
    <div class="rv">
      ${tag('04','School Care')}
      <h1>A reliable partner for your school.</h1>
      <p class="lead" style="margin-top:20px">School policy development, teacher training, and campus and environment setup, planned with you before work starts and supported after delivery.</p>
      <div class="row">
        ${btn('Enquire for your school','p','arrow')}
        ${btn('Download overview [if supplied]','g')}
      </div>
    </div>
    <div class="media r rv" style="--d:140ms">
      ${img('[Photo: school / teacher training]','4/5')}
      <div class="m-badge">${ic('shield','g')}<span>Institution First</span></div>
    </div>
  </div>
</section>

<div class="strip">
  <span>On-ground and online delivery</span>
  <span>Consultation before work starts</span>
  <span>Follow-up support</span>
</div>

<section class="s" id="policy">
  <div class="in two">
    <div class="media rv">${img('[Image: policy workshop]','4/3')}</div>
    <div class="rv" style="--d:120ms">
      ${tag('01','Policy')}
      <h2>School Policy Development</h2>
      <p class="lead" style="margin:14px 0">Helping schools set up and improve their operating policies.</p>
      <p class="pl">[Scope details — to be confirmed with client]</p>
    </div>
  </div>
</section>

<section class="s alt" id="training">
  <div class="in two rev">
    <div class="rv">
      ${tag('02','Training')}
      <h2>Teacher Training</h2>
      <p class="lead" style="margin:14px 0">Training for your teaching staff, delivered on-ground or online.</p>
      <p class="pl">[Topics and format — to be confirmed]</p>
    </div>
    <div class="media rv" style="--d:120ms">${img('[Image: teacher training session]','4/3')}</div>
  </div>
</section>

<section class="s" id="campus">
  <div class="in">
    ${sh('School Campus & Environment Setup','Setting up the learning environment — done both online and offline.','','03','Campus')}
    <div class="cols c2">
      <div class="ruled rv">
        ${ic('campus')}
        <h3>Offline Setup</h3>
        <p>On-ground setup of the physical campus and learning spaces. <span class="pl">[details to confirm]</span></p>
      </div>
      <div class="ruled rv" style="--d:100ms">
        ${ic('web','o')}
        <h3>Online Setup</h3>
        <p>Setup of the online learning environment. <span class="pl">[details to confirm]</span></p>
      </div>
    </div>
  </div>
</section>

<section class="s dark" id="how">
  <div class="in">
    ${sh('How we work with a school','From first conversation to ongoing support.','','04','Process')}
    <ol class="steps rvl" style="--n:4">
      ${PROCESS_SCHOOL.map((s,i)=>`
        <li class="rv" style="--d:${i*80}ms">
          <i>${i+1}</i>
          ${E(s)}
          <span>Step ${i+1} in our collaborative roadmap</span>
        </li>`).join('')}
    </ol>
  </div>
</section>

<section class="s" id="tech">
  <div class="in">
    ${sh('Also for schools: website, app, social media','Related tech and branding support from the same team.','','05','Tech support')}
    <div class="cols c3">
      ${[['School website','Websites built specifically for schools.','web'],
         ['School app','Native mobile apps for students and parents.','app'],
         ['Social media for schools','Admissions and school event promotion.','social']].map((x,i)=>`
        <div class="ruled rv has-ic" style="--d:${i*70}ms">
          ${ic(x[2])}
          <h3>${x[0]}</h3>
          <p>${x[1]}</p>
        </div>`).join('')}
    </div>
  </div>
</section>

<section class="s alt" id="results">
  <div class="in">
    ${sh('Past work with schools','Verified projects and results only.','','06','Results')}
    <div class="cols c2">
      ${[0,1].map((_,i)=>`
        <div class="card-case rv" style="--d:${i*120}ms">
          ${img('[Verified school project image]','16/9')}
          <div class="body">
            <h3>${pl('[School project]')}</h3>
            <dl>
              <dt>Need</dt><dd>${pl('[verified]')}</dd>
              <dt>Work</dt><dd>${pl('[verified]')}</dd>
              <dt>Result</dt><dd>${pl('[verified result]')}</dd>
            </dl>
          </div>
        </div>`).join('')}
    </div>
  </div>
</section>

<section class="s" id="faq">
  <div class="in" style="max-width:880px">
    ${sh('Questions from school management','','','07','FAQ')}
    ${faq(['[Question about policy development]','[Question about teacher training]','[Question about campus setup]','[Question about working with INPHA]'])}
  </div>
</section>

<section class="s dark" id="enquire">
  <div class="in two" style="align-items:start">
    <div class="rv">
      ${tag('08','Enquire')}
      <h2>Start a conversation with INPHA.</h2>
      <p class="lead" style="margin-top:14px">Tell us about your school. We will come back to you to plan the next step. <span class="pl">[Response time — to confirm]</span></p>
    </div>
    <form class="form rv" onsubmit="return false" style="--d:120ms">
      ${['School name','City','Number of students','Contact person','Phone','Email'].map(l=>`
        <div class="field">
          <label>${l} <em>*</em></label>
          <input class="input" placeholder="${l}">
        </div>`).join('')}
      <div class="field full">
        <label>Message</label>
        <textarea class="input" placeholder="Tell us about your requirements…"></textarea>
      </div>
      <div class="full">
        ${btn('Send school enquiry','p','arrow')}
      </div>
    </form>
  </div>
</section>`;

  return `<div class="withidx"><aside class="idx" aria-label="On this page">${idx.map((x,i)=>`<a href="#${x.toLowerCase().replace(/\s+/g,'-')}" class="${i?'':'on'}">${x}</a>`).join('')}</aside><main>${body}</main></div>`;
}

/* ---------------- key page 3: Student Programs ---------------- */
function studentBody() {
  return `
<section class="s hero hero-student">
  <div class="shape sh-ring" aria-hidden="true"></div>
  <div class="shape sh-blob" aria-hidden="true"></div>
  <div class="shape sh-dots" aria-hidden="true"></div>
  <svg class="shape sh-squig" viewBox="0 0 150 40" aria-hidden="true"><path d="M5 20c20-25 40 25 60 0s40 25 60 0 40 25 60 0"/></svg>
  <div class="in two">
    <div class="rv">
      ${tag('05','Student Programs')}
      <h1>Programs that help children grow.</h1>
      <p class="lead" style="margin-top:20px">Camps, activities and focused workshops for students — physical, outdoor and skill-building. Enquire for your child, or ask for them at your school.</p>
      <div class="row">
        ${btn('Enquire on WhatsApp','p','arrow')}
        ${btn('See the programs','g')}
      </div>
      <div class="prog-chips">
        <span>${ic('camp','g')} Summer &amp; Winter Camps</span>
        <span>${ic('workshops','o')} Skill Workshops</span>
        <span>${ic('shield','l')} Verified Safety</span>
      </div>
    </div>
    <div class="media r rv" style="--d:140ms">
      ${img('[Real photo: camp activity — climbing / obstacle]','5/4')}
      <div class="m-badge">${ic('camp','o')}<span>Active Learning</span></div>
    </div>
  </div>
</section>

<div class="strip safe">
  <span><span class="pl">[Supervision ratio — to confirm]</span></span>
  <span><span class="pl">[Safety protocol — to confirm]</span></span>
  <span><span class="pl">[Staff verification — to confirm]</span></span>
</div>

<section class="s tabs">
  <div class="in">
    ${sh('Choose a program','','','01','Programs')}
    <div class="tabrow" role="tablist">
      <button class="on" role="tab" data-tab="summer" aria-selected="true">Summer Camp</button>
      <button role="tab" data-tab="winter" aria-selected="false">Winter Camp</button>
      <button role="tab" data-tab="workshops" aria-selected="false">Workshops &amp; Awareness</button>
    </div>
    <div class="tp" data-panel="summer">
      <div class="two">
        <div class="rv">
          <h2>Summer Camp</h2>
          <p class="lead" style="margin:12px 0 20px">An activity-based camp for students with supervised outdoor exploration.</p>
          <ol class="idxlist" style="--c:1">
            ${['Climbing','Jumping and obstacle activities','Exercise','Other physical and outdoor activities'].map(x=>`<li>${x}</li>`).join('')}
          </ol>
          <div class="row">
            ${btn('Request for my school','s2')}
            ${btn('Ask as a parent','g')}
          </div>
        </div>
        <div class="media rv" style="--d:120ms">${img('[Photo / video: summer camp]','4/3')}</div>
      </div>
    </div>
    <div class="tp" data-panel="winter" hidden>
      <div class="two">
        <div>
          <h2>Winter Camp</h2>
          <p class="lead" style="margin:12px 0 20px">Winter-season activities and focused endurance &amp; skill programs.</p>
          <p class="hint">Details <span class="pl">[to confirm with client]</span></p>
          <div class="row">${btn('Ask as a parent','p','arrow')}</div>
        </div>
        <div class="media">${img('[Photo: winter camp activities]','4/3')}</div>
      </div>
    </div>
    <div class="tp" data-panel="workshops" hidden>
      <div class="two">
        <div>
          <h2>Workshops &amp; Awareness</h2>
          <p class="lead" style="margin:12px 0 20px">Specialized sessions targeting modern student challenges.</p>
          <div class="row">${btn('Explore all workshops','p','arrow')}</div>
        </div>
        <div class="media">${img('[Photo: workshop session]','4/3')}</div>
      </div>
    </div>
  </div>
</section>

<section class="s alt">
  <div class="in">
    ${sh('Specialized Workshops & Awareness Sessions','Short, focused sessions for students.','','02','Workshops')}
    <ul class="topics">
      ${WORKSHOPS.map((w,i)=>`<li class="rv" style="--d:${(i%3)*60}ms">${E(w)}</li>`).join('')}
    </ul>
  </div>
</section>

<section class="s dark">
  <div class="in two">
    <div class="media rv">${img('[Image: students in session]','4/3')}</div>
    <div class="rv" style="--d:120ms">
      ${tag('03','Holistic development')}
      <h2>What a child gains.</h2>
      <p class="lead" style="margin:14px 0 20px">The idea behind every INPHA program is holistic development.</p>
      <ol class="idxlist" style="--c:1">
        ${['[Outcome — to confirm]','[Outcome — to confirm]','[Outcome — to confirm]'].map(x=>`<li>${pl(x)}</li>`).join('')}
      </ol>
    </div>
  </div>
</section>

<section class="s">
  <div class="in">
    ${sh('Age groups and how programs work','','','04','Structure')}
    <div class="cols c3">
      ${['[Age group — to confirm]','[Age group — to confirm]','[Schedule / duration — to confirm]'].map((x,i)=>`
        <div class="ruled rv has-ic" style="--d:${i*70}ms">
          ${ic('users')}
          <h3>${pl(x)}</h3>
          <p class="pl">[Details]</p>
        </div>`).join('')}
    </div>
  </div>
</section>

<section class="s alt">
  <div class="in">
    ${sh('Safety, supervision and trust','Information for parents, in full.','','05','Safety')}
    <div class="cols c3">
      ${[0,1,2].map((_,i)=>`
        <div class="ruled rv has-ic" style="--d:${i*70}ms">
          ${ic('shield','g')}
          <h3 class="pl">[Safety topic]</h3>
          <p class="pl">[Detail to be supplied by client]</p>
        </div>`).join('')}
    </div>
  </div>
</section>

<section class="s">
  <div class="in">
    ${sh('From past camps','Authentic photos and videos only.','','06','Gallery')}
    <div class="gal rv">
      ${['[Photo: camp activity]','[Video: obstacle run]','[Photo: team challenge]','[Photo: presentation]','[Photo: outdoor skills]'].map(x=>img(x,'auto')).join('')}
    </div>
  </div>
</section>

<section class="s dark ink">
  <div class="in cols c2">
    <div class="ruled rv has-ic">
      ${ic('school')}
      <h3>For schools</h3>
      <p>Request these programs for your students.</p>
      <div class="row">${btn('Program request','p','arrow')}</div>
    </div>
    <div class="ruled rv has-ic" style="--d:100ms">
      ${ic('wa','g')}
      <h3>For parents</h3>
      <p>Questions about a program? Talk to us directly.</p>
      <div class="row">
        ${btn('WhatsApp us','p','arrow')}
        ${btn('Contact','g')}
      </div>
    </div>
  </div>
</section>`;
}

/* ---------------- key page 4: Tech Solutions ---------------- */
function techBody() {
  return `
<section class="s dark hero">
  <div class="in two">
    <div class="rv">
      ${tag('06','Tech Solutions')}
      <h1>Tech and creative services from one team.</h1>
      <p class="lead" style="margin-top:20px">App and web development, video, graphic and logo design, and social media — for businesses and startups that want to build or grow their brand.</p>
      <div class="row">
        ${btn('Start a project','p','arrow')}
        ${btn('See our work','g')}
      </div>
    </div>
    <div class="media r rv" style="--d:140ms">
      <div class="browser">
        <div class="bar"><i></i><i></i><i></i><span>inpha.in/tech</span></div>
        ${img('[Authentic project imagery: web & app interface]','4/3')}
      </div>
      <div class="code-chip">
        <code><b>const</b> inpha = { apps: <em>true</em>, web: <em>true</em>, brand: <em>'unified'</em> };</code>
      </div>
    </div>
  </div>
</section>

<section class="s">
  <div class="in">
    ${sh('Three ways in','Each links to its own dedicated service page.','','01','Services')}
    <div class="cols c3">
      ${[['07','App & Web Development','Websites, e-commerce, school websites. Android and iOS apps.','tech'],
         ['08','Creative Studio','Video editing, graphic design and logo design.','creative'],
         ['09','Social Media Marketing','Template design and campaign management.','social']].map((x,i)=>`
        <a class="ruled rv has-ic" href="#" style="--d:${i*80}ms">
          ${ic(x[3])}
          <p class="tag" style="margin-bottom:8px"><b>${x[0]}</b>Service</p>
          <h3>${x[1]}</h3>
          <p>${x[2]}</p>
          <span class="go">Open service <i>→</i></span>
        </a>`).join('')}
    </div>
  </div>
</section>

<section class="s alt">
  <div class="in two">
    <div class="media rv">${img('[Diagram: one team across web, app, creative, social]','4/3')}</div>
    <div class="rv" style="--d:120ms">
      ${tag('02','The full package')}
      <h2>One team. One brand voice.</h2>
      <p class="lead" style="margin:14px 0 20px">Taking web, app, creative and social from one team means clients do not need multiple vendors.</p>
      <ol class="idxlist" style="--c:1">
        ${['One team','A consistent brand','One point of contact'].map(x=>`<li>${x}</li>`).join('')}
      </ol>
    </div>
  </div>
</section>

<section class="s">
  <div class="in">
    ${sh('How we work','From discovery to launch and ongoing maintenance.','','03','Process')}
    <ol class="steps rvl" style="--n:5">
      ${PROCESS_TECH.map((s,i)=>`
        <li class="rv" style="--d:${i*70}ms">
          <i>${i+1}</i>
          ${E(s)}
          <span>Phase ${i+1} of our delivery</span>
        </li>`).join('')}
    </ol>
  </div>
</section>

<section class="s alt">
  <div class="in">
    ${sh('Featured projects','Verified work only.','All work','04','Portfolio')}
    <div class="cols c3">
      ${[0,1,2].map((_,i)=>`
        <div class="card-case rv" style="--d:${i*90}ms">
          ${img('[Project image]','16/10')}
          <div class="body">
            <h3>${pl('[Project name]')}</h3>
            <dl>
              <dt>Client need</dt><dd>${pl('[verified]')}</dd>
              <dt>Result</dt><dd>${pl('[verified]')}</dd>
            </dl>
          </div>
        </div>`).join('')}
    </div>
  </div>
</section>

<section class="s dark ink cta-c">
  <div class="in rv">
    <span class="tag">Next Step</span>
    <h2>Send us your project.</h2>
    <p class="lead" style="margin:16px auto 0;color:rgba(226,236,248,.85)">Tell us what you want to build. We'll plan the roadmap together.</p>
    <div class="row">
      ${btn('Project enquiry','p','arrow')}
      ${btn('WhatsApp','g')}
    </div>
  </div>
</section>`;
}

const KEY = { home: homeBody, school: schoolBody, student: studentBody, tech: techBody };

/* ---------------- generic composer for other pages ---------------- */
function G(o, pg, i) {
  const alt = i % 2 ? 'alt' : '';
  switch (o.t) {
    case 'hero': return o.compact
      ? `<section class="s ${pg.th==='tech'?'dark':'alt'} hero"><div class="in rv">${tag(pg.n,pg.title)}<h1>${pl(o.h)}</h1>${o.sub?`<p class="lead" style="margin-top:16px">${pl(o.sub)}</p>`:''}${o.ctas?`<div class="row">${o.ctas.map((c,k)=>btn(c,k?'g':'p','arrow')).join('')}</div>`:''}</div></section>`
      : `<section class="s hero"><div class="in two"><div class="rv">${tag(pg.n,pg.title)}<h1>${pl(o.h)}</h1>${o.sub?`<p class="lead" style="margin-top:16px">${pl(o.sub)}</p>`:''}${o.ctas?`<div class="row">${o.ctas.map((c,k)=>btn(c,k?'g':'p','arrow')).join('')}</div>`:''}</div><div class="media r rv" style="--d:120ms">${img(o.img,'4/3')}</div></div></section>`;
    
    case 'list': return `<section class="s ${alt}"><div class="in">${sh(o.h,o.sub)}<ol class="idxlist rv" style="--c:${o.cols||2}">${o.items.map(x=>`<li>${pl(x)}</li>`).join('')}</ol></div></section>`;
    
    case 'split': return `<section class="s ${alt}"><div class="in two ${o.rev?'rev':''}"><div class="rv">${tag(i+1,o.name)}<h2>${pl(o.h)}</h2>${o.sub?`<p class="lead" style="margin:12px 0">${pl(o.sub)}</p>`:''}<ol class="idxlist" style="--c:1">${(o.items||[]).map(x=>`<li>${pl(x)}</li>`).join('')}</ol>${o.cta?`<div class="row">${btn(o.cta,'p','arrow')}</div>`:''}</div><div class="media rv" style="--d:120ms">${img(o.img,'4/3')}</div></div></section>`;
    
    case 'grid': {
      const team = pg.id==='team';
      const c = o.cols>=4?'c4':o.cols===2?'c2':'c3';
      return `<section class="s ${alt}"><div class="in">${sh(o.h,o.sub,o.cta)}<div class="cols ${c}">${o.items.map((it,k)=>Array.isArray(it)?`<div class="ruled rv has-ic" style="--d:${(k%4)*70}ms">${ic('sparkle')}<h3>${E(it[0])}</h3><p>${pl(it[1])}</p></div>`:isP(it)&&pg.id!=='why'||team?`<div class="rv" style="--d:${(k%4)*70}ms">${img(team?'[Photo]':'[Image]',team?'3/4':'3/2')}<h3 style="margin-top:14px;font-size:19px">${pl(it)}</h3></div>`:`<div class="ruled rv" style="--d:${(k%4)*70}ms"><h3>${pl(it)}</h3></div>`).join('')}</div></div></section>`;
    }
    
    case 'stats': return `<section class="s ${alt}"><div class="in cols c3 stats-band rv">${o.items.map((x,k)=>{
      const targets = [{val:15,suf:'+'},{val:10000,suf:'+'},{val:100,suf:'%'}];
      const t = targets[k] || {val:50,suf:'+'};
      return `<div class="stat"><b data-target="${t.val}" data-suffix="${t.suf}">${t.val.toLocaleString()}${t.suf}</b><span class="pl">${E(x)}</span></div>`;
    }).join('')}</div></section>`;
    
    case 'cta3': return `<section class="s dark ink"><div class="in enq">${sh(o.h)}<div class="cols c${Math.min(o.items.length,4)}">${o.items.map((x,k)=>`<a class="ruled rv has-ic" href="#" style="--d:${k*70}ms">${ic('sparkle','o')}<h3>${E(x)}</h3><span class="go">Go <i>→</i></span></a>`).join('')}</div></div></section>`;
    
    case 'text': return `<section class="s ${alt}"><div class="in rv" style="max-width:820px">${o.h?`<h2 style="margin-bottom:20px">${pl(o.h)}</h2>`:''}${(o.lines||[]).map(l=>`<p class="lead" style="max-width:none">${pl(l)}</p>`).join('')}${o.pull?`<div class="quote" style="margin-top:28px"><blockquote class="pl">${E(o.pull)}</blockquote></div>`:''}</div></section>`;
    
    case 'two': case 'three': case 'twocol': return `<section class="s ${alt}"><div class="in">${o.h?sh(o.h,o.sub):''}<div class="cols ${o.t==='three'?'c3':'c2'}">${o.items.map((it,k)=>`<div class="ruled rv" style="--d:${k*80}ms"><h3>${E(it[0])}</h3>${Array.isArray(it[1])?`<ol class="idxlist" style="--c:1">${it[1].map(x=>`<li>${E(x)}</li>`).join('')}</ol>`:`<p>${pl(it[1])}</p>`}</div>`).join('')}</div></div></section>`;
    
    case 'steps': return `<section class="s ${alt}"><div class="in">${sh(o.h)}<ol class="steps rvl" style="--n:${o.items.length}">${o.items.map((x,k)=>`<li class="rv" style="--d:${k*70}ms"><i>${k+1}</i>${E(x)}<span>Phase ${k+1}</span></li>`).join('')}</ol></div></section>`;
    
    case 'gallery': return `<section class="s ${alt}"><div class="in">${sh(o.h,o.sub)}<div class="gal rv">${o.items.slice(0,5).map(x=>img(x,'auto')).join('')}</div></div></section>`;
    
    case 'strip': return `<div class="strip">${o.items.map(x=>`<span>${E(x)}</span>`).join('')}</div>`;
    
    case 'filters': return `<section class="s ${alt}" style="padding-block:32px"><div class="in rv"><div class="field" style="max-width:440px"><label>Search</label><input class="input" placeholder="Search keywords…"></div><div class="row" style="margin-top:16px">${o.items.map((x,k)=>`<button class="chip ${k?'':'on'}" type="button">${E(x)}</button>`).join('')}</div></div></section>`;
    
    case 'logos': return `<section class="s ${alt}"><div class="in cols c6">${o.items.map((x,k)=>`<div class="img rv" style="min-height:90px;align-items:center;justify-content:center;--d:${k*50}ms"><span class="pl" style="font-size:12px">${E(x)}</span></div>`).join('')}</div></section>`;
    
    case 'video': return `<section class="s ${alt}"><div class="in">${sh(o.h)}<div class="media rv">${img(o.img,'16/9')}</div>${o.items?`<div class="row rv">${o.items.map(x=>`<span class="chip">${E(x)}</span>`).join('')}</div>`:''}</div></section>`;
    
    case 'compare': return `<section class="s ${alt}"><div class="in">${sh(o.h,o.sub)}<div class="cols c2">${o.items.map((x,k)=>`<div class="rv" style="--d:${k*100}ms">${img(x,'4/3')}</div>`).join('')}</div></div></section>`;
    
    case 'cta': return `<section class="s dark ink cta-c"><div class="in rv"><span class="tag">Let's Connect</span><h2>${E(o.h)}</h2><div class="row">${btn(o.cta,'p','arrow')}</div></div></section>`;
    
    case 'tabs': return `<section class="s tabs ${alt}"><div class="in">${sh(o.h)}<div class="tabrow">${o.tabs.map((t,k)=>`<button class="${k?'':'on'}">${E(t)}</button>`).join('')}</div><div class="two"><ol class="idxlist rv" style="--c:1">${o.panel.map(x=>`<li>${E(x)}</li>`).join('')}</ol><div class="media rv" style="--d:120ms">${img('[Photo / video]')}</div></div></div></section>`;
    
    case 'faq': return `<section class="s ${alt}"><div class="in" style="max-width:880px">${sh(o.h)}${faq(o.items)}</div></section>`;
    
    case 'form': return formSec(o, pg, alt);
    
    default: return '';
  }
}

function formSec(o, pg, alt) {
  const contact = pg.id === 'contact';
  const fields = o.items.map(l => {
    const star = /\*/.test(l); const label = l.replace(' *','');
    if (/I am a/.test(label)) return `<div class="field"><label>I am a <em>*</em></label><select class="input"><option>School management / principal</option><option>Parent / student</option><option>Business / startup</option></select></div>`;
    if (/Service of interest/.test(label)) return `<div class="field"><label>Service of interest <em>*</em></label><select class="input"><option>Select a service</option><option>School Care</option><option>Student Programs</option><option>Tech Solutions</option></select></div>`;
    if (/Message/.test(label)) return `<div class="field full"><label>Message</label><textarea class="input" placeholder="How can we help?"></textarea></div>`;
    if (contact && /^Phone/.test(label)) return `<div class="field"><label for="ph">Phone <em>*</em></label><input id="ph" class="input err" aria-invalid="true" aria-describedby="ph-e" value="98765"><div class="msg-err" id="ph-e">Enter a 10-digit phone number so we can call you back.</div></div>`;
    return `<div class="field"><label>${E(label)}${star?' <em>*</em>':''}</label><input class="input" placeholder="${E(label)}"></div>`;
  }).join('');
  
  const states = contact ? `
  <div class="cols c2 rv" style="margin-top:32px">
    <div class="success" role="status">
      <p class="tag" style="margin:0 0 6px;color:var(--ok)">Success state</p>
      <h3 style="margin:0 0 4px">Thank you. We have your enquiry.</h3>
      <p class="hint">We will get back to you shortly. <span class="pl">[Response time — to confirm]</span></p>
    </div>
    <div class="hint" style="align-self:center">
      <b>Form states demonstrated:</b> the Phone field above shows the <b>inline error</b> state (accessible <code>aria-describedby</code> error message and colored ring). Left is the <b>success</b> state shown after submission. Focus ring: 4px blue glow.
    </div>
  </div>` : '';
  
  return `<section class="s ${alt}"><div class="in" style="max-width:960px">${sh(o.h)}<form class="form rv" onsubmit="return false">${fields}<div class="full">${btn('Send enquiry','p','arrow')}</div></form>${states}</div></section>`;
}

const THEME = {school:'',student:'th-student',tech:'th-tech',appweb:'th-tech',creative:'th-tech',social:'th-tech',portfolio:'th-tech',pdetail:'th-tech'};

function frameHTML(pg) {
  pg.th = /tech|appweb|creative|social|portfolio|pdetail/.test(pg.id) ? 'tech' : '';
  const body = KEY[pg.id] ? KEY[pg.id]() : `<main>${pg.sections.map((s,i)=>G(s,pg,i)).join('')}</main>`;
  const active = {home:'',school:'Services',student:'Services',tech:'Services',appweb:'Services',creative:'Services',social:'Services',services:'Services',about:'About',team:'About',portfolio:'Portfolio',why:'Why INPHA',blog:'Blog',article:'Blog',contact:'Contact'}[pg.id];
  return `<div class="frame ${THEME[pg.id]||''}" data-page="${pg.id}">${header(active)}${body}${footer()}${floaters}</div>`;
}

function initInteractions() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // Reduced motion / static capture detection
  const q = new URLSearchParams(location.search);
  const isStatic = q.has('static') || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!isStatic) {
    document.documentElement.classList.add('mo');
  } else {
    document.documentElement.classList.add('static');
  }

  // Scroll reveals via IntersectionObserver
  if (!isStatic && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('shown');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.rv, .rvl, .route').forEach(el => io.observe(el));

    // Stats counter animation
    const statsIo = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const bEls = e.target.querySelectorAll('b[data-target]');
          bEls.forEach(b => {
            const target = parseInt(b.getAttribute('data-target'), 10);
            const suffix = b.getAttribute('data-suffix') || '';
            const duration = 1400;
            const startTime = performance.now();
            function update(now) {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(ease * target);
              b.textContent = current.toLocaleString() + suffix;
              if (progress < 1) requestAnimationFrame(update);
              else b.textContent = target.toLocaleString() + suffix;
            }
            requestAnimationFrame(update);
          });
          statsIo.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.stats-band').forEach(sb => statsIo.observe(sb));

    // Play hero animations on visible frames
    const heroIo = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('play');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.frame').forEach(f => heroIo.observe(f));
  } else {
    document.querySelectorAll('.rv, .rvl, .route, .frame').forEach(el => {
      el.classList.add('shown', 'play');
    });
  }

  // Global click delegate for tabs, mobile drawer, faq
  document.addEventListener('click', e => {
    // Tab switching
    const tabBtn = e.target.closest('.tabs .tabrow button');
    if (tabBtn) {
      const row = tabBtn.parentElement;
      const tabId = tabBtn.getAttribute('data-tab');
      row.querySelectorAll('button').forEach(b => {
        b.classList.remove('on');
        b.setAttribute('aria-selected', 'false');
      });
      tabBtn.classList.add('on');
      tabBtn.setAttribute('aria-selected', 'true');

      if (tabId) {
        const container = tabBtn.closest('.tabs');
        if (container) {
          container.querySelectorAll('.tp').forEach(p => {
            if (p.getAttribute('data-panel') === tabId) {
              p.removeAttribute('hidden');
            } else {
              p.setAttribute('hidden', '');
            }
          });
        }
      }
    }

    // Mobile burger toggle
    const burger = e.target.closest('.burger');
    if (burger) {
      const frame = burger.closest('.frame');
      if (frame) frame.classList.toggle('menu-open');
    }

    // Mobile close
    const closeBtn = e.target.closest('.mnav-x, .mscrim');
    if (closeBtn) {
      const frame = closeBtn.closest('.frame');
      if (frame) frame.classList.remove('menu-open');
    }

    // Chip filter toggle demo
    const chip = e.target.closest('.chip');
    if (chip && chip.parentElement && chip.parentElement.classList.contains('row')) {
      chip.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
      chip.classList.add('on');
    }
  });
}

function build() {
  if (typeof document === 'undefined') return;
  const q = new URLSearchParams(location.search);
  const only = q.get('p');
  const root = document.getElementById('pages');
  if (!root) return;

  if (only) {
    const pg = PAGES.find(x => x.id === only);
    if (!pg) return;
    document.body.classList.add('solo');
    root.innerHTML = frameHTML(pg);
    const fr = root.querySelector('.frame');
    if (fr) fr.style.width = (q.get('w') || 1440) + 'px';
    initInteractions();
    return;
  }

  const toc = document.getElementById('toc');
  if (toc) {
    toc.innerHTML = PAGES.map(p => `<a href="#${p.id}">${p.n}. ${E(p.title)}</a>`).join('');
  }

  root.innerHTML = PAGES.map(p => {
    const tablet = (p.id==='home'||p.id==='school');
    return `
    <article id="${p.id}" class="pg">
      <div class="pgh">
        <h2><span>${p.n}</span> ${E(p.title)}</h2>
        <p><b>Audience:</b> ${E(p.aud)} · <b>Primary CTA:</b> ${E(p.cta)}</p>
      </div>
      <div class="boards">
        <div class="board-col">
          <div class="board-h">
            <h4>Desktop · 1440</h4>
            <a class="board-inspect" href="index.html?p=${p.id}&w=1440" target="_blank">Inspect ↗</a>
          </div>
          <div class="z-d"><div style="width:1440px">${frameHTML(JSON.parse(JSON.stringify(p)))}</div></div>
        </div>
        ${tablet ? `
        <div class="board-col">
          <div class="board-h">
            <h4>Tablet · 820</h4>
            <a class="board-inspect" href="index.html?p=${p.id}&w=820" target="_blank">Inspect ↗</a>
          </div>
          <div class="z-t"><div style="width:820px">${frameHTML(JSON.parse(JSON.stringify(p)))}</div></div>
        </div>`:''}
        <div class="board-col">
          <div class="board-h">
            <h4>Mobile · 390</h4>
            <a class="board-inspect" href="index.html?p=${p.id}&w=390" target="_blank">Inspect ↗</a>
          </div>
          <div class="z-m"><div style="width:390px">${frameHTML(JSON.parse(JSON.stringify(p)))}</div></div>
        </div>
      </div>
    </article>`;
  }).join('');

  initInteractions();
}

if (typeof document !== 'undefined' && document.getElementById('pages')) build();
if (typeof module !== 'undefined') module.exports = { frameHTML, KEY, G, ICONS };
