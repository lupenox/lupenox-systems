import profilePic from "../assets/profile-pic.jpg";
import "../styles/sections/sections.css";
import "../styles/sections/about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container container">
        <div className="about-image">
          <img src={profilePic} alt="Logan Lapierre - AI Engineer" id="Me" />
        </div>

        <div className="about-content">
          <p className="about-tag">
            AI ENGINEER • COMPUTER SCIENCE SENIOR
          </p>

          <h2>About Me</h2>

          <div className="text">
            <p>
              Hi, I'm <strong>Logan Lapierre</strong>, a senior at the University of Wisconsin–Milwaukee studying Computer Science. I build agentic web workflows, real-time voice AI agents, on-device local model pipelines, and machine learning applications.
            </p>

            <p>
              My engineering approach centers on practical, evidence-driven AI application development. Rather than relying solely on cloud API wrappers or high-level abstractions, I focus on system-level performance — optimizing real-time voice latency with WebRTC and STT/TTS streams, engineering state-machine agent workflows, running local LLMs on-device, and backing services with reliable Linux and CI/CD infrastructure.
            </p>

            <p>
              My background in Linux administration, Docker containerization, AWS cloud, C sockets, and Python backend engineering gives me the operational foundation to deploy, monitor, and scale AI-powered systems safely.
            </p>

            <div className="about-highlight-box">
              🎯 <strong>Career Target:</strong> I am actively seeking remote <strong>AI Engineering</strong>, <strong>Applied AI</strong>, or <strong>AI Software Engineering</strong> internships and entry-level roles. Expected graduation: <strong>December 2026</strong> (Available for full-time employment starting <strong>January 2027</strong>).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

