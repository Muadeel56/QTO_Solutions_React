import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Select,
  MenuItem,
  Checkbox,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  IconButton,
  Menu,
  MenuItem as MuiMenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function UserPermissions() {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedPermissionId, setSelectedPermissionId] = useState(null);

  const [permissions, setPermissions] = useState([
    { id: 1, name: 'View Reports', read: false, write: false, edit: false, delete: false },
    { id: 2, name: 'Manage Users', read: false, write: false, edit: false, delete: false },
    { id: 3, name: 'Access Finance', read: false, write: false, edit: false, delete: false },
  ]);

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  };

  const handlePermissionChange = (id, type) => {
    setPermissions((prevPermissions) =>
      prevPermissions.map((permission) =>
        permission.id === id ? { ...permission, [type]: !permission[type] } : permission
      )
    );
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMenuClick = (event, permissionId) => {
    setMenuAnchor(event.currentTarget);
    setSelectedPermissionId(permissionId);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setSelectedPermissionId(null);
  };

  const filteredPermissions = permissions.filter((permission) =>
    permission.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-1 md:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-600 text-center md:text-left mb-4">
        User Permissions
      </h1>
      <p className="text-xs md:text-sm lg:text-lg text-gray-600 text-center md:text-left mb-6">
        Manage user permissions for different groups like HR, Management, Finance, etc.
      </p>

      {/* Group Selector and Search */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <FormControl fullWidth>
            <InputLabel>Select Group</InputLabel>
            <Select
              value={selectedGroup}
              onChange={handleGroupChange}
              sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0px 2px 10px rgba(0,0,0,0.05)',
              }}
            >
              <MenuItem value="HR">HR</MenuItem>
              <MenuItem value="Management">Management</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <TextField
              fullWidth
              placeholder="Search permissions..."
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0px 2px 10px rgba(0,0,0,0.05)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Table on Larger Screens / Cards on Smaller Screens */}
      <div className="hidden md:block bg-white shadow-md rounded-lg p-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="font-bold text-yellow-600 p-2">Permission</th>
              <th className="font-bold text-yellow-600 p-2">Read</th>
              <th className="font-bold text-yellow-600 p-2">Write</th>
              <th className="font-bold text-yellow-600 p-2">Edit</th>
              <th className="font-bold text-yellow-600 p-2">Delete</th>
              <th className="font-bold text-yellow-600 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPermissions.map((permission) => (
              <tr className="border-b hover:bg-gray-50" key={permission.id}>
                <td className="p-2">{permission.name}</td>
                <td className="p-2">
                  <Checkbox
                    checked={permission.read}
                    onChange={() => handlePermissionChange(permission.id, 'read')}
                  />
                </td>
                <td className="p-2">
                  <Checkbox
                    checked={permission.write}
                    onChange={() => handlePermissionChange(permission.id, 'write')}
                  />
                </td>
                <td className="p-2">
                  <Checkbox
                    checked={permission.edit}
                    onChange={() => handlePermissionChange(permission.id, 'edit')}
                  />
                </td>
                <td className="p-2">
                  <Checkbox
                    checked={permission.delete}
                    onChange={() => handlePermissionChange(permission.id, 'delete')}
                  />
                </td>
                <td className="p-2">
                  <IconButton onClick={(event) => handleMenuClick(event, permission.id)}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={menuAnchor}
                    open={Boolean(menuAnchor)}
                    onClose={handleMenuClose}
                  >
                    <MuiMenuItem onClick={handleMenuClose}>Edit</MuiMenuItem>
                    <MuiMenuItem onClick={handleMenuClose}>Delete</MuiMenuItem>
                  </Menu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards on Smaller Screens */}
      <div className="md:hidden p-2">
        {filteredPermissions.map((permission) => (
          <div className="bg-white shadow-md rounded-lg p-4 mb-4" key={permission.id}>
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg">{permission.name}</p>
              <IconButton onClick={(event) => handleMenuClick(event, permission.id)}>
                <MoreVertIcon />
              </IconButton>
            </div>
            <div className="flex flex-col space-y-2 mt-4">
              <div className="flex justify-between items-center">
                <p className="font-semibold">Read</p>
                <Checkbox
                  checked={permission.read}
                  onChange={() => handlePermissionChange(permission.id, 'read')}
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="font-semibold">Write</p>
                <Checkbox
                  checked={permission.write}
                  onChange={() => handlePermissionChange(permission.id, 'write')}
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="font-semibold">Edit</p>
                <Checkbox
                  checked={permission.edit}
                  onChange={() => handlePermissionChange(permission.id, 'edit')}
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="font-semibold">Delete</p>
                <Checkbox
                  checked={permission.delete}
                  onChange={() => handlePermissionChange(permission.id, 'delete')}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPermissions;
