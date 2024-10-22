import React, { useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Pagination,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  useMediaQuery,
  Box,
  Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';

function FavouriteProjects() {
  const projects = [
    {
      id: 1,
      title: "Construction of Highway",
      location: "New York, USA",
      status: "In Progress",
      statusColor: "text-green-500",
    },
    {
      id: 2,
      title: "Bridge Renovation",
      location: "London, UK",
      status: "Delayed",
      statusColor: "text-red-500",
    },
    {
      id: 3,
      title: "School Building Construction",
      location: "Lahore, Pakistan",
      status: "Completed",
      statusColor: "text-green-500",
    },
  ];

  const [sortBy, setSortBy] = useState('');
  const isMobile = useMediaQuery('(max-width: 600px)'); // Check if the screen size is mobile

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="p-2">
      {/* Title Section */}
      <div className="flex flex-col md:flex-row justify-evenly md:justify-between items-start md:items-center space-y-2 md:space-y-0 mb-6">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-600">Favourite Projects</h1>
      </div>

      {/* Search and Sort Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Search Input */}
        <TextField
          variant="outlined"
          placeholder="Search for projects"
          sx={{ backgroundColor: 'white', width: '100%', borderRadius: '8px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Sort By Select */}
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortBy}
            onChange={handleSortChange}
            label="Sort By"
            startAdornment={
              <InputAdornment position="start">
                <SortIcon />
              </InputAdornment>
            }
          >
            <MenuItem value="" disabled>
              Sort By
            </MenuItem>
            <MenuItem value="Status">Status</MenuItem>
            <MenuItem value="Location">Location</MenuItem>
            <MenuItem value="Title">Title</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Responsive Table/Card Layout */}
      {isMobile ? (
        // Render card-like layout on mobile
        <div className="space-y-4">
          {projects.map((project, index) => (
            <Box key={index} component={Paper} className="p-4 shadow-md rounded-lg">
              <Typography variant="h6" fontWeight={'bold'} className="font-bold text-yellow-600">
                {project.title}
              </Typography>
              <Typography variant="body2"><strong className="text-yellow-600">Location:</strong> {project.location}</Typography>
              <Typography variant="body2"><strong className="text-yellow-600">Status:</strong> <span className={project.statusColor}>{project.status}</span></Typography>
            </Box>
          ))}
        </div>
      ) : (
        // Render normal table layout for larger screens
        <TableContainer component={Paper} className="shadow-lg rounded-lg">
          <Table>
            <TableHead className="bg-gray-100">
              <TableRow>
                <TableCell sx={{ color: '#ca8a04' }}>Project Title</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project, index) => (
                <TableRow key={index}>
                  <TableCell>{project.title}</TableCell>
                  <TableCell>{project.location}</TableCell>
                  <TableCell className={project.statusColor}>{project.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Pagination */}
      <div className="mt-6 flex justify-end">
        <Pagination count={10} color="primary" />
      </div>
    </div>
  );
}

export default FavouriteProjects;
