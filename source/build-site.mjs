// Renders site/content.mjs into static HTML in dist/, copying only the screenshots that are referenced.
// Usage: node scripts/build-site.mjs
import fs from 'node:fs';
import path from 'node:path';
import { person, impactMetrics, caseStudies, skills, experience, education, statement, techStack, certifications, certificationsUrl, howIWork, capabilities } from '../site/content.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DIST = path.join(ROOT, 'dist');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pending = what => `<p class="pending">Pending: ${esc(what)} will be filled in from the CV.</p>`;

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(path.join(DIST, 'work'), { recursive: true });
fs.copyFileSync(path.join(ROOT, 'site', 'style.css'), path.join(DIST, 'style.css'));

const missing = [];
function shotsFor(cs) {
  return cs.shots.filter(([file]) => {
    const src = path.join(ROOT, 'screenshots', cs.slug, file);
    if (!fs.existsSync(src)) { missing.push(`${cs.slug}/${file}`); return false; }
    fs.mkdirSync(path.join(DIST, 'img', cs.slug), { recursive: true });
    fs.copyFileSync(src, path.join(DIST, 'img', cs.slug, file));
    return true;
  });
}

const page = ({ title, depth = 0, body }) => {
  const up = depth ? '../' : '';
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(person.name)}, ${esc(person.title)}. Platforms architected and shipped.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;600&family=IBM+Plex+Mono:wght@500&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${up}style.css">
</head>
<body>
<div class="site-head-bar"><header class="site-head wrap">
  <a class="mark" href="${up}index.html">${esc(person.name)}</a>
  <nav><a href="${up}index.html#work">Work</a><a href="${up}index.html#stack">Stack</a><a href="${up}index.html#experience">Experience</a><a href="${up}index.html#contact">Contact</a></nav>
</header></div>
${body}
<div class="site-foot-bar"><footer class="site-foot wrap"><span>${esc(person.name)} · ${esc(person.location)}</span><span>Screenshots are live captures. Business data is masked before capture.</span></footer></div>
</body>
</html>`;
};

// ---------- Case study pages ----------
for (const cs of caseStudies) {
  const shots = shotsFor(cs);
  const flow = shots.length ? `
<section class="wrap flow">
  <div class="section-label"><span>How it works</span><span class="count">${shots.length} screens</span></div>
  ${cs.maskNote ? `<p class="mask-note">${esc(cs.maskNote)}</p>` : ''}
  <ol class="shots">
    ${shots.map(([file, caption], i) => `<li>
      <figure>
        <a href="../img/${cs.slug}/${file}" class="shot"><img src="../img/${cs.slug}/${file}" alt="${esc(caption)}" loading="${i ? 'lazy' : 'eager'}"></a>
        <figcaption><span class="step">${String(i + 1).padStart(2, '0')}</span>${esc(caption)}</figcaption>
      </figure>
    </li>`).join('\n    ')}
  </ol>
</section>` : '';

  const built = cs.built ? `
<section class="wrap design">
  <div class="section-label"><span>How it was built</span></div>
  <ol class="reasons">${cs.built.map(d => `<li>${esc(d)}</li>`).join('')}</ol>
  <div class="stack"><span class="stack-label">Stack</span>${cs.stack.map(s => `<span class="chip">${esc(s)}</span>`).join('')}</div>
</section>` : '';
  const full = cs.built ? built : cs.light ? `
<section class="wrap pair">
  <div class="section-label"><span>${esc(cs.roleTitle || 'My role')}</span></div>
  ${cs.role ? `<p class="role">${esc(cs.role)}</p>` : pending('Role and scope on this project')}
</section>${cs.concept ? `
<section class="wrap concept">
  <div class="section-label"><span>Concept flow</span></div>
  <ol class="flowline">${cs.concept.map(c => `<li>${esc(c)}</li>`).join('')}</ol>
  <p class="mask-note" style="margin-top:14px">${esc(cs.conceptNote)}</p>
</section>` : ''}${cs.details ? `
<section class="wrap design">
  <div class="section-label"><span>${esc(cs.details.title)}</span></div>
  <ol class="reasons">${cs.details.items.map(d => `<li>${esc(d)}</li>`).join('')}</ol>
</section>` : ''}` : `
<section class="wrap pas">
  <div class="col"><h2>Problem</h2><p>${esc(cs.problem)}</p></div>
  <div class="col"><h2>Approach</h2><p>${esc(cs.approach)}</p></div>
