<template>
  <section class="container">
    <b-collapse
      aria-id="contentIdForA11y2"
      class="panel"
      animation="slide"
      v-model="isOpen"
    >
      <div
        slot="trigger"
        class="panel-heading"
        role="button"
        aria-controls="contentIdForA11y2"
      >
        <strong>{{ dboard.title }}</strong>
      </div>
      <p class="panel-tabs">
        <a class="is-active">내용</a>
      </p>
      <div class="panel-block">
        <div style="width:10%;">
          <strong>{{ dboard.date }}</strong
          ><br />
          작성자 :
          <strong>{{ dboard.id }}</strong>
        </div>
        <div style="width:90%;">{{ dboard.content }}</div>
      </div>
    </b-collapse>

    <div v-if="userId === dboard.id">
      <b-button class="button is-primary" @click="modBoard(dboard.num)"
        >게시글 수정</b-button
      >
    </div>
  </section>
</template>

<script>
import http from '@/http-common';

export default {
  name: 'DetailBoard',
  props: ['num'],
  data() {
    return {
      upHere: false,
      dboard: {},
      loading: true,
      errored: false,
      userId: this.$store.state.userId,
    };
  },
  methods: {
    modBoard(num) {
      this.$router.push('/mod/' + num);
    },
  },
  mounted() {
    http
      .get('/detailboard/' + this.num)
      .then((response) => (this.dboard = response.data))
      .catch(() => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid #bcbcbc;
  text-align: center;
}
table {
  width: 100%;
  /* width: "auto"; */
  height: 100%;
  align-self: center;
}
thead {
  font-size: x-large;
  text-align: center;
}
#d {
  width: 90%;
  margin: 0 auto;
  padding-top: 30px;
}
</style>
