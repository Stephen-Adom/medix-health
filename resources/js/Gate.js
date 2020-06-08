export default class Gate{
    constructor(user){
        this.user = user;
    }

    isNurse(){
        if(this.user.role_id === 2){
            return true;
        }
    }

    isDoctor(){
        if(this.user.role_id === 1){
            return true;
        }
    }

    isManager(){
        if(this.user.role_id === 5){
            return true;
        }
    }

    isPharmacy(){
        if(this.user.role_id === 3){
            return true;
        }
    }

    isLab(){
        if(this.user.role_id === 4){
            return true;
        }
    }

    isDoctorORlab(){
        if(this.user.role_id === 1 || this.user.role_id === 4 ){
            return true;
        } 
    }
}