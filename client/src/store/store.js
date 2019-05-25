import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import apps from '@/store/modules/apps';

export default new Vuex.Store({
  state: {
    version: '0.0.1', // Get from environment variable
  },

  getters: {
    version: state => state.version,
  },

  modules: {
    apps,
  },
});
