<template>
  <div id="about">
<h1 class="text-center" style="font-family: algerian; font-size:60px;">Our Mission</h1>
<v-row>
  <v-col cols="12" xl="7" lg="6">
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




  <h1 class="text-center" style="font-family: algerian; font-size:60px;">Our Team</h1>
    <v-row>
    <v-col cols="12" lg ="4" md="6" sm="12">
        <v-card color= "#008DD1" class="mx-auto overlay" max-width="400">
          <v-img class="white--text align-end" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)" height="260px" src="../assets/img/about/Vahe.jpg">
            <v-card-title style="font-family: cursive;">Vahe Khachatryan</v-card-title>
          </v-img>
          <v-card color="#05aeff" class="ma-7">
            <v-card-text style="color:white"
          >I'm Vahe Khachatryan. I'm 16 years old. I've been living in Armenia since i was born. I've been learning in TUMO for 3 and half years. It's still fun to go there, because without it i wouldn't be making this website :)</v-card-text>
          </v-card>
          <v-card-actions>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12"  lg ="4" md="6" sm="12">
        <v-card color= "#008DD1" class="mx-auto overlay" max-width="400">
          <v-img class="white--text align-end" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)" height="260px" src="../assets/img/cards/logo.png">
            <v-card-title style="font-family: cursive;">Gor Margaryan</v-card-title>
          </v-img>
          <v-card color="#05aeff" class="ma-7">
            <v-card-text
 style="color:white"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora inventore debitis corporis, blanditiis totam maxime placeat iste veniam quo maiores non? Voluptates molestias libero labore distinctio accusantium temporibus quaerat. Fuga?</v-card-text>
          </v-card>
          <v-card-actions>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12"  lg="4" md="12" sm="12">
        <v-card color= "#008DD1" class="mx-auto overlay" max-width="400">
          <v-img class="white--text align-end" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)" height="260px" src="../assets/img/cards/logo.png">
            <v-card-title style="font-family: cursive;">Ani Avetisyan</v-card-title>
          </v-img>
          <v-card color="#05aeff" class="ma-7">
            <v-card-text
  style="color:white"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora inventore debitis corporis, blanditiis totam maxime placeat iste veniam quo maiores non? Voluptates molestias libero labore distinctio accusantium temporibus quaerat. Fuga?</v-card-text>
          </v-card>
          <v-card-actions>
          </v-card-actions>
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
    ]
  })
}
</script>