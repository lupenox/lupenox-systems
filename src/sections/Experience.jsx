import "../styles/sections/sections.css";
import "../styles/sections/experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        <h2>Experience</h2>

        <p className="experience-subtitle">
          Education, certifications, open source contributions, and technical experience.
        </p>

        <div className="experience-grid">

          <article className="experience-card">
            <div className="experience-card-header">
              <h3>University of Wisconsin–Milwaukee</h3>

              <span className="experience-date">
                B.S. Computer Science • Expected Fall 2026
              </span>
            </div>

            <p className="experience-description">
              Coursework focused on systems programming, operating systems,
              backend development, software engineering, cybersecurity,
              algorithms, and infrastructure-focused computing.
            </p>

            <div className="experience-pill-list">
              <span className="experience-pill">Operating Systems</span>
              <span className="experience-pill">System Programming</span>
              <span className="experience-pill">Computer Security</span>
              <span className="experience-pill">Software Engineering</span>
            </div>

            <div className="experience-project-links">

              <span className="experience-link">
                • System Programming
              </span>

              <span className="experience-link">
                • Operating Systems
              </span>

              <span className="experience-link">
                • Server-side Internet Programming
              </span>

              <span className="experience-link">
                • Computer Architecture
              </span>

              <span className="experience-link">
                • Programming Language Concepts
              </span>

              <span className="experience-link">
                • Data Structures & Algorithms
              </span>

              <span className="experience-link">
                • Introduction to Computer Security
              </span>

              <span className="experience-link">
                • Intro to Software Engineering
              </span>
            </div>
          </article>

          <article className="experience-card">
            <div className="experience-card-header">
              <h3>Technical Certifications</h3>

              <span className="experience-date">
                2026 • Completed & In Progress
              </span>
            </div>

          <ul className="experience-list">
            <li>AWS Cloud Practitioner Essentials — AWS</li>
            <li>Google IT Automation with Python — Google</li>
            <li>Configuration Management and the Cloud — Google</li>
            <li>Troubleshooting and Debugging Techniques — Google</li>
            <li>Introduction to Git and GitHub — Google</li>
            <li>Using Python to Interact with the Operating System — Google</li>
            <li>Crash Course on Python — Google</li>
            <li>Web Development Certificate — UWM</li>
            <li>Linux Foundation Certified System Administrator (LFCS) — In Progress</li>
          </ul>

          <div className="experience-pill-list">
            <span className="experience-pill">Linux</span>
            <span className="experience-pill">Python</span>
            <span className="experience-pill">Git</span>
            <span className="experience-pill">Cloud</span>
          </div>

          <a
            href="https://www.linkedin.com/in/logan-lapierre-555348354/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-link"
          >
          View certifications →
          </a>
        </article>

        <article className="experience-card">
          <div className="experience-card-header">
            <h3>Open Source Contribution</h3>

            <span className="experience-date">
              LMMS Audio Recording Pull Request
            </span>
          </div>

          <p className="experience-description">
            Developed an experimental audio recording implementation for the
            LMMS open-source digital audio workstation. Participated in pull
            request discussions, collaborative development workflows, technical
            review, and community feedback iteration.
          </p>

          <div className="experience-pill-list">
            <span className="experience-pill">Open Source</span>
            <span className="experience-pill">GitHub PR</span>
            <span className="experience-pill">Code Review</span>
            <span className="experience-pill">Audio Software</span>
          </div>

          <a
            href="https://github.com/LMMS/lmms/pull/8074"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-link"
          >
            View pull request →
          </a>
        </article>

        <article className="experience-card">
          <div className="experience-card-header">
            <h3>Collaborative Engineering Projects</h3>

            <span className="experience-date">
              University & Team-Based Development
            </span>
          </div>

          <p className="experience-description">
            Worked on collaborative full-stack and infrastructure-focused
            engineering projects involving React Native, Deno Deploy,
            PostgreSQL/Neon databases, DevSecOps workflows, backend APIs,
            machine learning experimentation, testing, debugging, and
            AI-assisted development workflows.
          </p>

          <div className="experience-pill-list">
            <span className="experience-pill">DevSecOps</span>
            <span className="experience-pill">Django</span>
            <span className="experience-pill">Machine Learning</span>
            <span className="experience-pill">Collaboration</span>
          </div>

          <div className="experience-project-links">

            <a
              href="https://github.com/lupenox/CRN"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-link"
            >
              CRN Capstone Repository →
            </a>

            <a
              href="https://drive.google.com/file/d/1qx4Um18YPdSWidyUWa7rwFZn85NSrwHX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-link"
            >
              CRN Demo Video →
            </a>

            <a
              href="https://drive.google.com/file/d/1kldrmZmEzlLY-gDGHb5DU5TFKKLz4fd6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-link"
            >
              CRN Presentation Slides→
            </a>

            <a
              href="https://github.com/lupenox/Django-Project-Zyemlja"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-link"
            >
              Django Project Zyemlja →
            </a>

            <a
              href="https://github.com/lupenox/SCADA-Anomaly-Detection"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-link"
            >
              SCADA ML Detection →
            </a>

          </div>
        </article>

        </div>
      </div>
    </section>
  );
}

export default Experience;