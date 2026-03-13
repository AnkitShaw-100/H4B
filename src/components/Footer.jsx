import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              <span className="text-blue-400">Shishu</span>Card
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
              Empowering child healthcare through innovative digital solutions that keep vaccination records secure and accessible.
            </p>

          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/vaccination" className="text-blue-100 hover:text-white transition text-sm">
                  Vaccination
                </Link>
              </li>
              <li>
                <Link to="/vaccine-education" className="text-blue-100 hover:text-white transition text-sm">
                  Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-0.5 flex-shrink-0 w-4 h-4" />
                <p className="text-blue-100 text-sm">
                  Salt Lake, Sector 5<br />
                  Kolkata 700091, West Bengal
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 flex-shrink-0 w-4 h-4" />
                <a href="mailto:support@shishucard.xyz" className="text-blue-100 hover:text-white transition text-sm">
                  shishucard@Support
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400 flex-shrink-0 w-4 h-4" />
                <a href="tel:+919876543210" className="text-blue-100 hover:text-white transition text-sm">
                  +91 11111 43210
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-blue-300 text-sm text-center md:text-left">
            © {new Date().getFullYear()} ShishuCard. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <span className="text-blue-300 hover:text-white transition cursor-pointer">Privacy Policy</span>
            <span className="text-blue-300 hover:text-white transition cursor-pointer">Terms of Service</span>
            <span className="text-blue-300 hover:text-white transition cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;