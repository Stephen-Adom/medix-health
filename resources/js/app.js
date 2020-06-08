/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};


window.Vue = require('vue');
import '@fortawesome/fontawesome-free/js/all.js';
import Swal from 'sweetalert2';
import vuetify from './vuetify.js';
import router from './router.js';
import store from './store.js';
import Login from './components/Login.vue';
import Welcome from './components/Welcome.vue';
import Dashboard from './components/Dashboard';
import "overlayscrollbars/css/OverlayScrollbars.css";
import OverlayScrollbars from 'overlayscrollbars';
import { OverlayScrollbarsPlugin } from "overlayscrollbars-vue";
import moment from 'moment';
import 'vue-progress-path/dist/vue-progress-path.css';
import VueProgress from 'vue-progress-path';
import Gate from './Gate';
import vueTopprogress from 'vue-top-progress';
import PortalVue from "portal-vue";
import Croppa from 'vue-croppa';  
import 'vue-croppa/dist/vue-croppa.css';

Vue.use(vueTopprogress);
Vue.use(PortalVue);
Vue.use(Croppa)
Vue.prototype.$gate = new Gate(window.user);

Vue.use(VueProgress, {
  // defaultShape: 'circle',
});

Vue.use(OverlayScrollbarsPlugin);

export const bus = new Vue();

window.Toast = Swal;
window.Swal = Swal;
window.moment = moment;

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
    showClass: {
        popup: 'animated fadeInDown faster'
    },
    hideClass: {
        popup: 'animated fadeOutUp faster'
    }
});


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('login-app', Login);
Vue.component('welcome-app', Welcome);
Vue.component('dashboard-app', Dashboard);



const app = new Vue({
    store,
    vuetify,
    router,
    el: '#app',
});
