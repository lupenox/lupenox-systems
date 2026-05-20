import "../styles/sections/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <h2>Contact</h2>

        <p className="contact-subtitle">
          Connect with me through GitHub, LinkedIn, Handshake, or email.
        </p>

        <div className="contact-grid">

          <a
            href="https://github.com/lupenox"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>GitHub</h3>

            <p>
              View my projects, repositories, and open-source work.
            </p>

            <span className="contact-link">
              github.com/lupenox →
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/logan-lapierre-555348354"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>LinkedIn</h3>

            <p>
              Connect with me professionally and view my experience.
            </p>

            <span className="contact-link">
              View LinkedIn →
            </span>
          </a>

          <a
            href="https://uwm.joinhandshake.com/profiles/loganlapierre"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>Handshake</h3>

            <p>
              View my student and career profile through Handshake.
            </p>

            <span className="contact-link">
              View Handshake →
            </span>
          </a>

          <a
            href="mailto:logan.lupenox@gmail.com"
            className="contact-card"
          >
            <h3>Email</h3>

            <p>
              Reach out directly for opportunities, collaboration,
              networking, or technical discussions.
            </p>

            <span className="contact-link">
              logan.lupenox@gmail.com →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;