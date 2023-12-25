import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.png';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYear = () => setYear(new Date().getFullYear());
    const interval = setInterval(updateYear, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-purple-500">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <Link to="/">
          <img src={Logo} alt="Company logo" className="w-auto h-8" />
        </Link>
        <p className="items-center ml-4 text-sm text-white md:flex">
          &copy; {year} Destination Dreamers | All rights reserved
        </p>
        <div className="flex space-x-4">
          <a href="#" className="px-2 py-1 text-white rounded-md md:flex hover:bg-purple-800">
            Privacy Policy
          </a>
          <a href="#" className="px-2 py-1 text-white rounded-md md:flex hover:bg-purple-800">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
