import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/lupenox/repos");
        const data = await response.json();

        // Filter out forks & sort by stars
        const filteredProjects = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);

        setProjects(filteredProjects);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      {/* 🔥 Portfolio Banner */}
      <div className="portfolio-banner">My Portfolio</div>

      <Container className="mt-5">
        <h1 className="text-primary text-center glitch-effect">GitHub Projects</h1>

        {/* 🚀 Projects Grid */}
        <Row className="mt-4">
          {projects.map((project) => (
            <Col md={4} key={project.id} className="mb-4">
              <Card className="project-card shadow-lg">
                <Card.Body>
                  <Card.Title className="glitch-text">{project.name}</Card.Title>
                  <Card.Text>
                    {project.description || "No description available."}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary">View on GitHub</Button>
                    </a>
                    {project.language && (
                      <span className="badge bg-secondary">{project.language}</span>
                    )}
                  </div>
                  <div className="text-muted mt-2">
                    ⭐ {project.stargazers_count} | 🔀 {project.forks_count}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default PortfolioPage;
