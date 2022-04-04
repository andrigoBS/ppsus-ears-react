import React from 'react';
import {Box, Typography, useTheme} from "@mui/material";

const createStyle = (theme) => ({
    textBox: {
        textAlign: 'left',
        padding: '35px',

        [theme.breakpoints.up('md')]: {
            padding: '50px 20%',
            textAlign: 'center',
        },
    },
    title: {
        marginBottom: '20px'
    }
})

const TextParagraph = ({title, children}) => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <Box sx={styles.textBox}>
            <Typography variant="h4" color={'primary'} sx={styles.title}>{title}</Typography>
            <Typography variant="p">{children}</Typography>
        </Box>
    );
}

export default TextParagraph;