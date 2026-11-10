// Prerender for The Hire Ground — generates real static pages from the
// site's own render functions, so search engines see full HTML without
// needing to run JavaScript.
//
// How it works:
//  1. Loads js/config.js, js/resources.js, js/quiz.js, js/careers.js,
//     js/search.js and js/app.js in a Node vm with a minimal DOM stub
//     (the render functions only return HTML strings; nothing touches
//     the real DOM at load time, and route() is deferred because the
//     stub reports document.readyState === "loading").
//  2. Calls renderHome(), renderResourcesHub(), renderArticle(slug),
//     renderCareersPage(), renderCareerProfile(id), renderFaq() and
//     renderQuizIntro() — the exact functions the live site uses —
//     and writes the output into a full HTML page built from index.html.
//  3. Writes sitemap.xml listing every page.
//
// Run:  node tools/prerender.mjs        (from the repo root)
// Re-run after changing any content, copy, or career/resource data.
// The live site still runs as a single-page app: on load, js/app.js
// reads location.pathname, re-renders the same route, and binds the
// interactive bits (quiz, search, FAQ toggles, guide quizzes).
// Static pages are the crawlable fallback, not a second copy of the site.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://hiregroundofficial.github.io";
const LASTMOD = "2026-11-10";

// ---------- minimal DOM stub ----------
function makeEl() {
  return {
    innerHTML: "",
    textContent: "",
    classList: { toggle: () => {}, add: () => {}, remove: () => {}, contains: () => false },
    addEventListener: () => {},
    setAttribute: () => {},
    getAttribute: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    style: {},
    dataset: {},
    focus: () => {},
  };
}
const sandbox = {
  console,
  window: null, // set to sandbox itself below
  location: { hash: "", pathname: "/", search: "" },
  history: { pushState: () => {} },
  document: {
    readyState: "loading",
    title: "",
    getElementById: () => makeEl(),
    querySelector: () => makeEl(),
    querySelectorAll: () => [],
    addEventListener: () => {},
    createElement: () => makeEl(),
    body: makeEl(),
  },
};
sandbox.window = sandbox;
sandbox.window.scrollTo = () => {};
sandbox.window.addEventListener = () => {};
vm.createContext(sandbox);

for (const f of ["js/config.js", "js/resources.js", "js/quiz.js", "js/careers.js", "js/search.js", "js/app.js"]) {
  vm.runInContext(readFileSync(join(ROOT, f), "utf-8"), sandbox, { filename: f });
}

// render functions + data are lexical declarations in the vm context,
// so read them back with runInContext (they are not properties of the
// global object). CAREERS is the exception: careers.js assigns it to window.
const get = (name) => vm.runInContext(name, sandbox);
const renderHome = get("renderHome");
const renderResourcesHub = get("renderResourcesHub");
const renderArticle = get("renderArticle");
const renderCareersPage = get("renderCareersPage");
const renderCareerProfile = get("renderCareerProfile");
const renderFaq = get("renderFaq");
const renderQuizIntro = get("renderQuizIntro");
const careerCard = get("careerCard");
const RESOURCES = get("RESOURCES");
const FAQS = get("FAQS");
const CAREERS = sandbox.window.CAREERS;
if (!CAREERS || CAREERS.length !== 36) throw new Error(`expected 36 careers, got ${CAREERS?.length}`);
if (RESOURCES.length !== 4) throw new Error(`expected 4 guides, got ${RESOURCES.length}`);
if (FAQS.length !== 10) throw new Error(`expected 10 FAQs, got ${FAQS.length}`);

