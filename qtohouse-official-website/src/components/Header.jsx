import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Menu, MenuItem } from "@mui/material";

function Header({ isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full shadow-md font-inter">
      {/* Top Contact Bar - Visible on all devices */}
      <div className="bg-gray-900 text-white px-4 md:px-8 lg:px-16 flex flex-col sm:flex-row justify-between items-center py-2 sm:py-0">
        {/* Email and Phone */}
        <div className="flex items-center space-x-4 text-xs md:text-sm lg:text-base">
          <div className="flex space-x-2 items-center">
            <EmailIcon className="text-yellow-500" />
            <a
              href="mailto:info@qtohouse.com"
              className="text-white cursor-pointer"
              title="Send us an email"
            >
              info@qtohouse.com
            </a>
          </div>

          <div className="flex space-x-2 items-center">
            <PhoneIcon className="text-yellow-500" />
            <a
              href="tel:+15717484366"
              className="text-white cursor-pointer"
              title="Call us"
            >
              (571)-748-4366
            </a>
          </div>
        </div>

        {/* Login or Profile */}
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          {!isLoggedIn ? (
            <button
              onClick={handleLoginClick}
              className="flex items-center space-x-2 bg-yellow-500 text-black text-xs md:text-sm px-4 py-1 rounded-md hover:bg-yellow-600 transition-all font-medium shadow-md"
            >
              <PersonIcon />
              <p>Login</p>
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={handleProfileClick}
                className="flex items-center space-x-2 text-sm text-white"
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
      </div>

      {/* Logo and Navigation */}
      <div className="bg-white px-4 md:px-8 py-4 shadow-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-[40px] md:h-[60px] object-contain"
            />
          </Link>

          {/* Hamburger Icon for Mobile */}
          <div className="flex sm:hidden">
            <button onClick={handleToggleMenu} className="text-gray-900">
              {menuOpen ? (
                <CloseIcon fontSize="large" />
              ) : (
                <MenuIcon fontSize="large" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <nav
            className={`fixed inset-y-0 right-0 transform md:transform-none md:static z-20 w-3/4 md:w-auto bg-gray-800 md:bg-transparent text-white md:text-gray-800 p-6 md:p-0 shadow-lg md:shadow-none transition-transform duration-300 md:flex md:space-x-8 items-center ${
              menuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
            }`}
          >
            {/* Close Button for Mobile Menu */}
            <div className="flex justify-end mb-6 md:hidden">
              <button onClick={handleToggleMenu}>
                <CloseIcon className="text-white" fontSize="large" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row md:items-center text-[12px] md:text-sm lg:text-base space-y-6 md:space-y-0 md:space-x-6">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center hover:text-yellow-400 transition-all font-medium ${
                  isActive("/") ? "font-bold text-yellow-500" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/sample"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center hover:text-yellow-400 transition-all font-medium ${
                  isActive("/sample") ? "font-bold text-yellow-500" : ""
                }`}
              >
                Samples
              </Link>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center hover:text-yellow-400 transition-all font-medium ${
                  isActive("/about") ? "font-bold text-yellow-500" : ""
                }`}
              >
                About
              </Link>
              <Link
                to="/careers"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center hover:text-yellow-400 transition-all font-medium ${
                  isActive("/careers") ? "font-bold text-yellow-500" : ""
                }`}
              >
                Careers
              </Link>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center hover:text-yellow-400 transition-all font-medium ${
                  isActive("/contact") ? "font-bold text-yellow-500" : ""
                }`}
              >
                Contact
              </Link>
              {isLoggedIn && (
                <Link
                  to="/projects"
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center hover:text-yellow-400 transition-all font-medium ${
                    isActive("/projects") ? "font-bold text-yellow-500" : ""
                  }`}
                >
                  Projects
                </Link>
              )}
            </div>

            {/* Get Free Quotes Button */}
            <div className="mt-6 md:mt-0">
              <Link to="/quote" onClick={() => setMenuOpen(false)}>
                <button className="bg-yellow-500 text-black text-sm lg:text-base px-4 py-2 rounded-md hover:bg-yellow-600 transition-all font-medium">
                  Get Free Quotes
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
