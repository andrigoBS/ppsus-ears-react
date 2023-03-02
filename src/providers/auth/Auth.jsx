import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const AuthContext = React.createContext(null);
export const AuthProvider = ({ baseRoute, children, loginRoute, service }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || baseRoute;

    const [user, setUser] = React.useState(service.getUser());

    const login = (login, password) => {
        service.login(login, password).then((response) => {
            if(response.isSuccess) {
                setUser(response.body);
                navigate(from, { replace: true });
            }
        });
    };

    const logout = (redirectTo) => {
        service.logout();
        setUser(service.getUser());
        if(redirectTo) { navigate(redirectTo, { replace: true }); }
    };

    const value = { baseRoute, login, loginRoute, logout, token: user.token, user: user.user };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return React.useContext(AuthContext);
};

export const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.user) {
        return <Navigate to={auth.loginRoute} state={{ from: location }} replace />;
    }

    return children;
};

export const RedirectIfAuth = ({ children }) => {
    const auth = useAuth();

    if (auth.user) {
        return <Navigate to={auth.baseRoute} replace />;
    }

    return children;
};
