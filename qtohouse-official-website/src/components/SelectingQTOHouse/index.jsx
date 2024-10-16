import React, { useEffect } from 'react';
import enhancedImage from '../../assets/images/enhanced-image 5.png';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function SelectingQTOHouse() {
  // Trigger animations when elements come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    });
    const elements = document.querySelectorAll('.animateOnScroll');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full py-10 px-4 md:px-10 lg:px-20 bg-gray-100 animateOnScroll">
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-10 items-center">
        {/* Heading Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 animate-fadeInUp">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
            Selecting QTO House: A Decision for Excellence
          </h1>
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-justify text-gray-600 dark:text-gray-300">
            Join hands with QTO House, where we blend a decade of professional expertise with a personal touch for each project. Our certified estimators are champions of accuracy, delivering results that resonate with the cost and quality your projects deserve.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-auto animate-fadeInUp">
          <img
            src={enhancedImage}
            alt="enhanced"
            className="w-full h-auto max-h-[400px] lg:max-h-[500px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col mt-8 lg:flex-row lg:space-x-10 lg:mt-16 space-y-6 lg:space-y-0">
        {[
          {
            title: "Seasoned Industry Experts",
            description:
              "Our estimators bring decades of field experience, providing insights that transcend conventional estimation.",
            Icon: PersonIcon,
          },
          {
            title: "Comprehensive Project Analysis",
            description:
              "We delve deep, translating project intricacies into actionable, crystal-clear estimates.",
            Icon: AssessmentIcon,
          },
          {
            title: "Technological Precision",
            description:
              "Leveraging modern tech to refine estimation precision beyond traditional methods.",
            Icon: PrecisionManufacturingIcon,
          },
          {
            title: "Pricing with Perspective",
            description:
              "At QTO House, value meets virtue - offering cost-efficient solutions without skimping on precision.",
            Icon: MonetizationOnIcon,
          },
        ].map(({ title, description, Icon }, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 animateOnScroll transition-transform duration-500 transform hover:scale-105"
          >
            <Icon className="text-yellow-500" />
            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white">
                {title}:
              </h2>
              <p className="text-xs md:text-sm lg:text-lg text-gray-600 dark:text-gray-300">
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
