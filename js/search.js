/* ============================================================
   THE HIRE GROUND, Career Search Tool
   Database → Search → Profile Template → Dynamic Career Page.
   The frontend never hard-codes careers: everything renders
   from the CAREERS array in careers-data.js.
   ============================================================ */

const SALARY_BANDS = [
  { label: "Under $60K", test: (m) => m !== null && m < 60000 },
  { label: "$60K \u2013 $90K", test: (m) => m !== null && m >= 60000 && m < 90000 },
  { label: "$90K \u2013 $130K", test: (m) => m !== null && m >= 90000 && m < 130000 },
  { label: "$130K+", test: (m) => m !== null && m >= 130000 },
];

const careerById = (id) => (window.CAREERS || []).find((c) => c.id === id);

function fmtSalary(n) {
  if (n === null || n === undefined) return "Data unavailable";
  return "$" + Math.round(n).toLocaleString("en-CA");
}

function medianSalary(c) {
  return c.salary && typeof c.salary.median === "number" ? c.salary.median : null;
}

function norm(s) {
  return (s || "").toLowerCase().trim();
}

/* ---------- search scoring ----------
   exact name > alias exact > name starts-with > name contains >
   alias contains > category/description contains */
function scoreCareer(c, q) {
  const name = norm(c.careerName);
  const aliases = (c.aliases || []).map(norm);
  if (!q) return 1;
  if (name === q) return 1000;
  if (aliases.includes(q)) return 900;
  if (name.startsWith(q)) return 500;
  if (name.includes(q)) return 300;
  if (aliases.some((a) => a.startsWith(q))) return 200;
  if (aliases.some((a) => a.includes(q))) return 150;
  if (norm(c.category).includes(q)) return 80;
  if (norm(c.description).includes(q)) return 40;
  return 0;
}

