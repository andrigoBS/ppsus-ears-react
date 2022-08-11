import GenericService from '../GenericService';
import HttpHelper from '../HttpHelper';

const SecretaryService = (onAnyLog) => {
    const generic = GenericService('secretary', 'secretaryUser', onAnyLog);

    const getStates = () => {
        return HttpHelper.get('secretary/state', generic.getUser().token).then(onAnyLog);
    };

    const getZones = () => {
        return HttpHelper.get('secretary/zone', generic.getUser().token).then(onAnyLog);
    };

    return { ...generic, getStates, getZones };
};

export default SecretaryService;
