export const validateLoginForm = ({ email, password }) => {

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    return isEmailValid && isPasswordValid
    };
//-----------------------------------------------------------------

 export const validateRegisterForm = ({ email, password, username }) => {
        return (
          validateEmail(email) &&
          validatePassword(password) &&
          validateUsername(username)
        );
      };


//-----------------------------------------------------------------
    const validatePassword = (password) => {
        return password.length > 6 && password.length < 12;
        };
   export const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
        };

    const validateUsername = (username) => {
        return username.length > 2 && username.length < 13;
          };


        // code below validates email pattern "blank@blank.com"
        //^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

