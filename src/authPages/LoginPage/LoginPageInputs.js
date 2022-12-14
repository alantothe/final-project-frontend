import React from "react";
import InputBox from "../../shared/components/InputBox";

const LoginPageInputs = ({ email, setEmail, password, setPassword }) => {
  return (
    <>
      <InputBox
        value={email}
        setValue={setEmail}
        label="E-email"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputBox
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default LoginPageInputs;
