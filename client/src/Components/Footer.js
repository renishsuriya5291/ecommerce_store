import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faApple,
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ role }) => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">For Clients</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline">
                  How to Hire
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Talent Marketplace
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Project Catalog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Talent</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline">
                  How to Find Work
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Direct Contracts
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Find Freelance Jobs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Workmate Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Investor Relations
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Link to="#" className="hover:text-green-500">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </Link>
            <Link to="#" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faApple} size="2x" />
            </Link>
            <Link to="#" className="hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Link>
            <Link to="#" className="hover:text-blue-700">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Link>
            <Link to="#" className="hover:text-blue-600">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </Link>
          </div>
          <p>&copy; 2024 Workmate Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
