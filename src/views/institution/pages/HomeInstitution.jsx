import React, {useEffect, useState} from "react";
import InstitutionService from "../../../services/institution/InstitutionService";
import {GraphicDoughnut} from "../../../components/dashboard/GraphicDoughnut";
import {Grid, Typography} from "@mui/material";

const HomeInstitution = () => {
    const [response, setResponse] = useState("");

    useEffect(() => {
        InstitutionService.getAll().then(setResponse);
    }, []);

    const user = null;

    return (
        <Grid container sx={{padding: '15px 45px;' /*padding: '15px'*/}}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography component='h1' variant='h1'>
                    Olá {(user && user.name) || 'Institution'} {response.message}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3} xl={2}>
                <GraphicDoughnut
                    title={'Titulo do grafico 1'}
                    labels={["passou","não passou"]}
                    quantities={[1, 4]}
                    onClickElement={(elementIndex) => alert(elementIndex)}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={3} xl={2}>
                <GraphicDoughnut
                    title={'Titulo do grafico 2'}
                    labels={["passou","não passou"]}
                    quantities={[100, 1]}
                    onClickElement={(elementIndex) => alert(elementIndex)}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={3} xl={2}>
                <GraphicDoughnut
                    title={'Titulo do grafico 3'}
                    labels={["passou","não passou"]}
                    quantities={[2, 1]}
                    onClickElement={(elementIndex) => alert(elementIndex)}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={3} xl={2}>
                <GraphicDoughnut
                    title={'Titulo do grafico 4'}
                    labels={["passou","não passou"]}
                    quantities={[2, 1]}
                    onClickElement={(elementIndex) => alert(elementIndex)}
                />
            </Grid>
        </Grid>

    );
}

export default HomeInstitution;
