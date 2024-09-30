import React from "react";
import PrintIcon from '@mui/icons-material/Print';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from "@mui/material";
import ProjectDetails from "../../components/ProjectDetails";

function ProjectDetailPage() {
  return (
    <div className="w-full p-8 bg-gray-100">
      {/* Page Header */}
      <div className="flex flex-col items-start mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Project Details</h1>
        <p className="text-sm text-gray-500 mt-2">Home / Projects / Project Detail</p>
      </div>

      {/* Project Header Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              HS 498 Health Arts Robotics and Technology High School
            </h1>
            <div className="flex items-center text-gray-600">
              <LocationOnIcon className="text-yellow-500 mr-2" />
              <p>207-01 116th Avenue, Cambria Heights, NY 11411, USA</p>
            </div>
          </div>
          <Button
            variant="contained"
            startIcon={<PrintIcon />}
            sx={{
              backgroundColor: '#FFD700',
              color: '#000',
              '&:hover': { backgroundColor: '#FFC000' }
            }}
            className="mt-4 md:mt-0"
          >
            Print Details
          </Button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap mb-10">
        {["Project Details", "Specs 35", "Plans", "QTOs 31", "Addendums 4", "QTO Video 1", "Plan Holders 4", "Images 23"].map((label, index) => (
          <Button
            key={index}
            variant="outlined"
            sx={{
              color: '#333',
              borderColor: '#FFD700',
              '&:hover': { borderColor: '#FFC000', color: '#000' }
            }}
            className="mr-4 mb-4"
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Component Sections */}
      <ProjectDetails />
      {/* <Specs />
      <Plans />
      <QTOs />
      <Addendums />
      <QtoVideo />
      <PlanHolders />
      <Images /> */}
    </div>
  );
}

export default ProjectDetailPage;
