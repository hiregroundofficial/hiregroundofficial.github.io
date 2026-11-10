/* ============================================================
   THE HIRE GROUND, app shell: router + pages
   Path routes: /  /resources/  /resources/:slug  /quiz/
                /careers/  /careers/:id  /faq/
   ============================================================ */

function iconSvg(name) {
  const paths = {
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2.3 4.7-4.7 2.3 2.3-4.7z" fill="currentColor" stroke="none"/>',
    doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/>',
    chat: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    grad: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
    bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.8.7 1 1.5 1 2.5h6c0-1 .2-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || ""}</svg>`;
}

/* ================= HOME ================= */
function renderHome() {
  const stats = STAT_DEFS.map((d) => {
    const v = SITE_STATS[d.key];
    return `<div class="stat"><div class="num ${v === null ? "pending" : ""}">${v === null ? "Coming soon" : fmtNum(v)}</div><div class="lbl">${d.label}</div></div>`;
  }).join("");
  const anyStats = STAT_DEFS.some((d) => SITE_STATS[d.key] !== null);

  return `
  <section class="hero"><div class="wrap">
    <div class="blob blob-1"></div><div class="blob blob-2"></div>
    <div class="hero-grid">
      <div class="hero-copy">
        <h1>Your career starts somewhere. <span class="hl">Start here.</span></h1>
        <p class="lead">The Hire Ground helps the next generation understand the world of work, exploring careers, building real skills, and feeling ready for what's next.</p>
        <div class="hero-ctas">
          <a href="/quiz/" class="btn btn-orange btn-lg">Take the Readiness Quiz <span class="arrow">\u2192</span></a>
          <a href="/careers/" class="btn btn-ghost btn-lg">Explore Careers</a>
        </div>
        <div class="hero-proof">
          <div class="avatar-stack" aria-hidden="true">
            <span style="background:#f8a416">T</span><span style="background:#111110">H</span><span style="background:#d98d04">G</span><span style="background:#6f665b">+</span>
          </div>
          <span>Built by students, for students, <strong>100% free</strong> resources.</span>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="hero-card-main">
          <h3>Career Readiness Quiz</h3>
          <p>Find out exactly what you need to work on, in about 5 minutes.</p>
          <div class="quiz-mini"><div style="flex:1;"><div class="qnum">QUESTION 8 OF 25 \u00B7 RESUMES</div><div class="quiz-progress"><i></i></div></div></div>
        </div>
        <div class="hero-card-float float-b"><div class="big">36</div><div class="small">career profiles<br>& growing</div></div>
        <div class="hero-card-float float-a"><div class="big">4</div><div class="small">free guides:<br>resumes, interviews & more</div></div>
        <span class="sticker hero-sticker">Find your ground</span>
      </div>
    </div>
  </div></section>

  <div class="marquee" aria-hidden="true"><div class="marquee-track">
    ${Array(2).fill(`<span>Resumes <b>\u2726</b> Interviews <b>\u2726</b> LinkedIn <b>\u2726</b> Career Planning <b>\u2726</b> Career Search <b>\u2726</b> Workshops <b>\u2726</b></span>`).join("")}
  </div></div>

  <section class="block" id="about"><div class="wrap">
    <div class="grid-2">
      <div>
        <h2>Getting started should be about more than finding a job.</h2>
        <p>At The Hire Ground, we believe that getting started in the working world should be more than just finding a job, it should be about finding opportunities, building confidence, and creating a path toward something bigger.</p>
        <p>We're here to make the world of work easier to understand and more accessible for the next generation. Through our content, resources, and real-world insights, The Hire Ground helps young people better understand careers, the workplace, and what it takes to get ahead.</p>
        <p>From exploring different career paths to understanding what employers are looking for, we break down the things that aren't always taught in the classroom and turn them into practical, useful information.</p>
      </div>
      <div class="about-visual">
        <div class="card about-card-a">
          <div class="icon-chip" style="margin-bottom:1.2rem;">${iconSvg("users")}</div>
          <h3>By students, for students</h3>
          <p class="muted" style="margin:0;">We're a nonprofit run by students who remember what it's like to have big questions about work, and nowhere simple to find answers.</p>
        </div>
        <div class="about-card-b"><div class="big">100%</div><p>free, every guide, quiz, and tool on this site</p></div>
      </div>
    </div>
  </div></section>

  <section class="block" style="background:var(--paper);border-block:1px solid var(--line);"><div class="wrap">
    <div class="center" style="max-width:680px;margin:0 auto 3.5rem;">
      <h2>Career education that actually makes sense</h2>
      <p class="lead" style="margin:0 auto;">The Hire Ground brings together career education, workplace knowledge, and real-world experiences to help people become more prepared for the opportunities ahead.</p>
    </div>
    <div class="grid-3">
      <div class="card wwd-card"><div class="icon-chip">${iconSvg("grad")}</div><h3>Career education</h3><p>Content designed to answer the questions people have about work, figuring out where to start, discovering what different careers actually look like, and understanding your options.</p></div>
      <div class="card wwd-card"><div class="icon-chip">${iconSvg("briefcase")}</div><h3>Workplace knowledge</h3><p>Learn how to present yourself professionally and understand the hiring process, from building a resume to nailing the interview to showing up on LinkedIn.</p></div>
      <div class="card wwd-card"><div class="icon-chip">${iconSvg("bulb")}</div><h3>Real-world experiences</h3><p>Workshops, mock interviews, networking, and professional interviews that turn classroom ideas into practical, useful information you can actually apply.</p></div>
    </div>
    <p class="center muted" style="margin-top:3rem;max-width:60ch;margin-inline:auto;">Our goal is simple: help people feel more prepared, more informed, and more confident when they enter the world of work.</p>
  </div></section>

  <section class="block"><div class="why"><div class="wrap" style="padding-top:clamp(3rem,6vw,5rem);padding-bottom:clamp(3rem,6vw,5rem);">
    <div class="why-grid">
      <div>
        <h2>You shouldn't have to figure this out alone.</h2>
        <p class="lead">The transition from school to the workplace can be overwhelming. There are resumes to build, interviews to navigate, applications to complete, and countless career paths to consider.</p>
        <p style="color:#b9b2a4;">We believe people shouldn't have to figure all of that out alone. The Hire Ground exists to bridge that gap, taking information that can feel complicated or intimidating and making it easier to understand and apply.</p>
      </div>
      <div>
        <div class="why-item"><div class="why-num">01</div><div><h3>Clear, not complicated</h3><p>We translate career and workplace topics into plain language, no jargon walls, no assumed knowledge.</p></div></div>
        <div class="why-item"><div class="why-num">02</div><div><h3>Relatable, not corporate</h3><p>Written by students who get it, for students living it. Real examples from school, part-time jobs, and first applications.</p></div></div>
        <div class="why-item"><div class="why-num">03</div><div><h3>Practical, not theoretical</h3><p>Checklists, scripts, templates, and step-by-step plans, things you can use the same day you read them.</p></div></div>
        <div class="why-item"><div class="why-num">04</div><div><h3>Free, forever</h3><p>Every resource, the full quiz, and the entire career database cost nothing. Career help shouldn't have a paywall.</p></div></div>
      </div>
    </div>
  </div></div></section>

  <section class="block mission"><div class="wrap">
    <blockquote>To help the next generation understand the world of work and <span class="hl">feel ready</span> to take their next step.</blockquote>
    <p class="attr">Whether you're exploring your first career, looking for your next opportunity, or simply trying to understand how the professional world works, The Hire Ground is here to help you find your ground.</p>
  </div></section>

  <section class="block statbar" style="padding:clamp(3rem,6vw,4.5rem) 0;"><div class="wrap">
    <div class="stat-grid">${stats}</div>
    ${anyStats ? "" : `<p class="stat-note">We're just getting started, official numbers coming soon.</p>`}
  </div></section>

  <section class="block"><div class="wrap">
    <div class="center" style="max-width:640px;margin:0 auto 3rem;">
      <h2>Pick your next step</h2>
    </div>
    <div class="grid-4">
      <a class="card explore-card" href="/quiz/"><span class="tag">5 min</span><div class="icon-chip soft" style="margin-bottom:1.2rem;">${iconSvg("target")}</div><h3>Career Readiness Quiz</h3><p class="muted">25 questions. Discover exactly what to work on next.</p><span class="go">Start the quiz \u2192</span></a>
      <a class="card explore-card" href="/careers/"><span class="tag">36 profiles</span><div class="icon-chip soft" style="margin-bottom:1.2rem;">${iconSvg("compass")}</div><h3>Career Search Tool</h3><p class="muted">Salaries, pathways, and day-to-day reality for real careers.</p><span class="go">Search careers \u2192</span></a>
      <a class="card explore-card" href="/resources/"><span class="tag">4 guides</span><div class="icon-chip soft" style="margin-bottom:1.2rem;">${iconSvg("doc")}</div><h3>Resources</h3><p class="muted">Free guides: resumes, interviews, LinkedIn, planning.</p><span class="go">Read the guides \u2192</span></a>
      <a class="card explore-card" href="/faq/"><span class="tag">10 answers</span><div class="icon-chip soft" style="margin-bottom:1.2rem;">${iconSvg("chat")}</div><h3>FAQ</h3><p class="muted">Who we are, what we offer, and how to get involved.</p><span class="go">Read the FAQ \u2192</span></a>
    </div>
  </div></section>

  <div class="cta-banner"><div class="cta-inner">
    <h2>Not sure where to start?</h2>
    <p>Take the 25-question Career Readiness Quiz and get a personalized breakdown, plus the exact resources that match your gaps.</p>
    <a href="/quiz/" class="btn btn-dark btn-lg">Take the Quiz <span class="arrow">\u2192</span></a>
  </div></div>`;
}

/* ================= FAQ ================= */
const FAQS = [
  ["What is The Hire Ground?", "The Hire Ground is a student-led organization that helps students explore careers, understand the world of work, and build practical skills for their future careers."],
  ["Who is The Hire Ground for?", "The Hire Ground is mainly for high school and postsecondary students who want to explore different careers, build professional skills, and learn more about the workplace."],
  ["What does The Hire Ground offer?", "We provide career resources, career exploration tools, professional interviews, educational content, workshops, networking opportunities, mock interviews, and other hands-on learning opportunities."],
  ["What is the Career Readiness Quiz?", "The Career Readiness Quiz is a 25-question quiz designed to help you identify areas of career development where you may need more preparation. Your results can also point you toward The Hire Ground resources that may be useful to you."],
  ["What is the Career Search Tool?", "The Career Search Tool lets you explore different careers and learn about things like education requirements, qualifications, income, work environment, job demand, skills, and other information about each career."],
  ["Does The Hire Ground tell me which career I should choose?", "No. We provide information to help you explore different options, but choosing a career is a personal decision. Our goal is to help you understand different careers and pathways so you can make informed decisions for yourself."],
  ["Are The Hire Ground resources free?", "Yes. Our online resources are free and designed to be accessible to students."],
  ["Can my school or organization work with The Hire Ground?", "Yes. Schools, professionals, and organizations can contact us about workshops, interviews, networking events, partnerships, and other career-development opportunities."],
  ["Where does The Hire Ground get its information?", "We use research, professional interviews, educational resources, and reliable career information sources. For career-specific information such as salary, employment outlook, and education requirements, we include the relevant source and data year where available."],
  ["How can I get involved with The Hire Ground?", "You can get involved by using our resources, completing the Career Readiness Quiz, exploring different careers, attending our events, following us on social media, sharing our content, or taking part in available opportunities."],
];

function renderFaq() {
  return `
  <div class="page-head"><div class="wrap"><div class="page-head-inner">
    <div class="blob blob-1"></div>
    <div class="breadcrumb"><a href="/">Home</a><span>\u203A</span><span>FAQ</span></div>
    <h1>Questions? Good. We like those.</h1>
    <p class="lead">Everything you might want to know about The Hire Ground, what we do, who we're for, and how to get involved.</p>
  </div></div></div>
  <section class="block" style="padding-top:1rem;"><div class="wrap">
    <div class="faq-list">
      ${FAQS.map(([q, a], i) => `
        <div class="faq-item${i === 0 ? " open" : ""}">
          <button class="faq-q" aria-expanded="${i === 0}"><span>${q}</span><span class="plus">+</span></button>
          <div class="faq-a"><p>${a}</p></div>
        </div>`).join("")}
    </div>
    <div class="center" style="margin-top:3rem;">
      <p class="muted">Still curious about something?</p>
      <a href="/resources/" class="btn btn-dark">Browse our resources <span class="arrow">\u2192</span></a>
    </div>
  </div></section>`;
}

/* ================= RESOURCES HUB ================= */
function renderResourcesHub() {
  const cards = RESOURCES.map((r) => `
    <a class="card resource-card" href="/resources/${r.slug}/">
      <div class="icon-chip soft">${iconSvg(r.icon)}</div>
      <div class="resource-card-copy">
        <div class="meta"><span>${r.level}</span><span>\u00B7</span><span>${r.readTime}</span></div>
        <h3>${r.title}</h3>
        <p class="muted">${r.summary}</p>
        <span class="go">Read the guide \u2192</span>
      </div>
    </a>`).join("");
  return `
  <div class="page-head"><div class="wrap"><div class="page-head-inner">
    <div class="blob blob-1"></div>
    <div class="breadcrumb"><a href="/">Home</a><span>\u203A</span><span>Resources</span></div>
    <h1>Everything you need to get career-ready.</h1>
    <p class="lead">Free, plain-language guides, plus a quiz that points you to exactly the right ones. Start anywhere; they all connect.</p>
  </div></div></div>
  <section class="block" style="padding-top:1rem;"><div class="wrap">
    <div class="resource-grid">
      ${cards}
    </div>
  </div></section>`;
}

/* ================= RESOURCE ARTICLE ================= */
function renderSection(b) {
  switch (b.t) {
    case "h": return `<h2>${b.text}</h2>`;
    case "p": return `<p>${b.html}</p>`;
    case "quote": return `<blockquote class="article-quote">${b.text}</blockquote>`;
    case "terms":
      return `<dl class="terms-grid">${b.items.map(([term, def]) =>
        `<div class="term-card"><dt>${term}</dt><dd>${def}</dd></div>`).join("")}</dl>`;
    case "table":
      return `<div style="overflow-x:auto;"><table class="cmp-table"><thead><tr>${
        b.head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${
        b.rows.map((row) => `<tr>${row.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    case "list": return `<ul>${b.items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
    case "tip": return `<div class="tip-box">${b.html}</div>`;
    case "steps":
      return `<ol class="steps">${b.items.map((s) =>
        `<li><strong>${s.title}</strong><p>${s.html}</p></li>`).join("")}</ol>`;
    case "checklist":
      return `<ul class="checklist">${b.items.map((i) =>
        `<li><span class="checkbox"></span><span class="check-text">${i}</span></li>`).join("")}</ul>`;
    case "links":
      return `<div class="res-links">${b.items.map((l) =>
        `<a href="${l.url}" target="_blank" rel="noopener"><span>${l.label}<small>${l.url}</small></span><span class="ext">\u2197</span></a>`).join("")}</div>`;
    default: return "";
  }
}

const GUIDE_QUIZ_META = {
  "career-planning": { category: "Career Planning", title: "Career Planning knowledge check" },
  "creating-a-resume": { category: "Resumes", title: "Resume knowledge check" },
  "ace-the-interview": { category: "Interviews", title: "Interview knowledge check" },
  "linkedin-101": { category: "LinkedIn", title: "LinkedIn 101 knowledge check" },
};

const GUIDE_QUIZ_EXTRAS = {
  "career-planning": [
    { q: "Which four main pathways are described for Ontario students after high school?", options: ["Apprenticeship, college, university, and workplace", "College, university, travel, and retirement", "Internship, sports, arts, and business", "Online learning, volunteering, travel, and work"], answer: 0, explain: "Ontario's four main pathways are <strong>apprenticeship, college, university, and the workplace</strong>. People can combine or switch between them." },
    { q: "What is the purpose of a Plan B in career planning?", options: ["To prove your first plan was wrong", "To provide a flexible backup route toward the same or a related goal", "To avoid setting deadlines", "To choose the easiest career"], answer: 1, explain: "A <strong>Plan B</strong> keeps you moving if circumstances or interests change. It can be another pathway to the same goal or a related goal." },
    { q: "How often does the guide recommend reviewing your career plan?", options: ["Only after graduation", "Every five years", "At least twice a year", "Only when a plan fails"], answer: 2, explain: "Review your plan <strong>at least twice a year</strong>, and also revisit it when you reach a milestone or your interests change." },
  ],
  "creating-a-resume": [
    { q: "Which section should usually appear first on a resume?", options: ["References", "Contact information", "Hobbies", "Salary expectations"], answer: 1, explain: "A resume should begin with clear, current <strong>contact information</strong>: your name, phone number, professional email, and city and province." },
    { q: "What is the best way to help an ATS recognize your qualifications?", options: ["Use decorative text boxes", "Add a photo", "Use standard headings and keywords from the job posting", "Submit the longest resume possible"], answer: 2, explain: "Use <strong>standard section headings and relevant keywords from the posting</strong>, with a simple layout that an Applicant Tracking System can read." },
    { q: "If you have not had a paid job, what can you include as experience?", options: ["Nothing", "Only family references", "School projects, volunteering, clubs, sports, or personal projects", "Made-up work history"], answer: 2, explain: "School projects, volunteering, clubs, sports, babysitting, tutoring, and personal projects can all demonstrate <strong>transferable skills</strong>." },
    { q: "What should you do before sending the final resume?", options: ["Add more colours", "Proofread it and ask someone you trust for feedback", "Remove all dates", "Save it with a casual file name"], answer: 1, explain: "<strong>Proofread carefully and get feedback</strong> from a teacher, counsellor, parent, or mentor before submitting." },
  ],
  "ace-the-interview": [
    { q: "What should you do if you need a moment to answer an interview question?", options: ["Guess immediately", "Pause briefly to think", "Change the subject", "End the interview"], answer: 1, explain: "It is perfectly fine to <strong>pause for a few seconds</strong> so you can give a thoughtful, organized answer." },
    { q: "Which structure works well for answering “Tell me about yourself”?", options: ["Past → Future → Present", "Present → Past → Future", "Strength → Weakness → Salary", "School → Hobbies → Family"], answer: 1, explain: "Use <strong>Present → Past → Future</strong>: who you are now, relevant experience, and why this opportunity interests you." },
    { q: "What should you bring to an in-person interview?", options: ["Extra copies of your resume, references, a pen, and a notepad", "Only your phone", "A gift for the interviewer", "Your banking information"], answer: 0, explain: "Bring <strong>extra resumes, your reference list, a pen, a notepad, and any requested ID</strong>." },
    { q: "What is a strong question to ask at the end of an interview?", options: ["How soon can I take vacation?", "What does a typical day look like in this role?", "Can I skip training?", "How little can I work?"], answer: 1, explain: "Asking <strong>what a typical day looks like</strong> shows genuine interest in the role and helps you assess the fit." },
  ],
  "linkedin-101": [
    { q: "Which facts should match between your resume and LinkedIn profile?", options: ["Only your email", "Dates, job titles, and schools", "Your profile colours", "The number of connections"], answer: 1, explain: "Keep <strong>dates, job titles, schools, and other factual details consistent</strong> so your professional story is credible." },
    { q: "Who is a good person to ask for a LinkedIn recommendation?", options: ["A stranger", "A teacher, coach, manager, or supervisor who knows your work", "Any celebrity", "Someone who has never worked with you"], answer: 1, explain: "Ask someone who knows your work, such as a <strong>teacher, coach, manager, or volunteer supervisor</strong>, for a specific recommendation." },
    { q: "What should you do after an informational interview?", options: ["Ask for a job immediately", "Send a thank-you message", "Post their private comments", "Remove the connection"], answer: 1, explain: "Always <strong>send a thank-you message</strong> after an informational interview and show appreciation for the person's time." },
    { q: "Which LinkedIn habit does the guide recommend each week?", options: ["Spend 10–15 minutes engaging and maintaining your profile", "Accept every request", "Rewrite your entire profile", "Post your password"], answer: 0, explain: "Spend <strong>10–15 minutes a week</strong> reacting thoughtfully, reconnecting with someone, or updating your profile." },
  ],
};

function getGuideQuiz(slug) {
  const meta = GUIDE_QUIZ_META[slug];
  if (!meta) return [];
  return QUIZ.filter((item) => item.cat === meta.category).concat(GUIDE_QUIZ_EXTRAS[slug] || []).slice(0, 10);
}

function renderGuideQuiz(slug) {
  const meta = GUIDE_QUIZ_META[slug];
  const questions = getGuideQuiz(slug);
  if (!meta || questions.length !== 10) return "";
  const letters = ["A", "B", "C", "D"];
  return `
    <section class="guide-quiz" data-guide-quiz="${slug}" aria-labelledby="guideQuizTitle">
      <div class="guide-quiz-head">
        <h2 id="guideQuizTitle">${meta.title}</h2>
        <p>Choose one answer for each question. Your score and all correct answers will be shown after you submit.</p>
      </div>
      <form class="guide-quiz-form">
        <div class="guide-quiz-list">
          ${questions.map((item, i) => `
            <fieldset class="guide-question" data-question="${i}">
              <legend><span>${i + 1}</span>${item.q}</legend>
              <div class="guide-options">
                ${item.options.map((opt, k) => `
                  <label class="guide-option">
                    <input type="radio" name="guide-${slug}-${i}" value="${k}">
                    <span class="letter">${letters[k]}</span><span>${opt}</span>
                  </label>`).join("")}
              </div>
              <div class="guide-answer" aria-live="polite"></div>
            </fieldset>`).join("")}
        </div>
        <div class="guide-quiz-actions">
          <p class="guide-quiz-status" role="status" aria-live="polite"></p>
          <button class="btn btn-dark btn-lg" type="submit">Submit answers</button>
        </div>
      </form>
      <div class="guide-result" tabindex="-1" aria-live="polite"></div>
    </section>`;
}

function guideScoreMessage(score) {
  if (score === 10) return "Perfect!";
  if (score === 9) return "Excellent!";
  if (score === 8) return "Good Job!";
  if (score === 7) return "Keep working";
  return "Needs Improvement";
}

function bindGuideQuiz(slug) {
  const quiz = document.querySelector(`[data-guide-quiz="${slug}"]`);
  if (!quiz) return;
  const questions = getGuideQuiz(slug);
  const form = quiz.querySelector(".guide-quiz-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selections = questions.map((item, i) => {
      const selected = form.querySelector(`input[name="guide-${slug}-${i}"]:checked`);
      return selected ? Number(selected.value) : null;
    });
    const unanswered = selections.filter((value) => value === null).length;
    const status = quiz.querySelector(".guide-quiz-status");
    if (unanswered) {
      status.textContent = `Please answer ${unanswered === 1 ? "the remaining question" : `all ${unanswered} remaining questions`} before submitting.`;
      quiz.querySelector(`.guide-question[data-question="${selections.indexOf(null)}"] input`).focus();
      return;
    }

    let score = 0;
    questions.forEach((item, i) => {
      const fieldset = quiz.querySelector(`.guide-question[data-question="${i}"]`);
      const labels = fieldset.querySelectorAll(".guide-option");
      labels.forEach((label, k) => {
        label.classList.toggle("correct", k === item.answer);
        label.classList.toggle("wrong", k === selections[i] && selections[i] !== item.answer);
      });
      fieldset.querySelectorAll("input").forEach((input) => { input.disabled = true; });
      const correct = selections[i] === item.answer;
      if (correct) score++;
      fieldset.classList.add(correct ? "is-correct" : "is-wrong");
      fieldset.querySelector(".guide-answer").innerHTML = `<strong>${correct ? "Correct." : `Correct answer: ${lettersForGuide(item.answer)}.`}</strong> ${item.explain}`;
    });

    status.textContent = "";
    const result = quiz.querySelector(".guide-result");
    result.innerHTML = `<div><span class="guide-result-score">${score}<small>/10</small></span><div><h3>${guideScoreMessage(score)}</h3><p>Your answers have been graded. Review every answer and explanation above.</p></div></div>`;
    result.classList.add("show");
    form.querySelector("button[type='submit']").remove();
    result.focus();
  });
}

