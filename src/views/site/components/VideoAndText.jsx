import React from 'react';
import {Grid, Typography, useTheme} from "@mui/material";

const createStyle = (theme) => {
    return {
        container: {
            padding: "0px 100px",
        },
        toCenter: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center'
        },
        videoBox: {
            padding: '45px 45px 40px 45px',
            backgroundColor: theme.palette.secondaryBlue.main
        },
        textBox:{
            padding: '45px',
        }
    }
};

const VideoAndText = ({title, description, videoUrl}) => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <Grid container justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={12} md={6} sx={styles.textBox}>
                <Typography variant="h4" color={'primary'} sx={{marginBottom: '20px'}}>{title}</Typography>
                <Typography variant="p">{description}</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={styles.videoBox}>
                <iframe title={title}
                        width={'100%'}
                        height={'360px'}
                        src={videoUrl}
                        frameBorder="0"
                        allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                />
            </Grid>
        </Grid>
    );
};

export default VideoAndText;