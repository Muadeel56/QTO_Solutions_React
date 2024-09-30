import React from "react";
import contact from "../../assets/images/contact-us.png";
import { Email, Phone, Person, LocationCity, Business } from "@mui/icons-material";

function ContactPage() {
  return (
    <div className="w-full bg-gray-100 pb-16">
      {/* Get In Touch Section */}
      <div className="relative w-full h-[50vh]">
        <img src={contact} alt="contact-us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white text-center">Get In Touch</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-screen-md mx-auto mt-16 bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center border-b-4 border-yellow-500 pb-4">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

          {/* Phone Number Field */}
          <div className="flex items-center border-b-2 border-gray-300 pb-2">
            <Phone className="text-yellow-500 mr-2" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full focus:outline-none text-gray-700"
            />
          </div>

          {/* City Field */}
          <div className="flex items-center border-b-2 border-gray-300 pb-2">
            <LocationCity className="text-yellow-500 mr-2" />
            <input
              type="text"
              placeholder="City"
              className="w-full focus:outline-none text-gray-700"
            />
          </div>

          {/* Company Name Field */}
          <div className="flex items-center border-b-2 border-gray-300 pb-2 md:col-span-2">
            <Business className="text-yellow-500 mr-2" />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full focus:outline-none text-gray-700"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col md:col-span-2">
            <textarea
              placeholder="Your Message"
              className="w-full border-2 border-gray-300 rounded-lg p-4 focus:outline-none text-gray-700"
              rows="5"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-yellow-500 text-black text-lg font-semibold px-8 py-4 rounded-lg hover:bg-yellow-600 transition-all">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
