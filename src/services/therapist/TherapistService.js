import HttpHelper from "../HttpHelper";

export default class TherapistService {
    static getAll(callback){
        HttpHelper.get('therapist','', callback);
    }
    static get(id, callback){
        HttpHelper.get('therapist', id, callback);
    }
    static register(data, callback){
        HttpHelper.post('therapist','', data, callback);
    }
    static consultationRegister(data, callback){
        HttpHelper.post('therapist','consultation', data, callback);
    }
}
