import React from "react";
import Reveal from "../Reveal";

export default function AboutSection() {
  return (
    <Reveal>
      <section id="about" className="section section-block about">
        <div className="section-label">01 / About</div>
        <div className="about-grid">
          <div>
            <p className="giant-number">01</p>
            <h2>Code with purpose.<br /><span>Design with intent.</span></h2>
          </div>

          <div className="about-copy">
            <p>
              I'm Mohamed Wael, a final-year Computer Engineering student at Pharos University with a strong focus on frontend development and growing experience in AI.
            </p>
            <p>
              I enjoy taking an idea from a rough concept to a polished, responsive interface. My current stack revolves around React and Next.js, while I continue exploring computer vision and AI-powered applications.
            </p>

            <div className="about-stats">
              <div><strong>React</strong><span>Frontend</span></div>
              <div><strong>AI</strong><span>Exploring</span></div>
              <div><strong>CE</strong><span>Final Year</span></div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
