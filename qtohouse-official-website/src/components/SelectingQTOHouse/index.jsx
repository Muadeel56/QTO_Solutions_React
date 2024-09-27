import React from 'react';
import enhancedImage from '../../assets/images/enhanced-image 5.png';

// Importing Icons from Material UI
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function SelectingQTOHouse() {
  return (
    <div className="w-full py-10 bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col space-y-8 text-center px-10 mx-20 mt-10 justify-center items-center">
        {/* Heading Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Selecting QTO House: A Decision for Excellence
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Join hands with QTO House, where we blend a decade of professional expertise with a personal touch
            for each project. Our certified estimators are champions of accuracy, delivering results that resonate
            with the cost and quality your projects deserve.
          </p>
        </div>

        {/* Image and Features Section */}
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-10 justify-center items-center">
          <img src={enhancedImage} alt="enhanced-image" className="h-[400px] object-cover rounded-lg shadow-md" />
          
          <div className="flex flex-col space-y-8 text-left">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <PersonIcon className="text-yellow-500 text-4xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Seasoned Industry Experts:
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Our estimators bring decades of field experience to the table, providing you with insights that transcend conventional estimation.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <AssessmentIcon className="text-yellow-500 text-4xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Comprehensive Project Analysis:
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We delve deep, translating project intricacies into actionable, crystal-clear estimates.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <PrecisionManufacturingIcon className="text-yellow-500 text-4xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Technological Precision:
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Leveraging modern tech to refine estimation precision beyond traditional methods.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start space-x-4">
              <MonetizationOnIcon className="text-yellow-500 text-4xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Pricing with Perspective:
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  At QTO House, value meets virtue - offering cost-efficient solutions without skimping on precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectingQTOHouse;
