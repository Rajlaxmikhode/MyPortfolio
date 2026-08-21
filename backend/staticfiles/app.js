// ============================================================
// PORTFOLIO PROJECTS
// ============================================================

const projects = [
  {
    id: 'docvault',
    title: 'DocVault',
    category: 'Full Stack',
    summary:
      'A digital document management platform designed to organize, manage, share, and verify important documents.',
    tech: ['React', 'TypeScript', 'Express', 'Gemini AI'],
    featured: true,
    github: 'https://github.com/Rajlaxmikhode/Docvlault',
    demo:'https://docvault-india.ai.studio/',
    preview: 'static/assets/Docvalut.png',
    overview:
      'DocVault is a full-stack project focused on making important digital documents easier to organize and manage through a modern web interface.',
    features: [
      'Digital document management',
      'AI-assisted functionality',
      'Document sharing and verification'
    ],
    architecture:
      'A modern web application combining a frontend interface with backend services and AI-assisted functionality.'
  },

  {
    id: 'nutribudget',
    title: 'NutriBudget',
    category: 'Full Stack',
    summary:
      'A web application combining nutrition-focused planning with practical budgeting workflows.',
    tech: ['JavaScript', 'Web Development', 'Full Stack'],
    featured: true,
    github: 'https://github.com/Rajlaxmikhode/NutriBudget',
    demo: 'https://your-published-link-here',
    preview: 'static/assets/nutri.png',
    overview:
      'NutriBudget is a practical web project built around managing nutrition-related decisions while keeping budget considerations in mind.',
    features: [
      'Budget-focused workflows',
      'Nutrition-oriented planning',
      'Responsive web experience'
    ],
    architecture:
      'A web application structured around frontend interfaces and application logic for managing user-focused workflows.'
  },

  {
    id: 'brazilian-ecommerce-analysis',
    title: 'Brazilian E-commerce Sales Analysis',
    category: 'Data Analytics',
    summary:
      'A data analytics project focused on exploring Brazilian e-commerce data and extracting meaningful business insights.',
    tech: ['Python', 'Pandas', 'SQL', 'Data Analysis'],
    featured: true,
    github:
      'https://github.com/Rajlaxmikhode/brazilian-ecommerce-sales-analysis',
    preview: 'static/assets/brazillian.jpg',
    overview:
      'An analytical project focused on studying e-commerce data to understand sales patterns and derive useful business insights.',
    features: [
      'Data exploration',
      'Data cleaning and analysis',
      'Business-oriented insights'
    ],
    architecture:
      'A data analysis workflow using structured datasets, data processing, SQL, and analytical techniques.'
  },

  {
    id: 'e-com',
    title: 'E-commerce',
    category: 'Frontend',
    summary:
      'A web-based e-commerce project focused on creating a clean and responsive shopping experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    featured: true,
    github: 'https://github.com/Rajlaxmikhode/e-com',
    demo: 'https://e-com-delta-ivory.vercel.app/',
    preview: 'static/assets/ecom.png',
    overview:
      'An e-commerce web project focused on product presentation and a straightforward user shopping experience.',
    features: [
      'Product-focused interface',
      'Responsive layout',
      'Shopping-oriented UI'
    ],
    architecture:
      'A frontend-oriented web application built with standard web technologies and responsive interface principles.'
  },

  {
    id: 'promptengineering',
    title: 'Prompt Engineering',
    category: 'AI/ML',
    summary:
      'A practical project exploring prompt design and structured interactions with generative AI systems.',
    tech: ['AI', 'Prompt Engineering', 'Generative AI'],
    featured: true,
    github: 'https://github.com/Rajlaxmikhode/PromptEngineering',
    preview: 'static/assets/peng.jpg',
    overview:
      'A project focused on understanding and applying prompt engineering techniques for more effective interactions with generative AI.',
    features: [
      'Prompt design',
      'Generative AI experimentation',
      'Structured AI interactions'
    ],
    architecture:
      'The project focuses on prompt construction, experimentation, and structured interaction with AI systems.'
  },

  {
    id: 'code-repo',
    title: 'Code Repository',
    category: 'Programming',
    summary:
      'A collection of programming work, implementations, and hands-on development practice.',
    tech: ['Python', 'Java', 'C', 'Programming'],
    featured: false,
    github: 'https://github.com/Rajlaxmikhode/code-repo',
    preview: 'static/assets/python.jpg',
    overview:
      'A programming repository representing hands-on practice and implementation across different programming concepts.',
    features: [
      'Programming practice',
      'Problem solving',
      'Multiple programming concepts'
    ],
    architecture:
      'A collection-based repository containing programming implementations and development exercises.'
  },


  {
    id: 'mern-stack',
    title: 'MERN Stack',
    category: 'Full Stack',
    summary:
      'A hands-on project exploring full-stack JavaScript application development with the MERN stack.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    featured: false,
    github: 'https://github.com/Rajlaxmikhode/mern_stack',
    preview: 'static/assets/mern.jpg',
    overview:
      'A practical MERN project focused on understanding and implementing full-stack JavaScript development.',
    features: [
      'React development',
      'Backend development',
      'Database integration'
    ],
    architecture:
      'A MERN architecture connecting a React frontend with an Express and Node.js backend and MongoDB data layer.'
  }
];


