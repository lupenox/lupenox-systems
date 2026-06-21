import profilePic from "../assets/profile-pic.jpg";
import "../styles/sections/sections.css";
import "../styles/sections/about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image glass-card">
          <img src={profilePic} alt="Logan Lapierre" id="Me" />
        </div>

        <div className="about-content glass-card">
          <p className="about-tag">Computer Science • DevOps Focused</p>
          <h2 className="section-title">I build practical AI systems with production instincts.</h2>
          <div className="text">
            <p>
              I’m Logan Lapierre, a senior Computer Science student at the
              University of Wisconsin–Milwaukee graduating in December 2026.
              My sweet spot is where agentic AI meets Linux, automation,
              infrastructure, and developer workflows.
            </p>
            <p>
              I’m focused on building tools that feel useful: local LLM apps,
              shell assistants, CI/CD experiments, diagnostics utilities, and
              workflow automations that reduce manual effort and make systems
              easier to debug.
            </p>
            <p>
              I’m pursuing roles in DevOps, SRE, Linux systems, cloud support,
              backend engineering, and AI automation where curiosity, reliability,
              and fast iteration matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
