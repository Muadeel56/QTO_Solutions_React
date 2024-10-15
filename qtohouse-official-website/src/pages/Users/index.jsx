import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  MenuItem,
  Divider,
  Menu,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";

function Users() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header */}
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#ca8a04" }}>
        Users
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={4}>
        CRM / Users / Contractors
      </Typography>

      {/* Add User, Filters, Import */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "8px",
              backgroundColor: "#ca8a04",
              "&:hover": { backgroundColor: "#1565C0" },
            }}
          >
            Add User
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{
              mr: 2,
              padding: "8px 16px",
              borderRadius: "8px",
              borderColor: "#ca8a04",
              color: "#ca8a04",
              "&:hover": { borderColor: "#ca8a04", color: "#ca8a04" },
            }}
          >
            Filters
          </Button>
          <Button
            variant="outlined"
            startIcon={<ImportExportIcon />}
            sx={{
              mr: 2,
              padding: "8px 16px",
              borderRadius: "8px",
              borderColor: "#ca8a04",
              color: "#ca8a04",
              "&:hover": { borderColor: "#ca8a04", color: "#ca8a04" },
            }}
          >
            Import
          </Button>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>

      {/* Search and Sort */}
      <Box mt={4} mb={3}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              placeholder="Search for contractor..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center">
              <Typography variant="body2" color="textSecondary" sx={{ mr: 2 }}>
                Sort by:
              </Typography>
              <TextField
                select
                fullWidth
                defaultValue="Company"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BusinessIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <MenuItem value="Company">Company</MenuItem>
                <MenuItem value="Lead">Lead</MenuItem>
                <MenuItem value="Name">Name</MenuItem>
              </TextField>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Table Section */}
      <Paper
        elevation={3}
        sx={{
          padding: "16px",
          borderRadius: "16px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", color: "#ca8a04" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#ca8a04" }}>Company</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#ca8a04" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#ca8a04" }}>Phone</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#ca8a04" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#ca8a04" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Sample user row */}
            <TableRow hover>
              <TableCell>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar sx={{ backgroundColor: "#ca8a04" }}>
                      <PersonIcon />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" fontWeight="bold">
                      John Doe
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>Example Corp</TableCell>
              <TableCell>john.doe@example.com</TableCell>
              <TableCell>+1 123 456 7890</TableCell>
              <TableCell>
                <Typography variant="body2" color="green">
                  Active
                </Typography>
              </TableCell>
              <TableCell>
                <IconButton>
                  <PhoneIcon />
                </IconButton>
                <IconButton>
                  <MessageIcon />
                </IconButton>
                <IconButton onClick={handleMenuClick}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={menuAnchor}
                  open={Boolean(menuAnchor)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Assign Project</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      {/* User Details Section */}
      <Box mt={4}>
        <Paper
          elevation={3}
          sx={{
            padding: "24px",
            borderRadius: "16px",
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Avatar
                sx={{
                  width: 128,
                  height: 128,
                  marginBottom: "16px",
                  fontSize: "48px",
                  backgroundColor: "#ca8a04",
                }}
              >
                JD
              </Avatar>
              <Typography variant="h6">John Doe</Typography>
              <Typography variant="body2" color="textSecondary">
                Example Corp
              </Typography>
              <Grid container spacing={1} sx={{ mt: 2 }}>
                <Grid item>
                  <IconButton>
                    <PhoneIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <MessageIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={8}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Personal Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body1" fontWeight="bold">
                    Designation
                  </Typography>
                  <Typography variant="body2">Lead Designer / Developer</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" fontWeight="bold">
                    Email ID
                  </Typography>
                  <Typography variant="body2">john.doe@example.com</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" fontWeight="bold">
                    Phone
                  </Typography>
                  <Typography variant="body2">+1 123 456 7890</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" fontWeight="bold">
                    Lead Score
                  </Typography>
                  <Typography variant="body2">10</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" fontWeight="bold">
                    Tags
                  </Typography>
                  <Typography variant="body2">Tag 1, Tag 2</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" fontWeight="bold">
                    Last Contacted
                  </Typography>
                  <Typography variant="body2">01/01/2024</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}

export default Users;
