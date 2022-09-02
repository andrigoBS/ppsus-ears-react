import React from 'react';
import { useGenericLogger } from '../../providers/genericLogger/GenericLogger';
import GenericService from '../../serviceHelpers/GenericService';

const useSecretaryService = () => {
    const { genericLog } = useGenericLogger();

    const generic= GenericService('parents', 'parentUser', genericLog);

    return { ...generic, };
};

export default useSecretaryService;
