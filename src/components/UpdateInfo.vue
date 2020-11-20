<template>
  <section>
    <div id="_user" v-if="user.isAdmin === 0">
      <!-- 회원 정보 수정 화면 -->
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
