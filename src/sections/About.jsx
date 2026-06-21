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
          <p className="about-tag">Computer Science • Linux • Automation</p>
          <h2 className="section-title">I’m happiest when software makes annoying work disappear.</h2>
          <div className="text">
            <p>
              I’m Logan, a Computer Science student at UW–Milwaukee graduating
              in December 2026. I’m drawn to the overlap between AI, Linux,
              infrastructure, and the developer tools people actually use every day.
            </p>
            <p>
              Most of my projects start with some kind of friction: a repetitive
              workflow, a confusing system issue, a tool that needs better feedback,
              or an idea that would be way cooler if it ran locally and felt fast.
            </p>
            <p>
              I’m looking for roles where I can build, debug, automate, and keep
              learning around AI systems, DevOps, SRE, backend engineering, Linux,
              cloud support, or infrastructure tooling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
