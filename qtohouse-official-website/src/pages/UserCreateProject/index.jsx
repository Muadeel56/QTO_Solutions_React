import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Button,
  Paper,
  MenuItem,
  Divider,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MWSEBsSection from "../../components/MWSEBsSection";

function UserCreateProject() {
  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header Section */}
      <Typography variant="h4" fontWeight="bold" mb={2} color="#ca8a04">
        Create Project
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={4}>
        Projects / Create Project
      </Typography>

      <Grid container spacing={3}>
        {/* Project Information Section */}
        <Grid item xs={12}>
          <Paper elevation={4} sx={{ padding: "24px", borderRadius: "16px" }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom color="#ca8a04">
              Project Information
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Project Title"
                  placeholder="Enter project title"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Location"
                  placeholder="Enter project location"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Country"
                  placeholder="Enter country"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PublicIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="State"
                  placeholder="Enter state"
                  sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="City" placeholder="Enter city" sx={{ backgroundColor: "#fff", borderRadius: "8px" }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Project Description"
                  placeholder="Enter description"
                  multiline
                  rows={4}
                  sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="CSI Divisions"
                  placeholder="Enter CSI Divisions"
                  sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Authority"
                  select
                  placeholder="Select Authority"
                  sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                >
                  <MenuItem value="authority1">Authority 1</MenuItem>
                  <MenuItem value="authority2">Authority 2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Sub Authority"
                  select
                  placeholder="Select Sub Authority"
                  sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                >
                  <MenuItem value="sub1">Sub Authority 1</MenuItem>
                  <MenuItem value="sub2">Sub Authority 2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Status"
                  select
                  placeholder="Select Status"
                  sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                >
                  <MenuItem value="status1">Active</MenuItem>
                  <MenuItem value="status2">Pending</MenuItem>
                </TextField>
              </Grid>

              {/* Document Upload Section */}
              <Grid item xs={12}>
                <Typography variant="h6" mt={4}>
                  Upload Documents
                </Typography>
                <Divider sx={{ mb: 2 }} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button variant="outlined" fullWidth startIcon={<UploadFileIcon />} sx={{ padding: "10px", borderRadius: "8px" }}>
                  Upload Project Plans
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button variant="outlined" fullWidth startIcon={<UploadFileIcon />} sx={{ padding: "10px", borderRadius: "8px" }}>
                  Upload Project Specs
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button variant="outlined" fullWidth startIcon={<UploadFileIcon />} sx={{ padding: "10px", borderRadius: "8px" }}>
                  Upload Take-Offs
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Bid Information Section */}
        <Grid item xs={12}>
          <Paper elevation={4} sx={{ padding: "24px", borderRadius: "16px" }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom color="#d97706">
              Bid Information
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Bidding Method"
                  select
                  placeholder="Select Bidding Method"
                  sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                >
                  <MenuItem value="open">Open</MenuItem>
                  <MenuItem value="closed">Closed</MenuItem>
                  <MenuItem value="selective">Selective</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Bidding Phase"
                  select
                  placeholder="Select Bidding Phase"
                  sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                >
                  <MenuItem value="pre-bid">Pre-Bid</MenuItem>
                  <MenuItem value="open">Open Solicitation</MenuItem>
                  <MenuItem value="post-bid">Post-Bid</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Project Completion Time"
                  placeholder="Enter completion time"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBalanceIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Pre Bid Meeting Date"
                  placeholder="Select date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Bid Amount"
                  placeholder="Enter bid amount"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoneyIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Bid Date"
                  placeholder="Select bid date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* MWSEBs Section */}
      <MWSEBsSection />

      {/* Submit Button */}
      <Box mt={4} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            fontWeight: "bold",
            padding: "10px 40px",
            borderRadius: "8px",
            backgroundColor: "#d97706",
            "&:hover": {
              backgroundColor: "#b45309",
            },
          }}
        >
          Create Project
        </Button>
      </Box>
    </Box>
  );
}

export default UserCreateProject;
