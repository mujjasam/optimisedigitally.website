import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-gray-300 text-sm flex-1">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          <a href="/privacy" className="text-emerald-500 hover:text-emerald-400 ml-1">
            Learn more
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition duration-300"
          >
            Accept
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 text-gray-400 hover:text-white transition duration-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}