import React, { useState } from "react";
import { Box, Menu, MenuItem, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function UserGroups() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  const handleMenuClick = (event, groupId) => {
    setMenuAnchor(event.currentTarget);
    setSelectedGroupId(groupId); // Store selected group ID
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setSelectedGroupId(null);
  };

  return (
    <div className="p-1 md:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-600 text-center md:text-left mb-4">
        Groups
      </h1>
      <p className="text-xs md:text-sm lg:text-lg text-gray-600 text-center md:text-left mb-6">
        Users / Groups
      </p>

      {/* Actions (Add Group, Filters, Import) */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-center md:justify-between">
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg font-light md:font-semibold flex items-center">
          <AddIcon className="mr-2" /> Add Group
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 px-2">
        <div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for groups..."
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-yellow-500"
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <p className="mr-4 text-gray-600">Sort by:</p>
          <div className="relative">
            <select className="w-full pl-10 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-yellow-500">
              <option value="Name">Name</option>
              <option value="Date">Date</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table on Larger Screens / Cards on Smaller Screens */}
      <div className="hidden md:block bg-white shadow-md rounded-lg p-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="font-bold text-yellow-600 p-2">Group Name</th>
              <th className="font-bold text-yellow-600 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Group Row */}
            {[
              { id: 1, groupName: "Admin Group" },
              { id: 2, groupName: "Managers Group" },
              { id: 3, groupName: "Developers Group" },
            ].map((group) => (
              <tr className="border-b hover:bg-gray-50" key={group.id}>
                <td className="p-2">{group.groupName}</td>
                <td className="p-2 flex items-center space-x-2">
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton>
                    <PersonAddIcon />
                  </IconButton>
                  <IconButton onClick={(event) => handleMenuClick(event, group.id)}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={menuAnchor}
                    open={Boolean(menuAnchor)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Assign User</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Assign Permissions</MenuItem>
                  </Menu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards on Smaller Screens */}
      <div className="md:hidden px-2">
        {/* Sample Group Card */}
        {[
          { id: 1, groupName: "Admin Group" },
          { id: 2, groupName: "Managers Group" },
          { id: 3, groupName: "Developers Group" },
        ].map((group) => (
          <div className="bg-white shadow-md rounded-lg p-4 mb-4" key={group.id}>
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg">{group.groupName}</p>
              <IconButton onClick={(event) => handleMenuClick(event, group.id)}>
                <MoreVertIcon />
              </IconButton>
            </div>
            <div className="flex space-x-4 mt-4">
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
              <IconButton>
                <PersonAddIcon />
              </IconButton>
            </div>
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
              <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
              <MenuItem onClick={handleMenuClose}>Assign User</MenuItem>
              <MenuItem onClick={handleMenuClose}>Assign Permissions</MenuItem>
            </Menu>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserGroups;
