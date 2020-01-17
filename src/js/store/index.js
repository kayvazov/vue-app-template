import Vue from 'vue';
import Vuex from 'vuex';
import api from './utils/api';

// modules
import draft from './modules/draft'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    draft
  }
})