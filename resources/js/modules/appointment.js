export default{
    state: {
        appointments:[],
        completed:[],
        limited:[],
        current:[],
        accepted_appointments:[],
        allLimitedCreatedAppointment:[],
        allCreatedAppointment:[],
        today_appointments:[],
        upcoming_appointments:[],
        canceled_appointments:[],
        completed_appointments:[],
    },
    getters: {
        today_appointments(state){
            return state.today_appointments;
        },
        upcoming_appointments(state){
            return state.upcoming_appointments;
        },
        canceled_appointments(state){
            return state.canceled_appointments;
        },
        completed_appointments(state){
            return state.completed_appointments;
        },
        count_today_appointments(state){
            return state.today_appointments.length;
        },
        count_upcoming_appointments(state){
            return state.upcoming_appointments.length;
        },
        count_canceled_appointments(state){
            return state.canceled_appointments.length;
        },
        count_completed_appointments(state){
            return state.completed_appointments.length;
        },
        allLimitedCreatedAppointment(state){
            return state.allLimitedCreatedAppointment;
        },
        allCreatedAppointment(state){
            return state.allCreatedAppointment;
        },
        allAppointment(state){
            return state.appointments;
        },
        all_Accepted_Appointment(state){
            return state.accepted_appointments;
        },
        totalAppointment(state){
            return state.appointments.length;
        },
        totalCompletedAppointment(state){
            return state.completed.length;
        },
        completedAppointment(state){
            return state.completed;
        },
        allLimited(state){
            return state.limited;
        },
        allCurrent(state){
            return state.current;
        },
        totalCurrent(state){
            return state.current.length;
        }
    },
    mutations: {
        addAppointment(state, payload){
            state.appointments = payload;
        },
        addCompleted(state, payload){
            state.completed = payload;
        },
        addlimited(state, payload){
            state.limited = payload;
        },
        addCurrent(state, payload){
            state.current = payload;
        },
        add_Accepted_Appointment(state, payload){
            state.accepted_appointments = payload;
        },
        allLimitedCreatedAppointment(state, payload){
            state.allLimitedCreatedAppointment = payload;
        },
        allCreatedAppointment(state, payload){
            state.allCreatedAppointment = payload;
        },

        add_today_appointment(state, payload){
            state.today_appointments = payload;
        },

        add_upcoming_appointment(state, payload){
            state.upcoming_appointments = payload;
        },

        add_canceled_appointment(state, payload){
            state.canceled_appointments = payload;
        },

        add_completed_appointment(state, payload){
            state.completed_appointments = payload;
        }
    },
    actions: {
        fetchTodayAppointment({commit}){
            axios.get('/today_appointment').then(response => {
                commit('add_today_appointment', response.data.success);
            });
        },

        fetchUpcomingAppointment({commit}){
            axios.get('/upcoming_appointment').then(response => {
                commit('add_upcoming_appointment', response.data.success);
            });
        },

        fetchCanceledAppointment({commit}){
            axios.get('/canceled_appointment').then(response => {
                commit('add_canceled_appointment', response.data.success);
            });
        },

        fetchCompletedAppointment({commit}){
            axios.get('/completed_appointment').then(response => {
                commit('add_completed_appointment', response.data.success);
            });
        },

        fetchLimitedAppointment({commit}){
            axios.get('/limited_appointment').then(response => {
                commit('addlimited', response.data)
            });
        },
        fetchCurrentAppointment({commit}){
            axios.get('/current_appointment').then(response => {
                commit('addCurrent', response.data)
            })
        },
        fetch_Accepted_Appointment({commit}){
            axios.get('/accepted_appointment').then(response => {
                commit('add_Accepted_Appointment', response.data.success)
            })
        },

        fetchAllLimitedCreatedAppointment({commit}){
            axios.get('/api/all_limited_created_appointments').then(response => {
                commit('allLimitedCreatedAppointment', response.data)
            })
        },
        fetchAllCreatedAppointment({commit}){
            axios.get('/api/all_created_appointments').then(response => {
                commit('allCreatedAppointment', response.data)
            })
        }
    }
}