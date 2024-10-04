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
    <div className='absolute'>
      <Sidebar>
        <Menu iconShape="square">
          <MenuItem className='text-yellow-600' icon={<DashboardIcon sx={{ color: '#D97706' }} />}>
            <Link to="/dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem className='text-yellow-600' icon={<PersonIcon />}>
            <Link to="/profile">Profile</Link>
          </MenuItem>
          <MenuItem className='text-yellow-600' icon={<FavoriteIcon />}>
            <Link to="/favourites">Favourite Projects</Link>
          </MenuItem>
          <MenuItem className='text-yellow-600' icon={<EditIcon />}>
            <Link to="/edit-profile">Edit Profile</Link>
          </MenuItem>
          <MenuItem className='text-yellow-600' icon={<CalendarTodayIcon />}>
            <Link to="/bid-calendar">Bid Calendar</Link>
          </MenuItem>
          <SubMenu className='text-yellow-600' title="Additional Options" icon={<AttachMoneyIcon />}>
            <MenuItem className='text-yellow-600'>
              <Link to="/settings">Settings</Link>
            </MenuItem>
            <MenuItem className='text-yellow-600'>
              <Link to="/help">Help</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default UserSidebar;
