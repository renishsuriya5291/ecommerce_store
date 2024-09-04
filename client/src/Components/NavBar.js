// src/Components/NavBar.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/logo/logo.png" alt="Logo" className="h-11 m-4" />
        </Link>
        {isLoggedIn && (
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-700">Home</Link></li>
            <li><Link to="/about" className="text-gray-700">About</Link></li>
            <li><Link to="/contact" className="text-gray-700">Contact</Link></li>
            <li>
              <button onClick={() => { /* logic for logout */ }} className="text-gray-700">
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
