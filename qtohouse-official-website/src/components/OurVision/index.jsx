import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

function OurVision() {
  return (
    <div className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg shadow-md max-w-full md:max-w-sm">
      <VisibilityIcon sx={{ fontSize: 60 }} className="text-yellow-500 mb-3 md:mb-4" />
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Our Vision</h1>
      <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed text-justify">
        Our vision at QTO House is to redefine the landscape of construction
        estimation services. We aim to continually innovate and expand our
        offerings, integrating advanced technologies like BIM and VBM to
        provide comprehensive and dynamic solutions. By pioneering new
        standards in accuracy and efficiency, we envision becoming the go-to
        partner for construction companies seeking unparalleled precision in
        their project estimations.
      </p>
    </div>
  );
}

export default OurVision;
