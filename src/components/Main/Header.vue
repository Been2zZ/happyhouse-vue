<template>
  <b-navbar>
    <template slot="brand">
      <!-- 로고 (home) 클릭 시 로그인 정보 유실!! -->
      <router-link to="/" style="margin: auto;">
        <b-navbar-item>
          <img src="@/assets/happylogo.png" alt="happy house logo" />
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
      <router-link v-if="getAccessToken" to="/starapt" style="margin: auto;">
        <b-navbar-item>
          <strong>관심 매물 목록</strong>
        </b-navbar-item>
      </router-link>
      <router-link to="/board" style="margin: auto;">
        <b-navbar-item>
          <strong>게시판</strong>
        </b-navbar-item>
      </router-link>
      <b-navbar-dropdown label="Info" style="font-weight: bold;">
        <router-link to="/about">
          <b-navbar-item>
            About
          </b-navbar-item>
        </router-link>
        <a target="_blank" href="https://choihwan2.github.io/">
          <b-navbar-item>
            Contact
          </b-navbar-item>
        </a>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div" v-if="getAccessToken">
        <!-- 이니셜 첫 글자 -->
        <div style="margin : left;">
          <strong>{{ getUserName }} 님 </strong>
        </div>
        <div class="buttons">
          <router-link class="button is-primary" to="/mypage">
            <strong>My page</strong>
          </router-link>
          <button class="button is-light" @click.prevent="onClickLogout">
            Log Out
          </button>
        </div>
      </b-navbar-item>

      <b-navbar-item tag="div" v-else>
        <div class="buttons">
          <router-link class="button is-primary" to="/signup">
            <strong>Sign up</strong>
          </router-link>
          <router-link class="button is-light" to="/login">
            Log in
          </router-link>
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
      errored: false,
      loading: true,
    };
  },
  computed: {
    ...mapGetters(['getAccessToken', 'getUserId', 'getUserName']),
  },
  methods: {
    onClickLogout() {
      this.$store
        .dispatch('LOGOUT')
        .then(() => this.$router.replace('/').catch(() => {}));
    },
  },
};
</script>
