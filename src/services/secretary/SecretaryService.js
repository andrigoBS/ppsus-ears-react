import HttpHelper from "../HttpHelper";

const SecretaryService = function () {

     const pathName = 'secretary';

     this.getAll = () => {
        return HttpHelper.get(pathName);
    }

    this.get = (id) => {
        return HttpHelper.get(`${pathName}/${id}`);
    }

    this.register = (data) => {
        return HttpHelper.post(pathName, data);
    }

    this.login = (login, password) => {
         return HttpHelper.login(pathName+'/login', login, password);
    }
}

export default new SecretaryService();
