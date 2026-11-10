/* ============================================================
   THE HIRE GROUND, Career Readiness Quiz
   25 questions across 4 categories. One question at a time;
   grading happens on "Next Question" with red/green feedback
   and a 1-second pause before advancing.
   ============================================================ */

const QUIZ_CATEGORIES = [
  { name: "Career Planning", resource: "career-planning", blurb: "Knowing yourself, exploring careers, and setting goals." },
  { name: "Resumes", resource: "creating-a-resume", blurb: "Building a resume that gets you noticed." },
  { name: "Interviews", resource: "ace-the-interview", blurb: "Answering questions with confidence." },
  { name: "LinkedIn", resource: "linkedin-101", blurb: "Building your professional brand online." },
];

const QUIZ = [
  // ---------- Career Planning (7) ----------
  {
    cat: "Career Planning",
    q: "What does NOC stand for in the Canadian job market?",
    options: [
      "National Occupational Classification",
      "National Occupation Code",
      "New Ontario Careers",
      "National Office of Careers",
    ],
    answer: 0,
    explain: "The <strong>National Occupational Classification (NOC)</strong> is Canada's system for organizing and describing occupations with five-digit codes.",
  },
  {
    cat: "Career Planning",
    q: "Which TEER category usually requires a university degree?",
    options: ["TEER 0", "TEER 1", "TEER 3", "TEER 5"],
    answer: 1,
    explain: "<strong>TEER 1</strong> occupations usually require a university degree, for example, financial advisors and software engineers.",
  },
  {
    cat: "Career Planning",
    q: "Which pathway combines paid, on-the-job training with in-class learning?",
    options: ["University", "College", "Apprenticeship", "Workplace"],
    answer: 2,
    explain: "<strong>Apprenticeship</strong> combines paid on-the-job training with in-class learning to earn a trade certification, you earn while you learn.",
  },
  {
    cat: "Career Planning",
    q: "In a SMART goal, what does the \u201CM\u201D stand for?",
    options: ["Motivated", "Meaningful", "Manageable", "Measurable"],
    answer: 3,
    explain: "<strong>M = Measurable.</strong> You should be able to tell when you have achieved it, e.g. \u201Ccomplete 20 volunteer hours.\u201D",
  },
  {
    cat: "Career Planning",
    q: "Which of these is the best example of a SMART goal?",
    options: [
      "Get better at business",
      "Look into college programs sometime",
      "Research five college programs and attend two open houses by December",
      "Get some work experience eventually",
    ],
    answer: 2,
    explain: "Only the third option is <strong>Specific, Measurable, Achievable, Relevant, and Time-bound</strong>.",
  },
  {
    cat: "Career Planning",
    q: "What is Labour Market Information (LMI)?",
    options: [
      "A list of every job posting in Canada",
      "Data about jobs such as wages, openings, and demand for workers",
      "A government job application form",
      "A test that tells you which career to choose",
    ],
    answer: 1,
    explain: "<strong>LMI</strong> is data about jobs in Canada, wages, openings, and how much demand there is for a type of worker. It helps you choose based on facts, not just passion.",
  },
  {
    cat: "Career Planning",
    q: "According to the lesson, what is the MOST IMPORTANT part of career planning?",
    options: [
      "Picking one career and never changing your mind",
      "Researching options AND testing them through real experiences like job shadowing, co-op, or volunteering",
      "Choosing the highest-paying career you can find",
      "Waiting until after graduation to think about careers",
    ],
    answer: 1,
    explain: "Reading about a job is very different from seeing it up close. <strong>Trying things, shadowing, co-op, volunteering, informational interviews, is the fastest way to learn what fits.</strong>",
  },

  // ---------- Resumes (6) ----------
  {
    cat: "Resumes",
    q: "What is the most common and widely accepted resume format?",
    options: ["Functional", "Combination", "Chronological", "Infographic"],
    answer: 2,
    explain: "The <strong>chronological</strong> format lists experience from most recent to oldest, and it is the most common and widely accepted.",
  },
  {
    cat: "Resumes",
    q: "What is the recommended formula for a strong resume bullet point?",
    options: [
      "Job title + duties + dates",
      "Action verb + what you did + result or impact",
      "Skill + hobby + reference",
      "Objective + summary + signature",
    ],
    answer: 1,
    explain: "Strong bullets follow <strong>Action Verb + What You Did + Result or Impact</strong>, and add numbers whenever possible.",
  },
  {
    cat: "Resumes",
    q: "Which of these should NOT appear on a Canadian resume?",
    options: [
      "Your phone number",
      "Your education history",
      "Your Social Insurance Number (SIN)",
      "Your volunteer experience",
    ],
    answer: 2,
    explain: "Never put your <strong>SIN</strong> (or photos, age, marital status, or religion) on a Canadian resume.",
  },
  {
    cat: "Resumes",
    q: "What does ATS stand for?",
    options: [
      "Advanced Talent Search",
      "Applicant Tracking System",
      "Automated Test Score",
      "Application Time Stamp",
    ],
    answer: 1,
    explain: "An <strong>Applicant Tracking System</strong> is software many employers use to scan, sort, and rank resumes before a person reads them.",
  },
  {
    cat: "Resumes",
    q: "According to the lesson, what is THE MOST IMPORTANT part of resume writing?",
    options: [
      "Using a colourful, creative design",
      "Making it as long as possible",
      "Tailoring your resume for each application",
      "Listing every job you have ever had",
    ],
    answer: 2,
    explain: "<strong>Tailoring</strong>, swapping in keywords from the posting and reordering bullets, is far more effective than sending one generic resume everywhere.",
  },
  {
    cat: "Resumes",
    q: "How long should a student's resume usually be?",
    options: ["4\u20135 pages", "3 pages", "1\u20132 pages (usually 1)", "Half a page maximum"],
    answer: 2,
    explain: "Keep it to <strong>1\u20132 pages</strong>, one page for most students. A resume is a highlight reel, not a biography.",
  },

  // ---------- Interviews (6) ----------
  {
    cat: "Interviews",
    q: "What does the STAR method stand for?",
    options: [
      "Situation, Task, Action, Result",
      "Strengths, Talents, Achievements, References",
      "Speak, Think, Answer, Repeat",
      "Summary, Timeline, Analysis, Review",
    ],
    answer: 0,
    explain: "<strong>Situation, Task, Action, Result</strong>, a framework for telling a clear, complete story in behavioural interview questions.",
  },
  {
    cat: "Interviews",
    q: "Within how long should you send a thank-you email after an interview?",
    options: ["Within 24 hours", "Within a week", "Within a month", "You don't need to send one"],
    answer: 0,
    explain: "Send a short thank-you email <strong>within 24 hours</strong>, thank them, mention something specific, and restate your interest.",
  },
  {
    cat: "Interviews",
    q: "What is an elevator pitch?",
    options: [
      "A speech you give in an elevator at work",
      "A short 30\u201360 second summary of who you are and what you offer",
      "A list of your weaknesses",
      "A question you ask at the end of an interview",
    ],
    answer: 1,
    explain: "An elevator pitch is a <strong>30\u201360 second summary</strong> of who you are and what you offer, perfect for \u201CTell me about yourself.\u201D",
  },
  {
    cat: "Interviews",
    q: "According to the lesson, what is THE MOST IMPORTANT part of interview preparation?",
    options: [
      "Buying a new outfit",
      "Memorizing the company's founding date",
      "Practising your answers out loud, repeatedly",
      "Arriving exactly on time, not early",
    ],
    answer: 2,
    explain: "<strong>Confidence comes from repetition.</strong> Practise answers out loud, with a friend, teacher, or recorded, not just in your head.",
  },
  {
    cat: "Interviews",
    q: "In a first interview, which topic should you avoid asking about (unless the interviewer brings it up)?",
    options: [
      "What a typical day looks like in the role",
      "What qualities successful employees share",
      "Pay, vacation, or perks",
      "The next steps in the hiring process",
    ],
    answer: 2,
    explain: "Save <strong>pay, vacation, and perks</strong> for later in the process, asking too early can signal the wrong priorities.",
  },
  {
    cat: "Interviews",
    q: "If a Canadian interviewer asks an inappropriate question about a protected topic (e.g. family status), what should you do?",
    options: [
      "Answer it in full detail to be polite",
      "Walk out of the interview immediately",
      "Politely redirect to your availability and ability to meet the role's needs",
      "Make up an answer",
    ],
    answer: 2,
    explain: "You can <strong>politely redirect</strong>, e.g. \u201CI'd be happy to talk about my availability and how I can meet the needs of this role.\u201D",
  },

  // ---------- LinkedIn (6) ----------
  {
    cat: "LinkedIn",
    q: "What is the recommended formula for a strong LinkedIn headline?",
    options: [
      "Name | Age | Location",
      "Role/Identity | Key Skills or Interests | Goal",
      "Job title | Salary expectation | Start date",
      "School | Graduation year | GPA",
    ],
    answer: 1,
    explain: "Go beyond \u201CStudent\u201D: <strong>Role/Identity | Key Skills or Interests | Goal</strong>, with keywords recruiters actually search for.",
  },
  {
    cat: "LinkedIn",
    q: "How should you write your LinkedIn About section?",
    options: [
      "In third person, like a formal report",
      "As a single long paragraph with no breaks",
      "In first person, 3\u20134 short paragraphs telling your story",
      "Copied from someone else's profile",
    ],
    answer: 2,
    explain: "Write in <strong>first person (\u201CI\u201D)</strong>, 3\u20134 short paragraphs: who you are, your skills and accomplishments, and what you are looking for.",
  },
  {
    cat: "LinkedIn",
    q: "What should you always do when sending a LinkedIn connection request?",
    options: [
      "Send it with no message to save time",
      "Add a short, personal note explaining who you are",
      "Ask for a job in the first message",
      "Only connect with CEOs",
    ],
    answer: 1,
    explain: "Always add a <strong>short, personal note</strong> instead of the default message, mention where you met them or why you are reaching out.",
  },
  {
    cat: "LinkedIn",
    q: "According to the lesson, what is THE MOST IMPORTANT part of LinkedIn?",
    options: [
      "Having a perfect banner image",
      "Posting every single day",
      "Building your network with personalized connections",
      "Collecting as many endorsements as possible",
    ],
    answer: 2,
    explain: "<strong>Building your network is the most important part.</strong> A great profile with no network stays invisible.",
  },
  {
    cat: "LinkedIn",
    q: "Which should you NEVER share on LinkedIn, even with someone claiming to be a recruiter?",
    options: [
      "Your school name",
      "Your volunteer experience",
      "Your Social Insurance Number, banking details, or passwords",
      "Your career interests",
    ],
    answer: 2,
    explain: "Never share your <strong>SIN, banking details, or passwords</strong>. Real recruiters will never ask for these.",
  },
  {
    cat: "LinkedIn",
    q: "What is an informational interview?",
    options: [
      "A formal job interview for an internship",
      "A casual conversation to learn about someone's career path, not to ask for a job",
      "An interview conducted by an AI chatbot",
      "A test of your technical skills",
    ],
    answer: 1,
    explain: "An informational interview is a <strong>casual 15\u201320 minute chat to learn about a professional's career</strong>, never ask for a job directly.",
  },
];

