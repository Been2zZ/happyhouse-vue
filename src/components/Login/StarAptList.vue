<template>
  <section class="container">
    <b-table
      :data="starApts"
      ref="table"
      paginated
      per-page="5"
      detailed
      detail-key="no"
      :key="index"
      :opened-detailed="defaultOpenedDetails"
      :show-detail-icon="showDetailIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <b-table-column field="index" label="번호" v-slot="props">
        {{ props.index + 1 }}
      </b-table-column>

      <b-table-column field="dong" label="읍/면/동" v-slot="props">
        {{ props.row.dong }}
      </b-table-column>

      <b-table-column field="houseName" label="house Name" sortable v-slot="props">
        <template v-if="showDetailIcon">
          {{ props.row.houseName }}
          {{ props.row.type == 1 ? ' 아파트 ' : ' 주택(연립 다세대) ' }}
          {{ props.row.floor }}층
        </template>
        <template v-else>
          <a @click="props.toggleDetails(props.row)">
            {{ props.row.houseName }}
          </a>
        </template>
      </b-table-column>

      <template slot="detail" slot-scope="props">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong> 위치 : {{ props.row.dong }} {{ props.row.jibun }}번지<br /> </strong>
                평수 : {{ props.row.area }}평<br />
                가격 : {{ props.row.dealAmount }}만원<br />
                준공 : {{ props.row.buildYear }}년<br />
              </p>
              <b-button @click="removeStarApt(props.row.no)" type="is-primary" outlined
                >관심 매물 삭제</b-button
              >
            </div>
          </div>
        </article>
      </template>
    </b-table>
  </section>
</template>

<script>
import http from '@/http-common';

export default {
  name: 'StarApt',
  data() {
    return {
      loading: true,
      errored: false,
      defaultOpenedDetails: [1],
      showDetailIcon: true,
      submitted: false,
      starApts: [],
      userId: this.$store.state.userId,
    };
  },
  components: {},
  methods: {
    removeStarApt(no) {
      http
        .post('/star/delete', {
          aptNo: no,
          userId: this.$store.state.userId,
        })
        .then((response) => {
          if (response.data.state == 'succ') {
            alert('관심 매물 삭제가 완료 되었습니다.');
            // 현재 페이지 갱신
            // this.$router.push('/starapt');
            this.$router.go(this.$router.currentRoute);
          } else {
            alert('관심 매물 삭제를 실패하였습니다.');
          }
        });
      this.submitted = true;
    },
    retrieveBoards() {
      http
        .get('/star/id/' + this.userId)
        .then((response) => {
          this.starApts = response.data;
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.retrieveBoards();
  },
};
</script>

<style>
span {
  margin: auto;
}
</style>
