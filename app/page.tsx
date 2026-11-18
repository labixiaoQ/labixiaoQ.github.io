import { Publications, Software } from "./components/research";

export default function Home() {
  return (
    <>
      <section aria-labelledby="about-me">
        <h1 id="about-me" className="section-title">About Me</h1>
        <p>I am <strong>Renmin Cheng (程人民)</strong>, an incoming Ph.D. student at the <a href="https://www.lamda.nju.edu.cn/">LAMDA Group</a>, <a href="https://www.nju.edu.cn/">Nanjing University</a>.</p>
        <p>My research interests include <strong>long-horizon game agents, embodied AI, and large language model agents</strong>. I focus on structured memory and reasoning to help agents perceive, plan, and act in complex environments, particularly Minecraft. My previous research also includes radar cross-section measurement.</p>
        <p className="collab-note">🎮 Building agents that can remember, reason, and act over long horizons.</p>
      </section>
      <h2 id="educations" className="section-title">🎓 Education</h2>
      <div className="edu-entry">
        <a href="https://www.lamda.nju.edu.cn/"><img src="./LAMDA.png" className="edu-logo" alt="LAMDA" width="40" height="40" /></a>
        <div>Incoming Ph.D. Student, <strong>Nanjing University</strong><br /><a href="https://www.lamda.nju.edu.cn/">LAMDA Group</a></div>
      </div>
      <h2 id="research" className="section-title">🔎 Research Interests</h2>
      <ul className="research-list">
        <li><strong>Long-horizon agents.</strong> Planning and adaptive task scheduling for complex, multi-step goals in Minecraft.</li>
        <li><strong>Memory and reasoning.</strong> Structured memory and causal reasoning that connect past experience with future decisions.</li>
        <li><strong>Embodied AI and LLM agents.</strong> Connecting perception, language, and action in interactive environments.</li>
      </ul>
      <h2 id="news" className="section-title">🗞️ News</h2>
      <ul><li><time dateTime="2026-06">June 2026</time> — Our paper <a href="https://arxiv.org/abs/2606.12852">WISE</a> is available on arXiv.</li></ul>
      <Publications />
      <p className="section-link"><a href="./publication.html">View publications →</a></p>
      <h2 id="software" className="section-title">💻 Software</h2>
      <Software />
      <p className="section-link"><a href="./software.html">Explore software →</a></p>
      <h2 id="blog" className="section-title">✍️ Blog</h2>
      <p>No posts yet. <a href="./blog.html">Visit the blog →</a></p>
    </>
  );
}
