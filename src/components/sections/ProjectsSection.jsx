import React, { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink, Github, X } from "lucide-react";
import Reveal from "../Reveal";
import { projects } from "../../data/siteData";

export default function ProjectsSection() {
  const [openProject, setOpenProject] = useState(null);
  const [modalPosition, setModalPosition] = useState(null);

  useEffect(() => {
    if (!openProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenProject(null);
        setModalPosition(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [openProject]);

  const renderPreview = (index) => {
    if (index === 0) {
      return (
        <div className="preview-store">
          <div className="store-top"><b>Shop<span>ly</span></b><small>Home&nbsp;&nbsp; Products&nbsp;&nbsp; Categories</small><em>Cart (2)</em></div>
          <div className="store-hero"><small>NEW COLLECTION</small><strong>Find what<br /><span>you love.</span></strong><button>Shop now</button></div>
          <div className="store-products"><i></i><i></i><i></i></div>
        </div>
      );
    }
    if (index === 1) {
      return (
        <div className="preview-notes">
          <div className="notes-side"><b>Notes</b><span>All notes</span><span>Favorites</span><span>Trash</span></div>
          <div className="notes-main"><div className="notes-top"><small>MY NOTES</small><b>+ New note</b></div><div className="note-cards"><i><b>Project ideas</b><span>Plan the next release...</span></i><i><b>Shopping list</b><span>Milk, bread, coffee...</span></i><i><b>Meeting notes</b><span>Remember to follow up...</span></i></div></div>
        </div>
      );
    }
    if (index === 2) {
      return (
        <div className="preview-quiz">
          <div className="quiz-top"><b>QUIZ<span>APP</span></b><small>Question 04 / 10</small></div>
          <div className="quiz-progress"><i></i></div>
          <div className="quiz-content"><small>JAVASCRIPT</small><strong>Which method creates a new array from the results of calling a function?</strong><span>A&nbsp;&nbsp; forEach()</span><span className="selected">B&nbsp;&nbsp; map()</span><span>C&nbsp;&nbsp; filter()</span></div>
        </div>
      );
    }
    return (
      <div className="preview-bookmarks">
        <div className="bookmarks-top"><b>Bookmark<span>er</span></b><button>+ Add bookmark</button></div>
        <div className="bookmark-form"><span>Website name</span><span>https://example.com</span><b>Save</b></div>
        <div className="bookmark-list"><i><b>MDN Web Docs</b><span>developer.mozilla.org</span></i><i><b>GitHub</b><span>github.com</span></i></div>
      </div>
    );
  };

  return (
    <Reveal delay={100}>
      <>
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
                {renderPreview(index)}
              </div>

              <div className="project-info">
                <small>{project.type}</small>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-actions">
                  <button
                    type="button"
                    className="project-link project-menu-trigger"
                    onClick={(event) => {
                      const buttonRect = event.currentTarget.getBoundingClientRect();
                      const modalWidth = Math.min(320, window.innerWidth - 32);
                      setOpenProject(project);
                      setModalPosition({
                        top: Math.max(16, buttonRect.top - 172),
                        left: Math.max(16, Math.min(buttonRect.left, window.innerWidth - modalWidth - 16))
                      });
                    }}
                    aria-expanded={openProject?.title === project.title}
                  >
                    View project <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        </section>

        {openProject && (
          <div className="project-modal-backdrop" role="presentation" onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpenProject(null);
          }}>
            <div
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              style={{
                "--modal-top": `${modalPosition?.top ?? 0}px`,
                "--modal-left": `${modalPosition?.left ?? 0}px`
              }}
            >
              <button type="button" className="project-modal-close" onClick={() => setOpenProject(null)} aria-label="Close project links">
                <X size={18} />
              </button>
              <p className="project-modal-kicker">PROJECT · {openProject.title.toUpperCase()}</p>
              <h3 id="project-modal-title">Choose an option</h3>
              <div className="project-modal-actions">
                {openProject.liveDemo ? (
                  <a href={openProject.liveDemo} target="_blank" rel="noreferrer" className="project-modal-option featured">
                    <span>Live Demo</span><ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="project-modal-option featured disabled">
                    <span>Live Demo</span>
                  </span>
                )}
                <a href={openProject.repoUrl} target="_blank" rel="noreferrer" className="project-modal-option">
                  <span>View source</span><Github size={17} />
                </a>
              </div>
            </div>
          </div>
        )}
      </>
    </Reveal>
  );
}
