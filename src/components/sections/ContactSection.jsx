import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "../Reveal";

export default function ContactSection() {
  return (
    <Reveal>
      <section id="contact" className="section section-block contact">
        <div className="contact-inner">
          <div className="section-label">04 / Contact</div>
          <p className="contact-kicker">HAVE A PROJECT IN MIND?</p>
          <h2>Let's create<br /><span>something great.</span></h2>
          <p className="contact-desc">Open to internships, junior frontend opportunities, collaborations, and interesting projects.</p>

          <a href="mailto:your.email@example.com" className="btn primary">
            Start a Conversation <Mail size={17} />
          </a>

          <div className="contact-links">
            <a href="https://github.com/MohamedWael11" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a href="https://linkedin.com/in/mohammed-wael-8120b027" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
