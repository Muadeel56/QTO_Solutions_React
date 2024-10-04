import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: 'orange',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));

const LinearProgressBar = ({ projectName, value }) => {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1, mb: 2 }}>
      <Typography variant="h6" className="text-gray-800">
        {projectName}
      </Typography>
      <BorderLinearProgress variant="determinate" value={value} />
      <Typography variant="body2" className="text-gray-600">
        {value}%
      </Typography>
    </Stack>
  );
};

export default LinearProgressBar;
