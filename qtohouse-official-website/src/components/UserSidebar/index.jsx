import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CloseIcon from "@mui/icons-material/Close";

function UserSidebar({ menuOpen, toggleSidebar, isSmallScreen }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 shadow-lg text-white transform ${
        isSmallScreen
          ? menuOpen
            ? "translate-x-0"
            : "-translate-x-full"
          : "translate-x-0"
      } transition-transform duration-300 ease-in-out md:relative md:w-64 md:bg-gray-800`}
    >
      {/* Close button for small screens */}
      {isSmallScreen && (
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Menu</h1>
          <button onClick={toggleSidebar}>
            <CloseIcon fontSize="large" className="text-white" />
          </button>
        </div>
      )}

      {/* Sidebar content */}
      <Sidebar backgroundColor="transparent" className="h-full">
        <Menu iconShape="square">
          <Link to="/user/dashboard" onClick={toggleSidebar} className="text-yellow-500">
            <MenuItem icon={<DashboardIcon sx={{ color: "#D97706" }} />}>
              Dashboard
            </MenuItem>
          </Link>
          <SubMenu title="Companies" icon={<BusinessIcon sx={{ color: "#D97706" }} />}>
            <Link to="/user/list-companies" onClick={toggleSidebar} className="text-yellow-500">
              <MenuItem>List of Companies</MenuItem>
            </Link>
            <Link to="/user/create-company" onClick={toggleSidebar} className="text-yellow-500">
              <MenuItem>Create Company</MenuItem>
            </Link>
          </SubMenu>
          <SubMenu title="Users" icon={<GroupIcon sx={{ color: "#D97706" }} />}>
            <Link to="/user/users" onClick={toggleSidebar} className="text-yellow-500">
              <MenuItem>Users</MenuItem>
            </Link>
            <Link to="/user/user-groups" onClick={toggleSidebar} className="text-yellow-500">
              <MenuItem>Groups</MenuItem>
            </Link>
            <Link to="/user/permissions" onClick={toggleSidebar} className="text-yellow-500">
              <MenuItem>Permissions</MenuItem>
            </Link>
          </SubMenu>
          <SubMenu title="Projects" icon={<WorkIcon sx={{ color: "#D97706" }} />}>
            <Link to="/user/project-list" onClick={toggleSidebar} className="text-yellow-500">
              <MenuItem>List of Projects</MenuItem>
            </Link>
            <Link to="/user/create-project" onClick={toggleSidebar} className="text-yellow-500">
              <MenuItem>Create Project</MenuItem>
            </Link>
          </SubMenu>
          <Link to="/user/edit-profile" onClick={toggleSidebar} className="text-yellow-500">
            <MenuItem icon={<EditIcon sx={{ color: "#D97706" }} />}>Edit Profile</MenuItem>
          </Link>
          <Link to="/user/favourites" onClick={toggleSidebar} className="text-yellow-500">
            <MenuItem icon={<FavoriteIcon sx={{ color: "#D97706" }} />}>
              Favourite Projects
            </MenuItem>
          </Link>
          <Link to="/user/calendar" onClick={toggleSidebar} className="text-yellow-500">
            <MenuItem icon={<CalendarTodayIcon sx={{ color: "#D97706" }} />}>
              Bid Calendar
            </MenuItem>
          </Link>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default UserSidebar;
