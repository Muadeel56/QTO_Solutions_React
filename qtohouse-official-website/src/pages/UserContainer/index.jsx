import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import UserProfile from "../UserProfile";
import EditProfile from "../EditProfile";
import UserDashboard from "../UserDashboard";
import FavouriteProjects from "../FavouriteProjects";
import UserSidebar from "../../components/UserSidebar";
import BidCalendar from "../BidCalendar";
import UserListCompanies from "../UserListCompanies";
import UserCreateCompany from "../UserCreateCompany";
import Users from "../Users";
import UserProjectList from "../UserProjectList";
import UserCreateProject from "../UserCreateProject";
import UserGroups from "../UserGroups";
import UserPermissions from "../UserPermissions";
import { IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function UserContainer() {
  // State for storing profile data
  const [profile, setProfile] = useState({
    fullName: "Muhammad Adeel",
    dateOfBirth: "2001-10-24",
    gender: "Male",
    phone: "0300-0000000",
    nationality: "Pakistan",
    address: "Chakwal",
    email: "muadeel69@gmail.com",
    displayName: "adeel",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle state for mobile
  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // Mobile screen check
  const isTabletScreen = useMediaQuery("(max-width: 1024px)"); // Tablet screen check
  const isLaptopScreen = useMediaQuery("(min-width: 1024px)"); // Laptop and larger screens

  useEffect(() => {
    // Automatically collapse the sidebar on smaller screens (mobile/tablet)
    if (isSmallScreen || isTabletScreen) {
      setSidebarOpen(false);
    }
  }, [isSmallScreen, isTabletScreen]);

  const updateProfile = (updatedProfile) => {
    setProfile(updatedProfile); // Update the profile state
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle sidebar open/collapse state
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Menu Button on Mobile and Tablet Screens */}
      {(isSmallScreen || isTabletScreen) && (
        <IconButton
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: 10,
            left: 10,
            zIndex: 1000,
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      )}

      {/* Sidebar for Desktop, Laptop, and Tablet screens */}
      {(isLaptopScreen || sidebarOpen || !isSmallScreen) && (
        <UserSidebar isCollapsed={!sidebarOpen && !isLaptopScreen} toggleSidebar={toggleSidebar} />
      )}

      {/* Main content */}
      <div
        className={`flex-grow transition-all duration-300 ${
          sidebarOpen && !isSmallScreen && !isTabletScreen ? "ml-" : ""
        }`}
        style={{
          paddingLeft: isLaptopScreen ? "" : "", // Adjust padding for larger screens
        }}
      >
        <Routes>
          <Route path="/list-companies" element={<UserListCompanies />} />
          <Route path="/create-company" element={<UserCreateCompany />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user-groups" element={<UserGroups />} />
          <Route path="/permissions" element={<UserPermissions />} />
          <Route path="/create-project" element={<UserCreateProject />} />
          <Route path="/project-list" element={<UserProjectList />} />
          <Route path="/profile" element={<UserProfile profile={profile} />} />
          <Route
            path="/edit-profile"
            element={<EditProfile profile={profile} updateProfile={updateProfile} />}
          />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/favourites" element={<FavouriteProjects />} />
          <Route path="/calendar" element={<BidCalendar />} />
        </Routes>
      </div>
    </div>
  );
}

export default UserContainer;
