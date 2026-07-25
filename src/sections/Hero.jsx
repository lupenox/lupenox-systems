import "../styles/sections/hero.css";
import "../styles/sections/sections.css";
import DarkVeil from "../components/Animated_Background";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <DarkVeil speed={0.25} noiseIntensity={0.02} />
      </div>

      <div className="hero-container container">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          AI Engineer • Agentic, Real-Time & Local AI Systems
        </div>

        <h1 className="hero-title">Logan Lapierre</h1>

        <p className="hero-tagline">
          Building agentic, real-time, and local AI systems.
        </p>

        <p className="hero-description">
          Computer Science engineer building production-minded AI applications — from low-latency real-time voice agents and agentic web workflows to on-device LLM inference pipelines and machine learning anomaly detection.
        </p>

        <div className="hero-availability">
          <span className="avail-icon">🎓</span>
          <span>
            <strong>Seeking Remote Roles:</strong> AI Engineering, Applied AI & AI Software Engineering internships or entry-level opportunities. Expected Graduation: <strong>December 2026</strong> (Available full-time <strong>January 2027</strong>).
          </span>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Explore Flagship Projects ↓
          </a>
          <a
            href="https://github.com/lupenox"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub Profile ↗
          </a>
          <a
            href="https://www.linkedin.com/in/logan-lapierre-555348354/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            LinkedIn ↗
          </a>
          <a href="#contact" className="btn btn-tertiary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;