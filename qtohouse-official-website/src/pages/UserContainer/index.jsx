import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserProfile from "../UserProfile";
import EditProfile from "../EditProfile";
import UserLayout from "../../components/UserLayout";
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

  const updateProfile = (updatedProfile) => {
    setProfile(updatedProfile); // Update the state
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <UserSidebar />

      {/* Main content that will adjust to take the remaining space */}
      <div className="flex-grow ml-64 p-8">
        <Routes>
          
        <Route path="/list-companies" element={<UserListCompanies />} />
        <Route path="/create-company" element={<UserCreateCompany />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-groups" element={<UserGroups />} />
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
          {/* Add more user-specific routes as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default UserContainer;
