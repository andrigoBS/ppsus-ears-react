import { AppBar, Box, IconButton, SwipeableDrawer, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../providers/auth/Auth';
import MPAWhiteIcon from './icons/MPAWhiteIcon';
import { useViewConfiguration } from '../providers/viewConfiguration/ViewConfiguration';
import Menu from './lists/Menu';
import MenuIcon from '@mui/icons-material/Menu';

const TopBar = ({ children, rightElement, linkMenu }) => {
    const auth = useAuth();
    const configuration = useViewConfiguration();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <AppBar color="primary" position="static">
                <Toolbar variant="dense" sx={{ marginRight: isDesktop? '0px' : '-12px' }}>
                    {auth && auth.user && <React.Fragment>
                        <IconButton color="inherit" onClick={handleDrawerOpen} sx={{ marginRight: '10px' }}>
                            <MenuIcon/>
                        </IconButton>
                        <Box onClick={handleDrawerClose}>
                            <SwipeableDrawer anchor={'left'} open={open}  onClose={false} onOpen={false}>
                                <Menu data={linkMenu}/>
                            </SwipeableDrawer>
                        </Box>
                    </React.Fragment>}
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
            <Box>
                {children}
            </Box>
        </Fragment>
    );
};

export default TopBar;
