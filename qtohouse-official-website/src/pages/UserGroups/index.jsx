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
  MenuItem,
  Menu,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function UserGroups() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header */}
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#ca8a04" }}>
        Groups
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={4}>
        Users / Groups
      </Typography>

      {/* Add Group, Filters, Import */}
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
            Add Group
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
              placeholder="Search groups..."
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
                defaultValue="Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AddIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <MenuItem value="Name">Name</MenuItem>
                <MenuItem value="Date">Date</MenuItem>
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
              <TableCell sx={{ fontWeight: "bold", color: "#ca8a04" }}>Group Name</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#ca8a04" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Sample group row */}
            {[
              { id: 1, groupName: "Admin Group" },
              { id: 2, groupName: "Managers Group" },
              { id: 3, groupName: "Developers Group" },
            ].map((group) => (
              <TableRow hover key={group.id}>
                <TableCell>{group.groupName}</TableCell>
                <TableCell>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton>
                    <PersonAddIcon />
                  </IconButton>
                  <IconButton onClick={handleMenuClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Assign User</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

export default UserGroups;
