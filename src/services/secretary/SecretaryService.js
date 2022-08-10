import GenericService from '../GenericService';

const SecretaryService = (onAnyError) => {
    const generic = GenericService('secretary', 'secretaryUser', onAnyError);

    const getStates = () => {
        return HttpHelper.get('secretary/state', generic.getUser().token).then(onAnyLog);
    };

    return { ...generic, getStates };
};

export default SecretaryService;
