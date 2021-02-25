import Vuex from 'vuex';
import { getUser } from '../util/tool';

export default Vuex.createStore({
  state: {
    user: getUser(),
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  actions: {},
  modules: {},
});
