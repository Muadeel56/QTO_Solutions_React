import React from 'react';
import FlagIcon from '@mui/icons-material/Flag';

function OurMission() {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md max-w-sm">
      <FlagIcon className="text-yellow-500 text-5xl mb-4" />
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h1>
      <p className="text-lg text-gray-700 leading-relaxed text-center">
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