const QUIZ_STATE = { index: 0, picked: null, locked: false, score: 0, catScores: {} };

function quizReset() {
  QUIZ_STATE.index = 0;
  QUIZ_STATE.picked = null;
  QUIZ_STATE.locked = false;
  QUIZ_STATE.score = 0;
  QUIZ_STATE.catScores = {};
  QUIZ_CATEGORIES.forEach((c) => { QUIZ_STATE.catScores[c.name] = { right: 0, total: 0 }; });
}

function renderQuizIntro() {
  return `
  <div class="page-head"><div class="wrap">
    <div class="page-head-inner">
      <div class="breadcrumb"><a href="#/">Home</a><span>\u203A</span><span>Career Readiness Quiz</span></div>
      <h1>What do you actually need to work on?</h1>
      <p class="lead">Answer 25 quick questions across career planning, resumes, interviews, and LinkedIn. You'll get a breakdown of your strengths, and exactly which resources to check out next.</p>
    </div>
  </div></div>
  <section class="block" style="padding-top:0"><div class="wrap">
    <div class="card quiz-intro-card">
      <div class="icon-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></div>
      <h2>How it works</h2>
      <p class="muted">One question at a time. Pick an answer, hit <strong>Next Question</strong>, and you'll instantly see whether you were right before moving on.</p>
      <div class="quiz-facts">
        <div><div class="big">25</div><div class="small">questions</div></div>
        <div><div class="big">4</div><div class="small">skill areas</div></div>
        <div><div class="big">~5</div><div class="small">minutes</div></div>
      </div>
      <button class="btn btn-orange btn-lg" id="quizStart">Start the Quiz <span class="arrow">\u2192</span></button>
    </div>
  </div></section>`;
}

