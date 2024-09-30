import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, TextField } from '@mui/material';

function ProjectPage() {
  const [openFilters, setOpenFilters] = useState({
    keyword: false,
    location: false,
    dateRange: false,
    bidAmount: false,
    status: false,
    division: false,
  });

  const toggleFilter = (filterName) => {
    setOpenFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  return (
    <div className="w-full px-6 py-10 bg-gray-100">
      {/* Page Header */}
      <div className="flex flex-col items-start mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Projects</h1>
        <p className="text-sm text-gray-500 mt-2">Home / Projects</p>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 mb-10">
        {/* Filters Title */}
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
                InputProps={{
                  endAdornment: <SearchIcon className="text-yellow-500" />,
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
                InputProps={{
                  endAdornment: <SearchIcon className="text-yellow-500" />,
                }}
                className="mt-4"
              />
            )}
          </div>

          {/* Filter By Date Range */}
          <div className="mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFilter('dateRange')}
            >
              <h1 className="text-lg font-medium text-gray-700">Date Range</h1>
              <ArrowDropDownIcon className="text-gray-600" />
            </div>
            {openFilters.dateRange && (
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Select date range..."
                InputProps={{
                  endAdornment: <SearchIcon className="text-yellow-500" />,
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
                placeholder="Enter bid amount..."
                InputProps={{
                  endAdornment: <SearchIcon className="text-yellow-500" />,
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
                placeholder="Select status..."
                InputProps={{
                  endAdornment: <SearchIcon className="text-yellow-500" />,
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
                placeholder="Select division..."
                InputProps={{
                  endAdornment: <SearchIcon className="text-yellow-500" />,
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
              variant="contained"
              sx={{ backgroundColor: '#FFD700', color: '#000', '&:hover': { backgroundColor: '#FFC000' } }}
            >
              Active Projects
            </Button>
            <Button
              variant="outlined"
              sx={{ color: '#333', borderColor: '#FFD700', '&:hover': { borderColor: '#FFC000', color: '#000' } }}
            >
              Past Projects
            </Button>
            <Button
              variant="outlined"
              sx={{ color: '#333', borderColor: '#FFD700', '&:hover': { borderColor: '#FFC000', color: '#000' } }}
            >
              My Projects
            </Button>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((project) => (
              <div
                key={project}
                className="flex flex-col border border-gray-300 rounded-lg p-4 shadow-sm bg-gray-800 text-white hover:shadow-lg transition-shadow duration-300"
              >
                <h1 className="text-xl font-bold text-yellow-400 mb-2">Bid Date: None</h1>
                <p className="text-lg font-semibold mb-2">Lahore Project</p>
                <div className="flex items-center text-gray-400 mb-4">
                  <LocationOnIcon className="text-yellow-400 mr-2" />
                  <p>Location Name</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">Bid Amount: $ None</p>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#FFD700',
                      color: '#000',
                      '&:hover': { backgroundColor: '#FFC000' },
                    }}
                    size="small"
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
