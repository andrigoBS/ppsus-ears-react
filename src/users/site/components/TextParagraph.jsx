import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const createStyle = (theme) => ({
    textBox: {
        [theme.breakpoints.up('md')]: {
            padding: '50px 20%',
            textAlign: 'center',
        },
        padding: '35px',

        textAlign: 'left',
    },
    title: {
        marginBottom: '20px'
    }
});

const TextParagraph = ({ children, title }) => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <Box sx={styles.textBox}>
            <Typography variant="h4" color={'primary'} sx={styles.title}>{title}</Typography>
            <Typography variant="p">{children}</Typography>
        </Box>
    );
};

export default TextParagraph;
