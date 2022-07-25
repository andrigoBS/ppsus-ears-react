import {
    AccountCircle as AccountCircleIcon,
    Comment as CommentIcon,
    Logout as LogoutIcon
} from '@mui/icons-material';
import { Badge, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useAuth } from '../../providers/auth/Auth';
import { useNavigate } from 'react-router-dom';
import { useViewConfiguration } from '../../providers/viewConfiguration/ViewConfiguration';

const style = {
    container: {
        display: 'flex'
    },
    menuPaper: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
        },
    },
};

const UserAvatarDropDown = ({ withNotification }) => {
    const auth = useAuth();
    const navigate = useNavigate();
    const configuration = useViewConfiguration();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if (!auth.user) {
        const title = 'Entrar na plataforma';
        return (
            <Tooltip title={title}>
                <IconButton color="inherit" aria-label={title} component="span"
                    onClick={() => navigate(configuration.loginRoute)}
                >
                    <AccountCircleIcon/>
                </IconButton>
            </Tooltip>
        );
    }

    const notificationsNumber = 1;
    const title = 'Você possui ' + notificationsNumber + ' notificações';
    const openMenu = Boolean(anchorEl);

    return (
        <Box sx={style.container}>
            {withNotification &&
                <Tooltip title={title} arrow>
                    <IconButton color="inherit" component="span" aria-label={title}>
                        <Badge badgeContent={notificationsNumber} color="secondary">
                            <CommentIcon/>
                        </Badge>
                    </IconButton>
                </Tooltip>
            }
            <Tooltip title={'Minha conta'} arrow>
                <IconButton color="inherit" component="span"
                    aria-label="Minha conta"
                    aria-haspopup="true"
                    aria-controls={openMenu ? 'account-menu' : undefined}
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <AccountCircleIcon/>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openMenu}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{ elevation: 0, sx: style.menuPaper, }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => navigate(configuration.baseRoute+'/minha-conta')}>
                    <ListItemIcon>
                        <AccountCircleIcon fontSize="small" />
                    </ListItemIcon>
                    {auth.user.name}
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => { auth.logout(configuration.baseRoute); }}>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    Sair
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default UserAvatarDropDown;
