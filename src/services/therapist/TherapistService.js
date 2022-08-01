import GenericService from '../GenericService';
import HttpHelper from '../HttpHelper';

const TherapistService = (onAnyLog) => {
    const generic = GenericService('therapist','therapistUser', onAnyLog);

    const consultationRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/consultation`, data).then(onAnyLog);
    };

    return { ...generic, consultationRegister };
};

export default TherapistService;
