const news = [
  "[2026.07] This homepage is now online.",
  "[2026.06] Add your most recent paper, award, talk, or research update here.",
  "[2026.01] Add an earlier academic milestone here.",
];

const publications = [
  {
    title: "Title of your representative paper",
    authors: "Your Name, Co-author One, and Co-author Two",
    venue: "Conference or Journal, 2026.",
    links: ["[Paper]", "[Code]"],
  },
  {
    title: "Title of your second representative paper",
    authors: "Your Name, Co-author One, and Co-author Two",
    venue: "Conference or Journal, 2025.",
    links: ["[Paper]", "[Project]"],
  },
  {
    title: "Title of an earlier paper or preprint",
    authors: "Your Name, Co-author One, and Co-author Two",
    venue: "Preprint or Workshop, 2024.",
    links: ["[Paper]"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="site-name" href="#top">YOUR NAME</a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#news">News</a>
            <a href="#publications">Publications</a>
            <a href="#software">Software</a>
          </nav>
        </div>
      </header>

      <section className="profile" id="top">
        <div className="portrait" aria-label="Portrait placeholder">
          <span>YN</span>
          <small>YOUR PHOTO</small>
        </div>
        <div className="profile-content">
          <h1>Your Name</h1>
          <p className="name-cn">中文姓名</p>
          <p className="role">Ph.D. Candidate / Researcher</p>
          <p className="affiliation">Department or School<br />University or Institution</p>
          <ul className="contact-list">
            <li>City, Country</li>
            <li><a href="mailto:your.email@example.com">Email: your.email@example.com</a></li>
            <li>
              <a href="https://github.com/labixiaoQ" target="_blank" rel="noreferrer">GitHub</a>
              <span aria-hidden="true"> · </span>
              <a href="#publications">Google Scholar</a>
              <span aria-hidden="true"> · </span>
              <a href="#about">CV</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="about">
        <h2>About Me</h2>
        <div className="section-body about-body">
          <p>
            I am a researcher working on machine learning and intelligent
            systems. This space can introduce your current position, training,
            research motivations, and a small amount of personal context in a
            direct, academic tone.
          </p>
          <p>
            Replace this placeholder with a concise biography. A good length is
            two short paragraphs: who you are, what you study, and where you
            have studied or worked.
          </p>
        </div>
      </section>

      <section className="section" id="research">
        <h2>Research</h2>
        <div className="section-body">
          <p>
            My research interests include machine learning, intelligent systems,
            and human-centered artificial intelligence. I am interested in
            developing reliable computational methods that support reasoning,
            decision-making, and real-world use.
          </p>
          <p className="keywords">
            <strong>Research Keywords:</strong> Machine Learning, AI Agents,
            Reasoning, Planning, Human-Centered AI
          </p>
        </div>
      </section>

      <section className="section" id="news">
        <h2>News</h2>
        <ul className="news-list">
          {news.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section" id="publications">
        <h2>Selected Publications</h2>
        <div className="publication-list">
          {publications.map((publication, index) => (
            <article className="publication" key={publication.title}>
              <span className="publication-number">[{index + 1}]</span>
              <div>
                <p className="paper-title">{publication.title}</p>
                <p>{publication.authors}</p>
                <p><em>{publication.venue}</em> {publication.links.map((link) => <a href="#publications" key={link}>{link} </a>)}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="all-publications"><a href="#publications">Full publication list →</a></p>
      </section>

      <section className="section" id="software">
        <h2>Projects &amp; Software</h2>
        <div className="section-body software-list">
          <p><a href="https://github.com/labixiaoQ" target="_blank" rel="noreferrer"><strong>GitHub Profile</strong></a> — Source code, notes, and open-source work.</p>
          <p><strong>Project Name</strong> — Add a one-sentence description and a project link here.</p>
        </div>
      </section>

      <footer>
        <div>
          <strong>Your Name</strong><br />
          University or Institution<br />
          City, Country
        </div>
        <div>
          <strong>Contact</strong><br />
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </div>
      </footer>
    </main>
  );
}
