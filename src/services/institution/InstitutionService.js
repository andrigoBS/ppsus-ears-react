import HttpHelper from "../HttpHelper";

const InstitutionService = () => {

    const pathName = 'institution';

    this.getAll = () => {
        return HttpHelper.get(pathName);
    }

    this.get = (id) => {
        return HttpHelper.get(`${this.pathName}/${id}`);
    }

    this.register = (data) => {
        return HttpHelper.post(this.pathName, data);
    }
}

export default new InstitutionService();
