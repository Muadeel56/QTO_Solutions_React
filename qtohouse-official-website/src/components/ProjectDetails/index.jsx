import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GavelIcon from "@mui/icons-material/Gavel";
import TimerIcon from "@mui/icons-material/Timer";
import AssignmentIcon from "@mui/icons-material/Assignment";

function ProjectDetails() {
  // Define bond percentage values
  const bonds = [
    { type: "Bid Bond", percentage: 70 },
    { type: "Performance Bond", percentage: 85 },
    { type: "Payment Bond", percentage: 65 },
  ];

  return (
    <>
      {/* Project Details Info Section */}
      <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0 mb-10">
        {/* Bidding Status and Company Info */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <div className="flex space-x-4 mb-4">
            <GavelIcon className="text-yellow-500" />
            <div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
                Bidding Status
              </h1>
              <p className="text-xs md:text-sm lg:text-lg text-gray-600">Accepting Bids</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <BusinessIcon className="text-yellow-500" />
            <div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">Company</h1>
              <p className="text-xs md:text-sm lg:text-lg text-gray-600">Better Park City Authority</p>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4 mb-4">
            <ContactPhoneIcon className="text-yellow-500" />
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
              Contact Details
            </h1>
          </div>
          <div className="pl-10">
            <p className="text-gray-700 text-xs md:text-sm lg:text-lg">John</p>
            <p className="text-gray-700 text-xs md:text-sm lg:text-lg">(518) 473-7862</p>
            <p className="text-gray-700 text-xs md:text-sm lg:text-lg">Dcplans.ogs.ny.gov</p>
          </div>
        </div>
      </div>

      {/* Project Summary Information */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              label: "Bid Date",
              value: "Wednesday July 20, 2024",
              icon: <CalendarTodayIcon className="text-yellow-500" />,
            },
            {
              label: "Bid Amount",
              value: "$1,500,000",
              icon: <GavelIcon className="text-yellow-500" />,
            },
            {
              label: "Solicitation",
              value: "Wednesday July 20, 2024",
              icon: <AssignmentIcon className="text-yellow-500" />,
            },
            {
              label: "Bidding Method",
              value: "Open Bidding",
              icon: <GavelIcon className="text-yellow-500" />,
            },
            {
              label: "Bid Phase",
              value: "Initial Phase",
              icon: <TimerIcon className="text-yellow-500" />,
            },
            {
              label: "Completion Time",
              value: "365 Days",
              icon: <TimerIcon className="text-yellow-500" />,
            },
            {
              label: "Liquidated Damages",
              value: "$500 per day",
              icon: <GavelIcon className="text-yellow-500" />,
            },
            {
              label: "Bid Deposit",
              value: "$100,000",
              icon: <AssignmentIcon className="text-yellow-500" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 border-b pb-4 mb-4"
            >
              {item.icon}
              <div>
                <h1 className="text-sm md:text-lg lg:text-xl font-semibold text-gray-800">
                  {item.label}
                </h1>
                <p className="text-xs md:text-sm lg:text-lg text-gray-600">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        {/* Bid Location and Pre-bid Meeting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
              Bid Location
            </h1>
            <p className="text-gray-600">
              35th Floor, Corning Tower, Empire State Plaza, Albany, NY 12242.
            </p>
          </div>
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
              Pre-bid Meeting
            </h1>
            <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
              July 12, 2024 - 09:00 AM at 84 Old Orangeburg Road, Orangeburg, NY
              10962
            </p>
          </div>
        </div>

        {/* CSI Division Section */}
        <div>
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
            CSI Division
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              " General Requirements",
              " Existing Conditions",
              " Concrete",
              " Masonry",
              " Wood, Plastics, Composites",
              " Thermal Protection",
              " Openings",
              " Finishes",
              " Electrical",
              " Earthwork",
            ].map((division, index) => (
              <p key={index} className="text-xs md:text-sm lg:text-lg text-start bg-gray-900 px-4 py-2 rounded-3xl text-yellow-400">
                {division}
              </p>
            ))}
          </div>
        </div>

        {/* Bonds Section */}
        <div className="mt-10">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Bonds</h1>
          {bonds.map((bond, index) => (
            <div key={index} className="mb-4">
              <p className="text-sm md:text-lg lg:text-xl font-medium text-gray-800">{bond.type}</p>
              {/* <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-yellow-500 h-2.5 rounded-full"
                  style={{ width: `${bond.percentage}%` }}
                ></div>
              </div> */}
              <p className="text-xs md:text-sm lg:text-lg text-gray-600">{bond.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
