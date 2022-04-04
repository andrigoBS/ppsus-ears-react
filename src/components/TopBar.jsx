import React, {Fragment} from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MPAWhiteIcon from "./icons/MPAWhiteIcon";
import {Link} from "react-router-dom";
import {useViewConfiguration} from "../providers/viewConfiguration/ViewConfiguration";

const TopBar = ({children, rightElement}) => {
    let configuration = useViewConfiguration();
    return (
        <Fragment>
            <AppBar color="primary" position="static">
                <Toolbar variant="dense">
                    <Link to={configuration.baseRoute || '/'}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MPAWhiteIcon size="10rem"/>
                        </IconButton>
                    </Link>
                    <Typography sx={{flexGrow: 1}} variant={'h5'} color={'white'}>{configuration.title}</Typography>
                    {rightElement}
                </Toolbar>
            </AppBar>
            {children}
        </Fragment>
    );
}

export default TopBar;