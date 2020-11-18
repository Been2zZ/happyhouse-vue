<template>
  <b-container class="bv-example-row">
    <br>
    <map-search-bar @search-text="searchText" />
    <br>
  </b-container>
</template>


<script>
import MapSearchBar from '@/components/MapSearchBar.vue';
import http from "../http-common";

export default {
  name: 'Board',
  components: {
    MapSearchBar,
  },
  data() {
    return {
      boards : [],
    };
  },
  methods: {
    searchText : function(text){
      console.log('>>>>' + text);
      http
      .get("/board/" + text)
      // .then(response => {
      //   boards = response.data;
      //   console.log(this.boards);
      // })
      .catch((error) => {
        console.log(error);
      })
    }
  },
};
</script>
