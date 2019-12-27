<template>
  <v-container>
    <v-row outlined color="blue">
      <v-col v-for="card in cards" :key="card.id" cols="12" lg="3" md="4" sm="6">
        <v-card shaped class="mx-auto overlay" max-width="400">
          <v-img class="white--text align-end" height="200px" :src="card.src">
            <v-card-title>{{ card.title }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">Number {{ card.id }}</v-card-subtitle>
          <v-card-text
            class="text--primary block-with-text"
          >{{ card.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="orange" text>Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Cards',
  props: {
    color: String
  },
  data: () => ({
    cards: null
  }),
  methods: {
    getArt: async function () {
      let resp = await axios.get('https://armenian-art.herokuapp.com/getArt')
      console.log(resp.data)
      console.log(resp.data['cards'])
      this.cards = resp.data['cards']
    }
  },
  created () {
    this.getArt()
  }
}
</script>
<style>
.block-with-text {
  overflow: hidden;
  line-height: 4em;
  max-height: 2em;
}
.overlay .v-image__image{
filter: blur(3px);
transform: scale(1.5);
transition: 0.3s;
}
.overlay .v-image__image:hover{
filter: blur(0px);
transform: scale(1);
transition: 0.3s;
cursor: pointer;
}
</style>
