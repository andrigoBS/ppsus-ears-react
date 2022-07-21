import React from 'react';
import { BrowserRouter, Route, Routes as RoutesRouter } from 'react-router-dom';
import Secretary from './secretary/Secretary';
import Institution from './institution/Institution';
import Site from './site/Site';
import Therapist from './therapist/Therapist';
import Parents from './parents/Parents';
import { ViewConfigurationProvider } from '../providers/viewConfiguration/ViewConfiguration';
import TopBar from '../components/TopBar';
import PageNotFound from './site/pages/PageNotFound';

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
                    <ViewConfigurationProvider baseRoute={'/'} title={''}>
                        <TopBar>
                            <PageNotFound/>
                        </TopBar>
                    </ViewConfigurationProvider>
                } />
            </RoutesRouter>
        </BrowserRouter>
    );
};

export default Routes;
