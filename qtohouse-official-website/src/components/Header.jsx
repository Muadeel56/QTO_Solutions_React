import React from "react";
import logo from "../assets/images/logo.svg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactsIcon from "@mui/icons-material/Contacts";

function Header() {
  return (
    <div className="w-full">
      {/* Top Contact Bar */}
      <div className="h-[150px] bg-white">
        <div className="flex items-center h-[50px] bg-gray-500 text-white">
          <div className="flex space-x-4 absolute right-0 px-4">
            <div className="flex space-x-2 items-center">
              <EmailIcon />
              <p>info@qtosol.com</p>
            </div>
            <div className="flex space-x-2 items-center">
              <PhoneIcon />
              <p>(321)-544-0023</p>
            </div>
          </div>
        </div>

        {/* Logo and Navigation */}
        <div className="flex justify-between items-center bg-white px-10 pt-2 shadow-md">
          <div className="pl-10 py-2">
            <img src={logo} alt="logo" className="h-[70px]" />
          </div>
          <div className="flex space-x-10 items-center">
            <div className="flex space-x-6 items-center">
              <div className="flex items-center space-x-1">
                <HomeIcon className="text-gray-500" />
                <p>Home</p>
              </div>
              <div className="flex items-center space-x-1">
                <InfoIcon className="text-gray-500" />
                <p>About Us</p>
              </div>
              <div className="flex items-center space-x-1">
                <WorkIcon className="text-gray-500" />
                <p>Solutions</p>
              </div>
              <div className="flex items-center space-x-1">
                <ContactsIcon className="text-gray-500" />
                <p>Contact Us</p>
              </div>
            </div>
            <div>
              <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-all">
                Get Free Quotes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
