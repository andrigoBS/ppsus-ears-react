import { Box, Link, Typography, useTheme } from '@mui/material';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import React from 'react';
import TextParagraph from '../components/TextParagraph';
import { useLocation } from 'react-router-dom';
import { useViewConfiguration } from '../../../providers/viewConfiguration/ViewConfiguration';

const createStyles = (theme) => ({
    linksContainer: {
        padding: '0px 20px',
    },
    toCenter: {
        display: 'flex',
        justifyContent: 'left',
        textAlign: 'left',
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            justifyContent: 'center',
        }
    },
    firstLinkBox: {
        marginTop: '-20px',
        marginBottom: '10px'
    },
    link: {
        fontWeight: 'bold',
        margin: '0 15px',
    },
});

const PageNotFound = () => {
    const location = useLocation();
    const configuration = useViewConfiguration();
    const theme = useTheme();
    const styles = createStyles(theme);

    const from = location.state?.from?.pathname || configuration.baseRoute;

    return (
        <>
            <TextParagraph title={'Página não encontrada'}>
                Seja muito bem-vindo à plataforma Meu primeiro alô, infelizmente não encontramos a página solicitada,
                por favor verifique se o link que você está acessando está correto,
                caso tenha chegado aqui pela propria plataforma por favor informar ao suporte.
            </TextParagraph>
            <Box sx={styles.linksContainer}>
                <Link href={from} underline="hover" color={'white'} sx={{ ...styles.toCenter, ...styles.firstLinkBox }}>
                    <Typography variant="p" color='secondary' sx={styles.link}>Clique aqui para voltar a página anterior</Typography>
                </Link>
                <Link href={'/'} underline="hover" color={'white'} sx={styles.toCenter}>
                    <Typography variant="p" color='secondary' sx={styles.link}>Clique aqui para visitar nosso site</Typography>
                </Link>
            </Box>
            <Partners/>
            <Footer/>
        </>
    );
};

export default PageNotFound;
