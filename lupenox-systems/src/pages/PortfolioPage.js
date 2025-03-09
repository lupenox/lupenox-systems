import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/lupenox/repos");
        const data = await response.json();

        const enrichedProjects = await Promise.all(
          data
            .filter(repo => !repo.fork) // Ignore forks
            .map(async (repo) => {
              // Fetch commit history
              const commitRes = await fetch(repo.commits_url.replace("{/sha}", "/main"));
              const commits = await commitRes.json();

              return {
                ...repo,
                lastCommit: commits[0]?.commit?.message || "No recent commits",
                lastCommitDate: commits[0]?.commit?.committer?.date || "Unknown",
              };
            })
        );

        setProjects(enrichedProjects.sort((a, b) => b.stargazers_count - a.stargazers_count));
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
        <h1 className="text-primary text-center glitch-text">GitHub Projects</h1>

        {/* 🚀 Projects Grid */}
        <Row className="mt-4">
          {projects.map((project) => (
            <Col md={4} key={project.id} className="mb-4">
              <Card className="project-card shadow-lg">
                {/* 🖼️ Dynamic Image */}
                <Card.Img
                  variant="top"
                  src={`/images/portfolio/${project.name.toLowerCase().replace(/\s+/g, '-')}.png`}
                  onError={(e) => e.target.style.display = 'none'}
                />
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
                  {/* 📌 Last Commit Info */}
                  <div className="text-muted mt-2">
                    📝 Last Commit: "{project.lastCommit}" <br />
                    📅 {new Date(project.lastCommitDate).toLocaleDateString()}
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
