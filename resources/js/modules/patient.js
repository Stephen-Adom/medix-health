export default{
    state: {
        patients:[],
        patient_vitals:[],
        patient_medicals:[],
        malePatients:null,
        femalePatients:null
    },
    getters: {
        Patients(state){
            return state.patients;
        },
        maleCount(state){
            return state.malePatients;
        },
        femaleCount(state){
            return state.femalePatients;
        },
        patient_vitals(state){
            return state.patient_vitals;
        },
        patient_medicals(state){
            return state.patient_medicals;
        }
    },
    mutations: {
       addPatients(state, payload){
           state.patients = payload;
       },
       addMalePatients(state, payload){
        state.patients = payload;
        },
        addFemalePatients(state, payload){
            state.patients = payload;
        },
       addMales(state, payload){
           state.malePatients = payload
       },
       addFemales(state, payload){
           state.femalePatients = payload
       },
       add_patient_vitals(state, payload){
           state.patient_vitals = payload;
       },
       add_patient_medicals(state, payload){
           state.patient_medicals = payload;
       }
    },
    actions: {
        fetchPatients({commit}){
            axios.get('/api/all_patients').then(response => {
                commit('addPatients', response.data)
            })
        },
        fetchMalePatients({commit}){
            axios.get('/api/all_male_patients').then(response => {
                commit('addMalePatients', response.data)
            })
        },
        fetchFemalePatients({commit}){
            axios.get('/api/all_female_patients').then(response => {
                commit('addFemalePatients', response.data)
            })
        },
        fetchPatientGender({commit}){
            axios.get('/api/patient_category').then(response => {
                commit('addMales', response.data.male);
                commit('addFemales', response.data.female);
            })
        },
        fetchPatientVitals({commit}){
            axios.get('/api/patient_vitals').then(response => {
                commit('add_patient_vitals', response.data);
            })
        },
        fetchPatientMedicals({commit}){
            axios.get('/api/patients_medical_history').then(response => {
                commit('add_patient_medicals', response.data);
            })
        }

    }
}