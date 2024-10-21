import React from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'; // Icon for Excel document
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // Icon for Date
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Icon for buying document

function QTOs() {
  const qtoData = [
    { name: 'QTO Document 1', size: '2.5MB', date: '2024-09-10', price: '$20' },
    { name: 'QTO Document 2', size: '1.8MB', date: '2024-09-12', price: '$15' },
    { name: 'QTO Document 3', size: '3.0MB', date: '2024-09-15', price: '$25' },
    { name: 'QTO Document 4', size: '1.2MB', date: '2024-09-18', price: '$18' },
    { name: 'QTO Document 5', size: '2.0MB', date: '2024-09-20', price: '$22' },
  ];

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-6">
        QTO Documents
      </h1>
      <div className="space-y-6">
        {qtoData.map((qto, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start justify-between space-y-2 md:space-y-0 p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            {/* Document Details */}
            <div className="flex items-center space-x-4">
              <InsertDriveFileIcon className="text-green-600 text-4xl" />
              <div className="space-y-2">
                <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-800">
                  {qto.name}
                </p>
                <div className="flex items-center space-x-2 text-xs md:text-sm lg:text-lg text-gray-500">
                  <CalendarTodayIcon fontSize="small" />
                  <p>{qto.date}</p>
                </div>
              </div>
            </div>

            {/* Document Size and Price */}
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-xs md:text-sm lg:text-lg font-medium text-gray-600">{qto.size}</p>
              <p className="text-xs md:text-sm lg:text-lg font-medium text-gray-800">{qto.price}</p>

              {/* Buy Document Button */}
              <Button
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                className="text-xs md:text-sm lg:text-lg"
                sx={{
                  backgroundColor: '#FFD700',
                  color: '#000',
                  '&:hover': { backgroundColor: '#FFC000' },
                  fontWeight: 'bold',
                  padding: '6px 12px',
                  textTransform: 'none',
                }}
                size="small"
              >
                Buy Document
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QTOs;
