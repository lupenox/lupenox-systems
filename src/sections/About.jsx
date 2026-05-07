import profilePic from "../assets/profile-pic.jpg";
import "../styles/sections/sections.css";
import "../styles/sections/about.css";

function About() {
  
  return (
<section className="about-section">

  <div className="about-container">

    <div className="about-image">
      <img src={profilePic} alt="Logan Lapierre" id="Me"/>
    </div>

    <div className="about-content">
      <p className="about-tag">
        COMPUTER SCIENCE STUDENT • DEVOPS FOCUSED
      </p>

      <h2>About Me</h2>

      <div className="text"> 
      <p>
        Hello, I'm Logan Lapierre, a senior at the University of
        Wisconsin–Milwaukee studying Computer Science.
      </p>

      <p>
        My interests include Linux, DevOps, CI/CD, automation,
        scripting, cloud technologies, and backend development.
        I enjoy building tools and applications that improve
        workflows, experimenting with AI-driven projects, and
        modding video games.
      </p>

      <p>
        I'm especially passionate about infrastructure-focused
        engineering and enjoy solving technical problems,
        debugging systems, and learning new technologies.
        I'm currently pursuing opportunities in areas such as
        DevOps, Site Reliability Engineering (SRE), Linux System
        Administration, cloud support, and backend engineering.
      </p>

      <p>
        I'm highly motivated, adaptable, and always looking for
        opportunities to grow both technically and professionally.
      </p>
      </div>

    </div>

  </div>

</section>
  );

}

export default About;
