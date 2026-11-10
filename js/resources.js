/* ============================================================
   THE HIRE GROUND, learning resources
   Reformatted for the web from the HireGrounds lesson PDFs.
   Block types: h | p | quote | terms | table | list | tip |
                steps | checklist | links
   ============================================================ */

const RESOURCES = [
  {
    slug: "career-planning",
    title: "Career Planning",
    subtitle: "Mapping Your Path",
    quote: "A career is a road trip, not a teleport: plan the route, but stay open to detours.",
    icon: "compass",
    readTime: "10 min read",
    level: "Start here",
    summary: "Learn how to understand yourself, explore real careers, read the job market, and set SMART goals, with a step-by-step plan you can actually follow.",
    sections: [
      { t: "h", text: "Why Is Career Planning Important?" },
      { t: "p", html: "A career plan is your personal roadmap for the work you want to do, the skills you need to get there, and the steps you will take along the way. Many students feel pressure to have their whole future figured out, but that is not the goal. The goal is to make informed choices today that keep your options open tomorrow." },
      { t: "p", html: "The choices you make now, which courses to take, which activities to join, which programs to apply to, shape the doors that are open to you later. Planning helps you spend your time and money wisely, avoid programs that are not a good fit, and discover options you may not have known existed. It is also motivating: it is much easier to work through a difficult class when you can see how it connects to something you care about." },

      { t: "h", text: "Key Terms" },
      { t: "terms", items: [
        ["Career", "The series of jobs, learning experiences, volunteer roles, and responsibilities that make up your working life. A career is bigger than any single job."],
        ["Career Path", "The route you take toward a career, including education, training, work experience, and a few unexpected turns."],
        ["Values", "The things that matter most to you in work and life, such as helping others, stability, creativity, independence, or income."],
        ["Strengths", "Skills and qualities you are naturally good at or have developed through practice."],
        ["SMART Goal", "A goal that is Specific, Measurable, Achievable, Relevant, and Time-bound."],
        ["NOC (National Occupational Classification)", "Canada's national system for organizing and describing occupations, using five-digit codes."],
        ["TEER Category", "A number from 0 to 5 in the NOC that shows the usual training, education, experience, and responsibilities needed for an occupation."],
        ["Labour Market Information (LMI)", "Data about jobs in Canada, such as wages, job openings, and how much demand there is for a type of worker."],
        ["Job Shadowing", "Spending a day or part of a day following a professional at work to see what the job is really like."],
        ["Mentor", "A more experienced person who offers guidance, advice, and support as you grow."],
        ["Plan B", "A backup route toward your goal, or toward a related goal, in case your first choice does not work out."],
      ]},

      { t: "h", text: "Know Yourself First" },
      { t: "p", html: "The best career decisions begin with self-knowledge. Before you research jobs, take time to reflect on who you are and what you want from work." },
      { t: "table", head: ["Area", "Questions to Ask Yourself", "Examples"], rows: [
        ["Interests", "What do I enjoy doing in my free time? Which classes do I look forward to?", "Building things, animals, gaming, art, sports, helping people"],
        ["Strengths", "What do people ask me for help with? What comes easily to me?", "Problem-solving, public speaking, organizing, drawing, math"],
        ["Values", "What do I want my work to give me? What would make a job feel worthwhile?", "Helping others, security, flexibility, creativity, teamwork"],
        ["Work Style", "Do I prefer working alone or with others? Indoors or outdoors?", "Hands-on work, desk work, leading a team"],
      ]},
      { t: "tip", html: "<strong>Tip:</strong> Online interest and personality quizzes can be a fun starting point for ideas, but they are not a verdict on your future. Use them to generate questions, then test the ideas in real life." },

      { t: "h", text: "Understanding Your Pathways" },
      { t: "p", html: "After high school, there is more than one way to build a career. In Ontario, the four main pathways are <strong>apprenticeship</strong>, <strong>college</strong>, <strong>university</strong>, and the <strong>workplace</strong>, and many people combine or switch between them over time. Every pathway is valid; the right one depends on your goals, learning style, and interests." },
      { t: "table", head: ["Pathway", "Description", "Best For"], rows: [
        ["Apprenticeship", "Combines paid, on-the-job training with in-class learning to earn a trade certification.", "Hands-on learners who want to earn while they learn"],
        ["College", "Programs of about one to three years that focus on practical, job-ready skills, often with work placements.", "People who want applied training for a specific career"],
        ["University", "Degree programs (bachelor's and beyond) that focus on theory, research, and critical thinking.", "Careers that require a degree, or people who enjoy in-depth study"],
        ["Workplace", "Entering the workforce directly and learning through on-the-job training and experience.", "People ready to start working or who want experience first"],
      ]},
      { t: "tip", html: "<strong>Tip:</strong> Many Ontario students build an Individual Pathways Plan (IPP) at school and can take co-operative education (co-op) placements to try out a field. Ask your guidance counsellor what is available at your school, since programs and requirements can change." },

      { t: "h", text: "Exploring Careers" },
      { t: "p", html: "Once you know yourself better, it is time to explore. Aim to look at a range of careers, including ones you have never heard of." },
      { t: "list", items: [
        "<strong>Online research:</strong> The Government of Canada's Job Bank lets you look up occupations to see typical duties, wages, education requirements, and job outlook.",
        "<strong>Talking to people:</strong> Ask family, teachers, coaches, and community members about their work, or request an informational interview through LinkedIn.",
        "<strong>Job shadowing and co-op:</strong> Spend time inside a real workplace to see what a typical day feels like.",
        "<strong>Volunteering, part-time work, and clubs:</strong> Try roles and activities that connect to your interests and build transferable skills at the same time.",
      ]},

      { t: "h", text: "Reading the Job Market" },
      { t: "p", html: "Labour market information helps you make choices based on facts as well as passion. In Canada, occupations are organized by the National Occupational Classification (NOC), and each one has a TEER category showing the usual level of training and education required." },
      { t: "table", head: ["TEER", "Usually Requires", "Example Occupations"], rows: [
        ["TEER 0", "Management experience and responsibilities", "Financial managers; marketing managers"],
        ["TEER 1", "A university degree", "Financial advisors; software engineers"],
        ["TEER 2", "A college diploma or apprenticeship of two or more years, or supervisory duties", "Medical laboratory technologists; web technicians"],
        ["TEER 3", "A college diploma or apprenticeship of under two years, or more than six months of on-the-job training", "Bakers and pastry chefs; dental assistants"],
        ["TEER 4", "A high school diploma, or several weeks of on-the-job training", "Retail salespersons; babysitters"],
        ["TEER 5", "A short work demonstration and no formal education", "Landscaping labourers; delivery drivers"],
      ]},
      { t: "p", html: "When you research an occupation, look for what the work involves, the education needed, typical wages, and the job outlook (whether demand is expected to grow, stay steady, or shrink). Wages and outlook vary by region and change over time." },

      { t: "h", text: "Setting SMART Goals" },
      { t: "p", html: "SMART goals turn big ideas into clear steps. Test every goal against the five letters below." },
      { t: "table", head: ["Letter", "What to Ask", "Example"], rows: [
        ["S, Specific", "What exactly do I want to accomplish?", "Learn what a nurse does daily"],
        ["M, Measurable", "How will I know I have achieved it?", "Complete 20 volunteer hours"],
        ["A, Achievable", "Is this realistic with my time and resources?", "Volunteer two hours a week"],
        ["R, Relevant", "Does it connect to my bigger career goals?", "Tests a health care career"],
        ["T, Time-bound", "What is my deadline?", "Finish by the end of the school year"],
      ]},
      { t: "p", html: "Here is how weak goals compare with SMART goals:" },
      { t: "table", head: ["Weak Goal", "SMART Goal"], rows: [
        ["Get better at business", "Join the school business club and complete one case competition by the end of Semester 2"],
        ["Look into college programs", "Research five college programs in my area of interest and attend two open houses by December"],
        ["Get some work experience", "Apply to at least six part-time jobs and complete a co-op placement or 30 volunteer hours this year"],
      ]},

      { t: "h", text: "Have a Plan B (and a Plan C)" },
      { t: "p", html: "Even great plans hit obstacles: a program may be full, a job may not be available, or your interests may change. That is normal. A Plan B is not a sign of failure, it is a smart way to stay flexible. Your backup might be a related program, a different pathway to the same career, or a first job that builds skills for the one you really want." },

      { t: "h", text: "How to Build Your Career Plan" },
      { t: "steps", items: [
        { title: "Reflect on Yourself", html: "Write down your interests, strengths, values, and preferred work style. Ask two or three people who know you well what they think your strengths are. Notice which activities make time fly." },
        { title: "Brainstorm Options", html: "List 8–10 careers or fields that connect to your reflections, even ones that seem unlikely. Then use Job Bank and the NOC to narrow the list to your top three to five." },
        { title: "Research and Test Your Options", html: "For each top choice, look up duties, education requirements, wages, and job outlook. Then get real experience through job shadowing, co-op, volunteering, part-time work, or an informational interview. <strong>This is the most important part.</strong> Reading about a job is very different from seeing it up close, trying things is the fastest way to learn what fits." },
        { title: "Choose a Pathway and Set SMART Goals", html: "Decide which pathway or pathways best support your top choices. Write two or three short-term goals (this semester) and one or two long-term goals (three to five years), and make each one SMART." },
        { title: "Create an Action Plan", html: "List the courses, skills, activities, and deadlines you need to meet your goals, such as program application dates. Add a Plan B, and share your plan with a counsellor, teacher, or mentor for feedback." },
        { title: "Review and Adjust", html: "Check your plan at least twice a year. Celebrate what you have completed, remove what no longer fits, and update your resume and LinkedIn profile with new experiences." },
      ]},
      { t: "tip", html: "<strong>And repeat!</strong> Your interests and the job market will both change over time. Revisit your plan at the start of each school year and whenever you reach a milestone, so it always reflects who you are now." },

      { t: "h", text: "Quick Checklist" },
      { t: "checklist", items: [
        "Have I reflected on my interests, strengths, values, and work style?",
        "Have I explored at least three careers using reliable sources like Job Bank?",
        "Have I tried at least one hands-on experience, such as job shadowing, volunteering, or an informational interview?",
        "Do I understand the pathways (apprenticeship, college, university, workplace) that lead to my top choices?",
        "Are my goals SMART, with clear deadlines?",
        "Do I have a Plan B and someone I can ask for advice?",
        "Do I have a date on my calendar to review my plan?",
      ]},

      { t: "h", text: "Other Resources" },
      { t: "links", items: [
        { label: "Job Bank, Government of Canada", url: "https://www.jobbank.gc.ca", note: "Look up occupations: duties, wages, education, and job outlook." },
        { label: "National Occupational Classification (NOC)", url: "https://noc.esdc.gc.ca", note: "Canada's system for organizing and describing occupations." },
        { label: "Indeed Career Advice (Canada)", url: "https://ca.indeed.com/career-advice", note: "Articles on planning, resumes, and interviews." },
      ]},
    ],
  },

  {
    slug: "creating-a-resume",
    title: "Creating a Resume",
    subtitle: "Your Highlight Reel",
    quote: "A resume is a highlight reel, not a biography.",
    icon: "doc",
    readTime: "10 min read",
    level: "Essential skill",
    summary: "What belongs on a resume, how to write bullet points that show results, how to beat applicant tracking systems, and the step-by-step build process.",
    sections: [
      { t: "h", text: "Why Is a Resume Important?" },
      { t: "p", html: "A resume is a one to two page document that summarizes your education, skills, and experience so that an employer can quickly decide whether you are worth interviewing. It is often the very first impression you make, sometimes before anyone has met you." },
      { t: "p", html: "A resume is your personal marketing tool. Employers may receive dozens or even hundreds of applications for one position, and they often spend only a short time on each resume. A clear, professional resume helps you stand out, shows that you are organized and detail-oriented, and highlights the skills that matter most for the job." },

      { t: "h", text: "Key Terms" },
      { t: "terms", items: [
        ["Resume", "A short, targeted summary of your education, skills, and work experience, usually 1–2 pages long."],
        ["Curriculum Vitae (CV)", "A longer, more detailed record of academic and professional history, mainly used for research, teaching, and academic positions."],
        ["Cover Letter", "A short letter sent with your resume that explains why you are a good fit for a specific role."],
        ["Action Verb", "A strong word that begins a bullet point and describes what you did (e.g., led, organized, designed)."],
        ["Transferable Skills", "Skills that apply to many jobs, such as communication, teamwork, and problem-solving."],
        ["Keywords", "Important words and phrases from a job posting (skills, tools, qualifications) that employers look for in a resume."],
        ["ATS (Applicant Tracking System)", "Software many employers use to scan, sort, and rank resumes before a person reads them."],
        ["Reference", "A person, such as a former supervisor or teacher, who can vouch for your skills and character."],
      ]},

      { t: "h", text: "Resume vs. CV" },
      { t: "p", html: "In Canada, a resume is what most employers expect for jobs, co-ops, and internships. A CV is typically used for academic, research, medical, or scientific roles and can be several pages long. If a posting asks for a CV, follow their instructions." },

      { t: "h", text: "Resume Formats" },
      { t: "table", head: ["Format", "Description", "Best For"], rows: [
        ["Chronological", "Lists experience from most recent to oldest. The most common and most widely accepted format.", "People with steady work or volunteer history"],
        ["Functional", "Organizes information by skill categories instead of by job. De-emphasizes dates.", "Career changers or people with gaps (some employers dislike it)"],
        ["Combination", "Starts with a skills summary, then lists experience in chronological order.", "People with varied skills and some experience"],
      ]},
      { t: "tip", html: "<strong>Tip:</strong> If you are a student or have limited experience, the chronological or combination format usually works best." },

      { t: "h", text: "What Goes on a Resume?" },
      { t: "p", html: "Most resumes include the following sections, in this general order:" },
      { t: "list", items: [
        "<strong>Contact Information:</strong> Full name, phone number, professional email address, city and province, and optionally a LinkedIn link.",
        "<strong>Summary or Objective (optional):</strong> 2–3 sentences describing who you are and what you offer.",
        "<strong>Education:</strong> School, program, and expected or completed graduation date. Students can add relevant courses or awards.",
        "<strong>Work Experience:</strong> Job title, employer, location, dates, and 3–4 bullet points describing your accomplishments.",
        "<strong>Volunteer and Extracurricular Experience:</strong> Clubs, sports, community service, and leadership roles.",
        "<strong>Skills:</strong> Technical skills (software, languages) and soft skills (teamwork, communication).",
        "<strong>Awards and Certifications:</strong> Honours, scholarships, and certificates such as First Aid/CPR or WHMIS.",
      ]},

      { t: "h", text: "What Should NOT Be on a Resume?" },
      { t: "list", items: [
        "Photos, age, marital status, or religion (not expected in Canada)",
        "Your Social Insurance Number (SIN) or full home address",
        "Unprofessional email addresses (e.g., coolgamer123@email.com)",
        "Salary expectations or reasons for leaving past jobs",
        "\u201CReferences available upon request\u201D (this is assumed)",
        "False or exaggerated information, it can cost you the job later",
      ]},

      { t: "h", text: "Writing Strong Bullet Points" },
      { t: "p", html: "Bullet points are the heart of your resume. Weak bullets list duties, while strong bullets show results. A helpful formula is: <strong>Action Verb + What You Did + Result or Impact</strong>. Whenever possible, add numbers (quantify) to make your achievements concrete." },
      { t: "table", head: ["Weak Bullet", "Strong Bullet"], rows: [
        ["Responsible for serving customers", "Served 50+ customers per shift in a fast-paced cafe while maintaining a 100% accurate cash balance"],
        ["Helped with the school club", "Organized 4 fundraising events as Club Treasurer, raising $1,200 for local charities"],
        ["Worked on a group project", "Collaborated with a team of 4 to design and present a marketing plan, earning the top grade in the class"],
        ["Did social media posts", "Created weekly Instagram content for a youth group, increasing followers by 35% in three months"],
      ]},
      { t: "h", text: "Examples of Action Verbs" },
      { t: "table", head: ["Category", "Verbs"], rows: [
        ["Leadership", "led, coordinated, managed, mentored, organized"],
        ["Communication", "presented, wrote, negotiated, taught, promoted"],
        ["Problem-Solving", "analyzed, improved, resolved, streamlined, developed"],
        ["Service", "assisted, supported, served, trained, volunteered"],
      ]},
      { t: "tip", html: "<strong>No experience? No problem!</strong> Everyone starts somewhere. If you have not had a job yet, include school projects, volunteering, sports, clubs, babysitting, tutoring, or personal projects. Employers of first-time workers want to see responsibility, reliability, and a willingness to learn." },

      { t: "h", text: "Resumes and ATS" },
      { t: "p", html: "Many employers use an Applicant Tracking System (ATS) to filter resumes. These programs scan for keywords that match the job posting. To make your resume ATS-friendly:" },
      { t: "list", items: [
        "Use standard section headings (Education, Work Experience, Skills)",
        "Include keywords from the job posting, worded the same way",
        "Use a simple layout: avoid text boxes, images, and complex tables",
        "Choose a clean, readable font such as Arial, Calibri, or Times New Roman (10–12 pt)",
        "Save and submit as a PDF or Word file, following the employer's instructions",
      ]},

      { t: "h", text: "How to Build a Resume" },
      { t: "steps", items: [
        { title: "Gather Your Information", html: "Start by making a \u201Cmaster list\u201D of everything you have done: jobs, volunteer work, clubs, sports, awards, certifications, and skills. Include dates, locations, and responsibilities. This list is not your resume, but it is the raw material you will pull from every time you apply." },
        { title: "Read the Job Posting", html: "Highlight the required skills, qualifications, and keywords in the posting. These tell you exactly what the employer wants to see." },
        { title: "Choose a Format and Template", html: "Select a chronological or combination layout and a clean template (Google Docs, Word, or the Government of Canada's Job Bank Resume Builder all work well). Keep margins around 0.5–1 inch and use consistent fonts, spacing, and bullet styles." },
        { title: "Write Your Sections", html: "Enter your contact information, education, and experience. Write 3–4 strong bullet points for each role using the Action Verb + Task + Result formula. Put the most relevant information first." },
        { title: "Tailor It", html: "Adjust your resume for each application. Swap in keywords from the posting, reorder bullets so the most relevant come first, and remove anything that does not support the role. <strong>This is the most important part.</strong> A tailored resume is far more effective than a generic one." },
        { title: "Proofread and Get Feedback", html: "Check for spelling, grammar, and formatting errors. Read it out loud, then ask a teacher, counsellor, parent, or mentor to review it. Save the final version as a PDF named professionally (e.g., FirstName_LastName_Resume.pdf)." },
      ]},
      { t: "tip", html: "<strong>And repeat!</strong> Update your resume every few months or after any new job, award, or project so it is always ready." },

      { t: "h", text: "Quick Checklist" },
      { t: "checklist", items: [
        "Is it 1–2 pages (1 page for most students)?",
        "Does it have a professional email and current contact information?",
        "Does every bullet start with an action verb?",
        "Did I include numbers and results where possible?",
        "Does it include keywords from the job posting?",
        "Is the formatting consistent and free of errors?",
      ]},

      { t: "h", text: "Other Resources" },
      { t: "links", items: [
        { label: "Job Bank Resume Builder", url: "https://www.jobbank.gc.ca/findajob/resume-builder", note: "Government of Canada tool for building a resume step by step." },
        { label: "Indeed Career Advice: Resumes & Cover Letters", url: "https://ca.indeed.com/career-advice/resumes-cover-letters", note: "Guides and examples for resumes and cover letters." },
      ]},
    ],
  },

  {
    slug: "ace-the-interview",
    title: "Ace the Interview",
    subtitle: "Answering Questions with Confidence",
    quote: "Confidence comes from preparation, not from luck.",
    icon: "chat",
    readTime: "10 min read",
    level: "Essential skill",
    summary: "Understand what interview questions are really asking, answer with the STAR method, handle body language and tricky questions, and follow up like a pro.",
    sections: [
      { t: "h", text: "Why Is Interview Preparation Important?" },
      { t: "p", html: "An interview is your chance to turn a piece of paper into a person. Your resume got you in the door, but the interview is where an employer decides whether you are someone they want on their team. Many people feel nervous, and that is completely normal." },
      { t: "p", html: "Employers use interviews to learn things a resume cannot show: how you communicate, how you think under pressure, and whether you would work well with others. Two candidates with identical resumes can have very different outcomes based solely on how they answer questions. The good news: interviews are more predictable than they seem, and the people who perform best are usually not the most naturally talented speakers, but the ones who practiced." },

      { t: "h", text: "Key Terms" },
      { t: "terms", items: [
        ["Interview", "A conversation, in person, by phone, or online, in which an employer learns about your skills, experience, and personality to decide if you are a good fit."],
        ["Behavioural Question", "A question that asks about a past situation (e.g., \u201CTell me about a time when\u2026\u201D) because past behaviour predicts future performance."],
        ["STAR Method", "A framework for answering behavioural questions: Situation, Task, Action, Result."],
        ["Elevator Pitch", "A short (30\u201360 second) summary of who you are and what you offer."],
        ["Panel Interview", "An interview where you meet with several interviewers at the same time."],
        ["Follow-Up", "A thank-you message sent after the interview to show appreciation and reinforce your interest."],
        ["Body Language", "Non-verbal communication such as posture, eye contact, and facial expressions."],
      ]},

      { t: "h", text: "Types of Interviews" },
      { t: "table", head: ["Type", "Description", "Tips"], rows: [
        ["Phone / Screening", "A short call (15\u201330 min) to confirm your basic fit for the role.", "Find a quiet spot, keep your resume in front of you, and smile (it changes your tone)."],
        ["Virtual (Video)", "Held on Zoom, Teams, or similar platforms.", "Test your camera, microphone, and internet beforehand; use a tidy, well-lit background."],
        ["In-Person", "Face-to-face at the workplace.", "Arrive 10\u201315 minutes early and bring copies of your resume and reference list."],
        ["Panel", "Several interviewers ask questions at once.", "Make eye contact with everyone, not just the person asking."],
        ["Group", "Several candidates are interviewed together.", "Be confident but respectful, and let others speak too."],
      ]},

      { t: "h", text: "Answering with the STAR Method" },
      { t: "p", html: "Behavioural questions are very common, especially for students and first-time job seekers. The STAR method helps you tell a clear, complete story in about 1\u20132 minutes:" },
      { t: "table", head: ["Letter", "What to Say"], rows: [
        ["S: Situation", "Set the scene. Where were you and what was happening?"],
        ["T: Task", "What was your responsibility or goal?"],
        ["A: Action", "What did YOU do? Focus on your own steps (use \u201CI,\u201D not just \u201Cwe\u201D)."],
        ["R: Result", "What happened? Include numbers or lessons learned when possible."],
      ]},
      { t: "h", text: "STAR Example" },
      { t: "p", html: "<strong>Question:</strong> \u201CTell me about a time you worked in a team.\u201D<br><strong>Situation:</strong> In Grade 11, my group was assigned a science presentation, but two members were struggling to agree on a topic.<br><strong>Task:</strong> As group lead, I needed to get everyone aligned before the deadline.<br><strong>Action:</strong> I organized a short meeting, had each person share one idea, and helped the group vote. I then split tasks based on everyone's strengths.<br><strong>Result:</strong> We finished two days early and received a 92%. I learned that listening first makes teamwork easier." },

      { t: "h", text: "Common Interview Questions" },
      { t: "p", html: "<strong>\u201CTell me about yourself\u201D</strong> is usually the first question, and it is not an invitation to share your life story. Use the <strong>Present \u2192 Past \u2192 Future</strong> structure: start with who you are now (your school or current role), briefly mention relevant past experience or skills, and finish with why you are excited about this job. Keep it to about one minute." },
      { t: "table", head: ["Question", "What They Are Really Asking", "How to Answer"], rows: [
        ["Why do you want to work here?", "Did you research us? Are you genuinely interested?", "Mention specific things about the company (values, products, reputation) and link them to your goals."],
        ["What are your strengths?", "What can you offer us?", "Choose 2\u20133 strengths relevant to the job and support each with a short example."],
        ["What is your weakness?", "Are you self-aware and willing to grow?", "Name a real, minor weakness and explain the steps you are taking to improve it."],
        ["Tell me about a time you faced a challenge.", "How do you handle problems?", "Use the STAR method and highlight what you learned."],
        ["Where do you see yourself in 5 years?", "Are you ambitious and likely to stay?", "Share realistic goals for learning and growth that connect to the role."],
        ["Why should we hire you?", "What makes you the best choice?", "Summarize your top skills, your enthusiasm, and how you can help the team."],
      ]},

      { t: "h", text: "Questions You Should Ask" },
      { t: "p", html: "At the end of most interviews, you will be asked, \u201CDo you have any questions for us?\u201D Always say yes! Good questions show genuine interest. Try:" },
      { t: "list", items: [
        "\u201CWhat does a typical day or week look like in this role?\u201D",
        "\u201CWhat qualities do your most successful employees share?\u201D",
        "\u201CWhat are the next steps in the hiring process?\u201D",
      ]},
      { t: "tip", html: "<strong>Tip:</strong> Avoid asking about pay, vacation, or perks in a first interview unless the interviewer brings it up." },

      { t: "h", text: "Know Your Rights (Canada)" },
      { t: "p", html: "Under Canadian human rights laws, employers generally should not ask about protected topics such as age, religion, race, marital or family status, or disability during an interview. If you are asked something inappropriate, you can politely redirect, for example: \u201CI'd be happy to talk about my availability and how I can meet the needs of this role.\u201D Rules vary slightly by province, so check your provincial human rights commission for details." },

      { t: "h", text: "Body Language and Presentation" },
      { t: "list", items: [
        "<strong>Dress:</strong> Choose clean, professional clothing that fits the workplace. When unsure, dress one step above the company's usual style.",
        "<strong>Greeting:</strong> Smile, make eye contact, and offer a firm (not crushing) handshake if appropriate.",
        "<strong>Posture:</strong> Sit up straight, avoid crossing your arms, and keep your hands relaxed.",
        "<strong>Voice:</strong> Speak clearly and at a steady pace. Pausing to think for a few seconds is perfectly fine.",
        "<strong>Phone:</strong> Silence it and put it away before you walk in.",
      ]},

      { t: "h", text: "How to Prepare for an Interview" },
      { t: "steps", items: [
        { title: "Research the Company and Role", html: "Read the job posting and the company's website and social media. Learn what they do, their values, and recent news. Highlight the skills they want most." },
        { title: "Match Your Experience", html: "For each key skill in the posting, think of a real example from school, work, volunteering, or activities. Write them down in STAR format." },
        { title: "Practice Out Loud", html: "Answer common questions out loud, not just in your head. Practice with a friend, family member, or teacher, or record yourself to spot filler words such as \u201Cum\u201D and \u201Clike.\u201D <strong>This is the most important part.</strong> Confidence comes from repetition." },
        { title: "Prepare Your Materials", html: "Pack extra copies of your resume, a list of references, a pen, a notepad, and any required ID. For virtual interviews, test your technology the day before." },
        { title: "Show Up and Perform", html: "Arrive early, greet everyone politely, listen carefully to each question, and pause before answering. If you do not understand a question, ask for clarification. If you do not know an answer, be honest and explain how you would figure it out." },
        { title: "Follow Up", html: "Within 24 hours, send a short thank-you email. Thank the interviewer for their time, mention something specific you enjoyed discussing, and restate your interest in the role." },
      ]},
      { t: "tip", html: "<strong>And repeat!</strong> Every interview, whether you get the job or not, is practice. Afterward, write down which questions were hardest and improve your answers for next time." },

      { t: "h", text: "Quick Checklist" },
      { t: "checklist", items: [
        "Did I research the company and reread the job posting?",
        "Do I have 4\u20135 STAR stories ready?",
        "Can I answer \u201CTell me about yourself\u201D in about one minute?",
        "Do I have 2\u20133 thoughtful questions to ask?",
        "Are my outfit, materials, and technology ready?",
        "Have I planned to send a thank-you message?",
      ]},

      { t: "h", text: "Other Resources" },
      { t: "links", items: [
        { label: "Job Bank: Prepare for an Interview", url: "https://www.jobbank.gc.ca/findajob/resources/prepare-for-interview", note: "Government of Canada interview preparation guide." },
        { label: "EduCanada: Interview Tips", url: "https://www.educanada.ca/blog-blogue/2023/tips-conseils.aspx?lang=eng", note: "Tips for students preparing for interviews." },
      ]},
    ],
  },

  {
    slug: "linkedin-101",
    title: "LinkedIn 101",
    subtitle: "Building Your Professional Brand Online",
    quote: "Your network is a garden: plant early, water often.",
    icon: "briefcase",
    readTime: "10 min read",
    level: "Essential skill",
    summary: "Build a profile that stands out, grow a network that helps you, and use the platform safely, from your headline to informational interviews.",
    sections: [
      { t: "h", text: "Why Is LinkedIn Important?" },
      { t: "p", html: "LinkedIn is the world's largest professional networking platform, like a mix between a living resume, a portfolio, and a social network for your career. Employers and recruiters use it to search for candidates, students use it to find mentors and internships, and professionals use it to share ideas and stay in touch." },
      { t: "p", html: "LinkedIn is important because it makes you visible. Recruiters regularly search the platform using keywords, so a complete profile can put you in front of employers you would never have reached otherwise. Many opportunities are found through people you know, or people who know them, rather than through job postings. A strong LinkedIn presence lets opportunities find you, even while you are busy with school or work." },

      { t: "h", text: "Key Terms" },
      { t: "terms", items: [
        ["Profile", "Your public professional page on LinkedIn, which showcases your education, skills, and experience."],
        ["Headline", "The short line under your name that describes who you are and what you do."],
        ["Connection", "Someone you are linked to on LinkedIn. 1st-degree connections are people you are directly connected with."],
        ["Network", "The collection of people you know, plus the people they know."],
        ["Endorsement", "A one-click confirmation from a connection that you have a particular skill."],
        ["Recommendation", "A short written testimonial from a teacher, manager, or colleague about your work."],
        ["Feed", "The stream of posts, articles, and updates from your connections and the people you follow."],
        ["Custom URL", "A personalized web address for your profile (e.g., linkedin.com/in/yourname)."],
        ["Informational Interview", "A casual conversation with a professional to learn about their career path, not to ask for a job."],
        ["Personal Brand", "The impression people have of your skills, values, and personality based on what they see of you."],
      ]},

      { t: "h", text: "LinkedIn vs. Resume" },
      { t: "table", head: ["Feature", "Resume", "LinkedIn Profile"], rows: [
        ["Length", "1\u20132 pages, tightly edited", "No strict limit; more detail allowed"],
        ["Tailoring", "Customized for each job", "General, for a wide audience"],
        ["Tone", "Formal and concise", "Professional but more personal (first person is fine)"],
        ["Extras", "Not usually included", "Recommendations, projects, links, posts, and a photo"],
        ["Networking", "None", "Connect, message, and follow people and companies"],
      ]},
      { t: "tip", html: "<strong>Tip:</strong> Your resume and LinkedIn should match on facts such as dates, job titles, and schools. Inconsistencies can look careless." },

      { t: "h", text: "Building Your Profile" },
      { t: "p", html: "<strong>Profile photo and banner:</strong> Choose a clear, recent photo where your face is easy to see. It does not need to be taken by a professional: a friendly smile, good lighting, and a plain background are enough. Dress as you would for an interview. Avoid group photos, filters, sunglasses, or cropped-out party pictures. A simple banner image related to your field adds polish." },
      { t: "p", html: "<strong>Headline:</strong> Your headline appears next to your name everywhere on LinkedIn, so it matters. Instead of leaving it as just \u201CStudent,\u201D add keywords and value. A good formula is: <strong>Role/Identity | Key Skills or Interests | Goal</strong>." },
      { t: "table", head: ["Basic Headline", "Stronger Headline"], rows: [
        ["Student", "Business Student at Example University | Marketing, Social Media & Event Planning | Seeking Summer 2027 Internship"],
        ["Looking for work", "Customer Service Professional | Bilingual (English/French) | Reliable Team Player"],
        ["Grade 12 Student", "High School Student | Robotics Club Captain | Passionate About Engineering & Problem-Solving"],
      ]},
      { t: "p", html: "<strong>The About section</strong> is your chance to tell your story in your own voice. Aim for 3\u20134 short paragraphs: (1) who you are and what you are passionate about, (2) your key skills and accomplishments, and (3) what you are looking for or how people can contact you. Write in the first person (\u201CI\u201D), keep paragraphs short, and include keywords from the fields you are interested in." },
      { t: "p", html: "<strong>Experience, education, and skills:</strong>" },
      { t: "list", items: [
        "<strong>Experience:</strong> List jobs, volunteer roles, and leadership positions using the same action-verb bullet points from your resume.",
        "<strong>Education:</strong> Include your school, program, and expected graduation date. Add clubs, awards, or relevant courses.",
        "<strong>Skills:</strong> Add 10\u201315 relevant skills, with the most important ones at the top. Skills help recruiters find you.",
        "<strong>Projects, certifications, and volunteering:</strong> Great for students with limited work experience. Add links or files when possible.",
        "<strong>Recommendations:</strong> Politely ask a teacher, coach, or supervisor to write a short recommendation about you.",
      ]},
      { t: "p", html: "<strong>Custom URL and settings:</strong> Customize your profile URL so it is short and professional (usually your name), and add it to your resume and email signature. Review your privacy settings so you know who can see your profile and activity. Turning on the \u201COpen to Work\u201D feature lets recruiters know you are looking, and you can choose whether everyone or only recruiters can see it." },

      { t: "h", text: "Growing Your Network" },
      { t: "p", html: "A network is not about collecting hundreds of connections. It is about building genuine relationships. Start with people you already know: classmates, teachers, coworkers, managers, coaches, family friends, and volunteer supervisors. Then expand to alumni, professionals in fields you like, and people you meet at events." },
      { t: "h", text: "How to Send a Connection Request" },
      { t: "p", html: "Always add a short, personal note instead of using the default message. Here is a template:" },
      { t: "quote", text: "\u201CHi Ms. Patel, I'm a second-year business student at Example University. I really enjoyed your talk on digital marketing at our career fair and would love to stay in touch. Thank you!\u201D" },
      { t: "h", text: "Informational Interviews" },
      { t: "p", html: "Once connected, you can ask professionals for a short 15\u201320 minute chat about their career. Be polite, specific, and respectful of their time, and never ask for a job directly. Come with questions such as, \u201CWhat do you like most about your work?\u201D or \u201CWhat advice would you give someone starting out?\u201D Always send a thank-you message afterward." },

      { t: "h", text: "Engaging on LinkedIn" },
      { t: "p", html: "You do not have to become an \u201Cinfluencer,\u201D but being active helps people remember you. Some simple ways to engage:" },
      { t: "list", items: [
        "Like and thoughtfully comment on posts from people and companies you follow",
        "Share updates such as a completed course, a volunteer event, a competition, or a project",
        "Follow companies and industry leaders in the fields you are interested in",
        "Join groups related to your school, interests, or career goals",
      ]},
      { t: "tip", html: "<strong>Keep it professional:</strong> Avoid controversial arguments, complaining about teachers or employers, or anything you would not want a future boss to read." },

      { t: "h", text: "Using LinkedIn to Find Jobs" },
      { t: "list", items: [
        "Use the <strong>Jobs</strong> tab to search by title and location, and filter for internships, entry-level, part-time, or remote roles.",
        "Set <strong>Job Alerts</strong> so new postings come to you.",
        "Look at who works at a company, then reach out to a connection who may be able to share insight.",
        "Follow the application instructions carefully. Some postings use \u201CEasy Apply,\u201D while others send you to the company website.",
      ]},

      { t: "h", text: "Staying Safe on LinkedIn" },
      { t: "list", items: [
        "Never share your Social Insurance Number, banking details, or passwords, even with someone claiming to be a recruiter.",
        "Be cautious of job offers that seem too good to be true, ask you to pay a fee, or ask you to move the conversation to an unusual messaging app.",
        "Research any company that contacts you and confirm the job is listed on the official company website.",
        "Only accept connection requests from people you know or who have a clear professional reason to connect.",
        "Report suspicious profiles or messages using LinkedIn's reporting tools.",
      ]},

      { t: "h", text: "How to Build Your LinkedIn Profile" },
      { t: "steps", items: [
        { title: "Create Your Account", html: "Sign up with a professional email address and a strong, unique password. Fill in your name, school, and location. Check LinkedIn's current age and account requirements." },
        { title: "Add a Photo and Banner", html: "Upload a clear, friendly headshot and, if you like, a simple banner image." },
        { title: "Write Your Headline and About Section", html: "Use keywords, show your value, and write in a natural first-person voice." },
        { title: "Fill In Experience, Education, and Skills", html: "Add every relevant experience, using strong bullet points. Include volunteering, projects, and awards, and list your top skills." },
        { title: "Build Your Network", html: "Connect with 20\u201330 people you already know, then follow companies and professionals in your field. Send personalized requests. <strong>This is the most important part.</strong> A great profile with no network stays invisible, while an active network keeps your profile in front of the right people." },
        { title: "Review and Maintain", html: "Proofread everything, customize your URL, and check your privacy settings. Ask a friend or mentor to review your profile. Update it whenever you gain new experience or skills." },
      ]},
      { t: "tip", html: "<strong>And repeat!</strong> Spend 10\u201315 minutes a week on LinkedIn: react to a few posts, reconnect with someone, and update your profile." },

      { t: "h", text: "Quick Checklist" },
      { t: "checklist", items: [
        "Do I have a clear, professional profile photo?",
        "Does my headline include keywords beyond just \u201CStudent\u201D?",
        "Is my About section written in my own voice and free of errors?",
        "Do my dates and titles match my resume?",
        "Have I listed at least 10 relevant skills?",
        "Have I customized my URL and checked my privacy settings?",
        "Am I following companies and connecting with people I know?",
      ]},

      { t: "h", text: "Other Resources" },
      { t: "links", items: [
        { label: "LinkedIn Help Center", url: "https://www.linkedin.com/help/linkedin", note: "Official guides for using LinkedIn." },
        { label: "Indeed Career Advice (Canada)", url: "https://ca.indeed.com/career-advice", note: "Articles on profiles, networking, and job searching." },
      ]},
    ],
  },
];

