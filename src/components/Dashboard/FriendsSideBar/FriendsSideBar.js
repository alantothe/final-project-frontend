import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton";

import FriendsTitle from "./FriendsTitle";
import FriendsList from "./FriendsList";
import PendingFriendsInvitations from "./PendingFriendsInvitations";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendsSideBar = () => {
  return (
    <MainContainer>
    <AddFriendButton/>
    <FriendsTitle title="Direct Messages"/>
    <FriendsList/>
    <FriendsTitle title="Invitations"/>
    <PendingFriendsInvitations/>
    </MainContainer>
  );
};

export default FriendsSideBar;
