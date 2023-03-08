import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import UserAvatarDropDown from '../../components/dropDown/UserDropDown';
import HtmlHead from '../../components/HtmlHead';
import TopBar from '../../components/TopBar';
import { AuthProvider, RedirectIfAuth, RequireAuth } from '../../providers/auth/Auth';
import PageNotFound from '../site/pages/PageNotFound';
import MetaLinkMenu from './MetaLinkMenu';
import EditSecretary from './pages/edit/EditSecretary';
import EditZones from './pages/edit/EditZones';
import HomeSecretary from './pages/HomeSecretary';
import LoginSecretary from './pages/login/LoginSecretary';
import RegisterSecretaryUser from './pages/register/RegisterSecretaryUser';
import useSecretaryService from './useSecretaryService';

const Secretary = () => {
    const service = useSecretaryService();

    const [isState, setState] = useState(service.getUser()?.user?.type === 'STATE');

    useEffect(() => {
        setState(service.getUser()?.user?.type === 'STATE');
    }, [service, service?.getUser(), service?.getUser()?.user, service?.getUser()?.user?.type]);

    return (
        <AuthProvider baseRoute={'/secretaria'} loginRoute={'/secretaria/login'} service={service}>
            <TopBar
                linkMenu={MetaLinkMenu(isState)}
                baseRoute={'/secretaria'}
                title={'Área da Secretaria'}
                rightElement={
                    <UserAvatarDropDown
                        loginRoute={'/secretaria/login'}
                        editRoute={'/secretaria/minha-conta/'}
                        logoutRoute={'/secretaria'}
                        withNotification
                    />
                }
            >
                <HtmlHead userType={'Secretaria'} />
                <Routes>
                    <Route path={'/'} element={<RequireAuth> <HomeSecretary/> </RequireAuth>} />
                    <Route path={'/login'} element={<RedirectIfAuth> <LoginSecretary /> </RedirectIfAuth>} />
                    <Route path={'/cadastro'} element={<RedirectIfAuth> <RegisterSecretaryUser/> </RedirectIfAuth>} />
                    <Route path={'/minha-conta/:id'} element={<RequireAuth> <EditSecretary/> </RequireAuth>} />
                    <Route path={'/gerenciar-regioes'} element={<RequireAuth> <EditZones/> </RequireAuth>} />
                    <Route path={'*'} element={<PageNotFound/>} />
                </Routes>
            </TopBar>
        </AuthProvider>
    );
};

export default Secretary;
