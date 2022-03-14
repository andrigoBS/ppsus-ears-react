import HttpHelper from "../HttpHelper";

export default class SecretaryService {
    static getAll(callback){
        HttpHelper.get('secretary','', callback);
    }
    static get(id, callback){
        HttpHelper.get('secretary', id, callback);
    }
    static register(data, callback){
        HttpHelper.post('secretary','', data, callback);
    }
}
