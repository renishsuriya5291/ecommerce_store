// src/Components/NavBar.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const NavBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Logic for user logout
    dispatch({ type: 'LOGOUT' });
  }

  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/logo/logo.png" alt="Logo" className="h-11 m-4" />
        </Link>
        {isLoggedIn && (
          <ul className="flex space-x-4 mr-5">
            <li><Link to="/" className="text-gray-700">Home</Link></li>
            <li><Link to="/about" className="text-gray-700">About</Link></li>
            <li><Link to="/contact" className="text-gray-700">Contact</Link></li>
            <li>
              <button onClick={handleLogout} className="text-gray-700">
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
