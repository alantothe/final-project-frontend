import React from "react";
import { Box } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const OnlineIndicator = () => {
  return (
    <Box
      sx={{
        color: "#3ba55d",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        right: "5px",
      }}
    >
      <PersonOutlineOutlinedIcon />
    </Box>
  );
};

export default OnlineIndicator;
