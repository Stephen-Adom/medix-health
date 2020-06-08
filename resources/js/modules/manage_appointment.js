export default{
    state: {
        manage_today_appointments:[],
        manage_upcoming_appointments:[],
        manage_canceled_appointments:[],
        manage_completed_appointments:[],
    },
    getters: {
        today_appointments_total(state){
            return state.manage_today_appointments.length;
        },
        upcoming_appointments_total(state){
            return state.manage_upcoming_appointments.length;
        },
        canceled_appointments_total(state){
            return state.manage_canceled_appointments.length;
        },
        completed_appointments_total(state){
            return state.manage_completed_appointments.length;
        },
        manage_today_appointments(state){
            return state.manage_today_appointments;
        },
        manage_upcoming_appointments(state){
            return state.manage_upcoming_appointments;
        },
        manage_canceled_appointments(state){
            return state.manage_canceled_appointments;
        },
        manage_completed_appointments(state){
            return state.manage_completed_appointments;
        }

    },
    mutations: {
        add_all_today_appointment(state, payload){
            state.manage_today_appointments = payload;
        },
        add_all_upcoming_appointment(state, payload){
            state.manage_upcoming_appointments = payload;
        },
        add_all_canceled_appointment(state, payload){
            state.manage_canceled_appointments = payload;
        },
        add_all_completed_appointment(state, payload){
            state.manage_completed_appointments = payload;
        }
    },
    actions: {
        fetch_all_today({commit}){
            axios.get('/api/all_today_appointment').then(response => {
                commit('add_all_today_appointment', response.data.success);
            });
        },
        fetch_all_upcoming({commit}){
            axios.get('/api/all_upcoming_appointment').then(response => {
                commit('add_all_upcoming_appointment', response.data.success);
            });
        },
        fetch_all_canceled({commit}){
            axios.get('/api/all_canceled_appointment').then(response => {
                commit('add_all_canceled_appointment', response.data.success);
            });
        },
        fetch_all_completed({commit}){
            axios.get('/api/all_completed_appointment').then(response => {
                commit('add_all_completed_appointment', response.data.success);
            });
        }
    }
}