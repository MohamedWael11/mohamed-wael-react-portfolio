import React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Reveal from "../Reveal";
import { projects } from "../../data/siteData";

export default function ProjectsSection() {
  return (
    <Reveal delay={100}>
      <section id="projects" className="section section-block projects">
        <div className="section-label">03 / Selected Work</div>

        <div className="split-heading">
          <h2>Things I've <span>built.</span></h2>
          <a className="text-link" href="https://github.com/MohamedWael11" target="_blank" rel="noreferrer">
            All GitHub Projects <ExternalLink size={14} />
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card-v2" key={project.title}>
              <div className={`project-visual visual-${index}`}>
                <span className="project-index">0{index + 1}</span>
                <div className="visual-lines"></div>
                <div className="visual-center">{index === 0 ? "EVENT" : index === 1 ? "AI" : "QUIZ"}</div>
              </div>

              <div className="project-info">
                <small>{project.type}</small>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  View project <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
