
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-heading font-bold text-gray-900">
          Sujey Sharoan
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">
            About
          </a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900 font-medium">
            Skills
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900 font-medium">
            Projects
          </a>
          <a href="#education" className="text-gray-600 hover:text-gray-900 font-medium">
            Education
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="py-2 text-gray-600 hover:text-gray-900 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="py-2 text-gray-600 hover:text-gray-900 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="py-2 text-gray-600 hover:text-gray-900 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#education" 
              className="py-2 text-gray-600 hover:text-gray-900 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </a>
            <a 
              href="#contact" 
              className="py-2 text-gray-600 hover:text-gray-900 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
