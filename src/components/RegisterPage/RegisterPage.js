import { useState } from "react";
import AuthBox from "../shared/AuthBox";
import React  from "react";


import { Typography } from "@mui/material";

import RegisterPageInputs from "./RegisterPageInputs";


const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [isFormValid, setIsFormValid] = useState(false);


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




    </AuthBox>
   </div>
  );
};


export default RegisterPage;