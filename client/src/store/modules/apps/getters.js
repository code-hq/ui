import statusGetters from '../status/getters';

export default {
  ...statusGetters,
  apps: state => state.apps,
};
