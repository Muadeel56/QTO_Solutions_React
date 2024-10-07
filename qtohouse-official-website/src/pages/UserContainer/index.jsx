import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserProfile from "../UserProfile";
import EditProfile from "../EditProfile";
import UserLayout from "../../components/UserLayout";
import UserDashboard from "../UserDashboard";
import FavouriteProjects from "../FavouriteProjects";
import UserSidebar from "../../components/UserSidebar";
import BidCalendar from "../BidCalendar";

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
