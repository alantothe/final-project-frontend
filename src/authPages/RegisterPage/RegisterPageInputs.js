import React from "react";
import InputBox from "../../shared/components/InputBox";

const RegisterPageInputs = (props) => {
  const { email, setEmail, username, setUsername, password, setPassword } = props;

  return (
    <>
      <InputBox
        value={email}
        setValue={setEmail}
        label="E-email address"
        type="text"
        placeholder="Enter e-email address"
      />
      <InputBox
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter a username"
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

export default RegisterPageInputs;
