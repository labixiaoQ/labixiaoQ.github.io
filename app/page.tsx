import { Publications, Software } from "./components/research";

export default function Home() {
  return (
    <>
      <section aria-labelledby="about-me">
        <h1 id="about-me" className="section-title">About Me</h1>
        <p>I am <strong>Renmin Cheng (程人民)</strong>, a Ph.D. student at the <a href="https://www.lamda.nju.edu.cn/">LAMDA Group</a>, <a href="https://www.nju.edu.cn/">Nanjing University</a>, advised by <strong>Lanzhe Guo</strong> and <strong>Yufeng Li</strong>.</p>
        <p>My research interests include <strong>long-horizon game agents, embodied AI, and LLM multi-agent systems</strong>. I focus on structured memory and reasoning to help agents perceive, plan, and act in complex environments, particularly Minecraft. My previous research also includes radar cross-section measurement.</p>
        <p className="collab-note">🎮 Building agents that can remember, reason, and act over long horizons.</p>
      </section>
      <h2 id="educations" className="section-title">🎓 Education</h2>
      <div className="edu-entry edu-entry--doctoral">
        <a className="edu-logo-link" href="https://www.nju.edu.cn/"><img src="./images/nanjing-emblem.jpg" className="edu-logo" alt="Nanjing University emblem" width="40" height="40" /></a>
        <div className="education-details"><strong>Nanjing University</strong> · Ph.D. Student<br /><a href="https://www.lamda.nju.edu.cn/">LAMDA Group</a><br /><span className="project-date"><time dateTime="2026-09">September 2026</time> – Present · Advisors: Lanzhe Guo and Yufeng Li</span></div>
        <div className="lamda-watermark" aria-hidden="true">
          <img src="./LAMDA.png" alt="" width="206" height="87" />
        </div>
      </div>
      <div className="edu-entry">
        <a className="edu-logo-link" href="https://www.xidian.edu.cn/"><img src="./images/xidian-emblem.jpg" className="edu-logo" alt="Xidian University emblem" width="40" height="40" /></a>
        <div><strong>Xidian University</strong> · Master’s Degree<br />Information and Communication Engineering<br />State Key Laboratory of Radar Signal Processing<br /><span className="project-date"><time dateTime="2021-09">September 2021</time> – <time dateTime="2024-06">June 2024</time></span></div>
      </div>
      <h2 id="research" className="section-title">🔎 Research Interests</h2>
      <ul className="research-list">
        <li><strong>Long-horizon agents.</strong> Planning and adaptive task scheduling for complex, multi-step goals in Minecraft.</li>
        <li><strong>Memory and reasoning.</strong> Structured memory and causal reasoning that connect past experience with future decisions.</li>
        <li><strong>LLM multi-agent systems.</strong> Cooperation, competition, and strategic decision-making in embodied social dilemmas.</li>
      </ul>
      <h2 id="news" className="section-title">🗞️ News</h2>
      <ul>
        <li>Our paper <a href="https://arxiv.org/abs/2606.12852">WISE</a> has been accepted by <strong>TMLR</strong>.</li>
        <li><time dateTime="2026-09">September 2026</time> — I joined the LAMDA Group at Nanjing University as a Ph.D. student.</li>
        <li><time dateTime="2026-06">June 2026</time> — Our paper <a href="https://arxiv.org/abs/2606.12852">WISE</a> is available on arXiv.</li>
      </ul>
      <Publications />
      <p className="section-link"><a href="./publication.html">View publications →</a></p>
      <h2 id="software" className="section-title">💻 Software</h2>
      <Software />
      <p className="section-link"><a href="./software.html">Explore software →</a></p>
      <h2 id="experience" className="section-title">💼 Experience</h2>
      <div className="experience-list">
        <article>
          <h3>Hong Kong University of Science and Technology (Guangzhou)</h3>
          <p className="project-date">Research Assistant · <time dateTime="2025-05">May 2025</time> – <time dateTime="2026-07">July 2026</time></p>
          <p>Research on open-world agents and multi-agent strategic interaction, including environment development, algorithm implementation, experimental evaluation, and paper writing.</p>
        </article>
        <article>
          <h3>Baidu</h3>
          <p className="project-date">Backend Software Engineer · <time dateTime="2024-07">July 2024</time> – <time dateTime="2025-05">May 2025</time></p>
          <p>Worked on e-commerce search and recommendation infrastructure, focusing on service reliability and real-time retrieval architecture.</p>
        </article>
      </div>
      <h2 id="blog" className="section-title">✍️ Blog</h2>
      <p>No posts yet. <a href="./blog.html">Visit the blog →</a></p>
    </>
  );
}