</section>
<section class="wrap impact">
  <div class="section-label"><span>Impact</span></div>
  <div class="impact-grid">
    ${cs.facts.map(([v, l]) => `<div class="fact"><span class="v">${esc(v)}</span><span class="l">${esc(l)}</span></div>`).join('\n    ')}
  </div>
  <ul class="impact-list">${cs.impact.map(i => `<li>${esc(i)}</li>`).join('')}</ul>
</section>
<section class="wrap design">
  <div class="section-label"><span>Design &amp; thought process</span></div>
  <ol class="reasons">${cs.design.map(d => `<li>${esc(d)}</li>`).join('')}</ol>
  <div class="stack"><span class="stack-label">Stack</span>${cs.stack.map(s => `<span class="chip">${esc(s)}</span>`).join('')}</div>
</section>`;

  fs.writeFileSync(path.join(DIST, 'work', `${cs.slug}.html`), page({
    title: `${cs.name} | ${person.name}`, depth: 1, body: `
<main>
<section class="wrap cs-hero">
  <p class="kicker">${esc(cs.kicker)}</p>
  <h1>${esc(cs.name)}</h1>
  <p class="lede">${esc(cs.summary)}</p>
  ${cs.url ? `<p class="visit"><a href="${esc(cs.url)}" rel="noopener">${esc(cs.url.replace(/^https?:\/\//, ''))}</a></p>` : ''}
</section>
${full}
${flow}
<nav class="wrap next">${(() => { const i = caseStudies.indexOf(cs); const n = caseStudies[(i + 1) % caseStudies.length]; return `<a href="${n.slug}.html"><span>Next</span>${esc(n.name)}</a>`; })()}</nav>
</main>` }));
}

// ---------- Home ----------
const cover = cs => {
  const first = (cs.cover && fs.existsSync(path.join(DIST, 'img', cs.slug, cs.cover)) ? [cs.cover] : null)
    || cs.shots.find(([f]) => fs.existsSync(path.join(DIST, 'img', cs.slug, f)));
  return first ? `<img src="img/${cs.slug}/${first[0]}" alt="" loading="lazy">`
    : `<div class="no-shot"><span class="badge">${esc(cs.badge || 'Screens not shown')}</span><span class="nm">${esc(cs.name)}</span></div>`;
};
const main = caseStudies.filter(c => !c.light);
const light = caseStudies.filter(c => c.light);

fs.writeFileSync(path.join(DIST, 'index.html'), page({
  title: `${person.name} | ${person.title}`, body: `
<main>
<section class="wrap hero">
  <div><p class="kicker">${esc(person.title)} · ${esc(person.location)}</p>
  <h1>I architect and ship AI platforms that replace manual operations.</h1></div>
  <p class="lede">These are real systems in production. Each case study walks through the actual screens, in the order a user moves through them.</p>
</section>
<section class="metrics">
  <div class="wrap metrics-row">
    ${impactMetrics.map(m => `<div class="metric"><span class="v">${esc(m.value)}</span><span class="l">${esc(m.label)}</span></div>`).join('\n    ')}
  </div>
  <div class="wrap capabilities"><span class="cap-label">Shipped to production</span>${capabilities.map(c => `<span class="cap">${esc(c)}</span>`).join('')}</div>
</section>
<section class="statement-wrap">
  <div class="wrap statement">
    <div class="section-label" style="margin:0;align-self:start"><span>Statement</span></div>
    <div><blockquote>${esc(statement.text)}</blockquote>${statement.draft ? '<p class="draft">Draft: built only from the case-study copy. Replace with your own words.</p>' : ''}</div>
  </div>
