import React, {Fragment} from "react";
import {AppBar, IconButton, Toolbar, Box} from "@mui/material";
import MPAWhiteSVGIcon from "./svgsIcons/MPAWhiteSVGIcon";
import {Link} from "react-router-dom";

const TopBar = ({children, viewTitle, viewHome, rightElement}) => {
    return (
        <Fragment>
            <AppBar color="primary" position="static">
                <Toolbar variant="dense">
                    <Link to={viewHome || '/'}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MPAWhiteSVGIcon size="10rem"/>
                        </IconButton>
                    </Link>
                    <Box sx={{flexGrow: 1}}>{viewTitle}</Box>
                    {rightElement}
                </Toolbar>
            </AppBar>
            {children}
        </Fragment>
    );
}

export default TopBar;