function searchCareers(query) {
  const q = norm(query);
  return (window.CAREERS || [])
    .map((c) => ({ c, s: scoreCareer(c, q) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s || a.c.careerName.localeCompare(b.c.careerName))
    .map((r) => r.c);
}

function highlightMatch(name, q) {
  const nq = norm(q);
  if (!nq) return name;
  const idx = norm(name).indexOf(nq);
  if (idx < 0) return name;
  return name.slice(0, idx) + "<mark>" + name.slice(idx, idx + q.trim().length) + "</mark>" + name.slice(idx + q.trim().length);
}

/* ---------- filters ---------- */
const FILTER_STATE = { query: "", industry: "", education: "", salary: "", environment: "", type: "" };

function distinctValues(fn) {
  const s = new Set();
  (window.CAREERS || []).forEach((c) => fn(c).forEach((v) => v && s.add(v)));
  return [...s].sort();
}

function applyFilters() {
  let list = FILTER_STATE.query ? searchCareers(FILTER_STATE.query) : [...(window.CAREERS || [])];
  const f = FILTER_STATE;
  if (f.industry) list = list.filter((c) => c.category === f.industry);
  if (f.education) list = list.filter((c) => c.educationLevel === f.education);
  if (f.salary) {
    const band = SALARY_BANDS.find((b) => b.label === f.salary);
    list = list.filter((c) => band.test(medianSalary(c)));
  }
  if (f.environment) list = list.filter((c) => (c.workEnvironmentTags || []).includes(f.environment));
  if (f.type) list = list.filter((c) => (c.employmentType || []).includes(f.type));
  return list;
}

function outlookClass(outlook) {
  const o = norm(outlook);
  if (o.includes("very good") || o === "good") return "good";
  return "";
}

function careerCard(c) {
  const med = medianSalary(c);
  const outlook = c.jobDemand ? c.jobDemand.outlook : null;
  return `
  <a class="card career-card" href="/careers/${c.id}/">
    <span class="cc-cat">${c.category}</span>
    <h3>${c.careerName}</h3>
    <p class="cc-desc">${c.description}</p>
    <div class="cc-facts">
      ${med !== null ? `<span class="cc-fact">${fmtSalary(med)}/yr median</span>` : `<span class="cc-fact">Salary data unavailable</span>`}
      ${outlook ? `<span class="cc-fact ${outlookClass(outlook)}">Outlook: ${outlook}</span>` : ""}
      ${c.educationDuration ? `<span class="cc-fact">${c.educationDuration.summary.replace("Typical preparation: ", "")} prep</span>` : ""}
    </div>
    <span class="go">View profile \u2192</span>
  </a>`;
}

function renderCareersPage() {
  const industries = distinctValues((c) => [c.category]);
  const educations = distinctValues((c) => [c.educationLevel]);
  const environments = distinctValues((c) => c.workEnvironmentTags || []);
  const types = distinctValues((c) => c.employmentType || []);
  return `
  <div class="page-head"><div class="wrap">
    <div class="search-hero">
      <div class="blob blob-1"></div>
      <div class="breadcrumb" style="justify-content:center;"><a href="/">Home</a><span>\u203A</span><span>Career Search</span></div>
      <h1>What career are you interested in?</h1>
      <p class="lead" style="margin:0 auto;">Search real career profiles built from official Canadian sources, with the education pathway, salary data, and day-to-day reality for each one.</p>
      <div class="search-wrap">
        <div class="search-box">
          <div class="search-input-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
            <input id="careerSearch" type="text" placeholder="Try \u201Cdoctor\u201D, \u201Celectrician\u201D, or \u201Cdesign\u201D\u2026" autocomplete="off" aria-label="Search careers" />
            <button class="btn btn-dark btn-sm" id="careerGo">Search</button>
          </div>
          <div class="autocomplete" id="autocomplete" role="listbox" aria-label="Search suggestions"></div>
        </div>
      </div>
      <div class="cat-chips" id="catChips">
        <button class="chip" data-ind="">All industries</button>
        ${industries.map((i) => `<button class="chip" data-ind="${i}">${i}</button>`).join("")}
      </div>
    </div>
  </div></div>
  <section class="block" style="padding-top:2rem;"><div class="wrap">
    <div class="filters">
      <div class="filters-head"><h3>Filters</h3><button class="clear-btn" id="clearFilters">Clear all</button></div>
      <div class="filter-grid">
        <div class="filter-group"><label for="fIndustry">Industry</label>
          <select id="fIndustry"><option value="">All</option>${industries.map((i) => `<option>${i}</option>`).join("")}</select></div>
        <div class="filter-group"><label for="fEducation">Education required</label>
          <select id="fEducation"><option value="">All</option>${educations.map((e) => `<option>${e}</option>`).join("")}</select></div>
        <div class="filter-group"><label for="fSalary">Salary range</label>
          <select id="fSalary"><option value="">All</option>${SALARY_BANDS.map((b) => `<option>${b.label}</option>`).join("")}</select></div>
        <div class="filter-group"><label for="fEnv">Work environment</label>
          <select id="fEnv"><option value="">All</option>${environments.map((e) => `<option>${e}</option>`).join("")}</select></div>
        <div class="filter-group"><label for="fType">Career type</label>
          <select id="fType"><option value="">All</option>${types.map((t) => `<option>${t}</option>`).join("")}</select></div>
      </div>
    </div>
    <div class="results-meta"><h2 id="resultsTitle">Browse all careers</h2><p id="resultsCount"></p></div>
    <div class="career-grid" id="careerResults"></div>
  </div></section>`;
}

function paintResults() {
  const list = applyFilters();
  const box = document.getElementById("careerResults");
  const title = document.getElementById("resultsTitle");
  const count = document.getElementById("resultsCount");
  const active = FILTER_STATE.query || FILTER_STATE.industry || FILTER_STATE.education || FILTER_STATE.salary || FILTER_STATE.environment || FILTER_STATE.type;
  title.textContent = FILTER_STATE.query ? `Results for \u201C${FILTER_STATE.query}\u201D` : active ? "Filtered careers" : "Browse all careers";
  count.textContent = list.length === 1 ? "1 career" : `${list.length} careers`;
  box.innerHTML = list.length
    ? list.map(careerCard).join("")
    : `<div class="no-results" style="grid-column:1/-1;"><h3>No careers match those filters.</h3><p>Try a different search term or clear a filter, new careers are added regularly.</p></div>`;
}

function bindCareersPage() {
  const input = document.getElementById("careerSearch");
  const ac = document.getElementById("autocomplete");
  let acIndex = -1;
  let acItems = [];

  function closeAC() { ac.classList.remove("show"); ac.innerHTML = ""; acIndex = -1; }

  function openAC() {
    const q = input.value;
    const matches = searchCareers(q).slice(0, 7);
    acItems = matches;
    if (!matches.length) {
      ac.innerHTML = `<div class="ac-empty">No matches, press Search to see filtered results, or try a broader term.</div>`;
    } else {
      ac.innerHTML = matches.map((c, i) =>
        `<div class="ac-item" role="option" data-i="${i}"><span class="ac-name">${highlightMatch(c.careerName, q)}</span><span class="ac-cat">${c.category}</span></div>`
      ).join("");
      ac.querySelectorAll(".ac-item").forEach((el) => {
        el.addEventListener("mousedown", (e) => {
          e.preventDefault();
          navigateTo("/careers/" + acItems[parseInt(el.dataset.i, 10 + "/")].id);
        });
      });
    }
    ac.classList.add("show");
  }

  input.addEventListener("input", () => { acIndex = -1; openAC(); });
  input.addEventListener("focus", openAC);
  input.addEventListener("blur", () => setTimeout(closeAC, 150));
  input.addEventListener("keydown", (e) => {
    const items = ac.querySelectorAll(".ac-item");
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!items.length) return;
      acIndex = e.key === "ArrowDown" ? (acIndex + 1) % items.length : (acIndex - 1 + items.length) % items.length;
      items.forEach((el, i) => el.classList.toggle("hl", i === acIndex));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (acIndex >= 0 && acItems[acIndex]) navigateTo("/careers/" + acItems[acIndex].id + "/");
      else doSearch();
    } else if (e.key === "Escape") closeAC();
  });

  function doSearch() {
    FILTER_STATE.query = input.value.trim();
    closeAC();
    paintResults();
    document.getElementById("careerResults").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  document.getElementById("careerGo").addEventListener("click", doSearch);

  document.getElementById("catChips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll("#catChips .chip").forEach((c) => c.classList.remove("on"));
    chip.classList.add("on");
    FILTER_STATE.industry = chip.dataset.ind;
    document.getElementById("fIndustry").value = FILTER_STATE.industry;
    paintResults();
  });
  document.querySelector("#catChips .chip").classList.add("on");

  [["fIndustry", "industry"], ["fEducation", "education"], ["fSalary", "salary"], ["fEnv", "environment"], ["fType", "type"]]
    .forEach(([id, key]) => {
      document.getElementById(id).addEventListener("change", (e) => {
        FILTER_STATE[key] = e.target.value;
        if (key === "industry") {
          document.querySelectorAll("#catChips .chip").forEach((c) => c.classList.toggle("on", c.dataset.ind === e.target.value));
        }
        paintResults();
      });
    });

  document.getElementById("clearFilters").addEventListener("click", () => {
    Object.keys(FILTER_STATE).forEach((k) => (FILTER_STATE[k] = ""));
    input.value = "";
    ["fIndustry", "fEducation", "fSalary", "fEnv", "fType"].forEach((id) => (document.getElementById(id).value = ""));
    document.querySelectorAll("#catChips .chip").forEach((c) => c.classList.toggle("on", c.dataset.ind === ""));
    paintResults();
  });

  paintResults();
}

