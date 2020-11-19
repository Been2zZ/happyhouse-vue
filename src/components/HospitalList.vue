<template>
  <div>
    <hospital-item
      v-for="(hospital, index) in hospitalList"
      :key="index"
      :hospital="hospital"
    />
  </div>
</template>

<script>
import HospitalItem from '@/components/HospitalItem.vue';
export default {
  name: 'HospitalList',
  data() {
    return {};
  },
  components: {
    HospitalItem,
  },
  props: {
    hospitalList: Array,
  },
  methods: {},
};
</script>

<style></style>
