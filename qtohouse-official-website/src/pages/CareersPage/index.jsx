import React, { useState } from "react";
import {
  AccountCircle,
  Email,
  Phone,
  Home,
  Public,
  LinkedIn,
  GitHub,
  Work,
  School,
  AttachFile,
  CameraAlt,
  Clear,
  CheckCircleOutline,
} from "@mui/icons-material";

function CareersPage() {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    linkedIn: "",
    github: "",
    experience: "",
    education: "",
    resume: null,
    photo: null,
  });

  // Function to handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle file uploads
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  // Function to clear the form
  const handleClear = () => {
    setFormData({
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      linkedIn: "",
      github: "",
      experience: "",
      education: "",
      resume: null,
      photo: null,
    });
    // Reset file inputs
    document.getElementById("resume").value = "";
    document.getElementById("photo").value = "";
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Implement form submission logic here
    console.log("Form submitted: ", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pb-16 ">
      {/* Header Section */}
      <div className="w-full bg-yellow-500 py-8 flex flex-col items-center text-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Candidate Registration Form
        </h1>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-screen-md mt-8 bg-white p-8 md:p-10 rounded-lg shadow-lg space-y-10 border border-gray-200">
        {/* Basic Information Section */}
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
              Basic Information
            </h1>
            <button
              onClick={handleClear}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-all text-sm"
            >
              <Clear className="mr-1" /> Clear
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <AccountCircle className="text-yellow-500 mr-2" />
              <select
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none text-gray-700"
              >
                <option value="" disabled>
                  Title (Mr., Ms., Mrs., None)
                </option>
                <option value="mr">Mr.</option>
                <option value="ms">Ms.</option>
                <option value="mrs">Mrs.</option>
                <option value="none">None</option>
              </select>
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <AccountCircle className="text-yellow-500 mr-2" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full bg-transparent focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <AccountCircle className="text-yellow-500 mr-2" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full bg-transparent focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <Email className="text-yellow-500 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-transparent focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <Phone className="text-yellow-500 mr-2" />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-transparent focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <Home className="text-yellow-500 mr-2" />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full bg-transparent focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2 md:col-span-2">
              <Public className="text-yellow-500 mr-2" />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full bg-transparent focus:outline-none text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="space-y-6">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">Social Links</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <LinkedIn className="text-yellow-500 mr-2" />
              <input
                type="text"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                placeholder="LinkedIn Profile"
                className="w-full bg-transparent focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <GitHub className="text-yellow-500 mr-2" />
              <input
                type="text"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="GitHub Profile"
                className="w-full bg-transparent focus:outline-none text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Experience and Education Section */}
        <div className="space-y-6">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Experience & Education
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <Work className="text-yellow-500 mr-2" />
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Experience"
                className="w-full bg-transparent focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <School className="text-yellow-500 mr-2" />
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                placeholder="Education"
                className="w-full bg-transparent focus:outline-none text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Attachments Section */}
        <div className="space-y-6">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Attachment Information
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <AttachFile className="text-yellow-500 mr-2" />
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                className="w-full focus:outline-none text-gray-700"
              />
              <p className="ml-2 text-sm text-gray-600">
                {formData.resume ? formData.resume.name : "Browse Resume"}
              </p>
            </div>
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <CameraAlt className="text-yellow-500 mr-2" />
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handleFileChange}
                className="w-full focus:outline-none text-gray-700"
              />
              <p className="ml-2 text-sm text-gray-600">
                {formData.photo ? formData.photo.name : "Browse Photo"}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center mt-10 gap-4">
          <button
            onClick={handleClear}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all flex items-center w-full md:w-auto justify-center"
          >
            <Clear className="mr-2" />
            Reset
          </button>
          <button
            onClick={handleSubmit}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all flex items-center w-full md:w-auto justify-center"
          >
            <CheckCircleOutline className="mr-2" />
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CareersPage;
