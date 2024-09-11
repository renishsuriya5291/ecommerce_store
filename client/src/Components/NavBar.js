import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role); // Get role from Redux store
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/logo/logo.png" alt="Logo" className="h-11 m-4" />
        </Link>
        
        {isLoggedIn && (
          <ul className="flex space-x-4 mr-5">
            {/* Show different links based on role */}
            {role === 'freelancer' ? (
              <>
                <li><Link to="/freelancer/home" className="text-gray-700">Home</Link></li>
                <li><Link to="/freelancer/about" className="text-gray-700">About</Link></li>
                <li><Link to="/freelancer/contact" className="text-gray-700">Contact</Link></li>
              </>
            ) : role === 'client' ? (
              <>
                <li><Link to="/client/home" className="text-gray-700">Home</Link></li>
                <li><Link to="/client/about" className="text-gray-700">About</Link></li>
                <li><Link to="/client/contact" className="text-gray-700">Contact</Link></li>
              </>
            ) : null}

            {/* Logout button */}
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
