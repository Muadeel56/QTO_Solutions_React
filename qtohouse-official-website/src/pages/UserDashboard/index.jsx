import React from "react";
import {
  Button,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import BusinessIcon from "@mui/icons-material/Business";
import StarIcon from "@mui/icons-material/Star";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import FolderIcon from "@mui/icons-material/Folder";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimelineIcon from "@mui/icons-material/Timeline";
import LinearProgressBar from "../../components/LinearProgressBar";
import ProjectProgress from "../../components/ProjectProgress";

function UserDashboard() {
  return (
    <Box className="flex flex-col min-h-screen mt-20 p-4 md:p-8">
      {/* Main Dashboard Section */}
      <Box className="mb-8">
        <Box className="flex flex-col md:flex-row justify-between items-center mb-6">
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }} className="text-yellow-400">
              Dashboard
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              This is the user dashboard overview.
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            sx={{
              backgroundColor: "#D97706",
              color: "white",
              "&:hover": { backgroundColor: "#CA8A04" },
            }}
            className="mt-4 md:mt-0"
          >
            Export Data
          </Button>
        </Box>
      </Box>

      {/* Overview Cards Section */}
      <Grid container spacing={4} className="mb-8">
        {[
          {
            title: "Total Projects",
            icon: <BusinessIcon sx={{ fontSize: 50 }} className="text-yellow-600" />,
            count: 30,
            description: "Total number of projects created.",
          },
          {
            title: "Favorite Projects",
            icon: <StarIcon sx={{ fontSize: 50 }} className="text-yellow-600" />,
            count: 5,
            description: "Projects marked as favorites.",
          },
          {
            title: "Takeoff Requests",
            icon: <RequestQuoteIcon sx={{ fontSize: 50 }} className="text-yellow-600" />,
            count: 10,
            description: "Requests submitted for project takeoffs.",
          },
          {
            title: "My Projects",
            icon: <FolderIcon sx={{ fontSize: 50 }} className="text-yellow-600" />,
            count: 15,
            description: "Projects you are currently managing.",
          },
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.02)" },
                textAlign: "center",
              }}
            >
              <CardContent>
                {card.icon}
                <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
                  {card.count}
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                  {card.description}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body1" sx={{ color: "textSecondary" }}>
                  {card.title}
                </Typography>
                <Typography variant="caption" className="text-gray-500">
                  Since January 2023
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Project Progress and Top Projects Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Box className="flex items-center mb-4">
                <TimelineIcon sx={{ fontSize: 40, color: "#D97706" }} />
                <Typography variant="h5" sx={{ fontWeight: "bold", ml: 2 }} className="text-yellow-600">
                  Project Progress
                </Typography>
              </Box>
              <Typography variant="body1" className="text-gray-500 mb-2">
                Chart showing the progress of your projects.
              </Typography>
              <ProjectProgress />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Box className="flex items-center mb-4">
                <TrendingUpIcon sx={{ fontSize: 40, color: "#D97706" }} />
                <Typography variant="h5" sx={{ fontWeight: "bold", ml: 2 }} className="text-yellow-600">
                  Top Projects
                </Typography>
              </Box>
              <Typography variant="body1" className="text-gray-500 mb-2">
                Progress of your top projects.
              </Typography>
              {[
                { name: "Home Construction", progress: 50 },
                { name: "Office Construction", progress: 70 },
                { name: "Retail Construction", progress: 30 },
                { name: "Hotel Construction", progress: 90 },
              ].map((project, index) => (
                <LinearProgressBar key={index} projectName={project.name} value={project.progress} />
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Projects Shown on World Map Section */}
      {/* Uncomment this section if needed */}
      {/* <Grid container spacing={4} className="mt-8">
        <Grid item xs={12}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Box className="flex items-center mb-4">
                <LocationOnIcon sx={{ fontSize: 40, color: '#D97706' }} />
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 'bold', ml: 2 }}
                  className="text-yellow-600"
                >
                  Project Location
                </Typography>
              </Box>
              <Typography variant="body1" className="text-gray-500">
                Projects shown on a world map.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
    </Box>
  );
}

export default UserDashboard;
