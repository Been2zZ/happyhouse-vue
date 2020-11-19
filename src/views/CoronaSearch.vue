<template>
  <b-container class="bv-example-row">
    <br />
    <corona-search-bar @hospital-list="searchHospital" />
    <br />
    <b-row>
      <b-col cols="8">
        <corona-map :hospitalList="hospitalList" />
      </b-col>
      <b-col cols="4">
        <hospital-list :hospitalList="hospitalList" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CoronaSearchBar from '@/components/CoronaSearchBar.vue';
import CoronaMap from '@/components/CoronaMap.vue';
import HospitalList from '@/components/HospitalList.vue';

export default {
  name: 'CoronaSearch',
  components: {
    CoronaSearchBar,
    CoronaMap,
    HospitalList,
  },
  props: {},
  data() {
    return {
      hospitalList: [],
    };
  },
  methods: {
    searchHospital: function(hospitals) {
      console.log(hospitals);
      this.hospitalList = hospitals;
    },
  },
};
</script>
