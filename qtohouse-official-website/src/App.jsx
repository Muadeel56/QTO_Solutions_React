import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectsPage";
import CareersPage from "./pages/CareersPage";
import SamplePage from "./pages/SamplesPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectDetails from "./components/ProjectDetails";
import Specs from "./components/Specs";
import QTOs from "./components/QTOs";
import Addendums from "./components/Addendums";
import QtoVideo from "./components/QtoVideo";
import PlanHolders from "./components/PlanHolders";
import ImageComponent from "./components/ImagesComponent";
import QuotePage from "./pages/QuotePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content with Flex-Grow */}
        <main className="flex-grow">
          <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/sample" element={<SamplePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route
              path="/projects/:projectId"
              element={<ProjectDetailPage />}
            />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/specs" element={<Specs />} />
            <Route path="/qtos" element={<QTOs />} />
            <Route path="/addendums" element={<Addendums />} />
            <Route path="/qto-video" element={<QtoVideo />} />
            <Route path="/plan-holders" element={<PlanHolders />} />
            <Route path="/images" element={<ImageComponent />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
