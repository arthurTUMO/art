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
        <v-jumbotron dark>
          <v-container fill-height>
            <v-layout align-center>
              <v-flex>
                <h2 class="display-3 white-text">{{ item.title }}</h2>
                <h3 class="subheading white-text">{{ item.description }}</h3>
              </v-flex>
            </v-layout>
          </v-container>
        </v-jumbotron>
      </v-carousel-item>
    </v-carousel>
    <v-parallax height="300" src="../assets/img/parallax/heading.jpg">
      <h1 class="text-center text-uppercase">The Treasures of Armenia</h1>
    </v-parallax>
    <v-container>
      <Cards />
    </v-container>
  </div>
</template>

<script>
import Cards from '../components/Cards.vue'
export default {
  name: 'Home',
  data: () => ({
    items: [
      {
        src: require('../assets/img/slider/architecture.jpg'),
        title: 'Armenian Architecture',
        description: 'Read More in this website'
      },
      {
        src: require('../assets/img/slider/literature.jpg'),
        title: 'Armenian Literature',
        description: 'Read More in this website'
      },
      {
        src: require('../assets/img/slider/music.jpg'),
        title: 'Armenian Music',
        description: 'Read More in this website'
      },
      {
        src: require('../assets/img/slider/carpet.png'),
        title: 'Armenian Carpets',
        description: 'Read More in this website'
      }
    ]
  }),
  components: {
    Cards
  },
  methods: {}
}
</script>

<style>
.v-carousel .v-image__image,
.v-parallax__image-container {
  filter: brightness(0.5);
}
.white-text {
  color: white;
  justify-content: start;
  text-align: left;
}
body {
  background: #f6f6f6;
}
</style>
