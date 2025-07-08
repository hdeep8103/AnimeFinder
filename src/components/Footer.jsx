import { GitHub, LinkedIn } from "@mui/icons-material";

import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent backdrop-blur-md bg-white/10 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <div className="text-2xl font-bold mb-4">Anime FInder</div>

        {/* Navigation Links */}
        <ul className="flex justify-center space-x-6 text-sm mb-4">
          <li>
            <Link to="/" className="hover:text-gray-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="Services" className="hover:text-gray-400 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="OurProcess" className="hover:text-gray-400 transition">
              Our Process
            </Link>
          </li>
          <li>
            <Link to="AboutUs" className="hover:text-gray-400 transition">
              About
            </Link>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 text-lg mb-4">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-pink-400 transition">
            <InstagramIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/hdeep8103/AnimeFinder"
            aria-label="GitHub"
            className="hover:text-gray-400 transition">
            <GitHub />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition">
            <LinkedIn />
          </a>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-sm text-gray-300">
          © {new Date().getFullYear()} Anime FInder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
