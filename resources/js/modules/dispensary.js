export default{
    state: {
        dispensary: null
    },
    getters: {
        allData(state){
            return state.dispensary;
        }
    },
    mutations: {
        addDispensary(state, payload){
            state.dispensary = payload;
        },
    },
    actions: {
        fetchDispensary({commit}){
            axios.get('/api/fetch_dispensary_data').then(response => {
                commit('addDispensary', response.data)
            })
        }
    }
}