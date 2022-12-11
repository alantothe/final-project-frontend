import { Tooltip } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '../../shared/Avatar';
import {Typography} from '@mui/material';
import InvitationDecisionButtons from './InvitationDecisionButtons'

const PendingFriendsInvitationsItem = ({
  id,
  username,
  email,
  acceptFriendInvitation,
  rejectFriendInvitation
}) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false)

  const handleAcceptInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonsDisabled(true);
  };

  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonsDisabled(true);
  };

  return (
    <Tooltip title={email}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitationDecisionButtons
            disabled={buttonsDisabled}
            acceptInvitationHandler={handleAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingFriendsInvitationsItem;


