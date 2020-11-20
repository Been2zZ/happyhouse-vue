<template>
  <section>
    <b-field expanded grouped>
      <b-field>
        <b-select v-model="sido_selected" @change.native="ChangedGugun" icon="earth">
          <option value="" disabled selected>시/도</option>
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
        <b-select v-model="gugun_selected" @change.native="ChangedDong" placeholder="시/군/구">
          <option value="" disabled selected>시/군/구</option>
          <option
            v-for="option in gugun_options"
            :key="option.gugunCode"
            v-bind:value="option.gugunCode"
          >
            {{ option.gugunName }}
          </option>
        </b-select>
      </b-field>
      <b-field>
        <b-select v-model="dong_selected" @change.native="GetHouse" placeholder="읍/면/동">
          <option value="" disabled selected>읍/면/동</option>
          <option v-for="option in dong_options" :key="option.dong" v-bind:value="option.dong">
            {{ option.dong }}
          </option>
        </b-select>
      </b-field>

      <!-- 텍스트 검색 -->
      <!-- enter 검색 안됌 -->
      <div id="search">
        <b-field>
          <b-input
            v-model="input_text"
            @keyup.enter="submit"
            placeholder="건물명..."
            expanded
          ></b-input>
          <p class="control">
            <b-button type="is-primary" @click.native="GetHouseName" outlined>Search</b-button>
          </p>
        </b-field>
      </div>
    </b-field>
    <hr />
  </section>
</template>

<script>
import http from '../http-common';

export default {
  name: 'MapSearchBar',
  data() {
    return {
      sido_selected: 'selected',
      gugun_selected: 'selected',
      dong_selected: 'selected',
      input_text: '',
      sido_options: [],
      gugun_options: [],
      dong_options: [],
      houses: [],
      dhouses: [],
    };
  },
  methods: {
    ChangedGugun() {
      this.searchGugun(this.sido_selected);
    },
    ChangedDong() {
      this.searchDong(this.gugun_selected);
    },
    GetHouse() {
      this.getHouse(this.dong_selected);
      this.getHouseDetail(this.dong_selected);
    },
    GetHouseName() {
      this.getHouseName(this.input_text);
      this.getHouseNameDetail(this.input_text);
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
    searchDong(gugun) {
      http
        .get('/map/dong/' + gugun)
        .then((response) => (this.dong_options = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    getHouse(dong) {
      http
        .get('/map/house/' + dong)
        .then((response) => {
          this.houses = response.data;
          // console.log(this.houses);
          this.$emit('houseList', this.houses);
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    getHouseDetail(dong) {
      http
        .get('/detail/dong/' + dong)
        .then((response) => {
          this.dhouses = response.data;
          // console.log(this.dhouses);
          this.$emit('dhouseList', this.dhouses);
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    getHouseName(name) {
      http
        .get('/map/name/' + name)
        .then((response) => {
          this.houses = response.data;
          // console.log(this.houses);
          this.$emit('houseList', this.houses);
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    getHouseNameDetail(name) {
      http
        .get('/detail/name/' + name)
        .then((response) => {
          this.dhouses = response.data;
          console.log(this.dhouses);
          this.$emit('dhouseList', this.dhouses);
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
