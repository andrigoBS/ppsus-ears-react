import HttpHelper from "../HttpHelper";

const SecretaryService = function () {
     const pathName = 'secretary';
    const sessionStorageKey = 'secretaryUser';

     this.getAll = () => {
        return HttpHelper.get(pathName);
    };

    this.get = (id) => {
        return HttpHelper.get(`${pathName}/${id}`);
    };

    this.register = (data) => {
        return HttpHelper.post(pathName, data);
    };

    this.login = (login, password) => {
        return HttpHelper.login(pathName+'/login', login, password).then((r) => {
            sessionStorage.setItem(sessionStorageKey, JSON.stringify(r.body));
            return r;
        });
    };

    this.logout = () => {
        sessionStorage.removeItem(sessionStorageKey);
        //TODO: Criar logout backend
    };

    this.getUser = () => {
        return JSON.parse(sessionStorage.getItem(sessionStorageKey)) || {user: null, token: null};
    };
};

export default new SecretaryService();
