export default{
    state: {
        drugs:[],
    },
    getters: {
        allDrugs(state){
            return state.drugs;
        },
    },
    mutations: {
        addDrugs(state, payload){
            state.drugs = payload;
        },

    },
    actions: {
        fetchDrugs({commit}){
            axios.get('/api/get_drugs').then(response => {
                commit('addDrugs', response.data)
            })
        },
       

    }
}