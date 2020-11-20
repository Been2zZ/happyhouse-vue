<template>
  <section>
    <b-field expanded grouped position="is-right">
      <!-- 텍스트 검색 -->
      <div id="search">
        <b-field>
          <b-field>
            <b-select v-model="selected">
              <option value="전체" disabled selected>전체</option>
              <option value="">제목</option>
              <option value="">작성자</option>
            </b-select>
          </b-field>
          <b-input
            v-model="input_text"
            @keypress.enter.native="GetBoard"
            placeholder="검색어..."
            expanded
          ></b-input>
          <p class="control">
            <b-button type="is-primary" @click.native="GetBoard" outlined>Search</b-button>
          </p>
        </b-field>
      </div>
    </b-field>
  </section>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      isPublic: true,
      selected: '',
    };
  },
  methods: {
    GetBoard() {},
  },
};
</script>

<style>
#i {
  width: 100%;
  float: none;
}
</style>
