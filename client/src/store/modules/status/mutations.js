import STATUS from '@/models/status';

export default {

  SET_IDLE(state) {
    state.status = STATUS.IDLE;
  },

  SET_LOADING(state) {
    state.status = STATUS.LOADING;
  },

  SET_ERRORED(state) {
    state.status = STATUS.ERROR;
  },

};
