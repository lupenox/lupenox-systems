import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";
import profileImage from "../assets/images/me.jpeg";
import funImage from "../assets/images/owl.jpg";

const AboutPage = () => {
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
    <div className="about-container">
      <section className="intro-section">
        <h2>About Lupenox Systems</h2>
        <p>Secure. Develop. Innovate.</p>
        <img src={profileImage} alt="Logan Lapierre" className="profile-image" />
      </section>

      <section className="meet-section">
        <h2>Meet Logan Lapierre</h2>
        <p>
          Hi, I'm Logan! I founded <strong>Lupenox Systems</strong> to bring top-tier cybersecurity,
          web development, and IT solutions to businesses and individuals. I'm also a passionate music
          producer, blending creativity and tech in everything I do.
        </p>
      </section>

      <section className="music-section">
        <h2>🎵 Creative Vibes</h2>
        <p>Here's a taste of my creative side—one of my favorite music projects!</p>
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1305460795&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </section>

      <section className="fun-section">
        <h2>Beyond Tech</h2>
        <p>When I'm not coding, I love exploring, traveling, and meeting new creatures! 🦉</p>
        <img src={funImage} alt="Logan's Fun Moments" className="fun-image" />
      </section>

      <section className="cta-section">
        <h2>Let's Work Together</h2>
        <p>Need secure and optimized IT solutions? Reach out today!</p>
        <Link to="/contact" className="cta-button">
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
