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
            </div>
          </div>
        </article>
      </template>
    </b-table>
  </section>
</template>

<script>
// import AptListItem from '@/components/AptListItem.vue';

export default {
  name: 'AptList',
  data() {
    return {
      defaultOpenedDetails: [1],
      showDetailIcon: true,
    };
  },
  components: {
    // AptListItem,
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
