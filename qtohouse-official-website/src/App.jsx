import React, { useState } from "react";
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
import UserContainer from "./pages/UserContainer";
import QuotePage from "./pages/QuotePage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute"; // Component to protect routes

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Manage login state

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header (Visible on all pages) */}
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        {/* Main Content with Flex-Grow */}
        <main className="flex-grow font-poppins">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sample" element={<SamplePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/quote" element={<QuotePage />} />

            {/* Project and User-Specific Routes */}
            <Route
              path="/projects"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <ProjectPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/projects/:projectId"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <ProjectDetailPage />
                </ProtectedRoute>
              }
            />
            <Route path="/user/*" element={<UserContainer />} />
          </Routes>
        </main>

        {/* Footer (Visible on all pages) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
