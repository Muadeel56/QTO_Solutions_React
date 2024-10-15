import React from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  InputAdornment,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  MenuItem,
  Select,
  FormControl,
  Grid,
  Pagination,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';

function UserProjectList() {
  // Sample Data
  const projects = [
    { title: 'Bridge Construction', manager: 'Alice Johnson', location: 'Chicago', status: 'In Progress', type: 'Infrastructure' },
    { title: 'Apartment Complex', manager: 'Bob Harris', location: 'Miami', status: 'Completed', type: 'Residential' },
    { title: 'Office Tower', manager: 'Charlie Davis', location: 'New York', status: 'In Progress', type: 'Commercial' },
  ];

  const [sortBy, setSortBy] = React.useState('');

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <Box p={4}>
      {/* Title and Add Project Button */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" sx={{ color:"#ca8a04" }}>
          Projects
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          sx={{ backgroundColor: '#ca8a04', '&:hover': { backgroundColor: '#b45309' } }}
        >
          Add New Project
        </Button>
      </Box>

      {/* Search and Sort Section */}
      <Grid container spacing={3} alignItems="center" mb={4}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            placeholder="Search for projects"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="flex-end">
          <FormControl variant="outlined" sx={{ width: 200 }}>
            <Select
              value={sortBy}
              onChange={handleSortChange}
              displayEmpty
              startAdornment={
                <InputAdornment position="start">
                  <SortIcon />
                </InputAdornment>
              }
            >
              <MenuItem value="" disabled>
                Sort By
              </MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Title">Title</MenuItem>
              <MenuItem value="Location">Location</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Table */}
      <TableContainer component={Paper} sx={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project Title</TableCell>
              <TableCell>Manager</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow key={index}>
                <TableCell>{project.title}</TableCell>
                <TableCell>{project.manager}</TableCell>
                <TableCell>{project.location}</TableCell>
                <TableCell>{project.status}</TableCell>
                <TableCell>{project.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box mt={4} display="flex" justifyContent="flex-end">
        <Pagination count={10} color="primary" />
      </Box>
    </Box>
  );
}

export default UserProjectList;
