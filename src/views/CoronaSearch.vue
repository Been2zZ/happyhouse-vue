<template>
  <b-container class="bv-example-row">
    <br />
    <corona-search-bar @hospital-list="searchHospital" />
    <br />
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds">
          <corona-map :hospitalList="hospitalList" />
        </div>
        <div class="column">
          <hospital-list :hospitalList="hospitalList" />
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import CoronaSearchBar from '@/components/HospitalSearch/CoronaSearchBar.vue';
import CoronaMap from '@/components/HospitalSearch/CoronaMap.vue';
import HospitalList from '@/components/HospitalSearch/HospitalList.vue';

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
