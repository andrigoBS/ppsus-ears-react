import { Route, Routes } from 'react-router-dom';
import { AuthProvider, RedirectIfAuth, RequireAuth } from '../../providers/auth/Auth';
import BaseLoginPaper from '../../components/bases/BaseLoginPaper';
import MetaLinkMenu from './MetaLinkMenu';
import EditTherapist from './pages/edit/EditTherapist';
import HomeTherapist from './pages/HomeTherapist';
import PageNotFound from '../site/pages/PageNotFound';
import React, { useEffect } from 'react';
import RegisterConsultation from './pages/consultation/RegisterConsultation';
import RegisterIndicator from './pages/indicator/RegisterIndicator';
import RegisterTherapist from './pages/register/RegisterTherapist';
import TherapistService from '../../services/therapist/TherapistService';
import TopBar from '../../components/TopBar';
import UserAvatarDropDown from '../../components/genericUser/UserAvatarDropDown';
import { ViewConfigurationProvider } from '../../providers/viewConfiguration/ViewConfiguration';


const Therapist = () => {

    return (
        <ViewConfigurationProvider service={TherapistService} title={'Área do Fonoaudiólogo'} baseRoute={'/fono'} loginRoute={'/login'}>
            <AuthProvider>
                <TopBar rightElement={<UserAvatarDropDown withNotification={true}/>} linkMenu={MetaLinkMenu}>
                    <Routes>
                        <Route path={'/'} element={<RequireAuth> <HomeTherapist/> </RequireAuth>} />
                        <Route path={'/login'} element={<RedirectIfAuth> <BaseLoginPaper/> </RedirectIfAuth>} />
                        <Route path={'/cadastro'} element={<RedirectIfAuth> <RegisterTherapist/> </RedirectIfAuth>} />
                        <Route path={'/triagem/cadastro'} element={<RequireAuth> <RegisterConsultation/> </RequireAuth>} />
                        <Route path={'/minha-conta/:id'} element={<RequireAuth> <EditTherapist/> </RequireAuth>} />
                        <Route path={'/indicador/cadastro'} element={<RequireAuth> <RegisterIndicator/> </RequireAuth>} />
                        <Route path={'/consulta/cadastro'} element={<RequireAuth> <RegisterConsultation/> </RequireAuth>} />
                        <Route path={'*'} element={<PageNotFound/>} />
                    </Routes>
                </TopBar>
            </AuthProvider>
        </ViewConfigurationProvider>
    );
};

export default Therapist;
