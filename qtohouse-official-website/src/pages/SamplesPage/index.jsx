import React from "react";
import login from "../../assets/images/login-bac-img.png";
import {
  Business,
  Email,
  Person,
  KeyboardArrowDown,
  FileCopy,
} from "@mui/icons-material";

function SamplePage() {
  return (
    <div className="w-full bg-gray-100 pb-16">
      {/* Background Image Section */}
      <div className="relative w-full h-[50vh]">
        <img src={login} alt="login background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white text-center">
            Download Our Samples
          </h1>
          <p className="text-lg text-white mt-4 text-center max-w-xl">
            Do you want to see how good our work is? Get our sample for free right now.
          </p>
        </div>
      </div>

      {/* Download Samples Form Section */}
      <div className="w-full max-w-screen-md mx-auto mt-16 bg-white p-12 rounded-lg shadow-lg">
        <div className="space-y-8">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center border-b-2 border-gray-300 pb-2 w-full">
              <FileCopy className="text-yellow-500 mr-2" />
              <select className="w-full bg-transparent focus:outline-none text-gray-700">
                <option value="" disabled selected>
                  Select a Sample
                </option>
                <option value="sample1">Concrete Estimation</option>
                <option value="sample2">Flooring Estimation</option>
                <option value="sample3">Drywall Estimation</option>
                <option value="sample4">Electrical Estimation</option>
              </select>
              <KeyboardArrowDown className="text-yellow-500" />
            </div>
          </div>

          {/* Name Field */}
          <div className="flex items-center border-b-2 border-gray-300 pb-2">
            <Person className="text-yellow-500 mr-2" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full focus:outline-none text-gray-700"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center border-b-2 border-gray-300 pb-2">
            <Email className="text-yellow-500 mr-2" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full focus:outline-none text-gray-700"
            />
          </div>

          {/* Company Name Field */}
          <div className="flex items-center border-b-2 border-gray-300 pb-2">
            <Business className="text-yellow-500 mr-2" />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full focus:outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Request Samples Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-yellow-500 text-black text-lg font-semibold px-10 py-4 rounded-lg hover:bg-yellow-600 transition-all">
            Request Samples
          </button>
        </div>
      </div>
    </div>
  );
}

export default SamplePage;
