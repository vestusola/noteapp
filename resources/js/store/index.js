import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from "./state";

import Snotify  from "vue-snotify";
Vue.use(Snotify);

import 'vue-snotify/styles/material.css';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});