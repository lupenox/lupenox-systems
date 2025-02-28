import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-container">
      {/* 🔥 Contact Header */}
      <h1 className="glitch-text">📩 Contact Us</h1>
      <p className="subtext">Let's connect. Reach out for inquiries, collaborations, or just to say hello.</p>

      {/* 📧 Contact Form */}
      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="glowing-btn">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
