import React from 'react';
import Commercial from '../../assets/images/comercial.png';
import GavelIcon from '@mui/icons-material/Gavel';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function CommitmentToValue() {
  return (
    <div className="w-full py-12 px-4 md:px-10 lg:px-20 bg-gray-100">
      {/* Main Section - Image and Text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="w-full">
          <img
            src={Commercial}
            alt="Commercial Construction"
            className="w-full h-auto max-h-[500px] lg:max-h-[600px] object-contain rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700">
            Our Commitment to Value
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600">
            At QTO House, we deliver precision-driven quantity takeoff services and comprehensive construction estimating support to businesses across all construction domains and CSI categories. Our expertise is tailored to elevate your project planning and execution.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: 'Forge Your Bid with Confidence:',
            description: 'Craft bids that stand distinguished in the competitive bidding arena with QTO House as your ally in estimation.',
            icon: <GavelIcon fontSize="large" className="text-yellow-500" />,
          },
          {
            title: 'Streamlined Estimating:',
            description: 'Redirect your energy to the projects that matter most. We handle the intricacies of estimating, ensuring timely, accurate, and detailed outcomes.',
            icon: <AccessTimeIcon fontSize="large" className="text-yellow-500" />,
          },
          {
            title: 'Precision Empowerment:',
            description: 'QTO House is your strategic partner, enhancing your estimates with the precision you need to win and manage contracts assertively.',
            icon: <PrecisionManufacturingIcon fontSize="large" className="text-yellow-500" />,
          },
          {
            title: 'Reliable Estimating Partners:',
            description: 'At QTO House, precision and diligence define our services, ensuring you receive comprehensive support for every bid.',
            icon: <ThumbUpIcon fontSize="large" className="text-yellow-500" />,
          },
          {
            title: 'Bid Better, Win More:',
            description: 'Harness our estimation expertise to craft compelling bids that secure your success in the cut-throat construction market.',
            icon: <EmojiEventsIcon fontSize="large" className="text-yellow-500" />,
          },
        ].map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div>{feature.icon}</div>
            <div className="space-y-1">
              <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
                {feature.title}
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommitmentToValue;
