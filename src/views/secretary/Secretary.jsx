import { AuthProvider, RedirectIfAuth, RequireAuth } from '../../providers/auth/Auth';
import { Route, Routes } from 'react-router-dom';
import BaseLoginPaper from '../../components/bases/BaseLoginPaper';
import HomeSecretary from './pages/HomeSecretary';
import PageNotFound from '../site/pages/PageNotFound';
import React from 'react';
import RegisterSecretary from './pages/login/RegisterSecretary';
import SecretaryService from '../../services/secretary/SecretaryService';
import TopBar from '../../components/TopBar';
import UserAvatarDropDown from '../../components/genericUser/UserAvatarDropDown';
import { ViewConfigurationProvider } from '../../providers/viewConfiguration/ViewConfiguration';

const Secretary = () => {
    return (
        <ViewConfigurationProvider service={SecretaryService} title={'Área da Secretaria'} baseRoute={'/secretaria'} loginRoute={'/login'}>
            <AuthProvider>
                <TopBar rightElement={<UserAvatarDropDown withNotification={true}/>}>
                    <Routes>
                        <Route path={'/'} element={<RequireAuth> <HomeSecretary/> </RequireAuth>} />
                        <Route path={'/login'} element={<RedirectIfAuth> <BaseLoginPaper/> </RedirectIfAuth>} />
                        <Route path={'/cadastro'} element={<RedirectIfAuth> <RegisterSecretary/> </RedirectIfAuth>} />
                        <Route path={'*'} element={<PageNotFound/>} />
                    </Routes>
                </TopBar>
            </AuthProvider>
        </ViewConfigurationProvider>
    );
};

export default Secretary;
