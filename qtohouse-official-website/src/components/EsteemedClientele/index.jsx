import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function EsteemedClientele() {
  return (
    <div className="bg-yellow-500 py-16">
      {/* Header */}
      <div className="flex flex-col justify-center items-center space-y-4 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Esteemed Clientele</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          QTO House proudly serves a diverse range of clients in the construction industry, from general contractors to homeowners, ensuring each project is treated with unparalleled professionalism.
        </p>
      </div>

      {/* Clientele List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 px-4 md:px-16">
        {[
          { id: 1, title: 'General Contractors' },
          { id: 2, title: 'Remodelling Contractors' },
          { id: 3, title: 'Architects' },
          { id: 4, title: 'Designers' },
          { id: 5, title: 'Sub-contractors' },
          { id: 6, title: 'Material Suppliers' },
          { id: 7, title: 'Homeowners' },
          { id: 8, title: 'Developers' },
        ].map((client) => (
          <div key={client.id} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <CheckCircleIcon className="text-green-500 text-4xl" />
            <h1 className="text-lg md:text-xl font-semibold text-gray-800">{client.title}</h1>
          </div>
        ))}
      </div>

      {/* Get Free Quote Button */}
      <div className="flex justify-center mt-12">
        <button className="flex items-center space-x-2 bg-gray-900 text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300">
          <span>Get Free Quote</span>
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}

export default EsteemedClientele;