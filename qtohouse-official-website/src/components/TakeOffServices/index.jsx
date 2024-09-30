import React from 'react';
import concrete from '/images/concrete-1.png';
import drywall from '/images/drywall-1.png';
import earthwork from '/images/earth-1.png';
import flooring from '/images/Flooring-1.png';
import electric from '/images/electric-1.png';
import lumber from '/images/lumber-1.png';
import paint from '/images/paint-1.png';
import laborheath from '/images/laborhealth.png';
import career from '/images/career.jpg';
import bidding from '/images/bidding.png';

const services = [
  { id: 1, name: 'Concrete Estimation', imgSrc: concrete },
  { id: 2, name: 'Drywall Estimation', imgSrc: drywall },
  { id: 3, name: 'Earthwork Estimation', imgSrc: earthwork },
  { id: 4, name: 'Flooring Estimation', imgSrc: flooring },
  { id: 5, name: 'Electrical Estimation', imgSrc: electric },
  { id: 6, name: 'Lumber Estimation', imgSrc: lumber },
  { id: 7, name: 'Paint Estimation', imgSrc: paint },
  { id: 8, name: 'Labor Health', imgSrc: laborheath },
  { id: 9, name: 'Career', imgSrc: career },
  { id: 10, name: 'Bidding', imgSrc: bidding },
];

function TakeOffServices() {
  return (
    <div className="flex flex-col items-center justify-center my-16 px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        We also provide takeoff services to all trade contracts
      </h1>

      {/* Image Strip Container */}
      <div className="relative w-full md:w-[90%] lg:w-[80%] xl:w-[70%] h-[400px] md:h-[350px] border-4 border-gray-300 rounded-3xl overflow-hidden flex bg-white shadow-xl">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative w-[10%] sm:w-[12%] md:w-[10%] lg:w-[10%] h-full transition-all duration-500 ease-in-out hover:w-[20%] hover:z-10 cursor-pointer "
          >
            <img
              src={service.imgSrc}
              alt={service.name}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale- "
            />
            {/* Overlay text */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <h2 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center tracking-wide px-2">
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
