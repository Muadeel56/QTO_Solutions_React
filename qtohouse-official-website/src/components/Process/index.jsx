import React from 'react';
import {
  Assessment,
  Description,
  BuildCircle,
  InsertDriveFile,
  Send,
  RequestQuote,
  Payment,
  CheckCircle,
} from '@mui/icons-material';

function Process() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-20 py-10 bg-gray-50">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900">How Our Process Works</h1>
        <p className="text-xs md:text-sm lg:text-lg text-gray-600 mt-4">
          Our methodical approach to construction takeoff and estimation ensures accurate, comprehensive project oversight.
        </p>
      </div>

      {/* Process Content */}
      <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-10 lg:space-y-0">
        {/* Left Side - Steps */}
        <div className="flex flex-col space-y-10 lg:w-1/2">
          {[
            {
              id: 1,
              title: 'In-Depth Plan Analysis',
              description: 'Detailed review of project plans to identify all components necessary for a successful build.',
              icon: <Description className="text-yellow-600 " fontSize='large' />, // Increased size for large screens
            },
            {
              id: 2,
              title: 'Efficient Quantity Takeoff',
              description: 'Utilizing advanced software to generate precise material lists and costings.',
              icon: <Assessment className="text-yellow-600 " fontSize='large' />, // Increased size for large screens
            },
            {
              id: 3,
              title: 'Comprehensive Project Overview',
              description: 'Aggregation of all data into an accessible format, offering a clear project trajectory.',
              icon: <BuildCircle className="text-yellow-600 " sx={{ sm: { fontSize: 'large' }, lg: { fontSize: 'large' }} }/>, // Increased size for large screens
            },
            {
              id: 4,
              title: 'Detailed Takeoff Deliverables',
              description: 'Tailored reports that outline the project scope comprehensively, with all data clearly presented for client review.',
              icon: <InsertDriveFile className="text-yellow-600 " fontSize='large' />, // Increased size for large screens
            },
          ].map((step) => (
            <div key={step.id} className="flex items-start space-x-4">
              <div>{step.icon}</div>
              <div className="flex flex-col space-y-2">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">{step.title}</h2>
                <p className="text-xs md:text-sm lg:text-lg text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Process Flow */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { id: 1, title: 'Initial Stage', description: 'Send Plans', icon: <Send fontSize='large' className="text-white lg:text-6xl" /> },
              { id: 2, title: 'Second Stage', description: 'Receive Quotation', icon: <RequestQuote fontSize='large' className="text-white lg:text-6xl" /> },
              { id: 3, title: 'Third Stage', description: 'Make Payment', icon: <Payment fontSize='large' className="text-white lg:text-6xl" /> },
              { id: 4, title: 'Final Stage', description: 'Receive Estimates', icon: <CheckCircle fontSize='large' className="text-white lg:text-6xl" /> },
            ].map((flow) => (
              <div
                key={flow.id}
                className="flex flex-col justify-center items-center space-y-3 border-2 border-yellow-400 rounded-lg text-center p-6 bg-yellow-500 text-white shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <div className="mb-3">{flow.icon}</div>
                <h3 className="text-sm md:text-lg lg:text-xl font-bold">{flow.title}</h3>
                <p className="text-xs md:text-sm lg:text-lg">{flow.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
