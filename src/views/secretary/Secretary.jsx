import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BaseLoginPaper from '../../components/bases/login/BaseLoginPaper';
import UserAvatarDropDown from '../../components/genericUser/UserAvatarDropDown';
import TopBar from '../../components/TopBar';
import { AuthProvider, RedirectIfAuth, RequireAuth } from '../../providers/auth/Auth';
import { ViewConfigurationProvider } from '../../providers/viewConfiguration/ViewConfiguration';
import SecretaryService from '../../services/secretary/SecretaryService';
import MetaLinkMenu from './MetaLinkMenu';
import EditSecretary from '../secretary/pages/edit/EditSecretary';
import EditZones from '../secretary/pages/edit/EditZones';
import PageNotFound from '../site/pages/PageNotFound';
import HomeSecretary from './pages/HomeSecretary';
import RegisterSecretaryUser from './pages/register/RegisterSecretaryUser';

const Secretary = () => {
    const isState = SecretaryService((r) => r).getUser()?.user?.type === 'STATE';

    return (
        <ViewConfigurationProvider service={SecretaryService} title={'Área da Secretaria'} baseRoute={'/secretaria'} loginRoute={'/login'}>
            <AuthProvider>
                <TopBar rightElement={<UserAvatarDropDown withNotification={true}/>} linkMenu={MetaLinkMenu(isState)}>
                    <Routes>
                        <Route path={'/'} element={<RequireAuth> <HomeSecretary/> </RequireAuth>} />
                        <Route path={'/login'} element={<RedirectIfAuth> <BaseLoginPaper registerRoute={'/cadastro'}/> </RedirectIfAuth>} />
                        <Route path={'/cadastro'} element={<RedirectIfAuth> <RegisterSecretaryUser/> </RedirectIfAuth>} />
                        <Route path={'/minha-conta/:id'} element={<RequireAuth> <EditSecretary/> </RequireAuth>} />
                        <Route path={'/gerenciar-regioes'} element={<RequireAuth> <EditZones/> </RequireAuth>} />
                        <Route path={'*'} element={<PageNotFound/>} />
                    </Routes>
                </TopBar>
            </AuthProvider>
        </ViewConfigurationProvider>
    );
};

export default Secretary;
