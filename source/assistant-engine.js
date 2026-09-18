/* Portfolio assistant: answers only from the knowledge base (window.__KB, generated at build time).
   Runs fully in the browser — no API, no network — so it also works when index.html is opened from disk. */
(function () {
  const KB = window.__KB;
  if (!KB || document.getElementById('pa-launch')) return;
  const root = new URL('.', document.currentScript ? document.currentScript.src : location.href).href;

  // ---------- retrieval ----------
  const STOP = new Set('a an the is are was were be been of to in on for with and or his he him her abhishek abhisheks sharma me you your i we do does did can could would should what which who whom how when where why tell about please show give any some this that these those there it its as at by from has have had into than then so if my our just also more most much many very'.split(' '));
  const norm = s => ' ' + s.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9+#.&-]+/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
  const SYN = { pocs: 'poc', llms: 'llm', prototypes: 'prototype', agent: 'agents', certs: 'certification', cert: 'certification', exp: 'experience', yrs: 'years', ai: 'ai', ml: 'machine' };
  const stem = w => { w = SYN[w] || w; return w.length > 4 ? w.replace(/(ing|ed|es|s)$/, '') : w; };
  const toks = s => norm(s).trim().split(' ').filter(w => w && !STOP.has(w)).map(stem);
  const strip = h => h.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&');

  const docs = KB.entries.map(e => {
    const phrases = [...(e.keys || []), ...(e.aliases || [])].map(p => norm(p));
    const bag = (arr, w) => arr.forEach(t => (e._w[t] = Math.max(e._w[t] || 0, w)));
    e._w = {};
    bag(toks(strip(e.answer)), 0.6);
    bag(toks((e.ask || []).join(' ')), 2);
    bag(toks(e.title), 2.5);
    bag(toks((e.keys || []).join(' ')), 3);
    bag(toks((e.aliases || []).join(' ')), 3);
    e._phrases = phrases;
    return e;
  });
  const df = {};
  // Rarity is measured over the intent fields (keys, aliases, titles, example questions), not answer prose.
  docs.forEach(d => Object.keys(d._w).forEach(t => { if (d._w[t] >= 2) df[t] = (df[t] || 0) + 1; }));
  const seen = new Set(); docs.forEach(d => Object.keys(d._w).forEach(t => seen.add(t)));
  const idf = t => Math.log(1 + docs.length / (df[t] || 0.5));
  const maxIdf = Math.log(1 + docs.length / 1);

  function search(q) {
    const nq = norm(q), qt = toks(q);
    const scored = docs.map(d => {
      let s = 0;
      qt.forEach(t => { if (d._w[t]) s += d._w[t] * idf(t); });
      d._phrases.forEach(p => {
        if (!p.trim() || !nq.includes(p)) return;
        const base = d.aliases && d.aliases.map(norm).includes(p) ? 7 : 4;
        // Specific words (rare across the KB) earn the full bonus; generic ones like "experience" much less.
        const pt = toks(p), spec = pt.length ? Math.max(...pt.map(idf)) / maxIdf : (qt.length ? 0.4 : 1);
        s += base * (p.trim().includes(' ') ? 1.4 : spec * spec);
      });
      return [s, d];
    }).sort((a, b) => b[0] - a[0]);
    return scored;
  }

  // ---------- UI ----------
  const css = `
#pa-launch{position:fixed;right:22px;bottom:22px;z-index:9999;display:flex;align-items:center;gap:10px;background:#16233F;color:#fff;border:0;border-radius:999px;padding:12px 18px 12px 14px;font:600 14px/1 'Work Sans',system-ui,sans-serif;box-shadow:0 14px 34px -12px rgba(22,35,63,.55);cursor:pointer}
#pa-launch:hover{background:#1F5C3F}
#pa-launch svg{width:20px;height:20px}
#pa-panel{position:fixed;right:22px;bottom:22px;z-index:10000;width:min(400px,calc(100vw - 32px));height:min(600px,calc(100vh - 44px));background:#fff;border:1px solid #DFE4EB;box-shadow:0 30px 70px -25px rgba(22,35,63,.55);display:none;flex-direction:column;font:400 14.5px/1.55 'Work Sans',system-ui,sans-serif;color:#16233F}
#pa-panel.open{display:flex}
.pa-head{background:#16233F;color:#fff;padding:14px 16px;display:flex;align-items:flex-start;gap:10px}
.pa-head b{font:600 15px/1.3 'IBM Plex Sans',system-ui,sans-serif;display:block}
.pa-head span{font-size:12px;color:rgba(255,255,255,.68)}
.pa-x{margin-left:auto;background:none;border:0;color:#fff;font-size:22px;line-height:1;cursor:pointer;padding:0 2px}
.pa-log{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;background:#F3F5F8}
.pa-msg{max-width:92%;padding:10px 13px;border:1px solid #DFE4EB;background:#fff}
.pa-msg.me{align-self:flex-end;background:#16233F;color:#fff;border-color:#16233F}
.pa-msg p{margin:0 0 8px}.pa-msg p:last-child{margin-bottom:0}
.pa-msg ul,.pa-msg ol{margin:4px 0 8px;padding-left:18px}.pa-msg li{margin:2px 0}
.pa-msg a{color:#1F5C3F}
.pa-links{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.pa-links a{font:500 12.5px/1 'IBM Plex Mono',ui-monospace,monospace;text-decoration:none;border:1px solid #1F5C3F;color:#1F5C3F;padding:5px 8px}
.pa-chips{display:flex;flex-wrap:wrap;gap:6px;padding:10px 16px 0;background:#fff;border-top:1px solid #DFE4EB}
.pa-chip{background:#F3F5F8;border:1px solid #DFE4EB;color:#16233F;font:500 12.5px/1.2 'Work Sans',system-ui,sans-serif;padding:6px 9px;cursor:pointer;text-align:left}
.pa-chip:hover{border-color:#1F5C3F;color:#1F5C3F}
.pa-form{display:flex;gap:8px;padding:10px 16px 14px;background:#fff}
.pa-form input{flex:1;border:1px solid #DFE4EB;padding:10px 12px;font:inherit;color:#16233F;outline:none}
.pa-form input:focus{border-color:#16233F}
.pa-form button{background:#1F5C3F;color:#fff;border:0;padding:0 14px;font:600 13.5px/1 'Work Sans',system-ui,sans-serif;cursor:pointer}
.pa-note{font-size:11.5px;color:#69738A;padding:0 16px 10px;background:#fff}
.pa-typing{color:#69738A;font-size:13px}
@media (max-width:520px){#pa-launch span{display:none}#pa-launch{padding:13px}#pa-panel{right:16px;bottom:16px}}
@media print{#pa-launch,#pa-panel{display:none!important}}`;
  const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);

  const launch = document.createElement('button');
  launch.id = 'pa-launch'; launch.type = 'button'; launch.setAttribute('aria-label', 'Ask about Abhishek');
  launch.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg><span>Ask about Abhishek</span>';
  const panel = document.createElement('section');
  panel.id = 'pa-panel'; panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', 'Portfolio assistant');
  panel.innerHTML = `<div class="pa-head"><div><b>Ask about Abhishek</b><span>Answers only from this portfolio’s knowledge base</span></div><button class="pa-x" aria-label="Close">×</button></div>
<div class="pa-log" aria-live="polite"></div><div class="pa-chips"></div>
<form class="pa-form"><input type="text" placeholder="e.g. What is his total experience?" aria-label="Your question" autocomplete="off"><button type="submit">Ask</button></form>
<div class="pa-note">No AI model or tracking. Matches your question to curated answers.</div>`;
  document.body.append(launch, panel);
  const log = panel.querySelector('.pa-log'), chips = panel.querySelector('.pa-chips'), input = panel.querySelector('input');
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const fix = h => h.replace(/href="(?!https?:|mailto:|#)([^"]+)"/g, (m, p) => `href="${root}${p}"`);

  function add(html, me) {
    const d = document.createElement('div'); d.className = 'pa-msg' + (me ? ' me' : ''); d.innerHTML = html;
    log.appendChild(d); log.scrollTop = log.scrollHeight; return d;
  }
  function setChips(list) {
    chips.innerHTML = '';
    list.slice(0, 4).forEach(q => { const b = document.createElement('button'); b.type = 'button'; b.className = 'pa-chip'; b.textContent = q; b.onclick = () => ask(q); chips.appendChild(b); });
  }
  function answer(q) {
    const r = search(q);
    const [s, best] = r[0];
    if (s < 2.2) {
      return { html: `<p>I don’t have that in Abhishek’s portfolio, so I won’t guess. I can answer questions about his experience, projects, results, skills, tech stack, certifications and how to contact him.</p><p>For anything else, email <a href="mailto:${esc(KB.email)}">${esc(KB.email)}</a>.</p>`, follow: KB.starters };
    }
    let html = best.answer;
    // Be explicit when the question names something the portfolio never mentions.
    const unknown = norm(q).trim().split(' ').filter(w => w && !STOP.has(w) && !seen.has(stem(w)) && w.length > 2 && !/^\d+$/.test(w));
    if (unknown.length && s < 7) html = `<p><i>“${esc(unknown.join(', '))}” isn’t mentioned in Abhishek’s portfolio, so I can’t confirm it. Here’s the closest related information:</i></p>` + html;
    const links = (best.links || []).map(([l, h]) => `<a href="${h}">${esc(l)} →</a>`).join('');
    if (links) html += `<div class="pa-links">${links}</div>`;
    const related = r.slice(1, 3).filter(([s2, d]) => s2 > Math.max(2.2, s * 0.72) && d.id !== best.id).map(([, d]) => d.ask && d.ask[0]).filter(Boolean);
    return { html: fix(html), follow: [...related, ...(best.follow || [])].filter((x, i, a) => a.indexOf(x) === i && norm(x) !== norm(q)) };
  }
  function ask(q) {
    q = q.trim(); if (!q) return;
    add(esc(q), true); input.value = '';
    const t = add('<span class="pa-typing">…</span>');
    setTimeout(() => { const a = answer(q); t.innerHTML = a.html; setChips(a.follow.length ? a.follow : KB.starters); log.scrollTop = Math.max(0, t.offsetTop - log.offsetTop - 60); }, 280);
  }
  let greeted = false;
  function open() {
    panel.classList.add('open'); launch.style.display = 'none';
    if (!greeted) { greeted = true; add(`<p>Hi, I can answer questions about Abhishek’s <b>experience, projects, results, skills and tech stack</b>, straight from this portfolio.</p>`); setChips(KB.starters); }
    input.focus();
  }
  function close() { panel.classList.remove('open'); launch.style.display = ''; launch.focus(); }
  launch.onclick = open;
  panel.querySelector('.pa-x').onclick = close;
  panel.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  panel.querySelector('form').onsubmit = e => { e.preventDefault(); ask(input.value); };
  window.__paAnswer = q => answer(q); // for testing
  window.__paScore = q => search(q).slice(0, 2).map(([s, d]) => d.id + ':' + s.toFixed(1));
})();
