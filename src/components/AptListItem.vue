<template>
  <section>
        <b-collapse :open="false" class="card"  animation="slide" aria-controls="contentIdForA11y3">
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="contentIdForA11y3">
                <p class="card-header-title">
                    {{ apt.houseName }}<span style="margin-left: 2px;" v-once>{{ apt.type == 1 ? " 아파트 " : " 주택(연립 다세대) "}}</span> 
                    <span style="margin-left: 7px;"></span>
                    {{ apt.floor }}층
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                    위치 : {{ apt.dong }} {{ apt.jibun }}번지<br>
                    평수 : {{ apt.area }}평<br>
                    가격 : {{ apt.dealAmount }}만원<br>
                    준공 : {{ apt.buildYear }}년<br>
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item">관심 매물 등록</a>
            </footer>
        </b-collapse>
        <br>
      </section>
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

<style scoped>
.collapse:not(.show) {
    display: inherit;
}
</style>