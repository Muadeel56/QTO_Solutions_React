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

function UserListCompanies() {
  // Sample Data
  const companies = [
    { name: 'ABC Construction', contact: 'John Doe', location: 'New York', contractorType: 'General', constructionType: 'Residential' },
    { name: 'XYZ Builders', contact: 'Jane Smith', location: 'San Francisco', contractorType: 'Subcontractor', constructionType: 'Commercial' },
    { name: 'LMN Contractors', contact: 'Chris Brown', location: 'Los Angeles', contractorType: 'General', constructionType: 'Industrial' },
  ];

  const [sortBy, setSortBy] = React.useState('');

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <Box p={4}>
      {/* Title and Add Company Button */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: '#ca8a04' }}>
          Companies
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          sx={{ backgroundColor: '#ca8a04', '&:hover': { backgroundColor: '#a16207' } }}
        >
          Add New Company
        </Button>
      </Box>

      {/* Search and Sort Section */}
      <Grid container spacing={3} alignItems="center" mb={4}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            placeholder="Search for companies"
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
              <MenuItem value="Owner">Owner</MenuItem>
              <MenuItem value="Company">Company</MenuItem>
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
              <TableCell>Company Name</TableCell>
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

      {/* Pagination */}
      <Box mt={4} display="flex" justifyContent="flex-end">
        <Pagination count={10} color="primary" />
      </Box>
    </Box>
  );
}

export default UserListCompanies;