// ============================================================
// SKILLS
// ============================================================

const skills = {
  Frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Responsive Design'
  ],

  Backend: [
    'Python',
    'FastAPI',
    'Node.js',
    'Express'
  ],

  Data: [
    'SQL',
    'MySQL',
    'Pandas',
    'Data Analysis'
  ],

  AI: [
    'Generative AI',
    'Prompt Engineering',
    'AI Applications'
  ],

  Tools: [
    'Git',
    'GitHub',
    'REST APIs'
  ]
};


// ============================================================
// APP
// ============================================================

const app = document.querySelector('#app');


// ============================================================
// HELPERS
// ============================================================

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}


function route() {
  return location.hash.slice(1) || '/home';
}


function badge(text) {
  return `<span class="badge">${escapeHtml(text)}</span>`;
}


// ============================================================
// PROJECT CARD
// ============================================================

function projectCard(project) {
  const tech = Array.isArray(project.tech) ? project.tech : [];

  return `
    <article class="project-card">

      <div
        class="project-preview"
        style="background-image:url('${project.preview}')"
      ></div>

      <div class="card-content">

        <h3>
          ${escapeHtml(project.title)}
        </h3>

        <p>
          ${escapeHtml(project.summary)}
        </p>

        ${project.demo ? `
            <a class="btn" href="${project.demo}" target="_blank" rel="noopener noreferrer">
              Live demo
            </a>
            ` : ''}

        <div class="badges">
          ${tech.map(badge).join('')}
        </div>

        <div class="actions">

          <a
            class="btn"
            href="#/projects/${project.id}"
          >
            View case study
          </a>

          <a
            class="btn"
            href="${project.github}"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

        </div>

      </div>

    </article>
  `;
}


// ============================================================
// HOME PAGE
// ============================================================

function homePage() {
  const featured = projects.filter(
    (project) => project.featured
  );

  return `
    <div class="page">

      <section class="hero-card">

        <div>

          <p class="eyebrow">
            Developer · Full Stack · AI
          </p>

          <h1>
            Crafting thoughtful digital experiences.
          </h1>

          <p class="lead">
            I build practical web applications, data-driven solutions,
            and AI-powered experiences with a focus on clean design
            and dependable implementation.
          </p>

          <div class="hero-actions">

            <a
              class="btn primary"
              href="#/projects"
            >
              Explore projects
            </a>

            <a
              class="btn"
              href="#/contact"
            >
              Let's connect
            </a>

          </div>

          <div class="hero-meta">

            <span class="tag">
              Full Stack
            </span>

            <span class="tag">
              AI & Data
            </span>

            <span class="tag">
              Modern UI
            </span>

          </div>

        </div>

        <div class="hero-visual">

          <div class="orb"></div>

          <div class="profile-card">

            <img
              src="static/assets/image.jpg"
              alt="Rajlaxmi Khode"
            />

            <div class="profile-badge">
              Available for opportunities
            </div>

          </div>

        </div>

      </section>


      <section class="section-card">

        <div class="section-heading">

          <h2>
            Featured projects
          </h2>

          <a
            class="btn"
            href="#/projects"
          >
            See all work
          </a>

        </div>

        <div class="project-grid">
          ${featured.map(projectCard).join('')}
        </div>

      </section>

    </div>
  `;
}


// ============================================================
// PROJECTS PAGE
// ============================================================

