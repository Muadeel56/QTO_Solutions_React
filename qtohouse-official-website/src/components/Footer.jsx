import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import logo from '../assets/images/logo.svg';
import { Instagram, Facebook, LinkedIn, Email, Phone } from '@mui/icons-material';

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 px-8">
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
        
        {/* Logo and Company Info */}
        <div className="flex space-x-4">
          <img src={logo} alt="logo" className="w-[40px] sm:w-[50px] md:w-[60px] lg:w-[100px]" />
          <div>
            <p className="text-xs  md:text-sm lg:text-sm text-justify leading-relaxed">
              QTO House is a professional estimation and quantity take-off service provider. We assist our clients in simplifying the bidding process with accurate and timely estimates.
            </p>
            <p className="text-xs md:text-sm lg:text-sm mt-2 text-gray-400">&copy; 2024 QTO House. All rights reserved.</p>
          </div>
        </div>

        
         
           {/* Contact Us Section */}
        <div className='flex flex-col items-center justify-center'>
          <h1 className="text-sm md:text-xl lg:text-2xl font-semibold text-yellow-500 mb-4">Contact Us</h1>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center ">
              <Email fontSize='small' className="text-yellow-500 mr-2" />
              <p className='text-xs md:text-sm lg:text-lg'>info@qtohouse.com</p>
            </div>
            <div className="flex items-center">
              <Phone className="text-yellow-500 mr-2" />
              <p>(571)-748-4366</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className='flex flex-col items-center justify-center'>
          <h1 className="text-sm md:text-xl lg:text-2xl font-semibold text-yellow-500 mb-4">Follow Us</h1>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/qtohouse/?hl=en" target="_blank" rel="noreferrer">
              <Instagram className="text-gray-300 hover:text-yellow-400 text-3xl transition-all" />
            </a>
            <a href="https://www.facebook.com/qtohouse/" target="_blank" rel="noreferrer">
              <Facebook className="text-gray-300 hover:text-yellow-400 text-3xl transition-all" />
            </a>
            <a href="https://pk.linkedin.com/company/qtohouse" target="_blank" rel="noreferrer">
              <LinkedIn className="text-gray-300 hover:text-yellow-400 text-3xl transition-all" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className='flex flex-col items-center justify-center'>
          <h1 className="text-sm md:text-xl lg:text-2xl font-semibold text-yellow-500 mb-4">Quick Links</h1>
          <ul className="space-y-2 text-xs md:text-sm lg:text-lg">
            {/* Using Link for internal navigation */}
            <div className='flex space-x-2'>
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-yellow-400 transition-all">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-yellow-400 transition-all">
                Career
              </Link>
            </li>
            </div>
            <div className='flex space-x-2'>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition-all">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition-all">
                About Us
              </Link>
            </li>
            </div>
            
          </ul>
        </div>
         </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
          <p>Estimation Made Simple with QTO House</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-yellow-400 transition-all">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-yellow-400 transition-all">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
