import HttpHelper from "../HttpHelper";

const InstitutionService = function () {

    const pathName = 'institution';

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

    this.referralServiceRegister = (data) => {
        return HttpHelper.post(`${pathName}/referral-service`, data);
    }
}

export default new InstitutionService();
