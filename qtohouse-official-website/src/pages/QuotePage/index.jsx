import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Divider from "@mui/material/Divider";

function QuotePage() {
  return (
    <div className="w-full px-4 md:px-10 py-10 bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Get Free Quote</h1>
        <p className="text-md text-gray-500 mt-2">
          Fill out the form below and we will get back to you soon.
        </p>
      </div>

      {/* Quote Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-md max-w-screen-md mx-auto">
        {/* Company Details Section */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Company Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Full Name"
            InputProps={{
              startAdornment: <PersonIcon className="text-gray-500 mr-2" />,
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Email"
            InputProps={{
              startAdornment: <EmailIcon className="text-gray-500 mr-2" />,
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Phone"
            InputProps={{
              startAdornment: <PhoneIcon className="text-gray-500 mr-2" />,
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Address"
            InputProps={{
              startAdornment: <LocationOnIcon className="text-gray-500 mr-2" />,
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Company Name"
            InputProps={{
              startAdornment: <BusinessIcon className="text-gray-500 mr-2" />,
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Website URL"
            InputProps={{
              startAdornment: <LanguageIcon className="text-gray-500 mr-2" />,
            }}
          />
        </div>

        {/* Divider */}
        <Divider className="my-8" />

        {/* Project Details Section */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Project Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Project Title"
            InputProps={{
              startAdornment: <DescriptionIcon className="text-gray-500 mr-2" />,
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Project Location"
            InputProps={{
              startAdornment: <LocationOnIcon className="text-gray-500 mr-2" />,
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Estimated Value of Project"
            InputProps={{
              startAdornment: <DescriptionIcon className="text-gray-500 mr-2" />,
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Project Required Data"
            InputProps={{
              startAdornment: <DescriptionIcon className="text-gray-500 mr-2" />,
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Scope of Project"
            InputProps={{
              startAdornment: <DescriptionIcon className="text-gray-500 mr-2" />,
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Select CSI Divisions"
            InputProps={{
              startAdornment: <DescriptionIcon className="text-gray-500 mr-2" />,
            }}
          />
        </div>

        {/* Document Upload Section */}
        <div className="mt-8">
          <h1 className="text-xl font-semibold text-gray-800 mb-4">Upload Project Documents</h1>
          <div className="flex items-center space-x-4 p-4 border rounded-lg border-gray-300 bg-gray-50">
            <UploadFileIcon className="text-yellow-500" />
            <div>
              <p className="text-sm text-gray-700">Click to Upload Plans & Specs (PDF Files Only)</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD700",
              color: "#000",
              "&:hover": { backgroundColor: "#FFC000" },
            }}
          >
            Get Free Quote
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuotePage;
