<template>
  <b-container class="bv-example-row">
    <br />
    <map-search-bar @search-text="searchText" @houseList="searchDong" />
    <br />
    <b-row>
      <b-col cols="8">
        <house-map :aptlist="apts" />
      </b-col>
      <b-col cols="4">
        <apt-list :aptlist="apts" @select-apt="selectApt" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MapSearchBar from '@/components/MapSearchBar.vue';
import http from '../http-common';
import HouseMap from '@/components/HouseMap.vue';
import AptList from '@/components/AptList.vue';

export default {
  name: 'Board',
  components: {
    MapSearchBar,
    HouseMap,
    AptList,
  },
  props: {
    houses: Array,
  },
  data() {
    return {
      boards: [],
      apts: [],
      selectedApt: '',
    };
  },

  // created: function() {
  //   // 후에 응답받는걸로 변경해야함.
  //   http
  //     .get('/map/house/광장동')
  //     .then((response) => {
  //       this.apts = response.data;
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
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
    selectApt: function(apt) {
      this.selectedApt = apt;
    },
    searchDong: function(houses) {
      this.apts = houses;
      console.log(this.apts);
    },
  },
};
</script>
