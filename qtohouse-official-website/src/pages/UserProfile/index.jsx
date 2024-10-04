import React from "react";
import { Link } from "react-router-dom";

function UserProfile({ profile = {} }) {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center">
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6 mb-6 text-center">
          <div className="mb-4">
            <img
              className="rounded-full w-32 h-32 mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <h2 className="text-xl font-semibold text-gray-800">{profile.fullName || "Full Name"}</h2>
            <p className="text-gray-500">{profile.email || "Email"}</p>
          </div>
          <Link
            to="/edit-profile"
            className="text-white bg-yellow-600 hover:bg-yellow-700 font-semibold py-2 px-4 rounded"
          >
            Edit Profile
          </Link>
        </div>

        {/* Personal and Account Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Personal Details */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-lg font-semibold mb-4 text-gray-800">Personal Details</h1>
            <div className="space-y-4">
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Full Name:</h2>
                <p className="text-gray-800">{profile.fullName || "Full Name"}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Date of Birth:</h2>
                <p className="text-gray-800">{profile.dateOfBirth}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Gender:</h2>
                <p className="text-gray-800">{profile.gender}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Phone:</h2>
                <p className="text-gray-800">{profile.phone}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Nationality:</h2>
                <p className="text-gray-800">{profile.nationality}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Address:</h2>
                <p className="text-gray-800">{profile.address}</p>
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-lg font-semibold mb-4 text-gray-800">Account Details</h1>
            <div className="space-y-4">
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Display Name:</h2>
                <p className="text-gray-800">{profile.displayName}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Account Created:</h2>
                <p className="text-gray-800">02/10/2024</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Last Login:</h2>
                <p className="text-gray-800">02/10/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
