import React from "react";
import aboutimg from "../../assets/images/about.png";
import CoreValue from "../../components/CoreValue";
import OurVision from "../../components/OurVision";
import OurMission from "../../components/OurMission";
import EsteemedClientele from "../../components/EsteemedClientele";

function AboutPage() {
  return (
    <div className="w-full bg-gray-100">
      {/* Welcome Section with Background Image */}
      <div className="min-h-[70vh] md:min-h-screen flex flex-col items-center pb-8 md:pb-16">
        <div className="relative w-full h-[40vh] md:h-[60vh]">
          <img
            src={aboutimg}
            alt="aboutimg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
              Welcome to QTO House
            </h1>
          </div>
        </div>

        {/* About Us Section */}
        <div className="w-full max-w-screen-lg px-6 py-8 bg-white mt-6 md:mt-10 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center border-b-4 border-yellow-500 pb-4">
            About Us
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Welcome to QTO House, your trusted partner in the construction
            industry. We are a leading provider of pre-construction bidding
            services, streamlining operations for general contractors, delivering
            cost-competitive estimates, and helping contractors win bids with our
            innovative solutions. With a strong presence in New York State and
            territories, we are committed to professionalism, accuracy, and
            customer satisfaction.
            <br />
            <br />
            At QTO House, we have a team of versatile estimators and advanced
            software tools that enable us to provide online services to the
            highest professional standards. We take pride in protecting the best
            interests of our customers and approach each task with absolute
            responsibility and care. With our unsurpassed professional estimating
            and take-off services, we strive to exceed your expectations.
            <br />
            <br />
            Our skilled team utilizes the latest software in the industry to
            ensure the most accurate cost estimates for your projects. We
            understand the importance of time and efficiency, which is why our
            clients enjoy the fastest turnaround time in the industry at fees that
            are extremely competitive. As a team of specialized individuals with
            different skill sets, we are dedicated to staying at the forefront of
            construction estimation innovations, providing you with the latest
            industry insights.
          </p>
        </div>
      </div>

      {/* Core Values, Vision, and Mission Section */}
      <div className="w-full bg-gray-200 py-10 md:py-16">
        <div className="max-w-screen-lg mx-auto space-y-10 md:space-y-16 px-4">
          <CoreValue />
          <div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
            <OurVision />
            <OurMission />
          </div>
        </div>
      </div>

      {/* Esteemed Clientele Section */}
      <div className="w-full bg-yellow-500 py-10 md:py-16">
        <div className="max-w-screen-lg mx-auto px-4">
          <EsteemedClientele />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
