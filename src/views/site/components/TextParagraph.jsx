import React from 'react';
import {Box, Typography, useTheme} from "@mui/material";

const createStyle = (theme) => ({
    textBox: {
        textAlign: 'left',
        padding: '45px',

        [theme.breakpoints.up('md')]: {
            padding: '45px 20%',
            textAlign: 'center',
        },
    },
    title: {
        marginBottom: '20px'
    }
})

const TextParagraph = ({title, description}) => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <Box sx={styles.textBox}>
            <Typography variant="h4" color={'primary'} sx={styles.title}>{title}</Typography>
            <Typography variant="p">{description}</Typography>
        </Box>
    );
}

export default TextParagraph;