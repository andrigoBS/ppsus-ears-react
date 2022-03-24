import React from 'react'
import { Grid, Typography, Link, useTheme, Divider} from "@mui/material";
import {Link as LinkRouter} from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import MPAWhiteIcon from "../../../components/icons/MPAWhiteIcon";

const createStyle = (theme) => {
    return {
        container: {
            padding: "40px",
            backgroundColor: theme.palette.secondary.main
        },
        divider: {
            backgroundColor: 'white',
            margin: "40px 0"
        },
        link: {
            fontWeight: 'bold',
            margin: '0 15px',
        },
        toCenter: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center'
        }
    };
}

const links = [
    {route: '/institucional', title: 'Área Instituicional'},
    {route: '/pais', title: 'Área para os Pais'},
    {route: '/secretaria', title: 'Área das Secretarias'},
    {route: '/fono', title: 'Área dos Fonoaudiólogos'}
]

const email = 'meuprimeiroalo@univali.br';

const Footer = () => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <Grid container sx={styles.container} spacing={1} justifyContent={'center'}>
            {links.map((link) => (
                <Grid item xs={12} md={'auto'} sx={styles.toCenter}>
                    <Link href={link.route} underline="hover" target={'_blank'} color={'white'}>
                        <Typography variant="p" color='white' sx={styles.link}>{link.title}</Typography>
                    </Link>
                </Grid>
            ))}
            <Grid item xs={12}>
                <Divider sx={styles.divider} />
            </Grid>
            <Grid item xs={12} sx={styles.toCenter}>
                <LinkRouter to={'/'}><MPAWhiteIcon size="12rem"/></LinkRouter>
            </Grid>
            <Grid item xs={12} sx={{...styles.toCenter, display: 'block'}}>
                <Link href={'mailTo:'+email} underline="hover" target={'_blank'} color={'white'}>
                    <MailIcon sx={{color: 'white', margin: '6px 6px -6px 0px'}}/>
                    <Typography variant="p" color='white' sx={{paddingTop: '25px'}} >{email}</Typography>
                </Link>
            </Grid>
            <Grid item xs={12} sx={styles.toCenter}>
                <Typography variant="p" color='white' sx={{paddingTop: '25px'}} >2022 - Univali - Equipe PPSUS</Typography>
            </Grid>
        </Grid>
    )
};

export default Footer;