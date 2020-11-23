<template>
  <section>
    <b-collapse
      :open="false"
      class="card"
      animation="slide"
      aria-controls="contentIdForA11y3"
    >
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
      >
        <p class="card-header-title">
          {{ hospital.name }}
        </p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          위치 : {{ hospital.address }} <br />
          전화번호 : {{ hospital.tel }}<br />
          공휴일 운영시간 :
          {{ hospital.weekdayop == '' ? '휴무' : hospital.weekdayop }}<br />
        </div>
      </div>
    </b-collapse>
    <br />
  </section>
</template>

<script>
export default {
  name: 'HospitalListItem',
  props: {
    hospital: Object,
  },
  methods: {},
};
</script>

<style scoped>
.collapse:not(.show) {
  display: inherit;
}
</style>
