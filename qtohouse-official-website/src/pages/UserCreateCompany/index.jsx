import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  InputAdornment,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SaveIcon from "@mui/icons-material/Save";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ConstructionIcon from "@mui/icons-material/Construction";

function UserCreateCompany() {
  return (
    <Box sx={{ flexGrow: 1, padding: "2rem" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: "16px", textAlign: "center" }}
        className="text-yellow-600"
      >
        Create New Company
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: "24px", textAlign: "center" }}
        className="text-gray-600"
      >
        Complete the form below to add a new company profile.
      </Typography>

      <Grid container spacing={4}>
        {/* Company Information */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: "16px", borderRadius: "16px", height: "100%" }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "12px"}}
              className="text-yellow-600"
            >
              Company Information
            </Typography>
            <TextField
              fullWidth
              label="Company Name"
              placeholder="Enter company name"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BusinessIcon sx={{ color: "#ca8a04" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Location"
              placeholder="Enter location"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon sx={{ color: "#ca8a04" }} />
                  </InputAdornment>
                ),
              }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  select
                  label="Country"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PublicIcon sx={{ color: "#ca8a04" }} />
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value="US">United States</MenuItem>
                  <MenuItem value="UK">United Kingdom</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  select
                  label="State"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon sx={{ color: "#ca8a04" }} />
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value="CA">California</MenuItem>
                  <MenuItem value="NY">New York</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <TextField fullWidth label="Zip Code" margin="normal" />
            <TextField
              fullWidth
              label="Website"
              placeholder="Enter website URL"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PublicIcon sx={{ color: "#ca8a04" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Paper>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: "16px", borderRadius: "16px", height: "100%" }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "12px", color: "#ca8a04" }}
            >
              Contact Information
            </Typography>
            <TextField
              fullWidth
              label="Person Name"
              placeholder="Enter contact person's name"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BusinessIcon sx={{ color: "#ca8a04" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Location"
              placeholder="Enter location"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon sx={{ color: "#ca8a04" }} />
                  </InputAdornment>
                ),
              }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  select
                  label="Country"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PublicIcon sx={{ color: "#ca8a04" }} />
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value="US">United States</MenuItem>
                  <MenuItem value="UK">United Kingdom</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  select
                  label="State"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon sx={{ color: "#ca8a04" }} />
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value="CA">California</MenuItem>
                  <MenuItem value="NY">New York</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <TextField fullWidth label="Zip Code" margin="normal" />
            <TextField
              fullWidth
              label="Email"
              placeholder="Enter email"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon sx={{ color: "#ca8a04" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Phone"
              placeholder="Enter phone number"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon sx={{ color: "#ca8a04" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Paper>
        </Grid>

        {/* Company Details */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "16px", borderRadius: "16px" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "12px", color: "#ca8a04" }}
            >
              Company Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Year Founded"
                  placeholder="dd/mm/yyyy"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarTodayIcon sx={{ color: "#ca8a04" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  select
                  label="Type of Construction"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ConstructionIcon sx={{ color: "#ca8a04" }} />
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value="Residential">Residential</MenuItem>
                  <MenuItem value="Commercial">Commercial</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Size"
                  placeholder="Enter company size"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Contractor Type"
                  placeholder="Enter contractor type"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="CSI Divisions"
                  placeholder="Enter CSI divisions"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Financial Information"
                  placeholder="Enter financial information"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Notes/Comments"
                  placeholder="Enter notes or comments"
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Action Buttons */}
        <Grid item xs={12} textAlign="right" sx={{ marginTop: "16px" }}>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteOutlineIcon />}
            sx={{ marginRight: "8px" }}
          >
            Delete
          </Button>
          <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
            Create
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserCreateCompany;
