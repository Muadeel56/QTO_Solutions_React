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
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';

function HomePage() {
  const navigate = useNavigate(); // Initialize useNavigate

  const countUpProps = {
    start: 0,       // Start counting from 0
    duration: 3,    // Smooth animation duration
    delay: 0.5,     // Adds a slight delay before animation starts
    easingFn: (t, b, c, d) => {  // Custom easing function for smoother feel
      t /= d;
      t--;
      return -c * (t * t * t * t - 1) + b;
    },
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Background Image Section */}   
      <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] relative">
        <img src={ci1} alt="ci1" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 space-y-10 px-4">
          {/* Main Text on Top of Image */}
          <div className="flex flex-col items-center w-full sm:w-[90%] md:w-[70%] lg:w-[90%] text-center text-white space-y-8">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Welcome to QTO House</p>
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-light">
              "Mastering the Art of Accurate Construction Estimates & Detailed Quantity Take-Offs, On Schedule & Within Your Financial Blueprint"
            </p>
          </div>

          {/* Information Section on Top of Image */}
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] bg-gray-900 bg-opacity-80 text-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg flex flex-wrap items-center justify-around text-center space-y-4 sm:space-y-0 border-t-8 border-b-8 border-yellow-500">
            <div className="flex flex-col items-center w-1/2 sm:w-1/5 mb-4 sm:mb-0">
              <DescriptionIcon className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl" />
              <p className="mt-2 text-xs sm:text-sm md:text-sm lg:text-lg font-semibold">QTO-Available</p>
              <p className="text-xs sm:text-sm md:text-sm lg:text-lg font-bold">
                <CountUp {...countUpProps} end={200} />
              </p>
            </div>
            <div className="flex flex-col items-center w-1/2 sm:w-1/5 mb-4 sm:mb-0">
              <HourglassEmptyIcon className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl" />
              <p className="mt-2 text-xs sm:text-sm md:text-sm lg:text-lg font-semibold">QTO-In Progress</p>
              <p className="text-xs sm:text-sm md:text-sm lg:text-lg font-bold">
                <CountUp {...countUpProps} end={81} />
              </p>
            </div>
            <div className="w-full sm:w-1/5 mb-4 sm:mb-0 flex justify-center">
              <button
                className="bg-yellow-500 text-black text-xs sm:text-sm md:text-sm lg:text-lg font-semibold px-4 sm:px-6 md:px-2 py-2 sm:py-3 md:py-2 rounded-lg hover:bg-yellow-600 transition-all"
                onClick={() => navigate('/sample')}
              >
                Get Free Sample
              </button>
            </div>
            <div className="flex flex-col items-center w-1/2 sm:w-1/5 mb-4 sm:mb-0">
              <CheckCircleOutlineIcon className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl" />
              <p className="mt-2 text-xs sm:text-sm md:text-sm lg:text-lg font-semibold">Bid Results</p>
              <p className="text-xs sm:text-sm md:text-sm lg:text-lg font-bold">
                <CountUp {...countUpProps} end={50} />
              </p>
            </div>
            <div className="flex flex-col items-center w-1/2 sm:w-1/5 mb-4 sm:mb-0">
              <DoneOutlineIcon className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl" />
              <p className="mt-2 text-xs sm:text-sm md:text-sm lg:text-lg font-semibold">Awarded</p>
              <p className="text-xs sm:text-sm md:text-sm lg:text-lg font-bold">
                <CountUp {...countUpProps} end={100} />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Remaining Content Sections */}
      <div className="w-full  pt-10 space-y-12">
        <SelectingQTOHouse />
        <CommitmentToValue />
        <TakeOffServices />
        <Process />
        <EsteemedClientele />
      </div>
    </div>
  );
}

export default HomePage;
