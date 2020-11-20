<template>
  <b-container class="bv-example-row">
    <br />
    <map-search-bar @houseList="searchDong" @dhouseList="searchDongDetail" />
    <br />
    <b-row>
      <b-col cols="8">
        <house-map :aptlist="apts" />
      </b-col>
      <b-col cols="4">
        <apt-list :aptlist="dapts" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MapSearchBar from '@/components/MapSearchBar.vue';
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
    };
  },
  methods: {
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
};
</script>

<style scoped></style>
