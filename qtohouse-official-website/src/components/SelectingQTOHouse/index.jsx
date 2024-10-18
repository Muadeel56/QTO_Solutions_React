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
    <div className="w-full py-12 px-4 md:px-10 lg:px-20 bg-white">
      {/* Main Section - Image and Text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
            Selecting QTO House: A Decision for Excellence
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600">
            Join hands with QTO House, where we blend a decade of professional expertise with a personal touch for each project. Our certified estimators are champions of accuracy, delivering results that resonate with the cost and quality your projects deserve.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <img
            src={enhancedImage}
            alt="enhanced"
            className="w-full h-auto max-h-[400px] lg:max-h-[500px] object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: 'Seasoned Industry Experts',
            description: 'Our estimators bring decades of field experience, providing insights that transcend conventional estimation.',
            Icon: PersonIcon,
          },
          {
            title: 'Comprehensive Project Analysis',
            description: 'We delve deep, translating project intricacies into actionable, crystal-clear estimates.',
            Icon: AssessmentIcon,
          },
          {
            title: 'Technological Precision',
            description: 'Leveraging modern tech to refine estimation precision beyond traditional methods.',
            Icon: PrecisionManufacturingIcon,
          },
          {
            title: 'Pricing with Perspective',
            description: 'At QTO House, value meets virtue - offering cost-efficient solutions without skimping on precision.',
            Icon: MonetizationOnIcon,
          },
        ].map(({ title, description, Icon }, index) => (
          <div key={index} className="flex items-start space-x-4">
            <Icon className="text-yellow-500" />
            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
                {title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-600">
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
