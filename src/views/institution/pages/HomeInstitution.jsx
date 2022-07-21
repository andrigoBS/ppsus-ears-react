import React, {useEffect, useState} from "react";
import InstitutionService from "../../../services/institution/InstitutionService";
import {GraphicDoughnut} from "../../../components/graphics/GraphicDoughnut";
import {Grid, Typography} from "@mui/material";
import {useAuth} from "../../../providers/auth/Auth";
import {GraphicBar} from "../../../components/graphics/GraphicBar";
import {array} from "prop-types";

const HomeInstitution = () => {
    const [response, setResponse] = useState("");
    const auth = {user: {name: "test"}}; //useAuth();

    useEffect(() => {
        InstitutionService.getAll().then(setResponse);
    }, []);

    return (
        <Grid container sx={{padding: '15px 45px;' /*padding: '15px'*/}}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography component='h3' variant='h3' sx={{paddingBottom: '15px'}}>
                    Olá {(auth.user && auth.user.name) || 'Institution'} {response.message}
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

            <Grid item xs={12} sm={12} md={6}>
                <GraphicBar
                    title={'Titulo do grafico 5'}
                    labels={Array(5).fill(1).map((value, index) => "teste "+index)}
                    quantities={Array(5).fill(1).map((value) => Math.random() * 100)}
                    onClickElement={(elementIndex) => alert(elementIndex)}
                />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
                <GraphicBar
                    title={'Titulo do grafico 5'}
                    labels={Array(50).fill(1).map((value, index) => "teste "+index)}
                    quantities={Array(50).fill(1).map((value) => Math.random() * 100)}
                    onClickElement={(elementIndex) => alert(elementIndex)}
                />
            </Grid>
        </Grid>

    );
};

export default HomeInstitution;
