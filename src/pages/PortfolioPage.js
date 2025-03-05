import React, { useEffect, useState } from "react";
import "./PortfolioPage.css";
import { Github } from "lucide-react";
import Banner from "../assets/images/About_Me_Banner.webp";

const PortfolioPage = ({ theme }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/lupenox/repos");
        const data = await response.json();
        setProjects(data.filter(repo => !repo.fork)); // Only show original repos
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      {/* Hero Section with Banner */}
      <div className="portfolio-banner" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="portfolio-text-container">
          {/* Show text only in dark mode */}
          {theme === "dark" && <h1 className="glitch-text">🚀 My Portfolio</h1>}
        </div>
      </div>

      <div className="portfolio-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="simple-project-list">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description || "No description available."}</p>
                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="github-button">
                  <Github className="github-icon" /> View on GitHub
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="onion-button-container">
        <button className="onion-button">🔗 SWITCH TO .ONION</button>
      </div>
    </>
  );
};

export default PortfolioPage;
