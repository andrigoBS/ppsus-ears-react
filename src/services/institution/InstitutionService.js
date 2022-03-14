import HttpHelper from "../HttpHelper";

export default class InstitutionService {
    static getAll(callback){
        HttpHelper.get('institution','', callback);
    }
    static get(id, callback){
        HttpHelper.get('institution', id, callback);
    }
    static register(data, callback){
        HttpHelper.post('institution','', data, callback);
    }
}
