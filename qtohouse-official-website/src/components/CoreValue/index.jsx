import React from "react";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import BuildIcon from "@mui/icons-material/Build";
import VerifiedIcon from "@mui/icons-material/Verified";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SyncIcon from "@mui/icons-material/Sync";
import HandshakeIcon from "@mui/icons-material/Handshake";

function CoreValue() {
  return (
    <div className="w-full py-16 px-6 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h1>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          At QTO House, our core values are the foundation of our commitment to deliver high-quality preconstruction estimates and services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Core Value Items */}
        {[
          {
            title: "Precision",
            description:
              "Our dedication to delivering accurate and detailed preconstruction estimates ensures project success.",
            icon: <PrecisionManufacturingIcon sx={{ fontSize: 60 }} className="text-yellow-500" />,
          },
          {
            title: "Collaboration",
            description:
              "We work as your partners, ensuring meticulous and competitive estimates with every project.",
            icon: <GroupWorkIcon sx={{ fontSize: 60 }} className=" md:text-6xl text-yellow-500" />,
          },
          {
            title: "Efficiency",
            description:
              "We streamline estimation processes, maximizing efficiency and minimizing hassles for our clients.",
            icon: <AssignmentTurnedInIcon sx={{ fontSize: 60 }} className="text-yellow-500" />,
          },
          {
            title: "Discipline",
            description:
              "We are committed to systematic and accurate estimating practices that ensure reliability in every project.",
            icon: <BuildIcon sx={{ fontSize: 60 }} className="text-yellow-500" />,
          },
          {
            title: "Accountability",
            description:
              "We uphold the highest standards of integrity and transparency in all our preconstruction estimates.",
            icon: <VerifiedIcon sx={{ fontSize: 60 }} className="text-yellow-500" />,
          },
          {
            title: "Transparency",
            description:
              "Our commitment to open and honest communication fosters trust and builds lasting relationships.",
            icon: <VisibilityIcon sx={{ fontSize: 60 }} className="text-yellow-500" />,
          },
          {
            title: "Alignment",
            description:
              "We align our efforts with your goals, ensuring each estimate is tailored to meet your project needs.",
            icon: <SyncIcon sx={{ fontSize: 60 }} className="text-yellow-500" />,
          },
          {
            title: "Responsibility",
            description:
              "We prioritize ethical practices and sustainability to benefit our clients, community, and environment.",
            icon: <HandshakeIcon sx={{ fontSize: 60 }} className="text-yellow-500" />,
          },
        ].map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
          >
            <div className="mb-4">{value.icon}</div>
            <h1 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 mb-2 text-center">
              {value.title}
            </h1>
            <p className="text-gray-600 text-xs md:text-sm xl:text-lg text-center md:text-justify">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoreValue;