function renderQuizQuestion() {
  const i = QUIZ_STATE.index;
  const item = QUIZ[i];
  const letters = ["A", "B", "C", "D"];
  const opts = item.options
    .map(
      (opt, k) => `
    <button class="quiz-opt" data-k="${k}" ${QUIZ_STATE.locked ? "disabled" : ""}>
      <span class="letter">${letters[k]}</span><span>${opt}</span>
    </button>`
    )
    .join("");
  return `
  <div class="page-head"><div class="wrap">
    <div class="page-head-inner">
      <div class="breadcrumb"><a href="#/">Home</a><span>\u203A</span><a href="#/quiz">Quiz</a><span>\u203A</span><span>Question ${i + 1}</span></div>
    </div>
  </div></div>
  <section class="block" style="padding-top:0"><div class="wrap">
    <div class="quiz-shell">
      <div class="quiz-top"><span>Question ${i + 1} of ${QUIZ.length}</span><span id="quizLiveScore">Score: ${QUIZ_STATE.score}</span></div>
      <div class="quiz-bar"><i style="width:${(i / QUIZ.length) * 100}%"></i></div>
      <span class="quiz-cat">${item.cat}</span>
      <h2 class="quiz-q">${item.q}</h2>
      <div class="quiz-opts" id="quizOpts">${opts}</div>
      <div class="quiz-explain" id="quizExplain"><strong>Why:</strong> ${item.explain}</div>
      <div class="quiz-foot">
        <span class="quiz-hint" id="quizHint">Pick an answer, then press Next Question.</span>
        <button class="btn btn-dark" id="quizNext" disabled>Next Question <span class="arrow">\u2192</span></button>
      </div>
    </div>
  </div></section>`;
}

