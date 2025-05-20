
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} Sujey Sharoan. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/sujey-sharoan-s/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:Sujeysharoan19@gmail.com" 
              className="text-gray-600 hover:text-gray-900"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