function lettersForGuide(index) {
  return ["A", "B", "C", "D"][index] || "";
}

function renderArticle(slug) {
  const r = RESOURCES.find((x) => x.slug === slug);
  if (!r) return notFound("resource");
  const i = RESOURCES.indexOf(r);
  const prev = RESOURCES[(i - 1 + RESOURCES.length) % RESOURCES.length];
  const next = RESOURCES[(i + 1) % RESOURCES.length];
  return `
  <div class="article-hero"><div class="wrap"><div class="article-hero-inner">
    <div class="blob blob-1"></div>
    <div class="breadcrumb" style="margin-bottom:1.4rem;"><a href="/">Home</a><span>\u203A</span><a href="/resources/">Resources</a><span>\u203A</span><span>${r.title}</span></div>
    <h1>${r.title}</h1>
    <p class="subtitle">${r.subtitle}</p>
    <blockquote class="article-quote">${r.quote}</blockquote>
    <div class="article-meta"><span>${r.level}</span><span>${r.readTime}</span></div>
  </div></div></div>
  <div class="wrap"><div class="article-body">
    ${r.sections.map(renderSection).join("")}
    ${renderGuideQuiz(slug)}
    <div class="article-nav">
      <a href="/resources/${prev.slug}/"><span class="dir">\u2190 Previous guide</span><strong>${prev.title}</strong></a>
      <a href="/resources/${next.slug}/" class="next"><span class="dir">Next guide \u2192</span><strong>${next.title}</strong></a>
    </div>
  </div></div>`;
}

