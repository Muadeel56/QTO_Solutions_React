import React from "react";

function UserCreateCompany() {
  return (
    <div className="ml p-1 md:p-8">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-600 text-center mb-4">
        Create Company
      </h1>
      <p className="text-xs md:text-sm lg:text-lg text-gray-600 text-center mb-6">
        Complete the form below to add a new company profile.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Company Information */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-bold text-yellow-600 mb-4">
            Company Information
          </h2>

          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
          <input
            type="text"
            placeholder="Enter company name"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            type="text"
            placeholder="Enter location"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500">
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500">
                <option value="CA">California</option>
                <option value="NY">New York</option>
              </select>
            </div>
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
          <input
            type="text"
            placeholder="Enter website URL"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
          />
        </div>

        {/* Contact Information */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-bold text-yellow-600 mb-4">
            Contact Information
          </h2>

          <label className="block text-sm font-medium text-gray-700 mb-2">Person Name</label>
          <input
            type="text"
            placeholder="Enter contact person's name"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            type="text"
            placeholder="Enter location"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500">
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500">
                <option value="CA">California</option>
                <option value="NY">New York</option>
              </select>
            </div>
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
          />
        </div>
      </div>

      {/* Company Details */}
      <div className="p-6 bg-white shadow-md rounded-lg mb-6">
        <h2 className="text-lg font-bold text-yellow-600 mb-4">
          Company Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Year Founded</label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type of Construction</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500">
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
            <input
              type="text"
              placeholder="Enter company size"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contractor Type</label>
            <input
              type="text"
              placeholder="Enter contractor type"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CSI Divisions</label>
            <input
              type="text"
              placeholder="Enter CSI divisions"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Financial Information</label>
            <input
              type="text"
              placeholder="Enter financial information"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
            />
          </div>
        </div>

        <label className="block text-sm font-medium text-gray-700 mb-2">Notes/Comments</label>
        <textarea
          placeholder="Enter notes or comments"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500"
        />
      </div>

      {/* Action Buttons */}
      <div className="text-right">
        <button
          className="inline-block px-6 py-3 border border-red-600 text-red-600 rounded-lg font-semibold mr-4 hover:bg-red-600 hover:text-white transition"
        >
          Delete
        </button>
        <button className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Create
        </button>
      </div>
    </div>
  );
}

export default UserCreateCompany;
