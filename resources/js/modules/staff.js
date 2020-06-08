export default{
    state: {
        staffs:[],
        active:null,
        total:null,
    },
    getters: {
        allStaff(state){
            return state.staffs;
        },
        active(state){
            return state.active;
        },
        total(state){
            return state.total;
        }
    },
    mutations: {
        addStaff(state, payload){
            state.staffs = payload
        },
        addStaffDoctors(state, payload){
            state.staffs = payload
        },
        addStaffNurses(state, payload){
            state.staffs = payload
        },
        addStaffPharmacists(state, payload){
            state.staffs = payload
        },
        addStaffTechs(state, payload){
            state.staffs = payload
        },
        addStaffManagers(state, payload){
            state.staffs = payload
        },
        addActive(state, payload){
            state.active = payload;
        },
        addTotal(state, payload){
            state.total = payload;
        }
    },
    actions: {
        fetchStaff({commit}){
            axios.get('/api/get_staff').then(response => {
                commit('addStaff', response.data.success)
            });
        },

        fetch_doctors({commit}){
            axios.get('/api/get_staff_doctors').then(response => {
                commit('addStaffDoctors', response.data.success)
            });
        },

        fetch_nurses({commit}){
            axios.get('/api/get_staff_nurses').then(response => {
                commit('addStaffNurses', response.data.success)
            });
        },

        fetch_pharmacists({commit}){
            axios.get('/api/get_staff_pharmacists').then(response => {
                commit('addStaffPharmacists', response.data.success)
            });
        },

        fetch_lab_techs({commit}){
            axios.get('/api/get_staff_techs').then(response => {
                commit('addStaffTechs', response.data.success)
            });
        },

        fetch_managers({commit}){
            axios.get('/api/get_staff_managers').then(response => {
                commit('addStaffManagers', response.data.success)
            });
        },

        fetchActive({commit}){
            axios.get('/api/get_active').then(response => {
                commit('addActive', response.data.active);
                commit('addTotal', response.data.all);
            })
        }
    }
}