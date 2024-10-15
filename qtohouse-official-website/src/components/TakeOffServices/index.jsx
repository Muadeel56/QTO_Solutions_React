import React from 'react';
import concrete from '/images/concrete-1.png';
import drywall from '/images/drywall-1.png';
import earthwork from '/images/earth-1.png';
import flooring from '/images/Flooring-1.png';
import electric from '/images/electric-1.png';
import lumber from '/images/lumber-1.png';
import paint from '/images/paint-1.png';
import laborheath from '/images/laborhealth.png';

const services = [
  { id: 1, name: 'Concrete Estimation', imgSrc: concrete },
  { id: 2, name: 'Drywall Estimation', imgSrc: drywall },
  { id: 3, name: 'Earthwork Estimation', imgSrc: earthwork },
  { id: 4, name: 'Flooring Estimation', imgSrc: flooring },
  { id: 5, name: 'Electrical Estimation', imgSrc: electric },
  { id: 6, name: 'Lumber Estimation', imgSrc: lumber },
  { id: 7, name: 'Paint Estimation', imgSrc: paint },
  { id: 8, name: 'Labor Health', imgSrc: laborheath },
];

function TakeOffServices() {
  return (
    <div className="flex flex-col items-center justify-center my-16 px-32">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        We also provide takeoff services to all trade contracts
      </h1>

      {/* Image Slices */}
      <div className="flex w-full h-[250px] md:h-[350px] lg:h-[450px] justify-center items-center border-8 border-gray-600 rounded-[100px] overflow-hidden">
        {services.map((service) => (
          <div
            key={service.id}
            className="group flex-grow h-full relative overflow-hidden transition-all duration-[1000ms] ease-in-out md:hover:flex-grow-[50] flex-shrink-0"
            style={{
              flexBasis: '100px', // Base size for each image slice
            }}
          >
            {/* Image */}
            <img
              src={service.imgSrc}
              alt={service.name}
              className="w-full h-full object-cover transition-transform duration-[1000ms] ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
            />
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out transform group-hover:scale-105">
              <h2 className="text-white text-base md:text-3xl lg:text-4xl font-semibold text-center px-2 whitespace-nowrap transition-all duration-[800ms]">
                {service.name.toUpperCase()}
              </h2>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default TakeOffServices;
