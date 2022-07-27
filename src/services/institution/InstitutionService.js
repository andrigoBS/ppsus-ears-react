import GenericService from '../GenericService';
import HttpHelper from '../HttpHelper';

const InstitutionService = () => {
    const generic = GenericService('institution', 'institutionUser');

    const referralServiceRegister = (data) => {
        return HttpHelper.post('referral-service', data);
    };

    return { ...generic, referralServiceRegister };
};

export default InstitutionService();
