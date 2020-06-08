export default{
    state: {
        first_aids: null
    },
    getters: {
        allAids(state){
            return state.first_aids;
        }
    },
    mutations: {
        addAids(state, payload){
            state.first_aids = payload;
        },
    },
    actions: {
        fetchAids({commit}){
            axios.get('/api/fetch_first_aids').then(response => {
                commit('addAids', response.data)
            });
        }
    }
}