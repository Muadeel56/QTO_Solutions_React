import React from 'react';
import enhancedImage from '../../assets/images/enhanced-image 5.png';

// Importing Icons from Material UI
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function SelectingQTOHouse() {
  return (
    <div className="w-full py-10 bg-gray-50 dark:bg-gray-900 px-4">
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-10 items-center">
        {/* Heading Section */}
        <div className="w-full text-center lg:text-left lg:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Selecting QTO House: A Decision for Excellence
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join hands with QTO House, where we blend a decade of professional expertise with a personal touch
            for each project. Our certified estimators are champions of accuracy, delivering results that resonate
            with the cost and quality your projects deserve.
          </p>
        </div>

        {/* Image */}
        <img
          src={enhancedImage}
          alt="enhanced"
          className="w-full lg:w-1/2 h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Features Section */}
      <div className="flex flex-col mt-8 lg:flex-row lg:space-x-10 lg:mt-16 space-y-6 lg:space-y-0">
        {[{
          title: "Seasoned Industry Experts",
          description: "Our estimators bring decades of field experience, providing insights that transcend conventional estimation.",
          Icon: PersonIcon,
        },
        {
          title: "Comprehensive Project Analysis",
          description: "We delve deep, translating project intricacies into actionable, crystal-clear estimates.",
          Icon: AssessmentIcon,
        },
        {
          title: "Technological Precision",
          description: "Leveraging modern tech to refine estimation precision beyond traditional methods.",
          Icon: PrecisionManufacturingIcon,
        },
        {
          title: "Pricing with Perspective",
          description: "At QTO House, value meets virtue - offering cost-efficient solutions without skimping on precision.",
          Icon: MonetizationOnIcon,
        }].map(({ title, description, Icon }, index) => (
          <div key={index} className="flex items-start space-x-4">
            <Icon className="text-yellow-500 text-4xl" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {title}:
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectingQTOHouse;