function quizGrade() {
  const i = QUIZ_STATE.index;
  const item = QUIZ[i];
  QUIZ_STATE.locked = true;
  const picked = QUIZ_STATE.picked;
  const correct = picked === item.answer;
  QUIZ_STATE.catScores[item.cat].total++;
  if (correct) {
    QUIZ_STATE.score++;
    QUIZ_STATE.catScores[item.cat].right++;
  }
  document.querySelectorAll(".quiz-opt").forEach((btn) => {
    const k = parseInt(btn.dataset.k, 10);
    btn.disabled = true;
    if (k === item.answer) btn.classList.add("correct");
    else if (k === picked) btn.classList.add("wrong");
    else btn.classList.add("dim");
  });
  document.getElementById("quizExplain").classList.add("show");
  document.getElementById("quizLiveScore").textContent = "Score: " + QUIZ_STATE.score;
  document.getElementById("quizHint").textContent = correct
    ? "Correct, nice work."
    : "Not quite, the right answer is highlighted.";
  const nextBtn = document.getElementById("quizNext");
  nextBtn.textContent = i === QUIZ.length - 1 ? "See My Results \u2192" : "Next Question \u2192";
  nextBtn.disabled = false;
  // advance after 1 second
  setTimeout(() => {
    if (QUIZ_STATE.index === i) quizAdvance();
  }, 1000);
}

function quizAdvance() {
  if (QUIZ_STATE.index < QUIZ.length - 1) {
    QUIZ_STATE.index++;
    QUIZ_STATE.picked = null;
    QUIZ_STATE.locked = false;
    document.getElementById("app").innerHTML = renderQuizQuestion();
    quizBind();
    window.scrollTo({ top: 0 });
  } else {
    document.getElementById("app").innerHTML = renderQuizResults();
    window.scrollTo({ top: 0 });
    document.querySelectorAll('[id^="quizRetake"]').forEach((b) =>
      b.addEventListener("click", () => {
        quizReset();
        document.getElementById("app").innerHTML = renderQuizQuestion();
        quizBind();
        window.scrollTo({ top: 0 });
      })
    );
  }
}

function quizBind() {
  document.querySelectorAll(".quiz-opt").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (QUIZ_STATE.locked) return;
      document.querySelectorAll(".quiz-opt").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      QUIZ_STATE.picked = parseInt(btn.dataset.k, 10);
      document.getElementById("quizNext").disabled = false;
      document.getElementById("quizHint").textContent = "Locked in? Press Next Question to check.";
    });
  });
  document.getElementById("quizNext").addEventListener("click", () => {
    if (QUIZ_STATE.picked === null || QUIZ_STATE.locked) return;
    quizGrade();
  });
}

