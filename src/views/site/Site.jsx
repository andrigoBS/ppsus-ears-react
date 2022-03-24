import React from "react";
import {useNavigate} from "react-router-dom";
import {Box, Typography, Link, Grid, Button} from "@mui/material";
import CrefonoIcon from "../../components/icons/CrefonoIcon";
import SecretaryIcon from "../../components/icons/SecretaryIcon";
import TopBar from "../../components/TopBar";
import Footer from "./components/Footer";
import VideoAndText from "./components/VideoAndText";
import TextParagraph from "./components/TextParagraph";
import VideoParagraph from "./components/VideoParagraph";
import UnivaliIcon from "../../components/icons/UnivaliIcon";
import UnieduIcon from "../../components/icons/UnieduIcon";
import NascerIcon from "../../components/icons/NascerIcon";
import CNPqIcon from "../../components/icons/CNPqIcon";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim mauris tortor, et " +
    "ultrices metus ultrices vel. In non nulla quis nibh rutrum auctor. Duis nec leo justo. Integer iaculis sed " +
    "mauris a mollis. Integer a turpis at neque lobortis pharetra et in arcu. Donec ultricies mattis interdum. " +
    "Integer hendrerit congue dapibus. Etiam aliquam erat nec orci pellentesque, ac vehicula ante luctus. Donec nec " +
    "bibendum turpis. Praesent convallis ex sit amet orci lobortis sollicitudin. Etiam ut ex sed elit vulputate commodo. " +
    "Integer nisi nibh, dictum at ante at, lobortis tempus massa. Donec eleifend aliquam elit, vel hendrerit arcu fermentum sit amet. ";

const Site = () => {
    let navigate = useNavigate();

    const partners = [
        {
            url: 'https://univali.br',
            element: <UnivaliIcon size={'140px'}/>
        },
        {
            url: 'https://saude.sc.gov.br/',
            element: <SecretaryIcon size={'200px'}/>
        },
        {
            url: 'https://cnpq.br',
            element: <CNPqIcon size={'220px'}/>
        },
        {
            url: 'http://www.uniedu.sed.sc.gov.br/',
            element: <UnieduIcon size={'130px'}/>
        },
        {
            url: 'https://crefono3.org.br/',
            element: <CrefonoIcon size={'290px'}/>
        },
        {
            url: 'https://fapesc.sc.gov.br/programa-nascer/',
            element: <NascerIcon size={'320px'}/>
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
                <Typography variant="h4" color={'primary'} sx={{marginBottom: '30px'}}>Parceiros</Typography>
                <Grid container spacing={5} justifyContent={'center'} alignItems={'center'}>
                    {partners.map((partner) => (
                        <Grid item>
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