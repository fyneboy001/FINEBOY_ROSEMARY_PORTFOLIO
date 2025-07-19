import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-8 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className={`flex items-center justify-center text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Made with{' '}
            <Heart size={16} className="mx-1 text-red-500" fill="currentColor" />
            by Rosemary Ogheneyole
          </p>
          <p className={`mt-2 text-xs ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;