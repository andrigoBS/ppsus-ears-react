import React from "react";
import TopBar from "../../components/TopBar";
import Footer from "./components/Footer";
import VideoAndText from "./components/VideoAndText";
import {Box, Typography, Link, Grid, Button, useTheme} from "@mui/material";
import CrefonoSVGIcon from "../../components/svgsIcons/CrefonoSVGIcon";
import {useNavigate} from "react-router-dom";
import TextParagraph from "./components/TextParagraph";
import VideoParagraph from "./components/VideoParagraph";

const createStyle = (theme) => ({

});

const Site = () => {
    let navigate = useNavigate();
    const theme = useTheme();
    const styles = createStyle(theme);

    const partners = [
        {
            url: '',
            element: <CrefonoSVGIcon size='15rem'/>
        },
        {
            url: '',
            element: <CrefonoSVGIcon size='15rem'/>
        },
        {
            url: '',
            element: <CrefonoSVGIcon size='15rem'/>
        },
        {
            url: '',
            element: <CrefonoSVGIcon size='15rem'/>
        },
        {
            url: '',
            element: <CrefonoSVGIcon size='15rem'/>
        },
    ];

    return (
        <TopBar rightElement={
                <Button color="secondary"
                        type="submit"
                        variant="contained"
                        onClick={() => navigate('/pais')}
                >
                    Área dos pais
                </Button>
            }
        >
            <TextParagraph title={'O que é?'} description={lorem}/>
            <VideoParagraph title={'O que é?'} url={'https://www.youtube.com/embed/_6l27TjGSEU'} />
            <TextParagraph title={'Objetivos'} description={lorem}/>
            <VideoAndText title={'Dicas para os pais'} description={lorem} videoUrl={'https://www.youtube.com/embed/_6l27TjGSEU'}/>
            <Box sx={{padding: '45px', textAlign: 'center'}}>
                <Typography variant="h4" color={'primary'} sx={{marginBottom: '20px'}}>Parceiros</Typography>
                <Grid container spacing={3}>
                    {partners.map((partner) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Link href={partner.url} underline="hover" target={'_blank'} color={'white'}>
                                {partner.element}
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Footer/>
        </TopBar>
    );
}

export default Site;

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim mauris tortor, et ultrices metus ultrices vel. In non nulla quis nibh rutrum auctor. Duis nec leo justo. Integer iaculis sed mauris a mollis. Integer a turpis at neque lobortis pharetra et in arcu. Donec ultricies mattis interdum. Integer hendrerit congue dapibus. Etiam aliquam erat nec orci pellentesque, ac vehicula ante luctus. Donec nec bibendum turpis. Praesent convallis ex sit amet orci lobortis sollicitudin. Etiam ut ex sed elit vulputate commodo. Integer nisi nibh, dictum at ante at, lobortis tempus massa. Donec eleifend aliquam elit, vel hendrerit arcu fermentum sit amet. ";