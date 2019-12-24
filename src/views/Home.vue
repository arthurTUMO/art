<template>
  <div>
    <v-carousel
      dark
      height="620"
      show-arrows-on-hover
      hide-delimiters
      continuous
      cycle
      interval="10000"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        transition="scroll-x-transition"
        reverse-transition="scroll-x-reverse-transition"
      >
      </v-carousel-item>
    </v-carousel>
      <v-parallax
           height="300"
           src="../assets/img/parallax/heading.jpg">
          <h1 class="text-center text-uppercase">Armenian famous places and people</h1>
      </v-parallax>
    <v-container>
      <Cards/>
    </v-container>
  </div>
</template>

<script>
import Cards from '../components/Cards.vue'
export default {
  name: 'Home',
  data: () => ({
    text: "ioasyhduiashduiahsduihiausdhuiashduiahsduihasdui",
    items: [
      {
        src: require('../assets/img/slider/architecture.jpg')
      },
      {
        src: require('../assets/img/slider/literature.jpg')
      },
      {
        src: require('../assets/img/slider/music.jpg')
      },
      {
        src: require('../assets/img/slider/carpet.png')
      }
    ]
  }),
  components: {
    Cards
  },
  methods: {

  }
}
</script>

<style>
.v-carousel .v-window-item,
.v-parallax__image-container{
filter: brightness(0.5);
}
</style>
