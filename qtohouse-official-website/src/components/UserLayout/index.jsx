import React from 'react';
import UserSidebar from '../UserSidebar';
import { Box } from '@mui/material';

function UserLayout({ children }) {
  return (
    <Box className="flex flex-col min-h-screen">
      {/* Layout containing Sidebar and Main Content */}
      <Box sx={{ display: 'flex', flexGrow: 1, marginTop: '30px' }}>
        {/* Sidebar */}
        <UserSidebar />

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: '#F1F5F9',
            minHeight: 'calc(100vh - 80px)',
            marginLeft: '270px', // Align the main content correctly beside the sidebar
          }}
          className="font-poppins"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default UserLayout;
