import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-10 border-b border-emerald-700">
        <div className="text-center">
          <h4 className="text-2xl font-bold text-emerald-100 mb-6 border-b-2 border-emerald-600 pb-2 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-3 text-lg">
            <li>
              <Link
                to="/about"
                className="hover:text-emerald-300 transition-colors duration-200 block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/plants"
                className="hover:text-emerald-300 transition-colors duration-200 block"
              >
                Our Plants
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-emerald-300 transition-colors duration-200 block"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-emerald-300 transition-colors duration-200 block"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h4 className="text-2xl font-bold text-emerald-100 mb-6 border-b-2 border-emerald-600 pb-2 inline-block">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center justify-center">
              <FaEnvelope className="mr-3 text-emerald-400" />
              <a
                href=""
                className="hover:text-emerald-300 transition-colors duration-200"
              >
                info@greennest.com
              </a>
            </li>
            <li className="flex items-center justify-center">
              <FaPhone className="mr-3 text-emerald-400" />
              <a
                href=""
                className="hover:text-emerald-300 transition-colors duration-200"
              >
                +1 (234) 567-890
              </a>
            </li>
            <li className="flex items-start justify-center">
              <FaMapMarkerAlt className="mr-3 text-emerald-400 mt-1 shrink-0" />
              <address className="not-italic hover:text-emerald-300 transition-colors duration-200">
                123 Plant Lover's Lane, <br />
                Greenville, GA 30222
              </address>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h4 className="text-2xl font-bold text-emerald-100 mb-6 border-b-2 border-emerald-600 pb-2 inline-block">
            Connect With Us
          </h4>
          <div className="flex justify-center space-x-6 text-3xl mb-8">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="hover:text-emerald-300 transform hover:scale-110 transition-transform duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="hover:text-emerald-300 transform hover:scale-110 transition-transform duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              className="hover:text-emerald-300 transform hover:scale-110 transition-transform duration-200"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-8 text-center text-emerald-200 text-base">
        <p>&copy; 2025 Green Nest. All rights reserved.</p>
        <p className="mt-2 text-sm">Crafted with care for plant lovers.</p>
      </div>
    </footer>
  );
};

export default Footer;
