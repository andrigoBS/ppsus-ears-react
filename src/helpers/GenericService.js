import HttpHelper from './HttpHelper';

const GenericService = (pathName, sessionStorageKey, onAnyLog) => {
    const getAll = () => {
        return HttpHelper.get(pathName, getUser().token).then(onAnyLog);
    };

    const get = (id) => {
        return HttpHelper.get(`${pathName}/${id}`, getUser().token).then(onAnyLog);
    };

    const register = (data) => {
        return HttpHelper.post(pathName, data, getUser().token).then(onAnyLog);
    };

    const update = (id, data) => {
        return HttpHelper.put(`${pathName}/${id}`, data, getUser().token).then(onAnyLog);
    };

    const login = (login, password) => {
        return HttpHelper.login(`user/${pathName}/login`, login, password).then((r) => {
            if(r.isSuccess){
                localStorage.setItem(sessionStorageKey, JSON.stringify(r.body));
            }
            return r;
        }).then(onAnyLog);
    };

    const logout = () => {
        const token = getUser().token;
        localStorage.removeItem(sessionStorageKey);

        return HttpHelper.logout(`user/${pathName}/logout`, token).then((r) => {
            return r;
        }).then(onAnyLog);
    };

    const getUser = () => {
        return JSON.parse(localStorage.getItem(sessionStorageKey)) || { token: null, user: null };
    };

    const getDashboard = () => {
        return HttpHelper.get(pathName+'/dashboard', getUser().token).then(onAnyLog);
    };

    const getReport = (type) => {
        return HttpHelper.get(`reports/${type}/${pathName}`, getUser().token).then(onAnyLog);
    };

    const getStates = () => {
        return HttpHelper.get('secretary/state', getUser().token).then(onAnyLog);
    };

    const getCities = (state) => {
        return HttpHelper.get('secretary/city?state='+state, getUser().token).then(onAnyLog);
    };

    return { get, getAll, getCities, getDashboard, getReport, getStates, getUser, login, logout, pathName, register, sessionStorageKey, update };
};

export default GenericService;
