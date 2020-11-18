<template>
  <!-- <b-row>
    <b-col align="left">
      <input type="text" v-model="text" @keypress.enter="searchText" />
      <b-button >검색</b-button>
    </b-col>
  </b-row> -->

  <b-input-group id="i">
    <template #prepend>
      <b-dropdown text="선택" variant="info">
        <b-dropdown-item>제목</b-dropdown-item>
        <b-dropdown-item>작성자</b-dropdown-item>
      </b-dropdown>
    </template>

    <b-form-input></b-form-input>

     <b-input-group-append>
      <b-button size="sm" text="Button" variant="success">검색</b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  name: 'SearchBar',
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
