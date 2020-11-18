<template>
  <div>
    <!-- <b-container class="bv-example-row bv-example-row-flex-cols"> 
      <b-row>
       <b-col align-self="end"><b-button id="b" href="/write">게시글 등록</b-button></b-col>
      </b-row>
    </b-container> -->
    <div id="b">
      <b-button id="button" href="/write">게시글 등록</b-button><br>
    </div>

    <div>
      <br>
    <table>
     <col width="10%"><col width="20%"><col width="20%">
     <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
      </tr>
     </thead>
     <tbody>
       <tr v-for="board in boards" :key="board.num">
         <td v-html="board.num"></td>
         <td v-html="board.title" @click="detailBoard(board.num)">
         </td>
          <td v-html="board.name"></td>
       </tr>
     </tbody>
   </table>
    </div>
  </div>
</template>


<script>
import http from "../http-common";
export default {
  name: 'BoardList',
 data() {
    return {
      upHere: false,
      emps: [],
      loading: true,
      errored: false,
      boards : [],
    };
  },
  methods:{
    detailBoard(num){
       alert(num+"번 글입니다.");
       this.$router.push('/detailboard/' + num);
    },
    retrieveBoards() {
      http
        .get("/findAllBoards")
        .then(response => (this.boards = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    modifyBoard(num){
      alert(num + "번 글을 수정합니다.");
      http
         .post("/modifyBoard/" + num)
         .then(response => {
          if (response.data.state == "succ") {
            // 수정 view 이동
            this.retrieveCustomers();
          } else {
            alert("수정이 불가능 합니다.");
          }
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.retrieveBoards();
  }
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
#button {
  float: right;
}
#b {
  width: 100%;
}
</style>