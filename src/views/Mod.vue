<template>
  <section class="container">
    <b-field label="제목">
      <b-input
        id="_title"
        name="title"
        v-model="dboard.title"
        placeholder="제목을 입력하세요.."
        required
      >
      </b-input>
    </b-field>

    <b-field label="내용">
      <b-input
        type="textarea"
        id="_content"
        name="content"
        v-model="dboard.content"
        placeholder="내용을 입력하세요.."
        required
      >
      </b-input>
    </b-field>

    <b-button
      @click="modBoard()"
      class="is-primary"
      type="submit"
      name="button"
      variant="primary"
      >수정</b-button
    >
  </section>
</template>

<script>
import http from '../http-common';
export default {
  name: 'Mod',
  props: ['dboard'],
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      submitted: false,
    };
  },
  mounted() {},
  methods: {
    modBoard() {
      if (this.dboard.title == '') {
        alert('제목을 입력하세요.');
        return;
      }
      if (this.dboard.title == '') {
        alert('내용을 입력하세요.');
        return;
      }

      http
        .post('/modifyBoard', {
          num: this.dboard.num,
          title: this.dboard.title,
          content: this.dboard.content,
        })
        .then((response) => {
          if (response.data.state == 'succ') {
            alert('게시글 수정을 완료 하였습니다.');
            this.$router.push('/board');
          } else {
            alert('게시글 수정에 실패 하였습니다.');
          }
        });
      this.submitted = true;
    },
  },
};
</script>
