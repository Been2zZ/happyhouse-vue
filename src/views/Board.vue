<template>
  <b-container class="bv-example-row">
    <br />
    <search-bar @search-text="searchText" />
    <br />
    <board-list />
  </b-container>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import BoardList from '@/components/BoardList.vue';
import http from '../http-common';

export default {
  name: 'Board',
  components: {
    SearchBar,
    BoardList,
  },
  data() {
    return {
      boards: [],
    };
  },
  methods: {
    searchText: function(text) {
      console.log('>>>>' + text);
      http
        .get('/board/' + text)
        // .then(response => {
        //   boards = response.data;
        //   console.log(this.boards);
        // })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
