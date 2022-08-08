import GenericService from '../GenericService';
import HttpHelper from '../HttpHelper';

const InstitutionService = (onAnyLog) => {
    const generic = GenericService('institution', 'institutionUser', onAnyLog);

    const getTypes = () => {
        return HttpHelper.get(generic.pathName+'/types', generic.getUser().token).then(onAnyLog);
    };

    const referralServiceRegister = (data) => {
        return HttpHelper.post('referral-service', data, generic.getUser().token).then(onAnyLog);
    };

    const getReferralServiceTypes = () => {
        return HttpHelper.get('referral-service/types', generic.getUser().token).then(onAnyLog);
    };

    const getStates = () => {
        return HttpHelper.get('secretary/state', generic.getUser().token).then(onAnyLog);
    };

    const getCities = (state) => {
        return HttpHelper.get('secretary/city?state='+state, generic.getUser().token).then(onAnyLog);
    };

    return { ...generic, getTypes, referralServiceRegister, getReferralServiceTypes, getStates, getCities };
};

export default InstitutionService;
