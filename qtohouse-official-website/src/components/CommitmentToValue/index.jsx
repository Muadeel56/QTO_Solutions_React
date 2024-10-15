import React from 'react';
import comercial from '../../assets/images/comercial.png';
import GavelIcon from '@mui/icons-material/Gavel';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function CommitmentToValue() {
  return (
    <div className="w-full bg-gray-100 py-10 md:py-16">
      <div className="flex flex-col space-y-8 px-6 md:px-10 lg:px-20 justify-center items-center">
        {/* Header Section */}
        <div className="max-w-2xl space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700">Our Commitment to Value</h1>
          <p className="text-base md:text-lg text-gray-600">
            At QTO House, we deliver precision-driven quantity takeoff services and comprehensive construction estimating support to businesses across all construction domains and CSI categories. Our expertise is tailored to elevate your project planning and execution.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-10 items-center w-full">
          {/* Left Section (Text + Icons) */}
          <div className="flex flex-col space-y-6 text-left w-full lg:w-1/2">
            {[
              {
                title: 'Forge Your Bid with Confidence:',
                description:
                  'Craft bids that stand distinguished in the competitive bidding arena with QTO House as your ally in estimation.',
                icon: <GavelIcon fontSize="large" className="text-yellow-500" />,
              },
              {
                title: 'Streamlined Estimating:',
                description:
                  'Redirect your energy to the projects that matter most. We handle the intricacies of estimating, ensuring timely, accurate, and detailed outcomes.',
                icon: <AccessTimeIcon fontSize="large" className="text-yellow-500" />,
              },
              {
                title: 'Precision Empowerment:',
                description:
                  'QTO House is your strategic partner, enhancing your estimates with the precision you need to win and manage contracts assertively.',
                icon: <PrecisionManufacturingIcon fontSize="large" className="text-yellow-500" />,
              },
              {
                title: 'Reliable Estimating Partners:',
                description:
                  'At QTO House, precision and diligence define our services, ensuring you receive comprehensive support for every bid.',
                icon: <ThumbUpIcon fontSize="large" className="text-yellow-500" />,
              },
              {
                title: 'Bid Better, Win More:',
                description:
                  'Harness our estimation expertise to craft compelling bids that secure your success in the cut-throat construction market.',
                icon: <EmojiEventsIcon fontSize="large" className="text-yellow-500" />,
              },
            ].map((feature, index) => (
              <div key={index} className="flex space-x-4 items-start">
                <div>{feature.icon}</div>
                <div className="space-y-1">
                  <h1 className="text-lg md:text-xl font-semibold text-gray-800">{feature.title}</h1>
                  <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section (Image) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={comercial}
              alt="commercial"
              className="w-full max-w-md rounded-md shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default CommitmentToValue;
