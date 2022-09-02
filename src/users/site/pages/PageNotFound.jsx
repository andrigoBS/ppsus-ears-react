import React from 'react';
import { Box, Link, Typography, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import TextParagraph from '../components/TextParagraph';

const createStyles = (theme) => ({
    firstLinkBox: {
        marginBottom: '10px',
        marginTop: '-20px'
    },
    link: {
        fontWeight: 'bold',
        margin: '0 15px',
    },
    linksContainer: {
        padding: '0px 20px',
    },
    toCenter: {
        [theme.breakpoints.up('md')]: {
            justifyContent: 'center',
            textAlign: 'center',
        },
        display: 'flex',
        justifyContent: 'left',
        textAlign: 'left'
    },
});

const PageNotFound = (baseRoute) => {
    const location = useLocation();
    const theme = useTheme();
    const styles = createStyles(theme);

    const from = location.state?.from?.pathname || baseRoute;

    return (
        <div style={{ display: 'block', width: '100%' }}>
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
        </div>
    );
};

export default PageNotFound;
