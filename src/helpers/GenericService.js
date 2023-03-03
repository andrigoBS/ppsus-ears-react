import HttpHelper from './HttpHelper';

const GenericService = (pathName, sessionStorageKey) => {
    const getAll = () => {
        return HttpHelper.get(pathName, getUser().token);
    };

    const get = (id) => {
        return HttpHelper.get(`${pathName}/${id}`, getUser().token);
    };

    const register = (data) => {
        return HttpHelper.post(pathName, data, getUser().token);
    };

    const update = (id, data) => {
        return HttpHelper.put(`${pathName}/${id}`, data, getUser().token);
    };

    const login = (login, password) => {
        return HttpHelper.login(`user/${pathName}/login`, login, password).then((r) => {
            if(r.isSuccess){
                localStorage.setItem(sessionStorageKey, JSON.stringify(r.body));
            }
            return r;
        });
    };

    const logout = () => {
        const token = getUser().token;
        localStorage.removeItem(sessionStorageKey);

        return HttpHelper.logout(`user/${pathName}/logout`, token).then((r) => {
            return r;
        });
    };

    const getUser = () => {
        return JSON.parse(localStorage.getItem(sessionStorageKey)) || { token: null, user: null };
    };

    const getDashboard = () => {
        return HttpHelper.get(pathName+'/dashboard', getUser().token);
    };

    const getReport = (type) => {
        return HttpHelper.get(`reports/${type}/${pathName}`, getUser().token);
    };

    const getStates = () => {
        return HttpHelper.get('secretary/state', getUser().token);
    };

    const getCities = (state) => {
        return HttpHelper.get('secretary/city?state='+state, getUser().token);
    };

    return { get, getAll, getCities, getDashboard, getReport, getStates, getUser, login, logout, pathName, register, sessionStorageKey, update };
};

export default GenericService;
