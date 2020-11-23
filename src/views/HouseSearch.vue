<template>
  <b-container class="bv-example-row">
    <br />
    <map-search-bar @houseList="searchDong" @dhouseList="searchDongDetail" />
    <br />
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds">
          <house-map :aptlist="apts" />
        </div>
        <div class="column">
          <apt-list :aptlist="dapts" />
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import MapSearchBar from '@/components/HappyHouseSearch/MapSearchBar.vue';
import HouseMap from '@/components/HappyHouseSearch/HouseMap.vue';
import AptList from '@/components/HappyHouseSearch/AptList.vue';

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
