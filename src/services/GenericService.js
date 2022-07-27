import HttpHelper from './HttpHelper';

const GenericService = (pathName, sessionStorageKey) => {
    const getAll = () => {
        return HttpHelper.get(pathName);
    };

    const get = (id) => {
        return HttpHelper.get(`${pathName}/${id}`);
    };

    const register = (data) => {
        return HttpHelper.post(pathName, data);
    };

    const login = (login, password) => {
        return HttpHelper.login(pathName+'/login', login, password).then((r) => {
            sessionStorage.setItem(sessionStorageKey, JSON.stringify(r.body));
            return r;
        });
    };

    const logout = () => {
        sessionStorage.removeItem(sessionStorageKey);
        //TODO: Criar logout backend
    };

    const getUser = () => {
        return JSON.parse(sessionStorage.getItem(sessionStorageKey)) || { user: null, token: null };
    };

    const getDashboard = () => {
        return HttpHelper.get(pathName+'/dashboard');
    };

    const getReport = (type) => {
        return HttpHelper.get(`reports/${type}/${pathName}`);
    };

    return { getAll, get, register, login, logout, getUser, getDashboard, getReport, pathName, sessionStorageKey };
};

export default GenericService;
