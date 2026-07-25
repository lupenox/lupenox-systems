import { useState } from "react";

function ProjectDisplay({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className={`project-card ${project.isFlagship ? "flagship-card" : "secondary-card"}`}>
      <div className="project-card-header">
        <div className="project-title-group">
          {project.category && <span className="project-category">{project.category}</span>}
          <h3 className="project-title">{project.title}</h3>
        </div>
        <span className={`project-status status-${project.status.toLowerCase().replace(/\s+/g, "-")}`}>
          {project.status}
        </span>
      </div>

      <p className="project-problem">
        <strong>The Problem:</strong> {project.problem}
      </p>

      <p className="project-description">
        <strong>What I Built:</strong> {project.description}
      </p>

      {/* Lightweight SVG Architecture Diagram */}
      {project.diagramSvg && (
        <div className="project-diagram-wrapper">
          <div className="diagram-label">Verified Architecture Pipeline</div>
          <div
            className="project-diagram"
            dangerouslySetInnerHTML={{ __html: project.diagramSvg }}
          />
        </div>
      )}

      {/* Tech Stack Tags */}
      <div className="project-tech-list">
        {project.tech.map((tech) => (
          <span className="project-pill" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      {/* Expandable Architecture & Technical Notes (Scannable Layout) */}
      {project.architectureBullets && project.architectureBullets.length > 0 && (
        <div className="project-details-section">
          <button
            type="button"
            className="details-toggle-btn"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Collapse Technical Deep-Dive ▲" : "Expand Technical Deep-Dive & Decision Notes ▼"}
          </button>

          {isExpanded && (
            <div className="project-expanded-content">
              <h4>Architecture & Technical Key Decisions</h4>
              <ul className="architecture-bullet-list">
                {project.architectureBullets.map((bullet, idx) => (
                  <li key={idx}>
                    <strong>{bullet.title}:</strong> {bullet.detail}
                  </li>
                ))}
              </ul>

              {project.testingNote && (
                <div className="testing-note-box">
                  <strong>Verification & Testing:</strong> {project.testingNote}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="project-footer-links">
        {project.github && (
          <a
            className="project-link btn-github"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository on GitHub ↗
          </a>
        )}
        {project.demoUrl && (
          <a
            className="project-link btn-demo"
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project Link ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectDisplay;