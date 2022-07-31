import { AppBar, Box, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../providers/auth/Auth';
import MPAWhiteIcon from './icons/MPAWhiteIcon';
import { useViewConfiguration } from '../providers/viewConfiguration/ViewConfiguration';
import Menu from './lists/Menu';

const TopBar = ({ children, rightElement, linkMenu }) => {
    const auth = useAuth();
    const configuration = useViewConfiguration();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Fragment>
            <AppBar color="primary" position="static">
                <Toolbar variant="dense" sx={{ marginRight: isDesktop? '0px' : '-12px' }}>
                    <Link to={configuration.baseRoute || '/'}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: isDesktop ? 2 : 0 }}>
                            <MPAWhiteIcon size={isDesktop? '10rem' : '8rem'}/>
                        </IconButton>
                    </Link>
                    <Typography sx={{ flexGrow: 1 }} variant={isDesktop? 'h6': 'subtitle1'} color={'white'}>
                        {configuration.title || ''}
                    </Typography>
                    {rightElement}
                </Toolbar>
            </AppBar>
            <Box sx={{ display: auth && auth.user ? 'flex' : 'block' }}>
                {auth && auth.user && <Menu data={linkMenu}/>}
                {children}
            </Box>
        </Fragment>
    );
};

export default TopBar;
