import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { Menu, X } from "lucide-react"; // Import icons for hamburger menu
import { useLocation } from "react-router-dom";

const NavBarLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const showNavLinks =
    location.pathname !== "/signin" && location.pathname !== "/signup";

  return (
    <nav className="bg-gray-100 border-b border-gray-300 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link to="/">
          <img src="/logo/logo.png" alt="Logo" className="h-8 sm:h-11" />
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-2 md:mr-5 ${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gray-100 md:bg-transparent z-50 ${
            isMenuOpen ? "items-center" : ""
          }`}
        >
          {showNavLinks && (
            <>
              <li className="py-2 px-4">
                <Link to="/" className="text-black-600">
                  Home
                </Link>
              </li>
              <li className="py-2 px-4">
                <Link to="/about" className="text-black">
                  About
                </Link>
              </li>
              <li className="py-2 px-4">
                <Link to="/contact" className="text-black">
                  Contact
                </Link>
              </li>
            </>
          )}

          {/* Mobile Buttons */}
          <div
            className={`flex flex-col items-center w-full space-y-4 pt-4 md:hidden mb-2 p-2 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <Link to="/signin" className="w-full">
              <Button
                variant="ghost"
                className="w-full py-2 px-4 text-center flex justify-center"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup" className="w-full">
              <Button
                variant="black"
                className="w-full py-2 px-4 text-center flex justify-center"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/signin">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button variant="black">Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBarLanding;
