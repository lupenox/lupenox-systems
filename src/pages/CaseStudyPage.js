import React from "react";
import { Container } from "react-bootstrap"; // Removed unused imports
import { FaGithub } from "react-icons/fa"; // Importing FontAwesome icon
import "../App.css";  // Ensure this is at the top of your file

const CaseStudyPage = () => {
  return (
    <>
      {/* ✅ Hero Section - Moved Inside the Function */}
      <div className="hero-section text-center text-white">
        <div className="overlay">
          <h1 className="display-4">Cybersecurity Case Study</h1>
          <p className="lead">SCADA Anomaly Detection Project</p>
        </div>
      </div>

      <Container className="mt-5">
        <h1 className="text-primary">Cybersecurity Case Study: SCADA Anomaly Detection</h1>
        <p>
          This project was developed as part of a cybersecurity course, where I led a team to build a
          comprehensive security-focused application. The project involved advanced security principles, encryption techniques,
          and real-world cybersecurity implementations.
        </p>

        <h2 className="text-secondary mt-4">🔹 Project Overview</h2>
        <p>
          The SCADA Anomaly Detection project focuses on detecting anomalies in gas pipelines using
          machine learning techniques. A Support Vector Machine (SVM) model was used to identify
          potential cyber threats and operational failures.
        </p>

        <h2 className="text-secondary mt-4">🚀 My Role & Contributions</h2>
        <ul className="list-group">
          <li className="list-group-item">Project Lead: Managed team workflow and development timelines</li>
          <li className="list-group-item">Lead Developer: Implemented the core machine learning model</li>
          <li className="list-group-item">Developed data preprocessing and feature engineering techniques</li>
          <li className="list-group-item">Conducted performance evaluation and model optimization</li>
        </ul>

        <h2 className="text-secondary mt-4">📜 Dissertation & Poster</h2>
        <p>Below are the official documents that outline the research, development, and results of this project:</p>
        <ul>
          <li>
            <a href="/SCADA_Anomaly_Detection_Report.docx" target="_blank" rel="noopener noreferrer">
              Read the Full Dissertation
            </a>
          </li>
          <li>
            <a href="/Group12Poster.pdf" target="_blank" rel="noopener noreferrer">
              View the Project Poster
            </a>
          </li>
        </ul>

        <h2 className="text-secondary mt-4">💻 Source Code</h2>
        <p>The full source code is available here:</p>
        <a href="https://github.com/lupenox/SCADA-Anomaly-Detection" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
          <FaGithub /> View on GitHub
        </a>

        <h2 className="text-secondary mt-4">🤝 Let's Connect</h2>
        <p>If you're interested in cybersecurity and AI projects, let's talk!</p>
        <a href="https://www.linkedin.com/in/lupenox" className="btn btn-info" target="_blank" rel="noopener noreferrer">
          Connect on LinkedIn
        </a>
        <a href="mailto:logan@example.com" className="btn btn-outline-dark mx-2">
          Email Me
        </a>
      </Container>
    </>
  );
};

export default CaseStudyPage;