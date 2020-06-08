import Vue from 'vue';
import Vuex from 'vuex';
import roles from './modules/roles';
import staff from './modules/staff';
import drugs from './modules/drugs';
import schedules from './modules/schedule';
import patient from './modules/patient';
import appointment from './modules/appointment';
import manage_appointment from './modules/manage_appointment';
import medical from './modules/medical';
import auth from './modules/auth';
import first_aid from './modules/first_aid';
import dispensary from './modules/dispensary';
import excuse from './modules/excuse';
import referral from './modules/referral';
import notification from './modules/notifications';
import labtest from './modules/labTest';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        roles, staff, appointment, drugs, schedules, 
        patient, medical, auth, first_aid, dispensary, 
        excuse, referral, notification, labtest, manage_appointment
    },
    state: {

    }
})