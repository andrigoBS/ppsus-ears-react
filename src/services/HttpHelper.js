export default class HttpHelper {

    static get(path){
        return this._genericFetch('GET', path, null);
    }

    static post(path, data){
        return this._genericFetch('POST', path, data);
    }

    static login(path, login, password){
        return this._genericFetch('POST', path, null, 'Basic '+btoa(login+':'+password));
    }

    static put(path, data){
        return this._genericFetch('PUT', path, data);
    }

    static _genericFetch(method, path, data, auth){
        let init = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if(auth) init.headers['authorization'] = auth;
        if(data) init["body"] = JSON.stringify(data);
        return fetch(process.env.REACT_APP_SERVER_URL+'/'+path, init)
            .then(response => response.json());
    }
}
