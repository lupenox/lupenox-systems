import "../styles/sections/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <p className="section-kicker">Let’s connect</p>
        <h2 className="section-title">Want to talk AI, Linux, DevOps, or weird useful tools?</h2>

        <p className="section-subtitle contact-subtitle">
          GitHub is best for code, LinkedIn is best for professional context, and
          email is best if you want to reach me directly.
        </p>

        <div className="contact-grid">

          <a
            href="https://github.com/lupenox"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card glass-card"
          >
            <h3>GitHub</h3>

            <p>
              Projects, experiments, and whatever I’m currently building or breaking.
            </p>

            <span className="contact-link">
              github.com/lupenox →
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/logan-lapierre-555348354"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card glass-card"
          >
            <h3>LinkedIn</h3>

            <p>
              Professional background, certs, and the more normal version of me.
            </p>

            <span className="contact-link">
              View LinkedIn →
            </span>
          </a>

          <a
            href="https://uwm.joinhandshake.com/profiles/loganlapierre"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card glass-card"
          >
            <h3>Handshake</h3>

            <p>
              My student career profile for internships and university recruiting.
            </p>

            <span className="contact-link">
              View Handshake →
            </span>
          </a>

          <a
            href="mailto:logan.lupenox@gmail.com"
            className="contact-card glass-card"
          >
            <h3>Email</h3>

            <p>
              The fastest way to reach me for roles, collaborations, or technical chats.
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
