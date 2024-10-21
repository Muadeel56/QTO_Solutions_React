import React from 'react';
import FlagIcon from '@mui/icons-material/Flag';

function OurMission() {
  return (
    <div className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg shadow-md max-w-full md:max-w-sm">
      <FlagIcon sx={{ fontSize: 60 }} className="text-yellow-500 mb-3 md:mb-4" />
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Our Mission</h1>
      <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed text-justify">
        Our mission is to empower construction companies in Northern America
        with precise material quantity take-offs and cost estimations. Through
        our commitment to accuracy and detail, we provide tailored and
        comprehensive solutions to our clients. Additionally, we're excited to
        announce that we'll now be offering project leads to our clients,
        further enhancing our suite of services to support their project
        management needs.
      </p>
    </div>
  );
}

export default OurMission;
