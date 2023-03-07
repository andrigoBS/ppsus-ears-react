import React from 'react';
import GenericService from '../../helpers/GenericService';
import HttpHelper from '../../helpers/HttpHelper';
import { useGenericLogger } from '../../providers/genericLogger/GenericLogger';

const SecretaryService = (genericLog) => {
    const generic = GenericService('secretary', 'secretaryUser', genericLog);

    const getZones = () => {
        return HttpHelper.get(`${generic.pathName}/zone`, generic.getUser().token).then(genericLog);
    };

    const getAllZonesWithCities = () => {
        return HttpHelper.get(`${generic.pathName}/zone/with-cities`, generic.getUser().token).then(genericLog);
    };

    const registerZone = (data) => {
        return HttpHelper.post(`${generic.pathName}/zone/user`, data, generic.getUser().token).then(genericLog);
    };

    const isStateSecretary = () => {
        return HttpHelper.get(`${generic.pathName}/${generic.getUser().user.id}/is-state`, generic.getUser().token).then(genericLog);
    };

    return { ...generic, getAllZonesWithCities, getZones, isStateSecretary, registerZone };
};

let secretaryServiceInstance = null;
const useSecretaryService = () => {
    const { genericLog } = useGenericLogger();
    if(secretaryServiceInstance === null) {
        secretaryServiceInstance = SecretaryService(genericLog);
    }
    return secretaryServiceInstance;
};
export default useSecretaryService;
