import HttpHelper from './HttpHelper';

const GenericService = (pathName, sessionStorageKey, onAnyLog) => {
    const getAll = () => {
        return HttpHelper.get(pathName).then(onAnyLog);
    };

    const get = (id) => {
        return HttpHelper.get(`${pathName}/${id}`).then(onAnyLog);
    };

    const register = (data) => {
        return HttpHelper.post(pathName, data).then(onAnyLog);
    };

    const login = (login, password) => {
        return HttpHelper.login(`user/${pathName}/login`, login, password).then((r) => {
            if(r.isSuccess){
                sessionStorage.setItem(sessionStorageKey, JSON.stringify(r.body));
            }
            return r;
        }).then(onAnyLog);
    };

    const logout = () => {
        const token = getUser().token;
        sessionStorage.removeItem(sessionStorageKey);

        return HttpHelper.logout(`user/${pathName}/logout`, token).then((r) => {
            return r;
        }).then(onAnyLog);
    };

    const getUser = () => {
        return JSON.parse(sessionStorage.getItem(sessionStorageKey)) || { user: null, token: null };
    };

    const getDashboard = () => {
        return HttpHelper.get(pathName+'/dashboard').then(onAnyLog);
    };

    const getReport = (type) => {
        return HttpHelper.get(`reports/${type}/${pathName}`).then(onAnyLog);
    };

    return { getAll, get, register, login, logout, getUser, getDashboard, getReport, pathName, sessionStorageKey };
};

export default GenericService;
