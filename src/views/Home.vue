<template>
  <div>
    <v-carousel
      dark
      show-arrows-on-hover
      hide-delimiters
      continuous
      cycle
      interval="10000"
      transition="none"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        transition="scroll-x-transition"
        reverse-transition="scroll-x-reverse-transition"
      >
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
      </v-carousel-item>
    </v-carousel>
    <div class="divider">
      <marquee v-for="fact in facts" :key="fact.id" :class="{'display-0': $vuetify.breakpoint.smAndDown, 'display-1': $vuetify.breakpoint.smAndUp}" class = "text-uppercase mt-2 py-3" behavior="scroll" direction="left" scrolldelay="90">{{ fact.text }}
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
    loading: true,
    fab: false,
    items: [
      {
        src: require('../assets/img/slider/architecture.jpg'),
        title: 'Armenian Architecture',
        description: 'Read more below'
      },
      {
        src: require('../assets/img/slider/literature.jpg'),
        title: 'Armenian Literature',
        description: 'Read more below'
      },
      {
        src: require('../assets/img/slider/music.jpg'),
        title: 'Armenian Music',
        description: 'Read more below'
      },
      {
        src: require('../assets/img/slider/carpet.png'),
        title: 'Armenian Carpets',
        description: 'Read more below'
      }
    ],
    facts: [
      {
        id: 1, text: 'Did you know? Armenia was the first country to adopt Christianity as its official, state religion.'
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
.divider{
  background: #3d3d3d;
  color:white;
}
</style>
