import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to Lupenox Systems</h1>} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<h1>Contact Page Coming Soon</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
