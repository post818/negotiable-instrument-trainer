/* UCC in Daily Life — single-page app (no build step) */
(function () {
  const $app = document.getElementById("app");
  const LESSONS = window.UCC_LESSONS;
  const QUIZZES = window.UCC_QUIZZES;
  const CARDS = window.UCC_FLASHCARDS;

  /* ---------- persistence ---------- */
  const STORE_KEY = "ucc-daily-life:v1";
  const state = Object.assign(
    { completed: {}, quiz: {}, theme: "light", cardIndex: 0, moneyRead: {}, debtRead: {} },
    JSON.parse(localStorage.getItem(STORE_KEY) || "{}")
  );
  const save = () => localStorage.setItem(STORE_KEY, JSON.stringify(state));

  /* ---------- helpers ---------- */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const h = (strings, ...vals) => strings.reduce((a, s, i) => a + s + (vals[i] ?? ""), "");

  function uccLink(cite) {
    // "§ 3-302" or "§ 4-401(c)" or "§ 3-417 / § 4-208" -> link first section to Cornell LII
    const m = cite.match(/(\d[A-Za-z]?)-(\d{3})/);
    if (!m) return null;
    return `https://www.law.cornell.edu/ucc/${m[1].toLowerCase()}/${m[1].toLowerCase()}-${m[2]}`;
  }
  function fedLink(cite) {
    let m = cite.match(/(\d+)\s+U\.S\.C\.\s+§+\s*(\d+[a-z\-]*)/);
    if (m) return `https://www.law.cornell.edu/uscode/text/${m[1]}/${m[2]}`;
    m = cite.match(/(\d+)\s+C\.F\.R\.\s+(?:§+\s*)?(?:pt\.\s*)?(\d+)(?:\.(\d+))?/);
    if (m) return m[3] ? `https://www.law.cornell.edu/cfr/text/${m[1]}/${m[2]}.${m[3]}` : `https://www.law.cornell.edu/cfr/text/${m[1]}/part-${m[2]}`;
    return null;
  }
  const linkCite = (cite, url) => url ? `<a href="${url}" target="_blank" rel="noopener">${esc(cite)}</a>` : esc(cite);

  function progressPct() {
    const done = LESSONS.filter((l) => state.completed[l.id]).length;
    return Math.round((done / LESSONS.length) * 100);
  }

  /* ---------- views ---------- */
  function viewHome() {
    const pct = progressPct();
    return h`
<section class="hero">
  <span class="badge part">Training program</span>
  <h1>Negotiable instruments for real life</h1>
  <p class="lede">Checks, cashier's checks, money orders, and promissory notes are legal tools you already use. This course teaches the rules that govern them — UCC Articles 3 and 4 — through everyday scenarios, and cross-references every concept to Black's Law Dictionary terms and the federal statutes that sit on top of state law.</p>
  <div class="progress-bar"><div style="width:${pct}%"></div></div>
  <p class="small muted">${pct}% of Part 1 lessons completed</p>
</section>

<div class="grid">
  <a class="card link" href="#/lessons"><span class="badge part">Part 1</span><h3>Using Negotiable Instruments</h3><p class="muted">${LESSONS.length} scenario-based lessons with quizzes: writing and indorsing checks, lending with notes, co-signing, cashier's checks, stop payments, forgery, scams.</p></a>
  <a class="card link" href="#/money"><span class="badge part">Part 2</span><h3>What You Were Taught vs. How Money Works</h3><p class="muted">Side-by-side contrasts, sourced to the Fed, Bank of England, and U.S. Code — plus a myth-vs-fact check for common internet claims.</p></a>
  <a class="card link" href="#/debt"><span class="badge part">Part 3</span><h3>Debt: What It Is and Who Owes It</h3><p class="muted">Public vs. private debt, HJR-192 and 31 U.S.C. § 5118, 12 U.S.C. § 411, how debts are lawfully discharged, and how courts treat the "government pays all debt" theory.</p></a>
  <a class="card link" href="#/tools"><span class="badge">Interactive</span><h3>Tools</h3><p class="muted">Negotiability checker, indorsement builder, loss-allocation decision tree, statute-of-limitations calculator, stop-payment tracker.</p></a>
  <a class="card link" href="#/flashcards"><span class="badge">Practice</span><h3>Flashcards</h3><p class="muted">${CARDS.length} key rules with citations.</p></a>
  <a class="card link" href="#/references"><span class="badge">Index</span><h3>Cross-Reference Index</h3><p class="muted">Every UCC section, Black's term, and federal citation used in the course — searchable, with links to the statutory text.</p></a>
</div>

<div class="callout warn small"><strong>Ground rules.</strong> The UCC is state law; every state has enacted Articles 3 and 4 in nearly identical form, so this course cites the uniform section numbers. Black's Law Dictionary definitions are paraphrased. Nothing here is legal advice.</div>`;
  }

  function viewLessons() {
    return h`
<h1>Part 1 · Using Negotiable Instruments</h1>
<p class="muted">Work through the lessons in order — later ones assume the vocabulary of earlier ones. Each ends with a scenario quiz.</p>
<div class="progress-bar"><div style="width:${progressPct()}%"></div></div>
<div class="grid">
${LESSONS.map((l, i) => {
  const q = state.quiz[l.id];
  return h`<a class="card link" href="#/lesson/${l.id}">
    <h3><span class="num">${i + 1}</span>${esc(l.title)}</h3>
    <p class="muted small">${esc(l.summary)}</p>
    <div class="meta"><span>${l.minutes} min · ${(QUIZZES[l.id] || []).length} quiz Qs</span>
      ${state.completed[l.id] ? `<span class="badge done">Completed${q ? ` · ${q.correct}/${q.total}` : ""}</span>` : `<span class="badge">Not started</span>`}</div>
  </a>`;
}).join("")}
</div>`;
  }

  function renderXrefs(x, key) {
    const tabs = [["ucc", "UCC sections"], ["blacks", "Black's Law terms"], ["federal", "U.S. Code / C.F.R."]];
    const lists = {
      ucc: (x.ucc || []).map((r) => h`<li><span class="cite">${linkCite(r.cite, uccLink(r.cite))}</span><span>${esc(r.note)}</span></li>`).join(""),
      blacks: (x.blacks || []).map((r) => h`<li><span class="term">${esc(r.term)}</span><span>${esc(r.def)}<span class="src">Black's Law Dictionary (11th ed. 2019), paraphrased</span></span></li>`).join(""),
      federal: (x.federal || []).map((r) => h`<li><span class="cite">${linkCite(r.cite, fedLink(r.cite))}</span><span><span class="name">${esc(r.name)}</span>${esc(r.note)}</span></li>`).join("")
    };
    return h`<div class="xref" data-xref="${key}">
  <h2>Cross-References</h2>
  <div class="xref-tabs">${tabs.map(([k, label], i) => `<button data-tab="${k}" class="${i === 0 ? "active" : ""}">${label}</button>`).join("")}</div>
  ${tabs.map(([k], i) => `<ul class="xref-list" data-panel="${k}" ${i ? 'style="display:none"' : ""}>${lists[k]}</ul>`).join("")}
</div>`;
  }

  function renderQuiz(id) {
    const qs = QUIZZES[id] || [];
    if (!qs.length) return "";
    return h`<section class="quiz" data-quiz="${id}">
  <h2>Scenario Quiz</h2>
  ${qs.map((q, i) => h`<div class="q" data-q="${i}">
    <div class="prompt">${i + 1}. ${esc(q.q)}</div>
    <div class="choices">${q.choices.map((c, j) => `<button class="choice" data-choice="${j}">${esc(c)}</button>`).join("")}</div>
    <div class="explain" style="display:none">${q.explain}<span class="cite">${esc(q.cite)}</span></div>
  </div>`).join("")}
  <p class="score" data-score></p>
</section>`;
  }

  function viewLesson(id) {
    const idx = LESSONS.findIndex((l) => l.id === id);
    if (idx < 0) return `<p>Lesson not found.</p>`;
    const l = LESSONS[idx];
    const prev = LESSONS[idx - 1], next = LESSONS[idx + 1];
    return h`
<article>
  <div class="lesson-header">
    <span class="badge part">Part 1 · Lesson ${idx + 1} of ${LESSONS.length}</span>
    <h1>${esc(l.title)}</h1>
    <p class="summary">${esc(l.summary)}</p>
    <p class="small muted">≈ ${l.minutes} min read</p>
  </div>
  <div class="daily"><strong>In daily life:</strong> ${esc(l.dailyLife)}</div>
  ${l.sections.map((s) => `<section class="section"><h2>${esc(s.heading)}</h2>${s.body}</section>`).join("")}
  <div class="takeaways"><h3>Key takeaways</h3><ul>${l.keyTakeaways.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>
  ${renderXrefs(l.crossRefs, l.id)}
  ${renderQuiz(l.id)}
  <div class="lesson-nav">
    ${prev ? `<a class="btn" href="#/lesson/${prev.id}">← ${esc(prev.title)}</a>` : `<a class="btn" href="#/lessons">← All lessons</a>`}
    <button class="btn ${state.completed[l.id] ? "" : "btn-primary"}" data-complete="${l.id}">${state.completed[l.id] ? "Completed ✓ (click to reset)" : "Mark lesson complete"}</button>
    ${next ? `<a class="btn" href="#/lesson/${next.id}">${esc(next.title)} →</a>` : `<a class="btn" href="#/money">Continue to Part 2 →</a>`}
  </div>
</article>`;
  }

  function viewMoney() {
    return h`
<h1>Part 2 · What You Were Taught vs. How Money Actually Works</h1>
<p class="muted">Most of us learned about money through a piggy bank, a savings account, and the phrase "banks lend out your deposits." Below, each common lesson is set beside how the U.S. monetary and legal system actually works — sourced to the Federal Reserve, Bank of England, and the U.S. Code — and why the difference matters for anyone using checks and notes.</p>

${window.MONEY_CONTRASTS.map((c, i) => h`
<div class="contrast" id="${c.id}">
  <div class="taught"><div class="label">What we're commonly taught</div><p>${esc(c.taught)}</p></div>
  <div class="reality"><div class="label">How it actually works</div><p>${c.reality}</p></div>
  <div class="why"><div class="label">Why it matters for negotiable instruments</div><p>${esc(c.whyItMatters)}</p></div>
  <div class="srcs">
    <div class="label">Sources &amp; law</div>
    <ul>${c.sources.map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${esc(s.name)}</a></li>`).join("")}</ul>
    <ul class="xref-list">${c.law.map((r) => `<li><span class="cite">${linkCite(r.cite, uccLink(r.cite) || fedLink(r.cite))}</span><span>${esc(r.note)}</span></li>`).join("")}</ul>
  </div>
</div>`).join("")}

<h2>Lawful ways people actually use negotiable instruments</h2>
<div class="grid">${window.MONEY_LAWFUL_USES.map((u) => `<div class="card"><p>${esc(u.title)}</p><span class="cite small muted">${esc(u.cite)}</span></div>`).join("")}</div>

<h2>Myth vs. fact: commercial-law claims circulating online</h2>
<p class="muted small">These claims borrow UCC vocabulary. Each is tested against the actual statute or case law.</p>
${window.MONEY_MYTHS.map((m) => h`<details class="myth"><summary>${esc(m.myth)}</summary><div class="fact">${m.fact}</div><div class="cites">${m.cites.map(esc).join(" · ")}</div></details>`).join("")}

<div class="lesson-nav"><a class="btn" href="#/lessons">← Part 1</a><a class="btn btn-primary" href="#/debt">Part 3: Debt →</a></div>`;
  }

  function viewDebt() {
    return h`
<h1>Part 3 · Debt: What It Is and Who Owes It</h1>
<p class="muted">This section answers a question that comes up constantly: <em>"Doesn't the law say the government is responsible for all debt?"</em> The short answer is no — but the claim rests on real statutes that are worth reading. Below: what debt is, which debt the government does owe, what HJR-192 and 12 U.S.C. § 411 actually say, how debts are lawfully discharged, and how courts have ruled.</p>

<div class="callout"><strong>Bottom line up front.</strong> The United States is legally responsible for the <em>public debt</em> (its bonds) and stands behind <em>its currency</em> (Federal Reserve notes are "obligations of the United States," 12 U.S.C. § 411). No statute makes it responsible for private debts. HJR-192 (1933) let debtors pay in legal-tender dollars instead of gold — it did not pay their debts for them.</div>

${window.DEBT_SECTIONS.map((s, i) => h`
<section class="section card" id="${s.id}" style="margin:1.2rem 0">
  <h2 style="margin-top:0"><span class="num">${i + 1}</span>${esc(s.title)}</h2>
  ${s.body}
  <h3>Read the sources</h3>
  <ul class="xref-list">${s.cites.map((r) => `<li><span class="cite"><a href="${r.url}" target="_blank" rel="noopener">${esc(r.cite)}</a></span><span>${esc(r.note)}</span></li>`).join("")}</ul>
</section>`).join("")}

<h2>Debt glossary</h2>
<ul class="xref-list">${window.DEBT_GLOSSARY.map((g) => `<li><span class="term">${esc(g.term)}</span><span>${esc(g.def)}</span></li>`).join("")}</ul>

<div class="lesson-nav"><a class="btn" href="#/money">← Part 2</a><a class="btn btn-primary" href="#/tools">Try the tools →</a></div>`;
  }

  /* ---------- tools ---------- */
  const NEG_CHECKS = [
    { k: "writing", label: "It is a written document (paper), not just a text/email", cite: "§ 3-103, § 3-104" },
    { k: "signed", label: "Signed by the person promising or ordering payment", cite: "§ 3-401" },
    { k: "uncond", label: "The promise/order is unconditional — no 'if', 'subject to', or 'governed by another agreement'", cite: "§ 3-106" },
    { k: "fixed", label: "States a fixed amount of principal, in money", cite: "§ 3-104(a), § 3-112" },
    { k: "order", label: "Payable 'to the order of' someone, or 'to bearer'/'to cash' (or it's a check)", cite: "§ 3-109, § 3-104(c)" },
    { k: "time", label: "Payable on demand or at a definite time", cite: "§ 3-108" },
    { k: "noother", label: "No other promises or instructions beyond payment (collateral/confession/waiver clauses OK)", cite: "§ 3-104(a)(3)" }
  ];

  function viewTools() {
    return h`
<h1>Interactive Tools</h1>
<p class="muted">Apply the rules to your own situation. Results cite the governing section; verify against your state's enactment.</p>

<div class="tool" id="tool-neg">
  <h2>1. Is this document a negotiable instrument?</h2>
  <p class="small muted">Check every statement that is true of the document in front of you.</p>
  ${NEG_CHECKS.map((c) => `<label class="check-row"><input type="checkbox" data-neg="${c.k}"> <span>${esc(c.label)}<span class="cite">${esc(c.cite)}</span></span></label>`).join("")}
  <div class="result" data-neg-result><h4>Result</h4><p>Check the boxes above.</p></div>
</div>

<div class="tool" id="tool-indorse">
  <h2>2. Indorsement builder</h2>
  <div class="two-col">
    <div class="field"><label>Your name as it appears on the payee line</label><input type="text" data-in="name" placeholder="e.g., Jordan Kim"></div>
    <div class="field"><label>What are you doing with the check?</label>
      <select data-in="action">
        <option value="deposit">Depositing at my bank (teller/ATM)</option>
        <option value="mobile">Mobile deposit</option>
        <option value="cash">Cashing at the teller window right now</option>
        <option value="transfer">Signing it over to someone else</option>
        <option value="transfer-nr">Signing it over, but I don't want to be liable if it bounces</option>
      </select></div>
    <div class="field"><label>Last 4 of your account (optional)</label><input type="text" data-in="acct" maxlength="4" placeholder="1234"></div>
    <div class="field"><label>Transferee's name (if signing over)</label><input type="text" data-in="to" placeholder="e.g., Maria Lopez"></div>
  </div>
  <div class="check-visual">
    <div class="row"><span>Pay to the order of <span class="line" data-vis="payee">______</span></span><span>$ <span class="line" style="min-width:5em">____</span></span></div>
    <div class="back"><div class="muted small">— back of check (indorse here) —</div><div data-vis="indorse" style="white-space:pre-line;min-height:3em"></div></div>
  </div>
  <div class="result" data-in-result></div>
</div>

<div class="tool" id="tool-loss">
  <h2>3. Who bears the loss? (forgery / alteration decision tree)</h2>
  <div class="two-col">
    <div class="field"><label>What happened?</label>
      <select data-loss="type">
        <option value="drawer">Someone forged MY signature on a check from my account</option>
        <option value="indorse">A check payable to me was stolen and someone forged my indorsement</option>
        <option value="alter">A check I wrote was altered (amount raised / payee changed)</option>
        <option value="employee">My employee/bookkeeper wrote or diverted checks</option>
        <option value="impostor">I was tricked into writing a check to someone pretending to be the payee</option>
        <option value="counterfeit">I deposited a check that turned out to be counterfeit</option>
      </select></div>
    <div class="field"><label>How long after the bank statement showing it did you report?</label>
      <select data-loss="report">
        <option value="fast">Within 30 days</option>
        <option value="mid">Between 30 days and 1 year</option>
        <option value="late">More than 1 year</option>
        <option value="na">Not applicable</option>
      </select></div>
    <div class="field"><label>Did your own carelessness substantially contribute (blank checks signed, unsecured checkbook, ignored earlier warnings)?</label>
      <select data-loss="negl"><option value="no">No</option><option value="yes">Yes / arguably</option></select></div>
  </div>
  <div class="result" data-loss-result></div>
</div>

<div class="tool" id="tool-sol">
  <h2>4. Statute-of-limitations estimator</h2>
  <div class="two-col">
    <div class="field"><label>Instrument</label>
      <select data-sol="type">
        <option value="note-time">Promissory note payable at a definite time</option>
        <option value="note-demand">Demand note</option>
        <option value="check">Check / unaccepted draft</option>
        <option value="cashiers">Cashier's, teller's, or certified check</option>
        <option value="cd">Certificate of deposit</option>
      </select></div>
    <div class="field"><label>Key date (due date / demand date / dishonor date / issue date)</label><input type="date" data-sol="date"></div>
    <div class="field"><label>For demand notes: date of last principal or interest payment</label><input type="date" data-sol="lastpay"></div>
  </div>
  <div class="result" data-sol-result></div>
</div>

<div class="tool" id="tool-stop">
  <h2>5. Stop-payment order tracker</h2>
  <div class="two-col">
    <div class="field"><label>Date you gave the stop order</label><input type="date" data-stop="date"></div>
    <div class="field"><label>How</label><select data-stop="how"><option value="written">In writing / online</option><option value="oral">By phone (oral)</option></select></div>
  </div>
  <div class="result" data-stop-result></div>
</div>`;
  }

  function fmtDate(d) { return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }); }
  function addYears(d, n) { const x = new Date(d); x.setFullYear(x.getFullYear() + n); return x; }
  function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function addMonths(d, n) { const x = new Date(d); x.setMonth(x.getMonth() + n); return x; }

  function bindTools() {
    // 1. negotiability
    const negBoxes = [...$app.querySelectorAll("[data-neg]")];
    const negOut = $app.querySelector("[data-neg-result]");
    const updNeg = () => {
      const missing = NEG_CHECKS.filter((c) => !negBoxes.find((b) => b.dataset.neg === c.k).checked);
      if (!missing.length) {
        negOut.className = "result ok";
        negOut.innerHTML = `<h4>Likely a negotiable instrument (§ 3-104)</h4><p>It can be negotiated by indorsement/delivery, and a good-faith purchaser may become a holder in due course (§ 3-302) — taking free of most defenses. If you are the <em>signer</em>, that is the risk you're accepting; if you're the <em>recipient</em>, that's the protection you're getting. Consumer notes arranged by a seller must carry the FTC Holder notice (16 C.F.R. § 433.2), which prevents HDC status.</p>`;
      } else {
        negOut.className = "result bad";
        negOut.innerHTML = `<h4>Not negotiable as described</h4><p>Missing: <ul>${missing.map((m) => `<li>${esc(m.label)} <span class="muted">(${esc(m.cite)})</span></li>`).join("")}</ul>It may still be an enforceable <em>contract</em> — but it can't be transferred free of defenses, and no one can be an HDC of it. If the only item missing is 'to order/bearer' and the document is a check drawn on a bank, it is still negotiable under § 3-104(c).</p>`;
      }
    };
    negBoxes.forEach((b) => b.addEventListener("change", updNeg));
    updNeg();

    // 2. indorsement builder
    const inEls = Object.fromEntries([...$app.querySelectorAll("[data-in]")].map((e) => [e.dataset.in, e]));
    const inOut = $app.querySelector("[data-in-result]");
    const updIn = () => {
      const name = inEls.name.value.trim() || "[Your Name]";
      const acct = inEls.acct.value.trim();
      const to = inEls.to.value.trim() || "[Transferee Name]";
      const a = inEls.action.value;
      let text = "", note = "", cls = "result ok", warn = "";
      if (a === "deposit") {
        text = `For deposit only${acct ? ` to account #••••${acct}` : ""}\n${name}`;
        note = `A <strong>restrictive indorsement</strong> (§ 3-206). Any bank that handles the check must apply it to your account; otherwise it faces conversion liability. The strongest protection if the check is lost between here and the bank.`;
        if (!acct) warn = "Tip: adding the account number narrows the restriction further.";
      } else if (a === "mobile") {
        text = `For mobile deposit only${acct ? ` at [Bank] acct ••••${acct}` : ""}\n${name}`;
        note = `Most banks require this wording under their Reg CC remote-deposit-capture agreements. It prevents the paper original from being deposited again elsewhere and shifts the double-deposit loss away from your bank (12 C.F.R. § 229.34(f)). Keep the paper 14+ days, then destroy it.`;
      } else if (a === "cash") {
        text = `${name}`;
        note = `A <strong>blank indorsement</strong> (§ 3-205(b)) turns the check into bearer paper — anyone holding it can cash it. Sign <em>only</em> at the teller window, never in advance.`;
        cls = "result";
      } else if (a === "transfer") {
        text = `Pay to the order of ${to}\n${name}`;
        note = `A <strong>special indorsement</strong> (§ 3-205(a)): only ${esc(to)} can negotiate it further. You become an <strong>indorser</strong> — if the check bounces, ${esc(to)} can collect from you after timely notice of dishonor (§ 3-415), and you give transfer warranties (§ 3-416). Many banks refuse third-party checks as policy.`;
        cls = "result";
      } else {
        text = `Pay to the order of ${to}, without recourse\n${name}`;
        note = `A <strong>qualified indorsement</strong> (§ 3-415(b)) disclaims your obligation to pay if the check is dishonored. You <em>still</em> make transfer warranties (§ 3-416) — that the check is genuine, unaltered, and you're entitled to enforce it. Expect the transferee (and their bank) to be reluctant.`;
        cls = "result";
      }
      $app.querySelector('[data-vis="payee"]').textContent = name;
      $app.querySelector('[data-vis="indorse"]').textContent = text;
      inOut.className = cls;
      inOut.innerHTML = `<h4>What this indorsement does</h4><p>${note}</p>${warn ? `<p class="small muted">${warn}</p>` : ""}`;
    };
    Object.values(inEls).forEach((e) => e.addEventListener("input", updIn));
    updIn();

    // 3. loss allocation
    const lossEls = Object.fromEntries([...$app.querySelectorAll("[data-loss]")].map((e) => [e.dataset.loss, e]));
    const lossOut = $app.querySelector("[data-loss-result]");
    const updLoss = () => {
      const t = lossEls.type.value, r = lossEls.report.value, n = lossEls.negl.value === "yes";
      let title, body, cls = "result ok";
      const reportNote = {
        fast: "You reported promptly, so § 4-406 preclusion shouldn't apply.",
        mid: "Reporting after 30 days: if the same wrongdoer forged multiple items, you likely bear the ones paid after the 30-day window (§ 4-406(d)(2)). The bank can also shift loss it proves resulted from your delay (§ 4-406(d)(1)). Comparative negligence applies if the bank also lacked ordinary care (§ 4-406(e)).",
        late: "More than one year after the statement was available: your claim against the bank for a forged drawer signature or alteration is barred regardless of bank negligence (§ 4-406(f)). Check your account agreement — many shorten this period.",
        na: ""
      }[r];
      const neglNote = n ? " Because your negligence arguably contributed, § 3-406 lets the bank shift some or all of the loss to you (comparative fault)." : "";
      switch (t) {
        case "drawer":
          title = "Default: the BANK bears the loss";
          body = `A check with your forged signature is not <em>properly payable</em>; the bank must recredit your account (§ 4-401(a), § 3-403). The bank is presumed to know its customer's signature and generally can't pass the loss to the presenting bank (§ 3-418, § 3-417(a)(3)). ${reportNote}${neglNote}`;
          if (r === "late") cls = "result bad"; else if (r === "mid" || n) cls = "result";
          break;
        case "indorse":
          title = "Default: the bank that TOOK the check from the thief bears the loss";
          body = `The drawer's bank paid an item that wasn't properly payable and will recover from the depositary bank on presentment warranties (§ 4-208/§ 3-417). You, as payee, may sue the depositary bank directly for conversion (§ 3-420) if the check was delivered to you before it was stolen. The § 4-406 one-year bar does not apply to forged indorsements; the § 4-111 three-year limit does.${neglNote}`;
          if (n) cls = "result";
          break;
        case "alter":
          title = "Default: the bank may charge you only the ORIGINAL amount";
          body = `A fraudulent material alteration discharges you as to the altered terms, but the bank may enforce the check per its original tenor (§ 3-407(c), § 4-401(d)(1)). If you left blanks that were filled in, the bank may pay as completed (§ 4-401(d)(2)). ${reportNote}${neglNote}`;
          if (r === "late") cls = "result bad"; else if (r === "mid" || n) cls = "result";
          break;
        case "employee":
          title = "Default: YOU (the employer) bear the loss";
          body = `Under § 3-405, a fraudulent indorsement by an employee entrusted with responsibility for instruments is treated as effective — the employer was best positioned to prevent it. If the employee forged your <em>drawer</em> signature instead, start from the 'forged my signature' rule but expect § 3-406 negligence arguments about supervision. You can recover if the bank failed to exercise ordinary care (comparative). ${reportNote}`;
          cls = "result bad";
          break;
        case "impostor":
          title = "Default: YOU bear the loss";
          body = `§ 3-404: when an impostor induces you to issue a check, an indorsement in the payee's name is effective in favor of a good-faith payor or taker. Same for fictitious payees. The bank is liable only to the extent its failure to exercise ordinary care contributed. Your remedy is against the impostor (and a police report).`;
          cls = "result bad";
          break;
        case "counterfeit":
          title = "Default: YOU bear the loss";
          body = `Your bank gave provisional credit and may charge it back when the item is returned unpaid, at any time it's not finally paid (§ 4-214). You warranted the check's authenticity when you deposited it (§ 4-207). 'Funds available' under Reg CC (12 C.F.R. § 229.10) is not final payment. Remedy: pursue the person who gave you the check; report to the FTC/IC3.`;
          cls = "result bad";
          break;
      }
      lossOut.className = cls;
      lossOut.innerHTML = `<h4>${title}</h4><p>${body}</p><p class="small muted">Next steps: written notice to your bank immediately; affidavit of forgery; police report (mail theft is 18 U.S.C. § 1708); CFPB complaint if the bank refuses.</p>`;
    };
    Object.values(lossEls).forEach((e) => e.addEventListener("change", updLoss));
    updLoss();

    // 4. statute of limitations
    const solEls = Object.fromEntries([...$app.querySelectorAll("[data-sol]")].map((e) => [e.dataset.sol, e]));
    const solOut = $app.querySelector("[data-sol-result]");
    const updSol = () => {
      const t = solEls.type.value;
      const d = solEls.date.value ? new Date(solEls.date.value) : null;
      const lp = solEls.lastpay.value ? new Date(solEls.lastpay.value) : null;
      let html;
      if (!d) { html = `<h4>Enter the key date</h4><p class="small muted">Rules under uniform § 3-118; your state may differ.</p>`; }
      else if (t === "note-time") html = `<h4>Sue within 6 years after the due date: <strong>${fmtDate(addYears(d, 6))}</strong></h4><p>§ 3-118(a). If the note was accelerated, the 6 years runs from the accelerated due date.</p>`;
      else if (t === "note-demand") {
        const parts = [`<h4>Demand note (§ 3-118(b))</h4><p>If demand was made on ${fmtDate(d)}: sue within 6 years → <strong>${fmtDate(addYears(d, 6))}</strong>.</p>`];
        if (lp) parts.push(`<p>If NO demand is ever made: the claim is barred once 10 continuous years pass with no principal or interest paid → <strong>${fmtDate(addYears(lp, 10))}</strong> (based on last payment ${fmtDate(lp)}).</p>`);
        else parts.push(`<p class="small muted">Enter the last payment date to compute the 10-year no-demand cutoff.</p>`);
        html = parts.join("");
      }
      else if (t === "check") html = `<h4>Unaccepted draft/check (§ 3-118(c))</h4><p>Sue the drawer within 3 years after <em>dishonor</em> or 10 years after <em>issue</em>, whichever is earlier. If ${fmtDate(d)} is the dishonor date → <strong>${fmtDate(addYears(d, 3))}</strong>; if it's the issue date → outer limit <strong>${fmtDate(addYears(d, 10))}</strong>.</p>`;
      else if (t === "cashiers") html = `<h4>Cashier's/teller's/certified check (§ 3-118(d))</h4><p>Sue the issuing/accepting bank within 3 years after demand for payment was made: <strong>${fmtDate(addYears(d, 3))}</strong>.</p>`;
      else html = `<h4>Certificate of deposit (§ 3-118(e))</h4><p>6 years after demand for payment (or after maturity if later): <strong>${fmtDate(addYears(d, 6))}</strong>.</p>`;
      solOut.className = "result";
      solOut.innerHTML = html + `<p class="small muted">Claims against your own bank under Article 4 (e.g., wrongful payment): 3 years (§ 4-111). Forgery/alteration claims: see § 4-406's 1-year bar.</p>`;
    };
    Object.values(solEls).forEach((e) => e.addEventListener("input", updSol));
    updSol();

    // 5. stop payment
    const stopEls = Object.fromEntries([...$app.querySelectorAll("[data-stop]")].map((e) => [e.dataset.stop, e]));
    const stopOut = $app.querySelector("[data-stop-result]");
    const updStop = () => {
      const d = stopEls.date.value ? new Date(stopEls.date.value) : null;
      if (!d) { stopOut.className = "result"; stopOut.innerHTML = `<h4>Enter the date</h4><p class="small muted">§ 4-403(b): oral stop orders lapse after 14 days; written orders after 6 months, renewable in writing.</p>`; return; }
      const exp = stopEls.how.value === "oral" ? addDays(d, 14) : addMonths(d, 6);
      const daysLeft = Math.ceil((exp - new Date()) / 86400000);
      stopOut.className = daysLeft < 0 ? "result bad" : daysLeft < 21 ? "result" : "result ok";
      stopOut.innerHTML = `<h4>Expires ${fmtDate(exp)} (${daysLeft < 0 ? `${-daysLeft} days ago — renew or confirm in writing` : `${daysLeft} days left`})</h4><p>${stopEls.how.value === "oral" ? "Confirm an oral order in writing within 14 days to extend it to 6 months." : "Renew in writing before expiry if the check could still be presented (a check remains payable, though stale, after 6 months — § 4-404)."} A stop order does not cancel the underlying debt (§ 3-414); expect the payee to contact you.</p>`;
    };
    Object.values(stopEls).forEach((e) => e.addEventListener("input", updStop));
    updStop();
  }

  /* ---------- flashcards ---------- */
  function viewFlashcards() {
    return h`
<h1>Flashcards</h1>
<p class="muted">Click the card to flip. ${CARDS.length} cards.</p>
<div class="flash">
  <div class="flash-card" data-flash>
    <div class="flash-face front" data-front></div>
    <div class="flash-face back"><div data-back></div><div class="cite" data-cite></div></div>
  </div>
  <div class="flash-controls">
    <button data-fc="prev">← Prev</button>
    <span class="muted" data-fc-pos style="align-self:center"></span>
    <button data-fc="next">Next →</button>
    <button data-fc="shuffle" class="btn-ghost">Shuffle</button>
  </div>
</div>`;
  }
  function bindFlashcards() {
    let order = CARDS.map((_, i) => i);
    let i = Math.min(state.cardIndex || 0, CARDS.length - 1);
    const card = $app.querySelector("[data-flash]");
    const show = () => {
      const c = CARDS[order[i]];
      card.classList.remove("flipped");
      $app.querySelector("[data-front]").textContent = c.front;
      $app.querySelector("[data-back]").textContent = c.back;
      $app.querySelector("[data-cite]").textContent = c.cite;
      $app.querySelector("[data-fc-pos]").textContent = `${i + 1} / ${CARDS.length}`;
      state.cardIndex = i; save();
    };
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    $app.querySelector('[data-fc="prev"]').addEventListener("click", () => { i = (i - 1 + CARDS.length) % CARDS.length; show(); });
    $app.querySelector('[data-fc="next"]').addEventListener("click", () => { i = (i + 1) % CARDS.length; show(); });
    $app.querySelector('[data-fc="shuffle"]').addEventListener("click", () => { order.sort(() => Math.random() - 0.5); i = 0; show(); });
    show();
  }

  /* ---------- reference index ---------- */
  function buildIndex() {
    const rows = [];
    LESSONS.forEach((l) => {
      const x = l.crossRefs;
      (x.ucc || []).forEach((r) => rows.push({ kind: "UCC", cite: r.cite, name: "", note: r.note, lesson: l, url: uccLink(r.cite) }));
      (x.blacks || []).forEach((r) => rows.push({ kind: "Black's", cite: r.term, name: "", note: r.def, lesson: l, url: null }));
      (x.federal || []).forEach((r) => rows.push({ kind: "Federal", cite: r.cite, name: r.name, note: r.note, lesson: l, url: fedLink(r.cite) }));
    });
    window.MONEY_CONTRASTS.forEach((c) => c.law.forEach((r) => rows.push({ kind: /UCC/.test(r.cite) ? "UCC" : "Federal", cite: r.cite, name: "", note: r.note, part: "Part 2", url: uccLink(r.cite) || fedLink(r.cite) })));
    window.DEBT_SECTIONS.forEach((s) => s.cites.forEach((r) => rows.push({ kind: /UCC/.test(r.cite) ? "UCC" : /U\.S\.C|C\.F\.R|Const/.test(r.cite) ? "Federal" : "Case / Source", cite: r.cite, name: "", note: r.note, part: "Part 3", url: r.url })));
    return rows;
  }
  function viewReferences() {
    return h`
<h1>Cross-Reference Index</h1>
<p class="muted">Every citation used in the course. UCC and U.S. Code entries link to Cornell's Legal Information Institute; Black's entries are paraphrased definitions (11th ed.).</p>
<input class="search" type="search" placeholder="Search citations, terms, notes… (e.g., 3-302, holder, forgery, 12 U.S.C.)" data-ref-search>
<div class="pill-row">${["All", "UCC", "Black's", "Federal", "Case / Source"].map((k, i) => `<button class="pill ${i === 0 ? "active" : ""}" data-ref-kind="${k}">${k}</button>`).join("")}</div>
<table class="ref-table"><thead><tr><th>Type</th><th>Citation / Term</th><th>Description</th><th>Where</th></tr></thead><tbody data-ref-body></tbody></table>`;
  }
  function bindReferences() {
    const rows = buildIndex();
    const body = $app.querySelector("[data-ref-body]");
    const search = $app.querySelector("[data-ref-search]");
    let kind = "All";
    const render = () => {
      const q = search.value.trim().toLowerCase();
      const shown = rows.filter((r) => (kind === "All" || r.kind === kind) && (!q || `${r.cite} ${r.name} ${r.note}`.toLowerCase().includes(q)));
      body.innerHTML = shown.map((r) => `<tr>
        <td><span class="badge">${esc(r.kind)}</span></td>
        <td class="cite">${r.url ? `<a href="${r.url}" target="_blank" rel="noopener">${esc(r.cite)}</a>` : esc(r.cite)}</td>
        <td>${r.name ? `<strong>${esc(r.name)}</strong><br>` : ""}${esc(r.note)}</td>
        <td class="small">${r.lesson ? `<a href="#/lesson/${r.lesson.id}">${esc(r.lesson.title)}</a>` : `<a href="#/${r.part === "Part 2" ? "money" : "debt"}">${r.part}</a>`}</td>
      </tr>`).join("") || `<tr><td colspan="4" class="muted">No matches.</td></tr>`;
    };
    search.addEventListener("input", render);
    $app.querySelectorAll("[data-ref-kind]").forEach((b) => b.addEventListener("click", () => {
      kind = b.dataset.refKind;
      $app.querySelectorAll("[data-ref-kind]").forEach((x) => x.classList.toggle("active", x === b));
      render();
    }));
    render();
  }

  /* ---------- lesson bindings ---------- */
  function bindLesson(id) {
    // xref tabs
    $app.querySelectorAll(".xref-tabs button").forEach((b) => b.addEventListener("click", () => {
      const wrap = b.closest(".xref");
      wrap.querySelectorAll(".xref-tabs button").forEach((x) => x.classList.toggle("active", x === b));
      wrap.querySelectorAll("[data-panel]").forEach((p) => (p.style.display = p.dataset.panel === b.dataset.tab ? "" : "none"));
    }));
    // quiz
    const qs = QUIZZES[id] || [];
    const answered = {};
    $app.querySelectorAll(".q").forEach((qEl) => {
      const qi = +qEl.dataset.q;
      qEl.querySelectorAll(".choice").forEach((btn) => btn.addEventListener("click", () => {
        if (answered[qi] !== undefined) return;
        const pick = +btn.dataset.choice, right = qs[qi].answer;
        answered[qi] = pick === right;
        qEl.querySelectorAll(".choice").forEach((c) => {
          c.disabled = true;
          if (+c.dataset.choice === right) c.classList.add("correct");
          else if (+c.dataset.choice === pick) c.classList.add("wrong");
        });
        qEl.querySelector(".explain").style.display = "";
        const total = qs.length, done = Object.keys(answered).length, correct = Object.values(answered).filter(Boolean).length;
        $app.querySelector("[data-score]").textContent = done === total ? `Score: ${correct}/${total}` : `${done}/${total} answered`;
        if (done === total) { state.quiz[id] = { correct, total }; save(); }
      }));
    });
    // complete
    const btn = $app.querySelector("[data-complete]");
    btn.addEventListener("click", () => {
      state.completed[id] = !state.completed[id]; save();
      btn.textContent = state.completed[id] ? "Completed ✓ (click to reset)" : "Mark lesson complete";
      btn.classList.toggle("btn-primary", !state.completed[id]);
    });
  }

  /* ---------- router ---------- */
  function route() {
    const hash = location.hash.replace(/^#\/?/, "");
    const [name, arg] = hash.split("/");
    let html, after = null, active = name || "home";
    switch (name) {
      case "": case undefined: html = viewHome(); break;
      case "lessons": html = viewLessons(); break;
      case "lesson": html = viewLesson(arg); after = () => bindLesson(arg); active = "lessons"; break;
      case "money": html = viewMoney(); break;
      case "debt": html = viewDebt(); break;
      case "tools": html = viewTools(); after = bindTools; break;
      case "flashcards": html = viewFlashcards(); after = bindFlashcards; break;
      case "references": html = viewReferences(); after = bindReferences; break;
      default: html = `<h1>Not found</h1><p><a href="#/">Home</a></p>`;
    }
    $app.innerHTML = html;
    if (after) after();
    document.querySelectorAll(".nav a").forEach((a) => a.classList.toggle("active", a.dataset.route === active));
    window.scrollTo({ top: 0 });
  }
  window.addEventListener("hashchange", route);

  /* ---------- theme ---------- */
  const applyTheme = () => document.documentElement.setAttribute("data-theme", state.theme);
  document.getElementById("themeToggle").addEventListener("click", () => { state.theme = state.theme === "dark" ? "light" : "dark"; save(); applyTheme(); });
  applyTheme();
  route();
})();
