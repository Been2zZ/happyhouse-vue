<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-list"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <apt-list-item
      v-for="(apt, index) in aptlist"
      :key="index"
      :apt="apt"
      @select-apt="selectApt"
      id="my-list"
      :per-page="perPage"
      :current-page="currentPage"
    />
  </div>
</template>

<script>
import AptListItem from '@/components/AptListItem.vue';

export default {
  name: 'AptList',
  data() {
    return {
      perPage: 3,
      dataPerPage: 10,
      currentPage: 1,
    };
  },
  components: {
    AptListItem,
  },
  props: {
    aptlist: Array,
  },
  methods: {
    selectApt: function(apt) {
      this.$emit('select-apt', apt);
    },
  },
  computed: {
    rows() {
      console.log('rows : [' + this.aptlist.length + ']');
      return this.aptlist.length;
    },
    numOfPages() {
      return Math.ceil(this.aptlist.length / this.dataPerPage);
    },
  },
};
</script>

<style></style>
