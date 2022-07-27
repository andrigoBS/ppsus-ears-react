const get = (path) => {
    return _genericFetch('GET', path, null);
};

const post = (path, data) => {
    return _genericFetch('POST', path, data);
};

const login = (path, login, password) => {
    return _genericFetch('POST', path, null, 'Basic '+btoa(login+':'+password));
};

const put = (path, data) => {
    return _genericFetch('PUT', path, data);
};

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
        .then(response => response.json());
};

export default { get, post, login, put };
