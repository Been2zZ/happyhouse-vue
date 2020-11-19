<template>
  <!-- <b-row>
    <b-col align="left">
      <input type="text" v-model="text" @keypress.enter="searchText" />
      <b-button >검색</b-button>
    </b-col>
  </b-row> -->

  <section>
     <b-field expanded grouped>
            <b-field>
                <b-select  v-model="sido_selected" @change.native="ChangedGugun" placeholder="시/도" icon="earth" >
                    <option v-for="option in sido_options" :key="option.sidoCode" v-bind:value="option.sidoCode">
                      {{option.sidoName}}
                    </option>
                </b-select>
            </b-field>
            <b-field>
                <b-select v-model="gugun_selected" @change.native="ChangedDong" placeholder="시/군/구" >
                    <option v-for="option in gugun_options" :key="option.gugunCode" v-bind:value="option.gugunCode">
                      {{option.gugunName}}
                    </option>
                </b-select>
            </b-field>
            <b-field>
                <b-select  v-model="dong_selected" @change.native="GetHouse"  placeholder="읍/면/동">
                    <option v-for="option in dong_options" :key="option.dong" v-bind:value="option.dong">
                      {{option.dong}}
                    </option>
                </b-select>
            </b-field>
     <b-field>
       <b-input placeholder="건물명..." expanded></b-input>
                <p class="control">
                <b-button type="is-primary" outlined>Search</b-button>
            </p>
     </b-field>
        </b-field>
        <hr>
    </section>
</template>

<script>
import http from "../http-common";

export default {
  name: 'MapSearchBar',
  data () {
    return {
      sido_selected:'selected',
      gugun_selected:'selected',
      dong_selected:'selected',
      sido_options: [],
      gugun_options: [],
      dong_options: [],
      houses: [],
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
    },
    searchSido() {
      http
        .get("/map/sido")
        .then(response => {
          this.sido_options = response.data;
          console.log(this.selected + " search sido");
          })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    searchGugun(sido) {
      http
        .get("/map/gugun/" + sido)
        .then(response => (this.gugun_options = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    searchDong(gugun) {
      http
        .get("/map/dong/" + gugun)
        .then(response => (this.dong_options = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    getHouse(dong) {
      http
        .get("/map/house/" + dong)
        .then(response => {
          this.houses = response.data;
          console.log(this.houses);
          this.$emit("houseList", this.houses);
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.searchSido();
  }
};
</script>

<style>
#i {
  width: 100%;
  float: none;
}
</style>
