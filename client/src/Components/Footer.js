import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ role }) => {
  return (
    <footer className="bg-black text-white py-8 px-4 rounded-xl m-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src="/logo/logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
          {/* Conditionally render links based on role */}
          {role === 'freelancer' ? (
            <>
              <Link to="/freelancer/home" className="hover:underline">Home</Link>
              <Link to="/freelancer/about" className="hover:underline">About</Link>
              <Link to="/freelancer/contact" className="hover:underline">Contact</Link>
            </>
          ) : role === 'client' ? (
            <>
              <Link to="/client/home" className="hover:underline">Home</Link>
              <Link to="/client/about" className="hover:underline">About</Link>
              <Link to="/client/contact" className="hover:underline">Contact</Link>
            </>
          ) : null}
        </div>
        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} WorkMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
