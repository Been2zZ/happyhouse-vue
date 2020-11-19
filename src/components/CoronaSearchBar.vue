<template>
  <section>
    <b-field expanded grouped>
      <b-field>
        <b-select
          v-model="sido_selected"
          @change.native="ChangedGugun"
          icon="earth"
        >
          <option value="" disabled selected>"시/도"</option>
          <option
            v-for="option in sido_options"
            :key="option.sidoCode"
            v-bind:value="option.sidoCode"
          >
            {{ option.sidoName }}
          </option>
        </b-select>
      </b-field>
      <b-field>
        <b-select
          v-model="gugun_selected"
          @change.native="ChangedDong"
          placeholder="시/군/구"
        >
          <option value="" disabled selected>"시/군/구"</option>
          <option
            v-for="option in gugun_options"
            :key="option.gugunCode"
            v-bind:value="option.gugunCode"
          >
            {{ option.gugunName }}
          </option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
  </section>
</template>

<script>
import http from '../http-common';

export default {
  name: 'CoronaSearchBar',
  data() {
    return {
      sido_selected: 'selected',
      gugun_selected: 'selected',
      sido_options: [],
      gugun_options: [],
      hospitalList: [],
    };
  },
  methods: {
    ChangedGugun() {
      this.searchGugun(this.sido_selected);
    },
    ChangedDong() {
      this.getHospital(this.gugun_selected);
    },
    searchSido() {
      http
        .get('/map/sido')
        .then((response) => {
          this.sido_options = response.data;
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    searchGugun(sido) {
      http
        .get('/map/gugun/' + sido)
        .then((response) => (this.gugun_options = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    getHospital(gugun) {
      http
        .get('/corona/gugun/' + gugun)
        .then((response) => {
          this.hospitalList = response.data;
          // console.log(this.hospitalList);
          this.$emit('hospital-list', this.hospitalList);
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.searchSido();
  },
};
</script>

<style>
#search {
  margin-left: auto;
}
</style>
