import React from "react";

import AuthBox from "../shared/AuthBox"
import { Typography } from "@mui/material";

import LoginPageInputs from "./LoginPageInput";
import LoginButton from "./LoginButton";
import { useState, useEffect } from "react";
import { validateLoginForm } from "../shared/utilities/validators";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ login }) => {

  const navigate = useNavigate()


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false) // will enable the login button once email and password are valid.

  useEffect (() => {
    setIsFormValid (validateLoginForm({ email, password }));
    }, [email, password, setIsFormValid]);


    // login function sends userDetails to Server
  const handleLogin = () => {
    const userDetails = {
      email,
      password,
    }
    login(userDetails, navigate)
    console.log(userDetails)
    console.log("Login Successful ")
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

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
};

export default connect(null, mapActionsToProps)(LoginPage);