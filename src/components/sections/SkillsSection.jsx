import React from "react";
import { BrainCircuit, Code2, Layers3 } from "lucide-react";
import Reveal from "../Reveal";
import { skills } from "../../data/siteData";

export default function SkillsSection() {
  return (
    <Reveal delay={100}>
      <section id="skills" className="section section-block">
        <div className="section-label">02 / Expertise</div>

        <div className="split-heading">
          <h2>What I <span>work with.</span></h2>
          <p>Technologies I use to build interfaces, applications, and AI experiments.</p>
        </div>

        <div className="expertise-grid">
          <article className="expertise-card featured">
            <div className="icon-box"><Code2 /></div>
            <small>01 — FRONTEND</small>
            <h3>Modern Web Interfaces</h3>
            <p>Responsive, component-driven interfaces with React, Next.js, JavaScript, and modern CSS.</p>
          </article>

          <article className="expertise-card">
            <div className="icon-box"><BrainCircuit /></div>
            <small>02 — AI</small>
            <h3>AI & Computer Vision</h3>
            <p>Practical AI projects with Python, YOLO, and computer-vision workflows.</p>
          </article>

          <article className="expertise-card">
            <div className="icon-box"><Layers3 /></div>
            <small>03 — FOUNDATIONS</small>
            <h3>Full-Stack Foundations</h3>
            <p>APIs, backend concepts, databases, Git, and the architecture behind complete applications.</p>
          </article>
        </div>

        <div className="skill-marquee">
          <div className="skill-track">
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill}-${index}`}>{skill}<b>✦</b></span>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
