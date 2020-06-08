export default{
    state: {
        schedules:[]
    },
    getters: {
        allSchedules(state){
            return state.schedules;
        }
    },
    mutations: {
        addSchedules(state, payload){
            state.schedules = payload;
        }
    },
    actions: {
        fetchScdedules({commit}){
            axios.get('/fetch_schedules').then(response => {
                commit('addSchedules', response.data)
            });
        }
    }
}