function projectsPage() {
  const filters = [
    'All',
    'Full Stack',
    'Frontend',
    'AI/ML',
    'Data Analytics',
    'Programming'
  ];

  return `
    <div class="page">

      <p class="eyebrow">
        Selected work
      </p>

      <h1 class="page-title">
        Projects
      </h1>

      <p class="page-intro">
        A collection of real projects covering full-stack development,
        AI, data analytics, and programming.
      </p>

      <div class="filters">

        ${filters
          .map(
            (filter) => `
              <button
                class="filter ${filter === 'All' ? 'active' : ''}"
                data-filter="${escapeHtml(filter)}"
              >
                ${escapeHtml(filter)}
              </button>
            `
          )
          .join('')}

      </div>

      <div
        class="project-grid"
        id="project-list"
      >
        ${projects.map(projectCard).join('')}
      </div>

    </div>
  `;
}


// ============================================================
// PROJECT DETAIL
// ============================================================

function projectDetail(id) {
  const project = projects.find(
    (item) => item.id === id
  );

  if (!project) {
    return `
      <div class="page">

        <div class="empty">

          <h2>
            Project not found
          </h2>

          <p>
            This project could not be found.
          </p>

          <a
            class="btn primary"
            href="#/projects"
          >
            Back to projects
          </a>

        </div>

      </div>
    `;
  }

  const tech = Array.isArray(project.tech)
    ? project.tech
    : [];

  const features = Array.isArray(project.features)
    ? project.features
    : [];

  return `
    <div class="page">

      <a
        class="btn"
        href="#/projects"
      >
        ← All projects
      </a>

      <div
        class="hero-card"
        style="margin-top:1rem;"
      >

        <div>

          <p class="eyebrow">
            ${escapeHtml(project.category)}
          </p>

          <h1>
            ${escapeHtml(project.title)}
          </h1>

          <p class="lead">
            ${escapeHtml(project.overview)}
          </p>

          <div class="badges">
            ${tech.map(badge).join('')}
          </div>

          <div class="hero-actions">

            <a
              class="btn primary"
              href="${project.github}"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>

            <a
              class="btn"
              href="#/contact"
            >
              Contact me
            </a>

          </div>

        </div>

        <div class="console-card">

          <pre><code>
<span class="code-line">project = <span class="token-key">{</span></span>
<span class="code-line">  focus: <span class="token-string">'real-world development'</span>,</span>
<span class="code-line">  approach: <span class="token-string">'clean and practical'</span></span>
<span class="code-line"><span class="token-key">}</span></span>
          </code></pre>

        </div>

      </div>


      <div class="detail-layout">

        <div class="panel">

          <h2>
            Highlights
          </h2>

          <ul class="detail-list">
            ${features
              .map(
                (feature) =>
                  `<li>${escapeHtml(feature)}</li>`
              )
              .join('')}
          </ul>

        </div>


        <div class="panel">

          <h2>
            Architecture
          </h2>

          <p class="lead">
            ${escapeHtml(project.architecture)}
          </p>

        </div>

      </div>

    </div>
  `;
}


// ============================================================
// SKILLS PAGE
// ============================================================

function skillsPage() {
  const lines = Object.entries(skills).flatMap(
    ([group, items]) => [
      `<span class="token-key">${escapeHtml(group)}</span>: [`,
      ...items.map(
        (item) =>
          `  <span class="token-string">'${escapeHtml(item)}'</span>,`
      ),
      '],'
    ]
  );

  return `
    <div class="page">

      <p class="eyebrow">
        Capabilities
      </p>

      <h1 class="page-title">
        Skills that ship.
      </h1>

      <p class="page-intro">
        A practical development toolkit covering frontend,
        backend, data, AI, and modern development tools.
      </p>

      <div class="skills-shell">

        <div class="code-card">

          <div class="code-heading">

            <span class="code-label">
              developer toolkit
            </span>

            <span class="tag">
              Modern development stack
            </span>

          </div>

          <div class="code-block">

            <pre><code>
<span class="code-line">const <span class="token">skills</span> = <span class="token-key">{</span></span>
${lines
  .map(
    (line) =>
      `<span class="code-line">${line}</span>`
  )
  .join('\n')}
<span class="code-line"><span class="token-key">}</span>;</span>
            </code></pre>

          </div>

        </div>

      </div>

    </div>
  `;
}


// ============================================================
// CONTACT PAGE
// ============================================================

