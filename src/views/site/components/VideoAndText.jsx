import React from 'react';
import {Grid, Typography, useTheme} from "@mui/material";

const createStyle = (theme) => {
    return {
        container: {
            padding: "0 100px",
        },
        toCenter: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center'
        },
        videoBox: {
            padding: '35px 35px 30px 35px',
            backgroundColor: theme.palette.secondaryBlue.main,
            [theme.breakpoints.up('md')]: {
                padding: '50px 50px 45px 50px',
            },
        },
        textBox:{
            padding: '35px',
            [theme.breakpoints.up('md')]: {
                padding: '50px',
            },
        }
    };
};

const VideoAndText = ({title, children, videoUrl}) => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <Grid container justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={12} md={6} sx={styles.textBox}>
                <Typography variant="h4" color={'primary'} sx={{marginBottom: '20px'}}>{title}</Typography>
                <Typography variant="p">{children}</Typography>
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