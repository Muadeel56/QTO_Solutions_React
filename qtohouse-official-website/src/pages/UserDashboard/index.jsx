import React from "react";
import CircularProgressBar from "../../components/CircularProgressBar"; // Assume you have a circular progress bar component

function UserDashboard() {
  return (
    <div className=" pl-4 mt-2">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-600">Analytics</h1>
        <p className="text-sm md:text-lg lg:text-xl text-gray-500">Dashboards / Analytics</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* Card 1 */}
        <div className="bg-white shadow-lg md:shadow-md p-6 rounded-lg">
          <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-500">Users</p>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-600">28.07K</h2>
          <p className="text-green-500 text-xs md:text-sm lg:text-lg">12% Increase vs Previous Month</p>
          <div className="flex justify-end mt-4">
            <span className="text-green-500 text-3xl">&#x1F3E2;</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-500">Sessions</p>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-600">97.67K</h2>
          <p className="text-red-500 text-xs md:text-sm lg:text-lg">8% Decrease vs Previous Month</p>
          <div className="flex justify-end mt-4">
            <span className="text-red-500 text-3xl">&#x2B50;</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-500">Bounce Rate</p>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-600">40.57%</h2>
          <p className="text-orange-500 text-xs md:text-sm lg:text-lg">5% Increase vs Previous Month</p>
          <div className="flex justify-end mt-4">
            <span className="text-orange-500 text-3xl">&#x1F4B8;</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-500">Avg. Visit Duration</p>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-600">3m 40s</h2>
          <p className="text-green-500 text-xs md:text-sm lg:text-lg">3% Increase vs Previous Month</p>
          <div className="flex justify-end mt-4">
            <span className="text-green-500 text-xl md:text-2xl lg:text-3xl">&#x23F3;</span>
          </div>
        </div>
      </div>

      {/* Users by Device Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between">
          <h2 className="text-sm md:text-lg lg:text-xl font-bold text-yellow-600">Users By Device</h2>
          <button className="text-gray-500 text-sm md:text-lg lg:text-xl">&#x22EE;</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {/* Desktop Users */}
          <div className="text-center">
            <CircularProgressBar percentage={45} color="#10B981" />
            <p className="mt-4 text-sm md:text-lg lg:text-xl">Desktop Users</p>
            <p className="text-xs md:text-sm lg:text-lg text-green-500">78.56K Users</p>
          </div>

          {/* Mobile Users */}
          <div className="text-center">
            <CircularProgressBar percentage={35} color="#EF4444" />
            <p className="text-sm md:text-lg lg:text-xl mt-4 ">Mobile Users</p>
            <p className="text-xs md:text-sm lg:text-lg text-red-500">105.34K Users</p>
          </div>

          {/* Tablet Users */}
          <div className="text-center">
            <CircularProgressBar percentage={20} color="#F59E0B" />
            <p className="text-sm md:text-lg lg:text-xl mt-4">Tablet Users</p>
            <p className="text-xs md:text-sm lg:text-lg text-orange-500">43.43K Users</p>
          </div>
        </div>

        <hr className="my-6" />

        {/* Additional Information */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Desktop Info */}
          <div className="flex items-center">
            <span className="text-green-500 text-3xl mr-2">&#x1F5A5;</span>
            <div>
              <p className="text-sm md:text-md lg:text-lg">78.56K Desktop Users</p>
              <p className="text-green-500 text-xs md:text-sm lg:text-lg">12% Increase</p>
            </div>
          </div>

          {/* Mobile Info */}
          <div className="flex items-center">
            <span className="text-red-500 text-3xl mr-2">&#x1F4F1;</span>
            <div>
              <p className="text-sm md:text-md lg:text-lg">105.34K Mobile Users</p>
              <p className="text-red-500 text-xs md:text-sm lg:text-lg">8% Decrease</p>
            </div>
          </div>

          {/* Tablet Info */}
          <div className="flex items-center">
            <span className="text-orange-500 text-3xl mr-2">&#x1F4F6;</span>
            <div>
              <p className="text-sm md:text-md lg:text-lg">43.43K Tablet Users</p>
              <p className="text-orange-500 text-xs md:text-sm lg:text-lg">3% Increase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
