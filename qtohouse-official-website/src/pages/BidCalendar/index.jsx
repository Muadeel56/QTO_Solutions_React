import React from 'react';
import { Grid, Card, Typography, Box } from '@mui/material';
import { CalendarToday } from '@mui/icons-material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup moment as the localizer for the calendar
const localizer = momentLocalizer(moment);

// Sample bid events data
const bidEvents = [
  {
    id: 0,
    title: 'Project Alpha Bid',
    start: new Date(2024, 9, 15, 9, 0), // Oct 15, 2024 9:00 AM
    end: new Date(2024, 9, 15, 12, 0), // Oct 15, 2024 12:00 PM
    location: 'Location A',
  },
  {
    id: 1,
    title: 'Project Beta Bid',
    start: new Date(2024, 9, 18, 14, 0), // Oct 18, 2024 2:00 PM
    end: new Date(2024, 9, 18, 16, 0),  // Oct 18, 2024 4:00 PM
    location: 'Location B',
  },
  {
    id: 2,
    title: 'Project Gamma Bid',
    start: new Date(2024, 9, 20, 10, 0), // Oct 20, 2024 10:00 AM
    end: new Date(2024, 9, 20, 13, 0),  // Oct 20, 2024 1:00 PM
    location: 'Location C',
  },
  // Add more events as needed
];

// Sample upcoming bids data for the list
const upcomingBids = [
  {
    title: 'Project Delta Bid',
    date: 'October 22, 2024',
    time: '10:00 AM - 1:00 PM',
    location: 'Location D',
  },
  {
    title: 'Project Epsilon Bid',
    date: 'October 25, 2024',
    time: '1:00 PM - 3:00 PM',
    location: 'Location E',
  },
];

function BidCalendar() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <Box className="mb-6 text-center">
        <Typography variant="h3" className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Bid Calendar
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          All the bid dates are displayed here
        </Typography>
      </Box>

      {/* Grid for Bid Information */}
      <Grid container spacing={2} className="mb-6">
        {/* Important Dates Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="p-4 bg-white shadow-lg rounded-lg">
            <Typography variant="h6" className="text-yellow-600 mb-2">
              Important Dates
            </Typography>
            <Typography variant="body2" className="text-gray-700">
              Date: October 15, 2024
            </Typography>
          </Card>
        </Grid>

        {/* Upcoming Bids Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="p-4 bg-white shadow-lg rounded-lg">
            <Typography variant="h6" className="text-yellow-600 mb-2">
              Upcoming Bids
            </Typography>
            <Typography variant="body2" className="text-gray-700">
              Number of Upcoming Bids: {upcomingBids.length}
            </Typography>
          </Card>
        </Grid>

        {/* Upcoming Bids Dates Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="p-4 bg-white shadow-lg rounded-lg">
            <Typography variant="h6" className="text-yellow-600 mb-2">
              Upcoming Bids Dates
            </Typography>
            <Typography variant="body2" className="text-gray-700">
              {upcomingBids.map((bid, index) => (
                <div key={index}>
                  <strong>{bid.title}</strong> - {bid.date} <br />
                  <span className="text-gray-500">{bid.time} | {bid.location}</span>
                  <hr className="my-1" />
                </div>
              ))}
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Calendar Section */}
      <Box className="p-4 bg-white shadow-lg rounded-lg mb-6">
        <Box className="flex items-center mb-4">
          <CalendarToday sx={{ color: '#D97706', mr: 2 }} />
          <Typography variant="h5" className="text-gray-800">
            Bid Calendar Overview
          </Typography>
        </Box>
        <Typography variant="body2" className="text-gray-600 mb-4">
          The calendar shows the bids scheduled for specific dates, including time and location.
        </Typography>

        {/* Calendar with Events */}
        <div className="h-72 md:h-96 bg-white rounded-lg overflow-hidden">
          <Calendar
            localizer={localizer}
            events={bidEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%' }} // Adjust to fill the container height
            className="shadow-lg"
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: '#D97706',
                color: 'white',
                borderRadius: '5px',
                border: 'none',
              },
            })}
            components={{
              event: ({ event }) => (
                <span>
                  <strong>{event.title}</strong>
                  <p className="text-sm">{event.location}</p>
                </span>
              ),
            }}
          />
        </div>
      </Box>
    </div>
  );
}

export default BidCalendar;
