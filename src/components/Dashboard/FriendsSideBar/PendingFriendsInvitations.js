import React from 'react';
import { styled } from '@mui/system';
import PendingFriendsInvitationsItem from './PendingFriendsInvitationsItem';

const DUMMY_INVITATIONS = [
    {
    _id: '1',
    senderId: {
    username: 'Meleys',
    mail: 'dummy@ad.com'
    }
    },
    {
    _id: '2',
    senderId: {
    username: 'Vhagar',
    email: 'dummy@ad.com',
    }
}
    ];

const MainContainer = styled("div") ({
    width: "100%",
    height: "22%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto",
    });


const PendingFriendsInvitations = () => {
    return (
<MainContainer >
{DUMMY_INVITATIONS.map((invitation) => (
    <PendingFriendsInvitationsItem
    key={invitation._id}
    id={invitation._id}
    username={invitation.senderId.username}
    email={invitation.senderId.email}

/>
))}
</MainContainer>
    );
};

export default PendingFriendsInvitations;