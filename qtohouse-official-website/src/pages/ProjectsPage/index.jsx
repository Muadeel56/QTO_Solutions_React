import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";
import {
  Button,
  TextField,
  Chip,
  IconButton,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

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
      qto_status: "In Progress",
      is_favourite: true,
      is_mine: true,
    },
    {
      id: 2,
      bid_date: "2024-06-10",
      name: "Islamabad Highrise Building",
      location: "Islamabad, Pakistan",
      bid_amount: 3000000,
      status: "Active",
      division: "Residential",
      qto_status: "Available",
      is_favourite: false,
      is_mine: true,
    },
    {
      id: 3,
      bid_date: "2024-06-15",
      name: "Karachi Office Tower",
      location: "Karachi, Pakistan",
      bid_amount: 2500000,
      status: "Past",
      division: "Commercial",
      qto_status: "Available",
      is_favourite: true,
      is_mine: false,
    },
    {
      id: 4,
      bid_date: "2024-07-20",
      name: "Peshawar Hospital Construction",
      location: "Peshawar, Pakistan",
      bid_amount: 3500000,
      status: "Past",
      division: "Healthcare",
      qto_status: "In Progress",
      is_favourite: false,
      is_mine: false,
    },
    {
      id: 5,
      bid_date: "2024-08-01",
      name: "Quetta School Renovation",
      location: "Quetta, Pakistan",
      bid_amount: 500000,
      status: "Active",
      division: "Education",
      qto_status: "Available",
      is_favourite: true,
      is_mine: false,
    },
    {
      id: 6,
      bid_date: "2024-08-15",
      name: "Islamabad Sports Complex",
      location: "Islamabad, Pakistan",
      bid_amount: 4000000,
      status: "Active",
      division: "Recreational",
      qto_status: "In Progress",
      is_favourite: false,
      is_mine: false,
    },
  ],
};

