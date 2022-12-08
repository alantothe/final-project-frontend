import React from "react";
import InputBox from "../shared/InputBox";

const LoginPageInputs = ({email, setEmail, password, setPassword}) => {




  return (
   <div>
   <InputBox value={email} setValue={setEmail}
   label= "E-mail"
   type="text"
   placeholder="Enter e-mail address" />
      <InputBox value={password} setValue={setPassword}
   label= "Password"
   type="password"
   placeholder="Enter password" />
   </div>
  );
};


export default LoginPageInputs;