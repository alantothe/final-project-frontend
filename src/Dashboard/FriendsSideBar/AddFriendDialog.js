import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { validateEmail } from "../../shared/utilities/validators";
import InputBox from "../../shared/components/InputBox";
import CustomButton from "../../shared/components/CustomButton";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/friendsActions";

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");

  const handleSendInvitation = () => {
    sendFriendInvitation(
      {
        emailAddress: email,
      },
      handleCloseDialog
    );
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setEmail("");
  };

  useEffect(() => {
    setIsFormValid(validateEmail(email));
  }, [email, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <InputBox
            label="email"
            type="text"
            value={email}
            setValue={setEmail}
            placeholder="Enter email address"
          />
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
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);
