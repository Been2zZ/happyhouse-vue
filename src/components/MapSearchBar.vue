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
                <b-select placeholder="시/도" type="search" >
                    <option>서울특별시</option>
                    <option>세종특별자치시</option>
                    <option>DB에서 가져와서 추가</option>
                </b-select>
            </b-field>
            <b-field>
                <b-select placeholder="시/군/구" type="search" >
                    <option>강남구</option>
                    <option>금천구</option>
                    <option>DB에서 가져와서 추가</option>
                </b-select>
            </b-field>
            <b-field>
                <b-select placeholder="읍/면/동" type="search" >
                    <option>개포동</option>
                    <option>연희동</option>
                    <option>DB에서 가져와서 추가</option>
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
export default {
  name: 'MapSearchBar',
  data () {
    return {

    }
  }
};
</script>

<style>
#i {
  width: 100%;
  float: none;
}
</style>
