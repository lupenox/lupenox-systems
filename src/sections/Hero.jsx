import profilePic from "../assets/profile-pic.jpg";
import "../styles/sections/hero.css";
import "../styles/sections/sections.css";
import VeilBG from "../components/Animated_Background";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg" aria-hidden="true">
        <VeilBG />
      </div>

      {/* Premium hero designed to communicate Logan's target role immediately. */}
      <div className="container hero-shell glass-card">
        <div className="hero-copy">
          <p className="hero-eyebrow">Available for 2026 internships & new-grad pipelines</p>
          <h1 className="hero-title">Logan Lapierre</h1>
          <p className="hero-role">Agentic AI Engineer &amp; DevOps Specialist</p>
          <p className="hero-tagline">
            Senior CS student building recruiter-ready automation: local AI agents,
            Linux tooling, CI/CD pipelines, and infrastructure systems that turn messy
            workflows into reliable, observable software.
          </p>

          <div className="hero-cta-row">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-secondary" href="#contact">Contact</a>
          </div>

          <div className="hero-metrics" aria-label="Portfolio highlights">
            <div>
              <strong>Dec 2026</strong>
              <span>UWM CS Graduate</span>
            </div>
            <div>
              <strong>AI + Infra</strong>
              <span>Agentic tooling focus</span>
            </div>
            <div>
              <strong>Linux-first</strong>
              <span>Automation mindset</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Professional photo of Logan Lapierre">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <img src={profilePic} alt="Logan Lapierre" className="hero-photo" />
          <div className="terminal-card glass-card">
            <span className="terminal-dot" />
            <code>$ ship agentic-ai --with devops</code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
