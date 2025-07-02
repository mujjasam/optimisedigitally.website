import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Quirky Creative Studio</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border z-50"
                >
                  <Link
                    to="/services"
                    className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    All Services
                  </Link>
                  <Link
                    to="/google-ads"
                    className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    Google Ads
                  </Link>
                  <Link
                    to="/microsoft-ads"
                    className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    Microsoft Ads
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/google-ads"
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors pl-6"
              onClick={() => setIsOpen(false)}
            >
              Google Ads
            </Link>
            <Link
              to="/microsoft-ads"
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors pl-6"
              onClick={() => setIsOpen(false)}
            >
              Microsoft Ads
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;