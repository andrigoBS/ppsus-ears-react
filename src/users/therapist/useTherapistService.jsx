import React from 'react';
import { useGenericLogger } from '../../providers/genericLogger/GenericLogger';
import GenericService from '../../serviceHelpers/GenericService';
import HttpHelper from '../../serviceHelpers/HttpHelper';

const useTherapistService = () => {
    const { genericLog } = useGenericLogger();

    const generic = GenericService('therapist','therapistUser', genericLog);

    const getAllInstitutions = () => {
        return HttpHelper.get('institution', generic.getUser().token).then(genericLog);
    };

    const getXpTypes = () => {
        return HttpHelper.get(`${generic.pathName}/xp-types`, generic.getUser().token).then(genericLog);
    };

    const consultationRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/triage`, data, generic.getUser().token).then(genericLog);
    };

    const orientationRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/orientation`, data, generic.getUser().token).then(genericLog);
    };

    const getAllOrientations = () => {
        return HttpHelper.get(`${generic.pathName}/orientation`, generic.getUser().token).then(genericLog);
    };

    const indicatorRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/indicator`, data, generic.getUser().token).then(genericLog);
    };

    const getAllIndicators = () => {
        return HttpHelper.get(`${generic.pathName}/indicator`, generic.getUser().token).then(genericLog);
    };

    const equipmentRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/equipment`, data, generic.getUser().token).then(genericLog);
    };

    const getAllEquipments = () => {
        return HttpHelper.get(`${generic.pathName}/equipment`, generic.getUser().token).then(genericLog);
    };

    const conductRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/conduct`, data, generic.getUser().token).then(genericLog);
    };

    const getAllConducts = () => {
        return HttpHelper.get(`${generic.pathName}/conduct`, generic.getUser().token).then(genericLog);
    };

    const getTriageTypes = () => {
        return HttpHelper.get(`${generic.pathName}/triage/types`, generic.getUser().token).then(genericLog);
    };

    const getAllTriages = () => {
        return HttpHelper.get(`${generic.pathName}/triage`, generic.getUser().token).then(genericLog);
    };

    const getChildBirthType = () => {
        return HttpHelper.get('baby/birth-types', generic.getUser().token).then(genericLog);
    };

    const getAllBabies = () => {
        return HttpHelper.get('baby/', generic.getUser().token).then(genericLog);
    };

    return {
        ...generic,
        conductRegister, consultationRegister, equipmentRegister, getAllBabies, getAllConducts, getAllEquipments,
        getAllIndicators, getAllInstitutions, getAllOrientations, getAllTriages, getChildBirthType, getTriageTypes,
        getXpTypes, indicatorRegister, orientationRegister
    };
};

export default useTherapistService;
