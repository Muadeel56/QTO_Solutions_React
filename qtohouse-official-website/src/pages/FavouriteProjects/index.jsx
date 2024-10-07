import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function FavouriteProjects() {
  const projects = [
    {
      id: 1,
      title: "Construction of Highway",
      location: "New York, USA",
      status: "In Progress",
      statusColor: "text-green-500",
    },
    {
      id: 2,
      title: "Bridge Renovation",
      location: "London, UK",
      status: "Delayed",
      statusColor: "text-red-500",
    },
    {
      id: 3,
      title: "School Building Construction",
      location: "Lahore, Pakistan",
      status: "Completed",
      statusColor: "text-green-500",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-yellow-600">Favourite Projects</h1>
        <p className="text-gray-500 mt-2">Here are the projects you've marked as your favorites</p>
      </div>

      {/* Table Section */}
      <TableContainer component={Paper} className="shadow-md rounded-lg">
        <Table aria-label="favourite projects table">
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell className="font-semibold text-gray-700">Sr. No</TableCell>
              <TableCell className="font-semibold text-gray-700">Project Title</TableCell>
              <TableCell className="font-semibold text-gray-700">Location</TableCell>
              <TableCell className="font-semibold text-gray-700">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow key={project.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="text-yellow-600 font-medium">{project.title}</TableCell>
                <TableCell>{project.location}</TableCell>
                <TableCell className={project.statusColor}>{project.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default FavouriteProjects;
