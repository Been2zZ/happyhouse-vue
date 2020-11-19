<template>
  <div class="card" @click="selectApt">
    <header class="card-header">
      <p class="card-header-title">
        {{ apt.houseName }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a href="#">@bulmaio</a>. <a href="#">#css</a>
        <a href="#">#responsive</a>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AptListItem',
  props: {
    apt: Object,
  },
  methods: {
    selectApt: function() {
      this.$emit('select-apt', this.apt);
    },
  },
};
</script>

<style>
.img-list {
  width: 50px;
}
</style>
