export default class HttpHelper {

    static get(path){
        return this._genericFetch('GET', path, null);
    }

    static post(path, data){
        return this._genericFetch('POST', path, data);
    }

    static put(path, data){
        return this._genericFetch('PUT', path, data);
    }

    static _genericFetch(method, path, data){
        let init = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if(data) init["body"] = JSON.stringify(data);
        return fetch(`${process.env.REACT_APP_SERVER_URL}/${path}`, init)
            .then(response => response.json());
    }
}
