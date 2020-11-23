<template>
  <div class="container">
    <b-field label="제목">
      <b-input id="_title" name="title" v-model="btitle" required placeholder="제목을 입력하세요..">
      </b-input>
    </b-field>

    <b-field label="내용">
      <b-input
        type="textarea"
        id="_content"
        name="content"
        v-model="bcontent"
        placeholder="내용을 입력하세요.."
        required
      >
      </b-input>
    </b-field>

    <b-button
      @click="addBoard()"
      class="button is-primary"
      type="submit"
      name="button"
      variant="primary"
      >작성</b-button
    >
  </div>
</template>

<script>
import http from '../http-common';

export default {
  name: 'Write',
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      btitle: '',
      bname: '',
      bpw: '',
      bcontent: '',
      submitted: false,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    addBoard() {
      if (this.btitle == '') {
        alert('제목을 입력하세요.');
        return;
      }
      if (this.bcontent == '') {
        alert('내용을 입력하세요.');
        return;
      }

      http
        .post('/addBoard', {
          title: this.btitle,
          content: this.bcontent,
          id: this.$store.state.userId,
          type: this.$store.state.userType,
        })
        .then((response) => {
          if (response.data.state == 'succ') {
            alert('게시물을 등록 하였습니다.');
            this.$router.push('/board');
          } else {
            alert('게시물을 등록을 실패 하였습니다.');
          }
        });
      this.submitted = true;
    },
    newCustomer() {
      (this.submitted = false),
        (this.info = null),
        (this.loading = true),
        (this.errored = false),
        (this.btitle = '');
      this.bname = '';
      this.bpw = '';
      this.bcontent = '';
    },
  },
};
</script>
