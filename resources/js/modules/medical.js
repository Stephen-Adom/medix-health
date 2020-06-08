export default{
    state: {
        medic_appointments:[],
        drugsprescribed:null,
        allMedicalHistory:[],
    },
    getters: {
        allMedicAppointment(state){
            return state.medic_appointments;
        },
        allPrescribedDrugs(state){
            return state.drugsprescribed;
        },
        allMedicalInfo(state){
            return state.allMedicalHistory;
        }
    },
    mutations: {
       addMedicAppointment(state, payload){
           state.medic_appointments = payload;
       },
       addDrug(state, payload){
           state.drugsprescribed = payload;
       },
       clearDrug(state){
           state.drugsprescribed = null;
       },
       allMedicInfo(state, payload){
           state.allMedicalHistory = payload;
       }
    },
    actions: {
        fetchMedicAppointment({commit}){
            axios.get('/medic_appointment').then(response => {
                commit('addMedicAppointment', response.data);
            })
        },
        fetchAllMedic({commit}){
            axios.get('/api/all_medical_history').then(response => {
                commit('allMedicInfo', response.data);
            })
        },
        newDrug({commit}, payload){
            commit('addDrug', payload);
        },

        clearDrug({commit}){
            commit('clearDrug');
        }
    }
}