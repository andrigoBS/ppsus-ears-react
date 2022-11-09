import React from 'react';
import { useGenericLogger } from '../../providers/genericLogger/GenericLogger';
import GenericService from '../../serviceHelpers/GenericService';
import HttpHelper from '../../serviceHelpers/HttpHelper';

const useInstitutionService = () => {
    const { genericLog } = useGenericLogger();

    const generic = GenericService('institution', 'institutionUser', genericLog);

    const getTypes = () => {
        return HttpHelper.get(generic.pathName+'/types', generic.getUser().token).then(genericLog);
    };

    const referralServiceRegister = (data) => {
        return HttpHelper.post('referral-service', data, generic.getUser().token).then(genericLog);
    };

    const getReferralServiceTypes = () => {
        return HttpHelper.get('referral-service/types', generic.getUser().token).then(genericLog);
    };

    return { ...generic, getReferralServiceTypes, getTypes, referralServiceRegister };
};

export default useInstitutionService;
