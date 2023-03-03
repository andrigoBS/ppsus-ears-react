import GenericService from '../../helpers/GenericService';
import HttpHelper from '../../helpers/HttpHelper';

const InstitutionService = () => {
    const generic = GenericService('institution', 'institutionUser');

    const getTypes = () => {
        return HttpHelper.get(generic.pathName+'/types', generic.getUser().token);
    };

    const referralServiceRegister = (data) => {
        return HttpHelper.post('referral-service', data, generic.getUser().token);
    };

    const getReferralServiceTypes = () => {
        return HttpHelper.get('referral-service/types', generic.getUser().token);
    };

    return { ...generic, getReferralServiceTypes, getTypes, referralServiceRegister };
};
const institutionServiceInstance = InstitutionService();

const useInstitutionService = () => {
    return institutionServiceInstance;
};

export default useInstitutionService;
