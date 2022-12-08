import React from 'react';
import InputBox from '../shared/InputBox';

const RegisterPageInputs = (email, setEmail, username, setUsername, password, setPassword ) => {

    return (
        <div>
         <InputBox value={email} setValue={setEmail}
        label= "E-mail"
        type="text"
        placeholder="Enter e-mail address" />

         <InputBox value={username} setValue={setUsername}
        label= "Username"
        type="text"
        placeholder="Enter Username" />


      <InputBox value={password} setValue={setPassword}
        label= "Password"
        type="password"
        placeholder="Enter Password" />

</div>
    );
};

export default RegisterPageInputs;