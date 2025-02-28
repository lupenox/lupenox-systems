import React from "react";
import "./Credentials.css"; // Ensure this CSS file styles the section properly

const Credentials = () => {
  return (
    <section className="credentials-section">
      <h2 className="neon-text">📜 Credentials & Certifications</h2>

      <div className="credential-card">
        <h3>🎓 Bachelor of Science in Computer Science</h3>
        <p><strong>University of Wisconsin-Milwaukee</strong></p>
        <p><em>Expected Graduation: December 2026</em></p>
      </div>

      <div className="credential-card">
        <h3>🔐 Cybersecurity Certificate</h3>
        <p><strong>University of Wisconsin-Milwaukee</strong></p>
        <p><em>Expected Completion: Spring 2027</em></p>
      </div>

      <div className="credential-card">
        <h3>💻 Web Development Certificate</h3>
        <p><strong>University of Wisconsin-Milwaukee</strong></p>
        <p><em>Expected Completion: Fall 2026</em></p>
      </div>

      <div className="coursework-section">
        <h3>📚 Relevant Coursework</h3>
        <ul>
          <li>🛡️ <strong>Computer Security</strong> (COMPSCI 469)</li>
          <li>⚙️ <strong>System Programming</strong> (COMPSCI 337)</li>
          <li>🌐 <strong>Web Design</strong> (INFOST 240)</li>
          <li>📊 <strong>Software Engineering</strong> (COMPSCI 361)</li>
          <li>🔢 <strong>Data Structures & Algorithms</strong> (COMPSCI 351)</li>
          <li>🖥️ <strong>Computer Architecture</strong> (COMPSCI 458)</li>
          <li>🤖 <strong>AI & Machine Learning Foundations</strong> (TBD - Future Course)</li>
        </ul>
      </div>
    </section>
  );
};

export default Credentials;
