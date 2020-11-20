<template>
  <b-container class="bv-example-row">
    <br />
    <map-search-bar
      @search-text="searchText"
      @houseList="searchDong"
      @dhouseList="searchDongDetail"
    />
    <br />
    <b-row>
      <b-col cols="8">
        <house-map :aptlist="apts" />
      </b-col>
      <b-col cols="4">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-list"
        ></b-pagination>

        <p class="mt-3">Current Page: {{ currentPage }}</p>

        <apt-list :aptlist="dapts" id="my-list" :per-page="perPage" :current-page="currentPage" />
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
  name: 'HouseSearch',
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
      dapts: [],
      selectedApt: '',
      selectedAptDetail: '',
      perPage: 3,
      currentPage: 1,
    };
  },
  methods: {
    searchText: function(text) {
      console.log('>>>>' + text);
      http.get('/board/' + text).catch((error) => {
        console.log(error);
      });
    },
    selectApt: function(apt) {
      this.selectedApt = apt;
    },
    selectAptDetail: function(dapt) {
      this.selectedAptDetail = dapt;
    },
    searchDong: function(houses) {
      this.apts = houses;
      // console.log(this.apts);
    },
    searchDongDetail: function(dhouses) {
      this.dapts = dhouses;
      // console.log(this.dapts);
    },
  },
  computed: {
    rows() {
      console.log('rows : [' + this.apts.length + ']');
      return this.apts.length;
    },
  },
};
</script>

<style scoped></style>
