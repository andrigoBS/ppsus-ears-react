import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserAvatarDropDown from '../../components/dropDown/UserDropDown';
import HtmlHead from '../../components/HtmlHead';
import TopBar from '../../components/TopBar';
import { AuthProvider, RedirectIfAuth, RequireAuth } from '../../providers/auth/Auth';
import PageNotFound from '../site/pages/PageNotFound';
import MetaLinkMenu from './MetaLinkMenu';
import ListConduct from './pages/conduct/ListConduct';
import RegisterConduct from './pages/conduct/RegisterConduct';
import EditTherapist from './pages/edit/EditTherapist';
import ListEquipment from './pages/equipment/ListEquipment';
import RegisterEquipment from './pages/equipment/RegisterEquipment';
import HomeTherapist from './pages/HomeTherapist';
import ListIndicator from './pages/indicator/ListIndicator';
import RegisterIndicator from './pages/indicator/RegisterIndicator';
import LoginTherapist from './pages/login/LoginTherapist';
import ListOrientation from './pages/orientation/ListOrientation';
import RegisterOrientation from './pages/orientation/RegisterOrientation';
import PasswordForgotten from './pages/register/PasswordForgotten';
import RegisterTherapist from './pages/register/RegisterTherapist';
import ListBaby from './pages/triage/components/ListBaby';
import ListTriage from './pages/triage/ListTriage';
import RegisterTriage from './pages/triage/RegisterTriage';
import useTherapistService from './useTherapistService';

const Therapist = () => {
    const service = useTherapistService();

    return (
        <AuthProvider service={service} baseRoute={'/fono'} loginRoute={'/fono/login'}>
            <TopBar
                baseRoute={'/fono'}
                title={'Área do Fonoaudiólogo'}
                linkMenu={MetaLinkMenu}
                rightElement={
                    <UserAvatarDropDown
                        editRoute={'/fono/minha-conta/'}
                        logoutRoute={'/fono'}
                        loginRoute={'/fono/login'}
                        withNotification
                    />
                }
            >
                <HtmlHead userType={'Fonoaudiólogo'} />
                <Routes>
                    <Route path={'/'} element={
                        <RequireAuth>
                            <HomeTherapist />
                        </RequireAuth>
                    } />
                    <Route path={'/login'} element={
                        <RedirectIfAuth>
                            <LoginTherapist/>
                        </RedirectIfAuth>
                    } />
                    <Route path={'/cadastro'} element={
                        <RedirectIfAuth>
                            <RegisterTherapist />
                        </RedirectIfAuth>
                    } />
                    <Route path={'/esqueci-minha-senha'} element={
                        <RedirectIfAuth>
                            <PasswordForgotten />
                        </RedirectIfAuth>
                    } />
                    <Route path={'/minha-conta/:id'} element={
                        <RequireAuth>
                            <EditTherapist />
                        </RequireAuth>
                    } />

                    <Route path={'/triagem'} element={
                        <RequireAuth>
                            <ListTriage />
                        </RequireAuth>
                    } />
                    <Route path={'/triagem/cadastro'} element={
                        <RequireAuth>
                            <RegisterTriage />
                        </RequireAuth>
                    } />
                    <Route path={'/bebe'} element={
                        <RequireAuth>
                            <ListBaby />
                        </RequireAuth>
                    } />

                    <Route path={'/indicador'} element={
                        <RequireAuth>
                            <ListIndicator />
                        </RequireAuth>
                    } />
                    <Route path={'/indicador/cadastro'} element={
                        <RequireAuth>
                            <RegisterIndicator />
                        </RequireAuth>
                    } />

                    <Route path={'/equipamento'} element={
                        <RequireAuth>
                            <ListEquipment />
                        </RequireAuth>
                    } />
                    <Route path={'/equipamento/cadastro'} element={
                        <RequireAuth>
                            <RegisterEquipment />
                        </RequireAuth>
                    } />

                    <Route path={'/conduta'} element={
                        <RequireAuth>
                            <ListConduct />
                        </RequireAuth>
                    } />
                    <Route path={'/conduta/cadastro'} element={
                        <RequireAuth>
                            <RegisterConduct />
                        </RequireAuth>
                    } />

                    <Route path={'/orientacao'} element={
                        <RequireAuth>
                            <ListOrientation />
                        </RequireAuth>
                    } />
                    <Route path={'/orientacao/cadastro'} element={
                        <RequireAuth>
                            <RegisterOrientation />
                        </RequireAuth>
                    } />

                    <Route path={'*'} element={<PageNotFound />} />
                </Routes>
            </TopBar>
        </AuthProvider>
    );
};

export default Therapist;
