<template>
  <v-container>
    <v-row v-if="loading" class="text-center" justify="center">
      <v-col cols="3">
        <v-progress-circular indeterminate :size="70" :width="7" color="primary"></v-progress-circular>
      </v-col>
    </v-row>
    <div v-else>
       <v-carousel
        dark
        width="400"
        show-arrows-on-hover
        hide-delimiters
        continuous
        cycle
        interval="10000"
      >
        <v-carousel-item
          v-for="(src,i) in info.images"
          :key="i"
          :src="src"
          transition="scroll-x-transition"
          reverse-transition="scroll-x-reverse-transition"
        >
          <v-container fill-height>
            <v-row align="center">
              <v-col>
                <h2 class="display-3 white-text text-center">{{ info.title }}</h2>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>
      <v-row>
        <v-col cols="12">
            <h2>Description</h2>
            <p>
                {{ info.description }}
            </p>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Display',
  data: () => ({
    info: null,
    loading: true
  }),
  methods: {
    getInfo: async function () {
      let resp = await axios.get('https://arm-art.herokuapp.com/getInfo')
      this.info = resp.data['info']
      this.loading = false
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style scoped>
    .h1{
        font-family: "algerian";
    }
    h2{
        font-family: cursive;
    }
    p{
        font-family: "prociono";
    }
</style>
