<template>
  <section>
    <b-table
      :data="aptlist"
      ref="table"
      paginated
      per-page="5"
      detailed
      detail-key="no"
      :opened-detailed="defaultOpenedDetails"
      :show-detail-icon="showDetailIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <b-table-column
        field="houseName"
        label="house Name"
        sortable
        v-slot="props"
      >
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
                <strong>
                  위치 : {{ props.row.dong }} {{ props.row.jibun }}번지<br />
                </strong>
                평수 : {{ props.row.area }}평<br />
                가격 : {{ props.row.dealAmount }}만원<br />
                준공 : {{ props.row.buildYear }}년<br />
              </p>
              <b-button
                v-if="getAccessToken"
                @click="starApt(props.row.no)"
                type="is-primary"
                outlined
                >관심 매물 등록</b-button
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
import { mapGetters } from 'vuex';

export default {
  name: 'AptList',
  data() {
    return {
      loading: true,
      errored: false,
      defaultOpenedDetails: [1],
      showDetailIcon: true,
      submitted: false,
    };
  },
  computed: {
    ...mapGetters(['getAccessToken', 'getUserId', 'getUserName']),
  },
  components: {},
  methods: {
    starApt(aptno) {
      http
        .post('/star/add', {
          aptNo: aptno,
          userId: this.$store.state.userId,
        })
        .then((response) => {
          if (response.data.state == 'succ') {
            alert('관심매물을 등록 하였습니다.');
          } else {
            alert('관심매물 등록을 실패 하였습니다.');
          }
        });
      this.submitted = true;
    },
  },
  props: {
    aptlist: Array,
  },
};
</script>

<style>
span {
  margin: auto;
}
</style>
