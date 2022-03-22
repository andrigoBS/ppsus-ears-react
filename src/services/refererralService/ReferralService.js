import HttpHelper from "../HttpHelper";

const ReferralService = function () {

    const pathName = 'referralService';

    this.getAll = () => {
        return HttpHelper.get(pathName);
    }

    this.get = (id) => {
        return HttpHelper.get(`${pathName}/${id}`);
    }

    this.register = (data) => {
        return HttpHelper.post(pathName, data);
    }
}

export default new ReferralService();
