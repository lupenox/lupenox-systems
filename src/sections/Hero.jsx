import "../styles/sections/hero.css";
import "../styles/sections/sections.css";
import VeilBG from "../components/Animated_Background";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <VeilBG />
      </div>

      <div className="container hero-content">
        <h1 className="hero-title">Logan Lapierre</h1>
        <p className="hero-subtitle">
          Computer Science Student • AI Systems • DevOps • Linux
        </p>
      </div>
    </section>
  );
}

export default Hero;
