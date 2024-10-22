import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

function UserCreateProject() {
  return (
    <div className="ml p-1">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-600 text-center mb-4">
        Create Project
      </h1>
      <p className="text-xs md:text-sm lg:text-lg text-gray-600 text-center mb-6">
        Complete the form below to create a new project.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Project Information */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-bold text-yellow-600 mb-4">
            Project Information
          </h2>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Title
          </label>
          <input
            type="text"
            placeholder="Enter project title"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            placeholder="Enter project location"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500">
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500">
                <option value="CA">California</option>
                <option value="NY">New York</option>
              </select>
            </div>
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Description
          </label>
          <textarea
            placeholder="Enter project description"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
            rows="4"
          />
        </div>

        {/* Bid Information */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-bold text-yellow-600 mb-4">
            Bid Information
          </h2>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bidding Method
          </label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 mb-4">
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bidding Phase
          </label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 mb-4">
            <option value="pre-bid">Pre-Bid</option>
            <option value="open">Open Solicitation</option>
            <option value="post-bid">Post-Bid</option>
          </select>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Completion Time
          </label>
          <input
            type="text"
            placeholder="Enter completion time"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bid Amount
          </label>
          <input
            type="text"
            placeholder="Enter bid amount"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pre Bid Meeting Date
              </label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 mb-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bid Date
              </label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 mb-4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Upload Documents Section */}
      <div className="p-6 bg-white shadow-md rounded-lg mb-6">
        <h2 className="text-lg font-bold text-yellow-600 mb-4">Upload Documents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="bg-gray-100 border border-gray-300 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Upload Project Plans
          </button>
          <button className="bg-gray-100 border border-gray-300 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Upload Project Specs
          </button>
          <button className="bg-gray-100 border border-gray-300 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Upload Take-Offs
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="text-right">
        <button
          className="inline-block px-6 py-3 border border-red-600 text-red-600 rounded-lg font-semibold mr-4 hover:bg-red-600 hover:text-white transition"
        >
          Delete
        </button>
        <button className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Create Project
        </button>
      </div>
    </div>
  );
}

export default UserCreateProject;
