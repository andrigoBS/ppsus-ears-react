import React, {Fragment} from "react";
import {AppBar, IconButton, Toolbar} from "@mui/material";
import MPAWhiteSVGIcon from "./svgsIcons/MPAWhiteSVGIcon";

const TopBar = ({children}) => {
    return (
        <Fragment>
            <AppBar color="primary" position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MPAWhiteSVGIcon size="10rem"/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            {children}
        </Fragment>
    );
}

export default TopBar;