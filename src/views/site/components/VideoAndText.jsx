import React from 'react';
import {Grid, Typography, useTheme} from "@mui/material";

const createStyle = (theme) => {
    return {
        container: {
            padding: "40px",
            //backgroundColor: theme.palette.tertiary.main
        },
    }
};

const VideoAndText = ({title, description}) => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <Grid container sx={styles.container}>
            <Grid item xs={12}>
                <Typography variant="h4" color={'primary'}>{title}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="p">{description}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="p">descrição</Typography>
            </Grid>
        </Grid>
    );
};

export default VideoAndText;