import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserAvatarDropDown from '../../components/dropDown/UserDropDown';
import TopBar from '../../components/TopBar';
import { AuthProvider, RedirectIfAuth, RequireAuth } from '../../providers/auth/Auth';
import PageNotFound from '../site/pages/PageNotFound';
import MetaLinkMenu from './MetaLinkMenu';
import HomeParents from './pages/HomeParents';
import LoginParents from './pages/login/LoginParents';
import useParentsService from './useParentsService';

const Parents = () => {
    const service = useParentsService();

    return (
        <AuthProvider service={service} loginRoute={'/pais/login'} baseRoute={'/pais'}>
            <TopBar
                linkMenu={MetaLinkMenu}
                title={'Área dos Pais'}
                baseRoute={'/pais'}
                rightElement={
                    <UserAvatarDropDown
                        loginRoute={'/pais/login'}
                        editRoute={'/pais/minha-conta/'}
                        logoutRoute={'/pais'}
                        withNotification
                    />
                }
            >
                <Routes>
                    <Route path={'/'} element={<RequireAuth> <HomeParents/> </RequireAuth>}/>
                    <Route path={'/login'} element={<RedirectIfAuth> <LoginParents/> </RedirectIfAuth>}/>
                    <Route path={'*'} element={<PageNotFound/>} />
                </Routes>
            </TopBar>
        </AuthProvider>
    );
};

export default Parents;
