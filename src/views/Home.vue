<template>
  <div class="home">
    <!-- <Main /> -->
    <MainPicture />
    <!-- <img alt="Vue logo" src="../assets/logo2.png" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Main from '@/components/Main.vue';
import MainPicture from '@/components/Main/MainPicture.vue';

export default {
  name: 'Home',
  components: {
    // Main,
    MainPicture,
  },
};
</script>

<style scoped></style>
