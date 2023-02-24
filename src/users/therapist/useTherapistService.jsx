import React from 'react';
import GenericService from '../../helpers/GenericService';
import HttpHelper from '../../helpers/HttpHelper';
import { useGenericLogger } from '../../providers/genericLogger/GenericLogger';

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

    const getAllOrientations = (data) => {
        let params = '';

        if(data){
            if(data.description){
                params += `?description=${data.description}`;
            }
        }

        return HttpHelper.get(`${generic.pathName}/orientation${params}`, generic.getUser().token).then(genericLog);
    };

    const indicatorRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/indicator`, data, generic.getUser().token).then(genericLog);
    };

    const getAllIndicators = (data) => {
        let params = '';

        if(data) {
            if (data.name) {
                params += `?name=${data.name}`;
            }
        }

        return HttpHelper.get(`${generic.pathName}/indicator${params}`, generic.getUser().token).then(genericLog);
    };

    const equipmentRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/equipment`, data, generic.getUser().token).then(genericLog);
    };

    const getAllEquipments = (data) => {
        return _getAllEquipments(data, null).then(genericLog);
    };

    const getAllEquipmentsActives = (data) => {
        return _getAllEquipments(data, true).then(genericLog);
    };

    const _getAllEquipments = (data, listAllActives) => {
        let params = '';

        if(data){
            if(data.model){
                params += `model=${data.model}&`;
            }

            if (data.brand){
                params += `brand=${data.brand}&`;
            }

            if(data.dateOfLastCalibration){
                params += `dateOfLastCalibration=${data.dateOfLastCalibration}`;
            }
        }

        if(listAllActives){
            params += `listAllActives=${listAllActives}`;
        }

        return HttpHelper.get(`${generic.pathName}/equipment?${params}`, generic.getUser().token);
    };

    const conductRegister = (data) => {
        return HttpHelper.post(`${generic.pathName}/conduct`, data, generic.getUser().token).then(genericLog);
    };

    const getAllConducts = (data) => {
        let params = '';
        const typeAll = '4';

        if(data) {
            if (data.rightEar !== typeAll) {
                params += `rightEar=${data.rightEar}&`;
            }

            if (data.leftEar !== typeAll) {
                params += `leftEar=${data.leftEar}&`;
            }

            if (data.testType !== typeAll) {
                params += `testType=${data.testType}&`;
            }

            if (data.irda !== typeAll) {
                params += `irda=${data.irda}`;
            }
        }

        return HttpHelper.get(`${generic.pathName}/conduct?${params}`, generic.getUser().token).then(genericLog);
    };

    const getConduct = (data) => {
        let params = '';

        if(data) {
            params += `${data.leftEar}/`;
            params += `${data.rightEar}/`;
            params += `${data.irda}/`;
            params += `${data.testType}`;
        }

        return HttpHelper.get(`${generic.pathName}/conduct/${params}`, generic.getUser().token).then(genericLog);
    };

    const getTriageTypes = () => {
        return HttpHelper.get(`${generic.pathName}/triage/types`, generic.getUser().token).then(genericLog);
    };

    const getAllTriages = (data) => {
        let params = '';
        const typeAll = '4';

        if(data.rightEar !== typeAll){
            params += `rightEar=${data.rightEar}`;
        }

        if(data.leftEar !== typeAll){
            params += `leftEar=${data.leftEar}&`;
        }

        if(data.testType !== typeAll){
            params += `testType=${data.testType}&`;
        }

        if(data.evaluationDate){
            params += `evaluationDate=${data.evaluationDate}`;
        }

        return HttpHelper.get(`${generic.pathName}/triage?${params}`, generic.getUser().token).then(genericLog);
    };

    const getChildBirthType = () => {
        return HttpHelper.get('baby/birth-types', generic.getUser().token).then(genericLog);
    };

    const getAllBabies = () => {
        return HttpHelper.get('baby/', generic.getUser().token).then(genericLog);
    };

    const deleteEquipment = (id) => {
        return HttpHelper.deleted(`${generic.pathName}/equipment/${id}`, generic.getUser().token).then(genericLog);
    };

    return {
        ...generic,
        conductRegister, consultationRegister, deleteEquipment, equipmentRegister, getAllBabies,getAllConducts, getAllEquipments,
        getAllEquipmentsActives, getAllIndicators, getAllInstitutions, getAllOrientations, getAllTriages, getChildBirthType,
        getConduct, getTriageTypes, getXpTypes, indicatorRegister, orientationRegister
    };
};

export default useTherapistService;