/* ---------- profile ---------- */
function findSource(c, keywords) {
  const srcs = c.sources || [];
  for (const kw of keywords) {
    const hit = srcs.find((s) => norm(s.organization + " " + s.title).includes(norm(kw)));
    if (hit) return hit;
  }
  return srcs[0] || null;
}

function sourceLine(src) {
  if (!src) return `<p class="src-line">Source: Data unavailable</p>`;
  return `<p class="src-line">Source: ${src.url ? `<a href="${src.url}" target="_blank" rel="noopener">${src.organization}</a>` : src.organization}${src.year ? ` \u00B7 ${src.year}` : ""}</p>`;
}

function levelPill(value) {
  const v = norm(value);
  const cls = v === "low" || v === "strong" ? "low" : v === "high" || v === "challenging" ? "high" : "moderate";
  return `<span class="level-pill ${cls}">${value}</span>`;
}

function renderCareerProfile(id) {
  const c = careerById(id);
  if (!c) {
    return `<section class="block"><div class="wrap"><div class="not-found">
      <h1>Career not found</h1><p class="muted">That profile doesn't exist (yet). New careers are added regularly.</p>
      <a href="/careers/" class="btn btn-dark">Back to Career Search</a></div></div></section>`;
  }
  const med = medianSalary(c);
  const salarySrc = findSource(c, ["job bank", "statistics canada"]);
  const demandSrc = findSource(c, ["job bank"]);
  const eduSrc = findSource(c, ["college", "university", "skilled trades", "ontario"]);

  // salary range bar (fixed 30k–200k scale)
  const SCALE_MIN = 30000, SCALE_MAX = 200000;
  let rangeBar = `<p class="explain">Data unavailable</p>`;
  if (c.salary && typeof c.salary.rangeLow === "number") {
    const lo = Math.max(SCALE_MIN, Math.min(SCALE_MAX, c.salary.rangeLow));
    const hi = Math.max(SCALE_MIN, Math.min(SCALE_MAX, c.salary.rangeHigh || c.salary.rangeLow));
    const left = ((lo - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100;
    const width = Math.max(2, ((hi - lo) / (SCALE_MAX - SCALE_MIN)) * 100);
    const mLeft = med !== null ? ((Math.max(SCALE_MIN, Math.min(SCALE_MAX, med)) - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100 : null;
    rangeBar = `
      <div class="range-bar"><div class="fill" style="left:${left}%;width:${width}%"></div>
      ${mLeft !== null ? `<div class="marker" style="left:${mLeft}%"></div>` : ""}</div>
      <div class="range-labels"><span>${fmtSalary(c.salary.rangeLow)}</span><span>${fmtSalary(c.salary.rangeHigh)}</span></div>`;
  }

  const pathway = (c.educationPathway || []).map((s) => `
    <div class="pw-step"><h3>${s.stage}</h3><p>${s.details}</p></div>`).join("");

  const qualBlock = (label, items, cls, icon) => items && items.length ? `
    <div class="qual-label">${label}</div>
    <ul class="qual-list ${cls}">${items.map((q) => `<li><span class="qi">${icon}</span><span>${q}</span></li>`).join("")}</ul>` : "";

  const related = (c.relatedCareers || []).map(careerById).filter(Boolean);

  return `
  <div class="profile-hero"><div class="wrap"><div class="profile-hero-inner">
    <div class="blob blob-1"></div>
    <a href="/careers/" class="back-link" style="color:var(--orange);">\u2190 Back to search</a>
    <h1>${c.careerName}</h1>
    <p class="desc">${c.description}</p>
    <div class="profile-tags">
      <span class="hot">${c.category}</span>
      ${c.noc ? `<span>NOC ${c.noc}</span>` : ""}
      ${(c.workEnvironmentTags || []).map((t) => `<span>${t}</span>`).join("")}
      ${(c.employmentType || []).map((t) => `<span>${t}</span>`).join("")}
    </div>
    <div class="quick-facts">
      <div class="qf"><div class="k">Median salary</div><div class="v">${med !== null ? fmtSalary(med) + "/yr" : "Data unavailable"}</div></div>
      <div class="qf"><div class="k">Job outlook</div><div class="v">${c.jobDemand ? c.jobDemand.outlook : "Data unavailable"}</div></div>
      <div class="qf"><div class="k">Education</div><div class="v">${c.educationLevel || "Data unavailable"}</div></div>
      <div class="qf"><div class="k">Stress level</div><div class="v">${c.stressLevel || "Data unavailable"}</div></div>
    </div>
  </div></div></div>

  <section class="block" style="padding-top:3rem;"><div class="wrap"><div class="profile-body">

    <div class="p-section">
      <h2>What does ${aOrAn(c.careerName)} do?</h2>
      <p class="sec-sub">${c.workEnvironment || ""}</p>
    </div>

    <div class="p-section">
      <h2>How to get there, step by step</h2>
      <p class="sec-sub">The typical route into this career in Ontario. Required steps are marked, everything else is common or optional.</p>
      <div class="pathway">${pathway}</div>
      <div style="margin-top:2rem;">
        ${qualBlock("Required qualifications", c.requiredQualifications, "req", "\u2713")}
        ${qualBlock("Common qualifications", c.commonQualifications, "com", "\u25CB")}
        ${qualBlock("Optional qualifications", c.optionalQualifications, "opt", "+")}
        ${c.licensing ? `<div class="tip-box"><strong>Licensing:</strong> ${c.licensing}</div>` : ""}
      </div>
      ${sourceLine(eduSrc)}
    </div>

    <div class="p-section">
      <h2>The numbers, at a glance</h2>
      <p class="sec-sub">Standardized indicators so you can compare careers fairly. Every figure traces back to its source.</p>
      <div class="indicators">
        <div class="ind-card wide">
          <h3><span class="dot"></span>Income</h3>
          <div class="salary-big">${med !== null ? fmtSalary(med) : "Data unavailable"}${med !== null ? `<span style="font-size:1rem;color:var(--muted);font-weight:500;"> median / year</span>` : ""}</div>
          ${c.salary && c.salary.rangeLow ? `<div class="salary-range">Typical range: ${fmtSalary(c.salary.rangeLow)} \u2013 ${fmtSalary(c.salary.rangeHigh)} \u00B7 ${c.salary.region || ""}${c.salary.year ? ` \u00B7 ${c.salary.year} data` : ""}</div>` : ""}
          ${rangeBar}
          ${sourceLine(salarySrc)}
        </div>
        <div class="ind-card">
          <h3><span class="dot"></span>Education time</h3>
          <div class="salary-big" style="font-size:1.5rem;">${c.educationDuration ? c.educationDuration.summary.replace("Typical preparation: ", "") : "Data unavailable"}</div>
          ${c.educationDuration ? `
            <ul class="flex-list">${c.educationDuration.breakdown.map((b) => `<li><span>\u2022</span><span>${b}</span></li>`).join("")}</ul>
            ${c.educationDuration.mandatoryNote ? `<p class="explain" style="margin-top:0.8rem;"><strong>Mandatory:</strong> ${c.educationDuration.mandatoryNote}</p>` : ""}
            ${c.educationDuration.optionalNote ? `<p class="explain"><strong>Optional:</strong> ${c.educationDuration.optionalNote}</p>` : ""}` : ""}
        </div>
        <div class="ind-card">
          <h3><span class="dot"></span>Job demand</h3>
          ${c.jobDemand ? `
            <div class="pill-row">${levelPill(c.jobDemand.outlook)}</div>
            <p class="explain">${c.jobDemand.trend || ""}</p>
            <p class="src-line">${c.jobDemand.region || ""}${c.jobDemand.period ? ` \u00B7 Outlook period ${c.jobDemand.period}` : ""}</p>
            ${sourceLine(demandSrc)}` : `<p class="explain">Data unavailable</p>`}
        </div>
        <div class="ind-card">
          <h3><span class="dot"></span>Stress level</h3>
          ${c.stressLevel ? `<div class="pill-row">${levelPill(c.stressLevel)}</div><p class="explain">${c.stressExplanation || ""}</p>` : `<p class="explain">Data unavailable</p>`}
        </div>
        <div class="ind-card">
          <h3><span class="dot"></span>Work-life balance</h3>
          ${c.workLifeBalance ? `<div class="pill-row">${levelPill(c.workLifeBalance)}</div><p class="explain">${c.workLifeBalanceExplanation || ""}</p>` : `<p class="explain">Data unavailable</p>`}
        </div>
        <div class="ind-card">
          <h3><span class="dot"></span>Flexibility</h3>
          ${c.flexibility ? `<ul class="flex-list">
            <li><span class="fk">Remote work</span><span>${c.flexibility.remote || "Data unavailable"}</span></li>
            <li><span class="fk">Scheduling</span><span>${c.flexibility.scheduling || "Data unavailable"}</span></li>
            <li><span class="fk">Freelance</span><span>${c.flexibility.freelance || "Data unavailable"}</span></li>
          </ul>` : `<p class="explain">Data unavailable</p>`}
        </div>
      </div>
    </div>

    <div class="p-section">
      <h2>What you'll need in your toolkit</h2>
      <p class="sec-sub">The abilities employers look for, and how to start building them now.</p>
      <div class="skills-grid">
        <div class="skill-card tech"><h3>Technical skills</h3><div class="tag-cloud">${(c.technicalSkills || []).map((s) => `<span>${s}</span>`).join("") || "Data unavailable"}</div></div>
        <div class="skill-card"><h3>Transferable skills</h3><div class="tag-cloud">${(c.transferableSkills || []).map((s) => `<span>${s}</span>`).join("") || "Data unavailable"}</div></div>
      </div>
      <div class="prep-card">
        <h3>Recommended preparation <span style="font-weight:400;text-transform:none;letter-spacing:0;">(suggestions, not requirements)</span></h3>
        <div class="prep-cols">
          <div><h4>High-school courses</h4><ul>${(c.recommendedHighSchoolCourses || []).map((s) => `<li>${s}</li>`).join("")}</ul></div>
          <div><h4>Experiences & activities</h4><ul>${(c.recommendedPreparation || []).map((s) => `<li>${s}</li>`).join("")}</ul></div>
        </div>
      </div>
    </div>

    <div class="p-section">
      <h2>What a typical day actually looks like</h2>
      <p class="sec-sub">Concrete responsibilities, not one person's story, but the common core of the job.</p>
      <ul class="task-list">${(c.commonTasks || []).map((t) => `<li>${t}</li>`).join("")}</ul>
      ${c.careerProgression && c.careerProgression.length ? `
        <h3 style="margin-top:2.2rem;">Where it can lead</h3>
        <ul class="task-list">${c.careerProgression.map((t) => `<li>${t}</li>`).join("")}</ul>` : ""}
    </div>

    ${related.length ? `
    <div class="p-section">
      <h2>If you're interested in ${c.careerName}, also explore</h2>
      <div class="related-grid" style="margin-top:1.6rem;">
        ${related.map((r) => `
          <a class="card related-card" href="/careers/${r.id}/">
            <span class="cc-cat">${r.category}</span><h3>${r.careerName}</h3>
            <span class="go" style="font-size:0.9rem;">View profile \u2192</span>
          </a>`).join("")}
      </div>
    </div>` : ""}

    <div class="p-section">
      <h2>Where this information comes from</h2>
      <p class="sec-sub">Every salary, outlook, and education figure above traces back to one of these sources. Figures change, always check the original for the latest data.</p>
      <div class="sources-list">
        ${(c.sources || []).map((s) => `
          <div class="source-item">
            <div><span class="s-org">${s.organization}</span>, ${s.title}<br>
            ${s.url ? `<a href="${s.url}" target="_blank" rel="noopener">${s.url}</a>` : ""}</div>
            ${s.year ? `<span class="s-year">${s.year}</span>` : ""}
          </div>`).join("") || `<p class="explain">Data unavailable</p>`}
      </div>
      <div class="data-note">Salary figures are shown in Canadian dollars and reflect the region and data year listed. Job outlook ratings describe the cited source's assessment for the stated period, they are not predictions beyond what the source supports. Where Ontario-specific data was unavailable, the region is noted on the figure.</div>
    </div>

  </div></div></div></section>`;
}

function aOrAn(name) {
  return /^[aeiou]/i.test(name.trim()) ? "an " + name : "a " + name;
}
