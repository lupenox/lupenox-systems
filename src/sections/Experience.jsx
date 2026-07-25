import "../styles/sections/sections.css";
import "../styles/sections/experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container container">
        <h2 className="header">Education & Engineering Foundation</h2>

        <p className="experience-subtitle">
          Computer science coursework, cloud certifications, open-source contributions, and the systems engineering foundation that powers my AI applications.
        </p>

        <div className="experience-grid">
          {/* Education Card */}
          <article className="experience-card">
            <div className="experience-card-header">
              <h3>University of Wisconsin–Milwaukee</h3>
              <span className="experience-date">
                B.S. Computer Science • Expected December 2026
              </span>
            </div>

            <p className="experience-description">
              Computer science curriculum focused on core systems programming, operating systems, server-side internet programming, software engineering, cybersecurity, algorithms, and infrastructure-focused computing.
            </p>

            <div className="experience-pill-list">
              <span className="experience-pill">Operating Systems</span>
              <span className="experience-pill">Systems Programming</span>
              <span className="experience-pill">Computer Security</span>
              <span className="experience-pill">Software Engineering</span>
            </div>

            <div className="experience-courses-grid">
              <span className="course-item">• Systems Programming</span>
              <span className="course-item">• Operating Systems</span>
              <span className="course-item">• Server-Side Internet Programming</span>
              <span className="course-item">• Computer Architecture</span>
              <span className="course-item">• Programming Language Concepts</span>
              <span className="course-item">• Data Structures & Algorithms</span>
              <span className="course-item">• Introduction to Computer Security</span>
              <span className="course-item">• Intro to Software Engineering</span>
            </div>

            <div className="experience-availability-tag">
              🎓 Seeking Remote AI Engineering / Applied AI Internships & Entry-Level Roles • Available Full-Time <strong>January 2027</strong>.
            </div>
          </article>

          {/* Certifications Card */}
          <article className="experience-card">
            <div className="experience-card-header">
              <h3>Technical Certifications</h3>
              <span className="experience-date">
                Completed & In Progress
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
              <span className="experience-pill">Linux Admin</span>
              <span className="experience-pill">Python Automation</span>
              <span className="experience-pill">Git / GitHub</span>
              <span className="experience-pill">AWS Cloud</span>
            </div>

            <a
              href="https://www.linkedin.com/in/logan-lapierre-555348354/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-link"
            >
              View Verified Certifications on LinkedIn →
            </a>
          </article>

          {/* Open Source Contribution Card */}
          <article className="experience-card">
            <div className="experience-card-header">
              <h3>Open Source Contribution</h3>
              <span className="experience-date">
                LMMS Digital Audio Workstation PR
              </span>
            </div>

            <p className="experience-description">
              Developed an experimental audio recording implementation for the LMMS open-source digital audio workstation. Participated in pull request code reviews, community technical discussions, and collaborative C++ / audio processing feedback iteration.
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
              View LMMS Pull Request #8074 →
            </a>
          </article>

          {/* Collaborative Projects Card */}
          <article className="experience-card">
            <div className="experience-card-header">
              <h3>Collaborative Systems & Full-Stack Projects</h3>
              <span className="experience-date">
                University & Team Engineering
              </span>
            </div>

            <p className="experience-description">
              Collaborated on full-stack web and mobile engineering projects involving React Native, PostgreSQL/Neon databases, Django backend services, DevSecOps workflows, unit testing, and team-based development.
            </p>

            <div className="experience-pill-list">
              <span className="experience-pill">React Native</span>
              <span className="experience-pill">Django Backend</span>
              <span className="experience-pill">DevSecOps</span>
              <span className="experience-pill">Team Collaboration</span>
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
                href="https://github.com/lupenox/Django-Project-Zyemlja"
                target="_blank"
                rel="noopener noreferrer"
                className="experience-link"
              >
                Django Project Zyemlja →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;