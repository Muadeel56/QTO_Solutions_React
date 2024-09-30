import React from "react";
import logo from "../../assets/images/logo.svg";
import {
  AccountCircle,
  Email,
  Phone,
  Home,
  Public,
  LinkedIn,
  GitHub,
  Work,
  School,
  AttachFile,
  CameraAlt,
  Clear,
  CheckCircleOutline,
} from "@mui/icons-material";

function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pb-16">
      {/* Header Section */}
      <div className="w-full bg-yellow-500 p-8 flex justify-center items-center text-white relative">
        <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
          <img
            src={logo}
            alt="logo"
            className="w-[70px] h-[70px] object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold">Candidate Registration Form</h1>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-screen-lg mt-10 bg-white p-10 rounded-lg shadow-xl space-y-10 border border-gray-200">
        {/* Basic Information Section */}
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-semibold text-gray-800">Basic Info</h1>
            <button className="flex items-center text-gray-600 hover:text-gray-800 transition-all text-sm">
              <Clear className="mr-1" /> Clear
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <AccountCircle className="text-yellow-500 mr-2" />
              <select className="w-full bg-transparent focus:outline-none text-gray-700">
                <option value="" disabled selected>
                  Title (Mr., Ms., Mrs., None)
                </option>
                <option value="mr">Mr.</option>
                <option value="ms">Ms.</option>
                <option value="mrs">Mrs.</option>
                <option value="none">None</option>
              </select>
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <AccountCircle className="text-yellow-500 mr-2" />
              <input
                type="text"
                placeholder="First Name"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <AccountCircle className="text-yellow-500 mr-2" />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <Email className="text-yellow-500 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <Phone className="text-yellow-500 mr-2" />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <Home className="text-yellow-500 mr-2" />
              <input
                type="text"
                placeholder="Address"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <Public className="text-yellow-500 mr-2" />
              <input
                type="text"
                placeholder="City"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800">Social Links</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <LinkedIn className="text-yellow-500 mr-2" />
              <input
                type="text"
                placeholder="LinkedIn Profile"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <GitHub className="text-yellow-500 mr-2" />
              <input
                type="text"
                placeholder="GitHub Profile"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Experience and Education Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            Experience & Education
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <Work className="text-yellow-500 mr-2" />
              <input
                type="text"
                placeholder="Experience"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <School className="text-yellow-500 mr-2" />
              <input
                type="text"
                placeholder="Education"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Attachments Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            Attachment Information
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <AttachFile className="text-yellow-500 mr-2" />
              <input type="file" className="w-full focus:outline-none text-gray-700" />
              <p className="ml-2 text-sm text-gray-600">Browse Resume</p>
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <CameraAlt className="text-yellow-500 mr-2" />
              <input type="file" className="w-full focus:outline-none text-gray-700" />
              <p className="ml-2 text-sm text-gray-600">Browse Photo</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center mt-10 gap-8">
          <button className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all flex items-center">
            <Clear className="mr-2" />
            Reset
          </button>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all flex items-center">
            <CheckCircleOutline className="mr-2" />
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CareersPage;
