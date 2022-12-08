import React from "react";

import AuthBox from "../shared/AuthBox"
import { Typography } from "@mui/material";

import LoginPageInputs from "./LoginPageInput";
import LoginButton from "./LoginButton";
import { useState } from "react";

const LoginPage = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false)
  const handleLogin = () => {

  }




  return (
   <div>
    <AuthBox>
    {/*Header*/}.
    <Typography variant='h5' sx={{color : "white"}}>WELCOME BACK!</Typography>
    <Typography variant='h7' sx={{color : "grey"}}>Please Sign In</Typography>
    {/*Header Ends*/}.
    <LoginPageInputs email ={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
    {/*Footer*/}.
    <LoginButton isFormValid={isFormValid} handleLogin={handleLogin}/>


    {/*Footer Ends*/}.

     </AuthBox>
   </div>
  );
};


export default LoginPage;