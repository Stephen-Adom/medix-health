import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import store from './store';

const user = window.user;
Vue.use(VueRouter);


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/manage_account',
    name: 'manageaccount',
    component: () => import(/* webpackChunkName: "manage_account" */ './components/ManageAccount.vue'),
    beforeEnter: (to, from, next) => {
      if(user.role_id == 5){
        next();
      }else{
        next({name: 'unauthorized'});
      }
    }
  },
  {
    path: '/manage_account/:id',
    name: 'useraccount',
    props: true,
    component: () => import(/* webpackChunkName: "useraccount" */ './components/UserAccount.vue'),
    beforeEnter: (to, from, next) => {
      const exist = store.getters.allStaff.find(staff => staff.id == to.params.id);
      if(exist){
        next();
      }else{
        next({name:'not_found'});
      }
    }
  },
  {
    path: '/drug_inventory',
    name: 'drug_inventory',
    component: () => import(/* webpackChunkName: "drug_inventory" */ './components/DrugInventory.vue')
  },
  {
    path: '/roles',
    name: 'roles',
    component: () => import(/* webpackChunkName: "roles" */ './components/Roles.vue'),
    beforeEnter: (to, from, next) => {
      if(user.role_id == 5){
        next();
      }else{
        next({name: 'unauthorized'});
      }
    }
  },
  {
    path: '/roles_details/:id',
    name: 'roles_details',
    props: true,
    component: () => import(/* webpackChunkName: "roles" */ './components/Roles_details.vue'),
    beforeEnter: (to, from, next) => {
      if(user.role_id == 5){
        next();
      }else{
        next({name: 'unauthorized'});
      }
    }
  },
  {
    path: '/schedules',
    name: 'schedules',
    component: () => import(/* webpackChunkName: "schedules" */ './components/Schedule.vue'),
    beforeEnter: (to, from, next) => {
      if(user.role_id == 1 || user.role_id == 4){
        next();
      }else{
        next({name: 'unauthorized'});
      }
    }
  },
  {
    path: '/create_appointment',
    name: 'new_appointment',
    component: () => import(/* webpackChunkName: "new_appointment" */ './components/appointments/New.vue'),
  },
  {
    path: '/appointments',
    component: () => import(/* webpackChunkName: "appointment" */ './components/Appointment.vue'),
    children:[
      {
        path: '/',
        name: 'today_appointment',
        component: () => import(/* webpackChunkName: "today_appointment" */ './components/appointments/Today.vue'),
      },
      {
        path: 'upcoming',
        name: 'upcoming_appointment',
        component: () => import(/* webpackChunkName: "upcoming_appointment" */ './components/appointments/Upcoming.vue'),
      },
      {
        path: 'canceled',
        name: 'canceled_appointment',
        component: () => import(/* webpackChunkName: "canceled_appointment" */ './components/appointments/Canceled.vue'),
      },
      {
        path: 'completed',
        name: 'completed_appointment',
        component: () => import(/* webpackChunkName: "completed_appointment" */ './components/appointments/Completed.vue'),
      }
    ]
  },
  {
    path: '/manage_appointments',
    component: () => import(/* webpackChunkName: "appointment" */ './components/Manage_Appointment.vue'),
    children:[
      {
        path: '/',
        name: 'manage_today_appointment',
        component: () => import(/* webpackChunkName: "manage_today_appointment" */ './components/manage_appointments/manage_today.vue'),
      },
      {
        path: 'upcoming',
        name: 'manage_upcoming_appointment',
        component: () => import(/* webpackChunkName: "manage_appointment_completed" */ './components/manage_appointments/manage_upcoming.vue'),
      },
      {
        path: 'canceled',
        name: 'manage_canceled_appointment',
        component: () => import(/* webpackChunkName: "manaege_canceled_appointment" */ './components/manage_appointments/manage_canceled.vue'),
      },
      {
        path: 'completed',
        name: 'manage_completed_appointment',
        component: () => import(/* webpackChunkName: "manage_completed_appointment" */ './components/manage_appointments/manage_completed.vue'),
      }
    ]
  },

  {
    path: '/appointments/upcoming_details/:id',
    name: 'appointment_upcoming_details',
    props: true,
    component: () => import(/* webpackChunkName: "appointment_upcoming_details" */ './components/appointments/Appointment_Upcoming_Details.vue'),
  },
  {
    path: '/appointments/today_details/:id',
    name: 'appointment_today_details',
    props: true,
    component: () => import(/* webpackChunkName: "appointment_today_details" */ './components/appointments/Appointment_Today_Details.vue'),
  },
  {
    path: '/appointments/canceled_details/:id',
    name: 'appointment_canceled_details',
    props: true,
    component: () => import(/* webpackChunkName: "appointment_canceled_details" */ './components/appointments/Appointment_Canceled_Details.vue'),
  },
  {
    path: '/appointments/completed_details/:id',
    name: 'appointment_completed_details',
    props: true,
    component: () => import(/* webpackChunkName: "appointment_completed_details" */ './components/appointments/Appointment_Completed_Details.vue'),
  },


  {
    path: '/appointments/manage_upcoming_details/:id',
    name: 'manage_appointment_upcoming_details',
    props: true,
    component: () => import(/* webpackChunkName: "manage_appointment_upcoming_details" */ './components/manage_appointments/Manage_Appointment_Upcoming_Details.vue'),
  },
  {
    path: '/appointments/manage_today_details/:id',
    name: 'manage_appointment_today_details',
    props: true,
    component: () => import(/* webpackChunkName: "manage_appointment_today_details" */ './components/manage_appointments/Manage_Appointment_Today_Details.vue'),
  },
  {
    path: '/appointments/manage_canceled_details/:id',
    name: 'manage_appointment_canceled_details',
    props: true,
    component: () => import(/* webpackChunkName: "manage_appointment_canceled_details" */ './components/manage_appointments/Manage_Appointment_Canceled_Details.vue'),
  },
  {
    path: '/appointments/manage_completed_details/:id',
    name: 'manage_appointment_completed_details',
    props: true,
    component: () => import(/* webpackChunkName: "manage_appointment_completed_details" */ './components/manage_appointments/Manage_Appointment_Completed_Details.vue'),
  },

  {
    path: '/patients',
    name: 'patients',
    component: () => import(/* webpackChunkName: "patients" */ './components/Patients/All.vue'),
  },
  {
    path: '/patients/:id',
    name: 'patient_details',
    props: true,
    component: () => import(/* webpackChunkName: "patient_details" */ './components/Patients/Detail.vue')
  },
  {
    path: '/patients/:id/first_aid',
    name: 'first_aid',
    props: true,
    component: () => import(/* webpackChunkName: "first_aid" */ './components/FirstAid.vue'),
  },
  {
    path: '/vitals',
    name: 'patient_vitals',
    component: () => import(/* webpackChunkName: "patientvitals" */ './components/vitals/Index.vue'),
  },
  {
    path: '/vitals/patient/new',
    name: 'patient_vitals_new',
    component: () => import(/* webpackChunkName: "patient_vitals_new" */ './components/vitals/PatientNew.vue'),
  },
  {
    path: '/vitals/:id',
    name: 'newvitals',
    props: true,
    component: () => import(/* webpackChunkName: "newvitals" */ './components/vitals/PatientVitals.vue'),
  },
  {
    path: '/medical_assessment',
    name: 'medical_assessment',
    component: () => import(/* webpackChunkName: "medical_assessment" */ './components/MedicalAssessment.vue'),
    beforeEnter: (to, from, next) => {
      if(user.role_id == 1){
        next();
      }else{
        next({name: 'unauthorized'});
      }
    }
  },
  {
    path: '/lab_assessment',
    name: 'lab_assessment',
    component: () => import(/* webpackChunkName: "medical_assessment" */ './components/LabAssessment.vue'),
    beforeEnter: (to, from, next) => {
      if(user.role_id == 4){
        next();
      }else{
        next({name: 'unauthorized'});
      }
    }
  },
  {
    path: '/medical_assessment/:id',
    name: 'medical_assessment_details',
    props: true,
    component: () => import(/* webpackChunkName: "medical_assessment_details" */ './components/MedicalAssessmentDetails.vue'),
    beforeEnter: (to, from, next) => {
      const exist = store.getters.all_Accepted_Appointment.find(data => data.id == to.params.id);
      if(exist){
        next();
      }else{
        next({name: 'not_found'});
      }
    }
  },
  {
    path: '/referral',
    name: 'patient_referrals',
    component: () => import(/* webpackChunkName: "patient_referrals" */ './components/Referrals/index.vue'),
  },
  {
    path: '/referral/:id/form',
    name: 'patient_referrals_form',
    props: true,
    component: () => import(/* webpackChunkName: "patient_referrals_form" */ './components/Referrals/Referrals.vue'),
    beforeEnter: (to, from, next) => {
      if(user.role_id == 1){
        next();
      }else{
        next({name: 'unauthorized'});
      }
    }
  },
  {
    path: '/excuse_duty',
    name: 'excuse_duty',
    component: () => import(/* webpackChunkName: "excuse_duty" */ './components/ExcuseDuty/index.vue'),
  },
  {
    path: '/excuse_duty/applicants',
    name: 'excuse_duty_applicants',
    component: () => import(/* webpackChunkName: "excuse_duty_applicants" */ './components/ExcuseDuty/applicants.vue'),
  },
  {
    path: '/excuse_duty/applicants/:id',
    name: 'excuse_duty_approval',
    props: true,
    component: () => import(/* webpackChunkName: "excuse_duty_approval" */ './components/ExcuseDuty/approval.vue')
  },
  {
    path: '/excuse_duty/:id',
    name: 'excuse_duty_form',
    props: true,
    component: () => import(/* webpackChunkName: "excuse_duty_form" */ './components/ExcuseDuty/ExcuseDuty.vue'),
  },
  {
    path: '/dispensary',
    name: 'dispensary',
    component: () => import(/* webpackChunkName: "dispensary" */ './components/Dispensary.vue'),
    beforeEnter: (to, from, next) => {
      if(user.role_id == 3){
        next();
      }else{
        next({name: 'unauthorized'});
      }
    }
  },
  {
    path: '/reports/lab_tests',
    name: 'reports_lab_tests',
    component: () => import(/* webpackChunkName: "reports_lab_tests" */ './components/LabTest.vue'),
    children: [
      {
        path: 'blood',
        name: 'blood-test',
        component:() => import(/* webpackChunkName: "blood-test" */ "./components/TestsOptions/Blood.vue"),
      },
      {
        path: 'urine',
        name: 'urine-test',
        component:() => import(/* webpackChunkName: "urine-test" */ "./components/TestsOptions/Urine.vue"),
      },
      {
        path: 'faecal',
        name: 'faecal-test',
        component:() => import(/* webpackChunkName: "faecal-test" */ "./components/TestsOptions/Faecal.vue"),
      },
      {
        path: 'saliva',
        name: 'saliva-test',
        component:() => import(/* webpackChunkName: "saliva-test" */ "./components/TestsOptions/Saliva.vue"),
      }
    ]
  },
  {
    path: '/lab_assessment/lab-tests/:id',
    name: 'lab-tests-result',
    props:true,
    component: () => import(/* webpackChunkName: "lab-tests-result" */ './components/LabTestResult.vue'),
    beforeEnter: (to, from, next) => {
      if(user.role_id == 4){
        next();
      }else{
        next({name: 'unauthorized'});
      }
    }
  },
  {
    path: '/dispensary/:id',
    name: 'dispensary_details',
    props: true,
    component: () => import(/* webpackChunkName: "dispensary_details" */ './components/DispensaryDetails.vue'),
    beforeEnter: (to, from, next) => {
      const exist = store.getters.allData.find(item => item.id == to.params.id);
      if(exist){
        next();
      }else{
        next({name: 'not_found'});
      }
    }
  },
  {
    path: '/first_aid',
    name: 'firstaid',
    component: () => import(/* webpackChunkName: "firstaid" */ './components/FirstAid/index.vue'),
  },
  {
    path: '/my_settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ './components/Settings.vue'),
  },
  {
    path: '/reports',
    name: 'reports',
    component: () => import(/* webpackChunkName: "settings" */ './components/Reports.vue'),
  },
  {
    path: '/reports/dashboard',
    name: 'reports_dashboard',
    component: () => import(/* webpackChunkName: "reports_dashboard" */ './components/ReportsDashboard.vue'),
  },
  {
    path: '/reports/vitals',
    name: 'reports_vitals',
    component: () => import(/* webpackChunkName: "reports_dashboard" */ './components/ReportsVital.vue'),
  },
  {
    path: '/reports/medicals',
    name: 'reports_medicals',
    component: () => import(/* webpackChunkName: "reports_medicals" */ './components/ReportsMedical.vue'),
  },
  {
    path: '/reports/cbc-result',
    name: 'cbc-result',
    component:() => import(/* webpackCunkName: "cbc-result" */ "./components/result/cbc.vue")
  },
  {
    path: '/reports/metabolic-result',
    name: 'metabolic-result',
    component:() => import(/* webpackCunkName: "metabolic-result" */ "./components/result/metabolic.vue")
  },
  {
    path: '/reports/lipoprotein-result',
    name: 'lipoprotein-result',
    component:() => import(/* webpackCunkName: "lipoprotein-result" */ "./components/result/lipoprotein.vue")
  },
  {
    path: '/reports/blood-enzymes-result',
    name: 'blood-enzymes-result',
    component:() => import(/* webpackCunkName: "blood-enzymes-result" */ "./components/result/blood_enzymes.vue")
  },
  {
    path: '/reports/thyroid-result',
    name: 'thyroid-result',
    component:() => import(/* webpackCunkName: "thyroid-result" */ "./components/result/thyroid.vue")
  },
  {
    path: '/reports/coagulation-result',
    name: 'coagulation-result',
    component:() => import(/* webpackCunkName: "coagulation-result" */ "./components/result/coagulation.vue")
  },
  {
    path: '/reports/disease-examination-result',
    name: 'disease-examination-result',
    component:() => import(/* webpackCunkName: "disease-examination-result" */ "./components/result/disease.vue")
  },
  {
    path: '/reports/sulfate-serum-result',
    name: 'sulfate-serum-result',
    component:() => import(/* webpackCunkName: "sulfate-serum-result" */ "./components/result/serum.vue")
  },
  {
    path: '/reports/reactive-protein-result',
    name: 'reactive-protein-result',
    component:() => import(/* webpackCunkName: "reactive-protein-result" */ "./components/result/reactive.vue")
  },
  {
    path: '/reports/urine-chemical-result',
    name: 'urine-chemical-result',
    component:() => import(/* webpackCunkName: "urine-chemical-result" */ "./components/result/urine_chemical.vue")
  },
  {
    path: '/reports/urine-microscopic-result',
    name: 'urine-microscopic-result',
    component:() => import(/* webpackCunkName: "urine-chemical-result" */ "./components/result/urine_microscopic.vue")
  },
  {
    path: '/reports/infections-result',
    name: 'infections-result',
    component:() => import(/* webpackCunkName: "infections-result" */ "./components/result/infections.vue")
  },
  {
    path: '/reports/steriod-hormone-result',
    name: 'steroid-hormone',
    component:() => import(/* webpackCunkName: "steroid-hormone" */ "./components/result/steroid-hormone.vue")
  },
  {
    path: '/reports/genetic-result',
    name: 'genetics',
    component:() => import(/* webpackCunkName: "genetics" */ "./components/result/genetics.vue")
  },
  {
    path: '/reports/saliva-infection-result',
    name: 'saliva-infection',
    component:() => import(/* webpackCunkName: "saliva-infection" */ "./components/result/saliva-infection.vue")
  },
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: () => import(/* webpackChunkName: "unauthorized" */ './components/Unauthorized.vue'),
  },
  {
    path: '*',
    name: 'not_found',
    component: () => import(/* webpackChunkName: "not_found" */ './components/NotFound.vue'),
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      // const position = {};
      // if(to.hash){
      //   return window.scrollTo({
      //     top:  document.querySelector(to.hash).offsetTop,
      //     behavior: 'smooth'
      //   })
      // }
    }
  }
});

export default router;

