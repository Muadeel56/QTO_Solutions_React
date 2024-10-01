import React, { useState } from "react";
import PrintIcon from '@mui/icons-material/Print';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from "@mui/material";
import ProjectDetails from "../../components/ProjectDetails"; // Component for "Project Details"
import Specs from "../../components/Specs"; // Component for "Specs"
import Plans from "../../components/Plans"; // Component for "Plans"
import QTOs from "../../components/QTOs"; // Component for "QTOs"
import Addendums from "../../components/Addendums"; // Component for "Addendums"
import QtoVideo from "../../components/QtoVideo"; // Component for "QTO Video"
import PlanHolders from "../../components/PlanHolders"; // Component for "Plan Holders"
import Images from "../../components/ImagesComponent"; // Component for "Images"

function ProjectDetailPage() {
  const [activeSection, setActiveSection] = useState("Project Details");

  const sections = [
    { label: "Project Details", component: <ProjectDetails /> },
    { label: "Specs 35", component: <Specs /> },
    { label: "Plans", component: <Plans /> },
    { label: "QTOs 31", component: <QTOs /> },
    { label: "Addendums 4", component: <Addendums /> },
    { label: "QTO Video 1", component: <QtoVideo /> },
    { label: "Plan Holders 4", component: <PlanHolders /> },
    { label: "Images 23", component: <Images /> },
  ];

  return (
    <div className="w-full p-4 md:p-8 bg-gray-100">
      {/* Page Header */}
      <div className="flex flex-col items-start mb-6 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Project Details</h1>
        <p className="text-sm text-gray-500 mt-1 md:mt-2">Home / Projects / Project Detail</p>
      </div>

      {/* Project Header Section */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6 md:mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              HS 498 Health Arts Robotics and Technology High School
            </h1>
            <div className="flex items-center text-gray-600">
              <LocationOnIcon className="text-yellow-500 mr-2" />
              <p className="text-sm md:text-base">207-01 116th Avenue, Cambria Heights, NY 11411, USA</p>
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
      <div className="flex flex-wrap justify-center md:justify-start mb-6 md:mb-10 gap-2 md:gap-4">
        {sections.map((section, index) => (
          <Button
            key={index}
            variant={activeSection === section.label ? "contained" : "outlined"}
            onClick={() => setActiveSection(section.label)}
            sx={{
              color: activeSection === section.label ? '#000' : '#333',
              backgroundColor: activeSection === section.label ? '#FFD700' : 'transparent',
              borderColor: '#FFD700',
              '&:hover': {
                borderColor: '#FFC000',
                color: '#000',
                backgroundColor: activeSection === section.label ? '#FFC000' : 'transparent',
              },
            }}
            className="mb-2"
          >
            {section.label}
          </Button>
        ))}
      </div>

      {/* Dynamic Content Section */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        {sections.find(section => section.label === activeSection)?.component}
      </div>
    </div>
  );
}

export default ProjectDetailPage;
