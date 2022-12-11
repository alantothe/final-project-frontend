
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
    background: "#3ba55d",
    color: "white",
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
          label="Add Friend"
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