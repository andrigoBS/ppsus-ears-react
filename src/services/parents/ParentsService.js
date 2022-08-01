import GenericService from '../GenericService';

const ParentsService = (onAnyLog) => {
    const generic= GenericService('parents', 'parentUser', onAnyLog);

    return { ...generic, };
};

export default ParentsService;
