import React from 'react';
import ci1 from '../../assets/images/jared-erondu-6Fq2U47SKtE-unsplash.jpg';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import SelectingQTOHouse from '../../components/SelectingQTOHouse';
import CommitmentToValue from '../../components/CommitmentToValue';

function HomePage() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image - Half Screen Height */}
      <div className="absolute inset-0 w-full h-1/2">
        <img src={ci1} alt="ci1" className="w-full h-full object-cover" />
      </div>

      {/* Content on Top of Image */}
      <div className="relative top-0 flex justify-center items-center h-1/2">
        <div className="flex flex-col w-[70%] justify-center items-center space-y-10 border-t-8 border-b-8 border-yellow-500 text-white bg-black bg-opacity-70 p-10">
          {/* Main Text */}
          <div className="text-center space-y-8">
            <p className="text-6xl font-bold">Welcome to QTO House</p>
            <p className="text-3xl font-light">
              "Mastering the Art of Accurate Construction Estimates & Detailed Quantity Take-Offs,
              On Schedule & Within Your Financial Blueprint"
            </p>
          </div>

          {/* Information Section */}
          <div className="flex justify-between items-center space-x-10 text-center">
            <div className="flex flex-col items-center">
              <DescriptionIcon className="text-yellow-500 text-5xl" />
              <p className="mt-2 text-xl font-semibold">QTO-Available</p>
              <p className="text-2xl font-bold">200</p>
            </div>
            <div className="flex flex-col items-center">
              <HourglassEmptyIcon className="text-yellow-500 text-5xl" />
              <p className="mt-2 text-xl font-semibold">QTO-In Progress</p>
              <p className="text-2xl font-bold">81</p>
            </div>
            <div>
              <button className="bg-yellow-500 text-black text-lg font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all">
                Get Free Sample
              </button>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircleOutlineIcon className="text-yellow-500 text-5xl" />
              <p className="mt-2 text-xl font-semibold">Bid Results</p>
              <p className="text-2xl font-bold">50</p>
            </div>
            <div className="flex flex-col items-center">
              <DoneOutlineIcon className="text-yellow-500 text-5xl" />
              <p className="mt-2 text-xl font-semibold">Awarded</p>
              <p className="text-2xl font-bold">100</p>
            </div>
          </div>
        </div>
      </div>
      <SelectingQTOHouse />
      <CommitmentToValue />
    </div>
  );
}

export default HomePage;
