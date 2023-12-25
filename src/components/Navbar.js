import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "./images/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between p-4 bg-purple-500">
        {/* Make the logo a Link to the landing page */}
        <Link to="/">
          <img src={Logo} alt="Company logo" className="w-auto h-8" />
        </Link>
        {}
        <ul className="hidden space-x-4 text-white md:flex">
          <li className="px-3 py-1 rounded-md hover:bg-purple-800">
            <a href="/see-and-do">See & Do</a>
          </li>
          <li className="px-2 py-1 rounded-md hover:bg-purple-800">
            <a href="/plan-your-trip">Plan Your Trip</a>
          </li>
          <li className="px-2 py-1 rounded-md hover:bg-purple-800">
            <a href="/TravelEssential">Travel Essentials</a>
          </li>
          <li className="px-2 py-1 rounded-md hover:bg-purple-800">
            <a href="/india-calendar">India Calendar</a>
          </li>
          <li className="px-2 py-1 rounded-md hover:bg-purple-800">
            <a href="/map">Map</a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMobileMenu}>
            {/* Add your mobile menu icon (e.g., hamburger menu) here */}
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col text-white">
              <li className="py-2 rounded-md hover:bg-gray-700">
                <a href="/see-and-do">See & Do</a>
              </li>
              <li className="py-2 rounded-md hover:bg-gray-700">
                <a href="/plan-your-trip">Plan Your Trip</a>
              </li>
              <li className="py-2 rounded-md hover:bg-gray-700">
                <a href="/travel-essentials">Travel Essentials</a>
              </li>
              <li className="py-2 rounded-md hover:bg-gray-700">
                <a href="/india-calendar">India Calendar</a>
              </li>
              <li className="py-2 rounded-md hover:bg-gray-700">
                <a href="/map">Map</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
