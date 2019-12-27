<template>
  <div>
    <v-carousel
      dark
      show-arrows-on-hover
      hide-delimiters
      continuous
      cycle
      interval="10000"
      touch
      :class="{'min-height=340': $vuetify.breakpoint.mdAndDown, 'min-height=500': $vuetify.breakpoint.mdAndUp}"
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
                <v-flex :class="{'ma-12': $vuetify.breakpoint.smAndDown, 'mx-5': $vuetify.breakpoint.mdAndUp}">
                  <h2 :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-3': $vuetify.breakpoint.mdAndUp}" class = "white-text">{{ item.title }}</h2>
                  <h3 :class="{'display-0': $vuetify.breakpoint.smAndDown, 'display-1': $vuetify.breakpoint.mdAndUp}" class="subheading white-text">{{ item.description }}</h3>
                  <v-col cols="12" sm="3">
            <v-btn @click="$vuetify.goTo(1000, options)" block rounded dark x-large icon>
              <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
          </v-col>
                </v-flex>
              </v-layout>
            </v-container>
          </v-jumbotron>
      </v-carousel-item>
    </v-carousel>
    <div class="divider">
      <marquee v-for="fact in facts" :key="fact.id" :class="{'display-0': $vuetify.breakpoint.smAndDown, 'display-1': $vuetify.breakpoint.smAndUp}" class = "text-uppercase my-2" behavior="scroll" direction="left" scrollamount="18">{{ fact.text }}
</marquee>
    </div>
      <v-parallax
           height="300"
           src="../assets/img/parallax/hraparak.jpg">
          <h2 :class="{'display-0': $vuetify.breakpoint.smAndDown, 'display-1': $vuetify.breakpoint.mdAndUp}" class = "text-center text-uppercase">The Treasures of Armenia</h2>
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
        This site contains a wealth of information on various branches of Armenian art. It will take you to a unique world of art, where you will tangibly feel a centuries-old breath of Armenian art. You will be with the artists who bridge the past and present, you will know all about their period of life and left inharitance. Here you will find information not only about spiritual treasures, but also monuments representing the flight of armenian architectural thought, such as Zvartnots Cathedral, Republic Square, Opera and so on. So here is armenian art in all its luxury.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text grey darken-3">
        {{ new Date().getFullYear() }} — <strong>TUMO WORKSHOP</strong>
      </v-card-text>
    </v-card>
  </v-footer>
            <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="primary"
            @click="toTop"
          >
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
  </div>
</template>

<script>
import Cards from '../components/Cards.vue'
export default {
  name: 'Home',
  data: () => ({
    fab: false,
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
    ],
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-google-plus',
      'mdi-linkedin',
      'mdi-instagram'
    ],
    facts: [
      {
        id: 1, text: 'Interesting fact: Armenia was the first country to have adopted Christianity as its state religion'
      }
    ]
  }),
  components: {
    Cards
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
  computed: {
    options () {
      return {
        duration: 1000,
        offset: 90,
        easing: 'easeInOutQuart'
      }
    }
  }
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
body{
  background: #3d3d3d;
}
.divider{
  background: #3d3d3d;
  color:white;
}
</style>
