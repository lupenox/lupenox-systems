import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-form-wrapper">
        <h2 className="contact-title">📬 CONTACT US</h2>
        <p className="contact-subtext">Let’s connect. Reach out for inquiries, collaborations, or just to say hello.</p>
        
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message" required></textarea>
          
          <button type="submit" className="send-button">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
