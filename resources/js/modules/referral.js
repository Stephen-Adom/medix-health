export default{
    state: {
        referrals:[],

    },
    getters: {
        allReferrals(state){
            return state.referrals;
        },

    },
    mutations: {
       addReferrals(state, payload){
           state.referrals = payload;
       },

    },
    actions: {
        fetchReferrals({commit}){
            axios.get('/get_referrals').then(response => {
                commit('addReferrals', response.data);
            });
        }
    }
}