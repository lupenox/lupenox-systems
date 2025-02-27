import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Hero Banner Section */}
      <div
        className="home-banner"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/home-banner.webp"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1>
          <Typewriter
            options={{
              strings: [
                "Welcome to Lupenox Systems",
                "Cybersecurity & AI Innovation",
                "Building a Safer Digital World",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </h1>
      </div>

      {/* About Section */}
      <section className="about-section" style={{ textAlign: "center", padding: "50px" }}>
        <h2>About Lupenox Systems</h2>
        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem" }}>
          At Lupenox Systems, we specialize in cutting-edge <strong>cybersecurity</strong> & <strong>AI solutions</strong> 
          to safeguard your data and optimize your digital presence. From penetration testing to AI-driven security automation, 
          we ensure that businesses and individuals stay protected in an evolving digital landscape.
        </p>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview" style={{ padding: "50px", background: "#f8f9fa", textAlign: "center" }}>
        <h2>Our Services</h2>
        <div className="service-grid" style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <div className="service-card" style={{ padding: "20px", background: "white", borderRadius: "8px", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", maxWidth: "300px" }}>
            <h3>🔐 Cybersecurity Audits</h3>
            <p>We analyze and fortify your systems to prevent cyber threats.</p>
          </div>
          <div className="service-card" style={{ padding: "20px", background: "white", borderRadius: "8px", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", maxWidth: "300px" }}>
            <h3>🤖 AI-Powered Automation</h3>
            <p>Enhance security and business operations with smart automation.</p>
          </div>
          <div className="service-card" style={{ padding: "20px", background: "white", borderRadius: "8px", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", maxWidth: "300px" }}>
            <h3>💻 PC Performance Optimization</h3>
            <p>Speed up and secure your system for peak performance.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" style={{ textAlign: "center", padding: "50px", background: "#343a40", color: "white" }}>
        <h2>Ready to Secure Your Digital World?</h2>
        <p>Contact us today for expert cybersecurity and AI-driven solutions.</p>
        <Link to="/contact" className="cta-button" style={{ padding: "10px 20px", background: "#0d6efd", color: "white", borderRadius: "5px", textDecoration: "none", fontSize: "1.2rem", fontWeight: "bold", marginTop: "10px", display: "inline-block" }}>
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
