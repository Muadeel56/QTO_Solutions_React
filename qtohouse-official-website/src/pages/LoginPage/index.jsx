import React from "react";
import junior from "/images/junior.png";
import { TextField, Button } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

function LoginPage() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <img
        src={junior}
        alt="junior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content over Image */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md space-y-8 mt-[-100px]">
          <h1 className="text-3xl font-bold text-gray-800 text-center">Login</h1>
          
          <div className="space-y-6">
            {/* Username Field */}
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Username"
              InputProps={{
                startAdornment: (
                  <AccountCircle className="text-gray-500 mr-2" />
                ),
              }}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              type="password"
              variant="outlined"
              placeholder="Password"
              InputProps={{
                startAdornment: (
                  <LockIcon className="text-gray-500 mr-2" />
                ),
              }}
            />

            {/* Login Button */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#FFD700',
                color: '#000',
                padding: '10px',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#FFC000' }
              }}
            >
              Login
            </Button>
          </div>

          {/* Register Section */}
          <div className="text-center space-y-4">
            <p className="text-gray-600">Don't have an account?</p>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#FFD700',
                color: '#FFD700',
                '&:hover': { borderColor: '#FFC000', color: '#FFC000' }
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
