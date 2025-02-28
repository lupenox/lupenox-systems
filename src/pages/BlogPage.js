import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import "./BlogPage.css";

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://api.example.com/articles"); // Replace with actual API
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching blog articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      {/* 🔥 Blog Banner */}
      <div className="blog-banner">
        <h1 className="glitch-text">📰 LATEST ARTICLES</h1>
      </div>

      <Container className="mt-5">
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Row>
            {articles.map((article) => (
              <Col md={6} key={article.id} className="mb-4">
                <Card className="blog-card shadow-lg">
                  <Card.Body>
                    <Card.Title className="glitch-text">{article.title}</Card.Title>
                    <Card.Text className="text-light">{article.description}</Card.Text>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
                      Read More →
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default BlogPage;
