<template>
  <div id="about">
     <v-parallax
           height="300"
           src="../assets/img/parallax/mountain.jpg">
         <h1 class="text-center" style="font-family: algerian; font-size:60px;">Our Mission</h1>
      </v-parallax>
 <div class="divider">
      <marquee :class="{'display-0': $vuetify.breakpoint.smAndDown, 'display-1': $vuetify.breakpoint.smAndUp}" class = "text-uppercase my-2" behavior="scroll" direction="left" scrollamount="18">Our Mission is pretty important! So please read it
</marquee>
    </div>
<v-row justify="center" align="center">
  <v-col cols="12" xl="7" lg="6">
    <h2 class = "mx-12">What are we doing?</h2>
    <p class = "mx-12">This site contains a wealth of information on various branches of Armenian art. It will take you to a unique world of art, where you will tangibly feel a centuries-old breath of Armenian art. You will be with the artists who bridge the past and present, you will know all about their period of life and left inharitance. Here you will find information not only about spiritual treasures, but also monuments representing the flight of armenian architectural thought, such as Zvartnots Cathedral, Republic Square, Opera and so on. So here is armenian art in all its luxury.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum aliquet libero in consequat. Maecenas ut ligula et est commodo lacinia in et ante. In mattis eu mi a aliquam. Aliquam ac est leo. Curabitur elementum ipsum ut pharetra feugiat. Aenean pretium ligula massa, ut ultrices ipsum ultricies at. Nullam sagittis egestas dapibus. Phasellus vestibulum, lacus eget viverra ultricies, eros nisi dignissim velit, non blandit nulla ligula et nunc. Nullam malesuada diam a convallis facilisis. Cras at leo congue, mollis orci ac, lacinia augue.
    </p>
  </v-col>
  <v-col cols="12" xl="5" lg="6">
   <v-img
      src="@/assets/img/about/TUMO.jpg"
      lazy-src="@/assets/img/about/TUMO.jpg"
      class="grey lighten-2"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
</v-col>
</v-row>
<div class="divider">
      <marquee scrolldelay="100" :class="{'display-0': $vuetify.breakpoint.smAndDown, 'display-1': $vuetify.breakpoint.smAndUp}" class = "text-uppercase my-2" behavior="scroll" direction="left" scrollamount="12">It's not necessary, but we would like if you supported us :)
</marquee>
    </div>
 <v-parallax
           height="300"
           src="../assets/img/parallax/team.jpg">
         <h1 class="text-center" style="font-family: algerian; font-size:60px;">Our Team</h1>
      </v-parallax>
 
    <v-row justify="center" align="center">
    <v-col cols="12" lg ="4" md="6" sm="12">
        <v-card shaped color= "#008DD1" class="mx-auto overlay" max-width="400">
          <v-img class="white--text align-end" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)" height="260px" src="../assets/img/about/Vahe.jpg">
            <v-card-title style="font-family: cursive;">Vahe Khachatryan</v-card-title>
          </v-img>
          <v-card color="#05aeff" class="ma-7">
            <v-card-text style="color:white"
          >I'm Vahe Khachatryan. I'm 16 years old. I've been living in Armenia since i was born. I've been learning in TUMO for 3 and half years. It's still fun to go there, because without it i wouldn't be making this website :)</v-card-text>
          </v-card>
          <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        dark
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text style="color:white">
        <v-row class = "mx-12" justify="space-between" align="center">
         <v-btn class="mx-4 white--text" icon>
          <v-icon size="24px">mdi-facebook</v-icon>
        </v-btn>
         <v-btn class="mx-4 white--text" icon>
          <v-icon size="24px">mdi-instagram</v-icon>
        </v-btn>
         <v-btn class="mx-4 white--text" icon>
          <v-icon size="24px">mdi-twitter</v-icon>
        </v-btn>
         </v-row>
        </v-card-text>
      </div>
    </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="12"  lg ="4" md="6" sm="12">
        <v-card shaped color= "#008DD1" class="mx-auto overlay" max-width="400">
          <v-img class="white--text align-end" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)" height="260px" src="../assets/img/cards/logo.png">
            <v-card-title style="font-family: cursive;">Gor Margaryan</v-card-title>
          </v-img>
          <v-card color="#05aeff" class="ma-7">
            <v-card-text
 style="color:white"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora inventore debitis corporis, blanditiis totam maxime placeat iste veniam quo maiores non? Voluptates molestias libero labore distinctio accusantium temporibus quaerat. Fuga?</v-card-text>
          </v-card>
          <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        dark
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text style="color:white">
        <v-row class = "mx-12" justify="space-between" align="center">
         <v-btn class="mx-4 white--text" icon>
          <v-icon size="24px">mdi-facebook</v-icon>
        </v-btn>
         <v-btn class="mx-4 white--text" icon>
          <v-icon size="24px">mdi-instagram</v-icon>
        </v-btn>
         <v-btn class="mx-4 white--text" icon>
          <v-icon size="24px">mdi-twitter</v-icon>
        </v-btn>
         </v-row>
        </v-card-text>
      </div>
    </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="12"  lg="4" md="12" sm="12">
        <v-card shaped color= "#008DD1" class="mx-auto overlay" max-width="400">
          <v-img class="white--text align-end" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)" height="260px" src="../assets/img/cards/logo.png">
            <v-card-title style="font-family: cursive;">Ani Avetisyan</v-card-title>
          </v-img>
          <v-card color="#05aeff" class="ma-7">
            <v-card-text
  style="color:white"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora inventore debitis corporis, blanditiis totam maxime placeat iste veniam quo maiores non? Voluptates molestias libero labore distinctio accusantium temporibus quaerat. Fuga?</v-card-text>
          </v-card>
           <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        dark
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text style="color:white">
        <v-row class = "mx-12" justify="space-between" align="center">
         <v-btn class="mx-4 white--text" icon>
          <v-icon size="24px">mdi-facebook</v-icon>
        </v-btn>
         <v-btn class="mx-4 white--text" icon>
          <v-icon size="24px">mdi-instagram</v-icon>
        </v-btn>
         <v-btn class="mx-4 white--text" icon>
          <v-icon size="24px">mdi-twitter</v-icon>
        </v-btn>
         </v-row>
        </v-card-text>
      </div>
    </v-expand-transition>
        </v-card>
      </v-col>
      </v-row>
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
export default {
  name: 'About',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-google-plus',
      'mdi-linkedin',
      'mdi-instagram'
    ],
    show: false,
    fab:false,
  }),
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>