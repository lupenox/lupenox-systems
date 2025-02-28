import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div 
        className="hero-section" 
        style={{ backgroundImage: `url("https://placehold.co/1200x300/111/ccc?text=Banner+Image")` }}
      >
        <h1>About Lupenox Systems</h1>
        <p className="subheading">Secure. Develop. Innovate.</p>
      </div>

      {/* About Content Section */}
      <div className="about-content">
        <img 
          src="https://placehold.co/250x350/111/ccc?text=Profile+Image" 
          alt="Profile Image" 
          className="portrait" 
        />
        <div className="about-text">
          <h2>Meet Logan Lapierre</h2>
          <p>
            Hi, I’m Logan! I founded **Lupenox Systems** to bring **top-tier cybersecurity, web development, and IT solutions** 
            to businesses and individuals. My mission is to **ensure digital assets are safe, efficient, and optimized** through 
            cutting-edge security measures and AI-powered solutions.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h2 className="neon-text">🎓 Education & Certifications</h2>
        <ul className="education-list">
          <li>📚 **B.S. Computer Science** (Expected December 2026) – UWM Milwaukee</li>
          <li>🌐 **Web Development Certificate** (Expected December 2026) – UWM Milwaukee</li>
          <li>🔐 **Cybersecurity Certificate** (Expected Spring 2027) – UWM Milwaukee</li>
        </ul>
        <h3>Relevant Coursework:</h3>
        <ul className="course-list">
          <li>💻 Data Structures & Algorithms</li>
          <li>🛡️ Introduction to Computer Security</li>
          <li>⚙️ System Programming</li>
          <li>🌍 Web Design & Development</li>
          <li>🔢 Computer Architecture</li>
          <li>🧮 Matrices and Applications</li>
        </ul>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2 className="neon-text">🚀 Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>🔐 Cybersecurity Audits</h3>
            <p>Identify vulnerabilities & protect your systems against modern cyber threats.</p>
          </div>
          <div className="service-card">
            <h3>🌐 Web Development</h3>
            <p>Build custom, high-performance websites optimized for security & scalability.</p>
          </div>
          <div className="service-card">
            <h3>🤖 AI-Powered Automation</h3>
            <p>Enhance productivity & security with AI-driven automation solutions.</p>
          </div>
          <div className="service-card">
            <h3>🏡 Smart Home & IoT Security</h3>
            <p>Secure smart home devices & IoT infrastructure to prevent cyber intrusions.</p>
          </div>
          <div className="service-card">
            <h3>🚗 Infotainment & Vehicle Security</h3>
            <p>Protect vehicle systems & infotainment setups from digital threats.</p>
          </div>
          <div className="service-card">
            <h3>📊 IT Consulting & System Optimization</h3>
            <p>Ensure business IT infrastructure runs smoothly with expert consulting.</p>
          </div>
        </div>
      </div>

      {/* Fun Section */}
      <div className="fun-section">
        <h2 className="neon-text">Beyond Tech</h2>
        <img 
          src="https://placehold.co/300x200/111/ccc?text=Fun+Image" 
          alt="Fun Image" 
          className="fun-img" 
        />
        <p>When I’m not coding, I love exploring, traveling, and meeting new creatures! 🐬</p>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Let's Work Together</h2>
        <p>Need secure and optimized IT solutions? Reach out today!</p>
        <a href="/contact" className="cta-btn">Get in Touch</a>
      </div>
    </div>
  );
};

export default AboutPage;