function bindArticle() {
  document.querySelectorAll(".checklist li").forEach((li) => {
    li.addEventListener("click", () => {
      li.classList.toggle("done");
      li.querySelector(".checkbox").textContent = li.classList.contains("done") ? "\u2713" : "";
    });
  });
  const activeQuiz = document.querySelector("[data-guide-quiz]");
  if (activeQuiz) bindGuideQuiz(activeQuiz.dataset.guideQuiz);
}

function notFound(what) {
  return `<section class="block"><div class="wrap"><div class="not-found">
    <h1>That ${what} wasn't found</h1><p class="muted">It may have moved, or it may not exist yet.</p>
    <a href="/" class="btn btn-dark">Back to Home</a></div></div></section>`;
}

/* ================= ROUTER ================= */
const app = document.getElementById("app");

function setActiveNav(route) {
  const links = document.querySelectorAll(".main-nav a");
  links.forEach((a) => {
    const href = a.getAttribute("href");
    const match =
      (route === "home" && href === "/") ||
      (route === "resources" && href.startsWith("/resources")) ||
      (route === "quiz" && href === "/quiz/") ||
      (route === "careers" && href.startsWith("/careers")) ||
      (route === "faq" && href === "/faq/");
    a.classList.toggle("active", !!match);
  });
}

