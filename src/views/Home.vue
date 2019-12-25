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
    <div class="divider">
      <marquee class = "display-1" behavior="scroll" direction="left">Interesting fact: Armenia was the first country to have adopted Christianity as its state religion
</marquee>
    </div>
      <v-parallax
           height="300"
           src="../assets/img/parallax/hraparak.jpg">
          <h1 class="text-center text-uppercase">The Treasures of Armenia</h1>
      </v-parallax>
    <v-container>
      <Cards/>
    </v-container>
     <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="grey darken-2 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text grey darken-3">
        {{ new Date().getFullYear() }} — <strong>TUMO WORKSHOP</strong>
      </v-card-text>
    </v-card>
  </v-footer>
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
        title: "Armenian Architecture",
        description: "Read More in this website"
      },
      {
        src: require('../assets/img/slider/literature.jpg'),
         title: "Armenian Literature",
        description: "Read More in this website"
      },
      {
        src: require('../assets/img/slider/music.jpg'),
        title: "Armenian Music",
        description: "Read More in this website"
      },
      {
        src: require('../assets/img/slider/carpet.png'),
        title: "Armenian Carpets",
        description: "Read More in this website"
      }
    ],
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram',
      ],
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
.white-text{
  color:white;
  justify-content: start;
  text-align: left;
}
body{
  background: #3d3d3d;
}
.divider{
  background: #3d3d3d;
  color:white;
}
</style>
