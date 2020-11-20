<template>
  <section>
    <div id="_user" v-if="user.isAdmin === 0">
      <!-- 회원 정보 수정 화면 -->
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
    </div>

    <div id="_admin" v-if="user.isAdmin === 1">
      <!-- 관리자 정보 수정 화면 -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
