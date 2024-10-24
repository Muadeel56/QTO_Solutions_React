import React, { useState, useEffect } from "react";

function EditProfile({ profile, updateProfile }) {
  const [editProfileData, setEditProfileData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "Male",
    phone: "",
    nationality: "",
    address: "",
    email: "",
    displayName: "",
  });

  // Ensure form updates when profile prop changes
  useEffect(() => {
    if (profile) {
      setEditProfileData(profile); // Initialize the form with profile data
    }
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProfileData({ ...editProfileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(editProfileData); // Update parent state
  };

  // If profile is not loaded yet, show a loading message
  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 lg:p-8">
      <div className="w-full lg:w-2/3 xl:w-1/2 mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 text-center py-6 border-b border-gray-200">
          Edit Profile
        </h1>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-sm md:text-base font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={editProfileData.fullName}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 md:p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col">
            <label htmlFor="dateOfBirth" className="text-sm md:text-base font-medium text-gray-700 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={editProfileData.dateOfBirth}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 md:p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label htmlFor="gender" className="text-sm md:text-base font-medium text-gray-700 mb-2">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={editProfileData.gender}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 md:p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm md:text-base font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={editProfileData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 md:p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Nationality */}
          <div className="flex flex-col">
            <label htmlFor="nationality" className="text-sm md:text-base font-medium text-gray-700 mb-2">
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={editProfileData.nationality}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 md:p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label htmlFor="address" className="text-sm md:text-base font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={editProfileData.address}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 md:p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm md:text-base font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={editProfileData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 md:p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Display Name */}
          <div className="flex flex-col">
            <label htmlFor="displayName" className="text-sm md:text-base font-medium text-gray-700 mb-2">
              Display Name
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={editProfileData.displayName}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 md:p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