</section>
<section class="wrap" id="approach">
  <div class="section-label"><span>How I work</span><span class="count">problem first, then proof, then production</span></div>
  <ol class="steps">${howIWork.map(([t, d]) => `<li><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join('')}</ol>
</section>
<section class="wrap" id="work">
  <div class="section-label"><span>Selected work</span><span class="count">${main.length} case studies</span></div>
  <div class="cards">
    ${main.map((cs, i) => `<a class="card" href="work/${cs.slug}.html">
      <div class="card-img">${cover(cs)}</div>
      <div class="card-body"><span class="num">${String(i + 1).padStart(2, '0')}</span><p class="kicker">${esc(cs.kicker)}</p><h3>${esc(cs.name)}</h3><p>${esc(cs.summary)}</p><span class="more">Read the case study</span></div>
    </a>`).join('\n    ')}
  </div>
  <div class="section-label sub"><span>More work</span><span class="count">ventures, work in progress &amp; concepts</span></div>
  <div class="cards small">
    ${light.map(cs => `<a class="card" href="work/${cs.slug}.html">
      <div class="card-img">${cover(cs)}</div>
      <div class="card-body"><h3>${esc(cs.name)}</h3><p>${esc(cs.summary)}</p></div>
    </a>`).join('\n    ')}
  </div>
</section>
<section class="band" id="stack" style="margin-top:112px;padding:72px 0">
  <div class="wrap">
    <div class="section-label"><span>Tech stack</span><span class="count">used in the work above</span></div>
    <div class="stack-grid">
      ${techStack.map(g => `<div class="stack-group"><h3>${esc(g.group)}</h3><ul>${g.items.map(i => `<li class="chip">${esc(i)}</li>`).join('')}</ul></div>`).join('\n      ')}
    </div>
  </div>
</section>
<section class="wrap two-col" id="skills">
  <div class="section-label"><span>Skills</span></div>
  <div class="skill-groups">${skills.map(g => `<div><h3>${esc(g.group)}</h3><ul class="skills">${g.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')}</div>
</section>
<section class="wrap two-col" id="experience">
  <div class="section-label"><span>Experience</span></div>
  ${experience ? `<ol class="timeline">${experience.map(e => `<li><span class="when">${esc(e.when)}</span><div><h3>${esc(e.role)}</h3><p class="org">${esc(e.org)}</p>${e.points ? `<ul>${e.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}</div></li>`).join('')}</ol>` : pending('Experience')}
</section>
<section class="wrap two-col" id="education">
  <div class="section-label"><span>Education</span></div>
  ${education ? `<ol class="timeline">${education.map(e => `<li><span class="when">${esc(e.when)}</span><div><h3>${esc(e.degree)}</h3><p class="org">${esc(e.org)}</p></div></li>`).join('')}</ol>` : pending('Education')}

</section>
<section class="wrap" id="certifications">
  <div class="section-label"><span>Certifications</span><a class="count" href="${esc(certificationsUrl)}" rel="noopener">View certificates ↗</a></div>
  <div class="cert-grid">
    ${certifications.map(g => `<div class="cert-group"><h3>${esc(g.area)}</h3><ul>${g.items.map(c => `<li><span class="ct">${esc(c.title)}</span><span class="cm">${esc(c.issuer)}${c.when ? ` · ${esc(c.when)}` : ''}</span>${c.note ? `<span class="cn">${esc(c.note)}</span>` : ''}</li>`).join('')}</ul></div>`).join('\n    ')}
  </div>
</section>
<section class="wrap contact" id="contact">
  <h2>Let's talk about what you're building.</h2>
  ${person.email ? `<p><a class="btn" href="mailto:${esc(person.email)}">${esc(person.email)}</a>${person.linkedin ? ` <a class="btn ghost" href="${esc(person.linkedin)}">LinkedIn</a>` : ''}</p>` : pending('Contact email and LinkedIn')}
</section>
</main>` }));

console.log(`Built ${caseStudies.length + 1} pages to dist/`);
if (missing.length) console.log(`Screens not captured yet (omitted):\n  ${missing.join('\n  ')}`);
