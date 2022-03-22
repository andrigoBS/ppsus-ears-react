import HttpHelper from "../HttpHelper";

 const TherapistService = function () {

     const pathName = 'therapist'

     this.getAll = () => {
         return HttpHelper.get(pathName);
     }

     this.get = (id) => {
         return HttpHelper.get(`${pathName}/${id}`);
     }

     this.register = (data) => {
         return HttpHelper.post(pathName, data);
     }

     this.consultationRegister = (data) => {
         return HttpHelper.post(`${pathName}/consultation`, data);
     }
}

export default new TherapistService();
