import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../Components/Button";
import Input from "../Components/Input";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Workmate</h3>
            <p className="mb-4">
              Connect with top freelancers and get your projects done.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white  border-gray-700"
              />
              <Button variant="blackSolid">Subscribe</Button>
            </form>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">For Clients</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  How to Hire
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Talent Marketplace
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Project Catalog
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Contract-to-Hire
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">For Freelancers</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  How to Find Work
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Direct Contracts
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Find Freelance Jobs
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="#" className="hover:text-white transition-colors">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-5 mb-4 md:mb-0">
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>

            <Link to="#" className="hover:text-white transition-colors">
              Cookie Settings
            </Link>
          </div>
          <p className="text-sm">
            &copy; 2024 Workmate Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