function contactPage() {
  return `
    <div class="page">

      <p class="eyebrow">
        Let's connect
      </p>

      <h1 class="page-title">
        Have something in mind?
      </h1>

      <p class="page-intro">
        I'm open to discussing projects, development opportunities,
        collaboration, and ideas.
      </p>

      <div class="detail-layout">

        <form
          id="contact-form"
          class="form-card"
          novalidate
        >

          <label for="name">
            Name
          </label>

          <input
            id="name"
            name="name"
            placeholder="Your name"
          />

          <label for="email">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
          />

          <label for="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Tell me about the idea or opportunity."
          ></textarea>

          <input
            type="text"
            name="company"
            autocomplete="off"
            tabindex="-1"
            style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0;"
            aria-hidden="true"
          />

          <button
            class="btn primary"
            type="submit"
            id="contact-submit"
          >
            Send message
          </button>

          <p
            class="status"
            id="form-status"
          ></p>

        </form>


        <div class="panel">

          <h2>
            Contact details
          </h2>

          <ul class="detail-list">

            <li>
              Email: khoderajlaxmi17@gmail.com
            </li>

            <li>
              Location: Karnataka · India
            </li>

            <li>
              GitHub:
              <a
                href="https://github.com/Rajlaxmikhode"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rajlaxmikhode
              </a>
            </li>
             <li>
              LinkedIn:
              <a
                href="https://www.linkedin.com/in/rajlaxmikhode/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </li>

          </ul>

        </div>

      </div>

    </div>
  `;

 
}


// ============================================================
// ABOUT PAGE
// ============================================================

function aboutPage() {
  return `
    <div class="page">

      <p class="eyebrow">
        A little context
      </p>

      <h1 class="page-title">
        I build with purpose.
      </h1>

      <p class="page-intro">
        I enjoy turning ideas into practical digital products,
        exploring modern technologies, and continuously improving
        how software is designed and built.
      </p>

      <div class="panel">

        <h2>
          How I work
        </h2>

        <p class="lead">
          I focus on understanding the problem first, building
          clean solutions, and creating interfaces that are
          useful, responsive, and easy to understand.
        </p>

        <div class="badges">

          ${[
            'Problem Solving',
            'Clean Code',
            'Full Stack Development',
            'AI & Data',
            'Responsive UI'
          ]
            .map(badge)
            .join('')}

        </div>

      </div>


      <div class="panel" style="margin-top:1rem;">

        <h2>
          My story
        </h2>

        <p class="lead">
          I'm a student developer who learns best by building.
          Instead of only studying concepts, I turn them into
          real projects — from full-stack apps to data analysis
          work — because that's where the actual learning happens.
          Every project so far has taught me something I couldn't
          have picked up from a course alone.
        </p>

      </div>


      <div class="panel" style="margin-top:1rem;">

        <h2>
          Currently focused on
        </h2>

        <p class="lead">
          Right now I'm deepening my skills in AI/ML — going beyond
          using AI tools to understanding how they actually work,
          and building projects that put that understanding into
          practice.
        </p>

        <div class="badges">

          ${[
            'AI/ML',
            'Prompt Engineering',
            'Generative AI'
          ]
            .map(badge)
            .join('')}

        </div>

      </div>


      <div class="detail-layout" style="margin-top:1rem;">

        <div class="panel">

          <h2>
            By the numbers
          </h2>

          <ul class="detail-list">

            <li>
              4 projects shipped, including this portfolio
            </li>

            <li>
              3 domains explored — Full Stack, Data Analytics, AI, Prompt Engineering
            </li>

            <li>
              Currently a student developer, always building
            </li>

          </ul>

        </div>


        <div class="panel">

          <h2>
            What I value
          </h2>

          <ul class="detail-list">

            <li>
              Understand the problem before writing code
            </li>

            <li>
              Clean, readable solutions over clever ones
            </li>

            <li>
              Ship something real, then improve it
            </li>

            <li>
              Stay curious — keep learning past the tutorial
            </li>

          </ul>

        </div>

      </div>


      <div class="detail-layout" style="margin-top:1rem;">

        <div class="panel">

          <h2>
            Education
          </h2>

          <ul class="detail-list">
            
           
            <li>
              BCA — KLE's JT BCA College Gadag
            </li>
            <li>
              2024 – 2027 (Expected)
            </li>
            <li>
              Relevant coursework: Data Structures, DBMS, Web Development
            </li>

          </ul>

        </div>


        <div class="panel">

          <h2>
            Projects
          </h2>

          <p class="lead">
            A hands-on mix of full-stack, data, and AI work —
            built to learn by doing, not just studying.
          </p>

          <div class="hero-actions" style="margin:0;">

            <a
              class="btn primary"
              href="#/projects"
            >
              View all projects
            </a>

          </div>

        </div>

      </div>

    </div>
  `;
}

