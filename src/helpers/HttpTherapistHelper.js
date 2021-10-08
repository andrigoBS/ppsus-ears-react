import HttpHelper from "./HttpHelper";

export default class HttpTherapistHelper {
    static getAll(callback){
        HttpHelper.get('therapist','', callback);
    }
    static get(id, callback){
        HttpHelper.get('therapist', id, callback);
    }
    static register(data, callback){
        HttpHelper.post('therapist','', data, callback);
    }
}
