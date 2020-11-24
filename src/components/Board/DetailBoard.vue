<template>
  <section class="column is-half is-offset-one-quarter">
    <b-collapse aria-id="contentIdForA11y2" class="panel" animation="slide">
      <div
        slot="trigger"
        class="panel-heading"
        role="button"
        aria-controls="contentIdForA11y2"
      >
        <strong type="is-large">{{ dboard.title }}</strong>
      </div>
      <div class="columns">
        <div class="column is-2">작성 시간</div>
        <div class="column is-10">
          <pre>{{ dboard.date }}</pre>
        </div>
      </div>

      <div class="columns">
        <div class="column is-2">작성자</div>
        <div class="column is-10">
          <pre>{{ dboard.id }}</pre>
        </div>
      </div>

      <div class="columns">
        <div class="column is-2">내용</div>
        <div class="column is-10">
          <pre class="text-left">{{ dboard.content }}</pre>
        </div>
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
  props: ['dboard', 'num'],
  data() {
    return {
      upHere: false,
      // dboard: {},
      loading: true,
      errored: false,
      userId: this.$store.state.userId,
    };
  },
  methods: {
    modBoard() {
      this.$router.push({
        name: 'Mod',
        params: { dboard: this.dboard },
      });
      // this.$router.push({name: 'Query', query: {name: 'cat', age: 3}})
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
pre {
  text-align: left;
  margin: 0 1rem;
  white-space: pre-wrap;
  background: none;
  font-family: auto;
  font-size: 1rem;
  padding: 0;
}
</style>
