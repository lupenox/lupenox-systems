import React from "react";
import "./ServicesPage.css"; // Importing the custom styles

const ServicesPage = () => {
  return (
    <div className="services-container">
      {/* Hero Section */}
      <div className="services-hero">
        <h1>🚀 Our Services</h1>
        <p>Advanced cybersecurity, AI, and IT solutions tailored to your needs.</p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        <div className="service-card">
          <h3>🔐 Cybersecurity Audits</h3>
          <p>Identify vulnerabilities & protect your systems against modern cyber threats.</p>
          <button className="cta-button">Get a Quote</button>
        </div>

        <div className="service-card">
          <h3>🌐 Web Development</h3>
          <p>Custom-built, high-performance websites optimized for security & speed.</p>
          <button className="cta-button">Get a Quote</button>
        </div>

        <div className="service-card">
          <h3>🤖 AI-Powered Automation</h3>
          <p>Enhance productivity with AI-driven automation & security solutions.</p>
          <button className="cta-button">Get a Quote</button>
        </div>

        <div className="service-card">
          <h3>🏡 Smart Home & IoT Security</h3>
          <p>Secure smart home devices & IoT infrastructure to prevent cyber intrusions.</p>
          <button className="cta-button">Get a Quote</button>
        </div>

        <div className="service-card">
          <h3>🚗 Vehicle Infotainment Security</h3>
          <p>Ensure your vehicle's infotainment & control systems remain secure.</p>
          <button className="cta-button">Get a Quote</button>
        </div>

        <div className="service-card">
          <h3>📊 IT Consulting & System Optimization</h3>
          <p>Improve efficiency with expert IT consulting & system audits.</p>
          <button className="cta-button">Get a Quote</button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="services-cta">
        <h2>💡 Ready to Get Started?</h2>
        <p>Fill out our contact form and let's discuss your project.</p>
        <button className="cta-main-button">Contact Us</button>
      </div>
    </div>
  );
};

export default ServicesPage;
