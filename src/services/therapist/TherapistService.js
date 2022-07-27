import GenericService from '../GenericService';
import HttpHelper from '../HttpHelper';

const TherapistService = () => {
    const generic = GenericService('therapist','therapistUser');

    const consultationRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/consultation`, data);
    };

    return { ...generic, consultationRegister };
};

export default TherapistService();
