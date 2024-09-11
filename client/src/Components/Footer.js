// src/Components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 rounded-xl m-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src="/logo/logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} WorkMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
