<template>
  <div>
    <div id="b">
      <router-link to="/write" style="float: right">
        <b-button type="is-primary" outlined id="button">게시글 등록</b-button><br />
      </router-link>
    </div>

    <div>
      <div v-if="boardList.length === 0">
        <b-table
          :data="allBoardList"
          :key="index"
          ref="table"
          paginated
          per-page="7"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page"
        >
          <b-table-column field="num" label="번호" width="100" numeric centered v-slot="props">
            {{ props.index + 1 }}
          </b-table-column>
          <b-table-column field="title" label="제목" numeric centered v-slot="props">
            <div v-if="props.row.type === 1">
              <a @click="detailBoard(props.row.num)">
                <strong>[공지] {{ props.row.title }}</strong>
              </a>
            </div>
            <div v-if="props.row.type === 0">
              <a @click="detailBoard(props.row.num)">
                {{ props.row.title }}
              </a>
            </div>
          </b-table-column>
          <b-table-column field="id" label="아이디" width="100" numeric centered v-slot="props">
            {{ props.row.id }}
          </b-table-column>
          <b-table-column field="date" label="작성시간" width="280" numeric centered v-slot="props">
            {{ props.row.date }}
          </b-table-column>
        </b-table>
      </div>
      <!-- 검색 -->
      <div v-if="boardList.length !== 0">
        <b-table
          :data="boardList"
          ref="table"
          :key="index"
          paginated
          per-page="7"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page"
        >
          <b-table-column field="num" label="번호" width="100" numeric centered v-slot="props">
            {{ props.index + 1 }}
          </b-table-column>
          <b-table-column field="title" label="제목" numeric centered v-slot="props">
            <div v-if="props.row.type === 1">
              <a @click="detailBoard(props.row.num)">
                <strong>[공지] {{ props.row.title }}</strong>
              </a>
            </div>
            <div v-if="props.row.type === 0">
              <a @click="detailBoard(props.row.num)">
                {{ props.row.title }}
              </a>
            </div>
          </b-table-column>
          <b-table-column field="id" label="아이디" width="100" numeric centered v-slot="props">
            {{ props.row.id }}
          </b-table-column>
          <b-table-column field="date" label="작성시간" width="280" numeric centered v-slot="props">
            {{ props.row.date }}
          </b-table-column>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/http-common';

export default {
  name: 'BoardList',
  props: ['boardList'],
  data() {
    return {
      upHere: false,
      loading: true,
      errored: false,
      userId: this.$store.state.userId,
      boards: [],
      allBoardList: [],
    };
  },
  methods: {
    detailBoard(num) {
      this.$router.push('/detailboard/' + num);
    },
    retrieveBoards() {
      http
        .get('/findAllBoards')
        .then((response) => (this.allBoardList = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  computed: {},
  mounted() {
    this.retrieveBoards();
  },
};
</script>

<style scoped>
#button {
  float: right;
}
#b {
  width: 100%;
}
</style>
