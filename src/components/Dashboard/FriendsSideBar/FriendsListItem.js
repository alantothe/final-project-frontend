import React from "react";
import Button from "@mui/material/Button";
import Avatar from "../../shared/Avatar";
import Typography from "@mui/material/Typography";
import OnlineIndicator from "./OnlineStatus";
import OnlineStatus from "./OnlineStatus";

const FriendsListItem = ({ id, username, isOnline }) => {
  return (
    <Button
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
      }}
    >
      <Avatar username={username} random={true} />
      <Typography
        style={{
          marginLeft: "7px",
          fontWeight: 700,
          color: "white",
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineStatus></OnlineStatus>}
    </Button>
  );
};

export default FriendsListItem;
