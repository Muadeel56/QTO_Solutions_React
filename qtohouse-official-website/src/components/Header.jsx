import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactsIcon from "@mui/icons-material/Contacts";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import QuoteIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Menu, MenuItem } from "@mui/material";

function Header({ isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // To get the current path

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLoginClick = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setAnchorEl(null);
  };

  // Helper function to check if a route is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full shadow-md font-inter">
      {/* Top Contact Bar */}
      <div className="h-[50px] bg-gray-900 text-white px-6 md:px-16 flex items-center justify-between">
        <div className="flex flex-col sm:flex-row sm:space-x-6">
          {/* Email Link */}
          <div className="flex space-x-2 items-center text-sm mb-2 sm:mb-0">
            <EmailIcon className="text-yellow-500" />
            <a
              href="mailto:info@qtohouse.com"
              className="text-white cursor-pointer inline-block"
              title="Send us an email"
            >
              info@qtohouse.com
            </a>
          </div>

          {/* Phone Number Link */}
          <div className="flex space-x-2 items-center text-sm">
            <PhoneIcon className="text-yellow-500" />
            <a
              href="tel:+15717484366"
              className="text-white cursor-pointer inline-block"
              title="Call us"
            >
              (571)-748-4366
            </a>
          </div>
        </div>

        <div className="hidden sm:flex space-x-4 items-center">
          {!isLoggedIn ? (
            <button
              onClick={handleLoginClick}
              className="flex items-center space-x-2 bg-yellow-500 text-black px-4 py-1 rounded-md hover:bg-yellow-600 transition-all font-medium shadow-md md:shadow-none"
            >
              <PersonIcon />
              <p>Login</p>
            </button>
          ) : (
            <div className="flex items-center space-x-2 relative">
              <button
                onClick={handleProfileClick}
                className="flex items-center space-x-2 text-sm text-white cursor-pointer"
              >
                <PersonIcon />
                <p>John Doe</p>
                <ArrowDropDownIcon />
              </button>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseProfileMenu}
                className="mt-2"
              >
                <MenuItem onClick={handleCloseProfileMenu}>
                  <Link to="/user/profile" className="text-black">
                    My Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseProfileMenu}>
                  <Link to="/user/dashboard" className="text-black">
                    My Dashboard
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseProfileMenu}>
                  <Link to="/user/favourites" className="text-black">
                    My Favorites
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleLogoutClick} className="text-black">
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden">
          <button onClick={handleToggleMenu} className="text-white">
            {menuOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </div>
      </div>

      {/* Logo and Navigation */}
      <div className="bg-white px-6 md:px-16 py-4 shadow-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="h-[60px]" />
          </Link>

          {/* Navigation Links */}
          <nav
            className={`fixed inset-y-0 right-0 transform md:transform-none md:static z-20 w-3/4 md:w-auto bg-gray-800 md:bg-transparent text-white md:text-gray-800 p-6 md:p-0 shadow-lg md:shadow-none transition-transform duration-300 md:flex md:space-x-8 items-center ${
              menuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center space-x-2 hover:text-yellow-400 transition-all font-medium ${
                  isActive("/") ? "font-bold text-yellow-500" : ""
                }`}
              >
                <HomeIcon className="text-yellow-500" />
                <p>Home</p>
              </Link>
              <Link
                to="/sample"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center space-x-2 hover:text-yellow-400 transition-all font-medium ${
                  isActive("/sample") ? "font-bold text-yellow-500" : ""
                }`}
              >
                <DescriptionIcon className="text-yellow-500" />
                <p>Samples</p>
              </Link>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center space-x-2 hover:text-yellow-400 transition-all font-medium ${
                  isActive("/about") ? "font-bold text-yellow-500" : ""
                }`}
              >
                <InfoIcon className="text-yellow-500" />
                <p>About Us</p>
              </Link>
              <Link
                to="/careers"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center space-x-2 hover:text-yellow-400 transition-all font-medium ${
                  isActive("/careers") ? "font-bold text-yellow-500" : ""
                }`}
              >
                <WorkIcon className="text-yellow-500" />
                <p>Careers</p>
              </Link>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center space-x-2 hover:text-yellow-400 transition-all font-medium ${
                  isActive("/contact") ? "font-bold text-yellow-500" : ""
                }`}
              >
                <ContactsIcon className="text-yellow-500" />
                <p>Contact Us</p>
              </Link>

              {/* Conditionally render the Projects link if logged in */}
              {isLoggedIn && (
                <Link
                  to="/projects"
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center space-x-2 hover:text-yellow-400 transition-all font-medium ${
                    isActive("/projects") ? "font-bold text-yellow-500" : ""
                  }`}
                >
                  <BusinessIcon className="text-yellow-500" />
                  <p>Projects</p>
                </Link>
              )}
            </div>

            {/* Get Free Quotes Button */}
            <div className="flex justify-center md:justify-start mt-6 md:mt-0 md:ml-8">
              <Link to="/quote" onClick={() => setMenuOpen(false)}>
                <button className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600 transition-all font-medium shadow-md md:shadow-none flex items-center space-x-2">
                  <QuoteIcon />
                  <p>Get Free Quotes</p>
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
