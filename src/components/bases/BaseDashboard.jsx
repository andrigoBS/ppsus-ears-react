import { CircularProgress, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { GraphicBar } from '../graphics/GraphicBar';
import { GraphicDoughnut } from '../graphics/GraphicDoughnut';

const isSmall = (length) => length <= 10;
const isMedium = (length) => length <= 30;

const styles = {
    grid: {
        alignItems: 'center',
        display: 'flex',
        backgroundColor: '#ffffff',
        marginRight: '15px',
        marginBottom: '15px',
        borderRadius: '10px',
        padding: '20px'
    }
};

const RecommendedGraphic = ({ title, labels, quantities, onClickElement }) => {
    if(isSmall(labels.length)) {
        return (
            <GraphicDoughnut
                title={title}
                labels={labels}
                quantities={quantities}
                onClickElement={onClickElement}
            />
        );
    }

    return (
        <GraphicBar
            title={title}
            labels={labels}
            quantities={quantities}
            onClickElement={onClickElement}
        />
    );
};

const Graphic = ({ type, getReport }) => {
    const [data, setData] = useState(null);

    const getSizes = () => {
        if(isSmall(data.labels.length)) {
            return { xs:12, sm:8, md:4, lg:4, xl:2 };
        }
        if(isMedium(data.labels.length)) {
            return { xs:12, lg:6 };
        }
        return { xs:12, xl: 6 };
    };

    useEffect(() => {
        getReport(type).then(setData);
    }, []);

    if(!data) { return (<CircularProgress />); }

    return (
        // <Paper sx={{ backgroundColor: '#cccccc' }}>
        <Grid item {...getSizes(data.labels.length)} sx={styles.grid}>
            <RecommendedGraphic
                isSmall={isSmall}
                title={data.title}
                labels={data.labels}
                quantities={data.quantities}
                onClickElement={(elementIndex) => console.log('report type', type, 'clicked element index', elementIndex)}
            />
        </Grid>
        // </Paper>
    );
};

const BaseDashboard = ({ getDashboard, getReport, user }) => {
    const [dashboard, setDashboard] = useState([]);

    useEffect(() => {
        getDashboard().then(setDashboard);
    }, []);

    return (
        <Grid container sx={{ padding: '15px 50px;' }} >
            <Grid item xs={12}>
                <Typography component='h3' variant='h3' sx={{ paddingBottom: '15px' }}>
                    Olá {(user && user.name) || ''}
                </Typography>
            </Grid>

            {dashboard.map((value, index) => (<Graphic key={'graphic-'+index} type={value.type} getReport={getReport}/>))}
        </Grid>
    );
};

export default BaseDashboard;