// ============================================================
// RESUME PAGE
// ============================================================
function resumePage() {
  const resumePath = 'static/assets/Rajlaxmi_Khode_Resume.pdf';

  return `
    <div class="page">

      <p class="eyebrow">
        RESUME
      </p>

      <h1 class="page-title">
        My Resume
      </h1>

      <p class="page-intro">
        View my latest resume directly within my portfolio.
      </p>

      <div class="resume-card">

        <div class="resume-icon">
          📄
        </div>

        <div class="resume-content">

          <h2>
            Rajlaxmi Khode
          </h2>

          <p>
            BCA student with experience in web development,
            AI-focused projects, databases and software development.
          </p>

          <div class="resume-actions">

            <button
              type="button"
              class="btn primary"
              id="view-resume-btn"
            >
              View Resume
            </button>

            <a
              class="btn"
              href="${resumePath}"
              download="Rajlaxmi_Khode_Resume.pdf"
            >
              Download Resume
            </a>

          </div>

        </div>

      </div>

      <!-- RESUME VIEWER -->

      <div
        id="resume-viewer"
        class="resume-preview"
        hidden
      >

        <div class="section-heading">

          <h2>
            Resume Preview
          </h2>

          <button
            type="button"
            class="btn"
            id="close-resume-btn"
          >
            Close Resume
          </button>

        </div>

        <iframe
          id="resume-frame"
          src="${resumePath}"
          title="Rajlaxmi Khode Resume"
          width="100%"
          height="900"
          style="
            display: block;
            width: 100%;
            height: 900px;
            border: none;
            border-radius: 12px;
            background: #ffffff;
          "
        ></iframe>

      </div>

    </div>
  `;
}




// ============================================================
// THEME
// ============================================================

function setTheme() {
  const saved =
    localStorage.getItem('portfolio-theme') || 'dark';

  document.body.classList.toggle(
    'light',
    saved === 'light'
  );
}


// ============================================================
// RENDER
// ============================================================

function render() {
  const currentRoute = route();
  const parts = currentRoute.split('/');

  if (!app) {
    console.error(
      'Portfolio error: #app element was not found.'
    );
    return;
  }

  app.innerHTML = `
    <div class="page">
      <div class="empty">
        Loading...
      </div>
    </div>
  `;

  setTimeout(() => {
    let page;

    if (currentRoute === '/home') {
      page = homePage();
    } else if (currentRoute === '/about') {
      page = aboutPage();
    } else if (currentRoute === '/projects') {
      page = projectsPage();
    }  else if (currentRoute === '/skills') {
    page = skillsPage();
  } else if (currentRoute === '/resume') {
    page = resumePage();
  } else if (currentRoute === '/contact') {
    page = contactPage();

    } else if (currentRoute === '/login') {
      page = loginPage();
    } else if (
      parts[1] === 'projects' &&
      parts[2]
    ) {
      page = projectDetail(parts[2]);
    } else {
      page = homePage();
    }

    app.innerHTML = page;

    bind();

    window.scrollTo(0, 0);
  }, 100);
}


// ============================================================
// EVENT BINDING
// ============================================================

