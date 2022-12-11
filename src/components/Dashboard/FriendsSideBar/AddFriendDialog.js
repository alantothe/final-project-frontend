import React, { useState, useEffect } from "react";
import { validateEmail } from "../../shared/utilities/validators"

import InputBox from "../../shared/InputBox";



import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";
import CustomButton from "../../shared/SharedButton";


const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => {},
  }) => {
    const [email, setEmail] = useState("");
    const [isFormValid, setIsFormValid] = useState("");



    const handleSendInvitation = () => {
           //send friend request to server
      ;
    };


    const handleCloseDialog = () => {
    closeDialogHandler();
    setEmail("");
  };

    useEffect(() => {
    setIsFormValid(validateEmail(email));
  }, [email, setIsFormValid]);

  return(
    <div>
        <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle><Typography>Invite a Friend</Typography></DialogTitle>
        <DialogContent>
           <DialogContentText>

            <Typography>

            Enter e-mail address of friend.
            </Typography>
            </DialogContentText>
            <InputBox label="email" type="text" value={email} setValue={setEmail} placeholder="Enter e-mail address " />

        </DialogContent>
        <DialogActions>
        <CustomButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}/>
        </DialogActions>

        </Dialog>
    </div>

  )
  }
export default AddFriendDialog;