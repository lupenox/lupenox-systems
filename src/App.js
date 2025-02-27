import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";  
import HomePage from "./pages/HomePage";  
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import HackerModePage from "./pages/HackerModePage";  // ✅ Import the new Hacker Mode page

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Router>
        <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<HomePage />} />  
            <Route path="/case-study" element={<CaseStudyPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/hacker-mode" element={<HackerModePage />} />  {/* ✅ New Route Added */}
          </Routes>
        </div>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
