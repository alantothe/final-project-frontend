import React from "react";
import CustomButton from "../../shared/components/CustomButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "Enter correct e-email address and password should contains between 6 and 12 characters";
};

const getFormValidMessage = () => {
  return "Press to log in!";
};

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomButton
            label="Log in"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
