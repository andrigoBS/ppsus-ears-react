import GenericService from '../GenericService';

const SecretaryService = () => {
    const generic = GenericService('secretary', 'secretaryUser');

    return { ...generic, };
};

export default SecretaryService();
