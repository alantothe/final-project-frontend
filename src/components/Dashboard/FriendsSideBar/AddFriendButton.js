
import React from 'react';
import CustomButton from '../../shared/SharedButton';

const additionalStyles = {
    marginTop: "10px",
    marginLeft: "5px",
    marginRight: "5px",
    width: "200px",
    height: "40px",
    background: "#3ba55d",
    color: "white",
  };

  const handleOpenAddFriendDialog = () => {

  };

const AddFriendButton = () => {
    return (
        <div>
            <CustomButton
                        additionalStyles={additionalStyles}
                        label="Add Friend"
                        onClick={handleOpenAddFriendDialog}
            />
        </div>
    );
};

export default AddFriendButton;