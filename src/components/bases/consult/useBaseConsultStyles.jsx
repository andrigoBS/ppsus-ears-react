import React from 'react';
import { useTheme } from '@mui/material';

const useBaseConsultStyles = () => {
    const theme = useTheme();

    return {
        paper: {
            margin: '0px',
            padding: '30px',

            [theme.breakpoints.up('sm')]: {
                margin: '40px',
            },
            [theme.breakpoints.up('md')]: {
                marginLeft: '10%',
                marginRight: '10%',
            },
        },
        grid: {
            display: 'grid',
            gap: 2,
            width: 'auto',
            [theme.breakpoints.up('xl')]: {
                width: '1200px',
            },
        },
        textTitle:{
            marginBottom: '40px',
        },
        finalButton: {
            marginTop: '10px',
            marginBottom: '10px',
            width: 'fit-content',
        },
    };
};

export default useBaseConsultStyles;
