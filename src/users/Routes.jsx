import React from 'react';
import { BrowserRouter, Route, Routes as RoutesRouter } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Institution from './institution/Institution';
import Parents from './parents/Parents';
import Secretary from './secretary/Secretary';
import PageNotFound from './site/pages/PageNotFound';
import Site from './site/Site';
import Therapist from './therapist/Therapist';

const Routes = () => {
    return (
        <BrowserRouter>
            <RoutesRouter>
                <Route exact path={'/'} element={<Site/>} />
                <Route path={'/pais/*'} element={<Parents/>} />
                <Route path={'/secretaria/*'} element={<Secretary/>} />
                <Route path={'/institucional/*'} element={<Institution/>} />
                <Route path={'/fono/*'} element={<Therapist/>} />
                <Route path={'*'} element={
                    <TopBar baseRoute={'/'}>
                        <PageNotFound/>
                    </TopBar>
                } />
            </RoutesRouter>
        </BrowserRouter>
    );
};

export default Routes;
