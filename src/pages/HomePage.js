import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "./HomePage.css";
import homeBanner from "../assets/images/last_banner.webp";

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll("section").forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.8) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="homepage-container">
      <main>
        <section
          className="home-banner"
          style={{ backgroundImage: `url(${homeBanner})` }}
        >
          <div className="typewriter-text-container">
            <h1 className="typewriter-text">
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
        </section>

        <section className="about-section">
          <h2>About Lupenox Systems</h2>
          <p>
            At Lupenox Systems, we specialize in cutting-edge <strong>cybersecurity</strong> & <strong>AI solutions</strong>
            to safeguard your data and optimize your digital presence. From penetration testing to AI-driven security automation,
            we ensure that businesses and individuals stay protected in an evolving digital landscape.
          </p>
        </section>

        <section className="services-preview">
          <h2 className="glowing-header">Our Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>🔐 Cybersecurity Audits</h3>
              <p>We analyze and fortify your systems to prevent cyber threats.</p>
            </div>
            <div className="service-card">
              <h3>🤖 AI-Powered Automation</h3>
              <p>Enhance security and business operations with smart automation.</p>
            </div>
            <div className="service-card">
              <h3>💻 PC Performance Optimization</h3>
              <p>Speed up and secure your system for peak performance.</p>
            </div>
            <div className="service-card">
              <h3>🌐 Website Development & Deployment</h3>
              <p>We build, optimize, and deploy websites for maximum performance and reach.</p>
            </div>
            <div className="service-card">
              <h3>🛡️ Penetration Testing</h3>
              <p>Identify and address vulnerabilities with our advanced penetration testing services.</p>
            </div>
            <div className="service-card">
              <h3>☁️ Cloud Infrastructure Setup</h3>
              <p>Design and deploy scalable cloud infrastructure tailored to your business needs.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Secure Your Digital World?</h2>
          <p>Contact us today for expert cybersecurity and AI-driven solutions.</p>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
