import React from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function Specs() {
  const specsData = [
    { name: "Project Specification 1", size: "2.5MB", date: "2024-09-15" },
    { name: "Project Specification 2", size: "1.2MB", date: "2024-09-10" },
    { name: "Project Specification 3", size: "3.0MB", date: "2024-09-05" },
    { name: "Project Specification 4", size: "1.8MB", date: "2024-08-25" },
    { name: "Project Specification 5", size: "2.1MB", date: "2024-08-20" },
    { name: "Project Specification 6", size: "3.5MB", date: "2024-08-15" },
    { name: "Project Specification 7", size: "1.0MB", date: "2024-08-10" }
  ];

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Specifications</h1>
      <div className="space-y-6">
        {specsData.map((spec, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              {/* PDF Icon and Name */}
              <PictureAsPdfIcon className="text-red-600 text-4xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">{spec.name}</p>
                <p className="text-sm text-gray-500">Size: {spec.size}</p>
              </div>
            </div>

            {/* File Date */}
            <p className="text-gray-600">{spec.date}</p>

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

export default Specs;
