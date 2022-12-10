import React from "react";
import CustomButton from "../shared/SharedButton";
import RedirectInfo from "../shared/RedirectInfo";
import {useNavigate} from "react-router-dom"
// hover info
import { Tooltip } from "@mui/material";


const getFormNotValidMessage = () => {
  return "Enter valid email address and password with a minimum of 6 characters"
}

const getFormValidMessage = () =>{
  return "Log In "
}


const LoginButton = ({ handleLogin, isFormValid }) => {

  const navigate = useNavigate()

  const handlePushToRegisterPage =() => {navigate('/register')}







  return (
      <>
      <Tooltip
      title={!isFormValid ? getFormNotValidMessage(): getFormValidMessage() }>
        <div>
          <CustomButton
            label="LOG IN"
            additionalStyles={{ marginTop: "30px" }}
            disabled={isFormValid}
            onClick={handleLogin}
          />

        </div>
        </Tooltip>
        <RedirectInfo
        text="Need an account?"
        redirectText={"Create an account"}
        additionalStyles={{marginTop: "5px"}}
        redirectHandler={ handlePushToRegisterPage}/>
        </>


  );
};

export default LoginButton;


