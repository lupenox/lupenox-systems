function ProjectDisplay({ project }) {
    return (
      <article className="project-card">
        <div className="project-card-header">
          <h3>{project.title}</h3>
          <span className="project-status">{project.status}</span>
        </div>
  
        <p className="project-description">{project.description}</p>
  
        <div className="project-tech-list">
          {project.tech.map((tech) => (
            <span className="project-pill" key={tech}>
              {tech}
            </span>
          ))}
        </div>
  
        <a
          className="project-link"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub →
        </a>
      </article>
    );
  }
  
  export default ProjectDisplay;