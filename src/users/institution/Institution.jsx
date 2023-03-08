import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserAvatarDropDown from '../../components/dropDown/UserDropDown';
import HtmlHead from '../../components/HtmlHead';
import TopBar from '../../components/TopBar';
import { AuthProvider, RedirectIfAuth, RequireAuth } from '../../providers/auth/Auth';
import PageNotFound from '../site/pages/PageNotFound';
import MetaLinkMenu from './MetaLinkMenu';
import EditInstitution from './pages/edit/EditInstitution';
import HomeInstitution from './pages/HomeInstitution';
import LoginInstitution from './pages/login/LoginInstitution';
import RegisterReferralService from './pages/referralService/RegisterReferralService';
import RegisterInstitutionUser from './pages/register/RegisterInstitutionUser';
import useInstitutionService from './useInstituionService';

const Institution = () => {
    const service = useInstitutionService();

    return (
        <AuthProvider service={service} baseRoute={'/institucional'} loginRoute={'/institucional/login'}>
            <TopBar
                linkMenu={MetaLinkMenu}
                title={'Área Institucional'}
                baseRoute={'/institucional'}
                rightElement={
                    <UserAvatarDropDown
                        logoutRoute={'/institucional/login'}
                        editRoute={'/institucional/minha-conta/'}
                        loginRoute={'/institucional'}
                        withNotification
                    />
                }
            >
                <HtmlHead userType={'Institucional'} />
                <Routes>
                    <Route path={'/'} element={<RequireAuth> <HomeInstitution/> </RequireAuth>} />
                    <Route path={'/login'} element={<RedirectIfAuth> <LoginInstitution /> </RedirectIfAuth>} />
                    <Route path={'/cadastro'} element={<RedirectIfAuth> <RegisterInstitutionUser/> </RedirectIfAuth>} />
                    <Route path={'/minha-conta/:id'} element={<RequireAuth> <EditInstitution/> </RequireAuth>} />
                    <Route path={'/servico-referencia/cadastro'} element={<RequireAuth> <RegisterReferralService/> </RequireAuth>} />
                    <Route path={'*'} element={<PageNotFound/>} />
                </Routes>
            </TopBar>
        </AuthProvider>
    );
};

export default Institution;
