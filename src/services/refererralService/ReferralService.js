import HttpHelper from "../HttpHelper";

export default class ReferralService {
    static getAll(callback){
        HttpHelper.get('referralService','', callback);
    }
    static get(id, callback){
        HttpHelper.get('referralService', id, callback);
    }
    static register(data, callback){
        HttpHelper.post('referralService','', data, callback);
    }
}
