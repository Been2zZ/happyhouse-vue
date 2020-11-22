<template>
  <section>
    <div v-bind="attrs">
      <div v-if="user.isAdmin === 0">
        <!-- 회원 정보 수정 화면 -->
        <strong>회원 정보 수정 화면</strong>
        <section>
          <b-field label="이름">
            <b-input
              name="name"
              v-model="user.name"
              placeholder="이름을 입력하세요."
              value="허허허허허"
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
            회원 정보 수정
          </b-button>
        </section>
      </div>
    </div>

    <div id="_admin" v-if="user.isAdmin === 1">
      <!-- 관리자 정보 수정 화면 -->
      <strong>관리자 정보 수정 화면</strong>
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
            v-model="pw"
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
            value=""
            placeholder="전화번호를 입력하세요."
          >
          </b-input>
        </b-field>

        <b-field label="Email">
          <b-input
            type="email"
            name="email"
            v-model="user.email"
            value=""
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
          @click="modAdmin()"
          type="submit"
          name="button"
          variant="is-primary"
        >
          관리자 정보 수정
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
          .catch(({ message }) => (this.msg = message));
      });
      this.submitted = true;
    },
    modAdmin() {
      http
        .post('member/modify', {
          id: this.user.id,
          pw: this.user.pw,
          name: this.user.name,
          email: this.user.email,
          phoneNum: this.user.phoneNum,
          address: this.user.address,
          isAdmin: 1,
          addressDetail: this.user.addressDetail,
        })
        .then((response) => {
          if (response.data.state == 'succ') {
            alert('관리자 정보 수정이 완료 되었습니다.');
            this.$router.push('/');
          } else {
            alert('관리자 정보 수정에 실패 되었습니다');
          }
        });
      this.submitted = true;
    },
  },
};
</script>
