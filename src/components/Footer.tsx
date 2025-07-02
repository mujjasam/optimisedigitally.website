import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quirky Creative Studio</h3>
            <p className="text-gray-400 mb-6">Transforming ideas into digital excellence</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Stay Updated</h4>
                <Link
                  to="/subscribe"
                  className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors"
                >
                  Subscribe to Newsletter
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/google-ads" className="text-gray-400 hover:text-white transition-colors">Google Ads</Link></li>
              <li><Link to="/microsoft-ads" className="text-gray-400 hover:text-white transition-colors">Microsoft Ads</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:contact@quirkycreativestudio.online" className="hover:text-white transition-colors">
                  contact@quirkycreativestudio.online
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+442071234567" className="hover:text-white transition-colors">
                  +44 20 7123 4567
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                17 Green Lanes, London, England, N16 9BS
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Quirky Creative Studio Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;