/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


window.Vue = require('vue').default;
import vuetify from '../plugins/vuetify'; // path to vuetify export
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import '@mdi/font/css/materialdesignicons.css'
import storeData from "./store/productStore"
import routes from "./route";

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
Vue.use(VueRouter);
Vue.use(Vuex);



const store = new Vuex.Store(
    storeData
)

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component('updatecomponent',require('./components/UpdateComponent.vue').default);
Vue.component('bank',require('./components/BankComponent.vue').default);
Vue.component('edititemcomponent',require('./components/EditItemComponent.vue').default);
Vue.component('product-component', require('./components/ProductComponent.vue').default);
Vue.component('branch-component', require('./components/BranchComponent.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    mode: 'history',
    routes
});

window.events = new Vue();
const app = new Vue({
    vuetify,
    router,
    iconfont:'mdi',
    el: '#app',
    store,
});
