import React from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function Plans() {
  // Dummy Data for Plans
  const plansData = [
    { name: "Site Plan 1", size: "4.2MB", date: "2024-09-18" },
    { name: "Floor Plan - Level 1", size: "3.7MB", date: "2024-09-12" },
    { name: "Floor Plan - Level 2", size: "3.5MB", date: "2024-09-10" },
    { name: "Elevations", size: "5.0MB", date: "2024-08-29" },
    { name: "Structural Plan", size: "6.3MB", date: "2024-08-20" },
    { name: "Electrical Layout", size: "2.4MB", date: "2024-08-15" },
    { name: "HVAC Plan", size: "2.8MB", date: "2024-08-05" },
  ];

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-6">
        Plans
      </h1>
      <div className="space-y-6">
        {plansData.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start justify-between space-y-2 md:space-y-0 p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4">
              {/* Plan Icon and Name */}
              <DescriptionIcon className="text-blue-600 text-4xl" />
              <div className="space-y-2">
                <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-800">
                  {plan.name}
                </p>
                <p className="text-xs md:text-sm lg:text-lg text-gray-500">
                  Size: {plan.size}
                </p>
              </div>
            </div>

            {/* File Date */}
            <p className="text-xs md:text-sm lg:text-lg text-gray-600">
              {plan.date}
            </p>

            {/* Action Icons */}
            <div className="flex space-x-4">
              <button
                className="flex items-center space-x-1 text-blue-500 hover:text-blue-700 transition-colors"
                title="View Document"
              >
                <VisibilityIcon />
                <span className="hidden md:inline">View</span>
              </button>
              <button
                className="flex items-center space-x-1 text-green-500 hover:text-green-700 transition-colors"
                title="Download Document"
              >
                <CloudDownloadIcon />
                <span className="hidden md:inline">Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
