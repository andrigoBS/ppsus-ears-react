import React from 'react';
import GenericService from '../../helpers/GenericService';
import { useGenericLogger } from '../../providers/genericLogger/GenericLogger';

const useSecretaryService = () => {
    const { genericLog } = useGenericLogger();

    const generic= GenericService('parents', 'parentUser', genericLog);

    return { ...generic, };
};

export default useSecretaryService;
