import React from "react";
import AuthBox from "../shared/AuthBox";

import { Typography } from "@mui/material";

const LoginPage = () => {


  return (
   <div>
    <AuthBox>
    {/*Header*/}.
    <Typography variant='h5' sx={{color : "white"}}>WELCOME BACK!</Typography>
    <Typography variant='h7' sx={{color : "grey"}}>Please Sign In</Typography>
     {/*Header Ends*/}.

     </AuthBox>
   </div>
  );
};


export default LoginPage;