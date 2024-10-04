import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserProfile from "../UserProfile";
import EditProfile from "../EditProfile";
import UserLayout from "../../components/UserLayout";
import UserDashboard from "../UserDashboard";
import FavouriteProjects from "../FavouriteProjects";

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
    setProfile(updatedProfile);  // Update the state
  };

  return (
    <UserLayout>
      <Routes>
        {/* User Profile View */}
        <Route path="/profile" element={<UserProfile profile={profile} />} />
        
        {/* Edit Profile View */}
        <Route path="/edit-profile" element={<EditProfile profile={profile} updateProfile={updateProfile} />} />
        
        {/* Dashboard and other routes */}
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/favourites" element={<FavouriteProjects />} />
        {/* Add more user-specific routes as needed */}
      </Routes>
    </UserLayout>
  );
}

export default UserContainer;
