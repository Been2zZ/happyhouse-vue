<template>
  <div>
    <b-row class="my-1">
      <b-col sm="2">
        <label for="input-default">제목</label>
      </b-col>
      <b-col sm="9">
        <b-form-input
          id="_title"
          name="title"
          v-model="btitle"
          placeholder="제목을 입력하세요.."
        ></b-form-input>
      </b-col>
    </b-row>

    <!-- <b-row class="my-1">
      <b-col sm="2">
        <label for="input-default">작성자 이름</label>
      </b-col>
      <b-col sm="3">
        <b-form-input id="_name" name="name" v-model="bname" placeholder="이름을 입력하세요.."></b-form-input>
      </b-col>
      <b-col sm="2">
        <label for="input-default">글 비밀번호</label>
      </b-col>
      <b-col sm="3">
        <b-form-input id="_pw" name="pw" v-model="bpw" placeholder="비밀번호를 입력하세요.."></b-form-input>
      </b-col>
    </b-row> -->
    <b-row class="mt-2">
      <b-col sm="2">
        <label for="textarea-default">내용</label>
      </b-col>
      <b-col sm="9">
        <b-form-textarea
          id="_content"
          name="content"
          v-model="bcontent"
          placeholder="내용을 입력하세요.."
          rows="8"
        >
        </b-form-textarea>
      </b-col>
    </b-row>

    <b-button @click="addBoard()" type="submit" name="button" variant="primary">작성</b-button>
  </div>
</template>

<script>
import http from '../http-common';
import { mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters(['getAccessToken', 'getUserId', 'getUserType']),
  },
  mounted() {},
  methods: {
    addBoard() {
      if (this.btitle == '') {
        alert('제목을 입력하세요.');
        return;
      }
      if (this.bname == '') {
        alert('이름을 입력하세요.');
        return;
      }
      if (this.bpw == '') {
        alert('비밀번호를 입력하세요.');
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
          // id, type (0: admin 1: user)
          // id: getUserId(),
          // type: getUserType(),
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
