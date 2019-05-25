import statusMutations from '../status/mutations';

const findAppById = (state, id) => state.apps.find(item => item.id === id);

export default {

  ...statusMutations,

  CLEAR_APPS(state) {
    state.apps = [];
  },

  SET_APPS(state, apps) {
    state.apps = apps;
  },

  ADD_APP(state, app) {
    state.apps.push(app);
  },

  REMOVE_APP(state, id) {

    const app = findAppById(state, id);

    state.apps.splice(state.apps.indexOf(app), 1);
  },

};
