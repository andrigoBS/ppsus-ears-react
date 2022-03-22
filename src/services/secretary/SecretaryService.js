import HttpHelper from "../HttpHelper";

const SecretaryService = () => {

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
}

export default new SecretaryService();
