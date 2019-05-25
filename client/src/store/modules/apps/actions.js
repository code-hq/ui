import appRepository from '@/services/repositories/apps';

export default {

  fetchApps({ commit }) {

    commit('SET_LOADING');
    commit('CLEAR_APPS');

    appRepository.fetchAll()
      .then((payload) => {
        commit('SET_APPS', payload);
        commit('SET_IDLE');
      })
      .catch((error) => {
        commit('SET_ERRORED');
        return Promise.reject(error);
      });
  },


  addApp({ commit }, { appCandidate }) {
    return appRepository.add(appCandidate)
      .then((payload) => {
        commit('ADD_APP', payload);
        return payload;
      });
  },


  deleteApp({ commit, dispatch }, { app }) {

    // optimistically remove the app. This makes the UI nice and snappy.
    commit('REMOVE_APP', app.id);

    return appRepository.delete(app)
      .catch((error) => {
        // If something has gone wrong then put the app back!.
        commit('ADD_APP', app);

        return Promise.reject(error);
      });
  },
};
