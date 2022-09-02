import React from 'react';
import { useTheme } from '@mui/material';

const useBaseConsultStyles = () => {
    const theme = useTheme();

    return {
        finalButton: {
            marginBottom: '10px',
            marginTop: '10px',
            width: 'fit-content',
        },
        grid: {
            [theme.breakpoints.up('xl')]: {
                width: '1200px',
            },
            display: 'grid',
            gap: 2,
            width: 'auto',
        },
        paper: {
            [theme.breakpoints.up('sm')]: {
                margin: '40px',
            },
            [theme.breakpoints.up('md')]: {
                marginLeft: '10%',
                marginRight: '10%',
            },

            margin: '0px',
            padding: '30px',
        },
        textTitle:{
            marginBottom: '40px',
        },
    };
};

export default useBaseConsultStyles;
