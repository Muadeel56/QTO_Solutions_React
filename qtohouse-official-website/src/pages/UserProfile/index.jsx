import React from "react";

function UserProfile() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center">
        {/* Profile Section */}
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6 mb-6 text-center">
          <div className="mb-4">
            <img
              className="rounded-full w-32 h-32 mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <h2 className="text-xl font-semibold text-gray-800">Muhammad Adeel</h2>
            <p className="text-gray-500">muadeel69@gmail.com</p>
          </div>
        </div>

        {/* Personal and Account Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Personal Details */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-lg font-semibold mb-4 text-gray-800">Personal Details</h1>
            <div className="space-y-4">
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Full Name:</h2>
                <p className="text-gray-800">Muhammad Adeel</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Date of Birth:</h2>
                <p className="text-gray-800">24/10/2001</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Gender:</h2>
                <p className="text-gray-800">Male</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Phone:</h2>
                <p className="text-gray-800">0300-0000000</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Nationality:</h2>
                <p className="text-gray-800">Pakistan</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Address:</h2>
                <p className="text-gray-800">Chakwal</p>
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-lg font-semibold mb-4 text-gray-800">Account Details</h1>
            <div className="space-y-4">
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Display Name:</h2>
                <p className="text-gray-800">adeel</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Account Created:</h2>
                <p className="text-gray-800">02/10/2024</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Last Login:</h2>
                <p className="text-gray-800">02/10/2024</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Membership Status:</h2>
                <p className="text-gray-800">Premium Member</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Account Verification:</h2>
                <p className="text-gray-800">Verified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security and Notification Settings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 w-full">
          {/* Security Settings */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-lg font-semibold mb-4 text-gray-800">Security Settings</h1>
            <div className="space-y-4">
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Password Last Changed:</h2>
                <p className="text-gray-800">02/10/2024</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Two-Factor Authentication:</h2>
                <p className="text-gray-800">Enabled</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Security Questions Set:</h2>
                <p className="text-gray-800">Yes</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Login Notifications:</h2>
                <p className="text-gray-800">Enabled</p>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-lg font-semibold mb-4 text-gray-800">Notification Settings</h1>
            <div className="space-y-4">
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Email Notifications:</h2>
                <p className="text-gray-800">Subscribed</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">SMS Alerts:</h2>
                <p className="text-gray-800">Enabled</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Content Preferences:</h2>
                <p className="text-gray-800">Construction, Bidding, Estimation</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Default Dashboard View:</h2>
                <p className="text-gray-800">Compact Mode</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Dark Mode:</h2>
                <p className="text-gray-800">Activated</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium text-gray-600">Language for Content:</h2>
                <p className="text-gray-800">English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
