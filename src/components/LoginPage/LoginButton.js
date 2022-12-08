import React from "react";
import CustomButton from "../shared/SharedButton";
import RedirectInfo from "../shared/RedirectInfo";
import {useNavigate} from "react-router-dom"



const LoginButton = ({ handleLogin, isFormValid }) => {

  const navigate = useNavigate()

  const handlePushToRegisterPage =() => {navigate('/register')}







  return (
      <>
        <div>
          <CustomButton
            label="LOG IN"
            additionalStyles={{ marginTop: "30px" }}
            disabled={isFormValid}
            onClick={handleLogin}
          />

        </div>
        <RedirectInfo
        text="Need an account?"
        redirectText={"Create an account"}
        additionalStyles={{marginTop: "5px"}}
        redirectHandler={ handlePushToRegisterPage}/>
        </>


  );
};

export default LoginButton;