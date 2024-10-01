import React from 'react';
import logo from '../assets/images/logo.svg';
import { Instagram, Facebook, LinkedIn, Email, Phone } from '@mui/icons-material';

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0">
        
        {/* Logo and Company Info */}
        <div className="flex flex-col items-start space-y-6 w-full md:w-1/4">
          <img src={logo} alt="logo" className="w-[120px] mb-4" />
          <p className="text-sm leading-relaxed">
            QTO House is a professional estimation and quantity take-off service provider. We assist our clients in simplifying the bidding process with accurate and timely estimates.
          </p>
          <p className="text-sm mt-4">&copy; 2024 QTO House. All rights reserved.</p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/4">
          <h1 className="text-lg font-semibold text-yellow-500 mb-4">Quick Links</h1>
          <div className="flex flex-col space-y-2">
            {['Home', 'About Us', 'Contact Us', 'FAQ', 'Career'].map((link, index) => (
              <a key={index} href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-yellow-400 transition-all">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="w-full md:w-1/4">
          <h1 className="text-lg font-semibold text-yellow-500 mb-4">Contact Us</h1>
          <div className="flex items-center mb-2">
            <Email className="text-yellow-500 mr-2" />
            <p>info@qtohouse.com</p>
          </div>
          <div className="flex items-center">
            <Phone className="text-yellow-500 mr-2" />
            <p>(571)-748-4366</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/4">
          <h1 className="text-lg font-semibold text-yellow-500 mb-4">Follow Us</h1>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="text-gray-300 hover:text-yellow-400 text-3xl transition-all" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="text-gray-300 hover:text-yellow-400 text-3xl transition-all" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <LinkedIn className="text-gray-300 hover:text-yellow-400 text-3xl transition-all" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Estimation Made Simple with QTO House</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-yellow-400 transition-all">Privacy Policy</a>
            <a href="#terms" className="hover:text-yellow-400 transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
