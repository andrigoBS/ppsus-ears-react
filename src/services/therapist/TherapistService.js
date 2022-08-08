import GenericService from '../GenericService';
import HttpHelper from '../HttpHelper';

const TherapistService = (onAnyLog) => {
    const generic = GenericService('therapist','therapistUser', onAnyLog);

    const consultationRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/triage`, data, generic.getUser().token).then(onAnyLog);
    };

    const orientationRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/${generic.getUser().user.id}/orientation`, data, generic.getUser().token).then(onAnyLog);
    };

    return { ...generic, consultationRegister, orientationRegister };
};

export default TherapistService;
