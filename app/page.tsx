const news = [
  "[2026.09, upcoming] I will join LAMDA, Nanjing University as a Ph.D. student.",
  "[2026.06] Our paper WISE is available on arXiv.",
];

const publications = [
  {
    title: "WISE: A Long-Horizon Agent in Minecraft with Why-Which Reasoning",
    authors: "Renmin Cheng and Changhao Chen",
    venue: "arXiv preprint arXiv:2606.12852, 2026. Under review at TMLR.",
    links: [{ label: "[arXiv]", href: "https://arxiv.org/abs/2606.12852" }],
  },
  {
    title: "Research on RCS Measurement Methods Based on Global Adaptive Extraction",
    authors: "Renmin Cheng, Rong Xie, et al.",
    venue: "Radar Science and Technology. Accepted.",
    links: [],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="site-name" href="#top">RENMIN CHENG</a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#news">News</a>
            <a href="#publications">Publications</a>
            <a href="#projects">Projects</a>
          </nav>
        </div>
      </header>

      <section className="profile" id="top">
        <img className="portrait" src="/renmin-cheng.png" alt="Portrait of Renmin Cheng" />
        <div className="profile-content">
          <h1>Renmin Cheng</h1>
          <p className="name-cn">程人民</p>
          <p className="role">Incoming Ph.D. Student <span>·</span> September 2026</p>
          <p className="affiliation">LAMDA Group<br />Nanjing University</p>
          <ul className="contact-list">
            <li><a href="mailto:18729503350@163.com">Email: 18729503350@163.com</a></li>
            <li><a href="https://github.com/labixiaoQ" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
      </section>

      <section className="section" id="about">
        <h2>About Me</h2>
        <div className="section-body about-body">
          <p>
            I am an incoming Ph.D. student at the LAMDA Group, Nanjing University.
            My research focuses on building capable and reliable agents that can
            perceive, reason, plan, and act in complex environments.
          </p>
          <p>
            I am particularly interested in long-horizon game agents, embodied
            intelligence, and large language model agents. Before beginning my
            doctoral study, I worked on research projects spanning intelligent
            agents and radar cross-section measurement.
          </p>
        </div>
      </section>

      <section className="section" id="research">
        <h2>Research</h2>
        <div className="section-body">
          <p>
            My goal is to develop agents that can use structured memory and
            reasoning to complete long-horizon tasks robustly in digital and
            physical environments.
          </p>
          <p className="keywords">
            <strong>Research Keywords:</strong> Game Agents, Embodied AI, LLM
            Agents, Long-Horizon Planning, Memory and Reasoning
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
                <p>
                  <em>{publication.venue}</em>{" "}
                  {publication.links.map((link) => (
                    <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label}</a>
                  ))}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <h2>Projects</h2>
        <div className="section-body software-list">
          <p>
            <strong>WISE Agent</strong> <span className="date">(2025.05 - 2026.07)</span>
            <br />Project lead for a long-horizon Minecraft agent that combines
            VLM-based perception, structured memory, causal reasoning, and
            adaptive task scheduling.
          </p>
          <p>
            <a href="https://github.com/labixiaoQ/MrSteve" target="_blank" rel="noreferrer"><strong>MrSteve</strong></a>
            <br />Instruction-following Minecraft agents with What-Where-When memory.
          </p>
          <p>
            <a href="https://github.com/labixiaoQ" target="_blank" rel="noreferrer"><strong>More on GitHub</strong></a>
            <br />Code, notes, and open-source work.
          </p>
        </div>
      </section>

      <footer>
        <div>
          <strong>Renmin Cheng</strong><br />
          LAMDA Group, Nanjing University
        </div>
        <div>
          <strong>Contact</strong><br />
          <a href="mailto:18729503350@163.com">18729503350@163.com</a>
        </div>
      </footer>
    </main>
  );
}
