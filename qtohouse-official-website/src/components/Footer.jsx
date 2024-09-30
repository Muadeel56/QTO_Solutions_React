import React from 'react';
import logo from '../assets/images/logo.svg';
import { Instagram, Facebook, LinkedIn, Email, Phone } from '@mui/icons-material';

function Footer() {
  return (
    <div className="w-full bg-gray-800 text-white py-10 px-6">
      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 md:items-start md:space-x-10">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left w-full md:w-1/3">
          <img src={logo} alt="logo" className="w-[80px] mb-2" />
          <p className="text-sm leading-relaxed">
            QTO House is a Professional Estimation and Quantity Take-off Service Provider. We assist our clients in the painstaking and time-consuming involvement of Building Estimation. With QTO House, the bidding process is made simple!
          </p>
          <p className="text-sm mt-4">&copy; 2024 QTO HOUSE - ALL RIGHTS RESERVED</p>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col items-center space-y-4 text-center md:text-left w-full md:w-1/4">
          <p className="text-lg font-semibold">Follow Us</p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="text-yellow-500 hover:text-yellow-400 text-3xl" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="text-yellow-500 hover:text-yellow-400 text-3xl" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <LinkedIn className="text-yellow-500 hover:text-yellow-400 text-3xl" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center space-y-4 text-center md:text-left w-full md:w-1/4">
          <p className="text-lg font-semibold">Contact Us</p>
          <div className="flex items-center space-x-2">
            <Email className="text-yellow-500" />
            <p>info@qtohouse.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="text-yellow-500" />
            <p>(571)-748-4366</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center space-y-4 text-center md:text-left w-full md:w-1/4">
          <h1 className="text-lg font-semibold">QUICK LINKS</h1>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#home" className="hover:text-yellow-400">Home</a>
            <a href="#about" className="hover:text-yellow-400">About Us</a>
            <a href="#contact" className="hover:text-yellow-400">Contact Us</a>
            <a href="#faq" className="hover:text-yellow-400">FAQ</a>
            <a href="#career" className="hover:text-yellow-400">Career</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
