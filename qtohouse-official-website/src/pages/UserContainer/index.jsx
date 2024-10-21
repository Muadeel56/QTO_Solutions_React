import React, { useState } from "react";
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

  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile sidebar toggle state

  const updateProfile = (updatedProfile) => {
    setProfile(updatedProfile); // Update the state
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Add conditional classes for responsiveness */}
      <UserSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content */}
      <div className={`flex-grow p-8 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} lg:ml-64`}>
        <Routes>
          
        <Route path="/list-companies" element={<UserListCompanies />} />
        <Route path="/create-company" element={<UserCreateCompany />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-groups" element={<UserGroups />} />
        <Route path="/permissions" element={<UserPermissions />} />
        <Route path="/create-project" element={<UserCreateProject />} />
        <Route path="/project-list" element={<UserProjectList />} />
          {/* User Profile View */}
          <Route path="/profile" element={<UserProfile profile={profile} />} />
          {/* Edit Profile View */}
          <Route
            path="/edit-profile"
            element={<EditProfile profile={profile} updateProfile={updateProfile} />}
          />
          {/* Dashboard and other routes */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/favourites" element={<FavouriteProjects />} />
          <Route path="/calendar" element={<BidCalendar />} />
        </Routes>
      </div>
    </div>
  );
}

export default UserContainer;
