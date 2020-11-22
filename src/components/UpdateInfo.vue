<template>
  <section>
    <div v-bind="attrs">
      <!-- 회원 정보 수정 화면 -->
      <strong>{{ user.isAdmin == 0 ? '회원' : '관리자' }}</strong
      ><strong> 정보 수정 화면</strong>
      <section>
        <b-field label="이름">
          <b-input
            name="name"
            v-model="user.name"
            placeholder="이름을 입력하세요."
          ></b-input>
        </b-field>

        <b-field label="비밀번호">
          <b-input
            type="password"
            value=""
            name="pw"
            v-model="user.pw"
            placeholder="비밀번호를 입력하세요."
            password-reveal
          >
          </b-input>
        </b-field>

        <b-field label="전화번호">
          <b-input
            type="tel"
            name="tel"
            v-model="user.phoneNum"
            placeholder="전화번호를 입력하세요."
          >
          </b-input>
        </b-field>

        <b-field label="Email">
          <b-input
            type="email"
            name="email"
            v-model="user.email"
            placeholder="이메일을 입력하세요."
          >
          </b-input>
        </b-field>

        <b-field label="주소">
          <b-input
            maxlength="100"
            name="address"
            v-model="user.address"
            type="text"
            placeholder="ex. 대전광역시"
          ></b-input>
        </b-field>

        <b-field label="상세 주소">
          <b-input
            maxlength="100"
            name="address_detail"
            v-model="user.addressDetail"
            type="textarea"
            placeholder="ex. 유성구 봉명동"
          ></b-input>
        </b-field>

        <b-button
          @click="modMember()"
          type="submit"
          name="button"
          variant="is-primary"
        >
          {{ user.isAdmin == 0 ? '회원' : '관리자' }} 정보 수정
        </b-button>
      </section>
    </div>
  </section>
</template>

<script>
import http from '../http-common';

export default {
  name: 'UpdateInfo',
  props: ['user'],
  data() {
    return {
      submitted: false,
      loading: true,
      errored: false,
    };
  },
  computed: {
    attrs() {
      return this.$attrs;
    },
  },
  methods: {
    modMember() {
      if (this.pw == '') {
        alert('비밀번호를 입력하세요.');
        return;
      }
      if (this.name == '') {
        alert('이름을 입력하세요.');
        return;
      }
      if (this.phoneNum == '') {
        alert('전화번호를 입력하세요.');
        return;
      }
      if (this.email == '') {
        alert('이메일을 입력하세요.');
        return;
      }
      if (this.address == '') {
        alert('주소를 입력하세요.');
        return;
      }
      if (this.addressDetail == '') {
        alert('상세 주소를 입력하세요.');
        return;
      }

      http.post('member/modify', this.user).then((response) => {
        console.log(response);
        this.$store
          .dispatch('TOKENUPDATE', response)
          .then(() => this.$router.replace('/'))
          .catch(({ message }) => console.log(message));
      });
      this.submitted = true;
    },
  },
};
</script>
