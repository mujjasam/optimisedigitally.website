import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, Search, Facebook, Twitter, Linkedin } from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import GoogleAds from './pages/GoogleAds';
import MicrosoftAds from './pages/MicrosoftAds';
import ThankYou from './pages/ThankYou';
import Subscribe from './pages/Subscribe';
import CookieConsent from './components/CookieConsent';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navigation */}
        <nav className="bg-gray-900 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <span className="text-2xl font-bold text-emerald-500">OPTIMISE DIGITALLY</span>
                </Link>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className="px-3 py-2 hover:text-emerald-500">Home</Link>
                  <Link to="/services" className="px-3 py-2 hover:text-emerald-500">Services</Link>
                  <Link to="/google-ads" className="px-3 py-2 hover:text-emerald-500">Google Ads</Link>
                  <Link to="/microsoft-ads" className="px-3 py-2 hover:text-emerald-500">Microsoft Ads</Link>
                  <Link to="/about" className="px-3 py-2 hover:text-emerald-500">About Us</Link>
                  <Link to="/contact" className="px-3 py-2 hover:text-emerald-500">Contact</Link>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 text-gray-400 hover:text-emerald-500 cursor-pointer" />
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 hover:bg-gray-800 hover:text-emerald-500">Home</Link>
                <Link to="/services" className="block px-3 py-2 hover:bg-gray-800 hover:text-emerald-500">Services</Link>
                <Link to="/google-ads" className="block px-3 py-2 hover:bg-gray-800 hover:text-emerald-500">Google Ads</Link>
                <Link to="/microsoft-ads" className="block px-3 py-2 hover:bg-gray-800 hover:text-emerald-500">Microsoft Ads</Link>
                <Link to="/about" className="block px-3 py-2 hover:bg-gray-800 hover:text-emerald-500">About Us</Link>
                <Link to="/contact" className="block px-3 py-2 hover:bg-gray-800 hover:text-emerald-500">Contact</Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/google-ads" element={<GoogleAds />} />
            <Route path="/microsoft-ads" element={<MicrosoftAds />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-emerald-500 mb-4">OPTIMISE DIGITALLY</h3>
                <p className="text-gray-400">
                  123 Digital Lane<br />
                  Manchester, M1 1AA<br />
                  United Kingdom
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/services" className="hover:text-emerald-500">Services</Link></li>
                  <li><Link to="/google-ads" className="hover:text-emerald-500">Google Ads</Link></li>
                  <li><Link to="/microsoft-ads" className="hover:text-emerald-500">Microsoft Ads</Link></li>
                  <li><Link to="/about" className="hover:text-emerald-500">About Us</Link></li>
                  <li><Link to="/contact" className="hover:text-emerald-500">Contact</Link></li>
                  <li><Link to="/privacy" className="hover:text-emerald-500">Privacy Policy</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Phone: +44 161 123 4567</li>
                  <li>Email: contact@optimisedigitally.com</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Facebook className="w-6 h-6 text-gray-400 hover:text-emerald-500 cursor-pointer" />
                  <Twitter className="w-6 h-6 text-gray-400 hover:text-emerald-500 cursor-pointer" />
                  <Linkedin className="w-6 h-6 text-gray-400 hover:text-emerald-500 cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; 2024 OPTIMISE DIGITALLY LTD. All rights reserved.</p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <Link to="/privacy" className="text-gray-400 hover:text-emerald-500">Privacy Policy</Link>
                <button 
                  onClick={() => {
                    localStorage.removeItem('cookieConsent');
                    window.location.reload();
                  }}
                  className="text-gray-400 hover:text-emerald-500"
                >
                  Cookie Settings
                </button>
              </div>
            </div>
          </div>
        </footer>

        {/* Cookie Consent Banner */}
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;