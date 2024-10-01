import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import { Button, TextField, Chip, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Dummy data from the backend (as an example)
const dummyProjects = {
  projects: [
    {
      id: 1,
      bid_date: "2024-05-01",
      name: "Lahore Shopping Mall Construction",
      location: "Lahore, Pakistan",
      bid_amount: 1500000,
      status: "Active",
      division: "Retail",
      qto_status: "In Progress"
    },
    {
      id: 2,
      bid_date: "2024-06-10",
      name: "Islamabad Highrise Building",
      location: "Islamabad, Pakistan",
      bid_amount: 3000000,
      status: "Active",
      division: "Residential",
      qto_status: "Available"
    },
    // Additional projects...
  ]
};

function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    bidAmount: '',
    status: '',
    division: ''
  });
  const [openFilters, setOpenFilters] = useState({
    keyword: false,
    location: false,
    bidAmount: false,
    status: false,
    division: false
  });
  const [selectedTab, setSelectedTab] = useState('Active');
  const [viewMode, setViewMode] = useState('grid'); // Track grid or list view

  const navigate = useNavigate();

  useEffect(() => {
    setProjects(dummyProjects.projects);
    setFilteredProjects(dummyProjects.projects);
  }, []);

  // Function to handle filter changes
  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  // Function to apply filters to the projects list
  useEffect(() => {
    let updatedProjects = projects;

    if (filters.keyword) {
      updatedProjects = updatedProjects.filter((project) =>
        project.name.toLowerCase().includes(filters.keyword.toLowerCase())
      );
    }

    if (filters.location) {
      updatedProjects = updatedProjects.filter((project) =>
        project.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.bidAmount) {
      updatedProjects = updatedProjects.filter(
        (project) => project.bid_amount <= parseFloat(filters.bidAmount)
      );
    }

    if (filters.status) {
      updatedProjects = updatedProjects.filter((project) =>
        project.status.toLowerCase().includes(filters.status.toLowerCase())
      );
    }

    if (filters.division) {
      updatedProjects = updatedProjects.filter((project) =>
        project.division.toLowerCase().includes(filters.division.toLowerCase())
      );
    }

    if (selectedTab) {
      updatedProjects = updatedProjects.filter(
        (project) => project.status.toLowerCase() === selectedTab.toLowerCase()
      );
    }

    setFilteredProjects(updatedProjects);
  }, [filters, projects, selectedTab]);

  const toggleFilter = (filterName) => {
    setOpenFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName]
    }));
  };

  return (
    <div className="w-full px-6 py-10 bg-gray-100">
      {/* Page Header */}
      <div className="flex flex-col items-start mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Projects</h1>
        <p className="text-sm text-gray-500 mt-2">Home / Projects</p>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
        {/* Filters Section */}
        <div className="w-full lg:w-1/4 bg-white p-6 shadow-md rounded-lg">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Show Results By</h1>

          {/* Filter By Keyword */}
          <div className="mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFilter('keyword')}
            >
              <h1 className="text-lg font-medium text-gray-700">Search Results by Keyword</h1>
              <ArrowDropDownIcon className="text-gray-600" />
            </div>
            {openFilters.keyword && (
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Enter keyword..."
                value={filters.keyword}
                onChange={(e) => handleFilterChange('keyword', e.target.value)}
                InputProps={{
                  endAdornment: <SearchIcon className="text-yellow-500" />
                }}
                className="mt-4"
              />
            )}
          </div>

          {/* Filter By Location */}
          <div className="mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFilter('location')}
            >
              <h1 className="text-lg font-medium text-gray-700">Location</h1>
              <ArrowDropDownIcon className="text-gray-600" />
            </div>
            {openFilters.location && (
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Enter location..."
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                InputProps={{
                  endAdornment: <LocationOnIcon className="text-yellow-500" />
                }}
                className="mt-4"
              />
            )}
          </div>

          {/* Filter By Bid Amount */}
          <div className="mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFilter('bidAmount')}
            >
              <h1 className="text-lg font-medium text-gray-700">Bid Amount</h1>
              <ArrowDropDownIcon className="text-gray-600" />
            </div>
            {openFilters.bidAmount && (
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Enter max bid amount..."
                value={filters.bidAmount}
                onChange={(e) => handleFilterChange('bidAmount', e.target.value)}
                InputProps={{
                  endAdornment: <SearchIcon className="text-yellow-500" />
                }}
                className="mt-4"
              />
            )}
          </div>

          {/* Filter By Division */}
          <div className="mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFilter('division')}
            >
              <h1 className="text-lg font-medium text-gray-700">Division</h1>
              <ArrowDropDownIcon className="text-gray-600" />
            </div>
            {openFilters.division && (
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Enter division..."
                value={filters.division}
                onChange={(e) => handleFilterChange('division', e.target.value)}
                InputProps={{
                  endAdornment: <SearchIcon className="text-yellow-500" />
                }}
                className="mt-4"
              />
            )}
          </div>
        </div>

        {/* Project Tabs and Listings */}
        <div className="flex-grow w-full bg-white p-6 shadow-md rounded-lg">
          {/* Project Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 items-center justify-between">
            <div className="flex space-x-4">
              {['Active', 'Past', 'My Projects'].map((tab) => (
                <Button
                  key={tab}
                  variant={selectedTab === tab ? 'contained' : 'outlined'}
                  onClick={() => setSelectedTab(tab)}
                  sx={{
                    backgroundColor: selectedTab === tab ? '#FFD700' : undefined,
                    color: selectedTab === tab ? '#000' : '#333',
                    borderColor: '#FFD700',
                    '&:hover': {
                      backgroundColor: selectedTab === tab ? '#FFC000' : undefined
                    },
                    padding: '8px 16px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    textTransform: 'none'
                  }}
                >
                  {tab} Projects
                </Button>
              ))}
            </div>

            {/* View Toggle Buttons */}
            <div>
              <IconButton onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}>
                {viewMode === 'list' ? <GridViewIcon fontSize="large" /> : <ViewListIcon fontSize="large" />}
              </IconButton>
            </div>
          </div>

          {/* Project Cards */}
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 gap-6' : ''}`}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <Chip label="New" color="error" size="small" />
                  <p className="text-gray-500 text-sm">Bid Date: {project.bid_date}</p>
                </div>
                <h1 className="text-xl font-bold mb-2">{project.name}</h1>
                <div className="flex items-center text-gray-500 mb-4">
                  <LocationOnIcon className="text-yellow-500 mr-2" />
                  <p>{project.location}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Chip
                    label="Better Park City Authority"
                    variant="outlined"
                    size="small"
                    sx={{
                      color: '#666',
                      borderColor: '#FFD700',
                      fontWeight: 'bold'
                    }}
                  />
                  <Chip
                    label={`Qto- ${project.qto_status}`}
                    size="small"
                    sx={{
                      backgroundColor: '#F39321',
                      color: '#fff',
                      fontWeight: 'bold'
                    }}
                  />
                </div>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-semibold">
                    Bid Amount: ${project.bid_amount.toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#FFD700',
                      color: '#000',
                      '&:hover': { backgroundColor: '#FFC000' },
                      fontWeight: 'bold',
                      padding: '8px 16px',
                      textTransform: 'none'
                    }}
                    size="small"
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    See More Details
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: '#FFD700',
                      color: '#FFD700',
                      '&:hover': { borderColor: '#FFC000', color: '#FFC000' },
                      fontWeight: 'bold',
                      padding: '6px 12px',
                      textTransform: 'none'
                    }}
                    size="small"
                  >
                    Request Takeoff
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
