import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const PortfolioPage = () => {
  // ✅ Debug path
  const imagePath = `${process.env.PUBLIC_URL}/images/Cyber_Portfolio_Pic.webp`;
  console.log("Expected Image Path:", imagePath);

  return (
    <>
      {/* ✅ Set background image in JSX (not CSS) */}
      <div 
        className="portfolio-banner"
        style={{ 
          backgroundImage: `url(${imagePath})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)"
        }}
      >
        My Portfolio
      </div>

      <Container className="mt-5">
        <h1 className="text-primary text-center">My Portfolio</h1>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Cybersecurity Case Study: SCADA Anomaly Detection</Card.Title>
                <Card.Text>
                  A deep dive into SCADA security, machine learning, and anomaly detection for industrial control systems.
                </Card.Text>
                <Link to="/case-study">
                  <Button variant="primary">View Case Study</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PortfolioPage;
