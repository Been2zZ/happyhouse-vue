<template>
  <section>
    <b-carousel :indicator-inside="false">
        <b-carousel-item style="height: 70%; display: inline;" v-for="(item, i) in 7" :key="i">
            <span class="image">
              <img :src="getImg(i)">
            </span>
        </b-carousel-item>
        <template slot="indicators" slot-scope="props">
            <span class="al image">
                <img :src="getImg(props.i)" :title="props.i">
            </span>
        </template>
    </b-carousel>
  </section>
</template>

<script>
export default {
    methods: {
      getImg(value) {
          return require(`..//assets/apt0${value + 1}.jpg`)
      }
    }
}
</script>

<style>
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
section {
  width: 95%;
  margin:0 auto; 
}

</style>