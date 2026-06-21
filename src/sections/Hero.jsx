import profilePic from "../assets/profile-pic.jpg";
import "../styles/sections/hero.css";
import "../styles/sections/sections.css";
import VeilBG from "../components/Animated_Background";
import DualityParticles from "../components/DualityParticles";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg" aria-hidden="true">
        <VeilBG />
      </div>
      <DualityParticles />

      <div className="container hero-shell glass-card magic-border magic-starfield">
        <div className="hero-copy">
          <p className="hero-eyebrow magic-pill">Open to 2026 internships and new-grad roles</p>
          <h1 className="hero-title">Logan Lapierre</h1>
          <p className="hero-role">AI systems, Linux, and DevOps tooling.</p>
          <p className="hero-tagline">
            I like building practical software for messy real-world workflows:
            local AI agents, terminal tools, automation scripts, CI/CD pipelines,
            and infrastructure experiments that make debugging less painful.
          </p>

          <div className="hero-cta-row" aria-label="Primary actions">
            <a className="btn btn-primary magic-pill" href="#projects">See what I’ve built</a>
            <a className="btn btn-secondary magic-pill" href="/logan-lapierre-cv.pdf">View CV</a>
            <a className="btn btn-secondary magic-pill" href="#contact">Contact me</a>
          </div>

          <div className="hero-metrics" aria-label="Portfolio highlights">
            <div className="magic-pill">
              <strong>Dec 2026</strong>
              <span>UWM CS graduate</span>
            </div>
            <div className="magic-pill">
              <strong>AI + Infra</strong>
              <span>Where I keep ending up</span>
            </div>
            <div className="magic-pill">
              <strong>Linux-first</strong>
              <span>Yes, I daily-drive it</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Professional photo of Logan Lapierre">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <img src={profilePic} alt="Logan Lapierre" className="hero-photo" />
          <div className="terminal-card glass-card magic-pill">
            <span className="terminal-dot" />
            <code>$ ship useful-software --without-fluff</code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
