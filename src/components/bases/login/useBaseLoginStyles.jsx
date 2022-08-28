import { useTheme } from '@mui/material';
import React from 'react';
import LoginUX from '../../icons/login/Prancheta 9.svg';

const useBaseLoginStyles = () => {
    const theme = useTheme();

    return {
        container: {
            backgroundColor: theme.palette.secondaryBlue.main,

            [theme.breakpoints.up('sm')]: {
                backgroundColor: undefined,
                backgroundImage: `url("${LoginUX}")`,
                backgroundSize: 'auto 36%',
                backgroundPosition: '0px -1%',
            },

            [theme.breakpoints.up('md')]: {
                backgroundSize: 'auto 54%',
                backgroundPosition: '0px -31%',
            },

            [theme.breakpoints.up('lg')]: {
                backgroundSize: 'auto 70%',
                backgroundPosition: '0px -110%',
            },

            [theme.breakpoints.up('xl')]: {
                backgroundSize: 'auto 103%',
                backgroundPosition: '0px -582px',
            },
        },
        paper: {
            margin: '0px',
            padding: '30px',

            [theme.breakpoints.up('sm')]: {
                margin: '40px',
            },
            [theme.breakpoints.up('md')]: {
                marginLeft: '8%',
                marginRight: '8%',
            },
            [theme.breakpoints.up('lg')]: {
                marginLeft: '14%',
                marginRight: '14%',
            },
            [theme.breakpoints.up('xl')]: {
                marginLeft: '23%',
                marginRight: '23%',
            },
            textAlign: 'center'
        },
        icon: {
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
        },
        iconHeart: {

        },
        loginDescription: {
            fontSize: '14px'
        },
        subtitle: {
            fontSize: '14px'
        },
        forgotPassword: {
            marginBottom: '20px'
        },
        partnersColor: theme.palette.background.default,
    };
};

export default useBaseLoginStyles;
