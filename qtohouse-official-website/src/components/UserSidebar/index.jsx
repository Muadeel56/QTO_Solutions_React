import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MenuIcon from "@mui/icons-material/Menu";

function UserSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false); // Sidebar toggle state

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed); // Toggle sidebar collapse
  };

  return (
    <div className="absolute max-h-full">
      <Sidebar
        collapsed={isCollapsed}
        backgroundColor="#1F2937"
        className=" mx-6 my-8 w-64 h-full shadow-lg rounded-lg"
      >
        <Menu iconShape="square">
          {/* Toggle Sidebar Button */}
          <MenuItem
            icon={<MenuIcon />}
            onClick={toggleSidebar}
            className="text-yellow-500"
          >
            {isCollapsed ? "" : "Minimize"}
          </MenuItem>

          {/* Dashboard Menu Item */}
          <MenuItem
            className="text-yellow-500"
            icon={<DashboardIcon sx={{ color: "#D97706" }} />}
          >
            <Link to="/user/dashboard" className="text-yellow-500">
              Dashboard
            </Link>
          </MenuItem>

          {/* Companies SubMenu */}
          <SubMenu
            title="Companies"
            label="Companies"
            className="text-yellow-500"
            icon={<BusinessIcon sx={{ color: "#D97706" }} />}
          >
            <MenuItem className="text-yellow-500">
              <Link to="/user/list-companies" className="text-yellow-500">
                List of Companies
              </Link>
            </MenuItem>
            <MenuItem className="text-yellow-500">
              <Link to="/user/create-company" className="text-yellow-500">
                Create Company
              </Link>
            </MenuItem>
          </SubMenu>

          {/* Users SubMenu */}
          <SubMenu
            title="Users"
            label="Users"
            className="text-yellow-500"
            icon={<GroupIcon sx={{ color: "#D97706" }} />}
          >
            <MenuItem className="text-yellow-500">
              <Link to="/user/users" className="text-yellow-500">
                Users
              </Link>
            </MenuItem>
            <MenuItem className="text-yellow-500">
              <Link to="/user/user-groups" className="text-yellow-500">
                Groups
              </Link>
            </MenuItem>
            <MenuItem className="text-yellow-500">
              <Link to="/user/permissions" className="text-yellow-500">
                Permissions
              </Link>
            </MenuItem>
          </SubMenu>

          {/* Projects SubMenu */}
          <SubMenu
            title="Projects"
            label="Projects"
            className="text-yellow-500"
            icon={<WorkIcon sx={{ color: "#D97706" }} />}
          >
            <MenuItem className="text-yellow-500">
              <Link to="/user/project-list" className="text-yellow-500">
                List of Projects
              </Link>
            </MenuItem>
            <MenuItem className="text-yellow-500">
              <Link to="/user/create-project" className="text-yellow-500">
                Create Project
              </Link>
            </MenuItem>

            {/* Bid Calendar Menu Item */}
          </SubMenu>
          {/* Edit Profile Menu Item */}
          <MenuItem
            className="text-yellow-500"
            icon={<EditIcon sx={{ color: "#D97706" }} />}
          >
            <Link to="/user/edit-profile" className="text-yellow-500">
              Edit Profile
            </Link>
          </MenuItem>

          {/* Favorite Projects Menu Item */}
          <MenuItem
            className="text-yellow-500"
            icon={<FavoriteIcon sx={{ color: "#D97706" }} />}
          >
            <Link to="/user/favourites" className="text-yellow-500">
              Favourite Projects
            </Link>
          </MenuItem>

          <MenuItem
            className="text-yellow-500"
            icon={<CalendarTodayIcon sx={{ color: "#D97706" }} />}
          >
            <Link to="/user/calendar" className="text-yellow-500">
              Bid Calendar
            </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default UserSidebar;
