<template>
  <div>

      <h2>게시글 수정을 원하는 경우 게시글 작성시 입력한 비밀번호가 일치해야 합니다!</h2>

    <b-row class="my-1">
      <b-col sm="2">
        <label for="input-default">제목</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="_title" name="title" v-model="btitle" placeholder="제목을 입력하세요.."></b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-1">
      <b-col sm="2">
        <label for="input-default">작성자 이름</label>
      </b-col>
      <b-col sm="3">
        <b-form-input id="_name" name="name" v-model="bname" placeholder="이름을 입력하세요.."></b-form-input>
      </b-col>
      <b-col sm="2">
        <label for="input-default">글 비밀번호</label>
      </b-col>
      <b-col sm="4">
        <b-form-input id="_pw" name="pw" v-model="bpw" placeholder="글 작성시 입력한 비밀번호를 입력하세요.."></b-form-input>
      </b-col>
    </b-row>
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
          rows="8" >
          </b-form-textarea>
      </b-col>
    </b-row>

    <b-button @click="modBoard()" type="submit" name="button" variant="primary">수정</b-button>
  </div>
</template>

<script>
import http from "../http-common";
export default {
   name: 'Mod',
   props: ['num'],
    data() {
      return {
        info: null,
        loading: true,
        errored: false,
        dboard: {},
        btitle:"",
        bname:"",
        bnum:"",
        bpw:"",
        bcontent:"",
        submitted: false
      };
    },
    mounted() {
        http
            .get('/mod/'+this.num)
            .then(response => (this.dboard = response.data))
            .catch(() => {
            this.errored = true
            })
            .finally(() => this.loading = false);
    },
    methods: {
      modBoard() {
      if (this.btitle == "") {
        alert("제목을 입력하세요.");
        return;
      }
      if (this.bname == "") {
        alert("이름을 입력하세요.");
        return;
      }
      if (this.bpw == "") {
        alert("비밀번호를 입력하세요.");
        return;
      }
      if (this.bcontent == "") {
        alert("내용을 입력하세요.");
        return;
      }

      http
        .post("/modifyBoard", {
          title: this.btitle,
          content : this.bcontent,
          num : this.num,
          pw : this.bpw,
          name : this.bname
        })
        .then(response => {
          if (response.data.state == "succ") {
            alert("게시글 수정을 완료 하였습니다.");
            this.$router.push('/board');
          } else {
            alert("비밀번호가 일치하지 않아 수정을 실패하였습니다.");
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
        (this.btitle = "");
        (this.bname = "");
        (this.bpw = "");
        (this.bcontent = "");
      },
      modifyBoard(num){
       alert(num+"번 수정합니다.");
       this.$router.push('/mod/' + num);
    },
    }
  };
</script>