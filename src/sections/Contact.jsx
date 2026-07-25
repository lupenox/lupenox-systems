import resumePdf from "../assets/Logan_Lapierre_AI_Engineering_Resume.pdf";
import "../styles/sections/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container container">
        <h2>Get In Touch</h2>

        <p className="contact-subtitle">
          I am seeking remote AI Engineering, Applied AI, or AI Software Engineering internships and entry-level roles. Graduating December 2026 (Available full-time January 2027).
        </p>

        <div className="contact-grid">
          <a
            href="https://github.com/lupenox"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>GitHub Repositories</h3>
            <p>
              Inspect verified source code, architecture patterns, and unit tests across my AI projects.
            </p>
            <span className="contact-link">github.com/lupenox ↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/logan-lapierre-555348354/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>LinkedIn Profile</h3>
            <p>
              Connect with me professionally, view certifications, and discuss AI Engineering opportunities.
            </p>
            <span className="contact-link">View LinkedIn Profile ↗</span>
          </a>

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>AI Engineering Resume</h3>
            <p>
              View or download my complete formal PDF resume detailing technical background and project architectures.
            </p>
            <span className="contact-link">View Resume PDF ↗</span>
          </a>

          <a
            href="https://uwm.joinhandshake.com/profiles/loganlapierre"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>Handshake Profile</h3>
            <p>
              View my academic record, computer science coursework, and university background.
            </p>
            <span className="contact-link">View Handshake Profile ↗</span>
          </a>

          <a href="mailto:logan.lupenox@gmail.com" className="contact-card">
            <h3>Direct Email</h3>
            <p>
              Reach out directly for interviews, technical discussions, software roles, or collaboration.
            </p>
            <span className="contact-link">logan.lupenox@gmail.com ✉</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;