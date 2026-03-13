import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import LoginButton from "./functionalButtons/LoginButton";
import LogoutButton from "./functionalButtons/LogoutButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <nav className="bg-blue-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="ml-2 text-xl font-semibold text-white">
              Shishu<span className="text-blue-200">Card</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-blue-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/doctor-dashboard"
              className="text-blue-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              className="text-blue-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>
            <div className="ml-2">
              {user ? <LogoutButton /> : <LoginButton />}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {!menuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pb-3 space-y-1 bg-blue-700">
          <Link
            to="/"
            className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/doctor-dashboard"
            className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <div className="px-3 py-2">
            {user ? <LogoutButton mobile /> : <LoginButton mobile />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
