export default class HttpHelper {
    static get(view, path, callback){
        this._genericFetch('GET', view, path, null, callback);
    }

    static post(view, path, data, callback){
        this._genericFetch('POST', view, path, data, callback);
    }

    static put(view, path, data, callback){
        this._genericFetch('PUT', view, path, data, callback);
    }

    static _genericFetch(method, view, path, data, callback){
        let init = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if(data) init["body"] = JSON.stringify(data);
        fetch(process.env._REACT_APP_SERVER_URL+"/"+view+"/"+path, init).then(response => response.json()).then(callback);
    }
}
