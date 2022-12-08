import React from "react";
import CustomButton from "../shared/SharedButton";
import RedirectInfo from "../shared/RedirectInfo";
import {useNavigate} from "react-router-dom"
// hover info
import { Tooltip } from "@mui/material";


const getFormNotValidMessage = () => {
  return "Enter valid email address. Username and Password with a minimum of 6 characters"
}

const getFormValidMessage = () =>{
  return "Register "
}


const RegisterButton = ({ handleRegister, isFormValid }) => {

  const navigate = useNavigate()

  const handlePushToLoginPage =() => {navigate('/login')}







  return (
      <>
      <Tooltip
      title={!isFormValid ? getFormNotValidMessage(): getFormValidMessage() }>
        <div>
          <CustomButton
            label="REGISTER"
            additionalStyles={{ marginTop: "30px" }}
            disabled={isFormValid}
            onClick={handleRegister}
          />

        </div>
        </Tooltip>
        <RedirectInfo
        text="Already have an account?"
        redirectText={"Back to Log-In"}
        additionalStyles={{marginTop: "5px"}}
        redirectHandler={ handlePushToLoginPage}/>
        </>


  );
};

export default RegisterButton;

