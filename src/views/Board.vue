<template>
  <b-container class="bv-example-row">
    <br />
    <search-bar @boardList="searchboardList" />
    <br />
    <board-list :boardList="boardList" />
  </b-container>
</template>

<script>
import SearchBar from '@/components/Board/SearchBar.vue';
import BoardList from '@/components/Board/BoardList.vue';
// import http from '../http-common';

export default {
  name: 'Board',
  components: {
    SearchBar,
    BoardList,
  },
  data() {
    return {
      boardList: [],
    };
  },
  methods: {
    searchboardList: function(boards) {
      this.boardList = boards;
      // console.log(this.dapts);
    },
  },
};
</script>
