<template>
  <section>
    <b-table
      :data="hospitalList"
      ref="table"
      paginated
      per-page="5"
      detailed
      detail-key="tel"
      :opened-detailed="defaultOpenedDetails"
      :show-detail-icon="showDetailIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <b-table-column field="hospitalName" label="병원 목록" v-slot="props">
        <template v-if="showDetailIcon">
          {{ props.row.name }}
        </template>
        <template v-else>
          <a @click="props.toggleDetails(props.row)">
            {{ props.row.name }}
          </a>
        </template>
      </b-table-column>

      <template slot="detail" slot-scope="props">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <!-- <p> -->
              <strong> 위치 : {{ props.row.address }} <br /> </strong>
              전화번호 : {{ props.row.tel }}<br />
              공휴일 운영시간 : {{ props.row.weekdayop == '' ? '휴무' : props.row.weekdayop }}<br />
              <!-- </p> -->
            </div>
          </div>
        </article>
      </template>
    </b-table>
  </section>
</template>

<script>
export default {
  name: 'HospitalList',
  data() {
    return {
      defaultOpenedDetails: [1],
      showDetailIcon: true,
    };
  },
  components: {
    // HospitalItem,
  },
  props: {
    hospitalList: Array,
  },
  methods: {},
};
</script>

<style>
span {
  margin: auto;
}
</style>
