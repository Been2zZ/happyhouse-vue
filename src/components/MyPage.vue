<template>
  <b-container class="mt-4" v-if="user">
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <b-jumbotron>
          <template #header>My Page</template>

          <template #lead> 내 정보 확인페이지입니다. </template>

          <hr class="my-4" />

          <b-container class="mt-4">
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" align-self="end">아이디</b-col
              ><b-col cols="4" align-self="start">{{ user.id }}</b-col>
              <b-col cols="2"></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" align-self="end">이름</b-col
              ><b-col cols="4" align-self="start">{{ user.name }}</b-col>
              <b-col cols="2"></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" align-self="end">이메일</b-col
              ><b-col cols="4" align-self="start">{{ user.email }}</b-col>
              <b-col cols="2"></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" align-self="end">주소</b-col
              ><b-col cols="4" align-self="start">{{ user.address }}</b-col>
              <b-col cols="2"></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" align-self="end">상세주소</b-col
              ><b-col cols="4" align-self="start">{{ user.addressDetail }}</b-col>
              <b-col cols="2"></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" align-self="end">휴대전화</b-col
              ><b-col cols="4" align-self="start">{{ user.phoneNum }}</b-col>
              <b-col cols="2"></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" align-self="end">유저정보</b-col
              ><b-col cols="4" align-self="start">{{
                user.isAdmin == 0 ? '회원' : '관리자'
              }}</b-col>
              <b-col cols="2"></b-col>
            </b-row>
          </b-container>
          <hr class="my-4" />

          <!-- 일반 이용자 -->
          <div v-if="user.isAdmin === 0">
            <router-link class="button danger" :to="{ name: 'UpdateInfo', params: { user: user } }">
              회원 정보 수정
            </router-link>
            <b-button variant="danger" href="#" @click.native="deleteMember">회원 탈퇴</b-button>
          </div>

          <!-- 관리자 -->
          <div v-if="user.isAdmin === 1">
            <router-link class="button danger" to="/updateinfo">
              관리자 정보 수정
            </router-link>
            <router-link class="button danger" to="/memberlist">
              회원 관리
            </router-link>
          </div>
        </b-jumbotron>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import http from '../http-common';

export default {
  name: 'MyPage',
  data() {
    return {
      user: null,
      submitted: false,
    };
  },
  created() {
    http
      .get('/member/info/')
      .then((response) => {
        this.user = response.data.user;
      })
      .catch(() => {
        this.$store.dispatch('LOGOUT').then(() => this.$router.replace('/'));
      });
  },
  methods: {
    deleteMember() {
      http.get('member/delete').then((response) => {
        if (response.data.state == 'succ') {
          alert('회원 탈퇴가 완료 되었습니다.');
          this.$store.dispatch('LOGOUT').then(() => this.$router.replace('/').catch(() => {}));
          this.$router.push('/');
        } else {
          alert('회원 탈퇴가 실패하였습니다.');
        }
      });
      this.submitted = true;
    },
  },
};
</script>

<style></style>