const HOME_TITLE = "The Hire Ground | Your career starts somewhere. Start here.";
const HOME_DESCRIPTION = "The Hire Ground is a student-run nonprofit helping young people understand careers, the workplace, and what it takes to get ahead. Free resources, a career readiness quiz, and an interactive career search tool.";

function setPageMetadata(title, description) {
  document.title = title;
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) descriptionTag.setAttribute("content", description);
}

/* Canonical path for a route, e.g. "" (home), "resources", "resources/career-planning",
   "quiz", "careers", "careers/software-developer", "faq". Accepts a path ("/careers/")
   or a legacy hash ("#/careers"), and also reads the current URL when given nothing. */
function routePath(input) {
  let raw = "";
  if (typeof input === "string" && input) raw = input;
  else if (location.hash && location.hash.startsWith("#/")) raw = location.hash;
  else raw = location.pathname || "/";
  if (raw.startsWith("#/")) raw = raw.slice(1);
  if (raw.startsWith("#")) raw = raw.slice(1);
  raw = raw.replace(/^\/+/, "").replace(/\/+$/, "");
  if (raw === "index.html") raw = "";
  return raw;
}

function route(pathArg) {
  const path = routePath(pathArg);
  const parts = path ? path.split("/") : [""];
  // Legacy hash routes used singular names (#/career/:id, #/resource/:slug);
  // path routes use plural names (/careers/:id, /resources/:slug).
  if (parts[0] === "career") parts[0] = "careers";
  if (parts[0] === "resource") parts[0] = "resources";
  window.scrollTo({ top: 0 });

  if (path === "" || path === "/") {
    app.innerHTML = renderHome();
    setPageMetadata(HOME_TITLE, HOME_DESCRIPTION);
    setActiveNav("home");
  }
  else if (path === "resources") {
    app.innerHTML = renderResourcesHub();
    setPageMetadata("Free Career Resources | The Hire Ground", "Free guides on resumes, interviews, LinkedIn, and career planning from The Hire Ground, a student-run nonprofit.");
    setActiveNav("resources");
  }
  else if (parts[0] === "resources" && parts[1]) {
    const guide = RESOURCES.find((resource) => resource.slug === parts[1]);
    app.innerHTML = renderArticle(parts[1]);
    if (guide) setPageMetadata(`${guide.title} | The Hire Ground`, `A free The Hire Ground guide: ${guide.title}.`);
    setActiveNav("resources");
    bindArticle();
  }
  else if (path === "quiz") {
    quizReset();
    app.innerHTML = renderQuizIntro();
    setPageMetadata("Career Readiness Quiz | The Hire Ground", "Take the free 25-question Career Readiness Quiz from The Hire Ground and get a personalized breakdown of your gaps.");
    setActiveNav("quiz");
    const startBtn = document.getElementById("quizStart");
    if (startBtn) startBtn.addEventListener("click", () => {
      QUIZ_STATE.idx = 0;
      app.innerHTML = renderQuizQuestion();
      quizBind();
      window.scrollTo({ top: 0 });
    });
  }
  else if (path === "careers") {
    app.innerHTML = renderCareersPage();
    setPageMetadata("Career Search Tool | The Hire Ground", "Search real career profiles built from official Canadian sources, with education pathways, salary data, and day-to-day reality.");
    bindCareersPage();
    setActiveNav("careers");
  }
  else if (parts[0] === "careers" && parts[1]) {
    const career = careerById(parts[1]);
    app.innerHTML = renderCareerProfile(parts[1]);
    if (career) setPageMetadata(`${career.careerName} | The Hire Ground`, `Explore the ${career.careerName} career profile: education path, salary data, and day-to-day reality, from official Canadian sources.`);
    setActiveNav("careers");
  }
  else if (path === "faq") {
    app.innerHTML = renderFaq();
    setPageMetadata("FAQ | The Hire Ground", "Answers about The Hire Ground: who we are, what we offer, and how to get involved.");
    setActiveNav("faq");
    bindFaq();
  }
  else { app.innerHTML = notFound("page"); setActiveNav("home"); }
}

function bindFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    q.addEventListener("click", () => {
      const open = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((o) => {
        o.classList.remove("open");
        o.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!open) { item.classList.add("open"); q.setAttribute("aria-expanded", "true"); }
    });
  });
}

/* mobile menu */
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  mainNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") { mainNav.classList.remove("open"); navToggle.setAttribute("aria-expanded", "false"); }
  });
}

/*
 * Route internal links ourselves instead of relying on the browser to emit a
 * fragment-change event after every tap. Some embedded webviews update the
 * visible URL without reliably delivering that event, which left the current
 * page on screen. Keeping navigation in one delegated handler also covers
 * links rendered into #app after the initial load. Links use real paths
 * (e.g. /careers/software-developer/); legacy #/... links are converted.
 */
function pathFor(href) {
  if (typeof href !== "string") return "/";
  if (href.startsWith("#/")) href = href.slice(1);
  if (href === "#" || href === "") return "/";
  if (!href.startsWith("/")) return "/";
  return href.endsWith("/") ? href : href + "/";
}

function navigateTo(href) {
  const nextPath = pathFor(href);
  if (location.pathname !== nextPath) {
    try {
      history.pushState(null, "", nextPath);
    } catch (error) {
      location.pathname = nextPath;
    }
  }
  // Render synchronously as well as listening for popstate below. Some hosted
  // webviews update the URL but never deliver the event, which otherwise
  // leaves the current page on screen after a tap.
  route(nextPath);
}

document.addEventListener("click", (event) => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest("a[href^='/'], a[href^='#/']");
  if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
  const href = link.getAttribute("href");
  if (href.startsWith("http") || href.startsWith("#app")) return;
  event.preventDefault();
  navigateTo(href);
}, true);

window.addEventListener("hashchange", () => route());
window.addEventListener("popstate", () => route());

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", route, { once: true });
} else {
  route();
}
