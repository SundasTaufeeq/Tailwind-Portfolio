import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-gray-200">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        {/* Logo and Copyright */}
        <a
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          href="/"
        >
          <span className="ml-3 text-xl">
            <img
              src="/logo.png"
              alt="BagVerse Logo"
              width="40"
              height="40"
              className="m-1"
            />
          </span>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 All Rights Reserved —
          </p>
        </a>

        {/* Social Media Icons */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 ml-3">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 ml-3">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 ml-3">
            <LuInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 ml-3">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

