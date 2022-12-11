import React from 'react';
import { styled } from '@mui/system';
import FriendsListItem from './FriendsListItem';

const MainContainer = styled("div")({
    flexGrow: 1,
    width: "100%",
  });

const TEST_FRIENDS = [
    {
    id: 1,
    username: "Aemond",
    isOnline: true,
    },
    {
    id: 2,
    username: "Deamon",
    isOnline: true,
    id: 3,
    username: "Aegon",
    isOnline: false,
    },
    {
    id: 4,
    username: "Ned",
    isOnline: false,
    },
    {
    id: 5,
    username: "Jon",
    isOnline: true,
    }

]

const FriendsList = () => {
    return (
        <MainContainer>
        {TEST_FRIENDS.map((f)=>(
            <FriendsListItem
            username={f.username}
            id={f.id}
            key={f.id}
            isOnline={f.isOnline}
            />
        ) )}

        </MainContainer>
    );
};

export default FriendsList;