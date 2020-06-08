export default{
    state: {
        excuse_duty: [],
        previous_duty: [],
    },
    getters: {
        allExcuses(state){
            return state.excuse_duty;
        },
        ExcusesLength(state){
            return state.excuse_duty.length;
        },
        allPrevious(state){
            return state.previous_duty;
        }
    },
    mutations: {
        addExcuse(state, payload){
            state.excuse_duty = payload;
        },
        addPrevious(state, payload){
            state.previous_duty = payload;
        }

    },
    actions: {
        fetchExcuses({commit}){
            axios.get('/api/get_excuses').then(response => {
                commit('addExcuse', response.data)
            })
        },
        fetchPrevious({commit}){
            axios.get('/api/previous_excuses').then(response => {
                commit('addPrevious', response.data)
            })
        }

    }
}