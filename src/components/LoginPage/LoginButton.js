import React from "react";
import CustomButton from "../shared/SharedButton";



const LoginButton = ({ handleLogin, isFormValid }) => {




  return (

        <div>
          <CustomButton
            label="LOG IN"
            additionalStyles={{ marginTop: "30px" }}
            disabled={isFormValid}
            onClick={handleLogin}
          />
        </div>

  );
};

export default LoginButton;