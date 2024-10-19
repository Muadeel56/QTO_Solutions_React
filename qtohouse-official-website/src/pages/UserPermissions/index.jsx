import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function UserPermissions() {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
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

  const filteredPermissions = permissions.filter((permission) =>
    permission.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#ca8a04' }}>
        User Permissions
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={4}>
        Manage user permissions for different groups like HR, Management, Finance, etc.
      </Typography>

      {/* Group Selector and Search Bar */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          {/* Group Selector */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="group-select-label">Select Group</InputLabel>
            <Select
              labelId="group-select-label"
              value={selectedGroup}
              onChange={handleGroupChange}
              label="Select Group"
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
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Search Bar */}
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
        </Grid>
      </Grid>

      {/* Permissions Table */}
      <Paper elevation={3} sx={{ padding: '16px', borderRadius: '16px' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: '#ca8a04' }}>Permission</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#ca8a04' }}>Read</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#ca8a04' }}>Write</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#ca8a04' }}>Edit</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#ca8a04' }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPermissions.map((permission) => (
                <TableRow key={permission.id}>
                  <TableCell>{permission.name}</TableCell>
                  <TableCell>
                    <Checkbox
                      checked={permission.read}
                      onChange={() => handlePermissionChange(permission.id, 'read')}
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      checked={permission.write}
                      onChange={() => handlePermissionChange(permission.id, 'write')}
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      checked={permission.edit}
                      onChange={() => handlePermissionChange(permission.id, 'edit')}
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      checked={permission.delete}
                      onChange={() => handlePermissionChange(permission.id, 'delete')}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default UserPermissions;
