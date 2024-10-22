import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
  Pagination,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";

function UserProjectList() {
  // Sample Data
  const projects = [
    {
      title: "Bridge Construction",
      manager: "Alice Johnson",
      location: "Chicago",
      status: "In Progress",
      type: "Infrastructure",
    },
    {
      title: "Apartment Complex",
      manager: "Bob Harris",
      location: "Miami",
      status: "Completed",
      type: "Residential",
    },
    {
      title: "Office Tower",
      manager: "Charlie Davis",
      location: "New York",
      status: "In Progress",
      type: "Commercial",
    },
  ];

  const [sortBy, setSortBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ml p-1">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-600 text-center mb-4">
        Projects
      </h1>
      <p className="text-xs md:text-sm lg:text-lg text-gray-600 text-center mb-6">
        Manage your projects below. Search, sort, and view details.
      </p>

      {/* Search and Sort Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <TextField
          fullWidth
          placeholder="Search for projects"
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
        />
        <FormControl fullWidth>
          <Select
            value={sortBy}
            onChange={handleSortChange}
            displayEmpty
            inputProps={{ "aria-label": "Sort By" }}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
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
      </div>

      {/* Table for Larger Screens */}
      <div className="hidden md:block bg-white shadow-md rounded-lg p-6">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-yellow-600">Project Title</TableCell>
                <TableCell className="font-bold text-yellow-600">Manager</TableCell>
                <TableCell className="font-bold text-yellow-600">Location</TableCell>
                <TableCell className="font-bold text-yellow-600">Status</TableCell>
                <TableCell className="font-bold text-yellow-600">Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProjects.map((project, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
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
      </div>

      {/* Cards for Smaller Screens */}
      <div className="md:hidden">
        {filteredProjects.map((project, index) => (
          <Card key={index} className="mb-4 shadow-md rounded-lg">
            <CardContent>
              <Typography variant="h6" className="font-bold">
                {project.title}
              </Typography>
              <Typography color="textSecondary">Manager: {project.manager}</Typography>
              <Typography color="textSecondary">Location: {project.location}</Typography>
              <Typography color="textSecondary">Status: {project.status}</Typography>
              <Typography color="textSecondary">Type: {project.type}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination count={10} color="primary" />
      </div>
    </div>
  );
}

export default UserProjectList;
