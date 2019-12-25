<template>
  <div id="about">
    <h1 class="text-center" style="font-family: algerian; font-size:60px;">About</h1>
    <p></p>
    <v-row>
    <v-col cols="12" md ="4">
        <v-card color= "#ABABAB" class="mx-auto overlay" max-width="400">
          <v-img class="white--text align-end" height="260px" src="../assets/img/cards/logo.png">
            <v-card-title style="font-family: cursive;">Vahe Khachatryan</v-card-title>
          </v-img>
          <v-card color="#D6D1D1" class="ma-7">
            <v-card-text
  class="text--primary"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora inventore debitis corporis, blanditiis totam maxime placeat iste veniam quo maiores non? Voluptates molestias libero labore distinctio accusantium temporibus quaerat. Fuga?</v-card-text>
          </v-card>
          <v-card-actions>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12"  md ="4">
        <v-card color= "#ABABAB" class="mx-auto overlay" max-width="400">
          <v-img class="white--text align-end" height="260px" src="../assets/img/cards/logo.png">
            <v-card-title style="font-family: cursive;">Gor Margaryan</v-card-title>
          </v-img>
          <v-card color="#D6D1D1" class="ma-7">
            <v-card-text
  class="text--primary"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora inventore debitis corporis, blanditiis totam maxime placeat iste veniam quo maiores non? Voluptates molestias libero labore distinctio accusantium temporibus quaerat. Fuga?</v-card-text>
          </v-card>
          <v-card-actions>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12"  md="4">
        <v-card color= "#ABABAB" class="mx-auto overlay" max-width="400">
          <v-img class="white--text align-end" height="260px" src="../assets/img/cards/logo.png">
            <v-card-title style="font-family: cursive;">Ani Avetisyan</v-card-title>
          </v-img>
          <v-card color="#D6D1D1" class="ma-7">
            <v-card-text
  class="text--primary"
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
export default {
  name: 'About',
  data: () => ({
     icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  })
}
</script>
