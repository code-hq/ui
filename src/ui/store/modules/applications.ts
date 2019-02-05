import ApplicationRepository from '../../../application/read-model/application/ApplicationRepository';

const applications = new ApplicationRepository();

// initial state
const state = {
    leaderboardList: []
};

// getters
const getters = {};

// actions
const actions = {
    // @ts-ignore
    getLeaderboardList ({ commit }) {
        commit('setLeaderboardList', applications.getLeaderboardList())
    }
};

// mutations
const mutations = {

    // @ts-ignore
    setLeaderboardList (state, list) {
        state.leaderboardList = list;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
