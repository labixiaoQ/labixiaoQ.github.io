const publications = [
  {
    title: "Research paper title goes here",
    venue: "Conference / Journal · 2026",
    description:
      "A one-sentence description of the question, method, and key finding.",
    links: ["Paper", "Code"],
  },
  {
    title: "A second representative publication",
    venue: "Conference / Journal · 2025",
    description:
      "Use this space for work you would like visitors to understand first.",
    links: ["Paper", "Project"],
  },
  {
    title: "Earlier work or a preprint",
    venue: "Preprint · 2024",
    description:
      "Keep each entry brief; full bibliographic information can be added later.",
    links: ["Paper"],
  },
];

const projects = [
  {
    number: "01",
    title: "Research project",
    text: "A concise introduction to a tool, dataset, system, or research collaboration.",
  },
  {
    number: "02",
    title: "Open-source work",
    text: "Highlight the work that best shows how you build and share useful things.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="top-line" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to the top">
          <span className="wordmark-mark">YN</span>
          <span>YOUR NAME</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-intro">
          <p className="eyebrow">ACADEMIC HOME PAGE · 2026</p>
          <h1>
            Ideas that make
            <br />
            intelligent systems <em>useful.</em>
          </h1>
          <p className="hero-copy">
            I am <strong>Your Name</strong>, a researcher working at the
            intersection of machine learning, intelligent systems, and human
            centered computing.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#publications">
              Selected work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-quiet"
              href="https://github.com/labixiaoQ"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="profile-card" aria-label="Profile summary">
          <div className="portrait-placeholder" aria-hidden="true">
            <span>YN</span>
          </div>
          <div className="profile-meta">
            <p className="profile-label">CURRENTLY</p>
            <p>Ph.D. Candidate / Researcher</p>
            <p className="profile-label profile-label-spaced">BASED IN</p>
            <p>City, Country</p>
          </div>
          <div className="profile-footer">
            <span className="presence-dot" />
            <span>Open to research conversations</span>
          </div>
        </aside>
      </section>

      <section className="section about-section" id="about">
        <div className="section-kicker">01 / ABOUT</div>
        <div className="about-content">
          <p className="large-copy">
            I study how computational methods can help people reason, create,
            and make decisions with more confidence.
          </p>
          <div className="about-details">
            <p>
              This first version is intentionally concise. Replace this text
              with a short biography: your program or position, institution,
              previous training, and the questions that guide your work.
            </p>
            <a href="mailto:your.email@example.com" className="text-link">
              your.email@example.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="section-kicker">02 / RESEARCH</div>
        <div className="research-grid">
          <article>
            <span>01</span>
            <h2>Machine learning</h2>
            <p>Learning systems that are robust, interpretable, and adaptive.</p>
          </article>
          <article>
            <span>02</span>
            <h2>Intelligent systems</h2>
            <p>Methods that turn research ideas into reliable real-world tools.</p>
          </article>
          <article>
            <span>03</span>
            <h2>Human-centered AI</h2>
            <p>Designing technology around human goals, agency, and context.</p>
          </article>
        </div>
      </section>

      <section className="section publication-section" id="publications">
        <div className="publication-heading">
          <div className="section-kicker">03 / SELECTED PUBLICATIONS</div>
          <p>Replace these three entries with the work you most want to share.</p>
        </div>
        <div className="publication-list">
          {publications.map((publication, index) => (
            <article className="publication" key={publication.title}>
              <span className="publication-index">0{index + 1}</span>
              <div>
                <h2>{publication.title}</h2>
                <p className="venue">{publication.venue}</p>
                <p>{publication.description}</p>
              </div>
              <div className="publication-links">
                {publication.links.map((link) => (
                  <a href="#publications" key={link}>
                    {link} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-kicker">04 / PROJECTS</div>
        <div className="projects-heading">
          <h2>Work beyond the paper.</h2>
          <p>Tools, collaborations, and experiments in progress.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <span>{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <a href="#projects" aria-label={`Learn more about ${project.title}`}>
                Explore <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
          <a
            className="project-card github-card"
            href="https://github.com/labixiaoQ"
            target="_blank"
            rel="noreferrer"
          >
            <span>03</span>
            <h3>GitHub</h3>
            <p>Find code, notes, and open-source work at labixiaoQ.</p>
            <span className="explore">Visit profile <span aria-hidden="true">↗</span></span>
          </a>
        </div>
      </section>

      <section className="contact-band">
        <p className="eyebrow">CONTACT</p>
        <h2>Let&apos;s start a conversation.</h2>
        <a href="mailto:your.email@example.com">your.email@example.com <span>↗</span></a>
      </section>

      <footer>
        <span>© 2026 Your Name</span>
        <span>Designed as an academic home on the web.</span>
      </footer>
    </main>
  );
}
