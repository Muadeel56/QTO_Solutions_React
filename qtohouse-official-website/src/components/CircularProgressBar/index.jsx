import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

function CircularProgressBar({ percentage, color }) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={percentage}
        sx={{ color: color, thickness: 5 }}
        size={80}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
          fontSize={18}
          fontWeight="bold"
        >{`${Math.round(percentage)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default CircularProgressBar;
