import React from 'react';
import { Typography } from '@mui/material';
import { styled } from "@mui/system";

const RedirectText = styled ("span") ({
    color: "#00AFF4",
    fontWeight: 500,
    cursor: "pointer",
    });

const RedirectInfo = ({text, redirectText, additionalStyles, redirectHandler }) => {
    return (
        <div>
            <Typography

            sx={{color: 'grey'}}
            style={additionalStyles ? additionalStyles: {}}
            variant={"subtitle2"}
            >
            {text}
            <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>

            </Typography>
        </div>
    );
};

export default RedirectInfo;