const get = (path) => {
    return _genericFetch('GET', path, null);
};

const post = (path, data) => {
    return _genericFetch('POST', path, data);
};

const put = (path, data) => {
    return _genericFetch('PUT', path, data);
};

const login = (path, login, password) => {
    return _genericFetch('POST', path, null, 'Basic '+btoa(login+':'+password));
};

const logout = (path, token) => {
    return _genericFetch('POST', path, null, 'Bearer '+token);
};

const _isSuccess = (status) => status >= 200 && status <= 299;

const _genericFetch = (method, path, data, auth) => {
    const init = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if(auth) { init.headers['authorization'] = auth; }
    if(data) { init['body'] = JSON.stringify(data); }
    return fetch(process.env.REACT_APP_SERVER_URL+'/'+path, init)
        .then(response => response.json().then(body => ({ status: response.status, isSuccess: _isSuccess(response.status), body })));
};

export default { get, post, put, login, logout };
