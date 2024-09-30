import React from 'react';
import ci1 from '../../assets/images/jared-erondu-6Fq2U47SKtE-unsplash.jpg';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import SelectingQTOHouse from '../../components/SelectingQTOHouse';
import CommitmentToValue from '../../components/CommitmentToValue';
import TakeOffServices from '../../components/TakeOffServices';
import Process from '../../components/Process';
import EsteemedClientele from '../../components/EsteemedClientele';

function HomePage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Background Image Section */}
      <div className="w-full h-[50vh] relative">
        <img src={ci1} alt="ci1" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 space-y-10">
          {/* Main Text on Top of Image */}
          <div className="text-center text-white space-y-4 px-4">
            <p className="text-4xl md:text-6xl font-bold">Welcome to QTO House</p>
            <p className="text-lg md:text-3xl font-light">
              "Mastering the Art of Accurate Construction Estimates & Detailed Quantity Take-Offs,
              On Schedule & Within Your Financial Blueprint"
            </p>
          </div>

          {/* Information Section on Top of Image */}
          <div className="w-[90%] md:w-[70%] bg-gray-900 bg-opacity-90 text-white p-8 rounded-xl shadow-lg flex flex-wrap items-center justify-center space-x- text-center border-t-8 border-b-8 border-yellow-500">
            <div className="flex flex-col items-center w-1/2 md:w-1/5 mb-4 md:mb-0">
              <DescriptionIcon className="text-yellow-500 text-5xl" />
              <p className="mt-2 text-xl font-semibold">QTO-Available</p>
              <p className="text-2xl font-bold">200</p>
            </div>
            <div className="flex flex-col items-center w-1/2 md:w-1/5 mb-4 md:mb-0">
              <HourglassEmptyIcon className="text-yellow-500 text-5xl" />
              <p className="mt-2 text-xl font-semibold">QTO-In Progress</p>
              <p className="text-2xl font-bold">81</p>
            </div>
            <div className="w-full md:w-1/5 mb-4 md:mb-0 flex justify-center">
              <button className="bg-yellow-500 text-black text-lg font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all">
                Get Free Sample
              </button>
            </div>
            <div className="flex flex-col items-center w-1/2 md:w-1/5 mb-4 md:mb-0">
              <CheckCircleOutlineIcon className="text-yellow-500 text-5xl" />
              <p className="mt-2 text-xl font-semibold">Bid Results</p>
              <p className="text-2xl font-bold">50</p>
            </div>
            <div className="flex flex-col items-center w-1/2 md:w-1/5 mb-4 md:mb-0">
              <DoneOutlineIcon className="text-yellow-500 text-5xl" />
              <p className="mt-2 text-xl font-semibold">Awarded</p>
              <p className="text-2xl font-bold">100</p>
            </div>
          </div>
        </div>
      </div>

      {/* Remaining Content Sections */}
      <SelectingQTOHouse />
      <CommitmentToValue />
      <TakeOffServices />
      <Process />
      <EsteemedClientele />
    </div>
  );
}

export default HomePage;
