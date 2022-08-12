import GenericService from '../GenericService';
import HttpHelper from '../HttpHelper';

const TherapistService = (onAnyLog) => {
    const generic = GenericService('therapist','therapistUser', onAnyLog);

    const getAllInstitutions = () => {
        return HttpHelper.get('institution', generic.getUser().token).then(onAnyLog);
    };

    const getXpTypes = () => {
        return HttpHelper.get(`${generic.pathName}/xp-types`, generic.getUser().token).then(onAnyLog);
    };

    const consultationRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/triage`, data, generic.getUser().token).then(onAnyLog);
    };

    const orientationRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/${generic.getUser().user.id}/orientation`, data, generic.getUser().token).then(onAnyLog);
    };

    const getAllOrientations = () => {
        return HttpHelper.get(`${generic.pathName}/${generic.getUser().user.id}/orientation`, generic.getUser().token).then(onAnyLog);
    };

    const indicatorRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/indicator`, data, generic.getUser().token).then(onAnyLog);
    };

    const getAllIndicators = () => {
        return HttpHelper.get(`${generic.pathName}/indicator`, generic.getUser().token).then(onAnyLog);
    };

    const equipmentRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/equipment`, data, generic.getUser().token).then(onAnyLog);
    };

    const getAllEquipments = () => {
        return HttpHelper.get(`${generic.pathName}/equipment`, generic.getUser().token).then(onAnyLog);
    };

    const getTriageTypes = () => {
        return HttpHelper.get(`${generic.pathName}/triage/types`, generic.getUser().token).then(onAnyLog);
    };

    return { ...generic, getAllInstitutions, consultationRegister, orientationRegister, getTriageTypes, getXpTypes, getAllOrientations, indicatorRegister, getAllIndicators,
        equipmentRegister, getAllEquipments };
};

export default TherapistService;
