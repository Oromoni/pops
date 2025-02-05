import React from 'react';
import { FaPhone } from 'react-icons/fa'; // Import the phone icon from React Icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 border-t border-black/20">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          <p className="text-gray-600 text-sm">© 2025 JOSHBIM</p>
        </div>
        <div className="flex items-center space-x-3" id='contact'>
          {/* Telephone Icon and Phone Number */}
          <FaPhone className="text-white" size={20} />
          <p className="text-sm text-white">+234 803 823 0112</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
