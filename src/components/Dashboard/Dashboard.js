import React from 'react';
import { styled } from "@mui/system"
import SideBar  from './SideBar/SideBar'
import  AppBar  from './AppBar/AppBar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar'
import Messenger from './Messenger/Messenger'

const Wrapper = styled("div")({
    width: "100%",
    height: "100vh",
    display: "flex",
  });

  const Dashboard = ({ setUserDetails }) => {


    return (
      <Wrapper>
        <SideBar />
        <FriendsSideBar />
        <Messenger />
        <AppBar />
      </Wrapper>
    );
  };

  export default Dashboard