import React from "react";
import GavelIcon from '@mui/icons-material/Gavel';
import BusinessIcon from '@mui/icons-material/Business';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

function ProjectDetails() {
  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0 mb-10">
      {/* Bidding Status and Company Info */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <div className="flex space-x-4 mb-4">
          <GavelIcon className="text-yellow-500" />
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Bidding Status</h1>
            <p className="text-gray-600">Accepting Bids</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <BusinessIcon className="text-yellow-500" />
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Company</h1>
            <p className="text-gray-600">Better Park City Authority</p>
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4 mb-4">
          <ContactPhoneIcon className="text-yellow-500" />
          <h1 className="text-xl font-semibold text-gray-800">Contact Details</h1>
        </div>
        <div className="pl-10">
          <p className="text-gray-700">John</p>
          <p className="text-gray-700">(518) 473-7862</p>
          <p className="text-gray-700">Dcplans.ogs.ny.gov</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
