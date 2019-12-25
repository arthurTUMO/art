<template>
  <div>
    <v-carousel
      dark
      height="500"
      show-arrows-on-hover
      hide-delimiters
      continuous
      cycle
      interval="10000"
      touch
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        transition="scroll-x-transition"
        reverse-transition="scroll-x-reverse-transition"
      >
      <v-container fluid class = "mx-2">
      <h2 class="text-uppercase slider-title">{{ text }}</h2>
      <p class="text-uppercase slider-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </v-container>
      </v-carousel-item>
    </v-carousel>
      <v-parallax
           height="300"
           src="../assets/img/parallax/heading.jpg">
          <h2 class="text-center text-uppercase">Armenian famous places and people</h2>
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
    text: "Title",
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
.v-carousel .v-image__image,
.v-parallax__image-container{
filter: brightness(0.5);
}
.slider-title{
  color:white;
  justify-content: start;
  text-align: left;
}
</style>