function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    bidAmount: "",
    status: "",
    division: "",
    startDate: "",
    endDate: "",
  });
  const [openFilters, setOpenFilters] = useState({
    keyword: false,
    location: false,
    bidAmount: false,
    status: false,
    division: false,
    dateRange: false,
  });
  const [selectedTab, setSelectedTab] = useState("Active");
  const [viewMode, setViewMode] = useState("grid"); // Track grid or list view

  const navigate = useNavigate();

  useEffect(() => {
    setProjects(dummyProjects.projects);
    setFilteredProjects(dummyProjects.projects);
  }, []);

  // Function to handle filter changes
  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  // Apply filters when they change
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

    if (filters.startDate || filters.endDate) {
      updatedProjects = updatedProjects.filter((project) => {
        const bidDate = dayjs(project.bid_date);
        const startDate = filters.startDate ? dayjs(filters.startDate) : null;
        const endDate = filters.endDate ? dayjs(filters.endDate) : null;

        return (
          (!startDate ||
            bidDate.isAfter(startDate) ||
            bidDate.isSame(startDate)) &&
          (!endDate || bidDate.isBefore(endDate) || bidDate.isSame(endDate))
        );
      });
    }

    // Filter based on the selected tab
    if (selectedTab === "My Projects") {
      updatedProjects = updatedProjects.filter((project) => project.is_mine);
    } else if (selectedTab === "Favourite Projects") {
      updatedProjects = updatedProjects.filter(
        (project) => project.is_favourite
      );
    } else if (selectedTab) {
      updatedProjects = updatedProjects.filter(
        (project) => project.status.toLowerCase() === selectedTab.toLowerCase()
      );
    }

    setFilteredProjects(updatedProjects);
  }, [filters, projects, selectedTab]);

  const toggleFilter = (filterName) => {
    setOpenFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  return (
    <div className="w-full px-4 lg:px-6 py-6 lg:py-10 bg-gray-100 font-poppins">
      {/* Page Header */}
      <div className="flex flex-col items-start mb-6 lg:mb-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Projects
        </h1>
        <p className="text-xs lg:text-sm text-gray-500 mt-2">Home / Projects</p>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
        {/* Filters Section */}
        <div className="w-full lg:w-1/4 bg-white p-4 lg:p-6 shadow-md rounded-lg">
          <h1 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4 lg:mb-6">
            Show Results By
          </h1>

          {/* Filter By Keyword */}
          <div className="mb-3 lg:mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFilter("keyword")}
            >
              <h1 className="text-base lg:text-lg font-medium text-gray-700">
                Search Results by Keyword
              </h1>
              <ArrowDropDownIcon className="text-gray-600" />
            </div>
            {openFilters.keyword && (
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Enter keyword..."
                value={filters.keyword}
                onChange={(e) => handleFilterChange("keyword", e.target.value)}
                InputProps={{
                  endAdornment: <SearchIcon className="text-yellow-500" />,
                }}
                className="mt-3 lg:mt-4"
              />
            )}
          </div>

          {/* Filter By Location */}
          <div className="mb-3 lg:mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFilter("location")}
            >
              <h1 className="text-base lg:text-lg font-medium text-gray-700">
                Location
              </h1>
              <ArrowDropDownIcon className="text-gray-600" />
            </div>
            {openFilters.location && (
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Enter location..."
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                InputProps={{
                  endAdornment: <LocationOnIcon className="text-yellow-500" />,
                }}
                className="mt-3 lg:mt-4"
              />
            )}
          </div>

          {/* Filter By Bid Amount */}
          <div className="mb-3 lg:mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFilter("bidAmount")}
            >
              <h1 className="text-base lg:text-lg font-medium text-gray-700">
                Bid Amount
              </h1>
              <ArrowDropDownIcon className="text-gray-600" />
            </div>
            {openFilters.bidAmount && (
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Enter max bid amount..."
                value={filters.bidAmount}
                onChange={(e) =>
                  handleFilterChange("bidAmount", e.target.value)
                }
                InputProps={{
                  endAdornment: <SearchIcon className="text-yellow-500" />,
                }}
                className="mt-3 lg:mt-4"
              />
            )}
          </div>

          {/* Filter By Status */}
          <div className="mb-3 lg:mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFilter("status")}
            >
              <h1 className="text-base lg:text-lg font-medium text-gray-700">
                Status
              </h1>
              <ArrowDropDownIcon className="text-gray-600" />
            </div>
            {openFilters.status && (
              <FormControl
                fullWidth
                variant="outlined"
                size="small"
                className="mt-4"
              >
                <InputLabel>Status</InputLabel>
                <Select
                  value={filters.status}
                  onChange={(e) => handleFilterChange("status", e.target.value)}
                  label="Status"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Past">Past</MenuItem>
                </Select>
              </FormControl>
            )}
          </div>

          {/* Filter By Date Range */}
          <div className="mb-3 lg:mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFilter("dateRange")}
            >
              <h1 className="text-base lg:text-lg font-medium text-gray-700">
                Date Range
              </h1>
              <ArrowDropDownIcon className="text-gray-600" />
            </div>
            {openFilters.dateRange && (
              <div className="mt-3 lg:mt-4 flex flex-col space-y-4">
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  label="Start Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={filters.startDate}
                  onChange={(e) =>
                    handleFilterChange("startDate", e.target.value)
                  }
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  label="End Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={filters.endDate}
                  onChange={(e) =>
                    handleFilterChange("endDate", e.target.value)
                  }
                />
              </div>
            )}
          </div>

          {/* Filter By Division */}
          <div className="mb-3 lg:mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFilter("division")}
            >
              <h1 className="text-base lg:text-lg font-medium text-gray-700">
                Division
              </h1>
              <ArrowDropDownIcon className="text-gray-600" />
            </div>
            {openFilters.division && (
              <FormControl
                fullWidth
                variant="outlined"
                size="small"
                className="mt-4"
              >
                <InputLabel>Division</InputLabel>
                <Select
                  value={filters.division}
                  onChange={(e) =>
                    handleFilterChange("division", e.target.value)
                  }
                  label="Division"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Retail">Retail</MenuItem>
                  <MenuItem value="Residential">Residential</MenuItem>
                  <MenuItem value="Commercial">Commercial</MenuItem>
                  <MenuItem value="Healthcare">Healthcare</MenuItem>
                  <MenuItem value="Education">Education</MenuItem>
                  <MenuItem value="Recreational">Recreational</MenuItem>
                </Select>
              </FormControl>
            )}
          </div>
        </div>

        {/* Project Tabs and Listings */}
        <div className="flex-grow w-full bg-white p-4 lg:p-6 shadow-md rounded-lg">
          {/* Project Tabs */}
          <div className="flex flex-wrap gap-2 lg:gap-4 mb-6 lg:mb-8 items-center justify-between">
            <div className="flex flex-col justify-center md:flex-row lg:flex-row space-y-2 md:space-x-2 lg:space-x-4">
              {["Active", "Past", "My Projects", "Favourite Projects"].map(
                (tab) => (
                  <Button
                    key={tab}
                    variant={selectedTab === tab ? "contained" : "outlined"}
                    onClick={() => setSelectedTab(tab)}
                    sx={{
                      backgroundColor:
                        selectedTab === tab ? "#FFD700" : undefined,
                      color: selectedTab === tab ? "#" : "#333",
                      borderColor: "#FFD700",
                      "&:hover": {
                        backgroundColor:
                          selectedTab === tab ? "#FFC000" : undefined,
                      },
                      padding: "8px 16px",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    {tab}
                  </Button>
                )
              )}
            </div>

            {/* View Toggle Buttons */}
            <div>
              <IconButton
                onClick={() =>
                  setViewMode(viewMode === "list" ? "grid" : "list")
                }
              >
                {viewMode === "list" ? (
                  <GridViewIcon fontSize="large" />
                ) : (
                  <ViewListIcon fontSize="large" />
                )}
              </IconButton>
            </div>
          </div>

          {/* Project Cards */}
          <div
            className={`grid ${
              viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 gap-6" : ""
            }`}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`flex flex-col border border-gray-300 rounded-lg p-4 lg:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                  viewMode === "list"
                    ? "w-full flex-row items-center justify-between"
                    : ""
                }`}
              >
                {viewMode === "grid" ? (
                  <>
                    <div className="flex justify-between items-center mb-3 lg:mb-4">
                      <Chip label="New" color="error" size="small" />
                      <p className="text-gray-500 text-xs lg:text-sm">
                        Bid Date: {project.bid_date}
                      </p>
                    </div>
                    <h1 className="text-sm md:text-lg lg:text-xl font-bold mb-2">
                      {project.name}
                    </h1>
                    <div className="flex items-center text-gray-500 mb-3 lg:mb-4">
                      <LocationOnIcon className="text-yellow-500 mr-2" />
                      <p className="text-xs md:text-sm lg:text-lg">
                        {project.location}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3 lg:mb-4">
                      <Chip
                        label={`Qto- ${project.qto_status}`}
                        size="small"
                        sx={{
                          backgroundColor: "#F39321",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items- space-y-2 md:space-y-0">
                      <Button
                        variant="contained"
                        className="text-xs md:text-sm lg:text-lg py-2 px-4 md:px-6 lg:px-8"
                        sx={{
                          backgroundColor: "#FFD700",
                          color: "#000",
                          "&:hover": { backgroundColor: "#FFC000" },
                          fontWeight: "bold",
                          textTransform: "none",
                        }}
                        onClick={() => navigate(`/projects/${project.id}`)}
                      >
                        See More Details
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          borderColor: "#FFD700",
                          color: "#FFD700",
                          "&:hover": {
                            borderColor: "#FFC000",
                            color: "#FFC000",
                          },
                          fontWeight: "bold",
                          padding: "6px 12px",
                          textTransform: "none",
                        }}
                        size="small"
                      >
                        Request Takeoff
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="flex w-full justify-between items-center gap-4">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xl font-bold">{project.name}</h1>
                      <p className="text-sm text-gray-500">
                        Bid Date: {project.bid_date}
                      </p>
                      <p className="text-lg font-semibold">
                        Bid Amount: ${project.bid_amount.toLocaleString()}
                      </p>
                      <Chip
                        label={`Qto- ${project.qto_status}`}
                        size="small"
                        sx={{
                          backgroundColor: "#F39321",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#FFD700",
                          color: "#000",
                          "&:hover": { backgroundColor: "#FFC000" },
                          fontWeight: "bold",
                          textTransform: "none",
                        }}
                        size="small"
                        onClick={() => navigate(`/projects/${project.id}`)}
                      >
                        See More Details
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          borderColor: "#FFD700",
                          color: "#FFD700",
                          "&:hover": {
                            borderColor: "#FFC000",
                            color: "#FFC000",
                          },
                          fontWeight: "bold",
                          padding: "6px 12px",
                          textTransform: "none",
                        }}
                        size="small"
                      >
                        Request Takeoff
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
