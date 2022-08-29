import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../providers/auth/Auth';
import { useViewConfiguration } from '../../providers/viewConfiguration/ViewConfiguration';

const mockNotificationsNumber = 1;

const useUserDropDownController = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const configuration = useViewConfiguration();

    const [anchorEl, setAnchorEl] = useState(null);

    const onClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const onClose = () => {
        setAnchorEl(null);
    };

    const onClickNotUser = () => {
        navigate(configuration.loginRoute);
    };

    const onClickUserName = () => {
        navigate(configuration.baseRoute+'/minha-conta/'+auth.user.id);
    };

    const onClickExit = () => {
        auth.logout(configuration.baseRoute);
    };

    return {
        user: auth.user,
        openMenu: Boolean(anchorEl),
        notificationsNumber: mockNotificationsNumber,
        onClick, onClose, onClickNotUser, onClickUserName, onClickExit,
        anchorEl
    };
};

export default useUserDropDownController;
