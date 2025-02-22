import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Lupenox Systems</h1>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-green-400 transition">Home</Link>
        <Link to="/services" className="hover:text-green-400 transition">Services</Link>
        <Link to="/contact" className="hover:text-green-400 transition">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
