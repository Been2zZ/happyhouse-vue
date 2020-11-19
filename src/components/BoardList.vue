<template>
  <div>
    <!-- <b-container class="bv-example-row bv-example-row-flex-cols"> 
      <b-row>
       <b-col align-self="end"><b-button id="b" href="/write">게시글 등록</b-button></b-col>
      </b-row>
    </b-container> -->
    <div id="b">
      <b-button type="is-primary" outlined id="button" href="/write">게시글 등록</b-button><br>
    </div>

    <div>
      <br>
      <b-table>
    <!-- <b-table table is-fullwidth> -->
     <col width="10%"><col width="20%"><col width="20%">
     <b-thead>
      <b-tr>
        <b-th>번호</b-th>
        <b-th>제목</b-th>
        <b-th>작성자</b-th>
      </b-tr>
     </b-thead>
     <b-tbody>
       <b-tr v-for="board in boards" :key="board.num">
         <b-td v-html="board.num"></b-td>
         <b-td v-html="board.title" @click="detailBoard(board.num)">
         </b-td>
          <b-td v-html="board.name"></b-td>
       </b-tr>
     </b-tbody>
   </b-table>
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
  },
  mounted() {
    this.retrieveBoards();
  }
}
</script>

<style scoped>
/* table, th, td {
  border: 1px solid #bcbcbc;
  text-align: center;
}
table {
  width: 100%;
  height: 100%;
  align-self: center;
}
thead {
  font-size: x-large;
  text-align: center;
} */
#button {
  float: right;
}
#b {
  width: 100%;
}
</style>