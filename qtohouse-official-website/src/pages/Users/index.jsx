import React, { useState } from "react";
import {
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";

function Users() {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <div className="p-2 md:p- mt-2">
      {/* Header */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-600 text-center md:text-left mb-4">
        Users
      </h1>
      <p className="text-xs md:text-sm lg:text-lg text-gray-600 text-center md:text-left mb-6">
        CRM / Users / Contractors
      </p>

      {/* Actions (Add User, Filters, Import) */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-center md:justify-between px-8">
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg font-light md:font-semibold flex items-center">
          <AddIcon className="mr-2" /> Add User
        </button>
        <div className="flex flex-col md:flex-row gap-2">
          <button className="border border-yellow-600 text-yellow-600 px-2 md:px-4 py-1 md:py-2 rounded-lg font-light md:font-semibold flex items-center">
            <FilterListIcon className="mr-2" /> Filters
          </button>
          <button className="border border-yellow-600 text-yellow-600 px-2 md:px-4 py-1 md:py-2 rounded-lg font-light md:font-semibold flex items-center">
            <ImportExportIcon className="mr-2" /> Import
          </button>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      {/* Search and Sort */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 p-10">
        <div>
          <div className="relative ">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search for contractor..."
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-yellow-500"
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <p className="mr-4 text-gray-600">Sort by:</p>
          <div className="relative">
            <BusinessIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <select className="w-full pl-10 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-yellow-500">
              <option value="Company">Company</option>
              <option value="Lead">Lead</option>
              <option value="Name">Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table on Larger Screens / Cards on Smaller Screens */}
      <div className="hidden md:block bg-white shadow-md rounded-lg p-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="font-bold text-yellow-600 p-2">Name</th>
              <th className="font-bold text-yellow-600 p-2">Company</th>
              <th className="font-bold text-yellow-600 p-2">Email</th>
              <th className="font-bold text-yellow-600 p-2">Phone</th>
              <th className="font-bold text-yellow-600 p-2">Status</th>
              <th className="font-bold text-yellow-600 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample User Row */}
            <tr className="border-b hover:bg-gray-50">
              <td className="p-2 flex items-center space-x-2">
                <div className="bg-yellow-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                  <PersonIcon />
                </div>
                <p className="font-bold">John Doe</p>
              </td>
              <td className="p-2">Example Corp</td>
              <td className="p-2">john.doe@example.com</td>
              <td className="p-2">+1 123 456 7890</td>
              <td className="p-2 text-green-500">Active</td>
              <td className="p-2 flex items-center space-x-2">
                <IconButton>
                  <PhoneIcon />
                </IconButton>
                <IconButton>
                  <MessageIcon />
                </IconButton>
                <IconButton onClick={handleMenuClick}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={menuAnchor}
                  open={Boolean(menuAnchor)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Assign Project</MenuItem>
                </Menu>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cards on Smaller Screens */}
      <div className="md:hidden">
        {/* Sample User Card */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-600 text-white w-16 h-16 flex items-center justify-center rounded-full">
              <PersonIcon />
            </div>
            <div>
              <p className="font-bold text-lg">John Doe</p>
              <p className="text-gray-600">Example Corp</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-gray-600"><strong>Email:</strong> john.doe@example.com</p>
            <p className="text-gray-600"><strong>Phone:</strong> +1 123 456 7890</p>
            <p className="text-green-500"><strong>Status:</strong> Active</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <IconButton>
              <PhoneIcon />
            </IconButton>
            <IconButton>
              <MessageIcon />
            </IconButton>
            <IconButton onClick={handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
              <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
              <MenuItem onClick={handleMenuClose}>Assign Project</MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* User Details Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="text-center md:text-left">
            <div className="bg-yellow-600 text-white w-32 h-32 mx-auto md:mx-0 flex items-center justify-center rounded-full text-3xl mb-4">
              JD
            </div>
            <h2 className="text-lg font-bold">John Doe</h2>
            <p className="text-gray-600">Example Corp</p>
            <div className="flex justify-center md:justify-start space-x-2 mt-2">
              <IconButton>
                <PhoneIcon />
              </IconButton>
              <IconButton>
                <MessageIcon />
              </IconButton>
            </div>
          </div>

          <div className="flex flex-col space-y-4 justify-center items-center md:col-span-2">
            <h2 className="text-lg text-center font-bold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col justify-center items-center md:items-start">
                <p className="font-bold">Designation</p>
                <p>Lead Designer / Developer</p>
              </div>
              <div className="flex flex-col justify-center items-center md:items-start">
                <p className="font-bold">Email ID</p>
                <p>john.doe@example.com</p>
              </div>
              <div className="flex flex-col justify-center items-center md:items-start">
                <p className="font-bold">Phone</p>
                <p>+1 123 456 7890</p>
              </div>
              <div className="flex flex-col justify-center items-center md:items-start">
                <p className="font-bold">Lead Score</p>
                <p>10</p>
              </div>
              <div className="flex flex-col justify-center items-center md:items-start">
                <p className="font-bold">Tags</p>
                <p>Tag 1, Tag 2</p>
              </div>
              <div className="flex flex-col justify-center items-center md:items-start">
                <p className="font-bold">Last Contacted</p>
                <p>01/01/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
