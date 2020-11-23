<template>
  <section>
    <b-field label="아이디">
      <b-input v-model="user.id" required placeholder="아이디를 입력하세요."> </b-input>
    </b-field>

    <b-field label="비밀번호">
      <b-input
        type="password"
        v-model="user.pw"
        required
        @keypress.enter="login"
        placeholder="비밀번호를 입력하세요."
        password-reveal
      >
      </b-input>
    </b-field>
    <b-button type="is-primary" class="m-1" @click="login">로그인</b-button>

    <!-- <b-form>
      <b-form-group label="아이디:" label-for="id">
        <b-form-input
          id="id"
          v-model="user.id"
          required
          placeholder="아이디 입력...."
        ></b-form-input>
      </b-form-group>
      <b-form-group label="비밀번호:" label-for="pw">
        <b-form-input
          type="password"
          id="pw"
          v-model="user.pw"
          required
          placeholder="비밀번호 입력...."
          @keypress.enter="login"
        ></b-form-input>
        <b-button type="is-primary" class="m-1" @click="login">로그인</b-button>
      </b-form-group>
    </b-form> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: '',
        pw: '',
      },
      name: '',
    };
  },
  computed: {
    nextRoute() {
      return this.$route.params.nextRoute ? this.$route.params.nextRoute : '';
    },
  },
  methods: {
    login: function() {
      // LOGIN 액션 실행
      // 서버와 통신(axios)을 해 토큰값을 얻어야 하므로 Actions를 호출.
      this.$store
        .dispatch('LOGIN', this.user)
        .then(() => this.$router.replace(`/${this.nextRoute}`))
        .catch(({ message }) => {
          console.log(message);
          alert('아이디 혹은 비밀번호를 확인하세요!');
        });
    },
  },
};
</script>

<style scoped>
section {
  width: 50%;
  padding-top: 5%;
  margin: 0 auto;
}
</style>
