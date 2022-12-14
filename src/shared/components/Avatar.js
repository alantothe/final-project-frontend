import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";


// An array of possible colors
const colors = ["#000000", "#000000", "#000000", "#000000", "#000000", "#1c1c1c", "#3c3c3c", "#5c5c5c", "#7c7c7c", "#9c9c9c"];


// AvatarPreview component that uses the bgColor prop as the background color
const AvatarPreview = styled("div")(({ bgColor, random }) => ({
  height: "42px",
  width: "42px",
  backgroundColor: random ? bgColor : "white", // Use the selected color if the random prop is true, otherwise use white
  borderRadius: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "700",
  marginLeft: "5px",
  color: "white",
}));

const Avatar = ({ username, large, random }) => {
  // Use the useState hook to store the selected color in component state
  const [bgColor, setBgColor] = useState("#5865f2");

  // Use useEffect to select a random color only once when the component mounts
  useEffect(() => {
    // If the random prop is true, select a random color
    if (random) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
    }
  }, []); // The empty array means that the code will run only once

  return (
    <AvatarPreview
      style={large ? { height: "80px", width: "80px" } : {}}
      random={random} // Pass the random prop to the AvatarPreview component
      bgColor={bgColor} // Use the bgColor from state
    >
      {String(username).slice(0, 2)}
    </AvatarPreview>
  );
};

export default Avatar;