// ---------- page template ----------
const template = readFileSync(join(ROOT, "index.html"), "utf-8");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// The FAQPage block in the template (from the quick-wins work) belongs on /faq/, not the home page.
const faqLdMatch = template.match(/  <script type="application\/ld\+json">\n\{[\s\S]*?"@type": "FAQPage"[\s\S]*?\n  <\/script>\n/);
if (!faqLdMatch) throw new Error("FAQPage JSON-LD block not found in index.html template");
const faqLdBlock = faqLdMatch[0];
const faqLdJson = JSON.parse(faqLdBlock.replace(/  <script type="application\/ld\+json">\n/, "").replace(/\n  <\/script>\n$/, ""));

function articleLd({ title, description, path }) {
  return `  <script type="application/ld+json">\n${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Organization", name: "The Hire Ground", url: SITE + "/" },
    publisher: { "@type": "Organization", name: "The Hire Ground", url: SITE + "/" },
    mainEntityOfPage: SITE + path,
  }, null, 2)}\n  </script>\n`;
}

function buildPage({ path, title, description, mainHtml, extraLd = "" }) {
  const url = SITE + path;
  let html = template;
  // head: title / description / canonical / social
  html = html.replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(description)}" />`);
  html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(title)}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(description)}" />`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${esc(title)}" />`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${esc(description)}" />`);
  // JSON-LD: drop the template FAQPage block, add the page-specific one (if any)
  html = html.replace(faqLdBlock, extraLd);
  // main content: replace everything inside <main id="app">...</main>
  html = html.replace(/<main id="app" tabindex="-1">[\s\S]*?<\/main>/, `<main id="app" tabindex="-1">${mainHtml}</main>`);
  return html;
}

function writePage(relPath, html) {
  const out = join(ROOT, relPath);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log(`wrote ${relPath} (${html.length} bytes)`);
}

// ---------- page list ----------
const HOME_TITLE = "The Hire Ground | Your career starts somewhere. Start here.";
const HOME_DESC = "The Hire Ground is a student-run nonprofit helping young people understand careers, the workplace, and what it takes to get ahead. Free resources, a career readiness quiz, and an interactive career search tool.";
const pages = []; // {path, file, priority, changefreq}

function addPage(path, file, title, description, mainHtml, extraLd, priority, changefreq) {
  writePage(file, buildPage({ path, title, description, mainHtml, extraLd }));
  pages.push({ path, priority, changefreq });
}

// home
addPage("/", "index.html", HOME_TITLE, HOME_DESC, renderHome(), "", "1.0", "weekly");

// resources hub
addPage("/resources/", "resources/index.html",
  "Free Career Resources | The Hire Ground",
  "Free guides on resumes, interviews, LinkedIn, and career planning from The Hire Ground, a student-run nonprofit.",
  renderResourcesHub(), "", "0.9", "weekly");

// guides
for (const r of RESOURCES) {
  addPage(`/resources/${r.slug}/`, `resources/${r.slug}/index.html`,
    `${r.title} | The Hire Ground`,
    `A free The Hire Ground guide: ${r.title}. ${r.summary}`,
    renderArticle(r.slug),
    articleLd({ title: `${r.title} | The Hire Ground`, description: r.summary, path: `/resources/${r.slug}/` }),
    "0.8", "monthly");
}

// quiz
addPage("/quiz/", "quiz/index.html",
  "Career Readiness Quiz | The Hire Ground",
  "Take the free 25-question Career Readiness Quiz from The Hire Ground and get a personalized breakdown of your gaps.",
  renderQuizIntro(), "", "0.6", "monthly");

// careers hub — renderCareersPage() leaves #careerResults empty (JS fills it);
// for crawlers, pre-fill it with every career card.
{
  let hub = renderCareersPage();
  const cards = CAREERS.map((c) => careerCard(c)).join("");
  hub = hub.replace('<div class="career-grid" id="careerResults"></div>',
    `<div class="career-grid" id="careerResults">${cards}</div>`);
  addPage("/careers/", "careers/index.html",
    "Career Search Tool | The Hire Ground",
    "Search real career profiles built from official Canadian sources, with education pathways, salary data, and day-to-day reality.",
    hub, "", "0.9", "weekly");
}

// career profiles
for (const c of CAREERS) {
  addPage(`/careers/${c.id}/`, `careers/${c.id}/index.html`,
    `${c.careerName} | The Hire Ground`,
    `Explore the ${c.careerName} career profile: education path, salary data, and day-to-day reality, from official Canadian sources.`,
    renderCareerProfile(c.id), "", "0.8", "monthly");
}

// FAQ — FAQPage schema lives here, not on the home page
addPage("/faq/", "faq/index.html",
  "FAQ | The Hire Ground",
  "Answers about The Hire Ground: who we are, what we offer, and how to get involved.",
  renderFaq(), faqLdBlock, "0.7", "monthly");

// ---------- sitemap ----------
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url>\n    <loc>${SITE}${p.path}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`).join("\n")}\n</urlset>\n`;
writeFileSync(join(ROOT, "sitemap.xml"), sitemap);
console.log(`sitemap.xml: ${pages.length} URLs`);
console.log(`DONE — ${pages.length} pages`);
