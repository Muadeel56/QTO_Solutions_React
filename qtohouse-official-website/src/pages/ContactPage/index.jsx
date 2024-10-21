import React from "react";
import contact from "../../assets/images/contact-us.png";
import { Email, Phone, Person, LocationCity, Business } from "@mui/icons-material";

function ContactPage() {
  return (
    <div className="w-full bg-gray-100 pb-16">
      {/* Background Image Section */}
      <div className="relative w-full h-[50vh]">
        <img src={contact} alt="contact-us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col py-20 items-center bg-black bg-opacity-50">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white ">
            Get In Touch
          </h1>
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white mt-4 px-2 text-center max-w-xl">
            We are here to assist you. Please fill out the form below, and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative w-full max-w-screen-md mx-auto -mt-32 bg-white p-12 rounded-lg shadow-lg">
        <div className="space-y-8">
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
          <div className="flex items-center border-b-2 border-gray-300 pb-2">
            <Business className="text-yellow-500 mr-2" />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full focus:outline-none text-gray-700"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <textarea
              placeholder="Your Message"
              className="w-full border-2 border-gray-300 rounded-lg p-4 focus:outline-none text-gray-700"
              rows="5"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-yellow-500 text-white text-xs md:text-sm lg:text-lg font-semibold px-10 py-4 rounded-lg hover:bg-yellow-600 transition-all">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
