import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import HomeParents from './pages/HomeParents';
import { AuthProvider, RedirectIfAuth, RequireAuth } from '../../providers/auth/Auth';
import ParentsService from '../../services/parents/ParentsService';
import BaseLoginPaper from '../../components/bases/BaseLoginPaper';
import UserAvatarDropDown from '../../components/genericUser/UserAvatarDropDown';
import { ViewConfigurationProvider } from '../../providers/viewConfiguration/ViewConfiguration';
import PageNotFound from '../site/pages/PageNotFound';

const Parents = () => {
    return (
        <ViewConfigurationProvider service={ParentsService} title={'Área dos Pais'} loginRoute={'/login'} baseRoute={'/pais'}>
            <AuthProvider>
                <TopBar rightElement={<UserAvatarDropDown withNotification={false}/>}>
                    <Routes>
                        <Route path={'/'} element={<RequireAuth> <HomeParents/> </RequireAuth>}/>
                        <Route path={'/login'} element={<RedirectIfAuth> <BaseLoginPaper/> </RedirectIfAuth>}/>
                        <Route path={'*'} element={<PageNotFound/>} />
                    </Routes>
                </TopBar>
            </AuthProvider>
        </ViewConfigurationProvider>
    );
};

export default Parents;
