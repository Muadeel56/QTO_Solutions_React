import React from "react";
import {
  Button,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  IconButton,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import BusinessIcon from "@mui/icons-material/Business";
import StarIcon from "@mui/icons-material/Star";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import FolderIcon from "@mui/icons-material/Folder";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimelineIcon from "@mui/icons-material/Timeline";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircularProgressBar from "../../components/CircularProgressBar"; // Assume you have a circular progress bar component
import { green, red, orange } from "@mui/material/colors";

function UserDashboard() {
  return (
    <Box sx={{ padding: 3 }}>
      {/* Header Section */}
      <Box mb={3}>
        <Typography variant="h4" fontWeight="bold">
          Analytics
        </Typography>
        <Typography variant="subtitle2" color="gray">
          Dashboards / Analytics
        </Typography>
      </Box>

      {/* Statistics Cards */}
      <Grid container spacing={3} mb={5}>
        <Grid item xs={12} sm={6} lg={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                Users
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                28.07K
              </Typography>
              <Typography variant="caption" color={green[500]}>
                12% Increase vs Previous Month
              </Typography>
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <BusinessIcon fontSize="large" sx={{ color: green[500] }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                Sessions
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                97.67K
              </Typography>
              <Typography variant="caption" color={red[500]}>
                8% Decrease vs Previous Month
              </Typography>
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <StarIcon fontSize="large" sx={{ color: red[500] }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                Bounce Rate
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                40.57%
              </Typography>
              <Typography variant="caption" color={orange[500]}>
                5% Increase vs Previous Month
              </Typography>
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <RequestQuoteIcon fontSize="large" sx={{ color: orange[500] }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                Avg. Visit Duration
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                3m 40s
              </Typography>
              <Typography variant="caption" color={green[500]}>
                3% Increase vs Previous Month
              </Typography>
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <TimelineIcon fontSize="large" sx={{ color: green[500] }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Users by Device Section */}
      <Card sx={{ boxShadow: 3 }}>
        <Box p={3}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6" fontWeight="bold">
              Users By Device
            </Typography>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>

          <Grid container spacing={3} mt={3}>
            <Grid item xs={12} sm={4}>
              <CircularProgressBar percentage={45} color={green[500]} />
              <Typography mt={2} align="center">
                Desktop Users
              </Typography>
              <Typography variant="caption" color={green[500]} align="center">
                78.56K Users
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <CircularProgressBar percentage={35} color={red[500]} />
              <Typography mt={2} align="center">
                Mobile Users
              </Typography>
              <Typography variant="caption" color={red[500]} align="center">
                105.34K Users
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <CircularProgressBar percentage={20} color={orange[500]} />
              <Typography mt={2} align="center">
                Tablet Users
              </Typography>
              <Typography variant="caption" color={orange[500]} align="center">
                43.43K Users
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Additional Information */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Box display="flex" alignItems="center">
                <DesktopMacIcon sx={{ color: green[500], mr: 2 }} />
                <Typography>78.56K Desktop Users</Typography>
              </Box>
              <Typography variant="caption" color={green[500]}>
                12% Increase
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box display="flex" alignItems="center">
                <PhoneAndroidIcon sx={{ color: red[500], mr: 2 }} />
                <Typography>105.34K Mobile Users</Typography>
              </Box>
              <Typography variant="caption" color={red[500]}>
                8% Decrease
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box display="flex" alignItems="center">
                <TabletMacIcon sx={{ color: orange[500], mr: 2 }} />
                <Typography>43.43K Tablet Users</Typography>
              </Box>
              <Typography variant="caption" color={orange[500]}>
                3% Increase
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}

export default UserDashboard;
