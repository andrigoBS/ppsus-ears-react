import React from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import UnivaliIcon from '../../../components/icons/UnivaliIcon';
import SecretaryIcon from '../../../components/icons/SecretaryIcon';
import CNPqIcon from '../../../components/icons/CNPqIcon';
import UnieduIcon from '../../../components/icons/UnieduIcon';
import CrefonoIcon from '../../../components/icons/CrefonoIcon';
import NascerIcon from '../../../components/icons/NascerIcon';

const Partners = ({ color }) => {
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
        <Box sx={{ padding: '45px', textAlign: 'center', backgroundColor: color }}>
            <Typography variant="h4" color={'primary'} sx={{ marginBottom: '30px' }}>Parceiros</Typography>
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
    );
};

export default Partners;