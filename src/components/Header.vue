<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="../assets/happylogo.png" alt="happy house logo" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="/housesearch">
        해피하우스 찾기
      </b-navbar-item>
      <b-navbar-item href="/coronasearch">
        선별 진료소
      </b-navbar-item>
      <b-navbar-item href="/board">
        게시판
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div" v-if="getAccessToken">
        <div class="buttons">
          <b-nav-item
            ><b-avatar variant="primary" v-text="getUserId.charAt(0).toUpperCase()"></b-avatar
            >{{ getUserName }}({{ getUserId }})님 환영합니다.</b-nav-item
          >

          <router-link class="button is-success" to="/me">
            <strong>My page</strong>
          </router-link>
          <a class="button is-danger" @click.prevent="onClickLogout">
            Log Out
          </a>
        </div>
      </b-navbar-item>

      <b-navbar-item tag="div" v-else>
        <div class="buttons">
          <a class="button is-primary" href="/signup">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" href="/login">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      isLogin: false,
    };
  },
  computed: {
    ...mapGetters(['getAccessToken', 'getUserId', 'getUserName']),
  },
  methods: {
    onClickLogout() {
      this.$store.dispatch('LOGOUT').then(() => this.$router.replace('/').catch(() => {}));
    },
  },
};
</script>
