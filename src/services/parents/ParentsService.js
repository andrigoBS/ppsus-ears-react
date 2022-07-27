import GenericService from '../GenericService';

const ParentsService = () => {
    const generic= GenericService('parents', 'parentUser');

    return { ...generic, };
};

export default ParentsService();
