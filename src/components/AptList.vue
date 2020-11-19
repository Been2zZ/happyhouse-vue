<template>
  <div>
    <apt-list-item
      v-for="(apt, index) in aptlist"
      :key="index"
      :apt="apt"
      @select-apt="selectApt"
      id="my-list"
      :per-page="perPage"
      :current-page="currentPage"
    />
    <b-pagination
      v-model="currentPage"
      pills :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-list"
    ></b-pagination>
  </div>
</template>

<script>
import AptListItem from '@/components/AptListItem.vue';

export default {
  name: 'AptList',
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      rows:this.aptlist.length,
    }
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
};
</script>

<style>
</style>
