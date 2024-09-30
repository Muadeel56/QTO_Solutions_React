import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, TextField } from '@mui/material';
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
      division: "Retail"
    },
    {
      id: 2,
      bid_date: "2024-06-10",
      name: "Islamabad Highrise Building",
      location: "Islamabad, Pakistan",
      bid_amount: 3000000,
      status: "Active",
      division: "Residential"
    },
    {
      id: 3,
      bid_date: "2024-03-15",
      name: "Karachi Residential Apartments",
      location: "Karachi, Pakistan",
      bid_amount: 1200000,
      status: "Past",
      division: "Residential"
    },
    {
      id: 4,
      bid_date: "2024-07-20",
      name: "Peshawar Hospital Expansion",
      location: "Peshawar, Pakistan",
      bid_amount: 2200000,
      status: "My Projects",
      division: "Healthcare"
    },
    {
      id: 5,
      bid_date: "2024-09-05",
      name: "Faisalabad Industrial Complex",
      location: "Faisalabad, Pakistan",
      bid_amount: 5000000,
      status: "Active",
      division: "Industrial"
    },
    {
      id: 6,
      bid_date: "2024-04-11",
      name: "Quetta Commercial Plaza",
      location: "Quetta, Pakistan",
      bid_amount: 1800000,
      status: "Past",
      division: "Commercial"
    },
    {
      id: 7,
      bid_date: "2024-08-25",
      name: "Multan Green Housing Project",
      location: "Multan, Pakistan",
      bid_amount: 4000000,
      status: "Active",
      division: "Residential"
    }
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
  const [selectedTab, setSelectedTab] = useState('Active'); // State to track the selected tab

  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching data from backend
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

    // Apply keyword filter
    if (filters.keyword) {
      updatedProjects = updatedProjects.filter((project) =>
        project.name.toLowerCase().includes(filters.keyword.toLowerCase())
      );
    }

    // Apply location filter
    if (filters.location) {
      updatedProjects = updatedProjects.filter((project) =>
        project.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Apply bid amount filter
    if (filters.bidAmount) {
      updatedProjects = updatedProjects.filter(
        (project) => project.bid_amount <= parseFloat(filters.bidAmount)
      );
    }

    // Apply status filter
    if (filters.status) {
      updatedProjects = updatedProjects.filter((project) =>
        project.status.toLowerCase().includes(filters.status.toLowerCase())
      );
    }

    // Apply division filter
    if (filters.division) {
      updatedProjects = updatedProjects.filter((project) =>
        project.division.toLowerCase().includes(filters.division.toLowerCase())
      );
    }

    // Apply selected tab filter (status filter)
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

          {/* Filter By Status */}
          <div className="mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFilter('status')}
            >
              <h1 className="text-lg font-medium text-gray-700">Status</h1>
              <ArrowDropDownIcon className="text-gray-600" />
            </div>
            {openFilters.status && (
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Enter status..."
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
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
          <div className="flex space-x-4 mb-8">
            <Button
              variant={selectedTab === 'Active' ? 'contained' : 'outlined'}
              onClick={() => setSelectedTab('Active')}
              sx={{
                backgroundColor: selectedTab === 'Active' ? '#FFD700' : undefined,
                color: selectedTab === 'Active' ? '#000' : '#333',
                borderColor: '#FFD700',
                '&:hover': {
                  backgroundColor: selectedTab === 'Active' ? '#FFC000' : undefined
                }
              }}
            >
              Active Projects
            </Button>
            <Button
              variant={selectedTab === 'Past' ? 'contained' : 'outlined'}
              onClick={() => setSelectedTab('Past')}
              sx={{
                backgroundColor: selectedTab === 'Past' ? '#FFD700' : undefined,
                color: selectedTab === 'Past' ? '#000' : '#333',
                borderColor: '#FFD700',
                '&:hover': {
                  backgroundColor: selectedTab === 'Past' ? '#FFC000' : undefined
                }
              }}
            >
              Past Projects
            </Button>
            <Button
              variant={selectedTab === 'My Projects' ? 'contained' : 'outlined'}
              onClick={() => setSelectedTab('My Projects')}
              sx={{
                backgroundColor: selectedTab === 'My Projects' ? '#FFD700' : undefined,
                color: selectedTab === 'My Projects' ? '#000' : '#333',
                borderColor: '#FFD700',
                '&:hover': {
                  backgroundColor: selectedTab === 'My Projects' ? '#FFC000' : undefined
                }
              }}
            >
              My Projects
            </Button>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col border border-gray-300 rounded-lg p-4 shadow-sm bg-gray-800 text-white hover:shadow-lg transition-shadow duration-300"
              >
                <h1 className="text-xl font-bold text-yellow-400 mb-2">
                  Bid Date: {project.bid_date ? project.bid_date : "None"}
                </h1>
                <p className="text-lg font-semibold mb-2">{project.name}</p>
                <div className="flex items-center text-gray-400 mb-4">
                  <LocationOnIcon className="text-yellow-400 mr-2" />
                  <p>{project.location}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">
                    Bid Amount: ${project.bid_amount ? project.bid_amount.toLocaleString() : "None"}
                  </p>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#FFD700',
                      color: '#000',
                      '&:hover': { backgroundColor: '#FFC000' }
                    }}
                    size="small"
                    onClick={() => navigate(`/projects/${project.id}`)} // Navigate to project detail page
              
                  >
                    See More Details
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
