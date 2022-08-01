import GenericService from '../GenericService';
import HttpHelper from '../HttpHelper';

const InstitutionService = (onAnyLog) => {
    const generic = GenericService('institution', 'institutionUser', onAnyLog);

    const referralServiceRegister = (data) => {
        return HttpHelper.post('referral-service', data).then(onAnyLog);
    };

    return { ...generic, referralServiceRegister };
};

export default InstitutionService;
