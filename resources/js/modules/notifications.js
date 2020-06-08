export default{
    state: {
        unreadnotifications:[],
    },
    getters: {
        allUnreadNotifications(state){
            return state.unreadnotifications;
        },
        unreadnotificationsCount(state){
            return state.unreadnotifications.length;
        }

    },
    mutations: {
       addUnreadNotifications(state, payload){
           state.unreadnotifications = payload;
       },
       clearUnread(state){
           state.unreadnotifications = [];
       }

    },
    actions: {
        fetchUnreadNotifications({commit}){
            axios.get('/unread_notifications').then(response => {
                commit('addUnreadNotifications', response.data);
            })
        },
        clearUnreadNotification({commit}){
            commit('clearUnread');
        }
    }
}