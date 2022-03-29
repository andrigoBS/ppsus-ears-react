import HttpHelper from "../HttpHelper";

const ParentsService = function () {

    const pathName = 'parents';

    this.getAll = () => {
        return HttpHelper.get(pathName);
    }

    this.get = (id) => {
        return HttpHelper.get(`${pathName}/${id}`);
    }

    this.login = (login, password) => {
        return HttpHelper.login(pathName+'/login', login, password);
    }
}

export default new ParentsService();
