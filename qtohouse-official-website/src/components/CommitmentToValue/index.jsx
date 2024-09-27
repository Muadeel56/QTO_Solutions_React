import React from 'react';
import comercial from '../../assets/images/comercial.png';
import GavelIcon from '@mui/icons-material/Gavel';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function CommitmentToValue() {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="flex flex-col space-y-8 text-center px-10 mx-20 justify-center items-center">
        {/* Header Section */}
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-bold text-gray-700">Our Commitment to Value</h1>
          <p className="text-lg text-gray-600">
            At QTO House, we deliver precision-driven quantity takeoff services and comprehensive
            construction estimating support to businesses across all construction domains and CSI categories.
            Our expertise is tailored to elevate your project planning and execution.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-10 items-center">
          {/* Left Section (Text + Icons) */}
          <div className="flex flex-col space-y-6 text-left w-full lg:w-1/2">
            <div className="flex space-x-4 items-center">
              <GavelIcon fontSize="large" className="text-yellow-500" />
              <div className="space-y-1">
                <h1 className="text-xl font-semibold">Forge Your Bid with Confidence:</h1>
                <p className="text-gray-600">
                  Craft bids that stand distinguished in the competitive bidding arena with QTO House as your ally in estimation.
                </p>
              </div>
            </div>

            <div className="flex space-x-4 items-center">
              <AccessTimeIcon fontSize="large" className="text-yellow-500" />
              <div className="space-y-1">
                <h1 className="text-xl font-semibold">Streamlined Estimating:</h1>
                <p className="text-gray-600">
                  Redirect your energy to the projects that matter most. We handle the intricacies of estimating, ensuring timely, accurate, and detailed outcomes.
                </p>
              </div>
            </div>

            <div className="flex space-x-4 items-center">
              <PrecisionManufacturingIcon fontSize="large" className="text-yellow-500" />
              <div className="space-y-1">
                <h1 className="text-xl font-semibold">Precision Empowerment:</h1>
                <p className="text-gray-600">
                  QTO House is your strategic partner, enhancing your estimates with the precision you need to win and manage contracts assertively.
                </p>
              </div>
            </div>

            <div className="flex space-x-4 items-center">
              <ThumbUpIcon fontSize="large" className="text-yellow-500" />
              <div className="space-y-1">
                <h1 className="text-xl font-semibold">Reliable Estimating Partners:</h1>
                <p className="text-gray-600">
                  At QTO House, precision and diligence define our services, ensuring you receive comprehensive support for every bid.
                </p>
              </div>
            </div>

            <div className="flex space-x-4 items-center">
              <EmojiEventsIcon fontSize="large" className="text-yellow-500" />
              <div className="space-y-1">
                <h1 className="text-xl font-semibold">Bid Better, Win More:</h1>
                <p className="text-gray-600">
                  Harness our estimation expertise to craft compelling bids that secure your success in the cut-throat construction market.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full lg:w-1/2">
            <img src={comercial} alt="commercial" className="w-full rounded-md shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommitmentToValue;
