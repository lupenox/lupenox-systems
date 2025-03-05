import React from "react";
import "./BlogPage.css";

const articles = [
  {
    title: "Exploring AI-Powered Cybersecurity",
    description: "A deep dive into how AI is revolutionizing cybersecurity, from threat detection to automated defenses.",
    link: "#",
  },
  {
    title: "The Future of Web Development in 2025",
    description: "Predictions and trends for web development, including the rise of AI-generated code and new frameworks.",
    link: "#",
  },
  {
    title: "Dark Web Security: Protecting Your Digital Identity",
    description: "How to keep your information safe while navigating the dark web and preventing data leaks.",
    link: "#",
  },
];

const BlogPage = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">📰 LATEST ARTICLES</h1>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.link} className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;