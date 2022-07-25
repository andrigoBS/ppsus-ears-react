import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useViewConfiguration } from '../viewConfiguration/ViewConfiguration';

const AuthContext = React.createContext(null);
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const configuration = useViewConfiguration();

    const from = location.state?.from?.pathname || configuration.baseRoute;
    const service = configuration.service;

    const [user, setUser] = React.useState(service.getUser());

    const login = (login, password) => {
        service.login(login, password).then(({ body }) => {
            setUser(body); //TODO: fazer tratamento de erro, status diferente de 200
            navigate(from, { replace: true });
        });
    };

    const logout = (redirectTo) => {
        service.logout(); //TODO: Criar logout backend
        setUser(service.getUser());
        if(redirectTo) { navigate(redirectTo, { replace: true }); }
    };

    const value = { user: user.user, token: user.token, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return React.useContext(AuthContext);
};

export const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();
    const configuration = useViewConfiguration();

    if (!auth.user) {
        return <Navigate to={configuration.loginRoute} state={{ from: location }} replace />;
    }

    return children;
};

export const RedirectIfAuth = ({ children }) => {
    const auth = useAuth();
    const configuration = useViewConfiguration();

    if (auth.user) {
        return <Navigate to={configuration.baseRoute} replace />;
    }

    return children;
};