<template>
  <div class="container" v-if="user">
    <h1 class="title">My Page</h1>
    <h1 class="subtitle">내 정보 확인페이지입니다.</h1>
    <div class="columns">
      <div class="column is-3"></div>
      <div class="column is-6">
        <hr class="my-6" />

        <div class="container">
          <div class="columns">
            <div class="column is-2"></div>
            <div class="column is-2" align-self="end">아이디</div>
            <div class="column is-6" align-self="start">{{ user.id }}</div>
          </div>
          <div class="columns">
            <div class="column is-2"></div>
            <div class="column is-2" align-self="end">이름</div>
            <div class="column is-6" align-self="start">{{ user.name }}</div>
            <div class="column is-2"></div>
          </div>
          <div class="columns">
            <div class="column is-2"></div>
            <div class="column is-2" align-self="end">이메일</div>
            <div class="column is-6" align-self="start">{{ user.email }}</div>
            <div class="column is-2"></div>
          </div>
          <div class="columns">
            <div class="column is-2"></div>
            <div class="column is-2" align-self="end">주소</div>
            <div class="column is-6" align-self="start">
              {{ user.address }}
            </div>
            <div class="column is-2"></div>
          </div>
          <div class="columns">
            <div class="column is-2"></div>
            <div class="column is-2" align-self="end">상세주소</div>
            <div class="column is-6" align-self="start">
              {{ user.addressDetail }}
            </div>
            <div class="column is-2"></div>
          </div>
          <div class="columns">
            <div class="column is-2"></div>
            <div class="column is-2" align-self="end">휴대전화</div>
            <div class="column is-6" align-self="start">
              {{ user.phoneNum }}
            </div>
            <div class="column is-2"></div>
          </div>
          <div class="columns">
            <div class="column is-2"></div>
            <div class="column is-2" align-self="end">유저정보</div>
            <div class="column is-6" align-self="start">
              {{ user.isAdmin == 0 ? '회원' : '관리자' }}
            </div>
            <div class="column is-2"></div>
          </div>
        </div>
        <hr class="my-6" />

        <!-- 일반 이용자 -->
        <div v-if="user.isAdmin === 0">
          <router-link
            class="button is-primary is-light"
            :to="{ name: 'UpdateInfo', params: { user: user } }"
          >
            회원 정보 수정
          </router-link>
          <b-button type="is-danger is-light" @click.native="deleteMember"
            >회원 탈퇴</b-button
          >
        </div>

        <!-- 관리자 -->
        <div v-if="user.isAdmin === 1">
          <router-link
            class="button is-primary is-light"
            :to="{ name: 'UpdateInfo', params: { user: user } }"
            :user="user"
          >
            관리자 정보 수정
          </router-link>
          <router-link class="button is-danger is-light" to="/memberlist">
            회원 관리
          </router-link>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import http from '@/http-common';

export default {
  name: 'MyPage',
  data() {
    return {
      user: null,
      submitted: false,
    };
  },
  created() {
    console.log('Mypage 가 생성되었습니다.');
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
          this.$store
            .dispatch('LOGOUT')
            .then(() => this.$router.replace('/').catch(() => {}));
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

<style>
.button {
  margin-left: 10px;
}
</style>
