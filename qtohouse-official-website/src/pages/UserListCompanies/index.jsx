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
  Button,
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
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';

function UserListCompanies() {
  // Sample Data
  const companies = [
    { name: 'ABC Construction', contact: 'John Doe', location: 'New York', contractorType: 'General', constructionType: 'Residential' },
    { name: 'XYZ Builders', contact: 'Jane Smith', location: 'San Francisco', contractorType: 'Subcontractor', constructionType: 'Commercial' },
    { name: 'LMN Contractors', contact: 'Chris Brown', location: 'Los Angeles', contractorType: 'General', constructionType: 'Industrial' },
  ];

  const [sortBy, setSortBy] = useState('');
  const isMobile = useMediaQuery('(max-width: 600px)'); // Check if the screen size is mobile

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className=" p-2">
      {/* Title and Add Company Button */}
      <div className="flex flex-col md:flex-row justify-evenly md:justify-between items-start md:items-center space-y-2 md:space-y-0 mb-6">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-600">Companies</h1>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          className="bg-yellow-600 hover:bg-yellow-700 text-white"
        >
          Add New Company
        </Button>
      </div>

      {/* Search and Sort Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Search Input */}
        <TextField
          variant="outlined"
          placeholder="Search for companies"
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
            <MenuItem value="Owner">Owner</MenuItem>
            <MenuItem value="Company">Company</MenuItem>
            <MenuItem value="Location">Location</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Responsive Table/Card Layout */}
      {isMobile ? (
        // Render card-like layout on mobile
        <div className="space-y-4">
          {companies.map((company, index) => (
            <Box key={index} component={Paper} className="p-4 shadow-md rounded-lg">
              <Typography variant="h6" fontWeight={'bold'} className="font-bold text-yellow-600">
                {company.name}
              </Typography>
              <Typography variant="body2" ><strong className='text-yellow-600'>Contact Person:</strong> {company.contact}</Typography>
              <Typography variant="body2"><strong className='text-yellow-600'>Location:</strong> {company.location}</Typography>
              <Typography variant="body2"><strong className='text-yellow-600'>Contractor Type:</strong> {company.contractorType}</Typography>
              <Typography variant="body2"><strong className='text-yellow-600'>Type of Construction:</strong> {company.constructionType}</Typography>
            </Box>
          ))}
        </div>
      ) : (
        // Render normal table layout for larger screens
        <TableContainer component={Paper} className="shadow-lg rounded-lg">
          <Table>
            <TableHead className="bg-gray-100">
              <TableRow>
                <TableCell sx={{ color: '#ca8a04' }}>Company Name</TableCell>
                <TableCell>Contact Person</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Contractor Type</TableCell>
                <TableCell>Type of Construction</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companies.map((company, index) => (
                <TableRow key={index}>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>{company.contact}</TableCell>
                  <TableCell>{company.location}</TableCell>
                  <TableCell>{company.contractorType}</TableCell>
                  <TableCell>{company.constructionType}</TableCell>
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

export default UserListCompanies;
