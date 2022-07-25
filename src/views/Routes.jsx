import { BrowserRouter, Route, Routes as RoutesRouter } from 'react-router-dom';
import Institution from './institution/Institution';
import PageNotFound from './site/pages/PageNotFound';
import Parents from './parents/Parents';
import React from 'react';
import Secretary from './secretary/Secretary';
import Site from './site/Site';
import Therapist from './therapist/Therapist';
import TopBar from '../components/TopBar';
import { ViewConfigurationProvider } from '../providers/viewConfiguration/ViewConfiguration';

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
