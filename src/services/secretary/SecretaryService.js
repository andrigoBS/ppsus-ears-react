import GenericService from '../GenericService';

const SecretaryService = (onAnyError) => {
    const generic = GenericService('secretary', 'secretaryUser', onAnyError);

    return { ...generic, };
};

export default SecretaryService;
