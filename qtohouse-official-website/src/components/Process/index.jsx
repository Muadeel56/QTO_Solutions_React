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
    <div className="w-[90%] md:w-[80%] mx-auto my-16">
      {/* Header */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">How Our Process Works</h1>
        <p className="text-lg text-gray-600">
          Our methodical approach to construction takeoff and estimation ensures accurate, comprehensive project oversight.
        </p>
      </div>

      {/* Process Content */}
      <div className="flex flex-col lg:flex-row lg:space-x-10 mt-10">
        {/* Left Side - Steps */}
        <div className="flex flex-col space-y-8 lg:w-1/2">
          {[
            {
              id: 1,
              title: 'In-Depth Plan Analysis',
              description:
                'Detailed review of project plans to identify all components necessary for a successful build.',
              icon: <Description className="text-yellow-600 text-4xl" />,
            },
            {
              id: 2,
              title: 'Efficient Quantity Takeoff',
              description: 'Utilizing advanced software to generate precise material lists and costings.',
              icon: <Assessment className="text-yellow-600 text-4xl" />,
            },
            {
              id: 3,
              title: 'Comprehensive Project Overview',
              description:
                'Aggregation of all data into an accessible format, offering a clear project trajectory.',
              icon: <BuildCircle className="text-yellow-600 text-4xl" />,
            },
            {
              id: 4,
              title: 'Detailed Takeoff Deliverables',
              description:
                'Tailored reports that outline the project scope comprehensively, with all data clearly presented for client review.',
              icon: <InsertDriveFile className="text-yellow-600 text-4xl" />,
            },
          ].map((step) => (
            <div key={step.id} className="flex items-start space-x-4">
              <div>{step.icon}</div>
              <div className="flex flex-col space-y-2">
                <h1 className="text-xl font-semibold text-gray-900">{step.title}:</h1>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Process Flow */}
        <div className="grid grid-cols-2 gap-6 lg:w-1/2 mt-10 lg:mt-0">
          {[
            { id: 1, title: 'Initial Stage', description: 'Send Plans', icon: <Send className="text-white" /> },
            {
              id: 2,
              title: 'Second Stage',
              description: 'Receive Quotation',
              icon: <RequestQuote className="text-white" />,
            },
            {
              id: 3,
              title: 'Third Stage',
              description: 'Make Payment',
              icon: <Payment className="text-white" />,
            },
            { id: 4, title: 'Final Stage', description: 'Receive Estimates', icon: <CheckCircle className="text-white" /> },
          ].map((flow) => (
            <div
              key={flow.id}
              className="flex flex-col justify-center items-center space-y-2 border-2 border-yellow-400 rounded-lg text-center p-6 bg-yellow-500 text-white shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="text-4xl mb-2">{flow.icon}</div>
              <h1 className="text-lg font-bold">{flow.title}</h1>
              <p className="text-sm">{flow.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;
