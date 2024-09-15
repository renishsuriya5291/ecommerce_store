import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';

const NavBarLanding = () => {
    const location = useLocation();
    const showNavLinks = location.pathname != '/signin' && location.pathname != '/signup';

    return (
        <nav className="bg-gray-100">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                    <img src="/logo/logo.png" alt="Logo" className="h-11 m-4" />
                </Link>
                {showNavLinks && (
                    <ul className="flex space-x-4 mr-5">
                        <li>
                            <Link to="/" className="text-gray-700">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-700">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-700">Contact</Link>
                        </li>
                    </ul>
                )}
                <ul className="flex space-x-4 mr-5">
                    <li><Link to="/signin" className="text-gray-700">Sign In</Link></li>
                    <li><Link to="/signup" className="text-gray-700">Sign Up</Link></li>
                </ul>

            </div>
        </nav>
    );
};

export default NavBarLanding;
