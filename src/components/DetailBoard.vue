<template>
  <div id="d">
    <table>
     <col width="10%"><col width="20%"><col width="20%">
     <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>아이디</th>
        <th>내용</th>
        <th>작성시간</th>
      </tr>
     </thead>
     <tbody>
       <tr>
          <td v-html="dboard.num"></td>
          <td v-html="dboard.title"></td>
          <td v-html="dboard.id"></td>
          <td v-html="dboard.content"></td>
          <td v-html="dboard.date"></td>
       </tr>
     </tbody>
   </table>
  <br>
    <b-button @click="modBoard(dboard.num)">게시글 수정</b-button>
  </div>
</template>

<script>
import http from "../http-common";
export default {
  name: "DetailBoard",
  props: ['num'],
  data() {
    return {
      upHere: false,
      dboard: {},
      loading: true,
      errored: false
    };
  },
  methods:{
    modBoard(num){
       alert(num+"번 수정합니다.");
       this.$router.push('/mod/' + num);
    },
  },
  mounted() {
    http
    .get('/detailboard/'+this.num)
    .then(response => (this.dboard = response.data))
    .catch(() => {
      this.errored = true
    })
    .finally(() => this.loading = false);
  },
}
</script>

<style scoped>
table, th, td {
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
  margin:0 auto; 
  padding-top: 30px;
}
</style>
