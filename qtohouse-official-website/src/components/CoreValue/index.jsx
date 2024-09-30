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
    <div className="w-full py-16 px-6 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Core Values</h1>
        <p className="text-lg text-gray-600">
          We pride ourselves on our core values that are essential in delivering
          high-quality preconstruction estimates and services.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Core Value Items */}
        {[
          {
            title: "We're Precise",
            description:
              "We reflect our unwavering dedication to delivering accurate and detailed preconstruction estimates.",
            icon: <PrecisionManufacturingIcon className="text-5xl text-yellow-500" />,
          },
          {
            title: "We're Estimating Allies",
            description:
              "We ensure meticulous and competitive estimations, consistently delivering excellence in every project.",
            icon: <GroupWorkIcon className="text-5xl text-yellow-500" />,
          },
          {
            title: "We're Outsource Estimating",
            description:
              "We streamline the process, minimizing hassles and maximizing efficiency for our clients.",
            icon: <AssignmentTurnedInIcon className="text-5xl text-yellow-500" />,
          },
          {
            title: "We're Disciplined",
            description:
              "We highlight our commitment to systematic preconstruction estimating for accuracy and reliability.",
            icon: <BuildIcon className="text-5xl text-yellow-500" />,
          },
          {
            title: "We're Accountable",
            description:
              "We uphold the highest standards of integrity and transparency in preconstruction estimating.",
            icon: <VerifiedIcon className="text-5xl text-yellow-500" />,
          },
          {
            title: "We're Transparent",
            description:
              "We reflect our commitment to open and honest communication in preconstruction estimating.",
            icon: <VisibilityIcon className="text-5xl text-yellow-500" />,
          },
          {
            title: "We're Aligned",
            description:
              "We synchronize our efforts with our clients' goals, ensuring every estimate is tailored for success.",
            icon: <SyncIcon className="text-5xl text-yellow-500" />,
          },
          {
            title: "We're Responsible",
            description:
              "We are committed to ethical practices and sustainable decision-making for the benefit of our community.",
            icon: <HandshakeIcon className="text-5xl text-yellow-500" />,
          },
        ].map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="mb-4">{value.icon}</div>
            <h1 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {value.title}
            </h1>
            <p className="text-gray-600 text-center">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoreValue;
