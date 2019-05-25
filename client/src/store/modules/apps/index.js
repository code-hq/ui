import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import STATUS from '@/models/status';

const state = {
  status: STATUS.IDLE,
  loading: false,
  apps: [],

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
