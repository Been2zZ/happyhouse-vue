<template>
  <section class="container">
    <b-field label="제목">
      <b-input id="_title" name="title" v-model="btitle" placeholder="제목을 입력하세요.." required>
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

    <b-button @click="modBoard()" class="is-primary" type="submit" name="button" variant="primary"
      >수정</b-button
    >
  </section>
</template>

<script>
import http from '../http-common';
export default {
  name: 'Mod',
  props: ['num'],
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      btitle: '',
      bname: '',
      bnum: '',
      bpw: '',
      bcontent: '',
      submitted: false,
    };
  },
  mounted() {},
  methods: {
    modBoard() {
      if (this.btitle == '') {
        alert('제목을 입력하세요.');
        return;
      }
      if (this.bcontent == '') {
        alert('내용을 입력하세요.');
        return;
      }

      http
        .post('/modifyBoard', {
          num: this.num,
          title: this.btitle,
          content: this.bcontent,
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
      console.log(this.num);
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
