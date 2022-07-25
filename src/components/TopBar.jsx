import { AppBar, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MPAWhiteIcon from './icons/MPAWhiteIcon';
import { useViewConfiguration } from '../providers/viewConfiguration/ViewConfiguration';

const TopBar = ({ children, rightElement }) => {
    const configuration = useViewConfiguration();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Fragment>
            <AppBar color="primary" position="static">
                <Toolbar variant="dense" sx={{ marginRight: isDesktop? '0px' : '-12px' }}>
                    <Link to={configuration.baseRoute || '/'}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: isDesktop? 2: 0 }}>
                            <MPAWhiteIcon size={isDesktop? '10rem' : '8rem'}/>
                        </IconButton>
                    </Link>
                    <Typography sx={{ flexGrow: 1 }} variant={isDesktop? 'h6': 'subtitle1'} color={'white'}>
                        {configuration.title || ''}
                    </Typography>
                    {rightElement}
                </Toolbar>
            </AppBar>
            {children}
        </Fragment>
    );
};

export default TopBar;
