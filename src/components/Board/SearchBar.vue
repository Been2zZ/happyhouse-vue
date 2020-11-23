<template>
  <section>
    <b-field expanded grouped position="is-right">
      <!-- 텍스트 검색 -->
      <div id="search">
        <b-field>
          <b-field>
            <b-select v-model="selected">
              <option value="전체" selected>전체</option>
              <option value="title">제목</option>
              <option value="writer">작성자</option>
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
import http from '@/http-common';

export default {
  name: 'SearchBar',
  data() {
    return {
      input_text: '',
      isPublic: true,
      selected: '',
    };
  },
  methods: {
    GetBoard() {
      // option으로 선택한 값 : 제목 or 작성자
      this.getBoard(this.selected);
      this.input_text = '';
    },

    getBoard(selected) {
      if (selected == 'title') {
        // 제목
        this.getBoardTitle(this.input_text);
      } else if (selected == 'writer') {
        // 작성자
        this.getBoardWriter(this.input_text);
      } else {
        this.getBoardTotal();
        console.log('전체 검색');
      }
    },
    getBoardTotal() {
      // 전체 검색
      http
        .get('/findAllBoards')
        .then((response) => {
          this.boards = response.data;
          this.$emit('boardList', this.boards);
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    getBoardTitle(input_text) {
      // 제목 검색
      http
        .get('/board/' + input_text)
        .then((response) => {
          this.boards = response.data;
          this.$emit('boardList', this.boards);
          if (this.boards.length == 0) {
            alert('검색어에 해당하는 제목의 글이 존재하지 않습니다.');
          }
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));

      console.log(input_text);
    },
    getBoardWriter(input_text) {
      // 작성자 검색 ----> 작성자 함수 없음
      http
        .get('/board/' + input_text)
        .then((response) => {
          this.boards = response.data;
          this.$emit('boardList', this.boards);
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style>
#i {
  width: 100%;
  float: none;
}
</style>