function renderQuizResults() {
  const total = QUIZ.length;
  const pct = Math.round((QUIZ_STATE.score / total) * 100);
  const circ = 2 * Math.PI * 80;
  const verdict =
    pct >= 85 ? "Career-ready. You're ahead of most students, keep sharpening the details."
    : pct >= 65 ? "Strong foundation. A little focused work will close the remaining gaps."
    : pct >= 45 ? "Getting there. Focus on the areas below and you'll level up fast."
    : "Perfect starting point. Work through the recommended resources and retake the quiz.";

  const catRows = QUIZ_CATEGORIES.map((c) => {
    const s = QUIZ_STATE.catScores[c.name];
    const p = s.total ? Math.round((s.right / s.total) * 100) : 0;
    const weak = p < 70;
    const res = RESOURCES.find((r) => r.slug === c.resource);
    return `
    <div class="cat-row ${weak ? "weak" : ""}">
      <div class="cat-head"><strong>${c.name}</strong><span>${s.right}/${s.total} \u00B7 ${p}%</span></div>
      <div class="cat-bar"><i style="width:${p}%"></i></div>
      ${weak ? `<div class="rec-list"><a class="card rec-card" href="#/resource/${res.slug}">
          <div class="icon-chip soft">${iconSvg(res.icon)}</div>
          <div><strong>Recommended: ${res.title}</strong><br><span class="muted">${res.subtitle}, ${res.readTime}</span></div>
          <span class="go">Read the guide \u2192</span>
        </a></div>` : `<p class="muted" style="margin:0.8rem 0 0;font-size:0.92rem;">Solid, ${c.blurb}</p>`}
    </div>`;
  }).join("");

  const weakCats = QUIZ_CATEGORIES.filter((c) => {
    const s = QUIZ_STATE.catScores[c.name];
    return s.total && s.right / s.total < 0.7;
  });

  return `
  <div class="page-head"><div class="wrap">
    <div class="page-head-inner">
      <div class="breadcrumb"><a href="#/">Home</a><span>\u203A</span><a href="#/quiz">Quiz</a><span>\u203A</span><span>Results</span></div>
      <h1>Here's where you stand.</h1>
    </div>
  </div></div>
  <section class="block" style="padding-top:0"><div class="wrap">
    <div class="quiz-shell">
      <div class="card result-score">
        <div class="score-ring">
          <svg width="190" height="190" viewBox="0 0 190 190">
            <circle cx="95" cy="95" r="80" fill="none" stroke="#f1e8d3" stroke-width="16"/>
            <circle cx="95" cy="95" r="80" fill="none" stroke="#f8a416" stroke-width="16" stroke-linecap="round"
              stroke-dasharray="${circ}" stroke-dashoffset="${circ - (circ * pct) / 100}"/>
          </svg>
          <div class="score-num">${pct}<small>%</small></div>
        </div>
        <h2>You got ${QUIZ_STATE.score} out of ${total} right</h2>
        <p class="muted" style="max-width:52ch;margin:0 auto;">${verdict}</p>
      </div>

      <h2 style="font-size:1.6rem;margin-bottom:0.4rem;">Breakdown by area</h2>
      <p class="muted">Anything under 70% is flagged for review, with the exact resource that covers it.</p>
      <div class="cat-results">${catRows}</div>

      ${weakCats.length === 0 ? `
        <div class="card center" style="background:var(--ink);color:#fff;border:none;">
          <h3 style="color:var(--orange);">Clean sweep.</h3>
          <p style="color:#cfc9bd;margin-bottom:1.5rem;">You scored 70%+ in every area. Try the Career Search Tool next to explore where these skills can take you.</p>
          <a href="#/careers" class="btn btn-orange">Explore Careers <span class="arrow">\u2192</span></a>
        </div>` : `
        <div class="card" style="background:var(--orange-soft);border-color:var(--orange);">
          <h3>Your focus list</h3>
          <p class="muted" style="margin-bottom:1.2rem;">Work through ${weakCats.length === 1 ? "this resource" : "these resources"} next, then retake the quiz to watch your score climb:</p>
          <div style="display:flex;gap:0.8rem;flex-wrap:wrap;">
            ${weakCats.map((c) => { const r = RESOURCES.find((x) => x.slug === c.resource); return `<a href="#/resource/${r.slug}" class="btn btn-dark btn-sm">${r.title}</a>`; }).join("")}
            <button class="btn btn-ghost btn-sm" id="quizRetake">Retake the Quiz</button>
          </div>
        </div>`}
      ${weakCats.length !== 0 ? `<div class="center" style="margin-top:1.6rem;"><button class="btn btn-ghost" id="quizRetake2">Retake the Quiz</button></div>` : ""}
    </div>
  </div></section>`;
}
