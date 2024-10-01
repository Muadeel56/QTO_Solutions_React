import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactsIcon from "@mui/icons-material/Contacts";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full">
      {/* Top Contact Bar */}
      <div className="h-[50px] bg-gray-800 text-white px-4 md:px-10 flex items-center justify-between">
        <div className="flex space-x-4">
          <div className="flex space-x-2 items-center">
            <EmailIcon />
            <p className="text-sm">info@qtohouse.com</p>
          </div>
          <div className="flex space-x-2 items-center">
            <PhoneIcon />
            <p className="text-sm">(571)-748-4366</p>
          </div>
        </div>
      </div>

      {/* Logo and Navigation */}
      <div className="bg-white px-4 md:px-10 shadow-md">
        <div className="flex justify-between items-center py-4 relative">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-[60px]" />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={handleToggleMenu} className="text-gray-700">
              {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav
            className={`absolute md:static left-0 top-[100%] md:flex bg-white md:bg-transparent md:space-x-6 space-y-4 md:space-y-0 w-full md:w-auto transition-all duration-300 md:flex-row items-center p-4 md:p-0 ${
              menuOpen ? "block" : "hidden md:flex"
            }`}
          >
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-start md:items-center">
              <div className="flex items-center space-x-1">
                <HomeIcon className="text-gray-500" />
                <Link
                  to="/"
                  className="text-gray-800 hover:text-gray-600 transition-all font-medium"
                >
                  Home
                </Link>
              </div>
              <div className="flex items-center space-x-1">
                <InfoIcon className="text-gray-500" />
                <Link
                  to="/projects"
                  className="text-gray-800 hover:text-gray-600 transition-all font-medium"
                >
                  Projects
                </Link>
              </div>
              <div className="flex items-center space-x-1">
                <InfoIcon className="text-gray-500" />
                <Link
                  to="/sample"
                  className="text-gray-800 hover:text-gray-600 transition-all font-medium"
                >
                  Samples
                </Link>
              </div>
              <div className="flex items-center space-x-1">
                <InfoIcon className="text-gray-500" />
                <Link
                  to="/about"
                  className="text-gray-800 hover:text-gray-600 transition-all font-medium"
                >
                  About Us
                </Link>
              </div>
              <div className="flex items-center space-x-1">
                <WorkIcon className="text-gray-500" />
                <Link
                  to="/careers"
                  className="text-gray-800 hover:text-gray-600 transition-all font-medium"
                >
                  Careers
                </Link>
              </div>
              <div className="flex items-center space-x-1">
                <ContactsIcon className="text-gray-500" />
                <Link
                  to="/contact"
                  className="text-gray-800 hover:text-gray-600 transition-all font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            {/* Free Quotes Button */}
            <div className="flex justify-center md:justify-start mt-4 md:mt-0 md:ml-6">
              <Link to="/quote">
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-all font-medium">
                  Get Free Quotes
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
