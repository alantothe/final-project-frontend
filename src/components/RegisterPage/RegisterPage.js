import { useState } from "react";
import AuthBox from "../shared/AuthBox";
import React  from "react";
import { useEffect } from "react";

import { Typography } from "@mui/material";

import RegisterPageInputs from "./RegisterPageInputs";
import RegisterButton from "./RegisterPageButton";
import { validateRegisterForm } from "../shared/utilities/validators";

import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";


const RegisterPage = ({register} ) => {

  const navigate = useNavigate()

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

  // register function sends userDetails to server
  const handleRegister = () => {
    const userDetails = {
      email,
      password,
      username,
    }
    register(userDetails, navigate)
    console.log(userDetails)
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


const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
};

export default connect(null, mapActionsToProps)(RegisterPage);