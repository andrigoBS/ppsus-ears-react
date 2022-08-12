import GenericService from '../GenericService';
import HttpHelper from '../HttpHelper';

const SecretaryService = (onAnyLog) => {
    const generic = GenericService('secretary', 'secretaryUser', onAnyLog);

    const getStates = () => {
        return HttpHelper.get(`${generic.pathName}/state`, generic.getUser().token).then(onAnyLog);
    };

    const getZones = () => {
        return HttpHelper.get(`${generic.pathName}/zone`, generic.getUser().token).then(onAnyLog);
    };

    const registerZone = (data) => {
        return HttpHelper.post(`${generic.pathName}/zone/user`, data, generic.getUser().token).then(onAnyLog);
    };

    return { ...generic, getStates, getZones, registerZone };
};

export default SecretaryService;
