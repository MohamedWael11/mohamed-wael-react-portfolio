import React from "react";
import { ArrowDown, ArrowUpRight, BrainCircuit, Code2, Sparkles, Terminal } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <div className="eyebrow reveal visible"><span></span> Available for internships & junior opportunities</div>

        <div className="hero-title-wrap">
          <p className="mini-kicker">HELLO, I'M</p>
          <h1 className="hero-title">
            Mohamed<br />
            <span>Wael<span className="dot">.</span></span>
          </h1>
        </div>

        <div className="hero-role">
          <span>Frontend Developer</span>
          <b>×</b>
          <span>AI Enthusiast</span>
        </div>

        <p className="hero-text">
          Final-year Computer Engineering student building clean, responsive digital experiences with React and exploring the intersection of frontend development and AI.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn primary">Explore My Work <ArrowUpRight size={17} /></a>
          <a href="#contact" className="btn ghost">Let's Connect</a>
        </div>

        <div className="hero-meta">
          <span><i></i> Egypt</span>
          <span>Computer Engineering</span>
          <span>Final Year</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="grid-orbit"></div>
        <div className="floating-tag tag-one"><Code2 size={14} /> React</div>
        <div className="floating-tag tag-two"><BrainCircuit size={14} /> AI</div>
        <div className="floating-tag tag-three"><Sparkles size={14} /> Creative</div>

        <div className="profile-card">
          <div className="scanline"></div>
          <div className="card-header">
            <div className="terminal-title"><span></span><span></span><span></span> portfolio.js</div>
            <Terminal size={15} />
          </div>
          <div className="avatar-large">MW</div>
          <div className="card-name">Mohamed Wael</div>
          <div className="card-role">FRONTEND DEVELOPER</div>

          <div className="code-snippet">
            <span className="purple">const</span> developer = <span className="yellow">{"{"}</span><br />
            &nbsp;&nbsp;focus: <span className="green">"Frontend"</span>,<br />
            &nbsp;&nbsp;stack: [<span className="green">"React"</span>, <span className="green">"Next.js"</span>],<br />
            &nbsp;&nbsp;interest: <span className="green">"AI Engineering"</span><br />
            <span className="yellow">{"}"}</span>;
          </div>

          <div className="card-bottom"><span>STATUS</span><b><i></i> Building</b></div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator"><span>Scroll to explore</span><ArrowDown size={15} /></a>
    </section>
  );
}
