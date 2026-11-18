export function Publications({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <>
      <Heading id="publications" className="section-title">📝 Selected Publications</Heading>
      <article className="paper-box">
        <div className="paper-box-image"><div>
          <div className="badge">arXiv 2026</div>
          <img src="./wise-world.webp" alt="Minecraft-inspired concept illustration for WISE" width="400" />
          <p className="gs-pub-note">Concept illustration</p>
        </div></div>
        <div className="paper-box-text">
          <p><strong>WISE: A Long-Horizon Agent in Minecraft with Why-Which Reasoning</strong></p>
          <p><strong>Renmin Cheng</strong> and Changhao Chen</p>
          <p className="paper-venue">arXiv preprint, 2026. Under review at TMLR.</p>
          <p>VLM-based perception, structured memory, causal reasoning, and adaptive task scheduling for long-horizon Minecraft tasks.</p>
          <a href="https://arxiv.org/abs/2606.12852">[Paper]</a>
        </div>
      </article>
      <h2 id="full-publications" className="section-title">📚 Full Publication List</h2>
      <div className="gs-pub-item">
        <div className="gs-pub-title"><a href="https://arxiv.org/abs/2606.12852">WISE: A Long-Horizon Agent in Minecraft with Why-Which Reasoning</a></div>
        <div className="gs-pub-authors"><strong>Renmin Cheng</strong> and Changhao Chen.</div>
        <div className="gs-pub-venue">arXiv preprint, 2026. Under review at TMLR.</div>
      </div>
      <div className="gs-pub-item">
        <div className="gs-pub-title">Research on RCS Measurement Methods Based on Global Adaptive Extraction</div>
        <div className="gs-pub-authors"><strong>Renmin Cheng</strong>, Rong Xie, et al.</div>
        <div className="gs-pub-venue">Radar Science and Technology. Accepted.</div>
      </div>
    </>
  );
}

export function Software() {
  return (
    <div className="software-list">
      <article>
        <h3>WISE Agent</h3>
        <p className="project-date"><time dateTime="2025-05">May 2025</time> – <time dateTime="2026-07">July 2026</time> · Project lead</p>
        <p>A long-horizon Minecraft agent that combines VLM-based perception, structured memory, causal reasoning, and adaptive task scheduling.</p>
        <p><a href="https://arxiv.org/abs/2606.12852">[Paper]</a></p>
      </article>
      <article>
        <h3>MrSteve</h3>
        <p>Instruction-following Minecraft agents with What-Where-When memory.</p>
        <p><a href="https://github.com/labixiaoQ/MrSteve">[Code]</a></p>
      </article>
    </div>
  );
}
