import Vue from 'vue';
import Vuex from 'vuex';
import http from '../http-common';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: localStorage.getItem('accessToken') || null,
    userId: localStorage.getItem('userId') || '',
    userName: localStorage.getItem('userName') || '',
  },
  getters: {
    getAccessToken(state) {
      // state.accessToken = localStorage.accessToken;
      console.log(state);
      if (state.accessToken === 'null') return false;
      return state.accessToken;
    },
    getUserId(state) {
      return state.userId;
    },
    getUserName(state) {
      return state.userName;
    },
  },
  mutations: {
    LOGIN(state, payload) {
      state.accessToken = payload['auth-token'];
      state.userId = payload['user-id'];
      state.userName = payload['user-name'];
      localStorage.accessToken = payload['auth-token'];
      localStorage.userId = payload['user-id'];
      localStorage.userName = payload['user-name'];
    },
    LOGOUT(state) {
      state.accessToken = null;
      state.userId = '';
      state.userName = '';
      localStorage.accessToken = null;
      localStorage.userId = '';
      localStorage.userName = '';
    },
  },
  actions: {
    LOGIN(context, user) {
      return http.post(`/member/login`, user).then((response) => {
        context.commit('LOGIN', response.data);
        http.defaults.headers.common[
          'auth-token'
        ] = `${response.data['auth-token']}`;
      });
    },
    LOGOUT(context) {
      context.commit('LOGOUT');
      http.defaults.headers.common['auth-token'] = undefined;
    },
    TOKENUPDATE(context, tokens) {
      context.commit('LOGIN', tokens.data);
      http.defaults.headers.common[
        'auth-token'
      ] = `${tokens.data['auth-token']}`;
    },
  },
  modules: {},
});
const enhanceAccessToeken = () => {
  const { accessToken } = localStorage;
  if (!accessToken) return;
  http.defaults.headers.common['auth-token'] = localStorage.getItem(
    'accessToken'
  );
};
enhanceAccessToeken();
