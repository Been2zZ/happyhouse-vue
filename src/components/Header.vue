<template>
  <b-navbar>
    <template slot="brand">
      <!-- 로고 (home) 클릭 시 로그인 정보 유실!! -->
      <router-link to="/" style="margin: auto;">
        <b-navbar-item>
          <img src="../assets/happylogo.png" alt="happy house logo" />
        </b-navbar-item>
      </router-link>
    </template>
    <template slot="start">
      <router-link to="/housesearch" style="margin: auto;">
        <b-navbar-item>
          <strong>해피하우스 찾기</strong>
        </b-navbar-item>
      </router-link>
      <router-link to="/coronasearch" style="margin: auto;">
        <b-navbar-item>
          <strong>선별 진료소</strong>
        </b-navbar-item>
      </router-link>
      <router-link to="/board" style="margin: auto;">
        <b-navbar-item>
          <strong>게시판</strong>
        </b-navbar-item>
      </router-link>
      <b-navbar-dropdown label="Info" style="font-weight: bold;">
        <router-link to="#">
          <b-navbar-item>
            About
          </b-navbar-item>
        </router-link>
        <router-link to="#">
          <b-navbar-item>
            Contact
          </b-navbar-item>
        </router-link>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div" v-if="getAccessToken">
        <div class="buttons">
          <!-- <b-nav-item> -->
          <!-- 이니셜 첫 글자 -->
          <b-avatar variant="primary" v-text="getUserId.charAt(0).toUpperCase()"></b-avatar>
          {{ getUserName }}({{ getUserId }})님 환영합니다.
          <!-- </b-nav-item> -->

          <router-link class="button is-success" to="/mypage">
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
