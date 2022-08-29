import React from 'react';
import { AuthProvider, RedirectIfAuth, RequireAuth } from '../../providers/auth/Auth';
import { Route, Routes } from 'react-router-dom';
import BaseLoginPaper from '../../components/bases/login/BaseLoginPaper';
//import EditParents from '../parents/pages/edit/EditParents';
import MetaLinkMenu from './MetaLinkMenu';
import HomeParents from './pages/HomeParents';
import PageNotFound from '../site/pages/PageNotFound';
import ParentsService from '../../services/parents/ParentsService';
import TopBar from '../../components/TopBar';
import UserAvatarDropDown from '../../components/dropDown/UserDropDown';
import { ViewConfigurationProvider } from '../../providers/viewConfiguration/ViewConfiguration';

const Parents = () => {
    return (
        <ViewConfigurationProvider service={ParentsService} title={'Área dos Pais'} loginRoute={'/login'} baseRoute={'/pais'}>
            <AuthProvider>
                <TopBar rightElement={<UserAvatarDropDown withNotification={false}/>} linkMenu={MetaLinkMenu}>
                    <Routes>
                        <Route path={'/'} element={<RequireAuth> <HomeParents/> </RequireAuth>}/>
                        <Route path={'/login'} element={<RedirectIfAuth> <BaseLoginPaper/> </RedirectIfAuth>}/>
                        {/*<Route path={'/minha-conta/:id'} element={<RequireAuth> <EditParents/> </RequireAuth>} />*/}
                        <Route path={'*'} element={<PageNotFound/>} />
                    </Routes>
                </TopBar>
            </AuthProvider>
        </ViewConfigurationProvider>
    );
};

export default Parents;
