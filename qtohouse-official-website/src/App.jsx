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
import UserProfile from "./pages/UserProfile";
import UserDashboard from "./pages/UserDashboard";
import QuotePage from "./pages/QuotePage";
import UserLayout from "./components/UserLayout";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header (Visible on all pages) */}
        <Header />

        {/* Main Content with Flex-Grow */}
        <main className="flex-grow font-poppins">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/sample" element={<SamplePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />

            {/* User-Specific Routes (wrapped with UserLayout) */}
            <Route path="/profile" element={<UserLayout><UserProfile /></UserLayout>} />
            <Route path="/dashboard" element={<UserLayout><UserDashboard /></UserLayout>} />
            <Route path="/dashboard" element={<UserLayout><UserDashboard /></UserLayout>} />
            <Route path="/dashboard" element={<UserLayout><UserDashboard /></UserLayout>} />
            <Route path="/dashboard" element={<UserLayout><UserDashboard /></UserLayout>} />
            {/* Add more user-specific routes as needed */}
          </Routes>
        </main>

        {/* Footer (Visible on all pages) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
