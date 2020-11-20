import Vue from "vue";
import Vuex from "vuex";
import http from '../http-common';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    accessToken: null,
    userId: "",
    userName: ""
  },
  getters: {
    getAccessToken(state) {
      return state.accessToken;
    },
    getUserId(state) {
      return state.userId;
    },
    getUserName(state) {
      return state.userName;
    }
  },
  mutations: {
    LOGIN(state, payload) {
      state.accessToken = payload["auth-token"];
      state.userId = payload["user-id"];
      state.userName = payload["user-name"];
    },
    LOGOUT(state) {
      state.accessToken = null;
      state.userId = "";
      state.userName = "";
    }
  },
  actions: {
    LOGIN(context, user) {
      return http
        .post(`/member/login`, user)
        .then((response) => {
          context.commit("LOGIN", response.data);
          http.defaults.headers.common[
            "auth-token"
          ] = `${response.data["auth-token"]}`;
          console.log(response);
        });
    },
    LOGOUT(context) {
      context.commit("LOGOUT");
      http.defaults.headers.common["auth-token"] = undefined;
    }
  },
  modules: {}
});
