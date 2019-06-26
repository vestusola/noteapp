/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue'));
import AppComponent from  './AppComponent.vue';
import CreateComponent from './page/CreateComponent.vue';
import EditComponent from './page/EditComponent.vue';

import BootstrapVue from  'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import FontAwesome from 'font-awesome/css/font-awesome.css';

Vue.use(FontAwesome);

Vue.use(BootstrapVue);

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';
import store from './store/index';

Vue.use(VueRouter);
Vue.use(VueAxios, Axios);

Vue.config.devtools = false
Vue.config.productionTip = false

const routes = [
    {
        name: 'home',
        path: '/home',
        component: CreateComponent
    },
    {
        name: 'edit',
        path: 'note/edit/:id',
        component: EditComponent
    }
];

const router = new VueRouter({mode:'history', routes: routes});

const app = new Vue(Vue.util.extend({router, store}, AppComponent)).$mount('#app');
