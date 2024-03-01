import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider, RedirectIfAuth, RequireAuth } from '../../../providers/auth/Auth';
import PageNotFound from '../../../users/site/pages/PageNotFound';
import UserAvatarDropDown from '../../dropDown/UserDropDown';
import HtmlHead from '../../HtmlHead';
import TopBar from '../../TopBar';
import BaseDashboard from '../dashboard/BaseDashboard';
import BasePasswordForgotten from '../forgottenPassword/BasePasswordForgotten';
import BaseHome from '../home/BaseHome';
import BaseLoginPaper from '../login/BaseLoginPaper';

const BaseUserRoute = ({ baseRoute, children, hasRegisterRoute, metaRoutesLink, service, userTypeTitle, userTypeTitleWithConjunction, withDashboard, withNotifications }) => {
    return (
        <AuthProvider service={service} baseRoute={baseRoute} loginRoute={`${baseRoute}/login`}>
            <TopBar
                baseRoute={baseRoute}
                title={`Área ${userTypeTitleWithConjunction}`}
                linkMenu={metaRoutesLink}
                rightElement={
                    <UserAvatarDropDown
                        editRoute={`${baseRoute}/minha-conta`}
                        logoutRoute={baseRoute}
                        loginRoute={`${baseRoute}/login`}
                        withNotification={withNotifications}
                    />
                }
            >
                <HtmlHead userType={userTypeTitle} />
                <Routes>
                    <Route path={'/'} element={
                        <RequireAuth>
                            <BaseHome meta={metaRoutesLink} />
                        </RequireAuth>
                    } />

                    <Route path={'/esqueci-minha-senha'} element={
                        <RedirectIfAuth>
                            <BasePasswordForgotten userTypeTitle={userTypeTitle} />
                        </RedirectIfAuth>
                    } />

                    <Route path={'/login'} element={
                        <RedirectIfAuth>
                            <BaseLoginPaper
                                userTypeTitle={userTypeTitle}
                                title={`Seja bem-vindo a Área ${userTypeTitleWithConjunction}`}
                                registerRoute={hasRegisterRoute? '../cadastro' : undefined}
                                // forgotPasswordRoute={'../esqueci-minha-senha'}
                            />
                        </RedirectIfAuth>
                    } />

                    {withDashboard &&
                        <Route path={'/painel'} element={
                            <RequireAuth>
                                <BaseDashboard
                                    title={`Painel ${userTypeTitleWithConjunction}`}
                                    getDashboard={service.getDashboard}
                                    getReport={service.getReport}
                                    userTypeTitle={userTypeTitle}/>
                            </RequireAuth>
                        }/>
                    }

                    {children}

                    <Route path={'*'} element={
                        <>
                            <HtmlHead userType={userTypeTitle} subTitle={'Página não encontrada'}/>
                            <PageNotFound baseRoute={baseRoute}/>
                        </>
                    } />
                </Routes>
            </TopBar>
        </AuthProvider>
    );
};

export default BaseUserRoute;
