import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MenuIcon from '@mui/icons-material/Menu';

function UserSidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      <div
        className={`fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={toggleSidebar}
      />

      <div className={`fixed inset-y-0 left-0 z-40 w-64 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0 bg-gray-800`}>
        <Sidebar backgroundColor="#1f2937" className="min-h-screen w-64 shadow-lg rounded-r-2xl">
          <Menu iconShape="square">
            {/* Toggle Sidebar Button */}
            <MenuItem
              icon={<MenuIcon />}
              onClick={toggleSidebar}
              className="text-white hover:bg-gray-700"
            >
              {isOpen ? '' : 'Minimize'}
            </MenuItem>

            {/* Dashboard Menu Item */}
            <MenuItem className="text-white hover:bg-red-700 hover:text-yellow-400" icon={<DashboardIcon sx={{ color: '#fbbf24' }} />}>
              <Link to="/user/dashboard" className="text-white hover:text-yellow-400">Dashboard</Link>
            </MenuItem>

            {/* Companies SubMenu */}
            <SubMenu title="Companies" className="text-white hover:bg-gray-700 hover:text-yellow-400" icon={<BusinessIcon sx={{ color: '#fbbf24' }} />}>
              <MenuItem className="text-white hover:text-yellow-400">
                <Link to="/user/list-companies" className="text-white hover:text-yellow-400">List of Companies</Link>
              </MenuItem>
              <MenuItem className="text-white hover:text-yellow-400">
                <Link to="/user/create-company" className="text-white hover:text-yellow-400">Create Company</Link>
              </MenuItem>
            </SubMenu>

            {/* Users SubMenu */}
            <SubMenu title="Users" className="text-white hover:bg-gray-700 hover:text-yellow-400" icon={<PeopleIcon sx={{ color: '#fbbf24' }} />}>
              <MenuItem className="text-white hover:text-yellow-400">
                <Link to="/user/users" className="text-white hover:text-yellow-400">Users</Link>
              </MenuItem>
              <MenuItem className="text-white hover:text-yellow-400">
                <Link to="/user/user-groups" className="text-white hover:text-yellow-400">Groups</Link>
              </MenuItem>
              <MenuItem className="text-white hover:text-yellow-400">
                <Link to="/user/permissions" className="text-white hover:text-yellow-400">Permissions</Link>
              </MenuItem>
            </SubMenu>

            {/* Projects SubMenu */}
            <SubMenu title="Projects" className="text-white hover:bg-gray-700 hover:text-yellow-400" icon={<GroupIcon sx={{ color: '#fbbf24' }} />}>
              <MenuItem className="text-white hover:text-yellow-400">
                <Link to="/user/project-list" className="text-white hover:text-yellow-400">List of Projects</Link>
              </MenuItem>
              <MenuItem className="text-white hover:text-yellow-400">
                <Link to="/user/create-project" className="text-white hover:text-yellow-400">Create Project</Link>
              </MenuItem>
            </SubMenu>

            {/* Favorite Projects Menu Item */}
            <MenuItem className="text-white hover:bg-gray-700 hover:text-yellow-400" icon={<FavoriteIcon sx={{ color: '#fbbf24' }} />}>
              <Link to="/user/favourites" className="text-white hover:text-yellow-400">Favorite Projects</Link>
            </MenuItem>

            {/* Edit Profile Menu Item */}
            <MenuItem className="text-white hover:bg-gray-700 hover:text-yellow-400" icon={<EditIcon sx={{ color: '#fbbf24' }} />}>
              <Link to="/user/edit-profile" className="text-white hover:text-yellow-400">Edit Profile</Link>
            </MenuItem>

            {/* Bid Calendar Menu Item */}
            <MenuItem className="text-white hover:bg-gray-700 hover:text-yellow-400" icon={<CalendarTodayIcon sx={{ color: '#fbbf24' }} />}>
              <Link to="/user/calendar" className="text-white hover:text-yellow-400">Bid Calendar</Link>
            </MenuItem>

            {/* Additional Options SubMenu */}
            <SubMenu title="Additional Options" className="text-white hover:bg-gray-700 hover:text-yellow-400" icon={<SettingsIcon sx={{ color: '#fbbf24' }} />}>
              <MenuItem className="text-white hover:text-yellow-400">
                <Link to="/user/settings" className="text-white hover:text-yellow-400">Settings</Link>
              </MenuItem>
              <MenuItem className="text-white hover:text-yellow-400">
                <Link to="/user/help" className="text-white hover:text-yellow-400">Help</Link>
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}

export default UserSidebar;
