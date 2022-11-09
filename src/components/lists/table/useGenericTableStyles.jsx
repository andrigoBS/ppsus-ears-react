import React from 'react';
import { useTheme } from '@mui/material';

const useGenericTableStyles = () => {
    const theme = useTheme();

    return {
        tableCell: {
            fontSize: 16
        },
        tableCellHead: {
            color: 'white',
            fontSize: 17
        },
        tableContainer: {
            maxHeight: 650
        },
        tableHead: {
            backgroundColor: theme.palette.secondaryBlue.main,
        },
        tableRow: (key) => ({
            backgroundColor: key % 2 ? 'white' : theme.palette.background.default
        }),
    };
};

export default useGenericTableStyles;
