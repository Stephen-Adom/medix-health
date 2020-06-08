export default{
    state: {
        user: null
    },
    getters: {
        getUser(state){
            return state.user;
        }
    },
    mutations: {
        addUser(state, payload){
            state.user = payload;
        },
    },
    actions: {
        fetchUser({commit}){
            axios.get('/auth_info').then(response => {
                commit('addUser', response.data)
            })
        }
    }
}