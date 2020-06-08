export default{
    state: {
        roles:[]
    },
    getters: {
        getAllRoles: state => {
            return state.roles;
        }
    },
    mutations: {
        addRoles(state, payload){
            state.roles = payload;
        },

        addNewRole(state, payload){
            state.roles.push(payload);
        }
    },
    actions: {
        getRoles({commit}){
            axios.get('/api/get_roles').then(response => {
                commit('addRoles', response.data);
            });
        },

        newRole({commit}, payload){
            commit('addNewRole', payload);
        }
    }
}