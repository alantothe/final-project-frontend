import { useState } from "react";
import AuthBox from "../shared/AuthBox";
import React  from "react";
import { useEffect } from "react";

import { Typography } from "@mui/material";

import RegisterPageInputs from "./RegisterPageInputs";
import RegisterButton from "./RegisterPageButton";
import { validateRegisterForm } from "../shared/utilities/validators";


const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      validateRegisterForm({
        email,
        username,
        password,
      })
    );
  }, [email, username, password, setIsFormValid]);


  const handleRegister = () => {
    console.log("Register Successful ")

  }

  return(
    <div>
      {/*Header*/}.
    <AuthBox><Typography variant='h5' sx={{color : "white"}}>Register Here</Typography>
    {/*Header Ends*/}.
    <RegisterPageInputs
    email ={email}
    setEmail={setEmail}
    password={password}
    setPassword={setPassword}
    username={username}
    setUsername={setUsername}/>

    <RegisterButton
      isFormValid={isFormValid} handleRegister={handleRegister}
    />




    </AuthBox>
   </div>
  );
};


export default RegisterPage;