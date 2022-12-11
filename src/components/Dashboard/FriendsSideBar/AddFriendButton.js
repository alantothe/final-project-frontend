
import React from 'react';
import CustomButton from '../../shared/SharedButton';
import { useState } from 'react';
import AddFriendDialog from './AddFriendDialog';

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  marginRight: "5px",
  width: "200px",
  height: "40px",
  background: "black",
  color: "white",
  fontWeight: "bold",
  fontSize: "12px",
};





  const AddFriendButton = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenAddFriendDialog = () => {
      setIsDialogOpen(true);
    };

    const handleCloseAddFriendDialog = () => {
      setIsDialogOpen(false);
    };

    return (
      <>
        <CustomButton
          additionalStyles={additionalStyles}
          label="INVITE FRIEND"
          onClick={handleOpenAddFriendDialog}
        />
        <AddFriendDialog
          isDialogOpen={isDialogOpen}
          closeDialogHandler={handleCloseAddFriendDialog}
        />
      </>
    );
  };

  export default AddFriendButton;