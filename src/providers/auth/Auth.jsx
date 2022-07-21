import React from "react";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {useViewConfiguration} from "../viewConfiguration/ViewConfiguration";

let AuthContext = React.createContext(null);
export const AuthProvider = ({ children }) => {
    let navigate = useNavigate();
    let location = useLocation();
    let configuration = useViewConfiguration();

    let from = location.state?.from?.pathname || configuration.baseRoute;
    let service = configuration.service;

    let [user, setUser] = React.useState(service.getUser());

    let login = (login, password) => {
        service.login(login, password).then(({body}) => {
            setUser(body); //TODO: fazer tratamento de erro, status diferente de 200
            navigate(from, { replace: true });
        });
    };

    let logout = (redirectTo) => {
        service.logout(); //TODO: Criar logout backend
        setUser(service.getUser());
        if(redirectTo) navigate(redirectTo, { replace: true });
    };

    let value = { user: user.user, token: user.token, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return React.useContext(AuthContext);
};

export const RequireAuth = ({ children }) => {
    let auth = useAuth();
    let location = useLocation();
    let configuration = useViewConfiguration();

    if (!auth.user) {
        return <Navigate to={configuration.loginRoute} state={{ from: location }} replace />;
    }

    return children;
};

export const RedirectIfAuth = ({ children }) => {
    let auth = useAuth();
    let configuration = useViewConfiguration();

    if (auth.user) {
        return <Navigate to={configuration.baseRoute} replace />;
    }

    return children;
};