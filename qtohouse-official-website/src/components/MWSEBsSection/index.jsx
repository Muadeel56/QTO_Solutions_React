import React from 'react';
import {
  Box,
  Grid,
  TextField,
  InputAdornment,
  Typography,
  Paper
} from '@mui/material';

function MWSEBsSection() {
  return (
    <Paper elevation={3} sx={{ padding: '24px', borderRadius: '16px', marginTop: '2rem' }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom color="#d97706">
        MWSEBs and SDVOBs
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="MBE (%)"
            placeholder="Enter percentage"
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            sx={{ backgroundColor: 'white', borderRadius: '8px' }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="WBE (%)"
            placeholder="Enter percentage"
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            sx={{ backgroundColor: 'white', borderRadius: '8px' }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="SDVOB (%)"
            placeholder="Enter percentage"
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            sx={{ backgroundColor: 'white', borderRadius: '8px' }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="EEO (%)"
            placeholder="Enter percentage"
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            sx={{ backgroundColor: 'white', borderRadius: '8px' }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MWSEBsSection;
