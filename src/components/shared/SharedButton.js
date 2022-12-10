import React from "react";
import Button from "@mui/material/Button";



const CustomButton = ({
  label,
  additionalStyles,
  disabled,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "blue",
        color: "white",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        width: "100%",
        height: "40px",
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={!disabled}// will enable once isFormValid is ran
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;