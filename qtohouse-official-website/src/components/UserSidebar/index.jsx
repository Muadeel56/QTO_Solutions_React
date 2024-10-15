import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function UserSidebar() {
  return (
    <div className="absolute h-full">
      <Sidebar backgroundColor="#" className="w-64 h-full shadow-lg rounded-lg">
        <Menu iconShape="square">
          {/* Dashboard Menu Item */}
          <MenuItem className="text-yellow-500" icon={<DashboardIcon sx={{ color: '#D97706' }} />}>
            <Link to="/user/dashboard" className="text-yellow-500">Dashboard</Link>
          </MenuItem>

          {/* Profile Menu Item */}
          <SubMenu title="Companies" label="Companies" className="text-yellow-500" icon={<PersonIcon sx={{ color: '#D97706' }} />}> 
            <MenuItem className="text-yellow-500">
              <Link to="/user/list-companies" className="text-yellow-500">List of Companies</Link>
            </MenuItem>
            <MenuItem className="text-yellow-500">
              <Link to="/user/create-company" className="text-yellow-500">Create Company</Link>
            </MenuItem>
          </SubMenu>

          <MenuItem className="text-yellow-500" icon={<FavoriteIcon sx={{ color: '#D97706' }} />}>
            <Link to="/user/users" className="text-yellow-500">Users</Link>
          </MenuItem>

          {/* Favorite Projects Menu Item */}
          <MenuItem className="text-yellow-500" icon={<FavoriteIcon sx={{ color: '#D97706' }} />}>
            <Link to="/user/favourites" className="text-yellow-500">Favourite Projects</Link>
          </MenuItem>

          {/* Edit Profile Menu Item */}
          <MenuItem className="text-yellow-500" icon={<EditIcon sx={{ color: '#D97706' }} />}>
            <Link to="/user/edit-profile" className="text-yellow-500">Edit Profile</Link>
          </MenuItem>

          {/* Bid Calendar Menu Item */}
          <MenuItem className="text-yellow-500" icon={<CalendarTodayIcon sx={{ color: '#D97706' }} />}>
            <Link to="/user/calendar" className="text-yellow-500">Bid Calendar</Link>
          </MenuItem>

          {/* SubMenu for Additional Options */}
          <SubMenu title="Additional Options" className="text-yellow-500" icon={<AttachMoneyIcon sx={{ color: '#D97706' }} />}>
            <MenuItem className="text-yellow-500">
              <Link to="/user/settings" className="text-yellow-500">Settings</Link>
            </MenuItem>
            <MenuItem className="text-yellow-500">
              <Link to="/user/help" className="text-yellow-500">Help</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default UserSidebar;