function bind() {

  // Navigation
  document
    .querySelectorAll('.nav-links a[data-route]')
    .forEach((anchor) => {

      anchor.classList.toggle(
        'active',
        anchor.getAttribute('href') === `#${route()}`
      );

    });


  // Theme
  document
    .querySelector('.theme-toggle')
    ?.addEventListener('click', () => {

      const isLight =
        document.body.classList.toggle('light');

      localStorage.setItem(
        'portfolio-theme',
        isLight ? 'light' : 'dark'
      );

    });


  // Mobile menu
  document
    .querySelector('.menu-toggle')
    ?.addEventListener('click', (event) => {

      const nav =
        document.querySelector('.nav-links');

      if (!nav) return;

      const open =
        nav.classList.toggle('open');

      event.currentTarget.setAttribute(
        'aria-expanded',
        String(open)
      );

    });
   
// ============================================================
// RESUME VIEWER
// ============================================================

const viewResumeButton =
  document.querySelector('#view-resume-btn');

const closeResumeButton =
  document.querySelector('#close-resume-btn');

const resumeViewer =
  document.querySelector('#resume-viewer');

if (viewResumeButton && resumeViewer) {

  viewResumeButton.addEventListener('click', () => {

    resumeViewer.hidden = false;

    viewResumeButton.textContent = 'Resume Opened';

    viewResumeButton.disabled = true;

    setTimeout(() => {
      resumeViewer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);

  });

}

if (closeResumeButton && resumeViewer) {

  closeResumeButton.addEventListener('click', () => {

    resumeViewer.hidden = true;

    if (viewResumeButton) {
      viewResumeButton.textContent = 'View Resume';
      viewResumeButton.disabled = false;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  });

}

  // Project filters
  document
    .querySelectorAll('.filter')
    .forEach((button) => {

      button.addEventListener('click', () => {

        document
          .querySelectorAll('.filter')
          .forEach((item) =>
            item.classList.remove('active')
          );

        button.classList.add('active');

        const filter =
          button.dataset.filter;

        const list =
          document.querySelector('#project-list');

        if (!list) return;

        const visible =
          projects.filter((project) => {

            const tech = Array.isArray(project.tech)
              ? project.tech
              : [];

            return (
              filter === 'All' ||
              project.category === filter ||
              tech.includes(filter)
            );

          });

        list.innerHTML =
          visible.length
            ? visible.map(projectCard).join('')
            : `
              <div class="empty">
                No projects match this filter.
              </div>
            `;

      });

    });


  // Contact form
  const form =
    document.querySelector('#contact-form');

  if (form) {

    form.addEventListener(
      'submit',
      async (event) => {

        event.preventDefault();

        const status =
          document.querySelector('#form-status');

        const submitButton =
          document.querySelector('#contact-submit');

        const formData =
          new FormData(form);

        const payload =
          Object.fromEntries(
            formData.entries()
          );

        if (
          !payload.name ||
          !payload.email ||
          !payload.message
        ) {

          status.textContent =
            'Please complete the form before sending.';

          status.className =
            'status error';

          return;
        }

        if (submitButton) {
          submitButton.disabled = true;
        }

        status.textContent =
          'Sending your message...';

        status.className =
          'status success';

        try {

          const response =
            await fetch(
              '/api/contact',
              {
                method: 'POST',
                headers: {
                  'Content-Type':
                    'application/json'
                },
                credentials: 'same-origin',
                body: JSON.stringify(payload)
              }
            );

          const rawText =
            await response.text();

          let result = {};

          try {
            result =
              rawText ? JSON.parse(rawText) : {};
          } catch {
            result = {};
          }

          if (
            response.ok &&
            result.status === 'ok'
          ) {

            status.textContent =
              "Thanks — your message is on its way. I'll get back to you soon.";

            status.className =
              'status success';

            form.reset();

          } else {

            status.textContent =
              result.message ||
              result.detail ||
              'Something went wrong sending your message. Please try again.';

            status.className =
              'status error';

          }

        } catch (error) {

          status.textContent =
            'Unable to reach the server. Please try again later.';

          status.className =
            'status error';

          console.error(
            'Contact form error:',
            error
          );

        } finally {

          if (submitButton) {
            submitButton.disabled = false;
          }

        }

      }
    );

  }


  // Login form
  const loginForm =
    document.querySelector('#login-form');

  if (loginForm) {

    loginForm.addEventListener(
      'submit',
      async (event) => {

        event.preventDefault();

        const status =
          document.querySelector('#login-status');

        const username =
          loginForm.username.value.trim();

        const password =
          loginForm.password.value;

        if (!username || !password) {

          status.textContent =
            'Enter both username and password to continue.';

          status.className =
            'status error';

          return;
        }

        try {

          const response =
            await fetch(
              '/api/admin/login',
              {
                method: 'POST',
                headers: {
                  'Content-Type':
                    'application/json'
                },
                body: JSON.stringify({
                  username,
                  password
                })
              }
            );

          const result =
            await response.json();

          if (
            response.ok &&
            result.status === 'ok'
          ) {

            status.textContent =
              'Welcome back, admin. Redirecting home...';

            status.className =
              'status success';

            setTimeout(() => {
              window.location.hash =
                '/home';
            }, 600);

            return;
          }

          status.textContent =
            result.message ||
            'Access denied.';

          status.className =
            'status error';

        } catch (error) {

          status.textContent =
            'Unable to reach the backend.';

          status.className =
            'status error';

          console.error(
            'Login error:',
            error
          );

        }

      }
    );

  }


  // Footer year
  const year =
    document.querySelector('#year');

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }
}


// ============================================================
// START APPLICATION
// ============================================================

setTheme();

window.addEventListener(
  'hashchange',
  render
);

if (document.readyState === 'loading') {
  window.addEventListener(
    'DOMContentLoaded',
    render
  );
} else {
  render();
}