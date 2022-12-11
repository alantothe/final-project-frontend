import React from "react";
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

// Avatar component that selects a random color if the random prop is true
const Avatar = ({ username, large, random }) => {
  // Use the random prop to determine whether to use a random color or a default color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const bgColor = random ? randomColor : "#5865f2";

  return (
    <AvatarPreview
      style={large ? { height: "80px", width: "80px" } : {}}
      random={random} // Pass the random prop to the AvatarPreview component
      bgColor={bgColor} // Pass the bgColor prop to the AvatarPreview component
    >
      {String(username).slice(0, 2)}
    </AvatarPreview>
  );
};

export default Avatar;

