function ProjectDisplay({ project, featured = false }) {
  return (
    <article className={`project-card glass-card project-${project.accent} ${featured ? "project-featured" : ""}`}>
      {/* CSS-only mock screenshot keeps the portfolio fast while creating a premium visual hook. */}
      <div className="project-preview" aria-hidden="true">
        <div className="preview-toolbar"><span /><span /><span /></div>
        <div className="preview-grid">
          <i /><i /><i /><i />
        </div>
        <div className="preview-command">{project.title.toLowerCase().replaceAll(" ", "-")} --run</div>
      </div>

      <div className="project-card-header">
        <div>
          <span className="project-status">{project.status}</span>
          <h3>{project.title}</h3>
        </div>
      </div>

      <p className="project-impact">{project.impact}</p>
      <p className="project-description">{project.description}</p>

      <div className="project-tech-list">
        {project.tech.map((tech) => (
          <span className="project-pill" key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-actions">
        <a className="project-link" href={project.github} target="_blank" rel="noreferrer">GitHub →</a>
        {project.demo && <a className="project-link muted" href={project.demo}>Demo / walkthrough →</a>}
      </div>
    </article>
  );
}

export default ProjectDisplay;
